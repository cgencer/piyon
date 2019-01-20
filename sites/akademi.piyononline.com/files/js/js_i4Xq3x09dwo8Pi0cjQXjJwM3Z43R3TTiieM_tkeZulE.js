//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(drupalSettings.path.currentPath);
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push($(this).attr('data-contextual-id'));
      });

      var uncachedIDs = _.filter(ids, function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID + '"]'), html);
          });
          return false;
        }
        return true;
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], { model: Drupal.contextual.StateModel });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.$el.attr('role', 'form');

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', { '!statusText': $.trim(xmlhttp.statusText) });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', { '!responseText': $.trim(xmlhttp.responseText) });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', { '!readyState': xmlhttp.readyState }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', { '!customMessage': customMessage }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', { '!url': ajax.url }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response, status) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = void 0;

      var $newContentWrapped = $('<div></div>').html(response.data);
      var $newContent = $newContentWrapped.contents();

      if ($newContent.length !== 1 || $newContent.get(0).nodeType !== 1) {
        $newContent = $newContentWrapped;
      }

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      if ($newContent.find('.ajax-new-content').length > 0) {
        $newContent.find('.ajax-new-content').hide();
        $newContent.show();
        $newContent.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length > 0) {
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($newContent.get(0), settings);
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/* eslint-disable */

(function ($, Drupal) {

  Drupal.behaviors.opignoCalendarMonthBlock = {

    attach: function (context, settings) {
      var $container = $(context).find('.view-id-opigno_calendar[class*="month"] .view-content');
      this.initDayDisplay($container);
      $container.find('td.date-box a:eq(0)').click();
    },

    initDayDisplay: function ($container) {
      $container
        .find('td.date-box a')
        .click(function () {
          var
            activeClassName = 'single-day-active',
            $previousActive =  $container.find('.' + activeClassName),
            date = $(this).parents('td.date-box').attr('date-date'),
            $newActive = $container.find('td.single-day[date-date="' + date + '"]');

          if (!$newActive.is($previousActive)) {
            $newActive.addClass(activeClassName);
            $container.addClass(activeClassName);
          }
          else {
            $newActive.removeClass(activeClassName);
            $container.removeClass(activeClassName);
          }

          $previousActive.removeClass(activeClassName);

          return false;
        });
    }

  };

}(jQuery, Drupal));
;
!function(e){var n=window.webpackJsonp;window.webpackJsonp=function(r,c,u){for(var i,a,f,l=0,s=[];l<r.length;l++)t[a=r[l]]&&s.push(t[a][0]),t[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(n&&n(r,c,u);s.length;)s.shift()();if(u)for(l=0;l<u.length;l++)f=o(o.s=u[l]);return f};var r={},t={3:0};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=t[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var r=new Promise(function(r,o){n=t[e]=[r,o]});n[2]=r;var c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,o.nc&&u.setAttribute("nonce",o.nc),u.src=o.p+""+e+".chunk.js";var i=setTimeout(a,12e4);function a(){u.onerror=u.onload=null,clearTimeout(i);var n=t[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),t[e]=void 0)}return u.onerror=u.onload=a,c.appendChild(u),r},o.m=e,o.c=r,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e}}([]);;
webpackJsonp([0],{"+GRi":function(t,e,n){var r=n("Wo2w"),o=n("Wy9r");t.exports=function(t){return r(o(t))}},"+Q6C":function(t,e,n){var r=n("CDXM"),o=n("6De9").f,i=n("+pQw");r(r.S,"Reflect",{deleteProperty:function(t,e){var n=o(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},"+aW+":function(t,e,n){"use strict";var r=n("CDXM"),o=n("uNkO"),i=n("RT4T"),a=n("umMR"),u=[].sort,c=[1,2,3];r(r.P+r.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!n("bhtb")(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"+c1l":function(t,e,n){var r=n("CDXM");r(r.S+r.F*!n("V+0c"),"Object",{defineProperty:n("tose").f})},"+iEx":function(t,e,n){n("fHxy"),n("5GJ3"),n("X0O/"),n("HCkn"),n("ncNB"),n("soMw"),n("8sYH"),n("IJ3P"),n("t6ta"),t.exports=n("b4gG").Reflect},"+pQw":function(t,e,n){var r=n("JXkd");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"/JsI":function(t,e,n){var r=n("CDXM");r(r.S+r.F,"Object",{assign:n("rIdM")})},"/Mgt":function(t,e,n){var r=n("CDXM");r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},"/XRd":function(t,e,n){var r=n("tose"),o=n("CDXM"),i=n("+pQw"),a=n("A1WY");o(o.S+o.F*n("umMR")(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},"/wY1":function(t,e,n){n("rMMT"),n("dlwK"),n("/XRd"),n("+Q6C"),n("dBNB"),n("7Fno"),n("gZpL"),n("dSHT"),n("d+61"),n("V2Dj"),n("wJYt"),n("gdNQ"),n("VsLy"),n("wLW2"),t.exports=n("b4gG").Reflect},"0MXQ":function(t,e,n){var r=n("CDXM");r(r.S,"Math",{fround:n("xxX9")})},1:function(t,e,n){t.exports=n("TU+8")},"1zvG":function(t,e,n){"use strict";var r=n("JXkd"),o=n("TJLg"),i=n("3r0D")("hasInstance"),a=Function.prototype;i in a||n("tose").f(a,i,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=o(t);)if(this.prototype===t)return!0;return!1}})},"2Fuj":function(t,e,n){var r=n("R5c1"),o=n("a/Sk");t.exports=Object.keys||function(t){return r(t,o)}},"3LDD":function(t,e,n){"use strict";var r=n("tose").f,o=n("51pc"),i=n("pBmS"),a=n("pa70"),u=n("Lcie"),c=n("p/bR"),s=n("WsSm"),f=n("w/BM"),l=n("KpXt"),p=n("V+0c"),h=n("xI8H").fastKey,v=n("Y5fy"),d=p?"_s":"size",g=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t(function(t,r){u(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&c(r,n,t[s],t)});return i(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=g(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(v(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,e)[d]}}),f},def:function(t,e,n){var r,o,i=g(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:g,setStrong:function(t,e,n){s(t,e,function(t,n){this._t=v(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))},n?"entries":"values",!n,!0),l(e)}}},"3MMU":function(t,e,n){"use strict";var r=n("RT4T"),o=n("KM3d"),i=n("rppw");t.exports=[].copyWithin||function(t,e){var n=r(this),a=i(n.length),u=o(t,a),c=o(e,a),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?a:o(s,a))-c,a-u),l=1;for(c<u&&u<c+f&&(l=-1,c+=f-1,u+=f-1);f-- >0;)c in n?n[u]=n[c]:delete n[u],u+=l,c+=l;return n}},"3r0D":function(t,e,n){var r=n("Iclu")("wks"),o=n("c09d"),i=n("ptrv").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},"4D9a":function(t,e,n){"use strict";n("RSwQ");var r=n("+pQw"),o=n("8H1R"),i=n("V+0c"),a=/./.toString,u=function(t){n("lfBE")(RegExp.prototype,"toString",t,!0)};n("umMR")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=a.name&&u(function(){return a.call(this)})},"4TT8":function(t,e,n){var r=n("CDXM");r(r.S+r.F*!n("V+0c"),"Object",{defineProperties:n("ewdp")})},"51pc":function(t,e,n){var r=n("+pQw"),o=n("ewdp"),i=n("a/Sk"),a=n("yIWP")("IE_PROTO"),u=function(){},c=function(){var t,e=n("BQSv")("iframe"),r=i.length;for(e.style.display="none",n("Ed9o").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},"5GJ3":function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=r.key,a=r.map,u=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:i(arguments[2]),r=a(o(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var c=u.get(e);return c.delete(n),!!c.size||u.delete(e)}})},"5b+r":function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"5oDA":function(t,e,n){var r=n("JXkd"),o=n("+pQw"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("pa70")(Function.call,n("6De9").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"6De9":function(t,e,n){var r=n("9e9+"),o=n("piOq"),i=n("+GRi"),a=n("A1WY"),u=n("rMsi"),c=n("gNkH"),s=Object.getOwnPropertyDescriptor;e.f=n("V+0c")?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},"6F6V":function(t,e,n){"use strict";n("NhIS")("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},"6GwK":function(t,e,n){var r=n("RT4T"),o=n("2Fuj");n("QN+J")("keys",function(){return function(t){return o(r(t))}})},"6tM8":function(t,e,n){"use strict";n("NhIS")("link",function(t){return function(e){return t(this,"a","href",e)}})},"76yl":function(t,e,n){"use strict";var r=n("+pQw"),o=n("A1WY");t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(r(this),"number"!=t)}},"7Fno":function(t,e,n){var r=n("6De9"),o=n("TJLg"),i=n("rMsi"),a=n("CDXM"),u=n("JXkd"),c=n("+pQw");a(a.S,"Reflect",{get:function t(e,n){var a,s,f=arguments.length<3?e:arguments[2];return c(e)===f?e[n]:(a=r.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(f):void 0:u(s=o(e))?t(s,n,f):void 0}})},"8Gg3":function(t,e,n){var r=n("ptrv").parseInt,o=n("kFjN").trim,i=n("9BUF"),a=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},"8H1R":function(t,e,n){"use strict";var r=n("+pQw");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"8sYH":function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=n("TJLg"),a=r.has,u=r.key,c=function(t,e,n){if(a(t,e,n))return!0;var r=i(e);return null!==r&&c(t,r,n)};r.exp({hasMetadata:function(t,e){return c(t,o(e),arguments.length<3?void 0:u(arguments[2]))}})},"9BUF":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"9ScN":function(t,e,n){"use strict";var r=n("51pc"),o=n("piOq"),i=n("P6IN"),a={};n("gxdV")(a,n("3r0D")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"9e9+":function(t,e){e.f={}.propertyIsEnumerable},"9wYb":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},A1WY:function(t,e,n){var r=n("JXkd");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},A3hK:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{sign:n("tWtF")})},ABVq:function(t,e,n){var r=n("CDXM"),o=Math.atanh;r(r.S+r.F*!(o&&1/o(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},AOSR:function(t,e,n){var r=n("CDXM"),o=n("KM3d"),i=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],o(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},Abrq:function(t,e,n){var r=n("CDXM");r(r.P,"Array",{copyWithin:n("3MMU")}),n("YymB")("copyWithin")},AdFz:function(t,e,n){"use strict";n("NhIS")("fixed",function(t){return function(){return t(this,"tt","","")}})},"B++z":function(t,e,n){var r=n("CDXM");r(r.S,"Number",{isNaN:function(t){return t!=t}})},BCYq:function(t,e,n){var r=n("pa70"),o=n("Wo2w"),i=n("RT4T"),a=n("rppw"),u=n("UKZQ");t.exports=function(t,e){var n=1==t,c=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l,h=e||u;return function(e,u,v){for(var d,g,y=i(e),m=o(y),b=r(u,v,3),k=a(m.length),_=0,w=n?h(e,k):c?h(e,0):void 0;k>_;_++)if((p||_ in m)&&(g=b(d=m[_],_,y),t))if(n)w[_]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return _;case 2:w.push(d)}else if(f)return!1;return l?-1:s||f?f:w}}},BMSF:function(t,e,n){var r=n("CDXM"),o=n("T0iK");r(r.S+r.F*(Number.parseFloat!=o),"Number",{parseFloat:o})},BQSv:function(t,e,n){var r=n("JXkd"),o=n("ptrv").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},CCJL:function(t,e,n){var r=n("+GRi"),o=n("6De9").f;n("QN+J")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},CDXM:function(t,e,n){var r=n("ptrv"),o=n("b4gG"),i=n("gxdV"),a=n("lfBE"),u=n("pa70"),c=function(t,e,n){var s,f,l,p,h=t&c.F,v=t&c.G,d=t&c.P,g=t&c.B,y=v?r:t&c.S?r[e]||(r[e]={}):(r[e]||{}).prototype,m=v?o:o[e]||(o[e]={}),b=m.prototype||(m.prototype={});for(s in v&&(n=e),n)l=((f=!h&&y&&void 0!==y[s])?y:n)[s],p=g&&f?u(l,r):d&&"function"==typeof l?u(Function.call,l):l,y&&a(y,s,l,t&c.U),m[s]!=l&&i(m,s,p),d&&b[s]!=l&&(b[s]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},Cc13:function(t,e,n){var r=n("ptrv"),o=n("b4gG"),i=n("KGrn"),a=n("qrqn"),u=n("tose").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},CjAR:function(t,e,n){n("YD56")("replace",2,function(t,e,n){return[function(r,o){"use strict";var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},n]})},CxwD:function(t,e,n){var r=n("JXkd"),o=n("xI8H").onFreeze;n("QN+J")("seal",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},Cz5P:function(t,e,n){"use strict";var r=n("pa70"),o=n("CDXM"),i=n("RT4T"),a=n("ULWX"),u=n("KpI+"),c=n("rppw"),s=n("GVIH"),f=n("fC8q");o(o.S+o.F*!n("UlVq")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,g=void 0!==d,y=0,m=f(p);if(g&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&u(m))for(n=new h(e=c(p.length));e>y;y++)s(n,y,g?d(p[y],y):p[y]);else for(l=m.call(p),n=new h;!(o=l.next()).done;y++)s(n,y,g?a(l,d,[o.value,y],!0):o.value);return n.length=y,n}})},DTeS:function(t,e,n){"use strict";n("NhIS")("sub",function(t){return function(){return t(this,"sub","","")}})},Ed9o:function(t,e,n){var r=n("ptrv").document;t.exports=r&&r.documentElement},F6ce:function(t,e,n){var r=n("TM12"),o=n("Wy9r");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},FALa:function(t,e,n){var r=n("CDXM"),o=n("V/jj"),i=Math.exp;r(r.S+r.F*n("umMR")(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(o(t)-o(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},"Fc+4":function(t,e){"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,r=arguments.length;for(n=0;n<r;n++)e.call(this,arguments[n])}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():function(t){"use strict";if("Element"in t){var e=t.Element.prototype,n=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],o=0,i=n.length;o<i;o++)this.push(n[o]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},c=u.prototype=[],s=function(){return new u(this)};if(i.prototype=Error.prototype,c.item=function(t){return this[t]||null},c.contains=function(t){return-1!==a(this,t+="")},c.add=function(){var t,e=arguments,n=0,r=e.length,o=!1;do{-1===a(this,t=e[n]+"")&&(this.push(t),o=!0)}while(++n<r);o&&this._updateClassName()},c.remove=function(){var t,e,n=arguments,r=0,o=n.length,i=!1;do{for(e=a(this,t=n[r]+"");-1!==e;)this.splice(e,1),i=!0,e=a(this,t)}while(++r<o);i&&this._updateClassName()},c.toggle=function(t,e){var n=this.contains(t+=""),r=n?!0!==e&&"remove":!1!==e&&"add";return r&&this[r](t),!0===e||!1===e?e:!n},c.toString=function(){return this.join(" ")},n.defineProperty){var f={get:s,enumerable:!0,configurable:!0};try{n.defineProperty(e,"classList",f)}catch(t){-2146823252===t.number&&(f.enumerable=!1,n.defineProperty(e,"classList",f))}}else n.prototype.__defineGetter__&&e.__defineGetter__("classList",s)}}(self))},FyA0:function(t,e,n){n("QN+J")("getOwnPropertyNames",function(){return n("y/ue").f})},GMpo:function(t,e,n){"use strict";n("NhIS")("italics",function(t){return function(){return t(this,"i","","")}})},GTd5:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},GVIH:function(t,e,n){"use strict";var r=n("tose"),o=n("piOq");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},GWWY:function(t,e,n){n("mzUQ"),n("b8HQ"),t.exports=n("b4gG").Symbol},"Gki+":function(t,e,n){var r=n("CDXM"),o=n("IU2P");r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},GngD:function(t,e,n){n("b8HQ"),n("xB6L"),n("QZhw"),t.exports=n("b4gG").WeakMap},H3aY:function(t,e,n){var r=n("CDXM"),o=n("ptrv").isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&o(t)}})},HCkn:function(t,e,n){var r=n("Ps07"),o=n("WGJ/"),i=n("gBtn"),a=n("+pQw"),u=n("TJLg"),c=i.keys,s=i.key,f=function(t,e){var n=c(t,e),i=u(t);if(null===i)return n;var a=f(i,e);return a.length?n.length?o(new r(n.concat(a))):a:n};i.exp({getMetadataKeys:function(t){return f(a(t),arguments.length<2?void 0:s(arguments[1]))}})},HK9U:function(t,e,n){"use strict";n("NhIS")("sup",function(t){return function(){return t(this,"sup","","")}})},HzDK:function(t,e,n){"use strict";var r=n("CDXM"),o=n("OGmI");r(r.P+r.F*!n("bhtb")([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},"I+CO":function(t,e,n){var r=n("3r0D")("toPrimitive"),o=Date.prototype;r in o||n("gxdV")(o,r,n("76yl"))},IGm2:function(t,e,n){"use strict";var r=n("CDXM"),o=n("F6ce");r(r.P+r.F*n("TmDx")("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},IJ3P:function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=r.has,a=r.key;r.exp({hasOwnMetadata:function(t,e){return i(t,o(e),arguments.length<3?void 0:a(arguments[2]))}})},IU2P:function(t,e,n){"use strict";var r=n("umMR"),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-5e13-1))})||!r(function(){i.call(new Date(NaN))})?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},Iclu:function(t,e,n){var r=n("b4gG"),o=n("ptrv"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("KGrn")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},JXkd:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},JnZr:function(t,e,n){var r=n("RT4T"),o=n("TJLg");n("QN+J")("getPrototypeOf",function(){return function(t){return o(r(t))}})},K1rc:function(t,e,n){var r=n("ptrv"),o=n("Ula3"),i=n("tose").f,a=n("PNtC").f,u=n("TM12"),c=n("8H1R"),s=r.RegExp,f=s,l=s.prototype,p=/a/g,h=/a/g,v=new s(p)!==p;if(n("V+0c")&&(!v||n("umMR")(function(){return h[n("3r0D")("match")]=!1,s(p)!=p||s(h)==h||"/a/i"!=s(p,"i")}))){s=function(t,e){var n=this instanceof s,r=u(t),i=void 0===e;return!n&&r&&t.constructor===s&&i?t:o(v?new f(r&&!i?t.source:t,e):f((r=t instanceof s)?t.source:t,r&&i?c.call(t):e),n?this:l,s)};for(var d=function(t){t in s||i(s,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},g=a(f),y=0;g.length>y;)d(g[y++]);l.constructor=s,s.prototype=l,n("lfBE")(r,"RegExp",s)}n("KpXt")("RegExp")},KGrn:function(t,e){t.exports=!1},KM3d:function(t,e,n){var r=n("9wYb"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},Kp6H:function(t,e,n){var r=n("CDXM"),o=n("+GRi"),i=n("rppw");r(r.S,"String",{raw:function(t){for(var e=o(t.raw),n=i(e.length),r=arguments.length,a=[],u=0;n>u;)a.push(String(e[u++])),u<r&&a.push(String(arguments[u]));return a.join("")}})},"KpI+":function(t,e,n){var r=n("lexG"),o=n("3r0D")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},KpXt:function(t,e,n){"use strict";var r=n("ptrv"),o=n("tose"),i=n("V+0c"),a=n("3r0D")("species");t.exports=function(t){var e=r[t];i&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},KvE9:function(t,e,n){n("LbgJ"),n("TjnC"),n("1zvG"),t.exports=n("b4gG").Function},LAe3:function(t,e,n){var r=n("CDXM"),o=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var n,r,i=0,a=0,u=arguments.length,c=0;a<u;)c<(n=o(arguments[a++]))?(i=i*(r=c/n)*r+1,c=n):i+=n>0?(r=n/c)*r:n;return c===1/0?1/0:c*Math.sqrt(i)}})},LGbj:function(t,e,n){var r=n("JXkd");n("QN+J")("isFrozen",function(t){return function(e){return!r(e)||!!t&&t(e)}})},LbgJ:function(t,e,n){var r=n("CDXM");r(r.P,"Function",{bind:n("p9up")})},Lcie:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},M720:function(t,e,n){"use strict";n("NhIS")("big",function(t){return function(){return t(this,"big","","")}})},ML5l:function(t,e,n){"use strict";n("NhIS")("anchor",function(t){return function(e){return t(this,"a","name",e)}})},Mr9n:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(6),i="findIndex",a=!0;i in[]&&Array(1)[i](function(){a=!1}),r(r.P+r.F*a,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("YymB")(i)},NI2B:function(t,e,n){var r=n("CDXM"),o=n("f08B"),i=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},NISB:function(t,e,n){var r=n("PNtC"),o=n("lzDK"),i=n("+pQw"),a=n("ptrv").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},NhIS:function(t,e,n){var r=n("CDXM"),o=n("umMR"),i=n("Wy9r"),a=/"/g,u=function(t,e,n,r){var o=String(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(u),r(r.P+r.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},NzKl:function(t,e,n){n("dLZl"),t.exports=n("b4gG").parseFloat},OGmI:function(t,e,n){var r=n("uNkO"),o=n("RT4T"),i=n("Wo2w"),a=n("rppw");t.exports=function(t,e,n,u,c){r(e);var s=o(t),f=i(s),l=a(s.length),p=c?l-1:0,h=c?-1:1;if(n<2)for(;;){if(p in f){u=f[p],p+=h;break}if(p+=h,c?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:l>p;p+=h)p in f&&(u=e(u,f[p],p,s));return u}},P6IN:function(t,e,n){var r=n("tose").f,o=n("rMsi"),i=n("3r0D")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"PM/s":function(t,e,n){var r=n("CDXM");r(r.S,"Object",{is:n("pHtE")})},PNtC:function(t,e,n){var r=n("R5c1"),o=n("a/Sk").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},PX9N:function(t,e,n){var r=n("CDXM");r(r.P,"String",{repeat:n("tDHD")})},PeZi:function(t,e,n){var r=n("9wYb"),o=n("Wy9r");t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},Ps07:function(t,e,n){"use strict";var r=n("3LDD"),o=n("Y5fy");t.exports=n("cpZ/")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},Q7OE:function(t,e,n){"use strict";var r=n("CDXM"),o=n("+GRi"),i=n("9wYb"),a=n("rppw"),u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("bhtb")(u)),"Array",{lastIndexOf:function(t){if(c)return u.apply(this,arguments)||0;var e=o(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},"QN+J":function(t,e,n){var r=n("CDXM"),o=n("b4gG"),i=n("umMR");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},QZhw:function(t,e,n){"use strict";var r,o=n("BCYq")(0),i=n("lfBE"),a=n("xI8H"),u=n("rIdM"),c=n("XRS9"),s=n("JXkd"),f=n("umMR"),l=n("Y5fy"),p=a.getWeak,h=Object.isExtensible,v=c.ufstore,d={},g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(s(t)){var e=p(t);return!0===e?v(l(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(l(this,"WeakMap"),t,e)}},m=t.exports=n("cpZ/")("WeakMap",g,y,c,!0,!0);f(function(){return 7!=(new m).set((Object.freeze||Object)(d),7).get(d)})&&(u((r=c.getConstructor(g,"WeakMap")).prototype,y),a.NEED=!0,o(["delete","has","get","set"],function(t){var e=m.prototype,n=e[t];i(e,t,function(e,o){if(s(e)&&!h(e)){this._f||(this._f=new r);var i=this._f[t](e,o);return"set"==t?this:i}return n.call(this,e,o)})}))},QcIQ:function(t,e,n){"use strict";var r=n("ptrv"),o=n("rMsi"),i=n("VceJ"),a=n("Ula3"),u=n("A1WY"),c=n("umMR"),s=n("PNtC").f,f=n("6De9").f,l=n("tose").f,p=n("kFjN").trim,h=r.Number,v=h,d=h.prototype,g="Number"==i(n("51pc")(d)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=y?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,c=e.slice(2),s=0,f=c.length;s<f;s++)if((a=c.charCodeAt(s))<48||a>o)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?c(function(){d.valueOf.call(n)}):"Number"!=i(n))?a(new v(m(e)),n,h):m(e)};for(var b,k=n("V+0c")?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;k.length>_;_++)o(v,b=k[_])&&!o(h,b)&&l(h,b,f(v,b));h.prototype=d,d.constructor=h,n("lfBE")(r,"Number",h)}},R5c1:function(t,e,n){var r=n("rMsi"),o=n("+GRi"),i=n("vyV2")(!1),a=n("yIWP")("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},RSwQ:function(t,e,n){n("V+0c")&&"g"!=/./g.flags&&n("tose").f(RegExp.prototype,"flags",{configurable:!0,get:n("8H1R")})},RT4T:function(t,e,n){var r=n("Wy9r");t.exports=function(t){return Object(r(t))}},RXfV:function(t,e,n){var r=n("CDXM"),o=Math.imul;r(r.S+r.F*n("umMR")(function(){return-5!=o(4294967295,5)||2!=o.length}),"Math",{imul:function(t,e){var n=+t,r=+e,o=65535&n,i=65535&r;return 0|o*i+((65535&n>>>16)*i+o*(65535&r>>>16)<<16>>>0)}})},RfZa:function(t,e,n){var r=n("CDXM");r(r.S,"Date",{now:function(){return(new Date).getTime()}})},Rjcp:function(t,e,n){n("K1rc"),n("4D9a"),n("RSwQ"),n("dVlF"),n("CjAR"),n("Zy8t"),n("nFOG"),t.exports=n("b4gG").RegExp},"Rl2/":function(t,e,n){"use strict";var r=n("PeZi")(!0);n("WsSm")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},SkRu:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},SxDa:function(t,e,n){var r=n("CDXM");r(r.P,"Array",{fill:n("atYZ")}),n("YymB")("fill")},"T+CM":function(t,e,n){"use strict";n("kFjN")("trim",function(t){return function(){return t(this,3)}})},T0iK:function(t,e,n){var r=n("ptrv").parseFloat,o=n("kFjN").trim;t.exports=1/r(n("9BUF")+"-0")!=-1/0?function(t){var e=o(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},TJLg:function(t,e,n){var r=n("rMsi"),o=n("RT4T"),i=n("yIWP")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},TM12:function(t,e,n){var r=n("JXkd"),o=n("VceJ"),i=n("3r0D")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"TU+8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("GWWY"),o=(n.n(r),n("f/CF")),i=(n.n(o),n("KvE9")),a=(n.n(i),n("zbpw")),u=(n.n(a),n("NzKl")),c=(n.n(u),n("ajBu")),s=(n.n(c),n("feEK")),f=(n.n(s),n("r24B")),l=(n.n(f),n("pEMT")),p=(n.n(l),n("jOBH")),h=(n.n(p),n("Rjcp")),v=(n.n(h),n("W8w6")),d=(n.n(v),n("GngD")),g=(n.n(d),n("yJzT")),y=(n.n(g),n("Fc+4")),m=(n.n(y),n("/wY1")),b=(n.n(m),n("+iEx")),k=(n.n(b),n("eFQL"));n.n(k)},TjnC:function(t,e,n){var r=n("tose").f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n("V+0c")&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},TmDx:function(t,e,n){var r=n("3r0D")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},UKZQ:function(t,e,n){var r=n("a7b8");t.exports=function(t,e){return new(r(t))(e)}},ULWX:function(t,e,n){var r=n("+pQw");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},UdES:function(t,e,n){var r=n("CDXM");r(r.S,"Array",{isArray:n("rKhO")})},UlVq:function(t,e,n){var r=n("3r0D")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},Ula3:function(t,e,n){var r=n("JXkd"),o=n("5oDA").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},Umeq:function(t,e,n){n("KpXt")("Array")},"V+0c":function(t,e,n){t.exports=!n("umMR")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"V/jj":function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},V2Dj:function(t,e,n){var r=n("CDXM"),o=n("+pQw"),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return o(t),!i||i(t)}})},VceJ:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},VsLy:function(t,e,n){var r=n("tose"),o=n("6De9"),i=n("TJLg"),a=n("rMsi"),u=n("CDXM"),c=n("piOq"),s=n("+pQw"),f=n("JXkd");u(u.S,"Reflect",{set:function t(e,n,u){var l,p,h=arguments.length<4?e:arguments[3],v=o.f(s(e),n);if(!v){if(f(p=i(e)))return t(p,n,u,h);v=c(0)}if(a(v,"value")){if(!1===v.writable||!f(h))return!1;if(l=o.f(h,n)){if(l.get||l.set||!1===l.writable)return!1;l.value=u,r.f(h,n,l)}else r.f(h,n,c(0,u));return!0}return void 0!==v.set&&(v.set.call(h,u),!0)}})},"W+Ug":function(t,e,n){var r=n("CDXM");r(r.S,"Object",{setPrototypeOf:n("5oDA").set})},W8w6:function(t,e,n){n("b8HQ"),n("Rl2/"),n("dU6i"),n("ZI9W"),t.exports=n("b4gG").Map},"WGJ/":function(t,e,n){var r=n("p/bR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},Wo2w:function(t,e,n){var r=n("VceJ");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},WsSm:function(t,e,n){"use strict";var r=n("KGrn"),o=n("CDXM"),i=n("lfBE"),a=n("gxdV"),u=n("lexG"),c=n("9ScN"),s=n("P6IN"),f=n("TJLg"),l=n("3r0D")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,d,g,y){c(n,e,v);var m,b,k,_=function(t){if(!p&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==d,M=!1,T=t.prototype,D=T[l]||T["@@iterator"]||d&&T[d],x=D||_(d),E=d?S?_("entries"):x:void 0,C="Array"==e&&T.entries||D;if(C&&(k=f(C.call(new t)))!==Object.prototype&&k.next&&(s(k,w,!0),r||"function"==typeof k[l]||a(k,l,h)),S&&D&&"values"!==D.name&&(M=!0,x=function(){return D.call(this)}),r&&!y||!p&&!M&&T[l]||a(T,l,x),u[e]=x,u[w]=h,d)if(m={values:S?x:_("values"),keys:g?x:_("keys"),entries:E},y)for(b in m)b in T||i(T,b,m[b]);else o(o.P+o.F*(p||M),e,m);return m}},Wy9r:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"X0O/":function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=n("TJLg"),a=r.has,u=r.get,c=r.key,s=function(t,e,n){if(a(t,e,n))return u(t,e,n);var r=i(e);return null!==r?s(t,r,n):void 0};r.exp({getMetadata:function(t,e){return s(t,o(e),arguments.length<3?void 0:c(arguments[2]))}})},XRS9:function(t,e,n){"use strict";var r=n("pBmS"),o=n("xI8H").getWeak,i=n("+pQw"),a=n("JXkd"),u=n("Lcie"),c=n("p/bR"),s=n("BCYq"),f=n("rMsi"),l=n("Y5fy"),p=s(5),h=s(6),v=0,d=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,e){return p(t.a,function(t){return t[0]===e})};g.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var n=y(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=h(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var s=t(function(t,r){u(t,s,e,"_i"),t._t=e,t._i=v++,t._l=void 0,void 0!=r&&c(r,n,t[i],t)});return r(s.prototype,{delete:function(t){if(!a(t))return!1;var n=o(t);return!0===n?d(l(this,e)).delete(t):n&&f(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=o(t);return!0===n?d(l(this,e)).has(t):n&&f(n,this._i)}}),s},def:function(t,e,n){var r=o(i(e),!0);return!0===r?d(t).set(e,n):r[t._i]=n,t},ufstore:d}},Y5fy:function(t,e,n){var r=n("JXkd");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},YD56:function(t,e,n){"use strict";var r=n("gxdV"),o=n("lfBE"),i=n("umMR"),a=n("Wy9r"),u=n("3r0D");t.exports=function(t,e,n){var c=u(t),s=n(a,c,""[t]),f=s[0],l=s[1];i(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,f),r(RegExp.prototype,c,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},YvuM:function(t,e,n){var r=n("JXkd"),o=n("xI8H").onFreeze;n("QN+J")("preventExtensions",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},YymB:function(t,e,n){var r=n("3r0D")("unscopables"),o=Array.prototype;void 0==o[r]&&n("gxdV")(o,r,{}),t.exports=function(t){o[r][t]=!0}},ZI9W:function(t,e,n){"use strict";var r=n("3LDD"),o=n("Y5fy");t.exports=n("cpZ/")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},Zy8t:function(t,e,n){n("YD56")("search",1,function(t,e,n){return[function(n){"use strict";var r=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},n]})},"a/Sk":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"a/bl":function(t,e,n){"use strict";n("NhIS")("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},a7b8:function(t,e,n){var r=n("JXkd"),o=n("rKhO"),i=n("3r0D")("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},aWXQ:function(t,e,n){var r=n("CDXM");r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},ajBu:function(t,e,n){n("QcIQ"),n("jMsF"),n("s+3V"),n("aWXQ"),n("H3aY"),n("uMIg"),n("B++z"),n("NI2B"),n("b94N"),n("/Mgt"),n("BMSF"),n("emBC"),t.exports=n("b4gG").Number},atYZ:function(t,e,n){"use strict";var r=n("RT4T"),o=n("KM3d"),i=n("rppw");t.exports=function(t){for(var e=r(this),n=i(e.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,s=void 0===c?n:o(c,n);s>u;)e[u++]=t;return e}},b4gG:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},b8HQ:function(t,e,n){"use strict";var r=n("dXJ/"),o={};o[n("3r0D")("toStringTag")]="z",o+""!="[object z]"&&n("lfBE")(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},b94N:function(t,e,n){var r=n("CDXM");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},bPmT:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(1);r(r.P+r.F*!n("bhtb")([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},bhtb:function(t,e,n){"use strict";var r=n("umMR");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},bqLj:function(t,e,n){"use strict";var r=n("CDXM"),o=n("Ed9o"),i=n("VceJ"),a=n("KM3d"),u=n("rppw"),c=[].slice;r(r.P+r.F*n("umMR")(function(){o&&c.call(o)}),"Array",{slice:function(t,e){var n=u(this.length),r=i(this);if(e=void 0===e?n:e,"Array"==r)return c.call(this,t,e);for(var o=a(t,n),s=a(e,n),f=u(s-o),l=new Array(f),p=0;p<f;p++)l[p]="String"==r?this.charAt(o+p):this[o+p];return l}})},by2N:function(t,e,n){var r=n("CDXM"),o=n("8Gg3");r(r.G+r.F*(parseInt!=o),{parseInt:o})},c09d:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cOEa:function(t,e,n){"use strict";var r=n("CDXM"),o=n("GVIH");r(r.S+r.F*n("umMR")(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)o(n,t,arguments[t++]);return n.length=e,n}})},"cpZ/":function(t,e,n){"use strict";var r=n("ptrv"),o=n("CDXM"),i=n("lfBE"),a=n("pBmS"),u=n("xI8H"),c=n("p/bR"),s=n("Lcie"),f=n("JXkd"),l=n("umMR"),p=n("UlVq"),h=n("P6IN"),v=n("Ula3");t.exports=function(t,e,n,d,g,y){var m=r[t],b=m,k=g?"set":"add",_=b&&b.prototype,w={},S=function(t){var e=_[t];i(_,t,"delete"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof b&&(y||_.forEach&&!l(function(){(new b).entries().next()}))){var M=new b,T=M[k](y?{}:-0,1)!=M,D=l(function(){M.has(1)}),x=p(function(t){new b(t)}),E=!y&&l(function(){for(var t=new b,e=5;e--;)t[k](e,e);return!t.has(-0)});x||((b=e(function(e,n){s(e,b,t);var r=v(new m,e,b);return void 0!=n&&c(n,g,r[k],r),r})).prototype=_,_.constructor=b),(D||E)&&(S("delete"),S("has"),g&&S("get")),(E||T)&&S(k),y&&_.clear&&delete _.clear}else b=d.getConstructor(e,t,g,k),a(b.prototype,n),u.NEED=!0;return h(b,t),w[t]=b,o(o.G+o.W+o.F*(b!=m),w),y||d.setStrong(b,t,g),b}},"d+61":function(t,e,n){var r=n("CDXM");r(r.S,"Reflect",{has:function(t,e){return e in t}})},d3uY:function(t,e,n){var r=n("JXkd"),o=n("xI8H").onFreeze;n("QN+J")("freeze",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},dBNB:function(t,e,n){"use strict";var r=n("CDXM"),o=n("+pQw"),i=function(t){this._t=o(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n("9ScN")(i,"Object",function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new i(t)}})},dLZl:function(t,e,n){var r=n("CDXM"),o=n("T0iK");r(r.G+r.F*(parseFloat!=o),{parseFloat:o})},dSHT:function(t,e,n){var r=n("CDXM"),o=n("TJLg"),i=n("+pQw");r(r.S,"Reflect",{getPrototypeOf:function(t){return o(i(t))}})},dU6i:function(t,e,n){for(var r=n("xB6L"),o=n("2Fuj"),i=n("lfBE"),a=n("ptrv"),u=n("gxdV"),c=n("lexG"),s=n("3r0D"),f=s("iterator"),l=s("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(h),d=0;d<v.length;d++){var g,y=v[d],m=h[y],b=a[y],k=b&&b.prototype;if(k&&(k[f]||u(k,f,p),k[l]||u(k,l,y),c[y]=p,m))for(g in r)k[g]||i(k,g,r[g],!0)}},dVlF:function(t,e,n){n("YD56")("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},n]})},"dXJ/":function(t,e,n){var r=n("VceJ"),o=n("3r0D")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},dlwK:function(t,e,n){var r=n("CDXM"),o=n("51pc"),i=n("uNkO"),a=n("+pQw"),u=n("JXkd"),c=n("umMR"),s=n("p9up"),f=(n("ptrv").Reflect||{}).construct,l=c(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),p=!c(function(){f(function(){})});r(r.S+r.F*(l||p),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,h=o(u(c)?c:Object.prototype),v=Function.apply.call(t,h,e);return u(v)?v:h}})},eFQL:function(t,e,n){(function(t){!function(){"use strict";!function(t){var e=t.performance;function n(t){e&&e.mark&&e.mark(t)}function r(t,n){e&&e.measure&&e.measure(t,n)}if(n("Zone"),t.Zone)throw new Error("Zone already loaded.");var o,i=function(){function e(t,e){this._properties=null,this._parent=t,this._name=e?e.name||"unnamed":"<root>",this._properties=e&&e.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,e)}return e.assertZonePatched=function(){if(t.Promise!==D.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(e,"root",{get:function(){for(var t=e.current;t.parent;)t=t.parent;return t},enumerable:!0,configurable:!0}),Object.defineProperty(e,"current",{get:function(){return E.zone},enumerable:!0,configurable:!0}),Object.defineProperty(e,"currentTask",{get:function(){return C},enumerable:!0,configurable:!0}),e.__load_patch=function(o,i){if(D.hasOwnProperty(o))throw Error("Already loaded patch: "+o);if(!t["__Zone_disable_"+o]){var a="Zone:"+o;n(a),D[o]=i(t,e,x),r(a,a)}},Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e.prototype.get=function(t){var e=this.getZoneWith(t);if(e)return e._properties[t]},e.prototype.getZoneWith=function(t){for(var e=this;e;){if(e._properties.hasOwnProperty(t))return e;e=e._parent}return null},e.prototype.fork=function(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)},e.prototype.wrap=function(t,e){if("function"!=typeof t)throw new Error("Expecting function got: "+t);var n=this._zoneDelegate.intercept(this,t,e),r=this;return function(){return r.runGuarded(n,this,arguments,e)}},e.prototype.run=function(t,e,n,r){void 0===e&&(e=void 0),void 0===n&&(n=null),void 0===r&&(r=null),E={parent:E,zone:this};try{return this._zoneDelegate.invoke(this,t,e,n,r)}finally{E=E.parent}},e.prototype.runGuarded=function(t,e,n,r){void 0===e&&(e=null),void 0===n&&(n=null),void 0===r&&(r=null),E={parent:E,zone:this};try{try{return this._zoneDelegate.invoke(this,t,e,n,r)}catch(t){if(this._zoneDelegate.handleError(this,t))throw t}}finally{E=E.parent}},e.prototype.runTask=function(t,e,n){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||g).name+"; Execution: "+this.name+")");if(t.state!==y||t.type!==T){var r=t.state!=k;r&&t._transitionTo(k,b),t.runCount++;var o=C;C=t,E={parent:E,zone:this};try{t.type==M&&t.data&&!t.data.isPeriodic&&(t.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,t,e,n)}catch(t){if(this._zoneDelegate.handleError(this,t))throw t}}finally{t.state!==y&&t.state!==w&&(t.type==T||t.data&&t.data.isPeriodic?r&&t._transitionTo(b,k):(t.runCount=0,this._updateTaskCount(t,-1),r&&t._transitionTo(y,k,y))),E=E.parent,C=o}}},e.prototype.scheduleTask=function(t){if(t.zone&&t.zone!==this)for(var e=this;e;){if(e===t.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+t.zone.name);e=e.parent}t._transitionTo(m,y);var n=[];t._zoneDelegates=n,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(e){throw t._transitionTo(w,m,y),this._zoneDelegate.handleError(this,e),e}return t._zoneDelegates===n&&this._updateTaskCount(t,1),t.state==m&&t._transitionTo(b,m),t},e.prototype.scheduleMicroTask=function(t,e,n,r){return this.scheduleTask(new c(S,t,e,n,r,null))},e.prototype.scheduleMacroTask=function(t,e,n,r,o){return this.scheduleTask(new c(M,t,e,n,r,o))},e.prototype.scheduleEventTask=function(t,e,n,r,o){return this.scheduleTask(new c(T,t,e,n,r,o))},e.prototype.cancelTask=function(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||g).name+"; Execution: "+this.name+")");t._transitionTo(_,b,k);try{this._zoneDelegate.cancelTask(this,t)}catch(e){throw t._transitionTo(w,_),this._zoneDelegate.handleError(this,e),e}return this._updateTaskCount(t,-1),t._transitionTo(y,_),t.runCount=0,t},e.prototype._updateTaskCount=function(t,e){var n=t._zoneDelegates;-1==e&&(t._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(t.type,e)},e.__symbol__=R,e}(),a={name:"",onHasTask:function(t,e,n,r){return t.hasTask(n,r)},onScheduleTask:function(t,e,n,r){return t.scheduleTask(n,r)},onInvokeTask:function(t,e,n,r,o,i){return t.invokeTask(n,r,o,i)},onCancelTask:function(t,e,n,r){return t.cancelTask(n,r)}},u=function(){function t(t,e,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=t,this._parentDelegate=e,this._forkZS=n&&(n&&n.onFork?n:e._forkZS),this._forkDlgt=n&&(n.onFork?e:e._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:e.zone),this._interceptZS=n&&(n.onIntercept?n:e._interceptZS),this._interceptDlgt=n&&(n.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:e.zone),this._invokeZS=n&&(n.onInvoke?n:e._invokeZS),this._invokeDlgt=n&&(n.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:e.zone),this._handleErrorZS=n&&(n.onHandleError?n:e._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:e.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:e._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:e.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:e._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:e.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:e._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:e.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask;(r||e&&e._hasTaskZS)&&(this._hasTaskZS=r?n:a,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=t,n.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}return t.prototype.fork=function(t,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,t,e):new i(t,e)},t.prototype.intercept=function(t,e,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,t,e,n):e},t.prototype.invoke=function(t,e,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,t,e,n,r,o):e.apply(n,r)},t.prototype.handleError=function(t,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,t,e)},t.prototype.scheduleTask=function(t,e){var n=e;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),(n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,t,e))||(n=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=S)throw new Error("Task is missing scheduleFn.");v(e)}return n},t.prototype.invokeTask=function(t,e,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,t,e,n,r):e.callback.apply(n,r)},t.prototype.cancelTask=function(t,e){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,t,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");n=e.cancelFn(e)}return n},t.prototype.hasTask=function(t,e){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,t,e)}catch(e){this.handleError(t,e)}},t.prototype._updateTaskCount=function(t,e){var n=this._taskCounts,r=n[t],o=n[t]=r+e;if(o<0)throw new Error("More tasks executed then were scheduled.");0!=r&&0!=o||this.hasTask(this.zone,{microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:t})},t}(),c=function(){function e(n,r,o,i,a,u){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=r,this.data=i,this.scheduleFn=a,this.cancelFn=u,this.callback=o;var c=this;this.invoke=n===T&&i&&i.useG?e.invokeTask:function(){return e.invokeTask.call(t,c,this,arguments)}}return e.invokeTask=function(t,e,n){t||(t=this),O++;try{return t.runCount++,t.zone.runTask(t,e,n)}finally{1==O&&d(),O--}},Object.defineProperty(e.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),e.prototype.cancelScheduleRequest=function(){this._transitionTo(y,m)},e.prototype._transitionTo=function(t,e,n){if(this._state!==e&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+t+"', expecting state '"+e+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=t,t==y&&(this._zoneDelegates=null)},e.prototype.toString=function(){return this.data&&void 0!==this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},e}(),s=R("setTimeout"),f=R("Promise"),l=R("then"),p=[],h=!1;function v(e){0===O&&0===p.length&&(o||t[f]&&(o=t[f].resolve(0)),o?o[l](d):t[s](d,0)),e&&p.push(e)}function d(){if(!h){for(h=!0;p.length;){var t=p;p=[];for(var e=0;e<t.length;e++){var n=t[e];try{n.zone.runTask(n,null,null)}catch(t){x.onUnhandledError(t)}}}x.microtaskDrainDone(),h=!1}}var g={name:"NO ZONE"},y="notScheduled",m="scheduling",b="scheduled",k="running",_="canceling",w="unknown",S="microTask",M="macroTask",T="eventTask",D={},x={symbol:R,currentZoneFrame:function(){return E},onUnhandledError:P,microtaskDrainDone:P,scheduleMicroTask:v,showUncaughtError:function(){return!i[R("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:P,patchMethod:function(){return P},bindArguments:function(){return null},setNativePromise:function(t){t&&"function"==typeof t.resolve&&(o=t.resolve(0))}},E={parent:null,zone:new i(null,null)},C=null,O=0;function P(){}function R(t){return"__zone_symbol__"+t}r("Zone","Zone"),t.Zone=i}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||t),Zone.__load_patch("ZoneAwarePromise",function(t,e,n){var r=Object.getOwnPropertyDescriptor,o=Object.defineProperty,i=n.symbol,a=[],u=i("Promise"),c=i("then"),s="__creationTrace__";n.onUnhandledError=function(t){if(n.showUncaughtError()){var e=t&&t.rejection;e?console.error("Unhandled Promise rejection:",e instanceof Error?e.message:e,"; Zone:",t.zone.name,"; Task:",t.task&&t.task.source,"; Value:",e,e instanceof Error?e.stack:void 0):console.error(t)}},n.microtaskDrainDone=function(){for(;a.length;)for(var t=function(){var t=a.shift();try{t.zone.runGuarded(function(){throw t})}catch(t){l(t)}};a.length;)t()};var f=i("unhandledPromiseRejectionHandler");function l(t){n.onUnhandledError(t);try{var r=e[f];r&&"function"==typeof r&&r.call(this,t)}catch(t){}}function p(t){return t&&t.then}function h(t){return t}function v(t){return F.reject(t)}var d=i("state"),g=i("value"),y=i("finally"),m=i("parentPromiseValue"),b=i("parentPromiseState"),k="Promise.then",_=null,w=!0,S=!1,M=0;function T(t,e){return function(n){try{C(t,e,n)}catch(e){C(t,!1,e)}}}var D=function(){var t=!1;return function(e){return function(){t||(t=!0,e.apply(null,arguments))}}},x="Promise resolved with itself",E=i("currentTaskTrace");function C(t,r,i){var u,c=D();if(t===i)throw new TypeError(x);if(t[d]===_){var f=null;try{"object"!=typeof i&&"function"!=typeof i||(f=i&&i.then)}catch(e){return c(function(){C(t,!1,e)})(),t}if(r!==S&&i instanceof F&&i.hasOwnProperty(d)&&i.hasOwnProperty(g)&&i[d]!==_)P(i),C(t,i[d],i[g]);else if(r!==S&&"function"==typeof f)try{f.call(i,c(T(t,r)),c(T(t,!1)))}catch(e){c(function(){C(t,!1,e)})()}else{t[d]=r;var l=t[g];if(t[g]=i,t[y]===y&&r===w&&(t[d]=t[b],t[g]=t[m]),r===S&&i instanceof Error){var p=e.currentTask&&e.currentTask.data&&e.currentTask.data[s];p&&o(i,E,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(var h=0;h<l.length;)R(t,l[h++],l[h++],l[h++],l[h++]);if(0==l.length&&r==S){t[d]=M;try{throw new Error("Uncaught (in promise): "+((u=i)&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u))+(i&&i.stack?"\n"+i.stack:""))}catch(r){var v=r;v.rejection=i,v.promise=t,v.zone=e.current,v.task=e.currentTask,a.push(v),n.scheduleMicroTask()}}}}return t}var O=i("rejectionHandledHandler");function P(t){if(t[d]===M){try{var n=e[O];n&&"function"==typeof n&&n.call(this,{rejection:t[g],promise:t})}catch(t){}t[d]=S;for(var r=0;r<a.length;r++)t===a[r].promise&&a.splice(r,1)}}function R(t,e,n,r,o){P(t);var i=t[d],a=i?"function"==typeof r?r:h:"function"==typeof o?o:v;e.scheduleMicroTask(k,function(){try{var r=t[g],o=n&&y===n[y];o&&(n[m]=r,n[b]=i);var u=e.run(a,void 0,o&&a!==v&&a!==h?[]:[r]);C(n,!0,u)}catch(t){C(n,!1,t)}},n)}var F=function(){function t(e){if(!(this instanceof t))throw new Error("Must be an instanceof Promise.");this[d]=_,this[g]=[];try{e&&e(T(this,w),T(this,S))}catch(t){C(this,!1,t)}}return t.toString=function(){return"function ZoneAwarePromise() { [native code] }"},t.resolve=function(t){return C(new this(null),w,t)},t.reject=function(t){return C(new this(null),S,t)},t.race=function(t){var e,n,r=new this(function(t,r){e=t,n=r});function o(t){r&&(r=e(t))}function i(t){r&&(r=n(t))}for(var a=0,u=t;a<u.length;a++){var c=u[a];p(c)||(c=this.resolve(c)),c.then(o,i)}return r},t.all=function(t){for(var e,n,r=new this(function(t,r){e=t,n=r}),o=0,i=[],a=0,u=t;a<u.length;a++){var c=u[a];p(c)||(c=this.resolve(c)),c.then(function(t){return function(n){i[t]=n,--o||e(i)}}(o),n),o++}return o||e(i),r},t.prototype.then=function(t,n){var r=new this.constructor(null),o=e.current;return this[d]==_?this[g].push(o,r,t,n):R(this,o,r,t,n),r},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var n=new this.constructor(null);n[y]=y;var r=e.current;return this[d]==_?this[g].push(r,n,t,t):R(this,r,n,t,t),n},t}();F.resolve=F.resolve,F.reject=F.reject,F.race=F.race,F.all=F.all;var j=t[u]=t.Promise,I=e.__symbol__("ZoneAwarePromise"),N=r(t,"Promise");N&&!N.configurable||(N&&delete N.writable,N&&delete N.value,N||(N={configurable:!0,enumerable:!0}),N.get=function(){return t[I]?t[I]:t[u]},N.set=function(e){e===F?t[I]=e:(t[u]=e,e.prototype[c]||A(e),n.setNativePromise(e))},o(t,"Promise",N)),t.Promise=F;var X,L=i("thenPatched");function A(t){var e=t.prototype,n=r(e,"then");if(!n||!1!==n.writable&&n.configurable){var o=e.then;e[c]=o,t.prototype.then=function(t,e){var n=this;return new F(function(t,e){o.call(n,t,e)}).then(t,e)},t[L]=!0}}if(j){A(j);var z=t.fetch;"function"==typeof z&&(t.fetch=(X=z,function(){var t=X.apply(this,arguments);if(t instanceof F)return t;var e=t.constructor;return e[L]||A(e),t}))}return Promise[e.__symbol__("uncaughtPromiseErrors")]=a,F});var e=Object.getOwnPropertyDescriptor,n=Object.defineProperty,r=Object.getPrototypeOf,o=Object.create,i=Array.prototype.slice,a="addEventListener",u="removeEventListener",c=Zone.__symbol__(a),s=Zone.__symbol__(u),f="true",l="false",p="__zone_symbol__";function h(t,e){return Zone.current.wrap(t,e)}function v(t,e,n,r,o){return Zone.current.scheduleMacroTask(t,e,n,r,o)}var d=Zone.__symbol__,g="undefined"!=typeof window,y=g?window:void 0,m=g&&y||"object"==typeof self&&self||t,b="removeAttribute",k=[null];function _(t,e){for(var n=t.length-1;n>=0;n--)"function"==typeof t[n]&&(t[n]=h(t[n],e+"_"+n));return t}function w(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&void 0===t.set)}var S="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,M=!("nw"in m)&&void 0!==m.process&&"[object process]"==={}.toString.call(m.process),T=!M&&!S&&!(!g||!y.HTMLElement),D=void 0!==m.process&&"[object process]"==={}.toString.call(m.process)&&!S&&!(!g||!y.HTMLElement),x={},E=function(t){if(t=t||m.event){var e=x[t.type];e||(e=x[t.type]=d("ON_PROPERTY"+t.type));var n=(this||t.target||m)[e],r=n&&n.apply(this,arguments);return void 0==r||r||t.preventDefault(),r}};function C(t,r,o){var i=e(t,r);if(!i&&o&&e(o,r)&&(i={enumerable:!0,configurable:!0}),i&&i.configurable){delete i.writable,delete i.value;var a=i.get,u=i.set,c=r.substr(2),s=x[c];s||(s=x[c]=d("ON_PROPERTY"+c)),i.set=function(e){var n=this;n||t!==m||(n=m),n&&(n[s]&&n.removeEventListener(c,E),u&&u.apply(n,k),"function"==typeof e?(n[s]=e,n.addEventListener(c,E,!1)):n[s]=null)},i.get=function(){var e=this;if(e||t!==m||(e=m),!e)return null;var n=e[s];if(n)return n;if(a){var o=a&&a.call(this);if(o)return i.set.call(this,o),"function"==typeof e[b]&&e.removeAttribute(r),o}return null},n(t,r,i)}}function O(t,e,n){if(e)for(var r=0;r<e.length;r++)C(t,"on"+e[r],n);else{var o=[];for(var i in t)"on"==i.substr(0,2)&&o.push(i);for(var a=0;a<o.length;a++)C(t,o[a],n)}}var P=d("originalInstance");function R(t){var e=m[t];if(e){m[d(t)]=e,m[t]=function(){var n=_(arguments,t);switch(n.length){case 0:this[P]=new e;break;case 1:this[P]=new e(n[0]);break;case 2:this[P]=new e(n[0],n[1]);break;case 3:this[P]=new e(n[0],n[1],n[2]);break;case 4:this[P]=new e(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},j(m[t],e);var r,o=new e(function(){});for(r in o)"XMLHttpRequest"===t&&"responseBlob"===r||function(e){"function"==typeof o[e]?m[t].prototype[e]=function(){return this[P][e].apply(this[P],arguments)}:n(m[t].prototype,e,{set:function(n){"function"==typeof n?(this[P][e]=h(n,t+"."+e),j(this[P][e],n)):this[P][e]=n},get:function(){return this[P][e]}})}(r);for(r in e)"prototype"!==r&&e.hasOwnProperty(r)&&(m[t][r]=e[r])}}function F(t,n,o){for(var i=t;i&&!i.hasOwnProperty(n);)i=r(i);!i&&t[n]&&(i=t);var a,u=d(n);if(i&&!(a=i[u])&&(a=i[u]=i[n],w(i&&e(i,n)))){var c=o(a,u,n);i[n]=function(){return c(this,arguments)},j(i[n],a)}return a}function j(t,e){t[d("OriginalDelegate")]=e}var I=!1,N=!1;function X(){if(I)return N;I=!0;try{var t=y.navigator.userAgent;return-1===t.indexOf("MSIE ")&&-1===t.indexOf("Trident/")&&-1===t.indexOf("Edge/")||(N=!0),N}catch(t){}}Zone.__load_patch("toString",function(t){var e=Function.prototype.toString,n=d("OriginalDelegate"),r=d("Promise"),o=d("Error"),i=function(){if("function"==typeof this){var i=this[n];if(i)return"function"==typeof i?e.apply(this[n],arguments):Object.prototype.toString.call(i);if(this===Promise){var a=t[r];if(a)return e.apply(a,arguments)}if(this===Error){var u=t[o];if(u)return e.apply(u,arguments)}}return e.apply(this,arguments)};i[n]=e,Function.prototype.toString=i;var a=Object.prototype.toString;Object.prototype.toString=function(){return this instanceof Promise?"[object Promise]":a.apply(this,arguments)}});var L={useG:!0},A={},z={},Z=/^__zone_symbol__(\w+)(true|false)$/,B="__zone_symbol__propagationStopped";function G(t,e,n){var o=n&&n.add||a,i=n&&n.rm||u,c=n&&n.listeners||"eventListeners",s=n&&n.rmAll||"removeAllListeners",h=d(o),v="."+o+":",g="prependListener",y="."+g+":",m=function(t,e,n){if(!t.isRemoved){var r=t.callback;"object"==typeof r&&r.handleEvent&&(t.callback=function(t){return r.handleEvent(t)},t.originalDelegate=r),t.invoke(t,e,[n]);var o=t.options;o&&"object"==typeof o&&o.once&&e[i].call(e,n.type,t.originalDelegate?t.originalDelegate:t.callback,o)}},b=function(e){if(e=e||t.event){var n=this||e.target||t,r=n[A[e.type][l]];if(r)if(1===r.length)m(r[0],n,e);else for(var o=r.slice(),i=0;i<o.length&&(!e||!0!==e[B]);i++)m(o[i],n,e)}},k=function(e){if(e=e||t.event){var n=this||e.target||t,r=n[A[e.type][f]];if(r)if(1===r.length)m(r[0],n,e);else for(var o=r.slice(),i=0;i<o.length&&(!e||!0!==e[B]);i++)m(o[i],n,e)}};function _(e,n){if(!e)return!1;var a=!0;n&&void 0!==n.useG&&(a=n.useG);var u=n&&n.vh,m=!0;n&&void 0!==n.chkDup&&(m=n.chkDup);var _=!1;n&&void 0!==n.rt&&(_=n.rt);for(var w=e;w&&!w.hasOwnProperty(o);)w=r(w);if(!w&&e[o]&&(w=e),!w)return!1;if(w[h])return!1;var S,M={},T=w[h]=w[o],D=w[d(i)]=w[i],x=w[d(c)]=w[c],E=w[d(s)]=w[s];n&&n.prepend&&(S=w[d(n.prepend)]=w[n.prepend]);var C=a?function(){if(!M.isExisting)return T.call(M.target,M.eventName,M.capture?k:b,M.options)}:function(t){return T.call(M.target,M.eventName,t.invoke,M.options)},O=a?function(t){if(!t.isRemoved){var e=A[t.eventName],n=void 0;e&&(n=e[t.capture?f:l]);var r=n&&t.target[n];if(r)for(var o=0;o<r.length;o++)if(r[o]===t){r.splice(o,1),t.isRemoved=!0,0===r.length&&(t.allRemoved=!0,t.target[n]=null);break}}if(t.allRemoved)return D.call(t.target,t.eventName,t.capture?k:b,t.options)}:function(t){return D.call(t.target,t.eventName,t.invoke,t.options)},P=n&&n.diff?n.diff:function(t,e){var n=typeof e;return"function"===n&&t.callback===e||"object"===n&&t.originalDelegate===e},R=Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")],F=function(e,n,r,o,i,c){return void 0===i&&(i=!1),void 0===c&&(c=!1),function(){var s=this||t,h=arguments[1];if(!h)return e.apply(this,arguments);var v=!1;if("function"!=typeof h){if(!h.handleEvent)return e.apply(this,arguments);v=!0}if(!u||u(e,h,s,arguments)){var d,g=arguments[0],y=arguments[2];if(R)for(var b=0;b<R.length;b++)if(g===R[b])return e.apply(this,arguments);var k=!1;void 0===y?d=!1:!0===y?d=!0:!1===y?d=!1:(d=!!y&&!!y.capture,k=!!y&&!!y.once);var _,w=Zone.current,S=A[g];if(S)_=S[d?f:l];else{var T=p+(g+l),D=p+(g+f);A[g]={},A[g][l]=T,A[g][f]=D,_=d?D:T}var x,E=s[_],C=!1;if(E){if(C=!0,m)for(b=0;b<E.length;b++)if(P(E[b],h))return}else E=s[_]=[];var O=s.constructor.name,F=z[O];F&&(x=F[g]),x||(x=O+n+g),M.options=y,k&&(M.options.once=!1),M.target=s,M.capture=d,M.eventName=g,M.isExisting=C;var j=a?L:null;j&&(j.taskData=M);var I=w.scheduleEventTask(x,h,j,r,o);return M.target=null,j&&(j.taskData=null),k&&(y.once=!0),I.options=y,I.target=s,I.capture=d,I.eventName=g,v&&(I.originalDelegate=h),c?E.unshift(I):E.push(I),i?s:void 0}}};return w[o]=F(T,v,C,O,_),S&&(w[g]=F(S,y,function(t){return S.call(M.target,M.eventName,t.invoke,M.options)},O,_,!0)),w[i]=function(){var e,n=this||t,r=arguments[0],o=arguments[2];e=void 0!==o&&(!0===o||!1!==o&&!!o&&!!o.capture);var i=arguments[1];if(!i)return D.apply(this,arguments);if(!u||u(D,i,n,arguments)){var a,c=A[r];c&&(a=c[e?f:l]);var s=a&&n[a];if(s)for(var p=0;p<s.length;p++){var h=s[p];if(P(h,i))return s.splice(p,1),h.isRemoved=!0,0===s.length&&(h.allRemoved=!0,n[a]=null),h.zone.cancelTask(h),_?n:void 0}return D.apply(this,arguments)}},w[c]=function(){for(var e=[],n=H(this||t,arguments[0]),r=0;r<n.length;r++){var o=n[r];e.push(o.originalDelegate?o.originalDelegate:o.callback)}return e},w[s]=function(){var e=this||t,n=arguments[0];if(n){var r=A[n];if(r){var o=e[r[l]],a=e[r[f]];if(o){var u=o.slice();for(h=0;h<u.length;h++)this[i].call(this,n,(c=u[h]).originalDelegate?c.originalDelegate:c.callback,c.options)}if(a)for(u=a.slice(),h=0;h<u.length;h++){var c;this[i].call(this,n,(c=u[h]).originalDelegate?c.originalDelegate:c.callback,c.options)}}}else{for(var p=Object.keys(e),h=0;h<p.length;h++){var v=Z.exec(p[h]),d=v&&v[1];d&&"removeListener"!==d&&this[s].call(this,d)}this[s].call(this,"removeListener")}if(_)return this},j(w[o],T),j(w[i],D),E&&j(w[s],E),x&&j(w[c],x),!0}for(var w=[],S=0;S<e.length;S++)w[S]=_(e[S],n);return w}function H(t,e){var n=[];for(var r in t){var o=Z.exec(r),i=o&&o[1];if(i&&(!e||i===e)){var a=t[r];if(a)for(var u=0;u<a.length;u++)n.push(a[u])}}return n}var W=d("zoneTask");function J(t,e,n,r){var o=null,i=null;n+=r;var a={};function u(e){var n=e.data;return n.args[0]=function(){try{e.invoke.apply(this,arguments)}finally{e.data&&e.data.isPeriodic||("number"==typeof n.handleId?delete a[n.handleId]:n.handleId&&(n.handleId[W]=null))}},n.handleId=o.apply(t,n.args),e}function c(t){return i(t.data.handleId)}o=F(t,e+=r,function(n){return function(o,i){if("function"==typeof i[0]){var s=v(e,i[0],{handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?i[1]||0:null,args:i},u,c);if(!s)return s;var f=s.data.handleId;return"number"==typeof f?a[f]=s:f&&(f[W]=s),f&&f.ref&&f.unref&&"function"==typeof f.ref&&"function"==typeof f.unref&&(s.ref=f.ref.bind(f),s.unref=f.unref.bind(f)),"number"==typeof f||f?f:s}return n.apply(t,i)}}),i=F(t,n,function(e){return function(n,r){var o,i=r[0];"number"==typeof i?o=a[i]:(o=i&&i[W])||(o=i),o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&("number"==typeof i?delete a[i]:i&&(i[W]=null),o.zone.cancelTask(o)):e.apply(t,r)}})}var Q=Object[d("defineProperty")]=Object.defineProperty,V=Object[d("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,q=Object.create,Y=d("unconfigurables");function K(t,e){return t&&t[Y]&&t[Y][e]}function U(t,e,n){return Object.isFrozen(n)||(n.configurable=!0),n.configurable||(t[Y]||Object.isFrozen(t)||Q(t,Y,{writable:!0,value:{}}),t[Y]&&(t[Y][e]=!0)),n}function $(t,e,n,r){try{return Q(t,e,n)}catch(i){if(!n.configurable)throw i;void 0===r?delete n.configurable:n.configurable=r;try{return Q(t,e,n)}catch(r){var o=null;try{o=JSON.stringify(n)}catch(t){o=n.toString()}console.log("Attempting to configure '"+e+"' with descriptor '"+o+"' on object '"+t+"' and got error, giving up: "+r)}}}var tt=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],et=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],nt=["load"],rt=["blur","error","focus","load","resize","scroll","messageerror"],ot=["bounce","finish","start"],it=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],at=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],ut=["close","error","open","message"],ct=["error","message"],st=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange"],tt,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function ft(t,e,n,r){t&&O(t,function(t,e,n){if(!n)return e;var r=n.filter(function(e){return e.target===t});if(!r||0===r.length)return e;var o=r[0].ignoreProperties;return e.filter(function(t){return-1===o.indexOf(t)})}(t,e,n),r)}function lt(t,c){if(!M||D){var s="undefined"!=typeof WebSocket;if(function(){if((T||D)&&!e(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var t=e(Element.prototype,"onclick");if(t&&!t.configurable)return!1}var r=XMLHttpRequest.prototype,o=e(r,"onreadystatechange");if(o){n(r,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}});var i=!!(u=new XMLHttpRequest).onreadystatechange;return n(r,"onreadystatechange",o||{}),i}var a=d("fake");n(r,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return this[a]},set:function(t){this[a]=t}});var u,c=function(){};return(u=new XMLHttpRequest).onreadystatechange=c,i=u[a]===c,u.onreadystatechange=null,i}()){var f=c.__Zone_ignore_on_properties;if(T){var l=window;ft(l,st.concat(["messageerror"]),f,r(l)),ft(Document.prototype,st,f),void 0!==l.SVGElement&&ft(l.SVGElement.prototype,st,f),ft(Element.prototype,st,f),ft(HTMLElement.prototype,st,f),ft(HTMLMediaElement.prototype,et,f),ft(HTMLFrameSetElement.prototype,tt.concat(rt),f),ft(HTMLBodyElement.prototype,tt.concat(rt),f),ft(HTMLFrameElement.prototype,nt,f),ft(HTMLIFrameElement.prototype,nt,f);var p=l.HTMLMarqueeElement;p&&ft(p.prototype,ot,f);var v=l.Worker;v&&ft(v.prototype,ct,f)}ft(XMLHttpRequest.prototype,it,f);var g=c.XMLHttpRequestEventTarget;g&&ft(g&&g.prototype,it,f),"undefined"!=typeof IDBIndex&&(ft(IDBIndex.prototype,at,f),ft(IDBRequest.prototype,at,f),ft(IDBOpenDBRequest.prototype,at,f),ft(IDBDatabase.prototype,at,f),ft(IDBTransaction.prototype,at,f),ft(IDBCursor.prototype,at,f)),s&&ft(WebSocket.prototype,ut,f)}else!function(){for(var t=function(t){var e=st[t],n="on"+e;self.addEventListener(e,function(t){var e,r,o=t.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][pt]&&((e=h(o[n],r))[pt]=o[n],o[n]=e),o=o.parentElement},!0)},e=0;e<st.length;e++)t(e)}(),R("XMLHttpRequest"),s&&function(t,n){var r=n.WebSocket;n.EventTarget||G(n,[r.prototype]),n.WebSocket=function(t,n){var c,s,f=arguments.length>1?new r(t,n):new r(t),l=e(f,"onmessage");return l&&!1===l.configurable?(c=o(f),s=f,[a,u,"send","close"].forEach(function(t){c[t]=function(){var e=i.call(arguments);if(t===a||t===u){var n=e.length>0?e[0]:void 0;if(n){var r=Zone.__symbol__("ON_PROPERTY"+n);f[r]=c[r]}}return f[t].apply(f,e)}})):c=f,O(c,["close","error","message","open"],s),c};var c=n.WebSocket;for(var s in r)c[s]=r[s]}(0,c)}}var pt=d("unbound");Zone.__load_patch("util",function(t,e,n){n.patchOnProperties=O,n.patchMethod=F,n.bindArguments=_}),Zone.__load_patch("timers",function(t){J(t,"set","clear","Timeout"),J(t,"set","clear","Interval"),J(t,"set","clear","Immediate")}),Zone.__load_patch("requestAnimationFrame",function(t){J(t,"request","cancel","AnimationFrame"),J(t,"mozRequest","mozCancel","AnimationFrame"),J(t,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(t,e){for(var n=["alert","prompt","confirm"],r=0;r<n.length;r++)F(t,n[r],function(n,r,o){return function(r,i){return e.current.run(n,t,i,o)}})}),Zone.__load_patch("EventTarget",function(t,e,n){var r=e.__symbol__("BLACK_LISTED_EVENTS");t[r]&&(e[r]=t[r]),function(t,e){!function(t,e){var n=t.Event;n&&n.prototype&&e.patchMethod(n.prototype,"stopImmediatePropagation",function(t){return function(e,n){e[B]=!0,t&&t.apply(e,n)}})}(t,e)}(t,n),function(t,e){var n="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",r="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),o=[],i=t.wtf,a=n.split(",");i?o=a.map(function(t){return"HTML"+t+"Element"}).concat(r):t.EventTarget?o.push("EventTarget"):o=r;for(var u=t.__Zone_disable_IE_check||!1,c=t.__Zone_enable_cross_context_check||!1,s=X(),h="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",v=0;v<st.length;v++){var d=p+((k=st[v])+l),g=p+(k+f);A[k]={},A[k][l]=d,A[k][f]=g}for(v=0;v<n.length;v++)for(var y=a[v],m=z[y]={},b=0;b<st.length;b++){var k;m[k=st[b]]=y+".addEventListener:"+k}var _=[];for(v=0;v<o.length;v++){var w=t[o[v]];_.push(w&&w.prototype)}G(t,_,{vh:function(t,e,n,r){if(!u&&s){if(c)try{var o;if("[object FunctionWrapper]"===(o=e.toString())||o==h)return t.apply(n,r),!1}catch(e){return t.apply(n,r),!1}else if("[object FunctionWrapper]"===(o=e.toString())||o==h)return t.apply(n,r),!1}else if(c)try{e.toString()}catch(e){return t.apply(n,r),!1}return!0}}),e.patchEventTarget=G}(t,n);var o=t.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(t,[o.prototype]),R("MutationObserver"),R("WebKitMutationObserver"),R("IntersectionObserver"),R("FileReader")}),Zone.__load_patch("on_property",function(t,n,r){lt(0,t),Object.defineProperty=function(t,e,n){if(K(t,e))throw new TypeError("Cannot assign to read only property '"+e+"' of "+t);var r=n.configurable;return"prototype"!==e&&(n=U(t,e,n)),$(t,e,n,r)},Object.defineProperties=function(t,e){return Object.keys(e).forEach(function(n){Object.defineProperty(t,n,e[n])}),t},Object.create=function(t,e){return"object"!=typeof e||Object.isFrozen(e)||Object.keys(e).forEach(function(n){e[n]=U(t,n,e[n])}),q(t,e)},Object.getOwnPropertyDescriptor=function(t,e){var n=V(t,e);return K(t,e)&&(n.configurable=!1),n},function(n){if((T||D)&&"registerElement"in t.document){var r=document.registerElement,o=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(t,n){return n&&n.prototype&&o.forEach(function(t){var r,o,i,a,u="Document.registerElement::"+t,c=n.prototype;if(c.hasOwnProperty(t)){var s=e(c,t);s&&s.value?(s.value=h(s.value,u),a=(i=s).configurable,$(r=n.prototype,o=t,i=U(r,o,i),a)):c[t]=h(c[t],u)}else c[t]&&(c[t]=h(c[t],u))}),r.call(document,t,n)},j(document.registerElement,r)}}()}),Zone.__load_patch("canvas",function(t){var e=t.HTMLCanvasElement;void 0!==e&&e.prototype&&e.prototype.toBlob&&function(t,n,r){var o=null;function i(t){var e=t.data;return e.args[e.cbIdx]=function(){t.invoke.apply(this,arguments)},o.apply(e.target,e.args),t}o=F(e.prototype,"toBlob",function(t){return function(e,n){var r=function(t,e){return{name:"HTMLCanvasElement.toBlob",target:t,cbIdx:0,args:e}}(e,n);return r.cbIdx>=0&&"function"==typeof n[r.cbIdx]?v(r.name,n[r.cbIdx],r,i,null):t.apply(e,n)}})}()}),Zone.__load_patch("XHR",function(t,e){!function(e){var u=XMLHttpRequest.prototype,f=u[c],l=u[s];if(!f){var p=t.XMLHttpRequestEventTarget;if(p){var h=p.prototype;f=h[c],l=h[s]}}var d="readystatechange",g="scheduled";function y(t){XMLHttpRequest[i]=!1;var e=t.data,r=e.target,a=r[o];f||(f=r[c],l=r[s]),a&&l.call(r,d,a);var u=r[o]=function(){r.readyState===r.DONE&&!e.aborted&&XMLHttpRequest[i]&&t.state===g&&t.invoke()};return f.call(r,d,u),r[n]||(r[n]=t),_.apply(r,e.args),XMLHttpRequest[i]=!0,t}function m(){}function b(t){var e=t.data;return e.aborted=!0,w.apply(e.target,e.args)}var k=F(u,"open",function(){return function(t,e){return t[r]=0==e[2],t[a]=e[1],k.apply(t,e)}}),_=F(u,"send",function(){return function(t,e){return t[r]?_.apply(t,e):v("XMLHttpRequest.send",m,{target:t,url:t[a],isPeriodic:!1,delay:null,args:e,aborted:!1},y,b)}}),w=F(u,"abort",function(){return function(t){var e=t[n];if(e&&"string"==typeof e.type){if(null==e.cancelFn||e.data&&e.data.aborted)return;e.zone.cancelTask(e)}}})}();var n=d("xhrTask"),r=d("xhrSync"),o=d("xhrListener"),i=d("xhrScheduled"),a=d("xhrURL")}),Zone.__load_patch("geolocation",function(t){t.navigator&&t.navigator.geolocation&&function(t,n){for(var r=t.constructor.name,o=function(o){var i=n[o],a=t[i];if(a){if(!w(e(t,i)))return"continue";t[i]=function(t){var e=function(){return t.apply(this,_(arguments,r+"."+i))};return j(e,t),e}(a)}},i=0;i<n.length;i++)o(i)}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(t,e){function n(e){return function(n){H(t,e).forEach(function(r){var o=t.PromiseRejectionEvent;if(o){var i=new o(e,{promise:n.promise,reason:n.rejection});r.invoke(i)}})}}t.PromiseRejectionEvent&&(e[d("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),e[d("rejectionHandledHandler")]=n("rejectionhandled"))})}()}).call(e,n("GTd5"))},emBC:function(t,e,n){var r=n("CDXM"),o=n("8Gg3");r(r.S+r.F*(Number.parseInt!=o),"Number",{parseInt:o})},ewdp:function(t,e,n){var r=n("tose"),o=n("+pQw"),i=n("2Fuj");t.exports=n("V+0c")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,c=0;u>c;)r.f(t,n=a[c++],e[n]);return t}},"f/CF":function(t,e,n){n("mzUQ"),n("yE/l"),n("+c1l"),n("4TT8"),n("CCJL"),n("JnZr"),n("6GwK"),n("FyA0"),n("d3uY"),n("CxwD"),n("YvuM"),n("LGbj"),n("rq+B"),n("mX/x"),n("/JsI"),n("PM/s"),n("W+Ug"),n("b8HQ"),t.exports=n("b4gG").Object},f08B:function(t,e,n){var r=n("JXkd"),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},fASj:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(4);r(r.P+r.F*!n("bhtb")([].every,!0),"Array",{every:function(t){return o(this,t,arguments[1])}})},fC8q:function(t,e,n){var r=n("dXJ/"),o=n("3r0D")("iterator"),i=n("lexG");t.exports=n("b4gG").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},fHxy:function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=r.key,a=r.set;r.exp({defineMetadata:function(t,e,n,r){a(t,e,o(n),i(r))}})},feEK:function(t,e,n){n("x0nE"),n("y2Qv"),n("ABVq"),n("u/Kp"),n("y6Hp"),n("zjx1"),n("py7J"),n("0MXQ"),n("LAe3"),n("RXfV"),n("rtXJ"),n("oebr"),n("tDzp"),n("A3hK"),n("FALa"),n("nGWS"),n("SkRu"),t.exports=n("b4gG").Math},fnpY:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("YymB")("find")},gBtn:function(t,e,n){var r=n("ZI9W"),o=n("CDXM"),i=n("Iclu")("metadata"),a=i.store||(i.store=new(n("QZhw"))),u=function(t,e,n){var o=a.get(t);if(!o){if(!n)return;a.set(t,o=new r)}var i=o.get(e);if(!i){if(!n)return;o.set(e,i=new r)}return i};t.exports={store:a,map:u,has:function(t,e,n){var r=u(e,n,!1);return void 0!==r&&r.has(t)},get:function(t,e,n){var r=u(e,n,!1);return void 0===r?void 0:r.get(t)},set:function(t,e,n,r){u(n,r,!0).set(t,e)},keys:function(t,e){var n=u(t,e,!1),r=[];return n&&n.forEach(function(t,e){r.push(e)}),r},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){o(o.S,"Reflect",t)}}},gNkH:function(t,e,n){t.exports=!n("V+0c")&&!n("umMR")(function(){return 7!=Object.defineProperty(n("BQSv")("div"),"a",{get:function(){return 7}}).a})},gZpL:function(t,e,n){var r=n("6De9"),o=n("CDXM"),i=n("+pQw");o(o.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(i(t),e)}})},gdNQ:function(t,e,n){var r=n("CDXM"),o=n("+pQw"),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){o(t);try{return i&&i(t),!0}catch(t){return!1}}})},gxdV:function(t,e,n){var r=n("tose"),o=n("piOq");t.exports=n("V+0c")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"h/l+":function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(0),i=n("bhtb")([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},iXSw:function(t,e,n){"use strict";n("NhIS")("strike",function(t){return function(){return t(this,"strike","","")}})},jHeK:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(3);r(r.P+r.F*!n("bhtb")([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},jMsF:function(t,e,n){"use strict";var r=n("CDXM"),o=n("9wYb"),i=n("mnRY"),a=n("tDHD"),u=1..toFixed,c=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(t,e){for(var n=-1,r=e;++n<6;)s[n]=(r+=t*s[n])%1e7,r=c(r/1e7)},p=function(t){for(var e=6,n=0;--e>=0;)s[e]=c((n+=s[e])/t),n=n%t*1e7},h=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==s[t]){var n=String(s[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},v=function(t,e,n){return 0===e?n:e%2==1?v(t,e-1,n*t):v(t*t,e/2,n)};r(r.P+r.F*(!!u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n("umMR")(function(){u.call({})})),"Number",{toFixed:function(t){var e,n,r,u,c=i(this,f),s=o(t),d="",g="0";if(s<0||s>20)throw RangeError(f);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*v(2,69,1))-69)<0?c*v(2,-e,1):c/v(2,e,1),n*=4503599627370496,(e=52-e)>0){for(l(0,n),r=s;r>=7;)l(1e7,0),r-=7;for(l(v(10,r,1),0),r=e-1;r>=23;)p(1<<23),r-=23;p(1<<r),l(1,1),p(2),g=h()}else l(0,n),l(1<<-e,0),g=h()+a.call("0",s);return s>0?d+((u=g.length)<=s?"0."+a.call("0",s-u)+g:g.slice(0,u-s)+"."+g.slice(u-s)):d+g}})},jOBH:function(t,e,n){n("Rl2/"),n("UdES"),n("Cz5P"),n("cOEa"),n("xuTE"),n("bqLj"),n("+aW+"),n("h/l+"),n("bPmT"),n("ucNH"),n("jHeK"),n("fASj"),n("HzDK"),n("xLjm"),n("p0Sw"),n("Q7OE"),n("Abrq"),n("SxDa"),n("fnpY"),n("Mr9n"),n("Umeq"),n("xB6L"),t.exports=n("b4gG").Array},kFjN:function(t,e,n){var r=n("CDXM"),o=n("Wy9r"),i=n("umMR"),a=n("9BUF"),u="["+a+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,e,n){var o={},u=i(function(){return!!a[t]()||"\u200b\x85"!="\u200b\x85"[t]()}),c=o[t]=u?e(l):a[t];n&&(o[n]=c),r(r.P+r.F*u,"String",o)},l=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(s,"")),t};t.exports=f},lexG:function(t,e){t.exports={}},lfBE:function(t,e,n){var r=n("ptrv"),o=n("gxdV"),i=n("rMsi"),a=n("c09d")("src"),u=Function.toString,c=(""+u).split("toString");n("b4gG").inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,a)||o(n,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||u.call(this)})},lhbR:function(t,e,n){"use strict";var r=n("CDXM"),o=n("rppw"),i=n("F6ce"),a="".startsWith;r(r.P+r.F*n("TmDx")("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},lpfi:function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},lzDK:function(t,e){e.f=Object.getOwnPropertySymbols},"m/sW":function(t,e,n){var r=n("2Fuj"),o=n("lzDK"),i=n("9e9+");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),c=i.f,s=0;u.length>s;)c.call(t,a=u[s++])&&e.push(a);return e}},"mX/x":function(t,e,n){var r=n("JXkd");n("QN+J")("isExtensible",function(t){return function(e){return!!r(e)&&(!t||t(e))}})},mnRY:function(t,e,n){var r=n("VceJ");t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},mzUQ:function(t,e,n){"use strict";var r=n("ptrv"),o=n("rMsi"),i=n("V+0c"),a=n("CDXM"),u=n("lfBE"),c=n("xI8H").KEY,s=n("umMR"),f=n("Iclu"),l=n("P6IN"),p=n("c09d"),h=n("3r0D"),v=n("qrqn"),d=n("Cc13"),g=n("m/sW"),y=n("rKhO"),m=n("+pQw"),b=n("JXkd"),k=n("+GRi"),_=n("A1WY"),w=n("piOq"),S=n("51pc"),M=n("y/ue"),T=n("6De9"),D=n("tose"),x=n("2Fuj"),E=T.f,C=D.f,O=M.f,P=r.Symbol,R=r.JSON,F=R&&R.stringify,j=h("_hidden"),I=h("toPrimitive"),N={}.propertyIsEnumerable,X=f("symbol-registry"),L=f("symbols"),A=f("op-symbols"),z=Object.prototype,Z="function"==typeof P,B=r.QObject,G=!B||!B.prototype||!B.prototype.findChild,H=i&&s(function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(z,e);r&&delete z[e],C(t,e,n),r&&t!==z&&C(z,e,r)}:C,W=function(t){var e=L[t]=S(P.prototype);return e._k=t,e},J=Z&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Q=function(t,e,n){return t===z&&Q(A,e,n),m(t),e=_(e,!0),m(n),o(L,e)?(n.enumerable?(o(t,j)&&t[j][e]&&(t[j][e]=!1),n=S(n,{enumerable:w(0,!1)})):(o(t,j)||C(t,j,w(1,{})),t[j][e]=!0),H(t,e,n)):C(t,e,n)},V=function(t,e){m(t);for(var n,r=g(e=k(e)),o=0,i=r.length;i>o;)Q(t,n=r[o++],e[n]);return t},q=function(t){var e=N.call(this,t=_(t,!0));return!(this===z&&o(L,t)&&!o(A,t))&&(!(e||!o(this,t)||!o(L,t)||o(this,j)&&this[j][t])||e)},Y=function(t,e){if(t=k(t),e=_(e,!0),t!==z||!o(L,e)||o(A,e)){var n=E(t,e);return!n||!o(L,e)||o(t,j)&&t[j][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=O(k(t)),r=[],i=0;n.length>i;)o(L,e=n[i++])||e==j||e==c||r.push(e);return r},U=function(t){for(var e,n=t===z,r=O(n?A:k(t)),i=[],a=0;r.length>a;)!o(L,e=r[a++])||n&&!o(z,e)||i.push(L[e]);return i};Z||(u((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(A,n),o(this,j)&&o(this[j],t)&&(this[j][t]=!1),H(this,t,w(1,n))};return i&&G&&H(z,t,{configurable:!0,set:e}),W(t)}).prototype,"toString",function(){return this._k}),T.f=Y,D.f=Q,n("PNtC").f=M.f=K,n("9e9+").f=q,n("lzDK").f=U,i&&!n("KGrn")&&u(z,"propertyIsEnumerable",q,!0),v.f=function(t){return W(h(t))}),a(a.G+a.W+a.F*!Z,{Symbol:P});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var et=x(h.store),nt=0;et.length>nt;)d(et[nt++]);a(a.S+a.F*!Z,"Symbol",{for:function(t){return o(X,t+="")?X[t]:X[t]=P(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in X)if(X[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!Z,"Object",{create:function(t,e){return void 0===e?S(t):V(S(t),e)},defineProperty:Q,defineProperties:V,getOwnPropertyDescriptor:Y,getOwnPropertyNames:K,getOwnPropertySymbols:U}),R&&a(a.S+a.F*(!Z||s(function(){var t=P();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!J(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,F.apply(R,r)}}),P.prototype[I]||n("gxdV")(P.prototype,I,P.prototype.valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},nFOG:function(t,e,n){n("YD56")("split",2,function(t,e,r){"use strict";var o=n("TM12"),i=r,a=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var u=void 0===/()??/.exec("")[1];r=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!o(t))return i.call(n,t,e);var r,c,s,f,l,p=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,d=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,h+"g");for(u||(r=new RegExp("^"+g.source+"$(?!\\s)",h));(c=g.exec(n))&&!((s=c.index+c[0].length)>v&&(p.push(n.slice(v,c.index)),!u&&c.length>1&&c[0].replace(r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c.length>1&&c.index<n.length&&a.apply(p,c.slice(1)),f=c[0].length,v=s,p.length>=d));)g.lastIndex===c.index&&g.lastIndex++;return v===n.length?!f&&g.test("")||p.push(""):p.push(n.slice(v)),p.length>d?p.slice(0,d):p}}else"0".split(void 0,0).length&&(r=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(n,o){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,o):r.call(String(i),n,o)},r]})},nGWS:function(t,e,n){var r=n("CDXM"),o=n("V/jj"),i=Math.exp;r(r.S,"Math",{tanh:function(t){var e=o(t=+t),n=o(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t))}})},ncNB:function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=r.get,a=r.key;r.exp({getOwnMetadata:function(t,e){return i(t,o(e),arguments.length<3?void 0:a(arguments[2]))}})},oebr:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{log1p:n("lpfi")})},"p/bR":function(t,e,n){var r=n("pa70"),o=n("ULWX"),i=n("KpI+"),a=n("+pQw"),u=n("rppw"),c=n("fC8q"),s={},f={};(e=t.exports=function(t,e,n,l,p){var h,v,d,g,y=p?function(){return t}:c(t),m=r(n,l,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(h=u(t.length);h>b;b++)if((g=e?m(a(v=t[b])[0],v[1]):m(t[b]))===s||g===f)return g}else for(d=y.call(t);!(v=d.next()).done;)if((g=o(d,m,v.value,e))===s||g===f)return g}).BREAK=s,e.RETURN=f},p0Sw:function(t,e,n){"use strict";var r=n("CDXM"),o=n("vyV2")(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n("bhtb")(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},p9up:function(t,e,n){"use strict";var r=n("uNkO"),o=n("JXkd"),i=n("5b+r"),a=[].slice,u={};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),c=function(){var r=n.concat(a.call(arguments));return this instanceof c?function(t,e,n){if(!(e in u)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";u[e]=Function("F,a","return new F("+r.join(",")+")")}return u[e](t,n)}(e,r.length,r):i(e,r,t)};return o(e.prototype)&&(c.prototype=e.prototype),c}},pBmS:function(t,e,n){var r=n("lfBE");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},pCjf:function(t,e,n){"use strict";var r=n("CDXM"),o=n("RT4T"),i=n("A1WY");r(r.P+r.F*n("umMR")(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=o(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},pEMT:function(t,e,n){n("RfZa"),n("pCjf"),n("Gki+"),n("vr64"),n("I+CO"),t.exports=Date},pHtE:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},pa70:function(t,e,n){var r=n("uNkO");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},piOq:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ptrv:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},py7J:function(t,e,n){var r=n("CDXM"),o=n("V/jj");r(r.S+r.F*(o!=Math.expm1),"Math",{expm1:o})},qrqn:function(t,e,n){e.f=n("3r0D")},r24B:function(t,e,n){n("AOSR"),n("Kp6H"),n("T+CM"),n("Rl2/"),n("tUpi"),n("weQ6"),n("IGm2"),n("PX9N"),n("lhbR"),n("ML5l"),n("M720"),n("raCe"),n("tln3"),n("AdFz"),n("a/bl"),n("6F6V"),n("GMpo"),n("6tM8"),n("ueCa"),n("iXSw"),n("DTeS"),n("HK9U"),n("dVlF"),n("CjAR"),n("Zy8t"),n("nFOG"),t.exports=n("b4gG").String},rIdM:function(t,e,n){"use strict";var r=n("2Fuj"),o=n("lzDK"),i=n("9e9+"),a=n("RT4T"),u=n("Wo2w"),c=Object.assign;t.exports=!c||n("umMR")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,s=1,f=o.f,l=i.f;c>s;)for(var p,h=u(arguments[s++]),v=f?r(h).concat(f(h)):r(h),d=v.length,g=0;d>g;)l.call(h,p=v[g++])&&(n[p]=h[p]);return n}:c},rKhO:function(t,e,n){var r=n("VceJ");t.exports=Array.isArray||function(t){return"Array"==r(t)}},rMMT:function(t,e,n){var r=n("CDXM"),o=n("uNkO"),i=n("+pQw"),a=(n("ptrv").Reflect||{}).apply,u=Function.apply;r(r.S+r.F*!n("umMR")(function(){a(function(){})}),"Reflect",{apply:function(t,e,n){var r=o(t),c=i(n);return a?a(r,e,c):u.call(r,e,c)}})},rMsi:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},raCe:function(t,e,n){"use strict";n("NhIS")("blink",function(t){return function(){return t(this,"blink","","")}})},rppw:function(t,e,n){var r=n("9wYb"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"rq+B":function(t,e,n){var r=n("JXkd");n("QN+J")("isSealed",function(t){return function(e){return!r(e)||!!t&&t(e)}})},rtXJ:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},"s+3V":function(t,e,n){"use strict";var r=n("CDXM"),o=n("umMR"),i=n("mnRY"),a=1..toPrecision;r(r.P+r.F*(o(function(){return"1"!==a.call(1,void 0)})||!o(function(){a.call({})})),"Number",{toPrecision:function(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},soMw:function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=r.keys,a=r.key;r.exp({getOwnMetadataKeys:function(t){return i(o(t),arguments.length<2?void 0:a(arguments[1]))}})},t6ta:function(t,e,n){var r=n("gBtn"),o=n("+pQw"),i=n("uNkO"),a=r.key,u=r.set;r.exp({metadata:function(t,e){return function(n,r){u(t,e,(void 0!==r?o:i)(n),a(r))}}})},tDHD:function(t,e,n){"use strict";var r=n("9wYb"),o=n("Wy9r");t.exports=function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},tDzp:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},tUpi:function(t,e,n){"use strict";var r=n("CDXM"),o=n("PeZi")(!1);r(r.P,"String",{codePointAt:function(t){return o(this,t)}})},tWtF:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},tln3:function(t,e,n){"use strict";n("NhIS")("bold",function(t){return function(){return t(this,"b","","")}})},tose:function(t,e,n){var r=n("+pQw"),o=n("gNkH"),i=n("A1WY"),a=Object.defineProperty;e.f=n("V+0c")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"u/Kp":function(t,e,n){var r=n("CDXM"),o=n("tWtF");r(r.S,"Math",{cbrt:function(t){return o(t=+t)*Math.pow(Math.abs(t),1/3)}})},uMIg:function(t,e,n){var r=n("CDXM");r(r.S,"Number",{isInteger:n("f08B")})},uNkO:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},ucNH:function(t,e,n){"use strict";var r=n("CDXM"),o=n("BCYq")(2);r(r.P+r.F*!n("bhtb")([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},ueCa:function(t,e,n){"use strict";n("NhIS")("small",function(t){return function(){return t(this,"small","","")}})},umMR:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},vr64:function(t,e,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("lfBE")(r,"toString",function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"})},vyV2:function(t,e,n){var r=n("+GRi"),o=n("rppw"),i=n("KM3d");t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},"w/BM":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},wJYt:function(t,e,n){var r=n("CDXM");r(r.S,"Reflect",{ownKeys:n("NISB")})},wLW2:function(t,e,n){var r=n("CDXM"),o=n("5oDA");o&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){o.check(t,e);try{return o.set(t,e),!0}catch(t){return!1}}})},weQ6:function(t,e,n){"use strict";var r=n("CDXM"),o=n("rppw"),i=n("F6ce"),a="".endsWith;r(r.P+r.F*n("TmDx")("endsWith"),"String",{endsWith:function(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(e.length),u=void 0===n?r:Math.min(o(n),r),c=String(t);return a?a.call(e,c,u):e.slice(u-c.length,u)===c}})},x0nE:function(t,e,n){var r=n("CDXM"),o=n("lpfi"),i=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:o(t-1+i(t-1)*i(t+1))}})},xB6L:function(t,e,n){"use strict";var r=n("YymB"),o=n("w/BM"),i=n("lexG"),a=n("+GRi");t.exports=n("WsSm")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},xI8H:function(t,e,n){var r=n("c09d")("meta"),o=n("JXkd"),i=n("rMsi"),a=n("tose").f,u=0,c=Object.isExtensible||function(){return!0},s=!n("umMR")(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&c(t)&&!i(t,r)&&f(t),t}}},xLjm:function(t,e,n){"use strict";var r=n("CDXM"),o=n("OGmI");r(r.P+r.F*!n("bhtb")([].reduceRight,!0),"Array",{reduceRight:function(t){return o(this,t,arguments.length,arguments[1],!0)}})},xuTE:function(t,e,n){"use strict";var r=n("CDXM"),o=n("+GRi"),i=[].join;r(r.P+r.F*(n("Wo2w")!=Object||!n("bhtb")(i)),"Array",{join:function(t){return i.call(o(this),void 0===t?",":t)}})},xxX9:function(t,e,n){var r=n("tWtF"),o=Math.pow,i=o(2,-52),a=o(2,-23),u=o(2,127)*(2-a),c=o(2,-126);t.exports=Math.fround||function(t){var e,n,o=Math.abs(t),s=r(t);return o<c?s*(o/c/a+1/i-1/i)*c*a:(n=(e=(1+a/i)*o)-(e-o))>u||n!=n?s*(1/0):s*n}},"y/ue":function(t,e,n){var r=n("+GRi"),o=n("PNtC").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},y2Qv:function(t,e,n){var r=n("CDXM"),o=Math.asinh;r(r.S+r.F*!(o&&1/o(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},y6Hp:function(t,e,n){var r=n("CDXM");r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},"yE/l":function(t,e,n){var r=n("CDXM");r(r.S,"Object",{create:n("51pc")})},yIWP:function(t,e,n){var r=n("Iclu")("keys"),o=n("c09d");t.exports=function(t){return r[t]||(r[t]=o(t))}},yJzT:function(t,e,n){n("b8HQ"),n("Rl2/"),n("dU6i"),n("Ps07"),t.exports=n("b4gG").Set},zbpw:function(t,e,n){n("by2N"),t.exports=n("b4gG").parseInt},zjx1:function(t,e,n){var r=n("CDXM"),o=Math.exp;r(r.S,"Math",{cosh:function(t){return(o(t=+t)+o(-t))/2}})}},[1]);;
webpackJsonp([1],{"/Lkn":function(e,t,n){"use strict";var r=n("pICe");t.dragula=r.dragula;var o=n("Kg3V");t.DragulaDirective=o.DragulaDirective;var i=n("sY2v");t.DragulaService=i.DragulaService;var s=n("NijM");t.DragulaModule=s.DragulaModule},0:function(e,t,n){e.exports=n("cDNt")},"1j/l":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=Array.isArray||function(e){return e&&"number"==typeof e.length}},"2kLc":function(e,t,n){"use strict";t.a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var n=Number.POSITIVE_INFINITY,a=null,u=e[e.length-1];return Object(i.a)(u)?(a=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(n=e.pop())):"number"==typeof u&&(n=e.pop()),null===a&&1===e.length&&e[0]instanceof r.a?e[0]:Object(s.a)(n)(new o.a(e,a))};var r=n("AP4T"),o=n("Oryw"),i=n("3iOE"),s=n("bywS")},"3iOE":function(e,t,n){"use strict";t.a=function(e){return e&&"function"==typeof e.schedule}},"6Xbx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.__extends=function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},n.d(t,"__assign",function(){return o}),t.__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},t.__decorate=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},t.__param=function(e,t){return function(n,r){t(n,r,e)}},t.__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},t.__awaiter=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})},t.__generator=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},t.__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},t.__values=i,t.__read=s,t.__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},t.__await=a,t.__asyncGenerator=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||u(e,t)})})}function u(e,t){try{(n=o[e](t)).value instanceof a?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}var n}function l(e){u("next",e)}function c(e){u("throw",e)}function d(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}},t.__asyncDelegator=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){e[r]&&(t[r]=function(t){return(n=!n)?{value:a(e[r](t)),done:"return"===r}:o?o(t):t})}},t.__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator];return t?t.call(e):i(e)},t.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},t.__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},t.__importDefault=function(e){return e&&e.__esModule?e:{default:e}};var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function i(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function a(e){return this instanceof a?(this.v=e,this):new a(e)}},"7MSi":function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n("GTd5"))},"8Ut3":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("6Xbx"),o=function(e){function t(t,n){e.call(this),this.value=t,this.scheduler=n,this._isScalar=!0,n&&(this._isScalar=!1)}return Object(r.__extends)(t,e),t.create=function(e,n){return new t(e,n)},t.dispatch=function(e){var t=e.value,n=e.subscriber;e.done?n.complete():(n.next(t),n.closed||(e.done=!0,this.schedule(e)))},t.prototype._subscribe=function(e){var n=this.value,r=this.scheduler;if(r)return r.schedule(t.dispatch,0,{done:!1,value:n,subscriber:e});e.next(n),e.closed||e.complete()},t}(n("AP4T").a)},"8ofh":function(e,t,n){"use strict";t.a=function(e){return r=e,i};var r,o=n("NePw");function i(){try{return r.apply(this,arguments)}catch(e){return o.a.e=e,o.a}}},"8z3O":function(e,t,n){"use strict";var r={},o="(?:^|\\s)",i="(?:\\s|$)";function s(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp(o+e+i,"g"),t}e.exports={add:function(e,t){var n=e.className;n.length?s(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(s(t)," ").trim()}}},AP4T:function(e,t,n){"use strict";var r=n("xIGM"),o=n("E9/g"),i=n("V7AE"),s=n("grVA"),a=n("mz3w");n.d(t,"a",function(){return u});var u=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,a=function(e,t,n){if(e){if(e instanceof o.a)return e;if(e[i.a])return e[i.a]()}return e||t||n?new o.a(e,t,n):new o.a(s.a)}(e,t,n);if(r?r.call(a,this.source):a.add(this.source||!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.syncErrorThrown=!0,e.syncErrorValue=t,e.error(t)}},e.prototype.forEach=function(e,t){var n=this;if(t||(r.a.Rx&&r.a.Rx.config&&r.a.Rx.config.Promise?t=r.a.Rx.config.Promise:r.a.Promise&&(t=r.a.Promise)),!t)throw new Error("no Promise impl found");return new t(function(t,r){var o;o=n.subscribe(function(t){if(o)try{e(t)}catch(e){r(e),o.unsubscribe()}else e(t)},r,t)})},e.prototype._subscribe=function(e){return this.source.subscribe(e)},e.prototype[a.a]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return 0===e.length?this:((n=e)?1===n.length?n[0]:function(e){return n.reduce(function(e,t){return t(e)},e)}:function(){})(this);var n},e.prototype.toPromise=function(e){var t=this;if(e||(r.a.Rx&&r.a.Rx.config&&r.a.Rx.config.Promise?e=r.a.Rx.config.Promise:r.a.Promise&&(e=r.a.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}()},B1iP:function(e,t,n){"use strict";t.a=function(e){return"function"==typeof e}},D0JW:function(e,t,n){"use strict";(function(t){var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,n("GTd5"))},"E9/g":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("6Xbx"),o=n("B1iP"),i=n("qLnt"),s=n("grVA"),a=n("V7AE"),u=function(e){function t(t,n,r){switch(e.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=s.a;break;case 1:if(!t){this.destination=s.a;break}if("object"==typeof t){if(c(t)){var o=t[a.a]();this.syncErrorThrowable=o.syncErrorThrowable,this.destination=o,o.add(this)}else this.syncErrorThrowable=!0,this.destination=new l(this,t);break}default:this.syncErrorThrowable=!0,this.destination=new l(this,t,n,r)}}return Object(r.__extends)(t,e),t.prototype[a.a]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parent,t=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=e,this._parents=t,this},t}(i.a),l=function(e){function t(t,n,r,i){var a;e.call(this),this._parentSubscriber=t;var u=this;Object(o.a)(n)?a=n:n&&(a=n.next,r=n.error,i=n.complete,n!==s.a&&(u=Object.create(n),Object(o.a)(u.unsubscribe)&&this.add(u.unsubscribe.bind(u)),u.unsubscribe=this.unsubscribe.bind(this))),this._context=u,this._next=a,this._error=r,this._complete=i}return Object(r.__extends)(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber;if(this._error)t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else{if(!t.syncErrorThrowable)throw this.unsubscribe(),e;t.syncErrorValue=e,t.syncErrorThrown=!0,this.unsubscribe()}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){throw this.unsubscribe(),e}},t.prototype.__tryOrSetError=function(e,t,n){try{t.call(this._context,n)}catch(t){return e.syncErrorValue=t,e.syncErrorThrown=!0,!0}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(u);function c(e){return e instanceof u||"syncErrorThrowable"in e&&e[a.a]}},"Ecq+":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("6Xbx"),o=function(e){function t(t){e.call(this),this.scheduler=t}return Object(r.__extends)(t,e),t.create=function(e){return new t(e)},t.dispatch=function(e){e.subscriber.complete()},t.prototype._subscribe=function(e){var n=this.scheduler;if(n)return n.schedule(t.dispatch,0,{subscriber:e});e.complete()},t}(n("AP4T").a)},GTd5:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},Kg3V:function(e,t,n){"use strict";var r=n("6Xbx").__decorate,o=n("6Xbx").__metadata,i=n("LMZF"),s=(n("sY2v"),n("pICe")),a=function(){function e(e,t){this.el=e,this.dragulaService=t,this.container=e.nativeElement}return e.prototype.ngOnInit=function(){var e=this,t=this.dragulaService.find(this.dragula),n=function(){e.dragulaModel&&(e.drake.models?e.drake.models.push(e.dragulaModel):e.drake.models=[e.dragulaModel])};t?(this.drake=t.drake,n(),this.drake.containers.push(this.container)):(this.drake=s.dragula([this.container],Object.assign({},this.dragulaOptions)),n(),this.dragulaService.add(this.dragula,this.drake))},e.prototype.ngOnChanges=function(e){if(e&&e.dragulaModel&&this.drake)if(this.drake.models){var t=this.drake.models.indexOf(e.dragulaModel.previousValue);this.drake.models.splice(t,1,e.dragulaModel.currentValue)}else this.drake.models=[e.dragulaModel.currentValue]},e}();r([i.Input(),o("design:type",String)],a.prototype,"dragula",void 0),r([i.Input(),o("design:type",Object)],a.prototype,"dragulaModel",void 0),r([i.Input(),o("design:type",Object)],a.prototype,"dragulaOptions",void 0),a=r([i.Directive({selector:"[dragula]"})],a),t.DragulaDirective=a},LMZF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){n.d(t,"createPlatform",function(){return un}),n.d(t,"assertPlatform",function(){return cn}),n.d(t,"destroyPlatform",function(){return dn}),n.d(t,"getPlatform",function(){return pn}),n.d(t,"PlatformRef",function(){return fn}),n.d(t,"ApplicationRef",function(){return vn}),n.d(t,"enableProdMode",function(){return on}),n.d(t,"isDevMode",function(){return sn}),n.d(t,"createPlatformFactory",function(){return ln}),n.d(t,"NgProbeToken",function(){return an}),n.d(t,"APP_ID",function(){return it}),n.d(t,"PACKAGE_ROOT_URL",function(){return pt}),n.d(t,"PLATFORM_INITIALIZER",function(){return lt}),n.d(t,"PLATFORM_ID",function(){return ct}),n.d(t,"APP_BOOTSTRAP_LISTENER",function(){return dt}),n.d(t,"APP_INITIALIZER",function(){return rt}),n.d(t,"ApplicationInitStatus",function(){return ot}),n.d(t,"DebugElement",function(){return Bn}),n.d(t,"DebugNode",function(){return Vn}),n.d(t,"asNativeElements",function(){return Hn}),n.d(t,"getDebugNode",function(){return Zn}),n.d(t,"Testability",function(){return Yt}),n.d(t,"TestabilityRegistry",function(){return Qt}),n.d(t,"setTestabilityGetter",function(){return Jt}),n.d(t,"TRANSLATIONS",function(){return vr}),n.d(t,"TRANSLATIONS_FORMAT",function(){return yr}),n.d(t,"LOCALE_ID",function(){return hr}),n.d(t,"MissingTranslationStrategy",function(){return gr}),n.d(t,"ApplicationModule",function(){return wr}),n.d(t,"wtfCreateScope",function(){return Lt}),n.d(t,"wtfLeave",function(){return Vt}),n.d(t,"wtfStartTimeRange",function(){return Bt}),n.d(t,"wtfEndTimeRange",function(){return Ht}),n.d(t,"Type",function(){return Me}),n.d(t,"EventEmitter",function(){return zt}),n.d(t,"ErrorHandler",function(){return Te}),n.d(t,"Sanitizer",function(){return Cr}),n.d(t,"SecurityContext",function(){return Er}),n.d(t,"ANALYZE_FOR_ENTRY_COMPONENTS",function(){return g}),n.d(t,"Attribute",function(){return m}),n.d(t,"ContentChild",function(){return w}),n.d(t,"ContentChildren",function(){return b}),n.d(t,"Query",function(){return _}),n.d(t,"ViewChild",function(){return C}),n.d(t,"ViewChildren",function(){return E}),n.d(t,"Component",function(){return k}),n.d(t,"Directive",function(){return T}),n.d(t,"HostBinding",function(){return P}),n.d(t,"HostListener",function(){return N}),n.d(t,"Input",function(){return A}),n.d(t,"Output",function(){return R}),n.d(t,"Pipe",function(){return I}),n.d(t,"CUSTOM_ELEMENTS_SCHEMA",function(){return M}),n.d(t,"NO_ERRORS_SCHEMA",function(){return D}),n.d(t,"NgModule",function(){return j}),n.d(t,"ViewEncapsulation",function(){return F}),n.d(t,"Version",function(){return L}),n.d(t,"VERSION",function(){return V}),n.d(t,"forwardRef",function(){return te}),n.d(t,"resolveForwardRef",function(){return ne}),n.d(t,"Injector",function(){return ae}),n.d(t,"ReflectiveInjector",function(){return $e}),n.d(t,"ResolvedReflectiveFactory",function(){return Ke}),n.d(t,"ReflectiveKey",function(){return Pe}),n.d(t,"InjectionToken",function(){return l}),n.d(t,"Inject",function(){return B}),n.d(t,"Optional",function(){return H}),n.d(t,"Injectable",function(){return z}),n.d(t,"Self",function(){return U}),n.d(t,"SkipSelf",function(){return q}),n.d(t,"Host",function(){return Z}),n.d(t,"NgZone",function(){return Ut}),n.d(t,"RenderComponentType",function(){return gn}),n.d(t,"Renderer",function(){return _n}),n.d(t,"Renderer2",function(){return Cn}),n.d(t,"RendererFactory2",function(){return wn}),n.d(t,"RendererStyleFlags2",function(){return En}),n.d(t,"RootRenderer",function(){return bn}),n.d(t,"COMPILER_OPTIONS",function(){return gt}),n.d(t,"Compiler",function(){return yt}),n.d(t,"CompilerFactory",function(){return mt}),n.d(t,"ModuleWithComponentFactories",function(){return ht}),n.d(t,"ComponentFactory",function(){return bt}),n.d(t,"ComponentRef",function(){return _t}),n.d(t,"ComponentFactoryResolver",function(){return St}),n.d(t,"ElementRef",function(){return xn}),n.d(t,"NgModuleFactory",function(){return At}),n.d(t,"NgModuleRef",function(){return It}),n.d(t,"NgModuleFactoryLoader",function(){return On}),n.d(t,"getModuleFactory",function(){return kn}),n.d(t,"QueryList",function(){return In}),n.d(t,"SystemJsNgModuleLoader",function(){return Pn}),n.d(t,"SystemJsNgModuleLoaderConfig",function(){return An}),n.d(t,"TemplateRef",function(){return Mn}),n.d(t,"ViewContainerRef",function(){return Dn}),n.d(t,"EmbeddedViewRef",function(){return Ln}),n.d(t,"ViewRef",function(){return Fn}),n.d(t,"ChangeDetectionStrategy",function(){return x}),n.d(t,"ChangeDetectorRef",function(){return jn}),n.d(t,"DefaultIterableDiffer",function(){return er}),n.d(t,"IterableDiffers",function(){return ur}),n.d(t,"KeyValueDiffers",function(){return lr}),n.d(t,"SimpleChange",function(){return Wn}),n.d(t,"WrappedValue",function(){return Gn}),n.d(t,"platformCore",function(){return fr}),n.d(t,"\u0275ALLOW_MULTIPLE_PLATFORMS",function(){return rn}),n.d(t,"\u0275APP_ID_RANDOM_PROVIDER",function(){return at}),n.d(t,"\u0275devModeEqual",function(){return Xn}),n.d(t,"\u0275isListLikeIterable",function(){return Yn}),n.d(t,"\u0275ChangeDetectorStatus",function(){return O}),n.d(t,"\u0275isDefaultChangeDetectionStrategy",function(){return S}),n.d(t,"\u0275Console",function(){return ft}),n.d(t,"\u0275ComponentFactory",function(){return bt}),n.d(t,"\u0275CodegenComponentFactoryResolver",function(){return Tt}),n.d(t,"\u0275ReflectionCapabilities",function(){return Ve}),n.d(t,"\u0275RenderDebugInfo",function(){return mn}),n.d(t,"\u0275global",function(){return G}),n.d(t,"\u0275looseIdentical",function(){return $}),n.d(t,"\u0275stringify",function(){return ee}),n.d(t,"\u0275makeDecorator",function(){return f}),n.d(t,"\u0275isObservable",function(){return nt}),n.d(t,"\u0275isPromise",function(){return tt}),n.d(t,"\u0275clearOverrides",function(){return Js}),n.d(t,"\u0275overrideComponentView",function(){return Qs}),n.d(t,"\u0275overrideProvider",function(){return Ys}),n.d(t,"\u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR",function(){return Ei}),n.d(t,"\u0275defineComponent",function(){return iu}),n.d(t,"\u0275detectChanges",function(){return ou}),n.d(t,"\u0275renderComponent",function(){return ru}),n.d(t,"\u0275C",function(){return qa}),n.d(t,"\u0275D",function(){return Ua}),n.d(t,"\u0275E",function(){return Na}),n.d(t,"\u0275T",function(){return Ha}),n.d(t,"\u0275V",function(){return Ga}),n.d(t,"\u0275b",function(){return $a}),n.d(t,"\u0275b1",function(){return eu}),n.d(t,"\u0275c",function(){return Za}),n.d(t,"\u0275cR",function(){return Ka}),n.d(t,"\u0275cr",function(){return Xa}),n.d(t,"\u0275e",function(){return Fa}),n.d(t,"\u0275p",function(){return La}),n.d(t,"\u0275s",function(){return Ba}),n.d(t,"\u0275t",function(){return za}),n.d(t,"\u0275v",function(){return Wa}),n.d(t,"\u0275registerModuleFactory",function(){return Tn}),n.d(t,"\u0275EMPTY_ARRAY",function(){return wo}),n.d(t,"\u0275EMPTY_MAP",function(){return Eo}),n.d(t,"\u0275and",function(){return Co}),n.d(t,"\u0275ccf",function(){return zo}),n.d(t,"\u0275cmf",function(){return $s}),n.d(t,"\u0275crt",function(){return zr}),n.d(t,"\u0275did",function(){return pi}),n.d(t,"\u0275eld",function(){return xo}),n.d(t,"\u0275elementEventFullName",function(){return eo}),n.d(t,"\u0275getComponentViewDefinitionFactory",function(){return Uo}),n.d(t,"\u0275inlineInterpolate",function(){return _o}),n.d(t,"\u0275interpolate",function(){return mo}),n.d(t,"\u0275mod",function(){return No}),n.d(t,"\u0275mpd",function(){return Po}),n.d(t,"\u0275ncd",function(){return Mi}),n.d(t,"\u0275nov",function(){return ei}),n.d(t,"\u0275pid",function(){return fi}),n.d(t,"\u0275prd",function(){return hi}),n.d(t,"\u0275pad",function(){return Fi}),n.d(t,"\u0275pod",function(){return Li}),n.d(t,"\u0275ppd",function(){return ji}),n.d(t,"\u0275qud",function(){return Ii}),n.d(t,"\u0275ted",function(){return Bi}),n.d(t,"\u0275unv",function(){return Vr}),n.d(t,"\u0275vid",function(){return Ui}),n.d(t,"AUTO_STYLE",function(){return gu}),n.d(t,"trigger",function(){return mu}),n.d(t,"animate",function(){return _u}),n.d(t,"group",function(){return bu}),n.d(t,"sequence",function(){return wu}),n.d(t,"style",function(){return Eu}),n.d(t,"state",function(){return Cu}),n.d(t,"keyframes",function(){return xu}),n.d(t,"transition",function(){return Ou}),n.d(t,"\u0275bf",function(){return cu}),n.d(t,"\u0275bg",function(){return du}),n.d(t,"\u0275bk",function(){return vu}),n.d(t,"\u0275bh",function(){return pu}),n.d(t,"\u0275bj",function(){return hu}),n.d(t,"\u0275bi",function(){return fu}),n.d(t,"\u0275bl",function(){return yu}),n.d(t,"\u0275be",function(){return lu}),n.d(t,"\u0275n",function(){return mr}),n.d(t,"\u0275o",function(){return _r}),n.d(t,"\u0275q",function(){return br}),n.d(t,"\u0275i",function(){return st}),n.d(t,"\u0275j",function(){return dr}),n.d(t,"\u0275k",function(){return pr}),n.d(t,"\u0275l",function(){return Jn}),n.d(t,"\u0275m",function(){return ir}),n.d(t,"\u0275f",function(){return et}),n.d(t,"\u0275g",function(){return Ue}),n.d(t,"\u0275h",function(){return Ge}),n.d(t,"\u0275r",function(){return jt}),n.d(t,"\u0275w",function(){return Pt}),n.d(t,"\u0275u",function(){return Rt}),n.d(t,"\u0275z",function(){return Dt}),n.d(t,"\u0275x",function(){return Nt}),n.d(t,"\u0275y",function(){return Mt}),n.d(t,"\u0275bc",function(){return ha}),n.d(t,"\u0275a",function(){return v}),n.d(t,"\u0275d",function(){return y}),n.d(t,"\u0275ba",function(){return vi}),n.d(t,"\u0275bb",function(){return Rr});var r=n("6Xbx"),o=n("AP4T"),i=n("2kLc"),s=n("URbD"),a=n("TO51"),u=n("qLnt"),l=function(){function e(e){this._desc=e,this.ngMetadataName="InjectionToken"}return e.prototype.toString=function(){return"InjectionToken "+this._desc},e}(),c="__annotations__",d="__paramaters__",p="__prop__metadata__";function f(e,t,n,r){var o=h(t);function i(e){if(this instanceof i)return o.call(this,e),this;var t=new i(e),n=function(e){return(e.hasOwnProperty(c)?e[c]:Object.defineProperty(e,c,{value:[]})[c]).push(t),e};return r&&r(n),n}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i}function h(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(e){var r=e.apply(void 0,t);for(var o in r)this[o]=r[o]}}}function v(e,t,n){var r=h(t);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(this instanceof o)return r.apply(this,e),this;var n,i=new((n=o).bind.apply(n,[void 0].concat(e)));return s.annotation=i,s;function s(e,t,n){for(var r=e.hasOwnProperty(d)?e[d]:Object.defineProperty(e,d,{value:[]})[d];r.length<=n;)r.push(null);return(r[n]=r[n]||[]).push(i),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o}function y(e,t,n){var r=h(t);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(this instanceof o)return r.apply(this,e),this;var n,i=new((n=o).bind.apply(n,[void 0].concat(e)));return function(e,t){var n=e.constructor,r=n.hasOwnProperty(p)?n[p]:Object.defineProperty(n,p,{value:{}})[p];r[t]=r.hasOwnProperty(t)&&r[t]||[],r[t].unshift(i)}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o}var g=new l("AnalyzeForEntryComponents"),m=v("Attribute",function(e){return{attributeName:e}}),_=function(){},b=y("ContentChildren",function(e,t){return void 0===t&&(t={}),Object(r.__assign)({selector:e,first:!1,isViewQuery:!1,descendants:!1},t)},_),w=y("ContentChild",function(e,t){return void 0===t&&(t={}),Object(r.__assign)({selector:e,first:!0,isViewQuery:!1,descendants:!0},t)},_),E=y("ViewChildren",function(e,t){return void 0===t&&(t={}),Object(r.__assign)({selector:e,first:!1,isViewQuery:!0,descendants:!0},t)},_),C=y("ViewChild",function(e,t){return Object(r.__assign)({selector:e,first:!0,isViewQuery:!0,descendants:!0},t)},_),x=function(){var e={OnPush:0,Default:1};return e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),O=function(){var e={CheckOnce:0,Checked:1,CheckAlways:2,Detached:3,Errored:4,Destroyed:5};return e[e.CheckOnce]="CheckOnce",e[e.Checked]="Checked",e[e.CheckAlways]="CheckAlways",e[e.Detached]="Detached",e[e.Errored]="Errored",e[e.Destroyed]="Destroyed",e}();function S(e){return null==e||e===x.Default}var T=f("Directive",function(e){return void 0===e&&(e={}),e}),k=f("Component",function(e){return void 0===e&&(e={}),Object(r.__assign)({changeDetection:x.Default},e)},T),I=f("Pipe",function(e){return Object(r.__assign)({pure:!0},e)}),A=y("Input",function(e){return{bindingPropertyName:e}}),R=y("Output",function(e){return{bindingPropertyName:e}}),P=y("HostBinding",function(e){return{hostPropertyName:e}}),N=y("HostListener",function(e,t){return{eventName:e,args:t}}),M={name:"custom-elements"},D={name:"no-errors-schema"},j=f("NgModule",function(e){return e}),F=function(){var e={Emulated:0,Native:1,None:2};return e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e}(),L=function(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")},V=new L("5.2.11"),B=v("Inject",function(e){return{token:e}}),H=v("Optional"),z=f("Injectable"),U=v("Self"),q=v("SkipSelf"),Z=v("Host"),K="undefined"!=typeof window&&window,X="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,G=K||void 0!==e&&e||X,W=Promise.resolve(0),Y=null;function Q(){if(!Y){var e=G.Symbol;if(e&&e.iterator)Y=e.iterator;else for(var t=Object.getOwnPropertyNames(Map.prototype),n=0;n<t.length;++n){var r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Y=r)}}return Y}function J(e){"undefined"==typeof Zone?W.then(function(){e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}function $(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function ee(e){if("string"==typeof e)return e;if(e instanceof Array)return"["+e.map(ee).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;var t=e.toString();if(null==t)return""+t;var n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function te(e){return e.__forward_ref__=te,e.toString=function(){return ee(this())},e}function ne(e){return"function"==typeof e&&e.hasOwnProperty("__forward_ref__")&&e.__forward_ref__===te?e():e}var re="__source",oe=new Object,ie=oe,se=function(){function e(){}return e.prototype.get=function(e,t){if(void 0===t&&(t=oe),t===oe)throw new Error("NullInjectorError: No provider for "+ee(e)+"!");return t},e}(),ae=function(){function e(){}return e.create=function(e,t){return Array.isArray(e)?new ge(e,t):new ge(e.providers,e.parent,e.name||null)},e.THROW_IF_NOT_FOUND=oe,e.NULL=new se,e}(),ue=function(e){return e},le=[],ce=ue,de=function(){return Array.prototype.slice.call(arguments)},pe={},fe=function(e){for(var t in e)if(e[t]===pe)return t;throw Error("!prop")}({provide:String,useValue:pe}),he=ae.NULL,ve=/\n/gm,ye="\u0275",ge=function(){function e(e,t,n){void 0===t&&(t=he),void 0===n&&(n=null),this.parent=t,this.source=n;var r=this._records=new Map;r.set(ae,{token:ae,fn:ue,deps:le,value:this,useNew:!1}),function e(t,n){if(n)if((n=ne(n))instanceof Array)for(var r=0;r<n.length;r++)e(t,n[r]);else{if("function"==typeof n)throw be("Function/Class not supported",n);if(!n||"object"!=typeof n||!n.provide)throw be("Unexpected provider",n);var o=ne(n.provide),i=function(e){var t=function(e){var t=le,n=e.deps;if(n&&n.length){t=[];for(var r=0;r<n.length;r++){var o=6;if((u=ne(n[r]))instanceof Array)for(var i=0,s=u;i<s.length;i++){var a=s[i];a instanceof H||a==H?o|=1:a instanceof q||a==q?o&=-3:a instanceof U||a==U?o&=-5:u=a instanceof B?a.token:ne(a)}t.push({token:u,options:o})}}else if(e.useExisting){var u;t=[{token:u=ne(e.useExisting),options:6}]}else if(!(n||fe in e))throw be("'deps' required",e);return t}(e),n=ue,r=le,o=!1,i=ne(e.provide);if(fe in e)r=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)o=!0,n=ne(e.useClass);else{if("function"!=typeof i)throw be("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);o=!0,n=i}return{deps:t,fn:n,useNew:o,value:r}}(n);if(!0===n.multi){var s=t.get(o);if(s){if(s.fn!==de)throw me(o)}else t.set(o,s={token:n.provide,deps:[],useNew:!1,fn:de,value:le});s.deps.push({token:o=n,options:6})}var a=t.get(o);if(a&&a.fn==de)throw me(o);t.set(o,i)}}(r,e)}return e.prototype.get=function(e,t){var n=this._records.get(e);try{return function e(t,n,r,o,i){try{return function(t,n,r,o,i){var s,a;if(n){if((s=n.value)==ce)throw Error(ye+"Circular dependency");if(s===le){n.value=ce;var u=n.useNew,l=n.fn,c=n.deps,d=le;if(c.length){d=[];for(var p=0;p<c.length;p++){var f=c[p],h=f.options,v=2&h?r.get(f.token):void 0;d.push(e(f.token,v,r,v||4&h?o:he,1&h?null:ae.THROW_IF_NOT_FOUND))}}n.value=s=u?new((a=l).bind.apply(a,[void 0].concat(d))):l.apply(void 0,d)}}else s=o.get(t,i);return s}(t,n,r,o,i)}catch(e){throw e instanceof Error||(e=new Error(e)),(e.ngTempTokenPath=e.ngTempTokenPath||[]).unshift(t),n&&n.value==ce&&(n.value=le),e}}(e,n,this._records,this.parent,t)}catch(t){var r=t.ngTempTokenPath;throw e[re]&&r.unshift(e[re]),t.message=_e("\n"+t.message,r,this.source),t.ngTokenPath=r,t.ngTempTokenPath=null,t}},e.prototype.toString=function(){var e=[];return this._records.forEach(function(t,n){return e.push(ee(n))}),"StaticInjector["+e.join(", ")+"]"},e}();function me(e){return be("Cannot mix multi providers and regular providers",e)}function _e(e,t,n){void 0===n&&(n=null),e=e&&"\n"===e.charAt(0)&&e.charAt(1)==ye?e.substr(2):e;var r=ee(t);if(t instanceof Array)r=t.map(ee).join(" -> ");else if("object"==typeof t){var o=[];for(var i in t)if(t.hasOwnProperty(i)){var s=t[i];o.push(i+":"+("string"==typeof s?JSON.stringify(s):ee(s)))}r="{"+o.join(", ")+"}"}return"StaticInjectorError"+(n?"("+n+")":"")+"["+r+"]: "+e.replace(ve,"\n  ")}function be(e,t){return new Error(_e(e,t))}var we="ngDebugContext",Ee="ngOriginalError",Ce="ngErrorLogger";function xe(e){return e[we]}function Oe(e){return e[Ee]}function Se(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e.error.apply(e,t)}var Te=function(){function e(){this._console=console}return e.prototype.handleError=function(e){var t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e[Ce]||Se}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)},e.prototype._findContext=function(e){return e?xe(e)?xe(e):this._findContext(Oe(e)):null},e.prototype._findOriginalError=function(e){for(var t=Oe(e);t&&Oe(t);)t=Oe(t);return t},e}();function ke(e){return e.length>1?" ("+function(e){for(var t=[],n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(function(e){return ee(e.token)}).join(" -> ")+")":""}function Ie(e,t,n,r){var o=[t],i=n(o),s=r?function(e,t){var n=i+" caused by: "+(t instanceof Error?t.message:t),r=Error(n);return r[Ee]=t,r}(0,r):Error(i);return s.addKey=Ae,s.keys=o,s.injectors=[e],s.constructResolvingMessage=n,s[Ee]=r,s}function Ae(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function Re(e,t){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r];n.push(i&&0!=i.length?i.map(ee).join(" "):"?")}return Error("Cannot resolve all parameters for '"+ee(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+ee(e)+"' is decorated with Injectable.")}var Pe=function(){function e(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=ee(this.token)}return e.get=function(e){return Ne.get(ne(e))},Object.defineProperty(e,"numberOfKeys",{get:function(){return Ne.numberOfKeys},enumerable:!0,configurable:!0}),e}(),Ne=new(function(){function e(){this._allKeys=new Map}return e.prototype.get=function(e){if(e instanceof Pe)return e;if(this._allKeys.has(e))return this._allKeys.get(e);var t=new Pe(e,Pe.numberOfKeys);return this._allKeys.set(e,t),t},Object.defineProperty(e.prototype,"numberOfKeys",{get:function(){return this._allKeys.size},enumerable:!0,configurable:!0}),e}()),Me=Function;function De(e){return"function"==typeof e}var je=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,Fe=/^class\s+[A-Za-z\d$_]*\s*extends\s+[A-Za-z\d$_]+\s*{/,Le=/^class\s+[A-Za-z\d$_]*\s*extends\s+[A-Za-z\d$_]+\s*{[\s\S]*constructor\s*\(/,Ve=function(){function e(e){this._reflect=e||G.Reflect}return e.prototype.isReflectionEnabled=function(){return!0},e.prototype.factory=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new(e.bind.apply(e,[void 0].concat(t)))}},e.prototype._zipTypesAndAnnotations=function(e,t){var n;n=void 0===e?new Array(t.length):new Array(e.length);for(var r=0;r<n.length;r++)n[r]=void 0===e?[]:e[r]!=Object?[e[r]]:[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n},e.prototype._ownParameters=function(e,t){var n=e.toString();if(je.exec(n)||Fe.exec(n)&&!Le.exec(n))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;var r=e.ctorParameters;if(r&&r!==t.ctorParameters){var o="function"==typeof r?r():r,i=o.map(function(e){return e&&e.type}),s=o.map(function(e){return e&&Be(e.decorators)});return this._zipTypesAndAnnotations(i,s)}var a=e.hasOwnProperty(d)&&e[d],u=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return u||a?this._zipTypesAndAnnotations(u,a):new Array(e.length).fill(void 0)},e.prototype.parameters=function(e){if(!De(e))return[];var t=He(e),n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]},e.prototype._ownAnnotations=function(e,t){if(e.annotations&&e.annotations!==t.annotations){var n=e.annotations;return"function"==typeof n&&n.annotations&&(n=n.annotations),n}return e.decorators&&e.decorators!==t.decorators?Be(e.decorators):e.hasOwnProperty(c)?e[c]:null},e.prototype.annotations=function(e){if(!De(e))return[];var t=He(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)},e.prototype._ownPropMetadata=function(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){var n=e.propMetadata;return"function"==typeof n&&n.propMetadata&&(n=n.propMetadata),n}if(e.propDecorators&&e.propDecorators!==t.propDecorators){var r=e.propDecorators,o={};return Object.keys(r).forEach(function(e){o[e]=Be(r[e])}),o}return e.hasOwnProperty(p)?e[p]:null},e.prototype.propMetadata=function(e){if(!De(e))return{};var t=He(e),n={};if(t!==Object){var r=this.propMetadata(t);Object.keys(r).forEach(function(e){n[e]=r[e]})}var o=this._ownPropMetadata(e,t);return o&&Object.keys(o).forEach(function(e){var t=[];n.hasOwnProperty(e)&&t.push.apply(t,n[e]),t.push.apply(t,o[e]),n[e]=t}),n},e.prototype.hasLifecycleHook=function(e,t){return e instanceof Me&&t in e.prototype},e.prototype.guards=function(e){return{}},e.prototype.getter=function(e){return new Function("o","return o."+e+";")},e.prototype.setter=function(e){return new Function("o","v","return o."+e+" = v;")},e.prototype.method=function(e){return new Function("o","args","if (!o."+e+") throw new Error('\""+e+"\" is undefined');\n        return o."+e+".apply(o, args);")},e.prototype.importUri=function(e){return"object"==typeof e&&e.filePath?e.filePath:"./"+ee(e)},e.prototype.resourceUri=function(e){return"./"+ee(e)},e.prototype.resolveIdentifier=function(e,t,n,r){return r},e.prototype.resolveEnum=function(e,t){return e[t]},e}();function Be(e){return e?e.map(function(e){var t=e.type.annotationCls;return new(t.bind.apply(t,[void 0].concat(e.args?e.args:[])))}):[]}function He(e){var t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}var ze=new(function(){function e(e){this.reflectionCapabilities=e}return e.prototype.updateCapabilities=function(e){this.reflectionCapabilities=e},e.prototype.factory=function(e){return this.reflectionCapabilities.factory(e)},e.prototype.parameters=function(e){return this.reflectionCapabilities.parameters(e)},e.prototype.annotations=function(e){return this.reflectionCapabilities.annotations(e)},e.prototype.propMetadata=function(e){return this.reflectionCapabilities.propMetadata(e)},e.prototype.hasLifecycleHook=function(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)},e.prototype.getter=function(e){return this.reflectionCapabilities.getter(e)},e.prototype.setter=function(e){return this.reflectionCapabilities.setter(e)},e.prototype.method=function(e){return this.reflectionCapabilities.method(e)},e.prototype.importUri=function(e){return this.reflectionCapabilities.importUri(e)},e.prototype.resourceUri=function(e){return this.reflectionCapabilities.resourceUri(e)},e.prototype.resolveIdentifier=function(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)},e.prototype.resolveEnum=function(e,t){return this.reflectionCapabilities.resolveEnum(e,t)},e}())(new Ve),Ue=function(){function e(e,t,n){this.key=e,this.optional=t,this.visibility=n}return e.fromKey=function(t){return new e(t,!1,null)},e}(),qe=[],Ze=function(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]},Ke=function(e,t){this.factory=e,this.dependencies=t};function Xe(e){return new Ze(Pe.get(e.provide),[function(e){var t,n;if(e.useClass){var r=ne(e.useClass);t=ze.factory(r),n=We(r)}else e.useExisting?(t=function(e){return e},n=[Ue.fromKey(Pe.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){var n=t.map(function(e){return[e]});return t.map(function(t){return Ye(e,t,n)})}return We(e)}(e.useFactory,e.deps)):(t=function(){return e.useValue},n=qe);return new Ke(t,n)}(e)],e.multi||!1)}function Ge(e){var t=function(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error("Cannot mix multi providers and regular providers, got: "+o+" "+r);if(r.multiProvider)for(var i=0;i<r.resolvedFactories.length;i++)o.resolvedFactories.push(r.resolvedFactories[i]);else t.set(r.key.id,r)}else{var s;s=r.multiProvider?new Ze(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,s)}}return t}(function e(t,n){return t.forEach(function(t){if(t instanceof Me)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!(t instanceof Array))throw Error("Invalid provider - only instances of Provider and Type are allowed, got: "+t);e(t,n)}}),n}(e,[]).map(Xe),new Map);return Array.from(t.values())}function We(e){var t=ze.parameters(e);if(!t)return[];if(t.some(function(e){return null==e}))throw Re(e,t);return t.map(function(n){return Ye(e,n,t)})}function Ye(e,t,n){var r=null,o=!1;if(!Array.isArray(t))return Qe(t instanceof B?t.token:t,o,null);for(var i=null,s=0;s<t.length;++s){var a=t[s];a instanceof Me?r=a:a instanceof B?r=a.token:a instanceof H?o=!0:a instanceof U||a instanceof q?i=a:a instanceof l&&(r=a)}if(null!=(r=ne(r)))return Qe(r,o,i);throw Re(e,n)}function Qe(e,t,n){return new Ue(Pe.get(e),t,n)}var Je=new Object,$e=function(){function e(){}return e.resolve=function(e){return Ge(e)},e.resolveAndCreate=function(t,n){var r=e.resolve(t);return e.fromResolvedProviders(r,n)},e.fromResolvedProviders=function(e,t){return new et(e,t)},e}(),et=function(){function e(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;var n=e.length;this.keyIds=new Array(n),this.objs=new Array(n);for(var r=0;r<n;r++)this.keyIds[r]=e[r].key.id,this.objs[r]=Je}return e.prototype.get=function(e,t){return void 0===t&&(t=ie),this._getByKey(Pe.get(e),null,t)},e.prototype.resolveAndCreateChild=function(e){var t=$e.resolve(e);return this.createChildFromResolved(t)},e.prototype.createChildFromResolved=function(t){var n=new e(t);return n.parent=this,n},e.prototype.resolveAndInstantiate=function(e){return this.instantiateResolved($e.resolve([e])[0])},e.prototype.instantiateResolved=function(e){return this._instantiateProvider(e)},e.prototype.getProviderAtIndex=function(e){if(e<0||e>=this._providers.length)throw function(e){return Error("Index "+e+" is out-of-bounds.")}(e);return this._providers[e]},e.prototype._new=function(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw Ie(this,e.key,function(e){return"Cannot instantiate cyclic dependency!"+ke(e)});return this._instantiateProvider(e)},e.prototype._getMaxNumberOfObjects=function(){return this.objs.length},e.prototype._instantiateProvider=function(e){if(e.multiProvider){for(var t=new Array(e.resolvedFactories.length),n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])},e.prototype._instantiate=function(e,t){var n,r,o,i=this,s=t.factory;try{n=t.dependencies.map(function(e){return i._getByReflectiveDependency(e)})}catch(t){throw t.addKey&&t.addKey(this,e.key),t}try{r=s.apply(void 0,n)}catch(t){throw Ie(this,e.key,function(e){var t=ee(e[0].token);return o.message+": Error during instantiation of "+t+"!"+ke(e)+"."},o=t)}return r},e.prototype._getByReflectiveDependency=function(e){return this._getByKey(e.key,e.visibility,e.optional?null:ie)},e.prototype._getByKey=function(t,n,r){return t===e.INJECTOR_KEY?this:n instanceof U?this._getByKeySelf(t,r):this._getByKeyDefault(t,r,n)},e.prototype._getObjByKeyId=function(e){for(var t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===Je&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return Je},e.prototype._throwOrNull=function(e,t){if(t!==ie)return t;throw function(e,t){return Ie(e,t,function(e){return"No provider for "+ee(e[0].token)+"!"+ke(e)})}(this,e)},e.prototype._getByKeySelf=function(e,t){var n=this._getObjByKeyId(e.id);return n!==Je?n:this._throwOrNull(e,t)},e.prototype._getByKeyDefault=function(t,n,r){var o;for(o=r instanceof q?this.parent:this;o instanceof e;){var i=o,s=i._getObjByKeyId(t.id);if(s!==Je)return s;o=i.parent}return null!==o?o.get(t.token,n):this._throwOrNull(t,n)},Object.defineProperty(e.prototype,"displayName",{get:function(){return"ReflectiveInjector(providers: ["+function(e,t){for(var n=new Array(e._providers.length),r=0;r<e._providers.length;++r)n[r]=' "'+e.getProviderAtIndex(r).key.displayName+'" ';return n}(this).join(", ")+"])"},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return this.displayName},e.INJECTOR_KEY=Pe.get(ae),e}();function tt(e){return!!e&&"function"==typeof e.then}function nt(e){return!!e&&"function"==typeof e.subscribe}var rt=new l("Application Initializer"),ot=function(){function e(e){var t=this;this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise(function(e,n){t.resolve=e,t.reject=n})}return e.prototype.runInitializers=function(){var e=this;if(!this.initialized){var t=[],n=function(){e.done=!0,e.resolve()};if(this.appInits)for(var r=0;r<this.appInits.length;r++){var o=this.appInits[r]();tt(o)&&t.push(o)}Promise.all(t).then(function(){n()}).catch(function(t){e.reject(t)}),0===t.length&&n(),this.initialized=!0}},e}(),it=new l("AppId");function st(){return""+ut()+ut()+ut()}var at={provide:it,useFactory:st,deps:[]};function ut(){return String.fromCharCode(97+Math.floor(25*Math.random()))}var lt=new l("Platform Initializer"),ct=new l("Platform ID"),dt=new l("appBootstrapListener"),pt=new l("Application Packages Root URL"),ft=function(){function e(){}return e.prototype.log=function(e){console.log(e)},e.prototype.warn=function(e){console.warn(e)},e.ctorParameters=function(){return[]},e}(),ht=function(e,t){this.ngModuleFactory=e,this.componentFactories=t};function vt(){throw new Error("Runtime compiler is not loaded")}var yt=function(){function e(){}return e.prototype.compileModuleSync=function(e){throw vt()},e.prototype.compileModuleAsync=function(e){throw vt()},e.prototype.compileModuleAndAllComponentsSync=function(e){throw vt()},e.prototype.compileModuleAndAllComponentsAsync=function(e){throw vt()},e.prototype.clearCache=function(){},e.prototype.clearCacheFor=function(e){},e}(),gt=new l("compilerOptions"),mt=function(){},_t=function(){},bt=function(){};function wt(e){var t=Error("No component factory found for "+ee(e)+". Did you add it to @NgModule.entryComponents?");return t[xt]=e,t}var Et,Ct,xt="ngComponent",Ot=function(){function e(){}return e.prototype.resolveComponentFactory=function(e){throw wt(e)},e}(),St=function(){function e(){}return e.NULL=new Ot,e}(),Tt=function(){function e(e,t,n){this._parent=t,this._ngModule=n,this._factories=new Map;for(var r=0;r<e.length;r++){var o=e[r];this._factories.set(o.componentType,o)}}return e.prototype.resolveComponentFactory=function(e){var t=this._factories.get(e);if(!t&&this._parent&&(t=this._parent.resolveComponentFactory(e)),!t)throw wt(e);return new kt(t,this._ngModule)},e}(),kt=function(e){function t(t,n){var r=e.call(this)||this;return r.factory=t,r.ngModule=n,r.selector=t.selector,r.componentType=t.componentType,r.ngContentSelectors=t.ngContentSelectors,r.inputs=t.inputs,r.outputs=t.outputs,r}return Object(r.__extends)(t,e),t.prototype.create=function(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)},t}(bt),It=function(){},At=function(){};function Rt(){var e=G.wtf;return!(!e||!(Et=e.trace)||(Ct=Et.events,0))}function Pt(e,t){return void 0===t&&(t=null),Ct.createScope(e,t)}function Nt(e,t){return Et.leaveScope(e,t),t}function Mt(e,t){return Et.beginTimeRange(e,t)}function Dt(e){Et.endTimeRange(e)}var jt=Rt();function Ft(e,t){return null}var Lt=jt?Pt:function(e,t){return Ft},Vt=jt?Nt:function(e,t){return t},Bt=jt?Mt:function(e,t){return null},Ht=jt?Dt:function(e){return null},zt=function(e){function t(t){void 0===t&&(t=!1);var n=e.call(this)||this;return n.__isAsync=t,n}return Object(r.__extends)(t,e),t.prototype.emit=function(t){e.prototype.next.call(this,t)},t.prototype.subscribe=function(t,n,r){var o,i=function(e){return null},s=function(){return null};t&&"object"==typeof t?(o=this.__isAsync?function(e){setTimeout(function(){return t.next(e)})}:function(e){t.next(e)},t.error&&(i=this.__isAsync?function(e){setTimeout(function(){return t.error(e)})}:function(e){t.error(e)}),t.complete&&(s=this.__isAsync?function(){setTimeout(function(){return t.complete()})}:function(){t.complete()})):(o=this.__isAsync?function(e){setTimeout(function(){return t(e)})}:function(e){t(e)},n&&(i=this.__isAsync?function(e){setTimeout(function(){return n(e)})}:function(e){n(e)}),r&&(s=this.__isAsync?function(){setTimeout(function(){return r()})}:function(){r()}));var a=e.prototype.subscribe.call(this,o,i,s);return t instanceof u.a&&t.add(a),a},t}(a.a),Ut=function(){function e(e){var t,n=e.enableLongStackTrace,r=void 0!==n&&n;if(this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new zt(!1),this.onMicrotaskEmpty=new zt(!1),this.onStable=new zt(!1),this.onError=new zt(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),r&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),(t=this)._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:function(e,n,r,o,i,s){try{return Xt(t),e.invokeTask(r,o,i,s)}finally{Gt(t)}},onInvoke:function(e,n,r,o,i,s,a){try{return Xt(t),e.invoke(r,o,i,s,a)}finally{Gt(t)}},onHasTask:function(e,n,r,o){e.hasTask(r,o),n===r&&("microTask"==o.change?(t.hasPendingMicrotasks=o.microTask,Kt(t)):"macroTask"==o.change&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:function(e,n,r,o){return e.handleError(r,o),t.runOutsideAngular(function(){return t.onError.emit(o)}),!1}})}return e.isInAngularZone=function(){return!0===Zone.current.get("isAngularZone")},e.assertInAngularZone=function(){if(!e.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")},e.assertNotInAngularZone=function(){if(e.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")},e.prototype.run=function(e,t,n){return this._inner.run(e,t,n)},e.prototype.runTask=function(e,t,n,r){var o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,Zt,qt,qt);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}},e.prototype.runGuarded=function(e,t,n){return this._inner.runGuarded(e,t,n)},e.prototype.runOutsideAngular=function(e){return this._outer.run(e)},e}();function qt(){}var Zt={};function Kt(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(function(){return e.onStable.emit(null)})}finally{e.isStable=!0}}}function Xt(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Gt(e){e._nesting--,Kt(e)}var Wt=function(){function e(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new zt,this.onMicrotaskEmpty=new zt,this.onStable=new zt,this.onError=new zt}return e.prototype.run=function(e){return e()},e.prototype.runGuarded=function(e){return e()},e.prototype.runOutsideAngular=function(e){return e()},e.prototype.runTask=function(e){return e()},e}(),Yt=function(){function e(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this._watchAngularEvents()}return e.prototype._watchAngularEvents=function(){var e=this;this._ngZone.onUnstable.subscribe({next:function(){e._didWork=!0,e._isZoneStable=!1}}),this._ngZone.runOutsideAngular(function(){e._ngZone.onStable.subscribe({next:function(){Ut.assertNotInAngularZone(),J(function(){e._isZoneStable=!0,e._runCallbacksIfReady()})}})})},e.prototype.increasePendingRequestCount=function(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount},e.prototype.decreasePendingRequestCount=function(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount},e.prototype.isStable=function(){return this._isZoneStable&&0==this._pendingCount&&!this._ngZone.hasPendingMacrotasks},e.prototype._runCallbacksIfReady=function(){var e=this;this.isStable()?J(function(){for(;0!==e._callbacks.length;)e._callbacks.pop()(e._didWork);e._didWork=!1}):this._didWork=!0},e.prototype.whenStable=function(e){this._callbacks.push(e),this._runCallbacksIfReady()},e.prototype.getPendingRequestCount=function(){return this._pendingCount},e.prototype.findProviders=function(e,t,n){return[]},e}(),Qt=function(){function e(){this._applications=new Map,en.addToWindow(this)}return e.prototype.registerApplication=function(e,t){this._applications.set(e,t)},e.prototype.unregisterApplication=function(e){this._applications.delete(e)},e.prototype.unregisterAllApplications=function(){this._applications.clear()},e.prototype.getTestability=function(e){return this._applications.get(e)||null},e.prototype.getAllTestabilities=function(){return Array.from(this._applications.values())},e.prototype.getAllRootElements=function(){return Array.from(this._applications.keys())},e.prototype.findTestabilityInTree=function(e,t){return void 0===t&&(t=!0),en.findTestabilityInTree(this,e,t)},e.ctorParameters=function(){return[]},e}();function Jt(e){en=e}var $t,en=new(function(){function e(){}return e.prototype.addToWindow=function(e){},e.prototype.findTestabilityInTree=function(e,t,n){return null},e}()),tn=!0,nn=!1,rn=new l("AllowMultipleToken");function on(){if(nn)throw new Error("Cannot enable prod mode after platform setup.");tn=!1}function sn(){return nn=!0,tn}var an=function(e,t){this.name=e,this.token=t};function un(e){if($t&&!$t.destroyed&&!$t.injector.get(rn,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");$t=e.get(fn);var t=e.get(lt,null);return t&&t.forEach(function(e){return e()}),$t}function ln(e,t,n){void 0===n&&(n=[]);var r="Platform: "+t,o=new l(r);return function(t){void 0===t&&(t=[]);var i=pn();if(!i||i.injector.get(rn,!1))if(e)e(n.concat(t).concat({provide:o,useValue:!0}));else{var s=n.concat(t).concat({provide:o,useValue:!0});un(ae.create({providers:s,name:r}))}return cn(o)}}function cn(e){var t=pn();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}function dn(){$t&&!$t.destroyed&&$t.destroy()}function pn(){return $t&&!$t.destroyed?$t:null}var fn=function(){function e(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}return e.prototype.bootstrapModuleFactory=function(e,t){var n,r=this,o="noop"===(n=t?t.ngZone:void 0)?new Wt:("zone.js"===n?void 0:n)||new Ut({enableLongStackTrace:sn()}),i=[{provide:Ut,useValue:o}];return o.run(function(){var t=ae.create({providers:i,parent:r.injector,name:e.moduleType.name}),n=e.create(t),s=n.injector.get(Te,null);if(!s)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.onDestroy(function(){return yn(r._modules,n)}),o.runOutsideAngular(function(){return o.onError.subscribe({next:function(e){s.handleError(e)}})}),function(e,t,o){try{var i=((s=n.injector.get(ot)).runInitializers(),s.donePromise.then(function(){return r._moduleDoBootstrap(n),n}));return tt(i)?i.catch(function(n){throw t.runOutsideAngular(function(){return e.handleError(n)}),n}):i}catch(n){throw t.runOutsideAngular(function(){return e.handleError(n)}),n}var s}(s,o)})},e.prototype.bootstrapModule=function(e,t){var n=this;void 0===t&&(t=[]);var r=this.injector.get(mt),o=hn({},t);return r.createCompiler([o]).compileModuleAsync(e).then(function(e){return n.bootstrapModuleFactory(e,o)})},e.prototype._moduleDoBootstrap=function(e){var t=e.injector.get(vn);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(function(e){return t.bootstrap(e)});else{if(!e.instance.ngDoBootstrap)throw new Error("The module "+ee(e.instance.constructor)+' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');e.instance.ngDoBootstrap(t)}this._modules.push(e)},e.prototype.onDestroy=function(e){this._destroyListeners.push(e)},Object.defineProperty(e.prototype,"injector",{get:function(){return this._injector},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(function(e){return e.destroy()}),this._destroyListeners.forEach(function(e){return e()}),this._destroyed=!0},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),e}();function hn(e,t){return Array.isArray(t)?t.reduce(hn,e):Object(r.__assign)({},e,t)}var vn=function(){function e(e,t,n,r,a,u){var l=this;this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=a,this._initStatus=u,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=sn(),this._zone.onMicrotaskEmpty.subscribe({next:function(){l._zone.run(function(){l.tick()})}});var c=new o.a(function(e){l._stable=l._zone.isStable&&!l._zone.hasPendingMacrotasks&&!l._zone.hasPendingMicrotasks,l._zone.runOutsideAngular(function(){e.next(l._stable),e.complete()})}),d=new o.a(function(e){var t;l._zone.runOutsideAngular(function(){t=l._zone.onStable.subscribe(function(){Ut.assertNotInAngularZone(),J(function(){l._stable||l._zone.hasPendingMacrotasks||l._zone.hasPendingMicrotasks||(l._stable=!0,e.next(!0))})})});var n=l._zone.onUnstable.subscribe(function(){Ut.assertInAngularZone(),l._stable&&(l._stable=!1,l._zone.runOutsideAngular(function(){e.next(!1)}))});return function(){t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(i.a)(c,s.a.call(d))}return e.prototype.bootstrap=function(e,t){var n,r=this;if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");n=e instanceof bt?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);var o=n instanceof kt?null:this._injector.get(It),i=n.create(ae.NULL,[],t||n.selector,o);i.onDestroy(function(){r._unloadComponent(i)});var s=i.injector.get(Yt,null);return s&&i.injector.get(Qt).registerApplication(i.location.nativeElement,s),this._loadComponent(i),sn()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),i},e.prototype.tick=function(){var t=this;if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");var n=e._tickScope();try{this._runningTick=!0,this._views.forEach(function(e){return e.detectChanges()}),this._enforceNoNewChanges&&this._views.forEach(function(e){return e.checkNoChanges()})}catch(e){this._zone.runOutsideAngular(function(){return t._exceptionHandler.handleError(e)})}finally{this._runningTick=!1,Vt(n)}},e.prototype.attachView=function(e){var t=e;this._views.push(t),t.attachToAppRef(this)},e.prototype.detachView=function(e){var t=e;yn(this._views,t),t.detachFromAppRef()},e.prototype._loadComponent=function(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(dt,[]).concat(this._bootstrapListeners).forEach(function(t){return t(e)})},e.prototype._unloadComponent=function(e){this.detachView(e.hostView),yn(this.components,e)},e.prototype.ngOnDestroy=function(){this._views.slice().forEach(function(e){return e.destroy()})},Object.defineProperty(e.prototype,"viewCount",{get:function(){return this._views.length},enumerable:!0,configurable:!0}),e._tickScope=Lt("ApplicationRef#tick()"),e}();function yn(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}var gn=function(e,t,n,r,o,i){this.id=e,this.templateUrl=t,this.slotCount=n,this.encapsulation=r,this.styles=o,this.animations=i},mn=function(){},_n=function(){},bn=function(){},wn=function(){},En=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}(),Cn=function(){},xn=function(e){this.nativeElement=e},On=function(){},Sn=new Map;function Tn(e,t){var n=Sn.get(e);if(n)throw new Error("Duplicate module registered for "+e+" - "+n.moduleType.name+" vs "+t.moduleType.name);Sn.set(e,t)}function kn(e){var t=Sn.get(e);if(!t)throw new Error("No module with ID "+e+" loaded");return t}var In=function(){function e(){this.dirty=!0,this._results=[],this.changes=new zt,this.length=0}return e.prototype.map=function(e){return this._results.map(e)},e.prototype.filter=function(e){return this._results.filter(e)},e.prototype.find=function(e){return this._results.find(e)},e.prototype.reduce=function(e,t){return this._results.reduce(e,t)},e.prototype.forEach=function(e){this._results.forEach(e)},e.prototype.some=function(e){return this._results.some(e)},e.prototype.toArray=function(){return this._results.slice()},e.prototype[Q()]=function(){return this._results[Q()]()},e.prototype.toString=function(){return this._results.toString()},e.prototype.reset=function(e){this._results=function e(t){return t.reduce(function(t,n){var r=Array.isArray(n)?e(n):n;return t.concat(r)},[])}(e),this.dirty=!1,this.length=this._results.length,this.last=this._results[this.length-1],this.first=this._results[0]},e.prototype.notifyOnChanges=function(){this.changes.emit(this)},e.prototype.setDirty=function(){this.dirty=!0},e.prototype.destroy=function(){this.changes.complete(),this.changes.unsubscribe()},e}(),An=function(){},Rn={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"},Pn=function(){function e(e,t){this._compiler=e,this._config=t||Rn}return e.prototype.load=function(e){return this._compiler instanceof yt?this.loadFactory(e):this.loadAndCompile(e)},e.prototype.loadAndCompile=function(e){var t=this,r=e.split("#"),o=r[0],i=r[1];return void 0===i&&(i="default"),n("YuZA")(o).then(function(e){return e[i]}).then(function(e){return Nn(e,o,i)}).then(function(e){return t._compiler.compileModuleAsync(e)})},e.prototype.loadFactory=function(e){var t=e.split("#"),r=t[0],o=t[1],i="NgFactory";return void 0===o&&(o="default",i=""),n("YuZA")(this._config.factoryPathPrefix+r+this._config.factoryPathSuffix).then(function(e){return e[o+i]}).then(function(e){return Nn(e,r,o)})},e}();function Nn(e,t,n){if(!e)throw new Error("Cannot find '"+n+"' in '"+t+"'");return e}var Mn=function(){},Dn=function(){},jn=function(){},Fn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t}(jn),Ln=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t}(Fn),Vn=function(){function e(e,t,n){this._debugContext=n,this.nativeNode=e,t&&t instanceof Bn?t.addChild(this):this.parent=null,this.listeners=[]}return Object.defineProperty(e.prototype,"injector",{get:function(){return this._debugContext.injector},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentInstance",{get:function(){return this._debugContext.component},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._debugContext.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"references",{get:function(){return this._debugContext.references},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"providerTokens",{get:function(){return this._debugContext.providerTokens},enumerable:!0,configurable:!0}),e}(),Bn=function(e){function t(t,n,r){var o=e.call(this,t,n,r)||this;return o.properties={},o.attributes={},o.classes={},o.styles={},o.childNodes=[],o.nativeElement=t,o}return Object(r.__extends)(t,e),t.prototype.addChild=function(e){e&&(this.childNodes.push(e),e.parent=this)},t.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);-1!==t&&(e.parent=null,this.childNodes.splice(t,1))},t.prototype.insertChildrenAfter=function(e,t){var n,r=this,o=this.childNodes.indexOf(e);-1!==o&&((n=this.childNodes).splice.apply(n,[o+1,0].concat(t)),t.forEach(function(e){e.parent&&e.parent.removeChild(e),e.parent=r}))},t.prototype.insertBefore=function(e,t){var n=this.childNodes.indexOf(e);-1===n?this.addChild(t):(t.parent&&t.parent.removeChild(t),t.parent=this,this.childNodes.splice(n,0,t))},t.prototype.query=function(e){return this.queryAll(e)[0]||null},t.prototype.queryAll=function(e){var t=[];return zn(this,e,t),t},t.prototype.queryAllNodes=function(e){var t=[];return Un(this,e,t),t},Object.defineProperty(t.prototype,"children",{get:function(){return this.childNodes.filter(function(e){return e instanceof t})},enumerable:!0,configurable:!0}),t.prototype.triggerEventHandler=function(e,t){this.listeners.forEach(function(n){n.name==e&&n.callback(t)})},t}(Vn);function Hn(e){return e.map(function(e){return e.nativeElement})}function zn(e,t,n){e.childNodes.forEach(function(e){e instanceof Bn&&(t(e)&&n.push(e),zn(e,t,n))})}function Un(e,t,n){e instanceof Bn&&e.childNodes.forEach(function(e){t(e)&&n.push(e),e instanceof Bn&&Un(e,t,n)})}var qn=new Map;function Zn(e){return qn.get(e)||null}function Kn(e){qn.set(e.nativeNode,e)}function Xn(e,t){var n=Yn(e),r=Yn(t);return n&&r?function(e,t,n){for(var r=e[Q()](),o=t[Q()]();;){var i=r.next(),s=o.next();if(i.done&&s.done)return!0;if(i.done||s.done)return!1;if(!n(i.value,s.value))return!1}}(e,t,Xn):!(n||!e||"object"!=typeof e&&"function"!=typeof e||r||!t||"object"!=typeof t&&"function"!=typeof t)||$(e,t)}var Gn=function(){function e(e){this.wrapped=e}return e.wrap=function(t){return new e(t)},e.unwrap=function(t){return e.isWrapped(t)?t.wrapped:t},e.isWrapped=function(t){return t instanceof e},e}(),Wn=function(){function e(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}return e.prototype.isFirstChange=function(){return this.firstChange},e}();function Yn(e){return!!Qn(e)&&(Array.isArray(e)||!(e instanceof Map)&&Q()in e)}function Qn(e){return null!==e&&("function"==typeof e||"object"==typeof e)}var Jn=function(){function e(){}return e.prototype.supports=function(e){return Yn(e)},e.prototype.create=function(e){return new er(e)},e}(),$n=function(e,t){return t},er=function(){function e(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||$n}return e.prototype.forEachItem=function(e){var t;for(t=this._itHead;null!==t;t=t._next)e(t)},e.prototype.forEachOperation=function(e){for(var t=this._itHead,n=this._removalsHead,r=0,o=null;t||n;){var i=!n||t&&t.currentIndex<or(n,r,o)?t:n,s=or(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);var u=s-r,l=a-r;if(u!=l){for(var c=0;c<u;c++){var d=c<o.length?o[c]:o[c]=0,p=d+c;l<=p&&p<u&&(o[c]=d+1)}o[i.previousIndex]=l-u}}s!==a&&e(i,s,a)}},e.prototype.forEachPreviousItem=function(e){var t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)},e.prototype.forEachAddedItem=function(e){var t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)},e.prototype.forEachMovedItem=function(e){var t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)},e.prototype.forEachRemovedItem=function(e){var t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)},e.prototype.forEachIdentityChange=function(e){var t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)},e.prototype.diff=function(e){if(null==e&&(e=[]),!Yn(e))throw new Error("Error trying to diff '"+ee(e)+"'. Only arrays and iterables are allowed");return this.check(e)?this:null},e.prototype.onDestroy=function(){},e.prototype.check=function(e){var t=this;this._reset();var n,r,o,i=this._itHead,s=!1;if(Array.isArray(e)){this.length=e.length;for(var a=0;a<this.length;a++)o=this._trackByFn(a,r=e[a]),null!==i&&$(i.trackById,o)?(s&&(i=this._verifyReinsertion(i,r,o,a)),$(i.item,r)||this._addIdentityChange(i,r)):(i=this._mismatch(i,r,o,a),s=!0),i=i._next}else n=0,function(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n]);else for(var r=e[Q()](),o=void 0;!(o=r.next()).done;)t(o.value)}(e,function(e){o=t._trackByFn(n,e),null!==i&&$(i.trackById,o)?(s&&(i=t._verifyReinsertion(i,e,o,n)),$(i.item,e)||t._addIdentityChange(i,e)):(i=t._mismatch(i,e,o,n),s=!0),i=i._next,n++}),this.length=n;return this._truncate(i),this.collection=e,this.isDirty},Object.defineProperty(e.prototype,"isDirty",{get:function(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead},enumerable:!0,configurable:!0}),e.prototype._reset=function(){if(this.isDirty){var e=void 0,t=void 0;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}},e.prototype._mismatch=function(e,t,n,r){var o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?($(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?($(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new tr(t,n),o,r),e},e.prototype._verifyReinsertion=function(e,t,n,r){var o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e},e.prototype._truncate=function(e){for(;null!==e;){var t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)},e.prototype._reinsertAfter=function(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);var r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e},e.prototype._moveAfter=function(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e},e.prototype._addAfter=function(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e},e.prototype._insertAfter=function(e,t,n){var r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new rr),this._linkedRecords.put(e),e.currentIndex=n,e},e.prototype._remove=function(e){return this._addToRemovals(this._unlink(e))},e.prototype._unlink=function(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);var t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e},e.prototype._addToMoves=function(e,t){return e.previousIndex===t?e:(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e,e)},e.prototype._addToRemovals=function(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new rr),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e},e.prototype._addIdentityChange=function(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e},e}(),tr=function(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null},nr=function(){function e(){this._head=null,this._tail=null}return e.prototype.add=function(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)},e.prototype.get=function(e,t){var n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&$(n.trackById,e))return n;return null},e.prototype.remove=function(e){var t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head},e}(),rr=function(){function e(){this.map=new Map}return e.prototype.put=function(e){var t=e.trackById,n=this.map.get(t);n||(n=new nr,this.map.set(t,n)),n.add(e)},e.prototype.get=function(e,t){var n=this.map.get(e);return n?n.get(e,t):null},e.prototype.remove=function(e){var t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e},Object.defineProperty(e.prototype,"isEmpty",{get:function(){return 0===this.map.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.map.clear()},e}();function or(e,t,n){var r=e.previousIndex;if(null===r)return r;var o=0;return n&&r<n.length&&(o=n[r]),r+t+o}var ir=function(){function e(){}return e.prototype.supports=function(e){return e instanceof Map||Qn(e)},e.prototype.create=function(){return new sr},e}(),sr=function(){function e(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}return Object.defineProperty(e.prototype,"isDirty",{get:function(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead},enumerable:!0,configurable:!0}),e.prototype.forEachItem=function(e){var t;for(t=this._mapHead;null!==t;t=t._next)e(t)},e.prototype.forEachPreviousItem=function(e){var t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)},e.prototype.forEachChangedItem=function(e){var t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)},e.prototype.forEachAddedItem=function(e){var t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)},e.prototype.forEachRemovedItem=function(e){var t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)},e.prototype.diff=function(e){if(e){if(!(e instanceof Map||Qn(e)))throw new Error("Error trying to diff '"+ee(e)+"'. Only maps and objects are allowed")}else e=new Map;return this.check(e)?this:null},e.prototype.onDestroy=function(){},e.prototype.check=function(e){var t=this;this._reset();var n=this._mapHead;if(this._appendAfter=null,this._forEach(e,function(e,r){if(n&&n.key===r)t._maybeAddToChanges(n,e),t._appendAfter=n,n=n._next;else{var o=t._getOrCreateRecordForKey(r,e);n=t._insertBeforeOrAppend(n,o)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(var r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty},e.prototype._insertBeforeOrAppend=function(e,t){if(e){var n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null},e.prototype._getOrCreateRecordForKey=function(e,t){if(this._records.has(e)){var n=this._records.get(e);this._maybeAddToChanges(n,t);var r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}var i=new ar(e);return this._records.set(e,i),i.currentValue=t,this._addToAdditions(i),i},e.prototype._reset=function(){if(this.isDirty){var e=void 0;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}},e.prototype._maybeAddToChanges=function(e,t){$(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))},e.prototype._addToAdditions=function(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)},e.prototype._addToChanges=function(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)},e.prototype._forEach=function(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(function(n){return t(e[n],n)})},e}(),ar=function(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null},ur=function(){function e(e){this.factories=e}return e.create=function(t,n){if(null!=n){var r=n.factories.slice();return new e(t=t.concat(r))}return new e(t)},e.extend=function(t){return{provide:e,useFactory:function(n){if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new q,new H]]}},e.prototype.find=function(e){var t,n=this.factories.find(function(t){return t.supports(e)});if(null!=n)return n;throw new Error("Cannot find a differ supporting object '"+e+"' of type '"+((t=e).name||typeof t)+"'")},e}(),lr=function(){function e(e){this.factories=e}return e.create=function(t,n){if(n){var r=n.factories.slice();t=t.concat(r)}return new e(t)},e.extend=function(t){return{provide:e,useFactory:function(n){if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new q,new H]]}},e.prototype.find=function(e){var t=this.factories.find(function(t){return t.supports(e)});if(t)return t;throw new Error("Cannot find a differ supporting object '"+e+"'")},e}(),cr=[new ir],dr=new ur([new Jn]),pr=new lr(cr),fr=ln(null,"core",[{provide:ct,useValue:"unknown"},{provide:fn,deps:[ae]},{provide:Qt,deps:[]},{provide:ft,deps:[]}]),hr=new l("LocaleId"),vr=new l("Translations"),yr=new l("TranslationsFormat"),gr=function(){var e={Error:0,Warning:1,Ignore:2};return e[e.Error]="Error",e[e.Warning]="Warning",e[e.Ignore]="Ignore",e}();function mr(){return dr}function _r(){return pr}function br(e){return e||"en-US"}var wr=function(e){},Er=function(){var e={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};return e[e.NONE]="NONE",e[e.HTML]="HTML",e[e.STYLE]="STYLE",e[e.SCRIPT]="SCRIPT",e[e.URL]="URL",e[e.RESOURCE_URL]="RESOURCE_URL",e}(),Cr=function(){};function xr(e,t,n){var r=e.state,o=1792&r;return o===t?(e.state=-1793&r|n,e.initIndex=-1,!0):o===n}function Or(e,t,n){return(1792&e.state)===t&&e.initIndex<=n&&(e.initIndex=n+1,!0)}function Sr(e,t){return e.nodes[t]}function Tr(e,t){return e.nodes[t]}function kr(e,t){return e.nodes[t]}function Ir(e,t){return e.nodes[t]}function Ar(e,t){return e.nodes[t]}var Rr=function(){},Pr={setCurrentNode:void 0,createRootView:void 0,createEmbeddedView:void 0,createComponentView:void 0,createNgModuleRef:void 0,overrideProvider:void 0,overrideComponentView:void 0,clearOverrides:void 0,checkAndUpdateView:void 0,checkNoChangesView:void 0,destroyView:void 0,resolveDep:void 0,createDebugContext:void 0,handleEvent:void 0,updateDirectives:void 0,updateRenderer:void 0,dirtyParentQueries:void 0};function Nr(e,t,n,r){var o="ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '"+t+"'. Current value: '"+n+"'.";return r&&(o+=" It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),function(e,t){var n=new Error(e);return Mr(n,t),n}(o,e)}function Mr(e,t){e[we]=t,e[Ce]=t.logError.bind(t)}function Dr(e){return new Error("ViewDestroyedError: Attempt to use a destroyed view: "+e)}var jr=function(){},Fr=new Map;function Lr(e){var t=Fr.get(e);return t||(t=ee(e)+"_"+Fr.size,Fr.set(e,t)),t}function Vr(e,t,n,r){if(Gn.isWrapped(r)){r=Gn.unwrap(r);var o=e.def.nodes[t].bindingIndex+n,i=Gn.unwrap(e.oldValues[o]);e.oldValues[o]=new Gn(i)}return r}var Br="$$undefined",Hr="$$empty";function zr(e){return{id:Br,styles:e.styles,encapsulation:e.encapsulation,data:e.data}}var Ur=0;function qr(e){if(e&&e.id===Br){var t=null!=e.encapsulation&&e.encapsulation!==F.None||e.styles.length||Object.keys(e.data).length;e.id=t?"c"+Ur++:Hr}return e&&e.id===Hr&&(e=null),e||null}function Zr(e,t,n,r){return!(!(2&e.state)&&$(e.oldValues[t.bindingIndex+n],r))}function Kr(e,t,n,r){return!!Zr(e,t,n,r)&&(e.oldValues[t.bindingIndex+n]=r,!0)}function Xr(e,t,n,r){var o=e.oldValues[t.bindingIndex+n];if(1&e.state||!Xn(o,r)){var i=t.bindings[n].name;throw Nr(Pr.createDebugContext(e,t.nodeIndex),i+": "+o,i+": "+r,0!=(1&e.state))}}function Gr(e){for(var t=e;t;)2&t.def.flags&&(t.state|=8),t=t.viewContainerParent||t.parent}function Wr(e,t){for(var n=e;n&&n!==t;)n.state|=64,n=n.viewContainerParent||n.parent}function Yr(e,t,n,r){try{return Gr(33554432&e.def.nodes[t].flags?Tr(e,t).componentView:e),Pr.handleEvent(e,t,n,r)}catch(t){e.root.errorHandler.handleError(t)}}function Qr(e){return e.parent?Tr(e.parent,e.parentNodeDef.nodeIndex):null}function Jr(e){return e.parent?e.parentNodeDef.parent:null}function $r(e,t){switch(201347067&t.flags){case 1:return Tr(e,t.nodeIndex).renderElement;case 2:return Sr(e,t.nodeIndex).renderText}}function eo(e,t){return e?e+":"+t:t}function to(e){return!!e.parent&&!!(32768&e.parentNodeDef.flags)}function no(e){return!(!e.parent||32768&e.parentNodeDef.flags)}function ro(e){return 1<<e%32}function oo(e){var t={},n=0,r={};return e&&e.forEach(function(e){var o=e[0],i=e[1];"number"==typeof o?(t[o]=i,n|=ro(o)):r[o]=i}),{matchedQueries:t,references:r,matchedQueryIds:n}}function io(e,t){return e.map(function(e){var n,r;return Array.isArray(e)?(r=e[0],n=e[1]):(r=0,n=e),n&&("function"==typeof n||"object"==typeof n)&&t&&Object.defineProperty(n,re,{value:t,configurable:!0}),{flags:r,token:n,tokenKey:Lr(n)}})}function so(e,t,n){var r=n.renderParent;return r?0==(1&r.flags)||0==(33554432&r.flags)||r.element.componentRendererType&&r.element.componentRendererType.encapsulation===F.Native?Tr(e,n.renderParent.nodeIndex).renderElement:void 0:t}var ao=new WeakMap;function uo(e){var t=ao.get(e);return t||((t=e(function(){return jr})).factory=e,ao.set(e,t)),t}function lo(e,t,n,r,o){3===t&&(n=e.renderer.parentNode($r(e,e.def.lastRenderRootNode))),co(e,t,0,e.def.nodes.length-1,n,r,o)}function co(e,t,n,r,o,i,s){for(var a=n;a<=r;a++){var u=e.def.nodes[a];11&u.flags&&fo(e,u,t,o,i,s),a+=u.childCount}}function po(e,t,n,r,o,i){for(var s=e;s&&!to(s);)s=s.parent;for(var a=s.parent,u=Jr(s),l=u.nodeIndex+u.childCount,c=u.nodeIndex+1;c<=l;c++){var d=a.def.nodes[c];d.ngContentIndex===t&&fo(a,d,n,r,o,i),c+=d.childCount}if(!a.parent){var p=e.root.projectableNodes[t];if(p)for(c=0;c<p.length;c++)ho(e,p[c],n,r,o,i)}}function fo(e,t,n,r,o,i){if(8&t.flags)po(e,t.ngContent.index,n,r,o,i);else{var s=$r(e,t);if(3===n&&33554432&t.flags&&48&t.bindingFlags?(16&t.bindingFlags&&ho(e,s,n,r,o,i),32&t.bindingFlags&&ho(Tr(e,t.nodeIndex).componentView,s,n,r,o,i)):ho(e,s,n,r,o,i),16777216&t.flags)for(var a=Tr(e,t.nodeIndex).viewContainer._embeddedViews,u=0;u<a.length;u++)lo(a[u],n,r,o,i);1&t.flags&&!t.element.name&&co(e,n,t.nodeIndex+1,t.nodeIndex+t.childCount,r,o,i)}}function ho(e,t,n,r,o,i){var s=e.renderer;switch(n){case 1:s.appendChild(r,t);break;case 2:s.insertBefore(r,t,o);break;case 3:s.removeChild(r,t);break;case 0:i.push(t)}}var vo=/^:([^:]+):(.+)$/;function yo(e){if(":"===e[0]){var t=e.match(vo);return[t[1],t[2]]}return["",e]}function go(e){for(var t=0,n=0;n<e.length;n++)t|=e[n].flags;return t}function mo(e,t){for(var n="",r=0;r<2*e;r+=2)n=n+t[r]+bo(t[r+1]);return n+t[2*e]}function _o(e,t,n,r,o,i,s,a,u,l,c,d,p,f,h,v,y,g,m,_){switch(e){case 1:return t+bo(n)+r;case 2:return t+bo(n)+r+bo(o)+i;case 3:return t+bo(n)+r+bo(o)+i+bo(s)+a;case 4:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l;case 5:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l+bo(c)+d;case 6:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l+bo(c)+d+bo(p)+f;case 7:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l+bo(c)+d+bo(p)+f+bo(h)+v;case 8:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l+bo(c)+d+bo(p)+f+bo(h)+v+bo(y)+g;case 9:return t+bo(n)+r+bo(o)+i+bo(s)+a+bo(u)+l+bo(c)+d+bo(p)+f+bo(h)+v+bo(y)+g+bo(m)+_;default:throw new Error("Does not support more than 9 expressions")}}function bo(e){return null!=e?e.toString():""}var wo=[],Eo={};function Co(e,t,n,r,o,i){e|=1;var s=oo(t);return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,flags:e,checkIndex:-1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:s.matchedQueries,matchedQueryIds:s.matchedQueryIds,references:s.references,ngContentIndex:n,childCount:r,bindings:[],bindingFlags:0,outputs:[],element:{ns:null,name:null,attrs:null,template:i?uo(i):null,componentProvider:null,componentView:null,componentRendererType:null,publicProviders:null,allProviders:null,handleEvent:o||jr},provider:null,text:null,query:null,ngContent:null}}function xo(e,t,n,r,o,i,s,a,u,l,c,d){void 0===s&&(s=[]),l||(l=jr);var p=oo(n),f=p.matchedQueries,h=p.references,v=p.matchedQueryIds,y=null,g=null;i&&(y=(A=yo(i))[0],g=A[1]),a=a||[];for(var m=new Array(a.length),_=0;_<a.length;_++){var b=a[_],w=b[0],E=b[2],C=yo(b[1]),x=C[0],O=C[1],S=void 0,T=void 0;switch(15&w){case 4:T=E;break;case 1:case 8:S=E}m[_]={flags:w,ns:x,name:O,nonMinifiedName:O,securityContext:S,suffix:T}}u=u||[];var k=new Array(u.length);for(_=0;_<u.length;_++){var I=u[_];k[_]={type:0,target:I[0],eventName:I[1],propName:null}}var A,R=(s=s||[]).map(function(e){var t=e[1],n=yo(e[0]);return[n[0],n[1],t]});return d=qr(d),c&&(t|=33554432),{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t|=1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:f,matchedQueryIds:v,references:h,ngContentIndex:r,childCount:o,bindings:m,bindingFlags:go(m),outputs:k,element:{ns:y,name:g,attrs:R,template:null,componentProvider:null,componentView:c||null,componentRendererType:d,publicProviders:null,allProviders:null,handleEvent:l||jr},provider:null,text:null,query:null,ngContent:null}}function Oo(e,t,n){var r,o=n.element,i=e.root.selectorOrNode,s=e.renderer;if(e.parent||!i){r=o.name?s.createElement(o.name,o.ns):s.createComment("");var a=so(e,t,n);a&&s.appendChild(a,r)}else r=s.selectRootElement(i);if(o.attrs)for(var u=0;u<o.attrs.length;u++){var l=o.attrs[u];s.setAttribute(r,l[1],l[2],l[0])}return r}function So(e,t,n,r){for(var o=0;o<n.outputs.length;o++){var i=n.outputs[o],s=To(e,n.nodeIndex,eo(i.target,i.eventName)),a=i.target,u=e;"component"===i.target&&(a=null,u=t);var l=u.renderer.listen(a||r,i.eventName,s);e.disposables[n.outputIndex+o]=l}}function To(e,t,n){return function(r){return Yr(e,t,n,r)}}function ko(e,t,n,r){if(!Kr(e,t,n,r))return!1;var o=t.bindings[n],i=Tr(e,t.nodeIndex),s=i.renderElement,a=o.name;switch(15&o.flags){case 1:!function(e,t,n,r,o,i){var s=t.securityContext,a=s?e.root.sanitizer.sanitize(s,i):i;a=null!=a?a.toString():null;var u=e.renderer;null!=i?u.setAttribute(n,o,a,r):u.removeAttribute(n,o,r)}(e,o,s,o.ns,a,r);break;case 2:!function(e,t,n,r){var o=e.renderer;r?o.addClass(t,n):o.removeClass(t,n)}(e,s,a,r);break;case 4:!function(e,t,n,r,o){var i=e.root.sanitizer.sanitize(Er.STYLE,o);if(null!=i){i=i.toString();var s=t.suffix;null!=s&&(i+=s)}else i=null;var a=e.renderer;null!=i?a.setStyle(n,r,i):a.removeStyle(n,r)}(e,o,s,a,r);break;case 8:!function(e,t,n,r,o){var i=t.securityContext,s=i?e.root.sanitizer.sanitize(i,o):o;e.renderer.setProperty(n,r,s)}(33554432&t.flags&&32&o.flags?i.componentView:e,o,s,a,r)}return!0}var Io=new Object,Ao=Lr(ae),Ro=Lr(It);function Po(e,t,n,r){return n=ne(n),{index:-1,deps:io(r,ee(t)),flags:e,token:t,value:n}}function No(e){for(var t={},n=0;n<e.length;n++){var r=e[n];r.index=n,t[Lr(r.token)]=r}return{factory:null,providersByKey:t,providers:e}}function Mo(e,t,n){if(void 0===n&&(n=ae.THROW_IF_NOT_FOUND),8&t.flags)return t.token;if(2&t.flags&&(n=null),1&t.flags)return e._parent.get(t.token,n);var r=t.tokenKey;switch(r){case Ao:case Ro:return e}var o=e._def.providersByKey[r];if(o){var i=e._providers[o.index];return void 0===i&&(i=e._providers[o.index]=Do(e,o)),i===Io?void 0:i}return e._parent.get(t.token,n)}function Do(e,t){var n;switch(201347067&t.flags){case 512:n=function(e,t,n){var r=n.length;switch(r){case 0:return new t;case 1:return new t(Mo(e,n[0]));case 2:return new t(Mo(e,n[0]),Mo(e,n[1]));case 3:return new t(Mo(e,n[0]),Mo(e,n[1]),Mo(e,n[2]));default:for(var o=new Array(r),i=0;i<r;i++)o[i]=Mo(e,n[i]);return new(t.bind.apply(t,[void 0].concat(o)))}}(e,t.value,t.deps);break;case 1024:n=function(e,t,n){var r=n.length;switch(r){case 0:return t();case 1:return t(Mo(e,n[0]));case 2:return t(Mo(e,n[0]),Mo(e,n[1]));case 3:return t(Mo(e,n[0]),Mo(e,n[1]),Mo(e,n[2]));default:for(var o=Array(r),i=0;i<r;i++)o[i]=Mo(e,n[i]);return t.apply(void 0,o)}}(e,t.value,t.deps);break;case 2048:n=Mo(e,t.deps[0]);break;case 256:n=t.value}return void 0===n?Io:n}function jo(e,t){var n=e.viewContainer._embeddedViews;if((null==t||t>=n.length)&&(t=n.length-1),t<0)return null;var r=n[t];return r.viewContainerParent=null,Bo(n,t),Pr.dirtyParentQueries(r),Lo(r),r}function Fo(e,t,n){var r=t?$r(t,t.def.lastRenderRootNode):e.renderElement;lo(n,2,n.renderer.parentNode(r),n.renderer.nextSibling(r),void 0)}function Lo(e){lo(e,3,null,null,void 0)}function Vo(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Bo(e,t){t>=e.length-1?e.pop():e.splice(t,1)}var Ho=new Object;function zo(e,t,n,r,o,i){return new qo(e,t,n,r,o,i)}function Uo(e){return e.viewDefFactory}var qo=function(e){function t(t,n,r,o,i,s){var a=e.call(this)||this;return a.selector=t,a.componentType=n,a._inputs=o,a._outputs=i,a.ngContentSelectors=s,a.viewDefFactory=r,a}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"inputs",{get:function(){var e=[],t=this._inputs;for(var n in t)e.push({propName:n,templateName:t[n]});return e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outputs",{get:function(){var e=[];for(var t in this._outputs)e.push({propName:t,templateName:this._outputs[t]});return e},enumerable:!0,configurable:!0}),t.prototype.create=function(e,t,n,r){if(!r)throw new Error("ngModule should be provided");var o=uo(this.viewDefFactory),i=o.nodes[0].element.componentProvider.nodeIndex,s=Pr.createRootView(e,t||[],n,o,r,Ho),a=kr(s,i).instance;return n&&s.renderer.setAttribute(Tr(s,0).renderElement,"ng-version",V.full),new Zo(s,new Wo(s),a)},t}(bt),Zo=function(e){function t(t,n,r){var o=e.call(this)||this;return o._view=t,o._viewRef=n,o._component=r,o._elDef=o._view.def.nodes[0],o.hostView=n,o.changeDetectorRef=n,o.instance=r,o}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"location",{get:function(){return new xn(Tr(this._view,this._elDef.nodeIndex).renderElement)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"injector",{get:function(){return new $o(this._view,this._elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentType",{get:function(){return this._component.constructor},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this._viewRef.destroy()},t.prototype.onDestroy=function(e){this._viewRef.onDestroy(e)},t}(_t);function Ko(e,t,n){return new Xo(e,t,n)}var Xo=function(){function e(e,t,n){this._view=e,this._elDef=t,this._data=n,this._embeddedViews=[]}return Object.defineProperty(e.prototype,"element",{get:function(){return new xn(this._data.renderElement)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"injector",{get:function(){return new $o(this._view,this._elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parentInjector",{get:function(){for(var e=this._view,t=this._elDef.parent;!t&&e;)t=Jr(e),e=e.parent;return e?new $o(e,t):new $o(this._view,null)},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=this._embeddedViews.length-1;e>=0;e--){var t=jo(this._data,e);Pr.destroyView(t)}},e.prototype.get=function(e){var t=this._embeddedViews[e];if(t){var n=new Wo(t);return n.attachToViewContainerRef(this),n}return null},Object.defineProperty(e.prototype,"length",{get:function(){return this._embeddedViews.length},enumerable:!0,configurable:!0}),e.prototype.createEmbeddedView=function(e,t,n){var r=e.createEmbeddedView(t||{});return this.insert(r,n),r},e.prototype.createComponent=function(e,t,n,r,o){var i=n||this.parentInjector;o||e instanceof kt||(o=i.get(It));var s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s},e.prototype.insert=function(e,t){if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");var n,r,o,i,s=e;return o=s._view,i=(n=this._data).viewContainer._embeddedViews,null!==(r=t)&&void 0!==r||(r=i.length),o.viewContainerParent=this._view,Vo(i,r,o),function(e,t){var n=Qr(t);if(n&&n!==e&&!(16&t.state)){t.state|=16;var r=n.template._projectedViews;r||(r=n.template._projectedViews=[]),r.push(t),function(e,n){if(!(4&n.flags)){t.parent.def.nodeFlags|=4,n.flags|=4;for(var r=n.parent;r;)r.childFlags|=4,r=r.parent}}(0,t.parentNodeDef)}}(n,o),Pr.dirtyParentQueries(o),Fo(n,r>0?i[r-1]:null,o),s.attachToViewContainerRef(this),e},e.prototype.move=function(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");var n,r,o,i,s,a=this._embeddedViews.indexOf(e._view);return o=t,s=(i=(n=this._data).viewContainer._embeddedViews)[r=a],Bo(i,r),null==o&&(o=i.length),Vo(i,o,s),Pr.dirtyParentQueries(s),Lo(s),Fo(n,o>0?i[o-1]:null,s),e},e.prototype.indexOf=function(e){return this._embeddedViews.indexOf(e._view)},e.prototype.remove=function(e){var t=jo(this._data,e);t&&Pr.destroyView(t)},e.prototype.detach=function(e){var t=jo(this._data,e);return t?new Wo(t):null},e}();function Go(e){return new Wo(e)}var Wo=function(){function e(e){this._view=e,this._viewContainerRef=null,this._appRef=null}return Object.defineProperty(e.prototype,"rootNodes",{get:function(){return lo(this._view,0,void 0,void 0,e=[]),e;var e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._view.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"destroyed",{get:function(){return 0!=(128&this._view.state)},enumerable:!0,configurable:!0}),e.prototype.markForCheck=function(){Gr(this._view)},e.prototype.detach=function(){this._view.state&=-5},e.prototype.detectChanges=function(){var e=this._view.root.rendererFactory;e.begin&&e.begin();try{Pr.checkAndUpdateView(this._view)}finally{e.end&&e.end()}},e.prototype.checkNoChanges=function(){Pr.checkNoChangesView(this._view)},e.prototype.reattach=function(){this._view.state|=4},e.prototype.onDestroy=function(e){this._view.disposables||(this._view.disposables=[]),this._view.disposables.push(e)},e.prototype.destroy=function(){this._appRef?this._appRef.detachView(this):this._viewContainerRef&&this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),Pr.destroyView(this._view)},e.prototype.detachFromAppRef=function(){this._appRef=null,Lo(this._view),Pr.dirtyParentQueries(this._view)},e.prototype.attachToAppRef=function(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e},e.prototype.attachToViewContainerRef=function(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e},e}();function Yo(e,t){return new Qo(e,t)}var Qo=function(e){function t(t,n){var r=e.call(this)||this;return r._parentView=t,r._def=n,r}return Object(r.__extends)(t,e),t.prototype.createEmbeddedView=function(e){return new Wo(Pr.createEmbeddedView(this._parentView,this._def,this._def.element.template,e))},Object.defineProperty(t.prototype,"elementRef",{get:function(){return new xn(Tr(this._parentView,this._def.nodeIndex).renderElement)},enumerable:!0,configurable:!0}),t}(Mn);function Jo(e,t){return new $o(e,t)}var $o=function(){function e(e,t){this.view=e,this.elDef=t}return e.prototype.get=function(e,t){return void 0===t&&(t=ae.THROW_IF_NOT_FOUND),Pr.resolveDep(this.view,this.elDef,!!this.elDef&&0!=(33554432&this.elDef.flags),{flags:0,token:e,tokenKey:Lr(e)},t)},e}();function ei(e,t){var n=e.def.nodes[t];if(1&n.flags){var r=Tr(e,n.nodeIndex);return n.element.template?r.template:r.renderElement}if(2&n.flags)return Sr(e,n.nodeIndex).renderText;if(20240&n.flags)return kr(e,n.nodeIndex).instance;throw new Error("Illegal state: read nodeValue for node index "+t)}function ti(e){return new ni(e.renderer)}var ni=function(){function e(e){this.delegate=e}return e.prototype.selectRootElement=function(e){return this.delegate.selectRootElement(e)},e.prototype.createElement=function(e,t){var n=yo(t),r=this.delegate.createElement(n[1],n[0]);return e&&this.delegate.appendChild(e,r),r},e.prototype.createViewRoot=function(e){return e},e.prototype.createTemplateAnchor=function(e){var t=this.delegate.createComment("");return e&&this.delegate.appendChild(e,t),t},e.prototype.createText=function(e,t){var n=this.delegate.createText(t);return e&&this.delegate.appendChild(e,n),n},e.prototype.projectNodes=function(e,t){for(var n=0;n<t.length;n++)this.delegate.appendChild(e,t[n])},e.prototype.attachViewAfter=function(e,t){for(var n=this.delegate.parentNode(e),r=this.delegate.nextSibling(e),o=0;o<t.length;o++)this.delegate.insertBefore(n,t[o],r)},e.prototype.detachView=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=this.delegate.parentNode(n);this.delegate.removeChild(r,n)}},e.prototype.destroyView=function(e,t){for(var n=0;n<t.length;n++)this.delegate.destroyNode(t[n])},e.prototype.listen=function(e,t,n){return this.delegate.listen(e,t,n)},e.prototype.listenGlobal=function(e,t,n){return this.delegate.listen(e,t,n)},e.prototype.setElementProperty=function(e,t,n){this.delegate.setProperty(e,t,n)},e.prototype.setElementAttribute=function(e,t,n){var r=yo(t),o=r[0],i=r[1];null!=n?this.delegate.setAttribute(e,i,n,o):this.delegate.removeAttribute(e,i,o)},e.prototype.setBindingDebugInfo=function(e,t,n){},e.prototype.setElementClass=function(e,t,n){n?this.delegate.addClass(e,t):this.delegate.removeClass(e,t)},e.prototype.setElementStyle=function(e,t,n){null!=n?this.delegate.setStyle(e,t,n):this.delegate.removeStyle(e,t)},e.prototype.invokeElementMethod=function(e,t,n){e[t].apply(e,n)},e.prototype.setText=function(e,t){this.delegate.setValue(e,t)},e.prototype.animate=function(){throw new Error("Renderer.animate is no longer supported!")},e}();function ri(e,t,n,r){return new oi(e,t,n,r)}var oi=function(){function e(e,t,n,r){this._moduleType=e,this._parent=t,this._bootstrapComponents=n,this._def=r,this._destroyListeners=[],this._destroyed=!1,this.injector=this,function(e){for(var t=e._def,n=e._providers=new Array(t.providers.length),r=0;r<t.providers.length;r++){var o=t.providers[r];4096&o.flags||(n[r]=Do(e,o))}}(this)}return e.prototype.get=function(e,t){return void 0===t&&(t=ae.THROW_IF_NOT_FOUND),Mo(this,{token:e,tokenKey:Lr(e),flags:0},t)},Object.defineProperty(e.prototype,"instance",{get:function(){return this.get(this._moduleType)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentFactoryResolver",{get:function(){return this.get(St)},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){if(this._destroyed)throw new Error("The ng module "+ee(this.instance.constructor)+" has already been destroyed.");this._destroyed=!0,function(e,t){for(var n=e._def,r=0;r<n.providers.length;r++)if(131072&n.providers[r].flags){var o=e._providers[r];o&&o!==Io&&o.ngOnDestroy()}}(this),this._destroyListeners.forEach(function(e){return e()})},e.prototype.onDestroy=function(e){this._destroyListeners.push(e)},e}(),ii=Lr(_n),si=Lr(Cn),ai=Lr(xn),ui=Lr(Dn),li=Lr(Mn),ci=Lr(jn),di=Lr(ae);function pi(e,t,n,r,o,i,s,a){var u=[];if(s)for(var l in s){var c=s[l];u[c[0]]={flags:8,name:l,nonMinifiedName:c[1],ns:null,securityContext:null,suffix:null}}var d=[];if(a)for(var p in a)d.push({type:1,propName:p,target:null,eventName:a[p]});return vi(e,t|=16384,n,r,o,o,i,u,d)}function fi(e,t,n){return vi(-1,e|=16,null,0,t,t,n)}function hi(e,t,n,r,o){return vi(-1,e,t,0,n,r,o)}function vi(e,t,n,r,o,i,s,a,u){var l=oo(n),c=l.matchedQueries,d=l.references,p=l.matchedQueryIds;u||(u=[]),a||(a=[]),i=ne(i);var f=io(s,ee(o));return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:c,matchedQueryIds:p,references:d,ngContentIndex:-1,childCount:r,bindings:a,bindingFlags:go(a),outputs:u,element:null,provider:{token:o,value:i,deps:f},text:null,query:null,ngContent:null}}function yi(e,t){return bi(e,t)}function gi(e,t){for(var n=e;n.parent&&!to(n);)n=n.parent;return wi(n.parent,Jr(n),!0,t.provider.value,t.provider.deps)}function mi(e,t){var n=wi(e,t.parent,(32768&t.flags)>0,t.provider.value,t.provider.deps);if(t.outputs.length)for(var r=0;r<t.outputs.length;r++){var o=t.outputs[r],i=n[o.propName].subscribe(_i(e,t.parent.nodeIndex,o.eventName));e.disposables[t.outputIndex+r]=i.unsubscribe.bind(i)}return n}function _i(e,t,n){return function(r){return Yr(e,t,n,r)}}function bi(e,t){var n=(8192&t.flags)>0,r=t.provider;switch(201347067&t.flags){case 512:return wi(e,t.parent,n,r.value,r.deps);case 1024:return function(e,t,n,r,o){var i=o.length;switch(i){case 0:return r();case 1:return r(Ci(e,t,n,o[0]));case 2:return r(Ci(e,t,n,o[0]),Ci(e,t,n,o[1]));case 3:return r(Ci(e,t,n,o[0]),Ci(e,t,n,o[1]),Ci(e,t,n,o[2]));default:for(var s=Array(i),a=0;a<i;a++)s[a]=Ci(e,t,n,o[a]);return r.apply(void 0,s)}}(e,t.parent,n,r.value,r.deps);case 2048:return Ci(e,t.parent,n,r.deps[0]);case 256:return r.value}}function wi(e,t,n,r,o){var i=o.length;switch(i){case 0:return new r;case 1:return new r(Ci(e,t,n,o[0]));case 2:return new r(Ci(e,t,n,o[0]),Ci(e,t,n,o[1]));case 3:return new r(Ci(e,t,n,o[0]),Ci(e,t,n,o[1]),Ci(e,t,n,o[2]));default:for(var s=new Array(i),a=0;a<i;a++)s[a]=Ci(e,t,n,o[a]);return new(r.bind.apply(r,[void 0].concat(s)))}}var Ei={};function Ci(e,t,n,r,o){if(void 0===o&&(o=ae.THROW_IF_NOT_FOUND),8&r.flags)return r.token;var i=e;2&r.flags&&(o=null);var s=r.tokenKey;for(s===ci&&(n=!(!t||!t.element.componentView)),t&&1&r.flags&&(n=!1,t=t.parent);e;){if(t)switch(s){case ii:return ti(xi(e,t,n));case si:return xi(e,t,n).renderer;case ai:return new xn(Tr(e,t.nodeIndex).renderElement);case ui:return Tr(e,t.nodeIndex).viewContainer;case li:if(t.element.template)return Tr(e,t.nodeIndex).template;break;case ci:return Go(xi(e,t,n));case di:return Jo(e,t);default:var a=(n?t.element.allProviders:t.element.publicProviders)[s];if(a){var u=kr(e,a.nodeIndex);return u||(u={instance:bi(e,a)},e.nodes[a.nodeIndex]=u),u.instance}}n=to(e),t=Jr(e),e=e.parent}var l=i.root.injector.get(r.token,Ei);return l!==Ei||o===Ei?l:i.root.ngModule.injector.get(r.token,o)}function xi(e,t,n){var r;if(n)r=Tr(e,t.nodeIndex).componentView;else for(r=e;r.parent&&!to(r);)r=r.parent;return r}function Oi(e,t,n,r,o,i){if(32768&n.flags){var s=Tr(e,n.parent.nodeIndex).componentView;2&s.def.flags&&(s.state|=8)}if(t.instance[n.bindings[r].name]=o,524288&n.flags){i=i||{};var a=Gn.unwrap(e.oldValues[n.bindingIndex+r]);i[n.bindings[r].nonMinifiedName]=new Wn(a,o,0!=(2&e.state))}return e.oldValues[n.bindingIndex+r]=o,i}function Si(e,t){if(e.def.nodeFlags&t)for(var n=e.def.nodes,r=0,o=0;o<n.length;o++){var i=n[o],s=i.parent;for(!s&&i.flags&t&&ki(e,o,i.flags&t,r++),0==(i.childFlags&t)&&(o+=i.childCount);s&&1&s.flags&&o===s.nodeIndex+s.childCount;)s.directChildFlags&t&&(r=Ti(e,s,t,r)),s=s.parent}}function Ti(e,t,n,r){for(var o=t.nodeIndex+1;o<=t.nodeIndex+t.childCount;o++){var i=e.def.nodes[o];i.flags&n&&ki(e,o,i.flags&n,r++),o+=i.childCount}return r}function ki(e,t,n,r){var o=kr(e,t);if(o){var i=o.instance;i&&(Pr.setCurrentNode(e,t),1048576&n&&Or(e,512,r)&&i.ngAfterContentInit(),2097152&n&&i.ngAfterContentChecked(),4194304&n&&Or(e,768,r)&&i.ngAfterViewInit(),8388608&n&&i.ngAfterViewChecked(),131072&n&&i.ngOnDestroy())}}function Ii(e,t,n){var r=[];for(var o in n)r.push({propName:o,bindingType:n[o]});return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,ngContentIndex:-1,matchedQueries:{},matchedQueryIds:0,references:{},childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:{id:t,filterId:ro(t),bindings:r},ngContent:null}}function Ai(e){for(var t=e.def.nodeMatchedQueries;e.parent&&no(e);){var n=e.parentNodeDef;e=e.parent;for(var r=n.nodeIndex+n.childCount,o=0;o<=r;o++)67108864&(i=e.def.nodes[o]).flags&&536870912&i.flags&&(i.query.filterId&t)===i.query.filterId&&Ar(e,o).setDirty(),!(1&i.flags&&o+i.childCount<n.nodeIndex)&&67108864&i.childFlags&&536870912&i.childFlags||(o+=i.childCount)}if(134217728&e.def.nodeFlags)for(o=0;o<e.def.nodes.length;o++){var i;134217728&(i=e.def.nodes[o]).flags&&536870912&i.flags&&Ar(e,o).setDirty(),o+=i.childCount}}function Ri(e,t){var n=Ar(e,t.nodeIndex);if(n.dirty){var r,o=void 0;if(67108864&t.flags){var i=t.parent.parent;o=Pi(e,i.nodeIndex,i.nodeIndex+i.childCount,t.query,[]),r=kr(e,t.parent.nodeIndex).instance}else 134217728&t.flags&&(o=Pi(e,0,e.def.nodes.length-1,t.query,[]),r=e.component);n.reset(o);for(var s=t.query.bindings,a=!1,u=0;u<s.length;u++){var l=s[u],c=void 0;switch(l.bindingType){case 0:c=n.first;break;case 1:c=n,a=!0}r[l.propName]=c}a&&n.notifyOnChanges()}}function Pi(e,t,n,r,o){for(var i=t;i<=n;i++){var s=e.def.nodes[i],a=s.matchedQueries[r.id];if(null!=a&&o.push(Ni(e,s,a)),1&s.flags&&s.element.template&&(s.element.template.nodeMatchedQueries&r.filterId)===r.filterId){var u=Tr(e,i);if((s.childMatchedQueries&r.filterId)===r.filterId&&(Pi(e,i+1,i+s.childCount,r,o),i+=s.childCount),16777216&s.flags)for(var l=u.viewContainer._embeddedViews,c=0;c<l.length;c++){var d=l[c],p=Qr(d);p&&p===u&&Pi(d,0,d.def.nodes.length-1,r,o)}var f=u.template._projectedViews;if(f)for(c=0;c<f.length;c++){var h=f[c];Pi(h,0,h.def.nodes.length-1,r,o)}}(s.childMatchedQueries&r.filterId)!==r.filterId&&(i+=s.childCount)}return o}function Ni(e,t,n){if(null!=n)switch(n){case 1:return Tr(e,t.nodeIndex).renderElement;case 0:return new xn(Tr(e,t.nodeIndex).renderElement);case 2:return Tr(e,t.nodeIndex).template;case 3:return Tr(e,t.nodeIndex).viewContainer;case 4:return kr(e,t.nodeIndex).instance}}function Mi(e,t){return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:8,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:e,childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:null,ngContent:{index:t}}}function Di(e,t,n){var r=so(e,t,n);r&&po(e,n.ngContent.index,1,r,null,void 0)}function ji(e,t){return Vi(128,e,new Array(t+1))}function Fi(e,t){return Vi(32,e,new Array(t))}function Li(e,t){for(var n=Object.keys(t),r=n.length,o=new Array(r),i=0;i<r;i++){var s=n[i];o[t[s]]=s}return Vi(64,e,o)}function Vi(e,t,n){for(var r=new Array(n.length),o=0;o<n.length;o++){var i=n[o];r[o]={flags:8,name:i,ns:null,nonMinifiedName:i,securityContext:null,suffix:null}}return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:t,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:-1,childCount:0,bindings:r,bindingFlags:go(r),outputs:[],element:null,provider:null,text:null,query:null,ngContent:null}}function Bi(e,t,n){for(var r=new Array(n.length-1),o=1;o<n.length;o++)r[o-1]={flags:8,name:null,ns:null,nonMinifiedName:null,securityContext:null,suffix:n[o]};return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:2,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:t,childCount:0,bindings:r,bindingFlags:8,outputs:[],element:null,provider:null,text:{prefix:n[0]},query:null,ngContent:null}}function Hi(e,t,n){var r,o=e.renderer;r=o.createText(n.text.prefix);var i=so(e,t,n);return i&&o.appendChild(i,r),{renderText:r}}function zi(e,t){return(null!=e?e.toString():"")+t.suffix}function Ui(e,t,n,r){for(var o=0,i=0,s=0,a=0,u=0,l=null,c=null,d=!1,p=!1,f=null,h=0;h<t.length;h++){var v=t[h];if(v.nodeIndex=h,v.parent=l,v.bindingIndex=o,v.outputIndex=i,v.renderParent=c,s|=v.flags,u|=v.matchedQueryIds,v.element){var y=v.element;y.publicProviders=l?l.element.publicProviders:Object.create(null),y.allProviders=y.publicProviders,d=!1,p=!1,v.element.template&&(u|=v.element.template.nodeMatchedQueries)}if(Zi(l,v,t.length),o+=v.bindings.length,i+=v.outputs.length,!c&&3&v.flags&&(f=v),20224&v.flags){d||(d=!0,l.element.publicProviders=Object.create(l.element.publicProviders),l.element.allProviders=l.element.publicProviders);var g=0!=(32768&v.flags);0==(8192&v.flags)||g?l.element.publicProviders[Lr(v.provider.token)]=v:(p||(p=!0,l.element.allProviders=Object.create(l.element.publicProviders)),l.element.allProviders[Lr(v.provider.token)]=v),g&&(l.element.componentProvider=v)}if(l?(l.childFlags|=v.flags,l.directChildFlags|=v.flags,l.childMatchedQueries|=v.matchedQueryIds,v.element&&v.element.template&&(l.childMatchedQueries|=v.element.template.nodeMatchedQueries)):a|=v.flags,v.childCount>0)l=v,qi(v)||(c=v);else for(;l&&h===l.nodeIndex+l.childCount;){var m=l.parent;m&&(m.childFlags|=l.childFlags,m.childMatchedQueries|=l.childMatchedQueries),c=(l=m)&&qi(l)?l.renderParent:l}}return{factory:null,nodeFlags:s,rootNodeFlags:a,nodeMatchedQueries:u,flags:e,nodes:t,updateDirectives:n||jr,updateRenderer:r||jr,handleEvent:function(e,n,r,o){return t[n].element.handleEvent(e,r,o)},bindingCount:o,outputCount:i,lastRenderRootNode:f}}function qi(e){return 0!=(1&e.flags)&&null===e.element.name}function Zi(e,t,n){var r=t.element&&t.element.template;if(r){if(!r.lastRenderRootNode)throw new Error("Illegal State: Embedded templates without nodes are not allowed!");if(r.lastRenderRootNode&&16777216&r.lastRenderRootNode.flags)throw new Error("Illegal State: Last root node of a template can't have embedded views, at index "+t.nodeIndex+"!")}if(20224&t.flags&&0==(1&(e?e.flags:0)))throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index "+t.nodeIndex+"!");if(t.query){if(67108864&t.flags&&(!e||0==(16384&e.flags)))throw new Error("Illegal State: Content Query nodes need to be children of directives, at index "+t.nodeIndex+"!");if(134217728&t.flags&&e)throw new Error("Illegal State: View Query nodes have to be top level nodes, at index "+t.nodeIndex+"!")}if(t.childCount){var o=e?e.nodeIndex+e.childCount:n-1;if(t.nodeIndex<=o&&t.nodeIndex+t.childCount>o)throw new Error("Illegal State: childCount of node leads outside of parent, at index "+t.nodeIndex+"!")}}function Ki(e,t,n,r){var o=Wi(e.root,e.renderer,e,t,n);return Yi(o,e.component,r),Qi(o),o}function Xi(e,t,n){var r=Wi(e,e.renderer,null,null,t);return Yi(r,n,n),Qi(r),r}function Gi(e,t,n,r){var o,i=t.element.componentRendererType;return o=i?e.root.rendererFactory.createRenderer(r,i):e.root.renderer,Wi(e.root,o,e,t.element.componentProvider,n)}function Wi(e,t,n,r,o){var i=new Array(o.nodes.length),s=o.outputCount?new Array(o.outputCount):null;return{def:o,parent:n,viewContainerParent:null,parentNodeDef:r,context:null,component:null,nodes:i,state:13,root:e,renderer:t,oldValues:new Array(o.bindingCount),disposables:s,initIndex:-1}}function Yi(e,t,n){e.component=t,e.context=n}function Qi(e){var t;to(e)&&(t=Tr(e.parent,e.parentNodeDef.parent.nodeIndex).renderElement);for(var n=e.def,r=e.nodes,o=0;o<n.nodes.length;o++){var i=n.nodes[o];Pr.setCurrentNode(e,o);var s=void 0;switch(201347067&i.flags){case 1:var a=Oo(e,t,i),u=void 0;if(33554432&i.flags){var l=uo(i.element.componentView);u=Pr.createComponentView(e,i,l,a)}So(e,u,i,a),s={renderElement:a,componentView:u,viewContainer:null,template:i.element.template?Yo(e,i):void 0},16777216&i.flags&&(s.viewContainer=Ko(e,i,s));break;case 2:s=Hi(e,t,i);break;case 512:case 1024:case 2048:case 256:(s=r[o])||4096&i.flags||(s={instance:yi(e,i)});break;case 16:s={instance:gi(e,i)};break;case 16384:(s=r[o])||(s={instance:mi(e,i)}),32768&i.flags&&Yi(Tr(e,i.parent.nodeIndex).componentView,s.instance,s.instance);break;case 32:case 64:case 128:s={value:void 0};break;case 67108864:case 134217728:s=new In;break;case 8:Di(e,t,i),s=void 0}r[o]=s}ss(e,is.CreateViewNodes),cs(e,201326592,268435456,0)}function Ji(e){ts(e),Pr.updateDirectives(e,1),as(e,is.CheckNoChanges),Pr.updateRenderer(e,1),ss(e,is.CheckNoChanges),e.state&=-97}function $i(e){1&e.state?(e.state&=-2,e.state|=2):e.state&=-3,xr(e,0,256),ts(e),Pr.updateDirectives(e,0),as(e,is.CheckAndUpdate),cs(e,67108864,536870912,0);var t=xr(e,256,512);Si(e,2097152|(t?1048576:0)),Pr.updateRenderer(e,0),ss(e,is.CheckAndUpdate),cs(e,134217728,536870912,0),Si(e,8388608|((t=xr(e,512,768))?4194304:0)),2&e.def.flags&&(e.state&=-9),e.state&=-97,xr(e,768,1024)}function es(e,t,n,r,o,i,s,a,u,l,c,d,p){return 0===n?function(e,t,n,r,o,i,s,a,u,l,c,d){switch(201347067&t.flags){case 1:return function(e,t,n,r,o,i,s,a,u,l,c,d){var p=t.bindings.length,f=!1;return p>0&&ko(e,t,0,n)&&(f=!0),p>1&&ko(e,t,1,r)&&(f=!0),p>2&&ko(e,t,2,o)&&(f=!0),p>3&&ko(e,t,3,i)&&(f=!0),p>4&&ko(e,t,4,s)&&(f=!0),p>5&&ko(e,t,5,a)&&(f=!0),p>6&&ko(e,t,6,u)&&(f=!0),p>7&&ko(e,t,7,l)&&(f=!0),p>8&&ko(e,t,8,c)&&(f=!0),p>9&&ko(e,t,9,d)&&(f=!0),f}(e,t,n,r,o,i,s,a,u,l,c,d);case 2:return function(e,t,n,r,o,i,s,a,u,l,c,d){var p=!1,f=t.bindings,h=f.length;if(h>0&&Kr(e,t,0,n)&&(p=!0),h>1&&Kr(e,t,1,r)&&(p=!0),h>2&&Kr(e,t,2,o)&&(p=!0),h>3&&Kr(e,t,3,i)&&(p=!0),h>4&&Kr(e,t,4,s)&&(p=!0),h>5&&Kr(e,t,5,a)&&(p=!0),h>6&&Kr(e,t,6,u)&&(p=!0),h>7&&Kr(e,t,7,l)&&(p=!0),h>8&&Kr(e,t,8,c)&&(p=!0),h>9&&Kr(e,t,9,d)&&(p=!0),p){var v=t.text.prefix;h>0&&(v+=zi(n,f[0])),h>1&&(v+=zi(r,f[1])),h>2&&(v+=zi(o,f[2])),h>3&&(v+=zi(i,f[3])),h>4&&(v+=zi(s,f[4])),h>5&&(v+=zi(a,f[5])),h>6&&(v+=zi(u,f[6])),h>7&&(v+=zi(l,f[7])),h>8&&(v+=zi(c,f[8])),h>9&&(v+=zi(d,f[9]));var y=Sr(e,t.nodeIndex).renderText;e.renderer.setValue(y,v)}return p}(e,t,n,r,o,i,s,a,u,l,c,d);case 16384:return function(e,t,n,r,o,i,s,a,u,l,c,d){var p=kr(e,t.nodeIndex),f=p.instance,h=!1,v=void 0,y=t.bindings.length;return y>0&&Zr(e,t,0,n)&&(h=!0,v=Oi(e,p,t,0,n,v)),y>1&&Zr(e,t,1,r)&&(h=!0,v=Oi(e,p,t,1,r,v)),y>2&&Zr(e,t,2,o)&&(h=!0,v=Oi(e,p,t,2,o,v)),y>3&&Zr(e,t,3,i)&&(h=!0,v=Oi(e,p,t,3,i,v)),y>4&&Zr(e,t,4,s)&&(h=!0,v=Oi(e,p,t,4,s,v)),y>5&&Zr(e,t,5,a)&&(h=!0,v=Oi(e,p,t,5,a,v)),y>6&&Zr(e,t,6,u)&&(h=!0,v=Oi(e,p,t,6,u,v)),y>7&&Zr(e,t,7,l)&&(h=!0,v=Oi(e,p,t,7,l,v)),y>8&&Zr(e,t,8,c)&&(h=!0,v=Oi(e,p,t,8,c,v)),y>9&&Zr(e,t,9,d)&&(h=!0,v=Oi(e,p,t,9,d,v)),v&&f.ngOnChanges(v),65536&t.flags&&Or(e,256,t.nodeIndex)&&f.ngOnInit(),262144&t.flags&&f.ngDoCheck(),h}(e,t,n,r,o,i,s,a,u,l,c,d);case 32:case 64:case 128:return function(e,t,n,r,o,i,s,a,u,l,c,d){var p=t.bindings,f=!1,h=p.length;if(h>0&&Kr(e,t,0,n)&&(f=!0),h>1&&Kr(e,t,1,r)&&(f=!0),h>2&&Kr(e,t,2,o)&&(f=!0),h>3&&Kr(e,t,3,i)&&(f=!0),h>4&&Kr(e,t,4,s)&&(f=!0),h>5&&Kr(e,t,5,a)&&(f=!0),h>6&&Kr(e,t,6,u)&&(f=!0),h>7&&Kr(e,t,7,l)&&(f=!0),h>8&&Kr(e,t,8,c)&&(f=!0),h>9&&Kr(e,t,9,d)&&(f=!0),f){var v=Ir(e,t.nodeIndex),y=void 0;switch(201347067&t.flags){case 32:y=new Array(p.length),h>0&&(y[0]=n),h>1&&(y[1]=r),h>2&&(y[2]=o),h>3&&(y[3]=i),h>4&&(y[4]=s),h>5&&(y[5]=a),h>6&&(y[6]=u),h>7&&(y[7]=l),h>8&&(y[8]=c),h>9&&(y[9]=d);break;case 64:y={},h>0&&(y[p[0].name]=n),h>1&&(y[p[1].name]=r),h>2&&(y[p[2].name]=o),h>3&&(y[p[3].name]=i),h>4&&(y[p[4].name]=s),h>5&&(y[p[5].name]=a),h>6&&(y[p[6].name]=u),h>7&&(y[p[7].name]=l),h>8&&(y[p[8].name]=c),h>9&&(y[p[9].name]=d);break;case 128:var g=n;switch(h){case 1:y=g.transform(n);break;case 2:y=g.transform(r);break;case 3:y=g.transform(r,o);break;case 4:y=g.transform(r,o,i);break;case 5:y=g.transform(r,o,i,s);break;case 6:y=g.transform(r,o,i,s,a);break;case 7:y=g.transform(r,o,i,s,a,u);break;case 8:y=g.transform(r,o,i,s,a,u,l);break;case 9:y=g.transform(r,o,i,s,a,u,l,c);break;case 10:y=g.transform(r,o,i,s,a,u,l,c,d)}}v.value=y}return f}(e,t,n,r,o,i,s,a,u,l,c,d);default:throw"unreachable"}}(e,t,r,o,i,s,a,u,l,c,d,p):function(e,t,n){switch(201347067&t.flags){case 1:return function(e,t,n){for(var r=!1,o=0;o<n.length;o++)ko(e,t,o,n[o])&&(r=!0);return r}(e,t,n);case 2:return function(e,t,n){for(var r=t.bindings,o=!1,i=0;i<n.length;i++)Kr(e,t,i,n[i])&&(o=!0);if(o){var s="";for(i=0;i<n.length;i++)s+=zi(n[i],r[i]);s=t.text.prefix+s;var a=Sr(e,t.nodeIndex).renderText;e.renderer.setValue(a,s)}return o}(e,t,n);case 16384:return function(e,t,n){for(var r=kr(e,t.nodeIndex),o=r.instance,i=!1,s=void 0,a=0;a<n.length;a++)Zr(e,t,a,n[a])&&(i=!0,s=Oi(e,r,t,a,n[a],s));return s&&o.ngOnChanges(s),65536&t.flags&&Or(e,256,t.nodeIndex)&&o.ngOnInit(),262144&t.flags&&o.ngDoCheck(),i}(e,t,n);case 32:case 64:case 128:return function(e,t,n){for(var r=t.bindings,o=!1,i=0;i<n.length;i++)Kr(e,t,i,n[i])&&(o=!0);if(o){var s=Ir(e,t.nodeIndex),a=void 0;switch(201347067&t.flags){case 32:a=n;break;case 64:for(a={},i=0;i<n.length;i++)a[r[i].name]=n[i];break;case 128:var u=n[0],l=n.slice(1);a=u.transform.apply(u,l)}s.value=a}return o}(e,t,n);default:throw"unreachable"}}(e,t,r)}function ts(e){var t=e.def;if(4&t.nodeFlags)for(var n=0;n<t.nodes.length;n++){var r=t.nodes[n];if(4&r.flags){var o=Tr(e,n).template._projectedViews;if(o)for(var i=0;i<o.length;i++){var s=o[i];s.state|=32,Wr(s,e)}}else 0==(4&r.childFlags)&&(n+=r.childCount)}}function ns(e,t,n,r,o,i,s,a,u,l,c,d,p){return 0===n?function(e,t,n,r,o,i,s,a,u,l,c,d){var p=t.bindings.length;p>0&&Xr(e,t,0,n),p>1&&Xr(e,t,1,r),p>2&&Xr(e,t,2,o),p>3&&Xr(e,t,3,i),p>4&&Xr(e,t,4,s),p>5&&Xr(e,t,5,a),p>6&&Xr(e,t,6,u),p>7&&Xr(e,t,7,l),p>8&&Xr(e,t,8,c),p>9&&Xr(e,t,9,d)}(e,t,r,o,i,s,a,u,l,c,d,p):function(e,t,n){for(var r=0;r<n.length;r++)Xr(e,t,r,n[r])}(e,t,r),!1}function rs(e,t){if(Ar(e,t.nodeIndex).dirty)throw Nr(Pr.createDebugContext(e,t.nodeIndex),"Query "+t.query.id+" not dirty","Query "+t.query.id+" dirty",0!=(1&e.state))}function os(e){if(!(128&e.state)){if(as(e,is.Destroy),ss(e,is.Destroy),Si(e,131072),e.disposables)for(var t=0;t<e.disposables.length;t++)e.disposables[t]();!function(e){if(16&e.state){var t=Qr(e);if(t){var n=t.template._projectedViews;n&&(Bo(n,n.indexOf(e)),Pr.dirtyParentQueries(e))}}}(e),e.renderer.destroyNode&&function(e){for(var t=e.def.nodes.length,n=0;n<t;n++){var r=e.def.nodes[n];1&r.flags?e.renderer.destroyNode(Tr(e,n).renderElement):2&r.flags?e.renderer.destroyNode(Sr(e,n).renderText):(67108864&r.flags||134217728&r.flags)&&Ar(e,n).destroy()}}(e),to(e)&&e.renderer.destroy(),e.state|=128}}var is=function(){var e={CreateViewNodes:0,CheckNoChanges:1,CheckNoChangesProjectedViews:2,CheckAndUpdate:3,CheckAndUpdateProjectedViews:4,Destroy:5};return e[e.CreateViewNodes]="CreateViewNodes",e[e.CheckNoChanges]="CheckNoChanges",e[e.CheckNoChangesProjectedViews]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews]="CheckAndUpdateProjectedViews",e[e.Destroy]="Destroy",e}();function ss(e,t){var n=e.def;if(33554432&n.nodeFlags)for(var r=0;r<n.nodes.length;r++){var o=n.nodes[r];33554432&o.flags?us(Tr(e,r).componentView,t):0==(33554432&o.childFlags)&&(r+=o.childCount)}}function as(e,t){var n=e.def;if(16777216&n.nodeFlags)for(var r=0;r<n.nodes.length;r++){var o=n.nodes[r];if(16777216&o.flags)for(var i=Tr(e,r).viewContainer._embeddedViews,s=0;s<i.length;s++)us(i[s],t);else 0==(16777216&o.childFlags)&&(r+=o.childCount)}}function us(e,t){var n=e.state;switch(t){case is.CheckNoChanges:0==(128&n)&&(12==(12&n)?Ji(e):64&n&&ls(e,is.CheckNoChangesProjectedViews));break;case is.CheckNoChangesProjectedViews:0==(128&n)&&(32&n?Ji(e):64&n&&ls(e,t));break;case is.CheckAndUpdate:0==(128&n)&&(12==(12&n)?$i(e):64&n&&ls(e,is.CheckAndUpdateProjectedViews));break;case is.CheckAndUpdateProjectedViews:0==(128&n)&&(32&n?$i(e):64&n&&ls(e,t));break;case is.Destroy:os(e);break;case is.CreateViewNodes:Qi(e)}}function ls(e,t){as(e,t),ss(e,t)}function cs(e,t,n,r){if(e.def.nodeFlags&t&&e.def.nodeFlags&n)for(var o=e.def.nodes.length,i=0;i<o;i++){var s=e.def.nodes[i];if(s.flags&t&&s.flags&n)switch(Pr.setCurrentNode(e,s.nodeIndex),r){case 0:Ri(e,s);break;case 1:rs(e,s)}s.childFlags&t&&s.childFlags&n||(i+=s.childCount)}}var ds=!1;function ps(){if(!ds){ds=!0;var e=sn()?{setCurrentNode:Ms,createRootView:hs,createEmbeddedView:ys,createComponentView:gs,createNgModuleRef:ms,overrideProvider:ws,overrideComponentView:Es,clearOverrides:Cs,checkAndUpdateView:Ts,checkNoChangesView:ks,destroyView:Is,createDebugContext:function(e,t){return new qs(e,t)},handleEvent:Ds,updateDirectives:js,updateRenderer:Fs}:{setCurrentNode:function(){},createRootView:fs,createEmbeddedView:Ki,createComponentView:Gi,createNgModuleRef:ri,overrideProvider:jr,overrideComponentView:jr,clearOverrides:jr,checkAndUpdateView:$i,checkNoChangesView:Ji,destroyView:os,createDebugContext:function(e,t){return new qs(e,t)},handleEvent:function(e,t,n,r){return e.def.handleEvent(e,t,n,r)},updateDirectives:function(e,t){return e.def.updateDirectives(0===t?Os:Ss,e)},updateRenderer:function(e,t){return e.def.updateRenderer(0===t?Os:Ss,e)}};Pr.setCurrentNode=e.setCurrentNode,Pr.createRootView=e.createRootView,Pr.createEmbeddedView=e.createEmbeddedView,Pr.createComponentView=e.createComponentView,Pr.createNgModuleRef=e.createNgModuleRef,Pr.overrideProvider=e.overrideProvider,Pr.overrideComponentView=e.overrideComponentView,Pr.clearOverrides=e.clearOverrides,Pr.checkAndUpdateView=e.checkAndUpdateView,Pr.checkNoChangesView=e.checkNoChangesView,Pr.destroyView=e.destroyView,Pr.resolveDep=Ci,Pr.createDebugContext=e.createDebugContext,Pr.handleEvent=e.handleEvent,Pr.updateDirectives=e.updateDirectives,Pr.updateRenderer=e.updateRenderer,Pr.dirtyParentQueries=Ai}}function fs(e,t,n,r,o,i){return Xi(vs(e,o,o.injector.get(wn),t,n),r,i)}function hs(e,t,n,r,o,i){var s=o.injector.get(wn),a=vs(e,o,new Gs(s),t,n),u=xs(r);return Ks(Ns.create,Xi,null,[a,u,i])}function vs(e,t,n,r,o){var i=t.injector.get(Cr),s=t.injector.get(Te);return{ngModule:t,injector:e,projectableNodes:r,selectorOrNode:o,sanitizer:i,rendererFactory:n,renderer:n.createRenderer(null,null),errorHandler:s}}function ys(e,t,n,r){var o=xs(n);return Ks(Ns.create,Ki,null,[e,t,o,r])}function gs(e,t,n,r){return n=bs.get(t.element.componentProvider.provider.token)||xs(n),Ks(Ns.create,Gi,null,[e,t,n,r])}function ms(e,t,n,r){return ri(e,t,n,function(e){var t=function(e){var t=!1,n=!1;return 0===_s.size?{hasOverrides:t,hasDeprecatedOverrides:n}:(e.providers.forEach(function(e){var r=_s.get(e.token);3840&e.flags&&r&&(t=!0,n=n||r.deprecatedBehavior)}),{hasOverrides:t,hasDeprecatedOverrides:n})}(e),n=t.hasDeprecatedOverrides;return t.hasOverrides?(function(e){for(var t=0;t<e.providers.length;t++){var r=e.providers[t];n&&(r.flags|=4096);var o=_s.get(r.token);o&&(r.flags=-3841&r.flags|o.flags,r.deps=io(o.deps),r.value=o.value)}}(e=e.factory(function(){return jr})),e):e}(r))}var _s=new Map,bs=new Map;function ws(e){_s.set(e.token,e)}function Es(e,t){var n=uo(uo(Uo(t)).nodes[0].element.componentView);bs.set(e,n)}function Cs(){_s.clear(),bs.clear()}function xs(e){if(0===_s.size)return e;var t=function(e){for(var t=[],n=null,r=0;r<e.nodes.length;r++){var o=e.nodes[r];1&o.flags&&(n=o),n&&3840&o.flags&&_s.has(o.provider.token)&&(t.push(n.nodeIndex),n=null)}return t}(e);if(0===t.length)return e;e=e.factory(function(){return jr});for(var n=0;n<t.length;n++)r(e,t[n]);return e;function r(e,t){for(var n=t+1;n<e.nodes.length;n++){var r=e.nodes[n];if(1&r.flags)return;if(3840&r.flags){var o=r.provider,i=_s.get(o.token);i&&(r.flags=-3841&r.flags|i.flags,o.deps=io(i.deps),o.value=i.value)}}}}function Os(e,t,n,r,o,i,s,a,u,l,c,d,p){var f=e.def.nodes[t];return es(e,f,n,r,o,i,s,a,u,l,c,d,p),224&f.flags?Ir(e,t).value:void 0}function Ss(e,t,n,r,o,i,s,a,u,l,c,d,p){var f=e.def.nodes[t];return ns(e,f,n,r,o,i,s,a,u,l,c,d,p),224&f.flags?Ir(e,t).value:void 0}function Ts(e){return Ks(Ns.detectChanges,$i,null,[e])}function ks(e){return Ks(Ns.checkNoChanges,Ji,null,[e])}function Is(e){return Ks(Ns.destroy,os,null,[e])}var As,Rs,Ps,Ns=function(){var e={create:0,detectChanges:1,checkNoChanges:2,destroy:3,handleEvent:4};return e[e.create]="create",e[e.detectChanges]="detectChanges",e[e.checkNoChanges]="checkNoChanges",e[e.destroy]="destroy",e[e.handleEvent]="handleEvent",e}();function Ms(e,t){Rs=e,Ps=t}function Ds(e,t,n,r){return Ms(e,t),Ks(Ns.handleEvent,e.def.handleEvent,null,[e,t,n,r])}function js(e,t){if(128&e.state)throw Dr(Ns[As]);return Ms(e,zs(e,0)),e.def.updateDirectives(function(e,n,r){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var s=e.def.nodes[n];return 0===t?Ls(e,s,r,o):Vs(e,s,r,o),16384&s.flags&&Ms(e,zs(e,n)),224&s.flags?Ir(e,s.nodeIndex).value:void 0},e)}function Fs(e,t){if(128&e.state)throw Dr(Ns[As]);return Ms(e,Us(e,0)),e.def.updateRenderer(function(e,n,r){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var s=e.def.nodes[n];return 0===t?Ls(e,s,r,o):Vs(e,s,r,o),3&s.flags&&Ms(e,Us(e,n)),224&s.flags?Ir(e,s.nodeIndex).value:void 0},e)}function Ls(e,t,n,r){if(es.apply(void 0,[e,t,n].concat(r))){var o=1===n?r[0]:r;if(16384&t.flags){for(var i={},s=0;s<t.bindings.length;s++){var a=t.bindings[s],u=o[s];8&a.flags&&(i[(p=a.nonMinifiedName,"ng-reflect-"+(p=p.replace(/[$@]/g,"_").replace(Bs,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"-"+e[1].toLowerCase()})))]=Hs(u))}var l=t.parent,c=Tr(e,l.nodeIndex).renderElement;if(l.element.name)for(var d in i)null!=(u=i[d])?e.renderer.setAttribute(c,d,u):e.renderer.removeAttribute(c,d);else e.renderer.setValue(c,"bindings="+JSON.stringify(i,null,2))}}var p}function Vs(e,t,n,r){ns.apply(void 0,[e,t,n].concat(r))}var Bs=/([A-Z])/g;function Hs(e){try{return null!=e?e.toString().slice(0,30):e}catch(e){return"[ERROR] Exception while trying to serialize the value"}}function zs(e,t){for(var n=t;n<e.def.nodes.length;n++){var r=e.def.nodes[n];if(16384&r.flags&&r.bindings&&r.bindings.length)return n}return null}function Us(e,t){for(var n=t;n<e.def.nodes.length;n++){var r=e.def.nodes[n];if(3&r.flags&&r.bindings&&r.bindings.length)return n}return null}var qs=function(){function e(e,t){this.view=e,this.nodeIndex=t,null==t&&(this.nodeIndex=t=0),this.nodeDef=e.def.nodes[t];for(var n=this.nodeDef,r=e;n&&0==(1&n.flags);)n=n.parent;if(!n)for(;!n&&r;)n=Jr(r),r=r.parent;this.elDef=n,this.elView=r}return Object.defineProperty(e.prototype,"elOrCompView",{get:function(){return Tr(this.elView,this.elDef.nodeIndex).componentView||this.view},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"injector",{get:function(){return Jo(this.elView,this.elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"component",{get:function(){return this.elOrCompView.component},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this.elOrCompView.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"providerTokens",{get:function(){var e=[];if(this.elDef)for(var t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){var n=this.elView.def.nodes[t];20224&n.flags&&e.push(n.provider.token),t+=n.childCount}return e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"references",{get:function(){var e={};if(this.elDef){Zs(this.elView,this.elDef,e);for(var t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){var n=this.elView.def.nodes[t];20224&n.flags&&Zs(this.elView,n,e),t+=n.childCount}}return e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentRenderElement",{get:function(){var e=function(e){for(;e&&!to(e);)e=e.parent;return e.parent?Tr(e.parent,Jr(e).nodeIndex):null}(this.elOrCompView);return e?e.renderElement:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderNode",{get:function(){return 2&this.nodeDef.flags?$r(this.view,this.nodeDef):$r(this.elView,this.elDef)},enumerable:!0,configurable:!0}),e.prototype.logError=function(e){for(var t,n,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];2&this.nodeDef.flags?(t=this.view.def,n=this.nodeDef.nodeIndex):(t=this.elView.def,n=this.elDef.nodeIndex);var i=function(e,t){for(var n=-1,r=0;r<=t;r++)3&e.nodes[r].flags&&n++;return n}(t,n),s=-1;t.factory(function(){return++s===i?(t=e.error).bind.apply(t,[e].concat(r)):jr;var t}),s<i&&(e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"),e.error.apply(e,r))},e}();function Zs(e,t,n){for(var r in t.references)n[r]=Ni(e,t,t.references[r])}function Ks(e,t,n,r){var o=As,i=Rs,s=Ps;try{As=e;var a=t.apply(n,r);return Rs=i,Ps=s,As=o,a}catch(e){if(xe(e)||!Rs)throw e;throw function(e,t){return e instanceof Error||(e=new Error(e.toString())),Mr(e,t),e}(e,Xs())}}function Xs(){return Rs?new qs(Rs,Ps):null}var Gs=function(){function e(e){this.delegate=e}return e.prototype.createRenderer=function(e,t){return new Ws(this.delegate.createRenderer(e,t))},e.prototype.begin=function(){this.delegate.begin&&this.delegate.begin()},e.prototype.end=function(){this.delegate.end&&this.delegate.end()},e.prototype.whenRenderingDone=function(){return this.delegate.whenRenderingDone?this.delegate.whenRenderingDone():Promise.resolve(null)},e}(),Ws=function(){function e(e){this.delegate=e,this.data=this.delegate.data}return e.prototype.destroyNode=function(e){!function(e){qn.delete(e.nativeNode)}(Zn(e)),this.delegate.destroyNode&&this.delegate.destroyNode(e)},e.prototype.destroy=function(){this.delegate.destroy()},e.prototype.createElement=function(e,t){var n=this.delegate.createElement(e,t),r=Xs();if(r){var o=new Bn(n,null,r);o.name=e,Kn(o)}return n},e.prototype.createComment=function(e){var t=this.delegate.createComment(e),n=Xs();return n&&Kn(new Vn(t,null,n)),t},e.prototype.createText=function(e){var t=this.delegate.createText(e),n=Xs();return n&&Kn(new Vn(t,null,n)),t},e.prototype.appendChild=function(e,t){var n=Zn(e),r=Zn(t);n&&r&&n instanceof Bn&&n.addChild(r),this.delegate.appendChild(e,t)},e.prototype.insertBefore=function(e,t,n){var r=Zn(e),o=Zn(t),i=Zn(n);r&&o&&r instanceof Bn&&r.insertBefore(i,o),this.delegate.insertBefore(e,t,n)},e.prototype.removeChild=function(e,t){var n=Zn(e),r=Zn(t);n&&r&&n instanceof Bn&&n.removeChild(r),this.delegate.removeChild(e,t)},e.prototype.selectRootElement=function(e){var t=this.delegate.selectRootElement(e),n=Xs();return n&&Kn(new Bn(t,null,n)),t},e.prototype.setAttribute=function(e,t,n,r){var o=Zn(e);o&&o instanceof Bn&&(o.attributes[r?r+":"+t:t]=n),this.delegate.setAttribute(e,t,n,r)},e.prototype.removeAttribute=function(e,t,n){var r=Zn(e);r&&r instanceof Bn&&(r.attributes[n?n+":"+t:t]=null),this.delegate.removeAttribute(e,t,n)},e.prototype.addClass=function(e,t){var n=Zn(e);n&&n instanceof Bn&&(n.classes[t]=!0),this.delegate.addClass(e,t)},e.prototype.removeClass=function(e,t){var n=Zn(e);n&&n instanceof Bn&&(n.classes[t]=!1),this.delegate.removeClass(e,t)},e.prototype.setStyle=function(e,t,n,r){var o=Zn(e);o&&o instanceof Bn&&(o.styles[t]=n),this.delegate.setStyle(e,t,n,r)},e.prototype.removeStyle=function(e,t,n){var r=Zn(e);r&&r instanceof Bn&&(r.styles[t]=null),this.delegate.removeStyle(e,t,n)},e.prototype.setProperty=function(e,t,n){var r=Zn(e);r&&r instanceof Bn&&(r.properties[t]=n),this.delegate.setProperty(e,t,n)},e.prototype.listen=function(e,t,n){if("string"!=typeof e){var r=Zn(e);r&&r.listeners.push(new function(e,t){this.name=e,this.callback=t}(t,n))}return this.delegate.listen(e,t,n)},e.prototype.parentNode=function(e){return this.delegate.parentNode(e)},e.prototype.nextSibling=function(e){return this.delegate.nextSibling(e)},e.prototype.setValue=function(e,t){return this.delegate.setValue(e,t)},e}();function Ys(e){return ps(),Pr.overrideProvider(e)}function Qs(e,t){return ps(),Pr.overrideComponentView(e,t)}function Js(){return ps(),Pr.clearOverrides()}function $s(e,t,n){return new ea(e,t,n)}var ea=function(e){function t(t,n,r){var o=e.call(this)||this;return o.moduleType=t,o._bootstrapComponents=n,o._ngModuleDefFactory=r,o}return Object(r.__extends)(t,e),t.prototype.create=function(e){ps();var t=uo(this._ngModuleDefFactory);return Pr.createNgModuleRef(this.moduleType,e||ae.NULL,this._bootstrapComponents,t)},t}(At);function ta(e){return"string"==typeof e?'"'+e+'"':""+e}function na(e,t,n,r){e!=t&&ia(e,t,n,"==",r)}function ra(e,t){oa(e,null,t)}function oa(e,t,n){e==t&&ia(e,t,n,"!=")}function ia(e,t,n,r,o){throw void 0===o&&(o=ta),new Error("ASSERT: expected "+n+" "+r+" "+o(t)+" but was "+o(e)+"!")}function sa(e,t){oa(e,null,"node"),na(3&e.flags,t,"Node.type",aa)}function aa(e){return 1==e?"Projection":0==e?"Container":2==e?"View":3==e?"Element":"??? "+e+" ???"}function ua(e,t,n,r){ngDevMode&&sa(e,0),ngDevMode&&sa(t,2);var o=function(e){for(var t=e;t;){ngDevMode&&sa(t,0);var n=t.data.renderParent;if(null!==n)return n.native;var r=t.parent;if(ngDevMode&&ra(r,"container.parent"),3==(3&r.flags))return null;ngDevMode&&sa(r,2),t=r.parent}return null}(e),i=t.child;if(o)for(;i;){var s=3&i.flags,a=null,u=e.view.renderer,l=u.listen;if(3===s)n?l?u.insertBefore(o,i.native,r):o.insertBefore(i.native,r,!0):l?u.removeChild(o,i.native):o.removeChild(i.native),a=i.next;else if(0===s){var c=i.data;n?l?u.appendChild(o,i.native):o.appendChild(i.native):l?u.removeChild(o,i.native):o.removeChild(i.native),a=c.views.length?c.views[0].child:null}else a=1===s?i.data[0]:i.child;if(null===a){for(;i&&!i.next;)(i=i.parent)===t&&(i=null);i=i&&i.next}else i=a}}function la(e,t){var n=e.data.views,r=n[t];return t>0&&ca(n[t-1],r.next),n.splice(t,1),function(e){for(var t=e;t;){var n=null;if(t.views&&t.views.length?n=t.views[0].data:t.child?n=t.child:t.next&&(pa(t),n=t.next),null==n){for(;t&&!t.next;)pa(t),t=da(t,e);pa(t||e),n=t&&t.next}t=n}}(r.data),ua(e,r,!1),e.query&&e.query.removeView(e,r,t),r}function ca(e,t){e.next=t,e.data.next=t?t.data:null}function da(e,t){var n;return(n=e.node)&&2==(3&n.flags)?n.parent.data:e.parent===t?null:e.parent}function pa(e){if(e.cleanup){for(var t=e.cleanup,n=0;n<t.length-1;n+=2)"string"==typeof t[n]?(t[n+1].removeEventListener(t[n],t[n+2],t[n+3]),n+=2):t[n].call(t[n+1]);e.cleanup=null}}function fa(e,t,n){if(null!==t&&3==(3&e.flags)&&(e.view!==n||null===e.data)){var r=n.renderer;return r.listen?r.appendChild(e.native,t):e.native.appendChild(t),!0}return!1}function ha(e){return"function"==typeof e?e.name||e:"string"==typeof e?e:null==e?"":""+e}"undefined"==typeof ngDevMode&&("undefined"!=typeof window&&(window.ngDevMode=!0),"undefined"!=typeof self&&(self.ngDevMode=!0),void 0!==e&&(e.ngDevMode=!0));var va,ya,ga,ma,_a,ba,wa,Ea,Ca,xa,Oa,Sa=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}(),Ta={createRenderer:function(e,t){return document}},ka="__ngHostLNode__";function Ia(e,t){var n=ba;return Ca=e.data,xa=e.bindingStartIndex||0,_a=e.ngStaticData,Ea=e.creationMode,Oa=e.viewHookStartIndex,va=e.renderer,null!=t&&(ga=t,ma=!0),ba=e,n}function Aa(e){!function(){if(null!=Oa){for(var e=Oa,t=e;e<Ca.length;)Ca[e+1].call(Ca[e+2]),16===Ca[e]&&(t<e&&(Ca[t]=Ca[e],Ca[t+1]=Ca[e+1],Ca[t+2]=Ca[e+2]),t+=3),e+=3;Ca.length=t}}(),Ia(e,null)}function Ra(e,t,n){return{parent:ba,id:e,node:null,data:[],ngStaticData:n,cleanup:null,renderer:t,child:null,tail:null,next:null,bindingStartIndex:null,creationMode:!0,viewHookStartIndex:null}}function Pa(e,t,n,r){var o=ma?ga:ga&&ga.parent,i=(ma?wa:ga&&ga.query)||o&&o.query&&o.query.child(),s=null!=r,a={flags:t,native:n,view:ba,parent:o,child:null,next:null,nodeInjector:o?o.nodeInjector:null,data:s?r:null,query:i,staticData:null};return 2==(2&t)&&s&&(ngDevMode&&na(r.node,null,"viewState.node"),r.node=a),null!=e&&(ngDevMode&&na(Ca.length,e,"data.length not in sequence"),Ca[e]=a,e>=_a.length?_a[e]=null:a.staticData=_a[e],ma?(wa=null,ga.view!==ba&&2!=(3&ga.flags)||(ngDevMode&&na(ga.child,null,"previousNode.child"),ga.child=a)):ga&&(ngDevMode&&na(ga.next,null,"previousNode.next"),ga.next=a)),ga=a,ma=!0,a}function Na(e,t,n,r){var o,i;if(null==t){var s=Ca[e];i=s&&s.native}else{ngDevMode&&na(ba.bindingStartIndex,null,"bindingStartIndex");var a="string"!=typeof t,u=a?t.tag:t;if(null===u)throw"for now name is required";i=va.createElement(u);var l=null;if(a){var c=Ma(t.template);l=Qa(Ra(-1,ya.createRenderer(i,t.rendererType),c))}null==(o=Pa(e,3,i,l)).staticData&&(ngDevMode&&nu(e-1),o.staticData=_a[e]=Va(u,n||null,null,r||null)),n&&function(e,t){ngDevMode&&na(t.length%2,0,"attrs.length % 2");for(var n=va.setAttribute,r=0;r<t.length;r+=2)n?va.setAttribute(e,t[r],t[1|r]):e.setAttribute(t[r],t[1|r])}(i,n),fa(o.parent,i,ba)}return i}function Ma(e){return e.ngStaticData||(e.ngStaticData=[])}function Da(e,t){return new Error("Renderer: "+e+" ["+ha(t)+"]")}function ja(e,t){ngDevMode&&nu(-1),ya=e;var n=e.createRenderer(null,null),r="string"==typeof t?n.selectRootElement?n.selectRootElement(t):n.querySelector(t):t;if(ngDevMode&&!r)throw Da("string"==typeof t?"Host node with selector not found:":"Host node is required:",t);return r}function Fa(){ma?ma=!1:(ngDevMode&&tu(),ga=ga.parent),ngDevMode&&sa(ga,3);var e=ga.query;e&&e.addNode(ga)}function La(e,t,n){if(n!==Ja){var r=Ca[e],o=r.staticData;void 0===o.inputs&&(o.inputs=null,o=function(e,t,n){void 0===n&&(n=!1);for(var r=e>>12,o=r,i=r+((4092&e)>>2);o<i;o++){var s=_a[o],a=n?s.inputs:s.outputs;for(var u in a)if(a.hasOwnProperty(u)){var l=a[u],c=n?t.inputs||(t.inputs={}):t.outputs||(t.outputs={});c.hasOwnProperty(u)?c[u].push(o,l):c[u]=[o,l]}}return t}(r.flags,o,!0));var i,s=o.inputs;if(s&&(i=s[t]))!function(e,t){for(var n=0;n<e.length;n+=2)ngDevMode&&nu(e[n]),Ca[e[n]][e[1|n]]=t}(i,n);else{var a=r.native;va.setProperty?va.setProperty(a,t,n):a.setProperty?a.setProperty(t,n):a[t]=n}}}function Va(e,t,n,r){return{tagName:e,attrs:t,localNames:r?[r,-1]:null,initialInputs:void 0,inputs:void 0,outputs:void 0,containerStatic:n}}function Ba(e,t,n,r){if(n!==Ja){var o=Ca[e];null==n?va.removeStyle?va.removeStyle(o.native,t,Sa.DashCase):o.native.style.removeProperty(t):va.setStyle?va.setStyle(o.native,t,r?ha(n)+r:ha(n),Sa.DashCase):o.native.style.setProperty(t,r?ha(n)+r:ha(n))}}function Ha(e,t){ngDevMode&&na(ba.bindingStartIndex,null,"bindingStartIndex");var n=null!=t?va.createText?va.createText(ha(t)):va.createTextNode(ha(t)):null,r=Pa(e,3,n);ma=!1,fa(r.parent,n,ba)}function za(e,t){var n=e<Ca.length&&Ca[e];n&&n.native?t!==Ja&&(va.setValue?va.setValue(n.native,ha(t)):n.native.textContent=ha(t)):n?(n.native=va.createText?va.createText(ha(t)):va.createTextNode(ha(t)),function(e,t){var n=e.parent;if(3==(3&n.flags)&&(n.view!==t||null===n.data)){for(var r=e.next,o=null;r&&null===(o=r.native);)r=r.next;var i=t.renderer;i.listen?i.insertBefore(n.native,e.native,o):n.native.insertBefore(e.native,o,!1)}}(n,ba)):Ha(e,t)}function Ua(e,t,n,r){var o;if(null==t)ngDevMode&&nu(e),o=Ca[e];else{ngDevMode&&na(ba.bindingStartIndex,null,"bindingStartIndex"),ngDevMode&&na(ma,!0,"isParent");var i=ga.flags;if(0==(4092&i)?i=e<<12|4|3&i:i+=4,ga.flags=i,ngDevMode&&nu(e-1),Object.defineProperty(t,ka,{enumerable:!1,value:ga}),Ca[e]=o=t,e>=_a.length&&(_a[e]=n,r)){ngDevMode&&ra(ga.staticData,"previousOrParentNode.staticData");var s=ga.staticData;(s.localNames||(s.localNames=[])).push(r,e)}var a=n.diPublic;a&&a(n);var u=ga.staticData;u&&u.attrs&&function(e,t,r){var o=((4092&ga.flags)>>2)-1,i=r.initialInputs;(void 0===i||o>=i.length)&&(i=function(e,t,n){var r=n.initialInputs||(n.initialInputs=[]);r[e]=null;for(var o=n.attrs,i=0;i<o.length;i+=2){var s=t[o[i]];void 0!==s&&(r[e]||(r[e]=[])).push(s,o[1|i])}return r}(o,n.inputs,r));var s=i[o];if(s)for(var a=0;a<s.length;a+=2)e[s[a]]=s[1|a]}(o,0,u)}return o}function qa(e,t,n,r,o){ngDevMode&&na(ba.bindingStartIndex,null,"bindingStartIndex");var i=va.createComment(ngDevMode?"container":""),s=null,a=ma?ga:ga.parent;ngDevMode&&oa(a,null,"currentParent"),fa(a,i,ba)&&(s=a);var u=Pa(e,0,i,{views:[],nextIndex:0,renderParent:s,template:null==t?null:t,next:null,parent:ba});null==u.staticData&&(u.staticData=_a[e]=Va(n||null,r||null,[],o||null)),Qa(u.data)}function Za(){ma?ma=!1:(ngDevMode&&tu(),ga=ga.parent),ngDevMode&&sa(ga,0);var e=ga.query;e&&e.addNode(ga)}function Ka(e){ngDevMode&&nu(e),ga=Ca[e],ngDevMode&&sa(ga,0),ma=!0,ga.data.nextIndex=0}function Xa(){ma?ma=!1:(ngDevMode&&sa(ga,2),ngDevMode&&tu(),ga=ga.parent),ngDevMode&&sa(ga,0);var e=ga;ngDevMode&&sa(e,0);for(var t=e.data.nextIndex;t<e.data.views.length;)la(e,t)}function Ga(e){var t=ma?ga:ga.parent;ngDevMode&&sa(t,0);var n=t.data,r=n.views,o=!Ea&&n.nextIndex<r.length&&r[n.nextIndex],i=o&&e===o.data.id;if(i)ga=r[n.nextIndex++],ngDevMode&&sa(ga,2),ma=!0,Ia(o.data,ga);else{var s=Ra(e,va,function(e,t){ngDevMode&&sa(t,0);var n=t.staticData.containerStatic;return(e>=n.length||null==n[e])&&(n[e]=[]),n[e]}(e,t));Ia(s,Pa(null,2,null,s)),n.nextIndex++}return!i}function Wa(){ma=!1;var e=ga=ba.node,t=ga.parent;ngDevMode&&sa(e,2),ngDevMode&&sa(t,0);var n=t.data,r=n.nextIndex<=n.views.length?n.views[n.nextIndex-1]:null;(null==r||r.data.id!==e.data.id)&&(function(e,t,n){var r=e.data,o=r.views;n>0&&ca(o[n-1],t),n<o.length&&o[n].data.id!==t.data.id?(ca(t,o[n]),o.splice(n,0,t)):n>=o.length&&o.push(t),r.nextIndex<=n&&r.nextIndex++,null!==e.data.renderParent&&ua(e,t,!0,function(t,n,r){var o=n.views;return t+1<o.length?o[t+1].child.native:e.native}(n,r)),e.query&&e.query.insertView(e,t,n)}(t,e,n.nextIndex-1),ba.creationMode=!1),Aa(ba.parent),ngDevMode&&na(ma,!1,"isParent"),ngDevMode&&sa(ga,2)}ba=Ra(null,null,[]);var Ya=function(e,t,n){ngDevMode&&nu(t);var r=Ca[t];ngDevMode&&sa(r,3),ngDevMode&&oa(r.data,null,"isComponent"),ngDevMode&&nu(e);var o=r.data;ngDevMode&&oa(o,null,"hostView");var i=Ca[e],s=Ia(o,r);try{n(i,Ea)}finally{o.creationMode=!1,Aa(s)}};function Qa(e){return ba.tail?ba.tail.next=e:ba.child=e,ba.tail=e,e}var Ja={};function $a(e){var t,n,r;return(t=Ea)?("number"!=typeof ba.bindingStartIndex&&(xa=ba.bindingStartIndex=Ca.length),Ca[xa++]=e):((t=e!==Ja&&(r=e,!((n=Ca[xa])!=n&&r!=r)&&n!==r))&&(Ca[xa]=e),xa++),t?e:Ja}function eu(e,t,n){return $a(t)===Ja?Ja:e+ha(t)+n}function tu(){oa(ga.parent,null,"isParent")}function nu(e,t){var n,r;null==t&&(t=Ca),(n=t?t.length:0)<(r=e)&&ia(n,r,"data.length",">")}function ru(e,t){void 0===t&&(t={});var n,r=t.rendererFactory||Ta,o=e.ngComponentDef,i=ja(r,t.host||o.tag),s=Ia(Ra(-1,r.createRenderer(i,o.rendererType),[]),null);try{ma=!1,ga=null,Pa(0,3,i,Ra(-1,va,Ma(o.template))),n=Ua(1,o.n(),o)}finally{Aa(s)}return t.features&&t.features.forEach(function(e){return e(n,o)}),ou(n),n}function ou(e){ngDevMode&&ra(e,"component");var t=e[ka];ngDevMode&&!t&&Da("Not a directive instance",e),ngDevMode&&ra(t.data,"hostNode.data"),function(e,n,r,o){var i=Ia(n,t);try{ya.begin&&ya.begin(),r.constructor.ngComponentDef.r(1,0)}finally{ya.end&&ya.end(),n.creationMode=!1,Aa(i)}}(0,t.view,e)}function iu(e){var t={type:e.type,diPublic:null,n:e.factory,tag:e.tag||null,template:e.template||null,r:e.refresh||function(t,n){Ya(t,n,e.template)},h:e.hostBindings||au,inputs:uu(e.inputs),outputs:uu(e.outputs),methods:uu(e.methods),rendererType:qr(e.rendererType)||null},n=e.features;return n&&n.forEach(function(e){return e(t)}),t}var su={};function au(){}function uu(e){if(null==e)return su;var t={};for(var n in e)t[e[n]]=n;return t}function lu(e,t){return{type:7,name:e,definitions:t,options:{}}}function cu(e,t){return void 0===t&&(t=null),{type:4,styles:t,timings:e}}function du(e,t){return void 0===t&&(t=null),{type:3,steps:e,options:t}}function pu(e,t){return void 0===t&&(t=null),{type:2,steps:e,options:t}}function fu(e){return{type:6,styles:e,offset:null}}function hu(e,t,n){return{type:0,name:e,styles:t,options:n}}function vu(e){return{type:5,steps:e}}function yu(e,t,n){return void 0===n&&(n=null),{type:1,expr:e,animation:t,options:n}}var gu="*";function mu(e,t){return lu(e,t)}function _u(e,t){return cu(e,t)}function bu(e){return du(e)}function wu(e){return pu(e)}function Eu(e){return fu(e)}function Cu(e,t){return hu(e,t)}function xu(e){return vu(e)}function Ou(e,t){return yu(e,t)}}.call(t,n("GTd5"))},NGRF:function(e,t,n){"use strict";t.a=function(e){return null!=e&&"object"==typeof e}},NePw:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={e:{}}},NijM:function(e,t,n){"use strict";var r=n("6Xbx").__decorate,o=n("LMZF"),i=n("Kg3V"),s=n("sY2v"),a=function(){};a=r([o.NgModule({exports:[i.DragulaDirective],declarations:[i.DragulaDirective],providers:[s.DragulaService]})],a),t.DragulaModule=a},Oryw:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("6Xbx"),o=n("AP4T"),i=n("8Ut3"),s=n("Ecq+"),a=n("3iOE"),u=function(e){function t(t,n){e.call(this),this.array=t,this.scheduler=n,n||1!==t.length||(this._isScalar=!0,this.value=t[0])}return Object(r.__extends)(t,e),t.create=function(e,n){return new t(e,n)},t.of=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];var r=e[e.length-1];Object(a.a)(r)?e.pop():r=null;var o=e.length;return o>1?new t(e,r):1===o?new i.a(e[0],r):new s.a(r)},t.dispatch=function(e){var t=e.array,n=e.index,r=e.subscriber;n>=e.count?r.complete():(r.next(t[n]),r.closed||(e.index=n+1,this.schedule(e)))},t.prototype._subscribe=function(e){var n=this.array,r=n.length,o=this.scheduler;if(o)return o.schedule(t.dispatch,0,{array:n,index:0,count:r,subscriber:e});for(var i=0;i<r&&!e.closed;i++)e.next(n[i]);e.complete()},t}(o.a)},TO51:function(e,t,n){"use strict";var r=n("6Xbx"),o=n("AP4T"),i=n("E9/g"),s=n("qLnt"),a=n("Upor"),u=function(e){function t(t,n){e.call(this),this.subject=t,this.subscriber=n,this.closed=!1}return Object(r.__extends)(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(s.a),l=n("V7AE");n.d(t,"b",function(){return c}),n.d(t,"a",function(){return d});var c=function(e){function t(t){e.call(this,t),this.destination=t}return Object(r.__extends)(t,e),t}(i.a),d=function(e){function t(){e.call(this),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return Object(r.__extends)(t,e),t.prototype[l.a]=function(){return new c(this)},t.prototype.lift=function(e){var t=new p(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new a.a;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new a.a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new a.a;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new a.a;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new a.a;return this.hasError?(e.error(this.thrownError),s.a.EMPTY):this.isStopped?(e.complete(),s.a.EMPTY):(this.observers.push(e),new u(this,e))},t.prototype.asObservable=function(){var e=new o.a;return e.source=this,e},t.create=function(e,t){return new p(e,t)},t}(o.a),p=function(e){function t(t,n){e.call(this),this.destination=t,this.source=n}return Object(r.__extends)(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):s.a.EMPTY},t}(d)},URbD:function(e,t,n){"use strict";t.a=function(){return Object(r.a)()(this)};var r=n("eIqN")},Upor:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("6Xbx"),o=function(e){function t(){var t=e.call(this,"object unsubscribed");this.name=t.name="ObjectUnsubscribedError",this.stack=t.stack,this.message=t.message}return Object(r.__extends)(t,e),t}(Error)},V7AE:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("xIGM").a.Symbol,o="function"==typeof r&&"function"==typeof r.for?r.for("rxSubscriber"):"@@rxSubscriber"},VlH2:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},WMjF:function(e,t,n){"use strict";(function(t){var r=n("7MSi"),o=n("D0JW"),i=t.document,s=function(e,t,n,r){return e.addEventListener(t,n,r)},a=function(e,t,n,r){return e.removeEventListener(t,n,r)},u=[];function l(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<u.length;r++)if((o=u[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=u[r].wrapper;return u.splice(r,1),o}}t.addEventListener||(s=function(e,n,r){return e.attachEvent("on"+n,function(e,n,r){var o=l(e,n,r)||function(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}(e,0,r);return u.push({wrapper:o,element:e,type:n,fn:r}),o}(e,n,r))},a=function(e,t,n){var r=l(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:s,remove:a,fabricate:function(e,t,n){var s=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(s):e.fireEvent("on"+t,s)}}}).call(t,n("GTd5"))},X3fp:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){var t=e.Symbol;if("function"==typeof t)return t.iterator||(t.iterator=t("iterator polyfill")),t.iterator;var n=e.Set;if(n&&"function"==typeof(new n)["@@iterator"])return"@@iterator";var r=e.Map;if(r)for(var o=Object.getOwnPropertyNames(r.prototype),i=0;i<o.length;++i){var s=o[i];if("entries"!==s&&"size"!==s&&r.prototype[s]===r.prototype.entries)return s}return"@@iterator"}(n("xIGM").a)},YuZA:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YuZA"},bywS:function(e,t,n){"use strict";var r=n("wP3s");function o(e){return e}t.a=function(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),Object(r.a)(o,null,e)}},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("LMZF"),o=n("6Xbx"),i=function(){},s=["en",[["a","p"],["AM","PM"]],[["AM","PM"],,],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",,"{1} 'at' {0}"],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"$","US Dollar",function(e){var t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}],a={},u=function(){var e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}(),l=new r.InjectionToken("UseV4Plurals"),c=function(){},d=function(e){function t(t,n){var r=e.call(this)||this;return r.locale=t,r.deprecatedPluralFn=n,r}return Object(o.__extends)(t,e),t.prototype.getPluralCategory=function(e,t){switch(this.deprecatedPluralFn?this.deprecatedPluralFn(t||this.locale,e):function(e){return function(e){var t=e.toLowerCase().replace(/_/g,"-"),n=a[t];if(n)return n;var r=t.split("-")[0];if(n=a[r])return n;if("en"===r)return s;throw new Error('Missing locale data for the locale "'+e+'".')}(e)[17]}(t||this.locale)(e)){case u.Zero:return"zero";case u.One:return"one";case u.Two:return"two";case u.Few:return"few";case u.Many:return"many";default:return"other"}},t}(c);function p(e,t){t=encodeURIComponent(t);for(var n=0,r=e.split(";");n<r.length;n++){var o=r[n],i=o.indexOf("="),s=-1==i?[o,""]:[o.slice(0,i),o.slice(i+1)],a=s[1];if(s[0].trim()===t)return decodeURIComponent(a)}return null}var f=function(){function e(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}return Object.defineProperty(e.prototype,"first",{get:function(){return 0===this.index},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){return this.index===this.count-1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"even",{get:function(){return this.index%2==0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"odd",{get:function(){return!this.even},enumerable:!0,configurable:!0}),e}(),h=function(){function e(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._differ=null}return Object.defineProperty(e.prototype,"ngForTrackBy",{get:function(){return this._trackByFn},set:function(e){Object(r.isDevMode)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn("trackBy must be a function, but received "+JSON.stringify(e)+". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."),this._trackByFn=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngForTemplate",{set:function(e){e&&(this._template=e)},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(e){if("ngForOf"in e){var t=e.ngForOf.currentValue;if(!this._differ&&t)try{this._differ=this._differs.find(t).create(this.ngForTrackBy)}catch(e){throw new Error("Cannot find a differ supporting object '"+t+"' of type '"+((n=t).name||typeof n)+"'. NgFor only supports binding to Iterables such as Arrays.")}}var n},e.prototype.ngDoCheck=function(){if(this._differ){var e=this._differ.diff(this.ngForOf);e&&this._applyChanges(e)}},e.prototype._applyChanges=function(e){var t=this,n=[];e.forEachOperation(function(e,r,o){if(null==e.previousIndex){var i=t._viewContainer.createEmbeddedView(t._template,new f(null,t.ngForOf,-1,-1),o),s=new v(e,i);n.push(s)}else null==o?t._viewContainer.remove(r):(i=t._viewContainer.get(r),t._viewContainer.move(i,o),s=new v(e,i),n.push(s))});for(var r=0;r<n.length;r++)this._perViewChange(n[r].view,n[r].record);r=0;for(var o=this._viewContainer.length;r<o;r++){var i=this._viewContainer.get(r);i.context.index=r,i.context.count=o}e.forEachIdentityChange(function(e){t._viewContainer.get(e.currentIndex).context.$implicit=e.item})},e.prototype._perViewChange=function(e,t){e.context.$implicit=t.item},e}(),v=function(e,t){this.record=e,this.view=t},y=function(){function e(e,t){this._viewContainer=e,this._context=new g,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}return Object.defineProperty(e.prototype,"ngIf",{set:function(e){this._context.$implicit=this._context.ngIf=e,this._updateView()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngIfThen",{set:function(e){this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngIfElse",{set:function(e){this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()},enumerable:!0,configurable:!0}),e.prototype._updateView=function(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))},e}(),g=function(){this.$implicit=null,this.ngIf=null},m=function(){},_=new r.InjectionToken("DocumentToken"),b=null;function w(){return b}var E,C={class:"className",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"},x={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},O={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"};r["\u0275global"].Node&&(E=r["\u0275global"].Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))});var S,T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.parse=function(e){throw new Error("parse not implemented")},t.makeCurrent=function(){var e;e=new t,b||(b=e)},t.prototype.hasProperty=function(e,t){return t in e},t.prototype.setProperty=function(e,t,n){e[t]=n},t.prototype.getProperty=function(e,t){return e[t]},t.prototype.invoke=function(e,t,n){var r;(r=e)[t].apply(r,n)},t.prototype.logError=function(e){window.console&&(console.error?console.error(e):console.log(e))},t.prototype.log=function(e){window.console&&window.console.log&&window.console.log(e)},t.prototype.logGroup=function(e){window.console&&window.console.group&&window.console.group(e)},t.prototype.logGroupEnd=function(){window.console&&window.console.groupEnd&&window.console.groupEnd()},Object.defineProperty(t.prototype,"attrToPropMap",{get:function(){return C},enumerable:!0,configurable:!0}),t.prototype.contains=function(e,t){return E.call(e,t)},t.prototype.querySelector=function(e,t){return e.querySelector(t)},t.prototype.querySelectorAll=function(e,t){return e.querySelectorAll(t)},t.prototype.on=function(e,t,n){e.addEventListener(t,n,!1)},t.prototype.onAndCancel=function(e,t,n){return e.addEventListener(t,n,!1),function(){e.removeEventListener(t,n,!1)}},t.prototype.dispatchEvent=function(e,t){e.dispatchEvent(t)},t.prototype.createMouseEvent=function(e){var t=this.getDefaultDocument().createEvent("MouseEvent");return t.initEvent(e,!0,!0),t},t.prototype.createEvent=function(e){var t=this.getDefaultDocument().createEvent("Event");return t.initEvent(e,!0,!0),t},t.prototype.preventDefault=function(e){e.preventDefault(),e.returnValue=!1},t.prototype.isPrevented=function(e){return e.defaultPrevented||null!=e.returnValue&&!e.returnValue},t.prototype.getInnerHTML=function(e){return e.innerHTML},t.prototype.getTemplateContent=function(e){return"content"in e&&this.isTemplateElement(e)?e.content:null},t.prototype.getOuterHTML=function(e){return e.outerHTML},t.prototype.nodeName=function(e){return e.nodeName},t.prototype.nodeValue=function(e){return e.nodeValue},t.prototype.type=function(e){return e.type},t.prototype.content=function(e){return this.hasProperty(e,"content")?e.content:e},t.prototype.firstChild=function(e){return e.firstChild},t.prototype.nextSibling=function(e){return e.nextSibling},t.prototype.parentElement=function(e){return e.parentNode},t.prototype.childNodes=function(e){return e.childNodes},t.prototype.childNodesAsList=function(e){for(var t=e.childNodes,n=new Array(t.length),r=0;r<t.length;r++)n[r]=t[r];return n},t.prototype.clearNodes=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},t.prototype.appendChild=function(e,t){e.appendChild(t)},t.prototype.removeChild=function(e,t){e.removeChild(t)},t.prototype.replaceChild=function(e,t,n){e.replaceChild(t,n)},t.prototype.remove=function(e){return e.parentNode&&e.parentNode.removeChild(e),e},t.prototype.insertBefore=function(e,t,n){e.insertBefore(n,t)},t.prototype.insertAllBefore=function(e,t,n){n.forEach(function(n){return e.insertBefore(n,t)})},t.prototype.insertAfter=function(e,t,n){e.insertBefore(n,t.nextSibling)},t.prototype.setInnerHTML=function(e,t){e.innerHTML=t},t.prototype.getText=function(e){return e.textContent},t.prototype.setText=function(e,t){e.textContent=t},t.prototype.getValue=function(e){return e.value},t.prototype.setValue=function(e,t){e.value=t},t.prototype.getChecked=function(e){return e.checked},t.prototype.setChecked=function(e,t){e.checked=t},t.prototype.createComment=function(e){return this.getDefaultDocument().createComment(e)},t.prototype.createTemplate=function(e){var t=this.getDefaultDocument().createElement("template");return t.innerHTML=e,t},t.prototype.createElement=function(e,t){return(t=t||this.getDefaultDocument()).createElement(e)},t.prototype.createElementNS=function(e,t,n){return(n=n||this.getDefaultDocument()).createElementNS(e,t)},t.prototype.createTextNode=function(e,t){return(t=t||this.getDefaultDocument()).createTextNode(e)},t.prototype.createScriptTag=function(e,t,n){var r=(n=n||this.getDefaultDocument()).createElement("SCRIPT");return r.setAttribute(e,t),r},t.prototype.createStyleElement=function(e,t){var n=(t=t||this.getDefaultDocument()).createElement("style");return this.appendChild(n,this.createTextNode(e,t)),n},t.prototype.createShadowRoot=function(e){return e.createShadowRoot()},t.prototype.getShadowRoot=function(e){return e.shadowRoot},t.prototype.getHost=function(e){return e.host},t.prototype.clone=function(e){return e.cloneNode(!0)},t.prototype.getElementsByClassName=function(e,t){return e.getElementsByClassName(t)},t.prototype.getElementsByTagName=function(e,t){return e.getElementsByTagName(t)},t.prototype.classList=function(e){return Array.prototype.slice.call(e.classList,0)},t.prototype.addClass=function(e,t){e.classList.add(t)},t.prototype.removeClass=function(e,t){e.classList.remove(t)},t.prototype.hasClass=function(e,t){return e.classList.contains(t)},t.prototype.setStyle=function(e,t,n){e.style[t]=n},t.prototype.removeStyle=function(e,t){e.style[t]=""},t.prototype.getStyle=function(e,t){return e.style[t]},t.prototype.hasStyle=function(e,t,n){var r=this.getStyle(e,t)||"";return n?r==n:r.length>0},t.prototype.tagName=function(e){return e.tagName},t.prototype.attributeMap=function(e){for(var t=new Map,n=e.attributes,r=0;r<n.length;r++){var o=n.item(r);t.set(o.name,o.value)}return t},t.prototype.hasAttribute=function(e,t){return e.hasAttribute(t)},t.prototype.hasAttributeNS=function(e,t,n){return e.hasAttributeNS(t,n)},t.prototype.getAttribute=function(e,t){return e.getAttribute(t)},t.prototype.getAttributeNS=function(e,t,n){return e.getAttributeNS(t,n)},t.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},t.prototype.setAttributeNS=function(e,t,n,r){e.setAttributeNS(t,n,r)},t.prototype.removeAttribute=function(e,t){e.removeAttribute(t)},t.prototype.removeAttributeNS=function(e,t,n){e.removeAttributeNS(t,n)},t.prototype.templateAwareRoot=function(e){return this.isTemplateElement(e)?this.content(e):e},t.prototype.createHtmlDocument=function(){return document.implementation.createHTMLDocument("fakeTitle")},t.prototype.getDefaultDocument=function(){return document},t.prototype.getBoundingClientRect=function(e){try{return e.getBoundingClientRect()}catch(e){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}},t.prototype.getTitle=function(e){return e.title},t.prototype.setTitle=function(e,t){e.title=t||""},t.prototype.elementMatches=function(e,t){return!!this.isElementNode(e)&&(e.matches&&e.matches(t)||e.msMatchesSelector&&e.msMatchesSelector(t)||e.webkitMatchesSelector&&e.webkitMatchesSelector(t))},t.prototype.isTemplateElement=function(e){return this.isElementNode(e)&&"TEMPLATE"===e.nodeName},t.prototype.isTextNode=function(e){return e.nodeType===Node.TEXT_NODE},t.prototype.isCommentNode=function(e){return e.nodeType===Node.COMMENT_NODE},t.prototype.isElementNode=function(e){return e.nodeType===Node.ELEMENT_NODE},t.prototype.hasShadowRoot=function(e){return null!=e.shadowRoot&&e instanceof HTMLElement},t.prototype.isShadowRoot=function(e){return e instanceof DocumentFragment},t.prototype.importIntoDoc=function(e){return document.importNode(this.templateAwareRoot(e),!0)},t.prototype.adoptNode=function(e){return document.adoptNode(e)},t.prototype.getHref=function(e){return e.getAttribute("href")},t.prototype.getEventKey=function(e){var t=e.key;if(null==t){if(null==(t=e.keyIdentifier))return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&O.hasOwnProperty(t)&&(t=O[t]))}return x[t]||t},t.prototype.getGlobalEventTarget=function(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null},t.prototype.getHistory=function(){return window.history},t.prototype.getLocation=function(){return window.location},t.prototype.getBaseHref=function(e){var t,n=k||(k=document.querySelector("base"))?k.getAttribute("href"):null;return null==n?null:(t=n,S||(S=document.createElement("a")),S.setAttribute("href",t),"/"===S.pathname.charAt(0)?S.pathname:"/"+S.pathname)},t.prototype.resetBaseElement=function(){k=null},t.prototype.getUserAgent=function(){return window.navigator.userAgent},t.prototype.setData=function(e,t,n){this.setAttribute(e,"data-"+t,n)},t.prototype.getData=function(e,t){return this.getAttribute(e,"data-"+t)},t.prototype.getComputedStyle=function(e){return getComputedStyle(e)},t.prototype.supportsWebAnimation=function(){return"function"==typeof Element.prototype.animate},t.prototype.performanceNow=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()},t.prototype.supportsCookies=function(){return!0},t.prototype.getCookie=function(e){return p(document.cookie,e)},t.prototype.setCookie=function(e,t){document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)},t}(function(e){function t(){var t=e.call(this)||this;t._animationPrefix=null,t._transitionEnd=null;try{var n=t.createElement("div",document);if(null!=t.getStyle(n,"animationName"))t._animationPrefix="";else for(var r=["Webkit","Moz","O","ms"],o=0;o<r.length;o++)if(null!=t.getStyle(n,r[o]+"AnimationName")){t._animationPrefix="-"+r[o].toLowerCase()+"-";break}var i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};Object.keys(i).forEach(function(e){null!=t.getStyle(n,e)&&(t._transitionEnd=i[e])})}catch(e){t._animationPrefix=null,t._transitionEnd=null}return t}return Object(o.__extends)(t,e),t.prototype.getDistributedNodes=function(e){return e.getDistributedNodes()},t.prototype.resolveAndSetHref=function(e,t,n){e.href=null==n?t:t+"/../"+n},t.prototype.supportsDOMEvents=function(){return!0},t.prototype.supportsNativeShadowDOM=function(){return"function"==typeof document.body.createShadowRoot},t.prototype.getAnimationPrefix=function(){return this._animationPrefix?this._animationPrefix:""},t.prototype.getTransitionEnd=function(){return this._transitionEnd?this._transitionEnd:""},t.prototype.supportsAnimation=function(){return null!=this._animationPrefix&&null!=this._transitionEnd},t}(function(){function e(){this.resourceLoaderType=null}return Object.defineProperty(e.prototype,"attrToPropMap",{get:function(){return this._attrToPropMap},set:function(e){this._attrToPropMap=e},enumerable:!0,configurable:!0}),e}())),k=null,I=_;function A(){return!!window.history.pushState}var R=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n._init(),n}return Object(o.__extends)(t,e),t.prototype._init=function(){this.location=w().getLocation(),this._history=w().getHistory()},t.prototype.getBaseHrefFromDOM=function(){return w().getBaseHref(this._doc)},t.prototype.onPopState=function(e){w().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)},t.prototype.onHashChange=function(e){w().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)},Object.defineProperty(t.prototype,"pathname",{get:function(){return this.location.pathname},set:function(e){this.location.pathname=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"search",{get:function(){return this.location.search},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hash",{get:function(){return this.location.hash},enumerable:!0,configurable:!0}),t.prototype.pushState=function(e,t,n){A()?this._history.pushState(e,t,n):this.location.hash=n},t.prototype.replaceState=function(e,t,n){A()?this._history.replaceState(e,t,n):this.location.hash=n},t.prototype.forward=function(){this._history.forward()},t.prototype.back=function(){this._history.back()},t.ctorParameters=function(){return[{type:void 0,decorators:[{type:r.Inject,args:[I]}]}]},t}(i),P=function(){function e(e){this._doc=e,this._dom=w()}return e.prototype.addTag=function(e,t){return void 0===t&&(t=!1),e?this._getOrCreateElement(e,t):null},e.prototype.addTags=function(e,t){var n=this;return void 0===t&&(t=!1),e?e.reduce(function(e,r){return r&&e.push(n._getOrCreateElement(r,t)),e},[]):[]},e.prototype.getTag=function(e){return e&&this._dom.querySelector(this._doc,"meta["+e+"]")||null},e.prototype.getTags=function(e){if(!e)return[];var t=this._dom.querySelectorAll(this._doc,"meta["+e+"]");return t?[].slice.call(t):[]},e.prototype.updateTag=function(e,t){if(!e)return null;t=t||this._parseSelector(e);var n=this.getTag(t);return n?this._setMetaElementAttributes(e,n):this._getOrCreateElement(e,!0)},e.prototype.removeTag=function(e){this.removeTagElement(this.getTag(e))},e.prototype.removeTagElement=function(e){e&&this._dom.remove(e)},e.prototype._getOrCreateElement=function(e,t){if(void 0===t&&(t=!1),!t){var n=this._parseSelector(e),r=this.getTag(n);if(r&&this._containsAttributes(e,r))return r}var o=this._dom.createElement("meta");this._setMetaElementAttributes(e,o);var i=this._dom.getElementsByTagName(this._doc,"head")[0];return this._dom.appendChild(i,o),o},e.prototype._setMetaElementAttributes=function(e,t){var n=this;return Object.keys(e).forEach(function(r){return n._dom.setAttribute(t,r,e[r])}),t},e.prototype._parseSelector=function(e){var t=e.name?"name":"property";return t+'="'+e[t]+'"'},e.prototype._containsAttributes=function(e,t){var n=this;return Object.keys(e).every(function(r){return n._dom.getAttribute(t,r)===e[r]})},e}(),N=new r.InjectionToken("TRANSITION_ID"),M=[{provide:r.APP_INITIALIZER,useFactory:function(e,t,n){return function(){n.get(r.ApplicationInitStatus).donePromise.then(function(){var n=w();Array.prototype.slice.apply(n.querySelectorAll(t,"style[ng-transition]")).filter(function(t){return n.getAttribute(t,"ng-transition")===e}).forEach(function(e){return n.remove(e)})})}},deps:[N,I,r.Injector],multi:!0}],D=function(){function e(){}return e.init=function(){Object(r.setTestabilityGetter)(new e)},e.prototype.addToWindow=function(e){r["\u0275global"].getAngularTestability=function(t,n){void 0===n&&(n=!0);var r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},r["\u0275global"].getAllAngularTestabilities=function(){return e.getAllTestabilities()},r["\u0275global"].getAllAngularRootElements=function(){return e.getAllRootElements()},r["\u0275global"].frameworkStabilizers||(r["\u0275global"].frameworkStabilizers=[]),r["\u0275global"].frameworkStabilizers.push(function(e){var t=r["\u0275global"].getAllAngularTestabilities(),n=t.length,o=!1,i=function(t){o=o||t,0==--n&&e(o)};t.forEach(function(e){e.whenStable(i)})})},e.prototype.findTestabilityInTree=function(e,t,n){if(null==t)return null;var r=e.getTestability(t);return null!=r?r:n?w().isShadowRoot(t)?this.findTestabilityInTree(e,w().getHost(t),!0):this.findTestabilityInTree(e,w().parentElement(t),!0):null},e}(),j=function(){function e(e){this._doc=e}return e.prototype.getTitle=function(){return w().getTitle(this._doc)},e.prototype.setTitle=function(e){w().setTitle(this._doc,e)},e}();function F(e,t){"undefined"!=typeof COMPILED&&COMPILED||((r["\u0275global"].ng=r["\u0275global"].ng||{})[e]=t)}var L={ApplicationRef:r.ApplicationRef,NgZone:r.NgZone};function V(e){return Object(r.getDebugNode)(e)}var B=new r.InjectionToken("EventManagerPlugins"),H=function(){function e(e,t){var n=this;this._zone=t,this._eventNameToPlugin=new Map,e.forEach(function(e){return e.manager=n}),this._plugins=e.slice().reverse()}return e.prototype.addEventListener=function(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)},e.prototype.addGlobalEventListener=function(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)},e.prototype.getZone=function(){return this._zone},e.prototype._findPluginFor=function(e){var t=this._eventNameToPlugin.get(e);if(t)return t;for(var n=this._plugins,r=0;r<n.length;r++){var o=n[r];if(o.supports(e))return this._eventNameToPlugin.set(e,o),o}throw new Error("No event manager plugin found for event "+e)},e}(),z=function(){function e(e){this._doc=e}return e.prototype.addGlobalEventListener=function(e,t,n){var r=w().getGlobalEventTarget(this._doc,e);if(!r)throw new Error("Unsupported event target "+r+" for event "+t);return this.addEventListener(r,t,n)},e}(),U=function(){function e(){this._stylesSet=new Set}return e.prototype.addStyles=function(e){var t=this,n=new Set;e.forEach(function(e){t._stylesSet.has(e)||(t._stylesSet.add(e),n.add(e))}),this.onStylesAdded(n)},e.prototype.onStylesAdded=function(e){},e.prototype.getAllStyles=function(){return Array.from(this._stylesSet)},e}(),q=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n._hostNodes=new Set,n._styleNodes=new Set,n._hostNodes.add(t.head),n}return Object(o.__extends)(t,e),t.prototype._addStylesToHost=function(e,t){var n=this;e.forEach(function(e){var r=n._doc.createElement("style");r.textContent=e,n._styleNodes.add(t.appendChild(r))})},t.prototype.addHost=function(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)},t.prototype.removeHost=function(e){this._hostNodes.delete(e)},t.prototype.onStylesAdded=function(e){var t=this;this._hostNodes.forEach(function(n){return t._addStylesToHost(e,n)})},t.prototype.ngOnDestroy=function(){this._styleNodes.forEach(function(e){return w().remove(e)})},t}(U),Z={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},K=/%COMP%/g,X="_nghost-%COMP%",G="_ngcontent-%COMP%";function W(e,t,n){for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?W(e,o,n):(o=o.replace(K,e),n.push(o))}return n}function Y(e){return function(t){!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}var Q=function(){function e(e,t){this.eventManager=e,this.sharedStylesHost=t,this.rendererByCompId=new Map,this.defaultRenderer=new J(e)}return e.prototype.createRenderer=function(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:var n=this.rendererByCompId.get(t.id);return n||(n=new ne(this.eventManager,this.sharedStylesHost,t),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n;case r.ViewEncapsulation.Native:return new re(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){var o=W(t.id,t.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}},e.prototype.begin=function(){},e.prototype.end=function(){},e}(),J=function(){function e(e){this.eventManager=e,this.data=Object.create(null)}return e.prototype.destroy=function(){},e.prototype.createElement=function(e,t){return t?document.createElementNS(Z[t],e):document.createElement(e)},e.prototype.createComment=function(e){return document.createComment(e)},e.prototype.createText=function(e){return document.createTextNode(e)},e.prototype.appendChild=function(e,t){e.appendChild(t)},e.prototype.insertBefore=function(e,t,n){e&&e.insertBefore(t,n)},e.prototype.removeChild=function(e,t){e&&e.removeChild(t)},e.prototype.selectRootElement=function(e){var t="string"==typeof e?document.querySelector(e):e;if(!t)throw new Error('The selector "'+e+'" did not match any elements');return t.textContent="",t},e.prototype.parentNode=function(e){return e.parentNode},e.prototype.nextSibling=function(e){return e.nextSibling},e.prototype.setAttribute=function(e,t,n,r){if(r){t=r+":"+t;var o=Z[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)},e.prototype.removeAttribute=function(e,t,n){if(n){var r=Z[n];r?e.removeAttributeNS(r,t):e.removeAttribute(n+":"+t)}else e.removeAttribute(t)},e.prototype.addClass=function(e,t){e.classList.add(t)},e.prototype.removeClass=function(e,t){e.classList.remove(t)},e.prototype.setStyle=function(e,t,n,o){o&r.RendererStyleFlags2.DashCase?e.style.setProperty(t,n,o&r.RendererStyleFlags2.Important?"important":""):e.style[t]=n},e.prototype.removeStyle=function(e,t,n){n&r.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""},e.prototype.setProperty=function(e,t,n){ee(t,"property"),e[t]=n},e.prototype.setValue=function(e,t){e.nodeValue=t},e.prototype.listen=function(e,t,n){return ee(t,"listener"),"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,Y(n)):this.eventManager.addEventListener(e,t,Y(n))},e}(),$="@".charCodeAt(0);function ee(e,t){if(e.charCodeAt(0)===$)throw new Error("Found the synthetic "+t+" "+e+'. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')}var te,ne=function(e){function t(t,n,r){var o=e.call(this,t)||this;o.component=r;var i=W(r.id,r.styles,[]);return n.addStyles(i),o.contentAttr=G.replace(K,r.id),o.hostAttr=X.replace(K,r.id),o}return Object(o.__extends)(t,e),t.prototype.applyToHost=function(t){e.prototype.setAttribute.call(this,t,this.hostAttr,"")},t.prototype.createElement=function(t,n){var r=e.prototype.createElement.call(this,t,n);return e.prototype.setAttribute.call(this,r,this.contentAttr,""),r},t}(J),re=function(e){function t(t,n,r,o){var i=e.call(this,t)||this;i.sharedStylesHost=n,i.hostEl=r,i.component=o,i.shadowRoot=r.createShadowRoot(),i.sharedStylesHost.addHost(i.shadowRoot);for(var s=W(o.id,o.styles,[]),a=0;a<s.length;a++){var u=document.createElement("style");u.textContent=s[a],i.shadowRoot.appendChild(u)}return i}return Object(o.__extends)(t,e),t.prototype.nodeOrShadowRoot=function(e){return e===this.hostEl?this.shadowRoot:e},t.prototype.destroy=function(){this.sharedStylesHost.removeHost(this.shadowRoot)},t.prototype.appendChild=function(t,n){return e.prototype.appendChild.call(this,this.nodeOrShadowRoot(t),n)},t.prototype.insertBefore=function(t,n,r){return e.prototype.insertBefore.call(this,this.nodeOrShadowRoot(t),n,r)},t.prototype.removeChild=function(t,n){return e.prototype.removeChild.call(this,this.nodeOrShadowRoot(t),n)},t.prototype.parentNode=function(t){return this.nodeOrShadowRoot(e.prototype.parentNode.call(this,this.nodeOrShadowRoot(t)))},t}(J),oe="undefined"!=typeof Zone&&Zone.__symbol__||function(e){return"__zone_symbol__"+e},ie=oe("addEventListener"),se=oe("removeEventListener"),ae={},ue="__zone_symbol__propagationStopped";"undefined"!=typeof Zone&&Zone[oe("BLACK_LISTED_EVENTS")]&&(te={});var le=function(e){return!!te&&te.hasOwnProperty(e)},ce=function(e){var t=ae[e.type];if(t){var n=this[t];if(n){var r=[e];if(1===n.length)return(s=n[0]).zone!==Zone.current?s.zone.run(s.handler,this,r):s.handler.apply(this,r);for(var o=n.slice(),i=0;i<o.length&&!0!==e[ue];i++){var s;(s=o[i]).zone!==Zone.current?s.zone.run(s.handler,this,r):s.handler.apply(this,r)}}}},de=function(e){function t(t,n){var r=e.call(this,t)||this;return r.ngZone=n,r.patchEvent(),r}return Object(o.__extends)(t,e),t.prototype.patchEvent=function(){if(Event&&Event.prototype&&!Event.prototype.__zone_symbol__stopImmediatePropagation){var e=Event.prototype.__zone_symbol__stopImmediatePropagation=Event.prototype.stopImmediatePropagation;Event.prototype.stopImmediatePropagation=function(){this&&(this[ue]=!0),e&&e.apply(this,arguments)}}},t.prototype.supports=function(e){return!0},t.prototype.addEventListener=function(e,t,n){var o=this,i=n;if(!e[ie]||r.NgZone.isInAngularZone()&&!le(t))e.addEventListener(t,i,!1);else{var s=ae[t];s||(s=ae[t]=oe("ANGULAR"+t+"FALSE"));var a=e[s],u=a&&a.length>0;a||(a=e[s]=[]);var l=le(t)?Zone.root:Zone.current;if(0===a.length)a.push({zone:l,handler:i});else{for(var c=!1,d=0;d<a.length;d++)if(a[d].handler===i){c=!0;break}c||a.push({zone:l,handler:i})}u||e[ie](t,ce,!1)}return function(){return o.removeEventListener(e,t,i)}},t.prototype.removeEventListener=function(e,t,n){var r=e[se];if(!r)return e.removeEventListener.apply(e,[t,n,!1]);var o=ae[t],i=o&&e[o];if(!i)return e.removeEventListener.apply(e,[t,n,!1]);for(var s=!1,a=0;a<i.length;a++)if(i[a].handler===n){s=!0,i.splice(a,1);break}s?0===i.length&&r.apply(e,[t,ce,!1]):e.removeEventListener.apply(e,[t,n,!1])},t}(z),pe={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0},fe=new r.InjectionToken("HammerGestureConfig"),he=function(){function e(){this.events=[],this.overrides={}}return e.prototype.buildHammer=function(e){var t=new Hammer(e);for(var n in t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0}),this.overrides)t.get(n).set(this.overrides[n]);return t},e}(),ve=function(e){function t(t,n){var r=e.call(this,t)||this;return r._config=n,r}return Object(o.__extends)(t,e),t.prototype.supports=function(e){if(!pe.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e))return!1;if(!window.Hammer)throw new Error("Hammer.js is not loaded, can not bind "+e+" event");return!0},t.prototype.addEventListener=function(e,t,n){var r=this,o=this.manager.getZone();return t=t.toLowerCase(),o.runOutsideAngular(function(){var i=r._config.buildHammer(e),s=function(e){o.runGuarded(function(){n(e)})};return i.on(t,s),function(){return i.off(t,s)}})},t.prototype.isCustomEvent=function(e){return this._config.events.indexOf(e)>-1},t}(z),ye=["alt","control","meta","shift"],ge={alt:function(e){return e.altKey},control:function(e){return e.ctrlKey},meta:function(e){return e.metaKey},shift:function(e){return e.shiftKey}},me=function(e){function t(t){return e.call(this,t)||this}return Object(o.__extends)(t,e),t.prototype.supports=function(e){return null!=t.parseEventName(e)},t.prototype.addEventListener=function(e,n,r){var o=t.parseEventName(n),i=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(function(){return w().onAndCancel(e,o.domEventName,i)})},t.parseEventName=function(e){var n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;var o=t._normalizeKey(n.pop()),i="";if(ye.forEach(function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=o,0!=n.length||0===o.length)return null;var s={};return s.domEventName=r,s.fullKey=i,s},t.getEventFullKey=function(e){var t="",n=w().getEventKey(e);return" "===(n=n.toLowerCase())?n="space":"."===n&&(n="dot"),ye.forEach(function(r){r!=n&&(0,ge[r])(e)&&(t+=r+".")}),t+=n},t.eventCallback=function(e,n,r){return function(o){t.getEventFullKey(o)===e&&r.runGuarded(function(){return n(o)})}},t._normalizeKey=function(e){switch(e){case"esc":return"escape";default:return e}},t}(z),_e=function(){function e(e,t){this.defaultDoc=e,this.DOM=t;var n=this.DOM.createHtmlDocument();if(this.inertBodyElement=n.body,null==this.inertBodyElement){var r=this.DOM.createElement("html",n);this.inertBodyElement=this.DOM.createElement("body",n),this.DOM.appendChild(r,this.inertBodyElement),this.DOM.appendChild(n,r)}this.DOM.setInnerHTML(this.inertBodyElement,'<svg><g onload="this.parentNode.remove()"></g></svg>'),!this.inertBodyElement.querySelector||this.inertBodyElement.querySelector("svg")?(this.DOM.setInnerHTML(this.inertBodyElement,'<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),this.getInertBodyElement=this.inertBodyElement.querySelector&&this.inertBodyElement.querySelector("svg img")&&function(){try{return!!window.DOMParser}catch(e){return!1}}()?this.getInertBodyElement_DOMParser:this.getInertBodyElement_InertDocument):this.getInertBodyElement=this.getInertBodyElement_XHR}return e.prototype.getInertBodyElement_XHR=function(e){e="<body><remove></remove>"+e+"</body>";try{e=encodeURI(e)}catch(e){return null}var t=new XMLHttpRequest;t.responseType="document",t.open("GET","data:text/html;charset=utf-8,"+e,!1),t.send(null);var n=t.response.body;return n.removeChild(n.firstChild),n},e.prototype.getInertBodyElement_DOMParser=function(e){e="<body><remove></remove>"+e+"</body>";try{var t=(new window.DOMParser).parseFromString(e,"text/html").body;return t.removeChild(t.firstChild),t}catch(e){return null}},e.prototype.getInertBodyElement_InertDocument=function(e){var t=this.DOM.createElement("template");return"content"in t?(this.DOM.setInnerHTML(t,e),t):(this.DOM.setInnerHTML(this.inertBodyElement,e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(this.inertBodyElement),this.inertBodyElement)},e.prototype.stripCustomNsAttrs=function(e){var t=this;this.DOM.attributeMap(e).forEach(function(n,r){"xmlns:ns1"!==r&&0!==r.indexOf("ns1:")||t.DOM.removeAttribute(e,r)});for(var n=0,r=this.DOM.childNodesAsList(e);n<r.length;n++){var o=r[n];this.DOM.isElementNode(o)&&this.stripCustomNsAttrs(o)}},e}(),be=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,we=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Ee(e){return(e=String(e)).match(be)||e.match(we)?e:(Object(r.isDevMode)()&&w().log("WARNING: sanitizing unsafe URL value "+e+" (see http://g.co/ng/security#xss)"),"unsafe:"+e)}function Ce(e){for(var t={},n=0,r=e.split(",");n<r.length;n++)t[r[n]]=!0;return t}function xe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},r=0,o=e;r<o.length;r++){var i=o[r];for(var s in i)i.hasOwnProperty(s)&&(n[s]=!0)}return n}var Oe,Se=Ce("area,br,col,hr,img,wbr"),Te=Ce("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ke=Ce("rp,rt"),Ie=xe(ke,Te),Ae=xe(Se,xe(Te,Ce("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),xe(ke,Ce("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ie),Re=Ce("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Pe=Ce("srcset"),Ne=xe(Re,Pe,Ce("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),Me=function(){function e(){this.sanitizedSomething=!1,this.buf=[],this.DOM=w()}return e.prototype.sanitizeChildren=function(e){for(var t=this.DOM.firstChild(e);t;)if(this.DOM.isElementNode(t)?this.startElement(t):this.DOM.isTextNode(t)?this.chars(this.DOM.nodeValue(t)):this.sanitizedSomething=!0,this.DOM.firstChild(t))t=this.DOM.firstChild(t);else for(;t;){this.DOM.isElementNode(t)&&this.endElement(t);var n=this.checkClobberedElement(t,this.DOM.nextSibling(t));if(n){t=n;break}t=this.checkClobberedElement(t,this.DOM.parentElement(t))}return this.buf.join("")},e.prototype.startElement=function(e){var t=this,n=this.DOM.nodeName(e).toLowerCase();Ae.hasOwnProperty(n)?(this.buf.push("<"),this.buf.push(n),this.DOM.attributeMap(e).forEach(function(e,n){var r,o=n.toLowerCase();Ne.hasOwnProperty(o)?(Re[o]&&(e=Ee(e)),Pe[o]&&(r=e,e=(r=String(r)).split(",").map(function(e){return Ee(e.trim())}).join(", ")),t.buf.push(" "),t.buf.push(n),t.buf.push('="'),t.buf.push(Fe(e)),t.buf.push('"')):t.sanitizedSomething=!0}),this.buf.push(">")):this.sanitizedSomething=!0},e.prototype.endElement=function(e){var t=this.DOM.nodeName(e).toLowerCase();Ae.hasOwnProperty(t)&&!Se.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))},e.prototype.chars=function(e){this.buf.push(Fe(e))},e.prototype.checkClobberedElement=function(e,t){if(t&&this.DOM.contains(e,t))throw new Error("Failed to sanitize html because the element is clobbered: "+this.DOM.getOuterHTML(e));return t},e}(),De=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,je=/([^\#-~ |!])/g;function Fe(e){return e.replace(/&/g,"&amp;").replace(De,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(je,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Le=new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$","g"),Ve=/^url\(([^)]+)\)$/,Be=function(){},He=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n}return Object(o.__extends)(t,e),t.prototype.sanitize=function(e,t){if(null==t)return null;switch(e){case r.SecurityContext.NONE:return t;case r.SecurityContext.HTML:return t instanceof Ue?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"HTML"),function(e,t){var n=w(),o=null;try{Oe=Oe||new _e(e,n);var i=t?String(t):"";o=Oe.getInertBodyElement(i);var s=5,a=i;do{if(0===s)throw new Error("Failed to sanitize html because the input is unstable");s--,i=a,a=n.getInnerHTML(o),o=Oe.getInertBodyElement(i)}while(i!==a);var u=new Me,l=u.sanitizeChildren(n.getTemplateContent(o)||o);return Object(r.isDevMode)()&&u.sanitizedSomething&&n.log("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."),l}finally{if(o)for(var c=n.getTemplateContent(o)||o,d=0,p=n.childNodesAsList(c);d<p.length;d++)n.removeChild(c,p[d])}}(this._doc,String(t)));case r.SecurityContext.STYLE:return t instanceof qe?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"Style"),function(e){if(!(e=String(e).trim()))return"";var t=e.match(Ve);return t&&Ee(t[1])===t[1]||e.match(Le)&&function(e){for(var t=!0,n=!0,r=0;r<e.length;r++){var o=e.charAt(r);"'"===o&&n?t=!t:'"'===o&&t&&(n=!n)}return t&&n}(e)?e:(Object(r.isDevMode)()&&w().log("WARNING: sanitizing unsafe style value "+e+" (see http://g.co/ng/security#xss)."),"unsafe")}(t));case r.SecurityContext.SCRIPT:if(t instanceof Ze)return t.changingThisBreaksApplicationSecurity;throw this.checkNotSafeValue(t,"Script"),new Error("unsafe value used in a script context");case r.SecurityContext.URL:return t instanceof Xe||t instanceof Ke?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"URL"),Ee(String(t)));case r.SecurityContext.RESOURCE_URL:if(t instanceof Xe)return t.changingThisBreaksApplicationSecurity;throw this.checkNotSafeValue(t,"ResourceURL"),new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");default:throw new Error("Unexpected SecurityContext "+e+" (see http://g.co/ng/security#xss)")}},t.prototype.checkNotSafeValue=function(e,t){if(e instanceof ze)throw new Error("Required a safe "+t+", got a "+e.getTypeName()+" (see http://g.co/ng/security#xss)")},t.prototype.bypassSecurityTrustHtml=function(e){return new Ue(e)},t.prototype.bypassSecurityTrustStyle=function(e){return new qe(e)},t.prototype.bypassSecurityTrustScript=function(e){return new Ze(e)},t.prototype.bypassSecurityTrustUrl=function(e){return new Ke(e)},t.prototype.bypassSecurityTrustResourceUrl=function(e){return new Xe(e)},t}(Be),ze=function(){function e(e){this.changingThisBreaksApplicationSecurity=e}return e.prototype.toString=function(){return"SafeValue must use [property]=binding: "+this.changingThisBreaksApplicationSecurity+" (see http://g.co/ng/security#xss)"},e}(),Ue=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.getTypeName=function(){return"HTML"},t}(ze),qe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.getTypeName=function(){return"Style"},t}(ze),Ze=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.getTypeName=function(){return"Script"},t}(ze),Ke=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.getTypeName=function(){return"URL"},t}(ze),Xe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.__extends)(t,e),t.prototype.getTypeName=function(){return"ResourceURL"},t}(ze),Ge=[{provide:r.PLATFORM_ID,useValue:"browser"},{provide:r.PLATFORM_INITIALIZER,useValue:function(){T.makeCurrent(),D.init()},multi:!0},{provide:i,useClass:R,deps:[I]},{provide:I,useFactory:function(){return document},deps:[]}],We=Object(r.createPlatformFactory)(r.platformCore,"browser",Ge);function Ye(){return new r.ErrorHandler}var Qe=function(){function e(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}return e.withServerTransition=function(t){return{ngModule:e,providers:[{provide:r.APP_ID,useValue:t.appId},{provide:N,useExisting:r.APP_ID},M]}},e}();"undefined"!=typeof window&&window;var Je=n("Oryw").a.of,$e=n("wP3s"),et=n("E9/g");function tt(e,t){return function(n){return n.lift(new nt(e,t))}}var nt=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new rt(e,this.predicate,this.thisArg))},e}(),rt=function(e){function t(t,n,r){e.call(this,t),this.predicate=n,this.thisArg=r,this.count=0}return Object(o.__extends)(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(et.a);function ot(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new it(e,t))}}var it=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new st(e,this.project,this.thisArg))},e}(),st=function(e){function t(t,n,r){e.call(this,t),this.project=n,this.count=0,this.thisArg=r||this}return Object(o.__extends)(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(et.a);function at(e,t){return ot(e,t)(this)}var ut=n("AP4T"),lt=function(){},ct=function(){},dt=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var n=e.indexOf(":");if(n>0){var r=e.slice(0,n),o=r.toLowerCase(),i=e.slice(n+1).trim();t.maybeSetNormalizedName(r,o),t.headers.has(o)?t.headers.get(o).push(i):t.headers.set(o,[i])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(n){var r=e[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(t.headers.set(o,r),t.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))})},e.prototype.clone=function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,n),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var i=this.headers.get(t);if(!i)return;0===(i=i.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return e(t.normalizedNames.get(n),t.headers.get(n))})},e}(),pt=function(){function e(){}return e.prototype.encodeKey=function(e){return ft(e)},e.prototype.encodeValue=function(e){return ft(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function ft(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var ht=function(){function e(e){void 0===e&&(e={});var t,n,r,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new pt,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,n=this.encoder,r=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),o=-1==t?[n.decodeKey(e),""]:[n.decodeKey(e.slice(0,t)),n.decodeValue(e.slice(t+1))],i=o[0],s=o[1],a=r.get(i)||[];a.push(s),r.set(i,a)}),r)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var n=e.fromObject[t];o.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return n+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function vt(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function yt(e){return"undefined"!=typeof Blob&&e instanceof Blob}function gt(e){return"undefined"!=typeof FormData&&e instanceof FormData}var mt=function(){function e(e,t,n,r){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new dt),this.params){var i=this.params.toString();if(0===i.length)this.urlWithParams=t;else{var s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+i}}else this.params=new ht,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:vt(this.body)||yt(this.body)||gt(this.body)||"string"==typeof this.body?this.body:this.body instanceof ht?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:gt(this.body)?null:yt(this.body)?this.body.type||null:vt(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof ht?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,n){return e.set(n,t.setHeaders[n])},u)),t.setParams&&(l=Object.keys(t.setParams).reduce(function(e,n){return e.set(n,t.setParams[n])},l)),new e(n,r,i,{params:l,headers:u,reportProgress:a,responseType:o,withCredentials:s})},e}(),_t=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),bt=function(){return function(e,t,n){void 0===t&&(t=200),void 0===n&&(n="OK"),this.headers=e.headers||new dt,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),wt=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=_t.ResponseHeader,n}return Object(o.__extends)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(bt),Et=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=_t.Response,n.body=void 0!==t.body?t.body:null,n}return Object(o.__extends)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(bt),Ct=function(e){function t(t){var n=e.call(this,t,0,"Unknown Error")||this;return n.name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,n.error=t.error||null,n}return Object(o.__extends)(t,e),t}(bt);function xt(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var Ot=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,n){var r,o=this;if(void 0===n&&(n={}),e instanceof mt)r=e;else{var i;i=n.headers instanceof dt?n.headers:new dt(n.headers);var s=void 0;n.params&&(s=n.params instanceof ht?n.params:new ht({fromObject:n.params})),r=new mt(e,t,void 0!==n.body?n.body:null,{headers:i,params:s,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var a=function(e,t){return function(e,t){return Object($e.a)(e,t,1)}(e,t)(this)}.call(Je(r),function(e){return o.handler.handle(e)});if(e instanceof mt||"events"===n.observe)return a;var u=function(e,t){return tt(e,t)(this)}.call(a,function(e){return e instanceof Et});switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return at.call(u,function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body});case"blob":return at.call(u,function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body});case"text":return at.call(u,function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body});case"json":default:return at.call(u,function(e){return e.body})}case"response":return u;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new ht).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,n){return void 0===n&&(n={}),this.request("PATCH",e,xt(n,t))},e.prototype.post=function(e,t,n){return void 0===n&&(n={}),this.request("POST",e,xt(n,t))},e.prototype.put=function(e,t,n){return void 0===n&&(n={}),this.request("PUT",e,xt(n,t))},e}(),St=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),Tt=new r.InjectionToken("HTTP_INTERCEPTORS"),kt=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e}(),It=/^\)\]\}',?\n/,At=function(){},Rt=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),Pt=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new ut.a(function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(function(e,t){return r.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var i=e.responseType.toLowerCase();r.responseType="json"!==i?i:"text"}var s=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new dt(r.getAllResponseHeaders()),i=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return a=new wt({headers:o,status:t,statusText:n,url:i})},l=function(){var t=u(),o=t.headers,i=t.status,s=t.statusText,a=t.url,l=null;204!==i&&(l=void 0===r.response?r.responseText:r.response),0===i&&(i=l?200:0);var c=i>=200&&i<300;if("json"===e.responseType&&"string"==typeof l){var d=l;l=l.replace(It,"");try{l=""!==l?JSON.parse(l):null}catch(e){l=d,c&&(c=!1,l={error:e,text:l})}}c?(n.next(new Et({body:l,headers:o,status:i,statusText:s,url:a||void 0})),n.complete()):n.error(new Ct({error:l,headers:o,status:i,statusText:s,url:a||void 0}))},c=function(e){var t=new Ct({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error"});n.error(t)},d=!1,p=function(t){d||(n.next(u()),d=!0);var o={type:_t.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},f=function(e){var t={type:_t.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",l),r.addEventListener("error",c),e.reportProgress&&(r.addEventListener("progress",p),null!==s&&r.upload&&r.upload.addEventListener("progress",f)),r.send(s),n.next({type:_t.Sent}),function(){r.removeEventListener("error",c),r.removeEventListener("load",l),e.reportProgress&&(r.removeEventListener("progress",p),null!==s&&r.upload&&r.upload.removeEventListener("progress",f)),r.abort()}})},e}(),Nt=new r.InjectionToken("XSRF_COOKIE_NAME"),Mt=new r.InjectionToken("XSRF_HEADER_NAME"),Dt=function(){},jt=function(){function e(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=p(e,this.cookieName),this.lastCookieString=e),this.lastToken},e}(),Ft=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)},e}(),Lt=function(){function e(e,t){this.backend=e,this.injector=t,this.chain=null}return e.prototype.handle=function(e){if(null===this.chain){var t=this.injector.get(Tt,[]);this.chain=t.reduceRight(function(e,t){return new St(e,t)},this.backend)}return this.chain.handle(e)},e}(),Vt=function(){function e(){}return e.disable=function(){return{ngModule:e,providers:[{provide:Ft,useClass:kt}]}},e.withOptions=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[t.cookieName?{provide:Nt,useValue:t.cookieName}:[],t.headerName?{provide:Mt,useValue:t.headerName}:[]]}},e}(),Bt=function(){},Ht=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),zt=function(){var e={Get:0,Post:1,Put:2,Delete:3,Options:4,Head:5,Patch:6};return e[e.Get]="Get",e[e.Post]="Post",e[e.Put]="Put",e[e.Delete]="Delete",e[e.Options]="Options",e[e.Head]="Head",e[e.Patch]="Patch",e}(),Ut=function(){var e={Basic:0,Cors:1,Default:2,Error:3,Opaque:4};return e[e.Basic]="Basic",e[e.Cors]="Cors",e[e.Default]="Default",e[e.Error]="Error",e[e.Opaque]="Opaque",e}(),qt=function(){var e={NONE:0,JSON:1,FORM:2,FORM_DATA:3,TEXT:4,BLOB:5,ARRAY_BUFFER:6};return e[e.NONE]="NONE",e[e.JSON]="JSON",e[e.FORM]="FORM",e[e.FORM_DATA]="FORM_DATA",e[e.TEXT]="TEXT",e[e.BLOB]="BLOB",e[e.ARRAY_BUFFER]="ARRAY_BUFFER",e}(),Zt=function(){var e={Text:0,Json:1,ArrayBuffer:2,Blob:3};return e[e.Text]="Text",e[e.Json]="Json",e[e.ArrayBuffer]="ArrayBuffer",e[e.Blob]="Blob",e}(),Kt=function(){function e(t){var n=this;this._headers=new Map,this._normalizedNames=new Map,t&&(t instanceof e?t.forEach(function(e,t){e.forEach(function(e){return n.append(t,e)})}):Object.keys(t).forEach(function(e){var r=Array.isArray(t[e])?t[e]:[t[e]];n.delete(e),r.forEach(function(t){return n.append(e,t)})}))}return e.fromResponseHeaderString=function(t){var n=new e;return t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),o=e.slice(t+1).trim();n.set(r,o)}}),n},e.prototype.append=function(e,t){var n=this.getAll(e);null===n?this.set(e,t):n.push(t)},e.prototype.delete=function(e){var t=e.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},e.prototype.forEach=function(e){var t=this;this._headers.forEach(function(n,r){return e(n,t._normalizedNames.get(r),t._headers)})},e.prototype.get=function(e){var t=this.getAll(e);return null===t?null:t.length>0?t[0]:null},e.prototype.has=function(e){return this._headers.has(e.toLowerCase())},e.prototype.keys=function(){return Array.from(this._normalizedNames.values())},e.prototype.set=function(e,t){Array.isArray(t)?t.length&&this._headers.set(e.toLowerCase(),[t.join(",")]):this._headers.set(e.toLowerCase(),[t]),this.mayBeSetNormalizedName(e)},e.prototype.values=function(){return Array.from(this._headers.values())},e.prototype.toJSON=function(){var e=this,t={};return this._headers.forEach(function(n,r){var o=[];n.forEach(function(e){return o.push.apply(o,e.split(","))}),t[e._normalizedNames.get(r)]=o}),t},e.prototype.getAll=function(e){return this.has(e)&&this._headers.get(e.toLowerCase())||null},e.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},e.prototype.mayBeSetNormalizedName=function(e){var t=e.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,e)},e}(),Xt=function(){function e(e){void 0===e&&(e={});var t=e.body,n=e.status,r=e.headers,o=e.statusText,i=e.type,s=e.url;this.body=null!=t?t:null,this.status=null!=n?n:null,this.headers=null!=r?r:null,this.statusText=null!=o?o:null,this.type=null!=i?i:null,this.url=null!=s?s:null}return e.prototype.merge=function(t){return new e({body:t&&null!=t.body?t.body:this.body,status:t&&null!=t.status?t.status:this.status,headers:t&&null!=t.headers?t.headers:this.headers,statusText:t&&null!=t.statusText?t.statusText:this.statusText,type:t&&null!=t.type?t.type:this.type,url:t&&null!=t.url?t.url:this.url})},e}(),Gt=function(e){function t(){return e.call(this,{status:200,statusText:"Ok",type:Ut.Default,headers:new Kt})||this}return Object(o.__extends)(t,e),t}(Xt),Wt=function(){};function Yt(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return zt.Get;case"POST":return zt.Post;case"PUT":return zt.Put;case"DELETE":return zt.Delete;case"OPTIONS":return zt.Options;case"HEAD":return zt.Head;case"PATCH":return zt.Patch}throw new Error('Invalid request method. The method "'+e+'" is not supported.')}var Qt=function(e){return e>=200&&e<300},Jt=function(){function e(){}return e.prototype.encodeKey=function(e){return $t(e)},e.prototype.encodeValue=function(e){return $t(e)},e}();function $t(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var en=function(){function e(e,t){void 0===e&&(e=""),void 0===t&&(t=new Jt),this.rawParams=e,this.queryEncoder=t,this.paramsMap=function(e){void 0===e&&(e="");var t=new Map;return e.length>0&&e.split("&").forEach(function(e){var n=e.indexOf("="),r=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)],o=r[0],i=r[1],s=t.get(o)||[];s.push(i),t.set(o,s)}),t}(e)}return e.prototype.clone=function(){var t=new e("",this.queryEncoder);return t.appendAll(this),t},e.prototype.has=function(e){return this.paramsMap.has(e)},e.prototype.get=function(e){var t=this.paramsMap.get(e);return Array.isArray(t)?t[0]:null},e.prototype.getAll=function(e){return this.paramsMap.get(e)||[]},e.prototype.set=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.length=0,n.push(t),this.paramsMap.set(e,n)}else this.delete(e)},e.prototype.setAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0,r.push(e[0]),t.paramsMap.set(n,r)})},e.prototype.append=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.push(t),this.paramsMap.set(e,n)}},e.prototype.appendAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){for(var r=t.paramsMap.get(n)||[],o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.replaceAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0;for(var o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.toString=function(){var e=this,t=[];return this.paramsMap.forEach(function(n,r){n.forEach(function(n){return t.push(e.queryEncoder.encodeKey(r)+"="+e.queryEncoder.encodeValue(n))})}),t.join("&")},e.prototype.delete=function(e){this.paramsMap.delete(e)},e}(),tn=function(){function e(){}return e.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},e.prototype.text=function(e){if(void 0===e&&(e="legacy"),this._body instanceof en)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+e)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},e.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:function(e){for(var t=new Uint16Array(e.length),n=0,r=e.length;n<r;n++)t[n]=e.charCodeAt(n);return t.buffer}(this.text())},e.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},e}(),nn=function(e){function t(t){var n=e.call(this)||this;return n._body=t.body,n.status=t.status,n.ok=n.status>=200&&n.status<=299,n.statusText=t.statusText,n.headers=t.headers,n.type=t.type,n.url=t.url,n}return Object(o.__extends)(t,e),t.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},t}(tn),rn=/^\)\]\}',?\n/,on=function(){function e(e,t,n){var r=this;this.request=e,this.response=new ut.a(function(o){var i=t.build();i.open(zt[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(i.withCredentials=e.withCredentials);var s=function(){var t=1223===i.status?204:i.status,r=null;204!==t&&"string"==typeof(r=void 0===i.response?i.responseText:i.response)&&(r=r.replace(rn,"")),0===t&&(t=r?200:0);var s,a=Kt.fromResponseHeaderString(i.getAllResponseHeaders()),u=("responseURL"in(s=i)?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null)||e.url,l=new Xt({body:r,status:t,headers:a,statusText:i.statusText||"OK",url:u});null!=n&&(l=n.merge(l));var c=new nn(l);if(c.ok=Qt(t),c.ok)return o.next(c),void o.complete();o.error(c)},a=function(e){var t=new Xt({body:e,type:Ut.Error,status:i.status,statusText:i.statusText});null!=n&&(t=n.merge(t)),o.error(new nn(t))};if(r.setDetectedContentType(e,i),null==e.headers&&(e.headers=new Kt),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(function(e,t){return i.setRequestHeader(t,e.join(","))}),null!=e.responseType&&null!=i.responseType)switch(e.responseType){case Zt.ArrayBuffer:i.responseType="arraybuffer";break;case Zt.Json:i.responseType="json";break;case Zt.Text:i.responseType="text";break;case Zt.Blob:i.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return i.addEventListener("load",s),i.addEventListener("error",a),i.send(r.request.getBody()),function(){i.removeEventListener("load",s),i.removeEventListener("error",a),i.abort()}})}return e.prototype.setDetectedContentType=function(e,t){if(null==e.headers||null==e.headers.get("Content-Type"))switch(e.contentType){case qt.NONE:break;case qt.JSON:t.setRequestHeader("content-type","application/json");break;case qt.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case qt.TEXT:t.setRequestHeader("content-type","text/plain");break;case qt.BLOB:var n=e.blob();n.type&&t.setRequestHeader("content-type",n.type)}},e}(),sn=function(){function e(e,t){void 0===e&&(e="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=e,this._headerName=t}return e.prototype.configureRequest=function(e){var t=w().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)},e}(),an=function(){function e(e,t,n){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=n}return e.prototype.createConnection=function(e){return this._xsrfStrategy.configureRequest(e),new on(e,this._browserXHR,this._baseResponseOptions)},e}(),un=function(){function e(e){void 0===e&&(e={});var t=e.method,n=e.headers,r=e.body,o=e.url,i=e.search,s=e.params,a=e.withCredentials,u=e.responseType;this.method=null!=t?Yt(t):null,this.headers=null!=n?n:null,this.body=null!=r?r:null,this.url=null!=o?o:null,this.params=this._mergeSearchParams(s||i),this.withCredentials=null!=a?a:null,this.responseType=null!=u?u:null}return Object.defineProperty(e.prototype,"search",{get:function(){return this.params},set:function(e){this.params=e},enumerable:!0,configurable:!0}),e.prototype.merge=function(t){return new e({method:t&&null!=t.method?t.method:this.method,headers:t&&null!=t.headers?t.headers:new Kt(this.headers),body:t&&null!=t.body?t.body:this.body,url:t&&null!=t.url?t.url:this.url,params:t&&this._mergeSearchParams(t.params||t.search),withCredentials:t&&null!=t.withCredentials?t.withCredentials:this.withCredentials,responseType:t&&null!=t.responseType?t.responseType:this.responseType})},e.prototype._mergeSearchParams=function(e){return e?e instanceof en?e.clone():"string"==typeof e?new en(e):this._parseParams(e):this.params},e.prototype._parseParams=function(e){var t=this;void 0===e&&(e={});var n=new en;return Object.keys(e).forEach(function(r){var o=e[r];Array.isArray(o)?o.forEach(function(e){return t._appendParam(r,e,n)}):t._appendParam(r,o,n)}),n},e.prototype._appendParam=function(e,t,n){"string"!=typeof t&&(t=JSON.stringify(t)),n.append(e,t)},e}(),ln=function(e){function t(){return e.call(this,{method:zt.Get,headers:new Kt})||this}return Object(o.__extends)(t,e),t}(un),cn=function(e){function t(t){var n=e.call(this)||this,r=t.url;n.url=t.url;var o,i=t.params||t.search;if(i&&(o="object"!=typeof i||i instanceof en?i.toString():function(e){var t=new en;return Object.keys(e).forEach(function(n){var r=e[n];r&&Array.isArray(r)?r.forEach(function(e){return t.append(n,e.toString())}):t.append(n,r.toString())}),t}(i).toString()).length>0){var s="?";-1!=n.url.indexOf("?")&&(s="&"==n.url[n.url.length-1]?"":"&"),n.url=r+s+o}return n._body=t.body,n.method=Yt(t.method),n.headers=new Kt(t.headers),n.contentType=n.detectContentType(),n.withCredentials=t.withCredentials,n.responseType=t.responseType,n}return Object(o.__extends)(t,e),t.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return qt.JSON;case"application/x-www-form-urlencoded":return qt.FORM;case"multipart/form-data":return qt.FORM_DATA;case"text/plain":case"text/html":return qt.TEXT;case"application/octet-stream":return this._body instanceof vn?qt.ARRAY_BUFFER:qt.BLOB;default:return this.detectContentTypeFromBody()}},t.prototype.detectContentTypeFromBody=function(){return null==this._body?qt.NONE:this._body instanceof en?qt.FORM:this._body instanceof fn?qt.FORM_DATA:this._body instanceof hn?qt.BLOB:this._body instanceof vn?qt.ARRAY_BUFFER:this._body&&"object"==typeof this._body?qt.JSON:qt.TEXT},t.prototype.getBody=function(){switch(this.contentType){case qt.JSON:case qt.FORM:return this.text();case qt.FORM_DATA:return this._body;case qt.TEXT:return this.text();case qt.BLOB:return this.blob();case qt.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},t}(tn),dn=function(){},pn="object"==typeof window?window:dn,fn=pn.FormData||dn,hn=pn.Blob||dn,vn=pn.ArrayBuffer||dn;function yn(e,t){return e.createConnection(t).response}function gn(e,t,n,r){return e.merge(new un(t?{method:t.method||n,url:t.url||r,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType}:{method:n,url:r}))}var mn=function(){function e(e,t){this._backend=e,this._defaultOptions=t}return e.prototype.request=function(e,t){var n;if("string"==typeof e)n=yn(this._backend,new cn(gn(this._defaultOptions,t,zt.Get,e)));else{if(!(e instanceof cn))throw new Error("First argument must be a url string or Request instance.");n=yn(this._backend,e)}return n},e.prototype.get=function(e,t){return this.request(new cn(gn(this._defaultOptions,t,zt.Get,e)))},e.prototype.post=function(e,t,n){return this.request(new cn(gn(this._defaultOptions.merge(new un({body:t})),n,zt.Post,e)))},e.prototype.put=function(e,t,n){return this.request(new cn(gn(this._defaultOptions.merge(new un({body:t})),n,zt.Put,e)))},e.prototype.delete=function(e,t){return this.request(new cn(gn(this._defaultOptions,t,zt.Delete,e)))},e.prototype.patch=function(e,t,n){return this.request(new cn(gn(this._defaultOptions.merge(new un({body:t})),n,zt.Patch,e)))},e.prototype.head=function(e,t){return this.request(new cn(gn(this._defaultOptions,t,zt.Head,e)))},e.prototype.options=function(e,t){return this.request(new cn(gn(this._defaultOptions,t,zt.Options,e)))},e}();function _n(){return new sn}function bn(e,t){return new mn(e,t)}var wn,En=function(){},Cn=n("Ecq+"),xn=n("1j/l"),On=n("qgI0"),Sn=n("lI6h"),Tn=function(e){function t(t,n){e.call(this),this.sources=t,this.resultSelector=n}return Object(o.__extends)(t,e),t.create=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];if(null===e||0===arguments.length)return new Cn.a;var r=null;return"function"==typeof e[e.length-1]&&(r=e.pop()),1===e.length&&Object(xn.a)(e[0])&&(e=e[0]),0===e.length?new Cn.a:new t(e,r)},t.prototype._subscribe=function(e){return new kn(e,this.sources,this.resultSelector)},t}(ut.a),kn=function(e){function t(t,n,r){e.call(this,t),this.sources=n,this.resultSelector=r,this.completed=0,this.haveValues=0;var o=n.length;this.total=o,this.values=new Array(o);for(var i=0;i<o;i++){var s=n[i],a=Object(On.a)(this,s,null,i);a&&(a.outerIndex=i,this.add(a))}}return Object(o.__extends)(t,e),t.prototype.notifyNext=function(e,t,n,r,o){this.values[n]=t,o._hasValue||(o._hasValue=!0,this.haveValues++)},t.prototype.notifyComplete=function(e){var t=this.destination,n=this.haveValues,r=this.resultSelector,o=this.values,i=o.length;if(e._hasValue){if(this.completed++,this.completed===i){if(n===i){var s=r?r.apply(this,o):o;t.next(s)}t.complete()}}else t.complete()},t}(Sn.a),In=Tn.create,An=n("xIGM"),Rn=function(){function e(){this._accessors=[]}return e.prototype.add=function(e,t){this._accessors.push([e,t])},e.prototype.remove=function(e){for(var t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void this._accessors.splice(t,1)},e.prototype.select=function(e){var t=this;this._accessors.forEach(function(n){t._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)})},e.prototype._isSameGroup=function(e,t){return!!e[0].control&&e[0]._parent===t._control._parent&&e[1].name===t.name},e}(),Pn=function(){},Nn=function(){},Mn=(n("/Lkn"),new r.InjectionToken("cdk-dir-doc")),Dn=function(){return function(e){this.value="ltr",this.change=new r.EventEmitter,e&&(this.value=(e.body?e.body.dir:null)||(e.documentElement?e.documentElement.dir:null)||"ltr")}}(),jn=function(){},Fn=n("TO51"),Ln="undefined"!=typeof Intl&&Intl.v8BreakIterator,Vn=function(){return function(){this.isBrowser="object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Ln)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}();function Bn(){if(null==wn&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return wn=!0}}))}finally{wn=wn||!1}return wn}var Hn=function(){},zn=new r.InjectionToken("mat-sanity-checks"),Un=function(){function e(e){this._sanityChecksEnabled=e,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._hasDoneGlobalChecks=!0)}return e.prototype._areChecksEnabled=function(){return this._sanityChecksEnabled&&Object(r.isDevMode)()&&!this._isTestEnv()},e.prototype._isTestEnv=function(){return this._window&&(this._window.__karma__||this._window.jasmine)},e.prototype._checkDoctypeIsDefined=function(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")},e.prototype._checkThemeIsPresent=function(){if(this._document&&"function"==typeof getComputedStyle){var e=this._document.createElement("div");e.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(e);var t=getComputedStyle(e);t&&"none"!==t.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(e)}},e.prototype._checkHammerIsAvailable=function(){!this._hasCheckedHammer&&this._window&&(this._areChecksEnabled()&&!this._window.Hammer&&console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)},e}(),qn=function(){function e(){}return e.prototype.isErrorState=function(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))},e}(),Zn=function(){},Kn=function(){},Xn=function(){},Gn=function(e){function t(){var t=e.call(this,"argument out of range");this.name=t.name="ArgumentOutOfRangeError",this.stack=t.stack,this.message=t.message}return Object(o.__extends)(t,e),t}(Error);function Wn(e){return function(t){return 0===e?new Cn.a:t.lift(new Yn(e))}}var Yn=function(){function e(e){if(this.total=e,this.total<0)throw new Gn}return e.prototype.call=function(e,t){return t.subscribe(new Qn(e,this.total))},e}(),Qn=function(e){function t(t,n){e.call(this,t),this.total=n,this.count=0}return Object(o.__extends)(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(et.a),Jn=n("qLnt"),$n=function(e){function t(t,n){e.call(this,t,n),this.scheduler=t,this.work=n,this.pending=!1}return Object(o.__extends)(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e,this.pending=!0;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),An.a.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;An.a.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){e.call(this)}return Object(o.__extends)(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(Jn.a)),er=new(function(e){function t(){e.apply(this,arguments),this.actions=[],this.active=!1,this.scheduled=void 0}return Object(o.__extends)(t,e),t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=Date.now?Date.now:function(){return+new Date},e}()))($n);function tr(e,t,n){return function(r){return r.lift(new nr(e,t,n))}}var nr=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new rr(e,this.nextOrObserver,this.error,this.complete))},e}(),rr=function(e){function t(t,n,r,o){e.call(this,t);var i=new et.a(n,r,o);i.syncErrorThrowable=!0,this.add(i),this.safeSubscriber=i}return Object(o.__extends)(t,e),t.prototype._next=function(e){var t=this.safeSubscriber;t.next(e),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.next(e)},t.prototype._error=function(e){var t=this.safeSubscriber;t.error(e),this.destination.error(t.syncErrorThrown?t.syncErrorValue:e)},t.prototype._complete=function(){var e=this.safeSubscriber;e.complete(),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.complete()},t}(et.a),or=function(){function e(e){this._platform=e}return e.prototype.isDisabled=function(e){return e.hasAttribute("disabled")},e.prototype.isVisible=function(e){return function(e){return!!(e.offsetWidth||e.offsetHeight||"function"==typeof e.getClientRects&&e.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility},e.prototype.isTabbable=function(e){if(!this._platform.isBrowser)return!1;var t=function(e){try{return e.frameElement}catch(e){return null}}(e.ownerDocument.defaultView||window);if(t){var n=t&&t.nodeName.toLowerCase();if(-1===sr(t))return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&"object"===n)return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&!this.isVisible(t))return!1}var r=e.nodeName.toLowerCase(),o=sr(e);if(e.hasAttribute("contenteditable"))return-1!==o;if("iframe"===r)return!1;if("audio"===r){if(!e.hasAttribute("controls"))return!1;if(this._platform.BLINK)return!0}if("video"===r){if(!e.hasAttribute("controls")&&this._platform.TRIDENT)return!1;if(this._platform.BLINK||this._platform.FIREFOX)return!0}return("object"!==r||!this._platform.BLINK&&!this._platform.WEBKIT)&&!(this._platform.WEBKIT&&this._platform.IOS&&!function(e){var t=e.nodeName.toLowerCase(),n="input"===t&&e.type;return"text"===n||"password"===n||"select"===t||"textarea"===t}(e))&&e.tabIndex>=0},e.prototype.isFocusable=function(e){return function(e){return!function(e){return function(e){return"input"==e.nodeName.toLowerCase()}(e)&&"hidden"==e.type}(e)&&(function(e){var t=e.nodeName.toLowerCase();return"input"===t||"select"===t||"button"===t||"textarea"===t}(e)||function(e){return function(e){return"a"==e.nodeName.toLowerCase()}(e)&&e.hasAttribute("href")}(e)||e.hasAttribute("contenteditable")||ir(e))}(e)&&!this.isDisabled(e)&&this.isVisible(e)},e}();function ir(e){if(!e.hasAttribute("tabindex")||void 0===e.tabIndex)return!1;var t=e.getAttribute("tabindex");return"-32768"!=t&&!(!t||isNaN(parseInt(t,10)))}function sr(e){if(!ir(e))return null;var t=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}var ar=function(){function e(e,t,n,r,o){void 0===o&&(o=!1),this._element=e,this._checker=t,this._ngZone=n,this._document=r,this._enabled=!0,o||this.attachAnchors()}return Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._startAnchor.tabIndex=this._endAnchor.tabIndex=this._enabled?0:-1)},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._startAnchor&&this._startAnchor.parentNode&&this._startAnchor.parentNode.removeChild(this._startAnchor),this._endAnchor&&this._endAnchor.parentNode&&this._endAnchor.parentNode.removeChild(this._endAnchor),this._startAnchor=this._endAnchor=null},e.prototype.attachAnchors=function(){var e=this;this._startAnchor||(this._startAnchor=this._createAnchor()),this._endAnchor||(this._endAnchor=this._createAnchor()),this._ngZone.runOutsideAngular(function(){e._startAnchor.addEventListener("focus",function(){e.focusLastTabbableElement()}),e._endAnchor.addEventListener("focus",function(){e.focusFirstTabbableElement()}),e._element.parentNode&&(e._element.parentNode.insertBefore(e._startAnchor,e._element),e._element.parentNode.insertBefore(e._endAnchor,e._element.nextSibling))})},e.prototype.focusInitialElementWhenReady=function(){var e=this;return new Promise(function(t){e._executeOnStable(function(){return t(e.focusInitialElement())})})},e.prototype.focusFirstTabbableElementWhenReady=function(){var e=this;return new Promise(function(t){e._executeOnStable(function(){return t(e.focusFirstTabbableElement())})})},e.prototype.focusLastTabbableElementWhenReady=function(){var e=this;return new Promise(function(t){e._executeOnStable(function(){return t(e.focusLastTabbableElement())})})},e.prototype._getRegionBoundary=function(e){for(var t=this._element.querySelectorAll("[cdk-focus-region-"+e+"], [cdkFocusRegion"+e+"], [cdk-focus-"+e+"]"),n=0;n<t.length;n++)t[n].hasAttribute("cdk-focus-"+e)?console.warn("Found use of deprecated attribute 'cdk-focus-"+e+"', use 'cdkFocusRegion"+e+"' instead.",t[n]):t[n].hasAttribute("cdk-focus-region-"+e)&&console.warn("Found use of deprecated attribute 'cdk-focus-region-"+e+"', use 'cdkFocusRegion"+e+"' instead.",t[n]);return"start"==e?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)},e.prototype.focusInitialElement=function(){var e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");return this._element.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead.",this._element),e?(e.focus(),!0):this.focusFirstTabbableElement()},e.prototype.focusFirstTabbableElement=function(){var e=this._getRegionBoundary("start");return e&&e.focus(),!!e},e.prototype.focusLastTabbableElement=function(){var e=this._getRegionBoundary("end");return e&&e.focus(),!!e},e.prototype._getFirstTabbableElement=function(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;for(var t=e.children||e.childNodes,n=0;n<t.length;n++){var r=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(r)return r}return null},e.prototype._getLastTabbableElement=function(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;for(var t=e.children||e.childNodes,n=t.length-1;n>=0;n--){var r=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(r)return r}return null},e.prototype._createAnchor=function(){var e=this._document.createElement("div");return e.tabIndex=this._enabled?0:-1,e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e},e.prototype._executeOnStable=function(e){this._ngZone.isStable?e():this._ngZone.onStable.asObservable().pipe(Wn(1)).subscribe(e)},e}(),ur=function(){function e(e,t,n){this._checker=e,this._ngZone=t,this._document=n}return e.prototype.create=function(e,t){return void 0===t&&(t=!1),new ar(e,this._checker,this._ngZone,this._document,t)},e}();function lr(e,t){return(e.getAttribute(t)||"").match(/\S+/g)||[]}var cr=0,dr=new Map,pr=null,fr=function(){function e(e){this._document=e}return e.prototype.describe=function(e,t){this._canBeDescribed(e,t)&&(dr.has(t)||this._createMessageElement(t),this._isElementDescribedByMessage(e,t)||this._addMessageReference(e,t))},e.prototype.removeDescription=function(e,t){if(this._canBeDescribed(e,t)){this._isElementDescribedByMessage(e,t)&&this._removeMessageReference(e,t);var n=dr.get(t);n&&0===n.referenceCount&&this._deleteMessageElement(t),pr&&0===pr.childNodes.length&&this._deleteMessagesContainer()}},e.prototype.ngOnDestroy=function(){for(var e=this._document.querySelectorAll("[cdk-describedby-host]"),t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute("cdk-describedby-host");pr&&this._deleteMessagesContainer(),dr.clear()},e.prototype._createMessageElement=function(e){var t=this._document.createElement("div");t.setAttribute("id","cdk-describedby-message-"+cr++),t.appendChild(this._document.createTextNode(e)),pr||this._createMessagesContainer(),pr.appendChild(t),dr.set(e,{messageElement:t,referenceCount:0})},e.prototype._deleteMessageElement=function(e){var t=dr.get(e),n=t&&t.messageElement;pr&&n&&pr.removeChild(n),dr.delete(e)},e.prototype._createMessagesContainer=function(){(pr=this._document.createElement("div")).setAttribute("id","cdk-describedby-message-container"),pr.setAttribute("aria-hidden","true"),pr.style.display="none",this._document.body.appendChild(pr)},e.prototype._deleteMessagesContainer=function(){pr&&pr.parentNode&&(pr.parentNode.removeChild(pr),pr=null)},e.prototype._removeCdkDescribedByReferenceIds=function(e){var t=lr(e,"aria-describedby").filter(function(e){return 0!=e.indexOf("cdk-describedby-message")});e.setAttribute("aria-describedby",t.join(" "))},e.prototype._addMessageReference=function(e,t){var n,r,o,i,s=dr.get(t);o=s.messageElement.id,(i=lr(n=e,r="aria-describedby")).some(function(e){return e.trim()==o.trim()})||(i.push(o.trim()),n.setAttribute(r,i.join(" "))),e.setAttribute("cdk-describedby-host",""),s.referenceCount++},e.prototype._removeMessageReference=function(e,t){var n,r,o,i,s=dr.get(t);s.referenceCount--,o=s.messageElement.id,i=lr(n=e,r="aria-describedby").filter(function(e){return e!=o.trim()}),n.setAttribute(r,i.join(" ")),e.removeAttribute("cdk-describedby-host")},e.prototype._isElementDescribedByMessage=function(e,t){var n=lr(e,"aria-describedby"),r=dr.get(t),o=r&&r.messageElement.id;return!!o&&-1!=n.indexOf(o)},e.prototype._canBeDescribed=function(e,t){return e.nodeType===this._document.ELEMENT_NODE&&null!=t&&!!(""+t).trim()},e}();function hr(e,t){return e||new fr(t)}var vr=new r.InjectionToken("liveAnnouncerElement"),yr=function(){function e(e,t){this._document=t,this._liveElement=e||this._createLiveElement()}return e.prototype.announce=function(e,t){var n=this;return void 0===t&&(t="polite"),this._liveElement.textContent="",this._liveElement.setAttribute("aria-live",t),new Promise(function(t){setTimeout(function(){n._liveElement.textContent=e,t()},100)})},e.prototype.ngOnDestroy=function(){this._liveElement&&this._liveElement.parentNode&&this._liveElement.parentNode.removeChild(this._liveElement)},e.prototype._createLiveElement=function(){var e=this._document.createElement("div");return e.classList.add("cdk-visually-hidden"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),this._document.body.appendChild(e),e},e}();function gr(e,t,n){return e||new yr(t,n)}var mr=function(){function e(e,t){this._ngZone=e,this._platform=t,this._origin=null,this._windowFocused=!1,this._elementInfo=new Map,this._unregisterGlobalListeners=function(){},this._monitoredElementCount=0}return e.prototype.monitor=function(e,t,n){var o=this;if(t instanceof r.Renderer2||(n=t),n=!!n,!this._platform.isBrowser)return Je(null);if(this._elementInfo.has(e)){var i=this._elementInfo.get(e);return i.checkChildren=n,i.subject.asObservable()}var s={unlisten:function(){},checkChildren:n,subject:new Fn.a};this._elementInfo.set(e,s),this._incrementMonitoredElementCount();var a=function(t){return o._onFocus(t,e)},u=function(t){return o._onBlur(t,e)};return this._ngZone.runOutsideAngular(function(){e.addEventListener("focus",a,!0),e.addEventListener("blur",u,!0)}),s.unlisten=function(){e.removeEventListener("focus",a,!0),e.removeEventListener("blur",u,!0)},s.subject.asObservable()},e.prototype.stopMonitoring=function(e){var t=this._elementInfo.get(e);t&&(t.unlisten(),t.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._decrementMonitoredElementCount())},e.prototype.focusVia=function(e,t){this._setOriginForCurrentEventQueue(t),e.focus()},e.prototype.ngOnDestroy=function(){var e=this;this._elementInfo.forEach(function(t,n){return e.stopMonitoring(n)})},e.prototype._registerGlobalListeners=function(){var e=this;if(this._platform.isBrowser){var t=function(){e._lastTouchTarget=null,e._setOriginForCurrentEventQueue("keyboard")},n=function(){e._lastTouchTarget||e._setOriginForCurrentEventQueue("mouse")},r=function(t){null!=e._touchTimeoutId&&clearTimeout(e._touchTimeoutId),e._lastTouchTarget=t.target,e._touchTimeoutId=setTimeout(function(){return e._lastTouchTarget=null},650)},o=function(){e._windowFocused=!0,e._windowFocusTimeoutId=setTimeout(function(){return e._windowFocused=!1},0)};this._ngZone.runOutsideAngular(function(){document.addEventListener("keydown",t,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("touchstart",r,!Bn()||{passive:!0,capture:!0}),window.addEventListener("focus",o)}),this._unregisterGlobalListeners=function(){document.removeEventListener("keydown",t,!0),document.removeEventListener("mousedown",n,!0),document.removeEventListener("touchstart",r,!Bn()||{passive:!0,capture:!0}),window.removeEventListener("focus",o),clearTimeout(e._windowFocusTimeoutId),clearTimeout(e._touchTimeoutId),clearTimeout(e._originTimeoutId)}}},e.prototype._toggleClass=function(e,t,n){n?e.classList.add(t):e.classList.remove(t)},e.prototype._setClasses=function(e,t){this._elementInfo.get(e)&&(this._toggleClass(e,"cdk-focused",!!t),this._toggleClass(e,"cdk-touch-focused","touch"===t),this._toggleClass(e,"cdk-keyboard-focused","keyboard"===t),this._toggleClass(e,"cdk-mouse-focused","mouse"===t),this._toggleClass(e,"cdk-program-focused","program"===t))},e.prototype._setOriginForCurrentEventQueue=function(e){var t=this;this._origin=e,this._originTimeoutId=setTimeout(function(){return t._origin=null},0)},e.prototype._wasCausedByTouch=function(e){var t=e.target;return this._lastTouchTarget instanceof Node&&t instanceof Node&&(t===this._lastTouchTarget||t.contains(this._lastTouchTarget))},e.prototype._onFocus=function(e,t){var n=this._elementInfo.get(t);n&&(n.checkChildren||t===e.target)&&(this._origin||(this._origin=this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:this._wasCausedByTouch(e)?"touch":"program"),this._setClasses(t,this._origin),n.subject.next(this._origin),this._lastFocusOrigin=this._origin,this._origin=null)},e.prototype._onBlur=function(e,t){var n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),n.subject.next(null))},e.prototype._incrementMonitoredElementCount=function(){1==++this._monitoredElementCount&&this._registerGlobalListeners()},e.prototype._decrementMonitoredElementCount=function(){--this._monitoredElementCount||(this._unregisterGlobalListeners(),this._unregisterGlobalListeners=function(){})},e}();function _r(e,t,n){return e||new mr(t,n)}var br=function(){},wr=n("8ofh"),Er=n("B1iP"),Cr=n("NePw"),xr=Object.prototype.toString,Or=function(e){function t(t,n,r,o){e.call(this),this.sourceObj=t,this.eventName=n,this.selector=r,this.options=o}return Object(o.__extends)(t,e),t.create=function(e,n,r,o){return Object(Er.a)(r)&&(o=r,r=void 0),new t(e,n,o,r)},t.setupSubscription=function(e,n,r,o,i){var s;if(function(e){return!!e&&"[object NodeList]"===xr.call(e)}(e)||function(e){return!!e&&"[object HTMLCollection]"===xr.call(e)}(e))for(var a=0,u=e.length;a<u;a++)t.setupSubscription(e[a],n,r,o,i);else if(function(e){return!!e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(e)){var l=e;e.addEventListener(n,r,i),s=function(){return l.removeEventListener(n,r,i)}}else if(function(e){return!!e&&"function"==typeof e.on&&"function"==typeof e.off}(e)){var c=e;e.on(n,r),s=function(){return c.off(n,r)}}else{if(!function(e){return!!e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(e))throw new TypeError("Invalid event target");var d=e;e.addListener(n,r),s=function(){return d.removeListener(n,r)}}o.add(new Jn.a(s))},t.prototype._subscribe=function(e){var n=this.selector;t.setupSubscription(this.sourceObj,this.eventName,n?function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];var o=Object(wr.a)(n).apply(void 0,t);o===Cr.a?e.error(Cr.a.e):e.next(o)}:function(t){return e.next(t)},e,this.options)},t}(ut.a).create,Sr=function(){function e(e){this.durationSelector=e}return e.prototype.call=function(e,t){return t.subscribe(new Tr(e,this.durationSelector))},e}(),Tr=function(e){function t(t,n){e.call(this,t),this.durationSelector=n,this.hasValue=!1}return Object(o.__extends)(t,e),t.prototype._next=function(e){if(this.value=e,this.hasValue=!0,!this.throttled){var t=Object(wr.a)(this.durationSelector)(e);if(t===Cr.a)this.destination.error(Cr.a.e);else{var n=Object(On.a)(this,t);n.closed?this.clearThrottle():this.add(this.throttled=n)}}},t.prototype.clearThrottle=function(){var e=this.value,t=this.hasValue,n=this.throttled;n&&(this.remove(n),this.throttled=null,n.unsubscribe()),t&&(this.value=null,this.hasValue=!1,this.destination.next(e))},t.prototype.notifyNext=function(e,t,n,r){this.clearThrottle()},t.prototype.notifyComplete=function(){this.clearThrottle()},t}(Sn.a),kr=n("3iOE"),Ir=function(e){function t(t,n,r){var o,i;void 0===t&&(t=0),e.call(this),this.period=-1,this.dueTime=0,o=n,!Object(xn.a)(o)&&o-parseFloat(o)+1>=0?this.period=Number(n)<1?1:Number(n):Object(kr.a)(n)&&(r=n),Object(kr.a)(r)||(r=er),this.scheduler=r,this.dueTime=(i=t)instanceof Date&&!isNaN(+i)?+t-this.scheduler.now():t}return Object(o.__extends)(t,e),t.create=function(e,n,r){return void 0===e&&(e=0),new t(e,n,r)},t.dispatch=function(e){var t=e.index,n=e.period,r=e.subscriber;if(r.next(t),!r.closed){if(-1===n)return r.complete();e.index=t+1,this.schedule(e,n)}},t.prototype._subscribe=function(e){return this.scheduler.schedule(t.dispatch,this.dueTime,{index:0,period:this.period,subscriber:e})},t}(ut.a).create;function Ar(e,t){return void 0===t&&(t=er),n=function(){return Ir(e,t)},function(e){return e.lift(new Sr(n))};var n}var Rr=n("2kLc"),Pr=function(){function e(e,t){this._ngZone=e,this._platform=t,this._scrolled=new Fn.a,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map}return e.prototype.register=function(e){var t=this,n=e.elementScrolled().subscribe(function(){return t._scrolled.next(e)});this.scrollContainers.set(e,n)},e.prototype.deregister=function(e){var t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))},e.prototype.scrolled=function(e){var t=this;return void 0===e&&(e=20),this._platform.isBrowser?ut.a.create(function(n){t._globalSubscription||t._addGlobalListener();var r=e>0?t._scrolled.pipe(Ar(e)).subscribe(n):t._scrolled.subscribe(n);return t._scrolledCount++,function(){r.unsubscribe(),t._scrolledCount--,t._scrolledCount||t._removeGlobalListener()}}):Je()},e.prototype.ngOnDestroy=function(){var e=this;this._removeGlobalListener(),this.scrollContainers.forEach(function(t,n){return e.deregister(n)})},e.prototype.ancestorScrolled=function(e,t){var n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(tt(function(e){return!e||n.indexOf(e)>-1}))},e.prototype.getAncestorScrollContainers=function(e){var t=this,n=[];return this.scrollContainers.forEach(function(r,o){t._scrollableContainsElement(o,e)&&n.push(o)}),n},e.prototype._scrollableContainsElement=function(e,t){var n=t.nativeElement,r=e.getElementRef().nativeElement;do{if(n==r)return!0}while(n=n.parentElement);return!1},e.prototype._addGlobalListener=function(){var e=this;this._globalSubscription=this._ngZone.runOutsideAngular(function(){return Or(window.document,"scroll").subscribe(function(){return e._scrolled.next()})})},e.prototype._removeGlobalListener=function(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)},e}();function Nr(e,t,n){return e||new Pr(t,n)}var Mr=function(){function e(e,t){var n=this;this._platform=e,this._change=e.isBrowser?t.runOutsideAngular(function(){return Object(Rr.a)(Or(window,"resize"),Or(window,"orientationchange"))}):Je(),this._invalidateCache=this.change().subscribe(function(){return n._updateViewportSize()})}return e.prototype.ngOnDestroy=function(){this._invalidateCache.unsubscribe()},e.prototype.getViewportSize=function(){this._viewportSize||this._updateViewportSize();var e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e},e.prototype.getViewportRect=function(){var e=this.getViewportScrollPosition(),t=this.getViewportSize(),n=t.width,r=t.height;return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}},e.prototype.getViewportScrollPosition=function(){if(!this._platform.isBrowser)return{top:0,left:0};var e=document.documentElement.getBoundingClientRect();return{top:-e.top||document.body.scrollTop||window.scrollY||document.documentElement.scrollTop||0,left:-e.left||document.body.scrollLeft||window.scrollX||document.documentElement.scrollLeft||0}},e.prototype.change=function(e){return void 0===e&&(e=20),e>0?this._change.pipe(Ar(e)):this._change},e.prototype._updateViewportSize=function(){this._viewportSize=this._platform.isBrowser?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0}},e}();function Dr(e,t,n){return e||new Mr(t,n)}var jr=function(){};function Fr(){throw Error("Host already has a portal attached")}var Lr=function(){function e(){}return e.prototype.attach=function(e){return null==e&&function(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),e.hasAttached()&&Fr(),this._attachedHost=e,e.attach(this)},e.prototype.detach=function(){var e=this._attachedHost;null==e?function(){throw Error("Attempting to detach a portal that is not attached to a host")}():(this._attachedHost=null,e.detach())},Object.defineProperty(e.prototype,"isAttached",{get:function(){return null!=this._attachedHost},enumerable:!0,configurable:!0}),e.prototype.setAttachedHost=function(e){this._attachedHost=e},e}(),Vr=function(e){function t(t,n,r){var o=e.call(this)||this;return o.component=t,o.viewContainerRef=n,o.injector=r,o}return Object(o.__extends)(t,e),t}(Lr),Br=function(e){function t(t,n,r){var o=e.call(this)||this;return o.templateRef=t,o.viewContainerRef=n,o.context=r,o}return Object(o.__extends)(t,e),Object.defineProperty(t.prototype,"origin",{get:function(){return this.templateRef.elementRef},enumerable:!0,configurable:!0}),t.prototype.attach=function(t,n){return void 0===n&&(n=this.context),this.context=n,e.prototype.attach.call(this,t)},t.prototype.detach=function(){return this.context=void 0,e.prototype.detach.call(this)},t}(Lr),Hr=function(e){function t(t,n,r,o){var i=e.call(this)||this;return i.outletElement=t,i._componentFactoryResolver=n,i._appRef=r,i._defaultInjector=o,i}return Object(o.__extends)(t,e),t.prototype.attachComponentPortal=function(e){var t,n=this,r=this._componentFactoryResolver.resolveComponentFactory(e.component);return e.viewContainerRef?(t=e.viewContainerRef.createComponent(r,e.viewContainerRef.length,e.injector||e.viewContainerRef.parentInjector),this.setDisposeFn(function(){return t.destroy()})):(t=r.create(e.injector||this._defaultInjector),this._appRef.attachView(t.hostView),this.setDisposeFn(function(){n._appRef.detachView(t.hostView),t.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(t)),t},t.prototype.attachTemplatePortal=function(e){var t=this,n=e.viewContainerRef,r=n.createEmbeddedView(e.templateRef,e.context);return r.detectChanges(),r.rootNodes.forEach(function(e){return t.outletElement.appendChild(e)}),this.setDisposeFn(function(){var e=n.indexOf(r);-1!==e&&n.remove(e)}),r},t.prototype.dispose=function(){e.prototype.dispose.call(this),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)},t.prototype._getComponentRootNode=function(e){return e.hostView.rootNodes[0]},t}(function(){function e(){this._isDisposed=!1}return e.prototype.hasAttached=function(){return!!this._attachedPortal},e.prototype.attach=function(e){return e||function(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&Fr(),this._isDisposed&&function(){throw Error("This PortalOutlet has already been disposed")}(),e instanceof Vr?(this._attachedPortal=e,this.attachComponentPortal(e)):e instanceof Br?(this._attachedPortal=e,this.attachTemplatePortal(e)):void function(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}()},e.prototype.detach=function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()},e.prototype.dispose=function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0},e.prototype.setDisposeFn=function(e){this._disposeFn=e},e.prototype._invokeDisposeFn=function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)},e}()),zr=function(){},Ur=function(){function e(){}return e.prototype.enable=function(){},e.prototype.disable=function(){},e.prototype.attach=function(){},e}(),qr=function(){return function(e){var t=this;this.scrollStrategy=new Ur,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.direction="ltr",e&&Object.keys(e).filter(function(t){return void 0!==e[t]}).forEach(function(n){return t[n]=e[n]})}}();function Zr(){return Error("Scroll strategy has already been attached.")}var Kr=function(){function e(e,t,n,r){var o=this;this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=r,this._scrollSubscription=null,this._detach=function(){o.disable(),o._overlayRef.hasAttached()&&o._ngZone.run(function(){return o._overlayRef.detach()})}}return e.prototype.attach=function(e){if(this._overlayRef)throw Zr();this._overlayRef=e},e.prototype.enable=function(){var e=this;if(!this._scrollSubscription){var t=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(function(){var t=e._viewportRuler.getViewportScrollPosition().top;Math.abs(t-e._initialScrollPosition)>e._config.threshold?e._detach():e._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}},e.prototype.disable=function(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)},e}(),Xr=function(){function e(e,t){this._viewportRuler=e,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=t}return e.prototype.attach=function(){},e.prototype.enable=function(){if(this._canBeEnabled()){var e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=-this._previousScrollPosition.left+"px",e.style.top=-this._previousScrollPosition.top+"px",e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}},e.prototype.disable=function(){if(this._isEnabled){var e=this._document.documentElement,t=this._document.body,n=e.style.scrollBehavior||"",r=t.style.scrollBehavior||"";this._isEnabled=!1,e.style.left=this._previousHTMLStyles.left,e.style.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),e.style.scrollBehavior=t.style.scrollBehavior="auto",window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),e.style.scrollBehavior=n,t.style.scrollBehavior=r}},e.prototype._canBeEnabled=function(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;var e=this._document.body,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width},e}();function Gr(e,t){return t.some(function(t){return e.bottom<t.top||e.top>t.bottom||e.right<t.left||e.left>t.right})}function Wr(e,t){return t.some(function(t){return e.top<t.top||e.bottom>t.bottom||e.left<t.left||e.right>t.right})}var Yr=function(){function e(e,t,n,r){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=r,this._scrollSubscription=null}return e.prototype.attach=function(e){if(this._overlayRef)throw Zr();this._overlayRef=e},e.prototype.enable=function(){var e=this;this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(function(){if(e._overlayRef.updatePosition(),e._config&&e._config.autoClose){var t=e._overlayRef.overlayElement.getBoundingClientRect(),n=e._viewportRuler.getViewportSize(),r=n.width,o=n.height;Gr(t,[{width:r,height:o,bottom:o,right:r,top:0,left:0}])&&(e.disable(),e._ngZone.run(function(){return e._overlayRef.detach()}))}}))},e.prototype.disable=function(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)},e}(),Qr=function(){return function(e,t,n,r){var o=this;this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this.noop=function(){return new Ur},this.close=function(e){return new Kr(o._scrollDispatcher,o._ngZone,o._viewportRuler,e)},this.block=function(){return new Xr(o._viewportRuler,o._document)},this.reposition=function(e){return new Yr(o._scrollDispatcher,o._viewportRuler,o._ngZone,e)},this._document=r}}(),Jr=function(){function e(e,t,n,r,o,i){this._portalOutlet=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=o,this._document=i,this._backdropElement=null,this._backdropClick=new Fn.a,this._attachments=new Fn.a,this._detachments=new Fn.a,this._keydownEvents=new Fn.a,n.scrollStrategy&&n.scrollStrategy.attach(this)}return Object.defineProperty(e.prototype,"overlayElement",{get:function(){return this._pane},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backdropElement",{get:function(){return this._backdropElement},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){var t=this,n=this._portalOutlet.attach(e);return this._config.positionStrategy&&this._config.positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._config.scrollStrategy&&this._config.scrollStrategy.enable(),this._ngZone.onStable.asObservable().pipe(Wn(1)).subscribe(function(){t.hasAttached()&&t.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&(Array.isArray(this._config.panelClass)?this._config.panelClass.forEach(function(e){return t._pane.classList.add(e)}):this._pane.classList.add(this._config.panelClass)),this._attachments.next(),this._keyboardDispatcher.add(this),n},e.prototype.detach=function(){if(this.hasAttached()){this.detachBackdrop(),this._togglePointerEvents(!1),this._config.positionStrategy&&this._config.positionStrategy.detach&&this._config.positionStrategy.detach(),this._config.scrollStrategy&&this._config.scrollStrategy.disable();var e=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),e}},e.prototype.dispose=function(){var e=this.hasAttached();this._config.positionStrategy&&this._config.positionStrategy.dispose(),this._config.scrollStrategy&&this._config.scrollStrategy.disable(),this.detachBackdrop(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),e&&this._detachments.next(),this._detachments.complete()},e.prototype.hasAttached=function(){return this._portalOutlet.hasAttached()},e.prototype.backdropClick=function(){return this._backdropClick.asObservable()},e.prototype.attachments=function(){return this._attachments.asObservable()},e.prototype.detachments=function(){return this._detachments.asObservable()},e.prototype.keydownEvents=function(){return this._keydownEvents.asObservable()},e.prototype.getConfig=function(){return this._config},e.prototype.updatePosition=function(){this._config.positionStrategy&&this._config.positionStrategy.apply()},e.prototype.updateSize=function(e){this._config=Object(o.__assign)({},this._config,e),this._updateElementSize()},e.prototype.setDirection=function(e){this._config=Object(o.__assign)({},this._config,{direction:e}),this._updateElementDirection()},e.prototype._updateElementDirection=function(){this._pane.setAttribute("dir",this._config.direction)},e.prototype._updateElementSize=function(){(this._config.width||0===this._config.width)&&(this._pane.style.width=$r(this._config.width)),(this._config.height||0===this._config.height)&&(this._pane.style.height=$r(this._config.height)),(this._config.minWidth||0===this._config.minWidth)&&(this._pane.style.minWidth=$r(this._config.minWidth)),(this._config.minHeight||0===this._config.minHeight)&&(this._pane.style.minHeight=$r(this._config.minHeight)),(this._config.maxWidth||0===this._config.maxWidth)&&(this._pane.style.maxWidth=$r(this._config.maxWidth)),(this._config.maxHeight||0===this._config.maxHeight)&&(this._pane.style.maxHeight=$r(this._config.maxHeight))},e.prototype._togglePointerEvents=function(e){this._pane.style.pointerEvents=e?"auto":"none"},e.prototype._attachBackdrop=function(){var e=this;this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._config.backdropClass&&this._backdropElement.classList.add(this._config.backdropClass),this._pane.parentElement.insertBefore(this._backdropElement,this._pane),this._backdropElement.addEventListener("click",function(t){return e._backdropClick.next(t)}),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(function(){requestAnimationFrame(function(){e._backdropElement&&e._backdropElement.classList.add("cdk-overlay-backdrop-showing")})}):this._backdropElement.classList.add("cdk-overlay-backdrop-showing")},e.prototype._updateStackingOrder=function(){this._pane.nextSibling&&this._pane.parentNode.appendChild(this._pane)},e.prototype.detachBackdrop=function(){var e=this,t=this._backdropElement;if(t){var n=function(){t&&t.parentNode&&t.parentNode.removeChild(t),e._backdropElement==t&&(e._backdropElement=null)};t.classList.remove("cdk-overlay-backdrop-showing"),this._config.backdropClass&&t.classList.remove(this._config.backdropClass),t.addEventListener("transitionend",n),t.style.pointerEvents="none",this._ngZone.runOutsideAngular(function(){setTimeout(n,500)})}},e}();function $r(e){return"string"==typeof e?e:e+"px"}var eo=function(){function e(e,t,n,r,o){this._connectedTo=n,this._viewportRuler=r,this._document=o,this._dir="ltr",this._offsetX=0,this._offsetY=0,this.scrollables=[],this._resizeSubscription=Jn.a.EMPTY,this._preferredPositions=[],this._applied=!1,this._positionLocked=!1,this._onPositionChange=new Fn.a,this._origin=this._connectedTo.nativeElement,this.withFallbackPosition(e,t)}return Object.defineProperty(e.prototype,"_isRtl",{get:function(){return"rtl"===this._dir},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onPositionChange",{get:function(){return this._onPositionChange.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positions",{get:function(){return this._preferredPositions},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){var t=this;this._pane=e.overlayElement,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(function(){return t.apply()})},e.prototype.dispose=function(){this._applied=!1,this._resizeSubscription.unsubscribe(),this._onPositionChange.complete()},e.prototype.detach=function(){this._applied=!1,this._resizeSubscription.unsubscribe()},e.prototype.apply=function(){if(this._applied&&this._positionLocked&&this._lastConnectedPosition)this.recalculateLastPosition();else{this._applied=!0;for(var e,t,n=this._pane,r=this._origin.getBoundingClientRect(),o=n.getBoundingClientRect(),i=this._viewportRuler.getViewportSize(),s=0,a=this._preferredPositions;s<a.length;s++){var u=a[s],l=this._getOriginConnectionPoint(r,u),c=this._getOverlayPoint(l,o,i,u);if(c.fitsInViewport)return this._setElementPosition(n,o,c,u),void(this._lastConnectedPosition=u);(!e||e.visibleArea<c.visibleArea)&&(e=c,t=u)}this._setElementPosition(n,o,e,t)}},e.prototype.recalculateLastPosition=function(){if(this._lastConnectedPosition){var e=this._origin.getBoundingClientRect(),t=this._pane.getBoundingClientRect(),n=this._viewportRuler.getViewportSize(),r=this._lastConnectedPosition||this._preferredPositions[0],o=this._getOriginConnectionPoint(e,r),i=this._getOverlayPoint(o,t,n,r);this._setElementPosition(this._pane,t,i,r)}},e.prototype.withScrollableContainers=function(e){this.scrollables=e},e.prototype.withFallbackPosition=function(e,t,n,r){var o=new function(e,t,n,r){this.offsetX=n,this.offsetY=r,this.originX=e.originX,this.originY=e.originY,this.overlayX=t.overlayX,this.overlayY=t.overlayY}(e,t,n,r);return this._preferredPositions.push(o),this},e.prototype.withDirection=function(e){return this._dir=e,this},e.prototype.withOffsetX=function(e){return this._offsetX=e,this},e.prototype.withOffsetY=function(e){return this._offsetY=e,this},e.prototype.withLockedPosition=function(e){return this._positionLocked=e,this},e.prototype.withPositions=function(e){return this._preferredPositions=e.slice(),this},e.prototype.setOrigin=function(e){return this._origin=e.nativeElement,this},e.prototype._getStartX=function(e){return this._isRtl?e.right:e.left},e.prototype._getEndX=function(e){return this._isRtl?e.left:e.right},e.prototype._getOriginConnectionPoint=function(e,t){var n=this._getStartX(e),r=this._getEndX(e);return{x:"center"==t.originX?n+e.width/2:"start"==t.originX?n:r,y:"center"==t.originY?e.top+e.height/2:"top"==t.originY?e.top:e.bottom}},e.prototype._getOverlayPoint=function(e,t,n,r){var o=e.x+("center"==r.overlayX?-t.width/2:"start"===r.overlayX?this._isRtl?-t.width:0:this._isRtl?0:-t.width)+(void 0===r.offsetX?this._offsetX:r.offsetX),i=e.y+("center"==r.overlayY?-t.height/2:"top"==r.overlayY?0:-t.height)+(void 0===r.offsetY?this._offsetY:r.offsetY),s=0-i,a=i+t.height-n.height,u=this._subtractOverflows(t.width,0-o,o+t.width-n.width)*this._subtractOverflows(t.height,s,a);return{x:o,y:i,fitsInViewport:t.width*t.height===u,visibleArea:u}},e.prototype._getScrollVisibility=function(e){var t=this._origin.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.scrollables.map(function(e){return e.getElementRef().nativeElement.getBoundingClientRect()});return{isOriginClipped:Wr(t,r),isOriginOutsideView:Gr(t,r),isOverlayClipped:Wr(n,r),isOverlayOutsideView:Gr(n,r)}},e.prototype._setElementPosition=function(e,t,n,r){var o,i="bottom"===r.overlayY?"bottom":"top",s="top"===i?n.y:this._document.documentElement.clientHeight-(n.y+t.height),a="left"==(o="rtl"===this._dir?"end"===r.overlayX?"left":"right":"end"===r.overlayX?"right":"left")?n.x:this._document.documentElement.clientWidth-(n.x+t.width);["top","bottom","left","right"].forEach(function(t){return e.style[t]=null}),e.style[i]=s+"px",e.style[o]=a+"px";var u=new function(e,t){this.connectionPair=e,this.scrollableViewProperties=t}(r,this._getScrollVisibility(e));this._onPositionChange.next(u)},e.prototype._subtractOverflows=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(e,t){return e-Math.max(t,0)},e)},e}(),to=function(){function e(e){this._document=e,this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._leftOffset="",this._rightOffset="",this._alignItems="",this._justifyContent="",this._width="",this._height="",this._wrapper=null}return e.prototype.attach=function(e){var t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height})},e.prototype.top=function(e){return void 0===e&&(e=""),this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this},e.prototype.left=function(e){return void 0===e&&(e=""),this._rightOffset="",this._leftOffset=e,this._justifyContent="flex-start",this},e.prototype.bottom=function(e){return void 0===e&&(e=""),this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this},e.prototype.right=function(e){return void 0===e&&(e=""),this._leftOffset="",this._rightOffset=e,this._justifyContent="flex-end",this},e.prototype.width=function(e){return void 0===e&&(e=""),this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this},e.prototype.height=function(e){return void 0===e&&(e=""),this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this},e.prototype.centerHorizontally=function(e){return void 0===e&&(e=""),this.left(e),this._justifyContent="center",this},e.prototype.centerVertically=function(e){return void 0===e&&(e=""),this.top(e),this._alignItems="center",this},e.prototype.apply=function(){if(this._overlayRef.hasAttached()){var e=this._overlayRef.overlayElement;!this._wrapper&&e.parentNode&&(this._wrapper=this._document.createElement("div"),this._wrapper.classList.add("cdk-global-overlay-wrapper"),e.parentNode.insertBefore(this._wrapper,e),this._wrapper.appendChild(e));var t=e.style,n=e.parentNode.style,r=this._overlayRef.getConfig();t.position=this._cssPosition,t.marginLeft="100%"===r.width?"0":this._leftOffset,t.marginTop="100%"===r.height?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=this._rightOffset,n.justifyContent="100%"===r.width?"flex-start":this._justifyContent,n.alignItems="100%"===r.height?"flex-start":this._alignItems}},e.prototype.dispose=function(){this._wrapper&&this._wrapper.parentNode&&(this._wrapper.parentNode.removeChild(this._wrapper),this._wrapper=null)},e}(),no=function(){function e(e,t){this._viewportRuler=e,this._document=t}return e.prototype.global=function(){return new to(this._document)},e.prototype.connectedTo=function(e,t,n){return new eo(t,n,e,this._viewportRuler,this._document)},e}(),ro=function(){function e(e){this._document=e,this._attachedOverlays=[]}return e.prototype.ngOnDestroy=function(){this._unsubscribeFromKeydownEvents()},e.prototype.add=function(e){this._keydownEventSubscription||this._subscribeToKeydownEvents(),this._attachedOverlays.push(e)},e.prototype.remove=function(e){var t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),0===this._attachedOverlays.length&&this._unsubscribeFromKeydownEvents()},e.prototype._subscribeToKeydownEvents=function(){var e=this,t=Or(this._document.body,"keydown",!0);this._keydownEventSubscription=t.pipe(tt(function(){return!!e._attachedOverlays.length})).subscribe(function(t){e._selectOverlayFromEvent(t)._keydownEvents.next(t)})},e.prototype._unsubscribeFromKeydownEvents=function(){this._keydownEventSubscription&&(this._keydownEventSubscription.unsubscribe(),this._keydownEventSubscription=null)},e.prototype._selectOverlayFromEvent=function(e){return this._attachedOverlays.find(function(t){return t.overlayElement===e.target||t.overlayElement.contains(e.target)})||this._attachedOverlays[this._attachedOverlays.length-1]},e}();function oo(e,t){return e||new ro(t)}var io=function(){function e(e){this._document=e}return e.prototype.ngOnDestroy=function(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)},e.prototype.getContainerElement=function(){return this._containerElement||this._createContainer(),this._containerElement},e.prototype._createContainer=function(){var e=this._document.createElement("div");e.classList.add("cdk-overlay-container"),this._document.body.appendChild(e),this._containerElement=e},e}();function so(e,t){return e||new io(t)}var ao=0,uo=function(){function e(e,t,n,r,o,i,s,a,u){this.scrollStrategies=e,this._overlayContainer=t,this._componentFactoryResolver=n,this._positionBuilder=r,this._keyboardDispatcher=o,this._appRef=i,this._injector=s,this._ngZone=a,this._document=u}return e.prototype.create=function(e){var t=this._createPaneElement(),n=this._createPortalOutlet(t);return new Jr(n,t,new qr(e),this._ngZone,this._keyboardDispatcher,this._document)},e.prototype.position=function(){return this._positionBuilder},e.prototype._createPaneElement=function(){var e=this._document.createElement("div");return e.id="cdk-overlay-"+ao++,e.classList.add("cdk-overlay-pane"),this._overlayContainer.getContainerElement().appendChild(e),e},e.prototype._createPortalOutlet=function(e){return new Hr(e,this._componentFactoryResolver,this._appRef,this._injector)},e}(),lo=new r.InjectionToken("cdk-connected-overlay-scroll-strategy");function co(e){return function(){return e.scrollStrategies.reposition()}}var po=function(){};n("8Ut3"),n("kQVV"),n("mHG6"),n("X3fp"),Math.pow(2,53),n("mz3w"),n("bywS");var fo=function(){},ho=function(){},vo=function(){function e(){this._listeners=[]}return e.prototype.notify=function(e,t){for(var n=0,r=this._listeners;n<r.length;n++)(0,r[n])(e,t)},e.prototype.listen=function(e){var t=this;return this._listeners.push(e),function(){t._listeners=t._listeners.filter(function(t){return e!==t})}},e.prototype.ngOnDestroy=function(){this._listeners=[]},e}();function yo(e){return e||new vo}var go=function(){},mo=function(){},_o=function(){function e(){}return e.prototype.create=function(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)},e}(),bo=function(){},wo=function(){},Eo=function(){},Co=function(){function e(e){this.selector=e}return e.prototype.call=function(e,t){return t.subscribe(new xo(e,this.selector,this.caught))},e}(),xo=function(e){function t(t,n,r){e.call(this,t),this.selector=n,this.caught=r}return Object(o.__extends)(t,e),t.prototype.error=function(t){if(!this.isStopped){var n=void 0;try{n=this.selector(t,this.caught)}catch(t){return void e.prototype.error.call(this,t)}this._unsubscribeAndRecycle(),this.add(Object(On.a)(this,n))}},t}(Sn.a),Oo=function(){function e(e){this.callback=e}return e.prototype.call=function(e,t){return t.subscribe(new So(e,this.callback))},e}(),So=function(e){function t(t,n){e.call(this,t),this.add(new Jn.a(n))}return Object(o.__extends)(t,e),t}(et.a),To=n("eIqN"),ko=function(e){function t(t,n){e.call(this),this.error=t,this.scheduler=n}return Object(o.__extends)(t,e),t.create=function(e,n){return new t(e,n)},t.dispatch=function(e){e.subscriber.error(e.error)},t.prototype._subscribe=function(e){var n=this.error,r=this.scheduler;if(e.syncErrorThrowable=!0,r)return r.schedule(t.dispatch,0,{error:n,subscriber:e});e.error(n)},t}(ut.a).create;function Io(e){return Error('Unable to find icon with the name "'+e+'"')}function Ao(e){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \""+e+'".')}var Ro=function(e){this.url=e,this.svgElement=null},Po=function(){function e(e,t,n){this._httpClient=e,this._sanitizer=t,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=n}return e.prototype.addSvgIcon=function(e,t){return this.addSvgIconInNamespace("",e,t)},e.prototype.addSvgIconInNamespace=function(e,t,n){var r=Do(e,t);return this._svgIconConfigs.set(r,new Ro(n)),this},e.prototype.addSvgIconSet=function(e){return this.addSvgIconSetInNamespace("",e)},e.prototype.addSvgIconSetInNamespace=function(e,t){var n=new Ro(t),r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this},e.prototype.registerFontClassAlias=function(e,t){return void 0===t&&(t=e),this._fontCssClassesByAlias.set(e,t),this},e.prototype.classNameForFontAlias=function(e){return this._fontCssClassesByAlias.get(e)||e},e.prototype.setDefaultFontSetClass=function(e){return this._defaultFontSetClass=e,this},e.prototype.getDefaultFontSetClass=function(){return this._defaultFontSetClass},e.prototype.getSvgIconFromUrl=function(e){var t=this,n=this._sanitizer.sanitize(r.SecurityContext.RESOURCE_URL,e);if(!n)throw Ao(e);var o=this._cachedIconsByUrl.get(n);return o?Je(Mo(o)):this._loadSvgIconFromConfig(new Ro(e)).pipe(tr(function(e){return t._cachedIconsByUrl.set(n,e)}),ot(function(e){return Mo(e)}))},e.prototype.getNamedSvgIcon=function(e,t){void 0===t&&(t="");var n=Do(t,e),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);var o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):ko(Io(n))},e.prototype._getSvgFromConfig=function(e){return e.svgElement?Je(Mo(e.svgElement)):this._loadSvgIconFromConfig(e).pipe(tr(function(t){return e.svgElement=t}),ot(function(e){return Mo(e)}))},e.prototype._getSvgFromIconSetConfigs=function(e,t){var n=this,o=this._extractIconWithNameFromAnySet(e,t);if(o)return Je(o);var i=t.filter(function(e){return!e.svgElement}).map(function(e){return n._loadSvgIconSetFromConfig(e).pipe((t=function(t){var o=n._sanitizer.sanitize(r.SecurityContext.RESOURCE_URL,e.url);return console.log("Loading icon set URL: "+o+" failed: "+t),Je(null)},function(e){var n=new Co(t),r=e.lift(n);return n.caught=r}));var t});return In(i).pipe(ot(function(){var r=n._extractIconWithNameFromAnySet(e,t);if(!r)throw Io(e);return r}))},e.prototype._extractIconWithNameFromAnySet=function(e,t){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.svgElement){var o=this._extractSvgIconFromSet(r.svgElement,e);if(o)return o}}return null},e.prototype._loadSvgIconFromConfig=function(e){var t=this;return this._fetchUrl(e.url).pipe(ot(function(e){return t._createSvgElementForSingleIcon(e)}))},e.prototype._loadSvgIconSetFromConfig=function(e){var t=this;return e.svgElement?Je(e.svgElement):this._fetchUrl(e.url).pipe(ot(function(n){return e.svgElement||(e.svgElement=t._svgElementFromString(n)),e.svgElement}))},e.prototype._createSvgElementForSingleIcon=function(e){var t=this._svgElementFromString(e);return this._setSvgAttributes(t),t},e.prototype._extractSvgIconFromSet=function(e,t){var n=e.querySelector("#"+t);if(!n)return null;var r=n.cloneNode(!0);if(r.id="","svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r));var o=this._svgElementFromString("<svg></svg>");return o.appendChild(r),this._setSvgAttributes(o)},e.prototype._svgElementFromString=function(e){if(this._document||"undefined"!=typeof document){var t=(this._document||document).createElement("DIV");t.innerHTML=e;var n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}throw new Error("MatIconRegistry could not resolve document.")},e.prototype._toSvgElement=function(e){for(var t=this._svgElementFromString("<svg></svg>"),n=0;n<e.childNodes.length;n++)e.childNodes[n].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[n].cloneNode(!0));return t},e.prototype._setSvgAttributes=function(e){return e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),e},e.prototype._fetchUrl=function(e){var t=this;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");var n=this._sanitizer.sanitize(r.SecurityContext.RESOURCE_URL,e);if(!n)throw Ao(e);var o=this._inProgressUrlFetches.get(n);if(o)return o;var i,s=this._httpClient.get(n,{responseType:"text"}).pipe((i=function(){return t._inProgressUrlFetches.delete(n)},function(e){return e.lift(new Oo(i))}),Object(To.a)());return this._inProgressUrlFetches.set(n,s),s},e}();function No(e,t,n,r){return e||new Po(t,n,r)}function Mo(e){return e.cloneNode(!0)}function Do(e,t){return e+":"+t}var jo=function(){},Fo=new r.InjectionToken("mat-menu-default-options"),Lo=new r.InjectionToken("mat-menu-scroll-strategy");function Vo(e){return function(){return e.scrollStrategies.reposition()}}var Bo=function(){},Ho=new r.InjectionToken("mat-select-scroll-strategy");function zo(e){return function(){return e.scrollStrategies.reposition()}}var Uo=function(){},qo=n("Upor"),Zo=function(e){function t(t){e.call(this),this._value=t}return Object(o.__extends)(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return n&&!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new qo.a;return this._value},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(Fn.a);ut.a.forkJoin=In,ut.a.prototype.map=at;var Ko=function(){function e(e,t){this.http=e,this.sanitizer=t,this._columns=new Zo(0),this.managePanel=!1,this.positions=[[],[],[],[]],this.apiBaseUrl=window.appConfig.apiBaseUrl,this.getPositioningUrl=window.appConfig.getPositioningUrl,this.setPositioningUrl=window.appConfig.setPositioningUrl,this.getBlocksContentUrl=window.appConfig.getBlocksContentUrl,this.defaultConfig=JSON.parse(window.appConfig.defaultConfig)}return Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns.getValue()},set:function(e){this._columns.next(e),this.changeLayout()},enumerable:!0,configurable:!0}),e.prototype.getBlocksContents=function(){return this.http.get(this.apiBaseUrl+this.getBlocksContentUrl).map(function(e){return e.json()})},e.prototype.getBlockContent=function(e){var t;return void 0!==this.blocksContents&&void 0!==this.blocksContents[e.id]&&this.blocksContents[e.id]&&(t=this.blocksContents[e.id]),t},e.prototype.getPositioning=function(){return this.http.get(this.apiBaseUrl+this.getPositioningUrl).map(function(e){return e.json()})},e.prototype.setPositioning=function(){var e={};e.positions=this.positions,e.columns=this.columns,this.http.post(this.apiBaseUrl+this.setPositioningUrl,JSON.stringify(e)).subscribe(function(e){},function(e){console.error(e)})},e.prototype.changeLayout=function(){var e;e=4==this.columns?3:3==this.columns?2:this.columns;for(var t=0;t<this.positions.length;t++)t>e&&this.positions[t].length&&(this.positions[e]=this.positions[e].concat(this.positions[t]),this.positions[t]=[]);this.setPositioning()},e.prototype.reinit=function(){var e=this;for(var t in this.columns=3,this.positions)if("0"!=t)for(var n in this.positions[t])this.positions[0].push(this.positions[t][n]);for(var r=1;r<=3;r++)this.positions[r]=JSON.parse(JSON.stringify(this.defaultConfig[r])),this.defaultConfig[r].forEach(function(t){e.positions[0]=e.positions[0].filter(function(e){return e.id!==t.id})});this.setPositioning()},e.prototype.range=function(e){for(var t=[],n=0;n<e;++n)t.push(n+1);return t},e}(),Xo=function(){function e(e,t){var n=this;this.appService=e,this.dragulaService=t,this.dragulaService.setOptions("nested-bag",{revertOnSpill:!0,moves:function(e,t,n,r){return n.classList.contains("handle")}}),this.dragulaService.drop.subscribe(function(e){var t=n;setTimeout(function(){t.appService.setPositioning()})})}return e.prototype.ngOnInit=function(){var e=this,t=this.appService.getPositioning(),n=this.appService.getBlocksContents();ut.a.forkJoin([t,n]).subscribe(function(t){e.appService.positions=t[0].positions,e.appService.columns=parseInt(t[0].columns),e.appService.blocksContents=t[1].blocks,setTimeout(function(){window.Drupal.attachBehaviors(document,window.Drupal.settings)})})},e.prototype.removeBlock=function(e){for(var t in this.appService.positions)for(var n in this.appService.positions[t])this.appService.positions[t][n]==e&&(this.appService.positions[0].push(this.appService.positions[t][n]),this.appService.positions[t].splice(parseInt(n)),this.appService.setPositioning())},e}(),Go=function(){function e(e){this.appService=e}return e.prototype.ngOnInit=function(){},e}(),Wo=function(){function e(e){this.sanitizer=e}return e.prototype.transform=function(e){return this.sanitizer.bypassSecurityTrustHtml(e)},e}(),Yo=function(){function e(e){this.elementRef=e}return e.prototype.ngOnInit=function(){var e=this;setTimeout(function(){e.reinsertScripts()})},e.prototype.reinsertScripts=function(){for(var e=this.elementRef.nativeElement.getElementsByTagName("script"),t=e.length,n=0;n<t;n++){var r=e[n],o=document.createElement("script");o.type=r.type?r.type:"text/javascript",r.innerHTML?o.innerHTML=r.innerHTML:r.src&&(o.src=r.src),o.async=!1,r.parentNode.replaceChild(o,r)}},e}(),Qo=function(){},Jo=n("Kg3V"),$o=n("sY2v"),ei=r["\u0275crt"]({encapsulation:2,styles:[],data:{}});function ti(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,5,"div",[["class","dashboard-block"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275eld"](2,0,null,null,0,"span",[["class","handle ic-drag-handle-black-24px"]],[[2,"hidden",null]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275eld"](4,0,null,null,0,"div",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n    "]))],null,function(e,t){e(t,2,0,!t.component.appService.managePanel),e(t,4,0,t.context.$implicit.admin_label)})}function ni(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](2,0,null,null,1,"button",[["class","close-dashboard"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=0!=(e.component.appService.managePanel=!1)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["close"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](5,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["Manage your dashboard"])),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n\n"])),(e()(),r["\u0275eld"](9,0,null,null,16,"section",[["class","layout"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](11,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["Layout"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](14,0,null,null,1,"button",[["class","radio"],["id","layout-1"],["name","layout"]],[[2,"active",null]],[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==(e.component.appService.columns=1)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["1 column"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](17,0,null,null,1,"button",[["class","radio"],["id","layout-2"],["name","layout"]],[[2,"active",null]],[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==(e.component.appService.columns=2)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["2 columns"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](20,0,null,null,1,"button",[["class","radio"],["id","layout-3"],["name","layout"]],[[2,"active",null]],[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==(e.component.appService.columns=3)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["1/3-2/3 columns"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](23,0,null,null,1,"button",[["class","radio"],["id","layout-4"],["name","layout"]],[[2,"active",null]],[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==(e.component.appService.columns=4)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["3 columns"])),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n\n"])),(e()(),r["\u0275eld"](27,0,null,null,11,"section",[["class","add-blocks"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](29,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["Add blocks by dragging them below into the canvas"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](32,0,null,null,5,"div",[["class","blocks panel"]],null,null,null,null,null)),r["\u0275did"](33,606208,null,0,Jo.DragulaDirective,[r.ElementRef,$o.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,ti)),r["\u0275did"](36,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n\n"])),(e()(),r["\u0275eld"](40,0,null,null,7,"section",[["class","reinit"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](42,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["Restore your dashboard to default:"])),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](45,0,null,null,1,"button",[["class","btn-danger"],["name","button"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.appService.reinit()&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["restore to default"])),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n"]))],function(e,t){var n=t.component;e(t,33,0,"nested-bag",n.appService.positions[0]),e(t,36,0,n.appService.positions[0])},function(e,t){var n=t.component;e(t,14,0,1==n.appService.columns),e(t,17,0,2==n.appService.columns),e(t,20,0,3==n.appService.columns),e(t,23,0,4==n.appService.columns)})}var ri=r["\u0275crt"]({encapsulation:0,styles:[["app-panel[_ngcontent-%COMP%]{position:fixed;z-index:5;top:0;right:0;bottom:0;width:400px;background-color:#fff;box-shadow:0 0 5px 5px #eee;padding:2rem;overflow:auto}.trigger-btn[_ngcontent-%COMP%]{text-align:right;margin-bottom:1rem}.dashboard-column-wrapper[_ngcontent-%COMP%]{min-height:500px;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:0}.dashboard-column-wrapper.panel-open[_ngcontent-%COMP%]{margin-right:400px}.dashboard-column-wrapper[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]{-ms-flex:1;flex:1;padding:0 10px}.dashboard-column-wrapper.panel-open[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]{margin:0 6px}.dashboard-column-wrapper[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]:first-child{padding-left:0}.dashboard-column-wrapper.panel-open[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]:first-child{margin-left:0}.dashboard-column-wrapper[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]:last-child{padding-right:0}.dashboard-column-wrapper.panel-open[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]:last-child{margin-right:0}.dashboard-column-wrapper[_ngcontent-%COMP%]   .dashboard-column.wide-col[_ngcontent-%COMP%]{-ms-flex:2;flex:2}.dashboard-column-wrapper.panel-open[_ngcontent-%COMP%]   .dashboard-column[_ngcontent-%COMP%]{border:2px dashed #ddd}"]],data:{}});function oi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"app-panel",[],null,null,null,ni,ei)),r["\u0275did"](1,114688,null,0,Go,[Ko],null,null)],function(e,t){e(t,1,0)},null)}function ii(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"button",[["class","remove"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.removeBlock(e.parent.context.$implicit)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["remove"]))],null,null)}function si(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-block"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](2,0,null,null,0,"span",[["class","handle ic-drag-handle-black-24px"]],[[2,"hidden",null]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](4,0,null,null,0,"div",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,ii)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,7,0,t.component.appService.managePanel)},function(e,t){e(t,2,0,!t.component.appService.managePanel),e(t,4,0,t.context.$implicit.admin_label)})}function ai(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,si)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[1])},null)}function ui(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,2,"div",[["appRunScripts",""],["class","dashboard-drupal-block"]],[[8,"innerHTML",1]],null,null,null,null)),r["\u0275did"](1,81920,null,0,Yo,[r.ElementRef],null,null),r["\u0275ppd"](2,1)],function(e,t){e(t,1,0)},function(e,t){var n=t.component;e(t,0,0,r["\u0275unv"](t,0,0,e(t,2,0,r["\u0275nov"](t.parent.parent.parent.parent,0),n.appService.getBlockContent(t.parent.context.$implicit))))})}function li(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,ui)),r["\u0275did"](3,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,3,0,t.component.appService.getBlockContent(t.context.$implicit))},null)}function ci(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,li)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[1])},null)}function di(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-column"]],null,null,null,null,null)),r["\u0275did"](1,606208,null,0,Jo.DragulaDirective,[r.ElementRef,$o.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,ai)),r["\u0275did"](4,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,ci)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "]))],function(e,t){var n=t.component;e(t,1,0,"nested-bag",n.appService.positions[1]),e(t,4,0,n.appService.managePanel),e(t,7,0,!n.appService.managePanel)},null)}function pi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"button",[["class","remove"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.removeBlock(e.parent.context.$implicit)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["remove"]))],null,null)}function fi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-block"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](2,0,null,null,0,"span",[["class","handle ic-drag-handle-black-24px"]],[[2,"hidden",null]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](4,0,null,null,0,"div",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,pi)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,7,0,t.component.appService.managePanel)},function(e,t){e(t,2,0,!t.component.appService.managePanel),e(t,4,0,t.context.$implicit.admin_label)})}function hi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,fi)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[2])},null)}function vi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,2,"div",[["appRunScripts",""],["class","dashboard-drupal-block"]],[[8,"innerHTML",1]],null,null,null,null)),r["\u0275did"](1,81920,null,0,Yo,[r.ElementRef],null,null),r["\u0275ppd"](2,1)],function(e,t){e(t,1,0)},function(e,t){var n=t.component;e(t,0,0,r["\u0275unv"](t,0,0,e(t,2,0,r["\u0275nov"](t.parent.parent.parent.parent,0),n.appService.getBlockContent(t.parent.context.$implicit))))})}function yi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,vi)),r["\u0275did"](3,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,3,0,t.component.appService.getBlockContent(t.context.$implicit))},null)}function gi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,yi)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[2])},null)}function mi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-column"]],[[2,"wide-col",null]],null,null,null,null)),r["\u0275did"](1,606208,null,0,Jo.DragulaDirective,[r.ElementRef,$o.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,hi)),r["\u0275did"](4,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,gi)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "]))],function(e,t){var n=t.component;e(t,1,0,"nested-bag",n.appService.positions[2]),e(t,4,0,n.appService.managePanel),e(t,7,0,!n.appService.managePanel)},function(e,t){e(t,0,0,3==t.component.appService.columns)})}function _i(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"button",[["class","remove"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.removeBlock(e.parent.context.$implicit)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["remove"]))],null,null)}function bi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-block"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](2,0,null,null,0,"span",[["class","handle ic-drag-handle-black-24px"]],[[2,"hidden",null]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275eld"](4,0,null,null,0,"div",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,_i)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,7,0,t.component.appService.managePanel)},function(e,t){e(t,2,0,!t.component.appService.managePanel),e(t,4,0,t.context.$implicit.admin_label)})}function wi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,bi)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[3])},null)}function Ei(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,2,"div",[["appRunScripts",""],["class","dashboard-drupal-block"]],[[8,"innerHTML",1]],null,null,null,null)),r["\u0275did"](1,81920,null,0,Yo,[r.ElementRef],null,null),r["\u0275ppd"](2,1)],function(e,t){e(t,1,0)},function(e,t){var n=t.component;e(t,0,0,r["\u0275unv"](t,0,0,e(t,2,0,r["\u0275nov"](t.parent.parent.parent.parent,0),n.appService.getBlockContent(t.parent.context.$implicit))))})}function Ci(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n        "])),(e()(),r["\u0275and"](16777216,null,null,1,null,Ei)),r["\u0275did"](3,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n      "]))],function(e,t){e(t,3,0,t.component.appService.getBlockContent(t.context.$implicit))},null)}function xi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n      "])),(e()(),r["\u0275and"](16777216,null,null,1,null,Ci)),r["\u0275did"](3,802816,null,0,h,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "]))],function(e,t){e(t,3,0,t.component.appService.positions[3])},null)}function Oi(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,8,"div",[["class","dashboard-column"]],null,null,null,null,null)),r["\u0275did"](1,606208,null,0,Jo.DragulaDirective,[r.ElementRef,$o.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,wi)),r["\u0275did"](4,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n    "])),(e()(),r["\u0275and"](16777216,null,null,1,null,xi)),r["\u0275did"](7,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "]))],function(e,t){var n=t.component;e(t,1,0,"nested-bag",n.appService.positions[3]),e(t,4,0,n.appService.managePanel),e(t,7,0,!n.appService.managePanel)},null)}function Si(e){return r["\u0275vid"](0,[r["\u0275pid"](0,Wo,[Be]),(e()(),r["\u0275eld"](1,0,null,null,4,"div",[["class","trigger-btn d-flex"]],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275eld"](3,0,null,null,1,"button",[["class","ml-auto manage-dashboard"],["type","button"]],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=0!=(e.component.appService.managePanel=!0)&&r),r},null,null)),(e()(),r["\u0275ted"](-1,null,["Manage your dashboard"])),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n\n"])),(e()(),r["\u0275and"](16777216,null,null,1,null,oi)),r["\u0275did"](8,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n\n"])),(e()(),r["\u0275eld"](10,0,null,null,10,"div",[["class","dashboard-column-wrapper"]],[[2,"panel-open",null]],null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275and"](16777216,null,null,1,null,di)),r["\u0275did"](13,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275and"](16777216,null,null,1,null,mi)),r["\u0275did"](16,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n  "])),(e()(),r["\u0275and"](16777216,null,null,1,null,Oi)),r["\u0275did"](19,16384,null,0,y,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275ted"](-1,null,["\n"])),(e()(),r["\u0275ted"](-1,null,["\n"]))],function(e,t){var n=t.component;e(t,8,0,n.appService.managePanel),e(t,13,0,n.appService.columns>=1),e(t,16,0,n.appService.columns>=2),e(t,19,0,n.appService.columns>=4)},function(e,t){e(t,10,0,t.component.appService.managePanel)})}var Ti=r["\u0275ccf"]("app-root",Xo,function(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,Si,ri)),r["\u0275did"](1,114688,null,0,Xo,[Ko,$o.DragulaService],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),ki=n("NijM"),Ii=r["\u0275cmf"](Qo,[Xo],function(e){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[Ti]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](5120,r.LOCALE_ID,r["\u0275q"],[[3,r.LOCALE_ID]]),r["\u0275mpd"](4608,c,d,[r.LOCALE_ID,[2,l]]),r["\u0275mpd"](4608,r.Compiler,r.Compiler,[]),r["\u0275mpd"](5120,r.APP_ID,r["\u0275i"],[]),r["\u0275mpd"](5120,r.IterableDiffers,r["\u0275n"],[]),r["\u0275mpd"](5120,r.KeyValueDiffers,r["\u0275o"],[]),r["\u0275mpd"](4608,Be,He,[_]),r["\u0275mpd"](6144,r.Sanitizer,null,[Be]),r["\u0275mpd"](4608,fe,he,[]),r["\u0275mpd"](5120,B,function(e,t,n,r,o){return[new de(e,t),new me(n),new ve(r,o)]},[_,r.NgZone,_,_,fe]),r["\u0275mpd"](4608,H,H,[B,r.NgZone]),r["\u0275mpd"](135680,q,q,[_]),r["\u0275mpd"](4608,Q,Q,[H,q]),r["\u0275mpd"](6144,r.RendererFactory2,null,[Q]),r["\u0275mpd"](6144,U,null,[q]),r["\u0275mpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["\u0275mpd"](4608,P,P,[_]),r["\u0275mpd"](4608,j,j,[_]),r["\u0275mpd"](4608,Dt,jt,[_,r.PLATFORM_ID,Nt]),r["\u0275mpd"](4608,Ft,Ft,[Dt,Mt]),r["\u0275mpd"](5120,Tt,function(e){return[e]},[Ft]),r["\u0275mpd"](4608,Rt,Rt,[]),r["\u0275mpd"](6144,At,null,[Rt]),r["\u0275mpd"](4608,Pt,Pt,[At]),r["\u0275mpd"](6144,ct,null,[Pt]),r["\u0275mpd"](4608,lt,Lt,[ct,r.Injector]),r["\u0275mpd"](4608,Ot,Ot,[lt]),r["\u0275mpd"](4608,Ht,Ht,[]),r["\u0275mpd"](4608,Xt,Gt,[]),r["\u0275mpd"](5120,Wt,_n,[]),r["\u0275mpd"](4608,an,an,[Ht,Xt,Wt]),r["\u0275mpd"](4608,un,ln,[]),r["\u0275mpd"](5120,mn,bn,[an,un]),r["\u0275mpd"](4608,$o.DragulaService,$o.DragulaService,[]),r["\u0275mpd"](4608,Rn,Rn,[]),r["\u0275mpd"](6144,Mn,null,[_]),r["\u0275mpd"](4608,Dn,Dn,[[2,Mn]]),r["\u0275mpd"](5120,Po,No,[[3,Po],[2,Ot],Be,[2,_]]),r["\u0275mpd"](4608,Vn,Vn,[]),r["\u0275mpd"](4608,or,or,[Vn]),r["\u0275mpd"](4608,ur,ur,[or,r.NgZone,_]),r["\u0275mpd"](136192,fr,hr,[[3,fr],_]),r["\u0275mpd"](5120,yr,gr,[[3,yr],[2,vr],_]),r["\u0275mpd"](5120,mr,_r,[[3,mr],r.NgZone,Vn]),r["\u0275mpd"](5120,vo,yo,[[3,vo]]),r["\u0275mpd"](5120,Pr,Nr,[[3,Pr],r.NgZone,Vn]),r["\u0275mpd"](5120,Mr,Dr,[[3,Mr],Vn,r.NgZone]),r["\u0275mpd"](4608,Qr,Qr,[Pr,Mr,r.NgZone,_]),r["\u0275mpd"](5120,io,so,[[3,io],_]),r["\u0275mpd"](4608,no,no,[Mr,_]),r["\u0275mpd"](5120,ro,oo,[[3,ro],_]),r["\u0275mpd"](4608,uo,uo,[Qr,io,r.ComponentFactoryResolver,no,ro,r.ApplicationRef,r.Injector,r.NgZone,_]),r["\u0275mpd"](5120,lo,co,[uo]),r["\u0275mpd"](5120,Lo,Vo,[uo]),r["\u0275mpd"](4608,qn,qn,[]),r["\u0275mpd"](5120,Ho,zo,[uo]),r["\u0275mpd"](4608,_o,_o,[]),r["\u0275mpd"](4608,Ko,Ko,[mn,Be]),r["\u0275mpd"](512,m,m,[]),r["\u0275mpd"](1024,r.ErrorHandler,Ye,[]),r["\u0275mpd"](1024,r.APP_INITIALIZER,function(e){return[(t=e,F("probe",V),F("coreTokens",Object(o.__assign)({},L,(t||[]).reduce(function(e,t){return e[t.name]=t.token,e},{}))),function(){return V})];var t},[[2,r.NgProbeToken]]),r["\u0275mpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["\u0275mpd"](131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r["\u0275Console"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["\u0275mpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["\u0275mpd"](512,Qe,Qe,[[3,Qe]]),r["\u0275mpd"](512,Vt,Vt,[]),r["\u0275mpd"](512,Bt,Bt,[]),r["\u0275mpd"](512,En,En,[]),r["\u0275mpd"](512,ki.DragulaModule,ki.DragulaModule,[]),r["\u0275mpd"](512,Pn,Pn,[]),r["\u0275mpd"](512,Nn,Nn,[]),r["\u0275mpd"](512,jn,jn,[]),r["\u0275mpd"](256,zn,!0,[]),r["\u0275mpd"](512,Un,Un,[[2,zn]]),r["\u0275mpd"](512,jo,jo,[]),r["\u0275mpd"](512,mo,mo,[]),r["\u0275mpd"](512,Hn,Hn,[]),r["\u0275mpd"](512,Zn,Zn,[]),r["\u0275mpd"](512,br,br,[]),r["\u0275mpd"](512,ho,ho,[]),r["\u0275mpd"](512,go,go,[]),r["\u0275mpd"](512,zr,zr,[]),r["\u0275mpd"](512,jr,jr,[]),r["\u0275mpd"](512,po,po,[]),r["\u0275mpd"](512,Bo,Bo,[]),r["\u0275mpd"](512,fo,fo,[]),r["\u0275mpd"](512,Eo,Eo,[]),r["\u0275mpd"](512,Kn,Kn,[]),r["\u0275mpd"](512,Xn,Xn,[]),r["\u0275mpd"](512,Uo,Uo,[]),r["\u0275mpd"](512,bo,bo,[]),r["\u0275mpd"](512,wo,wo,[]),r["\u0275mpd"](512,Qo,Qo,[]),r["\u0275mpd"](256,Nt,"XSRF-TOKEN",[]),r["\u0275mpd"](256,Mt,"X-XSRF-TOKEN",[]),r["\u0275mpd"](256,Fo,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[])])});Object(r.enableProdMode)(),We().bootstrapModuleFactory(Ii).catch(function(e){return console.log(e)})},eIqN:function(e,t,n){"use strict";var r=n("6Xbx"),o=n("TO51"),i=n("AP4T"),s=n("E9/g"),a=n("qLnt");function u(){return function(e){return e.lift(new l(e))}}var l=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new c(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o},e}(),c=function(e){function t(t,n){e.call(this,t),this.connectable=n}return Object(r.__extends)(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},t}(s.a),d=function(e){function t(t,n){e.call(this),this.source=t,this.subjectFactory=n,this._refCount=0,this._isComplete=!1}return Object(r.__extends)(t,e),t.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},t.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},t.prototype.connect=function(){var e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new a.a).add(this.source.subscribe(new f(this.getSubject(),this))),e.closed?(this._connection=null,e=a.a.EMPTY):this._connection=e),e},t.prototype.refCount=function(){return u()(this)},t}(i.a).prototype,p={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:d._subscribe},_isComplete:{value:d._isComplete,writable:!0},getSubject:{value:d.getSubject},connect:{value:d.connect},refCount:{value:d.refCount}},f=function(e){function t(t,n){e.call(this,t),this.connectable=n}return Object(r.__extends)(t,e),t.prototype._error=function(t){this._unsubscribe(),e.prototype._error.call(this,t)},t.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},t}(o.b);function h(){return new o.a}t.a=function(){return function(e){return u()((t=h,function(e){var n;n="function"==typeof t?t:function(){return t};var r=Object.create(e,p);return r.source=e,r.subjectFactory=n,r})(e));var t}}},"fd+Y":function(e,t,n){"use strict";var r=n("hMwh"),o=n("qbbb");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=r(arguments),a=this||e;if("error"===t&&!1!==n.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach(function(r){n.async?o(r,i,a):r.apply(a,i),r._once&&e.off(t,r)}),e}},e}},grVA:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={closed:!0,next:function(e){},error:function(e){throw e},complete:function(){}}},hMwh:function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},kQVV:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e&&"number"==typeof e.length}},lI6h:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("6Xbx"),o=function(e){function t(){e.apply(this,arguments)}return Object(r.__extends)(t,e),t.prototype.notifyNext=function(e,t,n,r,o){this.destination.next(t)},t.prototype.notifyError=function(e,t){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.complete()},t}(n("E9/g").a)},mHG6:function(e,t,n){"use strict";t.a=function(e){return e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}},mz3w:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){var t,r=n("xIGM").a.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}()},p4E6:function(e,t,n){"use strict";(function(t){var r=n("fd+Y"),o=n("WMjF"),i=n("8z3O"),s=document,a=s.documentElement;function u(e,n,r,i){t.navigator.pointerEnabled?o[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],i):t.navigator.msPointerEnabled?o[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],i):(o[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],i),o[n](e,r,i))}function l(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function c(e,n){return void 0!==t[n]?t[n]:a.clientHeight?a[e]:s.body[e]}function d(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=s.elementFromPoint(t,n),o.className=i,r}function p(){return!1}function f(){return!0}function h(e){return e.width||e.right-e.left}function v(e){return e.height||e.bottom-e.top}function y(e){return e.parentNode===s?null:e.parentNode}function g(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(y(t)))}(e)}function m(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function _(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,b,w,E,C,x,O,S,T,k,I;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var A,R=null,P=t||{};void 0===P.moves&&(P.moves=f),void 0===P.accepts&&(P.accepts=f),void 0===P.invalid&&(P.invalid=function(){return!1}),void 0===P.containers&&(P.containers=e||[]),void 0===P.isContainer&&(P.isContainer=p),void 0===P.copy&&(P.copy=!1),void 0===P.copySortSource&&(P.copySortSource=!1),void 0===P.revertOnSpill&&(P.revertOnSpill=!1),void 0===P.removeOnSpill&&(P.removeOnSpill=!1),void 0===P.direction&&(P.direction="vertical"),void 0===P.ignoreInputTextSelection&&(P.ignoreInputTextSelection=!0),void 0===P.mirrorContainer&&(P.mirrorContainer=s.body);var N=r({containers:P.containers,start:function(e){var t=H(e);t&&z(t)},end:U,cancel:G,remove:X,destroy:function(){D(!0),Z({})},canMove:function(e){return!!H(e)},dragging:!1});return!0===P.removeOnSpill&&N.on("over",function(e){i.rm(e,"gu-hide")}).on("out",function(e){N.dragging&&i.add(e,"gu-hide")}),D(),N;function M(e){return-1!==N.containers.indexOf(e)||P.isContainer(e)}function D(e){var t=e?"remove":"add";u(a,t,"mousedown",V),u(a,t,"mouseup",Z)}function j(e){u(a,e?"remove":"add","mousemove",B)}function F(e){var t=e?"remove":"add";o[t](a,"selectstart",L),o[t](a,"click",L)}function L(e){A&&e.preventDefault()}function V(e){if(x=e.clientX,O=e.clientY,1===l(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=H(t);n&&(A=n,j(),"mousedown"===e.type&&(g(t)?t.focus():e.preventDefault()))}}function B(e){if(A)if(0!==l(e)){if(void 0===e.clientX||e.clientX!==x||void 0===e.clientY||e.clientY!==O){if(P.ignoreInputTextSelection){var t=_("clientX",e),r=_("clientY",e);if(g(s.elementFromPoint(t,r)))return}var o=A;j(!0),F(),U(),z(o);var d,p={left:(d=w.getBoundingClientRect()).left+c("scrollLeft","pageXOffset"),top:d.top+c("scrollTop","pageYOffset")};E=_("pageX",e)-p.left,C=_("pageY",e)-p.top,i.add(k||w,"gu-transit"),function(){if(!n){var e=w.getBoundingClientRect();(n=w.cloneNode(!0)).style.width=h(e)+"px",n.style.height=v(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),P.mirrorContainer.appendChild(n),u(a,"add","mousemove",J),i.add(P.mirrorContainer,"gu-unselectable"),N.emit("cloned",n,w,"mirror")}}(),J(e)}}else Z({})}function H(e){if(!(N.dragging&&n||M(e))){for(var t=e;y(e)&&!1===M(y(e));){if(P.invalid(e,t))return;if(!(e=y(e)))return}var r=y(e);if(r&&!P.invalid(e,t)&&P.moves(e,r,t,m(e)))return{item:e,source:r}}}function z(e){("boolean"==typeof P.copy?P.copy:P.copy(e.item,e.source))&&(k=e.item.cloneNode(!0),N.emit("cloned",k,e.item,"copy")),b=e.source,w=e.item,S=T=m(e.item),N.dragging=!0,N.emit("drag",w,b)}function U(){if(N.dragging){var e=k||w;K(e,y(e))}}function q(){A=!1,j(!0),F(!0)}function Z(e){if(q(),N.dragging){var t=k||w,r=_("clientX",e),o=_("clientY",e),i=Q(d(n,r,o),r,o);i&&(k&&P.copySortSource||!k||i!==b)?K(t,i):P.removeOnSpill?X():G()}}function K(e,t){var n=y(e);k&&P.copySortSource&&t===b&&n.removeChild(w),Y(t)?N.emit("cancel",e,b,b):N.emit("drop",e,t,b,T),W()}function X(){if(N.dragging){var e=k||w,t=y(e);t&&t.removeChild(e),N.emit(k?"cancel":"remove",e,t,b),W()}}function G(e){if(N.dragging){var t=arguments.length>0?e:P.revertOnSpill,n=k||w,r=y(n),o=Y(r);!1===o&&t&&(k?r&&r.removeChild(k):b.insertBefore(n,S)),o||t?N.emit("cancel",n,b,b):N.emit("drop",n,r,b,T),W()}}function W(){var e=k||w;q(),n&&(i.rm(P.mirrorContainer,"gu-unselectable"),u(a,"remove","mousemove",J),y(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),I&&clearTimeout(I),N.dragging=!1,R&&N.emit("out",e,R,b),N.emit("dragend",e),b=w=k=S=T=I=R=null}function Y(e,t){var r;return r=void 0!==t?t:n?T:m(k||w),e===b&&r===S}function Q(e,t,n){for(var r=e;r&&!o();)r=y(r);return r;function o(){if(!1===M(r))return!1;var o=$(r,e),i=ee(r,o,t,n);return!!Y(r,i)||P.accepts(w,r,b,i)}}function J(e){if(n){e.preventDefault();var t=_("clientX",e),r=_("clientY",e),o=r-C;n.style.left=t-E+"px",n.style.top=o+"px";var i=k||w,s=d(n,t,r),a=Q(s,t,r),u=null!==a&&a!==R;(u||null===a)&&(R&&f("out"),R=a,u&&f("over"));var l=y(i);if(a!==b||!k||P.copySortSource){var c,p=$(a,s);if(null!==p)c=ee(a,p,t,r);else{if(!0!==P.revertOnSpill||k)return void(k&&l&&l.removeChild(i));c=S,a=b}(null===c&&u||c!==i&&c!==m(i))&&(T=c,a.insertBefore(i,c),N.emit("shadow",i,a,b))}else l&&l.removeChild(i)}function f(e){N.emit(e,i,R,b)}}function $(e,t){for(var n=t;n!==e&&y(n)!==e;)n=y(n);return n===a?null:n}function ee(e,t,n,r){var o,i="horizontal"===P.direction;return t!==e?(o=t.getBoundingClientRect(),(i?n>o.left+h(o)/2:r>o.top+v(o)/2)?m(t):t):function(){var t,o,s,a=e.children.length;for(t=0;t<a;t++){if(s=(o=e.children[t]).getBoundingClientRect(),i&&s.left+s.width/2>n)return o;if(!i&&s.top+s.height/2>r)return o}return null}()}}}).call(t,n("GTd5"))},pICe:function(e,t,n){"use strict";var r=n("p4E6");t.dragula=r.default||r},qLnt:function(e,t,n){"use strict";var r=n("1j/l"),o=n("NGRF"),i=n("B1iP"),s=n("8ofh"),a=n("NePw"),u=n("6Xbx"),l=function(e){function t(t){e.call(this),this.errors=t;var n=Error.call(this,t?t.length+" errors occurred during unsubscription:\n  "+t.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"");this.name=n.name="UnsubscriptionError",this.stack=n.stack,this.message=n.message}return Object(u.__extends)(t,e),t}(Error);n.d(t,"a",function(){return c});var c=function(){function e(e){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var e,t=!1;if(!this.closed){var n=this._parent,u=this._parents,c=this._unsubscribe,p=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var f=-1,h=u?u.length:0;n;)n.remove(this),n=++f<h&&u[f]||null;if(Object(i.a)(c)&&Object(s.a)(c).call(this)===a.a&&(t=!0,e=e||(a.a.e instanceof l?d(a.a.e.errors):[a.a.e])),Object(r.a)(p))for(f=-1,h=p.length;++f<h;){var v=p[f];if(Object(o.a)(v)&&Object(s.a)(v.unsubscribe).call(v)===a.a){t=!0,e=e||[];var y=a.a.e;y instanceof l?e=e.concat(d(y.errors)):e.push(y)}}if(t)throw new l(e)}},e.prototype.add=function(t){if(!t||t===e.EMPTY)return e.EMPTY;if(t===this)return this;var n=t;switch(typeof t){case"function":n=new e(t);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.prototype._addParent=function(e){var t=this._parent,n=this._parents;t&&t!==e?n?-1===n.indexOf(e)&&n.push(e):this._parents=[e]:this._parent=e},e.EMPTY=((t=new e).closed=!0,t),e}();function d(e){return e.reduce(function(e,t){return e.concat(t instanceof l?t.errors:t)},[])}},qbbb:function(e,t,n){"use strict";var r=n("VlH2");e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},qgI0:function(e,t,n){"use strict";var r=n("xIGM"),o=n("kQVV"),i=n("mHG6"),s=n("NGRF"),a=n("AP4T"),u=n("X3fp"),l=n("6Xbx"),c=function(e){function t(t,n,r){e.call(this),this.parent=t,this.outerValue=n,this.outerIndex=r,this.index=0}return Object(l.__extends)(t,e),t.prototype._next=function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)},t.prototype._error=function(e){this.parent.notifyError(e,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(n("E9/g").a),d=n("mz3w");t.a=function(e,t,n,l){var p=new c(e,n,l);if(p.closed)return null;if(t instanceof a.a)return t._isScalar?(p.next(t.value),p.complete(),null):(p.syncErrorThrowable=!0,t.subscribe(p));if(Object(o.a)(t)){for(var f=0,h=t.length;f<h&&!p.closed;f++)p.next(t[f]);p.closed||p.complete()}else{if(Object(i.a)(t))return t.then(function(e){p.closed||(p.next(e),p.complete())},function(e){return p.error(e)}).then(null,function(e){r.a.setTimeout(function(){throw e})}),p;if(t&&"function"==typeof t[u.a])for(var v=t[u.a]();;){var y=v.next();if(y.done){p.complete();break}if(p.next(y.value),p.closed)break}else if(t&&"function"==typeof t[d.a]){var g=t[d.a]();if("function"==typeof g.subscribe)return g.subscribe(new c(e,n,l));p.error(new TypeError("Provided object does not correctly implement Symbol.observable"))}else{var m=Object(s.a)(t)?"an invalid object":"'"+t+"'";p.error(new TypeError("You provided "+m+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."))}}return null}},sY2v:function(e,t,n){"use strict";var r=n("6Xbx").__decorate,o=n("pICe"),i=n("LMZF"),s=function(){function e(){this.cancel=new i.EventEmitter,this.cloned=new i.EventEmitter,this.drag=new i.EventEmitter,this.dragend=new i.EventEmitter,this.drop=new i.EventEmitter,this.out=new i.EventEmitter,this.over=new i.EventEmitter,this.remove=new i.EventEmitter,this.shadow=new i.EventEmitter,this.dropModel=new i.EventEmitter,this.removeModel=new i.EventEmitter,this.events=["cancel","cloned","drag","dragend","drop","out","over","remove","shadow","dropModel","removeModel"],this.bags=[]}return e.prototype.add=function(e,t){var n=this.find(e);if(n)throw new Error('Bag named: "'+e+'" already exists.');return this.bags.push(n={name:e,drake:t}),t.models&&this.handleModels(e,t),n.initEvents||this.setupEvents(n),n},e.prototype.find=function(e){for(var t=0,n=this.bags;t<n.length;t++){var r=n[t];if(r.name===e)return r}},e.prototype.destroy=function(e){var t=this.find(e),n=this.bags.indexOf(t);this.bags.splice(n,1),t.drake.destroy()},e.prototype.setOptions=function(e,t){var n=this.add(e,o.dragula(t));this.handleModels(e,n.drake)},e.prototype.handleModels=function(e,t){var n,r,o,i,s=this;t.on("remove",function(n,o){t.models&&((i=t.models[t.containers.indexOf(o)]).splice(r,1),s.removeModel.emit([e,n,o]))}),t.on("drag",function(e,t){n=e,r=s.domIndexOf(e,t)}),t.on("drop",function(a,u,l){if(t.models&&u){if(o=s.domIndexOf(a,u),i=t.models[t.containers.indexOf(l)],u===l)i.splice(o,0,i.splice(r,1)[0]);else{var c=n===a,d=t.models[t.containers.indexOf(u)],p=c?i[r]:JSON.parse(JSON.stringify(i[r]));c&&i.splice(r,1),d.splice(o,0,p),u.removeChild(a)}s.dropModel.emit([e,a,u,l])}})},e.prototype.setupEvents=function(e){e.initEvents=!0;var t=this;this.events.forEach(function(n){e.drake.on(n,function(){var r=Array.prototype.slice.call(arguments);t[n].emit([e.name].concat(r))})})},e.prototype.domIndexOf=function(e,t){return Array.prototype.indexOf.call(t.children,e)},e}();s=r([i.Injectable()],s),t.DragulaService=s},wP3s:function(e,t,n){"use strict";t.a=function(e,t,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),function(r){return"number"==typeof t&&(n=t,t=null),r.lift(new s(e,t,n))}};var r=n("6Xbx"),o=n("qgI0"),i=n("lI6h"),s=function(){function e(e,t,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=e,this.resultSelector=t,this.concurrent=n}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.project,this.resultSelector,this.concurrent))},e}(),a=function(e){function t(t,n,r,o){void 0===o&&(o=Number.POSITIVE_INFINITY),e.call(this,t),this.project=n,this.resultSelector=r,this.concurrent=o,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return Object(r.__extends)(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(t,e,n)},t.prototype._innerSub=function(e,t,n){this.add(Object(o.a)(this,e,t,n))},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},t.prototype.notifyNext=function(e,t,n,r,o){this.resultSelector?this._notifyResultSelector(e,t,n,r):this.destination.next(t)},t.prototype._notifyResultSelector=function(e,t,n,r){var o;try{o=this.resultSelector(e,t,n,r)}catch(e){return void this.destination.error(e)}this.destination.next(o)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(i.a)},xIGM:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r="undefined"!=typeof window&&window,o="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,i=r||void 0!==e&&e||o}).call(t,n("GTd5"))}},[0]);;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function show() {
        openDialog({ modal: false });
      },
      showModal: function showModal() {
        openDialog({ modal: true });
      },

      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });

  var fieldsMetadataQueue = [];

  var fieldsAvailableQueue = [];

  var contextualLinksQueue = [];

  var entityInstancesTracker = {};

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);

      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');
      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });

      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });

      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });

      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };

  Drupal.quickedit = {
    app: null,

    collections: {
      entities: null,

      fields: null
    },

    editors: {},

    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return 'Drupal.quickedit.metadata.' + fieldID;
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();

    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);

    var entityElementSelector = '[data-quickedit-entity-id="' + entityID + '"]';
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error('Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id="' + fieldID + '"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id="' + entityID + '"]. This is typically caused by the theme\'s template for this entity type forgetting to print the attributes.');
    }
    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }
    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({ entityID: entityID, entityInstanceID: entityInstanceID })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({ el: fieldElement, fieldID: fieldID, entityID: entityID, entityInstanceID: entityInstanceID });
      }
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });

    $(fieldElement).addClass('quickedit-field');

    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: fieldID + '[' + entity.get('entityInstanceID') + ']',
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });

    Drupal.quickedit.collections.fields.add(field);
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];

      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);

        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: { 'editors[]': missingEditors }
    });

    var realInsert = Drupal.AjaxCommands.prototype.insert;
    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);
      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    } else if (hasFieldWithPermission(fieldIDs)) {
        var entityModel = new Drupal.quickedit.EntityModel({
          el: contextualLink.region,
          entityID: contextualLink.entityID,
          entityInstanceID: contextualLink.entityInstanceID,
          id: contextualLink.entityID + '[' + contextualLink.entityInstanceID + ']',
          label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
        });
        Drupal.quickedit.collections.entities.add(entityModel);

        var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
          el: contextualLink.region,
          model: entityModel
        });
        entityModel.set('entityDecorationView', entityDecorationView);

        _.each(fields, function (field) {
          initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
        });
        fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

        var initContextualLink = _.once(function () {
          var $links = $(contextualLink.el).find('.contextual-links');
          var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
            el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
            model: entityModel,
            appModel: Drupal.quickedit.app.model
          }, options));
          entityModel.set('contextualLinkView', contextualLinkView);
        });

        loadMissingEditors(initContextualLink);

        return true;
      } else if (allMetadataExists(fieldIDs)) {
          return true;
        }

    return false;
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({ el: entityElement });
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();

        entityModel.get('entityDecorationView').remove();

        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });

    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};

  Drupal.quickedit.util.constants = {};

  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $('<div>' + message + '</div>');
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },

        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;

      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', { '@field-label': fieldLabel });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);

          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },

        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },

        base: $submit.attr('id'),
        element: $submit[0]
      };

      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,

      activeField: null,

      activeModal: null
    }

  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      entityID: null,

      entityInstanceID: null,

      id: null,

      label: null,

      fields: null,

      isActive: false,

      inTempStore: false,

      isDirty: false,

      isCommitting: false,

      state: 'closed',

      fieldsInTempStore: [],

      reload: false
    },

    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());

      this.listenTo(this, 'change:state', this.stateChange);

      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);

      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });

            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', { confirming: true });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });

              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);

              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }
            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);

        fieldModel.set('inTempStore', true);

        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', { reason: 'invalid' });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };
            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, { saved: true });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);

                  entityModel.set('state', 'opened', { reason: 'networkerror' });

                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', { '@entity-title': entityModel.get('label') });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }
            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },
    save: function save(options) {
      var entityModel = this;

      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url('quickedit/entity/' + entityModel.get('entityID')),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];

      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return '"' + nextState + '" is an invalid state';
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        } else if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
            return 'state change not accepted because fields are not in acceptable state';
          }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);

      this.stopListening();

      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,

      fieldID: null,

      id: null,

      entity: null,

      metadata: null,

      acceptStateChange: null,

      logicalFieldID: null,

      state: 'inactive',

      isChanged: false,

      inTempStore: false,

      html: null,

      htmlForOtherViewModes: null
    },

    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);

      this.get('entity').get('fields').add(this);

      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));

      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return '"' + next + '" is an invalid state';
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({ logicalFieldID: currentField.get('logicalFieldID') }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],

    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });

  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,

      currentValue: null,

      validationErrors: null
    }

  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;

  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];

      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);

      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);

      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);

      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);

      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView = void 0;
      switch (state) {
        case 'launching':
          reload = false;

          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;

          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            location.reload();
          }
          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField = void 0;
            var activeFieldState = void 0;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');
              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;

      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();

      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });

      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });

      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });

      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;

      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;

      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog = void 0;

      function closeDiscardDialog(action) {
        discardDialog.close(action);

        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', { confirmed: true });
        } else {
          entityModel.set('state', 'deactivating', { confirmed: true });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $('<div>' + Drupal.t('You have unsaved changes') + '</div>');
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },

            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],

          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },

          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);

        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();

        $fieldWrapper.replaceWith(html);

        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', { reason: 'rerender' });

            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({ logicalFieldID: updatedField.get('logicalFieldID') }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], { propagation: true });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({ isActive: true });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,

    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },

    initialize: function initialize(options) {
      this.editorView = options.editorView;

      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', { reason: 'mouseleave' });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;

      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top - 5 + 'px',
          left: posProp.left - 5 + 'px',
          'padding-top': posProp['padding-top'] + 5 + 'px',
          'padding-left': posProp['padding-left'] + 5 + 'px',
          'padding-right': posProp['padding-right'] + 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] + 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] - 10 + 'px'
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');

        self.$el.css({
          position: 'relative',
          top: posProp.top + 5 + 'px',
          left: posProp.left + 5 + 'px',
          'padding-top': posProp['padding-top'] - 5 + 'px',
          'padding-left': posProp['padding-left'] - 5 + 'px',
          'padding-right': posProp['padding-right'] - 5 + 'px',
          'padding-bottom': posProp['padding-bottom'] - 5 + 'px',
          'margin-bottom': posProp['margin-bottom'] + 10 + 'px'
        });
      }, 0);

      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p = void 0;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];

      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,

    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));

      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);

      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);

      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);

      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));

      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });

      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);

      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();

        this.show('ops');

        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();

      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');

      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);

      var that = this;

      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';

      var delay = 0;

      var check = 0;

      var horizontalPadding = 0;
      var of = void 0;
      var activeField = void 0;
      var highlightedField = void 0;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;
                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }
              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePosition(view, suggested, info) {
        var isBelow = suggested.top > info.target.top;
        info.element.element.toggleClass('quickedit-toolbar-pointer-top', isBelow);

        if (view.$entity[0] === info.target.element[0]) {
          var $field = view.$entity.find('.quickedit-editable').eq(isBelow ? -1 : 0);
          if ($field.length > 0) {
            suggested.top = isBelow ? $field.offset().top + $field.outerHeight(true) : $field.offset().top - info.element.element.outerHeight(true);
          }
        }

        var fenceTop = view.$fence.offset().top;
        var fenceHeight = view.$fence.height();
        var toolbarHeight = info.element.element.outerHeight(true);
        if (suggested.top < fenceTop) {
          suggested.top = fenceTop;
        } else if (suggested.top + toolbarHeight > fenceTop + fenceHeight) {
          suggested.top = fenceTop + fenceHeight - toolbarHeight;
        }

        info.element.element.css({
          left: Math.floor(suggested.left),
          top: Math.floor(suggested.top)
        });
      }

      function positionToolbar() {
        that.$el.position({
          my: edge + ' bottom',

          at: edge + '+' + (1 + horizontalPadding) + ' top',
          of: of,
          collision: 'flipfit',
          using: refinePosition.bind(null, that),
          within: that.$fence
        }).css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,

          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();

      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));

      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));

      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });

      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');

      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;

      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);

      this.render();

      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);

      this.$el.closest('.contextual').toggle(!isActive);

      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,

    editorView: null,

    _id: null,

    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;

      this.$root = this.$el;

      this._id = 'quickedit-toolbar-for-' + this.model.id.replace(/[/[\]]/g, '_');

      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));

      this.$el.prependTo(this.$root);

      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));

      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return 'quickedit-toolbar-for-' + this._id;
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-floated-toolgroup-for-' + this._id;
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return 'quickedit-wysiwyg-main-toolgroup-for-' + this._id;
    },
    _find: function _find(toolgroup) {
      return this.$el.find('.quickedit-toolgroup.' + toolgroup);
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });

      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return { padding: false, unifiedToolbar: false, fullWidthToolbar: false, popup: false };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };
            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = 'quickedit_backstage-' + this.fieldModel.id.replace(/[/[\]_\s]/g, '-');

      function fillAndSubmitForm(value) {
        var $form = $('#' + backstageId).find('form');

        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);

        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),

        reset: !this.fieldModel.get('entity').get('inTempStore')
      };

      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', { id: backstageId })).appendTo('body');

        var $form = $(form).appendTo($backstage);

        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();

          fieldModel.set('state', 'saved');

          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);

          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" />';
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit quickedit-toolbar-container clearfix">';
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label" />';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix" />';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return '<span class="field">' + Drupal.checkPlain(settings.fieldLabel) + '</span>' + Drupal.checkPlain(settings.entityLabel);
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence" />';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return '<div id="' + settings.id + '" />';
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += '<div class="' + classes.join(' ') + '"';
    if (settings.id) {
      html += ' id="' + settings.id + '"';
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', { buttons: settings.buttons });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? '="' + attrMap[attr] + '"' : ''));
      });
      html += '<button type="' + button.type + '" class="' + button.classes + '" ' + attributes.join(' ') + '>' + button.label + '</button>';
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }
    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit-form-container">';
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', { '@label': $box.find('a').text() });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        var close = Drupal.t('Close');
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip" aria-label="' + close + '">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', { '!tour_item': index + 1, '!total': total });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
;(function ($, Drupal) {
  Drupal.behaviors.opignoViewPrivateMessage = {
    attach: function (context, settings) {
      var $rows = $('.view-private-message .views-row', context);

      // Redirects to thread if user clicks on thread block.
      $rows.once('click').click(function(e) {
        e.preventDefault();

        var $thread = $(this).find('.private-message-thread');

        if (!$thread.length) {
          return false;
        }

        var id = $thread.attr('data-thread-id');
        window.location = '/private_messages/' + id;

        return false;
      });
    },
  };

  // Fixes multiselect issue 2123241.
  if (Drupal.behaviors.multiSelect
      && !Drupal.behaviors.multiSelect.detach
  ) {
    Drupal.behaviors.multiSelect.detach = function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('select.multiselect-selected').selectAll();
      }
    };
  }
}(jQuery, Drupal));
;
