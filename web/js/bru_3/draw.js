// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.draw');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('quil.core');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.core.vector');
goog.require('bru_3.geometry.distortion');
goog.require('bru_3.frame');
goog.require('bru_3.face.wings');
goog.require('quil.middleware');
goog.require('bru_3.geometry.fault');
goog.require('bru_3.bone');
goog.require('bru_3.decomposition');
bru_3.draw.config = (function (){var G__22031 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$draw_DASH_distortion,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization,cljs.core.constant$keyword$two_DASH_phase_DASH_shapes,cljs.core.constant$keyword$outline_DASH_only,cljs.core.constant$keyword$draw_DASH_wings,cljs.core.constant$keyword$draw_DASH_bones,cljs.core.constant$keyword$fault_DASH_config,cljs.core.constant$keyword$max_DASH_angle,cljs.core.constant$keyword$distortion_DASH_yresolution,cljs.core.constant$keyword$distance_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_field_DASH_step,cljs.core.constant$keyword$draw_DASH_frames,cljs.core.constant$keyword$length_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_xresolution,cljs.core.constant$keyword$bone_DASH_count,cljs.core.constant$keyword$draw_DASH_fault,cljs.core.constant$keyword$distortion_DASH_intensity,cljs.core.constant$keyword$dot_DASH_size,cljs.core.constant$keyword$wings_DASH_conf],[false,0.3,false,true,true,false,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$count,(10),cljs.core.constant$keyword$y_DASH_rand_DASH_percentage,0.8333,cljs.core.constant$keyword$y_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(60)], null),cljs.core.constant$keyword$x_DASH_spread_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(300)], null),cljs.core.constant$keyword$x_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null)], null),(20),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(120)], null),(50),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null),(12),(10),false,(60),(5),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$bite,0.0333,cljs.core.constant$keyword$indent,0.3333,cljs.core.constant$keyword$sharpness,0.1111], null)]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22031) : cljs.core.atom.call(null,G__22031));
})();
bru_3.draw.flip = (function bru_3$draw$flip(k){
var v = cljs.core.not((function (){var G__22037 = (function (){var G__22038 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22038) : cljs.core.deref.call(null,G__22038));
})();
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__22037) : k.call(null,G__22037));
})());
var G__22039 = bru_3.draw.config;
var G__22040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22041 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22041) : cljs.core.deref.call(null,G__22041));
})(),k,v);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22039,G__22040) : cljs.core.reset_BANG_.call(null,G__22039,G__22040));
});
bru_3.draw.new_bones = (function bru_3$draw$new_bones(){
var initial_bone = (new bru_3.bone.Bone(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,(quil.core.height() / (2))),0.0,0.0));
return cljs.core.rest(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.constant$keyword$bone_DASH_count.cljs$core$IFn$_invoke$arity$1((function (){var G__22046 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22046) : cljs.core.deref.call(null,G__22046));
})()) + (1)),bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$distance_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22047 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22047) : cljs.core.deref.call(null,G__22047));
})()),cljs.core.constant$keyword$length_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22048 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22048) : cljs.core.deref.call(null,G__22048));
})()),cljs.core.constant$keyword$max_DASH_angle.cljs$core$IFn$_invoke$arity$1((function (){var G__22049 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22049) : cljs.core.deref.call(null,G__22049));
})()),initial_bone)));
});
bru_3.draw.new_frames = (function bru_3$draw$new_frames(bones){
var bone_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bones,cljs.core.rest(bones));
var bf = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.frame.from_bones,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization.cljs$core$IFn$_invoke$arity$1((function (){var G__22051 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22051) : cljs.core.deref.call(null,G__22051));
})()));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bf),bone_pairs);
});
bru_3.draw.new_wings = (function bru_3$draw$new_wings(frames,df){
var di = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22056 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22056) : cljs.core.deref.call(null,G__22056));
})());
var letters = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$b,cljs.core.constant$keyword$r,cljs.core.constant$keyword$u,cljs.core.constant$keyword$t,cljs.core.constant$keyword$a,cljs.core.constant$keyword$l,cljs.core.constant$keyword$i,cljs.core.constant$keyword$s,cljs.core.constant$keyword$m], null);
var wings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.face.wings.frame__GT_face,cljs.core.constant$keyword$wings_DASH_conf.cljs$core$IFn$_invoke$arity$1((function (){var G__22057 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22057) : cljs.core.deref.call(null,G__22057));
})())),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(frames,letters)));
var vfn = ((function (di,letters,wings){
return (function (v){
var vec__22058 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058,(1),null);
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(v,thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x,y,quil.core.width(),quil.core.height()),di));
});})(di,letters,wings))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (di,letters,wings,vfn){
return (function (p1__22052_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(vfn,p1__22052_SHARP_);
});})(di,letters,wings,vfn))
,wings);
});
bru_3.draw.new_distortion_field = (function bru_3$draw$new_distortion_field(fl){
var xres = cljs.core.constant$keyword$distortion_DASH_xresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22061 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22061) : cljs.core.deref.call(null,G__22061));
})());
var yres = cljs.core.constant$keyword$distortion_DASH_yresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22062 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22062) : cljs.core.deref.call(null,G__22062));
})());
var xscale = (quil.core.width() / (xres - (1)));
var yscale = (quil.core.height() / (yres - (1)));
return bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5(xres,yres,fl,xscale,yscale);
});
bru_3.draw.new_fault_line = (function bru_3$draw$new_fault_line(){
return bru_3.geometry.fault.fault_line(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((0),(0),quil.core.width(),quil.core.height()),cljs.core.constant$keyword$fault_DASH_config.cljs$core$IFn$_invoke$arity$1((function (){var G__22064 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22064) : cljs.core.deref.call(null,G__22064));
})()));
});
bru_3.draw.new_state = (function bru_3$draw$new_state(){
var bones = bru_3.draw.new_bones();
var frames = bru_3.draw.new_frames(bones);
var fault = bru_3.draw.new_fault_line();
var distortion = bru_3.draw.new_distortion_field(fault);
var wings = bru_3.draw.new_wings(frames,distortion);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$bones,bones,cljs.core.constant$keyword$frames,frames,cljs.core.constant$keyword$wings,wings,cljs.core.constant$keyword$fault,fault,cljs.core.constant$keyword$distortion,distortion], null);
});
bru_3.draw.draw_bone = (function bru_3$draw$draw_bone(b){
var vec__22069 = bru_3.decomposition.vertices(b);
var vec__22070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,(1),null);
var vec__22071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071,(1),null);
var dot_size = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22072 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22072) : cljs.core.deref.call(null,G__22072));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

