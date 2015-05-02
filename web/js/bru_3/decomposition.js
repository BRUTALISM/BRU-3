// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.decomposition');
goog.require('cljs.core');

bru_3.decomposition.Decomposition = (function (){var obj18127 = {};
return obj18127;
})();

/**
 * Returns the vertices of a given shape in clockwise order.
 */
bru_3.decomposition.vertices = (function bru_3$decomposition$vertices(this$){
if((function (){var and__12611__auto__ = this$;
if(and__12611__auto__){
return this$.bru_3$decomposition$Decomposition$vertices$arity$1;
} else {
return and__12611__auto__;
}
})()){
return this$.bru_3$decomposition$Decomposition$vertices$arity$1(this$);
} else {
var x__13259__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12623__auto__ = (bru_3.decomposition.vertices[(function (){var G__18131 = x__13259__auto__;
return goog.typeOf(G__18131);
})()]);
if(or__12623__auto__){
return or__12623__auto__;
} else {
var or__12623__auto____$1 = (bru_3.decomposition.vertices["_"]);
if(or__12623__auto____$1){
return or__12623__auto____$1;
} else {
throw cljs.core.missing_protocol("Decomposition.vertices",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the edges of a given shape in clockwise order, as pairs of
 * vertices.
 */
bru_3.decomposition.edges = (function bru_3$decomposition$edges(this$){
if((function (){var and__12611__auto__ = this$;
if(and__12611__auto__){
return this$.bru_3$decomposition$Decomposition$edges$arity$1;
} else {
return and__12611__auto__;
}
})()){
return this$.bru_3$decomposition$Decomposition$edges$arity$1(this$);
} else {
var x__13259__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12623__auto__ = (bru_3.decomposition.edges[(function (){var G__18135 = x__13259__auto__;
return goog.typeOf(G__18135);
})()]);
if(or__12623__auto__){
return or__12623__auto__;
} else {
var or__12623__auto____$1 = (bru_3.decomposition.edges["_"]);
if(or__12623__auto____$1){
return or__12623__auto____$1;
} else {
throw cljs.core.missing_protocol("Decomposition.edges",this$);
}
}
})().call(null,this$);
}
});

