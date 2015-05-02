// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.constant$keyword$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.constant$keyword$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__25211 = cljs.core.constant$keyword$no_DASH_safe_DASH_draw;
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__25211) : features__$1.call(null,G__25211));
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.constant$keyword$no_DASH_safe_DASH_draw);
});
/**
 * Checks if options map contains deprected options and removes them.
 * Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__13361__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__25230(s__25231){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__25231__$1 = s__25231;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__25231__$1);
if(temp__4422__auto__){
var s__25231__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25231__$2)){
var c__13359__auto__ = cljs.core.chunk_first(s__25231__$2);
var size__13360__auto__ = cljs.core.count(c__13359__auto__);
var b__25233 = cljs.core.chunk_buffer(size__13360__auto__);
if((function (){var i__25232 = (0);
while(true){
if((i__25232 < size__13360__auto__)){
var vec__25242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13359__auto__,i__25232);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242,(1),null);
cljs.core.chunk_append(b__25233,(function (){var temp__4420__auto__ = (function (){var G__25243 = name;
return (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(G__25243) : quil.middlewares.deprecated_options.deprecated.call(null,G__25243));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var vec__25244 = temp__4420__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25244,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25244,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__25248 = (i__25232 + (1));
i__25232 = G__25248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25233),quil$middlewares$deprecated_options$deprecated_options_$_iter__25230(cljs.core.chunk_rest(s__25231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25233),null);
}
} else {
var vec__25245 = cljs.core.first(s__25231__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25245,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25245,(1),null);
return cljs.core.cons((function (){var temp__4420__auto__ = (function (){var G__25246 = name;
return (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(G__25246) : quil.middlewares.deprecated_options.deprecated.call(null,G__25246));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var vec__25247 = temp__4420__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25247,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25247,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__25230(cljs.core.rest(s__25231__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__13361__auto__(options__$1);
})()));
});
