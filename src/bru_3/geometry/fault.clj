(ns bru-3.geometry.fault
  (:require [thi.ng.geom.core :as g]
            [thi.ng.geom.line :as l]
            [thi.ng.geom.rect :as r]
            [thi.ng.geom.core.vector :as v]))

(defn fault-line
  "Generates a \"fault line\" consisting of n line segments. The line will be
  generated within the rectangle r, and stretching from left to right."
  [{origin :p size :size}
   {n :count yrand :y-rand-percentage [yl1 yl2] :y-length-range
    [xs1 xs2] :x-spread-range [xl1 xl2] :x-length-range}]
  (let [xmid (+ (:x origin) (/ (:x size) 2))
        xstart (- (:x origin) xs1)
        rand-range (fn [min max] (+ min (rand (- max min))))
        yrange (/ yrand 2)
        ysize (:y size)
        ymid (+ (:y origin) (/ ysize 2))
        randy (fn [] (rand-range (- ymid (* ysize yrange))
                                 (+ ymid (* ysize yrange))))
        ystart (randy)]
    (loop [faults []
           i n
           x xstart]
      (if (pos? i)
        (let [x1 (+ x (rand-range xs1 xs2))
              x2 (+ x1 (rand-range xl1 xl2))
              y1 (randy)
              rs (if (> 1/2 (rand)) 1 -1)
              y2 (+ y1 (* rs (rand-range yl1 yl2)))]
          (recur (conj faults (l/line2 x1 y1 x2 y2))
                 (dec i)
                 x2))
        faults))))
