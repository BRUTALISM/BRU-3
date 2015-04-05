(ns bru-3.geometry.fault
  (:require [thi.ng.geom.core :as g]
            [thi.ng.geom.line :as l]
            [thi.ng.geom.rect :as r]
            [thi.ng.geom.core.vector :as v]))

(defn fault-line
  "Generates a \"fault line\" consisting of n line segments. The line will be
  generated within the rectangle r, and stretching from left to right."
  [{origin :p size :size} n]
  (let [xmid (+ (:x origin) (/ (:x size) 2))
        xstart (:x origin)
        rand-range (fn [min max] (+ min (rand (- max min))))
        yrange 1/8 ;; TODO: config
        ysize (:y size)
        ymid (+ (:y origin) (/ ysize 2))
        randy (fn [] (rand-range (- ymid (* ysize yrange))
                                 (+ ymid (* ysize yrange))))
        ystart (randy)]
    (loop [faults []
           i n
           x xstart]
      (if (pos? i)
        (let [x1 (+ x (rand-range 100 200)) ;; TODO: config
              x2 (+ x1 (rand-range 50 100)) ;; TODO: config
              y1 (randy)
              rs (if (> 1/2 (rand)) 1 -1)
              y2 (+ y1 (* rs (rand-range 10 50)))] ;; TODO: config
          (recur (conj faults (l/line2 x1 y1 x2 y2))
                 (dec i)
                 x2))
        faults))))
