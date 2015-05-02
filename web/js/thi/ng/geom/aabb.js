// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.aabb');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core.matrix');
thi.ng.geom.aabb.aabb = (function thi$ng$geom$aabb$aabb(){
var G__32042 = arguments.length;
switch (G__32042) {
case 0:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(1.0)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1 = (function (size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(size)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(size)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(sx,sy,sz)));
});

thi.ng.geom.aabb.aabb.cljs$lang$maxFixedArity = 3;
thi.ng.geom.aabb.aabb_from_minmax = (function thi$ng$geom$aabb$aabb_from_minmax(p,q){
var p__$1 = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q);
var p__$2 = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.AABB(p__$2,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(p__$2,q__$1),p__$2)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),m);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_x(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_y(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_around_axis(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),axis,theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__32045){
var map__32046 = p__32045;
var map__32046__$1 = ((cljs.core.seq_QMARK_(map__32046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32046):map__32046);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32046__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32046__$1,cljs.core.constant$keyword$size);
var map__32047 = this;
var map__32047__$1 = ((cljs.core.seq_QMARK_(map__32047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32047):map__32047);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32047__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32047__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(size__$1,-0.5),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__32048,q){
var map__32049 = p__32048;
var map__32049__$1 = ((cljs.core.seq_QMARK_(map__32049))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32049):map__32049);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32049__$1,cljs.core.constant$keyword$size);
var map__32050 = this;
var map__32050__$1 = ((cljs.core.seq_QMARK_(map__32050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32050):map__32050);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32050__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(size__$1,-0.5,q),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.madd(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),0.5,cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__32051){
var map__32052 = p__32051;
var map__32052__$1 = ((cljs.core.seq_QMARK_(map__32052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32052):map__32052);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.constant$keyword$size);
var map__32053 = this;
var map__32053__$1 = ((cljs.core.seq_QMARK_(map__32053))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32053):map__32053);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32053__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32053__$1,cljs.core.constant$keyword$size);
var vec__32054 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32054,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32054,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32054,(2),null);
var vec__32055 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32055,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32055,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32055,(2),null);
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__32056){
var map__32057 = p__32056;
var map__32057__$1 = ((cljs.core.seq_QMARK_(map__32057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32057):map__32057);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32057__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32057__$1,cljs.core.constant$keyword$size);
var map__32058 = this;
var map__32058__$1 = ((cljs.core.seq_QMARK_(map__32058))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32058):map__32058);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32058__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32058__$1,cljs.core.constant$keyword$size);
var vec__32059 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32059,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32059,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32059,(2),null);
var vec__32060 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32060,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32060,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32060,(2),null);
var id = (thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1((6)) | (0));
if((id < (2))){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((((id === (0)))?x1:x2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
if((id < (4))){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),id))?y1:y2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),id))?z1:z2));

}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__32061,p__32062){
var map__32063 = p__32061;
var map__32063__$1 = ((cljs.core.seq_QMARK_(map__32063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32063):map__32063);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32063__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32063__$1,cljs.core.constant$keyword$size);
var map__32064 = p__32062;
var map__32064__$1 = ((cljs.core.seq_QMARK_(map__32064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32064):map__32064);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32064__$1,cljs.core.constant$keyword$num,(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32064__$1,cljs.core.constant$keyword$cols);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32064__$1,cljs.core.constant$keyword$rows);
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32064__$1,cljs.core.constant$keyword$slices);
var map__32065 = this;
var map__32065__$1 = ((cljs.core.seq_QMARK_(map__32065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32065):map__32065);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32065__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32065__$1,cljs.core.constant$keyword$size);
var sx = (function (){var or__12607__auto__ = cols;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__12607__auto__ = rows;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__12607__auto__ = slices;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})();
var s = thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4(size__$1,sx,sy,sz);
var iter__13361__auto__ = ((function (sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__32066(s__32067){
return (new cljs.core.LazySeq(null,((function (sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function (){
var s__32067__$1 = s__32067;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__32067__$1);
if(temp__4422__auto__){
var xs__4974__auto__ = temp__4422__auto__;
var z = cljs.core.first(xs__4974__auto__);
var iterys__13357__auto__ = ((function (s__32067__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__32066_$_iter__32068(s__32069){
return (new cljs.core.LazySeq(null,((function (s__32067__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function (){
var s__32069__$1 = s__32069;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__32069__$1);
if(temp__4422__auto____$1){
var xs__4974__auto____$1 = temp__4422__auto____$1;
var y = cljs.core.first(xs__4974__auto____$1);
var iterys__13357__auto__ = ((function (s__32069__$1,s__32067__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__32066_$_iter__32068_$_iter__32070(s__32071){
return (new cljs.core.LazySeq(null,((function (s__32069__$1,s__32067__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices){
return (function (){
var s__32071__$1 = s__32071;
while(true){
var temp__4422__auto____$2 = cljs.core.seq(s__32071__$1);
if(temp__4422__auto____$2){
var s__32071__$2 = temp__4422__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__32071__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__32071__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__32073 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__32072 = (0);
while(true){
if((i__32072 < size__13360__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__32072);
cljs.core.chunk_append(b__32073,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),size__$1,p__$1),s)));

var G__32160 = (i__32072 + (1));
i__32072 = G__32160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32073),thi$ng$geom$aabb$iter__32066_$_iter__32068_$_iter__32070(cljs.core.chunk_rest(s__32071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32073),null);
}
} else {
var x = cljs.core.first(s__32071__$2);
return cljs.core.cons((new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),size__$1,p__$1),s)),thi$ng$geom$aabb$iter__32066_$_iter__32068_$_iter__32070(cljs.core.rest(s__32071__$2)));
}
} else {
return null;
}
break;
}
});})(s__32069__$1,s__32067__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
,null,null));
});})(s__32069__$1,s__32067__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
;
var fs__13358__auto__ = cljs.core.seq(iterys__13357__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sx))));
if(fs__13358__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13358__auto__,thi$ng$geom$aabb$iter__32066_$_iter__32068(cljs.core.rest(s__32069__$1)));
} else {
var G__32161 = cljs.core.rest(s__32069__$1);
s__32069__$1 = G__32161;
continue;
}
} else {
return null;
}
break;
}
});})(s__32067__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
,null,null));
});})(s__32067__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
;
var fs__13358__auto__ = cljs.core.seq(iterys__13357__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sy))));
if(fs__13358__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13358__auto__,thi$ng$geom$aabb$iter__32066(cljs.core.rest(s__32067__$1)));
} else {
var G__32162 = cljs.core.rest(s__32067__$1);
s__32067__$1 = G__32162;
continue;
}
} else {
return null;
}
break;
}
});})(sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
,null,null));
});})(sx,sy,sz,s,map__32065,map__32065__$1,p__$1,size__$1,map__32063,map__32063__$1,p,size,map__32064,map__32064__$1,num,cols,rows,slices))
;
return iter__13361__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__32085,p__32086){
var map__32087 = p__32085;
var map__32087__$1 = ((cljs.core.seq_QMARK_(map__32087))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32087):map__32087);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32087__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32087__$1,cljs.core.constant$keyword$size);
var vec__32088 = p__32086;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32088,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32088,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32088,(2),null);
var q = vec__32088;
var map__32089 = this;
var map__32089__$1 = ((cljs.core.seq_QMARK_(map__32089))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32089):map__32089);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32089__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32089__$1,cljs.core.constant$keyword$size);
var vec__32090 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32090,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32090,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32090,(2),null);
var vec__32091 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32091,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32091,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32091,(2),null);
var on_plane_QMARK_ = ((function (vec__32090,x1,y1,z1,vec__32091,x2,y2,z2,map__32089,map__32089__$1,p__$1,size__$1,map__32087,map__32087__$1,p,size,vec__32088,x,y,z,q){
return (function (p__32092){
var vec__32093 = p__32092;
var minp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(0),null);
var maxp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(1),null);
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(2),null);
var min1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(3),null);
var max1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(4),null);
var min2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(5),null);
var max2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(6),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(7),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(8),null);
var and__12595__auto__ = (function (){var or__12607__auto__ = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(minp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(maxp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__12595__auto__)){
var and__12595__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min1,max1,c1);
if(cljs.core.truth_(and__12595__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min2,max2,c2);
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});})(vec__32090,x1,y1,z1,vec__32091,x2,y2,z2,map__32089,map__32089__$1,p__$1,size__$1,map__32087,map__32087__$1,p,size,vec__32088,x,y,z,q))
;
if(cljs.core.truth_(cljs.core.some(on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__12595__auto__ = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(x1,x2,x);
if(cljs.core.truth_(and__12595__auto__)){
var and__12595__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(y1,y2,y);
if(cljs.core.truth_(and__12595__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(z1,z2,z);
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__32094 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32094,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__32095){
var map__32096 = p__32095;
var map__32096__$1 = ((cljs.core.seq_QMARK_(map__32096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32096):map__32096);
var vec__32097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32096__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32097,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32097,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32097,(2),null);
var map__32098 = this;
var map__32098__$1 = ((cljs.core.seq_QMARK_(map__32098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32098):map__32098);
var vec__32099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32098__$1,cljs.core.constant$keyword$size);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32099,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32099,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32099,(2),null);
return ((w__$1 * h__$1) * d__$1);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__32100,q){
var map__32101 = p__32100;
var map__32101__$1 = ((cljs.core.seq_QMARK_(map__32101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32101):map__32101);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,cljs.core.constant$keyword$p);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,cljs.core.constant$keyword$size);
var map__32102 = this;
var map__32102__$1 = ((cljs.core.seq_QMARK_(map__32102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32102):map__32102);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32102__$1,cljs.core.constant$keyword$p);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32102__$1,cljs.core.constant$keyword$size);
var and__12595__auto__ = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__32107 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32107) : p__$1.call(null,G__32107));
})(),((function (){var G__32108 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32108) : p__$1.call(null,G__32108));
})() + (function (){var G__32109 = (0);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__32109) : s__$1.call(null,G__32109));
})()),(function (){var G__32110 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32110) : q.call(null,G__32110));
})());
if(cljs.core.truth_(and__12595__auto__)){
var and__12595__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__32115 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32115) : p__$1.call(null,G__32115));
})(),((function (){var G__32116 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32116) : p__$1.call(null,G__32116));
})() + (function (){var G__32117 = (1);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__32117) : s__$1.call(null,G__32117));
})()),(function (){var G__32118 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32118) : q.call(null,G__32118));
})());
if(cljs.core.truth_(and__12595__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__32119 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32119) : p__$1.call(null,G__32119));
})(),((function (){var G__32120 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32120) : p__$1.call(null,G__32120));
})() + (function (){var G__32121 = (2);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__32121) : s__$1.call(null,G__32121));
})()),(function (){var G__32122 = (2);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32122) : q.call(null,G__32122));
})());
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$union$arity$2 = (function (p__32123,p__32124){
var map__32125 = p__32123;
var map__32125__$1 = ((cljs.core.seq_QMARK_(map__32125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32125):map__32125);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32125__$1,cljs.core.constant$keyword$p);
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32125__$1,cljs.core.constant$keyword$size);
var map__32126 = p__32124;
var map__32126__$1 = ((cljs.core.seq_QMARK_(map__32126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32126):map__32126);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32126__$1,cljs.core.constant$keyword$p);
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32126__$1,cljs.core.constant$keyword$size);
var map__32127 = this;
var map__32127__$1 = ((cljs.core.seq_QMARK_(map__32127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32127):map__32127);
var pa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32127__$1,cljs.core.constant$keyword$p);
var sa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32127__$1,cljs.core.constant$keyword$size);
var p = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(pa__$1,pb);
return (new thi.ng.geom.types.AABB(p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa__$1,sa__$1),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,sb)),p)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$intersection$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1);
var qa = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1));
var pb = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(b);
var qb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(b));
var p_SINGLEQUOTE_ = thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(qa,qb);
var s_SINGLEQUOTE_ = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_(((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1){
return (function (p1__32044_SHARP_){
return (p1__32044_SHARP_ >= (0));
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1))
,s_SINGLEQUOTE_)){
return (new thi.ng.geom.types.AABB(p_SINGLEQUOTE_,s_SINGLEQUOTE_));
} else {
return null;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.common.error.type_error_BANG_("AABB",s);

}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__32133 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32133,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),t),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__32134){
var map__32135 = p__32134;
var map__32135__$1 = ((cljs.core.seq_QMARK_(map__32135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32135):map__32135);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32135__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32135__$1,cljs.core.constant$keyword$size);
var map__32136 = this;
var map__32136__$1 = ((cljs.core.seq_QMARK_(map__32136))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32136):map__32136);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32136__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32136__$1,cljs.core.constant$keyword$size);
var ext = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(size__$1,0.5);
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,ext),thi.ng.geom.core.mag(ext));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),s)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),sx,sy),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),sx,sy)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),s);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)),-0.5,cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1)),s_SINGLEQUOTE_));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__32137){
var map__32138 = p__32137;
var map__32138__$1 = ((cljs.core.seq_QMARK_(map__32138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32138):map__32138);
var opts = map__32138__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32138__$1,cljs.core.constant$keyword$fn,thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$num,null,cljs.core.constant$keyword$slices,null,cljs.core.constant$keyword$rows,null,cljs.core.constant$keyword$cols,null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),(0));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),(1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),(2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (p__32139){
var map__32140 = p__32139;
var map__32140__$1 = ((cljs.core.seq_QMARK_(map__32140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32140):map__32140);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32140__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32140__$1,cljs.core.constant$keyword$size);
var map__32141 = this;
var map__32141__$1 = ((cljs.core.seq_QMARK_(map__32141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32141):map__32141);
var a__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,cljs.core.constant$keyword$size);
var vec__32142 = a__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(2),null);
var vec__32143 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32143,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32143,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32143,(2),null);
var g = vec__32143;
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2);
var c = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2);
var d = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1);
var e = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1);
var f = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2);
var h = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b,c,d,e,f,g,h], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (p__32144,q){
var map__32145 = p__32144;
var map__32145__$1 = ((cljs.core.seq_QMARK_(map__32145))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32145):map__32145);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32145__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32145__$1,cljs.core.constant$keyword$size);
var map__32146 = this;
var map__32146__$1 = ((cljs.core.seq_QMARK_(map__32146))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32146):map__32146);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32146__$1,cljs.core.constant$keyword$size);
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((((function (){var G__32147 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32147) : q.call(null,G__32147));
})() - (function (){var G__32148 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32148) : p__$1.call(null,G__32148));
})()) / (function (){var G__32149 = (0);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__32149) : size__$1.call(null,G__32149));
})()),(((function (){var G__32150 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32150) : q.call(null,G__32150));
})() - (function (){var G__32151 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32151) : p__$1.call(null,G__32151));
})()) / (function (){var G__32152 = (1);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__32152) : size__$1.call(null,G__32152));
})()),(((function (){var G__32153 = (2);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__32153) : q.call(null,G__32153));
})() - (function (){var G__32154 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__32154) : p__$1.call(null,G__32154));
})()) / (function (){var G__32155 = (2);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__32155) : size__$1.call(null,G__32155));
})()));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.geom.core.madd(q,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__32156){
var map__32157 = p__32156;
var map__32157__$1 = ((cljs.core.seq_QMARK_(map__32157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32157):map__32157);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32157__$1,cljs.core.constant$keyword$mesh);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32157__$1,cljs.core.constant$keyword$flags,"nsewfb");
var ___$1 = this;
var vec__32158 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32158,(7),null);
var vec__32159 = thi.ng.common.data.core.demunge_flags_seq(flags,"nsewfb");
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(0),null);
var bt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(1),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(2),null);
var lf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(3),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(4),null);
var bk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(5),null);
return thi.ng.geom.core.into((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__32128){
var map__32129 = p__32128;
var map__32129__$1 = ((cljs.core.seq_QMARK_(map__32129))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32129):map__32129);
var vec__32130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32129__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130,(2),null);
var map__32131 = this;
var map__32131__$1 = ((cljs.core.seq_QMARK_(map__32131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32131):map__32131);
var vec__32132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32131__$1,cljs.core.constant$keyword$size);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32132,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32132,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32132,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});
