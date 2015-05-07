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
bru_3.draw.config = (function (){var G__22053 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$draw_DASH_distortion,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization,cljs.core.constant$keyword$two_DASH_phase_DASH_shapes,cljs.core.constant$keyword$bottom_DASH_margin,cljs.core.constant$keyword$outline_DASH_only,cljs.core.constant$keyword$draw_DASH_wings,cljs.core.constant$keyword$draw_DASH_bones,cljs.core.constant$keyword$fault_DASH_config,cljs.core.constant$keyword$max_DASH_angle,cljs.core.constant$keyword$distortion_DASH_yresolution,cljs.core.constant$keyword$distance_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_field_DASH_step,cljs.core.constant$keyword$draw_DASH_frames,cljs.core.constant$keyword$length_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_xresolution,cljs.core.constant$keyword$bone_DASH_count,cljs.core.constant$keyword$draw_DASH_fault,cljs.core.constant$keyword$distortion_DASH_intensity,cljs.core.constant$keyword$dot_DASH_size,cljs.core.constant$keyword$wings_DASH_conf],[false,0.3,false,(20),false,true,false,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$count,(10),cljs.core.constant$keyword$y_DASH_rand_DASH_percentage,0.6,cljs.core.constant$keyword$y_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(60)], null),cljs.core.constant$keyword$x_DASH_spread_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(300)], null),cljs.core.constant$keyword$x_DASH_length_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null)], null),(20),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(120)], null),(50),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null),(12),(10),false,(62),(5),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$bite,0.0333,cljs.core.constant$keyword$indent,0.3333,cljs.core.constant$keyword$sharpness,0.1111], null)]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22053) : cljs.core.atom.call(null,G__22053));
})();
bru_3.draw.flip = (function bru_3$draw$flip(k){
var v = cljs.core.not((function (){var G__22059 = (function (){var G__22060 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22060) : cljs.core.deref.call(null,G__22060));
})();
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__22059) : k.call(null,G__22059));
})());
var G__22061 = bru_3.draw.config;
var G__22062 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22063 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22063) : cljs.core.deref.call(null,G__22063));
})(),k,v);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22061,G__22062) : cljs.core.reset_BANG_.call(null,G__22061,G__22062));
});
bru_3.draw.new_bones = (function bru_3$draw$new_bones(){
var initial_bone = (new bru_3.bone.Bone(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,(quil.core.height() / (2))),0.0,0.0));
return cljs.core.rest(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.constant$keyword$bone_DASH_count.cljs$core$IFn$_invoke$arity$1((function (){var G__22068 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22068) : cljs.core.deref.call(null,G__22068));
})()) + (1)),bru_3.bone.gen_bones.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$distance_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22069 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22069) : cljs.core.deref.call(null,G__22069));
})()),cljs.core.constant$keyword$length_DASH_bounds.cljs$core$IFn$_invoke$arity$1((function (){var G__22070 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22070) : cljs.core.deref.call(null,G__22070));
})()),cljs.core.constant$keyword$max_DASH_angle.cljs$core$IFn$_invoke$arity$1((function (){var G__22071 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22071) : cljs.core.deref.call(null,G__22071));
})()),initial_bone)));
});
bru_3.draw.new_frames = (function bru_3$draw$new_frames(bones){
var bone_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bones,cljs.core.rest(bones));
var bf = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.frame.from_bones,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization.cljs$core$IFn$_invoke$arity$1((function (){var G__22073 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22073) : cljs.core.deref.call(null,G__22073));
})()));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bf),bone_pairs);
});
bru_3.draw.new_wings = (function bru_3$draw$new_wings(frames,df){
var di = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22078 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22078) : cljs.core.deref.call(null,G__22078));
})());
var letters = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$b,cljs.core.constant$keyword$r,cljs.core.constant$keyword$u,cljs.core.constant$keyword$t,cljs.core.constant$keyword$a,cljs.core.constant$keyword$l,cljs.core.constant$keyword$i,cljs.core.constant$keyword$s,cljs.core.constant$keyword$m], null);
var wings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bru_3.face.wings.frame__GT_face,cljs.core.constant$keyword$wings_DASH_conf.cljs$core$IFn$_invoke$arity$1((function (){var G__22079 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22079) : cljs.core.deref.call(null,G__22079));
})())),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(frames,letters)));
var vfn = ((function (di,letters,wings){
return (function (v){
var vec__22080 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,(1),null);
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(v,thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x,y,quil.core.width(),quil.core.height()),di));
});})(di,letters,wings))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (di,letters,wings,vfn){
return (function (p1__22074_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(vfn,p1__22074_SHARP_);
});})(di,letters,wings,vfn))
,wings);
});
bru_3.draw.new_distortion_field = (function bru_3$draw$new_distortion_field(fl){
var xres = cljs.core.constant$keyword$distortion_DASH_xresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22083 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22083) : cljs.core.deref.call(null,G__22083));
})());
var yres = cljs.core.constant$keyword$distortion_DASH_yresolution.cljs$core$IFn$_invoke$arity$1((function (){var G__22084 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22084) : cljs.core.deref.call(null,G__22084));
})());
var xscale = (quil.core.width() / (xres - (1)));
var yscale = (quil.core.height() / (yres - (1)));
return bru_3.geometry.distortion.field.cljs$core$IFn$_invoke$arity$5(xres,yres,fl,xscale,yscale);
});
bru_3.draw.new_fault_line = (function bru_3$draw$new_fault_line(){
return bru_3.geometry.fault.fault_line(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((0),(0),quil.core.width(),quil.core.height()),cljs.core.constant$keyword$fault_DASH_config.cljs$core$IFn$_invoke$arity$1((function (){var G__22086 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22086) : cljs.core.deref.call(null,G__22086));
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
/**
 * Returns the dictionary containing the leftmost, rightmost, topmost and
 * bottommost vectors under :left, :right, :top and :bottom keys, respectively.
 */
bru_3.draw.outliers = (function bru_3$draw$outliers(vs,mid){
var outs = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$left,mid,cljs.core.constant$keyword$right,mid,cljs.core.constant$keyword$top,mid,cljs.core.constant$keyword$bottom,mid], null);
var cmpfn = ((function (outs){
return (function (coord,nexxt,cmp,curr){
if(cljs.core.truth_((function (){var G__22095 = (function (){var G__22097 = nexxt;
return (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(G__22097) : coord.call(null,G__22097));
})();
var G__22096 = (function (){var G__22098 = curr;
return (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(G__22098) : coord.call(null,G__22098));
})();
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__22095,G__22096) : cmp.call(null,G__22095,G__22096));
})())){
return nexxt;
} else {
return curr;
}
});})(outs))
;
var outfn = ((function (outs,cmpfn){
return (function (e,v){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$left], null),((function (outs,cmpfn){
return (function (p1__22087_SHARP_){
return cmpfn(cljs.core.constant$keyword$x,v,cljs.core._LT_,p1__22087_SHARP_);
});})(outs,cmpfn))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$right], null),((function (outs,cmpfn){
return (function (p1__22088_SHARP_){
return cmpfn(cljs.core.constant$keyword$x,v,cljs.core._GT_,p1__22088_SHARP_);
});})(outs,cmpfn))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$top], null),((function (outs,cmpfn){
return (function (p1__22089_SHARP_){
return cmpfn(cljs.core.constant$keyword$y,v,cljs.core._LT_,p1__22089_SHARP_);
});})(outs,cmpfn))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$bottom], null),((function (outs,cmpfn){
return (function (p1__22090_SHARP_){
return cmpfn(cljs.core.constant$keyword$y,v,cljs.core._GT_,p1__22090_SHARP_);
});})(outs,cmpfn))
);
});})(outs,cmpfn))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(outfn,outs,vs);
});
bru_3.draw.draw_bone = (function bru_3$draw$draw_bone(b){
var vec__22103 = bru_3.decomposition.vertices(b);
var vec__22104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(1),null);
var vec__22105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22105,(1),null);
var dot_size = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22106 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22106) : cljs.core.deref.call(null,G__22106));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

