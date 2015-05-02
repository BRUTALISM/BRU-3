// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('bru_3.math');
goog.require('cljs.core');
bru_3.math.PI = Math.PI;
bru_3.math.sin = (function bru_3$math$sin(x){
return Math.sin(x);
});
bru_3.math.cos = (function bru_3$math$cos(x){
return Math.cos(x);
});
bru_3.math.to_radians = (function bru_3$math$to_radians(x){
return ((x * bru_3.math.PI) / (180));
});
bru_3.math.signum = (function bru_3$math$signum(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))){
return (0);
} else {
return (x / Math.abs(x));
}
});
bru_3.math.floor = (function bru_3$math$floor(x){
return Math.floor(x);
});
bru_3.math.ceil = (function bru_3$math$ceil(x){
return Math.ceil(x);
});
