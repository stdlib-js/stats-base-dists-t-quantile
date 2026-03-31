"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=t(function(R,s){
var N=require('@stdlib/math-base-special-kernel-betaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-signum/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function y(r,e){var i,n;return u(e)||u(r)||e<=0||r<0||r>1?NaN:(i=r>.5?1-r:r,n=N(e/2,.5,2*i,1-2*i),l(r-.5)*x(e*n[1]/n[0]))}s.exports=y
});var v=t(function(h,o){
var b=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/math-base-special-kernel-betaincinv/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-signum/dist'),B=require('@stdlib/math-base-special-sqrt/dist');function d(r){if(c(r)||r<=0)return b(NaN);return e;function e(i){var n,a;return c(i)||i<0||i>1?NaN:(n=i>.5?1-i:i,a=g(r/2,.5,2*n,1-2*n),k(i-.5)*B(r*a[1]/a[0]))}}o.exports=d
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),F=v();m(f,"factory",F);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
