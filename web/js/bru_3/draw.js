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
bru_3.draw.config = (function (){var G__22037 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$draw_DASH_distortion,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization,cljs.core.constant$keyword$two_DASH_phase_DASH_shapes,cljs.core.constant$keyword$outline_DASH_only,cljs.core.constant$keyword$draw_DASH_wings,cljs.core.constant$keyword$draw_DASH_bones,cljs.core.constant$keyword$fault_DASH_config,cljs.core.constant$keyword$max_DASH_angle,cljs.core.constant$keyword$distortion_DASH_yresolution,cljs.core.constant$keyword$distance_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_field_DASH_step,cljs.core.constant$keyword$draw_DASH_frames,cljs.core.constant$keyword$length_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_xresolution,cljs.core.constant$keyword$bone_DASH_count,cljs.core.constant$keyword$draw_DASH_fault,cljs.core.constant$keyword$distortion_DASH_intensity,cljs.core.constant$keyword$dot_DASH_size,cljs.core.constant$keyword$wings_DASH_conf],[false,0.3,false,true,true,false,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$count,(10),cljs.core.constant$keyword$y_DASH_rand_DASH_percentage,0.8333,cljs.core.constant$keyword$y_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(60)], null),cljs.core.constant$keyword$x_DASH_spread_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(300)], null),cljs.core.constant$keyword$x_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null)], null),(20),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(120)], null),(50),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null),(12),(10),false,(60),(5),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$bite,0.0333,cljs.core.constant$keyword$indent,0.3333,cljs.core.constant$keyword$sharpness,0.1111], null)]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22037) : cljs.core.atom.call(null,G__22037));
})();
bru_3.draw.flip = (function bru_3$draw$flip(k){
var v = cljs.core.not((function (){var G__22043 = (function (){var G__22044 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22044) : cljs.core.deref.call(null,G__22044));
})();
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__22043) : k.call(null,G__22043));
})());
var G__22045 = bru_3.draw.config;
var G__22046 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22047 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22047) : cljs.core.deref.call(null,G__22047));
})(),k,v);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22045,G__22046) : cljs.core.reset_BANG_.call(null,G__22045,G__22046));
});
bru_3.draw.new_bones = (function bru_3$draw$new_bones(){
var initial_bone = (new bru_3.bone.Bone(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,(quil.core.height() / (2))),0.0,0.0));
return cljs.core.rest(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.constant$keyword$bone_DASH_count.cljs$core$IFn$_invoke$arity$1((function (){var G__22052 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22052) : cljs.core.deref.call(null,G__22052));
})()) + (1)),bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$distance_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22053 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22053) : cljs.core.deref.call(null,G__22053));
})()),cljs.core.constant$keyword$length_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22054 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22054) : cljs.core.deref.call(null,G__22054));
})()),cljs.core.constant$keyword$max_DASH_angle.cljs$core$IFn$_invoke$arity$1((function (){var G__22055 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22055) : cljs.core.deref.call(null,G__22055));
})()),initial_bone)));
});
bru_3.draw.new_frames = (function bru_3$draw$new_frames(bones){
var bone_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bones,cljs.core.rest(bones));
var bf = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.frame.from_bones,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization.cljs$core$IFn$_invoke$arity$1((function (){var G__22057 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22057) : cljs.core.deref.call(null,G__22057));
})()));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bf),bone_pairs);
});
bru_3.draw.new_wings = (function bru_3$draw$new_wings(frames,df){
var di = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22062 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22062) : cljs.core.deref.call(null,G__22062));
})());
var letters = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$b,cljs.core.constant$keyword$r,cljs.core.constant$keyword$u,cljs.core.constant$keyword$t,cljs.core.constant$keyword$a,cljs.core.constant$keyword$l,cljs.core.constant$keyword$i,cljs.core.constant$keyword$s,cljs.core.constant$keyword$m], null);
var wings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.face.wings.frame__GT_face,cljs.core.constant$keyword$wings_DASH_conf.cljs$core$IFn$_invoke$arity$1((function (){var G__22063 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22063) : cljs.core.deref.call(null,G__22063));
})())),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(frames,letters)));
var vfn = ((function (di,letters,wings){
return (function (v){
var vec__22064 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(1),null);
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(v,thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x,y,quil.core.width(),quil.core.height()),di));
});})(di,letters,wings))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (di,letters,wings,vfn){
return (function (p1__22058_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(vfn,p1__22058_SHARP_);
});})(di,letters,wings,vfn))
,wings);
});
bru_3.draw.new_distortion_field = (function bru_3$draw$new_distortion_field(fl){
var xres = cljs.core.constant$keyword$distortion_DASH_xresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22067 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22067) : cljs.core.deref.call(null,G__22067));
})());
var yres = cljs.core.constant$keyword$distortion_DASH_yresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22068 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22068) : cljs.core.deref.call(null,G__22068));
})());
var xscale = (quil.core.width() / (xres - (1)));
var yscale = (quil.core.height() / (yres - (1)));
return bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5(xres,yres,fl,xscale,yscale);
});
bru_3.draw.new_fault_line = (function bru_3$draw$new_fault_line(){
return bru_3.geometry.fault.fault_line(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((0),(0),quil.core.width(),quil.core.height()),cljs.core.constant$keyword$fault_DASH_config.cljs$core$IFn$_invoke$arity$1((function (){var G__22070 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22070) : cljs.core.deref.call(null,G__22070));
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
var vec__22075 = bru_3.decomposition.vertices(b);
var vec__22076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22075,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(1),null);
var vec__22077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22075,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22077,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22077,(1),null);
var dot_size = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22078 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22078) : cljs.core.deref.call(null,G__22078));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

