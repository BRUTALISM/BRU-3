// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core.matrix');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');

/**
* @constructor
*/
thi.ng.geom.core.matrix.Matrix32 = (function (m00,m01,m02,m10,m11,m12,_hasheq,_meta){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this._hasheq = _hasheq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 31850714;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PVectorTransform$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__24400){
var self__ = this;
var vec__24401 = p__24400;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24401,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24401,(1),null);
var v = vec__24401;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (((x * self__.m00) + (y * self__.m01)) + self__.m02));

(b[(1)] = (((x * self__.m10) + (y * self__.m11)) + self__.m12));

return (new thi.ng.geom.core.vector.Vec2(b,null,cljs.core.meta(v)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,matrix){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,matrix);
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__24402 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24402) : Math.sin.call(null,G__24402));
})();
var c = (function (){var G__24403 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24403) : Math.cos.call(null,G__24403));
})();
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(c,(- s),0.0,s,c,0.0,null,self__._meta)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranspose$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranspose$transpose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix32(self__.m00,self__.m10,self__.m01,self__.m11,self__.m02,self__.m12,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix32.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",_),cljs.core.array_seq(["]"], 0)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__24404 = (k | (0));
switch (G__24404) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m10;

break;
case (4):
return self__.m11;

break;
case (5):
return self__.m12;

break;
default:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__24405 = (k | (0));
switch (G__24405) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m10;

break;
case (4):
return self__.m11;

break;
case (5):
return self__.m12;

