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
thi.ng.common.math.core.SQRT2 = (function (){var G__23881 = (2);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23881) : Math.sqrt.call(null,G__23881));
})();
thi.ng.common.math.core.SQRT3 = (function (){var G__23882 = (3);
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23882) : Math.sqrt.call(null,G__23882));
})();
thi.ng.common.math.core.PHI = (((function (){var G__23883 = 5.0;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23883) : Math.sqrt.call(null,G__23883));
})() + (1)) / (2));
thi.ng.common.math.core.THIRD = (1.0 / 3.0);
thi.ng.common.math.core.LOG2 = (function (){var G__23884 = 2.0;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23884) : Math.log.call(null,G__23884));
})();
thi.ng.common.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.common.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.common.math.core.DEG = (180.0 / thi.ng.common.math.core.PI);
thi.ng.common.math.core.RAD = (thi.ng.common.math.core.PI / 180.0);
thi.ng.common.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.common.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.common.math.core.abs = Math.abs;
thi.ng.common.math.core.abs_diff = (function thi$ng$common$math$core$abs_diff(x,y){
var G__23886 = (x - y);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23886) : thi.ng.common.math.core.abs.call(null,G__23886));
});

thi.ng.common.math.core.PDeltaEquals = (function (){var obj23888 = {};
return obj23888;
})();

