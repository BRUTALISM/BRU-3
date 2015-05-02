// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.common.data.core');
goog.require('cljs.core');
thi.ng.common.data.core.index = (function thi$ng$common$data$core$index(i,t){
var temp__4420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__4420__auto__)){
var tt = temp__4420__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.common.data.core.index_BANG_ = (function thi$ng$common$data$core$index_BANG_(i,t){
var temp__4420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__4420__auto__)){
var tt = temp__4420__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.common.data.core.index_kv = (function thi$ng$common$data$core$index_kv(m,k,v){
var temp__4420__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4420__auto__)){
var vec__24004 = temp__4420__auto__;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24004,(0),null);
var vv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24004,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.index_kv_BANG_ = (function thi$ng$common$data$core$index_kv_BANG_(m,k,v){
var temp__4420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4420__auto__)){
var vv = temp__4420__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.value_set = (function thi$ng$common$data$core$value_set(){
var G__24008 = arguments.length;
switch (G__24008) {
case 2:
return thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
});

thi.ng.common.data.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24005_SHARP_,p2__24006_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__24005_SHARP_,(function (){var G__24009 = p2__24006_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24009) : f.call(null,G__24009));
})());
}),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v)));
});

thi.ng.common.data.core.value_set.cljs$lang$maxFixedArity = 3;
thi.ng.common.data.core.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.common.data.core.vec_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.common.data.core.set_conj2_STAR_ = (function thi$ng$common$data$core$set_conj2_STAR_(p1__24011_SHARP_,p2__24012_SHARP_){
if((p1__24011_SHARP_ == null)){
return p2__24012_SHARP_;
} else {
if(cljs.core.set_QMARK_(p1__24011_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24011_SHARP_,p2__24012_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p2__24012_SHARP_,p1__24011_SHARP_], true);
}
}
});
thi.ng.common.data.core.vec_conj2_STAR_ = (function thi$ng$common$data$core$vec_conj2_STAR_(p1__24013_SHARP_,p2__24014_SHARP_){
if((p1__24013_SHARP_ == null)){
return p2__24014_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__24013_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24013_SHARP_,p2__24014_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24013_SHARP_,p2__24014_SHARP_], null);
}
}
});
thi.ng.common.data.core.collect_set = (function thi$ng$common$data$core$collect_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
thi.ng.common.data.core.collect_indexed = (function thi$ng$common$data$core$collect_indexed(f,f2,coll){
var keys = thi.ng.common.data.core.collect_set(f,coll);
return cljs.core.zipmap(keys,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.identity))?keys:cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,keys)));
});
thi.ng.common.data.core.interval_set = (function thi$ng$common$data$core$interval_set(){
var argseq__13647__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__13647__auto__);
});

thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var G__24016 = (0);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__24016) : v.call(null,G__24016));
})(),((function (){var G__24017 = (1);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__24017) : v.call(null,G__24017));
})() + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.array_seq([ivals], 0)));
});

thi.ng.common.data.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.interval_set.cljs$lang$applyTo = (function (seq24015){
return thi.ng.common.data.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24015));
});
thi.ng.common.data.core.check_intervals = (function thi$ng$common$data$core$check_intervals(){
var argseq__13647__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__13647__auto__);
});

thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__24019 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__24020,v){
var vec__24021 = p__24020;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(0),null);
var const$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(1),null);
return ((function (vec__24019,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_((function (){var G__24022 = x;
return (const$.cljs$core$IFn$_invoke$arity$1 ? const$.cljs$core$IFn$_invoke$arity$1(G__24022) : const$.call(null,G__24022));
})())){
return x;
} else {
return cljs.core.some(((function (vec__24019,ivals__$1,const$){
return (function (p__24023){
var vec__24024 = p__24023;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24024,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24024,(1),null);
return ((a <= x)) && ((x <= b));
});})(vec__24019,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__24019,ivals__$1,const$))
});

thi.ng.common.data.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.check_intervals.cljs$lang$applyTo = (function (seq24018){
return thi.ng.common.data.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24018));
});
/**
 * All the ways to take one item from each sequence
 * (taken from clojure.contrib.combinatorics)
 */
