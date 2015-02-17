(ns bru-3.bone
  (:require [bru-3.decomposition :as d]
            [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v]))

(defrecord Bone [position angle length]
  d/Decomposition
  (vertices [this]
    (let [{[x y] :position length :length angle :angle} this
          xdist (* (/ length 2) (Math/sin (Math/toRadians angle)))
          ydist (* (/ length 2) (Math/cos (Math/toRadians angle)))]
      [[(- x xdist) (- y ydist)] [(+ x xdist) (+ y ydist)]]))
  (edges [this] (d/vertices this)))

(def zero-bone (Bone. (v/vec2 0.0 0.0) 0.0 0.0))

(defn bone [distance-bounds length-bounds max-angle prev-bone]
  (let [{:keys [position angle]} prev-bone
        [min-dist max-dist] distance-bounds
        [min-length max-length] length-bounds
        rand-range (fn [min max] (+ min (rand (- max min))))]
    (Bone.
      (g/+ position (v/vec2 (rand-range min-dist max-dist) 0.0))
      (+ angle (rand-range (- max-angle) max-angle))
      (rand-range min-length max-length))))

(defn gen-bones
  ([distance-bounds length-bounds max-angle]
    (gen-bones distance-bounds length-bounds max-angle zero-bone))
  ([distance-bounds length-bounds max-angle prev-bone]
    (iterate (partial bone distance-bounds length-bounds max-angle) prev-bone)))