break;
default:
return nf;

}
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m10,self__.m11,self__.m12], null));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (6);
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PDeterminant$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PDeterminant$determinant$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12575__auto__ = self__._hasheq;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return self__._hasheq = cljs.core.hash_ordered_coll(___$1);
}
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (cljs.core.sequential_QMARK_(o)) && (((6) === cljs.core.count(o))) && (cljs.core.every_QMARK_(((function (___$1){
return (function (p1__24399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24408 = (0);
return (p1__24399_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24399_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24408) : p1__24399_SHARP_.call(null,G__24408));
})(),(function (){var G__24409 = (1);
return (p1__24399_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24399_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24409) : p1__24399_SHARP_.call(null,G__24409));
})());
});})(___$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,___$1,o)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var d = thi.ng.geom.core.determinant(___$1);
if((d === (0))){
return null;
} else {
return (new thi.ng.geom.core.matrix.Matrix32((self__.m11 / d),(- (self__.m01 / d)),(((self__.m01 * self__.m12) - (self__.m11 * self__.m02)) / d),(- (self__.m10 / d)),(self__.m00 / d),(((self__.m10 * self__.m02) - (self__.m00 * self__.m12)) / d),null,self__._meta));
}
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix32((self__.m00 + m__$1.m00),(self__.m01 + m__$1.m01),(self__.m02 + m__$1.m02),(self__.m10 + m__$1.m10),(self__.m11 + m__$1.m11),(self__.m12 + m__$1.m12),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix32((self__.m00 - m__$1.m00),(self__.m01 - m__$1.m01),(self__.m02 - m__$1.m02),(self__.m10 - m__$1.m10),(self__.m11 - m__$1.m11),(self__.m12 - m__$1.m12),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix32(((self__.m00 * m__$1.m00) + (self__.m01 * m__$1.m10)),((self__.m00 * m__$1.m01) + (self__.m01 * m__$1.m11)),(((self__.m00 * m__$1.m02) + (self__.m01 * m__$1.m12)) + self__.m02),((self__.m10 * m__$1.m00) + (self__.m11 * m__$1.m10)),((self__.m10 * m__$1.m01) + (self__.m11 * m__$1.m11)),(((self__.m10 * m__$1.m02) + (self__.m11 * m__$1.m12)) + self__.m12),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m10,self__.m11,self__.m12], null));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m00;
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,((typeof t === 'number')?t:(function (){var G__24410 = (0);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__24410) : t.call(null,G__24410));
})()),0.0,1.0,((typeof t === 'number')?t:(function (){var G__24411 = (1);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__24411) : t.call(null,G__24411));
})()),null,self__._meta)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,tx,ty){
var self__ = this;
var ___$1 = this;
if(typeof tx === 'number'){
if(typeof ty === 'number'){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,tx,0.0,1.0,ty,null,self__._meta)));
} else {
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,(tx * (function (){var G__24412 = (0);
return (ty.cljs$core$IFn$_invoke$arity$1 ? ty.cljs$core$IFn$_invoke$arity$1(G__24412) : ty.call(null,G__24412));
})()),0.0,1.0,(tx * (function (){var G__24413 = (1);
return (ty.cljs$core$IFn$_invoke$arity$1 ? ty.cljs$core$IFn$_invoke$arity$1(G__24413) : ty.call(null,G__24413));
})()),null,self__._meta)));
}
} else {
if(typeof ty === 'number'){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,(ty * (function (){var G__24414 = (0);
return (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1(G__24414) : tx.call(null,G__24414));
})()),0.0,1.0,(ty * (function (){var G__24415 = (1);
return (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1(G__24415) : tx.call(null,G__24415));
})()),null,self__._meta)));
} else {
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,((function (){var G__24416 = (0);
return (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1(G__24416) : tx.call(null,G__24416));
})() * (function (){var G__24417 = (0);
return (ty.cljs$core$IFn$_invoke$arity$1 ? ty.cljs$core$IFn$_invoke$arity$1(G__24417) : ty.call(null,G__24417));
})()),0.0,1.0,((function (){var G__24418 = (1);
return (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1(G__24418) : tx.call(null,G__24418));
})() * (function (){var G__24419 = (1);
return (ty.cljs$core$IFn$_invoke$arity$1 ? ty.cljs$core$IFn$_invoke$arity$1(G__24419) : ty.call(null,G__24419));
})()),null,self__._meta)));
}
}
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(((typeof s === 'number')?s:(function (){var G__24420 = (0);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__24420) : s.call(null,G__24420));
})()),0.0,0.0,0.0,((typeof s === 'number')?s:(function (){var G__24421 = (1);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__24421) : s.call(null,G__24421));
})()),0.0,null,self__._meta)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var self__ = this;
var ___$1 = this;
if(typeof sx === 'number'){
if(typeof sy === 'number'){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(sx,0.0,0.0,0.0,sy,0.0,null,self__._meta)));
} else {
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32((sx * (function (){var G__24422 = (0);
return (sy.cljs$core$IFn$_invoke$arity$1 ? sy.cljs$core$IFn$_invoke$arity$1(G__24422) : sy.call(null,G__24422));
})()),0.0,0.0,0.0,(sx * (function (){var G__24423 = (1);
return (sy.cljs$core$IFn$_invoke$arity$1 ? sy.cljs$core$IFn$_invoke$arity$1(G__24423) : sy.call(null,G__24423));
})()),0.0,null,self__._meta)));
}
} else {
if(typeof sy === 'number'){
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32((sy * (function (){var G__24424 = (0);
return (sx.cljs$core$IFn$_invoke$arity$1 ? sx.cljs$core$IFn$_invoke$arity$1(G__24424) : sx.call(null,G__24424));
})()),0.0,0.0,0.0,(sy * (function (){var G__24425 = (1);
return (sx.cljs$core$IFn$_invoke$arity$1 ? sx.cljs$core$IFn$_invoke$arity$1(G__24425) : sx.call(null,G__24425));
})()),0.0,null,self__._meta)));
} else {
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(((function (){var G__24426 = (0);
return (sx.cljs$core$IFn$_invoke$arity$1 ? sx.cljs$core$IFn$_invoke$arity$1(G__24426) : sx.call(null,G__24426));
})() * (function (){var G__24427 = (0);
return (sy.cljs$core$IFn$_invoke$arity$1 ? sy.cljs$core$IFn$_invoke$arity$1(G__24427) : sy.call(null,G__24427));
})()),0.0,0.0,0.0,((function (){var G__24428 = (1);
return (sx.cljs$core$IFn$_invoke$arity$1 ? sx.cljs$core$IFn$_invoke$arity$1(G__24428) : sx.call(null,G__24428));
})() * (function (){var G__24429 = (1);
return (sy.cljs$core$IFn$_invoke$arity$1 ? sy.cljs$core$IFn$_invoke$arity$1(G__24429) : sy.call(null,G__24429));
})()),0.0,null,self__._meta)));
}
}
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix32(self__.m00,self__.m01,self__.m02,self__.m10,self__.m11,self__.m12,self__._hasheq,m));
});

thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m10,self__.m11,self__.m12,x], null);
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$shear$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,((typeof s === 'number')?s:(function (){var G__24430 = (0);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__24430) : s.call(null,G__24430));
})()),0.0,((typeof s === 'number')?s:(function (){var G__24431 = (1);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__24431) : s.call(null,G__24431));
})()),1.0,0.0,null,self__._meta)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$shear$arity$3 = (function (_,sx,sy){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,sx,0.0,sy,1.0,0.0,null,self__._meta)));
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,m,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,m,eps){
var self__ = this;
var ___$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(m);
if(and__12563__auto__){
var and__12563__auto____$1 = ((6) === cljs.core.count(m));
if(and__12563__auto____$1){
var and__12563__auto____$2 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m00,cljs.core.first(m),eps);
if(cljs.core.truth_(and__12563__auto____$2)){
var and__12563__auto____$3 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m01,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1)),eps);
if(cljs.core.truth_(and__12563__auto____$3)){
var and__12563__auto____$4 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m02,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2)),eps);
if(cljs.core.truth_(and__12563__auto____$4)){
var and__12563__auto____$5 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m10,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(3)),eps);
if(cljs.core.truth_(and__12563__auto____$5)){
var and__12563__auto____$6 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m11,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(4)),eps);
if(cljs.core.truth_(and__12563__auto____$6)){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.m12,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(5)),eps);
} else {
return and__12563__auto____$6;
}
} else {
return and__12563__auto____$5;
}
} else {
return and__12563__auto____$4;
}
} else {
return and__12563__auto____$3;
}
} else {
return and__12563__auto____$2;
}
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

