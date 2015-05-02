// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
thi.ng.geom.core.intersect.sq = (function thi$ng$geom$core$intersect$sq(x){
return (x * x);
});
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_circle_circle_QMARK_(){
var G__23690 = arguments.length;
switch (G__23690) {
case 2:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23691,p__23692){
var map__23693 = p__23691;
var map__23693__$1 = ((cljs.core.seq_QMARK_(map__23693))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23693):map__23693);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23693__$1,cljs.core.constant$keyword$p);
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23693__$1,cljs.core.constant$keyword$r);
var map__23694 = p__23692;
var map__23694__$1 = ((cljs.core.seq_QMARK_(map__23694))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23694):map__23694);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23694__$1,cljs.core.constant$keyword$p);
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23694__$1,cljs.core.constant$keyword$r);
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,r1,q,r2);
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,p);
var d = thi.ng.geom.core.mag(delta);
if(((d <= (r1 + r2))) && ((d >= (function (){var G__23696 = (r1 - r2);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23696) : thi.ng.common.math.core.abs.call(null,G__23696));
})()))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.geom.core.madd(delta,(a * invd),p);
var h = (function (){var G__23697 = ((r1 * r1) - (a * a));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23697) : Math.sqrt.call(null,G__23697));
})();
var perp = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,perp),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_rect_QMARK_(){
var G__23700 = arguments.length;
switch (G__23700) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23701,p__23702){
var map__23703 = p__23701;
var map__23703__$1 = ((cljs.core.seq_QMARK_(map__23703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23703):map__23703);
var vec__23704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23703__$1,cljs.core.constant$keyword$p);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23704,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23704,(1),null);
var vec__23705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23703__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(1),null);
var map__23706 = p__23702;
var map__23706__$1 = ((cljs.core.seq_QMARK_(map__23706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23706):map__23706);
var vec__23707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23706__$1,cljs.core.constant$keyword$p);
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(1),null);
var vec__23708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23706__$1,cljs.core.constant$keyword$size);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__23709,p__23710,p__23711,p__23712){
var vec__23713 = p__23709;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23713,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23713,(1),null);
var vec__23714 = p__23710;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23714,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23714,(1),null);
var vec__23715 = p__23711;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23715,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23715,(1),null);
var vec__23716 = p__23712;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23716,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23716,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_circle_QMARK_(){
var G__23719 = arguments.length;
switch (G__23719) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23720,p__23721){
var map__23722 = p__23720;
var map__23722__$1 = ((cljs.core.seq_QMARK_(map__23722))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23722):map__23722);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23722__$1,cljs.core.constant$keyword$p);
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23722__$1,cljs.core.constant$keyword$size);
var map__23723 = p__23721;
var map__23723__$1 = ((cljs.core.seq_QMARK_(map__23723))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23723):map__23723);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,cljs.core.constant$keyword$p);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,cljs.core.constant$keyword$r);
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__23724,p__23725,p__23726,r){
var vec__23727 = p__23724;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23727,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23727,(1),null);
var vec__23728 = p__23725;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23728,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23728,(1),null);
var vec__23729 = p__23726;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23729,(1),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq((cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_aabb_QMARK_(){
var G__23732 = arguments.length;
switch (G__23732) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23733,p__23734){
var map__23735 = p__23733;
var map__23735__$1 = ((cljs.core.seq_QMARK_(map__23735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23735):map__23735);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23735__$1,cljs.core.constant$keyword$p);
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23735__$1,cljs.core.constant$keyword$size);
var map__23736 = p__23734;
var map__23736__$1 = ((cljs.core.seq_QMARK_(map__23736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23736):map__23736);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23736__$1,cljs.core.constant$keyword$p);
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23736__$1,cljs.core.constant$keyword$size);
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4(pa,pb,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,sa),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,sb));
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if((((function (){var G__23741 = (0);
return (pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1(G__23741) : pa.call(null,G__23741));
})() <= (function (){var G__23742 = (0);
return (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1(G__23742) : qb.call(null,G__23742));
})())) && (((function (){var G__23743 = (0);
return (pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1(G__23743) : pb.call(null,G__23743));
})() <= (function (){var G__23744 = (0);
return (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1(G__23744) : qa.call(null,G__23744));
})()))){
if((((function (){var G__23749 = (1);
return (pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1(G__23749) : pa.call(null,G__23749));
})() <= (function (){var G__23750 = (1);
return (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1(G__23750) : qb.call(null,G__23750));
})())) && (((function (){var G__23751 = (1);
return (pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1(G__23751) : pb.call(null,G__23751));
})() <= (function (){var G__23752 = (1);
return (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1(G__23752) : qa.call(null,G__23752));
})()))){
return (((function (){var G__23757 = (2);
return (pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1(G__23757) : pa.call(null,G__23757));
})() <= (function (){var G__23758 = (2);
return (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1(G__23758) : qb.call(null,G__23758));
})())) && (((function (){var G__23759 = (2);
return (pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1(G__23759) : pb.call(null,G__23759));
})() <= (function (){var G__23760 = (2);
return (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1(G__23760) : qa.call(null,G__23760));
})()));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_sphere_QMARK_(){
var G__23763 = arguments.length;
switch (G__23763) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23764,p__23765){
var map__23766 = p__23764;
var map__23766__$1 = ((cljs.core.seq_QMARK_(map__23766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23766):map__23766);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23766__$1,cljs.core.constant$keyword$p);
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23766__$1,cljs.core.constant$keyword$size);
var map__23767 = p__23765;
var map__23767__$1 = ((cljs.core.seq_QMARK_(map__23767))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23767):map__23767);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23767__$1,cljs.core.constant$keyword$p);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23767__$1,cljs.core.constant$keyword$r);
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__23768,p__23769,p__23770,r){
var vec__23771 = p__23768;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23771,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23771,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23771,(2),null);
var vec__23772 = p__23769;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(2),null);
var vec__23773 = p__23770;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23773,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23773,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23773,(2),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq((cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.core.intersect.sq((cz - pz)):(((cz > qz))?thi.ng.geom.core.intersect.sq((cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_sphere_sphere_QMARK_(){
var G__23776 = arguments.length;
switch (G__23776) {
case 2:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23777,p__23778){
var map__23779 = p__23777;
var map__23779__$1 = ((cljs.core.seq_QMARK_(map__23779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23779):map__23779);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23779__$1,cljs.core.constant$keyword$p);
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23779__$1,cljs.core.constant$keyword$r);
var map__23780 = p__23778;
var map__23780__$1 = ((cljs.core.seq_QMARK_(map__23780))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23780):map__23780);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23780__$1,cljs.core.constant$keyword$p);
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23780__$1,cljs.core.constant$keyword$r);
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p1,r1,p2,r2);
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared(p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_sphere_QMARK_(){
var G__23783 = arguments.length;
switch (G__23783) {
case 2:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23784,p__23785){
var map__23786 = p__23784;
var map__23786__$1 = ((cljs.core.seq_QMARK_(map__23786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23786):map__23786);
var rp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23786__$1,cljs.core.constant$keyword$p);
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23786__$1,cljs.core.constant$keyword$dir);
var map__23787 = p__23785;
var map__23787__$1 = ((cljs.core.seq_QMARK_(map__23787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23787):map__23787);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23787__$1,cljs.core.constant$keyword$p);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23787__$1,cljs.core.constant$keyword$r);
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(rp,dir,p,r);
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,rp);
var ds = thi.ng.geom.core.mag_squared(q);
var v = (- thi.ng.geom.core.dot(q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = (function (){var G__23788 = d;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23788) : Math.sqrt.call(null,G__23788));
})();
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.geom.core.cross(u,v);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$degenerate], null);
} else {
var w0 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot(n,w0));
var b_SINGLEQUOTE_ = thi.ng.geom.core.dot(n,d);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$same_DASH_plane], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$no_DASH_intersect], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$no_DASH_intersect], null);
} else {
var i = thi.ng.geom.core.madd(d,r,p);
var vec__23791 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,i,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(2),null);
if(cljs.core.truth_((function (){var and__12595__auto__ = (u__$1 >= 0.0);
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
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect,cljs.core.constant$keyword$p,i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$no_DASH_intersect,cljs.core.constant$keyword$p,i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_line2_QMARK_(p__23792,p__23793,p__23794,p__23795){
var vec__23800 = p__23792;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800,(1),null);
var p = vec__23800;
var vec__23801 = p__23793;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(1),null);
var q = vec__23801;
var vec__23802 = p__23794;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23802,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23802,(1),null);
var lp = vec__23802;
var vec__23803 = p__23795;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23803,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23803,(1),null);
var lq = vec__23803;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.core.utils.closest_point_on_segment(lp,p,q);
var iq = thi.ng.geom.core.utils.closest_point_on_segment(lq,p,q);
if(cljs.core.truth_((function (){var or__12607__auto__ = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(ip,lp);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$coincident,cljs.core.constant$keyword$p,ip,cljs.core.constant$keyword$q,iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$coincident_DASH_no_DASH_intersect,cljs.core.constant$keyword$p,ip,cljs.core.constant$keyword$q,iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$parallel], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect,cljs.core.constant$keyword$p,i,cljs.core.constant$keyword$ua,ua,cljs.core.constant$keyword$ub,ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect_DASH_outside,cljs.core.constant$keyword$p,i,cljs.core.constant$keyword$ua,ua,cljs.core.constant$keyword$ub,ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23808){
var vec__23809 = p__23808;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_(rp,rq,p,q);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__23804_SHARP_){
var and__12595__auto__ = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(p1__23804_SHARP_);
if(cljs.core.truth_(and__12595__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$intersect,null,cljs.core.constant$keyword$coincident,null], null), null).call(null,cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(p1__23804_SHARP_));
} else {
return and__12595__auto__;
}
}))),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (closest,isec){
var p = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(isec);
var d = thi.ng.geom.core.dist_squared(rp,p);
if((d < (function (){var G__23810 = (1);
return (closest.cljs$core$IFn$_invoke$arity$1 ? closest.cljs$core$IFn$_invoke$arity$1(G__23810) : closest.call(null,G__23810));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.common.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_(rp,thi.ng.geom.core.madd(rd,1.0E29,rp),edges);
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__12607__auto__ = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(aw,bw,thi.ng.common.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(an,bn,thi.ng.common.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.geom.core.dot(an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$p,thi.ng.geom.core.madd(an,u,thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bn,v)),cljs.core.constant$keyword$dir,thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.geom.core.dot(n,dir);
var dn = (thi.ng.geom.core.dot(n,rp) + w);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,dp,thi.ng.common.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,(((dn === (0)))?cljs.core.constant$keyword$on_DASH_plane:cljs.core.constant$keyword$parallel)], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.geom.core.madd(dir,du,rp);
if(cljs.core.truth_(thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect,cljs.core.constant$keyword$p,i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$intersect_DASH_outside,cljs.core.constant$keyword$p,i], null);
}
}
});
thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
var r__$1 = (r + thi.ng.common.math.core._STAR_eps_STAR_);
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((- r__$1),r__$1,(thi.ng.geom.core.dot(n,p) + w));
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.core.intersect.subdot = (function thi$ng$geom$core$intersect$subdot(a,b,c){
var d = thi.ng.geom.core.subm(a,b,c);
return (((function (){var G__23814 = (0);
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__23814) : d.call(null,G__23814));
})() + (function (){var G__23815 = (1);
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__23815) : d.call(null,G__23815));
})()) + (function (){var G__23816 = (2);
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__23816) : d.call(null,G__23816));
})());
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 * Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.core.intersect.face_a = (function thi$ng$geom$core$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((((function (){var G__23821 = (0);
return (aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1(G__23821) : aff.call(null,G__23821));
})() > (0)))?(1):(0)) | ((((function (){var G__23822 = (1);
return (aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1(G__23822) : aff.call(null,G__23822));
})() > (0)))?(2):(0))) | ((((function (){var G__23823 = (2);
return (aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1(G__23823) : aff.call(null,G__23823));
})() > (0)))?(4):(0))) | ((((function (){var G__23824 = (3);
return (aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1(G__23824) : aff.call(null,G__23824));
})() > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 * Returns true if all dot products are positive.
 */
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function thi$ng$geom$core$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_((function (p1__23825_SHARP_){
return (thi.ng.geom.core.dot(p1__23825_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function thi$ng$geom$core$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_((function (p1__23826_SHARP_){
return (thi.ng.geom.core.intersect.subdot(p1__23826_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 * separating plane between the faces shared by that edge.
 */
thi.ng.geom.core.intersect.edge_a = (function thi$ng$geom$core$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = (((function (){var G__23831 = i;
return (ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(G__23831) : ea.call(null,G__23831));
})() * (function (){var G__23832 = j;
return (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(G__23832) : eb.call(null,G__23832));
})()) - ((function (){var G__23833 = j;
return (ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(G__23833) : ea.call(null,G__23833));
})() * (function (){var G__23834 = i;
return (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(G__23834) : eb.call(null,G__23834));
})()));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not((function (){var or__12607__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),(ma | mb));
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = edge((1),(2),(1),(0));
if(cljs.core.truth_(or__12607__auto____$1)){
return or__12607__auto____$1;
} else {
var or__12607__auto____$2 = edge((1),(4),(2),(0));
if(cljs.core.truth_(or__12607__auto____$2)){
return or__12607__auto____$2;
} else {
var or__12607__auto____$3 = edge((1),(8),(3),(0));
if(cljs.core.truth_(or__12607__auto____$3)){
return or__12607__auto____$3;
} else {
var or__12607__auto____$4 = edge((2),(4),(2),(1));
if(cljs.core.truth_(or__12607__auto____$4)){
return or__12607__auto____$4;
} else {
var or__12607__auto____$5 = edge((2),(8),(3),(1));
if(cljs.core.truth_(or__12607__auto____$5)){
return or__12607__auto____$5;
} else {
return edge((4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 * points and an edge id. Looks up edge for given id and if not yet
 * present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.core.intersect.get_edge = (function thi$ng$geom$core$intersect$get_edge(edges,epoints,id){
var e = (function (){var G__23839 = id;
return (edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(G__23839) : edges.call(null,G__23839));
})();
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = (function (){var G__23840 = id;
return (epoints.cljs$core$IFn$_invoke$arity$1 ? epoints.cljs$core$IFn$_invoke$arity$1(G__23840) : epoints.call(null,G__23840));
})();
var e__$1 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2((function (){var G__23841 = (0);
return (ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1(G__23841) : ep.call(null,G__23841));
})(),(function (){var G__23842 = (1);
return (ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1(G__23842) : ep.call(null,G__23842));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 * of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 * and a seq of specs, each encoding a specific check (either calls to
 * face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.core.intersect.check_faces_a = (function thi$ng$geom$core$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__23853 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23853,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23853,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23853,(2),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$f,f)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$f_STAR_,f))){
var vec__23854 = thi.ng.geom.core.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(1),null);
var vec__23855 = thi.ng.geom.core.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23855,(1),null);
var n = thi.ng.geom.core.cross(ea,eb);
var vec__23856 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$f,f))?thi.ng.geom.core.intersect.face_a(((function (masks,affine,edges,s,vec__23854,edges__$1,ea,vec__23855,edges__$2,eb,n,vec__23853,f,a,b){
return (function (p1__23843_SHARP_){
return thi.ng.geom.core.dot(p1__23843_SHARP_,n);
});})(masks,affine,edges,s,vec__23854,edges__$1,ea,vec__23855,edges__$2,eb,n,vec__23853,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a(((function (masks,affine,edges,s,vec__23854,edges__$1,ea,vec__23855,edges__$2,eb,n,vec__23853,f,a,b){
return (function (p1__23844_SHARP_){
return thi.ng.geom.core.intersect.subdot(p1__23844_SHARP_,p,n);
});})(masks,affine,edges,s,vec__23854,edges__$1,ea,vec__23855,edges__$2,eb,n,vec__23853,f,a,b))
,verts));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23856,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23856,(1),null);
if((m < (15))){
var G__23861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(masks,m);
var G__23862 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(affine,a__$1);
var G__23863 = edges__$2;
var G__23864 = cljs.core.next(s);
masks = G__23861;
affine = G__23862;
edges = G__23863;
s = G__23864;
continue;
} else {
return null;
}
} else {
if(cljs.core.not(thi.ng.geom.core.intersect.edge_a((function (){var G__23857 = a;
return (masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(G__23857) : masks.call(null,G__23857));
})(),(function (){var G__23858 = b;
return (masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(G__23858) : masks.call(null,G__23858));
})(),(function (){var G__23859 = a;
return (affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(G__23859) : affine.call(null,G__23859));
})(),(function (){var G__23860 = b;
return (affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(G__23860) : affine.call(null,G__23860));
})()))){
var G__23865 = masks;
var G__23866 = affine;
var G__23867 = edges;
var G__23868 = cljs.core.next(s);
masks = G__23865;
affine = G__23866;
edges = G__23867;
s = G__23868;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 * Returns true if tetras do intersect.
 */
thi.ng.geom.core.intersect.check_faces_b = (function thi$ng$geom$core$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__23872 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(2),null);
var vec__23873 = thi.ng.geom.core.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873,(1),null);
var vec__23874 = thi.ng.geom.core.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874,(1),null);
if(cljs.core.not(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$f,f))?thi.ng.geom.core.intersect.face_b1_QMARK_(deltas,thi.ng.geom.core.cross(ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_(verts,p,thi.ng.geom.core.cross(ea,eb))))){
var G__23875 = edges__$2;
var G__23876 = cljs.core.next(s);
edges = G__23875;
s = G__23876;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 * true if they intersect. Orientation of points is irrelevant (unlike
 * in the original algorithm this implementation is based on).
 */
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$core$intersect$intersect_tetrahedra_QMARK_(p__23879,p__23880){
var vec__23883 = p__23879;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(3),null);
var p = vec__23883;
var vec__23884 = p__23880;
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(0),null);
var qb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(1),null);
var qc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(2),null);
var qd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(3),null);
var q = vec__23884;
var masks = thi.ng.geom.core.intersect.check_faces_a(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23883,pa,pb,pc,pd,p,vec__23884,qa,qb,qc,qd,q){
return (function (p1__23877_SHARP_){
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__23877_SHARP_,pa);
});})(vec__23883,pa,pb,pc,pd,p,vec__23884,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f_STAR_,(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$e,(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__12607__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,masks));
if(or__12607__auto__){
return or__12607__auto__;
} else {
return thi.ng.geom.core.intersect.check_faces_b(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (or__12607__auto__,masks,vec__23883,pa,pb,pc,pd,p,vec__23884,qa,qb,qc,qd,q){
return (function (p1__23878_SHARP_){
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__23878_SHARP_,qa);
});})(or__12607__auto__,masks,vec__23883,pa,pb,pc,pd,p,vec__23884,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f,(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$f_STAR_,(4),(3)], null)], null));
}
} else {
return null;
}
});