quil.core.ellipse(x1,y1,dot_size,dot_size);

return quil.core.ellipse(x2,y2,dot_size,dot_size);
});
bru_3.draw.draw_frame = (function bru_3$draw$draw_frame(fr){
var vs = bru_3.decomposition.vertices(fr);
var es = bru_3.decomposition.edges(fr);
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22090 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22090) : cljs.core.deref.call(null,G__22090));
})());
quil.core.fill.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

var seq__22091_22107 = cljs.core.seq(es);
var chunk__22092_22108 = null;
var count__22093_22109 = (0);
var i__22094_22110 = (0);
while(true){
if((i__22094_22110 < count__22093_22109)){
var vec__22095_22111 = chunk__22092_22108.cljs$core$IIndexed$_nth$arity$2(null,i__22094_22110);
var vec__22096_22112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095_22111,(0),null);
var x1_22113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096_22112,(0),null);
var y1_22114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096_22112,(1),null);
var vec__22097_22115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095_22111,(1),null);
var x2_22116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22097_22115,(0),null);
var y2_22117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22097_22115,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22113,y1_22114,x2_22116,y2_22117);

var G__22118 = seq__22091_22107;
var G__22119 = chunk__22092_22108;
var G__22120 = count__22093_22109;
var G__22121 = (i__22094_22110 + (1));
seq__22091_22107 = G__22118;
chunk__22092_22108 = G__22119;
count__22093_22109 = G__22120;
i__22094_22110 = G__22121;
continue;
} else {
var temp__4422__auto___22122 = cljs.core.seq(seq__22091_22107);
if(temp__4422__auto___22122){
var seq__22091_22123__$1 = temp__4422__auto___22122;
if(cljs.core.chunked_seq_QMARK_(seq__22091_22123__$1)){
var c__13360__auto___22124 = cljs.core.chunk_first(seq__22091_22123__$1);
var G__22125 = cljs.core.chunk_rest(seq__22091_22123__$1);
var G__22126 = c__13360__auto___22124;
var G__22127 = cljs.core.count(c__13360__auto___22124);
var G__22128 = (0);
seq__22091_22107 = G__22125;
chunk__22092_22108 = G__22126;
count__22093_22109 = G__22127;
i__22094_22110 = G__22128;
continue;
} else {
var vec__22098_22129 = cljs.core.first(seq__22091_22123__$1);
var vec__22099_22130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22098_22129,(0),null);
var x1_22131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22099_22130,(0),null);
var y1_22132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22099_22130,(1),null);
var vec__22100_22133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22098_22129,(1),null);
var x2_22134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100_22133,(0),null);
var y2_22135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100_22133,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22131,y1_22132,x2_22134,y2_22135);

