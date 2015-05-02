// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.common.math.core');
goog.require('cljs.core');
thi.ng.common.math.core.PI = Math.PI;
thi.ng.common.math.core.TWO_PI = (thi.ng.common.math.core.PI * 2.0);
thi.ng.common.math.core.HALF_PI = (thi.ng.common.math.core.PI / 2.0);
thi.ng.common.math.core.THIRD_PI = (thi.ng.common.math.core.PI / 3.0);
thi.ng.common.math.core.QUARTER_PI = (thi.ng.common.math.core.PI / 4.0);
thi.ng.common.math.core.SIXTH_PI = (thi.ng.common.math.core.PI / 6.0);
thi.ng.common.math.core.THREE_HALVES_PI = (thi.ng.common.math.core.PI * 1.5);
thi.ng.common.math.core.MAX = 1.7976931348623157E308;
thi.ng.common.math.core.MIN = 4.9E-324;
thi.ng.common.math.core.SQRT2 = (function (){var G__23887 = (2);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23887) : Math.sqrt.call(null,G__23887));
})();
thi.ng.common.math.core.SQRT3 = (function (){var G__23888 = (3);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23888) : Math.sqrt.call(null,G__23888));
})();
thi.ng.common.math.core.PHI = (((function (){var G__23889 = 5.0;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23889) : Math.sqrt.call(null,G__23889));
})() + (1)) / (2));
thi.ng.common.math.core.THIRD = (1.0 / 3.0);
thi.ng.common.math.core.LOG2 = (function (){var G__23890 = 2.0;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23890) : Math.log.call(null,G__23890));
})();
thi.ng.common.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.common.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.common.math.core.DEG = (180.0 / thi.ng.common.math.core.PI);
thi.ng.common.math.core.RAD = (thi.ng.common.math.core.PI / 180.0);
thi.ng.common.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.common.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.common.math.core.abs = Math.abs;
thi.ng.common.math.core.abs_diff = (function thi$ng$common$math$core$abs_diff(x,y){
var G__23892 = (x - y);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23892) : thi.ng.common.math.core.abs.call(null,G__23892));
});

thi.ng.common.math.core.PDeltaEquals = (function (){var obj23894 = {};
return obj23894;
})();

