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
var G__26199 = arguments.length;
switch (G__26199) {
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__26202){
var map__26203 = p__26202;
var map__26203__$1 = ((cljs.core.seq_QMARK_(map__26203))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26203):map__26203);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.constant$keyword$size);
var map__26204 = this;
var map__26204__$1 = ((cljs.core.seq_QMARK_(map__26204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26204):map__26204);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(size__$1,-0.5),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__26205,q){
var map__26206 = p__26205;
var map__26206__$1 = ((cljs.core.seq_QMARK_(map__26206))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26206):map__26206);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26206__$1,cljs.core.constant$keyword$size);
var map__26207 = this;
var map__26207__$1 = ((cljs.core.seq_QMARK_(map__26207))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26207):map__26207);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26207__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(size__$1,-0.5,q),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.madd(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),0.5,cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__26208){
var map__26209 = p__26208;
var map__26209__$1 = ((cljs.core.seq_QMARK_(map__26209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26209):map__26209);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,cljs.core.constant$keyword$size);
var map__26210 = this;
var map__26210__$1 = ((cljs.core.seq_QMARK_(map__26210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26210):map__26210);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,cljs.core.constant$keyword$size);
var vec__26211 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(2),null);
var vec__26212 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(2),null);
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__26213){
var map__26214 = p__26213;
var map__26214__$1 = ((cljs.core.seq_QMARK_(map__26214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26214):map__26214);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26214__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26214__$1,cljs.core.constant$keyword$size);
var map__26215 = this;
var map__26215__$1 = ((cljs.core.seq_QMARK_(map__26215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26215):map__26215);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,cljs.core.constant$keyword$size);
var vec__26216 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216,(2),null);
var vec__26217 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(2),null);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__26218,p__26219){
var map__26220 = p__26218;
var map__26220__$1 = ((cljs.core.seq_QMARK_(map__26220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26220):map__26220);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,cljs.core.constant$keyword$size);
var map__26221 = p__26219;
var map__26221__$1 = ((cljs.core.seq_QMARK_(map__26221))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26221):map__26221);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26221__$1,cljs.core.constant$keyword$num,(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26221__$1,cljs.core.constant$keyword$cols);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26221__$1,cljs.core.constant$keyword$rows);
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26221__$1,cljs.core.constant$keyword$slices);
var map__26222 = this;
var map__26222__$1 = ((cljs.core.seq_QMARK_(map__26222))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26222):map__26222);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26222__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26222__$1,cljs.core.constant$keyword$size);
var sx = (function (){var or__12575__auto__ = cols;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__12575__auto__ = rows;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__12575__auto__ = slices;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return num;
}
})();
var s = thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4(size__$1,sx,sy,sz);
var iter__13329__auto__ = ((function (sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__26223(s__26224){
return (new cljs.core.LazySeq(null,((function (sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function (){
var s__26224__$1 = s__26224;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__26224__$1);
if(temp__4422__auto__){
var xs__4974__auto__ = temp__4422__auto__;
var z = cljs.core.first(xs__4974__auto__);
var iterys__13325__auto__ = ((function (s__26224__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__26223_$_iter__26225(s__26226){
return (new cljs.core.LazySeq(null,((function (s__26224__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function (){
var s__26226__$1 = s__26226;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__26226__$1);
if(temp__4422__auto____$1){
var xs__4974__auto____$1 = temp__4422__auto____$1;
var y = cljs.core.first(xs__4974__auto____$1);
var iterys__13325__auto__ = ((function (s__26226__$1,s__26224__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__26223_$_iter__26225_$_iter__26227(s__26228){
return (new cljs.core.LazySeq(null,((function (s__26226__$1,s__26224__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices){
return (function (){
var s__26228__$1 = s__26228;
while(true){
var temp__4422__auto____$2 = cljs.core.seq(s__26228__$1);
if(temp__4422__auto____$2){
var s__26228__$2 = temp__4422__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__26228__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__26228__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__26230 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__26229 = (0);
while(true){
if((i__26229 < size__13328__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__26229);
cljs.core.chunk_append(b__26230,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),size__$1,p__$1),s)));

var G__26317 = (i__26229 + (1));
i__26229 = G__26317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26230),thi$ng$geom$aabb$iter__26223_$_iter__26225_$_iter__26227(cljs.core.chunk_rest(s__26228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26230),null);
}
} else {
var x = cljs.core.first(s__26228__$2);
return cljs.core.cons((new thi.ng.geom.types.AABB(thi.ng.geom.core.madd(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),size__$1,p__$1),s)),thi$ng$geom$aabb$iter__26223_$_iter__26225_$_iter__26227(cljs.core.rest(s__26228__$2)));
}
} else {
return null;
}
break;
}
});})(s__26226__$1,s__26224__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
,null,null));
});})(s__26226__$1,s__26224__$1,y,xs__4974__auto____$1,temp__4422__auto____$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
;
var fs__13326__auto__ = cljs.core.seq(iterys__13325__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sx))));
if(fs__13326__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13326__auto__,thi$ng$geom$aabb$iter__26223_$_iter__26225(cljs.core.rest(s__26226__$1)));
} else {
var G__26318 = cljs.core.rest(s__26226__$1);
s__26226__$1 = G__26318;
continue;
}
} else {
return null;
}
break;
}
});})(s__26224__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
,null,null));
});})(s__26224__$1,z,xs__4974__auto__,temp__4422__auto__,sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
;
var fs__13326__auto__ = cljs.core.seq(iterys__13325__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sy))));
if(fs__13326__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13326__auto__,thi$ng$geom$aabb$iter__26223(cljs.core.rest(s__26224__$1)));
} else {
var G__26319 = cljs.core.rest(s__26224__$1);
s__26224__$1 = G__26319;
continue;
}
} else {
return null;
}
break;
}
});})(sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
,null,null));
});})(sx,sy,sz,s,map__26222,map__26222__$1,p__$1,size__$1,map__26220,map__26220__$1,p,size,map__26221,map__26221__$1,num,cols,rows,slices))
;
return iter__13329__auto__(cljs.core.butlast(thi.ng.common.math.core.norm_range(sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__26242,p__26243){
var map__26244 = p__26242;
var map__26244__$1 = ((cljs.core.seq_QMARK_(map__26244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26244):map__26244);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26244__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26244__$1,cljs.core.constant$keyword$size);
var vec__26245 = p__26243;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(2),null);
var q = vec__26245;
var map__26246 = this;
var map__26246__$1 = ((cljs.core.seq_QMARK_(map__26246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26246):map__26246);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26246__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26246__$1,cljs.core.constant$keyword$size);
var vec__26247 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26247,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26247,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26247,(2),null);
var vec__26248 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26248,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26248,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26248,(2),null);
var on_plane_QMARK_ = ((function (vec__26247,x1,y1,z1,vec__26248,x2,y2,z2,map__26246,map__26246__$1,p__$1,size__$1,map__26244,map__26244__$1,p,size,vec__26245,x,y,z,q){
return (function (p__26249){
var vec__26250 = p__26249;
var minp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(0),null);
var maxp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(1),null);
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(2),null);
var min1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(3),null);
var max1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(4),null);
var min2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(5),null);
var max2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(6),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(7),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(8),null);
var and__12563__auto__ = (function (){var or__12575__auto__ = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(minp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(maxp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__12563__auto__)){
var and__12563__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min1,max1,c1);
if(cljs.core.truth_(and__12563__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min2,max2,c2);
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});})(vec__26247,x1,y1,z1,vec__26248,x2,y2,z2,map__26246,map__26246__$1,p__$1,size__$1,map__26244,map__26244__$1,p,size,vec__26245,x,y,z,q))
;
if(cljs.core.truth_(cljs.core.some(on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__12563__auto__ = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(x1,x2,x);
if(cljs.core.truth_(and__12563__auto__)){
var and__12563__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(y1,y2,y);
if(cljs.core.truth_(and__12563__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(z1,z2,z);
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
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
var vec__26251 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__26252){
var map__26253 = p__26252;
var map__26253__$1 = ((cljs.core.seq_QMARK_(map__26253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26253):map__26253);
var vec__26254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26253__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(2),null);
var map__26255 = this;
var map__26255__$1 = ((cljs.core.seq_QMARK_(map__26255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26255):map__26255);
var vec__26256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26255__$1,cljs.core.constant$keyword$size);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26256,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26256,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26256,(2),null);
return ((w__$1 * h__$1) * d__$1);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__26257,q){
var map__26258 = p__26257;
var map__26258__$1 = ((cljs.core.seq_QMARK_(map__26258))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26258):map__26258);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26258__$1,cljs.core.constant$keyword$p);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26258__$1,cljs.core.constant$keyword$size);
var map__26259 = this;
var map__26259__$1 = ((cljs.core.seq_QMARK_(map__26259))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26259):map__26259);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26259__$1,cljs.core.constant$keyword$p);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26259__$1,cljs.core.constant$keyword$size);
var and__12563__auto__ = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__26264 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26264) : p__$1.call(null,G__26264));
})(),((function (){var G__26265 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26265) : p__$1.call(null,G__26265));
})() + (function (){var G__26266 = (0);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__26266) : s__$1.call(null,G__26266));
})()),(function (){var G__26267 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26267) : q.call(null,G__26267));
})());
if(cljs.core.truth_(and__12563__auto__)){
var and__12563__auto____$1 = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__26272 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26272) : p__$1.call(null,G__26272));
})(),((function (){var G__26273 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26273) : p__$1.call(null,G__26273));
})() + (function (){var G__26274 = (1);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__26274) : s__$1.call(null,G__26274));
})()),(function (){var G__26275 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26275) : q.call(null,G__26275));
})());
if(cljs.core.truth_(and__12563__auto____$1)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__26276 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26276) : p__$1.call(null,G__26276));
})(),((function (){var G__26277 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26277) : p__$1.call(null,G__26277));
})() + (function (){var G__26278 = (2);
return (s__$1.cljs$core$IFn$_invoke$arity$1 ? s__$1.cljs$core$IFn$_invoke$arity$1(G__26278) : s__$1.call(null,G__26278));
})()),(function (){var G__26279 = (2);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26279) : q.call(null,G__26279));
})());
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$union$arity$2 = (function (p__26280,p__26281){
var map__26282 = p__26280;
var map__26282__$1 = ((cljs.core.seq_QMARK_(map__26282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26282):map__26282);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26282__$1,cljs.core.constant$keyword$p);
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26282__$1,cljs.core.constant$keyword$size);
var map__26283 = p__26281;
var map__26283__$1 = ((cljs.core.seq_QMARK_(map__26283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26283):map__26283);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26283__$1,cljs.core.constant$keyword$p);
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26283__$1,cljs.core.constant$keyword$size);
var map__26284 = this;
var map__26284__$1 = ((cljs.core.seq_QMARK_(map__26284))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26284):map__26284);
var pa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26284__$1,cljs.core.constant$keyword$p);
var sa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26284__$1,cljs.core.constant$keyword$size);
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
return (function (p1__26201_SHARP_){
return (p1__26201_SHARP_ >= (0));
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
var vec__26290 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),t),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__26291){
var map__26292 = p__26291;
var map__26292__$1 = ((cljs.core.seq_QMARK_(map__26292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26292):map__26292);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,cljs.core.constant$keyword$size);
var map__26293 = this;
var map__26293__$1 = ((cljs.core.seq_QMARK_(map__26293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26293):map__26293);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26293__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26293__$1,cljs.core.constant$keyword$size);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__26294){
var map__26295 = p__26294;
var map__26295__$1 = ((cljs.core.seq_QMARK_(map__26295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26295):map__26295);
var opts = map__26295__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26295__$1,cljs.core.constant$keyword$fn,thi.ng.geom.core.utils.tessellate_3);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (p__26296){
var map__26297 = p__26296;
var map__26297__$1 = ((cljs.core.seq_QMARK_(map__26297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26297):map__26297);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26297__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26297__$1,cljs.core.constant$keyword$size);
var map__26298 = this;
var map__26298__$1 = ((cljs.core.seq_QMARK_(map__26298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26298):map__26298);
var a__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26298__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26298__$1,cljs.core.constant$keyword$size);
var vec__26299 = a__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(2),null);
var vec__26300 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26300,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26300,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26300,(2),null);
var g = vec__26300;
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2);
var c = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2);
var d = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1);
var e = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1);
var f = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2);
var h = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b,c,d,e,f,g,h], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (p__26301,q){
var map__26302 = p__26301;
var map__26302__$1 = ((cljs.core.seq_QMARK_(map__26302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26302):map__26302);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26302__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26302__$1,cljs.core.constant$keyword$size);
var map__26303 = this;
var map__26303__$1 = ((cljs.core.seq_QMARK_(map__26303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26303):map__26303);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26303__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26303__$1,cljs.core.constant$keyword$size);
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((((function (){var G__26304 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26304) : q.call(null,G__26304));
})() - (function (){var G__26305 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26305) : p__$1.call(null,G__26305));
})()) / (function (){var G__26306 = (0);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__26306) : size__$1.call(null,G__26306));
})()),(((function (){var G__26307 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26307) : q.call(null,G__26307));
})() - (function (){var G__26308 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26308) : p__$1.call(null,G__26308));
})()) / (function (){var G__26309 = (1);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__26309) : size__$1.call(null,G__26309));
})()),(((function (){var G__26310 = (2);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26310) : q.call(null,G__26310));
})() - (function (){var G__26311 = (2);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26311) : p__$1.call(null,G__26311));
})()) / (function (){var G__26312 = (2);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__26312) : size__$1.call(null,G__26312));
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__26313){
var map__26314 = p__26313;
var map__26314__$1 = ((cljs.core.seq_QMARK_(map__26314))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26314):map__26314);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26314__$1,cljs.core.constant$keyword$mesh);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26314__$1,cljs.core.constant$keyword$flags,"nsewfb");
var ___$1 = this;
var vec__26315 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26315,(7),null);
var vec__26316 = thi.ng.common.data.core.demunge_flags_seq(flags,"nsewfb");
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(0),null);
var bt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(1),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(2),null);
var lf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(3),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(4),null);
var bk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(5),null);
return thi.ng.geom.core.into((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__26285){
var map__26286 = p__26285;
var map__26286__$1 = ((cljs.core.seq_QMARK_(map__26286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26286):map__26286);
var vec__26287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26286__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,(2),null);
var map__26288 = this;
var map__26288__$1 = ((cljs.core.seq_QMARK_(map__26288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26288):map__26288);
var vec__26289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26288__$1,cljs.core.constant$keyword$size);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});
