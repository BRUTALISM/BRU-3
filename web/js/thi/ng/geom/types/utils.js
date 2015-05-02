// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.types.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.types');
goog.require('clojure.core.reducers');
thi.ng.geom.types.utils.bounding_rect = (function thi$ng$geom$types$utils$bounding_rect(points){
var vec__24635 = thi.ng.geom.core.utils.bounding_rect(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_box = (function thi$ng$geom$types$utils$bounding_box(points){
var vec__24637 = thi.ng.geom.core.utils.bounding_box(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24637,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24637,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_circle = (function thi$ng$geom$types$utils$bounding_circle(){
var G__24639 = arguments.length;
switch (G__24639) {
case 1:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
});

thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__24640 = thi.ng.geom.core.utils.radial_bounds(thi.ng.geom.core.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24640,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24640,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r));
});

thi.ng.geom.types.utils.bounding_circle.cljs$lang$maxFixedArity = 2;
thi.ng.geom.types.utils.bounding_sphere = (function thi$ng$geom$types$utils$bounding_sphere(){
var G__24643 = arguments.length;
switch (G__24643) {
case 1:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
});

thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__24644 = thi.ng.geom.core.utils.radial_bounds(thi.ng.geom.core.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24644,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24644,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r));
});

thi.ng.geom.types.utils.bounding_sphere.cljs$lang$maxFixedArity = 2;
/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 * union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.types.utils.coll_bounds = (function thi$ng$geom$types$utils$coll_bounds(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.union,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 * repositions all items to fit into given bounds. Returns lazyseq of
 * transformed entities. Does not support collections of mixed 2D/3D
 * entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.types.utils.fit_all_into_bounds = (function thi$ng$geom$types$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.types.utils.coll_bounds(coll);
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(bounds),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(b)));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$2(b,s),thi.ng.geom.core.centroid(bounds));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b,s,b_SINGLEQUOTE_){
return (function (p1__24646_SHARP_){
return thi.ng.geom.core.scale_size(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(p1__24646_SHARP_,thi.ng.geom.core.unmap_point(b_SINGLEQUOTE_,thi.ng.geom.core.map_point(b,thi.ng.geom.core.centroid(p1__24646_SHARP_)))),s);
});})(b,s,b_SINGLEQUOTE_))
,coll);
});
thi.ng.geom.types.utils.into_mesh = (function thi$ng$geom$types$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_face,mesh,(((function (){var G__24648 = mesh_or_faces;
if(G__24648){
var bit__13249__auto__ = null;
if(cljs.core.truth_((function (){var or__12575__auto__ = bit__13249__auto__;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return G__24648.thi$ng$geom$core$PFaceAccess$;
}
})())){
return true;
} else {
if((!G__24648.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PFaceAccess,G__24648);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PFaceAccess,G__24648);
}
})())?thi.ng.geom.core.faces(mesh_or_faces):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 * new mesh. Thus f should return a seq of faces. Returns new mesh.
 */
thi.ng.geom.types.utils.map_mesh = (function thi$ng$geom$types$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into(thi.ng.geom.core.clear_STAR_(mesh),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.array_seq([thi.ng.geom.core.faces(mesh)], 0)));
});
thi.ng.geom.types.utils.transform_mesh = (function thi$ng$geom$types$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = (((function (){var G__24653 = tx;
if(G__24653){
var bit__13249__auto__ = null;
if(cljs.core.truth_((function (){var or__12575__auto__ = bit__13249__auto__;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return G__24653.thi$ng$geom$core$PVectorTransform$;
}
})())){
return true;
} else {
if((!G__24653.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PVectorTransform,G__24653);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PVectorTransform,G__24653);
}
})())?(function (v){
return thi.ng.geom.core.transform_vector(tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tx__$1){
return (function (acc,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,v,(function (){var G__24654 = v;
return (tx__$1.cljs$core$IFn$_invoke$arity$1 ? tx__$1.cljs$core$IFn$_invoke$arity$1(G__24654) : tx__$1.call(null,G__24654));
})());
});})(tx__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(mesh)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tx__$1,verts_SINGLEQUOTE_){
return (function (mesh__$1,f){
var G__24655 = mesh__$1;
var G__24656 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(verts_SINGLEQUOTE_,f);
return (add_face.cljs$core$IFn$_invoke$arity$2 ? add_face.cljs$core$IFn$_invoke$arity$2(G__24655,G__24656) : add_face.call(null,G__24655,G__24656));
});})(tx__$1,verts_SINGLEQUOTE_))
,thi.ng.geom.core.clear_STAR_(mesh),thi.ng.geom.core.faces(mesh));
});