quil.core.ellipse(x1,y1,dot_size,dot_size);

return quil.core.ellipse(x2,y2,dot_size,dot_size);
});
bru_3.draw.draw_frame = (function bru_3$draw$draw_frame(fr){
var vs = bru_3.decomposition.vertices(fr);
var es = bru_3.decomposition.edges(fr);
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22096 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22096) : cljs.core.deref.call(null,G__22096));
})());
quil.core.fill.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

var seq__22097_22113 = cljs.core.seq(es);
var chunk__22098_22114 = null;
var count__22099_22115 = (0);
var i__22100_22116 = (0);
while(true){
if((i__22100_22116 < count__22099_22115)){
var vec__22101_22117 = chunk__22098_22114.cljs$core$IIndexed$_nth$arity$2(null,i__22100_22116);
var vec__22102_22118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22101_22117,(0),null);
var x1_22119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22102_22118,(0),null);
var y1_22120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22102_22118,(1),null);
var vec__22103_22121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22101_22117,(1),null);
var x2_22122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103_22121,(0),null);
var y2_22123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103_22121,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22119,y1_22120,x2_22122,y2_22123);

var G__22124 = seq__22097_22113;
var G__22125 = chunk__22098_22114;
var G__22126 = count__22099_22115;
var G__22127 = (i__22100_22116 + (1));
seq__22097_22113 = G__22124;
chunk__22098_22114 = G__22125;
count__22099_22115 = G__22126;
i__22100_22116 = G__22127;
continue;
} else {
var temp__4422__auto___22128 = cljs.core.seq(seq__22097_22113);
if(temp__4422__auto___22128){
var seq__22097_22129__$1 = temp__4422__auto___22128;
if(cljs.core.chunked_seq_QMARK_(seq__22097_22129__$1)){
var c__13392__auto___22130 = cljs.core.chunk_first(seq__22097_22129__$1);
var G__22131 = cljs.core.chunk_rest(seq__22097_22129__$1);
var G__22132 = c__13392__auto___22130;
var G__22133 = cljs.core.count(c__13392__auto___22130);
var G__22134 = (0);
seq__22097_22113 = G__22131;
chunk__22098_22114 = G__22132;
count__22099_22115 = G__22133;
i__22100_22116 = G__22134;
continue;
} else {
var vec__22104_22135 = cljs.core.first(seq__22097_22129__$1);
var vec__22105_22136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104_22135,(0),null);
var x1_22137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105_22136,(0),null);
var y1_22138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105_22136,(1),null);
var vec__22106_22139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104_22135,(1),null);
var x2_22140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106_22139,(0),null);
var y2_22141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106_22139,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22137,y1_22138,x2_22140,y2_22141);

var G__22142 = cljs.core.next(seq__22097_22129__$1);
var G__22143 = null;
var G__22144 = (0);
var G__22145 = (0);
seq__22097_22113 = G__22142;
chunk__22098_22114 = G__22143;
count__22099_22115 = G__22144;
i__22100_22116 = G__22145;
continue;
}
} else {
}
}
break;
}

