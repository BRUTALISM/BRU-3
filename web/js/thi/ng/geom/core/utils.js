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
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24659_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.closest_point_on_segment,p,p1__24659_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (function (){var G__24661 = (1);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__24661) : a.call(null,G__24661));
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
var G__24664 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24662_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__24662_SHARP_);
})),rf,points);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__24664) : Math.sqrt.call(null,G__24664));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24665_SHARP_){
return thi.ng.geom.core.dist((function (){var G__24668 = (0);
return (p1__24665_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24665_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24668) : p1__24665_SHARP_.call(null,G__24668));
})(),(function (){var G__24669 = (1);
return (p1__24665_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24665_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24669) : p1__24665_SHARP_.call(null,G__24669));
})());
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__24670){
var vec__24673 = p__24670;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24673,(0),null);
var xs = cljs.core.nthnext(vec__24673,(1));
var coll = vec__24673;
var G__24674 = cljs.core.count(coll);
switch (G__24674) {
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
var f = ((function (s,G__24674,vec__24673,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__24674,vec__24673,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4(x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(){
var G__24678 = arguments.length;
switch (G__24678) {
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
return (function (p1__24676_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__24676_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(){
var G__24682 = arguments.length;
switch (G__24682) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24680_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__24680_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__24684){
var vec__24686 = p__24684;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24686,(0),null);
var xs = cljs.core.nthnext(vec__24686,(1));
var coll = vec__24686;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24690 = c;
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__24690) : ctor.call(null,G__24690));
})(),((cljs.core.coll_QMARK_(r_or_points))?(function (){var G__24691 = c;
var G__24692 = r_or_points;
return (thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2(G__24691,G__24692) : thi.ng.geom.core.utils.max_dist.call(null,G__24691,G__24692));
})():r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24693_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__24693_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.core.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__24694_SHARP_){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__24694_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (function (){var G__24698 = i__$1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24698) : idx.call(null,G__24698));
})())){
var G__24701 = (i__$1 + (1));
i__$1 = G__24701;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (function (){var G__24699 = i1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24699) : idx.call(null,G__24699));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((function (){var G__24700 = i__$1;
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24700) : idx.call(null,G__24700));
})() - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(){
var G__24703 = arguments.length;
switch (G__24703) {
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
var idx__$1 = (function (){var or__12575__auto__ = idx;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
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
var vec__24706 = thi.ng.geom.core.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(1),null);
var G__24707 = (t + delta);
var G__24708 = (i__$1 | (0));
var G__24709 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__24707;
i = G__24708;
acc = G__24709;
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
var ls = (function (){var iter__13329__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24716(s__24717){
return (new cljs.core.LazySeq(null,(function (){
var s__24717__$1 = s__24717;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__24717__$1);
if(temp__4422__auto__){
var s__24717__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24717__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__24717__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__24719 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__24718 = (0);
while(true){
if((i__24718 < size__13328__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__24718);
cljs.core.chunk_append(b__24719,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t));

var G__24722 = (i__24718 + (1));
i__24718 = G__24722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24719),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24716(cljs.core.chunk_rest(s__24717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24719),null);
}
} else {
var t = cljs.core.first(s__24717__$2);
return cljs.core.cons(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__24716(cljs.core.rest(s__24717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13329__auto__(thi.ng.common.math.core.norm_range(res));
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
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__24723,p__24724){
var vec__24727 = p__24723;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24727,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24727,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24727,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24727,(3),null);
var vec__24728 = p__24724;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24728,(1),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 * UVW coordinates. Applies trilinear interpolation to compute point
 * within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 * along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__24729,p__24730){
var vec__24733 = p__24729;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(7),null);
var vec__24734 = p__24730;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(2),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,d,e,h,u,v),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(){
var G__24737 = arguments.length;
switch (G__24737) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24735_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,(function (){var G__24738 = (0);
return (p1__24735_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24735_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24738) : p1__24735_SHARP_.call(null,G__24738));
})(),(function (){var G__24739 = (1);
return (p1__24735_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24735_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24739) : p1__24735_SHARP_.call(null,G__24739));
})()],null));
}),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var vec__24744 = points;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(0),null);
var more = cljs.core.nthnext(vec__24744,(1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__24744,v0,more){
return (function (p__24745){
var vec__24746 = p__24745;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24746,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24746,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__24744,v0,more))
,thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__24747){
var vec__24749 = p__24747;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(2),null);
var ab = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
var bc = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(b,c);
var ca = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__24758 = cljs.core._EQ_;
var expr__24759 = cljs.core.count(points);
if(cljs.core.truth_((function (){var G__24761 = (3);
var G__24762 = expr__24759;
return (pred__24758.cljs$core$IFn$_invoke$arity$2 ? pred__24758.cljs$core$IFn$_invoke$arity$2(G__24761,G__24762) : pred__24758.call(null,G__24761,G__24762));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((function (){var G__24763 = (4);
var G__24764 = expr__24759;
return (pred__24758.cljs$core$IFn$_invoke$arity$2 ? pred__24758.cljs$core$IFn$_invoke$arity$2(G__24763,G__24764) : pred__24758.call(null,G__24763,G__24764));
})())){
var vec__24765 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24765,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24765,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24765,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24765,(3),null);
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
var G__24767 = arguments.length;
switch (G__24767) {
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

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__24768){
var vec__24769 = p__24768;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24769,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24769,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24769,(2),null);
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__24771,p__24772,p__24773){
var vec__24777 = p__24771;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24777,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24777,(1),null);
var vec__24778 = p__24772;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24778,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24778,(1),null);
var vec__24779 = p__24773;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24779,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24779,(1),null);
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
var G__24781 = arguments.length;
switch (G__24781) {
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

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__24782,p){
var vec__24783 = p__24782;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(2),null);
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
var vec__24786 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24786,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24786,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24786,(2),null);
var and__12563__auto__ = (u__$1 >= 0.0);
if(and__12563__auto__){
var and__12563__auto____$1 = (w >= 0.0);
if(and__12563__auto____$1){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__24787_SHARP_){
var G__24788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.tri_area3,p1__24787_SHARP_);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__24788) : thi.ng.common.math.core.abs.call(null,G__24788));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__24789_SHARP_){
return thi.ng.geom.core.dot((function (){var G__24790 = (0);
return (p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24790) : p1__24789_SHARP_.call(null,G__24790));
})(),thi.ng.geom.core.cross((function (){var G__24791 = (1);
return (p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24791) : p1__24789_SHARP_.call(null,G__24791));
})(),(function (){var G__24792 = (2);
return (p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24789_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24792) : p1__24789_SHARP_.call(null,G__24792));
})()));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});
