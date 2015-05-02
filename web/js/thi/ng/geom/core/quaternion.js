// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core.quaternion');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');


/**
* @constructor
*/
thi.ng.geom.core.quaternion.Quat4 = (function (x,y,z,w,_hasheq){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this._hasheq = _hasheq;
this.cljs$lang$protocol_mask$partition0$ = 165700571;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__32264){
var self__ = this;
var vec__32265 = p__32264;
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32265,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32265,(1),null);
var vz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32265,(2),null);
var v = vec__32265;
var ___$1 = this;
var ix = (((self__.w * vx) + (self__.y * vz)) - (self__.z * vy));
var iy = (((self__.w * vy) + (self__.z * vx)) - (self__.x * vz));
var iz = (((self__.w * vz) + (self__.x * vy)) - (self__.y * vx));
var nx = (- self__.x);
var ny = (- self__.y);
var nz = (- self__.z);
var iw = (((nx * vx) - (self__.y * vy)) - (self__.z * vz));
var b = (new Float32Array((3)));
(b[(0)] = ((((ix * self__.w) + (iw * nx)) + (iy * nz)) - (iz * ny)));

(b[(1)] = ((((iy * self__.w) + (iw * ny)) + (iz * nx)) - (ix * nz)));

(b[(2)] = ((((iz * self__.w) + (iw * nz)) + (ix * ny)) - (iy * nx)));

return (new thi.ng.geom.core.vector.Vec3(b,null,cljs.core.meta(v)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str(self__.x),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str(" "),cljs.core.str(self__.z),cljs.core.str(" "),cljs.core.str(self__.w),cljs.core.str("]")].join('');
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__32266 = ___$1;
var G__32267 = k;
var G__32268 = null;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32266,G__32267,G__32268) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32266,G__32267,G__32268));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__32269 = ___$1;
var G__32270 = k;
var G__32271 = nf;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32269,G__32270,G__32271) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32269,G__32270,G__32271));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return ((((self__.x * q__$1.x) + (self__.y * q__$1.y)) + (self__.z * q__$1.z)) + (self__.w * q__$1.w));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var m = (function (){var G__32272 = ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32272) : Math.sqrt.call(null,G__32272));
})();
if((m > thi.ng.common.math.core._STAR_eps_STAR_)){
return (new thi.ng.geom.core.quaternion.Quat4((self__.x / m),(self__.y / m),(self__.z / m),(self__.w / m),(-1)));
} else {
return ___$1;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = (function (){var G__32273 = t;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32273) : Math.sin.call(null,G__32273));
})();
var c = (function (){var G__32274 = t;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__32274) : Math.cos.call(null,G__32274));
})();
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.w * s)),((self__.y * c) + (self__.z * s)),((self__.z * c) - (self__.y * s)),((self__.w * c) - (self__.x * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = (function (){var G__32275 = t;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32275) : Math.sin.call(null,G__32275));
})();
var c = (function (){var G__32276 = t;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__32276) : Math.cos.call(null,G__32276));
})();
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) - (self__.z * s)),((self__.y * c) + (self__.w * s)),((self__.z * c) + (self__.x * s)),((self__.w * c) - (self__.y * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = (function (){var G__32277 = t;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32277) : Math.sin.call(null,G__32277));
})();
var c = (function (){var G__32278 = t;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__32278) : Math.cos.call(null,G__32278));
})();
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.y * s)),((self__.y * c) - (self__.x * s)),((self__.z * c) + (self__.w * s)),((self__.w * c) - (self__.z * s)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$conjugate$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4((- self__.x),(- self__.y),(- self__.z),self__.w,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__32279 = (k | (0));
switch (G__32279) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return thi.ng.common.error.key_error_BANG_(k);

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__32280 = (k | (0));
switch (G__32280) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return nf;

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__32281 = (k | (0));
switch (G__32281) {
case (0):
return (new thi.ng.geom.core.quaternion.Quat4(v,self__.y,self__.z,self__.w,(-1)));

break;
case (1):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,v,self__.z,self__.w,(-1)));

break;
case (2):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,v,self__.w,(-1)));

break;
case (3):
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,v,(-1)));

