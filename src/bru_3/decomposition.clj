(ns bru-3.decomposition)

(defprotocol Decomposition
  (vertices [this] "Returns the vertices of a given shape in clockwise order.")
  (edges [this] "Returns the edges of a given shape in clockwise order, as pairs of vertices."))