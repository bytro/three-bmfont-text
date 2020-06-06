import{BufferAttribute as t,Sphere as r,Box3 as n,BufferGeometry as e}from"three";var i,a=(function(t){var r=/\n/,n=/\s/;function e(t,r,n,e){var i=t.indexOf(r,n);return-1===i||i>e?e:i}function i(t){return n.test(t)}function a(t,r,n,e){return{start:r,end:r+Math.min(e,n-r)}}t.exports=function(r,n){return t.exports.lines(r,n).map(function(t){return r.substring(t.start,t.end)}).join("\n")},t.exports.lines=function(t,n){if(0===(n=n||{}).width&&"nowrap"!==n.mode)return[];t=t||"";var o="number"==typeof n.width?n.width:Number.MAX_VALUE,s=Math.max(0,n.start||0),u="number"==typeof n.end?n.end:t.length,h=n.mode,c=n.measure||a;return"pre"===h?function(t,n,e,i,a){for(var o=[],s=e,u=e;u<i&&u<n.length;u++){var h=n.charAt(u),c=r.test(h);if(c||u===i-1){var f=t(n,s,c?u:u+1,a);o.push(f),s=u+1}}return o}(c,t,s,u,o):function(t,r,n,a,o,s){var u=[],h=o;for("nowrap"===s&&(h=Number.MAX_VALUE);n<a&&n<r.length;){for(var c=e(r,"\n",n,a);n<c&&i(r.charAt(n));)n++;var f=t(r,n,c,h),l=n+(f.end-f.start),p=l+"\n".length;if(l<c){for(;l>n&&!i(r.charAt(l));)l--;if(l===n)p>n+"\n".length&&p--,l=p;else for(p=l;l>n&&i(r.charAt(l-"\n".length));)l--}if(l>=n){var y=t(r,n,l,h);u.push(y)}n=p}return u}(c,t,s,u,o,h)}}(i={exports:{}}),i.exports),o=function(){for(var t={},r=0;r<arguments.length;r++){var n=arguments[r];for(var e in n)s.call(n,e)&&(t[e]=n[e])}return t},s=Object.prototype.hasOwnProperty,u=function(t,r){return"number"==typeof t?t:"number"==typeof r?r:0},h=["x","e","a","o","n","s","r","c","u","m","v","w","z"],c=["m","w"],f=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],l="\t".charCodeAt(0),p=" ".charCodeAt(0);function y(t){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(t)}function d(t){return new Function(["return function "+t+"() {","  return this._"+t,"}"].join("\n"))()}function g(t,r){if(!t.chars||0===t.chars.length)return null;var n=v(t.chars,r);return n>=0?t.chars[n]:null}function m(t,r,n){if(!t.kernings||0===t.kernings.length)return 0;for(var e=t.kernings,i=0;i<e.length;i++){var a=e[i];if(a.first===r&&a.second===n)return a.amount}return 0}function v(t,r,n){for(var e=n=n||0;e<t.length;e++)if(t[e].id===r)return e;return-1}y.prototype.update=function(t){if(t=o({measure:this._measure},t),this._opt=t,this._opt.tabSize=u(this._opt.tabSize,4),!t.font)throw new Error("must provide a valid bitmap font");var r=this.glyphs,n=t.text||"",e=t.font;this._setupSpaceGlyphs(e);var i=a.lines(n,t),s=t.width||0;r.length=0;var c=i.reduce(function(t,r){return Math.max(t,r.width,s)},0),l=0,p=0,y=u(t.lineHeight,e.common.lineHeight),d=e.common.base,g=y-d,b=t.letterSpacing||0,A=y*i.length-g,x=function(t){return"center"===t?1:"right"===t?2:0}(this._opt.align);p-=A,this._width=c,this._height=A,this._descender=y-d,this._baseline=d,this._xHeight=function(t){for(var r=0;r<h.length;r++){var n=h[r].charCodeAt(0),e=v(t.chars,n);if(e>=0)return t.chars[e].height}return 0}(e),this._capHeight=function(t){for(var r=0;r<f.length;r++){var n=f[r].charCodeAt(0),e=v(t.chars,n);if(e>=0)return t.chars[e].height}return 0}(e),this._lineHeight=y,this._ascender=y-g-this._xHeight;var w=this;i.forEach(function(t,i){for(var a,o=t.end,s=t.width,u=t.start;u<o;u++){var h=n.charCodeAt(u),f=w.getGlyph(e,h);if(f){a&&(l+=m(e,a.id,f.id));var d=l;1===x?d+=(c-s)/2:2===x&&(d+=c-s),r.push({position:[d,p],data:f,index:u,line:i}),l+=f.xadvance+b,a=f}}p+=y,l=0}),this._linesTotal=i.length},y.prototype._setupSpaceGlyphs=function(t){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,t.chars&&0!==t.chars.length){var r=g(t,p)||function(t){for(var r=0;r<c.length;r++){var n=c[r].charCodeAt(0),e=v(t.chars,n);if(e>=0)return t.chars[e]}return 0}(t)||t.chars[0],n=this._opt.tabSize*r.xadvance;this._fallbackSpaceGlyph=r,this._fallbackTabGlyph=o(r,{x:0,y:0,xadvance:n,id:l,xoffset:0,yoffset:0,width:0,height:0})}},y.prototype.getGlyph=function(t,r){return g(t,r)||(r===l?this._fallbackTabGlyph:r===p?this._fallbackSpaceGlyph:null)},y.prototype.computeMetrics=function(t,r,n,e){var i,a=this._opt.letterSpacing||0,o=this._opt.font,s=0,u=0,h=0;if(!o.chars||0===o.chars.length)return{start:r,end:r,width:0};n=Math.min(t.length,n);for(var c=r;c<n;c++){var f,l=t.charCodeAt(c);if(f=this.getGlyph(o,l)){var p=(s+=i?m(o,i.id,f.id):0)+f.xadvance+a,y=s+f.width;if(y>=e||p>=e)break;s=p,u=y,i=f}h++}return i&&(u+=i.xoffset),{start:r,end:r+h,width:u}},["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(function(t){Object.defineProperty(y.prototype,t,{get:d(t),configurable:!0})});var b=Object.prototype.toString;function A(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var x=[0,2,3],w=[2,1,3],_=function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}},S=function(t,r,n){if(!t)throw new TypeError("must specify data as first parameter");if(n=0|+(n||0),Array.isArray(t)&&t[0]&&"number"==typeof t[0][0]){var e,i,a,o,s=t[0].length,u=t.length*s;r&&"string"!=typeof r||(r=new(_(r||"float32"))(u+n));var h=r.length-n;if(u!==h)throw new Error("source length "+u+" ("+s+"x"+t.length+") does not match destination length "+h);for(e=0,a=n;e<t.length;e++)for(i=0;i<s;i++)r[a++]=null===t[e][i]?NaN:t[e][i]}else if(r&&"string"!=typeof r)r.set(t,n);else{var c=_(r||"float32");if(Array.isArray(t)||"array"===r)for(e=0,a=n,o=(r=new c(t.length+n)).length;a<o;a++,e++)r[a]=null===t[e]?NaN:t[e];else 0===n?r=new c(t):(r=new c(t.length+n)).set(t,n)}return r};function E(t,r,n,e,i){if("number"!=typeof e&&(e=3),"string"!=typeof i&&(i="float32"),Array.isArray(n)&&Array.isArray(n[0])&&n[0].length!==e)throw new Error("Nested vertex array has unexpected size; expected "+e+" but found "+n[0].length);var a=M(n,e,i);t.setAttribute(r,a)}function M(r,n,e){r=S(r=r||[],e);var i=new t(r,n);return i.itemSize=n,i.needsUpdate=!0,i}function k(t){for(var r=t.length/2,n={min:[t[0],t[1]],max:[t[0],t[1]]},e=0;e<r;e++){var i=t[2*e+0],a=t[2*e+1];n.min[0]=Math.min(i,n.min[0]),n.min[1]=Math.min(a,n.min[1]),n.max[0]=Math.max(i,n.max[0]),n.max[1]=Math.max(a,n.max[1])}return n}var B=function(t){var e,i;function a(r){var n;return(n=t.call(this)||this).update(r),n}i=t,(e=a).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var o=a.prototype;return o.update=function(t){if(!t.font)throw new TypeError("must specify a { font } in options");this.layout=function(t){return new y(t)}(t);var r=!1!==t.flipY,n=t.font,e=n.common.scaleW,i=n.common.scaleH,a=this.layout.glyphs.filter(function(t){var r=t.data;return r.width*r.height>0});this.visibleGlyphs=a;var o=function(t){var r=new Float32Array(4*t.length*2),n=0;return t.forEach(function(t){var e=t.data,i=t.position[0]+e.xoffset,a=t.position[1]+e.yoffset,o=e.width,s=e.height;r[n++]=i,r[n++]=a,r[n++]=i,r[n++]=a+s,r[n++]=i+o,r[n++]=a+s,r[n++]=i+o,r[n++]=a}),r}(a),s=function(t,r,n,e){var i=new Float32Array(4*t.length*2),a=0;return t.forEach(function(t){var o=t.data,s=o.y+o.height,u=o.x/r,h=o.y/n,c=(o.x+o.width)/r,f=s/n;e&&(h=(n-o.y)/n,f=(n-s)/n),i[a++]=u,i[a++]=h,i[a++]=u,i[a++]=f,i[a++]=c,i[a++]=f,i[a++]=c,i[a++]=h}),i}(a,e,i,r);!function(t,r,n,e){"number"!=typeof n&&(n=1),"string"!=typeof e&&(e="uint16");var i=M(r,n,e);i&&(t.index||"function"==typeof t.setIndex?t.index=i:t.addAttribute("index",i))}(this,function(t,r){var n,e;t&&((e=t).BYTES_PER_ELEMENT&&"[object ArrayBuffer]"===b.call(e.buffer)||Array.isArray(e)||null!=(n=t)&&(A(n)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&A(t.slice(0,0))}(n)||n._isBuffer))||(r=t||{},t=null);for(var i=(r="number"==typeof r?{count:r}:r||{}).start||0,a=!1!==r.clockwise?x:w,o=a[0],s=a[1],u=a[2],h=6*("number"==typeof r.count?r.count:1),c=t||new(function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}}("string"==typeof r.type?r.type:"uint16"))(h),f=0,l=0;f<h;f+=6,l+=4){var p=f+i;c[p+0]=l+0,c[p+1]=l+1,c[p+2]=l+2,c[p+3]=l+o,c[p+4]=l+s,c[p+5]=l+u}return c}({clockwise:!0,type:"uint16",count:a.length}),1,"uint16"),E(this,"position",o,2),E(this,"uv",s,2),"page"in this.attributes&&this.removeAttribute("page")},o.computeBoundingSphere=function(){this.boundingSphere||(this.boundingSphere=new r);var t=this.attributes.position.array;if(!t||!this.attributes.position.itemSize||t.length<2)return this.boundingSphere.radius=0,void this.boundingSphere.center.set(0,0,0);!function(t,r){var n=k(t),e=n.min[0],i=n.min[1],a=n.max[0]-e,o=n.max[1]-i,s=Math.sqrt(a*a+o*o);r.center.set(e+a/2,i+o/2,0),r.radius=s/2}(t,this.boundingSphere)},o.computeBoundingBox=function(){this.boundingBox||(this.boundingBox=new n);var t=this.attributes.position.array;!t||!this.attributes.position.itemSize||t.length<2?this.boundingBox.makeEmpty():function(t,r){var n=k(t);r.min.set(n.min[0],n.min[1],0),r.max.set(n.max[0],n.max[1],0)}(t,this.boundingBox)},a}(e);export{B as TextGeometry};
//# sourceMappingURL=three-bmfont-text.module.js.map