break;
default:
return thi.ng.common.error.key_error_BANG_(k);

}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,self__.w,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(self__.y,cljs.core.cons(self__.z,cljs.core.cons(self__.w,null)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (4);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.w;
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(self__.x,self__.y,self__.z);
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4(self__.w,self__.z,self__.y,self__.x,(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((-1) === self__._hasheq)){
return self__._hasheq = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash(self__.x)) | (0)),(31)) + cljs.core.hash(self__.y)) | (0)),(31)) + cljs.core.hash(self__.z)) | (0)),(31)) + cljs.core.hash(self__.w)) | (0)),(4));
} else {
return self__._hasheq;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.quaternion.Quat4)){
return ((self__.x === o.x)) && ((self__.y === o.y)) && ((self__.z === o.z)) && ((self__.w === o.w));
} else {
return (cljs.core.sequential_QMARK_(o)) && (((4) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.y,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.z,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.w,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(3))));
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var d = thi.ng.geom.core.mag_squared(___$1);
var d__$1 = (((d === (0)))?0.0:((1) / d));
var id = (- d__$1);
return (new thi.ng.geom.core.quaternion.Quat4((self__.x * id),(self__.y * id),(self__.z * id),(self__.w * d__$1),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x + q__$1.x),(self__.y + q__$1.y),(self__.z + q__$1.z),(self__.w + q__$1.w),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x - q__$1.x),(self__.y - q__$1.y),(self__.z - q__$1.z),(self__.w - q__$1.w),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
return (new thi.ng.geom.core.quaternion.Quat4(((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy)),((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz)),((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx)),((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,q,r){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var r__$1 = r;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
var rx = r__$1.x;
var ry = r__$1.y;
var rz = r__$1.z;
var rw = r__$1.w;
var x_SINGLEQUOTE_ = ((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy));
var y_SINGLEQUOTE_ = ((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz));
var z_SINGLEQUOTE_ = ((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx));
var w_SINGLEQUOTE_ = ((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz));
return (new thi.ng.geom.core.quaternion.Quat4(((((x_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rx)) + (y_SINGLEQUOTE_ * rz)) - (z_SINGLEQUOTE_ * ry)),((((y_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * ry)) + (z_SINGLEQUOTE_ * rx)) - (x_SINGLEQUOTE_ * rz)),((((z_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rz)) + (x_SINGLEQUOTE_ * ry)) - (y_SINGLEQUOTE_ * rx)),((((w_SINGLEQUOTE_ * rw) - (x_SINGLEQUOTE_ * rx)) - (y_SINGLEQUOTE_ * ry)) - (z_SINGLEQUOTE_ * rz)),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(self__.y,cljs.core.cons(self__.z,cljs.core.cons(self__.w,null)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return !((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [(0),null,cljs.core.constant$keyword$y,null,(1),null,cljs.core.constant$keyword$w,null,cljs.core.constant$keyword$z,null,(3),null,(2),null,cljs.core.constant$keyword$x,null], null), null).call(null,k) == null));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__32289 = ___$1;
var G__32290 = k;
var G__32291 = v;
return (thi.ng.geom.core.quaternion.swizzle4_assoc.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4_assoc.cljs$core$IFn$_invoke$arity$3(G__32289,G__32290,G__32291) : thi.ng.geom.core.quaternion.swizzle4_assoc.call(null,G__32289,G__32290,G__32291));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.quaternion.Quat4((self__.x * s),(self__.y * s),(self__.z * s),(self__.w * s),(-1)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2(___$1,null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
var vec__32292 = cljs.core.constant$keyword$translate.cljs$core$IFn$_invoke$arity$1(opts);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(1),null);
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(2),null);
var x2 = (self__.x + self__.x);
var y2 = (self__.y + self__.y);
var z2 = (self__.z + self__.z);
var xx = (self__.x * x2);
var xy = (self__.x * y2);
var xz = (self__.x * z2);
var yy = (self__.y * y2);
var yz = (self__.y * z2);
var zz = (self__.z * z2);
var wx = (self__.w * x2);
var wy = (self__.w * y2);
var wz = (self__.w * z2);
return (new thi.ng.geom.core.matrix.Matrix44((1.0 - (yy + zz)),(xy + wz),(xz - wy),0.0,(xy - wz),(1.0 - (xx + zz)),(yz + wx),0.0,(xz + wy),(yz - wx),(1.0 - (xx + yy)),0.0,(function (){var or__12607__auto__ = tx;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return 0.0;
}
})(),(function (){var or__12607__auto__ = ty;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return 0.0;
}
})(),(function (){var or__12607__auto__ = tz;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return 0.0;
}
})(),1.0,null,null));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y,self__.z,self__.w,v], null);
});

