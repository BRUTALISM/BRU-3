// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.basicmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core.matrix');
thi.ng.geom.basicmesh.add_face = (function thi$ng$geom$basicmesh$add_face(mesh,f){
return (new thi.ng.geom.types.BasicMesh(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(mesh),f),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(mesh),f),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(mesh),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(mesh)));
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 * the given items (a seq of existing meshes and/or faces). Faces are defined
 * as vectors of their vertices.
 */
thi.ng.geom.basicmesh.basic_mesh = (function thi$ng$geom$basicmesh$basic_mesh(){
return (new thi.ng.geom.types.BasicMesh(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});
thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,m);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.basicmesh.basic_mesh();
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.transform(___$1,thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.matrix.M44,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.centroid(___$1))));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid(cljs.core.seq(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh(((function (___$1){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.rseq(f))], null);
});})(___$1))
,___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(((function (___$1){
return (function (p1__24387_SHARP_){
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24387_SHARP_,cljs.core.first(p1__24387_SHARP_)));
});})(___$1))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.set)),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq(cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(___$1))){
return cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(___$1);
} else {
if(cljs.core.truth_(force_QMARK_)){
return cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.compute_face_normals(___$1));
} else {
return null;
}
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.truth_(force_QMARK_)){
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var fnorms = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var faces = cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1);
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first(faces);
var G__24393 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fnorms,f,thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(f));
var G__24394 = cljs.core.next(faces);
fnorms = G__24393;
faces = G__24394;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(___$1,cljs.core.constant$keyword$fnormals,cljs.core.persistent_BANG_(fnorms));
}
break;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_volume(cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$add_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.geom.basicmesh.add_face(___$1,f);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__24388_SHARP_){
return (thi.ng.common.data.core.index_of(p1__24388_SHARP_,v) >= (0));
});})(___$1))
,cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__24392_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__24392_SHARP_,t);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__24389_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__24389_SHARP_,s);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,((function (___$1){
return (function (p1__24390_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4(p1__24390_SHARP_,sx,sy,sz);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,((function (c,___$1){
return (function (p1__24391_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__24391_SHARP_,c),s,c);
});})(c,___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh((function (){var or__12607__auto__ = cljs.core.constant$keyword$fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.utils.tessellate_with_first;
}
})(),___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.types.utils.into_mesh(___$1,thi.ng.geom.basicmesh.add_face,faces);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.seq(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((0),cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((1),cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((2),cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into(cljs.core.constant$keyword$mesh.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_area_3d(cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(___$1));
});
