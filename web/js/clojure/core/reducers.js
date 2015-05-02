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
var G__24510 = arguments.length;
switch (G__24510) {
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

clojure.core.reducers.CollFold = (function (){var obj24513 = {};
return obj24513;
})();

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((function (){var and__12595__auto__ = coll;
if(and__12595__auto__){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4;
} else {
return and__12595__auto__;
}
})()){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__13243__auto__ = (((coll == null))?null:coll);
return (function (){var or__12607__auto__ = (clojure.core.reducers.coll_fold[(function (){var G__24517 = x__13243__auto__;
return goog.typeOf(G__24517);
})()]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
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
var G__24519 = arguments.length;
switch (G__24519) {
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
if(typeof clojure.core.reducers.t24525 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t24525 = (function (reducer,coll,xf,meta24526){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta24526 = meta24526;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t24525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24527,meta24526__$1){
var self__ = this;
var _24527__$1 = this;
return (new clojure.core.reducers.t24525(self__.reducer,self__.coll,self__.xf,meta24526__$1));
});

clojure.core.reducers.t24525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24527){
var self__ = this;
var _24527__$1 = this;
return self__.meta24526;
});

clojure.core.reducers.t24525.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f1,(function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})());
});

clojure.core.reducers.t24525.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24528 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24528) : self__.xf.call(null,G__24528));
})(),init);
});

clojure.core.reducers.t24525.cljs$lang$type = true;

clojure.core.reducers.t24525.cljs$lang$ctorStr = "clojure.core.reducers/t24525";

clojure.core.reducers.t24525.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"clojure.core.reducers/t24525");
});

clojure.core.reducers.__GT_t24525 = (function clojure$core$reducers$reducer_$___GT_t24525(reducer__$1,coll__$1,xf__$1,meta24526){
return (new clojure.core.reducers.t24525(reducer__$1,coll__$1,xf__$1,meta24526));
});

}

return (new clojure.core.reducers.t24525(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 * returns a foldable collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t24535 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t24535 = (function (folder,coll,xf,meta24536){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta24536 = meta24536;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t24535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24537,meta24536__$1){
var self__ = this;
var _24537__$1 = this;
return (new clojure.core.reducers.t24535(self__.folder,self__.coll,self__.xf,meta24536__$1));
});

clojure.core.reducers.t24535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24537){
var self__ = this;
var _24537__$1 = this;
return self__.meta24536;
});

clojure.core.reducers.t24535.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24538 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24538) : self__.xf.call(null,G__24538));
})(),(function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})());
});

clojure.core.reducers.t24535.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(function (){var G__24539 = f1;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24539) : self__.xf.call(null,G__24539));
})(),init);
});

clojure.core.reducers.t24535.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t24535.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold(self__.coll,n,combinef,(function (){var G__24540 = reducef;
return (self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(G__24540) : self__.xf.call(null,G__24540));
})());
});

clojure.core.reducers.t24535.cljs$lang$type = true;

clojure.core.reducers.t24535.cljs$lang$ctorStr = "clojure.core.reducers/t24535";

clojure.core.reducers.t24535.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"clojure.core.reducers/t24535");
});

clojure.core.reducers.__GT_t24535 = (function clojure$core$reducers$folder_$___GT_t24535(folder__$1,coll__$1,xf__$1,meta24536){
return (new clojure.core.reducers.t24535(folder__$1,coll__$1,xf__$1,meta24536));
});

}

