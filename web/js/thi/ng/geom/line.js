// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.line');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.data.core');
thi.ng.geom.line.line2 = (function thi$ng$geom$line$line2(){
var G__23266 = arguments.length;
switch (G__23266) {
case 1:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1 = (function (p__23267){
var vec__23268 = p__23267;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23268,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23268,(1),null);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(px,py),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(qx,qy)], null)));
});

thi.ng.geom.line.line2.cljs$lang$maxFixedArity = 4;
thi.ng.geom.line.line3 = (function thi$ng$geom$line$line3(){
var G__23271 = arguments.length;
switch (G__23271) {
case 1:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1 = (function (p__23272){
var vec__23273 = p__23272;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23273,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23273,(1),null);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2(px,py),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2(qx,qy)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6 = (function (px,py,pz,qx,qy,qz){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(px,py,pz),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(qx,qy,qz)], null)));
});

thi.ng.geom.line.line3.cljs$lang$maxFixedArity = 6;
thi.ng.geom.line.linestrip2 = (function thi$ng$geom$line$linestrip2(){
var G__23278 = arguments.length;
switch (G__23278) {
case 1:
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__13627__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,1),(0)));
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13627__auto__);

}
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2,cljs.core.cons(p,more))));
});

thi.ng.geom.line.linestrip2.cljs$lang$applyTo = (function (seq23275){
var G__23276 = cljs.core.first(seq23275);
var seq23275__$1 = cljs.core.next(seq23275);
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic(G__23276,seq23275__$1);
});

