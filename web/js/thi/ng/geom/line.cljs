(ns thi.ng.geom.line
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.basicmesh :as bm]
   [thi.ng.geom.types :as types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.math.core :as m :refer [*eps*]]
                                       )
         (:require-macros [thi.ng.macromath.core :as mm])
       
          
                                                      )

(defn line2
  ([[p q]] (thi.ng.geom.types.Line2. [(vec2 p) (vec2 q)]))
  ([p q] (thi.ng.geom.types.Line2. [(vec2 p) (vec2 q)]))
  ([px py qx qy] (thi.ng.geom.types.Line2. [(vec2 px py) (vec2 qx qy)])))

(defn line3
  ([[p q]] (thi.ng.geom.types.Line3. [(vec3 p) (vec3 q)]))
  ([p q] (thi.ng.geom.types.Line3. [(vec3 p) (vec3 q)]))
  ([px py qx qy] (thi.ng.geom.types.Line3. [(vec3 px py) (vec3 qx qy)]))
  ([px py pz qx qy qz] (thi.ng.geom.types.Line3. [(vec3 px py pz) (vec3 qx qy qz)])))

(defn linestrip2
  ([points] (thi.ng.geom.types.LineStrip2. (mapv vec2 points)))
  ([p & more] (thi.ng.geom.types.LineStrip2. (mapv vec2 (cons p more)))))

(defn reflect-on-ray
  [ctor p q rc dir]
  (ctor
   (g/+ rc (g/reflect (g/- p rc) dir))
   (g/+ rc (g/reflect (g/- q rc) dir))))

(defn reflect-on-line
  [ctor p q rp rq]
  (reflect-on-ray ctor p q (g/mix rp rq) (g/normalize (g/- rq rp))))

