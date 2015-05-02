// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.plane');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.quaternion');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
thi.ng.geom.plane.plane = (function thi$ng$geom$plane$plane(n,w){
return (new thi.ng.geom.types.Plane(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(n)),w));
});
thi.ng.geom.plane.plane_with_point = (function thi$ng$geom$plane$plane_with_point(p,n){
var n__$1 = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(n));
return (new thi.ng.geom.types.Plane(n__$1,(- thi.ng.geom.core.dot(n__$1,p))));
});
thi.ng.geom.plane.plane_from_points = (function thi$ng$geom$plane$plane_from_points(){
var G__26409 = arguments.length;
switch (G__26409) {
case 1:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1 = (function (p__26410){
var vec__26411 = p__26410;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26411,(2),null);
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3(a,b,c);
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var n = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c);
return (new thi.ng.geom.types.Plane(n,(- thi.ng.geom.core.dot(n,a))));
});

thi.ng.geom.plane.plane_from_points.cljs$lang$maxFixedArity = 3;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core.transform_vector(m,thi.ng.geom.core.centroid(___$1)),thi.ng.geom.core.transform_vector(m,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),(0)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(o,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),(- cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)),(- cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2((thi.ng.geom.core.dot(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),p) + cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
var vec__26414 = ((cljs.core.map_QMARK_(l))?cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(l):l);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26414,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26414,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,p),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$3 = (function (_,p,q){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,p),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__26415 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(ray),cljs.core.constant$keyword$dir.cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26415,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26415,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,dir,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,dir,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(s),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(s));
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(s),cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1(s));
} else {
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(s);

}
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.dot(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),p) + cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,p){
var ___$1 = this;
var d = thi.ng.geom.core.dist(___$1,p);
return (d * d);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),t),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid(___$1),thi.ng.common.math.core.INF_PLUS_));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),s),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),a,b),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4(thi.ng.geom.core.centroid(___$1),a,b,c),cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
var s = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.width(___$1),thi.ng.geom.core.height(___$1),thi.ng.geom.core.depth(___$1));
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(s,-0.5,thi.ng.geom.core.centroid(___$1)),s));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.abs(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3X,thi.ng.common.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.common.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.abs(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Y,thi.ng.common.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.common.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.abs(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Z,thi.ng.common.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.common.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__26416){
var map__26417 = p__26416;
var map__26417__$1 = ((cljs.core.seq_QMARK_(map__26417))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26417):map__26417);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26417__$1,cljs.core.constant$keyword$p);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26417__$1,cljs.core.constant$keyword$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26417__$1,cljs.core.constant$keyword$height);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26417__$1,cljs.core.constant$keyword$size,1.0);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26417__$1,cljs.core.constant$keyword$mesh);
var ___$1 = this;
var w = ((function (){var or__12575__auto__ = width;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return size;
}
})() * 0.5);
var h = ((function (){var or__12575__auto__ = height;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return size;
}
})() * 0.5);
var flip_QMARK_ = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(-1.0,thi.ng.geom.core.dot(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.V3Z));
var p__$1 = thi.ng.geom.core.closest_point(___$1,(function (){var or__12575__auto__ = p;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();
}
})());
var q = (cljs.core.truth_(flip_QMARK_)?thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1)):thi.ng.geom.core.quaternion.alignment_quat(thi.ng.geom.core.vector.V3Z,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1)));
var face = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (w,h,flip_QMARK_,p__$1,q,___$1,map__26417,map__26417__$1,p,width,height,size,mesh){
return (function (p1__26413_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,thi.ng.geom.core.transform_vector(q,p1__26413_SHARP_));
});})(w,h,flip_QMARK_,p__$1,q,___$1,map__26417,map__26417__$1,p,width,height,size,mesh))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),(- h),(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),h,(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,h,(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,(- h),(0))], null));
return thi.ng.geom.core.into((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(flip_QMARK_)?face:cljs.core.rseq(face))], null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),(cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(___$1) + thi.ng.geom.core.dot(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(___$1),p))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.math.core.INF_PLUS_;
});
