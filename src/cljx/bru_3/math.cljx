(ns bru-3.math)

(def PI
  #+clj Math/PI
  #+cljs (.-PI js/Math))

(defn sin [x]
  #+clj (Math/sin x)
  #+cljs (.sin js/Math x))

(defn cos [x]
  #+clj (Math/cos x)
  #+cljs (.cos js/Math x))

(defn to-radians [x]
  #+clj (Math/toRadians x)
  #+cljs (/ (* x PI) 180))

(defn signum [x]
  #+clj (Math/signum x)
  #+cljs (if (= x 0) 0 (/ x (.abs js/Math x))))

(defn floor [x]
  #+clj (Math/floor x)
  #+cljs (.floor js/Math x))

(defn ceil [x]
  #+clj (Math/ceil x)
  #+cljs (.ceil js/Math x))