thi.ng.common.math.core.delta_EQ_ = (function thi$ng$common$math$core$delta_EQ_(){
var G__23896 = arguments.length;
switch (G__23896) {
case 2:
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((function (){var and__12595__auto__ = a;
if(and__12595__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2;
} else {
return and__12595__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__13243__auto__ = (((a == null))?null:a);
return (function (){var or__12607__auto__ = (thi.ng.common.math.core.delta_EQ_[(function (){var G__23898 = x__13243__auto__;
return goog.typeOf(G__23898);
})()]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol("PDeltaEquals.delta=",a);
}
}
})().call(null,a,b);
}
});

thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((function (){var and__12595__auto__ = a;
if(and__12595__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3;
} else {
return and__12595__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__13243__auto__ = (((a == null))?null:a);
return (function (){var or__12607__auto__ = (thi.ng.common.math.core.delta_EQ_[(function (){var G__23900 = x__13243__auto__;
return goog.typeOf(G__23900);
})()]);
if(or__12607__auto__){
return or__12607__auto__;
} else {
var or__12607__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__12607__auto____$1){
return or__12607__auto____$1;
} else {
throw cljs.core.missing_protocol("PDeltaEquals.delta=",a);
}
}
})().call(null,a,b,eps);
}
});

thi.ng.common.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;

(thi.ng.common.math.core.PDeltaEquals["number"] = true);

(thi.ng.common.math.core.delta_EQ_["number"] = (function() {
var G__23906 = null;
var G__23906__2 = (function (a,b){
return (typeof b === 'number') && (((function (){var G__23903 = (a - b);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23903) : thi.ng.common.math.core.abs.call(null,G__23903));
})() <= thi.ng.common.math.core._STAR_eps_STAR_));
});
var G__23906__3 = (function (a,b,eps){
return (typeof b === 'number') && (((function (){var G__23905 = (a - b);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23905) : thi.ng.common.math.core.abs.call(null,G__23905));
})() <= eps));
});
G__23906 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__23906__2.call(this,a,b);
case 3:
return G__23906__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23906.cljs$core$IFn$_invoke$arity$2 = G__23906__2;
G__23906.cljs$core$IFn$_invoke$arity$3 = G__23906__3;
return G__23906;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23907 = cljs.core.next(a__$2);
var G__23908 = cljs.core.next(b__$1);
a__$2 = G__23907;
b__$1 = G__23908;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__23909 = cljs.core.next(a__$2);
var G__23910 = cljs.core.next(b__$1);
a__$2 = G__23909;
b__$1 = G__23910;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23911 = cljs.core.next(a__$2);
var G__23912 = cljs.core.next(b__$1);
a__$2 = G__23911;
b__$1 = G__23912;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__23913 = cljs.core.next(a__$2);
var G__23914 = cljs.core.next(b__$1);
a__$2 = G__23913;
b__$1 = G__23914;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23915 = cljs.core.next(a__$2);
var G__23916 = cljs.core.next(b__$1);
a__$2 = G__23915;
b__$1 = G__23916;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__23917 = cljs.core.next(a__$2);
var G__23918 = cljs.core.next(b__$1);
a__$2 = G__23917;
b__$1 = G__23918;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23919 = cljs.core.next(a__$2);
var G__23920 = cljs.core.next(b__$1);
a__$2 = G__23919;
b__$1 = G__23920;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12595__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12595__auto__){
var and__12595__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12595__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__23921 = cljs.core.next(a__$2);
var G__23922 = cljs.core.next(b__$1);
a__$2 = G__23921;
b__$1 = G__23922;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__12595__auto____$1;
}
} else {
return and__12595__auto__;
}
});

(thi.ng.common.math.core.PDeltaEquals["null"] = true);