thi.ng.geom.core.quaternion.Quat4.prototype.call = (function() {
var G__32309 = null;
var G__32309__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__32293 = _;
var G__32294 = k;
var G__32295 = null;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32293,G__32294,G__32295) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32293,G__32294,G__32295));
});
var G__32309__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__32296 = _;
var G__32297 = k;
var G__32298 = nf;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32296,G__32297,G__32298) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32296,G__32297,G__32298));
});
G__32309 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__32309__2.call(this,self__,k);
case 3:
return G__32309__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32309.cljs$core$IFn$_invoke$arity$2 = G__32309__2;
G__32309.cljs$core$IFn$_invoke$arity$3 = G__32309__3;
return G__32309;
})()
;

thi.ng.geom.core.quaternion.Quat4.prototype.apply = (function (self__,args32263){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32263)));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
var G__32299 = _;
var G__32300 = k;
var G__32301 = null;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32299,G__32300,G__32301) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32299,G__32300,G__32301));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
var G__32302 = _;
var G__32303 = k;
var G__32304 = nf;
return (thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(G__32302,G__32303,G__32304) : thi.ng.geom.core.quaternion.swizzle4.call(null,G__32302,G__32303,G__32304));
});

thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.quaternion.Quat4)){
var c = cljs.core.compare(self__.x,o.x);
if(((0) === c)){
var c__$1 = cljs.core.compare(self__.y,o.y);
if(((0) === c__$1)){
var c__$2 = cljs.core.compare(self__.z,o.z);
if(((0) === c__$2)){
return cljs.core.compare(self__.w,o.w);
} else {
return c__$2;
}
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((4) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((4) - c);
}
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,q,thi.ng.common.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,q,eps){
var self__ = this;
var ___$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(q);
if(and__12595__auto__){
var and__12595__auto____$1 = ((4) === cljs.core.count(q));
if(and__12595__auto____$1){
var and__12595__auto____$2 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.x,cljs.core.first(q),eps);
if(cljs.core.truth_(and__12595__auto____$2)){
var and__12595__auto____$3 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.y,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)),eps);
if(cljs.core.truth_(and__12595__auto____$3)){
var and__12595__auto____$4 = thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.z,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)),eps);
if(cljs.core.truth_(and__12595__auto____$4)){
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.w,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(3)),eps);
} else {
return and__12595__auto____$4;
}
} else {
return and__12595__auto____$3;
}
} else {
return and__12595__auto____$2;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__32305 = ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32305) : Math.sqrt.call(null,G__32305));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,q,0.5);
});

thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,q,t){
var self__ = this;
var ___$1 = this;
var d = thi.ng.geom.core.dot(___$1,q);
if(((function (){var G__32282 = d;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__32282) : thi.ng.common.math.core.abs.call(null,G__32282));
})() < 1.0)){
var theta = (function (){var G__32284 = d;
return (Math.acos.cljs$core$IFn$_invoke$arity$1 ? Math.acos.cljs$core$IFn$_invoke$arity$1(G__32284) : Math.acos.call(null,G__32284));
})();
var stheta = (function (){var G__32285 = ((d * (- d)) + 1.0);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32285) : Math.sqrt.call(null,G__32285));
})();
var vec__32283 = ((((function (){var G__32286 = stheta;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__32286) : thi.ng.common.math.core.abs.call(null,G__32286));
})() < 0.001))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (){var G__32287 = ((1.0 - t) * theta);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32287) : Math.sin.call(null,G__32287));
})() / stheta),((function (){var G__32288 = (t * theta);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32288) : Math.sin.call(null,G__32288));
})() / stheta)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32283,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32283,(1),null);
var q__$1 = q;
return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * a) + (q__$1.x * b)),((self__.y * a) + (q__$1.y * b)),((self__.z * a) + (q__$1.z * b)),((self__.w * a) + (q__$1.w * b)),(-1)));
} else {
return ___$1;
}
});