var G__22136 = cljs.core.next(seq__22091_22123__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__22091_22107 = G__22136;
chunk__22092_22108 = G__22137;
count__22093_22109 = G__22138;
i__22094_22110 = G__22139;
continue;
}
} else {
}
}
break;
}

var seq__22101 = cljs.core.seq(vs);
var chunk__22102 = null;
var count__22103 = (0);
var i__22104 = (0);
while(true){
if((i__22104 < count__22103)){
var vec__22105 = chunk__22102.cljs$core$IIndexed$_nth$arity$2(null,i__22104);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22140 = seq__22101;
var G__22141 = chunk__22102;
var G__22142 = count__22103;
var G__22143 = (i__22104 + (1));
seq__22101 = G__22140;
chunk__22102 = G__22141;
count__22103 = G__22142;
i__22104 = G__22143;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__22101);
if(temp__4422__auto__){
var seq__22101__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22101__$1)){
var c__13360__auto__ = cljs.core.chunk_first(seq__22101__$1);
var G__22144 = cljs.core.chunk_rest(seq__22101__$1);
var G__22145 = c__13360__auto__;
var G__22146 = cljs.core.count(c__13360__auto__);
var G__22147 = (0);
seq__22101 = G__22144;
chunk__22102 = G__22145;
count__22103 = G__22146;
i__22104 = G__22147;
continue;
} else {
var vec__22106 = cljs.core.first(seq__22101__$1);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22148 = cljs.core.next(seq__22101__$1);
var G__22149 = null;
var G__22150 = (0);
var G__22151 = (0);
seq__22101 = G__22148;
chunk__22102 = G__22149;
count__22103 = G__22150;
i__22104 = G__22151;
continue;
}
} else {
return null;
}
}
break;
}
});
bru_3.draw.draw_verts = (function bru_3$draw$draw_verts(verts){
quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

var seq__22158_22164 = cljs.core.seq(verts);
var chunk__22159_22165 = null;
var count__22160_22166 = (0);
var i__22161_22167 = (0);
while(true){
if((i__22161_22167 < count__22160_22166)){
var vec__22162_22168 = chunk__22159_22165.cljs$core$IIndexed$_nth$arity$2(null,i__22161_22167);
var x_22169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162_22168,(0),null);
var y_22170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162_22168,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22169,y_22170);

var G__22171 = seq__22158_22164;
var G__22172 = chunk__22159_22165;
var G__22173 = count__22160_22166;
var G__22174 = (i__22161_22167 + (1));
seq__22158_22164 = G__22171;
chunk__22159_22165 = G__22172;
count__22160_22166 = G__22173;
i__22161_22167 = G__22174;
continue;
} else {
var temp__4422__auto___22175 = cljs.core.seq(seq__22158_22164);
if(temp__4422__auto___22175){
var seq__22158_22176__$1 = temp__4422__auto___22175;
if(cljs.core.chunked_seq_QMARK_(seq__22158_22176__$1)){
var c__13360__auto___22177 = cljs.core.chunk_first(seq__22158_22176__$1);
var G__22178 = cljs.core.chunk_rest(seq__22158_22176__$1);
var G__22179 = c__13360__auto___22177;
var G__22180 = cljs.core.count(c__13360__auto___22177);
var G__22181 = (0);
seq__22158_22164 = G__22178;
chunk__22159_22165 = G__22179;
count__22160_22166 = G__22180;
i__22161_22167 = G__22181;
continue;
} else {
var vec__22163_22182 = cljs.core.first(seq__22158_22176__$1);
var x_22183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22163_22182,(0),null);
var y_22184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22163_22182,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22183,y_22184);

var G__22185 = cljs.core.next(seq__22158_22176__$1);
var G__22186 = null;
var G__22187 = (0);
var G__22188 = (0);
seq__22158_22164 = G__22185;
chunk__22159_22165 = G__22186;
count__22160_22166 = G__22187;
i__22161_22167 = G__22188;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$close);
});
bru_3.draw.draw_vector = (function bru_3$draw$draw_vector(x1,y1,x2,y2){
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22190 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22190) : cljs.core.deref.call(null,G__22190));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