thi.ng.geom.core.matrix.Matrix32.cljs$lang$type = true;

thi.ng.geom.core.matrix.Matrix32.cljs$lang$ctorStr = "thi.ng.geom.core.matrix/Matrix32";

thi.ng.geom.core.matrix.Matrix32.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"thi.ng.geom.core.matrix/Matrix32");
});

thi.ng.geom.core.matrix.__GT_Matrix32 = (function thi$ng$geom$core$matrix$__GT_Matrix32(m00,m01,m02,m10,m11,m12,_hasheq,_meta){
return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12,_hasheq,_meta));
});


/**
* @constructor
*/
thi.ng.geom.core.matrix.Matrix44 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
this._hasheq = _hasheq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 31850714;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PVectorTransform$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__24435){
var self__ = this;
var vec__24436 = p__24435;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(3),null);
var v = vec__24436;
var ___$1 = this;
if(cljs.core.truth_(w)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + (w * self__.m30)),((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + (w * self__.m31)),((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + (w * self__.m32)),((((x * self__.m03) + (y * self__.m13)) + (z * self__.m23)) + (w * self__.m33))], null);
} else {
var b = (new Float32Array((3)));
(b[(0)] = ((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + self__.m30));

(b[(1)] = ((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + self__.m31));

(b[(2)] = ((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + self__.m32));

return (new thi.ng.geom.core.vector.Vec3(b,null,cljs.core.meta(v)));
}
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,matrix){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(___$1,matrix);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranspose$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranspose$transpose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m10,self__.m20,self__.m30,self__.m01,self__.m11,self__.m21,self__.m31,self__.m02,self__.m12,self__.m22,self__.m32,self__.m03,self__.m13,self__.m23,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",_),cljs.core.array_seq(["]"], 0)));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__24437 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24437) : Math.sin.call(null,G__24437));
})();
var c = (function (){var G__24438 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24438) : Math.cos.call(null,G__24438));
})();
return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,((self__.m10 * c) + (self__.m20 * s)),((self__.m11 * c) + (self__.m21 * s)),((self__.m12 * c) + (self__.m22 * s)),((self__.m13 * c) + (self__.m23 * s)),((self__.m20 * c) - (self__.m10 * s)),((self__.m21 * c) - (self__.m11 * s)),((self__.m22 * c) - (self__.m12 * s)),((self__.m23 * c) - (self__.m13 * s)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__24439 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24439) : Math.sin.call(null,G__24439));
})();
var c = (function (){var G__24440 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24440) : Math.cos.call(null,G__24440));
})();
return (new thi.ng.geom.core.matrix.Matrix44(((self__.m00 * c) - (self__.m20 * s)),((self__.m01 * c) - (self__.m21 * s)),((self__.m02 * c) - (self__.m22 * s)),((self__.m03 * c) - (self__.m23 * s)),self__.m10,self__.m11,self__.m12,self__.m13,((self__.m00 * s) + (self__.m20 * c)),((self__.m01 * s) + (self__.m21 * c)),((self__.m02 * s) + (self__.m22 * c)),((self__.m03 * s) + (self__.m23 * c)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__24441 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24441) : Math.sin.call(null,G__24441));
})();
var c = (function (){var G__24442 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24442) : Math.cos.call(null,G__24442));
})();
return (new thi.ng.geom.core.matrix.Matrix44(((self__.m00 * c) + (self__.m10 * s)),((self__.m01 * c) + (self__.m11 * s)),((self__.m02 * c) + (self__.m12 * s)),((self__.m03 * c) + (self__.m13 * s)),((self__.m10 * c) - (self__.m00 * s)),((self__.m11 * c) - (self__.m01 * s)),((self__.m12 * c) - (self__.m02 * s)),((self__.m13 * c) - (self__.m03 * s)),self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,p__24443,theta){
var self__ = this;
var vec__24444 = p__24443;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(2),null);
var ___$1 = this;
var s = (function (){var G__24445 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24445) : Math.sin.call(null,G__24445));
})();
var c = (function (){var G__24446 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24446) : Math.cos.call(null,G__24446));
})();
var sx = (s * x);
var sy = (s * y);
var sz = (s * z);
var t = (1.0 - c);
var tx = (t * x);
var ty = (t * y);
var b00 = ((tx * x) + c);
var b01 = ((tx * y) + sz);
var b02 = ((tx * z) - sy);
var b10 = ((ty * x) - sz);
var b11 = ((ty * y) + c);
var b12 = ((ty * z) + sx);
var b20 = ((tx * z) + sy);
var b21 = ((ty * z) - sx);
var b22 = (((t * z) * z) + c);
return (new thi.ng.geom.core.matrix.Matrix44((((self__.m00 * b00) + (self__.m10 * b01)) + (self__.m20 * b02)),(((self__.m01 * b00) + (self__.m11 * b01)) + (self__.m21 * b02)),(((self__.m02 * b00) + (self__.m12 * b01)) + (self__.m22 * b02)),(((self__.m03 * b00) + (self__.m13 * b01)) + (self__.m23 * b02)),(((self__.m00 * b10) + (self__.m10 * b11)) + (self__.m20 * b12)),(((self__.m01 * b10) + (self__.m11 * b11)) + (self__.m21 * b12)),(((self__.m02 * b10) + (self__.m12 * b11)) + (self__.m22 * b12)),(((self__.m03 * b10) + (self__.m13 * b11)) + (self__.m23 * b12)),(((self__.m00 * b20) + (self__.m10 * b21)) + (self__.m20 * b22)),(((self__.m01 * b20) + (self__.m11 * b21)) + (self__.m21 * b22)),(((self__.m02 * b20) + (self__.m12 * b21)) + (self__.m22 * b22)),(((self__.m03 * b20) + (self__.m13 * b21)) + (self__.m23 * b22)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__24447 = (k | (0));
switch (G__24447) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m03;

break;
case (4):
return self__.m10;

break;
case (5):
return self__.m11;

break;
case (6):
return self__.m12;

break;
case (7):
return self__.m13;

break;
case (8):
return self__.m20;

break;
case (9):
return self__.m21;

break;
case (10):
return self__.m22;

break;
case (11):
return self__.m23;

break;
case (12):
return self__.m30;

break;
case (13):
return self__.m31;

break;
case (14):
return self__.m32;

break;
case (15):
return self__.m33;

break;
default:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__24448 = (k | (0));
switch (G__24448) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m03;

break;
case (4):
return self__.m10;

break;
case (5):
return self__.m11;

break;
case (6):
return self__.m12;

break;
case (7):
return self__.m13;

break;
case (8):
return self__.m20;

break;
case (9):
return self__.m21;

break;
case (10):
return self__.m22;

break;
case (11):
return self__.m23;

break;
case (12):
return self__.m30;

break;
case (13):
return self__.m31;

break;
case (14):
return self__.m32;

break;
case (15):
return self__.m33;

break;
default:
return nf;

}
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33], null));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (16);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PDeterminant$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PDeterminant$determinant$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
var b01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));
var b02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));
var b03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));
var b04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));
var b05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));
var b06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));
var b07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));
var b08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));
var b09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));
var b10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));
var b11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));
return ((((b00 * b11) - (b01 * b10)) - (b04 * b07)) + (((b02 * b09) + (b03 * b08)) + (b05 * b06)));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12575__auto__ = self__._hasheq;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return self__._hasheq = cljs.core.hash_ordered_coll(___$1);
}
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (cljs.core.sequential_QMARK_(o)) && (((16) === cljs.core.count(o))) && (cljs.core.every_QMARK_(((function (___$1){
return (function (p1__24434_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24451 = (0);
return (p1__24434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24434_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24451) : p1__24434_SHARP_.call(null,G__24451));
})(),(function (){var G__24452 = (1);
return (p1__24434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24434_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24452) : p1__24434_SHARP_.call(null,G__24452));
})());
});})(___$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,___$1,o)));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
var n01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));
var n02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));
var n03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));
var n04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));
var n05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));
var n06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));
var n07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));
var n08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));
var n09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));
var n10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));
var n11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));
var d = ((((n00 * n11) - (n01 * n10)) - (n04 * n07)) + (((n02 * n09) + (n03 * n08)) + (n05 * n06)));
if((d === (0))){
return null;
} else {
var invd = (1.0 / d);
return (new thi.ng.geom.core.matrix.Matrix44(((((self__.m11 * n11) - (self__.m12 * n10)) + (self__.m13 * n09)) * invd),((((self__.m02 * n10) - (self__.m03 * n09)) + ((- self__.m01) * n11)) * invd),((((self__.m31 * n05) - (self__.m32 * n04)) + (self__.m33 * n03)) * invd),((((self__.m22 * n04) - (self__.m23 * n03)) + ((- self__.m21) * n05)) * invd),((((self__.m12 * n08) - (self__.m13 * n07)) + ((- self__.m10) * n11)) * invd),((((self__.m00 * n11) - (self__.m02 * n08)) + (self__.m03 * n07)) * invd),((((self__.m32 * n02) - (self__.m33 * n01)) + ((- self__.m30) * n05)) * invd),((((self__.m20 * n05) - (self__.m22 * n02)) + (self__.m23 * n01)) * invd),((((self__.m10 * n10) - (self__.m11 * n08)) + (self__.m13 * n06)) * invd),((((self__.m01 * n08) - (self__.m03 * n06)) + ((- self__.m00) * n10)) * invd),((((self__.m30 * n04) - (self__.m31 * n02)) + (self__.m33 * n00)) * invd),((((self__.m21 * n02) - (self__.m23 * n00)) + ((- self__.m20) * n04)) * invd),((((self__.m11 * n07) - (self__.m12 * n06)) + ((- self__.m10) * n09)) * invd),((((self__.m00 * n09) - (self__.m01 * n07)) + (self__.m02 * n06)) * invd),((((self__.m31 * n01) - (self__.m32 * n00)) + ((- self__.m30) * n03)) * invd),((((self__.m20 * n03) - (self__.m21 * n01)) + (self__.m22 * n00)) * invd),null,self__._meta));
}
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix44((self__.m00 + m__$1.m00),(self__.m01 + m__$1.m01),(self__.m02 + m__$1.m02),(self__.m03 + m__$1.m03),(self__.m10 + m__$1.m10),(self__.m11 + m__$1.m11),(self__.m12 + m__$1.m12),(self__.m13 + m__$1.m13),(self__.m20 + m__$1.m20),(self__.m21 + m__$1.m21),(self__.m22 + m__$1.m22),(self__.m23 + m__$1.m23),(self__.m30 + m__$1.m30),(self__.m31 + m__$1.m31),(self__.m32 + m__$1.m32),(self__.m33 + m__$1.m33),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix44((self__.m00 - m__$1.m00),(self__.m01 - m__$1.m01),(self__.m02 - m__$1.m02),(self__.m03 - m__$1.m03),(self__.m10 - m__$1.m10),(self__.m11 - m__$1.m11),(self__.m12 - m__$1.m12),(self__.m13 - m__$1.m13),(self__.m20 - m__$1.m20),(self__.m21 - m__$1.m21),(self__.m22 - m__$1.m22),(self__.m23 - m__$1.m23),(self__.m30 - m__$1.m30),(self__.m31 - m__$1.m31),(self__.m32 - m__$1.m32),(self__.m33 - m__$1.m33),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.core.matrix.Matrix44(((((self__.m00 * m__$1.m00) + (self__.m10 * m__$1.m01)) + (self__.m20 * m__$1.m02)) + (self__.m30 * m__$1.m03)),((((self__.m01 * m__$1.m00) + (self__.m11 * m__$1.m01)) + (self__.m21 * m__$1.m02)) + (self__.m31 * m__$1.m03)),((((self__.m02 * m__$1.m00) + (self__.m12 * m__$1.m01)) + (self__.m22 * m__$1.m02)) + (self__.m32 * m__$1.m03)),((((self__.m03 * m__$1.m00) + (self__.m13 * m__$1.m01)) + (self__.m23 * m__$1.m02)) + (self__.m33 * m__$1.m03)),((((self__.m00 * m__$1.m10) + (self__.m10 * m__$1.m11)) + (self__.m20 * m__$1.m12)) + (self__.m30 * m__$1.m13)),((((self__.m01 * m__$1.m10) + (self__.m11 * m__$1.m11)) + (self__.m21 * m__$1.m12)) + (self__.m31 * m__$1.m13)),((((self__.m02 * m__$1.m10) + (self__.m12 * m__$1.m11)) + (self__.m22 * m__$1.m12)) + (self__.m32 * m__$1.m13)),((((self__.m03 * m__$1.m10) + (self__.m13 * m__$1.m11)) + (self__.m23 * m__$1.m12)) + (self__.m33 * m__$1.m13)),((((self__.m00 * m__$1.m20) + (self__.m10 * m__$1.m21)) + (self__.m20 * m__$1.m22)) + (self__.m30 * m__$1.m23)),((((self__.m01 * m__$1.m20) + (self__.m11 * m__$1.m21)) + (self__.m21 * m__$1.m22)) + (self__.m31 * m__$1.m23)),((((self__.m02 * m__$1.m20) + (self__.m12 * m__$1.m21)) + (self__.m22 * m__$1.m22)) + (self__.m32 * m__$1.m23)),((((self__.m03 * m__$1.m20) + (self__.m13 * m__$1.m21)) + (self__.m23 * m__$1.m22)) + (self__.m33 * m__$1.m23)),((((self__.m00 * m__$1.m30) + (self__.m10 * m__$1.m31)) + (self__.m20 * m__$1.m32)) + (self__.m30 * m__$1.m33)),((((self__.m01 * m__$1.m30) + (self__.m11 * m__$1.m31)) + (self__.m21 * m__$1.m32)) + (self__.m31 * m__$1.m33)),((((self__.m02 * m__$1.m30) + (self__.m12 * m__$1.m31)) + (self__.m22 * m__$1.m32)) + (self__.m32 * m__$1.m33)),((((self__.m03 * m__$1.m30) + (self__.m13 * m__$1.m31)) + (self__.m23 * m__$1.m32)) + (self__.m33 * m__$1.m33)),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.next(___$1);
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m00;
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var vec__24453 = ((typeof t === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,t,t], null):t);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,(2),null);
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$4(___$1,x,y,z);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,((((self__.m00 * x) + (self__.m10 * y)) + (self__.m20 * z)) + self__.m30),((((self__.m01 * x) + (self__.m11 * y)) + (self__.m21 * z)) + self__.m31),((((self__.m02 * x) + (self__.m12 * y)) + (self__.m22 * z)) + self__.m32),((((self__.m03 * x) + (self__.m13 * y)) + (self__.m23 * z)) + self__.m33),null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var vec__24454 = ((typeof s === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,s,s], null):s);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454,(2),null);
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$4(___$1,x,y,z);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix44((self__.m00 * x),(self__.m01 * x),(self__.m02 * x),(self__.m03 * x),(self__.m10 * y),(self__.m11 * y),(self__.m12 * y),(self__.m13 * y),(self__.m20 * z),(self__.m21 * z),(self__.m22 * z),(self__.m23 * z),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,self__._hasheq,m));
});

thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,x], null);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,m,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,m,eps){
var self__ = this;
var ___$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(m);
if(and__12563__auto__){
var and__12563__auto____$1 = ((16) === cljs.core.count(m));
if(and__12563__auto____$1){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,___$1),m,eps);
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

thi.ng.geom.core.matrix.Matrix44.cljs$lang$type = true;

thi.ng.geom.core.matrix.Matrix44.cljs$lang$ctorStr = "thi.ng.geom.core.matrix/Matrix44";

thi.ng.geom.core.matrix.Matrix44.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"thi.ng.geom.core.matrix/Matrix44");
});

thi.ng.geom.core.matrix.__GT_Matrix44 = (function thi$ng$geom$core$matrix$__GT_Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta){
return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta));
});

thi.ng.geom.core.matrix.M32 = (new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,0.0,0.0,1.0,0.0,null,null));
thi.ng.geom.core.matrix.M44 = (new thi.ng.geom.core.matrix.Matrix44(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,null,null));
thi.ng.geom.core.matrix.matrix32 = (function thi$ng$geom$core$matrix$matrix32(){
var G__24458 = arguments.length;
switch (G__24458) {
case 0:
return thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 6:
return thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.matrix.M32;
});

thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$1 = (function (p__24459){
var vec__24460 = p__24459;
var m00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(0),null);
var m01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(1),null);
var m02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(2),null);
var m10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(3),null);
var m11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(4),null);
var m12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460,(5),null);
return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12,null,null));
});

