(ns bru-3.logo)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))

(def scene (js/THREE.Scene.))
(def camera (js/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000))
(def renderer (js/THREE.WebGLRenderer.))

(.setSize renderer width height)
(.appendChild js/document.body (.-domElement renderer) )

(def geometry (THREE.BoxGeometry. 1 1 1))
(def material (THREE.MeshPhongMaterial. (js-obj "color" 16r0088af)))
(def cube (THREE.Mesh. geometry material))
(.add scene cube)

(def ambi (THREE.AmbientLight. 16r444444))
(.add scene ambi)

(def light (THREE.PointLight. 16rff0011 10 1000))
(.position.set light 5 5 5)
(.add scene light)

(.position.set camera 0 0 3)

(def rotation-speed 0.01)

(defn render []
  (js/requestAnimationFrame render)
  (.rotation.set cube
                 (+ rotation-speed (.-x (.-rotation cube)))
                 (+ rotation-speed (.-y (.-rotation cube)))
                 0)
  (.render renderer scene camera))

(render)