quil.core.ellipse(x1,y1,dot_size,dot_size);

return quil.core.ellipse(x2,y2,dot_size,dot_size);
});
bru_3.draw.draw_frame = (function bru_3$draw$draw_frame(fr){
var vs = bru_3.decomposition.vertices(fr);
var es = bru_3.decomposition.edges(fr);
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22124 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22124) : cljs.core.deref.call(null,G__22124));
})());
quil.core.fill.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((17),(110),(191));

var seq__22125_22141 = cljs.core.seq(es);
var chunk__22126_22142 = null;
var count__22127_22143 = (0);
var i__22128_22144 = (0);
while(true){
if((i__22128_22144 < count__22127_22143)){
var vec__22129_22145 = chunk__22126_22142.cljs$core$IIndexed$_nth$arity$2(null,i__22128_22144);
var vec__22130_22146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129_22145,(0),null);
var x1_22147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130_22146,(0),null);
var y1_22148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130_22146,(1),null);
var vec__22131_22149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129_22145,(1),null);
var x2_22150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22131_22149,(0),null);
var y2_22151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22131_22149,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22147,y1_22148,x2_22150,y2_22151);

var G__22152 = seq__22125_22141;
var G__22153 = chunk__22126_22142;
var G__22154 = count__22127_22143;
var G__22155 = (i__22128_22144 + (1));
seq__22125_22141 = G__22152;
chunk__22126_22142 = G__22153;
count__22127_22143 = G__22154;
i__22128_22144 = G__22155;
continue;
} else {
var temp__4422__auto___22156 = cljs.core.seq(seq__22125_22141);
if(temp__4422__auto___22156){
var seq__22125_22157__$1 = temp__4422__auto___22156;
if(cljs.core.chunked_seq_QMARK_(seq__22125_22157__$1)){
var c__13408__auto___22158 = cljs.core.chunk_first(seq__22125_22157__$1);
var G__22159 = cljs.core.chunk_rest(seq__22125_22157__$1);
var G__22160 = c__13408__auto___22158;
var G__22161 = cljs.core.count(c__13408__auto___22158);
var G__22162 = (0);
seq__22125_22141 = G__22159;
chunk__22126_22142 = G__22160;
count__22127_22143 = G__22161;
i__22128_22144 = G__22162;
continue;
} else {
var vec__22132_22163 = cljs.core.first(seq__22125_22157__$1);
var vec__22133_22164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132_22163,(0),null);
var x1_22165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133_22164,(0),null);
var y1_22166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133_22164,(1),null);
var vec__22134_22167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132_22163,(1),null);
var x2_22168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22134_22167,(0),null);
var y2_22169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22134_22167,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22165,y1_22166,x2_22168,y2_22169);

