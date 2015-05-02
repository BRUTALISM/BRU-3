// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.common.error');
goog.require('cljs.core');
thi.ng.common.error.throw_BANG_ = (function thi$ng$common$error$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.common.error.key_error_BANG_ = (function thi$ng$common$error$key_error_BANG_(k){
return thi.ng.common.error.throw_BANG_([cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.common.error.type_error_BANG_ = (function thi$ng$common$error$type_error_BANG_(t,x){
return thi.ng.common.error.throw_BANG_([cljs.core.str("Can't create "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''));
});
thi.ng.common.error.arity_error_BANG_ = (function thi$ng$common$error$arity_error_BANG_(n){
return thi.ng.common.error.throw_BANG_([cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.common.error.illegal_arg_BANG_ = (function thi$ng$common$error$illegal_arg_BANG_(){
var G__24392 = arguments.length;
switch (G__24392) {
case 1:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2("Illegal argument",x);
});

thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.common.error.throw_BANG_([cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.common.error.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;
thi.ng.common.error.unsupported_BANG_ = (function thi$ng$common$error$unsupported_BANG_(){
var G__24395 = arguments.length;
switch (G__24395) {
case 0:
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1("Unsupported operation");
});

thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.common.error.unsupported_BANG_.cljs$lang$maxFixedArity = 1;
