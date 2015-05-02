// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.data.core');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a);
return (thi.ng.geom.core.dot(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,a),d) / thi.ng.geom.core.mag_squared(d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.core.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24665_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.closest_point_on_segment,p,p1__24665_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (function (){var G__24667 = (1);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__24667) : a.call(null,G__24667));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.common.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b2,a2);
if(cljs.core.not(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null),p43,thi.ng.common.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b1,a1);
if(cljs.core.not(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null),p21,thi.ng.common.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(a1,a2);
var d1343 = thi.ng.geom.core.dot(p13,p43);
var d4321 = thi.ng.geom.core.dot(p43,p21);
var d1321 = thi.ng.geom.core.dot(p13,p21);
var d4343 = thi.ng.geom.core.dot(p43,p43);
var d2121 = thi.ng.geom.core.dot(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,d,thi.ng.common.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$parallel], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect,cljs.core.constant$keyword$a,thi.ng.geom.core.madd(p21,ua,a1),cljs.core.constant$keyword$b,thi.ng.geom.core.madd(p43,ub,a2),cljs.core.constant$keyword$ua,ua,cljs.core.constant$keyword$ub,ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
var G__24670 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24668_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__24668_SHARP_);
})),rf,points);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__24670) : Math.sqrt.call(null,G__24670));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24671_SHARP_){
return thi.ng.geom.core.dist((function (){var G__24674 = (0);
return (p1__24671_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24671_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24674) : p1__24671_SHARP_.call(null,G__24674));
})(),(function (){var G__24675 = (1);
return (p1__24671_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24671_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24675) : p1__24671_SHARP_.call(null,G__24675));
})());
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__24676){
var vec__24679 = p__24676;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24679,(0),null);
var xs = cljs.core.nthnext(vec__24679,(1));
var coll = vec__24679;
var G__24680 = cljs.core.count(coll);
switch (G__24680) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(xs));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = ((function (s,G__24680,vec__24679,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__24680,vec__24679,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4(x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(){
var G__24684 = arguments.length;
switch (G__24684) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (d){
return (function (p1__24682_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__24682_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(){
var G__24688 = arguments.length;
switch (G__24688) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),s,coll);
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24686_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__24686_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__24690){
var vec__24692 = p__24690;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24692,(0),null);
var xs = cljs.core.nthnext(vec__24692,(1));
var coll = vec__24692;
var c = cljs.core.count(coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,p)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24696 = c;
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__24696) : ctor.call(null,G__24696));
})(),((cljs.core.coll_QMARK_(r_or_points))?(function (){var G__24697 = c;
var G__24698 = r_or_points;
return (thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2(G__24697,G__24698) : thi.ng.geom.core.utils.max_dist.call(null,G__24697,G__24698));
})():r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24699_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__24699_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.core.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__24700_SHARP_){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__24700_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (function (){var G__24704 = i__$1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24704) : idx.call(null,G__24704));
})())){
var G__24707 = (i__$1 + (1));
i__$1 = G__24707;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (function (){var G__24705 = i1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24705) : idx.call(null,G__24705));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((function (){var G__24706 = i__$1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24706) : idx.call(null,G__24706));
})() - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(){
var G__24709 = arguments.length;
switch (G__24709) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__12607__auto__ = idx;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.core.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__24712 = thi.ng.geom.core.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24712,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24712,(1),null);
var G__24713 = (t + delta);
var G__24714 = (i__$1 | (0));
var G__24715 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__24713;
i = G__24714;
acc = G__24715;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__13361__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24722(s__24723){
return (new cljs.core.LazySeq(null,(function (){
var s__24723__$1 = s__24723;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__24723__$1);
if(temp__4422__auto__){
var s__24723__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24723__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__24723__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__24725 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__24724 = (0);
while(true){
if((i__24724 < size__13360__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__24724);
cljs.core.chunk_append(b__24725,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t));

var G__24728 = (i__24724 + (1));
i__24724 = G__24728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24725),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24722(cljs.core.chunk_rest(s__24723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24725),null);
}
} else {
var t = cljs.core.first(s__24723__$2);
return cljs.core.cons(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24722(cljs.core.rest(s__24723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13361__auto__(thi.ng.common.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 * coordinates. Applies bilinear interpolation to compute point within
 * the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__24729,p__24730){
var vec__24733 = p__24729;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(3),null);
var vec__24734 = p__24730;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(1),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 * UVW coordinates. Applies trilinear interpolation to compute point
 * within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 * along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__24735,p__24736){
var vec__24739 = p__24735;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24739,(7),null);
var vec__24740 = p__24736;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(2),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,d,e,h,u,v),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(){
var G__24743 = arguments.length;
switch (G__24743) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24741_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,(function (){var G__24744 = (0);
return (p1__24741_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24741_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24744) : p1__24741_SHARP_.call(null,G__24744));
})(),(function (){var G__24745 = (1);
return (p1__24741_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24741_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24745) : p1__24741_SHARP_.call(null,G__24745));
})()],null));
}),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var vec__24750 = points;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24750,(0),null);
var more = cljs.core.nthnext(vec__24750,(1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__24750,v0,more){
return (function (p__24751){
var vec__24752 = p__24751;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24752,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24752,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__24750,v0,more))
,thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__24753){
var vec__24755 = p__24753;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(2),null);
var ab = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
var bc = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(b,c);
var ca = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__24764 = cljs.core._EQ_;
var expr__24765 = cljs.core.count(points);
if(cljs.core.truth_((function (){var G__24767 = (3);
var G__24768 = expr__24765;
return (pred__24764.cljs$core$IFn$_invoke$arity$2 ? pred__24764.cljs$core$IFn$_invoke$arity$2(G__24767,G__24768) : pred__24764.call(null,G__24767,G__24768));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((function (){var G__24769 = (4);
var G__24770 = expr__24765;
return (pred__24764.cljs$core$IFn$_invoke$arity$2 ? pred__24764.cljs$core$IFn$_invoke$arity$2(G__24769,G__24770) : pred__24764.call(null,G__24769,G__24770));
})())){
var vec__24771 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24771,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24771,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24771,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24771,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(){
var G__24773 = arguments.length;
switch (G__24773) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__24774){
var vec__24775 = p__24774;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24775,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24775,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24775,(2),null);
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__24777,p__24778,p__24779){
var vec__24783 = p__24777;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(1),null);
var vec__24784 = p__24778;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24784,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24784,(1),null);
var vec__24785 = p__24779;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2(a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3(a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(){
var G__24787 = arguments.length;
switch (G__24787) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__24788,p){
var vec__24789 = p__24788;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var uu = thi.ng.geom.core.mag_squared(u);
var vv = thi.ng.geom.core.mag_squared(v);
var uv = thi.ng.geom.core.dot(u,v);
var wu = thi.ng.geom.core.dot(w,u);
var wv = thi.ng.geom.core.dot(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;
thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.core.utils.clockwise2_QMARK_(a,b,c))){
return ((thi.ng.geom.core.utils.norm_sign2(a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.core.utils.norm_sign2(b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,a,p) >= 0.0));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.geom.core.dot(n,p) - thi.ng.geom.core.dot(n,a));
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,cl))){
var vec__24792 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24792,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24792,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24792,(2),null);
var and__12595__auto__ = (u__$1 >= 0.0);
if(and__12595__auto__){
var and__12595__auto____$1 = (w >= 0.0);
if(and__12595__auto____$1){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__24793_SHARP_){
var G__24794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.tri_area3,p1__24793_SHARP_);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__24794) : thi.ng.common.math.core.abs.call(null,G__24794));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__24795_SHARP_){
return thi.ng.geom.core.dot((function (){var G__24796 = (0);
return (p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24796) : p1__24795_SHARP_.call(null,G__24796));
})(),thi.ng.geom.core.cross((function (){var G__24797 = (1);
return (p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24797) : p1__24795_SHARP_.call(null,G__24797));
})(),(function (){var G__24798 = (2);
return (p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24795_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24798) : p1__24795_SHARP_.call(null,G__24798));
})()));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});
