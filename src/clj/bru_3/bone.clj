(ns bru-3.bone
  (:require [bru-3.decomposition :as d]
            [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v]))

(defrecord Bone [position angle length]
  d/Decomposition
  (vertices [this]
    (let [{[x y] :position length :length angle :angle} this
          xdist (* (/ length 2) (Math/sin (Math/toRadians angle)))
          ydist (* (/ length 2) (Math/cos (Math/toRadians angle)))]
      [(v/vec2 (- x xdist) (- y ydist)) (v/vec2 (+ x xdist) (+ y ydist))]))
  (edges [this] (d/vertices this)))

(def zero-bone (Bone. (v/vec2 0.0 0.0) 0.0 0.0))

(defn bone
  "Creates a new bone based on a previous bone b and randomization parameters
  db, lb, and amax. db (distance bounds) is a pair of values representing the
  minimum and maximum values for the new bone's distance from the previous bone.
  lb is a pair representing minimum and maximum for the new bone's length.
  amax is the upper bound (the lower being -amax) on the angle between the
  previous bone b and the newly created bone."
  [db lb amax b]
  (let [{:keys [position angle]} b
        [dmin dmax] db
        [lmin lmax] lb
        rand-range (fn [minn maxx] (+ minn (rand (- maxx minn))))]
    (Bone.
      (g/+ position (v/vec2 (rand-range dmin dmax) 0.0))
      (+ angle (rand-range (- amax) amax))
      (rand-range lmin lmax))))

(defn gen-bones
  "Returns a lazy collection of bones based on the given randomization
  parameters db, lb, and amax, and a previous bone b. If b is omitted, zero-bone
  is used. db (distance bounds) is a pair of values representing the minimum and
  maximum values for the new bone's distance from the previous bone. lb is a
  pair representing minimum and maximum for the new bone's length. amax is the
  upper bound (the lower being -amax) on the angle between the previous bone b
  and the newly created bone."
  ([db lb amax]
    (gen-bones db lb amax zero-bone))
  ([db lb amax b]
    (iterate (partial bone db lb amax) b)))
