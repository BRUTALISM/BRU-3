(ns bru-3.face.wings
  (:require [thi.ng.geom.core :as g]
            [bru-3.decomposition :as d]))

(def letter-map
  {:b #{:right-top}
   :r #{:top-left :right-top}
   :u #{:top-right}
   :t #{:left-top :right-top}
   :a #{:bottom-right}
   :l #{:right-bottom}
   :i #{}
   :s #{:left-bottom :right-top}
   :m #{:bottom-left :right-bottom :top-right :left-top}})

(def clockwise-keys
  [:top-left :top-right
   :right-top :right-bottom
   :bottom-right :bottom-left
   :left-bottom :left-top])

(defn- holemap [l]
  (map #(% (l letter-map)) clockwise-keys))

(def wingtip-variants
  [[:spike :round :round :inverted-spike]            ;; left spikes
   [:spike :round :spike :round]                     ;; top left, bottom right
   [:round :inverted-spike :spike :round]            ;; right spikes
   [:round :inverted-spike :round :inverted-spike]]) ;; top right, bottom left

(defn edgeverts
  [{b :bite in :indent s :sharpness rev :reverse}
   [[pv _] [v1 [h1 _] _] [v2 [h2 _] _] [nv _]]]
  (let [piv (g/mix v1 pv b)
        niv (g/mix v2 nv b)
        h (if rev h2 h1)]
    (if h
      [(g/mix v1 v2 in) (g/mix piv niv in) (g/mix v1 v2 (+ in s))]
      [(g/mix v1 v2 in)])))

(defn cornerverts [{b :bite in :indent} [[p _] [v _ style] [n _]]]
  (if (= style :round)
    [(g/mix v p b) (g/mix v n b)]
    (let [spike (= style :spike)
          pp (if spike p n)
          nn (if spike n p)
          d (g/- v nn)
          l (g/mag d)
          dir (g/normalize d)
          offset (g/* dir (* l in))
          tip (g/+ v offset)
          intro (g/mix (g/mix tip v 2/3) (g/+ pp offset) b)]
      (if spike [intro tip] [tip intro]))))

(defn frame->face [conf [fr l]]
  (let [rconf (assoc conf :reverse true)
        vs (cycle (d/vertices fr))
        hs (cycle (partition 2 (holemap l)))
        ws (cycle (rand-nth wingtip-variants))
        quadruples (fn [xs] (map #(->> xs (take (+ % 4)) (drop %)) (range 4)))
        vhs (partition 3 (interleave vs hs ws))
        qvhs (quadruples vhs)
        rev (fn [coll]
              (reverse (map #(vector (first %) (reverse (second %))) coll)))
        edgefn (fn [coll]
                 (-> (cornerverts conf (subvec (vec coll) 0 3))
                     (into (edgeverts conf coll))
                     (into (reverse (edgeverts rconf (rev coll))))))]
    (apply concat (map edgefn qvhs))))
