// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.geometry.distortion');
goog.require('cljs.core');
goog.require('bru_3.math');
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
var G__19800 = arguments.length;
switch (G__19800) {
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
return cljs.core.vec((function (){var iter__13377__auto__ = (function bru_3$geometry$distortion$iter__19801(s__19802){
return (new cljs.core.LazySeq(null,(function (){
var s__19802__$1 = s__19802;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__19802__$1);
if(temp__4422__auto__){
var s__19802__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19802__$2)){
var c__13375__auto__ = cljs.core.chunk_first(s__19802__$2);
var size__13376__auto__ = cljs.core.count(c__13375__auto__);
var b__19804 = cljs.core.chunk_buffer(size__13376__auto__);
if((function (){var i__19803 = (0);
while(true){
if((i__19803 < size__13376__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto__,i__19803);
cljs.core.chunk_append(b__19804,cljs.core.vec((function (){var iter__13377__auto__ = ((function (i__19803,x,c__13375__auto__,size__13376__auto__,b__19804,s__19802__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__19801_$_iter__19819(s__19820){
return (new cljs.core.LazySeq(null,((function (i__19803,x,c__13375__auto__,size__13376__auto__,b__19804,s__19802__$2,temp__4422__auto__){
return (function (){
var s__19820__$1 = s__19820;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19820__$1);
if(temp__4422__auto____$1){
var s__19820__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19820__$2)){
var c__13375__auto____$1 = cljs.core.chunk_first(s__19820__$2);
var size__13376__auto____$1 = cljs.core.count(c__13375__auto____$1);
var b__19822 = cljs.core.chunk_buffer(size__13376__auto____$1);
if((function (){var i__19821 = (0);
while(true){
if((i__19821 < size__13376__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto____$1,i__19821);
cljs.core.chunk_append(b__19822,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__19878 = (i__19821 + (1));
i__19821 = G__19878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19822),bru_3$geometry$distortion$iter__19801_$_iter__19819(cljs.core.chunk_rest(s__19820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19822),null);
}
} else {
var y = cljs.core.first(s__19820__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__19801_$_iter__19819(cljs.core.rest(s__19820__$2)));
}
} else {
return null;
}
break;
}
});})(i__19803,x,c__13375__auto__,size__13376__auto__,b__19804,s__19802__$2,temp__4422__auto__))
,null,null));
});})(i__19803,x,c__13375__auto__,size__13376__auto__,b__19804,s__19802__$2,temp__4422__auto__))
;
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__19879 = (i__19803 + (1));
i__19803 = G__19879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19804),bru_3$geometry$distortion$iter__19801(cljs.core.chunk_rest(s__19802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19804),null);
}
} else {
var x = cljs.core.first(s__19802__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13377__auto__ = ((function (x,s__19802__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__19801_$_iter__19825(s__19826){
return (new cljs.core.LazySeq(null,((function (x,s__19802__$2,temp__4422__auto__){
return (function (){
var s__19826__$1 = s__19826;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19826__$1);
if(temp__4422__auto____$1){
var s__19826__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19826__$2)){
var c__13375__auto__ = cljs.core.chunk_first(s__19826__$2);
var size__13376__auto__ = cljs.core.count(c__13375__auto__);
var b__19828 = cljs.core.chunk_buffer(size__13376__auto__);
if((function (){var i__19827 = (0);
while(true){
if((i__19827 < size__13376__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto__,i__19827);
cljs.core.chunk_append(b__19828,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__19880 = (i__19827 + (1));
i__19827 = G__19880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19828),bru_3$geometry$distortion$iter__19801_$_iter__19825(cljs.core.chunk_rest(s__19826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19828),null);
}
} else {
var y = cljs.core.first(s__19826__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__19801_$_iter__19825(cljs.core.rest(s__19826__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19802__$2,temp__4422__auto__))
,null,null));
});})(x,s__19802__$2,temp__4422__auto__))
;
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__19801(cljs.core.rest(s__19802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
})());
});

bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5 = (function (xres,yres,fls,xscale,yscale){
var closest_line = (function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__19798_SHARP_){
return thi.ng.geom.core.dist(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(p1__19798_SHARP_)));
}),fls);
});
return cljs.core.vec((function (){var iter__13377__auto__ = ((function (closest_line){
return (function bru_3$geometry$distortion$iter__19831(s__19832){
return (new cljs.core.LazySeq(null,((function (closest_line){
return (function (){
var s__19832__$1 = s__19832;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__19832__$1);
if(temp__4422__auto__){
var s__19832__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19832__$2)){
var c__13375__auto__ = cljs.core.chunk_first(s__19832__$2);
var size__13376__auto__ = cljs.core.count(c__13375__auto__);
var b__19834 = cljs.core.chunk_buffer(size__13376__auto__);
if((function (){var i__19833 = (0);
while(true){
if((i__19833 < size__13376__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto__,i__19833);
cljs.core.chunk_append(b__19834,cljs.core.vec((function (){var iter__13377__auto__ = ((function (i__19833,x,c__13375__auto__,size__13376__auto__,b__19834,s__19832__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__19831_$_iter__19857(s__19858){
return (new cljs.core.LazySeq(null,((function (i__19833,x,c__13375__auto__,size__13376__auto__,b__19834,s__19832__$2,temp__4422__auto__,closest_line){
return (function (){
var s__19858__$1 = s__19858;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19858__$1);
if(temp__4422__auto____$1){
var s__19858__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19858__$2)){
var c__13375__auto____$1 = cljs.core.chunk_first(s__19858__$2);
var size__13376__auto____$1 = cljs.core.count(c__13375__auto____$1);
var b__19860 = cljs.core.chunk_buffer(size__13376__auto____$1);
if((function (){var i__19859 = (0);
while(true){
if((i__19859 < size__13376__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto____$1,i__19859);
cljs.core.chunk_append(b__19860,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19865 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19865) : clp.call(null,G__19865));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__19881 = (i__19859 + (1));
i__19859 = G__19881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19860),bru_3$geometry$distortion$iter__19831_$_iter__19857(cljs.core.chunk_rest(s__19858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19860),null);
}
} else {
var y = cljs.core.first(s__19858__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19866 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19866) : clp.call(null,G__19866));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__19831_$_iter__19857(cljs.core.rest(s__19858__$2)));
}
} else {
return null;
}
break;
}
});})(i__19833,x,c__13375__auto__,size__13376__auto__,b__19834,s__19832__$2,temp__4422__auto__,closest_line))
,null,null));
});})(i__19833,x,c__13375__auto__,size__13376__auto__,b__19834,s__19832__$2,temp__4422__auto__,closest_line))
;
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__19882 = (i__19833 + (1));
i__19833 = G__19882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19834),bru_3$geometry$distortion$iter__19831(cljs.core.chunk_rest(s__19832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19834),null);
}
} else {
var x = cljs.core.first(s__19832__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13377__auto__ = ((function (x,s__19832__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__19831_$_iter__19867(s__19868){
return (new cljs.core.LazySeq(null,((function (x,s__19832__$2,temp__4422__auto__,closest_line){
return (function (){
var s__19868__$1 = s__19868;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19868__$1);
if(temp__4422__auto____$1){
var s__19868__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19868__$2)){
var c__13375__auto__ = cljs.core.chunk_first(s__19868__$2);
var size__13376__auto__ = cljs.core.count(c__13375__auto__);
var b__19870 = cljs.core.chunk_buffer(size__13376__auto__);
if((function (){var i__19869 = (0);
while(true){
if((i__19869 < size__13376__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13375__auto__,i__19869);
cljs.core.chunk_append(b__19870,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19875 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19875) : clp.call(null,G__19875));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__19883 = (i__19869 + (1));
i__19869 = G__19883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19870),bru_3$geometry$distortion$iter__19831_$_iter__19867(cljs.core.chunk_rest(s__19868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19870),null);
}
} else {
var y = cljs.core.first(s__19868__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19876 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19876) : clp.call(null,G__19876));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__19831_$_iter__19867(cljs.core.rest(s__19868__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19832__$2,temp__4422__auto__,closest_line))
,null,null));
});})(x,s__19832__$2,temp__4422__auto__,closest_line))
;
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__19831(cljs.core.rest(s__19832__$2)));
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
return iter__13377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
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
var lx = (bru_3.math.floor(xtr) | (0));
var ux = (bru_3.math.ceil(xtr) | (0));
var tx = (xtr - lx);
var ly = (bru_3.math.floor(ytr) | (0));
var uy = (bru_3.math.ceil(ytr) | (0));
var ty = (ytr - ly);
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ux,uy], null)),(tx * ty)),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ux,ly], null)),(tx * ((1) - ty))),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,uy], null)),(((1) - tx) * ty))),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,ly], null)),(((1) - tx) * ((1) - ty)))));
});