thi.ng.geom.core.matrix.matrix32.cljs$core$IFn$_invoke$arity$6 = (function (m00,m01,m02,m10,m11,m12){
return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12,null,null));
});

thi.ng.geom.core.matrix.matrix32.cljs$lang$maxFixedArity = 6;
thi.ng.geom.core.matrix.matrix44 = (function thi$ng$geom$core$matrix$matrix44(){
var G__24463 = arguments.length;
switch (G__24463) {
case 0:
return thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 16:
return thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.matrix.M44;
});

thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$1 = (function (p__24464){
var vec__24465 = p__24464;
var m00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(0),null);
var m01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(1),null);
var m02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(2),null);
var m03 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(3),null);
var m10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(4),null);
var m11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(5),null);
var m12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(6),null);
var m13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(7),null);
var m20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(8),null);
var m21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(9),null);
var m22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(10),null);
var m23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(11),null);
var m30 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(12),null);
var m31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(13),null);
var m32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(14),null);
var m33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(15),null);
return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,null,null));
});

thi.ng.geom.core.matrix.matrix44.cljs$core$IFn$_invoke$arity$16 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){
return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,null,null));
});

thi.ng.geom.core.matrix.matrix44.cljs$lang$maxFixedArity = 16;
thi.ng.geom.core.matrix.matrix44__GT_matrix33 = (function thi$ng$geom$core$matrix$matrix44__GT_matrix33(p__24467){
var vec__24469 = p__24467;
var m00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(0),null);
var m01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(1),null);
var m02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(3),null);
var m10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(4),null);
var m11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(5),null);
var m12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(6),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(7),null);
var m20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(8),null);
var m21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(9),null);
var m22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469,(10),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [m00,m01,m02,m10,m11,m12,m20,m21,m22], null);
});
thi.ng.geom.core.matrix.matrix44__GT_matrix33_rot = (function thi$ng$geom$core$matrix$matrix44__GT_matrix33_rot(p__24470){
var vec__24472 = p__24470;
var m00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(0),null);
var m01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(1),null);
var m02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(3),null);
var m10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(4),null);
var m11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(5),null);
var m12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(6),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(7),null);
var m20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(8),null);
var m21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(9),null);
var m22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(10),null);
var b01 = ((m22 * m11) - (m12 * m21));
var b11 = ((m12 * m20) - (m22 * m10));
var b21 = ((m21 * m10) - (m11 * m20));
var invd = ((1) / (((m00 * b01) + (m01 * b11)) + (m02 * b21)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(b01 * invd),(b11 * invd),(b21 * invd),(((m02 * m21) - (m22 * m01)) * invd),(((m22 * m00) - (m02 * m20)) * invd),(((m01 * m20) - (m21 * m00)) * invd),(((m12 * m01) - (m02 * m11)) * invd),(((m02 * m10) - (m12 * m00)) * invd),(((m11 * m00) - (m01 * m10)) * invd)], null);
});
/**
 * Sets up a viewing frustum, shaped like a truncated pyramid with the
 * camera where the tip of the pyramid would be.
 * This emulates the OpenGL function glFrustum().
 */