var G__22170 = cljs.core.next(seq__22125_22157__$1);
var G__22171 = null;
var G__22172 = (0);
var G__22173 = (0);
seq__22125_22141 = G__22170;
chunk__22126_22142 = G__22171;
count__22127_22143 = G__22172;
i__22128_22144 = G__22173;
continue;
}
} else {
}
}
break;
}

var seq__22135 = cljs.core.seq(vs);
var chunk__22136 = null;
var count__22137 = (0);
var i__22138 = (0);
while(true){
if((i__22138 < count__22137)){
var vec__22139 = chunk__22136.cljs$core$IIndexed$_nth$arity$2(null,i__22138);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22139,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22139,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22174 = seq__22135;
var G__22175 = chunk__22136;
var G__22176 = count__22137;
var G__22177 = (i__22138 + (1));
seq__22135 = G__22174;
chunk__22136 = G__22175;
count__22137 = G__22176;
i__22138 = G__22177;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq(seq__22135);
if(temp__4422__auto__){
var seq__22135__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22135__$1)){
var c__13408__auto__ = cljs.core.chunk_first(seq__22135__$1);
var G__22178 = cljs.core.chunk_rest(seq__22135__$1);
var G__22179 = c__13408__auto__;
var G__22180 = cljs.core.count(c__13408__auto__);
var G__22181 = (0);
seq__22135 = G__22178;
chunk__22136 = G__22179;
count__22137 = G__22180;
i__22138 = G__22181;
continue;
} else {
var vec__22140 = cljs.core.first(seq__22135__$1);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(1),null);
quil.core.ellipse(x1,y1,ds,ds);

var G__22182 = cljs.core.next(seq__22135__$1);
var G__22183 = null;
var G__22184 = (0);
var G__22185 = (0);
seq__22135 = G__22182;
chunk__22136 = G__22183;
count__22137 = G__22184;
i__22138 = G__22185;
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

var seq__22192_22198 = cljs.core.seq(verts);
var chunk__22193_22199 = null;
var count__22194_22200 = (0);
var i__22195_22201 = (0);
while(true){
if((i__22195_22201 < count__22194_22200)){
var vec__22196_22202 = chunk__22193_22199.cljs$core$IIndexed$_nth$arity$2(null,i__22195_22201);
var x_22203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196_22202,(0),null);
var y_22204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196_22202,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22203,y_22204);

var G__22205 = seq__22192_22198;
var G__22206 = chunk__22193_22199;
var G__22207 = count__22194_22200;
var G__22208 = (i__22195_22201 + (1));
seq__22192_22198 = G__22205;
chunk__22193_22199 = G__22206;
count__22194_22200 = G__22207;
i__22195_22201 = G__22208;
continue;
} else {
var temp__4422__auto___22209 = cljs.core.seq(seq__22192_22198);
if(temp__4422__auto___22209){
var seq__22192_22210__$1 = temp__4422__auto___22209;
if(cljs.core.chunked_seq_QMARK_(seq__22192_22210__$1)){
var c__13408__auto___22211 = cljs.core.chunk_first(seq__22192_22210__$1);
var G__22212 = cljs.core.chunk_rest(seq__22192_22210__$1);
var G__22213 = c__13408__auto___22211;
var G__22214 = cljs.core.count(c__13408__auto___22211);
var G__22215 = (0);
seq__22192_22198 = G__22212;
chunk__22193_22199 = G__22213;
count__22194_22200 = G__22214;
i__22195_22201 = G__22215;
continue;
} else {
var vec__22197_22216 = cljs.core.first(seq__22192_22210__$1);
var x_22217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22197_22216,(0),null);
var y_22218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22197_22216,(1),null);
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(x_22217,y_22218);

var G__22219 = cljs.core.next(seq__22192_22210__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__22192_22198 = G__22219;
chunk__22193_22199 = G__22220;
count__22194_22200 = G__22221;
i__22195_22201 = G__22222;
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
var ds = cljs.core.constant$keyword$dot_DASH_size.cljs$core$IFn$_invoke$arity$1((function (){var G__22224 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22224) : cljs.core.deref.call(null,G__22224));
})());
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1,y1,x2,y2);

