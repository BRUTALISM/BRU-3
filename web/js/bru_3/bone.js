// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.bone');
goog.require('cljs.core');
goog.require('bru_3.decomposition');
goog.require('bru_3.math');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');

/**
* @constructor
* @param {*} position
* @param {*} angle
* @param {*} length
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
bru_3.bone.Bone = (function (position,angle,length,__meta,__extmap,__hash){
this.position = position;
this.angle = angle;
this.length = length;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bru_3.bone.Bone.prototype.bru_3$decomposition$Decomposition$ = true;

bru_3.bone.Bone.prototype.bru_3$decomposition$Decomposition$vertices$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__21592 = this$__$1;
var map__21592__$1 = ((cljs.core.seq_QMARK_(map__21592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21592):map__21592);
var vec__21593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.constant$keyword$position);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(1),null);
var length__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.constant$keyword$length);
var angle__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.constant$keyword$angle);
var xdist = ((length__$1 / (2)) * bru_3.math.sin(bru_3.math.to_radians(angle__$1)));
var ydist = ((length__$1 / (2)) * bru_3.math.cos(bru_3.math.to_radians(angle__$1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x - xdist),(y - ydist)),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((x + xdist),(y + ydist))], null);
});

bru_3.bone.Bone.prototype.bru_3$decomposition$Decomposition$edges$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return bru_3.decomposition.vertices(this$__$1);
});

bru_3.bone.Bone.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13218__auto__,k__13219__auto__){
var self__ = this;
var this__13218__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13218__auto____$1,k__13219__auto__,null);
});

bru_3.bone.Bone.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13220__auto__,k21590,else__13221__auto__){
var self__ = this;
var this__13220__auto____$1 = this;
var G__21594 = (((k21590 instanceof cljs.core.Keyword))?k21590.fqn:null);
switch (G__21594) {
case "position":
return self__.position;

break;
case "angle":
return self__.angle;

break;
case "length":
return self__.length;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21590,else__13221__auto__);

}
});

bru_3.bone.Bone.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13232__auto__,writer__13233__auto__,opts__13234__auto__){
var self__ = this;
var this__13232__auto____$1 = this;
var pr_pair__13235__auto__ = ((function (this__13232__auto____$1){
return (function (keyval__13236__auto__){
return cljs.core.pr_sequential_writer(writer__13233__auto__,cljs.core.pr_writer,""," ","",opts__13234__auto__,keyval__13236__auto__);
});})(this__13232__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13233__auto__,pr_pair__13235__auto__,"#bru-3.bone.Bone{",", ","}",opts__13234__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$position,self__.position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$angle,self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$length,self__.length],null))], null),self__.__extmap));
});

bru_3.bone.Bone.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13216__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
return self__.__meta;
});

bru_3.bone.Bone.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13212__auto__){
var self__ = this;
var this__13212__auto____$1 = this;
return (new bru_3.bone.Bone(self__.position,self__.angle,self__.length,self__.__meta,self__.__extmap,self__.__hash));
});

bru_3.bone.Bone.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13222__auto__){
var self__ = this;
var this__13222__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

bru_3.bone.Bone.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13213__auto__){
var self__ = this;
var this__13213__auto____$1 = this;
var h__13039__auto__ = self__.__hash;
if(!((h__13039__auto__ == null))){
return h__13039__auto__;
} else {
var h__13039__auto____$1 = cljs.core.hash_imap(this__13213__auto____$1);
self__.__hash = h__13039__auto____$1;

return h__13039__auto____$1;
}
});

bru_3.bone.Bone.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13214__auto__,other__13215__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12611__auto__ = other__13215__auto__;
if(cljs.core.truth_(and__12611__auto__)){
var and__12611__auto____$1 = (this__13214__auto____$1.constructor === other__13215__auto__.constructor);
if(and__12611__auto____$1){
return cljs.core.equiv_map(this__13214__auto____$1,other__13215__auto__);
} else {
return and__12611__auto____$1;
}
} else {
return and__12611__auto__;
}
})())){
return true;
} else {
return false;
}
});

bru_3.bone.Bone.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13227__auto__,k__13228__auto__){
var self__ = this;
var this__13227__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$angle,null,cljs.core.constant$keyword$length,null,cljs.core.constant$keyword$position,null], null), null),k__13228__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13227__auto____$1),self__.__meta),k__13228__auto__);
} else {
return (new bru_3.bone.Bone(self__.position,self__.angle,self__.length,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13228__auto__)),null));
}
});

bru_3.bone.Bone.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13225__auto__,k__13226__auto__,G__21589){
var self__ = this;
var this__13225__auto____$1 = this;
var pred__21595 = cljs.core.keyword_identical_QMARK_;
var expr__21596 = k__13226__auto__;
if(cljs.core.truth_((function (){var G__21598 = cljs.core.constant$keyword$position;
var G__21599 = expr__21596;
return (pred__21595.cljs$core$IFn$_invoke$arity$2 ? pred__21595.cljs$core$IFn$_invoke$arity$2(G__21598,G__21599) : pred__21595.call(null,G__21598,G__21599));
})())){
return (new bru_3.bone.Bone(G__21589,self__.angle,self__.length,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21600 = cljs.core.constant$keyword$angle;
var G__21601 = expr__21596;
return (pred__21595.cljs$core$IFn$_invoke$arity$2 ? pred__21595.cljs$core$IFn$_invoke$arity$2(G__21600,G__21601) : pred__21595.call(null,G__21600,G__21601));
})())){
return (new bru_3.bone.Bone(self__.position,G__21589,self__.length,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21602 = cljs.core.constant$keyword$length;
var G__21603 = expr__21596;
return (pred__21595.cljs$core$IFn$_invoke$arity$2 ? pred__21595.cljs$core$IFn$_invoke$arity$2(G__21602,G__21603) : pred__21595.call(null,G__21602,G__21603));
})())){
return (new bru_3.bone.Bone(self__.position,self__.angle,G__21589,self__.__meta,self__.__extmap,null));
} else {
return (new bru_3.bone.Bone(self__.position,self__.angle,self__.length,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13226__auto__,G__21589),null));
}
}
}
});

bru_3.bone.Bone.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13230__auto__){
var self__ = this;
var this__13230__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$position,self__.position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$angle,self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$length,self__.length],null))], null),self__.__extmap));
});

bru_3.bone.Bone.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13217__auto__,G__21589){
var self__ = this;
var this__13217__auto____$1 = this;
return (new bru_3.bone.Bone(self__.position,self__.angle,self__.length,G__21589,self__.__extmap,self__.__hash));
});

bru_3.bone.Bone.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13223__auto__,entry__13224__auto__){
var self__ = this;
var this__13223__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13224__auto__)){
return cljs.core._assoc(this__13223__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13224__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13224__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13223__auto____$1,entry__13224__auto__);
}
});

bru_3.bone.Bone.cljs$lang$type = true;

bru_3.bone.Bone.cljs$lang$ctorPrSeq = (function (this__13252__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bru-3.bone/Bone");
});

bru_3.bone.Bone.cljs$lang$ctorPrWriter = (function (this__13252__auto__,writer__13253__auto__){
return cljs.core._write(writer__13253__auto__,"bru-3.bone/Bone");
});

bru_3.bone.__GT_Bone = (function bru_3$bone$__GT_Bone(position,angle,length){
return (new bru_3.bone.Bone(position,angle,length,null,null,null));
});

bru_3.bone.map__GT_Bone = (function bru_3$bone$map__GT_Bone(G__21591){
return (new bru_3.bone.Bone(cljs.core.constant$keyword$position.cljs$core$IFn$_invoke$arity$1(G__21591),cljs.core.constant$keyword$angle.cljs$core$IFn$_invoke$arity$1(G__21591),cljs.core.constant$keyword$length.cljs$core$IFn$_invoke$arity$1(G__21591),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21591,cljs.core.constant$keyword$position,cljs.core.array_seq([cljs.core.constant$keyword$angle,cljs.core.constant$keyword$length], 0)),null));
});

bru_3.bone.zero_bone = (new bru_3.bone.Bone(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,0.0),0.0,0.0,null,null,null));
/**
 * Creates a new bone based on a previous bone b and randomization parameters
 * db, lb, and amax. db (distance bounds) is a pair of values representing the
 * minimum and maximum values for the new bone's distance from the previous bone.
 * lb is a pair representing minimum and maximum for the new bone's length.
 * amax is the upper bound (the lower being -amax) on the angle between the
 * previous bone b and the newly created bone.
 */
