// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.face.wings');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('bru_3.decomposition');
bru_3.face.wings.letter_map = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$r,cljs.core.constant$keyword$m,cljs.core.constant$keyword$s,cljs.core.constant$keyword$l,cljs.core.constant$keyword$b,cljs.core.constant$keyword$t,cljs.core.constant$keyword$i,cljs.core.constant$keyword$a,cljs.core.constant$keyword$u],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$top_DASH_left,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$right_DASH_bottom,null,cljs.core.constant$keyword$left_DASH_top,null,cljs.core.constant$keyword$top_DASH_right,null,cljs.core.constant$keyword$bottom_DASH_left,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$left_DASH_bottom,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$right_DASH_bottom,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$right_DASH_top,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$left_DASH_top,null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$bottom_DASH_right,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$top_DASH_right,null], null), null)]);
bru_3.face.wings.clockwise_keys = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$top_DASH_left,cljs.core.constant$keyword$top_DASH_right,cljs.core.constant$keyword$right_DASH_top,cljs.core.constant$keyword$right_DASH_bottom,cljs.core.constant$keyword$bottom_DASH_right,cljs.core.constant$keyword$bottom_DASH_left,cljs.core.constant$keyword$left_DASH_bottom,cljs.core.constant$keyword$left_DASH_top], null);
bru_3.face.wings.holemap = (function bru_3$face$wings$holemap(l){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21594_SHARP_){
var G__21597 = (function (){var G__21598 = bru_3.face.wings.letter_map;
return (l.cljs$core$IFn$_invoke$arity$1 ? l.cljs$core$IFn$_invoke$arity$1(G__21598) : l.call(null,G__21598));
})();
return (p1__21594_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21594_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21597) : p1__21594_SHARP_.call(null,G__21597));
}),bru_3.face.wings.clockwise_keys);
});
bru_3.face.wings.wingtip_variants = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike,cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike], null)], null);
bru_3.face.wings.edgeverts = (function bru_3$face$wings$edgeverts(p__21599,p__21600){
var map__21609 = p__21599;
var map__21609__$1 = ((cljs.core.seq_QMARK_(map__21609))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21609):map__21609);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.constant$keyword$bite);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.constant$keyword$indent);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.constant$keyword$sharpness);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,cljs.core.constant$keyword$reverse);
var vec__21610 = p__21600;
var vec__21611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21611,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21611,(1),null);
var vec__21612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(0),null);
var vec__21613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(2),null);
var vec__21614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(2),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21614,(0),null);
var vec__21615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21614,(1),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615,(1),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21614,(2),null);
var vec__21616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(0),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(1),null);
var piv = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,pv,b);
var niv = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v2,nv,b);
var h = (cljs.core.truth_(rev)?h2:h1);
if(cljs.core.truth_(h)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,in$),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(piv,niv,in$),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,(in$ + s))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,in$)], null);
}
});
bru_3.face.wings.cornerverts = (function bru_3$face$wings$cornerverts(p__21617,p__21618){
var map__21624 = p__21617;
var map__21624__$1 = ((cljs.core.seq_QMARK_(map__21624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21624):map__21624);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624__$1,cljs.core.constant$keyword$bite);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624__$1,cljs.core.constant$keyword$indent);
var vec__21625 = p__21618;
var vec__21626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(1),null);
var vec__21627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(1),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(2),null);
var vec__21628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.constant$keyword$round)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v,p,b),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v,n,b)], null);
} else {
var spike = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.constant$keyword$spike);
var pp = ((spike)?p:n);
var nn = ((spike)?n:p);
var d = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(v,nn);
var l = thi.ng.geom.core.mag(d);
var dir = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(d);
var offset = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(dir,(l * in$));
var tip = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(v,offset);
var intro = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(tip,v,0.6666),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pp,offset),b);
if(spike){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [intro,tip], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tip,intro], null);
}
}
});
bru_3.face.wings.frame__GT_face = (function bru_3$face$wings$frame__GT_face(conf,p__21631){
var vec__21633 = p__21631;
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(1),null);
var rconf = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conf,cljs.core.constant$keyword$reverse,true);
var vs = cljs.core.cycle(bru_3.decomposition.vertices(fr));
var hs = cljs.core.cycle(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bru_3.face.wings.holemap(l)));
var ws = cljs.core.cycle(cljs.core.rand_nth(bru_3.face.wings.wingtip_variants));
var quadruples = ((function (rconf,vs,hs,ws,vec__21633,fr,l){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rconf,vs,hs,ws,vec__21633,fr,l){
return (function (p1__21629_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__21629_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__21629_SHARP_ + (4)),xs));
});})(rconf,vs,hs,ws,vec__21633,fr,l))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
});})(rconf,vs,hs,ws,vec__21633,fr,l))
;
var vhs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(vs,hs,cljs.core.array_seq([ws], 0)));
var qvhs = quadruples(vhs);
var rev = ((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21633,fr,l){
return (function (coll){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21633,fr,l){
return (function (p1__21630_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__21630_SHARP_),cljs.core.reverse(cljs.core.second(p1__21630_SHARP_))],null));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21633,fr,l))
,coll));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21633,fr,l))
;
var edgefn = ((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,rev,vec__21633,fr,l){
return (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(bru_3.face.wings.cornerverts(conf,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(coll),(0),(3))),bru_3.face.wings.edgeverts(conf,coll)),cljs.core.reverse(bru_3.face.wings.edgeverts(rconf,rev(coll))));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,rev,vec__21633,fr,l))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(edgefn,qvhs));
});
