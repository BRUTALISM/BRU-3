// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.geometry.distortion');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
/**
 * Returns a randomized 2D vector field of given resolution on the x and y
 * axes. If the parameter fls is given, the vectors are generated such that each
 * of them is orientated roughly toward its closest fault line (from fls). In
 * other words, each generated vector lies between the closest fault line and the
 * line parallel to that fault line which goes through the given vector's
 * origin.
 */
bru_3.geometry.distortion.field = (function bru_3$geometry$distortion$field(){
var G__21484 = arguments.length;
switch (G__21484) {
case 2:
return bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$2 = (function (xres,yres){
return cljs.core.vec((function (){var iter__13329__auto__ = (function bru_3$geometry$distortion$iter__21485(s__21486){
return (new cljs.core.LazySeq(null,(function (){
var s__21486__$1 = s__21486;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__21486__$1);
if(temp__4422__auto__){
var s__21486__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21486__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__21486__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__21488 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__21487 = (0);
while(true){
if((i__21487 < size__13328__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__21487);
cljs.core.chunk_append(b__21488,cljs.core.vec((function (){var iter__13329__auto__ = ((function (i__21487,x,c__13327__auto__,size__13328__auto__,b__21488,s__21486__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__21485_$_iter__21503(s__21504){
return (new cljs.core.LazySeq(null,((function (i__21487,x,c__13327__auto__,size__13328__auto__,b__21488,s__21486__$2,temp__4422__auto__){
return (function (){
var s__21504__$1 = s__21504;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__21504__$1);
if(temp__4422__auto____$1){
var s__21504__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21504__$2)){
var c__13327__auto____$1 = cljs.core.chunk_first(s__21504__$2);
var size__13328__auto____$1 = cljs.core.count(c__13327__auto____$1);
var b__21506 = cljs.core.chunk_buffer(size__13328__auto____$1);
if((function (){var i__21505 = (0);
while(true){
if((i__21505 < size__13328__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto____$1,i__21505);
cljs.core.chunk_append(b__21506,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__21578 = (i__21505 + (1));
i__21505 = G__21578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21506),bru_3$geometry$distortion$iter__21485_$_iter__21503(cljs.core.chunk_rest(s__21504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21506),null);
}
} else {
var y = cljs.core.first(s__21504__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__21485_$_iter__21503(cljs.core.rest(s__21504__$2)));
}
} else {
return null;
}
break;
}
});})(i__21487,x,c__13327__auto__,size__13328__auto__,b__21488,s__21486__$2,temp__4422__auto__))
,null,null));
});})(i__21487,x,c__13327__auto__,size__13328__auto__,b__21488,s__21486__$2,temp__4422__auto__))
;
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__21579 = (i__21487 + (1));
i__21487 = G__21579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21488),bru_3$geometry$distortion$iter__21485(cljs.core.chunk_rest(s__21486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21488),null);
}
} else {
var x = cljs.core.first(s__21486__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13329__auto__ = ((function (x,s__21486__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__21485_$_iter__21509(s__21510){
return (new cljs.core.LazySeq(null,((function (x,s__21486__$2,temp__4422__auto__){
return (function (){
var s__21510__$1 = s__21510;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__21510__$1);
if(temp__4422__auto____$1){
var s__21510__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21510__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__21510__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__21512 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__21511 = (0);
while(true){
if((i__21511 < size__13328__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__21511);
cljs.core.chunk_append(b__21512,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__21580 = (i__21511 + (1));
i__21511 = G__21580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21512),bru_3$geometry$distortion$iter__21485_$_iter__21509(cljs.core.chunk_rest(s__21510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21512),null);
}
} else {
var y = cljs.core.first(s__21510__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__21485_$_iter__21509(cljs.core.rest(s__21510__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__21486__$2,temp__4422__auto__))
,null,null));
});})(x,s__21486__$2,temp__4422__auto__))
;
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__21485(cljs.core.rest(s__21486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
})());
});

bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5 = (function (xres,yres,fls,xscale,yscale){
var closest_line = (function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__21482_SHARP_){
return thi.ng.geom.core.dist(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(p1__21482_SHARP_)));
}),fls);
});
return cljs.core.vec((function (){var iter__13329__auto__ = ((function (closest_line){
return (function bru_3$geometry$distortion$iter__21515(s__21516){
return (new cljs.core.LazySeq(null,((function (closest_line){
return (function (){
var s__21516__$1 = s__21516;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__21516__$1);
if(temp__4422__auto__){
var s__21516__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21516__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__21516__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__21518 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__21517 = (0);
while(true){
if((i__21517 < size__13328__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__21517);
cljs.core.chunk_append(b__21518,cljs.core.vec((function (){var iter__13329__auto__ = ((function (i__21517,x,c__13327__auto__,size__13328__auto__,b__21518,s__21516__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__21515_$_iter__21549(s__21550){
return (new cljs.core.LazySeq(null,((function (i__21517,x,c__13327__auto__,size__13328__auto__,b__21518,s__21516__$2,temp__4422__auto__,closest_line){
return (function (){
var s__21550__$1 = s__21550;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__21550__$1);
if(temp__4422__auto____$1){
var s__21550__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21550__$2)){
var c__13327__auto____$1 = cljs.core.chunk_first(s__21550__$2);
var size__13328__auto____$1 = cljs.core.count(c__13327__auto____$1);
var b__21552 = cljs.core.chunk_buffer(size__13328__auto____$1);
if((function (){var i__21551 = (0);
while(true){
if((i__21551 < size__13328__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto____$1,i__21551);
cljs.core.chunk_append(b__21552,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__21559 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__21559) : clp.call(null,G__21559));
})());
var s = (function (){var G__21560 = thi.ng.geom.core.cross(tv,clv);
return (Math.signum.cljs$core$IFn$_invoke$arity$1 ? Math.signum.cljs$core$IFn$_invoke$arity$1(G__21560) : Math.signum.call(null,G__21560));
})();
var amax = ((1) * Math.PI);
var a = (s * (((Math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__21581 = (i__21551 + (1));
i__21551 = G__21581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21552),bru_3$geometry$distortion$iter__21515_$_iter__21549(cljs.core.chunk_rest(s__21550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21552),null);
}
} else {
var y = cljs.core.first(s__21550__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__21561 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__21561) : clp.call(null,G__21561));
})());
var s = (function (){var G__21562 = thi.ng.geom.core.cross(tv,clv);
return (Math.signum.cljs$core$IFn$_invoke$arity$1 ? Math.signum.cljs$core$IFn$_invoke$arity$1(G__21562) : Math.signum.call(null,G__21562));
})();
var amax = ((1) * Math.PI);
var a = (s * (((Math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__21515_$_iter__21549(cljs.core.rest(s__21550__$2)));
}
} else {
return null;
}
break;
}
});})(i__21517,x,c__13327__auto__,size__13328__auto__,b__21518,s__21516__$2,temp__4422__auto__,closest_line))
,null,null));
});})(i__21517,x,c__13327__auto__,size__13328__auto__,b__21518,s__21516__$2,temp__4422__auto__,closest_line))
;
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__21582 = (i__21517 + (1));
i__21517 = G__21582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21518),bru_3$geometry$distortion$iter__21515(cljs.core.chunk_rest(s__21516__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21518),null);
}
} else {
var x = cljs.core.first(s__21516__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13329__auto__ = ((function (x,s__21516__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__21515_$_iter__21563(s__21564){
return (new cljs.core.LazySeq(null,((function (x,s__21516__$2,temp__4422__auto__,closest_line){
return (function (){
var s__21564__$1 = s__21564;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__21564__$1);
if(temp__4422__auto____$1){
var s__21564__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21564__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__21564__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__21566 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__21565 = (0);
while(true){
if((i__21565 < size__13328__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__21565);
cljs.core.chunk_append(b__21566,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__21573 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__21573) : clp.call(null,G__21573));
})());
var s = (function (){var G__21574 = thi.ng.geom.core.cross(tv,clv);
return (Math.signum.cljs$core$IFn$_invoke$arity$1 ? Math.signum.cljs$core$IFn$_invoke$arity$1(G__21574) : Math.signum.call(null,G__21574));
})();
var amax = ((1) * Math.PI);
var a = (s * (((Math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__21583 = (i__21565 + (1));
i__21565 = G__21583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21566),bru_3$geometry$distortion$iter__21515_$_iter__21563(cljs.core.chunk_rest(s__21564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21566),null);
}
} else {
var y = cljs.core.first(s__21564__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__21575 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__21575) : clp.call(null,G__21575));
})());
var s = (function (){var G__21576 = thi.ng.geom.core.cross(tv,clv);
return (Math.signum.cljs$core$IFn$_invoke$arity$1 ? Math.signum.cljs$core$IFn$_invoke$arity$1(G__21576) : Math.signum.call(null,G__21576));
})();
var amax = ((1) * Math.PI);
var a = (s * (((Math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__21515_$_iter__21563(cljs.core.rest(s__21564__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__21516__$2,temp__4422__auto__,closest_line))
,null,null));
});})(x,s__21516__$2,temp__4422__auto__,closest_line))
;
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__21515(cljs.core.rest(s__21516__$2)));
}
} else {
return null;
}
break;
}
});})(closest_line))
,null,null));
});})(closest_line))
;
return iter__13329__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
})());
});

bru_3.geometry.distortion.field.cljs$lang$maxFixedArity = 5;
/**
 * Returns the (normalized) interpolated Vec2 from a given vector field vf at
 * the given x and y coordinates. The vector field is treated as having the
 * coordinates in the [0, xmax] and [0, ymax] ranges for the x and y axis,
 * respectively.
 */
bru_3.geometry.distortion.vec_at = (function bru_3$geometry$distortion$vec_at(vf,x,y,xmax,ymax){
var xcount = cljs.core.count(vf);
var ycount = cljs.core.count(cljs.core.first(vf));
var xtr = ((xcount - (1)) * (x / xmax));
var ytr = ((ycount - (1)) * (y / ymax));
var lx = ((function (){var G__21588 = xtr;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21588) : Math.floor.call(null,G__21588));
})() | (0));
var ux = ((function (){var G__21589 = xtr;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__21589) : Math.ceil.call(null,G__21589));
})() | (0));
var tx = (xtr - lx);
var ly = ((function (){var G__21590 = ytr;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21590) : Math.floor.call(null,G__21590));
})() | (0));
var uy = ((function (){var G__21591 = ytr;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__21591) : Math.ceil.call(null,G__21591));
})() | (0));
var ty = (ytr - ly);
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ux,uy], null)),(tx * ty)),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ux,ly], null)),(tx * ((1) - ty))),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,uy], null)),(((1) - tx) * ty))),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,ly], null)),(((1) - tx) * ((1) - ty)))));
});
