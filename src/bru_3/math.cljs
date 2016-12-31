(ns bru-3.math)

(def PI (.-PI js/Math))

(defn sin [x] (.sin js/Math x))

(defn cos [x] (.cos js/Math x))

(defn to-radians [x] (/ (* x PI) 180))

(defn signum [x] (if (= x 0) 0 (/ x (.abs js/Math x))))

(defn floor [x] (.floor js/Math x))

(defn ceil [x] (.ceil js/Math x))