var seq__22107 = cljs.core.seq(vs);
var chunk__22108 = null;
var count__22109 = (0);
var i__22110 = (0);
while(true){
if((i__22110 < count__22109)){
var vec__22111 = chunk__22108.cljs$core$IIndexed$_nth$arity$2(null,i__22110);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22146 = seq__22107;
var G__22147 = chunk__22108;
var G__22148 = count__22109;
var G__22149 = (i__22110 + (1));
seq__22107 = G__22146;
chunk__22108 = G__22147;
count__22109 = G__22148;
i__22110 = G__22149;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__22107);
if(temp__4422__auto__){
var seq__22107__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22107__$1)){
var c__13392__auto__ = cljs.core.chunk_first(seq__22107__$1);
var G__22150 = cljs.core.chunk_rest(seq__22107__$1);
var G__22151 = c__13392__auto__;
var G__22152 = cljs.core.count(c__13392__auto__);
var G__22153 = (0);
seq__22107 = G__22150;
chunk__22108 = G__22151;
count__22109 = G__22152;
i__22110 = G__22153;
continue;
} else {
var vec__22112 = cljs.core.first(seq__22107__$1);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22154 = cljs.core.next(seq__22107__$1);
var G__22155 = null;
var G__22156 = (0);
var G__22157 = (0);
seq__22107 = G__22154;
chunk__22108 = G__22155;
count__22109 = G__22156;
i__22110 = G__22157;
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

var seq__22164_22170 = cljs.core.seq(verts);
var chunk__22165_22171 = null;
var count__22166_22172 = (0);
var i__22167_22173 = (0);
while(true){
if((i__22167_22173 < count__22166_22172)){
var vec__22168_22174 = chunk__22165_22171.cljs$core$IIndexed$_nth$arity$2(null,i__22167_22173);
var x_22175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22168_22174,(0),null);
var y_22176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22168_22174,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22175,y_22176);

var G__22177 = seq__22164_22170;
var G__22178 = chunk__22165_22171;
var G__22179 = count__22166_22172;
var G__22180 = (i__22167_22173 + (1));
seq__22164_22170 = G__22177;
chunk__22165_22171 = G__22178;
count__22166_22172 = G__22179;
i__22167_22173 = G__22180;
continue;
} else {
var temp__4422__auto___22181 = cljs.core.seq(seq__22164_22170);
if(temp__4422__auto___22181){
var seq__22164_22182__$1 = temp__4422__auto___22181;
if(cljs.core.chunked_seq_QMARK_(seq__22164_22182__$1)){
var c__13392__auto___22183 = cljs.core.chunk_first(seq__22164_22182__$1);
var G__22184 = cljs.core.chunk_rest(seq__22164_22182__$1);
var G__22185 = c__13392__auto___22183;
var G__22186 = cljs.core.count(c__13392__auto___22183);
var G__22187 = (0);
seq__22164_22170 = G__22184;
chunk__22165_22171 = G__22185;
count__22166_22172 = G__22186;
i__22167_22173 = G__22187;
continue;
} else {
var vec__22169_22188 = cljs.core.first(seq__22164_22182__$1);
var x_22189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169_22188,(0),null);
var y_22190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169_22188,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22189,y_22190);

var G__22191 = cljs.core.next(seq__22164_22182__$1);
var G__22192 = null;
var G__22193 = (0);
var G__22194 = (0);
seq__22164_22170 = G__22191;
chunk__22165_22171 = G__22192;
count__22166_22172 = G__22193;
i__22167_22173 = G__22194;
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
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22196 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22196) : cljs.core.deref.call(null,G__22196));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

return quil.core.ellipse(x2,y2,ds,ds);
});
bru_3.draw.draw_fault = (function bru_3$draw$draw_fault(fl){
quil.core.push_style();

quil.core.stroke_weight((2));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((10),(180),(10));

var seq__22209_22221 = cljs.core.seq(fl);
var chunk__22210_22222 = null;
var count__22211_22223 = (0);
var i__22212_22224 = (0);
while(true){
if((i__22212_22224 < count__22211_22223)){
var map__22213_22225 = chunk__22210_22222.cljs$core$IIndexed$_nth$arity$2(null,i__22212_22224);
var map__22213_22226__$1 = ((cljs.core.seq_QMARK_(map__22213_22225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22213_22225):map__22213_22225);
var vec__22214_22227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22213_22226__$1,cljs.core.constant$keyword$points);
var vec__22215_22228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214_22227,(0),null);
var x1_22229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215_22228,(0),null);
var y1_22230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215_22228,(1),null);
var vec__22216_22231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214_22227,(1),null);
var x2_22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22216_22231,(0),null);
var y2_22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22216_22231,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22229,y1_22230,x2_22232,y2_22233);

