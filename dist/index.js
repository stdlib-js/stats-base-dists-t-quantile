"use strict";var t=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(e){throw (i=0, e)}};};var q=t(function(R,s){
var N=require('@stdlib/math-base-special-kernel-betaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-signum/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function y(r,i){var e,n;return u(i)||u(r)||i<=0||r<0||r>1?NaN:(e=r>.5?1-r:r,n=N(i/2,.5,2*e,1-2*e),l(r-.5)*x(i*n[1]/n[0]))}s.exports=y
});var v=t(function(h,o){
var b=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/math-base-special-kernel-betaincinv/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-signum/dist'),B=require('@stdlib/math-base-special-sqrt/dist');function d(r){if(c(r)||r<=0)return b(NaN);return i;function i(e){var n,a;return c(e)||e<0||e>1?NaN:(n=e>.5?1-e:e,a=g(r/2,.5,2*n,1-2*n),k(e-.5)*B(r*a[1]/a[0]))}}o.exports=d
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),F=v();m(f,"factory",F);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
