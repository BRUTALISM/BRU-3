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
           x xstart]
      (if (pos? i)
        (let [xx (+ x (* 200 (rand)))
              newx (+ xx (* 100 (rand)))]
          (recur (conj faults (l/line2 xx (randy) newx (randy)))
                 (dec i)
                 newx))
        faults))))
