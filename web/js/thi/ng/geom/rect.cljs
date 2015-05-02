(ns thi.ng.geom.rect
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.aabb :as a]
   [thi.ng.geom.basicmesh :as bm]
   [thi.ng.geom.types :as types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps*]]
                                       )
         (:require-macros [thi.ng.macromath.core :as mm])
       
          
                                              )

(defn rect
  ([] (thi.ng.geom.types.Rect2. (vec2) (vec2 1.0)))
  ([w] (thi.ng.geom.types.Rect2. (vec2) (vec2 w)))
  ([p q]
     (if (coll? p)
       (if (coll? q)
         (let [p (vec2 p) q (vec2 q)
               [p q] [(g/min p q) (g/max p q)]]
           (thi.ng.geom.types.Rect2. p (g/- q p)))
         (thi.ng.geom.types.Rect2. (vec2 p) (vec2 q)))
       (thi.ng.geom.types.Rect2. (vec2) (vec2 p q))))
  ([x y w]
     (if (number? x)
       (thi.ng.geom.types.Rect2. (vec2 x y) (vec2 w))
       (thi.ng.geom.types.Rect2. (vec2 x) (vec2 y w))))
  ([x y w h] (thi.ng.geom.types.Rect2. (vec2 x y) (vec2 w h))))

