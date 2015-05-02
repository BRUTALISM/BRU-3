// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.face.wings');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('bru_3.decomposition');
bru_3.face.wings.letter_map = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$r,cljs.core.constant$keyword$m,cljs.core.constant$keyword$s,cljs.core.constant$keyword$l,cljs.core.constant$keyword$b,cljs.core.constant$keyword$t,cljs.core.constant$keyword$i,cljs.core.constant$keyword$a,cljs.core.constant$keyword$u],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$top_DASH_left,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$right_DASH_bottom,null,cljs.core.constant$keyword$left_DASH_top,null,cljs.core.constant$keyword$top_DASH_right,null,cljs.core.constant$keyword$bottom_DASH_left,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$left_DASH_bottom,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$right_DASH_bottom,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$right_DASH_top,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right_DASH_top,null,cljs.core.constant$keyword$left_DASH_top,null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$bottom_DASH_right,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$top_DASH_right,null], null), null)]);
bru_3.face.wings.clockwise_keys = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$top_DASH_left,cljs.core.constant$keyword$top_DASH_right,cljs.core.constant$keyword$right_DASH_top,cljs.core.constant$keyword$right_DASH_bottom,cljs.core.constant$keyword$bottom_DASH_right,cljs.core.constant$keyword$bottom_DASH_left,cljs.core.constant$keyword$left_DASH_bottom,cljs.core.constant$keyword$left_DASH_top], null);
bru_3.face.wings.holemap = (function bru_3$face$wings$holemap(l){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21600_SHARP_){
var G__21603 = (function (){var G__21604 = bru_3.face.wings.letter_map;
return (l.cljs$core$IFn$_invoke$arity$1 ? l.cljs$core$IFn$_invoke$arity$1(G__21604) : l.call(null,G__21604));
})();
return (p1__21600_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21600_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21603) : p1__21600_SHARP_.call(null,G__21603));
}),bru_3.face.wings.clockwise_keys);
});
bru_3.face.wings.wingtip_variants = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike,cljs.core.constant$keyword$spike,cljs.core.constant$keyword$round], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike,cljs.core.constant$keyword$round,cljs.core.constant$keyword$inverted_DASH_spike], null)], null);
bru_3.face.wings.edgeverts = (function bru_3$face$wings$edgeverts(p__21605,p__21606){
var map__21615 = p__21605;
var map__21615__$1 = ((cljs.core.seq_QMARK_(map__21615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21615):map__21615);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$bite);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$indent);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$sharpness);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$reverse);
var vec__21616 = p__21606;
var vec__21617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(1),null);
var vec__21618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(0),null);
var vec__21619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(2),null);
var vec__21620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(2),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620,(0),null);
var vec__21621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620,(1),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21621,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21621,(1),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620,(2),null);
var vec__21622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21622,(0),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21622,(1),null);
var piv = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,pv,b);
var niv = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v2,nv,b);
var h = (cljs.core.truth_(rev)?h2:h1);
if(cljs.core.truth_(h)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,in$),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(piv,niv,in$),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,(in$ + s))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(v1,v2,in$)], null);
}
});
bru_3.face.wings.cornerverts = (function bru_3$face$wings$cornerverts(p__21623,p__21624){
var map__21630 = p__21623;
var map__21630__$1 = ((cljs.core.seq_QMARK_(map__21630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21630):map__21630);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,cljs.core.constant$keyword$bite);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,cljs.core.constant$keyword$indent);
var vec__21631 = p__21624;
var vec__21632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(1),null);
var vec__21633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(1),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(2),null);
var vec__21634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21634,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21634,(1),null);
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
bru_3.face.wings.frame__GT_face = (function bru_3$face$wings$frame__GT_face(conf,p__21637){
var vec__21639 = p__21637;
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21639,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21639,(1),null);
var rconf = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conf,cljs.core.constant$keyword$reverse,true);
var vs = cljs.core.cycle(bru_3.decomposition.vertices(fr));
var hs = cljs.core.cycle(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bru_3.face.wings.holemap(l)));
var ws = cljs.core.cycle(cljs.core.rand_nth(bru_3.face.wings.wingtip_variants));
var quadruples = ((function (rconf,vs,hs,ws,vec__21639,fr,l){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rconf,vs,hs,ws,vec__21639,fr,l){
return (function (p1__21635_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__21635_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__21635_SHARP_ + (4)),xs));
});})(rconf,vs,hs,ws,vec__21639,fr,l))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
});})(rconf,vs,hs,ws,vec__21639,fr,l))
;
var vhs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(vs,hs,cljs.core.array_seq([ws], 0)));
var qvhs = quadruples(vhs);
var rev = ((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21639,fr,l){
return (function (coll){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21639,fr,l){
return (function (p1__21636_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__21636_SHARP_),cljs.core.reverse(cljs.core.second(p1__21636_SHARP_))],null));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21639,fr,l))
,coll));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,vec__21639,fr,l))
;
var edgefn = ((function (rconf,vs,hs,ws,quadruples,vhs,qvhs,rev,vec__21639,fr,l){
return (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(bru_3.face.wings.cornerverts(conf,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(coll),(0),(3))),bru_3.face.wings.edgeverts(conf,coll)),cljs.core.reverse(bru_3.face.wings.edgeverts(rconf,rev(coll))));
});})(rconf,vs,hs,ws,quadruples,vhs,qvhs,rev,vec__21639,fr,l))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(edgefn,qvhs));
});
