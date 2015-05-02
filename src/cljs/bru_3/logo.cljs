(ns bru-3.logo
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [bru-3.draw :as d]))

(q/defsketch bru-3
  :host "bru-3"
  :title "BRU-3"
  :size [1200 400]
  ;;:renderer :opengl
  :setup d/setup
  :update d/update
  :draw d/draw
  ;;:key-pressed d/key-pressed
  :middleware [m/fun-mode])
