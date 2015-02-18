(ns bru-3.frame
  (:require [bru-3.decomposition :as d]))

(defrecord Frame [tl tr bl br]
  d/Decomposition
  (vertices [this] (vec (map (partial get this) [:tl :tr :bl :br])))
  (edges [this]
    (let [edge (fn [[v1 v2]] (vec (map (partial get this) [v1 v2])))
          pairs [[:tl :tr] [:tr :br] [:br :bl] [:bl :tl]]]
      (map edge pairs))))

(defn from-bones
  "Creates a frame in between the two given bones b1 and b2, using the randomization maximum r to offset the bone
  vertices. r is given as a percentage in the [0, 1] range. When r = 0, there'll be no vertex randomization, and the
  frame will fit exactly between the two bones. For any other value, a random percentage will be added or subtracted
  from the bone lengths, and the frame will be constructed using the resulting shortened/elongated bones."
  [b1 b2 r]
  (let [;; make a function for getting randomized length in [-rp, rp] range
        rand-range (fn [min max] (+ min (rand (- max min))))
        rfn (fn [] (rand-range (- r) r))
        ;; randomize each bone length
        rb1 (update-in b1 [:length] * (rfn))
        rb2 (update-in b2 [:length] * (rfn))]
    ;; TODO: Continue here.
    ))