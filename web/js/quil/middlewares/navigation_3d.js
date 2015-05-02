// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.navigation_3d');
goog.require('cljs.core');
goog.require('quil.core');
/**
 * Default position configuration. Check default configuration in
 * 'camera' function.
 */
quil.middlewares.navigation_3d.default_position = (function quil$middlewares$navigation_3d$default_position(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0),((quil.core.height() / 2.0) / quil.core.tan(((quil.core.PI * 60.0) / 360.0)))], null),cljs.core.constant$keyword$straight,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),cljs.core.constant$keyword$up,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null);
});
/**
 * Rotates vector v by angle with axis.
 * Formula is taken from wiki:
 * http://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
 */
quil.middlewares.navigation_3d.rotate_by_axis_and_angle = (function quil$middlewares$navigation_3d$rotate_by_axis_and_angle(v,axis,angle){
var vec__31858 = axis;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31858,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31858,(1),null);
var a_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31858,(2),null);
var vec__31859 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31859,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31859,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31859,(2),null);
var cs = quil.core.cos(angle);
var _cs = ((1) - cs);
var sn = quil.core.sin(angle);
var a = (cs + ((a_x * a_x) * _cs));
var b = (((a_x * a_y) * _cs) - (a_z * sn));
var c = (((a_x * a_z) * _cs) + (a_y * sn));
var d = (((a_x * a_y) * _cs) + (a_z * sn));
var e = (cs + ((a_y * a_y) * _cs));
var f = (((a_y * a_z) * _cs) - (a_x * sn));
var g = (((a_x * a_z) * _cs) - (a_y * sn));
var h = (((a_y * a_z) * _cs) + (a_x * sn));
var i = (cs + ((a_z * a_z) * _cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((a * x) + (b * y)) + (c * z)),(((d * x) + (e * y)) + (f * z)),(((g * x) + (h * y)) + (i * z))], null);
});
/**
 * Rotates nav-3d configuration left-right. angle positive - rotate right,
 * negative - left.
 */
quil.middlewares.navigation_3d.rotate_lr = (function quil$middlewares$navigation_3d$rotate_lr(nav_3d,angle){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$straight], null),quil.middlewares.navigation_3d.rotate_by_axis_and_angle,cljs.core.constant$keyword$up.cljs$core$IFn$_invoke$arity$1(nav_3d),angle);
});
/**
 * Vector cross-product: http://en.wikipedia.org/wiki/Cross_product
 */
quil.middlewares.navigation_3d.cross_product = (function quil$middlewares$navigation_3d$cross_product(p__31860,p__31861){
var vec__31864 = p__31860;
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(1),null);
var u3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(2),null);
var vec__31865 = p__31861;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31865,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31865,(1),null);
var v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31865,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((u2 * v3) - (u3 * v2)),((u3 * v1) - (u1 * v3)),((u1 * v2) - (u2 * v1))], null);
});
/**
 * Multiply vector v by scalar mult.
 */
quil.middlewares.navigation_3d.v_mult = (function quil$middlewares$navigation_3d$v_mult(v,mult){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31866_SHARP_){
return (p1__31866_SHARP_ * mult);
}),v);
});
/**
 * Sum of 2 vectors.
 */
quil.middlewares.navigation_3d.v_plus = (function quil$middlewares$navigation_3d$v_plus(v1,v2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
/**
 * Returns vector opposite to vector v.
 */
quil.middlewares.navigation_3d.v_opposite = (function quil$middlewares$navigation_3d$v_opposite(v){
return quil.middlewares.navigation_3d.v_mult(v,(-1));
});
/**
 * Normalize vector, returning vector
 * which has same direction but with norm equals to 1.
 */
quil.middlewares.navigation_3d.v_normalize = (function quil$middlewares$navigation_3d$v_normalize(v){
var norm = quil.core.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(quil.core.sq,v)));
return quil.middlewares.navigation_3d.v_mult(v,((1) / norm));
});
/**
 * Rotates nav-3d configuration up-down.
 */
quil.middlewares.navigation_3d.rotate_ud = (function quil$middlewares$navigation_3d$rotate_ud(nav_3d,angle){
var axis = quil.middlewares.navigation_3d.cross_product(cljs.core.constant$keyword$straight.cljs$core$IFn$_invoke$arity$1(nav_3d),cljs.core.constant$keyword$up.cljs$core$IFn$_invoke$arity$1(nav_3d));
var rotate = ((function (axis){
return (function (p1__31867_SHARP_){
return quil.middlewares.navigation_3d.rotate_by_axis_and_angle(p1__31867_SHARP_,axis,angle);
});})(axis))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$straight], null),rotate),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$up], null),rotate);
});
/**
 * Mouse handler function which rotates nav-3d configuration.
 * It uses mouse from event object and pixels-in-360 to calculate
 * angles to rotate.
 */