thi.ng.common.data.core.cartesian_product = (function thi$ng$common$data$core$cartesian_product(){
var argseq__13647__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__13647__auto__);
});

thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$common$data$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__4420__auto__ = cljs.core.next((function (){var G__24029 = i;
return (v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(G__24029) : v_seqs__$2.call(null,G__24029));
})());
if(temp__4420__auto__){
var rst = temp__4420__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__24031 = (i - (1));
var G__24032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(function (){var G__24030 = i;
return (v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(G__24030) : v_original_seqs.call(null,G__24030));
})());
i = G__24031;
v_seqs__$2 = G__24032;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$common$data$core$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.common.data.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.common.data.core.cartesian_product.cljs$lang$applyTo = (function (seq24025){
return thi.ng.common.data.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24025));
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 * a vector of items for which `f` returned a truthy value.
 */
thi.ng.common.data.core.filter_tree = (function thi$ng$common$data$core$filter_tree(f,root){
var walk = (function thi$ng$common$data$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_((function (){var G__24036 = node;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24036) : f.call(null,G__24036));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,node);
} else {
if(cljs.core.coll_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi$ng$common$data$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(walk,cljs.core.PersistentVector.EMPTY,root);
});
thi.ng.common.data.core.bisect = (function thi$ng$common$data$core$bisect(){
var G__24038 = arguments.length;
switch (G__24038) {
case 2:
return thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__24039 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__24040,v){
var vec__24041 = p__24040;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24041,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24041,(1),null);
if(cljs.core.truth_((function (){var G__24042 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24042) : f.call(null,G__24042));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24039,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24039,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(m),cljs.core.persistent_BANG_(n)], null);
});

thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
var vec__24043 = thi.ng.common.data.core.bisect.cljs$core$IFn$_invoke$arity$2(f,coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24044 = m;
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(G__24044) : f2.call(null,G__24044));
})(),(function (){var G__24045 = n;
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(G__24045) : f2.call(null,G__24045));
})()], null);
});

thi.ng.common.data.core.bisect.cljs$lang$maxFixedArity = 3;
thi.ng.common.data.core.neighbors = (function thi$ng$common$data$core$neighbors(x,coll){
var n = (cljs.core.count(coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(function (){var G__24050 = i;
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__24050) : coll.call(null,G__24050));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24051 = (((i > (0)))?(i - (1)):n);
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__24051) : coll.call(null,G__24051));
})(),(function (){var G__24052 = (((i < n))?(i + (1)):(0));
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__24052) : coll.call(null,G__24052));
})()], null);
} else {
var G__24053 = (i - (1));
i = G__24053;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 * a successive elements of the original collection.
 * 
 * (successive-nth 3 [1 2 3 4])
 * => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.common.data.core.successive_nth = (function thi$ng$common$data$core$successive_nth(){
var G__24055 = arguments.length;
switch (G__24055) {
case 2:
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth.cljs$lang$maxFixedArity = 3;
/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 * a vector of `n` successive elements of the original collection and
 * an sequence index.
 * 
 * (successive-nth-indexed 2 [10 20 30 40])
 * => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.common.data.core.successive_nth_indexed = (function thi$ng$common$data$core$successive_nth_indexed(){
var G__24058 = arguments.length;
switch (G__24058) {
case 2:
return thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(0),coll);
});

thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(s),idx], null),thi.ng.common.data.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(idx + (1)),cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.common.data.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;
/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.common.data.core.apply_to_keys = (function thi$ng$common$data$core$apply_to_keys(){
var argseq__13647__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13647__auto__);
});

thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(type,k),args));
}),type,keys);
});

