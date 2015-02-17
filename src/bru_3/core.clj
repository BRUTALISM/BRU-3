(ns bru-3.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [thi.ng.geom.core.vector :as v]
            [bru-3.bone :as b]
            [bru-3.decomposition :as d]))

;;
;; Processing-specific display code
;;

(def config
  {:bone-count 9
   :distance-bounds [40 140]
   :length-bounds [250 350]
   :max-angle 10})

(defn new-bones []
  (let [initial-bone (bru_3.bone.Bone. (v/vec2 0.0 (/ (q/height) 2)) 0.0 0.0)]
    ;; the first bone is the initial-bone, so we take the rest of 'em
    {:bones (rest (take (+ 1 (:bone-count config))
                        (b/gen-bones (:distance-bounds config)
                                     (:length-bounds config)
                                     (:max-angle config)
                                     initial-bone)))}))

(defn draw-bone [b]
  (let [[[x1 y1] [x2 y2]] (d/vertices b)
        dot-size 5]
    (q/line x1 y1 x2 y2)
    (q/ellipse x1 y1 dot-size dot-size)
    (q/ellipse x2 y2 dot-size dot-size)))

;;
;; Quil stuff
;;

(defn setup []
  (q/frame-rate 10)
  (new-bones))

(defn update [state]
  (if (and (q/key-pressed?) (= :a (q/key-as-keyword)))
    (new-bones)
    state))

(defn draw [state]
  (q/background 0)
  (q/fill 255 255 255)
  (q/stroke 255 255 255)
  (doseq [bone (:bones state)] (draw-bone bone)))

(q/defsketch bru-3
  :title "BRU-3"
  :size [1100 600]
  :setup setup
  :update update
  :draw draw
  :middleware [m/fun-mode])