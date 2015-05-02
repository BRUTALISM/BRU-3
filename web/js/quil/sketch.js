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
var G__25128 = arguments.length;
switch (G__25128) {
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
var seq__25140 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$keyPressed,cljs.core.constant$keyword$mouseOut,cljs.core.constant$keyword$mouseScrolled,cljs.core.constant$keyword$mouseDragged,cljs.core.constant$keyword$setup,cljs.core.constant$keyword$keyReleased,cljs.core.constant$keyword$mouseClicked,cljs.core.constant$keyword$mouseReleased,cljs.core.constant$keyword$mousePressed,cljs.core.constant$keyword$mouseMoved,cljs.core.constant$keyword$mouseOver,cljs.core.constant$keyword$keyTyped,cljs.core.constant$keyword$draw],[cljs.core.constant$keyword$key_DASH_pressed,cljs.core.constant$keyword$mouse_DASH_exited,cljs.core.constant$keyword$mouse_DASH_wheel,cljs.core.constant$keyword$mouse_DASH_dragged,cljs.core.constant$keyword$setup,cljs.core.constant$keyword$key_DASH_released,cljs.core.constant$keyword$mouse_DASH_clicked,cljs.core.constant$keyword$mouse_DASH_released,cljs.core.constant$keyword$mouse_DASH_pressed,cljs.core.constant$keyword$mouse_DASH_moved,cljs.core.constant$keyword$mouse_DASH_entered,cljs.core.constant$keyword$key_DASH_typed,cljs.core.constant$keyword$draw]));
var chunk__25141 = null;
var count__25142 = (0);
var i__25143 = (0);
while(true){
if((i__25143 < count__25142)){
var vec__25144 = chunk__25141.cljs$core$IIndexed$_nth$arity$2(null,i__25143);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(1),null);
var temp__4422__auto___25150 = (function (){var G__25145 = quil_name;
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__25145) : opts.call(null,G__25145));
})();
if(cljs.core.truth_(temp__4422__auto___25150)){
var handler_25151 = temp__4422__auto___25150;
(prc[cljs.core.name(processing_name)] = ((function (seq__25140,chunk__25141,count__25142,i__25143,handler_25151,temp__4422__auto___25150,vec__25144,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_25146 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_25151.cljs$core$IFn$_invoke$arity$0 ? handler_25151.cljs$core$IFn$_invoke$arity$0() : handler_25151.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_25146;
}});})(seq__25140,chunk__25141,count__25142,i__25143,handler_25151,temp__4422__auto___25150,vec__25144,processing_name,quil_name))
);
} else {
}

var G__25152 = seq__25140;
var G__25153 = chunk__25141;
var G__25154 = count__25142;
var G__25155 = (i__25143 + (1));
seq__25140 = G__25152;
chunk__25141 = G__25153;
count__25142 = G__25154;
i__25143 = G__25155;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__25140);
if(temp__4422__auto__){
var seq__25140__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25140__$1)){
var c__13392__auto__ = cljs.core.chunk_first(seq__25140__$1);
var G__25156 = cljs.core.chunk_rest(seq__25140__$1);
var G__25157 = c__13392__auto__;
var G__25158 = cljs.core.count(c__13392__auto__);
var G__25159 = (0);
seq__25140 = G__25156;
chunk__25141 = G__25157;
count__25142 = G__25158;
i__25143 = G__25159;
continue;
} else {
var vec__25147 = cljs.core.first(seq__25140__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147,(1),null);
var temp__4422__auto___25160__$1 = (function (){var G__25148 = quil_name;
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__25148) : opts.call(null,G__25148));
})();
if(cljs.core.truth_(temp__4422__auto___25160__$1)){
var handler_25161 = temp__4422__auto___25160__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__25140,chunk__25141,count__25142,i__25143,handler_25161,temp__4422__auto___25160__$1,vec__25147,processing_name,quil_name,seq__25140__$1,temp__4422__auto__){
return (function (){
var _STAR_applet_STAR_25149 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_25161.cljs$core$IFn$_invoke$arity$0 ? handler_25161.cljs$core$IFn$_invoke$arity$0() : handler_25161.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_25149;
}});})(seq__25140,chunk__25141,count__25142,i__25143,handler_25161,temp__4422__auto___25160__$1,vec__25147,processing_name,quil_name,seq__25140__$1,temp__4422__auto__))
);
} else {
}

