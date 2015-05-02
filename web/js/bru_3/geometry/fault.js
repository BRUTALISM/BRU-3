// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.geometry.fault');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.line');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.core.vector');
/**
 * Generates a "fault line" consisting of n line segments. The line will be
 * generated within the rectangle r, and stretching from left to right.
 */
bru_3.geometry.fault.fault_line = (function bru_3$geometry$fault$fault_line(p__21441,p__21442){
var map__21448 = p__21441;
var map__21448__$1 = ((cljs.core.seq_QMARK_(map__21448))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21448):map__21448);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21448__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21448__$1,cljs.core.constant$keyword$size);
var map__21449 = p__21442;
var map__21449__$1 = ((cljs.core.seq_QMARK_(map__21449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21449):map__21449);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,cljs.core.constant$keyword$count);
var yrand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,cljs.core.constant$keyword$y_DASH_rand_DASH_percentage);
var vec__21450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,cljs.core.constant$keyword$y_DASH_length_DASH_range);
var yl1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450,(0),null);
var yl2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450,(1),null);
var vec__21451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,cljs.core.constant$keyword$x_DASH_spread_DASH_range);
var xs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(0),null);
var xs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(1),null);
var vec__21452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,cljs.core.constant$keyword$x_DASH_length_DASH_range);
var xl1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21452,(0),null);
var xl2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21452,(1),null);
var xmid = (cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(origin) + (cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(size) / (2)));
var xstart = (cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(origin) - xs1);
var rand_range = ((function (xmid,xstart,map__21448,map__21448__$1,origin,size,map__21449,map__21449__$1,n,yrand,vec__21450,yl1,yl2,vec__21451,xs1,xs2,vec__21452,xl1,xl2){
return (function (min,max){
return (min + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max - min)));
});})(xmid,xstart,map__21448,map__21448__$1,origin,size,map__21449,map__21449__$1,n,yrand,vec__21450,yl1,yl2,vec__21451,xs1,xs2,vec__21452,xl1,xl2))
;
var yrange = (yrand / (2));
var ysize = cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(size);
var ymid = (cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(origin) + (ysize / (2)));
var randy = ((function (xmid,xstart,rand_range,yrange,ysize,ymid,map__21448,map__21448__$1,origin,size,map__21449,map__21449__$1,n,yrand,vec__21450,yl1,yl2,vec__21451,xs1,xs2,vec__21452,xl1,xl2){
return (function (){
return rand_range((ymid - (ysize * yrange)),(ymid + (ysize * yrange)));
});})(xmid,xstart,rand_range,yrange,ysize,ymid,map__21448,map__21448__$1,origin,size,map__21449,map__21449__$1,n,yrand,vec__21450,yl1,yl2,vec__21451,xs1,xs2,vec__21452,xl1,xl2))
;
var ystart = randy();
var faults = cljs.core.PersistentVector.EMPTY;
var i = n;
var x = xstart;
while(true){
if((i > (0))){
var x1 = (x + rand_range(xs1,xs2));
var x2 = (x1 + rand_range(xl1,xl2));
var y1 = randy();
var rs = (((0.5 > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?(1):(-1));
var y2 = (y1 + (rs * rand_range(yl1,yl2)));
var G__21453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(faults,thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2));
var G__21454 = (i - (1));
var G__21455 = x2;
faults = G__21453;
i = G__21454;
x = G__21455;
continue;
} else {
return faults;
}
break;
}
});
