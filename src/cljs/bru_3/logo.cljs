(ns bru-3.logo
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [bru-3.draw :as d]))

(q/defsketch bru-3
  :host "bru-3"
  :title "BRU-3"
  :size [1200 300]
  :setup d/setup
  :update d/update
  :draw d/draw
  :mouse-pressed d/mouse-pressed
  :middleware [m/fun-mode])
