"use strict";var m=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var q=m(function(C,x){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist');function R(e,n,o,s,c){var v,f,a,r,i;if(e<=0)return NaN;for(o<0?f=(1-e)*o:f=0,c<0?a=(1-e)*c:a=0,i=0;i<e&&(r=n[f],!(r===r&&s[a]===0));i++)f+=o,a+=c;if(i===e)return NaN;for(v=r,i+=1,i;i<e;i++)f+=o,a+=c,!s[a]&&(r=n[f],!Z(r)&&(r>v||r===v&&O(r))&&(v=r));return v}x.exports=R
});var l=m(function(D,p){
var g=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(e,n,o,s,c,v,f){var a,r,i,u,t;if(e<=0)return NaN;for(r=s,i=f,t=0;t<e&&(u=n[r],!(u===u&&c[i]===0));t++)r+=o,i+=v;if(t===e)return NaN;for(a=u,t+=1,t;t<e;t++)r+=o,i+=v,!c[i]&&(u=n[r],!g(u)&&(u>a||u===a&&h(u))&&(a=u));return a}p.exports=j
});var P=m(function(E,b){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),z=l();w(y,"ndarray",z);b.exports=y
});var A=P();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