thi.ng.geom.core.quaternion.Quat4.cljs$lang$type = true;

thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorStr = "thi.ng.geom.core.quaternion/Quat4";

thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"thi.ng.geom.core.quaternion/Quat4");
});

thi.ng.geom.core.quaternion.__GT_Quat4 = (function thi$ng$geom$core$quaternion$__GT_Quat4(x,y,z,w,_hasheq){
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,_hasheq));
});

thi.ng.geom.core.quaternion.Q = (new thi.ng.geom.core.quaternion.Quat4(0.0,0.0,0.0,1.0,(-1)));
thi.ng.geom.core.quaternion.quat = (function thi$ng$geom$core$quaternion$quat(){
var G__32311 = arguments.length;
switch (G__32311) {
case 0:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.quaternion.Q;
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$2 = (function (p__32312,w){
var vec__32313 = p__32312;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(2),null);
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$1 = (function (p__32314){
var vec__32315 = p__32314;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32315,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32315,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32315,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32315,(3),null);
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,w){
return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w,(-1)));
});

thi.ng.geom.core.quaternion.quat.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.quaternion.quat_from_axis_angle = (function thi$ng$geom$core$quaternion$quat_from_axis_angle(axis,theta){
var theta__$1 = (theta / 2.0);
return thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(axis),(function (){var G__32319 = theta__$1;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__32319) : Math.sin.call(null,G__32319));
})()),(function (){var G__32320 = theta__$1;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__32320) : Math.cos.call(null,G__32320));
})());
});
thi.ng.geom.core.quaternion.as_axis_angle = (function thi$ng$geom$core$quaternion$as_axis_angle(q){
var vec__32324 = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(q);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(3),null);
var theta = (2.0 * (function (){var G__32325 = w;
return (Math.acos.cljs$core$IFn$_invoke$arity$1 ? Math.acos.cljs$core$IFn$_invoke$arity$1(G__32325) : Math.acos.call(null,G__32325));
})());
var mag = (function (){var G__32326 = (1.0 - (w * w));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32326) : Math.sqrt.call(null,G__32326));
})();
if((mag < 5.0E-4)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),theta], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((x / mag),(y / mag),(z / mag)),theta], null);
}
});
thi.ng.geom.core.quaternion.quat_from_euler = (function thi$ng$geom$core$quaternion$quat_from_euler(order,alpha,beta,gamma){
var vec__32329 = (function (){var G__32330 = (((order instanceof cljs.core.Keyword))?order.fqn:null);
switch (G__32330) {
case "xyz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z], null);

break;
case "yxz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z], null);

break;
case "xzy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y], null);

break;
case "zxy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y], null);

break;
case "yzx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X], null);

break;
case "zyx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X], null);

break;
default:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(order);

}
})();
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(2),null);
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.quaternion.quat_from_axis_angle(a,alpha),thi.ng.geom.core.quaternion.quat_from_axis_angle(b,beta),thi.ng.geom.core.quaternion.quat_from_axis_angle(c,gamma));
});
thi.ng.geom.core.quaternion.quat_from_matrix = (function thi$ng$geom$core$quaternion$quat_from_matrix(m){
var trace = ((m.m00 + m.m11) + m.m22);
if((trace > (0))){
var s = (0.5 / (function (){var G__32336 = (trace + (1));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32336) : Math.sqrt.call(null,G__32336));
})());
return (new thi.ng.geom.core.quaternion.Quat4(((m.m12 - m.m21) * s),((m.m20 - m.m02) * s),((m.m01 - m.m10) * s),(0.25 / s),(-1)));
} else {
if(((m.m00 > m.m11)) && ((m.m00 > m.m22))){
var s = (2.0 * (function (){var G__32337 = (((m.m00 - m.m11) - m.m22) + (1));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32337) : Math.sqrt.call(null,G__32337));
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4((0.25 * s),((m.m10 + m.m01) * s_SINGLEQUOTE_),((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m12 - m.m21) * s_SINGLEQUOTE_),(-1)));
} else {
if((m.m11 > m.m22)){
var s = (2.0 * (function (){var G__32338 = (((m.m11 - m.m22) - m.m00) + (1));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32338) : Math.sqrt.call(null,G__32338));
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4(((m.m10 + m.m01) * s_SINGLEQUOTE_),(0.25 * s),((m.m21 + m.m12) * s_SINGLEQUOTE_),((m.m20 - m.m02) * s_SINGLEQUOTE_),(-1)));
} else {
var s = (2.0 * (function (){var G__32339 = (((m.m22 - m.m00) - m.m11) + (1));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__32339) : Math.sqrt.call(null,G__32339));
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.core.quaternion.Quat4(((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m21 + m.m12) * s_SINGLEQUOTE_),(0.25 * s),((m.m01 - m.m10) * s_SINGLEQUOTE_),(-1)));
}
}
}
});
thi.ng.geom.core.quaternion.alignment_quat = (function thi$ng$geom$core$quaternion$alignment_quat(from,to){
var from__$1 = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(from);
var to__$1 = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(to);
var axis = thi.ng.geom.core.cross(from__$1,to__$1);
var theta = (function (){var G__32342 = thi.ng.geom.core.mag(axis);
var G__32343 = thi.ng.geom.core.dot(from__$1,to__$1);
return (Math.atan2.cljs$core$IFn$_invoke$arity$2 ? Math.atan2.cljs$core$IFn$_invoke$arity$2(G__32342,G__32343) : Math.atan2.call(null,G__32342,G__32343));
})();
return thi.ng.geom.core.quaternion.quat_from_axis_angle(axis,theta);
});
thi.ng.geom.core.quaternion.lookup4 = (function thi$ng$geom$core$quaternion$lookup4(_,k,nf){
var G__32345 = k;
switch (G__32345) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var or__12607__auto__ = nf;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.error.key_error_BANG_(k);
}

}
});
thi.ng.geom.core.quaternion.swizzle4 = (function thi$ng$geom$core$quaternion$swizzle4(_,k,default$){
if(typeof k === 'number'){
var G__32350 = (k | (0));
switch (G__32350) {
case (0):
return _.x;

break;
case (1):
return _.y;

break;
case (2):
return _.z;

break;
case (3):
return _.w;

break;
default:
var or__12607__auto__ = default$;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.error.key_error_BANG_(k);
}

}
} else {
var G__32351 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__32351) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var n = cljs.core.name(k);
var c = cljs.core.count(n);
var G__32352 = c;
switch (G__32352) {
case (2):
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$));

