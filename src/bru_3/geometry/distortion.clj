(ns bru-3.geometry.distortion
  (:require [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v]))

(defn field
  "Returns a randomized 2D vector field of given width w and height h. All of
  the vectors in the field are normalized."
  [w h]
  (vec (for [y (range h)] (vec (for [x (range w)] (v/randvec2))))))

(defn vec-at
  "Returns the (normalized) interpolated Vec2 from a given vector field vf at
  the given x and y coordinates."
  [vf x y]
  (let [lx (int (Math/floor x))
        ux (int (Math/ceil x))
        tx (- x lx)
        ly (int (Math/floor y))
        uy (int (Math/ceil y))
        ty (- y ly)]
    (->
      (g/+ (g/* (get-in vf [ux uy]) tx ty)
           (g/* (get-in vf [ux ly]) tx (- 1 ty))
           (g/* (get-in vf [lx uy]) (- 1 tx) ty)
           (g/* (get-in vf [lx ly]) (- 1 tx) (- 1 ty)))
      g/normalize)))