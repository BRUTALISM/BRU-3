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

(defn edgeverts [{b :bite in :indent s :sharpness} [pv v1 v2 nv]]
  (let [piv (g/mix v1 pv b)
        niv (g/mix v2 nv b)]
    [(g/mix v1 v2 in)
     (g/mix piv niv in)
     (g/mix v1 v2 (+ in s))]))

;(defn cornerverts [])

(defn frame->face [conf fr]
  (let [vs (cycle (d/vertices fr))
        quadruples (map #(->> vs (take (+ % 4)) (drop %)) (range 4))
        edgefn (fn [verts]
                 (-> [(nth verts 1)]
                     (into (edgeverts conf verts))
                     (into (reverse (edgeverts conf (reverse verts))))))]
    (apply concat (map edgefn quadruples))))