quil.middlewares.navigation_3d.rotate = (function quil$middlewares$navigation_3d$rotate(state,event,pixels_in_360){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),cljs.core.constant$keyword$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.array_seq([cljs.core.constant$keyword$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event)], 0))){
return state;
} else {
var dx = (cljs.core.constant$keyword$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(event));
var dy = (cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.constant$keyword$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event));
var angle_lr = quil.core.map_range(dx,(0),pixels_in_360,(0),quil.core.TWO_PI);
var angle_ud = quil.core.map_range(dy,(0),pixels_in_360,(0),quil.core.TWO_PI);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$navigation_DASH_3d], null),((function (dx,dy,angle_lr,angle_ud){
return (function (p1__31868_SHARP_){
return quil.middlewares.navigation_3d.rotate_ud(quil.middlewares.navigation_3d.rotate_lr(p1__31868_SHARP_,angle_lr),angle_ud);
});})(dx,dy,angle_lr,angle_ud))
);
}
});
quil.middlewares.navigation_3d.space = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(" ");
/**
 * Keyboard handler function which moves nav-3d configuration.
 * It uses keyboard key from event object to determing in which
 * direction to move.
 */
quil.middlewares.navigation_3d.move = (function quil$middlewares$navigation_3d$move(state,event,step_size){
var map__31886 = cljs.core.constant$keyword$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(state);
var map__31886__$1 = ((cljs.core.seq_QMARK_(map__31886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31886):map__31886);
var up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31886__$1,cljs.core.constant$keyword$up);
var straight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31886__$1,cljs.core.constant$keyword$straight);
var temp__4420__auto__ = (function (){var pred__31887 = cljs.core._EQ_;
var expr__31888 = cljs.core.constant$keyword$key.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((function (){var G__31890 = cljs.core.constant$keyword$w;
var G__31891 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31890,G__31891) : pred__31887.call(null,G__31890,G__31891));
})())){
return straight;
} else {
if(cljs.core.truth_((function (){var G__31892 = cljs.core.constant$keyword$s;
var G__31893 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31892,G__31893) : pred__31887.call(null,G__31892,G__31893));
})())){
return quil.middlewares.navigation_3d.v_opposite(straight);
} else {
if(cljs.core.truth_((function (){var G__31894 = quil.middlewares.navigation_3d.space;
var G__31895 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31894,G__31895) : pred__31887.call(null,G__31894,G__31895));
})())){
return quil.middlewares.navigation_3d.v_opposite(up);
} else {
if(cljs.core.truth_((function (){var G__31896 = cljs.core.constant$keyword$z;
var G__31897 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31896,G__31897) : pred__31887.call(null,G__31896,G__31897));
})())){
return up;
} else {
if(cljs.core.truth_((function (){var G__31898 = cljs.core.constant$keyword$d;
var G__31899 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31898,G__31899) : pred__31887.call(null,G__31898,G__31899));
})())){
return quil.middlewares.navigation_3d.cross_product(straight,up);
} else {
if(cljs.core.truth_((function (){var G__31900 = cljs.core.constant$keyword$a;
var G__31901 = expr__31888;
return (pred__31887.cljs$core$IFn$_invoke$arity$2 ? pred__31887.cljs$core$IFn$_invoke$arity$2(G__31900,G__31901) : pred__31887.call(null,G__31900,G__31901));
})())){
return quil.middlewares.navigation_3d.cross_product(up,straight);
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__4420__auto__)){
var dir = temp__4420__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$navigation_DASH_3d,cljs.core.constant$keyword$position], null),((function (dir,temp__4420__auto__,map__31886,map__31886__$1,up,straight){
return (function (p1__31869_SHARP_){
return quil.middlewares.navigation_3d.v_plus(p1__31869_SHARP_,quil.middlewares.navigation_3d.v_mult(dir,step_size));
});})(dir,temp__4420__auto__,map__31886,map__31886__$1,up,straight))
);
} else {
return state;
}
});
/**
 * Custom 'setup' function which creates initial position
 * configuration and puts it to the state map.
 */