thi.ng.geom.line.linestrip2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.line.reflect_on_ray = (function thi$ng$geom$line$reflect_on_ray(ctor,p,q,rc,dir){
var G__23282 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(rc,thi.ng.geom.core.reflect(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,rc),dir));
var G__23283 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(rc,thi.ng.geom.core.reflect(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,rc),dir));
return (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(G__23282,G__23283) : ctor.call(null,G__23282,G__23283));
});
thi.ng.geom.line.reflect_on_line = (function thi$ng$geom$line$reflect_on_line(ctor,p,q,rp,rq){
return thi.ng.geom.line.reflect_on_ray(ctor,p,q,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(rp,rq),thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(rq,rp)));
});
thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__23284,m){
var map__23285 = p__23284;
var map__23285__$1 = ((cljs.core.seq_QMARK_(map__23285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23285):map__23285);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,cljs.core.constant$keyword$points);
var map__23286 = this;
var map__23286__$1 = ((cljs.core.seq_QMARK_(map__23286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23286):map__23286);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23286__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(function (){var G__23287 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23287) : p__$1.call(null,G__23287));
})()),thi.ng.geom.core.transform_vector(m,(function (){var G__23288 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23288) : p__$1.call(null,G__23288));
})())], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__23289,theta){
var map__23290 = p__23289;
var map__23290__$1 = ((cljs.core.seq_QMARK_(map__23290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23290):map__23290);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,cljs.core.constant$keyword$points);
var map__23291 = this;
var map__23291__$1 = ((cljs.core.seq_QMARK_(map__23291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23291):map__23291);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate((function (){var G__23292 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23292) : p__$1.call(null,G__23292));
})(),theta),thi.ng.geom.core.rotate((function (){var G__23293 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23293) : p__$1.call(null,G__23293));
})(),theta)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__23294){
var map__23295 = p__23294;
var map__23295__$1 = ((cljs.core.seq_QMARK_(map__23295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23295):map__23295);
var vec__23296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(1),null);
var map__23297 = this;
var map__23297__$1 = ((cljs.core.seq_QMARK_(map__23297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23297):map__23297);
var vec__23298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23298,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23298,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__23299,n){
var map__23300 = p__23299;
var map__23300__$1 = ((cljs.core.seq_QMARK_(map__23300))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23300):map__23300);
var vec__23301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23300__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(1),null);
var map__23302 = this;
var map__23302__$1 = ((cljs.core.seq_QMARK_(map__23302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23302):map__23302);
var vec__23303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__23304,r){
var map__23305 = p__23304;
var map__23305__$1 = ((cljs.core.seq_QMARK_(map__23305))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23305):map__23305);
var vec__23306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23306,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23306,(1),null);
var map__23307 = this;
var map__23307__$1 = ((cljs.core.seq_QMARK_(map__23307))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23307):map__23307);
var vec__23308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23308,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23308,(1),null);
if((r instanceof thi.ng.geom.types.Line2)){
var vec__23309 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line2,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null)));
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__23310){
var map__23311 = p__23310;
var map__23311__$1 = ((cljs.core.seq_QMARK_(map__23311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23311):map__23311);
var vec__23312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23311__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23312,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23312,(1),null);
var map__23313 = this;
var map__23313__$1 = ((cljs.core.seq_QMARK_(map__23313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23313):map__23313);
var vec__23314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23314,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23314,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__23315,o){
var map__23316 = p__23315;
var map__23316__$1 = ((cljs.core.seq_QMARK_(map__23316))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23316):map__23316);
var vec__23317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23316__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317,(1),null);
var map__23318 = this;
var map__23318__$1 = ((cljs.core.seq_QMARK_(map__23318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23318):map__23318);
var vec__23319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23318__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(1),null);
var c = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__23320){
var map__23321 = p__23320;
var map__23321__$1 = ((cljs.core.seq_QMARK_(map__23321))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321):map__23321);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,cljs.core.constant$keyword$points);
var map__23322 = this;
var map__23322__$1 = ((cljs.core.seq_QMARK_(map__23322))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((function (){var G__23323 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23323) : p__$1.call(null,G__23323));
})(),(function (){var G__23324 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23324) : p__$1.call(null,G__23324));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23325,t){
var map__23326 = p__23325;
var map__23326__$1 = ((cljs.core.seq_QMARK_(map__23326))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23326):map__23326);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23326__$1,cljs.core.constant$keyword$points);
var map__23327 = this;
var map__23327__$1 = ((cljs.core.seq_QMARK_(map__23327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23327):map__23327);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23327__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23328 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23328) : p__$1.call(null,G__23328));
})(),(function (){var G__23329 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23329) : p__$1.call(null,G__23329));
})(),t);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23330){
var map__23331 = p__23330;
var map__23331__$1 = ((cljs.core.seq_QMARK_(map__23331))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23331):map__23331);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23331__$1,cljs.core.constant$keyword$points);
var map__23332 = this;
var map__23332__$1 = ((cljs.core.seq_QMARK_(map__23332))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23332):map__23332);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23332__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23333 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23333) : p__$1.call(null,G__23333));
})(),(function (){var G__23334 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23334) : p__$1.call(null,G__23334));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__23335){
var map__23336 = p__23335;
var map__23336__$1 = ((cljs.core.seq_QMARK_(map__23336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23336):map__23336);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,cljs.core.constant$keyword$points);
var map__23337 = this;
var map__23337__$1 = ((cljs.core.seq_QMARK_(map__23337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23337):map__23337);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23338 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23338) : p__$1.call(null,G__23338));
})(),(function (){var G__23339 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23339) : p__$1.call(null,G__23339));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__23340,v){
var map__23341 = p__23340;
var map__23341__$1 = ((cljs.core.seq_QMARK_(map__23341))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23341):map__23341);
var vec__23342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342,(1),null);
var map__23343 = this;
var map__23343__$1 = ((cljs.core.seq_QMARK_(map__23343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23343):map__23343);
var vec__23344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23344,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23344,(1),null);
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.dot(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),p__$1),thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1))),thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23345,p__23346){
var map__23347 = p__23345;
var map__23347__$1 = ((cljs.core.seq_QMARK_(map__23347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23347):map__23347);
var _ = map__23347__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23347__$1,cljs.core.constant$keyword$points);
var map__23348 = p__23346;
var map__23348__$1 = ((cljs.core.seq_QMARK_(map__23348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23348):map__23348);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23348__$1,cljs.core.constant$keyword$depth,1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23348__$1,cljs.core.constant$keyword$scale,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,cljs.core.constant$keyword$offset);
var map__23349 = this;
var map__23349__$1 = ((cljs.core.seq_QMARK_(map__23349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23349):map__23349);
var ___$1 = map__23349__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12575__auto__ = offset;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23350 = (0);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23350) : points__$1.call(null,G__23350));
})());
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23351 = (1);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23351) : points__$1.call(null,G__23351));
})());
var ta = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23352 = (0);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23352) : tpoints.call(null,G__23352));
})());
var tb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23353 = (1);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23353) : tpoints.call(null,G__23353));
})());
return thi.ng.geom.core.add_face((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(___$1,res));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__23354,q){
var map__23355 = p__23354;
var map__23355__$1 = ((cljs.core.seq_QMARK_(map__23355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23355):map__23355);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23355__$1,cljs.core.constant$keyword$points);
var map__23356 = this;
var map__23356__$1 = ((cljs.core.seq_QMARK_(map__23356))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23356):map__23356);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23356__$1,cljs.core.constant$keyword$points);
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23357 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23357) : p__$1.call(null,G__23357));
})(),(function (){var G__23358 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23358) : p__$1.call(null,G__23358));
})()));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__23359,l){
var map__23360 = p__23359;
var map__23360__$1 = ((cljs.core.seq_QMARK_(map__23360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23360):map__23360);
var vec__23361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,cljs.core.constant$keyword$points);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(1),null);
var map__23362 = this;
var map__23362__$1 = ((cljs.core.seq_QMARK_(map__23362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23362):map__23362);
var vec__23363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23362__$1,cljs.core.constant$keyword$points);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363,(1),null);
var vec__23364 = (function (){var or__12575__auto__ = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_(a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (p__23365){
var map__23366 = p__23365;
var map__23366__$1 = ((cljs.core.seq_QMARK_(map__23366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23366):map__23366);
var vec__23367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23366__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(1),null);
var map__23368 = this;
var map__23368__$1 = ((cljs.core.seq_QMARK_(map__23368))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23368):map__23368);
var vec__23369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23368__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369,(1),null);
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__23370,t){
var map__23371 = p__23370;
var map__23371__$1 = ((cljs.core.seq_QMARK_(map__23371))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23371):map__23371);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,cljs.core.constant$keyword$points);
var map__23372 = this;
var map__23372__$1 = ((cljs.core.seq_QMARK_(map__23372))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23372):map__23372);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23373 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23373) : p__$1.call(null,G__23373));
})(),t),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23374 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23374) : p__$1.call(null,G__23374));
})(),t)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__23375,s){
var map__23376 = p__23375;
var map__23376__$1 = ((cljs.core.seq_QMARK_(map__23376))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23376):map__23376);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,cljs.core.constant$keyword$points);
var map__23377 = this;
var map__23377__$1 = ((cljs.core.seq_QMARK_(map__23377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23377):map__23377);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23378 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23378) : p__$1.call(null,G__23378));
})(),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23379 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23379) : p__$1.call(null,G__23379));
})(),s)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__23380,sx,sy){
var map__23381 = p__23380;
var map__23381__$1 = ((cljs.core.seq_QMARK_(map__23381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23381):map__23381);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,cljs.core.constant$keyword$points);
var map__23382 = this;
var map__23382__$1 = ((cljs.core.seq_QMARK_(map__23382))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23382):map__23382);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23382__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23383 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23383) : p__$1.call(null,G__23383));
})(),sx,sy),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23384 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23384) : p__$1.call(null,G__23384));
})(),sx,sy)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__23385,s){
var map__23386 = p__23385;
var map__23386__$1 = ((cljs.core.seq_QMARK_(map__23386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23386):map__23386);
var vec__23387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23386__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(1),null);
var map__23388 = this;
var map__23388__$1 = ((cljs.core.seq_QMARK_(map__23388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23388):map__23388);
var vec__23389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23389,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23389,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),s,c),thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23390){
var map__23391 = p__23390;
var map__23391__$1 = ((cljs.core.seq_QMARK_(map__23391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23391):map__23391);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23391__$1,cljs.core.constant$keyword$points);
var map__23392 = this;
var map__23392__$1 = ((cljs.core.seq_QMARK_(map__23392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23392):map__23392);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23392__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23393 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23393) : p__$1.call(null,G__23393));
})(),(function (){var G__23394 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23394) : p__$1.call(null,G__23394));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__23395){
var map__23396 = p__23395;
var map__23396__$1 = ((cljs.core.seq_QMARK_(map__23396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23396):map__23396);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,cljs.core.constant$keyword$points);
var map__23397 = this;
var map__23397__$1 = ((cljs.core.seq_QMARK_(map__23397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23397):map__23397);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,cljs.core.constant$keyword$points);
var G__23398 = ((function (){var G__23399 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23399) : p__$1.call(null,G__23399));
})().call(null,(0)) - (function (){var G__23400 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23400) : p__$1.call(null,G__23400));
})().call(null,(0)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23398) : thi.ng.common.math.core.abs.call(null,G__23398));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__23401){
var map__23402 = p__23401;
var map__23402__$1 = ((cljs.core.seq_QMARK_(map__23402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23402):map__23402);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23402__$1,cljs.core.constant$keyword$points);
var map__23403 = this;
var map__23403__$1 = ((cljs.core.seq_QMARK_(map__23403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23403):map__23403);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403__$1,cljs.core.constant$keyword$points);
var G__23404 = ((function (){var G__23405 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23405) : p__$1.call(null,G__23405));
})().call(null,(1)) - (function (){var G__23406 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23406) : p__$1.call(null,G__23406));
})().call(null,(1)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23404) : thi.ng.common.math.core.abs.call(null,G__23404));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23407,res){
var map__23408 = p__23407;
var map__23408__$1 = ((cljs.core.seq_QMARK_(map__23408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23408):map__23408);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,cljs.core.constant$keyword$points);
var map__23409 = this;
var map__23409__$1 = ((cljs.core.seq_QMARK_(map__23409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23409):map__23409);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23409__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.sample_segment_with_res((function (){var G__23410 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23410) : p__$1.call(null,G__23410));
})(),(function (){var G__23411 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23411) : p__$1.call(null,G__23411));
})(),res,true);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__23412){
var map__23413 = p__23412;
var map__23413__$1 = ((cljs.core.seq_QMARK_(map__23413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23413):map__23413);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23413__$1,cljs.core.constant$keyword$points);
var map__23414 = this;
var map__23414__$1 = ((cljs.core.seq_QMARK_(map__23414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23414):map__23414);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23414__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23415 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23415) : p__$1.call(null,G__23415));
})(),(function (){var G__23416 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23416) : p__$1.call(null,G__23416));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__23417){
var map__23418 = p__23417;
var map__23418__$1 = ((cljs.core.seq_QMARK_(map__23418))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23418):map__23418);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23418__$1,cljs.core.constant$keyword$points);
var map__23419 = this;
var map__23419__$1 = ((cljs.core.seq_QMARK_(map__23419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23419):map__23419);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23419__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist_squared((function (){var G__23420 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23420) : p__$1.call(null,G__23420));
})(),(function (){var G__23421 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23421) : p__$1.call(null,G__23421));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23422,v){
var map__23423 = p__23422;
var map__23423__$1 = ((cljs.core.seq_QMARK_(map__23423))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23423):map__23423);
var vec__23424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(1),null);
var map__23425 = this;
var map__23425__$1 = ((cljs.core.seq_QMARK_(map__23425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23425):map__23425);
var vec__23426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23425__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23426,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23426,(1),null);
var pred__23427 = cljs.core._EQ_;
var expr__23428 = v;
if(cljs.core.truth_((function (){var G__23430 = p__$1;
var G__23431 = expr__23428;
return (pred__23427.cljs$core$IFn$_invoke$arity$2 ? pred__23427.cljs$core$IFn$_invoke$arity$2(G__23430,G__23431) : pred__23427.call(null,G__23430,G__23431));
})())){
return q__$1;
} else {
if(cljs.core.truth_((function (){var G__23432 = q__$1;
var G__23433 = expr__23428;
return (pred__23427.cljs$core$IFn$_invoke$arity$2 ? pred__23427.cljs$core$IFn$_invoke$arity$2(G__23432,G__23433) : pred__23427.call(null,G__23432,G__23433));
})())){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23434,v){
var map__23435 = p__23434;
var map__23435__$1 = ((cljs.core.seq_QMARK_(map__23435))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23435):map__23435);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23435__$1,cljs.core.constant$keyword$points);
var map__23436 = this;
var map__23436__$1 = ((cljs.core.seq_QMARK_(map__23436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23436):map__23436);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23436__$1,cljs.core.constant$keyword$points);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23439 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23439) : p__$1.call(null,G__23439));
})())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23440 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23440) : p__$1.call(null,G__23440));
})()))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__23441,q){
var map__23442 = p__23441;
var map__23442__$1 = ((cljs.core.seq_QMARK_(map__23442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23442):map__23442);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,cljs.core.constant$keyword$points);
var map__23443 = this;
var map__23443__$1 = ((cljs.core.seq_QMARK_(map__23443))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23443):map__23443);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23443__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.closest_point_on_segment(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23444 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23444) : p__$1.call(null,G__23444));
})(),(function (){var G__23445 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23445) : p__$1.call(null,G__23445));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return (0);
});
thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__23446,m){
var map__23447 = p__23446;
var map__23447__$1 = ((cljs.core.seq_QMARK_(map__23447))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23447):map__23447);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23447__$1,cljs.core.constant$keyword$points);
var map__23448 = this;
var map__23448__$1 = ((cljs.core.seq_QMARK_(map__23448))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23448):map__23448);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(function (){var G__23449 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23449) : p__$1.call(null,G__23449));
})()),thi.ng.geom.core.transform_vector(m,(function (){var G__23450 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23450) : p__$1.call(null,G__23450));
})())], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__23451,theta){
var map__23452 = p__23451;
var map__23452__$1 = ((cljs.core.seq_QMARK_(map__23452))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23452):map__23452);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23452__$1,cljs.core.constant$keyword$points);
var map__23453 = this;
var map__23453__$1 = ((cljs.core.seq_QMARK_(map__23453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23453):map__23453);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23453__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate((function (){var G__23454 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23454) : p__$1.call(null,G__23454));
})(),theta),thi.ng.geom.core.rotate((function (){var G__23455 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23455) : p__$1.call(null,G__23455));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__23456){
var map__23457 = p__23456;
var map__23457__$1 = ((cljs.core.seq_QMARK_(map__23457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23457):map__23457);
var vec__23458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23457__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23458,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23458,(1),null);
var map__23459 = this;
var map__23459__$1 = ((cljs.core.seq_QMARK_(map__23459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23459):map__23459);
var vec__23460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23459__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23460,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23460,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__23461,n){
var map__23462 = p__23461;
var map__23462__$1 = ((cljs.core.seq_QMARK_(map__23462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23462):map__23462);
var vec__23463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23462__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(1),null);
var map__23464 = this;
var map__23464__$1 = ((cljs.core.seq_QMARK_(map__23464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23464):map__23464);
var vec__23465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23465,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23465,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (p__23466,theta){
var map__23467 = p__23466;
var map__23467__$1 = ((cljs.core.seq_QMARK_(map__23467))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23467):map__23467);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23467__$1,cljs.core.constant$keyword$points);
var map__23468 = this;
var map__23468__$1 = ((cljs.core.seq_QMARK_(map__23468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23468):map__23468);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23468__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_x((function (){var G__23469 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23469) : p__$1.call(null,G__23469));
})(),theta),thi.ng.geom.core.rotate_x((function (){var G__23470 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23470) : p__$1.call(null,G__23470));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (p__23471,theta){
var map__23472 = p__23471;
var map__23472__$1 = ((cljs.core.seq_QMARK_(map__23472))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23472):map__23472);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23472__$1,cljs.core.constant$keyword$points);
var map__23473 = this;
var map__23473__$1 = ((cljs.core.seq_QMARK_(map__23473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23473):map__23473);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_y((function (){var G__23474 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23474) : p__$1.call(null,G__23474));
})(),theta),thi.ng.geom.core.rotate_y((function (){var G__23475 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23475) : p__$1.call(null,G__23475));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (p__23476,theta){
var map__23477 = p__23476;
var map__23477__$1 = ((cljs.core.seq_QMARK_(map__23477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23477):map__23477);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23477__$1,cljs.core.constant$keyword$points);
var map__23478 = this;
var map__23478__$1 = ((cljs.core.seq_QMARK_(map__23478))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23478):map__23478);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23478__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_z((function (){var G__23479 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23479) : p__$1.call(null,G__23479));
})(),theta),thi.ng.geom.core.rotate_z((function (){var G__23480 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23480) : p__$1.call(null,G__23480));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (p__23481,axis,theta){
var map__23482 = p__23481;
var map__23482__$1 = ((cljs.core.seq_QMARK_(map__23482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23482):map__23482);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23482__$1,cljs.core.constant$keyword$points);
var map__23483 = this;
var map__23483__$1 = ((cljs.core.seq_QMARK_(map__23483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23483):map__23483);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23483__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_around_axis((function (){var G__23484 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23484) : p__$1.call(null,G__23484));
})(),axis,theta),thi.ng.geom.core.rotate_around_axis((function (){var G__23485 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23485) : p__$1.call(null,G__23485));
})(),axis,theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__23486,r){
var map__23487 = p__23486;
var map__23487__$1 = ((cljs.core.seq_QMARK_(map__23487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23487):map__23487);
var vec__23488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23487__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(1),null);
var map__23489 = this;
var map__23489__$1 = ((cljs.core.seq_QMARK_(map__23489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23489):map__23489);
var vec__23490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(1),null);
if((r instanceof thi.ng.geom.types.Line3)){
var vec__23491 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line3,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null)));
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__23492){
var map__23493 = p__23492;
var map__23493__$1 = ((cljs.core.seq_QMARK_(map__23493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23493):map__23493);
var vec__23494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23493__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23494,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23494,(1),null);
var map__23495 = this;
var map__23495__$1 = ((cljs.core.seq_QMARK_(map__23495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23495):map__23495);
var vec__23496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23496,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23496,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__23497,o){
var map__23498 = p__23497;
var map__23498__$1 = ((cljs.core.seq_QMARK_(map__23498))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23498):map__23498);
var vec__23499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(1),null);
var map__23500 = this;
var map__23500__$1 = ((cljs.core.seq_QMARK_(map__23500))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23500):map__23500);
var vec__23501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23500__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23501,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23501,(1),null);
var c = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__23502){
var map__23503 = p__23502;
var map__23503__$1 = ((cljs.core.seq_QMARK_(map__23503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23503):map__23503);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23503__$1,cljs.core.constant$keyword$points);
var map__23504 = this;
var map__23504__$1 = ((cljs.core.seq_QMARK_(map__23504))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23504):map__23504);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23504__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((function (){var G__23505 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23505) : p__$1.call(null,G__23505));
})(),(function (){var G__23506 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23506) : p__$1.call(null,G__23506));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23507,t){
var map__23508 = p__23507;
var map__23508__$1 = ((cljs.core.seq_QMARK_(map__23508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23508):map__23508);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23508__$1,cljs.core.constant$keyword$points);
var map__23509 = this;
var map__23509__$1 = ((cljs.core.seq_QMARK_(map__23509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23509):map__23509);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23510 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23510) : p__$1.call(null,G__23510));
})(),(function (){var G__23511 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23511) : p__$1.call(null,G__23511));
})(),t);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23512){
var map__23513 = p__23512;
var map__23513__$1 = ((cljs.core.seq_QMARK_(map__23513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23513):map__23513);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23513__$1,cljs.core.constant$keyword$points);
var map__23514 = this;
var map__23514__$1 = ((cljs.core.seq_QMARK_(map__23514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23514):map__23514);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23514__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23515 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23515) : p__$1.call(null,G__23515));
})(),(function (){var G__23516 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23516) : p__$1.call(null,G__23516));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__23517){
var map__23518 = p__23517;
var map__23518__$1 = ((cljs.core.seq_QMARK_(map__23518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23518):map__23518);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23518__$1,cljs.core.constant$keyword$points);
var map__23519 = this;
var map__23519__$1 = ((cljs.core.seq_QMARK_(map__23519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23519):map__23519);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23519__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23520 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23520) : p__$1.call(null,G__23520));
})(),(function (){var G__23521 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23521) : p__$1.call(null,G__23521));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__23522,p){
var map__23523 = p__23522;
var map__23523__$1 = ((cljs.core.seq_QMARK_(map__23523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23523):map__23523);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23523__$1,cljs.core.constant$keyword$points);
var map__23524 = this;
var map__23524__$1 = ((cljs.core.seq_QMARK_(map__23524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23524):map__23524);
var p__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.constant$keyword$points);
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23525,p__23526){
var map__23527 = p__23525;
var map__23527__$1 = ((cljs.core.seq_QMARK_(map__23527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23527):map__23527);
var _ = map__23527__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23527__$1,cljs.core.constant$keyword$points);
var map__23528 = p__23526;
var map__23528__$1 = ((cljs.core.seq_QMARK_(map__23528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23528):map__23528);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23528__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23528__$1,cljs.core.constant$keyword$depth,1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23528__$1,cljs.core.constant$keyword$scale,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23528__$1,cljs.core.constant$keyword$offset);
var map__23529 = this;
var map__23529__$1 = ((cljs.core.seq_QMARK_(map__23529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23529):map__23529);
var ___$1 = map__23529__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23529__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12575__auto__ = offset;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23530 = (0);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23530) : points__$1.call(null,G__23530));
})());
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23531 = (1);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23531) : points__$1.call(null,G__23531));
})());
var ta = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23532 = (0);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23532) : tpoints.call(null,G__23532));
})());
var tb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23533 = (1);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23533) : tpoints.call(null,G__23533));
})());
return thi.ng.geom.core.add_face((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(___$1,res));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__23534,q){
var map__23535 = p__23534;
var map__23535__$1 = ((cljs.core.seq_QMARK_(map__23535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23535):map__23535);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.constant$keyword$points);
var map__23536 = this;
var map__23536__$1 = ((cljs.core.seq_QMARK_(map__23536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23536):map__23536);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23536__$1,cljs.core.constant$keyword$points);
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23537 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23537) : p__$1.call(null,G__23537));
})(),(function (){var G__23538 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23538) : p__$1.call(null,G__23538));
})()));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__23539,l){
var map__23540 = p__23539;
var map__23540__$1 = ((cljs.core.seq_QMARK_(map__23540))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23540):map__23540);
var vec__23541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540__$1,cljs.core.constant$keyword$points);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23541,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23541,(1),null);
var map__23542 = this;
var map__23542__$1 = ((cljs.core.seq_QMARK_(map__23542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23542):map__23542);
var vec__23543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23542__$1,cljs.core.constant$keyword$points);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543,(1),null);
var vec__23544 = (function (){var or__12575__auto__ = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23544,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23544,(1),null);
return thi.ng.geom.core.utils.closest_line_between(a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__23545,t){
var map__23546 = p__23545;
var map__23546__$1 = ((cljs.core.seq_QMARK_(map__23546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23546):map__23546);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23546__$1,cljs.core.constant$keyword$points);
var map__23547 = this;
var map__23547__$1 = ((cljs.core.seq_QMARK_(map__23547))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23547):map__23547);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23547__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23548 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23548) : p__$1.call(null,G__23548));
})(),t),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23549 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23549) : p__$1.call(null,G__23549));
})(),t)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__23550){
var map__23551 = p__23550;
var map__23551__$1 = ((cljs.core.seq_QMARK_(map__23551))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23551):map__23551);
var vec__23552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23551__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(1),null);
var map__23553 = this;
var map__23553__$1 = ((cljs.core.seq_QMARK_(map__23553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23553):map__23553);
var vec__23554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(1),null);
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__23555,s){
var map__23556 = p__23555;
var map__23556__$1 = ((cljs.core.seq_QMARK_(map__23556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23556):map__23556);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23556__$1,cljs.core.constant$keyword$points);
var map__23557 = this;
var map__23557__$1 = ((cljs.core.seq_QMARK_(map__23557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23557):map__23557);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23557__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23558 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23558) : p__$1.call(null,G__23558));
})(),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23559 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23559) : p__$1.call(null,G__23559));
})(),s)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__23560,sx,sy){
var map__23561 = p__23560;
var map__23561__$1 = ((cljs.core.seq_QMARK_(map__23561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23561):map__23561);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561__$1,cljs.core.constant$keyword$points);
var map__23562 = this;
var map__23562__$1 = ((cljs.core.seq_QMARK_(map__23562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23562):map__23562);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23563 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23563) : p__$1.call(null,G__23563));
})(),sx,sy),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23564 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23564) : p__$1.call(null,G__23564));
})(),sx,sy)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__23565,s){
var map__23566 = p__23565;
var map__23566__$1 = ((cljs.core.seq_QMARK_(map__23566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23566):map__23566);
var vec__23567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23567,(1),null);
var map__23568 = this;
var map__23568__$1 = ((cljs.core.seq_QMARK_(map__23568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23568):map__23568);
var vec__23569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23568__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),s,c),thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23570){
var map__23571 = p__23570;
var map__23571__$1 = ((cljs.core.seq_QMARK_(map__23571))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23571):map__23571);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23571__$1,cljs.core.constant$keyword$points);
var map__23572 = this;
var map__23572__$1 = ((cljs.core.seq_QMARK_(map__23572))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23572):map__23572);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23573 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23573) : p__$1.call(null,G__23573));
})(),(function (){var G__23574 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23574) : p__$1.call(null,G__23574));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__23575){
var map__23576 = p__23575;
var map__23576__$1 = ((cljs.core.seq_QMARK_(map__23576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23576):map__23576);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23576__$1,cljs.core.constant$keyword$points);
var map__23577 = this;
var map__23577__$1 = ((cljs.core.seq_QMARK_(map__23577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23577):map__23577);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23577__$1,cljs.core.constant$keyword$points);
var G__23578 = ((function (){var G__23579 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23579) : p__$1.call(null,G__23579));
})().call(null,(0)) - (function (){var G__23580 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23580) : p__$1.call(null,G__23580));
})().call(null,(0)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23578) : thi.ng.common.math.core.abs.call(null,G__23578));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__23581){
var map__23582 = p__23581;
var map__23582__$1 = ((cljs.core.seq_QMARK_(map__23582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23582):map__23582);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,cljs.core.constant$keyword$points);
var map__23583 = this;
var map__23583__$1 = ((cljs.core.seq_QMARK_(map__23583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23583):map__23583);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.constant$keyword$points);
var G__23584 = ((function (){var G__23585 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23585) : p__$1.call(null,G__23585));
})().call(null,(1)) - (function (){var G__23586 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23586) : p__$1.call(null,G__23586));
})().call(null,(1)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23584) : thi.ng.common.math.core.abs.call(null,G__23584));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (p__23587){
var map__23588 = p__23587;
var map__23588__$1 = ((cljs.core.seq_QMARK_(map__23588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23588):map__23588);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,cljs.core.constant$keyword$points);
var map__23589 = this;
var map__23589__$1 = ((cljs.core.seq_QMARK_(map__23589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23589):map__23589);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23589__$1,cljs.core.constant$keyword$points);
var G__23590 = ((function (){var G__23591 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23591) : p__$1.call(null,G__23591));
})().call(null,(2)) - (function (){var G__23592 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23592) : p__$1.call(null,G__23592));
})().call(null,(2)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23590) : thi.ng.common.math.core.abs.call(null,G__23590));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23593,res){
var map__23594 = p__23593;
var map__23594__$1 = ((cljs.core.seq_QMARK_(map__23594))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23594):map__23594);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23594__$1,cljs.core.constant$keyword$points);
var map__23595 = this;
var map__23595__$1 = ((cljs.core.seq_QMARK_(map__23595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23595):map__23595);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23595__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.sample_segment_with_res((function (){var G__23596 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23596) : p__$1.call(null,G__23596));
})(),(function (){var G__23597 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23597) : p__$1.call(null,G__23597));
})(),res,true);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__23598){
var map__23599 = p__23598;
var map__23599__$1 = ((cljs.core.seq_QMARK_(map__23599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23599):map__23599);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$points);
var map__23600 = this;
var map__23600__$1 = ((cljs.core.seq_QMARK_(map__23600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23600):map__23600);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23601 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23601) : p__$1.call(null,G__23601));
})(),(function (){var G__23602 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23602) : p__$1.call(null,G__23602));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__23603){
var map__23604 = p__23603;
var map__23604__$1 = ((cljs.core.seq_QMARK_(map__23604))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23604):map__23604);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,cljs.core.constant$keyword$points);
var map__23605 = this;
var map__23605__$1 = ((cljs.core.seq_QMARK_(map__23605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23605):map__23605);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist_squared((function (){var G__23606 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23606) : p__$1.call(null,G__23606));
})(),(function (){var G__23607 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23607) : p__$1.call(null,G__23607));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23608,v){
var map__23609 = p__23608;
var map__23609__$1 = ((cljs.core.seq_QMARK_(map__23609))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23609):map__23609);
var vec__23610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23610,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23610,(1),null);
var map__23611 = this;
var map__23611__$1 = ((cljs.core.seq_QMARK_(map__23611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23611):map__23611);
var vec__23612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(1),null);
var pred__23613 = cljs.core._EQ_;
var expr__23614 = v;
if(cljs.core.truth_((function (){var G__23616 = p__$1;
var G__23617 = expr__23614;
return (pred__23613.cljs$core$IFn$_invoke$arity$2 ? pred__23613.cljs$core$IFn$_invoke$arity$2(G__23616,G__23617) : pred__23613.call(null,G__23616,G__23617));
})())){
return q__$1;
} else {
if(cljs.core.truth_((function (){var G__23618 = q__$1;
var G__23619 = expr__23614;
return (pred__23613.cljs$core$IFn$_invoke$arity$2 ? pred__23613.cljs$core$IFn$_invoke$arity$2(G__23618,G__23619) : pred__23613.call(null,G__23618,G__23619));
})())){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23620,v){
var map__23621 = p__23620;
var map__23621__$1 = ((cljs.core.seq_QMARK_(map__23621))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23621):map__23621);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23621__$1,cljs.core.constant$keyword$points);
var map__23622 = this;
var map__23622__$1 = ((cljs.core.seq_QMARK_(map__23622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23622):map__23622);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23622__$1,cljs.core.constant$keyword$points);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23625 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23625) : p__$1.call(null,G__23625));
})())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23626 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23626) : p__$1.call(null,G__23626));
})()))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__23627,q){
var map__23628 = p__23627;
var map__23628__$1 = ((cljs.core.seq_QMARK_(map__23628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23628):map__23628);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23628__$1,cljs.core.constant$keyword$points);
var map__23629 = this;
var map__23629__$1 = ((cljs.core.seq_QMARK_(map__23629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23629):map__23629);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23629__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.closest_point_on_segment(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23630 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23630) : p__$1.call(null,G__23630));
})(),(function (){var G__23631 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23631) : p__$1.call(null,G__23631));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23639_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__23639_SHARP_);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23635_SHARP_){
return thi.ng.geom.core.rotate(p1__23635_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23634_SHARP_){
return thi.ng.geom.core.reflect(p1__23634_SHARP_,r);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(o),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point(___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23640,p__23641){
var map__23642 = p__23640;
var map__23642__$1 = ((cljs.core.seq_QMARK_(map__23642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23642):map__23642);
var _ = map__23642__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23642__$1,cljs.core.constant$keyword$points);
var map__23643 = p__23641;
var map__23643__$1 = ((cljs.core.seq_QMARK_(map__23643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23643):map__23643);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23643__$1,cljs.core.constant$keyword$depth,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,cljs.core.constant$keyword$offset);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23643__$1,cljs.core.constant$keyword$scale,1.0);
var map__23644 = this;
var map__23644__$1 = ((cljs.core.seq_QMARK_(map__23644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23644):map__23644);
var ___$1 = map__23644__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23644__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12575__auto__ = offset;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var bottom = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3,points__$1);
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (tpoints,off,bottom,map__23644,map__23644__$1,___$1,points__$1,map__23642,map__23642__$1,_,points,map__23643,map__23643__$1,mesh,depth,offset,scale){
return (function (p1__23632_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,p1__23632_SHARP_);
});})(tpoints,off,bottom,map__23644,map__23644__$1,___$1,points__$1,map__23642,map__23642__$1,_,points,map__23643,map__23643__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (tpoints,off,bottom,top,map__23644,map__23644__$1,___$1,points__$1,map__23642,map__23642__$1,_,points,map__23643,map__23643__$1,mesh,depth,offset,scale){
return (function (p__23645,p__23646){
var vec__23647 = p__23645;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(1),null);
var vec__23648 = p__23646;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,bottom,top,map__23644,map__23644__$1,___$1,points__$1,map__23642,map__23642__$1,_,points,map__23643,map__23643__$1,mesh,depth,offset,scale))
,cljs.core.array_seq([thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),bottom),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),top)], 0)));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(___$1,res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23638_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__23638_SHARP_,t);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23636_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__23636_SHARP_,s);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23637_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(p1__23637_SHARP_,sx,sy);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag(___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((0),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23649,res){
var map__23650 = p__23649;
var map__23650__$1 = ((cljs.core.seq_QMARK_(map__23650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23650):map__23650);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23650__$1,cljs.core.constant$keyword$points);
var map__23651 = this;
var map__23651__$1 = ((cljs.core.seq_QMARK_(map__23651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23651):map__23651);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23651__$1,cljs.core.constant$keyword$points);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23651,map__23651__$1,points__$1,map__23650,map__23650__$1,points){
return (function (p1__23633_SHARP_){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__23633_SHARP_,points__$1);
});})(map__23651,map__23651__$1,points__$1,map__23650,map__23650__$1,points))
,thi.ng.common.math.core.norm_range(res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist_squared,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.common.data.core.neighbors(v,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23652,v){
var map__23653 = p__23652;
var map__23653__$1 = ((cljs.core.seq_QMARK_(map__23653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23653):map__23653);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23653__$1,cljs.core.constant$keyword$points);
var map__23654 = this;
var map__23654__$1 = ((cljs.core.seq_QMARK_(map__23654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23654):map__23654);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,cljs.core.constant$keyword$points);
var temp__4420__auto__ = thi.ng.common.data.core.neighbors(v,points__$1);
if(cljs.core.truth_(temp__4420__auto__)){
var p = temp__4420__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(points__$1),cljs.core.peek(points__$1))){
return (2);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(points__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.peek(points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23665_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__23665_SHARP_);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23658_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__23658_SHARP_,axis,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23659_SHARP_){
return thi.ng.geom.core.rotate_x(p1__23659_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23660_SHARP_){
return thi.ng.geom.core.rotate_y(p1__23660_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23661_SHARP_){
return thi.ng.geom.core.rotate_z(p1__23661_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23657_SHARP_){
return thi.ng.geom.core.reflect(p1__23657_SHARP_,r);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point(___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23666,p__23667){
var map__23668 = p__23666;
var map__23668__$1 = ((cljs.core.seq_QMARK_(map__23668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23668):map__23668);
var _ = map__23668__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23668__$1,cljs.core.constant$keyword$points);
var map__23669 = p__23667;
var map__23669__$1 = ((cljs.core.seq_QMARK_(map__23669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23669):map__23669);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23669__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23669__$1,cljs.core.constant$keyword$depth,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23669__$1,cljs.core.constant$keyword$offset);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23669__$1,cljs.core.constant$keyword$scale,1.0);
var map__23670 = this;
var map__23670__$1 = ((cljs.core.seq_QMARK_(map__23670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23670):map__23670);
var ___$1 = map__23670__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23670__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12575__auto__ = offset;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (tpoints,off,map__23670,map__23670__$1,___$1,points__$1,map__23668,map__23668__$1,_,points,map__23669,map__23669__$1,mesh,depth,offset,scale){
return (function (p1__23655_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,p1__23655_SHARP_);
});})(tpoints,off,map__23670,map__23670__$1,___$1,points__$1,map__23668,map__23668__$1,_,points,map__23669,map__23669__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into((function (){var or__12575__auto__ = mesh;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (tpoints,off,top,map__23670,map__23670__$1,___$1,points__$1,map__23668,map__23668__$1,_,points,map__23669,map__23669__$1,mesh,depth,offset,scale){
return (function (p__23671,p__23672){
var vec__23673 = p__23671;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23673,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23673,(1),null);
var vec__23674 = p__23672;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23674,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23674,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,top,map__23670,map__23670__$1,___$1,points__$1,map__23668,map__23668__$1,_,points,map__23669,map__23669__$1,mesh,depth,offset,scale))
,cljs.core.array_seq([thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points__$1),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),top)], 0)));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(___$1,res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23664_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__23664_SHARP_,t);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23662_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__23662_SHARP_,s);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23663_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(p1__23663_SHARP_,sx,sy);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag(___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((0),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((1),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((2),cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23675,res){
var map__23676 = p__23675;
var map__23676__$1 = ((cljs.core.seq_QMARK_(map__23676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23676):map__23676);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23676__$1,cljs.core.constant$keyword$points);
var map__23677 = this;
var map__23677__$1 = ((cljs.core.seq_QMARK_(map__23677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23677):map__23677);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677__$1,cljs.core.constant$keyword$points);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23677,map__23677__$1,points__$1,map__23676,map__23676__$1,points){
return (function (p1__23656_SHARP_){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__23656_SHARP_,points__$1);
});})(map__23677,map__23677__$1,points__$1,map__23676,map__23676__$1,points))
,thi.ng.common.math.core.norm_range(res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist_squared,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.common.data.core.neighbors(v,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23678,v){
var map__23679 = p__23678;
var map__23679__$1 = ((cljs.core.seq_QMARK_(map__23679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23679):map__23679);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23679__$1,cljs.core.constant$keyword$points);
var map__23680 = this;
var map__23680__$1 = ((cljs.core.seq_QMARK_(map__23680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23680):map__23680);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,cljs.core.constant$keyword$points);
var temp__4420__auto__ = thi.ng.common.data.core.neighbors(v,points__$1);
if(cljs.core.truth_(temp__4420__auto__)){
var p = temp__4420__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(points__$1),cljs.core.peek(points__$1))){
return (2);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(points__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.peek(points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