var G__25162 = cljs.core.next(seq__25140__$1);
var G__25163 = null;
var G__25164 = (0);
var G__25165 = (0);
seq__25140 = G__25162;
chunk__25141 = G__25163;
count__25142 = G__25164;
i__25143 = G__25165;
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
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__25166_SHARP_){
var G__25173 = options;
return (p1__25166_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25166_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25173) : p1__25166_SHARP_.call(null,G__25173));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.constant$keyword$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__12607__auto__ = cljs.core.constant$keyword$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.constant$keyword$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.constant$keyword$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__25167_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__25167_SHARP_)){
return (p1__25167_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__25167_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__25167_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__25168_SHARP_){
if(cljs.core.truth_(p1__25168_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__25174 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__25168_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25168_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25174) : p1__25168_SHARP_.call(null,G__25174));
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

prc.quil = (function (){var G__25175 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25175) : cljs.core.atom.call(null,G__25175));
})();

return prc.target_frame_rate = (function (){var G__25176 = (60);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25176) : cljs.core.atom.call(null,G__25176));
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
var argseq__13647__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__13647__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__25178 = cljs.core.constant$keyword$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__25178);
})();
var renderer = (function (){var or__12607__auto__ = cljs.core.constant$keyword$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__12607__auto__)){
return or__12607__auto__;
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

quil.sketch.sketch.cljs$lang$applyTo = (function (seq25177){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25177));
});
quil.sketch.sketch_init_list = (function (){var G__25179 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25179) : cljs.core.atom.call(null,G__25179));
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
var seq__25185 = cljs.core.seq((function (){var G__25189 = quil.sketch.sketch_init_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25189) : cljs.core.deref.call(null,G__25189));
})());
var chunk__25186 = null;
var count__25187 = (0);
var i__25188 = (0);
while(true){
if((i__25188 < count__25187)){
var sk = chunk__25186.cljs$core$IIndexed$_nth$arity$2(null,i__25188);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.constant$keyword$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.constant$keyword$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__25190 = seq__25185;
var G__25191 = chunk__25186;
var G__25192 = count__25187;
var G__25193 = (i__25188 + (1));
seq__25185 = G__25190;
chunk__25186 = G__25191;
count__25187 = G__25192;
i__25188 = G__25193;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__25185);
if(temp__4422__auto__){
var seq__25185__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25185__$1)){
var c__13392__auto__ = cljs.core.chunk_first(seq__25185__$1);
var G__25194 = cljs.core.chunk_rest(seq__25185__$1);
var G__25195 = c__13392__auto__;
var G__25196 = cljs.core.count(c__13392__auto__);
var G__25197 = (0);
seq__25185 = G__25194;
chunk__25186 = G__25195;
count__25187 = G__25196;
i__25188 = G__25197;
continue;
} else {
var sk = cljs.core.first(seq__25185__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.constant$keyword$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.constant$keyword$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__25198 = cljs.core.next(seq__25185__$1);
var G__25199 = null;
var G__25200 = (0);
var G__25201 = (0);
seq__25185 = G__25198;
chunk__25186 = G__25199;
count__25187 = G__25200;
i__25188 = G__25201;
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
var G__25202_25205 = window;
var G__25203_25206 = goog.events.EventType.LOAD;
var G__25204_25207 = quil.sketch.init_sketches;
goog.events.listenOnce(G__25202_25205,G__25203_25206,G__25204_25207);
