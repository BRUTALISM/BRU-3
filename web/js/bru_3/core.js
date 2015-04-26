// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.core');
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
bru_3.core.config = (function (){var G__14817 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$draw_DASH_distortion,cljs.core.constant$keyword$frame_DASH_bone_DASH_randomization,cljs.core.constant$keyword$two_DASH_phase_DASH_shapes,cljs.core.constant$keyword$outline_DASH_only,cljs.core.constant$keyword$draw_DASH_wings,cljs.core.constant$keyword$draw_DASH_bones,cljs.core.constant$keyword$fault_DASH_config,cljs.core.constant$keyword$max_DASH_angle,cljs.core.constant$keyword$distortion_DASH_yresolution,cljs.core.constant$keyword$distance_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_field_DASH_step,cljs.core.constant$keyword$draw_DASH_frames,cljs.core.constant$keyword$length_DASH_bounds,cljs.core.constant$keyword$distortion_DASH_xresolution,cljs.core.constant$keyword$bone_DASH_count,cljs.core.constant$keyword$draw_DASH_fault,cljs.core.constant$keyword$distortion_DASH_intensity,cljs.core.constant$keyword$dot_DASH_size,cljs.core.constant$keyword$wings_DASH_conf],[false,0.3,false,true,true,false,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$count,(10),cljs.core.constant$keyword$y_DASH_rand_DASH_percentage,