thi.ng.common.data.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.common.data.core.apply_to_keys.cljs$lang$applyTo = (function (seq24060){
var G__24061 = cljs.core.first(seq24060);
var seq24060__$1 = cljs.core.next(seq24060);
var G__24062 = cljs.core.first(seq24060__$1);
var seq24060__$2 = cljs.core.next(seq24060__$1);
var G__24063 = cljs.core.first(seq24060__$2);
var seq24060__$3 = cljs.core.next(seq24060__$2);
return thi.ng.common.data.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__24061,G__24062,G__24063,seq24060__$3);
});
thi.ng.common.data.core.reduce_pairs = (function thi$ng$common$data$core$reduce_pairs(){
var G__24065 = arguments.length;
switch (G__24065) {
case 3:
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4(f1,f2,null,coll);
});

thi.ng.common.data.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count(coll) > (1))){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24066){
var vec__24067 = p__24066;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24067,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24067,(1),null);
var G__24068 = a;
var G__24069 = b;
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__24068,G__24069) : f2.call(null,G__24068,G__24069));
}),thi.ng.common.data.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f1,acc,pairs);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f1,pairs);
}
} else {
return null;
}
});

thi.ng.common.data.core.reduce_pairs.cljs$lang$maxFixedArity = 4;
thi.ng.common.data.core.wrap_seq = (function thi$ng$common$data$core$wrap_seq(s,head,tail){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.sequential_QMARK_(head))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,s):cljs.core.cons(head,s)),((cljs.core.sequential_QMARK_(tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.common.data.core.append_first = (function thi$ng$common$data$core$append_first(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs)], null));
});
thi.ng.common.data.core.rotate_left = (function thi$ng$common$data$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,(0),n));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,xs),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
}
});
thi.ng.common.data.core.index_of = (function thi$ng$common$data$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(coll__$1))){
return i;
} else {
var G__24071 = (i + (1));
var G__24072 = cljs.core.next(coll__$1);
i = G__24071;
coll__$1 = G__24072;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 * If `coll` is a vector, the new collection is created with `subvec`.
 * Returns original coll if item isn't found.
 */
thi.ng.common.data.core.all_after = (function thi$ng$common$data$core$all_after(item,coll){
var idx = (thi.ng.common.data.core.index_of(coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,idx);
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(idx,coll);
}
} else {
return coll;
}
});
thi.ng.common.data.core.iterate_while = (function thi$ng$common$data$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((function (){var G__24078 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24078) : pred.call(null,G__24078));
})())){
return cljs.core.cons(x,thi$ng$common$data$core$iterate_while(pred,f,(function (){var G__24079 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24079) : f.call(null,G__24079));
})()));
} else {
return null;
}
}),null,null));
});
thi.ng.common.data.core.iterate_n = (function thi$ng$common$data$core$iterate_n(n,f,x){
return cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(f,x)));
});
thi.ng.common.data.core.unwrap_string = (function thi$ng$common$data$core$unwrap_string(s,n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,n,(cljs.core.count(s) - n));
});
thi.ng.common.data.core.wrap = (function thi$ng$common$data$core$wrap(a,b,s){
return [cljs.core.str(a),cljs.core.str(s),cljs.core.str(b)].join('');
});
thi.ng.common.data.core.stringify_keys = (function thi$ng$common$data$core$stringify_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24082){
var vec__24083 = p__24082;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083,(1),null);
var e = vec__24083;
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return e;
}
}),m));
});
/**
 * Takes a keyword or string and string/seq of items, returns map with
 * items as keys and boolean values indicating if an item has been
 * found in the string representation of the kw. If `kw` is nil, returns
 * nil.
 * 
 * (demunge-flags :cad "abcd")
 * #_=> {:a true :b false :c true :d true}
 */
thi.ng.common.data.core.demunge_flags = (function thi$ng$common$data$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 * (demunge-flags-seq :cad "abcd")
 * #_=> [true false true true]
 */
thi.ng.common.data.core.demunge_flags_seq = (function thi$ng$common$data$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (flags){
return (function (p1__24084_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__24084_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});