thi.ng.geom.core.matrix.frustum = (function thi$ng$geom$core$matrix$frustum(l,t,r,b,n,f){
var dx = ((1) / (r - l));
var dy = ((1) / (t - b));
var dz = ((1) / (n - f));
var n2 = (2.0 * n);
return (new thi.ng.geom.core.matrix.Matrix44((n2 * dx),0.0,0.0,0.0,0.0,(n2 * dy),0.0,0.0,((l + r) * dx),((t + b) * dy),((n + f) * dz),-1.0,0.0,0.0,((n2 * f) * dz),0.0,null,null));
});
thi.ng.geom.core.matrix.frustum_bounds = (function thi$ng$geom$core$matrix$frustum_bounds(fovy,aspect,near){
var top = (near * (function (){var G__24474 = (0.5 * thi.ng.common.math.core.radians(fovy));
return (Math.tan.cljs$core$IFn$_invoke$arity$1 ? Math.tan.cljs$core$IFn$_invoke$arity$1(G__24474) : Math.tan.call(null,G__24474));
})());
var right = (top * aspect);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$left,(- right),cljs.core.constant$keyword$right,right,cljs.core.constant$keyword$top,top,cljs.core.constant$keyword$bottom,(- top)], null);
});
/**
 * Returns an orthographic projection matrix, in which objects are the same size no
 * matter how far away or nearby they are.
 * This emulates the OpenGL function glOrtho().
 */