return quil.core.ellipse(x2,y2,ds,ds);
});
bru_3.draw.draw_fault = (function bru_3$draw$draw_fault(fl){
quil.core.push_style();

quil.core.stroke_weight((2));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((10),(180),(10));

var seq__22237_22249 = cljs.core.seq(fl);
var chunk__22238_22250 = null;
var count__22239_22251 = (0);
var i__22240_22252 = (0);
while(true){
if((i__22240_22252 < count__22239_22251)){
var map__22241_22253 = chunk__22238_22250.cljs$core$IIndexed$_nth$arity$2(null,i__22240_22252);
var map__22241_22254__$1 = ((cljs.core.seq_QMARK_(map__22241_22253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22241_22253):map__22241_22253);
var vec__22242_22255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241_22254__$1,cljs.core.constant$keyword$points);
var vec__22243_22256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22242_22255,(0),null);
var x1_22257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243_22256,(0),null);
var y1_22258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243_22256,(1),null);
var vec__22244_22259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22242_22255,(1),null);
var x2_22260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244_22259,(0),null);
var y2_22261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244_22259,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22257,y1_22258,x2_22260,y2_22261);

var G__22262 = seq__22237_22249;
var G__22263 = chunk__22238_22250;
var G__22264 = count__22239_22251;
var G__22265 = (i__22240_22252 + (1));
seq__22237_22249 = G__22262;
chunk__22238_22250 = G__22263;
count__22239_22251 = G__22264;
i__22240_22252 = G__22265;
continue;
} else {
var temp__4422__auto___22266 = cljs.core.seq(seq__22237_22249);
if(temp__4422__auto___22266){
var seq__22237_22267__$1 = temp__4422__auto___22266;
if(cljs.core.chunked_seq_QMARK_(seq__22237_22267__$1)){
var c__13408__auto___22268 = cljs.core.chunk_first(seq__22237_22267__$1);
var G__22269 = cljs.core.chunk_rest(seq__22237_22267__$1);
var G__22270 = c__13408__auto___22268;
var G__22271 = cljs.core.count(c__13408__auto___22268);
var G__22272 = (0);
seq__22237_22249 = G__22269;
chunk__22238_22250 = G__22270;
count__22239_22251 = G__22271;
i__22240_22252 = G__22272;
continue;
} else {
var map__22245_22273 = cljs.core.first(seq__22237_22267__$1);
var map__22245_22274__$1 = ((cljs.core.seq_QMARK_(map__22245_22273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22245_22273):map__22245_22273);
var vec__22246_22275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22245_22274__$1,cljs.core.constant$keyword$points);
var vec__22247_22276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22246_22275,(0),null);
var x1_22277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22247_22276,(0),null);
var y1_22278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22247_22276,(1),null);
var vec__22248_22279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22246_22275,(1),null);
var x2_22280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22248_22279,(0),null);
var y2_22281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22248_22279,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(x1_22277,y1_22278,x2_22280,y2_22281);

var G__22282 = cljs.core.next(seq__22237_22267__$1);
var G__22283 = null;
var G__22284 = (0);
var G__22285 = (0);
seq__22237_22249 = G__22282;
chunk__22238_22250 = G__22283;
count__22239_22251 = G__22284;
i__22240_22252 = G__22285;
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
var step = cljs.core.constant$keyword$distortion_DASH_field_DASH_step.cljs$core$IFn$_invoke$arity$1((function (){var G__22308 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22308) : cljs.core.deref.call(null,G__22308));
})());
var intensity = cljs.core.constant$keyword$distortion_DASH_intensity.cljs$core$IFn$_invoke$arity$1((function (){var G__22309 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22309) : cljs.core.deref.call(null,G__22309));
})());
var xmax = (quil.core.width() + (1));
var ymax = (quil.core.height() + (1));
quil.core.push_style();

quil.core.fill.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((242),(53),(53));