return (new clojure.core.reducers.t24535(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(){
var G__24542 = arguments.length;
switch (G__24542) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(f,x__13029__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24551 = null;
var G__24551__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24551__2 = (function (ret,v){
var G__24543 = ret;
var G__24544 = (function (){var G__24545 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24545) : f.call(null,G__24545));
})();
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24543,G__24544) : f1.call(null,G__24543,G__24544));
});
var G__24551__3 = (function (ret,k,v){
var G__24546 = ret;
var G__24547 = (function (){var G__24548 = k;
var G__24549 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24548,G__24549) : f.call(null,G__24548,G__24549));
})();
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24546,G__24547) : f1.call(null,G__24546,G__24547));
});
G__24551 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24551__0.call(this);
case 2:
return G__24551__2.call(this,ret,k);
case 3:
return G__24551__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24551.cljs$core$IFn$_invoke$arity$0 = G__24551__0;
G__24551.cljs$core$IFn$_invoke$arity$2 = G__24551__2;
G__24551.cljs$core$IFn$_invoke$arity$3 = G__24551__3;
return G__24551;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 * colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(){
var G__24553 = arguments.length;
switch (G__24553) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2(f,x__13029__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24558 = null;
var G__24558__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24558__2 = (function (ret,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(function (){var G__24554 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24554) : f.call(null,G__24554));
})());
});
var G__24558__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(function (){var G__24555 = k;
var G__24556 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24555,G__24556) : f.call(null,G__24555,G__24556));
})());
});
G__24558 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24558__0.call(this);
case 2:
return G__24558__2.call(this,ret,k);
case 3:
return G__24558__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24558.cljs$core$IFn$_invoke$arity$0 = G__24558__0;
G__24558.cljs$core$IFn$_invoke$arity$2 = G__24558__2;
G__24558.cljs$core$IFn$_invoke$arity$3 = G__24558__3;
return G__24558;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(){
var G__24560 = arguments.length;
switch (G__24560) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(pred,x__13029__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24570 = null;
var G__24570__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24570__2 = (function (ret,v){
if(cljs.core.truth_((function (){var G__24561 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24561) : pred.call(null,G__24561));
})())){
var G__24562 = ret;
var G__24563 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24562,G__24563) : f1.call(null,G__24562,G__24563));
} else {
return ret;
}
});
var G__24570__3 = (function (ret,k,v){
if(cljs.core.truth_((function (){var G__24564 = k;
var G__24565 = v;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__24564,G__24565) : pred.call(null,G__24564,G__24565));
})())){
var G__24566 = ret;
var G__24567 = k;
var G__24568 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24566,G__24567,G__24568) : f1.call(null,G__24566,G__24567,G__24568));
} else {
return ret;
}
});
G__24570 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24570__0.call(this);
case 2:
return G__24570__2.call(this,ret,k);
case 3:
return G__24570__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24570.cljs$core$IFn$_invoke$arity$0 = G__24570__0;
G__24570.cljs$core$IFn$_invoke$arity$2 = G__24570__2;
G__24570.cljs$core$IFn$_invoke$arity$3 = G__24570__3;
return G__24570;
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
var G__24572 = arguments.length;
switch (G__24572) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(x__13029__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__24576 = null;
var G__24576__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24576__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(v),f1,ret);
} else {
var G__24573 = ret;
var G__24574 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24573,G__24574) : f1.call(null,G__24573,G__24574));
}
});
G__24576 = function(ret,v){
switch(arguments.length){
case 0:
return G__24576__0.call(this);
case 2:
return G__24576__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24576.cljs$core$IFn$_invoke$arity$0 = G__24576__0;
G__24576.cljs$core$IFn$_invoke$arity$2 = G__24576__2;
return G__24576;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(){
var G__24578 = arguments.length;
switch (G__24578) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2(pred,x__13029__auto__);
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
var G__24581 = arguments.length;
switch (G__24581) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2(pred,x__13029__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
return (function() {
var G__24591 = null;
var G__24591__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24591__2 = (function (ret,v){
if(cljs.core.truth_((function (){var G__24582 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24582) : pred.call(null,G__24582));
})())){
var G__24583 = ret;
var G__24584 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24583,G__24584) : f1.call(null,G__24583,G__24584));
} else {
return cljs.core.reduced(ret);
}
});
var G__24591__3 = (function (ret,k,v){
if(cljs.core.truth_((function (){var G__24585 = k;
var G__24586 = v;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__24585,G__24586) : pred.call(null,G__24585,G__24586));
})())){
var G__24587 = ret;
var G__24588 = k;
var G__24589 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24587,G__24588,G__24589) : f1.call(null,G__24587,G__24588,G__24589));
} else {
return cljs.core.reduced(ret);
}
});
G__24591 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24591__0.call(this);
case 2:
return G__24591__2.call(this,ret,k);
case 3:
return G__24591__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24591.cljs$core$IFn$_invoke$arity$0 = G__24591__0;
G__24591.cljs$core$IFn$_invoke$arity$2 = G__24591__2;
G__24591.cljs$core$IFn$_invoke$arity$3 = G__24591__3;
return G__24591;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(){
var G__24593 = arguments.length;
switch (G__24593) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(n,x__13029__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = (function (){var G__24594 = n;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24594) : cljs.core.atom.call(null,G__24594));
})();
return ((function (cnt){
return (function() {
var G__24603 = null;
var G__24603__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24603__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24595 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24595) : cljs.core.deref.call(null,G__24595));
})() < (0))){
return cljs.core.reduced(ret);
} else {
var G__24596 = ret;
var G__24597 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24596,G__24597) : f1.call(null,G__24596,G__24597));
}
});
var G__24603__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24598 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24598) : cljs.core.deref.call(null,G__24598));
})() < (0))){
return cljs.core.reduced(ret);
} else {
var G__24599 = ret;
var G__24600 = k;
var G__24601 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24599,G__24600,G__24601) : f1.call(null,G__24599,G__24600,G__24601));
}
});
G__24603 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24603__0.call(this);
case 2:
return G__24603__2.call(this,ret,k);
case 3:
return G__24603__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24603.cljs$core$IFn$_invoke$arity$0 = G__24603__0;
G__24603.cljs$core$IFn$_invoke$arity$2 = G__24603__2;
G__24603.cljs$core$IFn$_invoke$arity$3 = G__24603__3;
return G__24603;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(){
var G__24605 = arguments.length;
switch (G__24605) {
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
return (function (x__13029__auto__){
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2(n,x__13029__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = (function (){var G__24606 = n;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24606) : cljs.core.atom.call(null,G__24606));
})();
return ((function (cnt){
return (function() {
var G__24615 = null;
var G__24615__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__24615__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24607 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24607) : cljs.core.deref.call(null,G__24607));
})() < (0))){
var G__24608 = ret;
var G__24609 = v;
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__24608,G__24609) : f1.call(null,G__24608,G__24609));
} else {
return ret;
}
});
var G__24615__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if(((function (){var G__24610 = cnt;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24610) : cljs.core.deref.call(null,G__24610));
})() < (0))){
var G__24611 = ret;
var G__24612 = k;
var G__24613 = v;
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__24611,G__24612,G__24613) : f1.call(null,G__24611,G__24612,G__24613));
} else {
return ret;
}
});
G__24615 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__24615__0.call(this);
case 2:
return G__24615__2.call(this,ret,k);
case 3:
return G__24615__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24615.cljs$core$IFn$_invoke$arity$0 = G__24615__0;
G__24615.cljs$core$IFn$_invoke$arity$2 = G__24615__2;
G__24615.cljs$core$IFn$_invoke$arity$3 = G__24615__3;
return G__24615;
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

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__13186__auto__,writer__13187__auto__,opt__13188__auto__){
return cljs.core._write(writer__13187__auto__,"clojure.core.reducers/Cat");
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
var G__24617 = arguments.length;
switch (G__24617) {
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
var G__24619 = null;
var G__24619__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var G__24619__2 = (function (left,right){
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2(left,right);
});
G__24619 = function(left,right){
switch(arguments.length){
case 0:
return G__24619__0.call(this);
case 2:
return G__24619__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24619.cljs$core$IFn$_invoke$arity$0 = G__24619__0;
G__24619.cljs$core$IFn$_invoke$arity$2 = G__24619__2;
return G__24619;
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
var G__24621 = acc;
G__24621.push(x);

return G__24621;
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
var G__24628 = a;
var G__24629 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__24628,G__24629) : op.call(null,G__24628,G__24629));
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

var G__24636 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
})();
var G__24637 = clojure.core.reducers.fjjoin(t2);
return (combinef.cljs$core$IFn$_invoke$arity$2 ? combinef.cljs$core$IFn$_invoke$arity$2(G__24636,G__24637) : combinef.call(null,G__24636,G__24637));
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
