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
   :m #{:bottom-left :bottom-right}})

(def clockwise-keys
  [:top-left :top-right
   :right-top :right-bottom
   :bottom-right :bottom-left
   :left-bottom :left-top])

(defn- holemap [l]
  (map #(% (l letter-map)) clockwise-keys))

(defn edgeverts
  [{b :bite in :indent s :sharpness rev :reverse}
   [[pv _] [v1 [h1 _]] [v2 [h2 _]] [nv _]]]
  (let [piv (g/mix v1 pv b)
        niv (g/mix v2 nv b)
        h (if rev h2 h1)]
    (if h
      [(g/mix v1 v2 in) (g/mix piv niv in) (g/mix v1 v2 (+ in s))]
      [(g/mix v1 v2 in)])))

;(defn cornerverts [])

(defn frame->face [conf [fr l]]
  (let [rconf (assoc conf :reverse true)
        vs (cycle (d/vertices fr))
        hs (cycle (partition 2 (holemap l)))
        quadruples (fn [xs] (map #(->> xs (take (+ % 4)) (drop %)) (range 4)))
        vhs (partition 2 (interleave vs hs))
        qvhs (quadruples vhs)
        rev (fn [coll]
              (reverse (map #(vector (first %) (reverse (second %))) coll)))
        edgefn (fn [coll]
                 (-> [(-> coll second first)]
                     (into (edgeverts conf coll))
                     (into (reverse (edgeverts rconf (rev coll))))))]
    (apply concat (map edgefn qvhs))))