thi.ng.geom.core.matrix.ortho = (function thi$ng$geom$core$matrix$ortho(l,t,r,b,n,f){
var dx = ((1) / (l - r));
var dy = ((1) / (b - t));
var dz = ((1) / (n - f));
return (new thi.ng.geom.core.matrix.Matrix44((-2.0 * dx),0.0,0.0,0.0,0.0,(-2.0 * dy),0.0,0.0,0.0,0.0,(2.0 * dz),0.0,((l + r) * dx),((t + b) * dy),((n + f) * dz),1.0,null,null));
});
/**
 * Returns a perspective transform matrix, which makes far away objects appear
 * smaller than nearby objects. The `aspect` argument should be the width
 * divided by the height of your viewport and `fov` is the vertical angle
 * of the field of view in degrees.
 */
thi.ng.geom.core.matrix.perspective = (function thi$ng$geom$core$matrix$perspective(fovy,aspect,near,far){
var f = ((1) / (function (){var G__24476 = (0.5 * thi.ng.common.math.core.radians(fovy));
return (Math.tan.cljs$core$IFn$_invoke$arity$1 ? Math.tan.cljs$core$IFn$_invoke$arity$1(G__24476) : Math.tan.call(null,G__24476));
})());
var nf = ((1) / (near - far));
return (new thi.ng.geom.core.matrix.Matrix44((f / aspect),0.0,0.0,0.0,0.0,f,0.0,0.0,0.0,0.0,((near + far) * nf),-1.0,0.0,0.0,(((2.0 * near) * far) * nf),0.0,null,null));
});
thi.ng.geom.core.matrix.perspective_frustum = (function thi$ng$geom$core$matrix$perspective_frustum(fov,aspect,near,far){
var map__24478 = thi.ng.geom.core.matrix.frustum_bounds(fov,aspect,near);
var map__24478__$1 = ((cljs.core.seq_QMARK_(map__24478))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24478):map__24478);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.constant$keyword$left);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.constant$keyword$right);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.constant$keyword$top);
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.constant$keyword$bottom);
return thi.ng.geom.core.matrix.frustum(left,top,right,bottom,near,far);
});
thi.ng.geom.core.matrix.look_at_vectors = (function thi$ng$geom$core$matrix$look_at_vectors(ex,ey,ez,tx,ty,tz){
var eye = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(ex,ey,ez);
var target = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(tx,ty,tz);
var up = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(eye,target),thi.ng.geom.core.vector.V3X);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eye,target,up], null);
});
/**
 * Returns a matrix that puts the camera at the eye position looking
 * toward the target point with the given up direction.
 */
