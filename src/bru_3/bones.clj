(ns bru-3.bones)

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

(defn lerp-bones [b1 b2 t]
  "Lerps all bone values from bone b1's values to bone b2's values using a given lerp factor t."
  (let [lerp (fn [from to t] (+ from (* (- to from) t)))]
    (reduce #(assoc %1 %2 (lerp (%2 b1) (%2 b2) t)) {} (keys b1))))

(defn bone-endpoints [b ybase]
  (let [{:keys position} b
        xdist (* (/ length 2) (Math/sin (Math/toRadians angle)))
        ydist (* (/ length 2) (Math/cos (Math/toRadians angle)))
        x1 (- position xdist)
        y1 (- ybase ydist)
        x2 (+ position xdist)
        y2 (+ ybase ydist)]
    [x1 y1 x2 y2]))