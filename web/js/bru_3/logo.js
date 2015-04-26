// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.logo');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('bru_3.core');
bru_3.logo.bru_3 = (function bru_3$logo$bru_3(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$host,"bru-3",cljs.core.constant$keyword$update,bru_3.core.update,cljs.core.constant$keyword$renderer,cljs.core.constant$keyword$opengl,cljs.core.constant$keyword$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1200),(400)], null),cljs.core.constant$keyword$title,"BRU-3",cljs.core.constant$keyword$setup,bru_3.core.setup,cljs.core.constant$keyword$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.constant$keyword$draw,bru_3.core.draw], 0));
});
goog.exportSymbol('bru_3.logo.bru_3', bru_3.logo.bru_3);

if(cljs.core.truth_(cljs.core.some((function (p1__11926__11927__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$no_DASH_start,p1__11926__11927__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$fn,bru_3.logo.bru_3,cljs.core.constant$keyword$host_DASH_id,"bru-3"], null));
}
