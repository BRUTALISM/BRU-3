// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.constant$keyword$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.constant$keyword$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.constant$keyword$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(){
var G__10906 = arguments.length;
switch (G__10906) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__10918 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$keyPressed,cljs.core.constant$keyword$mouseOut,cljs.core.constant$keyword$mouseScrolled,cljs.core.constant$keyword$mouseDragged,cljs.core.constant$keyword$setup,cljs.core.constant$keyword$keyReleased,cljs.core.constant$keyword$mouseClicked,cljs.core.constant$keyword$mouseReleased,cljs.core.constant$keyword$mousePressed,cljs.core.constant$keyword$mouseMoved,cljs.core.constant$keyword$mouseOver,cljs.core.constant$keyword$keyTyped,cljs.core.constant$keyword$draw],[cljs.core.constant$keyword$key_DASH_pressed,cljs.core.constant$keyword$mouse_DASH_exited,cljs.core.constant$keyword$mouse_DASH_wheel,cljs.core.constant$keyword$mouse_DASH_dragged,cljs.core.constant$keyword$setup,cljs.core.constant$keyword$key_DASH_released,cljs.core.constant$keyword$mouse_DASH_clicked,cljs.core.constant$keyword$mouse_DASH_released,cljs.core.constant$keyword$mouse_DASH_pressed,cljs.core.constant$keyword$mouse_DASH_moved,cljs.core.constant$keyword$mouse_DASH_entered,cljs.core.constant$keyword$key_DASH_typed,cljs.core.constant$keyword$draw]));
var chunk__10919 = null;
var count__10920 = (0);
var i__10921 = (0);
while(true){
if((i__10921 < count__10920)){
var vec__10922 = chunk__10919.cljs$core$IIndexed$_nth$arity$2(null,i__10921);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922,(1),null);
var temp__4422__auto___10928 = (function (){var G__10923 = quil_name;
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__10923) : opts.call(null,G__10923));
})();
if(cljs.core.truth_(temp__4422__auto___10928)){
var handler_10929 = temp__4422__auto___10928;
(prc[cljs.core.name(processing_name)] = ((function (seq__10918,chunk__10919,count__10920,i__10921,handler_10929,temp__4422__auto___10928,vec__10922,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_10924 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_10929.cljs$core$IFn$_invoke$arity$0 ? handler_10929.cljs$core$IFn$_invoke$arity$0() : handler_10929.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10924;
}});})(seq__10918,chunk__10919,count__10920,i__10921,handler_10929,temp__4422__auto___10928,vec__10922,processing_name,quil_name))
);
} else {
}

var G__10930 = seq__10918;
var G__10931 = chunk__10919;
var G__10932 = count__10920;
var G__10933 = (i__10921 + (1));
seq__10918 = G__10930;
chunk__10919 = G__10931;
count__10920 = G__10932;
i__10921 = G__10933;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__10918);
if(temp__4422__auto__){
var seq__10918__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10918__$1)){
var c__5009__auto__ = cljs.core.chunk_first(seq__10918__$1);
var G__10934 = cljs.core.chunk_rest(seq__10918__$1);
var G__10935 = c__5009__auto__;
var G__10936 = cljs.core.count(c__5009__auto__);
var G__10937 = (0);
seq__10918 = G__10934;
chunk__10919 = G__10935;
count__10920 = G__10936;
i__10921 = G__10937;
continue;
} else {
var vec__10925 = cljs.core.first(seq__10918__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(1),null);
var temp__4422__auto___10938__$1 = (function (){var G__10926 = quil_name;
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__10926) : opts.call(null,G__10926));
})();
if(cljs.core.truth_(temp__4422__auto___10938__$1)){
var handler_10939 = temp__4422__auto___10938__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__10918,chunk__10919,count__10920,i__10921,handler_10939,temp__4422__auto___10938__$1,vec__10925,processing_name,quil_name,seq__10918__$1,temp__4422__auto__){
return (function (){
var _STAR_applet_STAR_10927 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_10939.cljs$core$IFn$_invoke$arity$0 ? handler_10939.cljs$core$IFn$_invoke$arity$0() : handler_10939.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10927;
}});})(seq__10918,chunk__10919,count__10920,i__10921,handler_10939,temp__4422__auto___10938__$1,vec__10925,processing_name,quil_name,seq__10918__$1,temp__4422__auto__))
);
} else {
}