return quil.core.ellipse(x2,y2,ds,ds);
});
bru_3.draw.draw_fault = (function bru_3$draw$draw_fault(fl){
quil.core.push_style();

quil.core.stroke_weight((2));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((10),(180),(10));

var seq__22203_22215 = cljs.core.seq(fl);
var chunk__22204_22216 = null;
var count__22205_22217 = (0);
var i__22206_22218 = (0);
while(true){
if((i__22206_22218 < count__22205_22217)){
var map__22207_22219 = chunk__22204_22216.cljs$core$IIndexed$_nth$arity$2(null,i__22206_22218);
var map__22207_22220__$1 = ((cljs.core.seq_QMARK_(map__22207_22219))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22207_22219):map__22207_22219);
var vec__22208_22221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22207_22220__$1,cljs.core.constant$keyword$points);
var vec__22209_22222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22221,(0),null);
var x1_22223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22222,(0),null);
var y1_22224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22222,(1),null);
var vec__22210_22225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22221,(1),null);
var x2_22226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22225,(0),null);
var y2_22227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22225,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22223,y1_22224,x2_22226,y2_22227);

var G__22228 = seq__22203_22215;
var G__22229 = chunk__22204_22216;
var G__22230 = count__22205_22217;
var G__22231 = (i__22206_22218 + (1));
seq__22203_22215 = G__22228;
chunk__22204_22216 = G__22229;
count__22205_22217 = G__22230;
i__22206_22218 = G__22231;
continue;
} else {
var temp__4422__auto___22232 = cljs.core.seq(seq__22203_22215);
if(temp__4422__auto___22232){
var seq__22203_22233__$1 = temp__4422__auto___22232;
if(cljs.core.chunked_seq_QMARK_(seq__22203_22233__$1)){
var c__13360__auto___22234 = cljs.core.chunk_first(seq__22203_22233__$1);
var G__22235 = cljs.core.chunk_rest(seq__22203_22233__$1);
var G__22236 = c__13360__auto___22234;
var G__22237 = cljs.core.count(c__13360__auto___22234);
var G__22238 = (0);
seq__22203_22215 = G__22235;
chunk__22204_22216 = G__22236;
count__22205_22217 = G__22237;
i__22206_22218 = G__22238;
continue;
} else {
var map__22211_22239 = cljs.core.first(seq__22203_22233__$1);
var map__22211_22240__$1 = ((cljs.core.seq_QMARK_(map__22211_22239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22211_22239):map__22211_22239);
var vec__22212_22241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22211_22240__$1,cljs.core.constant$keyword$points);
var vec__22213_22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22212_22241,(0),null);
var x1_22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22213_22242,(0),null);
var y1_22244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22213_22242,(1),null);
var vec__22214_22245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22212_22241,(1),null);
var x2_22246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214_22245,(0),null);
var y2_22247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214_22245,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22243,y1_22244,x2_22246,y2_22247);

var G__22248 = cljs.core.next(seq__22203_22233__$1);
var G__22249 = null;
var G__22250 = (0);
var G__22251 = (0);
seq__22203_22215 = G__22248;
chunk__22204_22216 = G__22249;
count__22205_22217 = G__22250;
i__22206_22218 = G__22251;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style();
});
bru_3.draw.draw_distortion = (function bru_3$draw$draw_distortion(df){
var step = cljs.core.constant$keyword$distortion_DASH_field_DASH_step.cljs$core$IFn$_invoke$arity$1((function (){var G__22274 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22274) : cljs.core.deref.call(null,G__22274));
})());
var intensity = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22275 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22275) : cljs.core.deref.call(null,G__22275));
})());
var xmax = (quil.core.width() + (1));
var ymax = (quil.core.height() + (1));
quil.core.push_style();

quil.core.fill.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

var seq__22276_22296 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),xmax,step));
var chunk__22283_22297 = null;
var count__22284_22298 = (0);
var i__22285_22299 = (0);
while(true){
if((i__22285_22299 < count__22284_22298)){
var x_22300 = chunk__22283_22297.cljs$core$IIndexed$_nth$arity$2(null,i__22285_22299);
var seq__22286_22301 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22288_22302 = null;
var count__22289_22303 = (0);
var i__22290_22304 = (0);
while(true){
if((i__22290_22304 < count__22289_22303)){
var y_22305 = chunk__22288_22302.cljs$core$IIndexed$_nth$arity$2(null,i__22290_22304);
var vec__22292_22306 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22300,y_22305,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22300,y_22305));
var x1_22307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22292_22306,(0),null);
var y1_22308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22292_22306,(1),null);
bru_3.draw.draw_vector(x_22300,y_22305,x1_22307,y1_22308);

