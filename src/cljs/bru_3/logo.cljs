(ns bru-3.logo)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))

(def scene (js/THREE.Scene.))
(def camera (js/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000))
(def renderer (js/THREE.WebGLRenderer.))

(.setSize renderer width height)
(.appendChild js/document.body (.-domElement renderer) )
