(ns bru-3.logo
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [bru-3.core :as b]))

(q/defsketch bru-3
  :host "bru-3"
  :title "BRU-3"
  :size [1200 400]
  :renderer :opengl
  :setup b/setup
  :update b/update
  :draw b/draw
  ;;:key-pressed b/key-pressed
  :middleware [m/fun-mode])
