// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.frame');
goog.require('cljs.core');
goog.require('bru_3.decomposition');

/**
* @constructor
* @param {*} tl
* @param {*} tr
* @param {*} bl
* @param {*} br
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
bru_3.frame.Frame = (function (tl,tr,bl,br,__meta,__extmap,__hash){
this.tl = tl;
this.tr = tr;
this.bl = bl;
this.br = br;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bru_3.frame.Frame.prototype.bru_3$decomposition$Decomposition$ = true;

bru_3.frame.Frame.prototype.bru_3$decomposition$Decomposition$vertices$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$tl,cljs.core.constant$keyword$tr,cljs.core.constant$keyword$br,cljs.core.array_seq([cljs.core.constant$keyword$bl], 0)).call(null,this$__$1);
});

bru_3.frame.Frame.prototype.bru_3$decomposition$Decomposition$edges$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var edge = ((function (this$__$1){
return (function (p__18141){
var vec__18142 = p__18141;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(1),null);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,this$__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null)));
});})(this$__$1))
;
var pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tl,cljs.core.constant$keyword$tr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br,cljs.core.constant$keyword$bl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$bl,cljs.core.constant$keyword$tl], null)], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(edge,pairs);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13218__auto__,k__13219__auto__){
var self__ = this;
var this__13218__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13218__auto____$1,k__13219__auto__,null);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13220__auto__,k18139,else__13221__auto__){
var self__ = this;
var this__13220__auto____$1 = this;
var G__18143 = (((k18139 instanceof cljs.core.Keyword))?k18139.fqn:null);
switch (G__18143) {
case "tl":
return self__.tl;

break;
case "tr":
return self__.tr;

break;
case "bl":
return self__.bl;

break;
case "br":
return self__.br;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18139,else__13221__auto__);

}
});

bru_3.frame.Frame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13232__auto__,writer__13233__auto__,opts__13234__auto__){
var self__ = this;
var this__13232__auto____$1 = this;
var pr_pair__13235__auto__ = ((function (this__13232__auto____$1){
return (function (keyval__13236__auto__){
return cljs.core.pr_sequential_writer(writer__13233__auto__,cljs.core.pr_writer,""," ","",opts__13234__auto__,keyval__13236__auto__);
});})(this__13232__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13233__auto__,pr_pair__13235__auto__,"#bru-3.frame.Frame{",", ","}",opts__13234__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13216__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
return self__.__meta;
});

bru_3.frame.Frame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13212__auto__){
var self__ = this;
var this__13212__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13222__auto__){
var self__ = this;
var this__13222__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13213__auto__){
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

bru_3.frame.Frame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13214__auto__,other__13215__auto__){
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

bru_3.frame.Frame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13227__auto__,k__13228__auto__){
var self__ = this;
var this__13227__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$tl,null,cljs.core.constant$keyword$tr,null,cljs.core.constant$keyword$bl,null,cljs.core.constant$keyword$br,null], null), null),k__13228__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13227__auto____$1),self__.__meta),k__13228__auto__);
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13228__auto__)),null));
}
});

bru_3.frame.Frame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13225__auto__,k__13226__auto__,G__18138){
var self__ = this;
var this__13225__auto____$1 = this;
var pred__18144 = cljs.core.keyword_identical_QMARK_;
var expr__18145 = k__13226__auto__;
if(cljs.core.truth_((function (){var G__18147 = cljs.core.constant$keyword$tl;
var G__18148 = expr__18145;
return (pred__18144.cljs$core$IFn$_invoke$arity$2 ? pred__18144.cljs$core$IFn$_invoke$arity$2(G__18147,G__18148) : pred__18144.call(null,G__18147,G__18148));
})())){
return (new bru_3.frame.Frame(G__18138,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18149 = cljs.core.constant$keyword$tr;
var G__18150 = expr__18145;
return (pred__18144.cljs$core$IFn$_invoke$arity$2 ? pred__18144.cljs$core$IFn$_invoke$arity$2(G__18149,G__18150) : pred__18144.call(null,G__18149,G__18150));
})())){
return (new bru_3.frame.Frame(self__.tl,G__18138,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18151 = cljs.core.constant$keyword$bl;
var G__18152 = expr__18145;
return (pred__18144.cljs$core$IFn$_invoke$arity$2 ? pred__18144.cljs$core$IFn$_invoke$arity$2(G__18151,G__18152) : pred__18144.call(null,G__18151,G__18152));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,G__18138,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18153 = cljs.core.constant$keyword$br;
var G__18154 = expr__18145;
return (pred__18144.cljs$core$IFn$_invoke$arity$2 ? pred__18144.cljs$core$IFn$_invoke$arity$2(G__18153,G__18154) : pred__18144.call(null,G__18153,G__18154));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,G__18138,self__.__meta,self__.__extmap,null));
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13226__auto__,G__18138),null));
}
}
}
}
});

bru_3.frame.Frame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13230__auto__){
var self__ = this;
var this__13230__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13217__auto__,G__18138){
var self__ = this;
var this__13217__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,G__18138,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13223__auto__,entry__13224__auto__){
var self__ = this;
var this__13223__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13224__auto__)){
return cljs.core._assoc(this__13223__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13224__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13224__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13223__auto____$1,entry__13224__auto__);
}
});

bru_3.frame.Frame.cljs$lang$type = true;

bru_3.frame.Frame.cljs$lang$ctorPrSeq = (function (this__13252__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bru-3.frame/Frame");
});

bru_3.frame.Frame.cljs$lang$ctorPrWriter = (function (this__13252__auto__,writer__13253__auto__){
return cljs.core._write(writer__13253__auto__,"bru-3.frame/Frame");
});

bru_3.frame.__GT_Frame = (function bru_3$frame$__GT_Frame(tl,tr,bl,br){
return (new bru_3.frame.Frame(tl,tr,bl,br,null,null,null));
});

bru_3.frame.map__GT_Frame = (function bru_3$frame$map__GT_Frame(G__18140){
return (new bru_3.frame.Frame(cljs.core.constant$keyword$tl.cljs$core$IFn$_invoke$arity$1(G__18140),cljs.core.constant$keyword$tr.cljs$core$IFn$_invoke$arity$1(G__18140),cljs.core.constant$keyword$bl.cljs$core$IFn$_invoke$arity$1(G__18140),cljs.core.constant$keyword$br.cljs$core$IFn$_invoke$arity$1(G__18140),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18140,cljs.core.constant$keyword$tl,cljs.core.array_seq([cljs.core.constant$keyword$tr,cljs.core.constant$keyword$bl,cljs.core.constant$keyword$br], 0)),null));
});

/**
 * Creates a frame in between the two given bones b1 and b2, using the
 * randomization maximum r to offset the bone vertices. r is given as a
 * percentage in the [0, 1] range. When r = 0, there'll be no vertex
 * randomization, and the frame will fit exactly between the two bones. For any
 * other value, a random percentage will be added or subtracted from the bone
 * lengths, and the frame will be constructed using the resulting
 * shortened/elongated bones.
 */
bru_3.frame.from_bones = (function bru_3$frame$from_bones(r,b1,b2){
var rand_range = (function (min,max){
return (min + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max - min)));
});
var rfn = ((function (rand_range){
return (function (){
return rand_range((- r),r);
});})(rand_range))
;
var rb1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(b1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$length], null),cljs.core._STAR_,(rfn() + (1)));
var rb2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(b2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$length], null),cljs.core._STAR_,(rfn() + (1)));
var vec__18158 = bru_3.decomposition.vertices(rb1);
var b1u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158,(0),null);
var b1d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158,(1),null);
var vec__18159 = bru_3.decomposition.vertices(rb2);
var b2u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159,(0),null);
var b2d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159,(1),null);
return (new bru_3.frame.Frame(b1u,b2u,b1d,b2d,null,null,null));
});
