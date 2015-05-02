(ns thi.ng.geom.core.intersect
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3 V2 V3]]
   [thi.ng.common.math.core :as m :refer [*eps*]]
                                       )
        
  (:require-macros
   [thi.ng.macromath.core :as mm]))

(defn- sq [x] (* x x))

(defn intersect-circle-circle?
  ([{p :p r1 :r} {q :p r2 :r}]
     (intersect-circle-circle? p r1 q r2))
  ([p r1 q r2]
     (let [delta (g/- q p)
           d (g/mag delta)]
       (when (and (<= d (+ r1 r2)) (>= d (m/abs (- r1 r2))))
         (let [a (/ (+ (- (* r1 r1) (* r2 r2)) (* d d)) (* 2.0 d))
               invd (/ 1.0 d)
               p (g/madd delta (* a invd) p)
               h (Math/sqrt (- (* r1 r1) (* a a)))
               perp (g/* (g/normal delta) (* h invd))]
           [(g/+ p perp) (g/- p perp)])))))
(defn intersect-rect-rect?
  ([{[px py] :p [w h] :size} {[qx qy] :p [qw qh] :size}]
     (not (or (> px (+ qx qw)) (> qx (+ px w)) (> py (+ qy qh)) (> qy (+ py h)))))
  ([[px1 py1] [qx1 qy1] [px2 py2] [qx2 qy2]]
     (not (or (> px1 qx2) (> px2 qx1) (> py1 qy2) (> py2 qy1)))))
(defn intersect-rect-circle?
  ([{p :p sz :size} {s :p r :r}]
     (intersect-rect-circle? p (g/+ p sz) s r))
  ([[px py] [qx qy] [cx cy] r]
     (let [ds (if (< cx px) (sq (- cx px)) (if (> cx qx) (sq (- cx qx)) 0.0))
           ds (+ ds (if (< cy py) (sq (- cy py)) (if (> cy qy) (sq (- cy qy)) 0.0)))]
       (<= ds (* r r)))))
(defn intersect-aabb-aabb?
  ([{pa :p sa :size} {pb :p sb :size}]
     (intersect-aabb-aabb? pa pb (g/+ pa sa) (g/+ pb sb)))
  ([pa pb qa qb]
     (if (and (<= (pa 0) (qb 0)) (<= (pb 0) (qa 0)))
       (if (and (<= (pa 1) (qb 1)) (<= (pb 1) (qa 1)))
         (and (<= (pa 2) (qb 2)) (<= (pb 2) (qa 2)))))))
(defn intersect-aabb-sphere?
  ([{p :p sz :size} {s :p r :r}]
     (intersect-aabb-sphere? p (g/+ p sz) s r))
  ([[px py pz] [qx qy qz] [cx cy cz] r]
     (let [ds (if (< cx px) (sq (- cx px)) (if (> cx qx) (sq (- cx qx)) 0.0))
           ds (+ ds (if (< cy py) (sq (- cy py)) (if (> cy qy) (sq (- cy qy)) 0.0)))
           ds (+ ds (if (< cz pz) (sq (- cz pz)) (if (> cz qz) (sq (- cz qz)) 0.0)))]
       (<= ds (* r r)))))
(defn intersect-sphere-sphere?
  ([{p1 :p r1 :r} {p2 :p r2 :r}]
     (intersect-sphere-sphere? p1 r1 p2 r2))
  ([p1 r1 p2 r2]
     (<= (g/dist-squared p1 p2) (mm/addm r1 r2 r1 r2))))
(defn intersect-ray-sphere?
  ([{rp :p dir :dir} {p :p r :r}]
     (intersect-ray-sphere? rp dir p r))
  ([rp dir p r]
   (let [q (g/- p rp)
         ds (g/mag-squared q)
         v (- (g/dot q dir))
         d (mm/msub r r (- ds (* v v)))]
     (if (>= d 0.0)
       (let [d (Math/sqrt d)
             a (+ v d)
             b (- v d)]
         (if-not (and (< a 0) (< b 0))
           (if (and (> a 0) (> b 0))
             (if (> a b) [b a] [a b])
             (if (> b 0) [b a] [a b]))
           [a b]))))))  
(defn intersect-ray-triangle3?
  [p d a b c]
  (let [u (g/- b a)
        v (g/- c a)
        n (g/cross u v)]
    (if (m/delta= V3 n)
      {:type :degenerate}
      (let [w0 (g/- p a)
            a' (- (g/dot n w0))
            b' (g/dot n d)]
        (if (m/delta= 0.0 b')
          (if (m/delta= 0.0 a')
            {:type :same-plane}
            {:type :no-intersect})
          (let [r (/ a' b')]
            (if (< r 0.0)
              {:type :no-intersect}
              (let [i (g/madd d r p)
                    [u v w] (gu/triangle-barycentric-coords a b c i u v)]
                (if (and (>= u 0.0) (>= w 0.0) (m/in-range? 0.0 1.0 v))
                  {:type :intersect :p i}
                  {:type :no-intersect :p i})))))))))
(defn intersect-line2-line2?
  [[px1 py1 :as p] [qx1 qy1 :as q]
   [px2 py2 :as lp] [qx2 qy2 :as lq]]
  (let [dx1 (- qx1 px1), dy1 (- qy1 py1)
        dx2 (- qx2 px2), dy2 (- qy2 py2)
        dx12 (- px1 px2), dy12 (- py1 py2)
        denom (mm/msub dy2 dx1 dx2 dy1)
        na (mm/msub dx2 dy12 dy2 dx12)
        nb (mm/msub dx1 dy12 dy1 dx12)]
    (if (zero? denom)
      (if (and (zero? na) (zero? nb))
        (let [ip (gu/closest-point-on-segment lp p q)
              iq (gu/closest-point-on-segment lq p q)]
          (if (or (m/delta= ip lp) (m/delta= iq lq))
            {:type :coincident :p ip :q iq}
            {:type :coincident-no-intersect :p ip :q iq}))
        {:type :parallel})
      (let [ua (/ na denom)
            ub (/ nb denom)
            i (g/mix p q ua)]
        (if (and (>= ua 0.0) (<= ua 1.0) (>= ub 0.0) (<= ub 1.0))
          {:type :intersect :p i :ua ua :ub ub}
          {:type :intersect-outside :p i :ua ua :ub ub})))))
(defn intersect-line2-edges?
  [rp rq edges]
  (->> edges
       (transduce
        (comp
         (map (fn [[p q]] (intersect-line2-line2? rp rq p q)))
         (filter #(and (:p %) (#{:intersect :coincident} (:type %)))))
        (completing
         (fn [closest isec]
           (let [p (:p isec)
                 d (g/dist-squared rp p)]
             (if (< d (closest 1)) [p d] closest))))
        [nil m/INF+])
       (first)))

(defn intersect-ray2-edges?
  [rp rd edges]
  (intersect-line2-edges? rp (g/madd rd 1e29 rp) edges))

(defn intersect-plane-plane?
  [an aw bn bw]
  (when-not (or (m/delta= aw bw *eps*) (m/delta= an bn *eps*))
    (let [od (g/dot an bn)
          det (/ (mm/madd od od -1))
          u (* (mm/madd bw od aw) det)
          v (* (mm/madd aw od bw) det)]
      {:p (g/madd an u (g/* bn v)) :dir (gu/ortho-normal an bn)})))
(defn intersect-ray-plane?
  [rp dir n w]
  (let [dp (g/dot n dir)
        dn (+ (g/dot n rp) w)]
    (if (m/delta= 0.0 dp *eps*)
      {:type (if (zero? dn) :on-plane :parallel)}
      (let [du (- (/ dn dp))
            i (g/madd dir du rp)]
        (if (m/in-range? 0.0 1.0 du)
          {:type :intersect :p i}
          {:type :intersect-outside :p i})))))
(defn intersect-plane-sphere?
  [n w p r] (let [r (+ r *eps*)] (m/in-range? (- r) r (+ (g/dot n p) w))))
(defn- subdot
  "Computes sum((a-b)*c), where a, b, c are 3D vectors."
  [a b c] (let [d (g/subm a b c)] (mm/add (d 0) (d 1) (d 2))))

(defn- face-a
  "Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
    Returns 2-elem vec of [bitmask affine-coords]."
  [f deltas]
  (let [aff (mapv f deltas)]
    [(mm/bitmask pos? (aff 0) (aff 1) (aff 2) (aff 3)) aff]))

(defn- face-b1?
  "Takes the 4 delta vectors between tetra2/tetra1 and a normal.
    Returns true if all dot products are positive."
  [deltas n] (every? #(pos? (g/dot % n)) deltas))

(defn- face-b2?
  "Like face-b1?, but optimized for last face of tetrahedron."
  [verts refv n] (every? #(pos? (subdot % refv n)) verts))

(defn- edge-a
  "Takes 2 bitmasks and edge flags, returns true if there's a
    separating plane between the faces shared by that edge."
  [ma mb ea eb]
  (let [xa (bit-and ma (bit-xor ma mb))
        xb (bit-and mb (bit-xor xa mb))
        edge (fn [a b i j]
               (let [cp (mm/msub (ea i) (eb j) (ea j) (eb i))]
                 (or (and (pos? cp) (pos? (bit-or xa a)) (pos? (bit-or xb b)))
                     (and (neg? cp) (pos? (bit-or xa b)) (pos? (bit-or xb a))))))]
    (not
     (or
      (not= 15 (bit-or ma mb))
      (edge 1 2 1 0)
      (edge 1 4 2 0)
      (edge 1 8 3 0)
      (edge 2 4 2 1)
      (edge 2 8 3 1)
      (edge 4 8 3 2)))))

(defn- get-edge
  "Lazy edge evaluation. Takes a vector of edges, vector of edge
    points and an edge id. Looks up edge for given id and if not yet
    present constructs it. Returns 2-elem vector of [edges edge]."
  [edges epoints id]
  (let [e (edges id)]
    (if e
      [edges e]
      (let [ep (epoints id), e (g/- (ep 0) (ep 1))]
        [(assoc edges id e) e]))))

(defn- check-faces-a
  "Takes the 4 delta vectors between the two tetras, edge definitions
    of the 1st tetra, vertices of the 2nd, a reference point of the 1st
    and a seq of specs, each encoding a specific check (either calls to
    face-a* or edge-a). Returns vector of bitmasks or nil if fail early."
  [deltas epoints verts p specs]
  (loop [masks [], affine [], edges [nil nil nil nil nil], s specs]
    (if s
      (let [[f a b] (first s)]
        (if (or (= :f f) (= :f* f))
          (let [[edges ea] (get-edge edges epoints a)
                [edges eb] (get-edge edges epoints b)
                n (g/cross ea eb)
                [m a] (if (= :f f)
                        (face-a #(g/dot % n) deltas)
                        (face-a #(subdot % p n) verts))]
            (if (< m 15)
              (recur (conj masks m) (conj affine a) edges (next s))))
          (if-not (edge-a (masks a) (masks b) (affine a) (affine b))
            (recur masks affine edges (next s)))))
      masks)))

(defn- check-faces-b
  "Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
    Returns true if tetras do intersect."
  [deltas epoints verts p specs]
  (loop [edges [nil nil nil nil nil], s specs]
    (if s
      (let [[f a b] (first s)
            [edges ea] (get-edge edges epoints a)
            [edges eb] (get-edge edges epoints b)]
        (if-not (if (= :f f)
                  (face-b1? deltas (g/cross ea eb))
                  (face-b2? verts p (g/cross ea eb)))
          (recur edges (next s))))
      true)))

(defn intersect-tetrahedra?
  "Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
    true if they intersect. Orientation of points is irrelevant (unlike
    in the original algorithm this implementation is based on)."
  [[pa pb pc pd :as p] [qa qb qc qd :as q]]
  (let [masks (check-faces-a
               (map #(g/- % pa) q)
               [[pb pa] [pc pa] [pd pa] [pc pb] [pd pb]]
               q pb [[:f 0 1] [:f 2 0] [:e 0 1] [:f 1 2]
                     [:e 0 2] [:e 1 2] [:f* 4 3] [:e 0 3]
                     [:e 1 3] [:e 2 3]])]
    (if masks
      (or (not= 15 (reduce bit-or masks))
          (check-faces-b
           (map #(g/- % qa) p)
           [[qb qa] [qc qa] [qd qa] [qc qb] [qd qb]]
           p qb [[:f 0 1] [:f 2 0] [:f 1 2] [:f* 4 3]])))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/core/intersect.cljx
