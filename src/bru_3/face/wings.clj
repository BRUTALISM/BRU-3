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
  [{b :bite in :indent s :sharpness} [[pv _] [v1 h1] [v2 _] [nv _]]]
  (let [piv (g/mix v1 pv b)
        niv (g/mix v2 nv b)]
    (if h1
      [(g/mix v1 v2 in) (g/mix piv niv in) (g/mix v1 v2 (+ in s))]
      [(g/mix v1 v2 in)])))

;(defn cornerverts [])

(defn frame->face [conf [fr l]]
  (let [vs (drop 3 (cycle (d/vertices fr)))
        hs (cycle (holemap l))
        quadruples (fn [xs] (map #(->> xs (take (+ % 4)) (drop %)) (range 4)))
        vhs (partition 2 (interleave vs hs))
        qvhs (quadruples vhs)
        edgefn (fn [coll]
                 (-> [(-> coll second first)]
                     (into (edgeverts conf coll))
                     (into (reverse (edgeverts conf (reverse coll))))))]
    (apply concat (map edgefn qvhs))))