thi.ng.geom.core.matrix.look_at = (function thi$ng$geom$core$matrix$look_at(eye,target,up){
var dir = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(eye,target);
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.V3,dir))){
return thi.ng.geom.core.matrix.M44;
} else {
var vec__24482 = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(dir);
var zx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(1),null);
var zz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24482,(2),null);
var z = vec__24482;
var vec__24483 = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(up,z);
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24483,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24483,(1),null);
var xz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24483,(2),null);
var x = vec__24483;
var vec__24484 = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(z,x);
var yx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(0),null);
var yy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(1),null);
var yz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24484,(2),null);
var y = vec__24484;
return (new thi.ng.geom.core.matrix.Matrix44(xx,yx,zx,0.0,xy,yy,zy,0.0,xz,yz,zz,0.0,(- thi.ng.geom.core.dot(x,eye)),(- thi.ng.geom.core.dot(y,eye)),(- thi.ng.geom.core.dot(z,eye)),1.0,null,null));
}
});
thi.ng.geom.core.matrix.viewport_matrix = (function thi$ng$geom$core$matrix$viewport_matrix(){
var G__24486 = arguments.length;
switch (G__24486) {
case 2:
return thi.ng.geom.core.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return thi.ng.geom.core.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$3(width,height,false);
});

thi.ng.geom.core.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$3 = (function (width,height,invert_y_QMARK_){
var w2 = (width / 2.0);
var h2 = (height / 2.0);
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.matrix.M32,w2,h2),thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.matrix.M32,w2,(cljs.core.truth_(invert_y_QMARK_)?h2:(- h2))));
});

thi.ng.geom.core.matrix.viewport_matrix.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.matrix.project_point = (function thi$ng$geom$core$matrix$project_point(p,mvp,vtx){
var vec__24489 = thi.ng.geom.core.transform_vector(mvp,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),(1)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489,(3),null);
return thi.ng.geom.core.transform_vector(vtx,thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),w));
});
thi.ng.geom.core.matrix.project_point_z = (function thi$ng$geom$core$matrix$project_point_z(p,mvp,vtx){
var vec__24491 = thi.ng.geom.core.transform_vector(mvp,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),(1)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(3),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.transform_vector(vtx,thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),w)),(z / w));
});
/**
 * Takes a vec3 in screenspace, model-view matrix, projection matrix
 * and screen rect. Returns vector in model space or nil if matrix is
 * not invertible.
 */
thi.ng.geom.core.matrix.unproject_point = (function thi$ng$geom$core$matrix$unproject_point(){
var G__24493 = arguments.length;
switch (G__24493) {
case 4:
return thi.ng.geom.core.matrix.unproject_point.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.core.matrix.unproject_point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.matrix.unproject_point.cljs$core$IFn$_invoke$arity$4 = (function (p,model_view,proj,screen_rect){
var temp__4420__auto__ = thi.ng.geom.core.invert(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(proj,model_view));
if(cljs.core.truth_(temp__4420__auto__)){
var inv_mat = temp__4420__auto__;
return thi.ng.geom.core.matrix.unproject_point.cljs$core$IFn$_invoke$arity$3(p,inv_mat,screen_rect);
} else {
return null;
}
});

thi.ng.geom.core.matrix.unproject_point.cljs$core$IFn$_invoke$arity$3 = (function (p__24494,inv_mat,p__24495){
var vec__24496 = p__24494;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(2),null);
var map__24497 = p__24495;
var map__24497__$1 = ((cljs.core.seq_QMARK_(map__24497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24497):map__24497);
var vec__24498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24497__$1,cljs.core.constant$keyword$p);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24498,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24498,(1),null);
var vec__24499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24497__$1,cljs.core.constant$keyword$size);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24499,(1),null);
return thi.ng.geom.core.transform_vector(inv_mat,thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,vx,(vx + w),(-1),(1)),thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(y,vy,(vy + h),(-1),(1)),((z * (2)) - (1))));
});

thi.ng.geom.core.matrix.unproject_point.cljs$lang$maxFixedArity = 4;
