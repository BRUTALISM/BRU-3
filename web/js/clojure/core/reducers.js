// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task.call(null));
});
/**
 * Like core/reduce except:
 * When init is not provided, (f) is used.
 * Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(){
var G__24504 = arguments.length;
switch (G__24504) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core._kv_reduce(coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_(coll)){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);
} else {
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

clojure.core.reducers.CollFold = (function (){var obj24507 = {};
return obj24507;
})();

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((function (){var and__12563__auto__ = coll;
if(and__12563__auto__){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4;
} else {
return and__12563__auto__;
}
})()){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__13211__auto__ = (((coll == null))?null:coll);
return (function (){var or__12575__auto__ = (clojure.core.reducers.coll_fold[(function (){var G__24511 = x__13211__auto__;
return goog.typeOf(G__24511);
})()]);
if(or__12575__auto__){
return or__12575__auto__;
} else {
var or__12575__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(or__12575__auto____$1){
return or__12575__auto____$1;
} else {
throw cljs.core.missing_protocol("CollFold.coll-fold",coll);
}
}
})().call(null,coll,n,combinef,reducef);
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 * strategy. The collection is partitioned into groups of approximately
 * n (default 512), each of which is reduced with reducef (with a seed
 * value obtained by calling (combinef) with no arguments). The results
 * of these reductions are then reduced with combinef (default
 * reducef). combinef must be associative, and, when called with no
 * arguments, (combinef) must produce its identity element. These
 * operations may be performed in parallel, but the results will
 * preserve order.
 * 
 * Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(){
var G__24513 = arguments.length;
switch (G__24513) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold(coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 * returns a reducible collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t24519 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t24519 = (function (reducer,coll,xf,meta24520){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta24520 = meta24520;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t24519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24521,meta24520__$1){
var self__ = this;
var _24521__$1 = this;
return (new clojure.core.reducers.t24519(self__.reducer,self__.coll,self__.xf,meta24520__$1));
});

clojure.core.reducers.t24519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24521){
var self__ = this;
var _24521__$1 = this;
return self__.meta24520;
});

clojure.core.reducers.t24519.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f1,(function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})());
});

clojure.core.reducers.t24519.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24522 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24522) : self__.xf.call(null,G__24522));
})(),init);
});

clojure.core.reducers.t24519.cljs$lang$type = true;

clojure.core.reducers.t24519.cljs$lang$ctorStr = "clojure.core.reducers/t24519";

clojure.core.reducers.t24519.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"clojure.core.reducers/t24519");
});

clojure.core.reducers.__GT_t24519 = (function clojure$core$reducers$reducer_$___GT_t24519(reducer__$1,coll__$1,xf__$1,meta24520){
return (new clojure.core.reducers.t24519(reducer__$1,coll__$1,xf__$1,meta24520));
});

}

return (new clojure.core.reducers.t24519(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 * returns a foldable collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t24529 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t24529 = (function (folder,coll,xf,meta24530){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta24530 = meta24530;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t24529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24531,meta24530__$1){
var self__ = this;
var _24531__$1 = this;
return (new clojure.core.reducers.t24529(self__.folder,self__.coll,self__.xf,meta24530__$1));
});

clojure.core.reducers.t24529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24531){
var self__ = this;
var _24531__$1 = this;
return self__.meta24530;
});

clojure.core.reducers.t24529.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24532 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24532) : self__.xf.call(null,G__24532));
})(),(function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})());
});

clojure.core.reducers.t24529.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24533 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24533) : self__.xf.call(null,G__24533));
})(),init);
});

clojure.core.reducers.t24529.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t24529.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold(self__.coll,n,combinef,(function (){var G__24534 = reducef;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24534) : self__.xf.call(null,G__24534));
})());
});

clojure.core.reducers.t24529.cljs$lang$type = true;

clojure.core.reducers.t24529.cljs$lang$ctorStr = "clojure.core.reducers/t24529";

clojure.core.reducers.t24529.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"clojure.core.reducers/t24529");
});

clojure.core.reducers.__GT_t24529 = (function clojure$core$reducers$folder_$___GT_t24529(folder__$1,coll__$1,xf__$1,meta24530){
return (new clojure.core.reducers.t24529(folder__$1,coll__$1,xf__$1,meta24530));
});

}

return (new clojure.core.reducers.t24529(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(){
var G__24536 = arguments.length;
switch (G__24536) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__12997__auto__){
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(f,x__12997__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24545 = null;
var G__24545__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24545__2 = (function (ret,v){
var G__24537 = ret;
var G__24538 = (function (){var G__24539 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24539) : f.call(null,G__24539));
})();
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24537,G__24538) : f1.call(null,G__24537,G__24538));
});
var G__24545__3 = (function (ret,k,v){
var G__24540 = ret;
var G__24541 = (function (){var G__24542 = k;
var G__24543 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24542,G__24543) : f.call(null,G__24542,G__24543));
})();
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24540,G__24541) : f1.call(null,G__24540,G__24541));
});
G__24545 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24545__0.call(this);
case 2:
return G__24545__2.call(this,ret,k);
case 3:
return G__24545__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24545.cljs$core$IFn$_invoke$arity$0 = G__24545__0;
G__24545.cljs$core$IFn$_invoke$arity$2 = G__24545__2;
G__24545.cljs$core$IFn$_invoke$arity$3 = G__24545__3;
return G__24545;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 * colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(){
var G__24547 = arguments.length;
switch (G__24547) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__12997__auto__){
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2(f,x__12997__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24552 = null;
var G__24552__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24552__2 = (function (ret,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(function (){var G__24548 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24548) : f.call(null,G__24548));
})());
});
var G__24552__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(function (){var G__24549 = k;
var G__24550 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24549,G__24550) : f.call(null,G__24549,G__24550));
})());
});
G__24552 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24552__0.call(this);
case 2:
return G__24552__2.call(this,ret,k);
case 3:
return G__24552__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24552.cljs$core$IFn$_invoke$arity$0 = G__24552__0;
G__24552.cljs$core$IFn$_invoke$arity$2 = G__24552__2;
G__24552.cljs$core$IFn$_invoke$arity$3 = G__24552__3;
return G__24552;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(){
var G__24554 = arguments.length;
switch (G__24554) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__12997__auto__){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(pred,x__12997__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24564 = null;
var G__24564__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24564__2 = (function (ret,v){
if(cljs.core.truth_((function (){var G__24555 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24555) : pred.call(null,G__24555));
})())){
var G__24556 = ret;
var G__24557 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24556,G__24557) : f1.call(null,G__24556,G__24557));
} else {
return ret;
}
});
var G__24564__3 = (function (ret,k,v){
if(cljs.core.truth_((function (){var G__24558 = k;
var G__24559 = v;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__24558,G__24559) : pred.call(null,G__24558,G__24559));
})())){
var G__24560 = ret;
var G__24561 = k;
var G__24562 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24560,G__24561,G__24562) : f1.call(null,G__24560,G__24561,G__24562));
} else {
return ret;
}
});
G__24564 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24564__0.call(this);
case 2:
return G__24564__2.call(this,ret,k);
case 3:
return G__24564__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24564.cljs$core$IFn$_invoke$arity$0 = G__24564__0;
G__24564.cljs$core$IFn$_invoke$arity$2 = G__24564__2;
G__24564.cljs$core$IFn$_invoke$arity$3 = G__24564__3;
return G__24564;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 * etc.) and returns their contents as a single, flat foldable
 * collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(){
var G__24566 = arguments.length;
switch (G__24566) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__12997__auto__){
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(x__12997__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24570 = null;
var G__24570__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24570__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(v),f1,ret);
} else {
var G__24567 = ret;
var G__24568 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24567,G__24568) : f1.call(null,G__24567,G__24568));
}
});
G__24570 = function(ret,v){
switch(arguments.length){
case 0:
return G__24570__0.call(this);
case 2:
return G__24570__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24570.cljs$core$IFn$_invoke$arity$0 = G__24570__0;
G__24570.cljs$core$IFn$_invoke$arity$2 = G__24570__2;
return G__24570;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(){
var G__24572 = arguments.length;
switch (G__24572) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__12997__auto__){
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2(pred,x__12997__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(){
var G__24575 = arguments.length;
switch (G__24575) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__12997__auto__){
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2(pred,x__12997__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
return (function() {
var G__24585 = null;
var G__24585__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24585__2 = (function (ret,v){
if(cljs.core.truth_((function (){var G__24576 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24576) : pred.call(null,G__24576));
})())){
var G__24577 = ret;
var G__24578 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24577,G__24578) : f1.call(null,G__24577,G__24578));
} else {
return cljs.core.reduced(ret);
}
});
var G__24585__3 = (function (ret,k,v){
if(cljs.core.truth_((function (){var G__24579 = k;
var G__24580 = v;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__24579,G__24580) : pred.call(null,G__24579,G__24580));
})())){
var G__24581 = ret;
var G__24582 = k;
var G__24583 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24581,G__24582,G__24583) : f1.call(null,G__24581,G__24582,G__24583));
} else {
return cljs.core.reduced(ret);
}
});
G__24585 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24585__0.call(this);
case 2:
return G__24585__2.call(this,ret,k);
case 3:
return G__24585__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24585.cljs$core$IFn$_invoke$arity$0 = G__24585__0;
G__24585.cljs$core$IFn$_invoke$arity$2 = G__24585__2;
G__24585.cljs$core$IFn$_invoke$arity$3 = G__24585__3;
return G__24585;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(){
var G__24587 = arguments.length;
switch (G__24587) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__12997__auto__){
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(n,x__12997__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = (function (){var G__24588 = n;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24588) : cljs.core.atom.call(null,G__24588));
})();
return ((function (cnt){
return (function() {
var G__24597 = null;
var G__24597__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24597__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24589 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24589) : cljs.core.deref.call(null,G__24589));
})() < (0))){
return cljs.core.reduced(ret);
} else {
var G__24590 = ret;
var G__24591 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24590,G__24591) : f1.call(null,G__24590,G__24591));
}
});
var G__24597__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24592 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24592) : cljs.core.deref.call(null,G__24592));
})() < (0))){
return cljs.core.reduced(ret);
} else {
var G__24593 = ret;
var G__24594 = k;
var G__24595 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24593,G__24594,G__24595) : f1.call(null,G__24593,G__24594,G__24595));
}
});
G__24597 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24597__0.call(this);
case 2:
return G__24597__2.call(this,ret,k);
case 3:
return G__24597__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24597.cljs$core$IFn$_invoke$arity$0 = G__24597__0;
G__24597.cljs$core$IFn$_invoke$arity$2 = G__24597__2;
G__24597.cljs$core$IFn$_invoke$arity$3 = G__24597__3;
return G__24597;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(){
var G__24599 = arguments.length;
switch (G__24599) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__12997__auto__){
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2(n,x__12997__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = (function (){var G__24600 = n;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24600) : cljs.core.atom.call(null,G__24600));
})();
return ((function (cnt){
return (function() {
var G__24609 = null;
var G__24609__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24609__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24601 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24601) : cljs.core.deref.call(null,G__24601));
})() < (0))){
var G__24602 = ret;
var G__24603 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24602,G__24603) : f1.call(null,G__24602,G__24603));
} else {
return ret;
}
});
var G__24609__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24604 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24604) : cljs.core.deref.call(null,G__24604));
})() < (0))){
var G__24605 = ret;
var G__24606 = k;
var G__24607 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24605,G__24606,G__24607) : f1.call(null,G__24605,G__24606,G__24607));
} else {
return ret;
}
});
G__24609 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24609__0.call(this);
case 2:
return G__24609__2.call(this,ret,k);
case 3:
return G__24609__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24609.cljs$core$IFn$_invoke$arity$0 = G__24609__0;
G__24609.cljs$core$IFn$_invoke$arity$2 = G__24609__2;
G__24609.cljs$core$IFn$_invoke$arity$3 = G__24609__3;
return G__24609;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(self__.left),cljs.core.seq(self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f1,(function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})());
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.right,f1,cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,reducef);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__13154__auto__,writer__13155__auto__,opt__13156__auto__){
return cljs.core._write(writer__13155__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 * reduced values. The result is reducible, foldable, seqable and
 * counted, providing the identity collections are reducible, seqable
 * and counted. The single argument version will build a combining fn
 * with the supplied identity constructor. Tests for identity
 * with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(){
var G__24611 = arguments.length;
switch (G__24611) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__24613 = null;
var G__24613__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var G__24613__2 = (function (left,right){
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2(left,right);
});
G__24613 = function(left,right){
switch(arguments.length){
case 0:
return G__24613__0.call(this);
case 2:
return G__24613__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24613.cljs$core$IFn$_invoke$arity$0 = G__24613__0;
G__24613.cljs$core$IFn$_invoke$arity$2 = G__24613__2;
return G__24613;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count(left) === (0))){
return right;
} else {
if((cljs.core.count(right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count(left) + cljs.core.count(right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__24615 = acc;
G__24615.push(x);

return G__24615;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 * constructor. op must be associative and ctor called with no args
 * must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
var G__24622 = a;
var G__24623 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__24622,G__24623) : op.call(null,G__24622,G__24623));
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_(v)){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
} else {
if((cljs.core.count(v) <= n)){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(function (){return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
})(),v);
} else {
var split = cljs.core.quot(cljs.core.count(v),(2));
var v1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),split);
var v2 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,split,cljs.core.count(v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec(child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke(((function (split,v1,v2,fc){
return (function (){
var f1 = fc(v1);
var t2 = clojure.core.reducers.fjtask(fc(v2));
clojure.core.reducers.fjfork(t2);

var G__24630 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})();
var G__24631 = clojure.core.reducers.fjjoin(t2);
return (combinef.cljs$core$IFn$_invoke$arity$2 ? combinef.cljs$core$IFn$_invoke$arity$2(G__24630,G__24631) : combinef.call(null,G__24630,G__24631));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(function (){return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
})(),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec(v__$1,n,combinef,reducef);
});
