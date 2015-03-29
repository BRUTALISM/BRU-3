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
        randy (fn [] (rand-range (:y origin) (+ (:y origin) (:y size))))
        ystart (randy)]
    (loop [faults []
           i n
           x xstart
           y ystart]
      (if (pos? i)
        (let [newx (+ x (/ (:x size) n))
              newy (randy)]
          (recur (conj faults (l/line2 x y newx newy))
                 (dec i)
                 newx
                 newy))
        faults))))
