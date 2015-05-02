// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');









/**
* @constructor
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__24796 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24796) : Math.sin.call(null,G__24796));
})();
var c = (function (){var G__24797 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24797) : Math.cos.call(null,G__24797));
})();
var b = (new Float32Array((2)));
var G__24798 = self__.buf;
var G__24799 = (G__24798[(0)]);
var G__24800 = (G__24798[(1)]);
(b[(0)] = ((G__24799 * c) - (G__24800 * s)));

(b[(1)] = ((G__24799 * s) + (G__24800 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__24801 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__24801) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__24801));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__24802 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24802) : f.call(null,G__24802));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__24803 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__24803) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__24803));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__24804 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24804) : f.call(null,G__24804));
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__24805 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24806 = v.buf;
return (((G__24805[(0)]) * (G__24806[(0)])) + ((G__24805[(1)]) * (G__24806[(1)])));
} else {
return (((G__24805[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__24805[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__24807 = self__.buf;
var G__24808 = (G__24807[(0)]);
var G__24809 = (G__24807[(1)]);
var l = (function (){var G__24810 = ((G__24808 * G__24808) + (G__24809 * G__24809));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__24810) : Math.sqrt.call(null,G__24810));
})();
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__24808 / l));

(b[(1)] = (G__24809 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__24811 = self__.buf;
var G__24812 = (G__24811[(0)]);
var G__24813 = (G__24811[(1)]);
var l = (function (){var G__24814 = ((G__24812 * G__24812) + (G__24813 * G__24813));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__24814) : Math.sqrt.call(null,G__24814));
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__24812 * l__$1));

(b[(1)] = (G__24813 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__24815 = self__.buf;
var G__24817 = (G__24815[(0)]);
var G__24818 = (G__24815[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24816 = v.buf;
var G__24819 = (G__24816[(0)]);
var G__24820 = (G__24816[(1)]);
var d = (((G__24817 * G__24819) + (G__24818 * G__24820)) + (2));
(b[(0)] = ((G__24819 * d) - G__24817));

(b[(1)] = ((G__24820 * d) - G__24818));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__24819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__24820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__24817 * G__24819) + (G__24818 * G__24820)) + (2));
(b[(0)] = ((G__24819 * d) - G__24817));

(b[(1)] = ((G__24820 * d) - G__24818));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__24821 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24822 = v.buf;
return (((G__24821[(0)]) * (G__24822[(1)])) - ((G__24821[(1)]) * (G__24822[(0)])));
} else {
return (((G__24821[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__24821[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.common.error.key_error_BANG_(n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function (){var G__24823 = cljs.core.constant$keyword$yx;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__24823) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__24823));
})().call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12575__auto__ = self__._hash;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_(o)) && (((2) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__24829 = (self__.buf[(1)]);
var G__24830 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__24829,G__24830) : Math.atan2.call(null,G__24829,G__24830));
})();
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading(___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - thi.ng.geom.core.heading(___$1));
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__24831 = thi.ng.geom.core.dist_squared(___$1,v);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__24831) : Math.sqrt.call(null,G__24831));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__24832 = self__.buf;
var G__24834 = (G__24832[(0)]);
var G__24835 = (G__24832[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24833 = v.buf;
var G__24836 = (G__24833[(0)]);
var G__24837 = (G__24833[(1)]);
var dx = (G__24834 - G__24836);
var dy = (G__24835 - G__24837);
return ((dx * dx) + (dy * dy));
} else {
var G__24836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__24837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__24834 - G__24836);
var dy = (G__24835 - G__24837);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__24838 = (self__.buf[(0)]);
var G__24839 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24838,G__24839) : f.call(null,G__24838,G__24839));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__24840 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24840) : cljs.core.deref.call(null,G__24840));
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__24841 = start;
var G__24842 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24841,G__24842) : f.call(null,G__24841,G__24842));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__24843 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24843) : cljs.core.deref.call(null,G__24843));
} else {
var acc__$1 = (function (){var G__24844 = acc;
var G__24845 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24844,G__24845) : f.call(null,G__24844,G__24845));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__24846 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24846) : cljs.core.deref.call(null,G__24846));
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__24856_25094 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__24857_25095 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__24858_25096 = ((!(G__24856_25094))?typeof a === 'number':null);
var G__24859_25097 = ((!(G__24857_25095))?typeof b === 'number':null);
var G__24847_25098 = self__.buf;
var G__24848_25099 = ((G__24856_25094)?a.buf:null);
var G__24849_25100 = ((G__24857_25095)?b.buf:null);
var G__24850_25101 = (G__24847_25098[(0)]);
var G__24851_25102 = (G__24847_25098[(1)]);
var G__24852_25103 = ((G__24856_25094)?(G__24848_25099[(0)]):(cljs.core.truth_(G__24858_25096)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__24853_25104 = ((G__24856_25094)?(G__24848_25099[(1)]):(cljs.core.truth_(G__24858_25096)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__24854_25105 = ((G__24857_25095)?(G__24849_25100[(0)]):(cljs.core.truth_(G__24859_25097)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__24855_25106 = ((G__24857_25095)?(G__24849_25100[(1)]):(cljs.core.truth_(G__24859_25097)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__7524__auto__[(0)] = ((G__24850_25101 * G__24852_25103) - G__24854_25105));

(dest__7524__auto__[(1)] = ((G__24851_25102 * G__24853_25104) - G__24855_25106));

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24860_25107 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24861_25108 = v.buf;
(dest__7518__auto__[(0)] = ((G__24860_25107[(0)]) * (G__24861_25108[(0)])));

(dest__7518__auto__[(1)] = ((G__24860_25107[(1)]) * (G__24861_25108[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24860_25107[(0)]) * v));

(dest__7518__auto__[(1)] = ((G__24860_25107[(1)]) * v));
} else {
(dest__7518__auto__[(0)] = ((G__24860_25107[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24860_25107[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24862 = self__.buf;
var G__24865 = (new Float32Array((2)));
var G__24866 = (G__24862[(0)]);
var G__24867 = (G__24862[(1)]);
var G__24872 = typeof v1 === 'number';
var G__24873 = typeof v2 === 'number';
if(((G__24872)?G__24873:false)){
(G__24865[(0)] = (G__24866 * v1));

(G__24865[(1)] = (G__24867 * v2));
} else {
var G__24874_25109 = ((!(G__24872))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24875_25110 = ((!(G__24873))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24863_25111 = (cljs.core.truth_(G__24874_25109)?v1.buf:null);
var G__24864_25112 = (cljs.core.truth_(G__24875_25110)?v2.buf:null);
var G__24868_25113 = (cljs.core.truth_(G__24874_25109)?(G__24863_25111[(0)]):((G__24872)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__24869_25114 = (cljs.core.truth_(G__24874_25109)?(G__24863_25111[(1)]):((G__24872)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__24870_25115 = (cljs.core.truth_(G__24875_25110)?(G__24864_25112[(0)]):((G__24873)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__24871_25116 = (cljs.core.truth_(G__24875_25110)?(G__24864_25112[(1)]):((G__24873)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__24865[(0)] = ((G__24866 * G__24868_25113) * G__24870_25115));

(G__24865[(1)] = ((G__24867 * G__24869_25114) * G__24871_25116));
}

return (new thi.ng.geom.core.vector.Vec2(G__24865,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7506__auto__ = (new Float32Array((2)));
var G__24876_25117 = self__.buf;
(dest__7506__auto__[(0)] = (- (G__24876_25117[(0)])));

(dest__7506__auto__[(1)] = (- (G__24876_25117[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__7506__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24877_25118 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24878_25119 = v.buf;
(dest__7518__auto__[(0)] = ((G__24877_25118[(0)]) - (G__24878_25119[(0)])));

(dest__7518__auto__[(1)] = ((G__24877_25118[(1)]) - (G__24878_25119[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24877_25118[(0)]) - v));

(dest__7518__auto__[(1)] = ((G__24877_25118[(1)]) - v));
} else {
(dest__7518__auto__[(0)] = ((G__24877_25118[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24877_25118[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24879 = self__.buf;
var G__24882 = (new Float32Array((2)));
var G__24883 = (G__24879[(0)]);
var G__24884 = (G__24879[(1)]);
var G__24889 = typeof v1 === 'number';
var G__24890 = typeof v2 === 'number';
if(((G__24889)?G__24890:false)){
(G__24882[(0)] = (G__24883 - v1));

(G__24882[(1)] = (G__24884 - v2));
} else {
var G__24891_25120 = ((!(G__24889))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24892_25121 = ((!(G__24890))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24880_25122 = (cljs.core.truth_(G__24891_25120)?v1.buf:null);
var G__24881_25123 = (cljs.core.truth_(G__24892_25121)?v2.buf:null);
var G__24885_25124 = (cljs.core.truth_(G__24891_25120)?(G__24880_25122[(0)]):((G__24889)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__24886_25125 = (cljs.core.truth_(G__24891_25120)?(G__24880_25122[(1)]):((G__24889)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__24887_25126 = (cljs.core.truth_(G__24892_25121)?(G__24881_25123[(0)]):((G__24890)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__24888_25127 = (cljs.core.truth_(G__24892_25121)?(G__24881_25123[(1)]):((G__24890)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__24882[(0)] = ((G__24883 - G__24885_25124) - G__24887_25126));

(G__24882[(1)] = ((G__24884 - G__24886_25125) - G__24888_25127));
}

return (new thi.ng.geom.core.vector.Vec2(G__24882,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__24902_25128 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__24903_25129 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__24904_25130 = ((!(G__24902_25128))?typeof a === 'number':null);
var G__24905_25131 = ((!(G__24903_25129))?typeof b === 'number':null);
var G__24893_25132 = self__.buf;
var G__24894_25133 = ((G__24902_25128)?a.buf:null);
var G__24895_25134 = ((G__24903_25129)?b.buf:null);
var G__24896_25135 = (G__24893_25132[(0)]);
var G__24897_25136 = (G__24893_25132[(1)]);
var G__24898_25137 = ((G__24902_25128)?(G__24894_25133[(0)]):(cljs.core.truth_(G__24904_25130)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__24899_25138 = ((G__24902_25128)?(G__24894_25133[(1)]):(cljs.core.truth_(G__24904_25130)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__24900_25139 = ((G__24903_25129)?(G__24895_25134[(0)]):(cljs.core.truth_(G__24905_25131)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__24901_25140 = ((G__24903_25129)?(G__24895_25134[(1)]):(cljs.core.truth_(G__24905_25131)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__7524__auto__[(0)] = ((G__24896_25135 * G__24898_25137) + G__24900_25139));

(dest__7524__auto__[(1)] = ((G__24897_25136 * G__24899_25138) + G__24901_25140));

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__24915_25141 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__24916_25142 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__24917_25143 = ((!(G__24915_25141))?typeof a === 'number':null);
var G__24918_25144 = ((!(G__24916_25142))?typeof b === 'number':null);
var G__24906_25145 = self__.buf;
var G__24907_25146 = ((G__24915_25141)?a.buf:null);
var G__24908_25147 = ((G__24916_25142)?b.buf:null);
var G__24909_25148 = (G__24906_25145[(0)]);
var G__24910_25149 = (G__24906_25145[(1)]);
var G__24911_25150 = ((G__24915_25141)?(G__24907_25146[(0)]):(cljs.core.truth_(G__24917_25143)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__24912_25151 = ((G__24915_25141)?(G__24907_25146[(1)]):(cljs.core.truth_(G__24917_25143)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__24913_25152 = ((G__24916_25142)?(G__24908_25147[(0)]):(cljs.core.truth_(G__24918_25144)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__24914_25153 = ((G__24916_25142)?(G__24908_25147[(1)]):(cljs.core.truth_(G__24918_25144)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__7524__auto__[(0)] = ((G__24909_25148 + G__24911_25150) * G__24913_25152));

(dest__7524__auto__[(1)] = ((G__24910_25149 + G__24912_25151) * G__24914_25153));

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7506__auto__ = (new Float32Array((2)));
var G__24919_25154 = self__.buf;
(dest__7506__auto__[(0)] = ((1) / (G__24919_25154[(0)])));

(dest__7506__auto__[(1)] = ((1) / (G__24919_25154[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__7506__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24920_25155 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24921_25156 = v.buf;
(dest__7518__auto__[(0)] = ((G__24920_25155[(0)]) / (G__24921_25156[(0)])));

(dest__7518__auto__[(1)] = ((G__24920_25155[(1)]) / (G__24921_25156[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24920_25155[(0)]) / v));

(dest__7518__auto__[(1)] = ((G__24920_25155[(1)]) / v));
} else {
(dest__7518__auto__[(0)] = ((G__24920_25155[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24920_25155[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24922 = self__.buf;
var G__24925 = (new Float32Array((2)));
var G__24926 = (G__24922[(0)]);
var G__24927 = (G__24922[(1)]);
var G__24932 = typeof v1 === 'number';
var G__24933 = typeof v2 === 'number';
if(((G__24932)?G__24933:false)){
(G__24925[(0)] = (G__24926 / v1));

(G__24925[(1)] = (G__24927 / v2));
} else {
var G__24934_25157 = ((!(G__24932))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24935_25158 = ((!(G__24933))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24923_25159 = (cljs.core.truth_(G__24934_25157)?v1.buf:null);
var G__24924_25160 = (cljs.core.truth_(G__24935_25158)?v2.buf:null);
var G__24928_25161 = (cljs.core.truth_(G__24934_25157)?(G__24923_25159[(0)]):((G__24932)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__24929_25162 = (cljs.core.truth_(G__24934_25157)?(G__24923_25159[(1)]):((G__24932)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__24930_25163 = (cljs.core.truth_(G__24935_25158)?(G__24924_25160[(0)]):((G__24933)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__24931_25164 = (cljs.core.truth_(G__24935_25158)?(G__24924_25160[(1)]):((G__24933)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__24925[(0)] = ((G__24926 / G__24928_25161) / G__24930_25163));

(G__24925[(1)] = ((G__24927 / G__24929_25162) / G__24931_25164));
}

return (new thi.ng.geom.core.vector.Vec2(G__24925,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24936_25165 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24937_25166 = v.buf;
(dest__7518__auto__[(0)] = ((G__24936_25165[(0)]) + (G__24937_25166[(0)])));

(dest__7518__auto__[(1)] = ((G__24936_25165[(1)]) + (G__24937_25166[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24936_25165[(0)]) + v));

(dest__7518__auto__[(1)] = ((G__24936_25165[(1)]) + v));
} else {
(dest__7518__auto__[(0)] = ((G__24936_25165[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24936_25165[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24938 = self__.buf;
var G__24941 = (new Float32Array((2)));
var G__24942 = (G__24938[(0)]);
var G__24943 = (G__24938[(1)]);
var G__24948 = typeof v1 === 'number';
var G__24949 = typeof v2 === 'number';
if(((G__24948)?G__24949:false)){
(G__24941[(0)] = (G__24942 + v1));

(G__24941[(1)] = (G__24943 + v2));
} else {
var G__24950_25167 = ((!(G__24948))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24951_25168 = ((!(G__24949))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24939_25169 = (cljs.core.truth_(G__24950_25167)?v1.buf:null);
var G__24940_25170 = (cljs.core.truth_(G__24951_25168)?v2.buf:null);
var G__24944_25171 = (cljs.core.truth_(G__24950_25167)?(G__24939_25169[(0)]):((G__24948)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__24945_25172 = (cljs.core.truth_(G__24950_25167)?(G__24939_25169[(1)]):((G__24948)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__24946_25173 = (cljs.core.truth_(G__24951_25168)?(G__24940_25170[(0)]):((G__24949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__24947_25174 = (cljs.core.truth_(G__24951_25168)?(G__24940_25170[(1)]):((G__24949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__24941[(0)] = ((G__24942 + G__24944_25171) + G__24946_25173));

(G__24941[(1)] = ((G__24943 + G__24945_25172) + G__24947_25174));
}

return (new thi.ng.geom.core.vector.Vec2(G__24941,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7506__auto__ = (new Float32Array((2)));
var G__24952_25175 = self__.buf;
(dest__7506__auto__[(0)] = (function (){var G__24953 = (G__24952_25175[(0)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__24953) : thi.ng.common.math.core.abs.call(null,G__24953));
})());

(dest__7506__auto__[(1)] = (function (){var G__24954 = (G__24952_25175[(1)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__24954) : thi.ng.common.math.core.abs.call(null,G__24954));
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7506__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__24964_25176 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__24965_25177 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__24966_25178 = ((!(G__24964_25176))?typeof a === 'number':null);
var G__24967_25179 = ((!(G__24965_25177))?typeof b === 'number':null);
var G__24955_25180 = self__.buf;
var G__24956_25181 = ((G__24964_25176)?a.buf:null);
var G__24957_25182 = ((G__24965_25177)?b.buf:null);
var G__24958_25183 = (G__24955_25180[(0)]);
var G__24959_25184 = (G__24955_25180[(1)]);
var G__24960_25185 = ((G__24964_25176)?(G__24956_25181[(0)]):(cljs.core.truth_(G__24966_25178)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__24961_25186 = ((G__24964_25176)?(G__24956_25181[(1)]):(cljs.core.truth_(G__24966_25178)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__24962_25187 = ((G__24965_25177)?(G__24957_25182[(0)]):(cljs.core.truth_(G__24967_25179)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__24963_25188 = ((G__24965_25177)?(G__24957_25182[(1)]):(cljs.core.truth_(G__24967_25179)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__7524__auto__[(0)] = ((G__24958_25183 - G__24960_25185) * G__24962_25187));

(dest__7524__auto__[(1)] = ((G__24959_25184 - G__24961_25186) * G__24963_25188));

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24968_25189 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24969_25190 = v.buf;
(dest__7518__auto__[(0)] = ((G__24968_25189[(0)]) + (G__24969_25190[(0)])));

(dest__7518__auto__[(1)] = ((G__24968_25189[(1)]) + (G__24969_25190[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24968_25189[(0)]) + v));

(dest__7518__auto__[(1)] = ((G__24968_25189[(1)]) + v));
} else {
(dest__7518__auto__[(0)] = ((G__24968_25189[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24968_25189[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24970 = self__.buf;
var G__24973 = (new Float32Array((2)));
var G__24974 = (G__24970[(0)]);
var G__24975 = (G__24970[(1)]);
var G__24980 = typeof v1 === 'number';
var G__24981 = typeof v2 === 'number';
if(((G__24980)?G__24981:false)){
(G__24973[(0)] = (G__24974 + v1));

(G__24973[(1)] = (G__24975 + v2));
} else {
var G__24982_25191 = ((!(G__24980))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24983_25192 = ((!(G__24981))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24971_25193 = (cljs.core.truth_(G__24982_25191)?v1.buf:null);
var G__24972_25194 = (cljs.core.truth_(G__24983_25192)?v2.buf:null);
var G__24976_25195 = (cljs.core.truth_(G__24982_25191)?(G__24971_25193[(0)]):((G__24980)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__24977_25196 = (cljs.core.truth_(G__24982_25191)?(G__24971_25193[(1)]):((G__24980)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__24978_25197 = (cljs.core.truth_(G__24983_25192)?(G__24972_25194[(0)]):((G__24981)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__24979_25198 = (cljs.core.truth_(G__24983_25192)?(G__24972_25194[(1)]):((G__24981)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__24973[(0)] = ((G__24974 + G__24976_25195) + G__24978_25197));

(G__24973[(1)] = ((G__24975 + G__24977_25196) + G__24979_25198));
}

return (new thi.ng.geom.core.vector.Vec2(G__24973,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_((function (){var G__24984 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__24984) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__24984));
})())){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$z,k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2((function (){var G__24985 = self__.buf;
var G__24986 = (new Float32Array(self__.buf));
var G__24987 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__24988 = k;
var G__24989 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__24985,G__24986,G__24987,G__24988,G__24989) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__24985,G__24986,G__24987,G__24988,G__24989));
})(),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__24990_25199 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__24991_25200 = v.buf;
(dest__7518__auto__[(0)] = ((G__24990_25199[(0)]) * (G__24991_25200[(0)])));

(dest__7518__auto__[(1)] = ((G__24990_25199[(1)]) * (G__24991_25200[(1)])));
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = ((G__24990_25199[(0)]) * v));

(dest__7518__auto__[(1)] = ((G__24990_25199[(1)]) * v));
} else {
(dest__7518__auto__[(0)] = ((G__24990_25199[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7518__auto__[(1)] = ((G__24990_25199[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__24992 = self__.buf;
var G__24995 = (new Float32Array((2)));
var G__24996 = (G__24992[(0)]);
var G__24997 = (G__24992[(1)]);
var G__25002 = typeof v1 === 'number';
var G__25003 = typeof v2 === 'number';
if(((G__25002)?G__25003:false)){
(G__24995[(0)] = (G__24996 * v1));

(G__24995[(1)] = (G__24997 * v2));
} else {
var G__25004_25201 = ((!(G__25002))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25005_25202 = ((!(G__25003))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__24993_25203 = (cljs.core.truth_(G__25004_25201)?v1.buf:null);
var G__24994_25204 = (cljs.core.truth_(G__25005_25202)?v2.buf:null);
var G__24998_25205 = (cljs.core.truth_(G__25004_25201)?(G__24993_25203[(0)]):((G__25002)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__24999_25206 = (cljs.core.truth_(G__25004_25201)?(G__24993_25203[(1)]):((G__25002)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__25000_25207 = (cljs.core.truth_(G__25005_25202)?(G__24994_25204[(0)]):((G__25003)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__25001_25208 = (cljs.core.truth_(G__25005_25202)?(G__24994_25204[(1)]):((G__25003)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__24995[(0)] = ((G__24996 * G__24998_25205) * G__25000_25207));

(G__24995[(1)] = ((G__24997 * G__24999_25206) * G__25001_25208));
}

return (new thi.ng.geom.core.vector.Vec2(G__24995,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__25006 = (self__.buf[(0)]);
var G__25007 = (self__.buf[(1)]);
var G__25008 = x;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__25006,G__25007,G__25008) : thi.ng.geom.core.vector.vec3.call(null,G__25006,G__25007,G__25008));
})(),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__25209 = null;
var G__25209__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25009 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25009) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25009));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25010 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25010) : f.call(null,G__25010));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});
var G__25209__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25011 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25011) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25011));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25012 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25012) : f.call(null,G__25012));
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__25209 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__25209__2.call(this,self__,k);
case 3:
return G__25209__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25209.cljs$core$IFn$_invoke$arity$2 = G__25209__2;
G__25209.cljs$core$IFn$_invoke$arity$3 = G__25209__3;
return G__25209;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args24795){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24795)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25013 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25013) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25013));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25014 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25014) : f.call(null,G__25014));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25015 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25015) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25015));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25016 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25016) : f.call(null,G__25016));
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__25017_25210 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25018_25211 = v.buf;
(dest__7518__auto__[(0)] = (function (){var a__7136__auto__ = (G__25017_25210[(0)]);
var b__7137__auto__ = (G__25018_25211[(0)]);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7136__auto__ = (G__25017_25210[(1)]);
var b__7137__auto__ = (G__25018_25211[(1)]);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = (function (){var a__7136__auto__ = (G__25017_25210[(0)]);
var b__7137__auto__ = v;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7136__auto__ = (G__25017_25210[(1)]);
var b__7137__auto__ = v;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
} else {
(dest__7518__auto__[(0)] = (function (){var a__7136__auto__ = (G__25017_25210[(0)]);
var b__7137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7136__auto__ = (G__25017_25210[(1)]);
var b__7137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__25028_25212 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25029_25213 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25030_25214 = ((!(G__25028_25212))?typeof v === 'number':null);
var G__25031_25215 = ((!(G__25029_25213))?typeof v2 === 'number':null);
var G__25019_25216 = self__.buf;
var G__25020_25217 = ((G__25028_25212)?v.buf:null);
var G__25021_25218 = ((G__25029_25213)?v2.buf:null);
var G__25022_25219 = (G__25019_25216[(0)]);
var G__25023_25220 = (G__25019_25216[(1)]);
var G__25024_25221 = ((G__25028_25212)?(G__25020_25217[(0)]):(cljs.core.truth_(G__25030_25214)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25025_25222 = ((G__25028_25212)?(G__25020_25217[(1)]):(cljs.core.truth_(G__25030_25214)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25026_25223 = ((G__25029_25213)?(G__25021_25218[(0)]):(cljs.core.truth_(G__25031_25215)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25027_25224 = ((G__25029_25213)?(G__25021_25218[(1)]):(cljs.core.truth_(G__25031_25215)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__7524__auto__[(0)] = (function (){var a__7136__auto__ = (function (){var a__7136__auto__ = G__25022_25219;
var b__7137__auto__ = G__25024_25221;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})();
var b__7137__auto__ = G__25026_25223;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7524__auto__[(1)] = (function (){var a__7136__auto__ = (function (){var a__7136__auto__ = G__25023_25220;
var b__7137__auto__ = G__25025_25222;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})();
var b__7137__auto__ = G__25027_25224;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7518__auto__ = (new Float32Array((2)));
var G__25032_25225 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25033_25226 = v.buf;
(dest__7518__auto__[(0)] = (function (){var a__7143__auto__ = (G__25032_25225[(0)]);
var b__7144__auto__ = (G__25033_25226[(0)]);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7143__auto__ = (G__25032_25225[(1)]);
var b__7144__auto__ = (G__25033_25226[(1)]);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7518__auto__[(0)] = (function (){var a__7143__auto__ = (G__25032_25225[(0)]);
var b__7144__auto__ = v;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7143__auto__ = (G__25032_25225[(1)]);
var b__7144__auto__ = v;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
} else {
(dest__7518__auto__[(0)] = (function (){var a__7143__auto__ = (G__25032_25225[(0)]);
var b__7144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7518__auto__[(1)] = (function (){var a__7143__auto__ = (G__25032_25225[(1)]);
var b__7144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7518__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7524__auto__ = (new Float32Array((2)));
var G__25043_25227 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25044_25228 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25045_25229 = ((!(G__25043_25227))?typeof v === 'number':null);
var G__25046_25230 = ((!(G__25044_25228))?typeof v2 === 'number':null);
var G__25034_25231 = self__.buf;
var G__25035_25232 = ((G__25043_25227)?v.buf:null);
var G__25036_25233 = ((G__25044_25228)?v2.buf:null);
var G__25037_25234 = (G__25034_25231[(0)]);
var G__25038_25235 = (G__25034_25231[(1)]);
var G__25039_25236 = ((G__25043_25227)?(G__25035_25232[(0)]):(cljs.core.truth_(G__25045_25229)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25040_25237 = ((G__25043_25227)?(G__25035_25232[(1)]):(cljs.core.truth_(G__25045_25229)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25041_25238 = ((G__25044_25228)?(G__25036_25233[(0)]):(cljs.core.truth_(G__25046_25230)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25042_25239 = ((G__25044_25228)?(G__25036_25233[(1)]):(cljs.core.truth_(G__25046_25230)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__7524__auto__[(0)] = (function (){var a__7143__auto__ = (function (){var a__7143__auto__ = G__25037_25234;
var b__7144__auto__ = G__25039_25236;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})();
var b__7144__auto__ = G__25041_25238;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7524__auto__[(1)] = (function (){var a__7143__auto__ = (function (){var a__7143__auto__ = G__25038_25235;
var b__7144__auto__ = G__25040_25237;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})();
var b__7144__auto__ = G__25042_25239;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7524__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((function (){var G__25047 = f;
var G__25048 = ___$1;
var G__25049 = xs;
return (thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25047,G__25048,G__25049) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,G__25047,G__25048,G__25049));
})(),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var b = (function (){var G__25050 = f;
var G__25051 = ___$1;
var G__25052 = xs;
return (thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25050,G__25051,G__25052) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,G__25050,G__25051,G__25052));
})();
(b[(0)] = (function (){var G__25053 = (b[(0)]);
var G__25054 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25053,G__25054) : f2.call(null,G__25053,G__25054));
})());

(b[(1)] = (function (){var G__25055 = (b[(1)]);
var G__25056 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25055,G__25056) : f2.call(null,G__25055,G__25056));
})());

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,v,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__25057 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25058 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25057[(0)]),(G__25058[(0)]),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25057[(1)]),(G__25058[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25057[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25057[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25059 = self__.buf;
var G__25060 = (G__25059[(0)]);
var G__25061 = (G__25059[(1)]);
var G__25062 = ((G__25060 * G__25060) + (G__25061 * G__25061));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25062) : Math.sqrt.call(null,G__25062));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25063 = self__.buf;
var G__25064 = (G__25063[(0)]);
var G__25065 = (G__25063[(1)]);
return ((G__25064 * G__25064) + (G__25065 * G__25065));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__25066_25240 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25067_25241 = v.buf;
(b[(0)] = (((G__25066_25240[(0)]) + (G__25067_25241[(0)])) * 0.5));

(b[(1)] = (((G__25066_25240[(1)]) + (G__25067_25241[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__25066_25240[(0)]) + v) * 0.5));

(b[(1)] = (((G__25066_25240[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__25066_25240[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__25066_25240[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__25077_25242 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25078_25243 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25079_25244 = ((!(G__25077_25242))?typeof v === 'number':null);
var G__25080_25245 = ((!(G__25078_25243))?typeof v2 === 'number':null);
var G__25068_25246 = self__.buf;
var G__25069_25247 = ((G__25077_25242)?v.buf:null);
var G__25070_25248 = ((G__25078_25243)?v2.buf:null);
var G__25071_25249 = (G__25068_25246[(0)]);
var G__25072_25250 = (G__25068_25246[(1)]);
var G__25073_25251 = ((G__25077_25242)?(G__25069_25247[(0)]):(cljs.core.truth_(G__25079_25244)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25074_25252 = ((G__25077_25242)?(G__25069_25247[(1)]):(cljs.core.truth_(G__25079_25244)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25075_25253 = ((G__25078_25243)?(G__25070_25248[(0)]):(cljs.core.truth_(G__25080_25245)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25076_25254 = ((G__25078_25243)?(G__25070_25248[(1)]):(cljs.core.truth_(G__25080_25245)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(b[(0)] = (((G__25073_25251 - G__25071_25249) * G__25075_25253) + G__25071_25249));

(b[(1)] = (((G__25074_25252 - G__25072_25250) * G__25076_25254) + G__25072_25250));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__25090_25255 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25091_25256 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__25092_25257 = ((!(G__25090_25255))?typeof b === 'number':null);
var G__25093_25258 = ((!(G__25091_25256))?typeof c === 'number':null);
var G__25081_25259 = self__.buf;
var G__25082_25260 = ((G__25090_25255)?b.buf:null);
var G__25083_25261 = ((G__25091_25256)?c.buf:null);
var G__25084_25262 = (G__25081_25259[(0)]);
var G__25085_25263 = (G__25081_25259[(1)]);
var G__25086_25264 = ((G__25090_25255)?(G__25082_25260[(0)]):(cljs.core.truth_(G__25092_25257)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25087_25265 = ((G__25090_25255)?(G__25082_25260[(1)]):(cljs.core.truth_(G__25092_25257)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25088_25266 = ((G__25091_25256)?(G__25083_25261[(0)]):(cljs.core.truth_(G__25093_25258)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__25089_25267 = ((G__25091_25256)?(G__25083_25261[(1)]):(cljs.core.truth_(G__25093_25258)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_25268 = (((G__25086_25264 - G__25084_25262) * u) + G__25084_25262);
var y1_25269 = (((G__25087_25265 - G__25085_25263) * u) + G__25085_25263);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__25088_25266) * u) + G__25088_25266) - x1_25268) * v) + x1_25268));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__25089_25267) * u) + G__25089_25267) - y1_25269) * v) + y1_25269));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared(___$1) > (len * len))){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag(___$1));

(b[(1)] = thi.ng.geom.core.heading(___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__24824 = self__.buf;
var G__24825 = (G__24824[(0)]);
var G__24826 = (G__24824[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__24825 * (function (){var G__24827 = G__24826;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__24827) : Math.cos.call(null,G__24827));
})()));

(b[(1)] = (G__24825 * (function (){var G__24828 = G__24826;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__24828) : Math.sin.call(null,G__24828));
})()));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25271 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25271) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25271));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25272 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25272) : f.call(null,G__25272));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25273 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25273) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25273));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25274 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25274) : f.call(null,G__25274));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25275 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25276 = v.buf;
return ((((G__25275[(0)]) * (G__25276[(0)])) + ((G__25275[(1)]) * (G__25276[(1)]))) + ((G__25275[(2)]) * (G__25276[(2)])));
} else {
return ((((G__25275[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__25275[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__25275[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25277 = self__.buf;
var G__25278 = (G__25277[(0)]);
var G__25279 = (G__25277[(1)]);
var G__25280 = (G__25277[(2)]);
var l = (function (){var G__25281 = (((G__25278 * G__25278) + (G__25279 * G__25279)) + (G__25280 * G__25280));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25281) : Math.sqrt.call(null,G__25281));
})();
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__25278 / l));

(b[(1)] = (G__25279 / l));

(b[(2)] = (G__25280 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__25282 = self__.buf;
var G__25283 = (G__25282[(0)]);
var G__25284 = (G__25282[(1)]);
var G__25285 = (G__25282[(2)]);
var l = (function (){var G__25286 = (((G__25283 * G__25283) + (G__25284 * G__25284)) + (G__25285 * G__25285));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25286) : Math.sqrt.call(null,G__25286));
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__25283 * l__$1));

(b[(1)] = (G__25284 * l__$1));

(b[(2)] = (G__25285 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.geom.core.mag_squared(___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__25287 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25287) : Math.sin.call(null,G__25287));
})();
var c = (function (){var G__25288 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25288) : Math.cos.call(null,G__25288));
})();
var b = (new Float32Array((3)));
var G__25289 = self__.buf;
var G__25290 = (G__25289[(0)]);
var G__25291 = (G__25289[(1)]);
var G__25292 = (G__25289[(2)]);
(b[(0)] = G__25290);

(b[(1)] = ((G__25291 * c) - (G__25292 * s)));

(b[(2)] = ((G__25291 * s) + (G__25292 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__25293 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25293) : Math.sin.call(null,G__25293));
})();
var c = (function (){var G__25294 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25294) : Math.cos.call(null,G__25294));
})();
var b = (new Float32Array((3)));
var G__25295 = self__.buf;
var G__25296 = (G__25295[(0)]);
var G__25297 = (G__25295[(1)]);
var G__25298 = (G__25295[(2)]);
(b[(0)] = ((G__25296 * c) + (G__25298 * s)));

(b[(1)] = G__25297);

(b[(2)] = ((G__25298 * c) - (G__25296 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__25299 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25299) : Math.sin.call(null,G__25299));
})();
var c = (function (){var G__25300 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25300) : Math.cos.call(null,G__25300));
})();
var b = (new Float32Array((3)));
var G__25301 = self__.buf;
var G__25302 = (G__25301[(0)]);
var G__25303 = (G__25301[(1)]);
var G__25304 = (G__25301[(2)]);
(b[(0)] = ((G__25302 * c) - (G__25303 * s)));

(b[(1)] = ((G__25302 * s) + (G__25303 * c)));

(b[(2)] = G__25304);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__25305 = self__.buf;
var G__25307 = (G__25305[(0)]);
var G__25308 = (G__25305[(1)]);
var G__25309 = (G__25305[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25306 = v.buf;
var G__25310 = (G__25306[(0)]);
var G__25311 = (G__25306[(1)]);
var G__25312 = (G__25306[(2)]);
var ux_SINGLEQUOTE_ = (G__25310 * G__25307);
var uy_SINGLEQUOTE_ = (G__25310 * G__25308);
var uz_SINGLEQUOTE_ = (G__25310 * G__25309);
var vx_SINGLEQUOTE_ = (G__25311 * G__25307);
var vy_SINGLEQUOTE_ = (G__25311 * G__25308);
var vz_SINGLEQUOTE_ = (G__25311 * G__25309);
var wx_SINGLEQUOTE_ = (G__25312 * G__25307);
var wy_SINGLEQUOTE_ = (G__25312 * G__25308);
var wz_SINGLEQUOTE_ = (G__25312 * G__25309);
var vx2 = (G__25310 * G__25310);
var vy2 = (G__25311 * G__25311);
var vz2 = (G__25312 * G__25312);
var s = (function (){var G__25313 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25313) : Math.sin.call(null,G__25313));
})();
var c = (function (){var G__25314 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25314) : Math.cos.call(null,G__25314));
})();
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__25310) + ((((vy2 + vz2) * G__25307) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25310)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__25311) + ((((vx2 + vz2) * G__25308) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25311)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__25312) + ((((vx2 + vy2) * G__25309) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__25312)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__25310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__25310 * G__25307);
var uy_SINGLEQUOTE_ = (G__25310 * G__25308);
var uz_SINGLEQUOTE_ = (G__25310 * G__25309);
var vx_SINGLEQUOTE_ = (G__25311 * G__25307);
var vy_SINGLEQUOTE_ = (G__25311 * G__25308);
var vz_SINGLEQUOTE_ = (G__25311 * G__25309);
var wx_SINGLEQUOTE_ = (G__25312 * G__25307);
var wy_SINGLEQUOTE_ = (G__25312 * G__25308);
var wz_SINGLEQUOTE_ = (G__25312 * G__25309);
var vx2 = (G__25310 * G__25310);
var vy2 = (G__25311 * G__25311);
var vz2 = (G__25312 * G__25312);
var s = (function (){var G__25315 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25315) : Math.sin.call(null,G__25315));
})();
var c = (function (){var G__25316 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25316) : Math.cos.call(null,G__25316));
})();
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__25310) + ((((vy2 + vz2) * G__25307) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25310)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__25311) + ((((vx2 + vz2) * G__25308) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25311)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__25312) + ((((vx2 + vy2) * G__25309) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__25312)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__25317 = self__.buf;
var G__25319 = (G__25317[(0)]);
var G__25320 = (G__25317[(1)]);
var G__25321 = (G__25317[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25318 = v.buf;
var G__25322 = (G__25318[(0)]);
var G__25323 = (G__25318[(1)]);
var G__25324 = (G__25318[(2)]);
var d = ((((G__25319 * G__25322) + (G__25320 * G__25323)) + (G__25321 * G__25324)) * 2.0);
(b[(0)] = ((G__25322 * d) - G__25319));

(b[(1)] = ((G__25323 * d) - G__25320));

(b[(2)] = ((G__25324 * d) - G__25321));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__25322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__25319 * G__25322) + (G__25320 * G__25323)) + (G__25321 * G__25324)) * 2.0);
(b[(0)] = ((G__25322 * d) - G__25319));

(b[(1)] = ((G__25323 * d) - G__25320));

(b[(2)] = ((G__25324 * d) - G__25321));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__25325_25664 = self__.buf;
var G__25327_25665 = (G__25325_25664[(0)]);
var G__25328_25666 = (G__25325_25664[(1)]);
var G__25329_25667 = (G__25325_25664[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25326_25668 = v.buf;
var G__25330_25669 = (G__25326_25668[(0)]);
var G__25331_25670 = (G__25326_25668[(1)]);
var G__25332_25671 = (G__25326_25668[(2)]);
(b[(0)] = ((G__25328_25666 * G__25332_25671) - (G__25331_25670 * G__25329_25667)));

(b[(1)] = ((G__25329_25667 * G__25330_25669) - (G__25332_25671 * G__25327_25665)));

(b[(2)] = ((G__25327_25665 * G__25331_25670) - (G__25330_25669 * G__25328_25666)));
} else {
var G__25330_25672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25331_25673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25332_25674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__25328_25666 * G__25332_25674) - (G__25331_25673 * G__25329_25667)));

(b[(1)] = ((G__25329_25667 * G__25330_25672) - (G__25332_25674 * G__25327_25665)));

(b[(2)] = ((G__25327_25665 * G__25331_25673) - (G__25330_25672 * G__25328_25666)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.common.error.key_error_BANG_(n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function (){var G__25337 = cljs.core.constant$keyword$zyx;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25337) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25337));
})().call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12575__auto__ = self__._hash;
if(cljs.core.truth_(or__12575__auto__)){
return or__12575__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_(o)) && (((3) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy(___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__25338 = (self__.buf[(1)]);
var G__25339 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25338,G__25339) : Math.atan2.call(null,G__25338,G__25339));
})();
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__25340 = (self__.buf[(2)]);
var G__25341 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25340,G__25341) : Math.atan2.call(null,G__25340,G__25341));
})();
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__25342 = (self__.buf[(2)]);
var G__25343 = (self__.buf[(1)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25342,G__25343) : Math.atan2.call(null,G__25342,G__25343));
})();
if((t < (0))){
return (t + thi.ng.common.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:(function (){var G__25344 = v;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(G__25344) : thi.ng.geom.core.vector.vec3.call(null,G__25344));
})());
var G__25345 = thi.ng.geom.core.dot(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(v__$1));
return (Math.acos.cljs$core$IFn$_invoke$arity$1 ? Math.acos.cljs$core$IFn$_invoke$arity$1(G__25345) : Math.acos.call(null,G__25345));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25346 = thi.ng.geom.core.dist_squared(___$1,v);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25346) : Math.sqrt.call(null,G__25346));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25347 = self__.buf;
var G__25349 = (G__25347[(0)]);
var G__25350 = (G__25347[(1)]);
var G__25351 = (G__25347[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25348 = v.buf;
var G__25352 = (G__25348[(0)]);
var G__25353 = (G__25348[(1)]);
var G__25354 = (G__25348[(2)]);
var dx = (G__25349 - G__25352);
var dy = (G__25350 - G__25353);
var dz = (G__25351 - G__25354);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__25352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__25349 - G__25352);
var dy = (G__25350 - G__25353);
var dz = (G__25351 - G__25354);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25355 = (self__.buf[(0)]);
var G__25356 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25355,G__25356) : f.call(null,G__25355,G__25356));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25357 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25357) : cljs.core.deref.call(null,G__25357));
} else {
var acc__$1 = (function (){var G__25358 = acc;
var G__25359 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25358,G__25359) : f.call(null,G__25358,G__25359));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__25360 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25360) : cljs.core.deref.call(null,G__25360));
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25361 = start;
var G__25362 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25361,G__25362) : f.call(null,G__25361,G__25362));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25363 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25363) : cljs.core.deref.call(null,G__25363));
} else {
var acc__$1 = (function (){var G__25364 = acc;
var G__25365 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25364,G__25365) : f.call(null,G__25364,G__25365));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__25366 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25366) : cljs.core.deref.call(null,G__25366));
} else {
var acc__$2 = (function (){var G__25367 = acc__$1;
var G__25368 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25367,G__25368) : f.call(null,G__25367,G__25368));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
var G__25369 = acc__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25369) : cljs.core.deref.call(null,G__25369));
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25382_25675 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25383_25676 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25384_25677 = ((!(G__25382_25675))?typeof a === 'number':null);
var G__25385_25678 = ((!(G__25383_25676))?typeof b === 'number':null);
var G__25370_25679 = self__.buf;
var G__25371_25680 = ((G__25382_25675)?a.buf:null);
var G__25372_25681 = ((G__25383_25676)?b.buf:null);
var G__25373_25682 = (G__25370_25679[(0)]);
var G__25374_25683 = (G__25370_25679[(1)]);
var G__25375_25684 = (G__25370_25679[(2)]);
var G__25376_25685 = ((G__25382_25675)?(G__25371_25680[(0)]):(cljs.core.truth_(G__25384_25677)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25377_25686 = ((G__25382_25675)?(G__25371_25680[(1)]):(cljs.core.truth_(G__25384_25677)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25378_25687 = ((G__25382_25675)?(G__25371_25680[(2)]):(cljs.core.truth_(G__25384_25677)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25379_25688 = ((G__25383_25676)?(G__25372_25681[(0)]):(cljs.core.truth_(G__25385_25678)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25380_25689 = ((G__25383_25676)?(G__25372_25681[(1)]):(cljs.core.truth_(G__25385_25678)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25381_25690 = ((G__25383_25676)?(G__25372_25681[(2)]):(cljs.core.truth_(G__25385_25678)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25373_25682 * G__25376_25685) - G__25379_25688));

(dest__7604__auto__[(1)] = ((G__25374_25683 * G__25377_25686) - G__25380_25689));

(dest__7604__auto__[(2)] = ((G__25375_25684 * G__25378_25687) - G__25381_25690));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25386_25691 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25387_25692 = v.buf;
(dest__7598__auto__[(0)] = ((G__25386_25691[(0)]) * (G__25387_25692[(0)])));

(dest__7598__auto__[(1)] = ((G__25386_25691[(1)]) * (G__25387_25692[(1)])));

(dest__7598__auto__[(2)] = ((G__25386_25691[(2)]) * (G__25387_25692[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25386_25691[(0)]) * v));

(dest__7598__auto__[(1)] = ((G__25386_25691[(1)]) * v));

(dest__7598__auto__[(2)] = ((G__25386_25691[(2)]) * v));
} else {
(dest__7598__auto__[(0)] = ((G__25386_25691[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25386_25691[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25386_25691[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25400_25693 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25401_25694 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25402_25695 = ((!(G__25400_25693))?typeof v1 === 'number':null);
var G__25403_25696 = ((!(G__25401_25694))?typeof v2 === 'number':null);
var G__25388_25697 = self__.buf;
var G__25389_25698 = ((G__25400_25693)?v1.buf:null);
var G__25390_25699 = ((G__25401_25694)?v2.buf:null);
var G__25391_25700 = (G__25388_25697[(0)]);
var G__25392_25701 = (G__25388_25697[(1)]);
var G__25393_25702 = (G__25388_25697[(2)]);
var G__25394_25703 = ((G__25400_25693)?(G__25389_25698[(0)]):(cljs.core.truth_(G__25402_25695)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25395_25704 = ((G__25400_25693)?(G__25389_25698[(1)]):(cljs.core.truth_(G__25402_25695)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25396_25705 = ((G__25400_25693)?(G__25389_25698[(2)]):(cljs.core.truth_(G__25402_25695)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25397_25706 = ((G__25401_25694)?(G__25390_25699[(0)]):(cljs.core.truth_(G__25403_25696)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25398_25707 = ((G__25401_25694)?(G__25390_25699[(1)]):(cljs.core.truth_(G__25403_25696)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25399_25708 = ((G__25401_25694)?(G__25390_25699[(2)]):(cljs.core.truth_(G__25403_25696)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25391_25700 * G__25394_25703) * G__25397_25706));

(dest__7604__auto__[(1)] = ((G__25392_25701 * G__25395_25704) * G__25398_25707));

(dest__7604__auto__[(2)] = ((G__25393_25702 * G__25396_25705) * G__25399_25708));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25404 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25404[(0)]) * x));

(dest__7592__auto__[(1)] = ((G__25404[(1)]) * y));

(dest__7592__auto__[(2)] = ((G__25404[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7586__auto__ = (new Float32Array((3)));
var G__25405_25709 = self__.buf;
(dest__7586__auto__[(0)] = (- (G__25405_25709[(0)])));

(dest__7586__auto__[(1)] = (- (G__25405_25709[(1)])));

(dest__7586__auto__[(2)] = (- (G__25405_25709[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__7586__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25406_25710 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25407_25711 = v.buf;
(dest__7598__auto__[(0)] = ((G__25406_25710[(0)]) - (G__25407_25711[(0)])));

(dest__7598__auto__[(1)] = ((G__25406_25710[(1)]) - (G__25407_25711[(1)])));

(dest__7598__auto__[(2)] = ((G__25406_25710[(2)]) - (G__25407_25711[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25406_25710[(0)]) - v));

(dest__7598__auto__[(1)] = ((G__25406_25710[(1)]) - v));

(dest__7598__auto__[(2)] = ((G__25406_25710[(2)]) - v));
} else {
(dest__7598__auto__[(0)] = ((G__25406_25710[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25406_25710[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25406_25710[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25420_25712 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25421_25713 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25422_25714 = ((!(G__25420_25712))?typeof v1 === 'number':null);
var G__25423_25715 = ((!(G__25421_25713))?typeof v2 === 'number':null);
var G__25408_25716 = self__.buf;
var G__25409_25717 = ((G__25420_25712)?v1.buf:null);
var G__25410_25718 = ((G__25421_25713)?v2.buf:null);
var G__25411_25719 = (G__25408_25716[(0)]);
var G__25412_25720 = (G__25408_25716[(1)]);
var G__25413_25721 = (G__25408_25716[(2)]);
var G__25414_25722 = ((G__25420_25712)?(G__25409_25717[(0)]):(cljs.core.truth_(G__25422_25714)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25415_25723 = ((G__25420_25712)?(G__25409_25717[(1)]):(cljs.core.truth_(G__25422_25714)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25416_25724 = ((G__25420_25712)?(G__25409_25717[(2)]):(cljs.core.truth_(G__25422_25714)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25417_25725 = ((G__25421_25713)?(G__25410_25718[(0)]):(cljs.core.truth_(G__25423_25715)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25418_25726 = ((G__25421_25713)?(G__25410_25718[(1)]):(cljs.core.truth_(G__25423_25715)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25419_25727 = ((G__25421_25713)?(G__25410_25718[(2)]):(cljs.core.truth_(G__25423_25715)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25411_25719 - G__25414_25722) - G__25417_25725));

(dest__7604__auto__[(1)] = ((G__25412_25720 - G__25415_25723) - G__25418_25726));

(dest__7604__auto__[(2)] = ((G__25413_25721 - G__25416_25724) - G__25419_25727));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25424 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25424[(0)]) - x));

(dest__7592__auto__[(1)] = ((G__25424[(1)]) - y));

(dest__7592__auto__[(2)] = ((G__25424[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25437_25728 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25438_25729 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25439_25730 = ((!(G__25437_25728))?typeof a === 'number':null);
var G__25440_25731 = ((!(G__25438_25729))?typeof b === 'number':null);
var G__25425_25732 = self__.buf;
var G__25426_25733 = ((G__25437_25728)?a.buf:null);
var G__25427_25734 = ((G__25438_25729)?b.buf:null);
var G__25428_25735 = (G__25425_25732[(0)]);
var G__25429_25736 = (G__25425_25732[(1)]);
var G__25430_25737 = (G__25425_25732[(2)]);
var G__25431_25738 = ((G__25437_25728)?(G__25426_25733[(0)]):(cljs.core.truth_(G__25439_25730)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25432_25739 = ((G__25437_25728)?(G__25426_25733[(1)]):(cljs.core.truth_(G__25439_25730)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25433_25740 = ((G__25437_25728)?(G__25426_25733[(2)]):(cljs.core.truth_(G__25439_25730)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25434_25741 = ((G__25438_25729)?(G__25427_25734[(0)]):(cljs.core.truth_(G__25440_25731)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25435_25742 = ((G__25438_25729)?(G__25427_25734[(1)]):(cljs.core.truth_(G__25440_25731)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25436_25743 = ((G__25438_25729)?(G__25427_25734[(2)]):(cljs.core.truth_(G__25440_25731)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25428_25735 * G__25431_25738) + G__25434_25741));

(dest__7604__auto__[(1)] = ((G__25429_25736 * G__25432_25739) + G__25435_25742));

(dest__7604__auto__[(2)] = ((G__25430_25737 * G__25433_25740) + G__25436_25743));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25453_25744 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25454_25745 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25455_25746 = ((!(G__25453_25744))?typeof a === 'number':null);
var G__25456_25747 = ((!(G__25454_25745))?typeof b === 'number':null);
var G__25441_25748 = self__.buf;
var G__25442_25749 = ((G__25453_25744)?a.buf:null);
var G__25443_25750 = ((G__25454_25745)?b.buf:null);
var G__25444_25751 = (G__25441_25748[(0)]);
var G__25445_25752 = (G__25441_25748[(1)]);
var G__25446_25753 = (G__25441_25748[(2)]);
var G__25447_25754 = ((G__25453_25744)?(G__25442_25749[(0)]):(cljs.core.truth_(G__25455_25746)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25448_25755 = ((G__25453_25744)?(G__25442_25749[(1)]):(cljs.core.truth_(G__25455_25746)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25449_25756 = ((G__25453_25744)?(G__25442_25749[(2)]):(cljs.core.truth_(G__25455_25746)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25450_25757 = ((G__25454_25745)?(G__25443_25750[(0)]):(cljs.core.truth_(G__25456_25747)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25451_25758 = ((G__25454_25745)?(G__25443_25750[(1)]):(cljs.core.truth_(G__25456_25747)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25452_25759 = ((G__25454_25745)?(G__25443_25750[(2)]):(cljs.core.truth_(G__25456_25747)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25444_25751 + G__25447_25754) * G__25450_25757));

(dest__7604__auto__[(1)] = ((G__25445_25752 + G__25448_25755) * G__25451_25758));

(dest__7604__auto__[(2)] = ((G__25446_25753 + G__25449_25756) * G__25452_25759));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7586__auto__ = (new Float32Array((3)));
var G__25457_25760 = self__.buf;
(dest__7586__auto__[(0)] = ((1) / (G__25457_25760[(0)])));

(dest__7586__auto__[(1)] = ((1) / (G__25457_25760[(1)])));

(dest__7586__auto__[(2)] = ((1) / (G__25457_25760[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__7586__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25458_25761 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25459_25762 = v.buf;
(dest__7598__auto__[(0)] = ((G__25458_25761[(0)]) / (G__25459_25762[(0)])));

(dest__7598__auto__[(1)] = ((G__25458_25761[(1)]) / (G__25459_25762[(1)])));

(dest__7598__auto__[(2)] = ((G__25458_25761[(2)]) / (G__25459_25762[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25458_25761[(0)]) / v));

(dest__7598__auto__[(1)] = ((G__25458_25761[(1)]) / v));

(dest__7598__auto__[(2)] = ((G__25458_25761[(2)]) / v));
} else {
(dest__7598__auto__[(0)] = ((G__25458_25761[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25458_25761[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25458_25761[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25472_25763 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25473_25764 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25474_25765 = ((!(G__25472_25763))?typeof v1 === 'number':null);
var G__25475_25766 = ((!(G__25473_25764))?typeof v2 === 'number':null);
var G__25460_25767 = self__.buf;
var G__25461_25768 = ((G__25472_25763)?v1.buf:null);
var G__25462_25769 = ((G__25473_25764)?v2.buf:null);
var G__25463_25770 = (G__25460_25767[(0)]);
var G__25464_25771 = (G__25460_25767[(1)]);
var G__25465_25772 = (G__25460_25767[(2)]);
var G__25466_25773 = ((G__25472_25763)?(G__25461_25768[(0)]):(cljs.core.truth_(G__25474_25765)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25467_25774 = ((G__25472_25763)?(G__25461_25768[(1)]):(cljs.core.truth_(G__25474_25765)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25468_25775 = ((G__25472_25763)?(G__25461_25768[(2)]):(cljs.core.truth_(G__25474_25765)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25469_25776 = ((G__25473_25764)?(G__25462_25769[(0)]):(cljs.core.truth_(G__25475_25766)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25470_25777 = ((G__25473_25764)?(G__25462_25769[(1)]):(cljs.core.truth_(G__25475_25766)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25471_25778 = ((G__25473_25764)?(G__25462_25769[(2)]):(cljs.core.truth_(G__25475_25766)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25463_25770 / G__25466_25773) / G__25469_25776));

(dest__7604__auto__[(1)] = ((G__25464_25771 / G__25467_25774) / G__25470_25777));

(dest__7604__auto__[(2)] = ((G__25465_25772 / G__25468_25775) / G__25471_25778));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25476 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25476[(0)]) / x));

(dest__7592__auto__[(1)] = ((G__25476[(1)]) / y));

(dest__7592__auto__[(2)] = ((G__25476[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25477_25779 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25478_25780 = v.buf;
(dest__7598__auto__[(0)] = ((G__25477_25779[(0)]) + (G__25478_25780[(0)])));

(dest__7598__auto__[(1)] = ((G__25477_25779[(1)]) + (G__25478_25780[(1)])));

(dest__7598__auto__[(2)] = ((G__25477_25779[(2)]) + (G__25478_25780[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25477_25779[(0)]) + v));

(dest__7598__auto__[(1)] = ((G__25477_25779[(1)]) + v));

(dest__7598__auto__[(2)] = ((G__25477_25779[(2)]) + v));
} else {
(dest__7598__auto__[(0)] = ((G__25477_25779[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25477_25779[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25477_25779[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25491_25781 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25492_25782 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25493_25783 = ((!(G__25491_25781))?typeof v1 === 'number':null);
var G__25494_25784 = ((!(G__25492_25782))?typeof v2 === 'number':null);
var G__25479_25785 = self__.buf;
var G__25480_25786 = ((G__25491_25781)?v1.buf:null);
var G__25481_25787 = ((G__25492_25782)?v2.buf:null);
var G__25482_25788 = (G__25479_25785[(0)]);
var G__25483_25789 = (G__25479_25785[(1)]);
var G__25484_25790 = (G__25479_25785[(2)]);
var G__25485_25791 = ((G__25491_25781)?(G__25480_25786[(0)]):(cljs.core.truth_(G__25493_25783)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25486_25792 = ((G__25491_25781)?(G__25480_25786[(1)]):(cljs.core.truth_(G__25493_25783)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25487_25793 = ((G__25491_25781)?(G__25480_25786[(2)]):(cljs.core.truth_(G__25493_25783)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25488_25794 = ((G__25492_25782)?(G__25481_25787[(0)]):(cljs.core.truth_(G__25494_25784)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25489_25795 = ((G__25492_25782)?(G__25481_25787[(1)]):(cljs.core.truth_(G__25494_25784)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25490_25796 = ((G__25492_25782)?(G__25481_25787[(2)]):(cljs.core.truth_(G__25494_25784)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25482_25788 + G__25485_25791) + G__25488_25794));

(dest__7604__auto__[(1)] = ((G__25483_25789 + G__25486_25792) + G__25489_25795));

(dest__7604__auto__[(2)] = ((G__25484_25790 + G__25487_25793) + G__25490_25796));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25495 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25495[(0)]) + x));

(dest__7592__auto__[(1)] = ((G__25495[(1)]) + y));

(dest__7592__auto__[(2)] = ((G__25495[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7586__auto__ = (new Float32Array((3)));
var G__25496_25797 = self__.buf;
(dest__7586__auto__[(0)] = (function (){var G__25497 = (G__25496_25797[(0)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25497) : thi.ng.common.math.core.abs.call(null,G__25497));
})());

(dest__7586__auto__[(1)] = (function (){var G__25498 = (G__25496_25797[(1)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25498) : thi.ng.common.math.core.abs.call(null,G__25498));
})());

(dest__7586__auto__[(2)] = (function (){var G__25499 = (G__25496_25797[(2)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25499) : thi.ng.common.math.core.abs.call(null,G__25499));
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7586__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25512_25798 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25513_25799 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25514_25800 = ((!(G__25512_25798))?typeof a === 'number':null);
var G__25515_25801 = ((!(G__25513_25799))?typeof b === 'number':null);
var G__25500_25802 = self__.buf;
var G__25501_25803 = ((G__25512_25798)?a.buf:null);
var G__25502_25804 = ((G__25513_25799)?b.buf:null);
var G__25503_25805 = (G__25500_25802[(0)]);
var G__25504_25806 = (G__25500_25802[(1)]);
var G__25505_25807 = (G__25500_25802[(2)]);
var G__25506_25808 = ((G__25512_25798)?(G__25501_25803[(0)]):(cljs.core.truth_(G__25514_25800)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25507_25809 = ((G__25512_25798)?(G__25501_25803[(1)]):(cljs.core.truth_(G__25514_25800)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25508_25810 = ((G__25512_25798)?(G__25501_25803[(2)]):(cljs.core.truth_(G__25514_25800)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25509_25811 = ((G__25513_25799)?(G__25502_25804[(0)]):(cljs.core.truth_(G__25515_25801)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25510_25812 = ((G__25513_25799)?(G__25502_25804[(1)]):(cljs.core.truth_(G__25515_25801)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25511_25813 = ((G__25513_25799)?(G__25502_25804[(2)]):(cljs.core.truth_(G__25515_25801)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25503_25805 - G__25506_25808) * G__25509_25811));

(dest__7604__auto__[(1)] = ((G__25504_25806 - G__25507_25809) * G__25510_25812));

(dest__7604__auto__[(2)] = ((G__25505_25807 - G__25508_25810) * G__25511_25813));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25516_25814 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25517_25815 = v.buf;
(dest__7598__auto__[(0)] = ((G__25516_25814[(0)]) + (G__25517_25815[(0)])));

(dest__7598__auto__[(1)] = ((G__25516_25814[(1)]) + (G__25517_25815[(1)])));

(dest__7598__auto__[(2)] = ((G__25516_25814[(2)]) + (G__25517_25815[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25516_25814[(0)]) + v));

(dest__7598__auto__[(1)] = ((G__25516_25814[(1)]) + v));

(dest__7598__auto__[(2)] = ((G__25516_25814[(2)]) + v));
} else {
(dest__7598__auto__[(0)] = ((G__25516_25814[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25516_25814[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25516_25814[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25530_25816 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25531_25817 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25532_25818 = ((!(G__25530_25816))?typeof v1 === 'number':null);
var G__25533_25819 = ((!(G__25531_25817))?typeof v2 === 'number':null);
var G__25518_25820 = self__.buf;
var G__25519_25821 = ((G__25530_25816)?v1.buf:null);
var G__25520_25822 = ((G__25531_25817)?v2.buf:null);
var G__25521_25823 = (G__25518_25820[(0)]);
var G__25522_25824 = (G__25518_25820[(1)]);
var G__25523_25825 = (G__25518_25820[(2)]);
var G__25524_25826 = ((G__25530_25816)?(G__25519_25821[(0)]):(cljs.core.truth_(G__25532_25818)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25525_25827 = ((G__25530_25816)?(G__25519_25821[(1)]):(cljs.core.truth_(G__25532_25818)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25526_25828 = ((G__25530_25816)?(G__25519_25821[(2)]):(cljs.core.truth_(G__25532_25818)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25527_25829 = ((G__25531_25817)?(G__25520_25822[(0)]):(cljs.core.truth_(G__25533_25819)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25528_25830 = ((G__25531_25817)?(G__25520_25822[(1)]):(cljs.core.truth_(G__25533_25819)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25529_25831 = ((G__25531_25817)?(G__25520_25822[(2)]):(cljs.core.truth_(G__25533_25819)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = ((G__25521_25823 + G__25524_25826) + G__25527_25829));

(dest__7604__auto__[(1)] = ((G__25522_25824 + G__25525_25827) + G__25528_25830));

(dest__7604__auto__[(2)] = ((G__25523_25825 + G__25526_25828) + G__25529_25831));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25534 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25534[(0)]) + x));

(dest__7592__auto__[(1)] = ((G__25534[(1)]) + y));

(dest__7592__auto__[(2)] = ((G__25534[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_((function (){var G__25535 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25535) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25535));
})())){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$w,k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3((function (){var G__25536 = self__.buf;
var G__25537 = (new Float32Array(self__.buf));
var G__25538 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__25539 = k;
var G__25540 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__25536,G__25537,G__25538,G__25539,G__25540) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__25536,G__25537,G__25538,G__25539,G__25540));
})(),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25541_25832 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25542_25833 = v.buf;
(dest__7598__auto__[(0)] = ((G__25541_25832[(0)]) * (G__25542_25833[(0)])));

(dest__7598__auto__[(1)] = ((G__25541_25832[(1)]) * (G__25542_25833[(1)])));

(dest__7598__auto__[(2)] = ((G__25541_25832[(2)]) * (G__25542_25833[(2)])));
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = ((G__25541_25832[(0)]) * v));

(dest__7598__auto__[(1)] = ((G__25541_25832[(1)]) * v));

(dest__7598__auto__[(2)] = ((G__25541_25832[(2)]) * v));
} else {
(dest__7598__auto__[(0)] = ((G__25541_25832[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7598__auto__[(1)] = ((G__25541_25832[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7598__auto__[(2)] = ((G__25541_25832[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25555_25834 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25556_25835 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25557_25836 = ((!(G__25555_25834))?typeof v1 === 'number':null);
var G__25558_25837 = ((!(G__25556_25835))?typeof v2 === 'number':null);
var G__25543_25838 = self__.buf;
var G__25544_25839 = ((G__25555_25834)?v1.buf:null);
var G__25545_25840 = ((G__25556_25835)?v2.buf:null);
var G__25546_25841 = (G__25543_25838[(0)]);
var G__25547_25842 = (G__25543_25838[(1)]);
var G__25548_25843 = (G__25543_25838[(2)]);
var G__25549_25844 = ((G__25555_25834)?(G__25544_25839[(0)]):(cljs.core.truth_(G__25557_25836)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__25550_25845 = ((G__25555_25834)?(G__25544_25839[(1)]):(cljs.core.truth_(G__25557_25836)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__25551_25846 = ((G__25555_25834)?(G__25544_25839[(2)]):(cljs.core.truth_(G__25557_25836)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),1.0)));
var G__25552_25847 = ((G__25556_25835)?(G__25545_25840[(0)]):(cljs.core.truth_(G__25558_25837)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__25553_25848 = ((G__25556_25835)?(G__25545_25840[(1)]):(cljs.core.truth_(G__25558_25837)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
var G__25554_25849 = ((G__25556_25835)?(G__25545_25840[(2)]):(cljs.core.truth_(G__25558_25837)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),1.0)));
(dest__7604__auto__[(0)] = ((G__25546_25841 * G__25549_25844) * G__25552_25847));

(dest__7604__auto__[(1)] = ((G__25547_25842 * G__25550_25845) * G__25553_25848));

(dest__7604__auto__[(2)] = ((G__25548_25843 * G__25551_25846) * G__25554_25849));

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25559 = self__.buf;
var dest__7592__auto__ = (new Float32Array((3)));
(dest__7592__auto__[(0)] = ((G__25559[(0)]) * x));

(dest__7592__auto__[(1)] = ((G__25559[(1)]) * y));

(dest__7592__auto__[(2)] = ((G__25559[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__7592__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__25850 = null;
var G__25850__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25560 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25560) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25560));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25561 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25561) : f.call(null,G__25561));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});
var G__25850__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25562 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25562) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25562));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25563 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25563) : f.call(null,G__25563));
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__25850 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__25850__2.call(this,self__,k);
case 3:
return G__25850__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25850.cljs$core$IFn$_invoke$arity$2 = G__25850__2;
G__25850.cljs$core$IFn$_invoke$arity$3 = G__25850__3;
return G__25850;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args25270){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25270)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25564 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25564) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25564));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25565 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25565) : f.call(null,G__25565));
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25566 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25566) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25566));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25567 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25567) : f.call(null,G__25567));
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25568_25851 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25569_25852 = v.buf;
(dest__7598__auto__[(0)] = (function (){var a__7136__auto__ = (G__25568_25851[(0)]);
var b__7137__auto__ = (G__25569_25852[(0)]);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7136__auto__ = (G__25568_25851[(1)]);
var b__7137__auto__ = (G__25569_25852[(1)]);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7136__auto__ = (G__25568_25851[(2)]);
var b__7137__auto__ = (G__25569_25852[(2)]);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = (function (){var a__7136__auto__ = (G__25568_25851[(0)]);
var b__7137__auto__ = v;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7136__auto__ = (G__25568_25851[(1)]);
var b__7137__auto__ = v;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7136__auto__ = (G__25568_25851[(2)]);
var b__7137__auto__ = v;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
} else {
(dest__7598__auto__[(0)] = (function (){var a__7136__auto__ = (G__25568_25851[(0)]);
var b__7137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7136__auto__ = (G__25568_25851[(1)]);
var b__7137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7136__auto__ = (G__25568_25851[(2)]);
var b__7137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25582_25853 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__25583_25854 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25584_25855 = ((!(G__25582_25853))?typeof v === 'number':null);
var G__25585_25856 = ((!(G__25583_25854))?typeof v2 === 'number':null);
var G__25570_25857 = self__.buf;
var G__25571_25858 = ((G__25582_25853)?v.buf:null);
var G__25572_25859 = ((G__25583_25854)?v2.buf:null);
var G__25573_25860 = (G__25570_25857[(0)]);
var G__25574_25861 = (G__25570_25857[(1)]);
var G__25575_25862 = (G__25570_25857[(2)]);
var G__25576_25863 = ((G__25582_25853)?(G__25571_25858[(0)]):(cljs.core.truth_(G__25584_25855)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25577_25864 = ((G__25582_25853)?(G__25571_25858[(1)]):(cljs.core.truth_(G__25584_25855)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25578_25865 = ((G__25582_25853)?(G__25571_25858[(2)]):(cljs.core.truth_(G__25584_25855)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__25579_25866 = ((G__25583_25854)?(G__25572_25859[(0)]):(cljs.core.truth_(G__25585_25856)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25580_25867 = ((G__25583_25854)?(G__25572_25859[(1)]):(cljs.core.truth_(G__25585_25856)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25581_25868 = ((G__25583_25854)?(G__25572_25859[(2)]):(cljs.core.truth_(G__25585_25856)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = (function (){var a__7136__auto__ = (function (){var a__7136__auto__ = G__25573_25860;
var b__7137__auto__ = G__25576_25863;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})();
var b__7137__auto__ = G__25579_25866;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7604__auto__[(1)] = (function (){var a__7136__auto__ = (function (){var a__7136__auto__ = G__25574_25861;
var b__7137__auto__ = G__25577_25864;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})();
var b__7137__auto__ = G__25580_25867;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

(dest__7604__auto__[(2)] = (function (){var a__7136__auto__ = (function (){var a__7136__auto__ = G__25575_25862;
var b__7137__auto__ = G__25578_25865;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})();
var b__7137__auto__ = G__25581_25868;
if((a__7136__auto__ <= b__7137__auto__)){
return a__7136__auto__;
} else {
return b__7137__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7598__auto__ = (new Float32Array((3)));
var G__25586_25869 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25587_25870 = v.buf;
(dest__7598__auto__[(0)] = (function (){var a__7143__auto__ = (G__25586_25869[(0)]);
var b__7144__auto__ = (G__25587_25870[(0)]);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7143__auto__ = (G__25586_25869[(1)]);
var b__7144__auto__ = (G__25587_25870[(1)]);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7143__auto__ = (G__25586_25869[(2)]);
var b__7144__auto__ = (G__25587_25870[(2)]);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7598__auto__[(0)] = (function (){var a__7143__auto__ = (G__25586_25869[(0)]);
var b__7144__auto__ = v;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7143__auto__ = (G__25586_25869[(1)]);
var b__7144__auto__ = v;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7143__auto__ = (G__25586_25869[(2)]);
var b__7144__auto__ = v;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
} else {
(dest__7598__auto__[(0)] = (function (){var a__7143__auto__ = (G__25586_25869[(0)]);
var b__7144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(1)] = (function (){var a__7143__auto__ = (G__25586_25869[(1)]);
var b__7144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7598__auto__[(2)] = (function (){var a__7143__auto__ = (G__25586_25869[(2)]);
var b__7144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7598__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7604__auto__ = (new Float32Array((3)));
var G__25600_25871 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__25601_25872 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25602_25873 = ((!(G__25600_25871))?typeof v === 'number':null);
var G__25603_25874 = ((!(G__25601_25872))?typeof v2 === 'number':null);
var G__25588_25875 = self__.buf;
var G__25589_25876 = ((G__25600_25871)?v.buf:null);
var G__25590_25877 = ((G__25601_25872)?v2.buf:null);
var G__25591_25878 = (G__25588_25875[(0)]);
var G__25592_25879 = (G__25588_25875[(1)]);
var G__25593_25880 = (G__25588_25875[(2)]);
var G__25594_25881 = ((G__25600_25871)?(G__25589_25876[(0)]):(cljs.core.truth_(G__25602_25873)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25595_25882 = ((G__25600_25871)?(G__25589_25876[(1)]):(cljs.core.truth_(G__25602_25873)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25596_25883 = ((G__25600_25871)?(G__25589_25876[(2)]):(cljs.core.truth_(G__25602_25873)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__25597_25884 = ((G__25601_25872)?(G__25590_25877[(0)]):(cljs.core.truth_(G__25603_25874)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25598_25885 = ((G__25601_25872)?(G__25590_25877[(1)]):(cljs.core.truth_(G__25603_25874)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25599_25886 = ((G__25601_25872)?(G__25590_25877[(2)]):(cljs.core.truth_(G__25603_25874)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7604__auto__[(0)] = (function (){var a__7143__auto__ = (function (){var a__7143__auto__ = G__25591_25878;
var b__7144__auto__ = G__25594_25881;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})();
var b__7144__auto__ = G__25597_25884;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7604__auto__[(1)] = (function (){var a__7143__auto__ = (function (){var a__7143__auto__ = G__25592_25879;
var b__7144__auto__ = G__25595_25882;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})();
var b__7144__auto__ = G__25598_25885;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

(dest__7604__auto__[(2)] = (function (){var a__7143__auto__ = (function (){var a__7143__auto__ = G__25593_25880;
var b__7144__auto__ = G__25596_25883;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})();
var b__7144__auto__ = G__25599_25886;
if((a__7143__auto__ >= b__7144__auto__)){
return a__7143__auto__;
} else {
return b__7144__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7604__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((function (){var G__25604 = f;
var G__25605 = ___$1;
var G__25606 = xs;
return (thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25604,G__25605,G__25606) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,G__25604,G__25605,G__25606));
})(),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var b = (function (){var G__25607 = f;
var G__25608 = ___$1;
var G__25609 = xs;
return (thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25607,G__25608,G__25609) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,G__25607,G__25608,G__25609));
})();
(b[(0)] = (function (){var G__25610 = (b[(0)]);
var G__25611 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25610,G__25611) : f2.call(null,G__25610,G__25611));
})());

(b[(1)] = (function (){var G__25612 = (b[(1)]);
var G__25613 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25612,G__25613) : f2.call(null,G__25612,G__25613));
})());

(b[(2)] = (function (){var G__25614 = (b[(2)]);
var G__25615 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25614,G__25615) : f2.call(null,G__25614,G__25615));
})());

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,v,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if((cljs.core.sequential_QMARK_(v)) && (((3) === cljs.core.count(v)))){
var G__25616 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25617 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(0)]),(G__25617[(0)]),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(1)]),(G__25617[(1)]),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(2)]),(G__25617[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25616[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25618 = self__.buf;
var G__25619 = (G__25618[(0)]);
var G__25620 = (G__25618[(1)]);
var G__25621 = (G__25618[(2)]);
var G__25622 = (((G__25619 * G__25619) + (G__25620 * G__25620)) + (G__25621 * G__25621));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25622) : Math.sqrt.call(null,G__25622));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25623 = self__.buf;
var G__25624 = (G__25623[(0)]);
var G__25625 = (G__25623[(1)]);
var G__25626 = (G__25623[(2)]);
return (((G__25624 * G__25624) + (G__25625 * G__25625)) + (G__25626 * G__25626));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__25627_25887 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25628_25888 = v.buf;
(b[(0)] = (((G__25627_25887[(0)]) + (G__25628_25888[(0)])) * 0.5));

(b[(1)] = (((G__25627_25887[(1)]) + (G__25628_25888[(1)])) * 0.5));

(b[(2)] = (((G__25627_25887[(2)]) + (G__25628_25888[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__25627_25887[(0)]) + v) * 0.5));

(b[(1)] = (((G__25627_25887[(1)]) + v) * 0.5));

(b[(2)] = (((G__25627_25887[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__25627_25887[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__25627_25887[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__25627_25887[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__25641_25889 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__25642_25890 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25643_25891 = ((!(G__25641_25889))?typeof v === 'number':null);
var G__25644_25892 = ((!(G__25642_25890))?typeof v2 === 'number':null);
var G__25629_25893 = self__.buf;
var G__25630_25894 = ((G__25641_25889)?v.buf:null);
var G__25631_25895 = ((G__25642_25890)?v2.buf:null);
var G__25632_25896 = (G__25629_25893[(0)]);
var G__25633_25897 = (G__25629_25893[(1)]);
var G__25634_25898 = (G__25629_25893[(2)]);
var G__25635_25899 = ((G__25641_25889)?(G__25630_25894[(0)]):(cljs.core.truth_(G__25643_25891)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25636_25900 = ((G__25641_25889)?(G__25630_25894[(1)]):(cljs.core.truth_(G__25643_25891)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25637_25901 = ((G__25641_25889)?(G__25630_25894[(2)]):(cljs.core.truth_(G__25643_25891)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__25638_25902 = ((G__25642_25890)?(G__25631_25895[(0)]):(cljs.core.truth_(G__25644_25892)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25639_25903 = ((G__25642_25890)?(G__25631_25895[(1)]):(cljs.core.truth_(G__25644_25892)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25640_25904 = ((G__25642_25890)?(G__25631_25895[(2)]):(cljs.core.truth_(G__25644_25892)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(b[(0)] = (((G__25635_25899 - G__25632_25896) * G__25638_25902) + G__25632_25896));

(b[(1)] = (((G__25636_25900 - G__25633_25897) * G__25639_25903) + G__25633_25897));

(b[(2)] = (((G__25637_25901 - G__25634_25898) * G__25640_25904) + G__25634_25898));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__25657_25905 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25658_25906 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__25659_25907 = ((!(G__25657_25905))?typeof b === 'number':null);
var G__25660_25908 = ((!(G__25658_25906))?typeof c === 'number':null);
var G__25645_25909 = self__.buf;
var G__25646_25910 = ((G__25657_25905)?b.buf:null);
var G__25647_25911 = ((G__25658_25906)?c.buf:null);
var G__25648_25912 = (G__25645_25909[(0)]);
var G__25649_25913 = (G__25645_25909[(1)]);
var G__25650_25914 = (G__25645_25909[(2)]);
var G__25651_25915 = ((G__25657_25905)?(G__25646_25910[(0)]):(cljs.core.truth_(G__25659_25907)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25652_25916 = ((G__25657_25905)?(G__25646_25910[(1)]):(cljs.core.truth_(G__25659_25907)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25653_25917 = ((G__25657_25905)?(G__25646_25910[(2)]):(cljs.core.truth_(G__25659_25907)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__25654_25918 = ((G__25658_25906)?(G__25647_25911[(0)]):(cljs.core.truth_(G__25660_25908)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__25655_25919 = ((G__25658_25906)?(G__25647_25911[(1)]):(cljs.core.truth_(G__25660_25908)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__25656_25920 = ((G__25658_25906)?(G__25647_25911[(2)]):(cljs.core.truth_(G__25660_25908)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_25921 = (((G__25651_25915 - G__25648_25912) * u) + G__25648_25912);
var y1_25922 = (((G__25652_25916 - G__25649_25913) * u) + G__25649_25913);
var z1_25923 = (((G__25653_25917 - G__25650_25914) * u) + G__25650_25914);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__25654_25918) * u) + G__25654_25918) - x1_25921) * v) + x1_25921));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__25655_25919) * u) + G__25655_25919) - y1_25922) * v) + y1_25922));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__25656_25920) * u) + G__25656_25920) - z1_25923) * v) + z1_25923));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared(___$1) > (len * len))){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag(___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = (function (){var G__25661 = ((self__.buf[(2)]) / r);
return (Math.asin.cljs$core$IFn$_invoke$arity$1 ? Math.asin.cljs$core$IFn$_invoke$arity$1(G__25661) : Math.asin.call(null,G__25661));
})());

(b[(2)] = (function (){var G__25662 = (self__.buf[(1)]);
var G__25663 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25662,G__25663) : Math.atan2.call(null,G__25662,G__25663));
})());

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * (function (){var G__25333 = y;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25333) : Math.cos.call(null,G__25333));
})());
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * (function (){var G__25334 = z;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25334) : Math.cos.call(null,G__25334));
})()));

(b_SINGLEQUOTE_[(1)] = (rcos * (function (){var G__25335 = z;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25335) : Math.sin.call(null,G__25335));
})()));

(b_SINGLEQUOTE_[(2)] = (x * (function (){var G__25336 = y;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25336) : Math.sin.call(null,G__25336));
})()));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__25926){
var G__25924 = (((G__25926 instanceof thi.ng.geom.core.vector.Vec2))?G__25926.buf:G__25926.buf);
return (G__25924[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__25929){
var G__25927 = (((G__25929 instanceof thi.ng.geom.core.vector.Vec2))?G__25929.buf:G__25929.buf);
var G__25928 = (new Float32Array(2));
(G__25928[(0)] = (G__25927[(0)]));

(G__25928[(1)] = (G__25927[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__25928,null,cljs.core.meta(G__25929)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__25932){
var G__25930 = (((G__25932 instanceof thi.ng.geom.core.vector.Vec2))?G__25932.buf:G__25932.buf);
var G__25931 = (new Float32Array(3));
(G__25931[(0)] = (G__25930[(0)]));

(G__25931[(1)] = (G__25930[(0)]));

(G__25931[(2)] = (G__25930[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25931,null,cljs.core.meta(G__25932)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__25935){
var G__25933 = (((G__25935 instanceof thi.ng.geom.core.vector.Vec2))?G__25935.buf:G__25935.buf);
var G__25934 = (new Float32Array(3));
(G__25934[(0)] = (G__25933[(0)]));

(G__25934[(1)] = (G__25933[(0)]));

(G__25934[(2)] = (G__25933[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25934,null,cljs.core.meta(G__25935)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__25938){
if((G__25938 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25938","G__25938",1947393401,null))], 0)))].join('')));
}

var G__25936 = (((G__25938 instanceof thi.ng.geom.core.vector.Vec2))?G__25938.buf:G__25938.buf);
var G__25937 = (new Float32Array(3));
(G__25937[(0)] = (G__25936[(0)]));

(G__25937[(1)] = (G__25936[(0)]));

(G__25937[(2)] = (G__25936[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__25937,null,cljs.core.meta(G__25938)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__25941){
var G__25939 = (((G__25941 instanceof thi.ng.geom.core.vector.Vec2))?G__25941.buf:G__25941.buf);
var G__25940 = (new Float32Array(2));
(G__25940[(0)] = (G__25939[(0)]));

(G__25940[(1)] = (G__25939[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__25940,null,cljs.core.meta(G__25941)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__25944){
var G__25942 = (((G__25944 instanceof thi.ng.geom.core.vector.Vec2))?G__25944.buf:G__25944.buf);
var G__25943 = (new Float32Array(3));
(G__25943[(0)] = (G__25942[(0)]));

(G__25943[(1)] = (G__25942[(1)]));

(G__25943[(2)] = (G__25942[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25943,null,cljs.core.meta(G__25944)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__25947){
var G__25945 = (((G__25947 instanceof thi.ng.geom.core.vector.Vec2))?G__25947.buf:G__25947.buf);
var G__25946 = (new Float32Array(3));
(G__25946[(0)] = (G__25945[(0)]));

(G__25946[(1)] = (G__25945[(1)]));

(G__25946[(2)] = (G__25945[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25946,null,cljs.core.meta(G__25947)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__25950){
if((G__25950 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25950","G__25950",-1075982600,null))], 0)))].join('')));
}

var G__25948 = (((G__25950 instanceof thi.ng.geom.core.vector.Vec2))?G__25950.buf:G__25950.buf);
var G__25949 = (new Float32Array(3));
(G__25949[(0)] = (G__25948[(0)]));

(G__25949[(1)] = (G__25948[(1)]));

(G__25949[(2)] = (G__25948[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__25949,null,cljs.core.meta(G__25950)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__25953){
if((G__25953 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25953","G__25953",-1802191790,null))], 0)))].join('')));
}

var G__25951 = (((G__25953 instanceof thi.ng.geom.core.vector.Vec2))?G__25953.buf:G__25953.buf);
var G__25952 = (new Float32Array(2));
(G__25952[(0)] = (G__25951[(0)]));

(G__25952[(1)] = (G__25951[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__25952,null,cljs.core.meta(G__25953)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__25956){
if((G__25956 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25956","G__25956",-734525188,null))], 0)))].join('')));
}

var G__25954 = (((G__25956 instanceof thi.ng.geom.core.vector.Vec2))?G__25956.buf:G__25956.buf);
var G__25955 = (new Float32Array(3));
(G__25955[(0)] = (G__25954[(0)]));

(G__25955[(1)] = (G__25954[(2)]));

(G__25955[(2)] = (G__25954[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25955,null,cljs.core.meta(G__25956)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__25959){
if((G__25959 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25959","G__25959",-753548074,null))], 0)))].join('')));
}

var G__25957 = (((G__25959 instanceof thi.ng.geom.core.vector.Vec2))?G__25959.buf:G__25959.buf);
var G__25958 = (new Float32Array(3));
(G__25958[(0)] = (G__25957[(0)]));

(G__25958[(1)] = (G__25957[(2)]));

(G__25958[(2)] = (G__25957[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25958,null,cljs.core.meta(G__25959)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__25962){
if((G__25962 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25962","G__25962",1379849705,null))], 0)))].join('')));
}

var G__25960 = (((G__25962 instanceof thi.ng.geom.core.vector.Vec2))?G__25962.buf:G__25962.buf);
var G__25961 = (new Float32Array(3));
(G__25961[(0)] = (G__25960[(0)]));

(G__25961[(1)] = (G__25960[(2)]));

(G__25961[(2)] = (G__25960[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__25961,null,cljs.core.meta(G__25962)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__25965){
var G__25963 = (((G__25965 instanceof thi.ng.geom.core.vector.Vec2))?G__25965.buf:G__25965.buf);
return (G__25963[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__25968){
var G__25966 = (((G__25968 instanceof thi.ng.geom.core.vector.Vec2))?G__25968.buf:G__25968.buf);
var G__25967 = (new Float32Array(2));
(G__25967[(0)] = (G__25966[(1)]));

(G__25967[(1)] = (G__25966[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__25967,null,cljs.core.meta(G__25968)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__25971){
var G__25969 = (((G__25971 instanceof thi.ng.geom.core.vector.Vec2))?G__25971.buf:G__25971.buf);
var G__25970 = (new Float32Array(3));
(G__25970[(0)] = (G__25969[(1)]));

(G__25970[(1)] = (G__25969[(0)]));

(G__25970[(2)] = (G__25969[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25970,null,cljs.core.meta(G__25971)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__25974){
var G__25972 = (((G__25974 instanceof thi.ng.geom.core.vector.Vec2))?G__25974.buf:G__25974.buf);
var G__25973 = (new Float32Array(3));
(G__25973[(0)] = (G__25972[(1)]));

(G__25973[(1)] = (G__25972[(0)]));

(G__25973[(2)] = (G__25972[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25973,null,cljs.core.meta(G__25974)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__25977){
if((G__25977 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25977","G__25977",-368899085,null))], 0)))].join('')));
}

var G__25975 = (((G__25977 instanceof thi.ng.geom.core.vector.Vec2))?G__25977.buf:G__25977.buf);
var G__25976 = (new Float32Array(3));
(G__25976[(0)] = (G__25975[(1)]));

(G__25976[(1)] = (G__25975[(0)]));

(G__25976[(2)] = (G__25975[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__25976,null,cljs.core.meta(G__25977)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__25980){
var G__25978 = (((G__25980 instanceof thi.ng.geom.core.vector.Vec2))?G__25980.buf:G__25980.buf);
var G__25979 = (new Float32Array(2));
(G__25979[(0)] = (G__25978[(1)]));

(G__25979[(1)] = (G__25978[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__25979,null,cljs.core.meta(G__25980)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__25983){
var G__25981 = (((G__25983 instanceof thi.ng.geom.core.vector.Vec2))?G__25983.buf:G__25983.buf);
var G__25982 = (new Float32Array(3));
(G__25982[(0)] = (G__25981[(1)]));

(G__25982[(1)] = (G__25981[(1)]));

(G__25982[(2)] = (G__25981[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25982,null,cljs.core.meta(G__25983)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__25986){
var G__25984 = (((G__25986 instanceof thi.ng.geom.core.vector.Vec2))?G__25986.buf:G__25986.buf);
var G__25985 = (new Float32Array(3));
(G__25985[(0)] = (G__25984[(1)]));

(G__25985[(1)] = (G__25984[(1)]));

(G__25985[(2)] = (G__25984[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25985,null,cljs.core.meta(G__25986)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__25989){
if((G__25989 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25989","G__25989",-990751089,null))], 0)))].join('')));
}

var G__25987 = (((G__25989 instanceof thi.ng.geom.core.vector.Vec2))?G__25989.buf:G__25989.buf);
var G__25988 = (new Float32Array(3));
(G__25988[(0)] = (G__25987[(1)]));

(G__25988[(1)] = (G__25987[(1)]));

(G__25988[(2)] = (G__25987[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__25988,null,cljs.core.meta(G__25989)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__25992){
if((G__25992 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25992","G__25992",749586270,null))], 0)))].join('')));
}

var G__25990 = (((G__25992 instanceof thi.ng.geom.core.vector.Vec2))?G__25992.buf:G__25992.buf);
var G__25991 = (new Float32Array(2));
(G__25991[(0)] = (G__25990[(1)]));

(G__25991[(1)] = (G__25990[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__25991,null,cljs.core.meta(G__25992)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__25995){
if((G__25995 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25995","G__25995",-1634752390,null))], 0)))].join('')));
}

var G__25993 = (((G__25995 instanceof thi.ng.geom.core.vector.Vec2))?G__25995.buf:G__25995.buf);
var G__25994 = (new Float32Array(3));
(G__25994[(0)] = (G__25993[(1)]));

(G__25994[(1)] = (G__25993[(2)]));

(G__25994[(2)] = (G__25993[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__25994,null,cljs.core.meta(G__25995)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__25998){
if((G__25998 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__25998","G__25998",-1803358199,null))], 0)))].join('')));
}

var G__25996 = (((G__25998 instanceof thi.ng.geom.core.vector.Vec2))?G__25998.buf:G__25998.buf);
var G__25997 = (new Float32Array(3));
(G__25997[(0)] = (G__25996[(1)]));

(G__25997[(1)] = (G__25996[(2)]));

(G__25997[(2)] = (G__25996[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__25997,null,cljs.core.meta(G__25998)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__26001){
if((G__26001 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26001","G__26001",352040405,null))], 0)))].join('')));
}

var G__25999 = (((G__26001 instanceof thi.ng.geom.core.vector.Vec2))?G__26001.buf:G__26001.buf);
var G__26000 = (new Float32Array(3));
(G__26000[(0)] = (G__25999[(1)]));

(G__26000[(1)] = (G__25999[(2)]));

(G__26000[(2)] = (G__25999[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26000,null,cljs.core.meta(G__26001)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__26004){
if((G__26004 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26004","G__26004",2112334,null))], 0)))].join('')));
}

var G__26002 = (((G__26004 instanceof thi.ng.geom.core.vector.Vec2))?G__26004.buf:G__26004.buf);
return (G__26002[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__26007){
if((G__26007 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26007","G__26007",-18670122,null))], 0)))].join('')));
}

var G__26005 = (((G__26007 instanceof thi.ng.geom.core.vector.Vec2))?G__26007.buf:G__26007.buf);
var G__26006 = (new Float32Array(2));
(G__26006[(0)] = (G__26005[(2)]));

(G__26006[(1)] = (G__26005[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__26006,null,cljs.core.meta(G__26007)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__26010){
if((G__26010 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26010","G__26010",-1987635949,null))], 0)))].join('')));
}

var G__26008 = (((G__26010 instanceof thi.ng.geom.core.vector.Vec2))?G__26010.buf:G__26010.buf);
var G__26009 = (new Float32Array(3));
(G__26009[(0)] = (G__26008[(2)]));

(G__26009[(1)] = (G__26008[(0)]));

(G__26009[(2)] = (G__26008[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26009,null,cljs.core.meta(G__26010)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__26013){
if((G__26013 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26013","G__26013",-1139861360,null))], 0)))].join('')));
}

var G__26011 = (((G__26013 instanceof thi.ng.geom.core.vector.Vec2))?G__26013.buf:G__26013.buf);
var G__26012 = (new Float32Array(3));
(G__26012[(0)] = (G__26011[(2)]));

(G__26012[(1)] = (G__26011[(0)]));

(G__26012[(2)] = (G__26011[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26012,null,cljs.core.meta(G__26013)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__26016){
if((G__26016 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26016","G__26016",982133424,null))], 0)))].join('')));
}

var G__26014 = (((G__26016 instanceof thi.ng.geom.core.vector.Vec2))?G__26016.buf:G__26016.buf);
var G__26015 = (new Float32Array(3));
(G__26015[(0)] = (G__26014[(2)]));

(G__26015[(1)] = (G__26014[(0)]));

(G__26015[(2)] = (G__26014[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26015,null,cljs.core.meta(G__26016)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__26019){
if((G__26019 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26019","G__26019",214199338,null))], 0)))].join('')));
}

var G__26017 = (((G__26019 instanceof thi.ng.geom.core.vector.Vec2))?G__26019.buf:G__26019.buf);
var G__26018 = (new Float32Array(2));
(G__26018[(0)] = (G__26017[(2)]));

(G__26018[(1)] = (G__26017[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__26018,null,cljs.core.meta(G__26019)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__26022){
if((G__26022 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26022","G__26022",-257268829,null))], 0)))].join('')));
}

var G__26020 = (((G__26022 instanceof thi.ng.geom.core.vector.Vec2))?G__26022.buf:G__26022.buf);
var G__26021 = (new Float32Array(3));
(G__26021[(0)] = (G__26020[(2)]));

(G__26021[(1)] = (G__26020[(1)]));

(G__26021[(2)] = (G__26020[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26021,null,cljs.core.meta(G__26022)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__26025){
if((G__26025 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26025","G__26025",1305126755,null))], 0)))].join('')));
}

var G__26023 = (((G__26025 instanceof thi.ng.geom.core.vector.Vec2))?G__26025.buf:G__26025.buf);
var G__26024 = (new Float32Array(3));
(G__26024[(0)] = (G__26023[(2)]));

(G__26024[(1)] = (G__26023[(1)]));

(G__26024[(2)] = (G__26023[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26024,null,cljs.core.meta(G__26025)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__26028){
if((G__26028 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26028","G__26028",-134734386,null))], 0)))].join('')));
}

var G__26026 = (((G__26028 instanceof thi.ng.geom.core.vector.Vec2))?G__26028.buf:G__26028.buf);
var G__26027 = (new Float32Array(3));
(G__26027[(0)] = (G__26026[(2)]));

(G__26027[(1)] = (G__26026[(1)]));

(G__26027[(2)] = (G__26026[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26027,null,cljs.core.meta(G__26028)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__26031){
if((G__26031 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26031","G__26031",-572156499,null))], 0)))].join('')));
}

var G__26029 = (((G__26031 instanceof thi.ng.geom.core.vector.Vec2))?G__26031.buf:G__26031.buf);
var G__26030 = (new Float32Array(2));
(G__26030[(0)] = (G__26029[(2)]));

(G__26030[(1)] = (G__26029[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__26030,null,cljs.core.meta(G__26031)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__26034){
if((G__26034 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26034","G__26034",-870166767,null))], 0)))].join('')));
}

var G__26032 = (((G__26034 instanceof thi.ng.geom.core.vector.Vec2))?G__26034.buf:G__26034.buf);
var G__26033 = (new Float32Array(3));
(G__26033[(0)] = (G__26032[(2)]));

(G__26033[(1)] = (G__26032[(2)]));

(G__26033[(2)] = (G__26032[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26033,null,cljs.core.meta(G__26034)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__26037){
if((G__26037 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26037","G__26037",-1531055166,null))], 0)))].join('')));
}

var G__26035 = (((G__26037 instanceof thi.ng.geom.core.vector.Vec2))?G__26037.buf:G__26037.buf);
var G__26036 = (new Float32Array(3));
(G__26036[(0)] = (G__26035[(2)]));

(G__26036[(1)] = (G__26035[(2)]));

(G__26036[(2)] = (G__26035[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26036,null,cljs.core.meta(G__26037)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__26040){
if((G__26040 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26040","G__26040",45816312,null))], 0)))].join('')));
}

var G__26038 = (((G__26040 instanceof thi.ng.geom.core.vector.Vec2))?G__26040.buf:G__26040.buf);
var G__26039 = (new Float32Array(3));
(G__26039[(0)] = (G__26038[(2)]));

(G__26039[(1)] = (G__26038[(2)]));

(G__26039[(2)] = (G__26038[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26039,null,cljs.core.meta(G__26040)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$x,thi.ng.geom.core.vector.x,cljs.core.constant$keyword$xx,thi.ng.geom.core.vector.xx,cljs.core.constant$keyword$xy,thi.ng.geom.core.vector.xy,cljs.core.constant$keyword$y,thi.ng.geom.core.vector.y,cljs.core.constant$keyword$yx,thi.ng.geom.core.vector.yx,cljs.core.constant$keyword$yy,thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$y,cljs.core.constant$keyword$xzx,cljs.core.constant$keyword$xyz,cljs.core.constant$keyword$zzy,cljs.core.constant$keyword$yx,cljs.core.constant$keyword$xy,cljs.core.constant$keyword$yyz,cljs.core.constant$keyword$zxy,cljs.core.constant$keyword$xzy,cljs.core.constant$keyword$zxz,cljs.core.constant$keyword$zx,cljs.core.constant$keyword$xx,cljs.core.constant$keyword$xxx,cljs.core.constant$keyword$zy,cljs.core.constant$keyword$zzx,cljs.core.constant$keyword$zyx,cljs.core.constant$keyword$yzx,cljs.core.constant$keyword$z,cljs.core.constant$keyword$yyx,cljs.core.constant$keyword$xz,cljs.core.constant$keyword$zyz,cljs.core.constant$keyword$yy,cljs.core.constant$keyword$xxz,cljs.core.constant$keyword$yzy,cljs.core.constant$keyword$yz,cljs.core.constant$keyword$yxx,cljs.core.constant$keyword$xyy,cljs.core.constant$keyword$xxy,cljs.core.constant$keyword$zz,cljs.core.constant$keyword$zzz,cljs.core.constant$keyword$x,cljs.core.constant$keyword$xzz,cljs.core.constant$keyword$yxz,cljs.core.constant$keyword$zxx,cljs.core.constant$keyword$yzz,cljs.core.constant$keyword$xyx,cljs.core.constant$keyword$yxy,cljs.core.constant$keyword$yyy,cljs.core.constant$keyword$zyy],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = cljs.core.count(n);
var temp__4420__auto__ = (function (){var and__12563__auto__ = ((1) === c);
if(and__12563__auto__){
var G__26046 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__26046) : keymap.call(null,G__26046));
} else {
return and__12563__auto__;
}
})();
if(cljs.core.truth_(temp__4420__auto__)){
var idx = temp__4420__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count(keymap))) && (((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4420__auto____$1 = (function (){var G__26047 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__26047) : keymap.call(null,G__26047));
})();
if(cljs.core.truth_(temp__4420__auto____$1)){
var idx = temp__4420__auto____$1;
(dest[(idx | (0))] = (function (){var G__26048 = i;
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__26048) : v.call(null,G__26048));
})());

var G__26049 = (i + (1));
var G__26050 = cljs.core.next(n__$1);
i = G__26049;
n__$1 = G__26050;
continue;
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
var b = acc.buf;
var ax = (b[(0)]);
var ay = (b[(1)]);
var xs__$1 = xs;
while(true){
if(cljs.core.truth_(xs__$1)){
var v = cljs.core.first(xs__$1).buf;
var G__26059 = (function (){var G__26055 = ax;
var G__26056 = (v[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26055,G__26056) : op.call(null,G__26055,G__26056));
})();
var G__26060 = (function (){var G__26057 = ay;
var G__26058 = (v[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26057,G__26058) : op.call(null,G__26057,G__26058));
})();
var G__26061 = cljs.core.next(xs__$1);
ax = G__26059;
ay = G__26060;
xs__$1 = G__26061;
continue;
} else {
var b__$1 = (new Float32Array((2)));
(b__$1[(0)] = ax);

(b__$1[(1)] = ay);

return b__$1;
}
break;
}
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
var b = acc.buf;
var ax = (b[(0)]);
var ay = (b[(1)]);
var az = (b[(2)]);
var xs__$1 = xs;
while(true){
if(cljs.core.truth_(xs__$1)){
var v = cljs.core.first(xs__$1).buf;
var G__26074 = (function (){var G__26068 = ax;
var G__26069 = (v[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26068,G__26069) : op.call(null,G__26068,G__26069));
})();
var G__26075 = (function (){var G__26070 = ay;
var G__26071 = (v[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26070,G__26071) : op.call(null,G__26070,G__26071));
})();
var G__26076 = (function (){var G__26072 = az;
var G__26073 = (v[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26072,G__26073) : op.call(null,G__26072,G__26073));
})();
var G__26077 = cljs.core.next(xs__$1);
ax = G__26074;
ay = G__26075;
az = G__26076;
xs__$1 = G__26077;
continue;
} else {
var b__$1 = (new Float32Array((3)));
(b__$1[(0)] = ax);

(b__$1[(1)] = ay);

(b__$1[(2)] = az);

return b__$1;
}
break;
}
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(){
var G__26079 = arguments.length;
switch (G__26079) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$2(v,(0)),cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.common.error.type_error_BANG_("Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(){
var G__26082 = arguments.length;
switch (G__26082) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$2(v,(0)),cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$2(v,(0)),cljs.core.constant$keyword$z.cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.common.error.type_error_BANG_("Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$2(v,(0)),cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.common.error.type_error_BANG_("Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(){
var G__26085 = arguments.length;
switch (G__26085) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$2(v,0.0),cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.common.error.type_error_BANG_("Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(){
var G__26088 = arguments.length;
switch (G__26088) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$2(v,0.0),cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$2(v,0.0),cljs.core.constant$keyword$z.cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.common.error.type_error_BANG_("Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.common.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.common.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.common.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.common.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(){
var G__26091 = arguments.length;
switch (G__26091) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm()));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm()),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(){
var G__26094 = arguments.length;
switch (G__26094) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm()));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm(),thi.ng.common.math.core.randnorm()),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;
