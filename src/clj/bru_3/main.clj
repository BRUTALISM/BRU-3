(ns bru-3.main
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [bru-3.draw :as d])
  (:gen-class))

(q/defsketch bru-3
  :title "BRU-3"
  :size [1200 300]
  :setup d/setup
  :update d/update
  :draw d/draw
  :key-pressed d/key-pressed
  :mouse-pressed d/mouse-pressed
  :middleware [m/fun-mode])

(defn -main [] nil)
