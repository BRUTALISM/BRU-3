(ns bru-3.logo)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))

(def scene (js/THREE.Scene.))
(def camera (js/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000))
(def renderer (js/THREE.WebGLRenderer.))

(.setSize renderer width height)
(.appendChild js/document.body (.-domElement renderer) )

(def geometry (THREE.BoxGeometry. 1 1 1))
(def material (THREE.MeshBasicMaterial. (js-obj "color" 16r00ff00)))
(def cube (THREE.Mesh. geometry material))
(.add scene cube)

(.position.set camera 0 0 5)

(defn render []
  (js/requestAnimationFrame render)
  (.rotation.set cube
                 (+ 0.1 (.-x (.-rotation cube)))
                 (+ 0.102 (.-y (.-rotation cube)))
                 0)
  (.render renderer scene camera))

(render)