var G__10940 = cljs.core.next(seq__10918__$1);
var G__10941 = null;
var G__10942 = (0);
var G__10943 = (0);
seq__10918 = G__10940;
chunk__10919 = G__10941;
count__10920 = G__10942;
i__10921 = G__10943;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__10944_SHARP_){
var G__10951 = options;
return (p1__10944_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10944_SHARP_.cljs$core$IFn$_invoke$arity$1(G__10951) : p1__10944_SHARP_.call(null,G__10951));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.constant$keyword$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__4224__auto__ = cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4224__auto__)){
return or__4224__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.constant$keyword$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.constant$keyword$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__10945_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__10945_SHARP_)){
return (p1__10945_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10945_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10945_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__10946_SHARP_){
if(cljs.core.truth_(p1__10946_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__10952 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__10946_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10946_SHARP_.cljs$core$IFn$_invoke$arity$1(G__10952) : p1__10946_SHARP_.call(null,G__10952));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (function (){var G__10953 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10953) : cljs.core.atom.call(null,G__10953));
})();

return prc.target_frame_rate = (function (){var G__10954 = (60);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10954) : cljs.core.atom.call(null,G__10954));
})();
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.constant$keyword$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(){
var argseq__5264__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5264__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__10956 = cljs.core.constant$keyword$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__10956);
})();
var renderer = (function (){var or__4224__auto__ = cljs.core.constant$keyword$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4224__auto__)){
return or__4224__auto__;
} else {
return cljs.core.constant$keyword$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq10955){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10955));
});
quil.sketch.sketch_init_list = (function (){var G__10957 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10957) : cljs.core.atom.call(null,G__10957));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_();
var seq__10963 = cljs.core.seq((function (){var G__10967 = quil.sketch.sketch_init_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10967) : cljs.core.deref.call(null,G__10967));
})());
var chunk__10964 = null;
var count__10965 = (0);
var i__10966 = (0);
while(true){
if((i__10966 < count__10965)){
var sk = chunk__10964.cljs$core$IIndexed$_nth$arity$2(null,i__10966);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.constant$keyword$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.constant$keyword$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__10968 = seq__10963;
var G__10969 = chunk__10964;
var G__10970 = count__10965;
var G__10971 = (i__10966 + (1));
seq__10963 = G__10968;
chunk__10964 = G__10969;
count__10965 = G__10970;
i__10966 = G__10971;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__10963);
if(temp__4422__auto__){
var seq__10963__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10963__$1)){
var c__5009__auto__ = cljs.core.chunk_first(seq__10963__$1);
var G__10972 = cljs.core.chunk_rest(seq__10963__$1);
var G__10973 = c__5009__auto__;
var G__10974 = cljs.core.count(c__5009__auto__);
var G__10975 = (0);
seq__10963 = G__10972;
chunk__10964 = G__10973;
count__10965 = G__10974;
i__10966 = G__10975;
continue;
} else {
var sk = cljs.core.first(seq__10963__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.constant$keyword$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.constant$keyword$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__10976 = cljs.core.next(seq__10963__$1);
var G__10977 = null;
var G__10978 = (0);
var G__10979 = (0);
seq__10963 = G__10976;
chunk__10964 = G__10977;
count__10965 = G__10978;
i__10966 = G__10979;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
var G__10980_10983 = window;
var G__10981_10984 = goog.events.EventType.LOAD;
var G__10982_10985 = quil.sketch.init_sketches;
goog.events.listenOnce(G__10980_10983,G__10981_10984,G__10982_10985);
