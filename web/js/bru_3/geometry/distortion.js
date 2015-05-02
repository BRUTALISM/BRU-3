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
var G__19784 = arguments.length;
switch (G__19784) {
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
return cljs.core.vec((function (){var iter__13361__auto__ = (function bru_3$geometry$distortion$iter__19785(s__19786){
return (new cljs.core.LazySeq(null,(function (){
var s__19786__$1 = s__19786;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__19786__$1);
if(temp__4422__auto__){
var s__19786__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19786__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__19786__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__19788 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__19787 = (0);
while(true){
if((i__19787 < size__13360__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__19787);
cljs.core.chunk_append(b__19788,cljs.core.vec((function (){var iter__13361__auto__ = ((function (i__19787,x,c__13359__auto__,size__13360__auto__,b__19788,s__19786__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__19785_$_iter__19803(s__19804){
return (new cljs.core.LazySeq(null,((function (i__19787,x,c__13359__auto__,size__13360__auto__,b__19788,s__19786__$2,temp__4422__auto__){
return (function (){
var s__19804__$1 = s__19804;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19804__$1);
if(temp__4422__auto____$1){
var s__19804__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19804__$2)){
var c__13359__auto____$1 = cljs.core.chunk_first(s__19804__$2);
var size__13360__auto____$1 = cljs.core.count(c__13359__auto____$1);
var b__19806 = cljs.core.chunk_buffer(size__13360__auto____$1);
if((function (){var i__19805 = (0);
while(true){
if((i__19805 < size__13360__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto____$1,i__19805);
cljs.core.chunk_append(b__19806,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__19862 = (i__19805 + (1));
i__19805 = G__19862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19806),bru_3$geometry$distortion$iter__19785_$_iter__19803(cljs.core.chunk_rest(s__19804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19806),null);
}
} else {
var y = cljs.core.first(s__19804__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__19785_$_iter__19803(cljs.core.rest(s__19804__$2)));
}
} else {
return null;
}
break;
}
});})(i__19787,x,c__13359__auto__,size__13360__auto__,b__19788,s__19786__$2,temp__4422__auto__))
,null,null));
});})(i__19787,x,c__13359__auto__,size__13360__auto__,b__19788,s__19786__$2,temp__4422__auto__))
;
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__19863 = (i__19787 + (1));
i__19787 = G__19863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19788),bru_3$geometry$distortion$iter__19785(cljs.core.chunk_rest(s__19786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19788),null);
}
} else {
var x = cljs.core.first(s__19786__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13361__auto__ = ((function (x,s__19786__$2,temp__4422__auto__){
return (function bru_3$geometry$distortion$iter__19785_$_iter__19809(s__19810){
return (new cljs.core.LazySeq(null,((function (x,s__19786__$2,temp__4422__auto__){
return (function (){
var s__19810__$1 = s__19810;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19810__$1);
if(temp__4422__auto____$1){
var s__19810__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19810__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__19810__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__19812 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__19811 = (0);
while(true){
if((i__19811 < size__13360__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__19811);
cljs.core.chunk_append(b__19812,thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0());

var G__19864 = (i__19811 + (1));
i__19811 = G__19864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19812),bru_3$geometry$distortion$iter__19785_$_iter__19809(cljs.core.chunk_rest(s__19810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19812),null);
}
} else {
var y = cljs.core.first(s__19810__$2);
return cljs.core.cons(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0(),bru_3$geometry$distortion$iter__19785_$_iter__19809(cljs.core.rest(s__19810__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19786__$2,temp__4422__auto__))
,null,null));
});})(x,s__19786__$2,temp__4422__auto__))
;
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__19785(cljs.core.rest(s__19786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
})());
});

bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5 = (function (xres,yres,fls,xscale,yscale){
var closest_line = (function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__19782_SHARP_){
return thi.ng.geom.core.dist(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix,cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(p1__19782_SHARP_)));
}),fls);
});
return cljs.core.vec((function (){var iter__13361__auto__ = ((function (closest_line){
return (function bru_3$geometry$distortion$iter__19815(s__19816){
return (new cljs.core.LazySeq(null,((function (closest_line){
return (function (){
var s__19816__$1 = s__19816;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__19816__$1);
if(temp__4422__auto__){
var s__19816__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19816__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__19816__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__19818 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__19817 = (0);
while(true){
if((i__19817 < size__13360__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__19817);
cljs.core.chunk_append(b__19818,cljs.core.vec((function (){var iter__13361__auto__ = ((function (i__19817,x,c__13359__auto__,size__13360__auto__,b__19818,s__19816__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__19815_$_iter__19841(s__19842){
return (new cljs.core.LazySeq(null,((function (i__19817,x,c__13359__auto__,size__13360__auto__,b__19818,s__19816__$2,temp__4422__auto__,closest_line){
return (function (){
var s__19842__$1 = s__19842;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19842__$1);
if(temp__4422__auto____$1){
var s__19842__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19842__$2)){
var c__13359__auto____$1 = cljs.core.chunk_first(s__19842__$2);
var size__13360__auto____$1 = cljs.core.count(c__13359__auto____$1);
var b__19844 = cljs.core.chunk_buffer(size__13360__auto____$1);
if((function (){var i__19843 = (0);
while(true){
if((i__19843 < size__13360__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto____$1,i__19843);
cljs.core.chunk_append(b__19844,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19849 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19849) : clp.call(null,G__19849));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__19865 = (i__19843 + (1));
i__19843 = G__19865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19844),bru_3$geometry$distortion$iter__19815_$_iter__19841(cljs.core.chunk_rest(s__19842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19844),null);
}
} else {
var y = cljs.core.first(s__19842__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19850 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19850) : clp.call(null,G__19850));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__19815_$_iter__19841(cljs.core.rest(s__19842__$2)));
}
} else {
return null;
}
break;
}
});})(i__19817,x,c__13359__auto__,size__13360__auto__,b__19818,s__19816__$2,temp__4422__auto__,closest_line))
,null,null));
});})(i__19817,x,c__13359__auto__,size__13360__auto__,b__19818,s__19816__$2,temp__4422__auto__,closest_line))
;
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()));

var G__19866 = (i__19817 + (1));
i__19817 = G__19866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19818),bru_3$geometry$distortion$iter__19815(cljs.core.chunk_rest(s__19816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19818),null);
}
} else {
var x = cljs.core.first(s__19816__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__13361__auto__ = ((function (x,s__19816__$2,temp__4422__auto__,closest_line){
return (function bru_3$geometry$distortion$iter__19815_$_iter__19851(s__19852){
return (new cljs.core.LazySeq(null,((function (x,s__19816__$2,temp__4422__auto__,closest_line){
return (function (){
var s__19852__$1 = s__19852;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__19852__$1);
if(temp__4422__auto____$1){
var s__19852__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19852__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__19852__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__19854 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__19853 = (0);
while(true){
if((i__19853 < size__13360__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__19853);
cljs.core.chunk_append(b__19854,(function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19859 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19859) : clp.call(null,G__19859));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})());

var G__19867 = (i__19853 + (1));
i__19853 = G__19867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19854),bru_3$geometry$distortion$iter__19815_$_iter__19851(cljs.core.chunk_rest(s__19852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19854),null);
}
} else {
var y = cljs.core.first(s__19852__$2);
return cljs.core.cons((function (){var v = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x * xscale),(y * yscale));
var clp = cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(closest_line(v));
var clv = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._,cljs.core.reverse(clp)));
var tv = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19860 = (0);
return (clp.cljs$core$IFn$_invoke$arity$1 ? clp.cljs$core$IFn$_invoke$arity$1(G__19860) : clp.call(null,G__19860));
})());
var s = bru_3.math.signum(thi.ng.geom.core.cross(tv,clv));
var amax = ((1) * bru_3.math.PI);
var a = (s * (((bru_3.math.PI - amax) / (2)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * amax)));
return thi.ng.geom.core.rotate(clv,a);
})(),bru_3$geometry$distortion$iter__19815_$_iter__19851(cljs.core.rest(s__19852__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19816__$2,temp__4422__auto__,closest_line))
,null,null));
});})(x,s__19816__$2,temp__4422__auto__,closest_line))
;
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(yres));
})()),bru_3$geometry$distortion$iter__19815(cljs.core.rest(s__19816__$2)));
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
return iter__13361__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(xres));
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