var G__22234 = seq__22209_22221;
var G__22235 = chunk__22210_22222;
var G__22236 = count__22211_22223;
var G__22237 = (i__22212_22224 + (1));
seq__22209_22221 = G__22234;
chunk__22210_22222 = G__22235;
count__22211_22223 = G__22236;
i__22212_22224 = G__22237;
continue;
} else {
var temp__4422__auto___22238 = cljs.core.seq(seq__22209_22221);
if(temp__4422__auto___22238){
var seq__22209_22239__$1 = temp__4422__auto___22238;
if(cljs.core.chunked_seq_QMARK_(seq__22209_22239__$1)){
var c__13392__auto___22240 = cljs.core.chunk_first(seq__22209_22239__$1);
var G__22241 = cljs.core.chunk_rest(seq__22209_22239__$1);
var G__22242 = c__13392__auto___22240;
var G__22243 = cljs.core.count(c__13392__auto___22240);
var G__22244 = (0);
seq__22209_22221 = G__22241;
chunk__22210_22222 = G__22242;
count__22211_22223 = G__22243;
i__22212_22224 = G__22244;
continue;
} else {
var map__22217_22245 = cljs.core.first(seq__22209_22239__$1);
var map__22217_22246__$1 = ((cljs.core.seq_QMARK_(map__22217_22245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22217_22245):map__22217_22245);
var vec__22218_22247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22217_22246__$1,cljs.core.constant$keyword$points);
var vec__22219_22248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218_22247,(0),null);
var x1_22249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219_22248,(0),null);
var y1_22250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219_22248,(1),null);
var vec__22220_22251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218_22247,(1),null);
var x2_22252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220_22251,(0),null);
var y2_22253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220_22251,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22249,y1_22250,x2_22252,y2_22253);

var G__22254 = cljs.core.next(seq__22209_22239__$1);
var G__22255 = null;
var G__22256 = (0);
var G__22257 = (0);
seq__22209_22221 = G__22254;
chunk__22210_22222 = G__22255;
count__22211_22223 = G__22256;
i__22212_22224 = G__22257;
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
var step = cljs.core.constant$keyword$distortion_DASH_field_DASH_step.cljs$core$IFn$_invoke$arity$1((function (){var G__22280 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22280) : cljs.core.deref.call(null,G__22280));
})());
var intensity = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22281 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22281) : cljs.core.deref.call(null,G__22281));
})());
var xmax = (quil.core.width() + (1));
var ymax = (quil.core.height() + (1));
quil.core.push_style();

quil.core.fill.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

var seq__22282_22302 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),xmax,step));
var chunk__22289_22303 = null;
var count__22290_22304 = (0);
var i__22291_22305 = (0);
while(true){
if((i__22291_22305 < count__22290_22304)){
var x_22306 = chunk__22289_22303.cljs$core$IIndexed$_nth$arity$2(null,i__22291_22305);
var seq__22292_22307 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22294_22308 = null;
var count__22295_22309 = (0);
var i__22296_22310 = (0);
while(true){
if((i__22296_22310 < count__22295_22309)){
var y_22311 = chunk__22294_22308.cljs$core$IIndexed$_nth$arity$2(null,i__22296_22310);
var vec__22298_22312 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22306,y_22311,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22306,y_22311));
var x1_22313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22298_22312,(0),null);
var y1_22314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22298_22312,(1),null);
bru_3.draw.draw_vector(x_22306,y_22311,x1_22313,y1_22314);

