// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.constant$keyword$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.constant$keyword$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__10989 = cljs.core.constant$keyword$no_DASH_safe_DASH_draw;
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__10989) : features__$1.call(null,G__10989));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4978__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__11008(s__11009){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__11009__$1 = s__11009;
while(true){
var temp__4422__auto__ = cljs.core.seq(s__11009__$1);
if(temp__4422__auto__){
var s__11009__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11009__$2)){
var c__4976__auto__ = cljs.core.chunk_first(s__11009__$2);
var size__4977__auto__ = cljs.core.count(c__4976__auto__);
var b__11011 = cljs.core.chunk_buffer(size__4977__auto__);
if((function (){var i__11010 = (0);
while(true){
if((i__11010 < size__4977__auto__)){
var vec__11020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4976__auto__,i__11010);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020,(1),null);
cljs.core.chunk_append(b__11011,(function (){var temp__4420__auto__ = (function (){var G__11021 = name;
return (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(G__11021) : quil.middlewares.deprecated_options.deprecated.call(null,G__11021));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var vec__11022 = temp__4420__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__11026 = (i__11010 + (1));
i__11010 = G__11026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11011),quil$middlewares$deprecated_options$deprecated_options_$_iter__11008(cljs.core.chunk_rest(s__11009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11011),null);
}
} else {
var vec__11023 = cljs.core.first(s__11009__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(1),null);
return cljs.core.cons((function (){var temp__4420__auto__ = (function (){var G__11024 = name;
return (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(G__11024) : quil.middlewares.deprecated_options.deprecated.call(null,G__11024));
})();
if(cljs.core.truth_(temp__4420__auto__)){
var vec__11025 = temp__4420__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11025,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11025,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__11008(cljs.core.rest(s__11009__$2)));
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
return iter__4978__auto__(options__$1);
})()));
});
