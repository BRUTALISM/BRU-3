(ns bru-3.geometry.distortion
  (:require [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v]))

(defn field
  "Returns a randomized 2D vector field of given resolution on the x and y
  axes."
  [xres yres]
  (vec (for [x (range xres)] (vec (for [y (range yres)] (v/randvec2))))))

(defn vec-at
  "Returns the (normalized) interpolated Vec2 from a given vector field vf at
  the given x and y coordinates. The vector field is treated as having the
  coordinates in the [0, xmax] and [0, ymax] ranges for the x and y axis,
  respectively."
  [vf x y xmax ymax]
  (let [xcount (count vf)
        ycount (count (first vf))
        xtr (* (dec xcount) (/ x xmax))
        ytr (* (dec ycount) (/ y ymax))
        lx (int (Math/floor xtr))
        ux (int (Math/ceil xtr))
        tx (- xtr lx)
        ly (int (Math/floor ytr))
        uy (int (Math/ceil ytr))
        ty (- ytr ly)]
    (->
      (g/+ (g/* (get-in vf [ux uy]) (* tx ty))
           (g/* (get-in vf [ux ly]) (* tx (- 1 ty)))
           (g/* (get-in vf [lx uy]) (* (- 1 tx) ty))
           (g/* (get-in vf [lx ly]) (* (- 1 tx) (- 1 ty))))
      g/normalize)))