var G__22315 = seq__22292_22307;
var G__22316 = chunk__22294_22308;
var G__22317 = count__22295_22309;
var G__22318 = (i__22296_22310 + (1));
seq__22292_22307 = G__22315;
chunk__22294_22308 = G__22316;
count__22295_22309 = G__22317;
i__22296_22310 = G__22318;
continue;
} else {
var temp__4422__auto___22319 = cljs.core.seq(seq__22292_22307);
if(temp__4422__auto___22319){
var seq__22292_22320__$1 = temp__4422__auto___22319;
if(cljs.core.chunked_seq_QMARK_(seq__22292_22320__$1)){
var c__13392__auto___22321 = cljs.core.chunk_first(seq__22292_22320__$1);
var G__22322 = cljs.core.chunk_rest(seq__22292_22320__$1);
var G__22323 = c__13392__auto___22321;
var G__22324 = cljs.core.count(c__13392__auto___22321);
var G__22325 = (0);
seq__22292_22307 = G__22322;
chunk__22294_22308 = G__22323;
count__22295_22309 = G__22324;
i__22296_22310 = G__22325;
continue;
} else {
var y_22326 = cljs.core.first(seq__22292_22320__$1);
var vec__22299_22327 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22306,y_22326,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22306,y_22326));
var x1_22328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22327,(0),null);
var y1_22329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22327,(1),null);
bru_3.draw.draw_vector(x_22306,y_22326,x1_22328,y1_22329);

var G__22330 = cljs.core.next(seq__22292_22320__$1);
var G__22331 = null;
var G__22332 = (0);
var G__22333 = (0);
seq__22292_22307 = G__22330;
chunk__22294_22308 = G__22331;
count__22295_22309 = G__22332;
i__22296_22310 = G__22333;
continue;
}
} else {
}
}
break;
}

var G__22334 = seq__22282_22302;
var G__22335 = chunk__22289_22303;
var G__22336 = count__22290_22304;
var G__22337 = (i__22291_22305 + (1));
seq__22282_22302 = G__22334;
chunk__22289_22303 = G__22335;
count__22290_22304 = G__22336;
i__22291_22305 = G__22337;
continue;
} else {
var temp__4422__auto___22338 = cljs.core.seq(seq__22282_22302);
if(temp__4422__auto___22338){
var seq__22282_22339__$1 = temp__4422__auto___22338;
if(cljs.core.chunked_seq_QMARK_(seq__22282_22339__$1)){
var c__13392__auto___22340 = cljs.core.chunk_first(seq__22282_22339__$1);
var G__22341 = cljs.core.chunk_rest(seq__22282_22339__$1);
var G__22342 = c__13392__auto___22340;
var G__22343 = cljs.core.count(c__13392__auto___22340);
var G__22344 = (0);
seq__22282_22302 = G__22341;
chunk__22289_22303 = G__22342;
count__22290_22304 = G__22343;
i__22291_22305 = G__22344;
continue;
} else {
var x_22345 = cljs.core.first(seq__22282_22339__$1);
var seq__22283_22346 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22285_22347 = null;
var count__22286_22348 = (0);
var i__22287_22349 = (0);
while(true){
if((i__22287_22349 < count__22286_22348)){
var y_22350 = chunk__22285_22347.cljs$core$IIndexed$_nth$arity$2(null,i__22287_22349);
var vec__22300_22351 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22345,y_22350,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22345,y_22350));
var x1_22352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300_22351,(0),null);
var y1_22353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300_22351,(1),null);
bru_3.draw.draw_vector(x_22345,y_22350,x1_22352,y1_22353);

var G__22354 = seq__22283_22346;
var G__22355 = chunk__22285_22347;
var G__22356 = count__22286_22348;
var G__22357 = (i__22287_22349 + (1));
seq__22283_22346 = G__22354;
chunk__22285_22347 = G__22355;
count__22286_22348 = G__22356;
i__22287_22349 = G__22357;
continue;
} else {
var temp__4422__auto___22358__$1 = cljs.core.seq(seq__22283_22346);
if(temp__4422__auto___22358__$1){
var seq__22283_22359__$1 = temp__4422__auto___22358__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22283_22359__$1)){
var c__13392__auto___22360 = cljs.core.chunk_first(seq__22283_22359__$1);
var G__22361 = cljs.core.chunk_rest(seq__22283_22359__$1);
var G__22362 = c__13392__auto___22360;
var G__22363 = cljs.core.count(c__13392__auto___22360);
var G__22364 = (0);
seq__22283_22346 = G__22361;
chunk__22285_22347 = G__22362;
count__22286_22348 = G__22363;
i__22287_22349 = G__22364;
continue;
} else {
var y_22365 = cljs.core.first(seq__22283_22359__$1);
var vec__22301_22366 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22345,y_22365,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22345,y_22365));
var x1_22367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22301_22366,(0),null);
var y1_22368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22301_22366,(1),null);
bru_3.draw.draw_vector(x_22345,y_22365,x1_22367,y1_22368);