(thi.ng.common.math.core.delta_EQ_["null"] = (function() {
var G__23923 = null;
var G__23923__2 = (function (_,b){
return (b == null);
});
var G__23923__3 = (function (_,b,___$1){
return (b == null);
});
G__23923 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__23923__2.call(this,_,b);
case 3:
return G__23923__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23923.cljs$core$IFn$_invoke$arity$2 = G__23923__2;
G__23923.cljs$core$IFn$_invoke$arity$3 = G__23923__3;
return G__23923;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.common.math.core.ensure_even = (function thi$ng$common$math$core$ensure_even(x){
if(cljs.core.even_QMARK_(x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.common.math.core.ensure_odd = (function thi$ng$common$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_(x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.common.math.core.signum = (function thi$ng$common$math$core$signum(){
var G__23925 = arguments.length;
switch (G__23925) {
case 1:
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
});

thi.ng.common.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.common.math.core.signum.cljs$lang$maxFixedArity = 2;
thi.ng.common.math.core.clamp = (function thi$ng$common$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
thi.ng.common.math.core.clamp_normalized = (function thi$ng$common$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Maps x from one interval into another. Intervals can be defined as vectors.
 */
thi.ng.common.math.core.map_interval = (function thi$ng$common$math$core$map_interval(){
var G__23928 = arguments.length;
switch (G__23928) {
case 3:
return thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__23929,p__23930){
var vec__23931 = p__23929;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931,(1),null);
var vec__23932 = p__23930;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(1),null);
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$lang$maxFixedArity = 5;
thi.ng.common.math.core.map_interval_clamped = (function thi$ng$common$math$core$map_interval_clamped(){
var G__23935 = arguments.length;
switch (G__23935) {
case 3:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__23936,p__23937){
var vec__23938 = p__23936;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(1),null);
var vec__23939 = p__23937;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23939,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23939,(1),null);
return thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
}
}
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__23940,p__23941,p__23942){
var vec__23943 = p__23940;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23943,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23943,(1),null);
var vec__23944 = p__23941;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(1),null);
var vec__23945 = p__23942;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23945,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23945,(1),null);
return thi.ng.common.math.core.clamp(thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.common.math.core.clamp(thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.common.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;
/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.common.math.core.in_range_QMARK_ = (function thi$ng$common$math$core$in_range_QMARK_(){
var G__23948 = arguments.length;
switch (G__23948) {
case 2:
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23949,x){
var vec__23950 = p__23949;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23950,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23950,(1),null);
return ((x >= min)) && ((x <= max));
});

thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
return ((x >= min)) && ((x <= max));
});

thi.ng.common.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;
thi.ng.common.math.core.wrap_range = (function thi$ng$common$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem(x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of values in the closed interval [0.0, 1.0] at
 * resolution 1/x.
 */
thi.ng.common.math.core.norm_range = (function thi$ng$common$math$core$norm_range(x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23952_SHARP_){
return (p1__23952_SHARP_ / x);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x + (1))));
});
thi.ng.common.math.core.mix = (function thi$ng$common$math$core$mix(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.common.math.core.step = (function thi$ng$common$math$core$step(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.common.math.core.smoothstep = (function thi$ng$common$math$core$smoothstep(e0,e1,x){
var t = thi.ng.common.math.core.clamp(((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.common.math.core.floor = (function thi$ng$common$math$core$floor(x){
var G__23954 = x;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__23954) : Math.floor.call(null,G__23954));
});
thi.ng.common.math.core.ceil = (function thi$ng$common$math$core$ceil(x){
var G__23956 = x;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__23956) : Math.ceil.call(null,G__23956));
});
thi.ng.common.math.core.roundto = (function thi$ng$common$math$core$roundto(x,prec){
return (thi.ng.common.math.core.floor(((x / prec) + 0.5)) * prec);
});
thi.ng.common.math.core.ceil_pow2 = (function thi$ng$common$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__23957 = (pow2 * (2));
pow2 = G__23957;
continue;
}
break;
}
});
thi.ng.common.math.core.floor_pow2 = (function thi$ng$common$math$core$floor_pow2(x){
var G__23961 = (2);
var G__23962 = (((function (){var G__23963 = x;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23963) : Math.log.call(null,G__23963));
})() / thi.ng.common.math.core.LOG2) | (0));
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23961,G__23962) : Math.pow.call(null,G__23961,G__23962));
});
thi.ng.common.math.core.bit_count = (function thi$ng$common$math$core$bit_count(x){
return thi.ng.common.math.core.ceil(((function (){var G__23965 = x;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23965) : Math.log.call(null,G__23965));
})() / thi.ng.common.math.core.LOG2));
});
thi.ng.common.math.core.trunc = (function thi$ng$common$math$core$trunc(x){
if((x < (0))){
return thi.ng.common.math.core.ceil(x);
} else {
return thi.ng.common.math.core.floor(x);
}
});
thi.ng.common.math.core.fract = (function thi$ng$common$math$core$fract(x){
return (x - (function (){var G__23967 = x;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__23967) : Math.floor.call(null,G__23967));
})());
});
thi.ng.common.math.core.fdim = (function thi$ng$common$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.common.math.core.radians = (function thi$ng$common$math$core$radians(x){
return (x * thi.ng.common.math.core.RAD);
});
thi.ng.common.math.core.degrees = (function thi$ng$common$math$core$degrees(x){
return (x * thi.ng.common.math.core.DEG);
});
thi.ng.common.math.core.maxmag = (function thi$ng$common$math$core$maxmag(x,y){
var ax = (function (){var G__23970 = x;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23970) : thi.ng.common.math.core.abs.call(null,G__23970));
})();
var ay = (function (){var G__23971 = y;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23971) : thi.ng.common.math.core.abs.call(null,G__23971));
})();
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.common.math.core.minmag = (function thi$ng$common$math$core$minmag(x,y){
var ax = (function (){var G__23974 = x;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23974) : thi.ng.common.math.core.abs.call(null,G__23974));
})();
var ay = (function (){var G__23975 = y;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23975) : thi.ng.common.math.core.abs.call(null,G__23975));
})();
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.common.math.core.ldexp = (function thi$ng$common$math$core$ldexp(x,k){
return (x * (function (){var G__23978 = (2);
var G__23979 = (k | (0));
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23978,G__23979) : Math.pow.call(null,G__23978,G__23979));
})());
});
thi.ng.common.math.core.remquo = (function thi$ng$common$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.common.math.core.fract(k);
var k__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,0.5))?((cljs.core.even_QMARK_((k | (0))))?(k | (0)):thi.ng.common.math.core.ceil(k)):(((f < 0.5))?thi.ng.common.math.core.floor(k):thi.ng.common.math.core.ceil(k)
));
return (x - (k__$1 * y));
});
thi.ng.common.math.core.hypot = (function thi$ng$common$math$core$hypot(x,y){
var G__23981 = ((x * x) + (y * y));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23981) : Math.sqrt.call(null,G__23981));
});
thi.ng.common.math.core.rootn = (function thi$ng$common$math$core$rootn(x,y){
var G__23984 = x;
var G__23985 = (1.0 / y);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23984,G__23985) : Math.pow.call(null,G__23984,G__23985));
});
thi.ng.common.math.core.rsqrt = (function thi$ng$common$math$core$rsqrt(x){
var r = (function (){var G__23987 = x;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23987) : Math.sqrt.call(null,G__23987));
})();
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.common.math.core.impulse = (function thi$ng$common$math$core$impulse(k,t){
var h = (k * t);
return (h * (function (){var G__23989 = (1.0 - h);
return (Math.exp.cljs$core$IFn$_invoke$arity$1 ? Math.exp.cljs$core$IFn$_invoke$arity$1(G__23989) : Math.exp.call(null,G__23989));
})());
});
thi.ng.common.math.core.random = (function thi$ng$common$math$core$random(){
var G__23991 = arguments.length;
switch (G__23991) {
case 0:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return (thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.common.math.core._STAR_rnd_STAR_.call(null));
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return ((function (){return (thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.common.math.core._STAR_rnd_STAR_.call(null));
})() * max);
});

thi.ng.common.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * (function (){return (thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.common.math.core._STAR_rnd_STAR_.call(null));
})()) + min);
});

