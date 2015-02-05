(ns bru-3.bones
  (:require [thi.ng.geom.core.vector :as v]))

(def zero-bone
  {:position 0.0
   :angle 0.0
   :length 0.0})

(defn bone [distance-bounds length-bounds max-angle prev-bone]
  (let [{:keys [position angle]} prev-bone
        [min-dist max-dist] distance-bounds
        [min-length max-length] length-bounds
        rand-range (fn [min max] (+ min (rand (- max min))))]
    {:position (+ position (rand-range min-dist max-dist))
     :angle (+ angle (rand-range (- max-angle) max-angle))
     :length (rand-range min-length max-length)}))

(defn gen-bones
  ([distance-bounds length-bounds max-angle]
    (gen-bones distance-bounds length-bounds max-angle zero-bone))
  ([distance-bounds length-bounds max-angle prev-bone]
    (iterate (partial bone distance-bounds length-bounds max-angle) prev-bone)))

;(defn bone
;  ([] [(v/vec2) (v/vec2)])
;  ([v1 v2] [(v/vec2 v1) (v/vec2 v2)])
;  ([x1 y1 x2 y2] [(v/vec2 x1 y1) (v/vec2 x2 y2)]))