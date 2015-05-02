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
return (function (p__18125){
var vec__18126 = p__18125;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18126,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18126,(1),null);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,this$__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null)));
});})(this$__$1))
;
var pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tl,cljs.core.constant$keyword$tr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br,cljs.core.constant$keyword$bl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$bl,cljs.core.constant$keyword$tl], null)], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(edge,pairs);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k18123,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__18127 = (((k18123 instanceof cljs.core.Keyword))?k18123.fqn:null);
switch (G__18127) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18123,else__13205__auto__);

}
});

bru_3.frame.Frame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#bru-3.frame.Frame{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

bru_3.frame.Frame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
var self__ = this;
var this__13197__auto____$1 = this;
var h__13023__auto__ = self__.__hash;
if(!((h__13023__auto__ == null))){
return h__13023__auto__;
} else {
var h__13023__auto____$1 = cljs.core.hash_imap(this__13197__auto____$1);
self__.__hash = h__13023__auto____$1;

return h__13023__auto____$1;
}
});

bru_3.frame.Frame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
var self__ = this;
var this__13198__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12595__auto__ = other__13199__auto__;
if(cljs.core.truth_(and__12595__auto__)){
var and__12595__auto____$1 = (this__13198__auto____$1.constructor === other__13199__auto__.constructor);
if(and__12595__auto____$1){
return cljs.core.equiv_map(this__13198__auto____$1,other__13199__auto__);
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
})())){
return true;
} else {
return false;
}
});

bru_3.frame.Frame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$tl,null,cljs.core.constant$keyword$tr,null,cljs.core.constant$keyword$bl,null,cljs.core.constant$keyword$br,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

bru_3.frame.Frame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__18122){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__18128 = cljs.core.keyword_identical_QMARK_;
var expr__18129 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__18131 = cljs.core.constant$keyword$tl;
var G__18132 = expr__18129;
return (pred__18128.cljs$core$IFn$_invoke$arity$2 ? pred__18128.cljs$core$IFn$_invoke$arity$2(G__18131,G__18132) : pred__18128.call(null,G__18131,G__18132));
})())){
return (new bru_3.frame.Frame(G__18122,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18133 = cljs.core.constant$keyword$tr;
var G__18134 = expr__18129;
return (pred__18128.cljs$core$IFn$_invoke$arity$2 ? pred__18128.cljs$core$IFn$_invoke$arity$2(G__18133,G__18134) : pred__18128.call(null,G__18133,G__18134));
})())){
return (new bru_3.frame.Frame(self__.tl,G__18122,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18135 = cljs.core.constant$keyword$bl;
var G__18136 = expr__18129;
return (pred__18128.cljs$core$IFn$_invoke$arity$2 ? pred__18128.cljs$core$IFn$_invoke$arity$2(G__18135,G__18136) : pred__18128.call(null,G__18135,G__18136));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,G__18122,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18137 = cljs.core.constant$keyword$br;
var G__18138 = expr__18129;
return (pred__18128.cljs$core$IFn$_invoke$arity$2 ? pred__18128.cljs$core$IFn$_invoke$arity$2(G__18137,G__18138) : pred__18128.call(null,G__18137,G__18138));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,G__18122,self__.__meta,self__.__extmap,null));
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__18122),null));
}
}
}
}
});

bru_3.frame.Frame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__18122){
var self__ = this;
var this__13201__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,G__18122,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

bru_3.frame.Frame.cljs$lang$type = true;

bru_3.frame.Frame.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bru-3.frame/Frame");
});

bru_3.frame.Frame.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"bru-3.frame/Frame");
});

bru_3.frame.__GT_Frame = (function bru_3$frame$__GT_Frame(tl,tr,bl,br){
return (new bru_3.frame.Frame(tl,tr,bl,br,null,null,null));
});

bru_3.frame.map__GT_Frame = (function bru_3$frame$map__GT_Frame(G__18124){
return (new bru_3.frame.Frame(cljs.core.constant$keyword$tl.cljs$core$IFn$_invoke$arity$1(G__18124),cljs.core.constant$keyword$tr.cljs$core$IFn$_invoke$arity$1(G__18124),cljs.core.constant$keyword$bl.cljs$core$IFn$_invoke$arity$1(G__18124),cljs.core.constant$keyword$br.cljs$core$IFn$_invoke$arity$1(G__18124),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18124,cljs.core.constant$keyword$tl,cljs.core.array_seq([cljs.core.constant$keyword$tr,cljs.core.constant$keyword$bl,cljs.core.constant$keyword$br], 0)),null));
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
var vec__18142 = bru_3.decomposition.vertices(rb1);
var b1u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
var b1d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(1),null);
var vec__18143 = bru_3.decomposition.vertices(rb2);
var b2u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(0),null);
var b2d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(1),null);
return (new bru_3.frame.Frame(b1u,b2u,b1d,b2d,null,null,null));
});
