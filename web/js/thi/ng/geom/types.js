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
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24082,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24084 = (((k24082 instanceof cljs.core.Keyword))?k24082.fqn:null);
switch (G__24084) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24082,else__13173__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$edges,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24081){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24085 = cljs.core.keyword_identical_QMARK_;
var expr__24086 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24088 = cljs.core.constant$keyword$vertices;
var G__24089 = expr__24086;
return (pred__24085.cljs$core$IFn$_invoke$arity$2 ? pred__24085.cljs$core$IFn$_invoke$arity$2(G__24088,G__24089) : pred__24085.call(null,G__24088,G__24089));
})())){
return (new thi.ng.geom.types.Graph(G__24081,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24090 = cljs.core.constant$keyword$edges;
var G__24091 = expr__24086;
return (pred__24085.cljs$core$IFn$_invoke$arity$2 ? pred__24085.cljs$core$IFn$_invoke$arity$2(G__24090,G__24091) : pred__24085.call(null,G__24090,G__24091));
})())){
return (new thi.ng.geom.types.Graph(self__.vertices,G__24081,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24081),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24081){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__24081,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__24083){
return (new thi.ng.geom.types.Graph(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24083),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24083),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24083,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$edges], 0)),null));
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
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24094,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24096 = (((k24094 instanceof cljs.core.Keyword))?k24094.fqn:null);
switch (G__24096) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24094,else__13173__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24093){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24097 = cljs.core.keyword_identical_QMARK_;
var expr__24098 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24100 = cljs.core.constant$keyword$points;
var G__24101 = expr__24098;
return (pred__24097.cljs$core$IFn$_invoke$arity$2 ? pred__24097.cljs$core$IFn$_invoke$arity$2(G__24100,G__24101) : pred__24097.call(null,G__24100,G__24101));
})())){
return (new thi.ng.geom.types.Bezier2(G__24093,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24093),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24093){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__24093,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__24095){
return (new thi.ng.geom.types.Bezier2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24095),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24095,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24104,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24106 = (((k24104 instanceof cljs.core.Keyword))?k24104.fqn:null);
switch (G__24106) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24104,else__13173__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$r,null,cljs.core.constant$keyword$p,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24103){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24107 = cljs.core.keyword_identical_QMARK_;
var expr__24108 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24110 = cljs.core.constant$keyword$p;
var G__24111 = expr__24108;
return (pred__24107.cljs$core$IFn$_invoke$arity$2 ? pred__24107.cljs$core$IFn$_invoke$arity$2(G__24110,G__24111) : pred__24107.call(null,G__24110,G__24111));
})())){
return (new thi.ng.geom.types.Circle2(G__24103,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24112 = cljs.core.constant$keyword$r;
var G__24113 = expr__24108;
return (pred__24107.cljs$core$IFn$_invoke$arity$2 ? pred__24107.cljs$core$IFn$_invoke$arity$2(G__24112,G__24113) : pred__24107.call(null,G__24112,G__24113));
})())){
return (new thi.ng.geom.types.Circle2(self__.p,G__24103,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24103),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24103){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__24103,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__24105){
return (new thi.ng.geom.types.Circle2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24105),cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1(G__24105),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24105,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$r], 0)),null));
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
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24116,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24118 = (((k24116 instanceof cljs.core.Keyword))?k24116.fqn:null);
switch (G__24118) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24116,else__13173__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rx,self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$ry,self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$rx,null,cljs.core.constant$keyword$p,null,cljs.core.constant$keyword$ry,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24115){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24119 = cljs.core.keyword_identical_QMARK_;
var expr__24120 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24122 = cljs.core.constant$keyword$p;
var G__24123 = expr__24120;
return (pred__24119.cljs$core$IFn$_invoke$arity$2 ? pred__24119.cljs$core$IFn$_invoke$arity$2(G__24122,G__24123) : pred__24119.call(null,G__24122,G__24123));
})())){
return (new thi.ng.geom.types.Ellipse2(G__24115,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24124 = cljs.core.constant$keyword$rx;
var G__24125 = expr__24120;
return (pred__24119.cljs$core$IFn$_invoke$arity$2 ? pred__24119.cljs$core$IFn$_invoke$arity$2(G__24124,G__24125) : pred__24119.call(null,G__24124,G__24125));
})())){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__24115,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24126 = cljs.core.constant$keyword$ry;
var G__24127 = expr__24120;
return (pred__24119.cljs$core$IFn$_invoke$arity$2 ? pred__24119.cljs$core$IFn$_invoke$arity$2(G__24126,G__24127) : pred__24119.call(null,G__24126,G__24127));
})())){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__24115,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24115),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rx,self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$ry,self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24115){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__24115,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__24117){
return (new thi.ng.geom.types.Ellipse2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24117),cljs.core.constant$keyword$rx.cljs$core$IFn$_invoke$arity$1(G__24117),cljs.core.constant$keyword$ry.cljs$core$IFn$_invoke$arity$1(G__24117),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24117,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$rx,cljs.core.constant$keyword$ry], 0)),null));
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
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24130,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24132 = (((k24130 instanceof cljs.core.Keyword))?k24130.fqn:null);
switch (G__24132) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24130,else__13173__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24129){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24133 = cljs.core.keyword_identical_QMARK_;
var expr__24134 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24136 = cljs.core.constant$keyword$points;
var G__24137 = expr__24134;
return (pred__24133.cljs$core$IFn$_invoke$arity$2 ? pred__24133.cljs$core$IFn$_invoke$arity$2(G__24136,G__24137) : pred__24133.call(null,G__24136,G__24137));
})())){
return (new thi.ng.geom.types.Line2(G__24129,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24129),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24129){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__24129,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__24131){
return (new thi.ng.geom.types.Line2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24131),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24131,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24140,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24142 = (((k24140 instanceof cljs.core.Keyword))?k24140.fqn:null);
switch (G__24142) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24140,else__13173__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24139){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24143 = cljs.core.keyword_identical_QMARK_;
var expr__24144 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24146 = cljs.core.constant$keyword$points;
var G__24147 = expr__24144;
return (pred__24143.cljs$core$IFn$_invoke$arity$2 ? pred__24143.cljs$core$IFn$_invoke$arity$2(G__24146,G__24147) : pred__24143.call(null,G__24146,G__24147));
})())){
return (new thi.ng.geom.types.LineStrip2(G__24139,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24139),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24139){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__24139,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__24141){
return (new thi.ng.geom.types.LineStrip2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24141),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24141,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24150,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24152 = (((k24150 instanceof cljs.core.Keyword))?k24150.fqn:null);
switch (G__24152) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24150,else__13173__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24149){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24153 = cljs.core.keyword_identical_QMARK_;
var expr__24154 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24156 = cljs.core.constant$keyword$vertices;
var G__24157 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24156,G__24157) : pred__24153.call(null,G__24156,G__24157));
})())){
return (new thi.ng.geom.types.Mesh2(G__24149,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24158 = cljs.core.constant$keyword$normals;
var G__24159 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24158,G__24159) : pred__24153.call(null,G__24158,G__24159));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__24149,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24160 = cljs.core.constant$keyword$fnormals;
var G__24161 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24160,G__24161) : pred__24153.call(null,G__24160,G__24161));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__24149,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24162 = cljs.core.constant$keyword$vnormals;
var G__24163 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24162,G__24163) : pred__24153.call(null,G__24162,G__24163));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__24149,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24164 = cljs.core.constant$keyword$edges;
var G__24165 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24164,G__24165) : pred__24153.call(null,G__24164,G__24165));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24149,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24166 = cljs.core.constant$keyword$faces;
var G__24167 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24166,G__24167) : pred__24153.call(null,G__24166,G__24167));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24149,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24168 = cljs.core.constant$keyword$attribs;
var G__24169 = expr__24154;
return (pred__24153.cljs$core$IFn$_invoke$arity$2 ? pred__24153.cljs$core$IFn$_invoke$arity$2(G__24168,G__24169) : pred__24153.call(null,G__24168,G__24169));
})())){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24149,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24149),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24149){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24149,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__24151){
return (new thi.ng.geom.types.Mesh2(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24151),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24151),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24151,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
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
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24172,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24174 = (((k24172 instanceof cljs.core.Keyword))?k24172.fqn:null);
switch (G__24174) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24172,else__13173__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$segments,self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$segments,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24171){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24175 = cljs.core.keyword_identical_QMARK_;
var expr__24176 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24178 = cljs.core.constant$keyword$segments;
var G__24179 = expr__24176;
return (pred__24175.cljs$core$IFn$_invoke$arity$2 ? pred__24175.cljs$core$IFn$_invoke$arity$2(G__24178,G__24179) : pred__24175.call(null,G__24178,G__24179));
})())){
return (new thi.ng.geom.types.Path2(G__24171,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24171),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$segments,self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24171){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__24171,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__24173){
return (new thi.ng.geom.types.Path2(cljs.core.constant$keyword$segments.cljs$core$IFn$_invoke$arity$1(G__24173),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24173,cljs.core.constant$keyword$segments),null));
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
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24182,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24184 = (((k24182 instanceof cljs.core.Keyword))?k24182.fqn:null);
switch (G__24184) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24182,else__13173__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24181){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24185 = cljs.core.keyword_identical_QMARK_;
var expr__24186 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24188 = cljs.core.constant$keyword$points;
var G__24189 = expr__24186;
return (pred__24185.cljs$core$IFn$_invoke$arity$2 ? pred__24185.cljs$core$IFn$_invoke$arity$2(G__24188,G__24189) : pred__24185.call(null,G__24188,G__24189));
})())){
return (new thi.ng.geom.types.Polygon2(G__24181,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24181),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24181){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__24181,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__24183){
return (new thi.ng.geom.types.Polygon2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24183),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24183,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24192,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24194 = (((k24192 instanceof cljs.core.Keyword))?k24192.fqn:null);
switch (G__24194) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24192,else__13173__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$size,null,cljs.core.constant$keyword$p,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24191){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24195 = cljs.core.keyword_identical_QMARK_;
var expr__24196 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24198 = cljs.core.constant$keyword$p;
var G__24199 = expr__24196;
return (pred__24195.cljs$core$IFn$_invoke$arity$2 ? pred__24195.cljs$core$IFn$_invoke$arity$2(G__24198,G__24199) : pred__24195.call(null,G__24198,G__24199));
})())){
return (new thi.ng.geom.types.Rect2(G__24191,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24200 = cljs.core.constant$keyword$size;
var G__24201 = expr__24196;
return (pred__24195.cljs$core$IFn$_invoke$arity$2 ? pred__24195.cljs$core$IFn$_invoke$arity$2(G__24200,G__24201) : pred__24195.call(null,G__24200,G__24201));
})())){
return (new thi.ng.geom.types.Rect2(self__.p,G__24191,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24191),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24191){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__24191,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__24193){
return (new thi.ng.geom.types.Rect2(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24193),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(G__24193),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24193,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$size], 0)),null));
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
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24204,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24206 = (((k24204 instanceof cljs.core.Keyword))?k24204.fqn:null);
switch (G__24206) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24204,else__13173__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24203){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24207 = cljs.core.keyword_identical_QMARK_;
var expr__24208 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24210 = cljs.core.constant$keyword$points;
var G__24211 = expr__24208;
return (pred__24207.cljs$core$IFn$_invoke$arity$2 ? pred__24207.cljs$core$IFn$_invoke$arity$2(G__24210,G__24211) : pred__24207.call(null,G__24210,G__24211));
})())){
return (new thi.ng.geom.types.Triangle2(G__24203,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24203),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24203){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__24203,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__24205){
return (new thi.ng.geom.types.Triangle2(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24205),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24205,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24214,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24216 = (((k24214 instanceof cljs.core.Keyword))?k24214.fqn:null);
switch (G__24216) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24214,else__13173__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$size,null,cljs.core.constant$keyword$p,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24213){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24217 = cljs.core.keyword_identical_QMARK_;
var expr__24218 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24220 = cljs.core.constant$keyword$p;
var G__24221 = expr__24218;
return (pred__24217.cljs$core$IFn$_invoke$arity$2 ? pred__24217.cljs$core$IFn$_invoke$arity$2(G__24220,G__24221) : pred__24217.call(null,G__24220,G__24221));
})())){
return (new thi.ng.geom.types.AABB(G__24213,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24222 = cljs.core.constant$keyword$size;
var G__24223 = expr__24218;
return (pred__24217.cljs$core$IFn$_invoke$arity$2 ? pred__24217.cljs$core$IFn$_invoke$arity$2(G__24222,G__24223) : pred__24217.call(null,G__24222,G__24223));
})())){
return (new thi.ng.geom.types.AABB(self__.p,G__24213,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24213),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$size,self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24213){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__24213,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__24215){
return (new thi.ng.geom.types.AABB(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24215),cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(G__24215),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24215,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$size], 0)),null));
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
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24226,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24228 = (((k24226 instanceof cljs.core.Keyword))?k24226.fqn:null);
switch (G__24228) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24226,else__13173__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24225){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24229 = cljs.core.keyword_identical_QMARK_;
var expr__24230 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24232 = cljs.core.constant$keyword$points;
var G__24233 = expr__24230;
return (pred__24229.cljs$core$IFn$_invoke$arity$2 ? pred__24229.cljs$core$IFn$_invoke$arity$2(G__24232,G__24233) : pred__24229.call(null,G__24232,G__24233));
})())){
return (new thi.ng.geom.types.Cuboid(G__24225,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24225),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24225){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__24225,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__24227){
return (new thi.ng.geom.types.Cuboid(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24227),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24227,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24236,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24238 = (((k24236 instanceof cljs.core.Keyword))?k24236.fqn:null);
switch (G__24238) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24236,else__13173__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24235){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24239 = cljs.core.keyword_identical_QMARK_;
var expr__24240 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24242 = cljs.core.constant$keyword$points;
var G__24243 = expr__24240;
return (pred__24239.cljs$core$IFn$_invoke$arity$2 ? pred__24239.cljs$core$IFn$_invoke$arity$2(G__24242,G__24243) : pred__24239.call(null,G__24242,G__24243));
})())){
return (new thi.ng.geom.types.Bezier3(G__24235,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24235),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24235){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__24235,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__24237){
return (new thi.ng.geom.types.Bezier3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24237),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24237,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24246,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24248 = (((k24246 instanceof cljs.core.Keyword))?k24246.fqn:null);
switch (G__24248) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24246,else__13173__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24245){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24249 = cljs.core.keyword_identical_QMARK_;
var expr__24250 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24252 = cljs.core.constant$keyword$vertices;
var G__24253 = expr__24250;
return (pred__24249.cljs$core$IFn$_invoke$arity$2 ? pred__24249.cljs$core$IFn$_invoke$arity$2(G__24252,G__24253) : pred__24249.call(null,G__24252,G__24253));
})())){
return (new thi.ng.geom.types.BasicMesh(G__24245,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24254 = cljs.core.constant$keyword$faces;
var G__24255 = expr__24250;
return (pred__24249.cljs$core$IFn$_invoke$arity$2 ? pred__24249.cljs$core$IFn$_invoke$arity$2(G__24254,G__24255) : pred__24249.call(null,G__24254,G__24255));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__24245,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24256 = cljs.core.constant$keyword$fnormals;
var G__24257 = expr__24250;
return (pred__24249.cljs$core$IFn$_invoke$arity$2 ? pred__24249.cljs$core$IFn$_invoke$arity$2(G__24256,G__24257) : pred__24249.call(null,G__24256,G__24257));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__24245,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24258 = cljs.core.constant$keyword$attribs;
var G__24259 = expr__24250;
return (pred__24249.cljs$core$IFn$_invoke$arity$2 ? pred__24249.cljs$core$IFn$_invoke$arity$2(G__24258,G__24259) : pred__24249.call(null,G__24258,G__24259));
})())){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__24245,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24245),null));
}
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24245){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,G__24245,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals,attribs){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__24247){
return (new thi.ng.geom.types.BasicMesh(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24247),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24247),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24247),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24247),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24247,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$faces,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$attribs], 0)),null));
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
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24262,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24264 = (((k24262 instanceof cljs.core.Keyword))?k24262.fqn:null);
switch (G__24264) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24262,else__13173__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24261){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24265 = cljs.core.keyword_identical_QMARK_;
var expr__24266 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24268 = cljs.core.constant$keyword$vertices;
var G__24269 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24268,G__24269) : pred__24265.call(null,G__24268,G__24269));
})())){
return (new thi.ng.geom.types.GMesh(G__24261,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24270 = cljs.core.constant$keyword$normals;
var G__24271 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24270,G__24271) : pred__24265.call(null,G__24270,G__24271));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__24261,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24272 = cljs.core.constant$keyword$fnormals;
var G__24273 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24272,G__24273) : pred__24265.call(null,G__24272,G__24273));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__24261,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24274 = cljs.core.constant$keyword$vnormals;
var G__24275 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24274,G__24275) : pred__24265.call(null,G__24274,G__24275));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__24261,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24276 = cljs.core.constant$keyword$edges;
var G__24277 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24276,G__24277) : pred__24265.call(null,G__24276,G__24277));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24261,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24278 = cljs.core.constant$keyword$faces;
var G__24279 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24278,G__24279) : pred__24265.call(null,G__24278,G__24279));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24261,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24280 = cljs.core.constant$keyword$attribs;
var G__24281 = expr__24266;
return (pred__24265.cljs$core$IFn$_invoke$arity$2 ? pred__24265.cljs$core$IFn$_invoke$arity$2(G__24280,G__24281) : pred__24265.call(null,G__24280,G__24281));
})())){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24261,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24261),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24261){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24261,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__24263){
return (new thi.ng.geom.types.GMesh(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24263),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24263),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24263,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
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
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24284,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24286 = (((k24284 instanceof cljs.core.Keyword))?k24284.fqn:null);
switch (G__24286) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24284,else__13173__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24283){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24287 = cljs.core.keyword_identical_QMARK_;
var expr__24288 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24290 = cljs.core.constant$keyword$points;
var G__24291 = expr__24288;
return (pred__24287.cljs$core$IFn$_invoke$arity$2 ? pred__24287.cljs$core$IFn$_invoke$arity$2(G__24290,G__24291) : pred__24287.call(null,G__24290,G__24291));
})())){
return (new thi.ng.geom.types.Line3(G__24283,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24283),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24283){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__24283,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__24285){
return (new thi.ng.geom.types.Line3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24285),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24285,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24294,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24296 = (((k24294 instanceof cljs.core.Keyword))?k24294.fqn:null);
switch (G__24296) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24294,else__13173__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24293){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24297 = cljs.core.keyword_identical_QMARK_;
var expr__24298 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24300 = cljs.core.constant$keyword$points;
var G__24301 = expr__24298;
return (pred__24297.cljs$core$IFn$_invoke$arity$2 ? pred__24297.cljs$core$IFn$_invoke$arity$2(G__24300,G__24301) : pred__24297.call(null,G__24300,G__24301));
})())){
return (new thi.ng.geom.types.LineStrip3(G__24293,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24293),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24293){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__24293,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__24295){
return (new thi.ng.geom.types.LineStrip3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24295),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24295,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24304,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24306 = (((k24304 instanceof cljs.core.Keyword))?k24304.fqn:null);
switch (G__24306) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24304,else__13173__auto__);

}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$vertices,null,cljs.core.constant$keyword$vnormals,null,cljs.core.constant$keyword$attribs,null,cljs.core.constant$keyword$normals,null,cljs.core.constant$keyword$faces,null,cljs.core.constant$keyword$edges,null,cljs.core.constant$keyword$fnormals,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24303){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24307 = cljs.core.keyword_identical_QMARK_;
var expr__24308 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24310 = cljs.core.constant$keyword$vertices;
var G__24311 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24310,G__24311) : pred__24307.call(null,G__24310,G__24311));
})())){
return (new thi.ng.geom.types.Mesh3(G__24303,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24312 = cljs.core.constant$keyword$normals;
var G__24313 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24312,G__24313) : pred__24307.call(null,G__24312,G__24313));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,G__24303,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24314 = cljs.core.constant$keyword$fnormals;
var G__24315 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24314,G__24315) : pred__24307.call(null,G__24314,G__24315));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__24303,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24316 = cljs.core.constant$keyword$vnormals;
var G__24317 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24316,G__24317) : pred__24307.call(null,G__24316,G__24317));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__24303,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24318 = cljs.core.constant$keyword$edges;
var G__24319 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24318,G__24319) : pred__24307.call(null,G__24318,G__24319));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__24303,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24320 = cljs.core.constant$keyword$faces;
var G__24321 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24320,G__24321) : pred__24307.call(null,G__24320,G__24321));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__24303,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24322 = cljs.core.constant$keyword$attribs;
var G__24323 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24322,G__24323) : pred__24307.call(null,G__24322,G__24323));
})())){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__24303,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24303),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vertices,self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$normals,self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$fnormals,self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vnormals,self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$edges,self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$faces,self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$attribs,self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24303){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__24303,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Mesh3.cljs$lang$type = true;

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.__GT_Mesh3 = (function thi$ng$geom$types$__GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh3 = (function thi$ng$geom$types$map__GT_Mesh3(G__24305){
return (new thi.ng.geom.types.Mesh3(cljs.core.constant$keyword$vertices.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$normals.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$fnormals.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$vnormals.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$edges.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$faces.cljs$core$IFn$_invoke$arity$1(G__24305),cljs.core.constant$keyword$attribs.cljs$core$IFn$_invoke$arity$1(G__24305),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24305,cljs.core.constant$keyword$vertices,cljs.core.array_seq([cljs.core.constant$keyword$normals,cljs.core.constant$keyword$fnormals,cljs.core.constant$keyword$vnormals,cljs.core.constant$keyword$edges,cljs.core.constant$keyword$faces,cljs.core.constant$keyword$attribs], 0)),null));
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
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24326,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24328 = (((k24326 instanceof cljs.core.Keyword))?k24326.fqn:null);
switch (G__24328) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24326,else__13173__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$n,self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$w,self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$n,null,cljs.core.constant$keyword$w,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24325){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24329 = cljs.core.keyword_identical_QMARK_;
var expr__24330 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24332 = cljs.core.constant$keyword$n;
var G__24333 = expr__24330;
return (pred__24329.cljs$core$IFn$_invoke$arity$2 ? pred__24329.cljs$core$IFn$_invoke$arity$2(G__24332,G__24333) : pred__24329.call(null,G__24332,G__24333));
})())){
return (new thi.ng.geom.types.Plane(G__24325,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24334 = cljs.core.constant$keyword$w;
var G__24335 = expr__24330;
return (pred__24329.cljs$core$IFn$_invoke$arity$2 ? pred__24329.cljs$core$IFn$_invoke$arity$2(G__24334,G__24335) : pred__24329.call(null,G__24334,G__24335));
})())){
return (new thi.ng.geom.types.Plane(self__.n,G__24325,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24325),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$n,self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$w,self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24325){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__24325,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__24327){
return (new thi.ng.geom.types.Plane(cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(G__24327),cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(G__24327),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24327,cljs.core.constant$keyword$n,cljs.core.array_seq([cljs.core.constant$keyword$w], 0)),null));
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
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24338,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24340 = (((k24338 instanceof cljs.core.Keyword))?k24338.fqn:null);
switch (G__24340) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24338,else__13173__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24337){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24341 = cljs.core.keyword_identical_QMARK_;
var expr__24342 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24344 = cljs.core.constant$keyword$points;
var G__24345 = expr__24342;
return (pred__24341.cljs$core$IFn$_invoke$arity$2 ? pred__24341.cljs$core$IFn$_invoke$arity$2(G__24344,G__24345) : pred__24341.call(null,G__24344,G__24345));
})())){
return (new thi.ng.geom.types.Quad3(G__24337,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24337),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24337){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__24337,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__24339){
return (new thi.ng.geom.types.Quad3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24339),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24339,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24348,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24350 = (((k24348 instanceof cljs.core.Keyword))?k24348.fqn:null);
switch (G__24350) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24348,else__13173__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$r,null,cljs.core.constant$keyword$p,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24347){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24351 = cljs.core.keyword_identical_QMARK_;
var expr__24352 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24354 = cljs.core.constant$keyword$p;
var G__24355 = expr__24352;
return (pred__24351.cljs$core$IFn$_invoke$arity$2 ? pred__24351.cljs$core$IFn$_invoke$arity$2(G__24354,G__24355) : pred__24351.call(null,G__24354,G__24355));
})())){
return (new thi.ng.geom.types.Sphere(G__24347,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24356 = cljs.core.constant$keyword$r;
var G__24357 = expr__24352;
return (pred__24351.cljs$core$IFn$_invoke$arity$2 ? pred__24351.cljs$core$IFn$_invoke$arity$2(G__24356,G__24357) : pred__24351.call(null,G__24356,G__24357));
})())){
return (new thi.ng.geom.types.Sphere(self__.p,G__24347,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24347),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$r,self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24347){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__24347,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__24349){
return (new thi.ng.geom.types.Sphere(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__24349),cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1(G__24349),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24349,cljs.core.constant$keyword$p,cljs.core.array_seq([cljs.core.constant$keyword$r], 0)),null));
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
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24360,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24362 = (((k24360 instanceof cljs.core.Keyword))?k24360.fqn:null);
switch (G__24362) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24360,else__13173__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24359){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24363 = cljs.core.keyword_identical_QMARK_;
var expr__24364 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24366 = cljs.core.constant$keyword$points;
var G__24367 = expr__24364;
return (pred__24363.cljs$core$IFn$_invoke$arity$2 ? pred__24363.cljs$core$IFn$_invoke$arity$2(G__24366,G__24367) : pred__24363.call(null,G__24366,G__24367));
})())){
return (new thi.ng.geom.types.Tetrahedron(G__24359,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24359),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24359){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__24359,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__24361){
return (new thi.ng.geom.types.Tetrahedron(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24361),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24361,cljs.core.constant$keyword$points),null));
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
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13170__auto__,k__13171__auto__){
var self__ = this;
var this__13170__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13170__auto____$1,k__13171__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13172__auto__,k24370,else__13173__auto__){
var self__ = this;
var this__13172__auto____$1 = this;
var G__24372 = (((k24370 instanceof cljs.core.Keyword))?k24370.fqn:null);
switch (G__24372) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24370,else__13173__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13184__auto__,writer__13185__auto__,opts__13186__auto__){
var self__ = this;
var this__13184__auto____$1 = this;
var pr_pair__13187__auto__ = ((function (this__13184__auto____$1){
return (function (keyval__13188__auto__){
return cljs.core.pr_sequential_writer(writer__13185__auto__,cljs.core.pr_writer,""," ","",opts__13186__auto__,keyval__13188__auto__);
});})(this__13184__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13185__auto__,pr_pair__13187__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__13186__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13168__auto__){
var self__ = this;
var this__13168__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13164__auto__){
var self__ = this;
var this__13164__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13174__auto__){
var self__ = this;
var this__13174__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13165__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13166__auto__,other__13167__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13179__auto__,k__13180__auto__){
var self__ = this;
var this__13179__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$points,null], null), null),k__13180__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13179__auto____$1),self__.__meta),k__13180__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13180__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13177__auto__,k__13178__auto__,G__24369){
var self__ = this;
var this__13177__auto____$1 = this;
var pred__24373 = cljs.core.keyword_identical_QMARK_;
var expr__24374 = k__13178__auto__;
if(cljs.core.truth_((function (){var G__24376 = cljs.core.constant$keyword$points;
var G__24377 = expr__24374;
return (pred__24373.cljs$core$IFn$_invoke$arity$2 ? pred__24373.cljs$core$IFn$_invoke$arity$2(G__24376,G__24377) : pred__24373.call(null,G__24376,G__24377));
})())){
return (new thi.ng.geom.types.Triangle3(G__24369,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13178__auto__,G__24369),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13182__auto__){
var self__ = this;
var this__13182__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$points,self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13169__auto__,G__24369){
var self__ = this;
var this__13169__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__24369,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13175__auto__,entry__13176__auto__){
var self__ = this;
var this__13175__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13176__auto__)){
return cljs.core._assoc(this__13175__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13176__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13175__auto____$1,entry__13176__auto__);
}
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__13204__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__13204__auto__,writer__13205__auto__){
return cljs.core._write(writer__13205__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__24371){
return (new thi.ng.geom.types.Triangle3(cljs.core.constant$keyword$points.cljs$core$IFn$_invoke$arity$1(G__24371),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24371,cljs.core.constant$keyword$points),null));
});

