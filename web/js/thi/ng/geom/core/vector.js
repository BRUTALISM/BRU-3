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
var s = (function (){var G__25252 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25252) : Math.sin.call(null,G__25252));
})();
var c = (function (){var G__25253 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25253) : Math.cos.call(null,G__25253));
})();
var b = (new Float32Array((2)));
var G__25254 = self__.buf;
var G__25255 = (G__25254[(0)]);
var G__25256 = (G__25254[(1)]);
(b[(0)] = ((G__25255 * c) - (G__25256 * s)));

(b[(1)] = ((G__25255 * s) + (G__25256 * c)));

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
var temp__4420__auto__ = (function (){var G__25257 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25257) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25257));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25258 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25258) : f.call(null,G__25258));
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
var temp__4420__auto__ = (function (){var G__25259 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25259) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25259));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25260 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25260) : f.call(null,G__25260));
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
var G__25261 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25262 = v.buf;
return (((G__25261[(0)]) * (G__25262[(0)])) + ((G__25261[(1)]) * (G__25262[(1)])));
} else {
return (((G__25261[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__25261[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25263 = self__.buf;
var G__25264 = (G__25263[(0)]);
var G__25265 = (G__25263[(1)]);
var l = (function (){var G__25266 = ((G__25264 * G__25264) + (G__25265 * G__25265));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25266) : Math.sqrt.call(null,G__25266));
})();
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__25264 / l));

(b[(1)] = (G__25265 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__25267 = self__.buf;
var G__25268 = (G__25267[(0)]);
var G__25269 = (G__25267[(1)]);
var l = (function (){var G__25270 = ((G__25268 * G__25268) + (G__25269 * G__25269));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25270) : Math.sqrt.call(null,G__25270));
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__25268 * l__$1));

(b[(1)] = (G__25269 * l__$1));

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
var G__25271 = self__.buf;
var G__25273 = (G__25271[(0)]);
var G__25274 = (G__25271[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25272 = v.buf;
var G__25275 = (G__25272[(0)]);
var G__25276 = (G__25272[(1)]);
var d = (((G__25273 * G__25275) + (G__25274 * G__25276)) + (2));
(b[(0)] = ((G__25275 * d) - G__25273));

(b[(1)] = ((G__25276 * d) - G__25274));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__25275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__25273 * G__25275) + (G__25274 * G__25276)) + (2));
(b[(0)] = ((G__25275 * d) - G__25273));

(b[(1)] = ((G__25276 * d) - G__25274));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25277 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25278 = v.buf;
return (((G__25277[(0)]) * (G__25278[(1)])) - ((G__25277[(1)]) * (G__25278[(0)])));
} else {
return (((G__25277[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__25277[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
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
return (function (){var G__25279 = cljs.core.constant$keyword$yx;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25279) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25279));
})().call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12607__auto__ = self__._hash;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
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
var t = (function (){var G__25285 = (self__.buf[(1)]);
var G__25286 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25285,G__25286) : Math.atan2.call(null,G__25285,G__25286));
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
var G__25287 = thi.ng.geom.core.dist_squared(___$1,v);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25287) : Math.sqrt.call(null,G__25287));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25288 = self__.buf;
var G__25290 = (G__25288[(0)]);
var G__25291 = (G__25288[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25289 = v.buf;
var G__25292 = (G__25289[(0)]);
var G__25293 = (G__25289[(1)]);
var dx = (G__25290 - G__25292);
var dy = (G__25291 - G__25293);
return ((dx * dx) + (dy * dy));
} else {
var G__25292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__25290 - G__25292);
var dy = (G__25291 - G__25293);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25294 = (self__.buf[(0)]);
var G__25295 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25294,G__25295) : f.call(null,G__25294,G__25295));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25296 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25296) : cljs.core.deref.call(null,G__25296));
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25297 = start;
var G__25298 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25297,G__25298) : f.call(null,G__25297,G__25298));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25299 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25299) : cljs.core.deref.call(null,G__25299));
} else {
var acc__$1 = (function (){var G__25300 = acc;
var G__25301 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25300,G__25301) : f.call(null,G__25300,G__25301));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__25302 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25302) : cljs.core.deref.call(null,G__25302));
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
var dest__7540__auto__ = (new Float32Array((2)));
var G__25312_25550 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__25313_25551 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25314_25552 = ((!(G__25312_25550))?typeof a === 'number':null);
var G__25315_25553 = ((!(G__25313_25551))?typeof b === 'number':null);
var G__25303_25554 = self__.buf;
var G__25304_25555 = ((G__25312_25550)?a.buf:null);
var G__25305_25556 = ((G__25313_25551)?b.buf:null);
var G__25306_25557 = (G__25303_25554[(0)]);
var G__25307_25558 = (G__25303_25554[(1)]);
var G__25308_25559 = ((G__25312_25550)?(G__25304_25555[(0)]):(cljs.core.truth_(G__25314_25552)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__25309_25560 = ((G__25312_25550)?(G__25304_25555[(1)]):(cljs.core.truth_(G__25314_25552)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__25310_25561 = ((G__25313_25551)?(G__25305_25556[(0)]):(cljs.core.truth_(G__25315_25553)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25311_25562 = ((G__25313_25551)?(G__25305_25556[(1)]):(cljs.core.truth_(G__25315_25553)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__7540__auto__[(0)] = ((G__25306_25557 * G__25308_25559) - G__25310_25561));

(dest__7540__auto__[(1)] = ((G__25307_25558 * G__25309_25560) - G__25311_25562));

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7534__auto__ = (new Float32Array((2)));
var G__25316_25563 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25317_25564 = v.buf;
(dest__7534__auto__[(0)] = ((G__25316_25563[(0)]) * (G__25317_25564[(0)])));

(dest__7534__auto__[(1)] = ((G__25316_25563[(1)]) * (G__25317_25564[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25316_25563[(0)]) * v));

(dest__7534__auto__[(1)] = ((G__25316_25563[(1)]) * v));
} else {
(dest__7534__auto__[(0)] = ((G__25316_25563[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25316_25563[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25318 = self__.buf;
var G__25321 = (new Float32Array((2)));
var G__25322 = (G__25318[(0)]);
var G__25323 = (G__25318[(1)]);
var G__25328 = typeof v1 === 'number';
var G__25329 = typeof v2 === 'number';
if(((G__25328)?G__25329:false)){
(G__25321[(0)] = (G__25322 * v1));

(G__25321[(1)] = (G__25323 * v2));
} else {
var G__25330_25565 = ((!(G__25328))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25331_25566 = ((!(G__25329))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25319_25567 = (cljs.core.truth_(G__25330_25565)?v1.buf:null);
var G__25320_25568 = (cljs.core.truth_(G__25331_25566)?v2.buf:null);
var G__25324_25569 = (cljs.core.truth_(G__25330_25565)?(G__25319_25567[(0)]):((G__25328)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__25325_25570 = (cljs.core.truth_(G__25330_25565)?(G__25319_25567[(1)]):((G__25328)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__25326_25571 = (cljs.core.truth_(G__25331_25566)?(G__25320_25568[(0)]):((G__25329)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__25327_25572 = (cljs.core.truth_(G__25331_25566)?(G__25320_25568[(1)]):((G__25329)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__25321[(0)] = ((G__25322 * G__25324_25569) * G__25326_25571));

(G__25321[(1)] = ((G__25323 * G__25325_25570) * G__25327_25572));
}

return (new thi.ng.geom.core.vector.Vec2(G__25321,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7522__auto__ = (new Float32Array((2)));
var G__25332_25573 = self__.buf;
(dest__7522__auto__[(0)] = (- (G__25332_25573[(0)])));

(dest__7522__auto__[(1)] = (- (G__25332_25573[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__7522__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7534__auto__ = (new Float32Array((2)));
var G__25333_25574 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25334_25575 = v.buf;
(dest__7534__auto__[(0)] = ((G__25333_25574[(0)]) - (G__25334_25575[(0)])));

(dest__7534__auto__[(1)] = ((G__25333_25574[(1)]) - (G__25334_25575[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25333_25574[(0)]) - v));

(dest__7534__auto__[(1)] = ((G__25333_25574[(1)]) - v));
} else {
(dest__7534__auto__[(0)] = ((G__25333_25574[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25333_25574[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25335 = self__.buf;
var G__25338 = (new Float32Array((2)));
var G__25339 = (G__25335[(0)]);
var G__25340 = (G__25335[(1)]);
var G__25345 = typeof v1 === 'number';
var G__25346 = typeof v2 === 'number';
if(((G__25345)?G__25346:false)){
(G__25338[(0)] = (G__25339 - v1));

(G__25338[(1)] = (G__25340 - v2));
} else {
var G__25347_25576 = ((!(G__25345))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25348_25577 = ((!(G__25346))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25336_25578 = (cljs.core.truth_(G__25347_25576)?v1.buf:null);
var G__25337_25579 = (cljs.core.truth_(G__25348_25577)?v2.buf:null);
var G__25341_25580 = (cljs.core.truth_(G__25347_25576)?(G__25336_25578[(0)]):((G__25345)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25342_25581 = (cljs.core.truth_(G__25347_25576)?(G__25336_25578[(1)]):((G__25345)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25343_25582 = (cljs.core.truth_(G__25348_25577)?(G__25337_25579[(0)]):((G__25346)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25344_25583 = (cljs.core.truth_(G__25348_25577)?(G__25337_25579[(1)]):((G__25346)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__25338[(0)] = ((G__25339 - G__25341_25580) - G__25343_25582));

(G__25338[(1)] = ((G__25340 - G__25342_25581) - G__25344_25583));
}

return (new thi.ng.geom.core.vector.Vec2(G__25338,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7540__auto__ = (new Float32Array((2)));
var G__25358_25584 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__25359_25585 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25360_25586 = ((!(G__25358_25584))?typeof a === 'number':null);
var G__25361_25587 = ((!(G__25359_25585))?typeof b === 'number':null);
var G__25349_25588 = self__.buf;
var G__25350_25589 = ((G__25358_25584)?a.buf:null);
var G__25351_25590 = ((G__25359_25585)?b.buf:null);
var G__25352_25591 = (G__25349_25588[(0)]);
var G__25353_25592 = (G__25349_25588[(1)]);
var G__25354_25593 = ((G__25358_25584)?(G__25350_25589[(0)]):(cljs.core.truth_(G__25360_25586)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__25355_25594 = ((G__25358_25584)?(G__25350_25589[(1)]):(cljs.core.truth_(G__25360_25586)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__25356_25595 = ((G__25359_25585)?(G__25351_25590[(0)]):(cljs.core.truth_(G__25361_25587)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25357_25596 = ((G__25359_25585)?(G__25351_25590[(1)]):(cljs.core.truth_(G__25361_25587)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__7540__auto__[(0)] = ((G__25352_25591 * G__25354_25593) + G__25356_25595));

(dest__7540__auto__[(1)] = ((G__25353_25592 * G__25355_25594) + G__25357_25596));

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7540__auto__ = (new Float32Array((2)));
var G__25371_25597 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__25372_25598 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25373_25599 = ((!(G__25371_25597))?typeof a === 'number':null);
var G__25374_25600 = ((!(G__25372_25598))?typeof b === 'number':null);
var G__25362_25601 = self__.buf;
var G__25363_25602 = ((G__25371_25597)?a.buf:null);
var G__25364_25603 = ((G__25372_25598)?b.buf:null);
var G__25365_25604 = (G__25362_25601[(0)]);
var G__25366_25605 = (G__25362_25601[(1)]);
var G__25367_25606 = ((G__25371_25597)?(G__25363_25602[(0)]):(cljs.core.truth_(G__25373_25599)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25368_25607 = ((G__25371_25597)?(G__25363_25602[(1)]):(cljs.core.truth_(G__25373_25599)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25369_25608 = ((G__25372_25598)?(G__25364_25603[(0)]):(cljs.core.truth_(G__25374_25600)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__25370_25609 = ((G__25372_25598)?(G__25364_25603[(1)]):(cljs.core.truth_(G__25374_25600)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__7540__auto__[(0)] = ((G__25365_25604 + G__25367_25606) * G__25369_25608));

(dest__7540__auto__[(1)] = ((G__25366_25605 + G__25368_25607) * G__25370_25609));

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7522__auto__ = (new Float32Array((2)));
var G__25375_25610 = self__.buf;
(dest__7522__auto__[(0)] = ((1) / (G__25375_25610[(0)])));

(dest__7522__auto__[(1)] = ((1) / (G__25375_25610[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__7522__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7534__auto__ = (new Float32Array((2)));
var G__25376_25611 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25377_25612 = v.buf;
(dest__7534__auto__[(0)] = ((G__25376_25611[(0)]) / (G__25377_25612[(0)])));

(dest__7534__auto__[(1)] = ((G__25376_25611[(1)]) / (G__25377_25612[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25376_25611[(0)]) / v));

(dest__7534__auto__[(1)] = ((G__25376_25611[(1)]) / v));
} else {
(dest__7534__auto__[(0)] = ((G__25376_25611[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25376_25611[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25378 = self__.buf;
var G__25381 = (new Float32Array((2)));
var G__25382 = (G__25378[(0)]);
var G__25383 = (G__25378[(1)]);
var G__25388 = typeof v1 === 'number';
var G__25389 = typeof v2 === 'number';
if(((G__25388)?G__25389:false)){
(G__25381[(0)] = (G__25382 / v1));

(G__25381[(1)] = (G__25383 / v2));
} else {
var G__25390_25613 = ((!(G__25388))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25391_25614 = ((!(G__25389))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25379_25615 = (cljs.core.truth_(G__25390_25613)?v1.buf:null);
var G__25380_25616 = (cljs.core.truth_(G__25391_25614)?v2.buf:null);
var G__25384_25617 = (cljs.core.truth_(G__25390_25613)?(G__25379_25615[(0)]):((G__25388)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25385_25618 = (cljs.core.truth_(G__25390_25613)?(G__25379_25615[(1)]):((G__25388)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25386_25619 = (cljs.core.truth_(G__25391_25614)?(G__25380_25616[(0)]):((G__25389)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25387_25620 = (cljs.core.truth_(G__25391_25614)?(G__25380_25616[(1)]):((G__25389)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__25381[(0)] = ((G__25382 / G__25384_25617) / G__25386_25619));

(G__25381[(1)] = ((G__25383 / G__25385_25618) / G__25387_25620));
}

return (new thi.ng.geom.core.vector.Vec2(G__25381,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7534__auto__ = (new Float32Array((2)));
var G__25392_25621 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25393_25622 = v.buf;
(dest__7534__auto__[(0)] = ((G__25392_25621[(0)]) + (G__25393_25622[(0)])));

(dest__7534__auto__[(1)] = ((G__25392_25621[(1)]) + (G__25393_25622[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25392_25621[(0)]) + v));

(dest__7534__auto__[(1)] = ((G__25392_25621[(1)]) + v));
} else {
(dest__7534__auto__[(0)] = ((G__25392_25621[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25392_25621[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25394 = self__.buf;
var G__25397 = (new Float32Array((2)));
var G__25398 = (G__25394[(0)]);
var G__25399 = (G__25394[(1)]);
var G__25404 = typeof v1 === 'number';
var G__25405 = typeof v2 === 'number';
if(((G__25404)?G__25405:false)){
(G__25397[(0)] = (G__25398 + v1));

(G__25397[(1)] = (G__25399 + v2));
} else {
var G__25406_25623 = ((!(G__25404))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25407_25624 = ((!(G__25405))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25395_25625 = (cljs.core.truth_(G__25406_25623)?v1.buf:null);
var G__25396_25626 = (cljs.core.truth_(G__25407_25624)?v2.buf:null);
var G__25400_25627 = (cljs.core.truth_(G__25406_25623)?(G__25395_25625[(0)]):((G__25404)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25401_25628 = (cljs.core.truth_(G__25406_25623)?(G__25395_25625[(1)]):((G__25404)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25402_25629 = (cljs.core.truth_(G__25407_25624)?(G__25396_25626[(0)]):((G__25405)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25403_25630 = (cljs.core.truth_(G__25407_25624)?(G__25396_25626[(1)]):((G__25405)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__25397[(0)] = ((G__25398 + G__25400_25627) + G__25402_25629));

(G__25397[(1)] = ((G__25399 + G__25401_25628) + G__25403_25630));
}

return (new thi.ng.geom.core.vector.Vec2(G__25397,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7522__auto__ = (new Float32Array((2)));
var G__25408_25631 = self__.buf;
(dest__7522__auto__[(0)] = (function (){var G__25409 = (G__25408_25631[(0)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25409) : thi.ng.common.math.core.abs.call(null,G__25409));
})());

(dest__7522__auto__[(1)] = (function (){var G__25410 = (G__25408_25631[(1)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25410) : thi.ng.common.math.core.abs.call(null,G__25410));
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7522__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7540__auto__ = (new Float32Array((2)));
var G__25420_25632 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__25421_25633 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25422_25634 = ((!(G__25420_25632))?typeof a === 'number':null);
var G__25423_25635 = ((!(G__25421_25633))?typeof b === 'number':null);
var G__25411_25636 = self__.buf;
var G__25412_25637 = ((G__25420_25632)?a.buf:null);
var G__25413_25638 = ((G__25421_25633)?b.buf:null);
var G__25414_25639 = (G__25411_25636[(0)]);
var G__25415_25640 = (G__25411_25636[(1)]);
var G__25416_25641 = ((G__25420_25632)?(G__25412_25637[(0)]):(cljs.core.truth_(G__25422_25634)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25417_25642 = ((G__25420_25632)?(G__25412_25637[(1)]):(cljs.core.truth_(G__25422_25634)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25418_25643 = ((G__25421_25633)?(G__25413_25638[(0)]):(cljs.core.truth_(G__25423_25635)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__25419_25644 = ((G__25421_25633)?(G__25413_25638[(1)]):(cljs.core.truth_(G__25423_25635)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__7540__auto__[(0)] = ((G__25414_25639 - G__25416_25641) * G__25418_25643));

(dest__7540__auto__[(1)] = ((G__25415_25640 - G__25417_25642) * G__25419_25644));

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
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
var dest__7534__auto__ = (new Float32Array((2)));
var G__25424_25645 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25425_25646 = v.buf;
(dest__7534__auto__[(0)] = ((G__25424_25645[(0)]) + (G__25425_25646[(0)])));

(dest__7534__auto__[(1)] = ((G__25424_25645[(1)]) + (G__25425_25646[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25424_25645[(0)]) + v));

(dest__7534__auto__[(1)] = ((G__25424_25645[(1)]) + v));
} else {
(dest__7534__auto__[(0)] = ((G__25424_25645[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25424_25645[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25426 = self__.buf;
var G__25429 = (new Float32Array((2)));
var G__25430 = (G__25426[(0)]);
var G__25431 = (G__25426[(1)]);
var G__25436 = typeof v1 === 'number';
var G__25437 = typeof v2 === 'number';
if(((G__25436)?G__25437:false)){
(G__25429[(0)] = (G__25430 + v1));

(G__25429[(1)] = (G__25431 + v2));
} else {
var G__25438_25647 = ((!(G__25436))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25439_25648 = ((!(G__25437))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25427_25649 = (cljs.core.truth_(G__25438_25647)?v1.buf:null);
var G__25428_25650 = (cljs.core.truth_(G__25439_25648)?v2.buf:null);
var G__25432_25651 = (cljs.core.truth_(G__25438_25647)?(G__25427_25649[(0)]):((G__25436)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25433_25652 = (cljs.core.truth_(G__25438_25647)?(G__25427_25649[(1)]):((G__25436)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25434_25653 = (cljs.core.truth_(G__25439_25648)?(G__25428_25650[(0)]):((G__25437)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25435_25654 = (cljs.core.truth_(G__25439_25648)?(G__25428_25650[(1)]):((G__25437)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__25429[(0)] = ((G__25430 + G__25432_25651) + G__25434_25653));

(G__25429[(1)] = ((G__25431 + G__25433_25652) + G__25435_25654));
}

return (new thi.ng.geom.core.vector.Vec2(G__25429,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_((function (){var G__25440 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25440) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25440));
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
return (new thi.ng.geom.core.vector.Vec2((function (){var G__25441 = self__.buf;
var G__25442 = (new Float32Array(self__.buf));
var G__25443 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__25444 = k;
var G__25445 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__25441,G__25442,G__25443,G__25444,G__25445) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__25441,G__25442,G__25443,G__25444,G__25445));
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
var dest__7534__auto__ = (new Float32Array((2)));
var G__25446_25655 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25447_25656 = v.buf;
(dest__7534__auto__[(0)] = ((G__25446_25655[(0)]) * (G__25447_25656[(0)])));

(dest__7534__auto__[(1)] = ((G__25446_25655[(1)]) * (G__25447_25656[(1)])));
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = ((G__25446_25655[(0)]) * v));

(dest__7534__auto__[(1)] = ((G__25446_25655[(1)]) * v));
} else {
(dest__7534__auto__[(0)] = ((G__25446_25655[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7534__auto__[(1)] = ((G__25446_25655[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__25448 = self__.buf;
var G__25451 = (new Float32Array((2)));
var G__25452 = (G__25448[(0)]);
var G__25453 = (G__25448[(1)]);
var G__25458 = typeof v1 === 'number';
var G__25459 = typeof v2 === 'number';
if(((G__25458)?G__25459:false)){
(G__25451[(0)] = (G__25452 * v1));

(G__25451[(1)] = (G__25453 * v2));
} else {
var G__25460_25657 = ((!(G__25458))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25461_25658 = ((!(G__25459))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__25449_25659 = (cljs.core.truth_(G__25460_25657)?v1.buf:null);
var G__25450_25660 = (cljs.core.truth_(G__25461_25658)?v2.buf:null);
var G__25454_25661 = (cljs.core.truth_(G__25460_25657)?(G__25449_25659[(0)]):((G__25458)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__25455_25662 = (cljs.core.truth_(G__25460_25657)?(G__25449_25659[(1)]):((G__25458)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__25456_25663 = (cljs.core.truth_(G__25461_25658)?(G__25450_25660[(0)]):((G__25459)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__25457_25664 = (cljs.core.truth_(G__25461_25658)?(G__25450_25660[(1)]):((G__25459)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__25451[(0)] = ((G__25452 * G__25454_25661) * G__25456_25663));

(G__25451[(1)] = ((G__25453 * G__25455_25662) * G__25457_25664));
}

return (new thi.ng.geom.core.vector.Vec2(G__25451,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__25462 = (self__.buf[(0)]);
var G__25463 = (self__.buf[(1)]);
var G__25464 = x;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__25462,G__25463,G__25464) : thi.ng.geom.core.vector.vec3.call(null,G__25462,G__25463,G__25464));
})(),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__25665 = null;
var G__25665__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25465 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25465) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25465));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25466 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25466) : f.call(null,G__25466));
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
var G__25665__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25467 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25467) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25467));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25468 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25468) : f.call(null,G__25468));
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
G__25665 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__25665__2.call(this,self__,k);
case 3:
return G__25665__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25665.cljs$core$IFn$_invoke$arity$2 = G__25665__2;
G__25665.cljs$core$IFn$_invoke$arity$3 = G__25665__3;
return G__25665;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args25251){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25251)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__25469 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25469) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25469));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25470 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25470) : f.call(null,G__25470));
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
var temp__4420__auto__ = (function (){var G__25471 = k;
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__25471) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__25471));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25472 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25472) : f.call(null,G__25472));
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
var dest__7534__auto__ = (new Float32Array((2)));
var G__25473_25666 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25474_25667 = v.buf;
(dest__7534__auto__[(0)] = (function (){var a__7152__auto__ = (G__25473_25666[(0)]);
var b__7153__auto__ = (G__25474_25667[(0)]);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7152__auto__ = (G__25473_25666[(1)]);
var b__7153__auto__ = (G__25474_25667[(1)]);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = (function (){var a__7152__auto__ = (G__25473_25666[(0)]);
var b__7153__auto__ = v;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7152__auto__ = (G__25473_25666[(1)]);
var b__7153__auto__ = v;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
} else {
(dest__7534__auto__[(0)] = (function (){var a__7152__auto__ = (G__25473_25666[(0)]);
var b__7153__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7152__auto__ = (G__25473_25666[(1)]);
var b__7153__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7540__auto__ = (new Float32Array((2)));
var G__25484_25668 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25485_25669 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25486_25670 = ((!(G__25484_25668))?typeof v === 'number':null);
var G__25487_25671 = ((!(G__25485_25669))?typeof v2 === 'number':null);
var G__25475_25672 = self__.buf;
var G__25476_25673 = ((G__25484_25668)?v.buf:null);
var G__25477_25674 = ((G__25485_25669)?v2.buf:null);
var G__25478_25675 = (G__25475_25672[(0)]);
var G__25479_25676 = (G__25475_25672[(1)]);
var G__25480_25677 = ((G__25484_25668)?(G__25476_25673[(0)]):(cljs.core.truth_(G__25486_25670)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25481_25678 = ((G__25484_25668)?(G__25476_25673[(1)]):(cljs.core.truth_(G__25486_25670)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25482_25679 = ((G__25485_25669)?(G__25477_25674[(0)]):(cljs.core.truth_(G__25487_25671)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25483_25680 = ((G__25485_25669)?(G__25477_25674[(1)]):(cljs.core.truth_(G__25487_25671)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__7540__auto__[(0)] = (function (){var a__7152__auto__ = (function (){var a__7152__auto__ = G__25478_25675;
var b__7153__auto__ = G__25480_25677;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})();
var b__7153__auto__ = G__25482_25679;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7540__auto__[(1)] = (function (){var a__7152__auto__ = (function (){var a__7152__auto__ = G__25479_25676;
var b__7153__auto__ = G__25481_25678;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})();
var b__7153__auto__ = G__25483_25680;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7534__auto__ = (new Float32Array((2)));
var G__25488_25681 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25489_25682 = v.buf;
(dest__7534__auto__[(0)] = (function (){var a__7159__auto__ = (G__25488_25681[(0)]);
var b__7160__auto__ = (G__25489_25682[(0)]);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7159__auto__ = (G__25488_25681[(1)]);
var b__7160__auto__ = (G__25489_25682[(1)]);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7534__auto__[(0)] = (function (){var a__7159__auto__ = (G__25488_25681[(0)]);
var b__7160__auto__ = v;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7159__auto__ = (G__25488_25681[(1)]);
var b__7160__auto__ = v;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
} else {
(dest__7534__auto__[(0)] = (function (){var a__7159__auto__ = (G__25488_25681[(0)]);
var b__7160__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7534__auto__[(1)] = (function (){var a__7159__auto__ = (G__25488_25681[(1)]);
var b__7160__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__7534__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7540__auto__ = (new Float32Array((2)));
var G__25499_25683 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25500_25684 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25501_25685 = ((!(G__25499_25683))?typeof v === 'number':null);
var G__25502_25686 = ((!(G__25500_25684))?typeof v2 === 'number':null);
var G__25490_25687 = self__.buf;
var G__25491_25688 = ((G__25499_25683)?v.buf:null);
var G__25492_25689 = ((G__25500_25684)?v2.buf:null);
var G__25493_25690 = (G__25490_25687[(0)]);
var G__25494_25691 = (G__25490_25687[(1)]);
var G__25495_25692 = ((G__25499_25683)?(G__25491_25688[(0)]):(cljs.core.truth_(G__25501_25685)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25496_25693 = ((G__25499_25683)?(G__25491_25688[(1)]):(cljs.core.truth_(G__25501_25685)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25497_25694 = ((G__25500_25684)?(G__25492_25689[(0)]):(cljs.core.truth_(G__25502_25686)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25498_25695 = ((G__25500_25684)?(G__25492_25689[(1)]):(cljs.core.truth_(G__25502_25686)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__7540__auto__[(0)] = (function (){var a__7159__auto__ = (function (){var a__7159__auto__ = G__25493_25690;
var b__7160__auto__ = G__25495_25692;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})();
var b__7160__auto__ = G__25497_25694;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7540__auto__[(1)] = (function (){var a__7159__auto__ = (function (){var a__7159__auto__ = G__25494_25691;
var b__7160__auto__ = G__25496_25693;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})();
var b__7160__auto__ = G__25498_25695;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__7540__auto__,null,self__._meta));
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
return (new thi.ng.geom.core.vector.Vec2((function (){var G__25503 = f;
var G__25504 = ___$1;
var G__25505 = xs;
return (thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25503,G__25504,G__25505) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,G__25503,G__25504,G__25505));
})(),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var b = (function (){var G__25506 = f;
var G__25507 = ___$1;
var G__25508 = xs;
return (thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__25506,G__25507,G__25508) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,G__25506,G__25507,G__25508));
})();
(b[(0)] = (function (){var G__25509 = (b[(0)]);
var G__25510 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25509,G__25510) : f2.call(null,G__25509,G__25510));
})());

(b[(1)] = (function (){var G__25511 = (b[(1)]);
var G__25512 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__25511,G__25512) : f2.call(null,G__25511,G__25512));
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
var G__25513 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25514 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25513[(0)]),(G__25514[(0)]),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25513[(1)]),(G__25514[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25513[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__25513[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
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
var G__25515 = self__.buf;
var G__25516 = (G__25515[(0)]);
var G__25517 = (G__25515[(1)]);
var G__25518 = ((G__25516 * G__25516) + (G__25517 * G__25517));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25518) : Math.sqrt.call(null,G__25518));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25519 = self__.buf;
var G__25520 = (G__25519[(0)]);
var G__25521 = (G__25519[(1)]);
return ((G__25520 * G__25520) + (G__25521 * G__25521));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__25522_25696 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__25523_25697 = v.buf;
(b[(0)] = (((G__25522_25696[(0)]) + (G__25523_25697[(0)])) * 0.5));

(b[(1)] = (((G__25522_25696[(1)]) + (G__25523_25697[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__25522_25696[(0)]) + v) * 0.5));

(b[(1)] = (((G__25522_25696[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__25522_25696[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__25522_25696[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__25533_25698 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__25534_25699 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__25535_25700 = ((!(G__25533_25698))?typeof v === 'number':null);
var G__25536_25701 = ((!(G__25534_25699))?typeof v2 === 'number':null);
var G__25524_25702 = self__.buf;
var G__25525_25703 = ((G__25533_25698)?v.buf:null);
var G__25526_25704 = ((G__25534_25699)?v2.buf:null);
var G__25527_25705 = (G__25524_25702[(0)]);
var G__25528_25706 = (G__25524_25702[(1)]);
var G__25529_25707 = ((G__25533_25698)?(G__25525_25703[(0)]):(cljs.core.truth_(G__25535_25700)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__25530_25708 = ((G__25533_25698)?(G__25525_25703[(1)]):(cljs.core.truth_(G__25535_25700)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__25531_25709 = ((G__25534_25699)?(G__25526_25704[(0)]):(cljs.core.truth_(G__25536_25701)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25532_25710 = ((G__25534_25699)?(G__25526_25704[(1)]):(cljs.core.truth_(G__25536_25701)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(b[(0)] = (((G__25529_25707 - G__25527_25705) * G__25531_25709) + G__25527_25705));

(b[(1)] = (((G__25530_25708 - G__25528_25706) * G__25532_25710) + G__25528_25706));

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
var G__25546_25711 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__25547_25712 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__25548_25713 = ((!(G__25546_25711))?typeof b === 'number':null);
var G__25549_25714 = ((!(G__25547_25712))?typeof c === 'number':null);
var G__25537_25715 = self__.buf;
var G__25538_25716 = ((G__25546_25711)?b.buf:null);
var G__25539_25717 = ((G__25547_25712)?c.buf:null);
var G__25540_25718 = (G__25537_25715[(0)]);
var G__25541_25719 = (G__25537_25715[(1)]);
var G__25542_25720 = ((G__25546_25711)?(G__25538_25716[(0)]):(cljs.core.truth_(G__25548_25713)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25543_25721 = ((G__25546_25711)?(G__25538_25716[(1)]):(cljs.core.truth_(G__25548_25713)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25544_25722 = ((G__25547_25712)?(G__25539_25717[(0)]):(cljs.core.truth_(G__25549_25714)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__25545_25723 = ((G__25547_25712)?(G__25539_25717[(1)]):(cljs.core.truth_(G__25549_25714)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_25724 = (((G__25542_25720 - G__25540_25718) * u) + G__25540_25718);
var y1_25725 = (((G__25543_25721 - G__25541_25719) * u) + G__25541_25719);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__25544_25722) * u) + G__25544_25722) - x1_25724) * v) + x1_25724));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__25545_25723) * u) + G__25545_25723) - y1_25725) * v) + y1_25725));

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
var G__25280 = self__.buf;
var G__25281 = (G__25280[(0)]);
var G__25282 = (G__25280[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__25281 * (function (){var G__25283 = G__25282;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25283) : Math.cos.call(null,G__25283));
})()));

(b[(1)] = (G__25281 * (function (){var G__25284 = G__25282;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25284) : Math.sin.call(null,G__25284));
})()));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"thi.ng.geom.core.vector/Vec2");
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
var temp__4420__auto__ = (function (){var G__25727 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25727) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25727));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25728 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25728) : f.call(null,G__25728));
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
var temp__4420__auto__ = (function (){var G__25729 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25729) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25729));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__25730 = ___$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25730) : f.call(null,G__25730));
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
var G__25731 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25732 = v.buf;
return ((((G__25731[(0)]) * (G__25732[(0)])) + ((G__25731[(1)]) * (G__25732[(1)]))) + ((G__25731[(2)]) * (G__25732[(2)])));
} else {
return ((((G__25731[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__25731[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__25731[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25733 = self__.buf;
var G__25734 = (G__25733[(0)]);
var G__25735 = (G__25733[(1)]);
var G__25736 = (G__25733[(2)]);
var l = (function (){var G__25737 = (((G__25734 * G__25734) + (G__25735 * G__25735)) + (G__25736 * G__25736));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25737) : Math.sqrt.call(null,G__25737));
})();
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__25734 / l));

(b[(1)] = (G__25735 / l));

(b[(2)] = (G__25736 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__25738 = self__.buf;
var G__25739 = (G__25738[(0)]);
var G__25740 = (G__25738[(1)]);
var G__25741 = (G__25738[(2)]);
var l = (function (){var G__25742 = (((G__25739 * G__25739) + (G__25740 * G__25740)) + (G__25741 * G__25741));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25742) : Math.sqrt.call(null,G__25742));
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__25739 * l__$1));

(b[(1)] = (G__25740 * l__$1));

(b[(2)] = (G__25741 * l__$1));

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
var s = (function (){var G__25743 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25743) : Math.sin.call(null,G__25743));
})();
var c = (function (){var G__25744 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25744) : Math.cos.call(null,G__25744));
})();
var b = (new Float32Array((3)));
var G__25745 = self__.buf;
var G__25746 = (G__25745[(0)]);
var G__25747 = (G__25745[(1)]);
var G__25748 = (G__25745[(2)]);
(b[(0)] = G__25746);

(b[(1)] = ((G__25747 * c) - (G__25748 * s)));

(b[(2)] = ((G__25747 * s) + (G__25748 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__25749 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25749) : Math.sin.call(null,G__25749));
})();
var c = (function (){var G__25750 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25750) : Math.cos.call(null,G__25750));
})();
var b = (new Float32Array((3)));
var G__25751 = self__.buf;
var G__25752 = (G__25751[(0)]);
var G__25753 = (G__25751[(1)]);
var G__25754 = (G__25751[(2)]);
(b[(0)] = ((G__25752 * c) + (G__25754 * s)));

(b[(1)] = G__25753);

(b[(2)] = ((G__25754 * c) - (G__25752 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = (function (){var G__25755 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25755) : Math.sin.call(null,G__25755));
})();
var c = (function (){var G__25756 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25756) : Math.cos.call(null,G__25756));
})();
var b = (new Float32Array((3)));
var G__25757 = self__.buf;
var G__25758 = (G__25757[(0)]);
var G__25759 = (G__25757[(1)]);
var G__25760 = (G__25757[(2)]);
(b[(0)] = ((G__25758 * c) - (G__25759 * s)));

(b[(1)] = ((G__25758 * s) + (G__25759 * c)));

(b[(2)] = G__25760);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__25761 = self__.buf;
var G__25763 = (G__25761[(0)]);
var G__25764 = (G__25761[(1)]);
var G__25765 = (G__25761[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25762 = v.buf;
var G__25766 = (G__25762[(0)]);
var G__25767 = (G__25762[(1)]);
var G__25768 = (G__25762[(2)]);
var ux_SINGLEQUOTE_ = (G__25766 * G__25763);
var uy_SINGLEQUOTE_ = (G__25766 * G__25764);
var uz_SINGLEQUOTE_ = (G__25766 * G__25765);
var vx_SINGLEQUOTE_ = (G__25767 * G__25763);
var vy_SINGLEQUOTE_ = (G__25767 * G__25764);
var vz_SINGLEQUOTE_ = (G__25767 * G__25765);
var wx_SINGLEQUOTE_ = (G__25768 * G__25763);
var wy_SINGLEQUOTE_ = (G__25768 * G__25764);
var wz_SINGLEQUOTE_ = (G__25768 * G__25765);
var vx2 = (G__25766 * G__25766);
var vy2 = (G__25767 * G__25767);
var vz2 = (G__25768 * G__25768);
var s = (function (){var G__25769 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25769) : Math.sin.call(null,G__25769));
})();
var c = (function (){var G__25770 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25770) : Math.cos.call(null,G__25770));
})();
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__25766) + ((((vy2 + vz2) * G__25763) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25766)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__25767) + ((((vx2 + vz2) * G__25764) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25767)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__25768) + ((((vx2 + vy2) * G__25765) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__25768)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__25766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__25766 * G__25763);
var uy_SINGLEQUOTE_ = (G__25766 * G__25764);
var uz_SINGLEQUOTE_ = (G__25766 * G__25765);
var vx_SINGLEQUOTE_ = (G__25767 * G__25763);
var vy_SINGLEQUOTE_ = (G__25767 * G__25764);
var vz_SINGLEQUOTE_ = (G__25767 * G__25765);
var wx_SINGLEQUOTE_ = (G__25768 * G__25763);
var wy_SINGLEQUOTE_ = (G__25768 * G__25764);
var wz_SINGLEQUOTE_ = (G__25768 * G__25765);
var vx2 = (G__25766 * G__25766);
var vy2 = (G__25767 * G__25767);
var vz2 = (G__25768 * G__25768);
var s = (function (){var G__25771 = theta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25771) : Math.sin.call(null,G__25771));
})();
var c = (function (){var G__25772 = theta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25772) : Math.cos.call(null,G__25772));
})();
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__25766) + ((((vy2 + vz2) * G__25763) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25766)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__25767) + ((((vx2 + vz2) * G__25764) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__25767)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__25768) + ((((vx2 + vy2) * G__25765) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__25768)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
var G__25773 = self__.buf;
var G__25775 = (G__25773[(0)]);
var G__25776 = (G__25773[(1)]);
var G__25777 = (G__25773[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25774 = v.buf;
var G__25778 = (G__25774[(0)]);
var G__25779 = (G__25774[(1)]);
var G__25780 = (G__25774[(2)]);
var d = ((((G__25775 * G__25778) + (G__25776 * G__25779)) + (G__25777 * G__25780)) * 2.0);
(b[(0)] = ((G__25778 * d) - G__25775));

(b[(1)] = ((G__25779 * d) - G__25776));

(b[(2)] = ((G__25780 * d) - G__25777));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__25778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__25775 * G__25778) + (G__25776 * G__25779)) + (G__25777 * G__25780)) * 2.0);
(b[(0)] = ((G__25778 * d) - G__25775));

(b[(1)] = ((G__25779 * d) - G__25776));

(b[(2)] = ((G__25780 * d) - G__25777));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__25781_26120 = self__.buf;
var G__25783_26121 = (G__25781_26120[(0)]);
var G__25784_26122 = (G__25781_26120[(1)]);
var G__25785_26123 = (G__25781_26120[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25782_26124 = v.buf;
var G__25786_26125 = (G__25782_26124[(0)]);
var G__25787_26126 = (G__25782_26124[(1)]);
var G__25788_26127 = (G__25782_26124[(2)]);
(b[(0)] = ((G__25784_26122 * G__25788_26127) - (G__25787_26126 * G__25785_26123)));

(b[(1)] = ((G__25785_26123 * G__25786_26125) - (G__25788_26127 * G__25783_26121)));

(b[(2)] = ((G__25783_26121 * G__25787_26126) - (G__25786_26125 * G__25784_26122)));
} else {
var G__25786_26128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25787_26129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25788_26130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__25784_26122 * G__25788_26130) - (G__25787_26129 * G__25785_26123)));

(b[(1)] = ((G__25785_26123 * G__25786_26128) - (G__25788_26130 * G__25783_26121)));

(b[(2)] = ((G__25783_26121 * G__25787_26129) - (G__25786_26128 * G__25784_26122)));
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
return (function (){var G__25793 = cljs.core.constant$keyword$zyx;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25793) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25793));
})().call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__12607__auto__ = self__._hash;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
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
var t = (function (){var G__25794 = (self__.buf[(1)]);
var G__25795 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25794,G__25795) : Math.atan2.call(null,G__25794,G__25795));
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
var t = (function (){var G__25796 = (self__.buf[(2)]);
var G__25797 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25796,G__25797) : Math.atan2.call(null,G__25796,G__25797));
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
var t = (function (){var G__25798 = (self__.buf[(2)]);
var G__25799 = (self__.buf[(1)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__25798,G__25799) : Math.atan2.call(null,G__25798,G__25799));
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
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:(function (){var G__25800 = v;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(G__25800) : thi.ng.geom.core.vector.vec3.call(null,G__25800));
})());
var G__25801 = thi.ng.geom.core.dot(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(v__$1));
return (Math.acos.cljs$core$IFn$_invoke$arity$1 ? Math.acos.cljs$core$IFn$_invoke$arity$1(G__25801) : Math.acos.call(null,G__25801));
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
var G__25802 = thi.ng.geom.core.dist_squared(___$1,v);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__25802) : Math.sqrt.call(null,G__25802));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__25803 = self__.buf;
var G__25805 = (G__25803[(0)]);
var G__25806 = (G__25803[(1)]);
var G__25807 = (G__25803[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25804 = v.buf;
var G__25808 = (G__25804[(0)]);
var G__25809 = (G__25804[(1)]);
var G__25810 = (G__25804[(2)]);
var dx = (G__25805 - G__25808);
var dy = (G__25806 - G__25809);
var dz = (G__25807 - G__25810);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__25808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__25809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__25810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__25805 - G__25808);
var dy = (G__25806 - G__25809);
var dz = (G__25807 - G__25810);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25811 = (self__.buf[(0)]);
var G__25812 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25811,G__25812) : f.call(null,G__25811,G__25812));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25813 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25813) : cljs.core.deref.call(null,G__25813));
} else {
var acc__$1 = (function (){var G__25814 = acc;
var G__25815 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25814,G__25815) : f.call(null,G__25814,G__25815));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__25816 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25816) : cljs.core.deref.call(null,G__25816));
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__25817 = start;
var G__25818 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25817,G__25818) : f.call(null,G__25817,G__25818));
})();
if(cljs.core.reduced_QMARK_(acc)){
var G__25819 = acc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25819) : cljs.core.deref.call(null,G__25819));
} else {
var acc__$1 = (function (){var G__25820 = acc;
var G__25821 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25820,G__25821) : f.call(null,G__25820,G__25821));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
var G__25822 = acc__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25822) : cljs.core.deref.call(null,G__25822));
} else {
var acc__$2 = (function (){var G__25823 = acc__$1;
var G__25824 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25823,G__25824) : f.call(null,G__25823,G__25824));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
var G__25825 = acc__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25825) : cljs.core.deref.call(null,G__25825));
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
var dest__7620__auto__ = (new Float32Array((3)));
var G__25838_26131 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25839_26132 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25840_26133 = ((!(G__25838_26131))?typeof a === 'number':null);
var G__25841_26134 = ((!(G__25839_26132))?typeof b === 'number':null);
var G__25826_26135 = self__.buf;
var G__25827_26136 = ((G__25838_26131)?a.buf:null);
var G__25828_26137 = ((G__25839_26132)?b.buf:null);
var G__25829_26138 = (G__25826_26135[(0)]);
var G__25830_26139 = (G__25826_26135[(1)]);
var G__25831_26140 = (G__25826_26135[(2)]);
var G__25832_26141 = ((G__25838_26131)?(G__25827_26136[(0)]):(cljs.core.truth_(G__25840_26133)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25833_26142 = ((G__25838_26131)?(G__25827_26136[(1)]):(cljs.core.truth_(G__25840_26133)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25834_26143 = ((G__25838_26131)?(G__25827_26136[(2)]):(cljs.core.truth_(G__25840_26133)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25835_26144 = ((G__25839_26132)?(G__25828_26137[(0)]):(cljs.core.truth_(G__25841_26134)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25836_26145 = ((G__25839_26132)?(G__25828_26137[(1)]):(cljs.core.truth_(G__25841_26134)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25837_26146 = ((G__25839_26132)?(G__25828_26137[(2)]):(cljs.core.truth_(G__25841_26134)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25829_26138 * G__25832_26141) - G__25835_26144));

(dest__7620__auto__[(1)] = ((G__25830_26139 * G__25833_26142) - G__25836_26145));

(dest__7620__auto__[(2)] = ((G__25831_26140 * G__25834_26143) - G__25837_26146));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7614__auto__ = (new Float32Array((3)));
var G__25842_26147 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25843_26148 = v.buf;
(dest__7614__auto__[(0)] = ((G__25842_26147[(0)]) * (G__25843_26148[(0)])));

(dest__7614__auto__[(1)] = ((G__25842_26147[(1)]) * (G__25843_26148[(1)])));

(dest__7614__auto__[(2)] = ((G__25842_26147[(2)]) * (G__25843_26148[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25842_26147[(0)]) * v));

(dest__7614__auto__[(1)] = ((G__25842_26147[(1)]) * v));

(dest__7614__auto__[(2)] = ((G__25842_26147[(2)]) * v));
} else {
(dest__7614__auto__[(0)] = ((G__25842_26147[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25842_26147[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25842_26147[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25856_26149 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25857_26150 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25858_26151 = ((!(G__25856_26149))?typeof v1 === 'number':null);
var G__25859_26152 = ((!(G__25857_26150))?typeof v2 === 'number':null);
var G__25844_26153 = self__.buf;
var G__25845_26154 = ((G__25856_26149)?v1.buf:null);
var G__25846_26155 = ((G__25857_26150)?v2.buf:null);
var G__25847_26156 = (G__25844_26153[(0)]);
var G__25848_26157 = (G__25844_26153[(1)]);
var G__25849_26158 = (G__25844_26153[(2)]);
var G__25850_26159 = ((G__25856_26149)?(G__25845_26154[(0)]):(cljs.core.truth_(G__25858_26151)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25851_26160 = ((G__25856_26149)?(G__25845_26154[(1)]):(cljs.core.truth_(G__25858_26151)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25852_26161 = ((G__25856_26149)?(G__25845_26154[(2)]):(cljs.core.truth_(G__25858_26151)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25853_26162 = ((G__25857_26150)?(G__25846_26155[(0)]):(cljs.core.truth_(G__25859_26152)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25854_26163 = ((G__25857_26150)?(G__25846_26155[(1)]):(cljs.core.truth_(G__25859_26152)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25855_26164 = ((G__25857_26150)?(G__25846_26155[(2)]):(cljs.core.truth_(G__25859_26152)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25847_26156 * G__25850_26159) * G__25853_26162));

(dest__7620__auto__[(1)] = ((G__25848_26157 * G__25851_26160) * G__25854_26163));

(dest__7620__auto__[(2)] = ((G__25849_26158 * G__25852_26161) * G__25855_26164));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25860 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__25860[(0)]) * x));

(dest__7608__auto__[(1)] = ((G__25860[(1)]) * y));

(dest__7608__auto__[(2)] = ((G__25860[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7602__auto__ = (new Float32Array((3)));
var G__25861_26165 = self__.buf;
(dest__7602__auto__[(0)] = (- (G__25861_26165[(0)])));

(dest__7602__auto__[(1)] = (- (G__25861_26165[(1)])));

(dest__7602__auto__[(2)] = (- (G__25861_26165[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__7602__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7614__auto__ = (new Float32Array((3)));
var G__25862_26166 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25863_26167 = v.buf;
(dest__7614__auto__[(0)] = ((G__25862_26166[(0)]) - (G__25863_26167[(0)])));

(dest__7614__auto__[(1)] = ((G__25862_26166[(1)]) - (G__25863_26167[(1)])));

(dest__7614__auto__[(2)] = ((G__25862_26166[(2)]) - (G__25863_26167[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25862_26166[(0)]) - v));

(dest__7614__auto__[(1)] = ((G__25862_26166[(1)]) - v));

(dest__7614__auto__[(2)] = ((G__25862_26166[(2)]) - v));
} else {
(dest__7614__auto__[(0)] = ((G__25862_26166[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25862_26166[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25862_26166[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25876_26168 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25877_26169 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25878_26170 = ((!(G__25876_26168))?typeof v1 === 'number':null);
var G__25879_26171 = ((!(G__25877_26169))?typeof v2 === 'number':null);
var G__25864_26172 = self__.buf;
var G__25865_26173 = ((G__25876_26168)?v1.buf:null);
var G__25866_26174 = ((G__25877_26169)?v2.buf:null);
var G__25867_26175 = (G__25864_26172[(0)]);
var G__25868_26176 = (G__25864_26172[(1)]);
var G__25869_26177 = (G__25864_26172[(2)]);
var G__25870_26178 = ((G__25876_26168)?(G__25865_26173[(0)]):(cljs.core.truth_(G__25878_26170)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25871_26179 = ((G__25876_26168)?(G__25865_26173[(1)]):(cljs.core.truth_(G__25878_26170)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25872_26180 = ((G__25876_26168)?(G__25865_26173[(2)]):(cljs.core.truth_(G__25878_26170)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25873_26181 = ((G__25877_26169)?(G__25866_26174[(0)]):(cljs.core.truth_(G__25879_26171)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25874_26182 = ((G__25877_26169)?(G__25866_26174[(1)]):(cljs.core.truth_(G__25879_26171)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25875_26183 = ((G__25877_26169)?(G__25866_26174[(2)]):(cljs.core.truth_(G__25879_26171)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25867_26175 - G__25870_26178) - G__25873_26181));

(dest__7620__auto__[(1)] = ((G__25868_26176 - G__25871_26179) - G__25874_26182));

(dest__7620__auto__[(2)] = ((G__25869_26177 - G__25872_26180) - G__25875_26183));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25880 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__25880[(0)]) - x));

(dest__7608__auto__[(1)] = ((G__25880[(1)]) - y));

(dest__7608__auto__[(2)] = ((G__25880[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25893_26184 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25894_26185 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25895_26186 = ((!(G__25893_26184))?typeof a === 'number':null);
var G__25896_26187 = ((!(G__25894_26185))?typeof b === 'number':null);
var G__25881_26188 = self__.buf;
var G__25882_26189 = ((G__25893_26184)?a.buf:null);
var G__25883_26190 = ((G__25894_26185)?b.buf:null);
var G__25884_26191 = (G__25881_26188[(0)]);
var G__25885_26192 = (G__25881_26188[(1)]);
var G__25886_26193 = (G__25881_26188[(2)]);
var G__25887_26194 = ((G__25893_26184)?(G__25882_26189[(0)]):(cljs.core.truth_(G__25895_26186)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25888_26195 = ((G__25893_26184)?(G__25882_26189[(1)]):(cljs.core.truth_(G__25895_26186)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25889_26196 = ((G__25893_26184)?(G__25882_26189[(2)]):(cljs.core.truth_(G__25895_26186)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25890_26197 = ((G__25894_26185)?(G__25883_26190[(0)]):(cljs.core.truth_(G__25896_26187)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25891_26198 = ((G__25894_26185)?(G__25883_26190[(1)]):(cljs.core.truth_(G__25896_26187)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25892_26199 = ((G__25894_26185)?(G__25883_26190[(2)]):(cljs.core.truth_(G__25896_26187)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25884_26191 * G__25887_26194) + G__25890_26197));

(dest__7620__auto__[(1)] = ((G__25885_26192 * G__25888_26195) + G__25891_26198));

(dest__7620__auto__[(2)] = ((G__25886_26193 * G__25889_26196) + G__25892_26199));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25909_26200 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25910_26201 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25911_26202 = ((!(G__25909_26200))?typeof a === 'number':null);
var G__25912_26203 = ((!(G__25910_26201))?typeof b === 'number':null);
var G__25897_26204 = self__.buf;
var G__25898_26205 = ((G__25909_26200)?a.buf:null);
var G__25899_26206 = ((G__25910_26201)?b.buf:null);
var G__25900_26207 = (G__25897_26204[(0)]);
var G__25901_26208 = (G__25897_26204[(1)]);
var G__25902_26209 = (G__25897_26204[(2)]);
var G__25903_26210 = ((G__25909_26200)?(G__25898_26205[(0)]):(cljs.core.truth_(G__25911_26202)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25904_26211 = ((G__25909_26200)?(G__25898_26205[(1)]):(cljs.core.truth_(G__25911_26202)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25905_26212 = ((G__25909_26200)?(G__25898_26205[(2)]):(cljs.core.truth_(G__25911_26202)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25906_26213 = ((G__25910_26201)?(G__25899_26206[(0)]):(cljs.core.truth_(G__25912_26203)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25907_26214 = ((G__25910_26201)?(G__25899_26206[(1)]):(cljs.core.truth_(G__25912_26203)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25908_26215 = ((G__25910_26201)?(G__25899_26206[(2)]):(cljs.core.truth_(G__25912_26203)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25900_26207 + G__25903_26210) * G__25906_26213));

(dest__7620__auto__[(1)] = ((G__25901_26208 + G__25904_26211) * G__25907_26214));

(dest__7620__auto__[(2)] = ((G__25902_26209 + G__25905_26212) * G__25908_26215));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7602__auto__ = (new Float32Array((3)));
var G__25913_26216 = self__.buf;
(dest__7602__auto__[(0)] = ((1) / (G__25913_26216[(0)])));

(dest__7602__auto__[(1)] = ((1) / (G__25913_26216[(1)])));

(dest__7602__auto__[(2)] = ((1) / (G__25913_26216[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__7602__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7614__auto__ = (new Float32Array((3)));
var G__25914_26217 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25915_26218 = v.buf;
(dest__7614__auto__[(0)] = ((G__25914_26217[(0)]) / (G__25915_26218[(0)])));

(dest__7614__auto__[(1)] = ((G__25914_26217[(1)]) / (G__25915_26218[(1)])));

(dest__7614__auto__[(2)] = ((G__25914_26217[(2)]) / (G__25915_26218[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25914_26217[(0)]) / v));

(dest__7614__auto__[(1)] = ((G__25914_26217[(1)]) / v));

(dest__7614__auto__[(2)] = ((G__25914_26217[(2)]) / v));
} else {
(dest__7614__auto__[(0)] = ((G__25914_26217[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25914_26217[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25914_26217[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25928_26219 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25929_26220 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25930_26221 = ((!(G__25928_26219))?typeof v1 === 'number':null);
var G__25931_26222 = ((!(G__25929_26220))?typeof v2 === 'number':null);
var G__25916_26223 = self__.buf;
var G__25917_26224 = ((G__25928_26219)?v1.buf:null);
var G__25918_26225 = ((G__25929_26220)?v2.buf:null);
var G__25919_26226 = (G__25916_26223[(0)]);
var G__25920_26227 = (G__25916_26223[(1)]);
var G__25921_26228 = (G__25916_26223[(2)]);
var G__25922_26229 = ((G__25928_26219)?(G__25917_26224[(0)]):(cljs.core.truth_(G__25930_26221)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25923_26230 = ((G__25928_26219)?(G__25917_26224[(1)]):(cljs.core.truth_(G__25930_26221)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25924_26231 = ((G__25928_26219)?(G__25917_26224[(2)]):(cljs.core.truth_(G__25930_26221)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25925_26232 = ((G__25929_26220)?(G__25918_26225[(0)]):(cljs.core.truth_(G__25931_26222)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25926_26233 = ((G__25929_26220)?(G__25918_26225[(1)]):(cljs.core.truth_(G__25931_26222)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25927_26234 = ((G__25929_26220)?(G__25918_26225[(2)]):(cljs.core.truth_(G__25931_26222)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25919_26226 / G__25922_26229) / G__25925_26232));

(dest__7620__auto__[(1)] = ((G__25920_26227 / G__25923_26230) / G__25926_26233));

(dest__7620__auto__[(2)] = ((G__25921_26228 / G__25924_26231) / G__25927_26234));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25932 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__25932[(0)]) / x));

(dest__7608__auto__[(1)] = ((G__25932[(1)]) / y));

(dest__7608__auto__[(2)] = ((G__25932[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7614__auto__ = (new Float32Array((3)));
var G__25933_26235 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25934_26236 = v.buf;
(dest__7614__auto__[(0)] = ((G__25933_26235[(0)]) + (G__25934_26236[(0)])));

(dest__7614__auto__[(1)] = ((G__25933_26235[(1)]) + (G__25934_26236[(1)])));

(dest__7614__auto__[(2)] = ((G__25933_26235[(2)]) + (G__25934_26236[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25933_26235[(0)]) + v));

(dest__7614__auto__[(1)] = ((G__25933_26235[(1)]) + v));

(dest__7614__auto__[(2)] = ((G__25933_26235[(2)]) + v));
} else {
(dest__7614__auto__[(0)] = ((G__25933_26235[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25933_26235[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25933_26235[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25947_26237 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25948_26238 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25949_26239 = ((!(G__25947_26237))?typeof v1 === 'number':null);
var G__25950_26240 = ((!(G__25948_26238))?typeof v2 === 'number':null);
var G__25935_26241 = self__.buf;
var G__25936_26242 = ((G__25947_26237)?v1.buf:null);
var G__25937_26243 = ((G__25948_26238)?v2.buf:null);
var G__25938_26244 = (G__25935_26241[(0)]);
var G__25939_26245 = (G__25935_26241[(1)]);
var G__25940_26246 = (G__25935_26241[(2)]);
var G__25941_26247 = ((G__25947_26237)?(G__25936_26242[(0)]):(cljs.core.truth_(G__25949_26239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25942_26248 = ((G__25947_26237)?(G__25936_26242[(1)]):(cljs.core.truth_(G__25949_26239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25943_26249 = ((G__25947_26237)?(G__25936_26242[(2)]):(cljs.core.truth_(G__25949_26239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25944_26250 = ((G__25948_26238)?(G__25937_26243[(0)]):(cljs.core.truth_(G__25950_26240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25945_26251 = ((G__25948_26238)?(G__25937_26243[(1)]):(cljs.core.truth_(G__25950_26240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25946_26252 = ((G__25948_26238)?(G__25937_26243[(2)]):(cljs.core.truth_(G__25950_26240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25938_26244 + G__25941_26247) + G__25944_26250));

(dest__7620__auto__[(1)] = ((G__25939_26245 + G__25942_26248) + G__25945_26251));

(dest__7620__auto__[(2)] = ((G__25940_26246 + G__25943_26249) + G__25946_26252));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25951 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__25951[(0)]) + x));

(dest__7608__auto__[(1)] = ((G__25951[(1)]) + y));

(dest__7608__auto__[(2)] = ((G__25951[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__7602__auto__ = (new Float32Array((3)));
var G__25952_26253 = self__.buf;
(dest__7602__auto__[(0)] = (function (){var G__25953 = (G__25952_26253[(0)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25953) : thi.ng.common.math.core.abs.call(null,G__25953));
})());

(dest__7602__auto__[(1)] = (function (){var G__25954 = (G__25952_26253[(1)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25954) : thi.ng.common.math.core.abs.call(null,G__25954));
})());

(dest__7602__auto__[(2)] = (function (){var G__25955 = (G__25952_26253[(2)]);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__25955) : thi.ng.common.math.core.abs.call(null,G__25955));
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7602__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25968_26254 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__25969_26255 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__25970_26256 = ((!(G__25968_26254))?typeof a === 'number':null);
var G__25971_26257 = ((!(G__25969_26255))?typeof b === 'number':null);
var G__25956_26258 = self__.buf;
var G__25957_26259 = ((G__25968_26254)?a.buf:null);
var G__25958_26260 = ((G__25969_26255)?b.buf:null);
var G__25959_26261 = (G__25956_26258[(0)]);
var G__25960_26262 = (G__25956_26258[(1)]);
var G__25961_26263 = (G__25956_26258[(2)]);
var G__25962_26264 = ((G__25968_26254)?(G__25957_26259[(0)]):(cljs.core.truth_(G__25970_26256)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__25963_26265 = ((G__25968_26254)?(G__25957_26259[(1)]):(cljs.core.truth_(G__25970_26256)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__25964_26266 = ((G__25968_26254)?(G__25957_26259[(2)]):(cljs.core.truth_(G__25970_26256)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__25965_26267 = ((G__25969_26255)?(G__25958_26260[(0)]):(cljs.core.truth_(G__25971_26257)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__25966_26268 = ((G__25969_26255)?(G__25958_26260[(1)]):(cljs.core.truth_(G__25971_26257)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__25967_26269 = ((G__25969_26255)?(G__25958_26260[(2)]):(cljs.core.truth_(G__25971_26257)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25959_26261 - G__25962_26264) * G__25965_26267));

(dest__7620__auto__[(1)] = ((G__25960_26262 - G__25963_26265) * G__25966_26268));

(dest__7620__auto__[(2)] = ((G__25961_26263 - G__25964_26266) * G__25967_26269));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
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
var dest__7614__auto__ = (new Float32Array((3)));
var G__25972_26270 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25973_26271 = v.buf;
(dest__7614__auto__[(0)] = ((G__25972_26270[(0)]) + (G__25973_26271[(0)])));

(dest__7614__auto__[(1)] = ((G__25972_26270[(1)]) + (G__25973_26271[(1)])));

(dest__7614__auto__[(2)] = ((G__25972_26270[(2)]) + (G__25973_26271[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25972_26270[(0)]) + v));

(dest__7614__auto__[(1)] = ((G__25972_26270[(1)]) + v));

(dest__7614__auto__[(2)] = ((G__25972_26270[(2)]) + v));
} else {
(dest__7614__auto__[(0)] = ((G__25972_26270[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25972_26270[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25972_26270[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__25986_26272 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__25987_26273 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__25988_26274 = ((!(G__25986_26272))?typeof v1 === 'number':null);
var G__25989_26275 = ((!(G__25987_26273))?typeof v2 === 'number':null);
var G__25974_26276 = self__.buf;
var G__25975_26277 = ((G__25986_26272)?v1.buf:null);
var G__25976_26278 = ((G__25987_26273)?v2.buf:null);
var G__25977_26279 = (G__25974_26276[(0)]);
var G__25978_26280 = (G__25974_26276[(1)]);
var G__25979_26281 = (G__25974_26276[(2)]);
var G__25980_26282 = ((G__25986_26272)?(G__25975_26277[(0)]):(cljs.core.truth_(G__25988_26274)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__25981_26283 = ((G__25986_26272)?(G__25975_26277[(1)]):(cljs.core.truth_(G__25988_26274)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__25982_26284 = ((G__25986_26272)?(G__25975_26277[(2)]):(cljs.core.truth_(G__25988_26274)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__25983_26285 = ((G__25987_26273)?(G__25976_26278[(0)]):(cljs.core.truth_(G__25989_26275)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__25984_26286 = ((G__25987_26273)?(G__25976_26278[(1)]):(cljs.core.truth_(G__25989_26275)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__25985_26287 = ((G__25987_26273)?(G__25976_26278[(2)]):(cljs.core.truth_(G__25989_26275)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = ((G__25977_26279 + G__25980_26282) + G__25983_26285));

(dest__7620__auto__[(1)] = ((G__25978_26280 + G__25981_26283) + G__25984_26286));

(dest__7620__auto__[(2)] = ((G__25979_26281 + G__25982_26284) + G__25985_26287));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__25990 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__25990[(0)]) + x));

(dest__7608__auto__[(1)] = ((G__25990[(1)]) + y));

(dest__7608__auto__[(2)] = ((G__25990[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_((function (){var G__25991 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__25991) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__25991));
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
return (new thi.ng.geom.core.vector.Vec3((function (){var G__25992 = self__.buf;
var G__25993 = (new Float32Array(self__.buf));
var G__25994 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__25995 = k;
var G__25996 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__25992,G__25993,G__25994,G__25995,G__25996) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__25992,G__25993,G__25994,G__25995,G__25996));
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
var dest__7614__auto__ = (new Float32Array((3)));
var G__25997_26288 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__25998_26289 = v.buf;
(dest__7614__auto__[(0)] = ((G__25997_26288[(0)]) * (G__25998_26289[(0)])));

(dest__7614__auto__[(1)] = ((G__25997_26288[(1)]) * (G__25998_26289[(1)])));

(dest__7614__auto__[(2)] = ((G__25997_26288[(2)]) * (G__25998_26289[(2)])));
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = ((G__25997_26288[(0)]) * v));

(dest__7614__auto__[(1)] = ((G__25997_26288[(1)]) * v));

(dest__7614__auto__[(2)] = ((G__25997_26288[(2)]) * v));
} else {
(dest__7614__auto__[(0)] = ((G__25997_26288[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__7614__auto__[(1)] = ((G__25997_26288[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__7614__auto__[(2)] = ((G__25997_26288[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__26011_26290 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__26012_26291 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__26013_26292 = ((!(G__26011_26290))?typeof v1 === 'number':null);
var G__26014_26293 = ((!(G__26012_26291))?typeof v2 === 'number':null);
var G__25999_26294 = self__.buf;
var G__26000_26295 = ((G__26011_26290)?v1.buf:null);
var G__26001_26296 = ((G__26012_26291)?v2.buf:null);
var G__26002_26297 = (G__25999_26294[(0)]);
var G__26003_26298 = (G__25999_26294[(1)]);
var G__26004_26299 = (G__25999_26294[(2)]);
var G__26005_26300 = ((G__26011_26290)?(G__26000_26295[(0)]):(cljs.core.truth_(G__26013_26292)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__26006_26301 = ((G__26011_26290)?(G__26000_26295[(1)]):(cljs.core.truth_(G__26013_26292)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__26007_26302 = ((G__26011_26290)?(G__26000_26295[(2)]):(cljs.core.truth_(G__26013_26292)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),1.0)));
var G__26008_26303 = ((G__26012_26291)?(G__26001_26296[(0)]):(cljs.core.truth_(G__26014_26293)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__26009_26304 = ((G__26012_26291)?(G__26001_26296[(1)]):(cljs.core.truth_(G__26014_26293)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
var G__26010_26305 = ((G__26012_26291)?(G__26001_26296[(2)]):(cljs.core.truth_(G__26014_26293)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),1.0)));
(dest__7620__auto__[(0)] = ((G__26002_26297 * G__26005_26300) * G__26008_26303));

(dest__7620__auto__[(1)] = ((G__26003_26298 * G__26006_26301) * G__26009_26304));

(dest__7620__auto__[(2)] = ((G__26004_26299 * G__26007_26302) * G__26010_26305));

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__26015 = self__.buf;
var dest__7608__auto__ = (new Float32Array((3)));
(dest__7608__auto__[(0)] = ((G__26015[(0)]) * x));

(dest__7608__auto__[(1)] = ((G__26015[(1)]) * y));

(dest__7608__auto__[(2)] = ((G__26015[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__7608__auto__,null,self__._meta));
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
var G__26306 = null;
var G__26306__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__26016 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__26016) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__26016));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__26017 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26017) : f.call(null,G__26017));
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
var G__26306__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__26018 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__26018) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__26018));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__26019 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26019) : f.call(null,G__26019));
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
G__26306 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__26306__2.call(this,self__,k);
case 3:
return G__26306__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26306.cljs$core$IFn$_invoke$arity$2 = G__26306__2;
G__26306.cljs$core$IFn$_invoke$arity$3 = G__26306__3;
return G__26306;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args25726){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25726)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4420__auto__ = (function (){var G__26020 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__26020) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__26020));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__26021 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26021) : f.call(null,G__26021));
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
var temp__4420__auto__ = (function (){var G__26022 = k;
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__26022) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__26022));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var f = temp__4420__auto__;
var G__26023 = _;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26023) : f.call(null,G__26023));
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
var dest__7614__auto__ = (new Float32Array((3)));
var G__26024_26307 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__26025_26308 = v.buf;
(dest__7614__auto__[(0)] = (function (){var a__7152__auto__ = (G__26024_26307[(0)]);
var b__7153__auto__ = (G__26025_26308[(0)]);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7152__auto__ = (G__26024_26307[(1)]);
var b__7153__auto__ = (G__26025_26308[(1)]);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7152__auto__ = (G__26024_26307[(2)]);
var b__7153__auto__ = (G__26025_26308[(2)]);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = (function (){var a__7152__auto__ = (G__26024_26307[(0)]);
var b__7153__auto__ = v;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7152__auto__ = (G__26024_26307[(1)]);
var b__7153__auto__ = v;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7152__auto__ = (G__26024_26307[(2)]);
var b__7153__auto__ = v;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
} else {
(dest__7614__auto__[(0)] = (function (){var a__7152__auto__ = (G__26024_26307[(0)]);
var b__7153__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7152__auto__ = (G__26024_26307[(1)]);
var b__7153__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7152__auto__ = (G__26024_26307[(2)]);
var b__7153__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__26038_26309 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__26039_26310 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__26040_26311 = ((!(G__26038_26309))?typeof v === 'number':null);
var G__26041_26312 = ((!(G__26039_26310))?typeof v2 === 'number':null);
var G__26026_26313 = self__.buf;
var G__26027_26314 = ((G__26038_26309)?v.buf:null);
var G__26028_26315 = ((G__26039_26310)?v2.buf:null);
var G__26029_26316 = (G__26026_26313[(0)]);
var G__26030_26317 = (G__26026_26313[(1)]);
var G__26031_26318 = (G__26026_26313[(2)]);
var G__26032_26319 = ((G__26038_26309)?(G__26027_26314[(0)]):(cljs.core.truth_(G__26040_26311)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26033_26320 = ((G__26038_26309)?(G__26027_26314[(1)]):(cljs.core.truth_(G__26040_26311)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26034_26321 = ((G__26038_26309)?(G__26027_26314[(2)]):(cljs.core.truth_(G__26040_26311)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__26035_26322 = ((G__26039_26310)?(G__26028_26315[(0)]):(cljs.core.truth_(G__26041_26312)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26036_26323 = ((G__26039_26310)?(G__26028_26315[(1)]):(cljs.core.truth_(G__26041_26312)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__26037_26324 = ((G__26039_26310)?(G__26028_26315[(2)]):(cljs.core.truth_(G__26041_26312)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = (function (){var a__7152__auto__ = (function (){var a__7152__auto__ = G__26029_26316;
var b__7153__auto__ = G__26032_26319;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})();
var b__7153__auto__ = G__26035_26322;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7620__auto__[(1)] = (function (){var a__7152__auto__ = (function (){var a__7152__auto__ = G__26030_26317;
var b__7153__auto__ = G__26033_26320;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})();
var b__7153__auto__ = G__26036_26323;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

(dest__7620__auto__[(2)] = (function (){var a__7152__auto__ = (function (){var a__7152__auto__ = G__26031_26318;
var b__7153__auto__ = G__26034_26321;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})();
var b__7153__auto__ = G__26037_26324;
if((a__7152__auto__ <= b__7153__auto__)){
return a__7152__auto__;
} else {
return b__7153__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__7614__auto__ = (new Float32Array((3)));
var G__26042_26325 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__26043_26326 = v.buf;
(dest__7614__auto__[(0)] = (function (){var a__7159__auto__ = (G__26042_26325[(0)]);
var b__7160__auto__ = (G__26043_26326[(0)]);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7159__auto__ = (G__26042_26325[(1)]);
var b__7160__auto__ = (G__26043_26326[(1)]);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7159__auto__ = (G__26042_26325[(2)]);
var b__7160__auto__ = (G__26043_26326[(2)]);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__7614__auto__[(0)] = (function (){var a__7159__auto__ = (G__26042_26325[(0)]);
var b__7160__auto__ = v;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7159__auto__ = (G__26042_26325[(1)]);
var b__7160__auto__ = v;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7159__auto__ = (G__26042_26325[(2)]);
var b__7160__auto__ = v;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
} else {
(dest__7614__auto__[(0)] = (function (){var a__7159__auto__ = (G__26042_26325[(0)]);
var b__7160__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(1)] = (function (){var a__7159__auto__ = (G__26042_26325[(1)]);
var b__7160__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7614__auto__[(2)] = (function (){var a__7159__auto__ = (G__26042_26325[(2)]);
var b__7160__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__7614__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__7620__auto__ = (new Float32Array((3)));
var G__26056_26327 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__26057_26328 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__26058_26329 = ((!(G__26056_26327))?typeof v === 'number':null);
var G__26059_26330 = ((!(G__26057_26328))?typeof v2 === 'number':null);
var G__26044_26331 = self__.buf;
var G__26045_26332 = ((G__26056_26327)?v.buf:null);
var G__26046_26333 = ((G__26057_26328)?v2.buf:null);
var G__26047_26334 = (G__26044_26331[(0)]);
var G__26048_26335 = (G__26044_26331[(1)]);
var G__26049_26336 = (G__26044_26331[(2)]);
var G__26050_26337 = ((G__26056_26327)?(G__26045_26332[(0)]):(cljs.core.truth_(G__26058_26329)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26051_26338 = ((G__26056_26327)?(G__26045_26332[(1)]):(cljs.core.truth_(G__26058_26329)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26052_26339 = ((G__26056_26327)?(G__26045_26332[(2)]):(cljs.core.truth_(G__26058_26329)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__26053_26340 = ((G__26057_26328)?(G__26046_26333[(0)]):(cljs.core.truth_(G__26059_26330)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26054_26341 = ((G__26057_26328)?(G__26046_26333[(1)]):(cljs.core.truth_(G__26059_26330)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__26055_26342 = ((G__26057_26328)?(G__26046_26333[(2)]):(cljs.core.truth_(G__26059_26330)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__7620__auto__[(0)] = (function (){var a__7159__auto__ = (function (){var a__7159__auto__ = G__26047_26334;
var b__7160__auto__ = G__26050_26337;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})();
var b__7160__auto__ = G__26053_26340;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7620__auto__[(1)] = (function (){var a__7159__auto__ = (function (){var a__7159__auto__ = G__26048_26335;
var b__7160__auto__ = G__26051_26338;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})();
var b__7160__auto__ = G__26054_26341;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

(dest__7620__auto__[(2)] = (function (){var a__7159__auto__ = (function (){var a__7159__auto__ = G__26049_26336;
var b__7160__auto__ = G__26052_26339;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})();
var b__7160__auto__ = G__26055_26342;
if((a__7159__auto__ >= b__7160__auto__)){
return a__7159__auto__;
} else {
return b__7160__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__7620__auto__,null,self__._meta));
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
return (new thi.ng.geom.core.vector.Vec3((function (){var G__26060 = f;
var G__26061 = ___$1;
var G__26062 = xs;
return (thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__26060,G__26061,G__26062) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,G__26060,G__26061,G__26062));
})(),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var b = (function (){var G__26063 = f;
var G__26064 = ___$1;
var G__26065 = xs;
return (thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(G__26063,G__26064,G__26065) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,G__26063,G__26064,G__26065));
})();
(b[(0)] = (function (){var G__26066 = (b[(0)]);
var G__26067 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__26066,G__26067) : f2.call(null,G__26066,G__26067));
})());

(b[(1)] = (function (){var G__26068 = (b[(1)]);
var G__26069 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__26068,G__26069) : f2.call(null,G__26068,G__26069));
})());

(b[(2)] = (function (){var G__26070 = (b[(2)]);
var G__26071 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__26070,G__26071) : f2.call(null,G__26070,G__26071));
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
var G__26072 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__26073 = v.buf;
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(0)]),(G__26073[(0)]),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(1)]),(G__26073[(1)]),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(2)]),(G__26073[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26072[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
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
var G__26074 = self__.buf;
var G__26075 = (G__26074[(0)]);
var G__26076 = (G__26074[(1)]);
var G__26077 = (G__26074[(2)]);
var G__26078 = (((G__26075 * G__26075) + (G__26076 * G__26076)) + (G__26077 * G__26077));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__26078) : Math.sqrt.call(null,G__26078));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26079 = self__.buf;
var G__26080 = (G__26079[(0)]);
var G__26081 = (G__26079[(1)]);
var G__26082 = (G__26079[(2)]);
return (((G__26080 * G__26080) + (G__26081 * G__26081)) + (G__26082 * G__26082));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__26083_26343 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__26084_26344 = v.buf;
(b[(0)] = (((G__26083_26343[(0)]) + (G__26084_26344[(0)])) * 0.5));

(b[(1)] = (((G__26083_26343[(1)]) + (G__26084_26344[(1)])) * 0.5));

(b[(2)] = (((G__26083_26343[(2)]) + (G__26084_26344[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__26083_26343[(0)]) + v) * 0.5));

(b[(1)] = (((G__26083_26343[(1)]) + v) * 0.5));

(b[(2)] = (((G__26083_26343[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__26083_26343[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__26083_26343[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__26083_26343[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__26097_26345 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__26098_26346 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__26099_26347 = ((!(G__26097_26345))?typeof v === 'number':null);
var G__26100_26348 = ((!(G__26098_26346))?typeof v2 === 'number':null);
var G__26085_26349 = self__.buf;
var G__26086_26350 = ((G__26097_26345)?v.buf:null);
var G__26087_26351 = ((G__26098_26346)?v2.buf:null);
var G__26088_26352 = (G__26085_26349[(0)]);
var G__26089_26353 = (G__26085_26349[(1)]);
var G__26090_26354 = (G__26085_26349[(2)]);
var G__26091_26355 = ((G__26097_26345)?(G__26086_26350[(0)]):(cljs.core.truth_(G__26099_26347)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26092_26356 = ((G__26097_26345)?(G__26086_26350[(1)]):(cljs.core.truth_(G__26099_26347)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26093_26357 = ((G__26097_26345)?(G__26086_26350[(2)]):(cljs.core.truth_(G__26099_26347)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__26094_26358 = ((G__26098_26346)?(G__26087_26351[(0)]):(cljs.core.truth_(G__26100_26348)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26095_26359 = ((G__26098_26346)?(G__26087_26351[(1)]):(cljs.core.truth_(G__26100_26348)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__26096_26360 = ((G__26098_26346)?(G__26087_26351[(2)]):(cljs.core.truth_(G__26100_26348)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(b[(0)] = (((G__26091_26355 - G__26088_26352) * G__26094_26358) + G__26088_26352));

(b[(1)] = (((G__26092_26356 - G__26089_26353) * G__26095_26359) + G__26089_26353));

(b[(2)] = (((G__26093_26357 - G__26090_26354) * G__26096_26360) + G__26090_26354));

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
var G__26113_26361 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__26114_26362 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__26115_26363 = ((!(G__26113_26361))?typeof b === 'number':null);
var G__26116_26364 = ((!(G__26114_26362))?typeof c === 'number':null);
var G__26101_26365 = self__.buf;
var G__26102_26366 = ((G__26113_26361)?b.buf:null);
var G__26103_26367 = ((G__26114_26362)?c.buf:null);
var G__26104_26368 = (G__26101_26365[(0)]);
var G__26105_26369 = (G__26101_26365[(1)]);
var G__26106_26370 = (G__26101_26365[(2)]);
var G__26107_26371 = ((G__26113_26361)?(G__26102_26366[(0)]):(cljs.core.truth_(G__26115_26363)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26108_26372 = ((G__26113_26361)?(G__26102_26366[(1)]):(cljs.core.truth_(G__26115_26363)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__26109_26373 = ((G__26113_26361)?(G__26102_26366[(2)]):(cljs.core.truth_(G__26115_26363)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__26110_26374 = ((G__26114_26362)?(G__26103_26367[(0)]):(cljs.core.truth_(G__26116_26364)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__26111_26375 = ((G__26114_26362)?(G__26103_26367[(1)]):(cljs.core.truth_(G__26116_26364)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__26112_26376 = ((G__26114_26362)?(G__26103_26367[(2)]):(cljs.core.truth_(G__26116_26364)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_26377 = (((G__26107_26371 - G__26104_26368) * u) + G__26104_26368);
var y1_26378 = (((G__26108_26372 - G__26105_26369) * u) + G__26105_26369);
var z1_26379 = (((G__26109_26373 - G__26106_26370) * u) + G__26106_26370);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__26110_26374) * u) + G__26110_26374) - x1_26377) * v) + x1_26377));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__26111_26375) * u) + G__26111_26375) - y1_26378) * v) + y1_26378));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__26112_26376) * u) + G__26112_26376) - z1_26379) * v) + z1_26379));

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

(b[(1)] = (function (){var G__26117 = ((self__.buf[(2)]) / r);
return (Math.asin.cljs$core$IFn$_invoke$arity$1 ? Math.asin.cljs$core$IFn$_invoke$arity$1(G__26117) : Math.asin.call(null,G__26117));
})());

(b[(2)] = (function (){var G__26118 = (self__.buf[(1)]);
var G__26119 = (self__.buf[(0)]);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__26118,G__26119) : Math.atan2.call(null,G__26118,G__26119));
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
var rcos = (x * (function (){var G__25789 = y;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25789) : Math.cos.call(null,G__25789));
})());
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * (function (){var G__25790 = z;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__25790) : Math.cos.call(null,G__25790));
})()));

(b_SINGLEQUOTE_[(1)] = (rcos * (function (){var G__25791 = z;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25791) : Math.sin.call(null,G__25791));
})()));

(b_SINGLEQUOTE_[(2)] = (x * (function (){var G__25792 = y;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__25792) : Math.sin.call(null,G__25792));
})()));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__26382){
var G__26380 = (((G__26382 instanceof thi.ng.geom.core.vector.Vec2))?G__26382.buf:G__26382.buf);
return (G__26380[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__26385){
var G__26383 = (((G__26385 instanceof thi.ng.geom.core.vector.Vec2))?G__26385.buf:G__26385.buf);
var G__26384 = (new Float32Array(2));
(G__26384[(0)] = (G__26383[(0)]));

(G__26384[(1)] = (G__26383[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__26384,null,cljs.core.meta(G__26385)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__26388){
var G__26386 = (((G__26388 instanceof thi.ng.geom.core.vector.Vec2))?G__26388.buf:G__26388.buf);
var G__26387 = (new Float32Array(3));
(G__26387[(0)] = (G__26386[(0)]));

(G__26387[(1)] = (G__26386[(0)]));

(G__26387[(2)] = (G__26386[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26387,null,cljs.core.meta(G__26388)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__26391){
var G__26389 = (((G__26391 instanceof thi.ng.geom.core.vector.Vec2))?G__26391.buf:G__26391.buf);
var G__26390 = (new Float32Array(3));
(G__26390[(0)] = (G__26389[(0)]));

(G__26390[(1)] = (G__26389[(0)]));

(G__26390[(2)] = (G__26389[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26390,null,cljs.core.meta(G__26391)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__26394){
if((G__26394 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26394","G__26394",435919324,null))], 0)))].join('')));
}

var G__26392 = (((G__26394 instanceof thi.ng.geom.core.vector.Vec2))?G__26394.buf:G__26394.buf);
var G__26393 = (new Float32Array(3));
(G__26393[(0)] = (G__26392[(0)]));

(G__26393[(1)] = (G__26392[(0)]));

(G__26393[(2)] = (G__26392[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26393,null,cljs.core.meta(G__26394)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__26397){
var G__26395 = (((G__26397 instanceof thi.ng.geom.core.vector.Vec2))?G__26397.buf:G__26397.buf);
var G__26396 = (new Float32Array(2));
(G__26396[(0)] = (G__26395[(0)]));

(G__26396[(1)] = (G__26395[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__26396,null,cljs.core.meta(G__26397)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__26400){
var G__26398 = (((G__26400 instanceof thi.ng.geom.core.vector.Vec2))?G__26400.buf:G__26400.buf);
var G__26399 = (new Float32Array(3));
(G__26399[(0)] = (G__26398[(0)]));

(G__26399[(1)] = (G__26398[(1)]));

(G__26399[(2)] = (G__26398[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26399,null,cljs.core.meta(G__26400)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__26403){
var G__26401 = (((G__26403 instanceof thi.ng.geom.core.vector.Vec2))?G__26403.buf:G__26403.buf);
var G__26402 = (new Float32Array(3));
(G__26402[(0)] = (G__26401[(0)]));

(G__26402[(1)] = (G__26401[(1)]));

(G__26402[(2)] = (G__26401[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26402,null,cljs.core.meta(G__26403)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__26406){
if((G__26406 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26406","G__26406",-1433580223,null))], 0)))].join('')));
}

var G__26404 = (((G__26406 instanceof thi.ng.geom.core.vector.Vec2))?G__26406.buf:G__26406.buf);
var G__26405 = (new Float32Array(3));
(G__26405[(0)] = (G__26404[(0)]));

(G__26405[(1)] = (G__26404[(1)]));

(G__26405[(2)] = (G__26404[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26405,null,cljs.core.meta(G__26406)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__26409){
if((G__26409 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26409","G__26409",277495028,null))], 0)))].join('')));
}

var G__26407 = (((G__26409 instanceof thi.ng.geom.core.vector.Vec2))?G__26409.buf:G__26409.buf);
var G__26408 = (new Float32Array(2));
(G__26408[(0)] = (G__26407[(0)]));

(G__26408[(1)] = (G__26407[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__26408,null,cljs.core.meta(G__26409)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__26412){
if((G__26412 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26412","G__26412",-962053720,null))], 0)))].join('')));
}

var G__26410 = (((G__26412 instanceof thi.ng.geom.core.vector.Vec2))?G__26412.buf:G__26412.buf);
var G__26411 = (new Float32Array(3));
(G__26411[(0)] = (G__26410[(0)]));

(G__26411[(1)] = (G__26410[(2)]));

(G__26411[(2)] = (G__26410[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26411,null,cljs.core.meta(G__26412)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__26415){
if((G__26415 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26415","G__26415",-1807796099,null))], 0)))].join('')));
}

var G__26413 = (((G__26415 instanceof thi.ng.geom.core.vector.Vec2))?G__26415.buf:G__26415.buf);
var G__26414 = (new Float32Array(3));
(G__26414[(0)] = (G__26413[(0)]));

(G__26414[(1)] = (G__26413[(2)]));

(G__26414[(2)] = (G__26413[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26414,null,cljs.core.meta(G__26415)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__26418){
if((G__26418 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26418","G__26418",-1440242430,null))], 0)))].join('')));
}

var G__26416 = (((G__26418 instanceof thi.ng.geom.core.vector.Vec2))?G__26418.buf:G__26418.buf);
var G__26417 = (new Float32Array(3));
(G__26417[(0)] = (G__26416[(0)]));

(G__26417[(1)] = (G__26416[(2)]));

(G__26417[(2)] = (G__26416[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26417,null,cljs.core.meta(G__26418)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__26421){
var G__26419 = (((G__26421 instanceof thi.ng.geom.core.vector.Vec2))?G__26421.buf:G__26421.buf);
return (G__26419[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__26424){
var G__26422 = (((G__26424 instanceof thi.ng.geom.core.vector.Vec2))?G__26424.buf:G__26424.buf);
var G__26423 = (new Float32Array(2));
(G__26423[(0)] = (G__26422[(1)]));

(G__26423[(1)] = (G__26422[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__26423,null,cljs.core.meta(G__26424)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__26427){
var G__26425 = (((G__26427 instanceof thi.ng.geom.core.vector.Vec2))?G__26427.buf:G__26427.buf);
var G__26426 = (new Float32Array(3));
(G__26426[(0)] = (G__26425[(1)]));

(G__26426[(1)] = (G__26425[(0)]));

(G__26426[(2)] = (G__26425[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26426,null,cljs.core.meta(G__26427)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__26430){
var G__26428 = (((G__26430 instanceof thi.ng.geom.core.vector.Vec2))?G__26430.buf:G__26430.buf);
var G__26429 = (new Float32Array(3));
(G__26429[(0)] = (G__26428[(1)]));

(G__26429[(1)] = (G__26428[(0)]));

(G__26429[(2)] = (G__26428[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26429,null,cljs.core.meta(G__26430)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__26433){
if((G__26433 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26433","G__26433",1110956738,null))], 0)))].join('')));
}

var G__26431 = (((G__26433 instanceof thi.ng.geom.core.vector.Vec2))?G__26433.buf:G__26433.buf);
var G__26432 = (new Float32Array(3));
(G__26432[(0)] = (G__26431[(1)]));

(G__26432[(1)] = (G__26431[(0)]));

(G__26432[(2)] = (G__26431[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26432,null,cljs.core.meta(G__26433)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__26436){
var G__26434 = (((G__26436 instanceof thi.ng.geom.core.vector.Vec2))?G__26436.buf:G__26436.buf);
var G__26435 = (new Float32Array(2));
(G__26435[(0)] = (G__26434[(1)]));

(G__26435[(1)] = (G__26434[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__26435,null,cljs.core.meta(G__26436)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__26439){
var G__26437 = (((G__26439 instanceof thi.ng.geom.core.vector.Vec2))?G__26439.buf:G__26439.buf);
var G__26438 = (new Float32Array(3));
(G__26438[(0)] = (G__26437[(1)]));

(G__26438[(1)] = (G__26437[(1)]));

(G__26438[(2)] = (G__26437[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26438,null,cljs.core.meta(G__26439)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__26442){
var G__26440 = (((G__26442 instanceof thi.ng.geom.core.vector.Vec2))?G__26442.buf:G__26442.buf);
var G__26441 = (new Float32Array(3));
(G__26441[(0)] = (G__26440[(1)]));

(G__26441[(1)] = (G__26440[(1)]));

(G__26441[(2)] = (G__26440[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26441,null,cljs.core.meta(G__26442)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__26445){
if((G__26445 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26445","G__26445",-1629633319,null))], 0)))].join('')));
}

var G__26443 = (((G__26445 instanceof thi.ng.geom.core.vector.Vec2))?G__26445.buf:G__26445.buf);
var G__26444 = (new Float32Array(3));
(G__26444[(0)] = (G__26443[(1)]));

(G__26444[(1)] = (G__26443[(1)]));

(G__26444[(2)] = (G__26443[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26444,null,cljs.core.meta(G__26445)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__26448){
if((G__26448 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26448","G__26448",897264100,null))], 0)))].join('')));
}

var G__26446 = (((G__26448 instanceof thi.ng.geom.core.vector.Vec2))?G__26448.buf:G__26448.buf);
var G__26447 = (new Float32Array(2));
(G__26447[(0)] = (G__26446[(1)]));

(G__26447[(1)] = (G__26446[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__26447,null,cljs.core.meta(G__26448)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__26451){
if((G__26451 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26451","G__26451",-1724782016,null))], 0)))].join('')));
}

var G__26449 = (((G__26451 instanceof thi.ng.geom.core.vector.Vec2))?G__26451.buf:G__26451.buf);
var G__26450 = (new Float32Array(3));
(G__26450[(0)] = (G__26449[(1)]));

(G__26450[(1)] = (G__26449[(2)]));

(G__26450[(2)] = (G__26449[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26450,null,cljs.core.meta(G__26451)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__26454){
if((G__26454 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26454","G__26454",1445209111,null))], 0)))].join('')));
}

var G__26452 = (((G__26454 instanceof thi.ng.geom.core.vector.Vec2))?G__26454.buf:G__26454.buf);
var G__26453 = (new Float32Array(3));
(G__26453[(0)] = (G__26452[(1)]));

(G__26453[(1)] = (G__26452[(2)]));

(G__26453[(2)] = (G__26452[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26453,null,cljs.core.meta(G__26454)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__26457){
if((G__26457 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26457","G__26457",-1043881831,null))], 0)))].join('')));
}

var G__26455 = (((G__26457 instanceof thi.ng.geom.core.vector.Vec2))?G__26457.buf:G__26457.buf);
var G__26456 = (new Float32Array(3));
(G__26456[(0)] = (G__26455[(1)]));

(G__26456[(1)] = (G__26455[(2)]));

(G__26456[(2)] = (G__26455[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26456,null,cljs.core.meta(G__26457)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__26460){
if((G__26460 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26460","G__26460",2074310109,null))], 0)))].join('')));
}

var G__26458 = (((G__26460 instanceof thi.ng.geom.core.vector.Vec2))?G__26460.buf:G__26460.buf);
return (G__26458[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__26463){
if((G__26463 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26463","G__26463",1655959664,null))], 0)))].join('')));
}

var G__26461 = (((G__26463 instanceof thi.ng.geom.core.vector.Vec2))?G__26463.buf:G__26463.buf);
var G__26462 = (new Float32Array(2));
(G__26462[(0)] = (G__26461[(2)]));

(G__26462[(1)] = (G__26461[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__26462,null,cljs.core.meta(G__26463)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__26466){
if((G__26466 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26466","G__26466",122854865,null))], 0)))].join('')));
}

var G__26464 = (((G__26466 instanceof thi.ng.geom.core.vector.Vec2))?G__26466.buf:G__26466.buf);
var G__26465 = (new Float32Array(3));
(G__26465[(0)] = (G__26464[(2)]));

(G__26465[(1)] = (G__26464[(0)]));

(G__26465[(2)] = (G__26464[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26465,null,cljs.core.meta(G__26466)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__26469){
if((G__26469 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26469","G__26469",-460808658,null))], 0)))].join('')));
}

var G__26467 = (((G__26469 instanceof thi.ng.geom.core.vector.Vec2))?G__26469.buf:G__26469.buf);
var G__26468 = (new Float32Array(3));
(G__26468[(0)] = (G__26467[(2)]));

(G__26468[(1)] = (G__26467[(0)]));

(G__26468[(2)] = (G__26467[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26468,null,cljs.core.meta(G__26469)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__26472){
if((G__26472 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26472","G__26472",168068597,null))], 0)))].join('')));
}

var G__26470 = (((G__26472 instanceof thi.ng.geom.core.vector.Vec2))?G__26472.buf:G__26472.buf);
var G__26471 = (new Float32Array(3));
(G__26471[(0)] = (G__26470[(2)]));

(G__26471[(1)] = (G__26470[(0)]));

(G__26471[(2)] = (G__26470[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26471,null,cljs.core.meta(G__26472)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__26475){
if((G__26475 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26475","G__26475",455469763,null))], 0)))].join('')));
}

var G__26473 = (((G__26475 instanceof thi.ng.geom.core.vector.Vec2))?G__26475.buf:G__26475.buf);
var G__26474 = (new Float32Array(2));
(G__26474[(0)] = (G__26473[(2)]));

(G__26474[(1)] = (G__26473[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__26474,null,cljs.core.meta(G__26475)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__26478){
if((G__26478 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26478","G__26478",-1220080114,null))], 0)))].join('')));
}

var G__26476 = (((G__26478 instanceof thi.ng.geom.core.vector.Vec2))?G__26478.buf:G__26478.buf);
var G__26477 = (new Float32Array(3));
(G__26477[(0)] = (G__26476[(2)]));

(G__26477[(1)] = (G__26476[(1)]));

(G__26477[(2)] = (G__26476[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26477,null,cljs.core.meta(G__26478)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__26481){
if((G__26481 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26481","G__26481",558428434,null))], 0)))].join('')));
}

var G__26479 = (((G__26481 instanceof thi.ng.geom.core.vector.Vec2))?G__26481.buf:G__26481.buf);
var G__26480 = (new Float32Array(3));
(G__26480[(0)] = (G__26479[(2)]));

(G__26480[(1)] = (G__26479[(1)]));

(G__26480[(2)] = (G__26479[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26480,null,cljs.core.meta(G__26481)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__26484){
if((G__26484 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26484","G__26484",275939058,null))], 0)))].join('')));
}

var G__26482 = (((G__26484 instanceof thi.ng.geom.core.vector.Vec2))?G__26484.buf:G__26484.buf);
var G__26483 = (new Float32Array(3));
(G__26483[(0)] = (G__26482[(2)]));

(G__26483[(1)] = (G__26482[(1)]));

(G__26483[(2)] = (G__26482[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26483,null,cljs.core.meta(G__26484)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__26487){
if((G__26487 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26487","G__26487",-1786283362,null))], 0)))].join('')));
}

var G__26485 = (((G__26487 instanceof thi.ng.geom.core.vector.Vec2))?G__26487.buf:G__26487.buf);
var G__26486 = (new Float32Array(2));
(G__26486[(0)] = (G__26485[(2)]));

(G__26486[(1)] = (G__26485[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__26486,null,cljs.core.meta(G__26487)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__26490){
if((G__26490 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26490","G__26490",1732004251,null))], 0)))].join('')));
}

var G__26488 = (((G__26490 instanceof thi.ng.geom.core.vector.Vec2))?G__26490.buf:G__26490.buf);
var G__26489 = (new Float32Array(3));
(G__26489[(0)] = (G__26488[(2)]));

(G__26489[(1)] = (G__26488[(2)]));

(G__26489[(2)] = (G__26488[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__26489,null,cljs.core.meta(G__26490)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__26493){
if((G__26493 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26493","G__26493",-794518221,null))], 0)))].join('')));
}

var G__26491 = (((G__26493 instanceof thi.ng.geom.core.vector.Vec2))?G__26493.buf:G__26493.buf);
var G__26492 = (new Float32Array(3));
(G__26492[(0)] = (G__26491[(2)]));

(G__26492[(1)] = (G__26491[(2)]));

(G__26492[(2)] = (G__26491[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__26492,null,cljs.core.meta(G__26493)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__26496){
if((G__26496 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__26496","G__26496",-1699339525,null))], 0)))].join('')));
}

var G__26494 = (((G__26496 instanceof thi.ng.geom.core.vector.Vec2))?G__26496.buf:G__26496.buf);
var G__26495 = (new Float32Array(3));
(G__26495[(0)] = (G__26494[(2)]));

(G__26495[(1)] = (G__26494[(2)]));

(G__26495[(2)] = (G__26494[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__26495,null,cljs.core.meta(G__26496)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$x,thi.ng.geom.core.vector.x,cljs.core.constant$keyword$xx,thi.ng.geom.core.vector.xx,cljs.core.constant$keyword$xy,thi.ng.geom.core.vector.xy,cljs.core.constant$keyword$y,thi.ng.geom.core.vector.y,cljs.core.constant$keyword$yx,thi.ng.geom.core.vector.yx,cljs.core.constant$keyword$yy,thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$y,cljs.core.constant$keyword$xzx,cljs.core.constant$keyword$xyz,cljs.core.constant$keyword$zzy,cljs.core.constant$keyword$yx,cljs.core.constant$keyword$xy,cljs.core.constant$keyword$yyz,cljs.core.constant$keyword$zxy,cljs.core.constant$keyword$xzy,cljs.core.constant$keyword$zxz,cljs.core.constant$keyword$zx,cljs.core.constant$keyword$xx,cljs.core.constant$keyword$xxx,cljs.core.constant$keyword$zy,cljs.core.constant$keyword$zzx,cljs.core.constant$keyword$zyx,cljs.core.constant$keyword$yzx,cljs.core.constant$keyword$z,cljs.core.constant$keyword$yyx,cljs.core.constant$keyword$xz,cljs.core.constant$keyword$zyz,cljs.core.constant$keyword$yy,cljs.core.constant$keyword$xxz,cljs.core.constant$keyword$yzy,cljs.core.constant$keyword$yz,cljs.core.constant$keyword$yxx,cljs.core.constant$keyword$xyy,cljs.core.constant$keyword$xxy,cljs.core.constant$keyword$zz,cljs.core.constant$keyword$zzz,cljs.core.constant$keyword$x,cljs.core.constant$keyword$xzz,cljs.core.constant$keyword$yxz,cljs.core.constant$keyword$zxx,cljs.core.constant$keyword$yzz,cljs.core.constant$keyword$xyx,cljs.core.constant$keyword$yxy,cljs.core.constant$keyword$yyy,cljs.core.constant$keyword$zyy],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = cljs.core.count(n);
var temp__4420__auto__ = (function (){var and__12595__auto__ = ((1) === c);
if(and__12595__auto__){
var G__26502 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__26502) : keymap.call(null,G__26502));
} else {
return and__12595__auto__;
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
var temp__4420__auto____$1 = (function (){var G__26503 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__26503) : keymap.call(null,G__26503));
})();
if(cljs.core.truth_(temp__4420__auto____$1)){
var idx = temp__4420__auto____$1;
(dest[(idx | (0))] = (function (){var G__26504 = i;
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__26504) : v.call(null,G__26504));
})());

var G__26505 = (i + (1));
var G__26506 = cljs.core.next(n__$1);
i = G__26505;
n__$1 = G__26506;
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
var G__26515 = (function (){var G__26511 = ax;
var G__26512 = (v[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26511,G__26512) : op.call(null,G__26511,G__26512));
})();
var G__26516 = (function (){var G__26513 = ay;
var G__26514 = (v[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26513,G__26514) : op.call(null,G__26513,G__26514));
})();
var G__26517 = cljs.core.next(xs__$1);
ax = G__26515;
ay = G__26516;
xs__$1 = G__26517;
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
var G__26530 = (function (){var G__26524 = ax;
var G__26525 = (v[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26524,G__26525) : op.call(null,G__26524,G__26525));
})();
var G__26531 = (function (){var G__26526 = ay;
var G__26527 = (v[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26526,G__26527) : op.call(null,G__26526,G__26527));
})();
var G__26532 = (function (){var G__26528 = az;
var G__26529 = (v[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26528,G__26529) : op.call(null,G__26528,G__26529));
})();
var G__26533 = cljs.core.next(xs__$1);
ax = G__26530;
ay = G__26531;
az = G__26532;
xs__$1 = G__26533;
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
var G__26535 = arguments.length;
switch (G__26535) {
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
var G__26538 = arguments.length;
switch (G__26538) {
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
var G__26541 = arguments.length;
switch (G__26541) {
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
var G__26544 = arguments.length;
switch (G__26544) {
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
var G__26547 = arguments.length;
switch (G__26547) {
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
var G__26550 = arguments.length;
switch (G__26550) {
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