var seq__22310_22330 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),xmax,step));
var chunk__22317_22331 = null;
var count__22318_22332 = (0);
var i__22319_22333 = (0);
while(true){
if((i__22319_22333 < count__22318_22332)){
var x_22334 = chunk__22317_22331.cljs$core$IIndexed$_nth$arity$2(null,i__22319_22333);
var seq__22320_22335 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22322_22336 = null;
var count__22323_22337 = (0);
var i__22324_22338 = (0);
while(true){
if((i__22324_22338 < count__22323_22337)){
var y_22339 = chunk__22322_22336.cljs$core$IIndexed$_nth$arity$2(null,i__22324_22338);
var vec__22326_22340 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22334,y_22339,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22334,y_22339));
var x1_22341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22326_22340,(0),null);
var y1_22342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22326_22340,(1),null);
bru_3.draw.draw_vector(x_22334,y_22339,x1_22341,y1_22342);

var G__22343 = seq__22320_22335;
var G__22344 = chunk__22322_22336;
var G__22345 = count__22323_22337;
var G__22346 = (i__22324_22338 + (1));
seq__22320_22335 = G__22343;
chunk__22322_22336 = G__22344;
count__22323_22337 = G__22345;
i__22324_22338 = G__22346;
continue;
} else {
var temp__4422__auto___22347 = cljs.core.seq(seq__22320_22335);
if(temp__4422__auto___22347){
var seq__22320_22348__$1 = temp__4422__auto___22347;
if(cljs.core.chunked_seq_QMARK_(seq__22320_22348__$1)){
var c__13408__auto___22349 = cljs.core.chunk_first(seq__22320_22348__$1);
var G__22350 = cljs.core.chunk_rest(seq__22320_22348__$1);
var G__22351 = c__13408__auto___22349;
var G__22352 = cljs.core.count(c__13408__auto___22349);
var G__22353 = (0);
seq__22320_22335 = G__22350;
chunk__22322_22336 = G__22351;
count__22323_22337 = G__22352;
i__22324_22338 = G__22353;
continue;
} else {
var y_22354 = cljs.core.first(seq__22320_22348__$1);
var vec__22327_22355 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22334,y_22354,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22334,y_22354));
var x1_22356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22327_22355,(0),null);
var y1_22357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22327_22355,(1),null);
bru_3.draw.draw_vector(x_22334,y_22354,x1_22356,y1_22357);

var G__22358 = cljs.core.next(seq__22320_22348__$1);
var G__22359 = null;
var G__22360 = (0);
var G__22361 = (0);
seq__22320_22335 = G__22358;
chunk__22322_22336 = G__22359;
count__22323_22337 = G__22360;
i__22324_22338 = G__22361;
continue;
}
} else {
}
}
break;
}

var G__22362 = seq__22310_22330;
var G__22363 = chunk__22317_22331;
var G__22364 = count__22318_22332;
var G__22365 = (i__22319_22333 + (1));
seq__22310_22330 = G__22362;
chunk__22317_22331 = G__22363;
count__22318_22332 = G__22364;
i__22319_22333 = G__22365;
continue;
} else {
var temp__4422__auto___22366 = cljs.core.seq(seq__22310_22330);
if(temp__4422__auto___22366){
var seq__22310_22367__$1 = temp__4422__auto___22366;
if(cljs.core.chunked_seq_QMARK_(seq__22310_22367__$1)){
var c__13408__auto___22368 = cljs.core.chunk_first(seq__22310_22367__$1);
var G__22369 = cljs.core.chunk_rest(seq__22310_22367__$1);
var G__22370 = c__13408__auto___22368;
var G__22371 = cljs.core.count(c__13408__auto___22368);
var G__22372 = (0);
seq__22310_22330 = G__22369;
chunk__22317_22331 = G__22370;
count__22318_22332 = G__22371;
i__22319_22333 = G__22372;
continue;
} else {
var x_22373 = cljs.core.first(seq__22310_22367__$1);
var seq__22311_22374 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),ymax,step));
var chunk__22313_22375 = null;
var count__22314_22376 = (0);
var i__22315_22377 = (0);
while(true){
if((i__22315_22377 < count__22314_22376)){
var y_22378 = chunk__22313_22375.cljs$core$IIndexed$_nth$arity$2(null,i__22315_22377);
var vec__22328_22379 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22373,y_22378,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22373,y_22378));
var x1_22380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_22379,(0),null);
var y1_22381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_22379,(1),null);
bru_3.draw.draw_vector(x_22373,y_22378,x1_22380,y1_22381);

