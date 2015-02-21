(ns bru-3.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [thi.ng.geom.core.vector :as v]
            [bru-3.bone :as b]
            [bru-3.frame :as f]
            [bru-3.decomposition :as d]))

;;
;; Processing-specific display code
;;

(def config
  {;; algo
   :bone-count 10
   :distance-bounds [100 120]
   :length-bounds [20 130]
   :max-angle 20
   :frame-bone-randomization 0.4
   
   ;; presentation
   :dot-size 5
   :draw-bones true
   :draw-frames true})

(defn new-bones []
  (let [initial-bone (bru_3.bone.Bone. (v/vec2 0.0 (/ (q/height) 2)) 0.0 0.0)]
    ;; the first bone is the initial-bone, so we take the rest of 'em
    (rest (take (inc (:bone-count config))
                (b/gen-bones (:distance-bounds config)
                             (:length-bounds config)
                             (:max-angle config)
                             initial-bone)))))

(defn new-frames [bones]
  (let [bone-pairs (map vector bones (rest bones))
        bf (partial f/from-bones (:frame-bone-randomization config))]
    (map (partial apply bf) bone-pairs)))

(defn new-state []
  (let [bones (new-bones)
        frames (new-frames bones)]
    {:bones bones
     :frames frames}))

(defn draw-bone [b]
  (let [[[x1 y1] [x2 y2]] (d/vertices b)
        dot-size (:dot-size config)]
    (q/line x1 y1 x2 y2)
    (q/ellipse x1 y1 dot-size dot-size)
    (q/ellipse x2 y2 dot-size dot-size)))

(defn draw-frame [fr]
  (let [vs (d/vertices fr)
        es (d/edges fr)
        ds (:dot-size config)]
    (q/fill 17 110 191)
    (q/stroke 17 110 191)
    (doseq [[[x1 y1] [x2 y2]] es] (q/line x1 y1 x2 y2))
    (doseq [[x1 y1] vs] (q/ellipse x1 y1 ds ds))))

;;
;; Quil stuff
;;

(defn setup []
  (q/frame-rate 10)
  (new-state))

(defn update [state]
  state)

(defn draw [state]
  (let [bones (:bones state)
        [fx _] (:position (first bones))
        [lx _] (:position (last bones))
        sw (q/width)
        lw (- lx fx)
        xoff (- (/ (- sw lw) 2) fx)]
    (q/background 0)
    (q/fill 255 255 255)
    (q/stroke 255 255 255)
    (q/push-matrix)
    (q/translate xoff 0)
    (when (:draw-bones config)
      (doseq [bone bones] (draw-bone bone)))
    (when (:draw-frames config)
      (doseq [frame (:frames state)] (draw-frame frame)))
    (q/pop-matrix)))

(defn key-pressed [state key-info]
  (case (:key key-info)
    :a (new-state)
    state))

(q/defsketch bru-3
  :title "BRU-3"
  :size [1100 600]
  :setup setup
  :update update
  :draw draw
  :key-pressed key-pressed
  :middleware [m/fun-mode])