// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.cuboid');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
thi.ng.geom.cuboid.cuboid = (function thi$ng$geom$cuboid$cuboid(){
var G__32166 = arguments.length;
switch (G__32166) {
case 0:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0();

break;
case 8:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 1:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1(1.0);
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null))));
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(typeof x === 'number'){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0(),x);
} else {
if(cljs.core.map_QMARK_(x)){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(x),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(x));
} else {
if(cljs.core.sequential_QMARK_(x)){
if(((8) === cljs.core.count(x))){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3,x)));
} else {
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2("Wrong number of points, expected 8 but got",cljs.core.count(x));
}
} else {
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
var vec__32167 = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(o);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(2),null);
var a = vec__32167;
var vec__32168 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,size);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32168,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32168,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32168,(2),null);
var g = vec__32168;
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2);
var c = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2);
var d = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1);
var e = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1);
var f = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2);
var h = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1);
return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)));
});

thi.ng.geom.cuboid.cuboid.cljs$lang$maxFixedArity = 8;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32180_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__32180_SHARP_);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32172_SHARP_){
return thi.ng.geom.core.rotate_x(p1__32172_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32173_SHARP_){
return thi.ng.geom.core.rotate_y(p1__32173_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32174_SHARP_){
return thi.ng.geom.core.rotate_z(p1__32174_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32175_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__32175_SHARP_,axis,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__32181){
var map__32182 = p__32181;
var map__32182__$1 = ((cljs.core.seq_QMARK_(map__32182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32182):map__32182);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32182__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32182__$1,cljs.core.constant$keyword$size);
var map__32183 = this;
var map__32183__$1 = ((cljs.core.seq_QMARK_(map__32183))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32183):map__32183);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32183__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32183__$1,cljs.core.constant$keyword$size);
var vec__32184 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32184,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32184,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32184,(2),null);
var vec__32185 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32185,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32185,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32185,(2),null);
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__32186){
var map__32187 = p__32186;
var map__32187__$1 = ((cljs.core.seq_QMARK_(map__32187))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32187):map__32187);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,cljs.core.constant$keyword$size);
var map__32188 = this;
var map__32188__$1 = ((cljs.core.seq_QMARK_(map__32188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32188):map__32188);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32188__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32188__$1,cljs.core.constant$keyword$size);
var vec__32189 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32189,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32189,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32189,(2),null);
var vec__32190 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32190,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32190,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32190,(2),null);
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

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__32191,p__32192){
var map__32193 = p__32191;
var map__32193__$1 = ((cljs.core.seq_QMARK_(map__32193))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32193):map__32193);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32193__$1,cljs.core.constant$keyword$points);
var map__32194 = p__32192;
var map__32194__$1 = ((cljs.core.seq_QMARK_(map__32194))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32194):map__32194);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32194__$1,cljs.core.constant$keyword$num,(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32194__$1,cljs.core.constant$keyword$cols);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32194__$1,cljs.core.constant$keyword$rows);
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32194__$1,cljs.core.constant$keyword$slices);
var map__32195 = this;
var map__32195__$1 = ((cljs.core.seq_QMARK_(map__32195))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32195):map__32195);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32195__$1,cljs.core.constant$keyword$points);
var ru = thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.common.math.core.norm_range((function (){var or__12607__auto__ = cols;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})()));
var rv = thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.common.math.core.norm_range((function (){var or__12607__auto__ = rows;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})()));
var rw = thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.common.math.core.norm_range((function (){var or__12607__auto__ = slices;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return num;
}
})()));
var map_p = ((function (ru,rv,rw,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function (p){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (ru,rv,rw,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function (p1__32171_SHARP_){
return thi.ng.common.math.core.roundto(p1__32171_SHARP_,thi.ng.common.math.core._STAR_eps_STAR_);
});})(ru,rv,rw,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
,thi.ng.geom.core.utils.map_trilinear(points__$1,p)));
});})(ru,rv,rw,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
;
var iter__13361__auto__ = ((function (ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__32196(s__32197){
return (new cljs.core.LazySeq(null,((function (ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function (){
var s__32197__$1 = s__32197;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__32197__$1);
if(temp__4422__auto__){
var xs__4974__auto__ = temp__4422__auto__;
var vec__32221 = cljs.core.first(xs__4974__auto__);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(0),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(1),null);
var iterys__13357__auto__ = ((function (s__32197__$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__32196_$_iter__32198(s__32199){
return (new cljs.core.LazySeq(null,((function (s__32197__$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function (){
var s__32199__$1 = s__32199;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__32199__$1);
if(temp__4422__auto____$1){
var xs__4974__auto____$1 = temp__4422__auto____$1;
var vec__32230 = cljs.core.first(xs__4974__auto____$1);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32230,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32230,(1),null);
var iterys__13357__auto__ = ((function (s__32199__$1,s__32197__$1,vec__32230,v1,v2,xs__4974__auto____$1,temp__4422__auto____$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__32196_$_iter__32198_$_iter__32200(s__32201){
return (new cljs.core.LazySeq(null,((function (s__32199__$1,s__32197__$1,vec__32230,v1,v2,xs__4974__auto____$1,temp__4422__auto____$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices){
return (function (){
var s__32201__$1 = s__32201;
while(true){
var temp__4422__auto____$2 = cljs.core.seq(s__32201__$1);
if(temp__4422__auto____$2){
var s__32201__$2 = temp__4422__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__32201__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__32201__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__32203 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__32202 = (0);
while(true){
if((i__32202 < size__13360__auto__)){
var vec__32235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__32202);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32235,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32235,(1),null);
cljs.core.chunk_append(b__32203,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))));

var G__32246 = (i__32202 + (1));
i__32202 = G__32246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32203),thi$ng$geom$cuboid$iter__32196_$_iter__32198_$_iter__32200(cljs.core.chunk_rest(s__32201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32203),null);
}
} else {
var vec__32236 = cljs.core.first(s__32201__$2);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32236,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32236,(1),null);
return cljs.core.cons((new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))),thi$ng$geom$cuboid$iter__32196_$_iter__32198_$_iter__32200(cljs.core.rest(s__32201__$2)));
}
} else {
return null;
}
break;
}
});})(s__32199__$1,s__32197__$1,vec__32230,v1,v2,xs__4974__auto____$1,temp__4422__auto____$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
,null,null));
});})(s__32199__$1,s__32197__$1,vec__32230,v1,v2,xs__4974__auto____$1,temp__4422__auto____$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
;
var fs__13358__auto__ = cljs.core.seq(iterys__13357__auto__(ru));
if(fs__13358__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13358__auto__,thi$ng$geom$cuboid$iter__32196_$_iter__32198(cljs.core.rest(s__32199__$1)));
} else {
var G__32247 = cljs.core.rest(s__32199__$1);
s__32199__$1 = G__32247;
continue;
}
} else {
return null;
}
break;
}
});})(s__32197__$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
,null,null));
});})(s__32197__$1,vec__32221,w1,w2,xs__4974__auto__,temp__4422__auto__,ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
;
var fs__13358__auto__ = cljs.core.seq(iterys__13357__auto__(rv));
if(fs__13358__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13358__auto__,thi$ng$geom$cuboid$iter__32196(cljs.core.rest(s__32197__$1)));
} else {
var G__32248 = cljs.core.rest(s__32197__$1);
s__32197__$1 = G__32248;
continue;
}
} else {
return null;
}
break;
}
});})(ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
,null,null));
});})(ru,rv,rw,map_p,map__32195,map__32195__$1,points__$1,map__32193,map__32193__$1,points,map__32194,map__32194__$1,num,cols,rows,slices))
;
return iter__13361__auto__(rw);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return (- cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (c,f){
var c_SINGLEQUOTE_ = thi.ng.geom.core.classify_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
if((c_SINGLEQUOTE_ > (0))){
return cljs.core.reduced(c_SINGLEQUOTE_);
} else {
var x__12919__auto__ = c;
var y__12920__auto__ = c_SINGLEQUOTE_;
return ((x__12919__auto__ > y__12920__auto__) ? x__12919__auto__ : y__12920__auto__);
}
});})(___$1))
,-1.0,thi.ng.geom.core.faces(___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__32237 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.classify_point(___$1,p) >= (0));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__32238 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32179_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__32179_SHARP_,t);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32176_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__32176_SHARP_,s);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32177_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(p1__32177_SHARP_,sx,sy);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32178_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4(p1__32178_SHARP_,sx,sy,sz);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__32239){
var map__32240 = p__32239;
var map__32240__$1 = ((cljs.core.seq_QMARK_(map__32240))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32240):map__32240);
var opts = map__32240__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32240__$1,cljs.core.constant$keyword$fn,thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$num,null,cljs.core.constant$keyword$slices,null,cljs.core.constant$keyword$rows,null,cljs.core.constant$keyword$cols,null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((0),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((2),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.core.utils.map_trilinear(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1),p);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__32241){
var map__32242 = p__32241;
var map__32242__$1 = ((cljs.core.seq_QMARK_(map__32242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32242):map__32242);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32242__$1,cljs.core.constant$keyword$mesh);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32242__$1,cljs.core.constant$keyword$flags,"nsewfb");
var ___$1 = this;
var vec__32243 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(7),null);
var vec__32244 = thi.ng.common.data.core.demunge_flags_seq(flags,"nsewfb");
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(0),null);
var bt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(1),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(2),null);
var lf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(3),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(4),null);
var bk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(5),null);
return thi.ng.geom.core.into((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (acc,f){
var p_SINGLEQUOTE_ = thi.ng.geom.core.closest_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
var d = thi.ng.geom.core.dist_squared(p,p_SINGLEQUOTE_);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p_SINGLEQUOTE_,d], 0));

if((d < (function (){var G__32245 = (1);
return (acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(G__32245) : acc.call(null,G__32245));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,d], null);
} else {
return acc;
}
});})(___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1.0E100], null),thi.ng.geom.core.faces(___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (___$1){
return (function (p1__32170_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.tri_area3,p1__32170_SHARP_);
});})(___$1))
),cljs.core._PLUS_,thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1(___$1));
});