var G__22309 = seq__22286_22301;
var G__22310 = chunk__22288_22302;
var G__22311 = count__22289_22303;
var G__22312 = (i__22290_22304 + (1));
seq__22286_22301 = G__22309;
chunk__22288_22302 = G__22310;
count__22289_22303 = G__22311;
i__22290_22304 = G__22312;
continue;
} else {
var temp__4422__auto___22313 = cljs.core.seq(seq__22286_22301);
if(temp__4422__auto___22313){
var seq__22286_22314__$1 = temp__4422__auto___22313;
if(cljs.core.chunked_seq_QMARK_(seq__22286_22314__$1)){
var c__13360__auto___22315 = cljs.core.chunk_first(seq__22286_22314__$1);
var G__22316 = cljs.core.chunk_rest(seq__22286_22314__$1);
var G__22317 = c__13360__auto___22315;
var G__22318 = cljs.core.count(c__13360__auto___22315);
var G__22319 = (0);
seq__22286_22301 = G__22316;
chunk__22288_22302 = G__22317;
count__22289_22303 = G__22318;
i__22290_22304 = G__22319;
continue;
} else {
var y_22320 = cljs.core.first(seq__22286_22314__$1);
var vec__22293_22321 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22300,y_22320,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22300,y_22320));
var x1_22322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22293_22321,(0),null);
var y1_22323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22293_22321,(1),null);
bru_3.draw.draw_vector(x_22300,y_22320,x1_22322,y1_22323);

var G__22324 = cljs.core.next(seq__22286_22314__$1);
var G__22325 = null;
var G__22326 = (0);
var G__22327 = (0);
seq__22286_22301 = G__22324;
chunk__22288_22302 = G__22325;
count__22289_22303 = G__22326;
i__22290_22304 = G__22327;
continue;
}
} else {
}
}
break;
}

var G__22328 = seq__22276_22296;
var G__22329 = chunk__22283_22297;
var G__22330 = count__22284_22298;
var G__22331 = (i__22285_22299 + (1));
seq__22276_22296 = G__22328;
chunk__22283_22297 = G__22329;
count__22284_22298 = G__22330;
i__22285_22299 = G__22331;
continue;
} else {
var temp__4422__auto___22332 = cljs.core.seq(seq__22276_22296);
if(temp__4422__auto___22332){
var seq__22276_22333__$1 = temp__4422__auto___22332;
if(cljs.core.chunked_seq_QMARK_(seq__22276_22333__$1)){
var c__13360__auto___22334 = cljs.core.chunk_first(seq__22276_22333__$1);
var G__22335 = cljs.core.chunk_rest(seq__22276_22333__$1);
var G__22336 = c__13360__auto___22334;
var G__22337 = cljs.core.count(c__13360__auto___22334);
var G__22338 = (0);
seq__22276_22296 = G__22335;
chunk__22283_22297 = G__22336;
count__22284_22298 = G__22337;
i__22285_22299 = G__22338;
continue;
} else {
var x_22339 = cljs.core.first(seq__22276_22333__$1);
var seq__22277_22340 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22279_22341 = null;
var count__22280_22342 = (0);
var i__22281_22343 = (0);
while(true){
if((i__22281_22343 < count__22280_22342)){
var y_22344 = chunk__22279_22341.cljs$core$IIndexed$_nth$arity$2(null,i__22281_22343);
var vec__22294_22345 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22339,y_22344,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22339,y_22344));
var x1_22346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294_22345,(0),null);
var y1_22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294_22345,(1),null);
bru_3.draw.draw_vector(x_22339,y_22344,x1_22346,y1_22347);

var G__22348 = seq__22277_22340;
var G__22349 = chunk__22279_22341;
var G__22350 = count__22280_22342;
var G__22351 = (i__22281_22343 + (1));
seq__22277_22340 = G__22348;
chunk__22279_22341 = G__22349;
count__22280_22342 = G__22350;
i__22281_22343 = G__22351;
continue;
} else {
var temp__4422__auto___22352__$1 = cljs.core.seq(seq__22277_22340);
if(temp__4422__auto___22352__$1){
var seq__22277_22353__$1 = temp__4422__auto___22352__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22277_22353__$1)){
var c__13360__auto___22354 = cljs.core.chunk_first(seq__22277_22353__$1);
var G__22355 = cljs.core.chunk_rest(seq__22277_22353__$1);
var G__22356 = c__13360__auto___22354;
var G__22357 = cljs.core.count(c__13360__auto___22354);
var G__22358 = (0);
seq__22277_22340 = G__22355;
chunk__22279_22341 = G__22356;
count__22280_22342 = G__22357;
i__22281_22343 = G__22358;
continue;
} else {
var y_22359 = cljs.core.first(seq__22277_22353__$1);
var vec__22295_22360 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22339,y_22359,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22339,y_22359));
var x1_22361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22360,(0),null);
var y1_22362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22360,(1),null);
bru_3.draw.draw_vector(x_22339,y_22359,x1_22361,y1_22362);