var G__22382 = seq__22311_22374;
var G__22383 = chunk__22313_22375;
var G__22384 = count__22314_22376;
var G__22385 = (i__22315_22377 + (1));
seq__22311_22374 = G__22382;
chunk__22313_22375 = G__22383;
count__22314_22376 = G__22384;
i__22315_22377 = G__22385;
continue;
} else {
var temp__4422__auto___22386__$1 = cljs.core.seq(seq__22311_22374);
if(temp__4422__auto___22386__$1){
var seq__22311_22387__$1 = temp__4422__auto___22386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22311_22387__$1)){
var c__13408__auto___22388 = cljs.core.chunk_first(seq__22311_22387__$1);
var G__22389 = cljs.core.chunk_rest(seq__22311_22387__$1);
var G__22390 = c__13408__auto___22388;
var G__22391 = cljs.core.count(c__13408__auto___22388);
var G__22392 = (0);
seq__22311_22374 = G__22389;
chunk__22313_22375 = G__22390;
count__22314_22376 = G__22391;
i__22315_22377 = G__22392;
continue;
} else {
var y_22393 = cljs.core.first(seq__22311_22387__$1);
var vec__22329_22394 = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2(bru_3.geometry.distortion.vec_at(df,x_22373,y_22393,xmax,ymax),intensity),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_22373,y_22393));
var x1_22395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329_22394,(0),null);
var y1_22396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329_22394,(1),null);
bru_3.draw.draw_vector(x_22373,y_22393,x1_22395,y1_22396);

var G__22397 = cljs.core.next(seq__22311_22387__$1);
var G__22398 = null;
var G__22399 = (0);
var G__22400 = (0);
seq__22311_22374 = G__22397;
chunk__22313_22375 = G__22398;
count__22314_22376 = G__22399;
i__22315_22377 = G__22400;
continue;
}
} else {
}
}
break;
}

var G__22401 = cljs.core.next(seq__22310_22367__$1);
var G__22402 = null;
var G__22403 = (0);
var G__22404 = (0);
seq__22310_22330 = G__22401;
chunk__22317_22331 = G__22402;
count__22318_22332 = G__22403;
i__22319_22333 = G__22404;
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
var wings = cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state);
var flat_wings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,wings);
var mid = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));
var outs = bru_3.draw.outliers(flat_wings,mid);
var xoff = ((quil.core.width() / (2)) - ((cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right.cljs$core$IFn$_invoke$arity$1(outs)) + cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$left.cljs$core$IFn$_invoke$arity$1(outs))) / (2)));
var yoff = ((quil.core.height() - cljs.core.constant$keyword$bottom_DASH_margin.cljs$core$IFn$_invoke$arity$1((function (){var G__22433 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22433) : cljs.core.deref.call(null,G__22433));
})())) - cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$bottom.cljs$core$IFn$_invoke$arity$1(outs)));
quil.core.background.cljs$core$IFn$_invoke$arity$1((225));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke.cljs$core$IFn$_invoke$arity$1((170));

quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(xoff,yoff);

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_bones.cljs$core$IFn$_invoke$arity$1((function (){var G__22434 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22434) : cljs.core.deref.call(null,G__22434));
})()))){
var seq__22435_22461 = cljs.core.seq(bones);
var chunk__22436_22462 = null;
var count__22437_22463 = (0);
var i__22438_22464 = (0);
while(true){
if((i__22438_22464 < count__22437_22463)){
var bone_22465 = chunk__22436_22462.cljs$core$IIndexed$_nth$arity$2(null,i__22438_22464);
bru_3.draw.draw_bone(bone_22465);

var G__22466 = seq__22435_22461;
var G__22467 = chunk__22436_22462;
var G__22468 = count__22437_22463;
var G__22469 = (i__22438_22464 + (1));
seq__22435_22461 = G__22466;
chunk__22436_22462 = G__22467;
count__22437_22463 = G__22468;
i__22438_22464 = G__22469;
continue;
} else {
var temp__4422__auto___22470 = cljs.core.seq(seq__22435_22461);
if(temp__4422__auto___22470){
var seq__22435_22471__$1 = temp__4422__auto___22470;
if(cljs.core.chunked_seq_QMARK_(seq__22435_22471__$1)){
var c__13408__auto___22472 = cljs.core.chunk_first(seq__22435_22471__$1);
var G__22473 = cljs.core.chunk_rest(seq__22435_22471__$1);
var G__22474 = c__13408__auto___22472;
var G__22475 = cljs.core.count(c__13408__auto___22472);
var G__22476 = (0);
seq__22435_22461 = G__22473;
chunk__22436_22462 = G__22474;
count__22437_22463 = G__22475;
i__22438_22464 = G__22476;
continue;
} else {
var bone_22477 = cljs.core.first(seq__22435_22471__$1);
bru_3.draw.draw_bone(bone_22477);

var G__22478 = cljs.core.next(seq__22435_22471__$1);
var G__22479 = null;
var G__22480 = (0);
var G__22481 = (0);
seq__22435_22461 = G__22478;
chunk__22436_22462 = G__22479;
count__22437_22463 = G__22480;
i__22438_22464 = G__22481;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_frames.cljs$core$IFn$_invoke$arity$1((function (){var G__22439 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22439) : cljs.core.deref.call(null,G__22439));
})()))){
var seq__22440_22482 = cljs.core.seq(cljs.core.constant$keyword$frames.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22441_22483 = null;
var count__22442_22484 = (0);
var i__22443_22485 = (0);
while(true){
if((i__22443_22485 < count__22442_22484)){
var frame_22486 = chunk__22441_22483.cljs$core$IIndexed$_nth$arity$2(null,i__22443_22485);
bru_3.draw.draw_frame(frame_22486);

var G__22487 = seq__22440_22482;
var G__22488 = chunk__22441_22483;
var G__22489 = count__22442_22484;
var G__22490 = (i__22443_22485 + (1));
seq__22440_22482 = G__22487;
chunk__22441_22483 = G__22488;
count__22442_22484 = G__22489;
i__22443_22485 = G__22490;
continue;
} else {
var temp__4422__auto___22491 = cljs.core.seq(seq__22440_22482);
if(temp__4422__auto___22491){
var seq__22440_22492__$1 = temp__4422__auto___22491;
if(cljs.core.chunked_seq_QMARK_(seq__22440_22492__$1)){
var c__13408__auto___22493 = cljs.core.chunk_first(seq__22440_22492__$1);
var G__22494 = cljs.core.chunk_rest(seq__22440_22492__$1);
var G__22495 = c__13408__auto___22493;
var G__22496 = cljs.core.count(c__13408__auto___22493);
var G__22497 = (0);
seq__22440_22482 = G__22494;
chunk__22441_22483 = G__22495;
count__22442_22484 = G__22496;
i__22443_22485 = G__22497;
continue;
} else {
var frame_22498 = cljs.core.first(seq__22440_22492__$1);
bru_3.draw.draw_frame(frame_22498);

var G__22499 = cljs.core.next(seq__22440_22492__$1);
var G__22500 = null;
var G__22501 = (0);
var G__22502 = (0);
seq__22440_22482 = G__22499;
chunk__22441_22483 = G__22500;
count__22442_22484 = G__22501;
i__22443_22485 = G__22502;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_wings.cljs$core$IFn$_invoke$arity$1((function (){var G__22444 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22444) : cljs.core.deref.call(null,G__22444));
})()))){
if(cljs.core.truth_(cljs.core.constant$keyword$outline_DASH_only.cljs$core$IFn$_invoke$arity$1((function (){var G__22445 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22445) : cljs.core.deref.call(null,G__22445));
})()))){
quil.core.no_fill();
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$two_DASH_phase_DASH_shapes.cljs$core$IFn$_invoke$arity$1((function (){var G__22446 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22446) : cljs.core.deref.call(null,G__22446));
})()))){
quil.core.push_style();

quil.core.no_stroke();

var seq__22447_22503 = cljs.core.seq(wings);
var chunk__22448_22504 = null;
var count__22449_22505 = (0);
var i__22450_22506 = (0);
while(true){
if((i__22450_22506 < count__22449_22505)){
var verts_22507 = chunk__22448_22504.cljs$core$IIndexed$_nth$arity$2(null,i__22450_22506);
bru_3.draw.draw_verts(verts_22507);

var G__22508 = seq__22447_22503;
var G__22509 = chunk__22448_22504;
var G__22510 = count__22449_22505;
var G__22511 = (i__22450_22506 + (1));
seq__22447_22503 = G__22508;
chunk__22448_22504 = G__22509;
count__22449_22505 = G__22510;
i__22450_22506 = G__22511;
continue;
} else {
var temp__4422__auto___22512 = cljs.core.seq(seq__22447_22503);
if(temp__4422__auto___22512){
var seq__22447_22513__$1 = temp__4422__auto___22512;
if(cljs.core.chunked_seq_QMARK_(seq__22447_22513__$1)){
var c__13408__auto___22514 = cljs.core.chunk_first(seq__22447_22513__$1);
var G__22515 = cljs.core.chunk_rest(seq__22447_22513__$1);
var G__22516 = c__13408__auto___22514;
var G__22517 = cljs.core.count(c__13408__auto___22514);
var G__22518 = (0);
seq__22447_22503 = G__22515;
chunk__22448_22504 = G__22516;
count__22449_22505 = G__22517;
i__22450_22506 = G__22518;
continue;
} else {
var verts_22519 = cljs.core.first(seq__22447_22513__$1);
bru_3.draw.draw_verts(verts_22519);

var G__22520 = cljs.core.next(seq__22447_22513__$1);
var G__22521 = null;
var G__22522 = (0);
var G__22523 = (0);
seq__22447_22503 = G__22520;
chunk__22448_22504 = G__22521;
count__22449_22505 = G__22522;
i__22450_22506 = G__22523;
continue;
}
} else {
}
}
break;
}

quil.core.pop_style();

quil.core.no_fill();

var seq__22451_22524 = cljs.core.seq(wings);
var chunk__22452_22525 = null;
var count__22453_22526 = (0);
var i__22454_22527 = (0);
while(true){
if((i__22454_22527 < count__22453_22526)){
var verts_22528 = chunk__22452_22525.cljs$core$IIndexed$_nth$arity$2(null,i__22454_22527);
bru_3.draw.draw_verts(verts_22528);

var G__22529 = seq__22451_22524;
var G__22530 = chunk__22452_22525;
var G__22531 = count__22453_22526;
var G__22532 = (i__22454_22527 + (1));
seq__22451_22524 = G__22529;
chunk__22452_22525 = G__22530;
count__22453_22526 = G__22531;
i__22454_22527 = G__22532;
continue;
} else {
var temp__4422__auto___22533 = cljs.core.seq(seq__22451_22524);
if(temp__4422__auto___22533){
var seq__22451_22534__$1 = temp__4422__auto___22533;
if(cljs.core.chunked_seq_QMARK_(seq__22451_22534__$1)){
var c__13408__auto___22535 = cljs.core.chunk_first(seq__22451_22534__$1);
var G__22536 = cljs.core.chunk_rest(seq__22451_22534__$1);
var G__22537 = c__13408__auto___22535;
var G__22538 = cljs.core.count(c__13408__auto___22535);
var G__22539 = (0);
seq__22451_22524 = G__22536;
chunk__22452_22525 = G__22537;
count__22453_22526 = G__22538;
i__22454_22527 = G__22539;
continue;
} else {
var verts_22540 = cljs.core.first(seq__22451_22534__$1);
bru_3.draw.draw_verts(verts_22540);

var G__22541 = cljs.core.next(seq__22451_22534__$1);
var G__22542 = null;
var G__22543 = (0);
var G__22544 = (0);
seq__22451_22524 = G__22541;
chunk__22452_22525 = G__22542;
count__22453_22526 = G__22543;
i__22454_22527 = G__22544;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22455_22545 = cljs.core.seq(cljs.core.constant$keyword$wings.cljs$core$IFn$_invoke$arity$1(state));
var chunk__22456_22546 = null;
var count__22457_22547 = (0);
var i__22458_22548 = (0);
while(true){
if((i__22458_22548 < count__22457_22547)){
var verts_22549 = chunk__22456_22546.cljs$core$IIndexed$_nth$arity$2(null,i__22458_22548);
bru_3.draw.draw_verts(verts_22549);

var G__22550 = seq__22455_22545;
var G__22551 = chunk__22456_22546;
var G__22552 = count__22457_22547;
var G__22553 = (i__22458_22548 + (1));
seq__22455_22545 = G__22550;
chunk__22456_22546 = G__22551;
count__22457_22547 = G__22552;
i__22458_22548 = G__22553;
continue;
} else {
var temp__4422__auto___22554 = cljs.core.seq(seq__22455_22545);
if(temp__4422__auto___22554){
var seq__22455_22555__$1 = temp__4422__auto___22554;
if(cljs.core.chunked_seq_QMARK_(seq__22455_22555__$1)){
var c__13408__auto___22556 = cljs.core.chunk_first(seq__22455_22555__$1);
var G__22557 = cljs.core.chunk_rest(seq__22455_22555__$1);
var G__22558 = c__13408__auto___22556;
var G__22559 = cljs.core.count(c__13408__auto___22556);
var G__22560 = (0);
seq__22455_22545 = G__22557;
chunk__22456_22546 = G__22558;
count__22457_22547 = G__22559;
i__22458_22548 = G__22560;
continue;
} else {
var verts_22561 = cljs.core.first(seq__22455_22555__$1);
bru_3.draw.draw_verts(verts_22561);

var G__22562 = cljs.core.next(seq__22455_22555__$1);
var G__22563 = null;
var G__22564 = (0);
var G__22565 = (0);
seq__22455_22545 = G__22562;
chunk__22456_22546 = G__22563;
count__22457_22547 = G__22564;
i__22458_22548 = G__22565;
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

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_distortion.cljs$core$IFn$_invoke$arity$1((function (){var G__22459 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22459) : cljs.core.deref.call(null,G__22459));
})()))){
bru_3.draw.draw_distortion(cljs.core.constant$keyword$distortion.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$draw_DASH_fault.cljs$core$IFn$_invoke$arity$1((function (){var G__22460 = bru_3.draw.config;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22460) : cljs.core.deref.call(null,G__22460));
})()))){
bru_3.draw.draw_fault(cljs.core.constant$keyword$fault.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

return quil.core.pop_matrix();
});
bru_3.draw.key_pressed = (function bru_3$draw$key_pressed(state,key_info){
var G__22567 = (((cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(key_info).fqn:null);
switch (G__22567) {
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
bru_3.draw.mouse_pressed = (function bru_3$draw$mouse_pressed(state,button_info){
return bru_3.draw.new_state();
});