(defn union
  [{p :p [w h] :size} {q :p [qw qh] :size}]
  (let [[x1 y1 :as p'] (g/min p q)
        x2 (max (+ (p 0) w) (+ (q 0) qw))
        y2 (max (+ (p 1) h) (+ (q 1) qh))
        w (- x2 x1)
        h (- y2 y1)]
    (thi.ng.geom.types.Rect2. p' (vec2 w h))))

(defn left [r] ((:p r) 0))
(defn right [r] (+ ((:p r) 0) ((:size r) 0)))
(defn bottom [r] ((:p r) 1))
(defn bottom-left [r] (:p r))
(defn top [r] (+ ((:p r) 1) ((:size r) 1)))
(defn top-right [r] (g/+ (:p r) (:size r)))

(extend-type thi.ng.geom.types.Rect2
g/PArea
(area [_] (reduce * (:size _)))
g/PBoundary
(contains-point?
 [{[px py] :p [w h] :size} [x y]]
 (and (m/in-range? 0.0 w (- x px)) (m/in-range? 0.0 h (- y py))))
g/PBounds
(bounds[_] _)
(width  [_] ((:size _) 0))
(height [_] ((:size _) 1))
(depth  [_] 0)
g/PBoundingCircle
(bounding-circle
 [_]
 (let [c (g/centroid _)]
   (tu/bounding-circle c (g/dist c (:p _)))))
g/PCenter
(center
 ([{s :size}]
    (thi.ng.geom.types.Rect2. (g/* s -0.5) s))
 ([{s :size} o]
    (thi.ng.geom.types.Rect2. (g/madd s -0.5 o) s)))
(centroid
 [_] (g/madd (:size _) 0.5 (:p _)))
g/PCircumference
(circumference [_] (* 2.0 (reduce + (:size _))))
g/PClassify
(classify-point
 [_ q]
 (transduce
  (map #(m/signum (apply gu/closest-point-coeff q %) *eps*))
  min
  (g/edges _)))
g/PExtrude
(extrude
 [_ {:keys [depth scale offset] :or {depth 1.0 scale 1.0} :as opts}]
 (if (and (== scale 1.0) (nil? offset))
   (g/as-mesh
    (thi.ng.geom.types.AABB. (vec3 (:p _)) (conj (:size _) depth)) (:mesh opts))
   (g/extrude (g/as-polygon _) opts)))
(extrude-shell
 [_ opts] (g/extrude-shell (g/as-polygon _) opts))
g/PVertexAccess
(vertices
 [_]
 (let [a (:p _)
       c (g/+ a (:size _))]
   [a (vec2 (c 0) (a 1)) c (vec2 (a 0) (c 1))]))
g/PEdgeAccess
(edges
 [_] (let [a (:p _)
           c (g/+ a (:size _))
           b (vec2 (c 0) (a 1))
           d (vec2 (a 0) (c 1))]
       [[a b] [b c] [c d] [d a]]))
g/PGraph
(vertex-neighbors
 [_ v] (d/neighbors (vec2 v) (g/vertices _)))
(vertex-valence
 [_ v] (if ((set (g/vertices _)) (vec2 v)) 2 0))
g/PIntersect
(intersect-line
 [_ {[p q] :points}]
 (if (and (g/contains-point? _ p) (g/contains-point? _ q))
   {:type :coincident}
   (isec/intersect-line2-edges? p q (g/edges _))))
(intersect-ray
 ([_ ray]
  (let [[p dir] (if (map? ray) [(:p ray) (:dir ray)] ray)]
    (isec/intersect-ray2-edges? p dir (g/edges _))))
 ([_ p dir]
  (isec/intersect-ray2-edges? p dir (g/edges _))))
(intersect-shape
 [_ s]
 (cond
   (instance? thi.ng.geom.types.Line2 s) (g/intersect-line _ s)
   (instance? thi.ng.geom.types.Rect2 s) (isec/intersect-rect-rect? _ s)
   (instance? thi.ng.geom.types.Circle2 s) (isec/intersect-aabb-sphere? _ s)
   :default (err/unsupported! (str "can't intersect w/ " s))))
g/PMeshConvert
(as-mesh
 ([_] (g/as-mesh _ {}))
 ([_ opts]
    (g/add-face
     (or (:mesh opts) (bm/basic-mesh))
     (mapv vec3 (g/vertices _)))))
g/PPointMap
(map-point
 [{:keys [p size]} q]
 (vec2
  (mm/subdiv (q 0) (p 0) (size 0))
  (mm/subdiv (q 1) (p 1) (size 1))))
(unmap-point
 [_ q] (g/madd q (:size _) (:p _)))
g/PPolygonConvert
(as-polygon
 [_] (thi.ng.geom.types.Polygon2. (g/vertices _)))
g/PProximity
(closest-point
 [_ p]
 (first (gu/closest-point-on-segments p (g/edges _))))
g/PSample
(point-at
 [_ t] (gu/point-at t (conj (g/vertices _) (:p _))))
(random-point
 [_] (g/point-at _ (m/random)))
(random-point-inside
 [_] (g/+ (:p _) (m/random ((:size _) 0)) (m/random ((:size _) 1))))
(sample-uniform
 [_ udist include-last?]
 (gu/sample-uniform udist include-last? (conj (g/vertices _) (:p _))))
g/PSetOps
(union
 [{pa :p sa :size} {pb :p sb :size}]
  (let [p (g/min pa pb)]
    (thi.ng.geom.types.Rect2. p (g/- (g/max (g/+ pa sa) (g/+ pb sb)) p))))
(intersection
 [_ r]
 (let [pa (:p _) qa (g/+ pa (:size _))
       pb (:p r) qb (g/+ pb (:size r))
       p' (g/max pa pb)
       q' (g/min qa qb)
       s  (g/- q' p')]
   (if (every? #(>= % 0) s)
     (thi.ng.geom.types.Rect2. p' s))))
g/PSubdivide
(subdivide
 ([_] (g/subdivide _ {}))
 ([_ {:keys [num cols rows] :or {num 2}}]
    (let [dx (/ 1.0 (or cols num))
          dy (/ 1.0 (or rows num))
          rx (range 0.0 1.0 dx)
          ry (range 0.0 1.0 dy)
          s (g/* (:size _) dx dy)]
      (for [y ry x rx
            :let [[px py] (g/unmap-point _ (vec2 x y))
                  px (m/roundto px *eps*)
                  py (m/roundto py *eps*)]]
        (thi.ng.geom.types.Rect2. (vec2 px py) s)))))
g/PTessellate
(tessellate
 ([_]
  (let [[a b c d] (g/vertices _)]
    [(thi.ng.geom.types.Triangle2. [a b c])
     (thi.ng.geom.types.Triangle2. [a c d])]))
 ([_ {tess-fn :fn :or {tess-fn gu/tessellate-3} :as opts}]
  (->> (g/subdivide _ opts)
       (sequence
        (comp
         (mapcat #(tess-fn (g/vertices %)))
         (map #(thi.ng.geom.types.Triangle2. %)))))))
g/PRotate
(rotate
 [_ m] (g/rotate (g/as-polygon _) m))

g/PScale
(scale
 ([_ s]
    (thi.ng.geom.types.Rect2.
     (g/* (:p _) s) (g/* (:size _) s)))
 ([_ a b]
    (thi.ng.geom.types.Rect2.
     (g/* (:p _) a b) (g/* (:size _) a b))))
(scale-size
 [_ s]
 (let [s' (g/* (:size _) s)]
   (thi.ng.geom.types.Rect2.
    (g/madd s' -0.5 (g/centroid _)) s')))

g/PTranslate
(translate
 [_ t] (thi.ng.geom.types.Rect2. (g/+ (:p _) t) (:size _)))

g/PTransform
(transform
 [_ m] (g/transform (g/as-polygon _) m))
g/PVolume
(volume [_] 0.0)
)

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/rect.cljx