quil.middlewares.navigation_3d.setup_3d_nav = (function quil$middlewares$navigation_3d$setup_3d_nav(user_setup,user_settings){
var initial_state = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([quil.middlewares.navigation_3d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$straight,cljs.core.constant$keyword$up,cljs.core.constant$keyword$position], null))], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$straight], null),quil.middlewares.navigation_3d.v_normalize),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$up], null),quil.middlewares.navigation_3d.v_normalize);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){return (user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$navigation_DASH_3d], null),((function (initial_state){
return (function (p1__31902_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([initial_state,p1__31902_SHARP_], 0));
});})(initial_state))
);
});
/**
 * Enables navigation in 3D space. Similar to how it is done in
 * shooters: WASD navigation, space is go up, z is go down,
 * drag mouse to look around.
 */
quil.middlewares.navigation_3d.navigation_3d = (function quil$middlewares$navigation_3d$navigation_3d(options){
var user_settings = cljs.core.constant$keyword$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(options);
var pixels_in_360 = cljs.core.constant$keyword$pixels_DASH_in_DASH_360.cljs$core$IFn$_invoke$arity$2(user_settings,(1000));
var step_size = cljs.core.constant$keyword$step_DASH_size.cljs$core$IFn$_invoke$arity$2(user_settings,(20));
var rotate_on = cljs.core.constant$keyword$rotate_DASH_on.cljs$core$IFn$_invoke$arity$2(user_settings,cljs.core.constant$keyword$mouse_DASH_dragged);
var draw = cljs.core.constant$keyword$draw.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on){
return (function (state){
return null;
});})(user_settings,pixels_in_360,step_size,rotate_on))
);
var key_pressed = cljs.core.constant$keyword$key_DASH_pressed.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw){
return (function (state,_){
return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw))
);
var rotate_on_fn = (function (){var G__31914 = options;
var G__31915 = ((function (G__31914,user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed){
return (function (state,_){
return state;
});})(G__31914,user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed))
;
return (rotate_on.cljs$core$IFn$_invoke$arity$2 ? rotate_on.cljs$core$IFn$_invoke$arity$2(G__31914,G__31915) : rotate_on.call(null,G__31914,G__31915));
})();
var setup = cljs.core.constant$keyword$setup.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn))
);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$setup,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_3d.setup_3d_nav,setup,user_settings),cljs.core.array_seq([cljs.core.constant$keyword$draw,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state){
var map__31916_31925 = cljs.core.constant$keyword$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(state);
var map__31916_31926__$1 = ((cljs.core.seq_QMARK_(map__31916_31925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31916_31925):map__31916_31925);
var vec__31917_31927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31916_31926__$1,cljs.core.constant$keyword$straight);
var c_x_31928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31917_31927,(0),null);
var c_y_31929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31917_31927,(1),null);
var c_z_31930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31917_31927,(2),null);
var vec__31918_31931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31916_31926__$1,cljs.core.constant$keyword$up);
var u_x_31932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31918_31931,(0),null);
var u_y_31933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31918_31931,(1),null);
var u_z_31934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31918_31931,(2),null);
var vec__31919_31935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31916_31926__$1,cljs.core.constant$keyword$position);
var p_x_31936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31919_31935,(0),null);
var p_y_31937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31919_31935,(1),null);
var p_z_31938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31919_31935,(2),null);
quil.core.camera.cljs$core$IFn$_invoke$arity$9(p_x_31936,p_y_31937,p_z_31938,(p_x_31936 + c_x_31928),(p_y_31937 + c_y_31929),(p_z_31938 + c_z_31930),u_x_31932,u_y_31933,u_z_31934);

var G__31920 = state;
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__31920) : draw.call(null,G__31920));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,cljs.core.constant$keyword$key_DASH_pressed,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
var G__31921 = quil.middlewares.navigation_3d.move(state,event,step_size);
var G__31922 = event;
return (key_pressed.cljs$core$IFn$_invoke$arity$2 ? key_pressed.cljs$core$IFn$_invoke$arity$2(G__31921,G__31922) : key_pressed.call(null,G__31921,G__31922));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,rotate_on,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
var G__31923 = quil.middlewares.navigation_3d.rotate(state,event,pixels_in_360);
var G__31924 = event;
return (rotate_on_fn.cljs$core$IFn$_invoke$arity$2 ? rotate_on_fn.cljs$core$IFn$_invoke$arity$2(G__31923,G__31924) : rotate_on_fn.call(null,G__31923,G__31924));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
], 0));
});
