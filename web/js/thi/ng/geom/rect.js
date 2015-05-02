// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.rect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
thi.ng.geom.rect.rect = (function thi$ng$geom$rect$rect(){
var G__26099 = arguments.length;
switch (G__26099) {
case 0:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(1.0)));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1 = (function (w){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(w)));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
if(cljs.core.coll_QMARK_(p)){
if(cljs.core.coll_QMARK_(q)){
var p__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var vec__26100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1)], null);
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26100,(0),null);
var q__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26100,(1),null);
return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$2,p__$2)));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q)));
}
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(p,q)));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3 = (function (x,y,w){
if(typeof x === 'number'){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(w)));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(x),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(y,w)));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)));
});

thi.ng.geom.rect.rect.cljs$lang$maxFixedArity = 4;
thi.ng.geom.rect.union = (function thi$ng$geom$rect$union(p__26102,p__26103){
var map__26113 = p__26102;
var map__26113__$1 = ((cljs.core.seq_QMARK_(map__26113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26113):map__26113);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,cljs.core.constant$keyword$p);
var vec__26114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26114,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26114,(1),null);
var map__26115 = p__26103;
var map__26115__$1 = ((cljs.core.seq_QMARK_(map__26115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26115):map__26115);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26115__$1,cljs.core.constant$keyword$p);
var vec__26116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26115__$1,cljs.core.constant$keyword$size);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(1),null);
var vec__26117 = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(p,q);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26117,(1),null);
var p_SINGLEQUOTE_ = vec__26117;
var x2 = (function (){var x__12887__auto__ = ((function (){var G__26118 = (0);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26118) : p.call(null,G__26118));
})() + w);
var y__12888__auto__ = ((function (){var G__26119 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26119) : q.call(null,G__26119));
})() + qw);
return ((x__12887__auto__ > y__12888__auto__) ? x__12887__auto__ : y__12888__auto__);
})();
var y2 = (function (){var x__12887__auto__ = ((function (){var G__26120 = (1);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26120) : p.call(null,G__26120));
})() + h);
var y__12888__auto__ = ((function (){var G__26121 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26121) : q.call(null,G__26121));
})() + qh);
return ((x__12887__auto__ > y__12888__auto__) ? x__12887__auto__ : y__12888__auto__);
})();
var w__$1 = (x2 - x1);
var h__$1 = (y2 - y1);
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(w__$1,h__$1)));
});
thi.ng.geom.rect.left = (function thi$ng$geom$rect$left(r){
return cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r).call(null,(0));
});
thi.ng.geom.rect.right = (function thi$ng$geom$rect$right(r){
return (cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r).call(null,(0)) + cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(r).call(null,(0)));
});
thi.ng.geom.rect.bottom = (function thi$ng$geom$rect$bottom(r){
return cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r).call(null,(1));
});
thi.ng.geom.rect.bottom_left = (function thi$ng$geom$rect$bottom_left(r){
return cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r);
});
thi.ng.geom.rect.top = (function thi$ng$geom$rect$top(r){
return (cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r).call(null,(1)) + cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(r).call(null,(1)));
});
thi.ng.geom.rect.top_right = (function thi$ng$geom$rect$top_right(r){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(r));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.rotate(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__26126){
var map__26127 = p__26126;
var map__26127__$1 = ((cljs.core.seq_QMARK_(map__26127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26127):map__26127);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.constant$keyword$size);
var map__26128 = this;
var map__26128__$1 = ((cljs.core.seq_QMARK_(map__26128))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26128):map__26128);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26128__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(s__$1,-0.5),s__$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__26129,o){
var map__26130 = p__26129;
var map__26130__$1 = ((cljs.core.seq_QMARK_(map__26130))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26130):map__26130);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.constant$keyword$size);
var map__26131 = this;
var map__26131__$1 = ((cljs.core.seq_QMARK_(map__26131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26131):map__26131);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26131__$1,cljs.core.constant$keyword$size);
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd(s__$1,-0.5,o),s__$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.madd(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),0.5,cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0());
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1).call(null,(0))),thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1).call(null,(1))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (_,p__26132){
var map__26133 = p__26132;
var map__26133__$1 = ((cljs.core.seq_QMARK_(map__26133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26133):map__26133);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26133__$1,cljs.core.constant$keyword$num,(2));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,cljs.core.constant$keyword$cols);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,cljs.core.constant$keyword$rows);
var ___$1 = this;
var dx = (1.0 / (function (){var or__12575__auto__ = cols;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return num;
}
})());
var dy = (1.0 / (function (){var or__12575__auto__ = rows;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return num;
}
})());
var rx = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,1.0,dx);
var ry = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,1.0,dy);
var s = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),dx,dy);
var iter__13329__auto__ = ((function (dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__26134(s__26135){
return (new cljs.core.LazySeq(null,((function (dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows){
return (function (){
var s__26135__$1 = s__26135;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__26135__$1);
if(temp__4422__auto__){
var xs__4974__auto__ = temp__4422__auto__;
var y = cljs.core.first(xs__4974__auto__);
var iterys__13325__auto__ = ((function (s__26135__$1,y,xs__4974__auto__,temp__4422__auto__,dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__26134_$_iter__26136(s__26137){
return (new cljs.core.LazySeq(null,((function (s__26135__$1,y,xs__4974__auto__,temp__4422__auto__,dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows){
return (function (){
var s__26137__$1 = s__26137;
while(true){
var temp__4422__auto____$1 = cljs.core.seq(s__26137__$1);
if(temp__4422__auto____$1){
var s__26137__$2 = temp__4422__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26137__$2)){
var c__13327__auto__ = cljs.core.chunk_first(s__26137__$2);
var size__13328__auto__ = cljs.core.count(c__13327__auto__);
var b__26139 = cljs.core.chunk_buffer(size__13328__auto__);
if((function (){var i__26138 = (0);
while(true){
if((i__26138 < size__13328__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13327__auto__,i__26138);
var vec__26151 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(1),null);
var px__$1 = thi.ng.common.math.core.roundto(px,thi.ng.common.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.common.math.core.roundto(py,thi.ng.common.math.core._STAR_eps_STAR_);
cljs.core.chunk_append(b__26139,(new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s)));

var G__26194 = (i__26138 + (1));
i__26138 = G__26194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26139),thi$ng$geom$rect$iter__26134_$_iter__26136(cljs.core.chunk_rest(s__26137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26139),null);
}
} else {
var x = cljs.core.first(s__26137__$2);
var vec__26152 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(1),null);
var px__$1 = thi.ng.common.math.core.roundto(px,thi.ng.common.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.common.math.core.roundto(py,thi.ng.common.math.core._STAR_eps_STAR_);
return cljs.core.cons((new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s)),thi$ng$geom$rect$iter__26134_$_iter__26136(cljs.core.rest(s__26137__$2)));
}
} else {
return null;
}
break;
}
});})(s__26135__$1,y,xs__4974__auto__,temp__4422__auto__,dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows))
,null,null));
});})(s__26135__$1,y,xs__4974__auto__,temp__4422__auto__,dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows))
;
var fs__13326__auto__ = cljs.core.seq(iterys__13325__auto__(rx));
if(fs__13326__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__13326__auto__,thi$ng$geom$rect$iter__26134(cljs.core.rest(s__26135__$1)));
} else {
var G__26195 = cljs.core.rest(s__26135__$1);
s__26135__$1 = G__26195;
continue;
}
} else {
return null;
}
break;
}
});})(dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows))
,null,null));
});})(dx,dy,rx,ry,s,___$1,map__26133,map__26133__$1,num,cols,rows))
;
return iter__13329__auto__(ry);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (___$1){
return (function (p1__26122_SHARP_){
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.closest_point_coeff,q,p1__26122_SHARP_),thi.ng.common.math.core._STAR_eps_STAR_);
});})(___$1))
),cljs.core.min,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,p__26153){
var map__26154 = p__26153;
var map__26154__$1 = ((cljs.core.seq_QMARK_(map__26154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26154):map__26154);
var opts = map__26154__$1;
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26154__$1,cljs.core.constant$keyword$depth,1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26154__$1,cljs.core.constant$keyword$scale,1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26154__$1,cljs.core.constant$keyword$offset);
var ___$1 = this;
if(((scale === 1.0)) && ((offset == null))){
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),depth))),cljs.core.constant$keyword$mesh.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return thi.ng.geom.core.extrude(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1);
var c = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1));
var b = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var G__26155 = (0);
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26155) : c.call(null,G__26155));
})(),(function (){var G__26156 = (1);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__26156) : a.call(null,G__26156));
})());
var d = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var G__26157 = (0);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__26157) : a.call(null,G__26157));
})(),(function (){var G__26158 = (1);
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26158) : c.call(null,G__26158));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__26159,p__26160){
var map__26161 = p__26159;
var map__26161__$1 = ((cljs.core.seq_QMARK_(map__26161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26161):map__26161);
var vec__26162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.constant$keyword$p);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26162,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26162,(1),null);
var vec__26163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(1),null);
var vec__26164 = p__26160;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26164,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26164,(1),null);
var map__26165 = this;
var map__26165__$1 = ((cljs.core.seq_QMARK_(map__26165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26165):map__26165);
var vec__26166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,cljs.core.constant$keyword$p);
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(1),null);
var vec__26167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,cljs.core.constant$keyword$size);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(1),null);
var and__12563__auto__ = thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,w__$1,(x - px__$1));
if(cljs.core.truth_(and__12563__auto__)){
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,h__$1,(y - py__$1));
} else {
return and__12563__auto__;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$union$arity$2 = (function (p__26168,p__26169){
var map__26170 = p__26168;
var map__26170__$1 = ((cljs.core.seq_QMARK_(map__26170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26170):map__26170);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26170__$1,cljs.core.constant$keyword$p);
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26170__$1,cljs.core.constant$keyword$size);
var map__26171 = p__26169;
var map__26171__$1 = ((cljs.core.seq_QMARK_(map__26171))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26171):map__26171);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26171__$1,cljs.core.constant$keyword$p);
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26171__$1,cljs.core.constant$keyword$size);
var map__26172 = this;
var map__26172__$1 = ((cljs.core.seq_QMARK_(map__26172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26172):map__26172);
var pa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26172__$1,cljs.core.constant$keyword$p);
var sa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26172__$1,cljs.core.constant$keyword$size);
var p = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(pa__$1,pb);
return (new thi.ng.geom.types.Rect2(p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa__$1,sa__$1),thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,sb)),p)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$intersection$arity$2 = (function (_,r){
var ___$1 = this;
var pa = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1);
var qa = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1));
var pb = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(r);
var qb = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(r));
var p_SINGLEQUOTE_ = thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2(qa,qb);
var s = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_(((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1){
return (function (p1__26123_SHARP_){
return (p1__26123_SHARP_ >= (0));
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1))
,s)){
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,s));
} else {
return null;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,p__26173){
var map__26174 = p__26173;
var map__26174__$1 = ((cljs.core.seq_QMARK_(map__26174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26174):map__26174);
var vec__26175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26174__$1,cljs.core.constant$keyword$points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26175,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26175,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__12563__auto__ = thi.ng.geom.core.contains_point_QMARK_(___$1,p);
if(cljs.core.truth_(and__12563__auto__)){
return thi.ng.geom.core.contains_point_QMARK_(___$1,q);
} else {
return and__12563__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$coincident], null);
} else {
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_(p,q,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__26176 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(ray),cljs.core.constant$keyword$dir.cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26176,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26176,(1),null);
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Line2)){
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1([cljs.core.str("can't intersect w/ "),cljs.core.str(s)].join(''));

}
}
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(c,thi.ng.geom.core.dist(c,cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),t),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),s)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1),a,b),thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),a,b)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),s);
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd(s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid(___$1)),s_SINGLEQUOTE_));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
var vec__26177 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null))),(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)))], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__26178){
var map__26179 = p__26178;
var map__26179__$1 = ((cljs.core.seq_QMARK_(map__26179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26179):map__26179);
var opts = map__26179__$1;
var tess_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,cljs.core.constant$keyword$fn,thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(((function (___$1,map__26179,map__26179__$1,opts,tess_fn){
return (function (p1__26124_SHARP_){
var G__26180 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(p1__26124_SHARP_);
return (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(G__26180) : tess_fn.call(null,G__26180));
});})(___$1,map__26179,map__26179__$1,opts,tess_fn))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (___$1,map__26179,map__26179__$1,opts,tess_fn){
return (function (p1__26125_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__26125_SHARP_));
});})(___$1,map__26179,map__26179__$1,opts,tess_fn))
)),thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1).call(null,(0));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1).call(null,(1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1);
var c = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var G__26181 = (0);
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26181) : c.call(null,G__26181));
})(),(function (){var G__26182 = (1);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__26182) : a.call(null,G__26182));
})()),c,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var G__26183 = (0);
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__26183) : a.call(null,G__26183));
})(),(function (){var G__26184 = (1);
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26184) : c.call(null,G__26184));
})())], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (p__26185,q){
var map__26186 = p__26185;
var map__26186__$1 = ((cljs.core.seq_QMARK_(map__26186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26186):map__26186);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26186__$1,cljs.core.constant$keyword$p);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26186__$1,cljs.core.constant$keyword$size);
var map__26187 = this;
var map__26187__$1 = ((cljs.core.seq_QMARK_(map__26187))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26187):map__26187);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26187__$1,cljs.core.constant$keyword$p);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26187__$1,cljs.core.constant$keyword$size);
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((((function (){var G__26188 = (0);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26188) : q.call(null,G__26188));
})() - (function (){var G__26189 = (0);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26189) : p__$1.call(null,G__26189));
})()) / (function (){var G__26190 = (0);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__26190) : size__$1.call(null,G__26190));
})()),(((function (){var G__26191 = (1);
return (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(G__26191) : q.call(null,G__26191));
})() - (function (){var G__26192 = (1);
return (p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1(G__26192) : p__$1.call(null,G__26192));
})()) / (function (){var G__26193 = (1);
return (size__$1.cljs$core$IFn$_invoke$arity$1 ? size__$1.cljs$core$IFn$_invoke$arity$1(G__26193) : size__$1.call(null,G__26193));
})()));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.geom.core.madd(q,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face((function (){var or__12575__auto__ = cljs.core.constant$keyword$mesh.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3,thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.common.data.core.neighbors(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1)).call(null,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(v)))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.core.utils.closest_point_on_segments(p,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(___$1));
});
