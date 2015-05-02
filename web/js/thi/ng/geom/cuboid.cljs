(ns thi.ng.geom.cuboid
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec3]]
   [thi.ng.geom.basicmesh :as bm]
   [thi.ng.geom.plane :as p]
   [thi.ng.geom.types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps*]]
                                       )
         (:require-macros [thi.ng.macromath.core :as mm])
       
          
                                          )

(defn cuboid
  ([] (cuboid 1.0))
  ([a b c d e f g h]
     (thi.ng.geom.types.Cuboid. (mapv vec3 [a b c d e f g h])))
  ([x]
     (cond
      (number? x)     (cuboid (vec3) x)
      (map? x)        (cuboid (:p x) (:size x))
      (sequential? x) (if (== 8 (count x))
                        (thi.ng.geom.types.Cuboid. (mapv vec3 x))
                        (err/illegal-arg!
                         "Wrong number of points, expected 8 but got"
                         (count x)))
      :default        (err/illegal-arg! x)))
  ([o size]
     (let [[x1 y1 z1 :as a] (vec3 o)
           [x2 y2 z2 :as g] (g/+ a size)
           b (vec3 x1 y1 z2) c (vec3 x2 y1 z2)
           d (vec3 x2 y1 z1) e (vec3 x1 y2 z1)
           f (vec3 x1 y2 z2) h (vec3 x2 y2 z1)]
       (thi.ng.geom.types.Cuboid. [a b c d e f g h]))))




