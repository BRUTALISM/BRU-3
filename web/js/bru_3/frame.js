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
return (function (p__21461){
var vec__21462 = p__21461;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21462,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21462,(1),null);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,this$__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null)));
});})(this$__$1))
;
var pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tl,cljs.core.constant$keyword$tr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$tr,cljs.core.constant$keyword$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$br,cljs.core.constant$keyword$bl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$bl,cljs.core.constant$keyword$tl], null)], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(edge,pairs);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

bru_3.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k21459,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__21463 = (((k21459 instanceof cljs.core.Keyword))?k21459.fqn:null);
switch (G__21463) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21459,else__13173__auto__);

}
});

bru_3.frame.Frame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#bru-3.frame.Frame{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

bru_3.frame.Frame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
var self__ = this;
var this__13165__auto____$1 = this;
var h__12991__auto__ = self__.__hash;
if(!((h__12991__auto__ == null))){
return h__12991__auto__;
} else {
var h__12991__auto____$1 = cljs.core.hash_imap(this__13165__auto____$1);
self__.__hash = h__12991__auto____$1;

return h__12991__auto____$1;
}
});

bru_3.frame.Frame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
var self__ = this;
var this__13166__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12563__auto__ = other__13167__auto__;
if(cljs.core.truth_(and__12563__auto__)){
var and__12563__auto____$1 = (this__13166__auto____$1.constructor === other__13167__auto__.constructor);
if(and__12563__auto____$1){
return cljs.core.equiv_map(this__13166__auto____$1,other__13167__auto__);
} else {
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
})())){
return true;
} else {
return false;
}
});

bru_3.frame.Frame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$tl,null,cljs.core.constant$keyword$tr,null,cljs.core.constant$keyword$bl,null,cljs.core.constant$keyword$br,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

bru_3.frame.Frame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__21458){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__21464 = cljs.core.keyword_identical_QMARK_;
var expr__21465 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__21467 = cljs.core.constant$keyword$tl;
var G__21468 = expr__21465;
return (pred__21464.cljs$core$IFn$_invoke$arity$2 ? pred__21464.cljs$core$IFn$_invoke$arity$2(G__21467,G__21468) : pred__21464.call(null,G__21467,G__21468));
})())){
return (new bru_3.frame.Frame(G__21458,self__.tr,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21469 = cljs.core.constant$keyword$tr;
var G__21470 = expr__21465;
return (pred__21464.cljs$core$IFn$_invoke$arity$2 ? pred__21464.cljs$core$IFn$_invoke$arity$2(G__21469,G__21470) : pred__21464.call(null,G__21469,G__21470));
})())){
return (new bru_3.frame.Frame(self__.tl,G__21458,self__.bl,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21471 = cljs.core.constant$keyword$bl;
var G__21472 = expr__21465;
return (pred__21464.cljs$core$IFn$_invoke$arity$2 ? pred__21464.cljs$core$IFn$_invoke$arity$2(G__21471,G__21472) : pred__21464.call(null,G__21471,G__21472));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,G__21458,self__.br,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21473 = cljs.core.constant$keyword$br;
var G__21474 = expr__21465;
return (pred__21464.cljs$core$IFn$_invoke$arity$2 ? pred__21464.cljs$core$IFn$_invoke$arity$2(G__21473,G__21474) : pred__21464.call(null,G__21473,G__21474));
})())){
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,G__21458,self__.__meta,self__.__extmap,null));
} else {
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__21458),null));
}
}
}
}
});

bru_3.frame.Frame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tl,self__.tl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$tr,self__.tr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$bl,self__.bl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$br,self__.br],null))], null),self__.__extmap));
});

bru_3.frame.Frame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__21458){
var self__ = this;
var this__13169__auto____$1 = this;
return (new bru_3.frame.Frame(self__.tl,self__.tr,self__.bl,self__.br,G__21458,self__.__extmap,self__.__hash));
});

bru_3.frame.Frame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

bru_3.frame.Frame.cljs$lang$type = true;

bru_3.frame.Frame.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bru-3.frame/Frame");
});

bru_3.frame.Frame.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"bru-3.frame/Frame");
});

bru_3.frame.__GT_Frame = (function bru_3$frame$__GT_Frame(tl,tr,bl,br){
return (new bru_3.frame.Frame(tl,tr,bl,br,null,null,null));
});

bru_3.frame.map__GT_Frame = (function bru_3$frame$map__GT_Frame(G__21460){
return (new bru_3.frame.Frame(cljs.core.constant$keyword$tl.cljs$core$IFn$_invoke$arity$1(G__21460),cljs.core.constant$keyword$tr.cljs$core$IFn$_invoke$arity$1(G__21460),cljs.core.constant$keyword$bl.cljs$core$IFn$_invoke$arity$1(G__21460),cljs.core.constant$keyword$br.cljs$core$IFn$_invoke$arity$1(G__21460),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21460,cljs.core.constant$keyword$tl,cljs.core.array_seq([cljs.core.constant$keyword$tr,cljs.core.constant$keyword$bl,cljs.core.constant$keyword$br], 0)),null));
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
var vec__21478 = bru_3.decomposition.vertices(rb1);
var b1u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478,(0),null);
var b1d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478,(1),null);
var vec__21479 = bru_3.decomposition.vertices(rb2);
var b2u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479,(0),null);
var b2d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479,(1),null);
return (new bru_3.frame.Frame(b1u,b2u,b1d,b2d,null,null,null));
});
