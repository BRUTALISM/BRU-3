// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');

/**
* @constructor
* @param {*} vertices
* @param {*} edges
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24088,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24090 = (((k24088 instanceof cljs.core.Keyword))?k24088.fqn:null);
switch (G__24090) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24088,else__13205__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$edges,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24087){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24091 = cljs.core.keyword_identical_QMARK_;
var expr__24092 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24094 = cljs.core.constant$keyword$vertices;
var G__24095 = expr__24092;
return (pred__24091.cljs$core$IFn$_invoke$arity$2 ? pred__24091.cljs$core$IFn$_invoke$arity$2(G__24094,G__24095) : pred__24091.call(null,G__24094,G__24095));
})())){
return (new thi.ng.geom.types.Graph(G__24087,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24096 = cljs.core.constant$keyword$edges;
var G__24097 = expr__24092;
return (pred__24091.cljs$core$IFn$_invoke$arity$2 ? pred__24091.cljs$core$IFn$_invoke$arity$2(G__24096,G__24097) : pred__24091.call(null,G__24096,G__24097));
})())){
return (new thi.ng.geom.types.Graph(self__.vertices,G__24087,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24087),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24087){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__24087,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__24089){
return (new thi.ng.geom.types.Graph(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24089),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24089),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24089,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$edges], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24100,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24102 = (((k24100 instanceof cljs.core.Keyword))?k24100.fqn:null);
switch (G__24102) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24100,else__13205__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24099){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24103 = cljs.core.keyword_identical_QMARK_;
var expr__24104 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24106 = cljs.core.constant$keyword$points;
var G__24107 = expr__24104;
return (pred__24103.cljs$core$IFn$_invoke$arity$2 ? pred__24103.cljs$core$IFn$_invoke$arity$2(G__24106,G__24107) : pred__24103.call(null,G__24106,G__24107));
})())){
return (new thi.ng.geom.types.Bezier2(G__24099,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24099),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24099){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__24099,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__24101){
return (new thi.ng.geom.types.Bezier2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24101),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24101,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24110,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24112 = (((k24110 instanceof cljs.core.Keyword))?k24110.fqn:null);
switch (G__24112) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24110,else__13205__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$r,null,cljs.core.constant$keyword$p,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24109){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24113 = cljs.core.keyword_identical_QMARK_;
var expr__24114 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24116 = cljs.core.constant$keyword$p;
var G__24117 = expr__24114;
return (pred__24113.cljs$core$IFn$_invoke$arity$2 ? pred__24113.cljs$core$IFn$_invoke$arity$2(G__24116,G__24117) : pred__24113.call(null,G__24116,G__24117));
})())){
return (new thi.ng.geom.types.Circle2(G__24109,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24118 = cljs.core.constant$keyword$r;
var G__24119 = expr__24114;
return (pred__24113.cljs$core$IFn$_invoke$arity$2 ? pred__24113.cljs$core$IFn$_invoke$arity$2(G__24118,G__24119) : pred__24113.call(null,G__24118,G__24119));
})())){
return (new thi.ng.geom.types.Circle2(self__.p,G__24109,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24109),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24109){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__24109,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__24111){
return (new thi.ng.geom.types.Circle2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24111),cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1(G__24111),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24111,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$r], 0)),null));
});


/**
* @constructor
* @param {*} p
* @param {*} rx
* @param {*} ry
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24122,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24124 = (((k24122 instanceof cljs.core.Keyword))?k24122.fqn:null);
switch (G__24124) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24122,else__13205__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rx,self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$ry,self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$rx,null,cljs.core.constant$keyword$p,null,cljs.core.constant$keyword$ry,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24121){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24125 = cljs.core.keyword_identical_QMARK_;
var expr__24126 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24128 = cljs.core.constant$keyword$p;
var G__24129 = expr__24126;
return (pred__24125.cljs$core$IFn$_invoke$arity$2 ? pred__24125.cljs$core$IFn$_invoke$arity$2(G__24128,G__24129) : pred__24125.call(null,G__24128,G__24129));
})())){
return (new thi.ng.geom.types.Ellipse2(G__24121,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24130 = cljs.core.constant$keyword$rx;
var G__24131 = expr__24126;
return (pred__24125.cljs$core$IFn$_invoke$arity$2 ? pred__24125.cljs$core$IFn$_invoke$arity$2(G__24130,G__24131) : pred__24125.call(null,G__24130,G__24131));
})())){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__24121,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24132 = cljs.core.constant$keyword$ry;
var G__24133 = expr__24126;
return (pred__24125.cljs$core$IFn$_invoke$arity$2 ? pred__24125.cljs$core$IFn$_invoke$arity$2(G__24132,G__24133) : pred__24125.call(null,G__24132,G__24133));
})())){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__24121,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24121),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rx,self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$ry,self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24121){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__24121,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__24123){
return (new thi.ng.geom.types.Ellipse2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24123),cljs.core.constant$keyword$rx.cljs$core$IFn$_invoke$arity$1(G__24123),cljs.core.constant$keyword$ry.cljs$core$IFn$_invoke$arity$1(G__24123),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24123,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$rx,cljs.core.constant$keyword$ry], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24136,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24138 = (((k24136 instanceof cljs.core.Keyword))?k24136.fqn:null);
switch (G__24138) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24136,else__13205__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24135){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24139 = cljs.core.keyword_identical_QMARK_;
var expr__24140 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24142 = cljs.core.constant$keyword$points;
var G__24143 = expr__24140;
return (pred__24139.cljs$core$IFn$_invoke$arity$2 ? pred__24139.cljs$core$IFn$_invoke$arity$2(G__24142,G__24143) : pred__24139.call(null,G__24142,G__24143));
})())){
return (new thi.ng.geom.types.Line2(G__24135,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24135),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24135){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__24135,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__24137){
return (new thi.ng.geom.types.Line2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24137),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24137,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24146,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24148 = (((k24146 instanceof cljs.core.Keyword))?k24146.fqn:null);
switch (G__24148) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24146,else__13205__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24145){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24149 = cljs.core.keyword_identical_QMARK_;
var expr__24150 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24152 = cljs.core.constant$keyword$points;
var G__24153 = expr__24150;
return (pred__24149.cljs$core$IFn$_invoke$arity$2 ? pred__24149.cljs$core$IFn$_invoke$arity$2(G__24152,G__24153) : pred__24149.call(null,G__24152,G__24153));
})())){
return (new thi.ng.geom.types.LineStrip2(G__24145,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24145),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24145){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__24145,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__24147){
return (new thi.ng.geom.types.LineStrip2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24147),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24147,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24156,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24158 = (((k24156 instanceof cljs.core.Keyword))?k24156.fqn:null);
switch (G__24158) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24156,else__13205__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24155){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24159 = cljs.core.keyword_identical_QMARK_;
var expr__24160 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24162 = cljs.core.constant$keyword$vertices;
var G__24163 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24162,G__24163) : pred__24159.call(null,G__24162,G__24163));
})())){
return (new thi.ng.geom.types.Mesh2(G__24155,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24164 = cljs.core.constant$keyword$normals;
var G__24165 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24164,G__24165) : pred__24159.call(null,G__24164,G__24165));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__24155,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24166 = cljs.core.constant$keyword$fnormals;
var G__24167 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24166,G__24167) : pred__24159.call(null,G__24166,G__24167));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__24155,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24168 = cljs.core.constant$keyword$vnormals;
var G__24169 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24168,G__24169) : pred__24159.call(null,G__24168,G__24169));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__24155,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24170 = cljs.core.constant$keyword$edges;
var G__24171 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24170,G__24171) : pred__24159.call(null,G__24170,G__24171));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24155,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24172 = cljs.core.constant$keyword$faces;
var G__24173 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24172,G__24173) : pred__24159.call(null,G__24172,G__24173));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24155,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24174 = cljs.core.constant$keyword$attribs;
var G__24175 = expr__24160;
return (pred__24159.cljs$core$IFn$_invoke$arity$2 ? pred__24159.cljs$core$IFn$_invoke$arity$2(G__24174,G__24175) : pred__24159.call(null,G__24174,G__24175));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24155,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24155),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24155){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24155,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__24157){
return (new thi.ng.geom.types.Mesh2(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24157),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24157,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
});


/**
* @constructor
* @param {*} segments
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24178,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24180 = (((k24178 instanceof cljs.core.Keyword))?k24178.fqn:null);
switch (G__24180) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24178,else__13205__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$segments,self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$segments,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24177){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24181 = cljs.core.keyword_identical_QMARK_;
var expr__24182 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24184 = cljs.core.constant$keyword$segments;
var G__24185 = expr__24182;
return (pred__24181.cljs$core$IFn$_invoke$arity$2 ? pred__24181.cljs$core$IFn$_invoke$arity$2(G__24184,G__24185) : pred__24181.call(null,G__24184,G__24185));
})())){
return (new thi.ng.geom.types.Path2(G__24177,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24177),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$segments,self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24177){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__24177,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__24179){
return (new thi.ng.geom.types.Path2(cljs.core.constant$keyword$segments.cljs$core$IFn$_invoke$arity$1(G__24179),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24179,cljs.core.constant$keyword$segments),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24188,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24190 = (((k24188 instanceof cljs.core.Keyword))?k24188.fqn:null);
switch (G__24190) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24188,else__13205__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24187){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24191 = cljs.core.keyword_identical_QMARK_;
var expr__24192 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24194 = cljs.core.constant$keyword$points;
var G__24195 = expr__24192;
return (pred__24191.cljs$core$IFn$_invoke$arity$2 ? pred__24191.cljs$core$IFn$_invoke$arity$2(G__24194,G__24195) : pred__24191.call(null,G__24194,G__24195));
})())){
return (new thi.ng.geom.types.Polygon2(G__24187,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24187),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24187){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__24187,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__24189){
return (new thi.ng.geom.types.Polygon2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24189),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24189,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24198,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24200 = (((k24198 instanceof cljs.core.Keyword))?k24198.fqn:null);
switch (G__24200) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24198,else__13205__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$size,null,cljs.core.constant$keyword$p,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24197){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24201 = cljs.core.keyword_identical_QMARK_;
var expr__24202 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24204 = cljs.core.constant$keyword$p;
var G__24205 = expr__24202;
return (pred__24201.cljs$core$IFn$_invoke$arity$2 ? pred__24201.cljs$core$IFn$_invoke$arity$2(G__24204,G__24205) : pred__24201.call(null,G__24204,G__24205));
})())){
return (new thi.ng.geom.types.Rect2(G__24197,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24206 = cljs.core.constant$keyword$size;
var G__24207 = expr__24202;
return (pred__24201.cljs$core$IFn$_invoke$arity$2 ? pred__24201.cljs$core$IFn$_invoke$arity$2(G__24206,G__24207) : pred__24201.call(null,G__24206,G__24207));
})())){
return (new thi.ng.geom.types.Rect2(self__.p,G__24197,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24197),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24197){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__24197,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__24199){
return (new thi.ng.geom.types.Rect2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24199),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(G__24199),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24199,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$size], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24210,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24212 = (((k24210 instanceof cljs.core.Keyword))?k24210.fqn:null);
switch (G__24212) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24210,else__13205__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24209){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24213 = cljs.core.keyword_identical_QMARK_;
var expr__24214 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24216 = cljs.core.constant$keyword$points;
var G__24217 = expr__24214;
return (pred__24213.cljs$core$IFn$_invoke$arity$2 ? pred__24213.cljs$core$IFn$_invoke$arity$2(G__24216,G__24217) : pred__24213.call(null,G__24216,G__24217));
})())){
return (new thi.ng.geom.types.Triangle2(G__24209,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24209),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24209){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__24209,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__24211){
return (new thi.ng.geom.types.Triangle2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24211),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24211,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24220,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24222 = (((k24220 instanceof cljs.core.Keyword))?k24220.fqn:null);
switch (G__24222) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24220,else__13205__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$size,null,cljs.core.constant$keyword$p,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24219){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24223 = cljs.core.keyword_identical_QMARK_;
var expr__24224 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24226 = cljs.core.constant$keyword$p;
var G__24227 = expr__24224;
return (pred__24223.cljs$core$IFn$_invoke$arity$2 ? pred__24223.cljs$core$IFn$_invoke$arity$2(G__24226,G__24227) : pred__24223.call(null,G__24226,G__24227));
})())){
return (new thi.ng.geom.types.AABB(G__24219,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24228 = cljs.core.constant$keyword$size;
var G__24229 = expr__24224;
return (pred__24223.cljs$core$IFn$_invoke$arity$2 ? pred__24223.cljs$core$IFn$_invoke$arity$2(G__24228,G__24229) : pred__24223.call(null,G__24228,G__24229));
})())){
return (new thi.ng.geom.types.AABB(self__.p,G__24219,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24219),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24219){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__24219,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__24221){
return (new thi.ng.geom.types.AABB(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24221),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(G__24221),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24221,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$size], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24232,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24234 = (((k24232 instanceof cljs.core.Keyword))?k24232.fqn:null);
switch (G__24234) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24232,else__13205__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24231){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24235 = cljs.core.keyword_identical_QMARK_;
var expr__24236 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24238 = cljs.core.constant$keyword$points;
var G__24239 = expr__24236;
return (pred__24235.cljs$core$IFn$_invoke$arity$2 ? pred__24235.cljs$core$IFn$_invoke$arity$2(G__24238,G__24239) : pred__24235.call(null,G__24238,G__24239));
})())){
return (new thi.ng.geom.types.Cuboid(G__24231,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24231),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24231){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__24231,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__24233){
return (new thi.ng.geom.types.Cuboid(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24233),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24233,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24242,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24244 = (((k24242 instanceof cljs.core.Keyword))?k24242.fqn:null);
switch (G__24244) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24242,else__13205__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24241){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24245 = cljs.core.keyword_identical_QMARK_;
var expr__24246 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24248 = cljs.core.constant$keyword$points;
var G__24249 = expr__24246;
return (pred__24245.cljs$core$IFn$_invoke$arity$2 ? pred__24245.cljs$core$IFn$_invoke$arity$2(G__24248,G__24249) : pred__24245.call(null,G__24248,G__24249));
})())){
return (new thi.ng.geom.types.Bezier3(G__24241,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24241),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24241){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__24241,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__24243){
return (new thi.ng.geom.types.Bezier3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24243),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24243,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} faces
* @param {*} fnormals
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24252,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24254 = (((k24252 instanceof cljs.core.Keyword))?k24252.fqn:null);
switch (G__24254) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24252,else__13205__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24251){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24255 = cljs.core.keyword_identical_QMARK_;
var expr__24256 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24258 = cljs.core.constant$keyword$vertices;
var G__24259 = expr__24256;
return (pred__24255.cljs$core$IFn$_invoke$arity$2 ? pred__24255.cljs$core$IFn$_invoke$arity$2(G__24258,G__24259) : pred__24255.call(null,G__24258,G__24259));
})())){
return (new thi.ng.geom.types.BasicMesh(G__24251,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24260 = cljs.core.constant$keyword$faces;
var G__24261 = expr__24256;
return (pred__24255.cljs$core$IFn$_invoke$arity$2 ? pred__24255.cljs$core$IFn$_invoke$arity$2(G__24260,G__24261) : pred__24255.call(null,G__24260,G__24261));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__24251,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24262 = cljs.core.constant$keyword$fnormals;
var G__24263 = expr__24256;
return (pred__24255.cljs$core$IFn$_invoke$arity$2 ? pred__24255.cljs$core$IFn$_invoke$arity$2(G__24262,G__24263) : pred__24255.call(null,G__24262,G__24263));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__24251,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24264 = cljs.core.constant$keyword$attribs;
var G__24265 = expr__24256;
return (pred__24255.cljs$core$IFn$_invoke$arity$2 ? pred__24255.cljs$core$IFn$_invoke$arity$2(G__24264,G__24265) : pred__24255.call(null,G__24264,G__24265));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__24251,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24251),null));
}
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24251){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,G__24251,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals,attribs){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__24253){
return (new thi.ng.geom.types.BasicMesh(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24253),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24253),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24253),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24253),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24253,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$faces,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$attribs], 0)),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24268,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24270 = (((k24268 instanceof cljs.core.Keyword))?k24268.fqn:null);
switch (G__24270) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24268,else__13205__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24267){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24271 = cljs.core.keyword_identical_QMARK_;
var expr__24272 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24274 = cljs.core.constant$keyword$vertices;
var G__24275 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24274,G__24275) : pred__24271.call(null,G__24274,G__24275));
})())){
return (new thi.ng.geom.types.GMesh(G__24267,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24276 = cljs.core.constant$keyword$normals;
var G__24277 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24276,G__24277) : pred__24271.call(null,G__24276,G__24277));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__24267,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24278 = cljs.core.constant$keyword$fnormals;
var G__24279 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24278,G__24279) : pred__24271.call(null,G__24278,G__24279));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__24267,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24280 = cljs.core.constant$keyword$vnormals;
var G__24281 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24280,G__24281) : pred__24271.call(null,G__24280,G__24281));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__24267,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24282 = cljs.core.constant$keyword$edges;
var G__24283 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24282,G__24283) : pred__24271.call(null,G__24282,G__24283));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24267,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24284 = cljs.core.constant$keyword$faces;
var G__24285 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24284,G__24285) : pred__24271.call(null,G__24284,G__24285));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24267,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24286 = cljs.core.constant$keyword$attribs;
var G__24287 = expr__24272;
return (pred__24271.cljs$core$IFn$_invoke$arity$2 ? pred__24271.cljs$core$IFn$_invoke$arity$2(G__24286,G__24287) : pred__24271.call(null,G__24286,G__24287));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24267,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24267),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24267){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24267,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__24269){
return (new thi.ng.geom.types.GMesh(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24269),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24269),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24269,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24290,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24292 = (((k24290 instanceof cljs.core.Keyword))?k24290.fqn:null);
switch (G__24292) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24290,else__13205__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24289){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24293 = cljs.core.keyword_identical_QMARK_;
var expr__24294 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24296 = cljs.core.constant$keyword$points;
var G__24297 = expr__24294;
return (pred__24293.cljs$core$IFn$_invoke$arity$2 ? pred__24293.cljs$core$IFn$_invoke$arity$2(G__24296,G__24297) : pred__24293.call(null,G__24296,G__24297));
})())){
return (new thi.ng.geom.types.Line3(G__24289,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24289),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24289){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__24289,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__24291){
return (new thi.ng.geom.types.Line3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24291),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24291,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24300,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24302 = (((k24300 instanceof cljs.core.Keyword))?k24300.fqn:null);
switch (G__24302) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24300,else__13205__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24299){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24303 = cljs.core.keyword_identical_QMARK_;
var expr__24304 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24306 = cljs.core.constant$keyword$points;
var G__24307 = expr__24304;
return (pred__24303.cljs$core$IFn$_invoke$arity$2 ? pred__24303.cljs$core$IFn$_invoke$arity$2(G__24306,G__24307) : pred__24303.call(null,G__24306,G__24307));
})())){
return (new thi.ng.geom.types.LineStrip3(G__24299,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24299),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24299){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__24299,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__24301){
return (new thi.ng.geom.types.LineStrip3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24301),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24301,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Mesh3 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24310,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24312 = (((k24310 instanceof cljs.core.Keyword))?k24310.fqn:null);
switch (G__24312) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24310,else__13205__auto__);

}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24309){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24313 = cljs.core.keyword_identical_QMARK_;
var expr__24314 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24316 = cljs.core.constant$keyword$vertices;
var G__24317 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24316,G__24317) : pred__24313.call(null,G__24316,G__24317));
})())){
return (new thi.ng.geom.types.Mesh3(G__24309,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24318 = cljs.core.constant$keyword$normals;
var G__24319 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24318,G__24319) : pred__24313.call(null,G__24318,G__24319));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,G__24309,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24320 = cljs.core.constant$keyword$fnormals;
var G__24321 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24320,G__24321) : pred__24313.call(null,G__24320,G__24321));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__24309,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24322 = cljs.core.constant$keyword$vnormals;
var G__24323 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24322,G__24323) : pred__24313.call(null,G__24322,G__24323));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__24309,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24324 = cljs.core.constant$keyword$edges;
var G__24325 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24324,G__24325) : pred__24313.call(null,G__24324,G__24325));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24309,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24326 = cljs.core.constant$keyword$faces;
var G__24327 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24326,G__24327) : pred__24313.call(null,G__24326,G__24327));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24309,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24328 = cljs.core.constant$keyword$attribs;
var G__24329 = expr__24314;
return (pred__24313.cljs$core$IFn$_invoke$arity$2 ? pred__24313.cljs$core$IFn$_invoke$arity$2(G__24328,G__24329) : pred__24313.call(null,G__24328,G__24329));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24309,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24309),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24309){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24309,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Mesh3.cljs$lang$type = true;

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.__GT_Mesh3 = (function thi$ng$geom$types$__GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh3 = (function thi$ng$geom$types$map__GT_Mesh3(G__24311){
return (new thi.ng.geom.types.Mesh3(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24311),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24311,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
});


/**
* @constructor
* @param {*} n
* @param {*} w
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24332,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24334 = (((k24332 instanceof cljs.core.Keyword))?k24332.fqn:null);
switch (G__24334) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24332,else__13205__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$n,self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$w,self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$n,null,cljs.core.constant$keyword$w,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24331){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24335 = cljs.core.keyword_identical_QMARK_;
var expr__24336 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24338 = cljs.core.constant$keyword$n;
var G__24339 = expr__24336;
return (pred__24335.cljs$core$IFn$_invoke$arity$2 ? pred__24335.cljs$core$IFn$_invoke$arity$2(G__24338,G__24339) : pred__24335.call(null,G__24338,G__24339));
})())){
return (new thi.ng.geom.types.Plane(G__24331,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24340 = cljs.core.constant$keyword$w;
var G__24341 = expr__24336;
return (pred__24335.cljs$core$IFn$_invoke$arity$2 ? pred__24335.cljs$core$IFn$_invoke$arity$2(G__24340,G__24341) : pred__24335.call(null,G__24340,G__24341));
})())){
return (new thi.ng.geom.types.Plane(self__.n,G__24331,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24331),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$n,self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$w,self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24331){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__24331,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__24333){
return (new thi.ng.geom.types.Plane(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(G__24333),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(G__24333),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24333,cljs.core.constant$keyword$n,cljs.core.array_seq([cljs.core.constant$keyword$w], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24344,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24346 = (((k24344 instanceof cljs.core.Keyword))?k24344.fqn:null);
switch (G__24346) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24344,else__13205__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24343){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24347 = cljs.core.keyword_identical_QMARK_;
var expr__24348 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24350 = cljs.core.constant$keyword$points;
var G__24351 = expr__24348;
return (pred__24347.cljs$core$IFn$_invoke$arity$2 ? pred__24347.cljs$core$IFn$_invoke$arity$2(G__24350,G__24351) : pred__24347.call(null,G__24350,G__24351));
})())){
return (new thi.ng.geom.types.Quad3(G__24343,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24343),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24343){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__24343,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__24345){
return (new thi.ng.geom.types.Quad3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24345),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24345,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24354,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24356 = (((k24354 instanceof cljs.core.Keyword))?k24354.fqn:null);
switch (G__24356) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24354,else__13205__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$r,null,cljs.core.constant$keyword$p,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24353){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24357 = cljs.core.keyword_identical_QMARK_;
var expr__24358 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24360 = cljs.core.constant$keyword$p;
var G__24361 = expr__24358;
return (pred__24357.cljs$core$IFn$_invoke$arity$2 ? pred__24357.cljs$core$IFn$_invoke$arity$2(G__24360,G__24361) : pred__24357.call(null,G__24360,G__24361));
})())){
return (new thi.ng.geom.types.Sphere(G__24353,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24362 = cljs.core.constant$keyword$r;
var G__24363 = expr__24358;
return (pred__24357.cljs$core$IFn$_invoke$arity$2 ? pred__24357.cljs$core$IFn$_invoke$arity$2(G__24362,G__24363) : pred__24357.call(null,G__24362,G__24363));
})())){
return (new thi.ng.geom.types.Sphere(self__.p,G__24353,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24353),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24353){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__24353,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__24355){
return (new thi.ng.geom.types.Sphere(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24355),cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1(G__24355),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24355,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$r], 0)),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24366,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24368 = (((k24366 instanceof cljs.core.Keyword))?k24366.fqn:null);
switch (G__24368) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24366,else__13205__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24365){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24369 = cljs.core.keyword_identical_QMARK_;
var expr__24370 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24372 = cljs.core.constant$keyword$points;
var G__24373 = expr__24370;
return (pred__24369.cljs$core$IFn$_invoke$arity$2 ? pred__24369.cljs$core$IFn$_invoke$arity$2(G__24372,G__24373) : pred__24369.call(null,G__24372,G__24373));
})())){
return (new thi.ng.geom.types.Tetrahedron(G__24365,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24365),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24365){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__24365,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__24367){
return (new thi.ng.geom.types.Tetrahedron(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24367),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24367,cljs.core.constant$keyword$points),null));
});


/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13202__auto__,k__13203__auto__){
var self__ = this;
var this__13202__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13202__auto____$1,k__13203__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13204__auto__,k24376,else__13205__auto__){
var self__ = this;
var this__13204__auto____$1 = this;
var G__24378 = (((k24376 instanceof cljs.core.Keyword))?k24376.fqn:null);
switch (G__24378) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24376,else__13205__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13216__auto__,writer__13217__auto__,opts__13218__auto__){
var self__ = this;
var this__13216__auto____$1 = this;
var pr_pair__13219__auto__ = ((function (this__13216__auto____$1){
return (function (keyval__13220__auto__){
return cljs.core.pr_sequential_writer(writer__13217__auto__,cljs.core.pr_writer,""," ","",opts__13218__auto__,keyval__13220__auto__);
});})(this__13216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13217__auto__,pr_pair__13219__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__13218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13200__auto__){
var self__ = this;
var this__13200__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13196__auto__){
var self__ = this;
var this__13196__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13206__auto__){
var self__ = this;
var this__13206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13197__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13198__auto__,other__13199__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13211__auto__,k__13212__auto__){
var self__ = this;
var this__13211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13211__auto____$1),self__.__meta),k__13212__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13212__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13209__auto__,k__13210__auto__,G__24375){
var self__ = this;
var this__13209__auto____$1 = this;
var pred__24379 = cljs.core.keyword_identical_QMARK_;
var expr__24380 = k__13210__auto__;
if(cljs.core.truth_((function (){var G__24382 = cljs.core.constant$keyword$points;
var G__24383 = expr__24380;
return (pred__24379.cljs$core$IFn$_invoke$arity$2 ? pred__24379.cljs$core$IFn$_invoke$arity$2(G__24382,G__24383) : pred__24379.call(null,G__24382,G__24383));
})())){
return (new thi.ng.geom.types.Triangle3(G__24375,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13210__auto__,G__24375),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13214__auto__){
var self__ = this;
var this__13214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13201__auto__,G__24375){
var self__ = this;
var this__13201__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__24375,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13207__auto__,entry__13208__auto__){
var self__ = this;
var this__13207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13208__auto__)){
return cljs.core._assoc(this__13207__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13207__auto____$1,entry__13208__auto__);
}
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__13236__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__13236__auto__,writer__13237__auto__){
return cljs.core._write(writer__13237__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__24377){
return (new thi.ng.geom.types.Triangle3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24377),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24377,cljs.core.constant$keyword$points),null));
});

