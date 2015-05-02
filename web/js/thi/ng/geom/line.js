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
var G__23272 = arguments.length;
switch (G__23272) {
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

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1 = (function (p__23273){
var vec__23274 = p__23273;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(1),null);
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
var G__23277 = arguments.length;
switch (G__23277) {
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

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1 = (function (p__23278){
var vec__23279 = p__23278;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23279,(1),null);
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
var G__23284 = arguments.length;
switch (G__23284) {
case 1:
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__13659__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,1),(0)));
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13659__auto__);

}
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2,cljs.core.cons(p,more))));
});

thi.ng.geom.line.linestrip2.cljs$lang$applyTo = (function (seq23281){
var G__23282 = cljs.core.first(seq23281);
var seq23281__$1 = cljs.core.next(seq23281);
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic(G__23282,seq23281__$1);
});

thi.ng.geom.line.linestrip2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.line.reflect_on_ray = (function thi$ng$geom$line$reflect_on_ray(ctor,p,q,rc,dir){
var G__23288 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(rc,thi.ng.geom.core.reflect(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,rc),dir));
var G__23289 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(rc,thi.ng.geom.core.reflect(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,rc),dir));
return (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(G__23288,G__23289) : ctor.call(null,G__23288,G__23289));
});
thi.ng.geom.line.reflect_on_line = (function thi$ng$geom$line$reflect_on_line(ctor,p,q,rp,rq){
return thi.ng.geom.line.reflect_on_ray(ctor,p,q,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(rp,rq),thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(rq,rp)));
});
thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__23290,m){
var map__23291 = p__23290;
var map__23291__$1 = ((cljs.core.seq_QMARK_(map__23291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23291):map__23291);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291__$1,cljs.core.constant$keyword$points);
var map__23292 = this;
var map__23292__$1 = ((cljs.core.seq_QMARK_(map__23292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23292):map__23292);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(function (){var G__23293 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23293) : p__$1.call(null,G__23293));
})()),thi.ng.geom.core.transform_vector(m,(function (){var G__23294 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23294) : p__$1.call(null,G__23294));
})())], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__23295,theta){
var map__23296 = p__23295;
var map__23296__$1 = ((cljs.core.seq_QMARK_(map__23296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23296):map__23296);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23296__$1,cljs.core.constant$keyword$points);
var map__23297 = this;
var map__23297__$1 = ((cljs.core.seq_QMARK_(map__23297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23297):map__23297);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23297__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate((function (){var G__23298 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23298) : p__$1.call(null,G__23298));
})(),theta),thi.ng.geom.core.rotate((function (){var G__23299 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23299) : p__$1.call(null,G__23299));
})(),theta)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__23300){
var map__23301 = p__23300;
var map__23301__$1 = ((cljs.core.seq_QMARK_(map__23301))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23301):map__23301);
var vec__23302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23302,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23302,(1),null);
var map__23303 = this;
var map__23303__$1 = ((cljs.core.seq_QMARK_(map__23303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23303):map__23303);
var vec__23304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23303__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__23305,n){
var map__23306 = p__23305;
var map__23306__$1 = ((cljs.core.seq_QMARK_(map__23306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23306):map__23306);
var vec__23307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23307,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23307,(1),null);
var map__23308 = this;
var map__23308__$1 = ((cljs.core.seq_QMARK_(map__23308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23308):map__23308);
var vec__23309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23308__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__23310,r){
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
if((r instanceof thi.ng.geom.types.Line2)){
var vec__23315 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23315,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23315,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line2,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null)));
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__23316){
var map__23317 = p__23316;
var map__23317__$1 = ((cljs.core.seq_QMARK_(map__23317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23317):map__23317);
var vec__23318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23317__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(1),null);
var map__23319 = this;
var map__23319__$1 = ((cljs.core.seq_QMARK_(map__23319))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23319):map__23319);
var vec__23320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23319__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23320,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23320,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__23321,o){
var map__23322 = p__23321;
var map__23322__$1 = ((cljs.core.seq_QMARK_(map__23322))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var vec__23323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(1),null);
var map__23324 = this;
var map__23324__$1 = ((cljs.core.seq_QMARK_(map__23324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23324):map__23324);
var vec__23325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(1),null);
var c = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__23326){
var map__23327 = p__23326;
var map__23327__$1 = ((cljs.core.seq_QMARK_(map__23327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23327):map__23327);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23327__$1,cljs.core.constant$keyword$points);
var map__23328 = this;
var map__23328__$1 = ((cljs.core.seq_QMARK_(map__23328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23328):map__23328);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((function (){var G__23329 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23329) : p__$1.call(null,G__23329));
})(),(function (){var G__23330 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23330) : p__$1.call(null,G__23330));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23331,t){
var map__23332 = p__23331;
var map__23332__$1 = ((cljs.core.seq_QMARK_(map__23332))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23332):map__23332);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23332__$1,cljs.core.constant$keyword$points);
var map__23333 = this;
var map__23333__$1 = ((cljs.core.seq_QMARK_(map__23333))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23333):map__23333);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23334 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23334) : p__$1.call(null,G__23334));
})(),(function (){var G__23335 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23335) : p__$1.call(null,G__23335));
})(),t);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23336){
var map__23337 = p__23336;
var map__23337__$1 = ((cljs.core.seq_QMARK_(map__23337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23337):map__23337);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337__$1,cljs.core.constant$keyword$points);
var map__23338 = this;
var map__23338__$1 = ((cljs.core.seq_QMARK_(map__23338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23338):map__23338);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23338__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23339 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23339) : p__$1.call(null,G__23339));
})(),(function (){var G__23340 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23340) : p__$1.call(null,G__23340));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__23341){
var map__23342 = p__23341;
var map__23342__$1 = ((cljs.core.seq_QMARK_(map__23342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23342):map__23342);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23342__$1,cljs.core.constant$keyword$points);
var map__23343 = this;
var map__23343__$1 = ((cljs.core.seq_QMARK_(map__23343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23343):map__23343);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23344 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23344) : p__$1.call(null,G__23344));
})(),(function (){var G__23345 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23345) : p__$1.call(null,G__23345));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__23346,v){
var map__23347 = p__23346;
var map__23347__$1 = ((cljs.core.seq_QMARK_(map__23347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23347):map__23347);
var vec__23348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23347__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(1),null);
var map__23349 = this;
var map__23349__$1 = ((cljs.core.seq_QMARK_(map__23349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23349):map__23349);
var vec__23350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350,(1),null);
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.dot(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),p__$1),thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1))),thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23351,p__23352){
var map__23353 = p__23351;
var map__23353__$1 = ((cljs.core.seq_QMARK_(map__23353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23353):map__23353);
var _ = map__23353__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23353__$1,cljs.core.constant$keyword$points);
var map__23354 = p__23352;
var map__23354__$1 = ((cljs.core.seq_QMARK_(map__23354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23354):map__23354);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23354__$1,cljs.core.constant$keyword$depth,1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23354__$1,cljs.core.constant$keyword$scale,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23354__$1,cljs.core.constant$keyword$offset);
var map__23355 = this;
var map__23355__$1 = ((cljs.core.seq_QMARK_(map__23355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23355):map__23355);
var ___$1 = map__23355__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23355__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12607__auto__ = offset;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23356 = (0);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23356) : points__$1.call(null,G__23356));
})());
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23357 = (1);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23357) : points__$1.call(null,G__23357));
})());
var ta = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23358 = (0);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23358) : tpoints.call(null,G__23358));
})());
var tb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23359 = (1);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23359) : tpoints.call(null,G__23359));
})());
return thi.ng.geom.core.add_face((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
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

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__23360,q){
var map__23361 = p__23360;
var map__23361__$1 = ((cljs.core.seq_QMARK_(map__23361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23361):map__23361);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.constant$keyword$points);
var map__23362 = this;
var map__23362__$1 = ((cljs.core.seq_QMARK_(map__23362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23362):map__23362);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23362__$1,cljs.core.constant$keyword$points);
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23363 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23363) : p__$1.call(null,G__23363));
})(),(function (){var G__23364 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23364) : p__$1.call(null,G__23364));
})()));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__23365,l){
var map__23366 = p__23365;
var map__23366__$1 = ((cljs.core.seq_QMARK_(map__23366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23366):map__23366);
var vec__23367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23366__$1,cljs.core.constant$keyword$points);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(1),null);
var map__23368 = this;
var map__23368__$1 = ((cljs.core.seq_QMARK_(map__23368))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23368):map__23368);
var vec__23369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23368__$1,cljs.core.constant$keyword$points);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369,(1),null);
var vec__23370 = (function (){var or__12607__auto__ = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_(a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (p__23371){
var map__23372 = p__23371;
var map__23372__$1 = ((cljs.core.seq_QMARK_(map__23372))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23372):map__23372);
var vec__23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(1),null);
var map__23374 = this;
var map__23374__$1 = ((cljs.core.seq_QMARK_(map__23374))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23374):map__23374);
var vec__23375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23375,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23375,(1),null);
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__23376,t){
var map__23377 = p__23376;
var map__23377__$1 = ((cljs.core.seq_QMARK_(map__23377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23377):map__23377);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,cljs.core.constant$keyword$points);
var map__23378 = this;
var map__23378__$1 = ((cljs.core.seq_QMARK_(map__23378))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23378):map__23378);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23378__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23379 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23379) : p__$1.call(null,G__23379));
})(),t),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23380 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23380) : p__$1.call(null,G__23380));
})(),t)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__23381,s){
var map__23382 = p__23381;
var map__23382__$1 = ((cljs.core.seq_QMARK_(map__23382))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23382):map__23382);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23382__$1,cljs.core.constant$keyword$points);
var map__23383 = this;
var map__23383__$1 = ((cljs.core.seq_QMARK_(map__23383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23383):map__23383);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23384 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23384) : p__$1.call(null,G__23384));
})(),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23385 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23385) : p__$1.call(null,G__23385));
})(),s)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__23386,sx,sy){
var map__23387 = p__23386;
var map__23387__$1 = ((cljs.core.seq_QMARK_(map__23387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23387):map__23387);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23387__$1,cljs.core.constant$keyword$points);
var map__23388 = this;
var map__23388__$1 = ((cljs.core.seq_QMARK_(map__23388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23388):map__23388);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23389 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23389) : p__$1.call(null,G__23389));
})(),sx,sy),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23390 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23390) : p__$1.call(null,G__23390));
})(),sx,sy)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__23391,s){
var map__23392 = p__23391;
var map__23392__$1 = ((cljs.core.seq_QMARK_(map__23392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23392):map__23392);
var vec__23393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23392__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23393,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23393,(1),null);
var map__23394 = this;
var map__23394__$1 = ((cljs.core.seq_QMARK_(map__23394))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23394):map__23394);
var vec__23395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23394__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),s,c),thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23396){
var map__23397 = p__23396;
var map__23397__$1 = ((cljs.core.seq_QMARK_(map__23397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23397):map__23397);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,cljs.core.constant$keyword$points);
var map__23398 = this;
var map__23398__$1 = ((cljs.core.seq_QMARK_(map__23398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23398):map__23398);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23399 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23399) : p__$1.call(null,G__23399));
})(),(function (){var G__23400 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23400) : p__$1.call(null,G__23400));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__23401){
var map__23402 = p__23401;
var map__23402__$1 = ((cljs.core.seq_QMARK_(map__23402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23402):map__23402);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23402__$1,cljs.core.constant$keyword$points);
var map__23403 = this;
var map__23403__$1 = ((cljs.core.seq_QMARK_(map__23403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23403):map__23403);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403__$1,cljs.core.constant$keyword$points);
var G__23404 = ((function (){var G__23405 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23405) : p__$1.call(null,G__23405));
})().call(null,(0)) - (function (){var G__23406 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23406) : p__$1.call(null,G__23406));
})().call(null,(0)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23404) : thi.ng.common.math.core.abs.call(null,G__23404));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__23407){
var map__23408 = p__23407;
var map__23408__$1 = ((cljs.core.seq_QMARK_(map__23408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23408):map__23408);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,cljs.core.constant$keyword$points);
var map__23409 = this;
var map__23409__$1 = ((cljs.core.seq_QMARK_(map__23409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23409):map__23409);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23409__$1,cljs.core.constant$keyword$points);
var G__23410 = ((function (){var G__23411 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23411) : p__$1.call(null,G__23411));
})().call(null,(1)) - (function (){var G__23412 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23412) : p__$1.call(null,G__23412));
})().call(null,(1)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23410) : thi.ng.common.math.core.abs.call(null,G__23410));
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

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23413,res){
var map__23414 = p__23413;
var map__23414__$1 = ((cljs.core.seq_QMARK_(map__23414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23414):map__23414);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23414__$1,cljs.core.constant$keyword$points);
var map__23415 = this;
var map__23415__$1 = ((cljs.core.seq_QMARK_(map__23415))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23415):map__23415);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.sample_segment_with_res((function (){var G__23416 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23416) : p__$1.call(null,G__23416));
})(),(function (){var G__23417 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23417) : p__$1.call(null,G__23417));
})(),res,true);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__23418){
var map__23419 = p__23418;
var map__23419__$1 = ((cljs.core.seq_QMARK_(map__23419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23419):map__23419);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23419__$1,cljs.core.constant$keyword$points);
var map__23420 = this;
var map__23420__$1 = ((cljs.core.seq_QMARK_(map__23420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23420):map__23420);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23420__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23421 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23421) : p__$1.call(null,G__23421));
})(),(function (){var G__23422 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23422) : p__$1.call(null,G__23422));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__23423){
var map__23424 = p__23423;
var map__23424__$1 = ((cljs.core.seq_QMARK_(map__23424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23424):map__23424);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23424__$1,cljs.core.constant$keyword$points);
var map__23425 = this;
var map__23425__$1 = ((cljs.core.seq_QMARK_(map__23425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23425):map__23425);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23425__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist_squared((function (){var G__23426 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23426) : p__$1.call(null,G__23426));
})(),(function (){var G__23427 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23427) : p__$1.call(null,G__23427));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23428,v){
var map__23429 = p__23428;
var map__23429__$1 = ((cljs.core.seq_QMARK_(map__23429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23429):map__23429);
var vec__23430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23429__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23430,(1),null);
var map__23431 = this;
var map__23431__$1 = ((cljs.core.seq_QMARK_(map__23431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23431):map__23431);
var vec__23432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23431__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(1),null);
var pred__23433 = cljs.core._EQ_;
var expr__23434 = v;
if(cljs.core.truth_((function (){var G__23436 = p__$1;
var G__23437 = expr__23434;
return (pred__23433.cljs$core$IFn$_invoke$arity$2 ? pred__23433.cljs$core$IFn$_invoke$arity$2(G__23436,G__23437) : pred__23433.call(null,G__23436,G__23437));
})())){
return q__$1;
} else {
if(cljs.core.truth_((function (){var G__23438 = q__$1;
var G__23439 = expr__23434;
return (pred__23433.cljs$core$IFn$_invoke$arity$2 ? pred__23433.cljs$core$IFn$_invoke$arity$2(G__23438,G__23439) : pred__23433.call(null,G__23438,G__23439));
})())){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23440,v){
var map__23441 = p__23440;
var map__23441__$1 = ((cljs.core.seq_QMARK_(map__23441))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23441):map__23441);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23441__$1,cljs.core.constant$keyword$points);
var map__23442 = this;
var map__23442__$1 = ((cljs.core.seq_QMARK_(map__23442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23442):map__23442);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,cljs.core.constant$keyword$points);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23445 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23445) : p__$1.call(null,G__23445));
})())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23446 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23446) : p__$1.call(null,G__23446));
})()))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__23447,q){
var map__23448 = p__23447;
var map__23448__$1 = ((cljs.core.seq_QMARK_(map__23448))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23448):map__23448);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,cljs.core.constant$keyword$points);
var map__23449 = this;
var map__23449__$1 = ((cljs.core.seq_QMARK_(map__23449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23449):map__23449);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23449__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.closest_point_on_segment(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23450 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23450) : p__$1.call(null,G__23450));
})(),(function (){var G__23451 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23451) : p__$1.call(null,G__23451));
})());
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return (0);
});
thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__23452,m){
var map__23453 = p__23452;
var map__23453__$1 = ((cljs.core.seq_QMARK_(map__23453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23453):map__23453);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23453__$1,cljs.core.constant$keyword$points);
var map__23454 = this;
var map__23454__$1 = ((cljs.core.seq_QMARK_(map__23454))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23454):map__23454);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23454__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(function (){var G__23455 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23455) : p__$1.call(null,G__23455));
})()),thi.ng.geom.core.transform_vector(m,(function (){var G__23456 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23456) : p__$1.call(null,G__23456));
})())], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__23457,theta){
var map__23458 = p__23457;
var map__23458__$1 = ((cljs.core.seq_QMARK_(map__23458))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23458):map__23458);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458__$1,cljs.core.constant$keyword$points);
var map__23459 = this;
var map__23459__$1 = ((cljs.core.seq_QMARK_(map__23459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23459):map__23459);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23459__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate((function (){var G__23460 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23460) : p__$1.call(null,G__23460));
})(),theta),thi.ng.geom.core.rotate((function (){var G__23461 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23461) : p__$1.call(null,G__23461));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__23462){
var map__23463 = p__23462;
var map__23463__$1 = ((cljs.core.seq_QMARK_(map__23463))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23463):map__23463);
var vec__23464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23463__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23464,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23464,(1),null);
var map__23465 = this;
var map__23465__$1 = ((cljs.core.seq_QMARK_(map__23465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23465):map__23465);
var vec__23466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23465__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__23467,n){
var map__23468 = p__23467;
var map__23468__$1 = ((cljs.core.seq_QMARK_(map__23468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23468):map__23468);
var vec__23469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23468__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469,(1),null);
var map__23470 = this;
var map__23470__$1 = ((cljs.core.seq_QMARK_(map__23470))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23470):map__23470);
var vec__23471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23470__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23471,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23471,(1),null);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (p__23472,theta){
var map__23473 = p__23472;
var map__23473__$1 = ((cljs.core.seq_QMARK_(map__23473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23473):map__23473);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,cljs.core.constant$keyword$points);
var map__23474 = this;
var map__23474__$1 = ((cljs.core.seq_QMARK_(map__23474))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23474):map__23474);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23474__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_x((function (){var G__23475 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23475) : p__$1.call(null,G__23475));
})(),theta),thi.ng.geom.core.rotate_x((function (){var G__23476 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23476) : p__$1.call(null,G__23476));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (p__23477,theta){
var map__23478 = p__23477;
var map__23478__$1 = ((cljs.core.seq_QMARK_(map__23478))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23478):map__23478);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23478__$1,cljs.core.constant$keyword$points);
var map__23479 = this;
var map__23479__$1 = ((cljs.core.seq_QMARK_(map__23479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23479):map__23479);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_y((function (){var G__23480 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23480) : p__$1.call(null,G__23480));
})(),theta),thi.ng.geom.core.rotate_y((function (){var G__23481 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23481) : p__$1.call(null,G__23481));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (p__23482,theta){
var map__23483 = p__23482;
var map__23483__$1 = ((cljs.core.seq_QMARK_(map__23483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23483):map__23483);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23483__$1,cljs.core.constant$keyword$points);
var map__23484 = this;
var map__23484__$1 = ((cljs.core.seq_QMARK_(map__23484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23484):map__23484);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23484__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_z((function (){var G__23485 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23485) : p__$1.call(null,G__23485));
})(),theta),thi.ng.geom.core.rotate_z((function (){var G__23486 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23486) : p__$1.call(null,G__23486));
})(),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (p__23487,axis,theta){
var map__23488 = p__23487;
var map__23488__$1 = ((cljs.core.seq_QMARK_(map__23488))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23488):map__23488);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23488__$1,cljs.core.constant$keyword$points);
var map__23489 = this;
var map__23489__$1 = ((cljs.core.seq_QMARK_(map__23489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23489):map__23489);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_around_axis((function (){var G__23490 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23490) : p__$1.call(null,G__23490));
})(),axis,theta),thi.ng.geom.core.rotate_around_axis((function (){var G__23491 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23491) : p__$1.call(null,G__23491));
})(),axis,theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__23492,r){
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
if((r instanceof thi.ng.geom.types.Line3)){
var vec__23497 = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23497,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23497,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line3,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null)));
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__23498){
var map__23499 = p__23498;
var map__23499__$1 = ((cljs.core.seq_QMARK_(map__23499))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23499):map__23499);
var vec__23500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23499__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23500,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23500,(1),null);
var map__23501 = this;
var map__23501__$1 = ((cljs.core.seq_QMARK_(map__23501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23501):map__23501);
var vec__23502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__23503,o){
var map__23504 = p__23503;
var map__23504__$1 = ((cljs.core.seq_QMARK_(map__23504))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23504):map__23504);
var vec__23505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23504__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(1),null);
var map__23506 = this;
var map__23506__$1 = ((cljs.core.seq_QMARK_(map__23506))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23506):map__23506);
var vec__23507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23506__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23507,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23507,(1),null);
var c = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,c),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__23508){
var map__23509 = p__23508;
var map__23509__$1 = ((cljs.core.seq_QMARK_(map__23509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23509):map__23509);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,cljs.core.constant$keyword$points);
var map__23510 = this;
var map__23510__$1 = ((cljs.core.seq_QMARK_(map__23510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23510):map__23510);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23510__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((function (){var G__23511 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23511) : p__$1.call(null,G__23511));
})(),(function (){var G__23512 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23512) : p__$1.call(null,G__23512));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23513,t){
var map__23514 = p__23513;
var map__23514__$1 = ((cljs.core.seq_QMARK_(map__23514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23514):map__23514);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23514__$1,cljs.core.constant$keyword$points);
var map__23515 = this;
var map__23515__$1 = ((cljs.core.seq_QMARK_(map__23515))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23515):map__23515);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23515__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23516 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23516) : p__$1.call(null,G__23516));
})(),(function (){var G__23517 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23517) : p__$1.call(null,G__23517));
})(),t);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23518){
var map__23519 = p__23518;
var map__23519__$1 = ((cljs.core.seq_QMARK_(map__23519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23519):map__23519);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23519__$1,cljs.core.constant$keyword$points);
var map__23520 = this;
var map__23520__$1 = ((cljs.core.seq_QMARK_(map__23520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23520):map__23520);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23520__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23521 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23521) : p__$1.call(null,G__23521));
})(),(function (){var G__23522 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23522) : p__$1.call(null,G__23522));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__23523){
var map__23524 = p__23523;
var map__23524__$1 = ((cljs.core.seq_QMARK_(map__23524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23524):map__23524);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.constant$keyword$points);
var map__23525 = this;
var map__23525__$1 = ((cljs.core.seq_QMARK_(map__23525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23525):map__23525);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((function (){var G__23526 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23526) : p__$1.call(null,G__23526));
})(),(function (){var G__23527 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23527) : p__$1.call(null,G__23527));
})(),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__23528,p){
var map__23529 = p__23528;
var map__23529__$1 = ((cljs.core.seq_QMARK_(map__23529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23529):map__23529);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23529__$1,cljs.core.constant$keyword$points);
var map__23530 = this;
var map__23530__$1 = ((cljs.core.seq_QMARK_(map__23530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23530):map__23530);
var p__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23530__$1,cljs.core.constant$keyword$points);
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23531,p__23532){
var map__23533 = p__23531;
var map__23533__$1 = ((cljs.core.seq_QMARK_(map__23533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23533):map__23533);
var _ = map__23533__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23533__$1,cljs.core.constant$keyword$points);
var map__23534 = p__23532;
var map__23534__$1 = ((cljs.core.seq_QMARK_(map__23534))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23534):map__23534);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23534__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23534__$1,cljs.core.constant$keyword$depth,1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23534__$1,cljs.core.constant$keyword$scale,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23534__$1,cljs.core.constant$keyword$offset);
var map__23535 = this;
var map__23535__$1 = ((cljs.core.seq_QMARK_(map__23535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23535):map__23535);
var ___$1 = map__23535__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12607__auto__ = offset;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23536 = (0);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23536) : points__$1.call(null,G__23536));
})());
var b = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((function (){var G__23537 = (1);
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__23537) : points__$1.call(null,G__23537));
})());
var ta = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23538 = (0);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23538) : tpoints.call(null,G__23538));
})());
var tb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,(function (){var G__23539 = (1);
return (tpoints.cljs$core$IFn$_invoke$arity$1 ? tpoints.cljs$core$IFn$_invoke$arity$1(G__23539) : tpoints.call(null,G__23539));
})());
return thi.ng.geom.core.add_face((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
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

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__23540,q){
var map__23541 = p__23540;
var map__23541__$1 = ((cljs.core.seq_QMARK_(map__23541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23541):map__23541);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23541__$1,cljs.core.constant$keyword$points);
var map__23542 = this;
var map__23542__$1 = ((cljs.core.seq_QMARK_(map__23542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23542):map__23542);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23542__$1,cljs.core.constant$keyword$points);
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23543 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23543) : p__$1.call(null,G__23543));
})(),(function (){var G__23544 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23544) : p__$1.call(null,G__23544));
})()));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__23545,l){
var map__23546 = p__23545;
var map__23546__$1 = ((cljs.core.seq_QMARK_(map__23546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23546):map__23546);
var vec__23547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23546__$1,cljs.core.constant$keyword$points);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(1),null);
var map__23548 = this;
var map__23548__$1 = ((cljs.core.seq_QMARK_(map__23548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23548):map__23548);
var vec__23549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23548__$1,cljs.core.constant$keyword$points);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(1),null);
var vec__23550 = (function (){var or__12607__auto__ = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23550,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23550,(1),null);
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

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__23551,t){
var map__23552 = p__23551;
var map__23552__$1 = ((cljs.core.seq_QMARK_(map__23552))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23552):map__23552);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23552__$1,cljs.core.constant$keyword$points);
var map__23553 = this;
var map__23553__$1 = ((cljs.core.seq_QMARK_(map__23553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23553):map__23553);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23554 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23554) : p__$1.call(null,G__23554));
})(),t),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__23555 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23555) : p__$1.call(null,G__23555));
})(),t)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__23556){
var map__23557 = p__23556;
var map__23557__$1 = ((cljs.core.seq_QMARK_(map__23557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23557):map__23557);
var vec__23558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23557__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(1),null);
var map__23559 = this;
var map__23559__$1 = ((cljs.core.seq_QMARK_(map__23559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23559):map__23559);
var vec__23560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23559__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(1),null);
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__23561,s){
var map__23562 = p__23561;
var map__23562__$1 = ((cljs.core.seq_QMARK_(map__23562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23562):map__23562);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23562__$1,cljs.core.constant$keyword$points);
var map__23563 = this;
var map__23563__$1 = ((cljs.core.seq_QMARK_(map__23563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23563):map__23563);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23563__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23564 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23564) : p__$1.call(null,G__23564));
})(),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__23565 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23565) : p__$1.call(null,G__23565));
})(),s)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__23566,sx,sy){
var map__23567 = p__23566;
var map__23567__$1 = ((cljs.core.seq_QMARK_(map__23567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23567):map__23567);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.constant$keyword$points);
var map__23568 = this;
var map__23568__$1 = ((cljs.core.seq_QMARK_(map__23568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23568):map__23568);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23568__$1,cljs.core.constant$keyword$points);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23569 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23569) : p__$1.call(null,G__23569));
})(),sx,sy),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((function (){var G__23570 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23570) : p__$1.call(null,G__23570));
})(),sx,sy)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__23571,s){
var map__23572 = p__23571;
var map__23572__$1 = ((cljs.core.seq_QMARK_(map__23572))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23572):map__23572);
var vec__23573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23572__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23573,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23573,(1),null);
var map__23574 = this;
var map__23574__$1 = ((cljs.core.seq_QMARK_(map__23574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23574):map__23574);
var vec__23575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23574__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(1),null);
var c = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,c),s,c),thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23576){
var map__23577 = p__23576;
var map__23577__$1 = ((cljs.core.seq_QMARK_(map__23577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23577):map__23577);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23577__$1,cljs.core.constant$keyword$points);
var map__23578 = this;
var map__23578__$1 = ((cljs.core.seq_QMARK_(map__23578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23578):map__23578);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23578__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23579 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23579) : p__$1.call(null,G__23579));
})(),(function (){var G__23580 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23580) : p__$1.call(null,G__23580));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__23581){
var map__23582 = p__23581;
var map__23582__$1 = ((cljs.core.seq_QMARK_(map__23582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23582):map__23582);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,cljs.core.constant$keyword$points);
var map__23583 = this;
var map__23583__$1 = ((cljs.core.seq_QMARK_(map__23583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23583):map__23583);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.constant$keyword$points);
var G__23584 = ((function (){var G__23585 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23585) : p__$1.call(null,G__23585));
})().call(null,(0)) - (function (){var G__23586 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23586) : p__$1.call(null,G__23586));
})().call(null,(0)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23584) : thi.ng.common.math.core.abs.call(null,G__23584));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__23587){
var map__23588 = p__23587;
var map__23588__$1 = ((cljs.core.seq_QMARK_(map__23588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23588):map__23588);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,cljs.core.constant$keyword$points);
var map__23589 = this;
var map__23589__$1 = ((cljs.core.seq_QMARK_(map__23589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23589):map__23589);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23589__$1,cljs.core.constant$keyword$points);
var G__23590 = ((function (){var G__23591 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23591) : p__$1.call(null,G__23591));
})().call(null,(1)) - (function (){var G__23592 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23592) : p__$1.call(null,G__23592));
})().call(null,(1)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23590) : thi.ng.common.math.core.abs.call(null,G__23590));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (p__23593){
var map__23594 = p__23593;
var map__23594__$1 = ((cljs.core.seq_QMARK_(map__23594))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23594):map__23594);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23594__$1,cljs.core.constant$keyword$points);
var map__23595 = this;
var map__23595__$1 = ((cljs.core.seq_QMARK_(map__23595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23595):map__23595);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23595__$1,cljs.core.constant$keyword$points);
var G__23596 = ((function (){var G__23597 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23597) : p__$1.call(null,G__23597));
})().call(null,(2)) - (function (){var G__23598 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23598) : p__$1.call(null,G__23598));
})().call(null,(2)));
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23596) : thi.ng.common.math.core.abs.call(null,G__23596));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23599,res){
var map__23600 = p__23599;
var map__23600__$1 = ((cljs.core.seq_QMARK_(map__23600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23600):map__23600);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,cljs.core.constant$keyword$points);
var map__23601 = this;
var map__23601__$1 = ((cljs.core.seq_QMARK_(map__23601))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23601):map__23601);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.sample_segment_with_res((function (){var G__23602 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23602) : p__$1.call(null,G__23602));
})(),(function (){var G__23603 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23603) : p__$1.call(null,G__23603));
})(),res,true);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__23604){
var map__23605 = p__23604;
var map__23605__$1 = ((cljs.core.seq_QMARK_(map__23605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23605):map__23605);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,cljs.core.constant$keyword$points);
var map__23606 = this;
var map__23606__$1 = ((cljs.core.seq_QMARK_(map__23606))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23606):map__23606);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23606__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist((function (){var G__23607 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23607) : p__$1.call(null,G__23607));
})(),(function (){var G__23608 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23608) : p__$1.call(null,G__23608));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__23609){
var map__23610 = p__23609;
var map__23610__$1 = ((cljs.core.seq_QMARK_(map__23610))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23610):map__23610);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,cljs.core.constant$keyword$points);
var map__23611 = this;
var map__23611__$1 = ((cljs.core.seq_QMARK_(map__23611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23611):map__23611);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.dist_squared((function (){var G__23612 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23612) : p__$1.call(null,G__23612));
})(),(function (){var G__23613 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23613) : p__$1.call(null,G__23613));
})());
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23614,v){
var map__23615 = p__23614;
var map__23615__$1 = ((cljs.core.seq_QMARK_(map__23615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23615):map__23615);
var vec__23616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23615__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(1),null);
var map__23617 = this;
var map__23617__$1 = ((cljs.core.seq_QMARK_(map__23617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23617):map__23617);
var vec__23618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23617__$1,cljs.core.constant$keyword$points);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23618,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23618,(1),null);
var pred__23619 = cljs.core._EQ_;
var expr__23620 = v;
if(cljs.core.truth_((function (){var G__23622 = p__$1;
var G__23623 = expr__23620;
return (pred__23619.cljs$core$IFn$_invoke$arity$2 ? pred__23619.cljs$core$IFn$_invoke$arity$2(G__23622,G__23623) : pred__23619.call(null,G__23622,G__23623));
})())){
return q__$1;
} else {
if(cljs.core.truth_((function (){var G__23624 = q__$1;
var G__23625 = expr__23620;
return (pred__23619.cljs$core$IFn$_invoke$arity$2 ? pred__23619.cljs$core$IFn$_invoke$arity$2(G__23624,G__23625) : pred__23619.call(null,G__23624,G__23625));
})())){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23626,v){
var map__23627 = p__23626;
var map__23627__$1 = ((cljs.core.seq_QMARK_(map__23627))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23627):map__23627);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23627__$1,cljs.core.constant$keyword$points);
var map__23628 = this;
var map__23628__$1 = ((cljs.core.seq_QMARK_(map__23628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23628):map__23628);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23628__$1,cljs.core.constant$keyword$points);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23631 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23631) : p__$1.call(null,G__23631));
})())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23632 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23632) : p__$1.call(null,G__23632));
})()))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__23633,q){
var map__23634 = p__23633;
var map__23634__$1 = ((cljs.core.seq_QMARK_(map__23634))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23634):map__23634);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23634__$1,cljs.core.constant$keyword$points);
var map__23635 = this;
var map__23635__$1 = ((cljs.core.seq_QMARK_(map__23635))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23635):map__23635);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.constant$keyword$points);
return thi.ng.geom.core.utils.closest_point_on_segment(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),(function (){var G__23636 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23636) : p__$1.call(null,G__23636));
})(),(function (){var G__23637 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__23637) : p__$1.call(null,G__23637));
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
return (function (p1__23645_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__23645_SHARP_);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23641_SHARP_){
return thi.ng.geom.core.rotate(p1__23641_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23640_SHARP_){
return thi.ng.geom.core.reflect(p1__23640_SHARP_,r);
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

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23646,p__23647){
var map__23648 = p__23646;
var map__23648__$1 = ((cljs.core.seq_QMARK_(map__23648))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23648):map__23648);
var _ = map__23648__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23648__$1,cljs.core.constant$keyword$points);
var map__23649 = p__23647;
var map__23649__$1 = ((cljs.core.seq_QMARK_(map__23649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23649):map__23649);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23649__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23649__$1,cljs.core.constant$keyword$depth,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23649__$1,cljs.core.constant$keyword$offset);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23649__$1,cljs.core.constant$keyword$scale,1.0);
var map__23650 = this;
var map__23650__$1 = ((cljs.core.seq_QMARK_(map__23650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23650):map__23650);
var ___$1 = map__23650__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23650__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12607__auto__ = offset;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var bottom = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3,points__$1);
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (tpoints,off,bottom,map__23650,map__23650__$1,___$1,points__$1,map__23648,map__23648__$1,_,points,map__23649,map__23649__$1,mesh,depth,offset,scale){
return (function (p1__23638_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,p1__23638_SHARP_);
});})(tpoints,off,bottom,map__23650,map__23650__$1,___$1,points__$1,map__23648,map__23648__$1,_,points,map__23649,map__23649__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (tpoints,off,bottom,top,map__23650,map__23650__$1,___$1,points__$1,map__23648,map__23648__$1,_,points,map__23649,map__23649__$1,mesh,depth,offset,scale){
return (function (p__23651,p__23652){
var vec__23653 = p__23651;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653,(1),null);
var vec__23654 = p__23652;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23654,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23654,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,bottom,top,map__23650,map__23650__$1,___$1,points__$1,map__23648,map__23648__$1,_,points,map__23649,map__23649__$1,mesh,depth,offset,scale))
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
return (function (p1__23644_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__23644_SHARP_,t);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23642_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__23642_SHARP_,s);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23643_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(p1__23643_SHARP_,sx,sy);
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

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23655,res){
var map__23656 = p__23655;
var map__23656__$1 = ((cljs.core.seq_QMARK_(map__23656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23656):map__23656);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23656__$1,cljs.core.constant$keyword$points);
var map__23657 = this;
var map__23657__$1 = ((cljs.core.seq_QMARK_(map__23657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23657):map__23657);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23657__$1,cljs.core.constant$keyword$points);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23657,map__23657__$1,points__$1,map__23656,map__23656__$1,points){
return (function (p1__23639_SHARP_){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__23639_SHARP_,points__$1);
});})(map__23657,map__23657__$1,points__$1,map__23656,map__23656__$1,points))
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

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23658,v){
var map__23659 = p__23658;
var map__23659__$1 = ((cljs.core.seq_QMARK_(map__23659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23659):map__23659);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23659__$1,cljs.core.constant$keyword$points);
var map__23660 = this;
var map__23660__$1 = ((cljs.core.seq_QMARK_(map__23660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23660):map__23660);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23660__$1,cljs.core.constant$keyword$points);
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
return (function (p1__23671_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__23671_SHARP_);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23664_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__23664_SHARP_,axis,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23665_SHARP_){
return thi.ng.geom.core.rotate_x(p1__23665_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23666_SHARP_){
return thi.ng.geom.core.rotate_y(p1__23666_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23667_SHARP_){
return thi.ng.geom.core.rotate_z(p1__23667_SHARP_,theta);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23663_SHARP_){
return thi.ng.geom.core.reflect(p1__23663_SHARP_,r);
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

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__23672,p__23673){
var map__23674 = p__23672;
var map__23674__$1 = ((cljs.core.seq_QMARK_(map__23674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23674):map__23674);
var _ = map__23674__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23674__$1,cljs.core.constant$keyword$points);
var map__23675 = p__23673;
var map__23675__$1 = ((cljs.core.seq_QMARK_(map__23675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23675):map__23675);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675__$1,cljs.core.constant$keyword$mesh);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23675__$1,cljs.core.constant$keyword$depth,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23675__$1,cljs.core.constant$keyword$offset);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23675__$1,cljs.core.constant$keyword$scale,1.0);
var map__23676 = this;
var map__23676__$1 = ((cljs.core.seq_QMARK_(map__23676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23676):map__23676);
var ___$1 = map__23676__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23676__$1,cljs.core.constant$keyword$points);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size(___$1,scale)));
var off = (function (){var or__12607__auto__ = offset;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (tpoints,off,map__23676,map__23676__$1,___$1,points__$1,map__23674,map__23674__$1,_,points,map__23675,map__23675__$1,mesh,depth,offset,scale){
return (function (p1__23661_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(off,p1__23661_SHARP_);
});})(tpoints,off,map__23676,map__23676__$1,___$1,points__$1,map__23674,map__23674__$1,_,points,map__23675,map__23675__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into((function (){var or__12607__auto__ = mesh;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (tpoints,off,top,map__23676,map__23676__$1,___$1,points__$1,map__23674,map__23674__$1,_,points,map__23675,map__23675__$1,mesh,depth,offset,scale){
return (function (p__23677,p__23678){
var vec__23679 = p__23677;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23679,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23679,(1),null);
var vec__23680 = p__23678;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23680,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23680,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,top,map__23676,map__23676__$1,___$1,points__$1,map__23674,map__23674__$1,_,points,map__23675,map__23675__$1,mesh,depth,offset,scale))
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
return (function (p1__23670_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__23670_SHARP_,t);
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
return (function (p1__23668_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__23668_SHARP_,s);
});})(___$1))
,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23669_SHARP_){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(p1__23669_SHARP_,sx,sy);
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

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__23681,res){
var map__23682 = p__23681;
var map__23682__$1 = ((cljs.core.seq_QMARK_(map__23682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23682):map__23682);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23682__$1,cljs.core.constant$keyword$points);
var map__23683 = this;
var map__23683__$1 = ((cljs.core.seq_QMARK_(map__23683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23683):map__23683);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.constant$keyword$points);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23683,map__23683__$1,points__$1,map__23682,map__23682__$1,points){
return (function (p1__23662_SHARP_){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__23662_SHARP_,points__$1);
});})(map__23683,map__23683__$1,points__$1,map__23682,map__23682__$1,points))
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

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__23684,v){
var map__23685 = p__23684;
var map__23685__$1 = ((cljs.core.seq_QMARK_(map__23685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23685):map__23685);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23685__$1,cljs.core.constant$keyword$points);
var map__23686 = this;
var map__23686__$1 = ((cljs.core.seq_QMARK_(map__23686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23686):map__23686);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23686__$1,cljs.core.constant$keyword$points);
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
