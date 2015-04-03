(ns bru-3.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [thi.ng.geom.core :as g]
            [thi.ng.geom.rect :as r]
            [thi.ng.geom.core.vector :as v]
            [bru-3.bone :as b]
            [bru-3.frame :as f]
            [bru-3.decomposition :as d]
            [bru-3.face.wings :as w]
            [bru-3.geometry.distortion :as distortion]
            [bru-3.geometry.fault :as fault]))

;;
;; @config
;;

(def config (atom {;; algo
                   :bone-count 10
                   :distance-bounds [80 120]
                   :length-bounds [60 130]
                   :max-angle 20
                   :frame-bone-randomization 0.3
                   :wings-conf {:bite 1/30
                                :indent 1/3
                                :sharpness 1/9}

                   :distortion-intensity 60
                   :distortion-xresolution 10
                   :distortion-yresolution 4

                   ;; presentation
                   :dot-size 5
                   :distortion-field-step 50.0
                   :draw-bones false
                   :draw-frames false
                   :draw-wings true
                   :draw-fault true
                   :draw-distortion false}))

(defn flip [k]
  (let [v (not (k @config))]
    (reset! config (assoc @config k v))))

;;
;; State generation
;;

(defn new-bones []
  (let [initial-bone (bru_3.bone.Bone. (v/vec2 0.0 (/ (q/height) 2)) 0.0 0.0)]
    ;; the first bone is the initial-bone, so we take the rest of 'em
    (rest (take (inc (:bone-count @config))
                (b/gen-bones (:distance-bounds @config)
                             (:length-bounds @config)
                             (:max-angle @config)
                             initial-bone)))))

(defn new-frames [bones]
  (let [bone-pairs (map vector bones (rest bones))
        bf (partial f/from-bones (:frame-bone-randomization @config))]
    (map (partial apply bf) bone-pairs)))

(defn new-wings [frames df]
  (let [di (:distortion-intensity @config)
        letters [:b :r :u :t :a :l :i :s :m]
        wings (map (partial w/frame->face (:wings-conf @config))
                   (partition 2 (interleave frames letters)))
        vfn (fn [v]
              (let [[x y] v]
                (g/+ v (g/* (distortion/vec-at df x y (q/width) (q/height))
                            di))))]
    (map #(map vfn %) wings)))

(defn new-distortion-field [fl]
  (let [xres (:distortion-xresolution @config)
        yres (:distortion-yresolution @config)
        xscale (/ (q/width) xres)
        yscale (/ (q/height) yres)]
    (distortion/field xres yres fl xscale yscale)))

(defn new-fault-line []
  (fault/fault-line (r/rect 0 0 (q/width) (q/height)) 10))

(defn new-state []
  (let [bones (new-bones)
        frames (new-frames bones)
        fault (new-fault-line)
        distortion (new-distortion-field fault)
        wings (new-wings frames distortion)]
    {:bones bones
     :frames frames
     :wings wings
     :fault fault
     :distortion distortion}))

;;
;; Drawing
;;

(defn draw-bone [b]
  (let [[[x1 y1] [x2 y2]] (d/vertices b)
        dot-size (:dot-size @config)]
    (q/line x1 y1 x2 y2)
    (q/ellipse x1 y1 dot-size dot-size)
    (q/ellipse x2 y2 dot-size dot-size)))

(defn draw-frame [fr]
  (let [vs (d/vertices fr)
        es (d/edges fr)
        ds (:dot-size @config)]
    (q/fill 17 110 191)
    (q/stroke 17 110 191)
    (doseq [[[x1 y1] [x2 y2]] es] (q/line x1 y1 x2 y2))
    (doseq [[x1 y1] vs] (q/ellipse x1 y1 ds ds))))

(defn draw-verts [verts]
  (q/begin-shape)
  (doseq [[x y] verts] (q/vertex x y))
  (q/end-shape :close))

(defn draw-vector [x1 y1 x2 y2]
  (let [ds (:dot-size @config)]
    (q/line x1 y1 x2 y2)
    (q/ellipse x2 y2 ds ds)))

(defn draw-fault [fl]
  (q/push-style)
  (q/stroke-weight 2)
  (q/stroke 10 180 10)
  (doseq [{[[x1 y1] [x2 y2]] :points} fl]
    (q/line x1 y1 x2 y2))
  (q/pop-style))

(defn draw-distortion [df]
  (let [step (:distortion-field-step @config)
        intensity (:distortion-intensity @config)
        xmax (inc (q/width))
        ymax (inc (q/height))]
    (q/push-style)
    (q/fill 242 53 53)
    (q/stroke 242 53 53)
    (doseq [x (range 0 xmax step)
            y (range 0 ymax step)
            :let [[x1 y1] (g/+ (g/* (distortion/vec-at df x y xmax ymax)
                                    intensity)
                               (v/vec2 x y))]]
      (draw-vector x y x1 y1))
;;     (q/fill 255 32 32)
;;     (q/stroke 255 32 32)
;;     (doseq [i (range (count df))
;;             j (range (count (first df)))
;;             :let [xstep (/ (q/width) (count df))
;;                   ystep (/ (q/height) (count (first df)))]]
;;       (q/ellipse (* i xstep) (* j ystep) 8 8))
    (q/pop-style)))

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
    ;;(q/background 128)
    (q/background 225)
    (q/fill 255 255 255)
    (q/stroke 255 255 255)
    (q/push-matrix)
    ;(q/translate xoff 0)
    (when (:draw-bones @config)
      (doseq [bone bones] (draw-bone bone)))
    (when (:draw-frames @config)
      (doseq [frame (:frames state)] (draw-frame frame)))
    (when (:draw-wings @config)
      ;;(q/fill 17 110 191)
      (q/fill 0)
      ;;(q/fill 255 0 0)
      ;;(q/stroke 242 237 228)
      (q/stroke 225)
      (doseq [verts (:wings state)] (draw-verts verts)))
    (when (:draw-distortion @config)
      (draw-distortion (:distortion state)))
    (when (:draw-fault @config)
      (draw-fault (:fault state)))
    (q/pop-matrix)))

(defn key-pressed [state key-info]
  (case (:key key-info)
    :a (new-state)
    :b (do (flip :draw-bones) state)
    :f (do (flip :draw-frames) state)
    :w (do (flip :draw-wings) state)
    :t (do (flip :draw-fault) state)
    :d (do (flip :draw-distortion) state)
    ;; TODO: Render to file.
    state))

(q/defsketch bru-3
  :title "BRU-3"
  :size [1200 400]
  :setup setup
  :update update
  :draw draw
  :key-pressed key-pressed
  :middleware [m/fun-mode])