thi.ng.common.math.core.random.cljs$lang$maxFixedArity = 2;
thi.ng.common.math.core.randnorm = (function thi$ng$common$math$core$randnorm(){
return (((function (){return (thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.common.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.common.math.core._STAR_rnd_STAR_.call(null));
})() * 2.0) - (1));
});
thi.ng.common.math.core.percentile_index = (function thi$ng$common$math$core$percentile_index(n,num){
return ((((n < (100)))?((function (){var G__23994 = (((n / 100.0) * num) + 0.5);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__23994) : Math.round.call(null,G__23994));
})() | (0)):num) - (1));
});
thi.ng.common.math.core.percentile = (function thi$ng$common$math$core$percentile(n,sorted){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,thi.ng.common.math.core.percentile_index(n,cljs.core.count(sorted)));
});
thi.ng.common.math.core.quartile_index = (function thi$ng$common$math$core$quartile_index(n,num){
return thi.ng.common.math.core.percentile_index((n * (25)),num);
});
thi.ng.common.math.core.quartile_range = (function thi$ng$common$math$core$quartile_range(n,num){
var a = thi.ng.common.math.core.quartile_index((n - (1)),num);
var b = thi.ng.common.math.core.quartile_index(n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.common.math.core.quartile = (function thi$ng$common$math$core$quartile(n,sorted){
var vec__23996 = thi.ng.common.math.core.quartile_range(n,cljs.core.count(sorted));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23996,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23996,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((b - a),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a,sorted));
});
thi.ng.common.math.core.normdist_weights = (function thi$ng$common$math$core$normdist_weights(){
var G__23999 = arguments.length;
switch (G__23999) {
case 1:
return thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2(n,1.0);
});

thi.ng.common.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,thi.ng.common.math.core.random);
var s = (scale / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,ws));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ws,s){
return (function (p1__23997_SHARP_){
return (s * p1__23997_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.common.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;
