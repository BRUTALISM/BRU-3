(ns bru-3.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [thi.ng.geom.core.vector :as v]
            [bru-3.bones :as b]))

;;
;; Processing-specific display code
;;

(def config
  {:bone-count 7
   :distance-bounds [90 150]
   :length-bounds [60 120]
   :max-angle 30})

(defn new-bones []
  {:bones (rest (take (:bone-count config)
                      (b/gen-bones (:distance-bounds config) (:length-bounds config) (:max-angle config))))})

(defn draw-bone [b]
  (let [{:keys [position angle length]} b
        ybase (/ (q/height) 2)
        xdist (* (/ length 2) (Math/sin (Math/toRadians angle)))
        ydist (* (/ length 2) (Math/cos (Math/toRadians angle)))
        x1 (- position xdist)
        y1 (- ybase ydist)
        x2 (+ position xdist)
        y2 (+ ybase ydist)
        dot-size 5]
    (q/line x1 y1 x2 y2)
    (q/ellipse x1 y1 dot-size dot-size)
    (q/ellipse x2 y2 dot-size dot-size)))

;;
;; Quil stuff
;;

(defn setup []
  (q/frame-rate 1)
  (new-bones))

(defn update [state]
  (new-bones))

(defn draw [state]
  (q/background 0)
  (q/fill 255 255 255)
  (q/stroke 255 255 255)
  (doseq [bone (:bones state)] (draw-bone bone)))

(q/defsketch bru-3
  :title "BRU-3"
  :size [1000 200]
  :setup setup
  :update update
  :draw draw
  :middleware [m/fun-mode])