break;
case (3):
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(2)),default$));

break;
case (4):
return (new thi.ng.geom.core.quaternion.Quat4(thi.ng.geom.core.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(2)),default$),thi.ng.geom.core.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(3)),default$),(-1)));

break;
default:
var or__12607__auto__ = default$;
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return thi.ng.common.error.key_error_BANG_(k);
}

}

}
}
});
thi.ng.geom.core.quaternion.swizzle_assoc_STAR_ = (function thi$ng$geom$core$quaternion$swizzle_assoc_STAR_(_,ctor,keymap,k,v){
var n = cljs.core.name(k);
var c = cljs.core.count(n);
if(((c <= cljs.core.count(keymap))) && (((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))){
var acc = cljs.core.vec(cljs.core.seq(_));
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var G__32362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var G__32359 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__32359) : keymap.call(null,G__32359));
})(),(function (){var G__32360 = i;
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__32360) : v.call(null,G__32360));
})());
var G__32363 = (i + (1));
var G__32364 = cljs.core.next(n__$1);
acc = G__32362;
i = G__32363;
n__$1 = G__32364;
continue;
} else {
var G__32361 = acc;
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32361) : ctor.call(null,G__32361));
}
break;
}
} else {
return thi.ng.common.error.key_error_BANG_(k);
}
});
thi.ng.geom.core.quaternion.swizzle4_assoc = (function thi$ng$geom$core$quaternion$swizzle4_assoc(_,k,v){
if(typeof k === 'number'){
var G__32367 = (k | (0));
switch (G__32367) {
case (0):
return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case (1):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case (2):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case (3):
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.common.error.key_error_BANG_(k);

}
} else {
var G__32368 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__32368) {
case "x":
return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case "y":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case "z":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case "w":
return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.geom.core.quaternion.swizzle_assoc_STAR_(_,thi.ng.geom.core.quaternion.quat,new cljs.core.PersistentArrayMap(null, 4, ["x",(0),"y",(1),"z",(2),"w",(3)], null),k,v);

}
}
});