thi.ng.common.math.core.delta_EQ_ = (function thi$ng$common$math$core$delta_EQ_(){
var G__23890 = arguments.length;
switch (G__23890) {
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
if((function (){var and__12563__auto__ = a;
if(and__12563__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2;
} else {
return and__12563__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__13211__auto__ = (((a == null))?null:a);
return (function (){var or__12575__auto__ = (thi.ng.common.math.core.delta_EQ_[(function (){var G__23892 = x__13211__auto__;
return goog.typeOf(G__23892);
})()]);
if(or__12575__auto__){
return or__12575__auto__;
} else {
var or__12575__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__12575__auto____$1){
return or__12575__auto____$1;
} else {
throw cljs.core.missing_protocol("PDeltaEquals.delta=",a);
}
}
})().call(null,a,b);
}
});

thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((function (){var and__12563__auto__ = a;
if(and__12563__auto__){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3;
} else {
return and__12563__auto__;
}
})()){
return a.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__13211__auto__ = (((a == null))?null:a);
return (function (){var or__12575__auto__ = (thi.ng.common.math.core.delta_EQ_[(function (){var G__23894 = x__13211__auto__;
return goog.typeOf(G__23894);
})()]);
if(or__12575__auto__){
return or__12575__auto__;
} else {
var or__12575__auto____$1 = (thi.ng.common.math.core.delta_EQ_["_"]);
if(or__12575__auto____$1){
return or__12575__auto____$1;
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
var G__23900 = null;
var G__23900__2 = (function (a,b){
return (typeof b === 'number') && (((function (){var G__23897 = (a - b);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23897) : thi.ng.common.math.core.abs.call(null,G__23897));
})() <= thi.ng.common.math.core._STAR_eps_STAR_));
});
var G__23900__3 = (function (a,b,eps){
return (typeof b === 'number') && (((function (){var G__23899 = (a - b);
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23899) : thi.ng.common.math.core.abs.call(null,G__23899));
})() <= eps));
});
G__23900 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__23900__2.call(this,a,b);
case 3:
return G__23900__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23900.cljs$core$IFn$_invoke$arity$2 = G__23900__2;
G__23900.cljs$core$IFn$_invoke$arity$3 = G__23900__3;
return G__23900;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23901 = cljs.core.next(a__$2);
var G__23902 = cljs.core.next(b__$1);
a__$2 = G__23901;
b__$1 = G__23902;
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.PersistentVector.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__23903 = cljs.core.next(a__$2);
var G__23904 = cljs.core.next(b__$1);
a__$2 = G__23903;
b__$1 = G__23904;
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__23905 = cljs.core.next(a__$2);
var G__23906 = cljs.core.next(b__$1);
a__$2 = G__23905;
b__$1 = G__23906;
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.List.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$ = true;

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$common$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__12563__auto__ = cljs.core.sequential_QMARK_(b);
if(and__12563__auto__){
var and__12563__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__12563__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.common.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
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
return and__12563__auto____$1;
}
} else {
return and__12563__auto__;
}
});

(thi.ng.common.math.core.PDeltaEquals["null"] = true);

(thi.ng.common.math.core.delta_EQ_["null"] = (function() {
var G__23917 = null;
var G__23917__2 = (function (_,b){
return (b == null);
});
var G__23917__3 = (function (_,b,___$1){
return (b == null);
});
G__23917 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__23917__2.call(this,_,b);
case 3:
return G__23917__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23917.cljs$core$IFn$_invoke$arity$2 = G__23917__2;
G__23917.cljs$core$IFn$_invoke$arity$3 = G__23917__3;
return G__23917;
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
var G__23919 = arguments.length;
switch (G__23919) {
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
var G__23922 = arguments.length;
switch (G__23922) {
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

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__23923,p__23924){
var vec__23925 = p__23923;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23925,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23925,(1),null);
var vec__23926 = p__23924;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23926,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23926,(1),null);
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.common.math.core.map_interval.cljs$lang$maxFixedArity = 5;
thi.ng.common.math.core.map_interval_clamped = (function thi$ng$common$math$core$map_interval_clamped(){
var G__23929 = arguments.length;
switch (G__23929) {
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

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__23930,p__23931){
var vec__23932 = p__23930;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(1),null);
var vec__23933 = p__23931;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23933,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23933,(1),null);
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

thi.ng.common.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__23934,p__23935,p__23936){
var vec__23937 = p__23934;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(1),null);
var vec__23938 = p__23935;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(1),null);
var vec__23939 = p__23936;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23939,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23939,(1),null);
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
var G__23942 = arguments.length;
switch (G__23942) {
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

thi.ng.common.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__23943,x){
var vec__23944 = p__23943;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(1),null);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23946_SHARP_){
return (p1__23946_SHARP_ / x);
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
var G__23948 = x;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__23948) : Math.floor.call(null,G__23948));
});
thi.ng.common.math.core.ceil = (function thi$ng$common$math$core$ceil(x){
var G__23950 = x;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__23950) : Math.ceil.call(null,G__23950));
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
var G__23951 = (pow2 * (2));
pow2 = G__23951;
continue;
}
break;
}
});
thi.ng.common.math.core.floor_pow2 = (function thi$ng$common$math$core$floor_pow2(x){
var G__23955 = (2);
var G__23956 = (((function (){var G__23957 = x;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23957) : Math.log.call(null,G__23957));
})() / thi.ng.common.math.core.LOG2) | (0));
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23955,G__23956) : Math.pow.call(null,G__23955,G__23956));
});
thi.ng.common.math.core.bit_count = (function thi$ng$common$math$core$bit_count(x){
return thi.ng.common.math.core.ceil(((function (){var G__23959 = x;
return (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(G__23959) : Math.log.call(null,G__23959));
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
return (x - (function (){var G__23961 = x;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__23961) : Math.floor.call(null,G__23961));
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
var ax = (function (){var G__23964 = x;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23964) : thi.ng.common.math.core.abs.call(null,G__23964));
})();
var ay = (function (){var G__23965 = y;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23965) : thi.ng.common.math.core.abs.call(null,G__23965));
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
var ax = (function (){var G__23968 = x;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23968) : thi.ng.common.math.core.abs.call(null,G__23968));
})();
var ay = (function (){var G__23969 = y;
return (thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.common.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__23969) : thi.ng.common.math.core.abs.call(null,G__23969));
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
return (x * (function (){var G__23972 = (2);
var G__23973 = (k | (0));
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23972,G__23973) : Math.pow.call(null,G__23972,G__23973));
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
var G__23975 = ((x * x) + (y * y));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23975) : Math.sqrt.call(null,G__23975));
});
thi.ng.common.math.core.rootn = (function thi$ng$common$math$core$rootn(x,y){
var G__23978 = x;
var G__23979 = (1.0 / y);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23978,G__23979) : Math.pow.call(null,G__23978,G__23979));
});
thi.ng.common.math.core.rsqrt = (function thi$ng$common$math$core$rsqrt(x){
var r = (function (){var G__23981 = x;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__23981) : Math.sqrt.call(null,G__23981));
})();
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.common.math.core.impulse = (function thi$ng$common$math$core$impulse(k,t){
var h = (k * t);
return (h * (function (){var G__23983 = (1.0 - h);
return (Math.exp.cljs$core$IFn$_invoke$arity$1 ? Math.exp.cljs$core$IFn$_invoke$arity$1(G__23983) : Math.exp.call(null,G__23983));
})());
});
thi.ng.common.math.core.random = (function thi$ng$common$math$core$random(){
var G__23985 = arguments.length;
switch (G__23985) {
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
return ((((n < (100)))?((function (){var G__23988 = (((n / 100.0) * num) + 0.5);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__23988) : Math.round.call(null,G__23988));
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
var vec__23990 = thi.ng.common.math.core.quartile_range(n,cljs.core.count(sorted));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((b - a),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a,sorted));
});
thi.ng.common.math.core.normdist_weights = (function thi$ng$common$math$core$normdist_weights(){
var G__23993 = arguments.length;
switch (G__23993) {
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
return (function (p1__23991_SHARP_){
return (s * p1__23991_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.common.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;
