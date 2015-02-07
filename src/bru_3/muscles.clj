(ns bru-3.muscles
  (:require [bru-3.bones :as b]))

(defn muscle [bone]
  "Returns a muscle for the given bone. A muscle is a pair of two line segments, stored as hashmaps."
  (let [{:keys position angle length} bone
        [x1 y1 x2 y2] (b/bone-endpoints bone ***STA_OVDE?***)]
    ;; problem je sto muscle mora ili da bude vezan za bone (relativne koordinate), ili da ima apsolutne koordinate.
    ))

(defn muscles [b1 b2]
  "Returns one or more muscles based on given bones."
  ;; TODO: from and to params for the random count
  (let [count (+ 2 (rand-int 3))
        ]
    ))

(defn gen-muscles [bones]
  "Generates muscles out of bones. One or more muscles are generated per bone."
  (let [surr (fn [i] (map (partial + i) [0 1]))
        tuplize (fn [v i] (map (partial get v) (surr i)))
        bone-tuples (map (partial tuplize bones) (range (count bones)))]
    (filter #(not-any? nil? %) (map muscles bone-tuples))))