var G__22369 = cljs.core.next(seq__22283_22359__$1);
var G__22370 = null;
var G__22371 = (0);
var G__22372 = (0);
seq__22283_22346 = G__22369;
chunk__22285_22347 = G__22370;
count__22286_22348 = G__22371;
i__22287_22349 = G__22372;
continue;
}
} else {
}
}
break;
}

var G__22373 = cljs.core.next(seq__22282_22339__$1);
var G__22374 = null;
var G__22375 = (0);
var G__22376 = (0);
seq__22282_22302 = G__22373;
chunk__22289_22303 = G__22374;
count__22290_22304 = G__22375;
i__22291_22305 = G__22376;
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
var vec__22406 = cljs.core.constant$keyword$position.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bones));
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22406,(1),null);
var vec__22407 = cljs.core.constant$keyword$position.cljs$core$IFn$_invoke$arity$1(cljs.core.last(bones));
var lx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22407,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22407,(1),null);
var sw = quil.core.width();
var lw = (lx - fx);
var xoff = (((sw - lw) / (2)) - fx);
quil.core.background.cljs$core$IFn$_invoke$arity$3((2),(72),(115));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.push_matrix();

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_bones.cljs$core$IFn$_invoke$arity$1((function (){var G__22408 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22408) : cljs.core.deref.call(null,G__22408));
})()))){
var seq__22409_22435 = cljs.core.seq(bones);
var chunk__22410_22436 = null;
var count__22411_22437 = (0);
var i__22412_22438 = (0);
while(true){
if((i__22412_22438 < count__22411_22437)){
var bone_22439 = chunk__22410_22436.cljs$core$IIndexed$_nth$arity$2(null,i__22412_22438);
bru_3.draw.draw_bone(bone_22439);

var G__22440 = seq__22409_22435;
var G__22441 = chunk__22410_22436;
var G__22442 = count__22411_22437;
var G__22443 = (i__22412_22438 + (1));
seq__22409_22435 = G__22440;
chunk__22410_22436 = G__22441;
count__22411_22437 = G__22442;
i__22412_22438 = G__22443;
continue;
} else {
var temp__4422__auto___22444 = cljs.core.seq(seq__22409_22435);
if(temp__4422__auto___22444){
var seq__22409_22445__$1 = temp__4422__auto___22444;
if(cljs.core.chunked_seq_QMARK_(seq__22409_22445__$1)){
var c__13392__auto___22446 = cljs.core.chunk_first(seq__22409_22445__$1);
var G__22447 = cljs.core.chunk_rest(seq__22409_22445__$1);
var G__22448 = c__13392__auto___22446;
var G__22449 = cljs.core.count(c__13392__auto___22446);
var G__22450 = (0);
seq__22409_22435 = G__22447;
chunk__22410_22436 = G__22448;
count__22411_22437 = G__22449;
i__22412_22438 = G__22450;
continue;
} else {
var bone_22451 = cljs.core.first(seq__22409_22445__$1);
bru_3.draw.draw_bone(bone_22451);

var G__22452 = cljs.core.next(seq__22409_22445__$1);
var G__22453 = null;
var G__22454 = (0);
var G__22455 = (0);
seq__22409_22435 = G__22452;
chunk__22410_22436 = G__22453;
count__22411_22437 = G__22454;
i__22412_22438 = G__22455;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_frames.cljs$core$IFn$_invoke$arity$1((function (){var G__22413 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22413) : cljs.core.deref.call(null,G__22413));
})()))){
var seq__22414_22456 = cljs.core.seq(cljs.core.constant$keyword$frames.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22415_22457 = null;
var count__22416_22458 = (0);
var i__22417_22459 = (0);
while(true){
if((i__22417_22459 < count__22416_22458)){
var frame_22460 = chunk__22415_22457.cljs$core$IIndexed$_nth$arity$2(null,i__22417_22459);
bru_3.draw.draw_frame(frame_22460);

var G__22461 = seq__22414_22456;
var G__22462 = chunk__22415_22457;
var G__22463 = count__22416_22458;
var G__22464 = (i__22417_22459 + (1));
seq__22414_22456 = G__22461;
chunk__22415_22457 = G__22462;
count__22416_22458 = G__22463;
i__22417_22459 = G__22464;
continue;
} else {
var temp__4422__auto___22465 = cljs.core.seq(seq__22414_22456);
if(temp__4422__auto___22465){
var seq__22414_22466__$1 = temp__4422__auto___22465;
if(cljs.core.chunked_seq_QMARK_(seq__22414_22466__$1)){
var c__13392__auto___22467 = cljs.core.chunk_first(seq__22414_22466__$1);
var G__22468 = cljs.core.chunk_rest(seq__22414_22466__$1);
var G__22469 = c__13392__auto___22467;
var G__22470 = cljs.core.count(c__13392__auto___22467);
var G__22471 = (0);
seq__22414_22456 = G__22468;
chunk__22415_22457 = G__22469;
count__22416_22458 = G__22470;
i__22417_22459 = G__22471;
continue;
} else {
var frame_22472 = cljs.core.first(seq__22414_22466__$1);
bru_3.draw.draw_frame(frame_22472);

var G__22473 = cljs.core.next(seq__22414_22466__$1);
var G__22474 = null;
var G__22475 = (0);
var G__22476 = (0);
seq__22414_22456 = G__22473;
chunk__22415_22457 = G__22474;
count__22416_22458 = G__22475;
i__22417_22459 = G__22476;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_wings.cljs$core$IFn$_invoke$arity$1((function (){var G__22418 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22418) : cljs.core.deref.call(null,G__22418));
})()))){
if(cljs.core.truth_(cljs.core.constant$keyword$outline_DASH_only.cljs$core$IFn$_invoke$arity$1((function (){var G__22419 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22419) : cljs.core.deref.call(null,G__22419));
})()))){
quil.core.no_fill();

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((5),(242),(219));

quil.core.stroke_weight((1));
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$3((5),(242),(219));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((4),(173),(191));
}

if(cljs.core.truth_(cljs.core.constant$keyword$two_DASH_phase_DASH_shapes.cljs$core$IFn$_invoke$arity$1((function (){var G__22420 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22420) : cljs.core.deref.call(null,G__22420));
})()))){
quil.core.push_style();

quil.core.no_stroke();

var seq__22421_22477 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22422_22478 = null;
var count__22423_22479 = (0);
var i__22424_22480 = (0);
while(true){
if((i__22424_22480 < count__22423_22479)){
var verts_22481 = chunk__22422_22478.cljs$core$IIndexed$_nth$arity$2(null,i__22424_22480);
bru_3.draw.draw_verts(verts_22481);

var G__22482 = seq__22421_22477;
var G__22483 = chunk__22422_22478;
var G__22484 = count__22423_22479;
var G__22485 = (i__22424_22480 + (1));
seq__22421_22477 = G__22482;
chunk__22422_22478 = G__22483;
count__22423_22479 = G__22484;
i__22424_22480 = G__22485;
continue;
} else {
var temp__4422__auto___22486 = cljs.core.seq(seq__22421_22477);
if(temp__4422__auto___22486){
var seq__22421_22487__$1 = temp__4422__auto___22486;
if(cljs.core.chunked_seq_QMARK_(seq__22421_22487__$1)){
var c__13392__auto___22488 = cljs.core.chunk_first(seq__22421_22487__$1);
var G__22489 = cljs.core.chunk_rest(seq__22421_22487__$1);
var G__22490 = c__13392__auto___22488;
var G__22491 = cljs.core.count(c__13392__auto___22488);
var G__22492 = (0);
seq__22421_22477 = G__22489;
chunk__22422_22478 = G__22490;
count__22423_22479 = G__22491;
i__22424_22480 = G__22492;
continue;
} else {
var verts_22493 = cljs.core.first(seq__22421_22487__$1);
bru_3.draw.draw_verts(verts_22493);

var G__22494 = cljs.core.next(seq__22421_22487__$1);
var G__22495 = null;
var G__22496 = (0);
var G__22497 = (0);
seq__22421_22477 = G__22494;
chunk__22422_22478 = G__22495;
count__22423_22479 = G__22496;
i__22424_22480 = G__22497;
continue;
}
} else {
}
}
break;
}

quil.core.pop_style();

quil.core.no_fill();

var seq__22425_22498 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22426_22499 = null;
var count__22427_22500 = (0);
var i__22428_22501 = (0);
while(true){
if((i__22428_22501 < count__22427_22500)){
var verts_22502 = chunk__22426_22499.cljs$core$IIndexed$_nth$arity$2(null,i__22428_22501);
bru_3.draw.draw_verts(verts_22502);

var G__22503 = seq__22425_22498;
var G__22504 = chunk__22426_22499;
var G__22505 = count__22427_22500;
var G__22506 = (i__22428_22501 + (1));
seq__22425_22498 = G__22503;
chunk__22426_22499 = G__22504;
count__22427_22500 = G__22505;
i__22428_22501 = G__22506;
continue;
} else {
var temp__4422__auto___22507 = cljs.core.seq(seq__22425_22498);
if(temp__4422__auto___22507){
var seq__22425_22508__$1 = temp__4422__auto___22507;
if(cljs.core.chunked_seq_QMARK_(seq__22425_22508__$1)){
var c__13392__auto___22509 = cljs.core.chunk_first(seq__22425_22508__$1);
var G__22510 = cljs.core.chunk_rest(seq__22425_22508__$1);
var G__22511 = c__13392__auto___22509;
var G__22512 = cljs.core.count(c__13392__auto___22509);
var G__22513 = (0);
seq__22425_22498 = G__22510;
chunk__22426_22499 = G__22511;
count__22427_22500 = G__22512;
i__22428_22501 = G__22513;
continue;
} else {
var verts_22514 = cljs.core.first(seq__22425_22508__$1);
bru_3.draw.draw_verts(verts_22514);

var G__22515 = cljs.core.next(seq__22425_22508__$1);
var G__22516 = null;
var G__22517 = (0);
var G__22518 = (0);
seq__22425_22498 = G__22515;
chunk__22426_22499 = G__22516;
count__22427_22500 = G__22517;
i__22428_22501 = G__22518;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22429_22519 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22430_22520 = null;
var count__22431_22521 = (0);
var i__22432_22522 = (0);
while(true){
if((i__22432_22522 < count__22431_22521)){
var verts_22523 = chunk__22430_22520.cljs$core$IIndexed$_nth$arity$2(null,i__22432_22522);
bru_3.draw.draw_verts(verts_22523);

var G__22524 = seq__22429_22519;
var G__22525 = chunk__22430_22520;
var G__22526 = count__22431_22521;
var G__22527 = (i__22432_22522 + (1));
seq__22429_22519 = G__22524;
chunk__22430_22520 = G__22525;
count__22431_22521 = G__22526;
i__22432_22522 = G__22527;
continue;
} else {
var temp__4422__auto___22528 = cljs.core.seq(seq__22429_22519);
if(temp__4422__auto___22528){
var seq__22429_22529__$1 = temp__4422__auto___22528;
if(cljs.core.chunked_seq_QMARK_(seq__22429_22529__$1)){
var c__13392__auto___22530 = cljs.core.chunk_first(seq__22429_22529__$1);
var G__22531 = cljs.core.chunk_rest(seq__22429_22529__$1);
var G__22532 = c__13392__auto___22530;
var G__22533 = cljs.core.count(c__13392__auto___22530);
var G__22534 = (0);
seq__22429_22519 = G__22531;
chunk__22430_22520 = G__22532;
count__22431_22521 = G__22533;
i__22432_22522 = G__22534;
continue;
} else {
var verts_22535 = cljs.core.first(seq__22429_22529__$1);
bru_3.draw.draw_verts(verts_22535);

var G__22536 = cljs.core.next(seq__22429_22529__$1);
var G__22537 = null;
var G__22538 = (0);
var G__22539 = (0);
seq__22429_22519 = G__22536;
chunk__22430_22520 = G__22537;
count__22431_22521 = G__22538;
i__22432_22522 = G__22539;
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

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_distortion.cljs$core$IFn$_invoke$arity$1((function (){var G__22433 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22433) : cljs.core.deref.call(null,G__22433));
})()))){
bru_3.draw.draw_distortion(cljs.core.constant$keyword$distortion.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_fault.cljs$core$IFn$_invoke$arity$1((function (){var G__22434 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22434) : cljs.core.deref.call(null,G__22434));
})()))){
bru_3.draw.draw_fault(cljs.core.constant$keyword$fault.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

return quil.core.pop_matrix();
});
bru_3.draw.key_pressed = (function bru_3$draw$key_pressed(state,key_info){
var G__22541 = (((cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info).fqn:null);
switch (G__22541) {
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
