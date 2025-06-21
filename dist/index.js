"use strict";var y=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var P=y(function(K,p){
var w=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-positive-zero/dist');function A(a,i,o,x,v,s,b){var u,t,c,q,f,r,e,n,m;for(u=i.data,c=v.data,t=i.accessors[0],q=v.accessors[0],r=x,e=b,m=0;m<a&&(n=t(u,r),!(n===n&&q(c,e)===0));m++)r+=o,e+=s;if(m===a)return NaN;for(f=n,m+=1,m;m<a;m++)r+=o,e+=s,!q(c,e)&&(n=t(u,r),!w(n)&&(n>f||n===f&&z(n))&&(f=n));return f}p.exports=A
});var l=y(function(L,Z){
var B=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(a,i,o,x,v,s,b){var u,t,c,q,f,r,e;if(a<=0)return NaN;if(q=g(i),f=g(v),q.accessorProtocol||f.accessorProtocol)return D(a,q,o,x,f,s,b);for(t=x,c=b,e=0;e<a&&(r=i[t],!(r===r&&v[c]===0));e++)t+=o,c+=s;if(e===a)return NaN;for(u=r,e+=1,e;e<a;e++)t+=o,c+=s,!v[c]&&(r=i[t],!B(r)&&(r>u||r===u&&C(r))&&(u=r));return u}Z.exports=E
});var R=y(function(Q,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(a,i,o,x,v){var s=j(a,v),b=j(a,o);return F(a,i,o,b,x,v,s)}O.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),I=l();H(h,"ndarray",I);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