bru_3.bone.bone = (function bru_3$bone$bone(db,lb,amax,b){
var map__21608 = b;
var map__21608__$1 = ((cljs.core.seq_QMARK_(map__21608))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21608):map__21608);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21608__$1,cljs.core.constant$keyword$position);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21608__$1,cljs.core.constant$keyword$angle);
var vec__21609 = db;
var dmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21609,(0),null);
var dmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21609,(1),null);
var vec__21610 = lb;
var lmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(0),null);
var lmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(1),null);
var rand_range = ((function (map__21608,map__21608__$1,position,angle,vec__21609,dmin,dmax,vec__21610,lmin,lmax){
return (function (minn,maxx){
return (minn + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((maxx - minn)));
});})(map__21608,map__21608__$1,position,angle,vec__21609,dmin,dmax,vec__21610,lmin,lmax))
;
return (new bru_3.bone.Bone(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(position,thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(rand_range(dmin,dmax),0.0)),(angle + rand_range((- amax),amax)),rand_range(lmin,lmax),null,null,null));
});
/**
 * Returns a lazy collection of bones based on the given randomization
 * parameters db, lb, and amax, and a previous bone b. If b is omitted, zero-bone
 * is used. db (distance bounds) is a pair of values representing the minimum and
 * maximum values for the new bone's distance from the previous bone. lb is a
 * pair representing minimum and maximum for the new bone's length. amax is the
 * upper bound (the lower being -amax) on the angle between the previous bone b
 * and the newly created bone.
 */
bru_3.bone.gen_bones = (function bru_3$bone$gen_bones(){
var G__21612 = arguments.length;
switch (G__21612) {
case 3:
return bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$3 = (function (db,lb,amax){
return bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4(db,lb,amax,bru_3.bone.zero_bone);
});

bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4 = (function (db,lb,amax,b){
return cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(bru_3.bone.bone,db,lb,amax),b);
});

bru_3.bone.gen_bones.cljs$lang$maxFixedArity = 4;