(extend-type thi.ng.geom.types.Line2
g/PArea
(area [_] 0)
g/PBoundary
(contains-point?
 [{p :points} q] (m/in-range? 0.0 1.0 (gu/closest-point-coeff (vec2 q) (p 0) (p 1))))
g/PBounds
(bounds [_] (tu/bounding-rect (:points _)))
(width  [{p :points}] (m/abs (- ((p 0) 0) ((p 1) 0))))
(height [{p :points}] (m/abs (- ((p 0) 1) ((p 1) 1))))
(depth  [_] 0)
g/PBoundingCircle
(bounding-circle
 [{[p q] :points}]
 (thi.ng.geom.types.Circle2. (g/mix p q) (* 0.5 (g/dist p q))))
g/PCenter
(center
 ([{[p q] :points}]
  (let [c (g/mix p q)]
    (thi.ng.geom.types.Line2. [(g/- p c) (g/- q c)])))
 ([{[p q] :points} o]
  (let [c (g/- o (g/mix p q))]
    (thi.ng.geom.types.Line2. [(g/+ p c) (g/+ q c)]))))
(centroid [{p :points}] (g/mix (p 0) (p 1)))
g/PCircumference
(circumference [{p :points}] (g/dist (p 0) (p 1)))
g/PClassify
(classify-point
 [{[p q] :points} v]
 (m/signum (g/dot (g/- (vec2 v) p) (g/normal (g/- q p))) *eps*))
g/PExtrude
(extrude
 [{points :points :as _}
  {:keys [mesh depth scale offset] :or {depth 1.0 scale 1.0}}]
 (let [tpoints (if (= 1.0 scale) points (:points (g/scale-size _ scale)))
       off     (or offset (vec3 0 0 depth))
       a       (vec3 (points 0))
       b       (vec3 (points 1))
       ta      (g/+ off (tpoints 0))
       tb      (g/+ off (tpoints 1))]
   (g/add-face (or mesh (bm/basic-mesh)) [a b tb ta])))
g/PVertexAccess
(vertices
 ([_] (:points _))
 ([{p :points} res] (gu/sample-segment-with-res (p 0) (p 1) res true)))
g/PEdgeAccess
(edges
 ([_] [(:points _)])
 ([_ res] (d/successive-nth 2 (g/vertices _ res))))
g/PGraph
(vertex-neighbors
 [{[p q] :points} v] (condp = v, p q, q p, nil))
(vertex-valence
 [{p :points} v] (if (or (= v (p 0)) (= v (p 1))) 1 0))
g/PIntersect
(intersect-line
 [{[a b] :points} l]
 (let [[c d] (or (:points l) l)]
   (isec/intersect-line2-line2? a b c d)))
g/PMagnitude
(mag [{p :points}] (g/dist (p 0) (p 1)))
(mag-squared [{p :points}] (g/dist-squared (p 0) (p 1)))
g/PNormalize
(normalize
 ([{[p q] :points}]
    (let [d (g/normalize (g/- q p))]
      (thi.ng.geom.types.Line2. [p (g/+ p d)])))
 ([{[p q] :points} n]
    (let [d (g/normalize (g/- q p) n)]
      (thi.ng.geom.types.Line2. [p (g/+ p d)]))))
(normalized? [_] (m/delta= 1.0 (g/mag-squared _)))
g/PProximity
(closest-point
 [{p :points} q] (gu/closest-point-on-segment (vec2 q) (p 0) (p 1)))
g/PReflect
(reflect
 [{[p q] :points} r]
 (if (instance? thi.ng.geom.types.Line2 r)
   (let [[pr qr] (:points r)] (reflect-on-line line2 p q pr qr))
   (thi.ng.geom.types.Line2. [(g/reflect p r) (g/reflect q r)])))
g/PSample
(point-at
 [{p :points} t] (g/mix (p 0) (p 1) t))
(random-point
 [{p :points}] (g/mix (p 0) (p 1) (m/random)))
(random-point-inside
 [{p :points}] (g/mix (p 0) (p 1) (m/random)))
(sample-uniform
 [_ dist include-last?]
 (gu/sample-uniform dist include-last? (:points _)))
g/PRotate
(rotate
 [{p :points} theta]
 (thi.ng.geom.types.Line2. [(g/rotate (p 0) theta) (g/rotate (p 1) theta)]))
g/PScale
(scale
 ([{p :points} s]
  (thi.ng.geom.types.Line2. [(g/* (p 0) s) (g/* (p 1) s)]))
 ([{p :points} sx sy]
  (thi.ng.geom.types.Line2. [(g/* (p 0) sx sy) (g/* (p 1) sx sy)])))
(scale-size
 [{[p q] :points} s]
 (let [c (g/mix p q)]
   (thi.ng.geom.types.Line2. [(g/madd (g/- p c) s c) (g/madd (g/- q c) s c)])))
g/PTranslate
(translate
 [{p :points} t]
 (thi.ng.geom.types.Line2. [(g/+ (p 0) t) (g/+ (p 1) t)]))
g/PTransform
(transform
 [{p :points} m]
 (thi.ng.geom.types.Line2.
  [(g/transform-vector m (p 0)) (g/transform-vector m (p 1))]))
g/PVolume
(volume [_] 0.0)
)

(extend-type thi.ng.geom.types.Line3
g/PArea
(area [_] 0.0)
g/PBoundary
(contains-point?
 [{p :points} q] (m/in-range? 0.0 1.0 (gu/closest-point-coeff (vec3 q) (p 0) (p 1))))
g/PBounds
(bounds [_] (tu/bounding-box (:points _)))
(width  [{p :points}] (m/abs (- ((p 0) 0) ((p 1) 0))))
(height [{p :points}] (m/abs (- ((p 0) 1) ((p 1) 1))))
(depth  [{p :points}] (m/abs (- ((p 0) 2) ((p 1) 2))))
g/PBoundingSphere
(bounding-sphere
 [{[p q] :points}]
 (tu/bounding-sphere (g/mix p q) (* 0.5 (g/dist p q))))
g/PCenter
(center
 ([{[p q] :points}]
  (let [c (g/mix p q)]
    (thi.ng.geom.types.Line3. [(g/- p c) (g/- q c)])))
 ([{[p q] :points} o]
  (let [c (g/- o (g/mix p q))]
    (thi.ng.geom.types.Line3. [(g/+ p c) (g/+ q c)]))))
(centroid [{p :points}] (g/mix (p 0) (p 1)))
g/PCircumference
(circumference [{p :points}] (g/dist (p 0) (p 1)))
g/PClassify
(classify-point
 [{p :points} p] nil) ; TODO needs normal to define plane to classify
g/PExtrude
(extrude
 [{points :points :as _}
  {:keys [mesh depth scale offset] :or {depth 1.0 scale 1.0}}]
 (let [tpoints (if (= 1.0 scale) points (:points (g/scale-size _ scale)))
       off     (or offset (vec3 0 0 depth))
       a       (vec3 (points 0))
       b       (vec3 (points 1))
       ta      (g/+ off (tpoints 0))
       tb      (g/+ off (tpoints 1))]
   (g/add-face (or mesh (bm/basic-mesh)) [a b tb ta])))
g/PVertexAccess
(vertices
 ([_] (:points _))
 ([{p :points} res] (gu/sample-segment-with-res (p 0) (p 1) res true)))
g/PEdgeAccess
(edges
 ([_] [(:points _)])
 ([_ res] (d/successive-nth 2 (g/vertices _ res))))
g/PGraph
(vertex-neighbors
 [{[p q] :points} v] (condp = v, p q, q p, nil))
(vertex-valence
 [{p :points} v] (if (or (= v (p 0)) (= v (p 1))) 1 0))
g/PIntersect
(intersect-line
 [{[a b] :points} l]
 (let [[c d] (or (:points l) l)]
   (gu/closest-line-between a b c d)))
(intersect-ray [_ r])
(intersect-shape [_ s])
g/PMagnitude
(mag [{p :points}] (g/dist (p 0) (p 1)))
(mag-squared [{p :points}] (g/dist-squared (p 0) (p 1)))
g/PNormalize
(normalize
 ([{[p q] :points}]
    (let [d (g/normalize (g/- q p))]
      (thi.ng.geom.types.Line3. [p (g/+ p d)])))
 ([{[p q] :points} n]
    (let [d (g/normalize (g/- q p) n)]
      (thi.ng.geom.types.Line3. [p (g/+ p d)]))))
(normalized? [_] (m/delta= 1.0 (g/mag-squared _)))
g/PProximity
(closest-point
 [{p :points} q] (gu/closest-point-on-segment (vec3 q) (p 0) (p 1)))
g/PReflect
(reflect
 [{[p q] :points} r]
 (if (instance? thi.ng.geom.types.Line3 r)
   (let [[pr qr] (:points r)] (reflect-on-line line3 p q pr qr))
   (thi.ng.geom.types.Line3. [(g/reflect p r) (g/reflect q r)])))
g/PSample
(point-at
 [{p :points} t] (g/mix (p 0) (p 1) t))
(random-point
 [{p :points}] (g/mix (p 0) (p 1) (m/random)))
(random-point-inside
 [{p :points}] (g/mix (p 0) (p 1) (m/random)))
(sample-uniform
 [_ dist include-last?]
 (gu/sample-uniform dist include-last? (:points _)))
g/PRotate3D
(rotate-x
 [{p :points} theta]
 (thi.ng.geom.types.Line3. [(g/rotate-x (p 0) theta) (g/rotate-x (p 1) theta)]))
(rotate-y
 [{p :points} theta]
 (thi.ng.geom.types.Line3. [(g/rotate-y (p 0) theta) (g/rotate-y (p 1) theta)]))
(rotate-z
 [{p :points} theta]
 (thi.ng.geom.types.Line3. [(g/rotate-z (p 0) theta) (g/rotate-z (p 1) theta)]))
(rotate-around-axis
 [{p :points} axis theta]
 (thi.ng.geom.types.Line3.
  [(g/rotate-around-axis (p 0) axis theta)
   (g/rotate-around-axis (p 1) axis theta)]))
g/PRotate
(rotate
 [{p :points} theta]
 (thi.ng.geom.types.Line3. [(g/rotate (p 0) theta) (g/rotate (p 1) theta)]))
g/PScale
(scale
 ([{p :points} s]
  (thi.ng.geom.types.Line3. [(g/* (p 0) s) (g/* (p 1) s)]))
 ([{p :points} sx sy]
  (thi.ng.geom.types.Line3. [(g/* (p 0) sx sy) (g/* (p 1) sx sy)])))
(scale-size
 [{[p q] :points} s]
 (let [c (g/mix p q)]
   (thi.ng.geom.types.Line3. [(g/madd (g/- p c) s c) (g/madd (g/- q c) s c)])))
g/PTranslate
(translate
 [{p :points} t]
 (thi.ng.geom.types.Line3. [(g/+ (p 0) t) (g/+ (p 1) t)]))
g/PTransform
(transform
 [{p :points} m]
 (thi.ng.geom.types.Line3.
  [(g/transform-vector m (p 0)) (g/transform-vector m (p 1))]))
g/PVolume
(volume [_] 0.0)
)

(extend-type thi.ng.geom.types.LineStrip2
g/PArea
(area [_] 0.0)
g/PBoundary
(contains-point? [_ a])
g/PBounds
(bounds [_] (tu/bounding-rect (:points _)))
(width [_] (gu/axis-range 0 (:points _)))
(height [_] (gu/axis-range 1 (:points _)))
(depth [_] 0)
g/PBoundingCircle
(bounding-circle
 [_] (tu/bounding-circle (g/centroid _) (:points _)))
g/PCenter
(center
 ([_] (thi.ng.geom.types.LineStrip2. (gu/center (vec2) (:points _))))
 ([_ o] (thi.ng.geom.types.LineStrip2. (gu/center (g/centroid _) (vec2 o) (:points _)))))
(centroid
 [_] (gu/centroid (:points _)))
g/PCircumference
(circumference
 [_] (g/mag _))
g/PClassify
(classify-point [_ v])
g/PExtrude
(extrude
 [{:keys [points] :as _}
  {:keys [mesh depth offset scale] :or {depth 1.0 scale 1.0}}]
 (let [tpoints (if (= 1.0 scale) points (:points (g/scale-size _ scale)))
       off     (or offset (vec3 0 0 depth))
       bottom  (mapv vec3 points)
       top     (mapv #(g/+ off %) tpoints)]
   (g/into
    (or mesh (bm/basic-mesh))
    (mapcat
     (fn [[a1 a2] [b1 b2]] [[a1 b1 b2 a2]])
     (d/successive-nth 2 bottom)
     (d/successive-nth 2 top)))))
g/PVertexAccess
(vertices
 ([_] (:points _))
 ([{points :points} res]
    (map #(gu/point-at % points) (m/norm-range res)))) ;; TODO transduce
g/PEdgeAccess
(edges
 ([_] (d/successive-nth 2 (:points _)))
 ([_ res] (d/successive-nth 2 (g/vertices _ res))))
g/PGraph
(vertex-neighbors
 [_ v] (d/neighbors v (:points _)))
(vertex-valence
 [{points :points} v]
 (if-let [p (d/neighbors v points)]
   (if (= (first points) (peek points))
     2
     (if (or (= p (first points)) (= p (peek points)))
       1 2))
   0))
g/PIntersect
(intersect-line [_ l])
g/PMagnitude
(mag
 [_] (d/reduce-pairs + g/dist (:points _)))
(mag-squared
 [_] (d/reduce-pairs + g/dist-squared (:points _)))
g/PReflect
(reflect
 [_ r]
 (thi.ng.geom.types.LineStrip2. (mapv #(g/reflect % r) (:points _))))
g/PSample
(point-at
 [_ t] (gu/point-at t (:points _) nil))
(random-point
 [_] (gu/point-at (m/random) (:points _) nil))
(random-point-inside
 [_] (g/random-point _))
(sample-uniform
 [_ udist include-last?]
 (gu/sample-uniform udist include-last? (:points _)))
g/PRotate
(rotate
 [_ theta]
 (thi.ng.geom.types.LineStrip2. (mapv #(g/rotate % theta) (:points _))))
g/PScale
(scale
 ([_ s]
    (thi.ng.geom.types.LineStrip2. (mapv #(g/* % s) (:points _))))
 ([_ sx sy]
    (thi.ng.geom.types.LineStrip2. (mapv #(g/* % sx sy) (:points _)))))
(scale-size
 [_ s]
 (thi.ng.geom.types.LineStrip2. (gu/scale-size s (:points _))))
g/PTranslate
(translate
 [_ t]
 (thi.ng.geom.types.LineStrip2. (mapv #(g/+ % t) (:points _))))
g/PTransform
(transform
 [_ m]
 (thi.ng.geom.types.LineStrip2. (mapv #(g/transform-vector m %) (:points _))))
g/PVolume
(volume [_] 0.0)
)

(extend-type thi.ng.geom.types.LineStrip3
g/PArea
(area [_] 0.0)
g/PBoundary
(contains-point? [_ a])
g/PBounds
(bounds [_] (tu/bounding-box (:points _)))
(width [_] (gu/axis-range 0 (:points _)))
(height [_] (gu/axis-range 1 (:points _)))
(depth [_] (gu/axis-range 2 (:points _)))
g/PBoundingSphere
(bounding-sphere
 [_] (tu/bounding-sphere (g/centroid _) (:points _)))
g/PCenter
(center
 ([_] (thi.ng.geom.types.LineStrip3. (gu/center (vec3) (:points _))))
 ([_ o] (thi.ng.geom.types.LineStrip3. (gu/center (g/centroid _) (vec3 o) (:points _)))))
(centroid
 [_] (gu/centroid (:points _)))
g/PCircumference
(circumference
 [_] (g/mag _))
g/PClassify
(classify-point [_ v])
g/PExtrude
(extrude
 [{:keys [points] :as _}
  {:keys [mesh depth offset scale] :or {depth 1.0 scale 1.0}}]
 (let [tpoints (if (= 1.0 scale) points (:points (g/scale-size _ scale)))
       off     (or offset (vec3 0 0 depth))
       top     (mapv #(g/+ off %) tpoints)]
   (g/into
    (or mesh (bm/basic-mesh))
    (mapcat
     (fn [[a1 a2] [b1 b2]] [[a1 b1 b2 a2]])
     (d/successive-nth 2 points)
     (d/successive-nth 2 top)))))
g/PVertexAccess
(vertices
 ([_] (:points _))
 ([{points :points} res]
    (map #(gu/point-at % points) (m/norm-range res)))) ;; TODO transduce
g/PEdgeAccess
(edges
 ([_] (d/successive-nth 2 (:points _)))
 ([_ res] (d/successive-nth 2 (g/vertices _ res))))
g/PGraph
(vertex-neighbors
 [_ v] (d/neighbors v (:points _)))
(vertex-valence
 [{points :points} v]
 (if-let [p (d/neighbors v points)]
   (if (= (first points) (peek points))
     2
     (if (or (= p (first points)) (= p (peek points)))
       1 2))
   0))
g/PIntersect
(intersect-line [_ l])
g/PMagnitude
(mag
 [_] (d/reduce-pairs + g/dist (:points _)))
(mag-squared
 [_] (d/reduce-pairs + g/dist-squared (:points _)))
g/PReflect
(reflect
 [_ r]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/reflect % r) (:points _))))
g/PSample
(point-at
 [_ t] (gu/point-at t (:points _) nil))
(random-point
 [_] (gu/point-at (m/random) (:points _) nil))
(random-point-inside
 [_] (g/random-point _))
(sample-uniform
 [_ udist include-last?]
 (gu/sample-uniform udist include-last? (:points _)))
g/PRotate
(rotate-around-axis
 [_ axis theta]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/rotate-around-axis % axis theta) (:points _))))
(rotate-x
 [_ theta]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/rotate-x % theta) (:points _))))
(rotate-y
 [_ theta]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/rotate-y % theta) (:points _))))
(rotate-z
 [_ theta]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/rotate-z % theta) (:points _))))
g/PScale
(scale
 ([_ s]
  (thi.ng.geom.types.LineStrip3. (mapv #(g/* % s) (:points _))))
 ([_ sx sy]
  (thi.ng.geom.types.LineStrip3. (mapv #(g/* % sx sy) (:points _)))))
(scale-size
 [_ s]
 (thi.ng.geom.types.LineStrip3. (gu/scale-size s (:points _))))
g/PTranslate
(translate
 [_ t]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/+ % t) (:points _))))
g/PTransform
(transform
 [_ m]
 (thi.ng.geom.types.LineStrip3. (mapv #(g/transform-vector m %) (:points _))))
g/PVolume
(volume [_] 0.0)
)

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/line.cljx