(extend-type thi.ng.geom.types.Cuboid
g/PArea
(area
 [_] (transduce (map #(apply gu/tri-area3 %)) + (g/tessellate _)))
g/PBounds
(bounds [_] (tu/bounding-box (:points _)))
(width [_] (gu/axis-range 0 (:points _)))
(height [_] (gu/axis-range 1 (:points _)))
(depth [_] (gu/axis-range 2 (:points _)))
g/PBoundingSphere
(bounding-sphere
 [_] (tu/bounding-sphere (g/centroid _) (:points _)))
g/PBoundary
(contains-point?
 [_ p] (>= (g/classify-point _ p) 0))
g/PCenter
(center
 ([_] (thi.ng.geom.types.Cuboid. (gu/center (vec3) (:points _))))
 ([_ o] (thi.ng.geom.types.Cuboid. (gu/center (g/centroid _) (vec3 o) (:points _)))))
(centroid
 [_] (gu/centroid (:points _)))
g/PClassify
(classify-point
 [_ p]
 (- (reduce
     (fn [c f]
       (let [c' (g/classify-point (p/plane-from-points f) p)]
         (if (pos? c') (reduced c') (max c c'))))
     -1.0 (g/faces _))))
g/PVertexAccess
(vertices
 [_] (:points _))
g/PEdgeAccess
(edges
 [_]
 (let [[a b c d e f g h] (:points _)]
   [[a b] [b c] [c d] [d a] ;; bottom
    [e f] [f g] [g h] [h e] ;; top
    [a e] [b f]             ;; left
    [c g] [d h]             ;; right
    ]))
g/PFaceAccess
(faces
 [_]
 (let [[a b c d e f g h] (:points _)]
   [[c d h g]
    [a b f e]
    [e f g h]
    [a d c b]
    [b c g f]
    [a e h d]]))
g/PIntersect
(intersect-shape
 [_ s])
g/PMeshConvert
(as-mesh
 ([_] (g/as-mesh _ {}))
 ([_ {:keys [mesh flags] :or {flags "nsewfb"}}]
    (let [[a b c d e f g h] (g/vertices _)
          [tp bt rt lf fr bk] (d/demunge-flags-seq flags "nsewfb")]
      (->> [(if fr [b c g f])
            (if bk [a e h d])
            (if lf [a b f e])
            (if rt [c d h g])
            (if tp [e f g h])
            (if bt [a d c b])]
           (eduction (filter identity))
           (g/into (or mesh (bm/basic-mesh)))))))
g/PPointMap
(map-point
 [_ p])
(unmap-point
  [_ p]
  (gu/map-trilinear (:points _) p))
g/PProximity
(closest-point
 [_ p]
 (->> (g/faces _)
      (reduce
       (fn [acc f]
         (let [p' (g/closest-point (p/plane-from-points f) p)
               d (g/dist-squared p p')]
           (prn p' d)
           (if (< d (acc 1)) [p' d] acc)))
       [nil 1e+100])
      (first)))
g/PSample
(random-point-inside
 [{p :p size :size}]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)]
   (vec3 (m/random x1 x2) (m/random y1 y2) (m/random z1 z2))))
(random-point
 [{p :p size :size}]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)
       id (int (m/random 6))]
   (cond
    (< id 2) (vec3 (if (zero? id) x1 x2) (m/random y1 y2) (m/random z1 z2))
    (< id 4) (vec3 (m/random x1 x2) (if (= 2 id) y1 y2) (m/random z1 z2))
    :default (vec3 (m/random x1 x2) (m/random y1 y2) (if (= 4 id) z1 z2)))))
g/PSubdivide
(subdivide
 ([_] (g/subdivide _ {}))
 ([{points :points} {:keys [num cols rows slices] :or {num 1}}]
    (let [ru (d/successive-nth 2 (m/norm-range (or cols num)))
          rv (d/successive-nth 2 (m/norm-range (or rows num)))
          rw (d/successive-nth 2 (m/norm-range (or slices num)))
          map-p (fn [p]
                  (->> (gu/map-trilinear points p)
                       (mapv #(m/roundto % *eps*))
                       (vec3)))]
      (for [[w1 w2] rw, [v1 v2] rv, [u1 u2] ru]
        (thi.ng.geom.types.Cuboid.
         (mapv map-p [[u1 v1 w1] [u1 v1 w2] [u2 v1 w2] [u2 v1 w1]
                      [u1 v2 w1] [u1 v2 w2] [u2 v2 w2] [u2 v2 w1]]))))))
g/PTessellate
(tessellate
 ([_] (g/tessellate _ {}))
 ([_ {f :fn :or {f gu/tessellate-3} :as opts}]
    (->> (if (some #{:num :cols :rows :slices} (keys opts))
           (g/subdivide _ opts)
           [_])
         (sequence
          (comp
           (mapcat g/faces)
           (mapcat f))))))
g/PRotate
(rotate
 [_ theta] (g/rotate-z _ theta))
g/PRotate3D
(rotate-x
 [_ theta]
 (thi.ng.geom.types.Cuboid. (mapv #(g/rotate-x % theta) (:points _))))
(rotate-y
 [_ theta]
 (thi.ng.geom.types.Cuboid. (mapv #(g/rotate-y % theta) (:points _))))
(rotate-z
 [_ theta]
 (thi.ng.geom.types.Cuboid. (mapv #(g/rotate-z % theta) (:points _))))
(rotate-around-axis
 [_ axis theta]
 (thi.ng.geom.types.Cuboid.
  (mapv #(g/rotate-around-axis % axis theta) (:points _))))
g/PScale
(scale
 ([_ s]
    (thi.ng.geom.types.Cuboid. (mapv #(g/* % s) (:points _))))
 ([_ sx sy]
    (thi.ng.geom.types.Cuboid. (mapv #(g/* % sx sy) (:points _))))
 ([_ sx sy sz]
    (thi.ng.geom.types.Cuboid. (mapv #(g/* % sx sy sz) (:points _)))))
(scale-size
 [_ s] (thi.ng.geom.types.Cuboid. (gu/scale-size s (:points _))))
g/PTranslate
(translate
 [_ t]
 (thi.ng.geom.types.Cuboid. (mapv #(g/+ % t) (:points _))))
g/PTransform
(transform
 [_ m]
 (thi.ng.geom.types.Cuboid. (mapv #(g/transform-vector m %) (:points _))))
g/PVolume
(volume [_] 0)
)

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/cuboid.cljx