var G__22363 = cljs.core.next(seq__22277_22353__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__22277_22340 = G__22363;
chunk__22279_22341 = G__22364;
count__22280_22342 = G__22365;
i__22281_22343 = G__22366;
continue;
}
} else {
}
}
break;
}

var G__22367 = cljs.core.next(seq__22276_22333__$1);
var G__22368 = null;
var G__22369 = (0);
var G__22370 = (0);
seq__22276_22296 = G__22367;
chunk__22283_22297 = G__22368;
count__22284_22298 = G__22369;
i__22285_22299 = G__22370;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style();
});
bru_3.draw.setup = (function bru_3$draw$setup(){
quil.core.frame_rate((10));

return bru_3.draw.new_state();
});
bru_3.draw.update = (function bru_3$draw$update(state){
return state;
});
bru_3.draw.draw = (function bru_3$draw$draw(state){
var bones = cljs.core.constant$keyword$bones.cljs$core$IFn$_invoke$arity$1(state);
var vec__22400 = cljs.core.constant$keyword$position.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bones));
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400,(1),null);
var vec__22401 = cljs.core.constant$keyword$position.cljs$core$IFn$_invoke$arity$1(cljs.core.last(bones));
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22401,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22401,(1),null);
var sw = quil.core.width();
var lw = (lx - fx);
var xoff = (((sw - lw) / (2)) - fx);
quil.core.background.cljs$core$IFn$_invoke$arity$3((2),(72),(115));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.push_matrix();

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_bones.cljs$core$IFn$_invoke$arity$1((function (){var G__22402 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22402) : cljs.core.deref.call(null,G__22402));
})()))){
var seq__22403_22429 = cljs.core.seq(bones);
var chunk__22404_22430 = null;
var count__22405_22431 = (0);
var i__22406_22432 = (0);
while(true){
if((i__22406_22432 < count__22405_22431)){
var bone_22433 = chunk__22404_22430.cljs$core$IIndexed$_nth$arity$2(null,i__22406_22432);
bru_3.draw.draw_bone(bone_22433);

var G__22434 = seq__22403_22429;
var G__22435 = chunk__22404_22430;
var G__22436 = count__22405_22431;
var G__22437 = (i__22406_22432 + (1));
seq__22403_22429 = G__22434;
chunk__22404_22430 = G__22435;
count__22405_22431 = G__22436;
i__22406_22432 = G__22437;
continue;
} else {
var temp__4422__auto___22438 = cljs.core.seq(seq__22403_22429);
if(temp__4422__auto___22438){
var seq__22403_22439__$1 = temp__4422__auto___22438;
if(cljs.core.chunked_seq_QMARK_(seq__22403_22439__$1)){
var c__13360__auto___22440 = cljs.core.chunk_first(seq__22403_22439__$1);
var G__22441 = cljs.core.chunk_rest(seq__22403_22439__$1);
var G__22442 = c__13360__auto___22440;
var G__22443 = cljs.core.count(c__13360__auto___22440);
var G__22444 = (0);
seq__22403_22429 = G__22441;
chunk__22404_22430 = G__22442;
count__22405_22431 = G__22443;
i__22406_22432 = G__22444;
continue;
} else {
var bone_22445 = cljs.core.first(seq__22403_22439__$1);
bru_3.draw.draw_bone(bone_22445);

var G__22446 = cljs.core.next(seq__22403_22439__$1);
var G__22447 = null;
var G__22448 = (0);
var G__22449 = (0);
seq__22403_22429 = G__22446;
chunk__22404_22430 = G__22447;
count__22405_22431 = G__22448;
i__22406_22432 = G__22449;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_frames.cljs$core$IFn$_invoke$arity$1((function (){var G__22407 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22407) : cljs.core.deref.call(null,G__22407));
})()))){
var seq__22408_22450 = cljs.core.seq(cljs.core.constant$keyword$frames.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22409_22451 = null;
var count__22410_22452 = (0);
var i__22411_22453 = (0);
while(true){
if((i__22411_22453 < count__22410_22452)){
var frame_22454 = chunk__22409_22451.cljs$core$IIndexed$_nth$arity$2(null,i__22411_22453);
bru_3.draw.draw_frame(frame_22454);

var G__22455 = seq__22408_22450;
var G__22456 = chunk__22409_22451;
var G__22457 = count__22410_22452;
var G__22458 = (i__22411_22453 + (1));
seq__22408_22450 = G__22455;
chunk__22409_22451 = G__22456;
count__22410_22452 = G__22457;
i__22411_22453 = G__22458;
continue;
} else {
var temp__4422__auto___22459 = cljs.core.seq(seq__22408_22450);
if(temp__4422__auto___22459){
var seq__22408_22460__$1 = temp__4422__auto___22459;
if(cljs.core.chunked_seq_QMARK_(seq__22408_22460__$1)){
var c__13360__auto___22461 = cljs.core.chunk_first(seq__22408_22460__$1);
var G__22462 = cljs.core.chunk_rest(seq__22408_22460__$1);
var G__22463 = c__13360__auto___22461;
var G__22464 = cljs.core.count(c__13360__auto___22461);
var G__22465 = (0);
seq__22408_22450 = G__22462;
chunk__22409_22451 = G__22463;
count__22410_22452 = G__22464;
i__22411_22453 = G__22465;
continue;
} else {
var frame_22466 = cljs.core.first(seq__22408_22460__$1);
bru_3.draw.draw_frame(frame_22466);

var G__22467 = cljs.core.next(seq__22408_22460__$1);
var G__22468 = null;
var G__22469 = (0);
var G__22470 = (0);
seq__22408_22450 = G__22467;
chunk__22409_22451 = G__22468;
count__22410_22452 = G__22469;
i__22411_22453 = G__22470;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_wings.cljs$core$IFn$_invoke$arity$1((function (){var G__22412 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22412) : cljs.core.deref.call(null,G__22412));
})()))){
if(cljs.core.truth_(cljs.core.constant$keyword$outline_DASH_only.cljs$core$IFn$_invoke$arity$1((function (){var G__22413 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22413) : cljs.core.deref.call(null,G__22413));
})()))){
quil.core.no_fill();

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((5),(242),(219));

quil.core.stroke_weight((1));
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$3((5),(242),(219));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((4),(173),(191));
}

if(cljs.core.truth_(cljs.core.constant$keyword$two_DASH_phase_DASH_shapes.cljs$core$IFn$_invoke$arity$1((function (){var G__22414 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22414) : cljs.core.deref.call(null,G__22414));
})()))){
quil.core.push_style();

quil.core.no_stroke();

var seq__22415_22471 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22416_22472 = null;
var count__22417_22473 = (0);
var i__22418_22474 = (0);
while(true){
if((i__22418_22474 < count__22417_22473)){
var verts_22475 = chunk__22416_22472.cljs$core$IIndexed$_nth$arity$2(null,i__22418_22474);
bru_3.draw.draw_verts(verts_22475);

var G__22476 = seq__22415_22471;
var G__22477 = chunk__22416_22472;
var G__22478 = count__22417_22473;
var G__22479 = (i__22418_22474 + (1));
seq__22415_22471 = G__22476;
chunk__22416_22472 = G__22477;
count__22417_22473 = G__22478;
i__22418_22474 = G__22479;
continue;
} else {
var temp__4422__auto___22480 = cljs.core.seq(seq__22415_22471);
if(temp__4422__auto___22480){
var seq__22415_22481__$1 = temp__4422__auto___22480;
if(cljs.core.chunked_seq_QMARK_(seq__22415_22481__$1)){
var c__13360__auto___22482 = cljs.core.chunk_first(seq__22415_22481__$1);
var G__22483 = cljs.core.chunk_rest(seq__22415_22481__$1);
var G__22484 = c__13360__auto___22482;
var G__22485 = cljs.core.count(c__13360__auto___22482);
var G__22486 = (0);
seq__22415_22471 = G__22483;
chunk__22416_22472 = G__22484;
count__22417_22473 = G__22485;
i__22418_22474 = G__22486;
continue;
} else {
var verts_22487 = cljs.core.first(seq__22415_22481__$1);
bru_3.draw.draw_verts(verts_22487);

var G__22488 = cljs.core.next(seq__22415_22481__$1);
var G__22489 = null;
var G__22490 = (0);
var G__22491 = (0);
seq__22415_22471 = G__22488;
chunk__22416_22472 = G__22489;
count__22417_22473 = G__22490;
i__22418_22474 = G__22491;
continue;
}
} else {
}
}
break;
}

quil.core.pop_style();

quil.core.no_fill();

var seq__22419_22492 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22420_22493 = null;
var count__22421_22494 = (0);
var i__22422_22495 = (0);
while(true){
if((i__22422_22495 < count__22421_22494)){
var verts_22496 = chunk__22420_22493.cljs$core$IIndexed$_nth$arity$2(null,i__22422_22495);
bru_3.draw.draw_verts(verts_22496);

var G__22497 = seq__22419_22492;
var G__22498 = chunk__22420_22493;
var G__22499 = count__22421_22494;
var G__22500 = (i__22422_22495 + (1));
seq__22419_22492 = G__22497;
chunk__22420_22493 = G__22498;
count__22421_22494 = G__22499;
i__22422_22495 = G__22500;
continue;
} else {
var temp__4422__auto___22501 = cljs.core.seq(seq__22419_22492);
if(temp__4422__auto___22501){
var seq__22419_22502__$1 = temp__4422__auto___22501;
if(cljs.core.chunked_seq_QMARK_(seq__22419_22502__$1)){
var c__13360__auto___22503 = cljs.core.chunk_first(seq__22419_22502__$1);
var G__22504 = cljs.core.chunk_rest(seq__22419_22502__$1);
var G__22505 = c__13360__auto___22503;
var G__22506 = cljs.core.count(c__13360__auto___22503);
var G__22507 = (0);
seq__22419_22492 = G__22504;
chunk__22420_22493 = G__22505;
count__22421_22494 = G__22506;
i__22422_22495 = G__22507;
continue;
} else {
var verts_22508 = cljs.core.first(seq__22419_22502__$1);
bru_3.draw.draw_verts(verts_22508);

var G__22509 = cljs.core.next(seq__22419_22502__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22419_22492 = G__22509;
chunk__22420_22493 = G__22510;
count__22421_22494 = G__22511;
i__22422_22495 = G__22512;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22423_22513 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22424_22514 = null;
var count__22425_22515 = (0);
var i__22426_22516 = (0);
while(true){
if((i__22426_22516 < count__22425_22515)){
var verts_22517 = chunk__22424_22514.cljs$core$IIndexed$_nth$arity$2(null,i__22426_22516);
bru_3.draw.draw_verts(verts_22517);

var G__22518 = seq__22423_22513;
var G__22519 = chunk__22424_22514;
var G__22520 = count__22425_22515;
var G__22521 = (i__22426_22516 + (1));
seq__22423_22513 = G__22518;
chunk__22424_22514 = G__22519;
count__22425_22515 = G__22520;
i__22426_22516 = G__22521;
continue;
} else {
var temp__4422__auto___22522 = cljs.core.seq(seq__22423_22513);
if(temp__4422__auto___22522){
var seq__22423_22523__$1 = temp__4422__auto___22522;
if(cljs.core.chunked_seq_QMARK_(seq__22423_22523__$1)){
var c__13360__auto___22524 = cljs.core.chunk_first(seq__22423_22523__$1);
var G__22525 = cljs.core.chunk_rest(seq__22423_22523__$1);
var G__22526 = c__13360__auto___22524;
var G__22527 = cljs.core.count(c__13360__auto___22524);
var G__22528 = (0);
seq__22423_22513 = G__22525;
chunk__22424_22514 = G__22526;
count__22425_22515 = G__22527;
i__22426_22516 = G__22528;
continue;
} else {
var verts_22529 = cljs.core.first(seq__22423_22523__$1);
bru_3.draw.draw_verts(verts_22529);

var G__22530 = cljs.core.next(seq__22423_22523__$1);
var G__22531 = null;
var G__22532 = (0);
var G__22533 = (0);
seq__22423_22513 = G__22530;
chunk__22424_22514 = G__22531;
count__22425_22515 = G__22532;
i__22426_22516 = G__22533;
continue;
}
} else {
}
}
break;
}
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_distortion.cljs$core$IFn$_invoke$arity$1((function (){var G__22427 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22427) : cljs.core.deref.call(null,G__22427));
})()))){
bru_3.draw.draw_distortion(cljs.core.constant$keyword$distortion.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_fault.cljs$core$IFn$_invoke$arity$1((function (){var G__22428 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22428) : cljs.core.deref.call(null,G__22428));
})()))){
bru_3.draw.draw_fault(cljs.core.constant$keyword$fault.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

return quil.core.pop_matrix();
});
bru_3.draw.key_pressed = (function bru_3$draw$key_pressed(state,key_info){
var G__22535 = (((cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info).fqn:null);
switch (G__22535) {
case "a":
return bru_3.draw.new_state();

break;
case "b":
bru_3.draw.flip(cljs.core.constant$keyword$draw_DASH_bones);

return state;

break;
case "f":
bru_3.draw.flip(cljs.core.constant$keyword$draw_DASH_frames);

return state;

break;
case "w":
bru_3.draw.flip(cljs.core.constant$keyword$draw_DASH_wings);

return state;

break;
case "t":
bru_3.draw.flip(cljs.core.constant$keyword$draw_DASH_fault);

return state;

break;
case "d":
bru_3.draw.flip(cljs.core.constant$keyword$draw_DASH_distortion);

return state;

break;
case "o":
bru_3.draw.flip(cljs.core.constant$keyword$outline_DASH_only);

return state;

break;
case "p":
bru_3.draw.flip(cljs.core.constant$keyword$two_DASH_phase_DASH_shapes);

return state;

break;
default:
return state;

}
});
