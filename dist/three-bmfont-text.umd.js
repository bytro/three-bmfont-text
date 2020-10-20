!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],r):r((t=t||self).threeBmfontText={},t.three)}(this,function(t,r){function e(){return(e=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var n=function(t,r){return function(t){var r=/\n/,e=/\s/;function n(t,r,e,n){var i=t.indexOf(r,e);return-1===i||i>n?n:i}function i(t){return e.test(t)}function a(t,r,e,n){return{start:r,end:r+Math.min(n,e-r)}}t.exports=function(r,e){return t.exports.lines(r,e).map(function(t){return r.substring(t.start,t.end)}).join("\n")},t.exports.lines=function(t,e){if(0===(e=e||{}).width&&"nowrap"!==e.mode)return[];t=t||"";var o="number"==typeof e.width?e.width:Number.MAX_VALUE,u=Math.max(0,e.start||0),h="number"==typeof e.end?e.end:t.length,s=e.mode,c=e.measure||a;return"pre"===s?function(t,e,n,i,a){for(var o=[],u=n,h=n;h<i&&h<e.length;h++){var s=e.charAt(h),c=r.test(s);if(c||h===i-1){var f=t(e,u,c?h:h+1,a);o.push(f),u=h+1}}return o}(c,t,u,h,o):function(t,r,e,a,o,u){var h=[],s=o;for("nowrap"===u&&(s=Number.MAX_VALUE);e<a&&e<r.length;){for(var c=n(r,"\n",e,a);e<c&&i(r.charAt(e));)e++;var f=t(r,e,c,s),p=e+(f.end-f.start),l=p+"\n".length;if(p<c){for(;p>e&&!i(r.charAt(p));)p--;if(p===e)l>e+"\n".length&&l--,p=l;else for(l=p;p>e&&i(r.charAt(p-"\n".length));)p--}if(p>=e){var d=t(r,e,p,s);h.push(d)}e=l}return h}(c,t,u,h,o,s)}}(r={exports:{}}),r.exports}(),i=function(){for(var t={},r=0;r<arguments.length;r++){var e=arguments[r];for(var n in e)a.call(e,n)&&(t[n]=e[n])}return t},a=Object.prototype.hasOwnProperty,o=function(t,r){return"number"==typeof t?t:"number"==typeof r?r:0},u=["x","e","a","o","n","s","r","c","u","m","v","w","z"],h=["m","w"],s=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],c="\t".charCodeAt(0),f=" ".charCodeAt(0);function p(t){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(t)}function l(t){return new Function(["return function "+t+"() {","  return this._"+t,"}"].join("\n"))()}function d(t,r){if(!t.chars||0===t.chars.length)return null;var e=g(t.chars,r);return e>=0?t.chars[e]:null}function y(t,r,e){if(!t.kernings||0===t.kernings.length)return 0;for(var n=t.kernings,i=0;i<n.length;i++){var a=n[i];if(a.first===r&&a.second===e)return a.amount}return 0}function g(t,r,e){for(var n=e=e||0;n<t.length;n++)if(t[n].id===r)return n;return-1}p.prototype.update=function(t){if(t=i({measure:this._measure},t),this._opt=t,this._opt.tabSize=o(this._opt.tabSize,4),!t.font)throw new Error("must provide a valid bitmap font");var r=this.glyphs,e=t.text||"",a=t.font;this._setupSpaceGlyphs(a);var h=n.lines(e,t),c=t.width||0;r.length=0;var f=h.reduce(function(t,r){return Math.max(t,r.width,c)},0),p=0,l=0,d=o(t.lineHeight,a.common.lineHeight),m=a.common.base,v=d-m,b=t.letterSpacing||0,x=d*h.length-v,w=function(t){return"center"===t?1:"right"===t?2:0}(this._opt.align);l-=x,this._width=f,this._height=x,this._descender=d-m,this._baseline=m,this._xHeight=function(t){for(var r=0;r<u.length;r++){var e=u[r].charCodeAt(0),n=g(t.chars,e);if(n>=0)return t.chars[n].height}return 0}(a),this._capHeight=function(t){for(var r=0;r<s.length;r++){var e=s[r].charCodeAt(0),n=g(t.chars,e);if(n>=0)return t.chars[n].height}return 0}(a),this._lineHeight=d,this._ascender=d-v-this._xHeight;var _=this;h.forEach(function(t,n){for(var i,o=t.end,u=t.width,h=t.start;h<o;h++){var s=e.charCodeAt(h),c=_.getGlyph(a,s);if(c){i&&(p+=y(a,i.id,c.id));var g=p;1===w?g+=(f-u)/2:2===w&&(g+=f-u),r.push({position:[g,l],data:c,index:h,line:n}),p+=c.xadvance+b,i=c}}l+=d,p=0}),this._linesTotal=h.length},p.prototype._setupSpaceGlyphs=function(t){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,t.chars&&0!==t.chars.length){var r=d(t,f)||function(t){for(var r=0;r<h.length;r++){var e=h[r].charCodeAt(0),n=g(t.chars,e);if(n>=0)return t.chars[n]}return 0}(t)||t.chars[0],e=this._opt.tabSize*r.xadvance;this._fallbackSpaceGlyph=r,this._fallbackTabGlyph=i(r,{x:0,y:0,xadvance:e,id:c,xoffset:0,yoffset:0,width:0,height:0})}},p.prototype.getGlyph=function(t,r){return d(t,r)||(r===c?this._fallbackTabGlyph:r===f?this._fallbackSpaceGlyph:null)},p.prototype.computeMetrics=function(t,r,e,n){var i,a=this._opt.letterSpacing||0,o=this._opt.font,u=0,h=0,s=0;if(!o.chars||0===o.chars.length)return{start:r,end:r,width:0};e=Math.min(t.length,e);for(var c=r;c<e;c++){var f,p=t.charCodeAt(c);if(f=this.getGlyph(o,p)){var l=(u+=i?y(o,i.id,f.id):0)+f.xadvance+a,d=u+f.width;if(d>=n||l>=n)break;u=l,h=d,i=f}s++}return i&&(h+=i.xoffset),{start:r,end:r+s,width:h}},["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(function(t){Object.defineProperty(p.prototype,t,{get:l(t),configurable:!0})});var m=Object.prototype.toString;function v(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var b=[0,2,3],x=[2,1,3];function w(t){for(var r=t.length/2,e={min:[t[0],t[1]],max:[t[0],t[1]]},n=0;n<r;n++){var i=t[2*n+0],a=t[2*n+1];e.min[0]=Math.min(i,e.min[0]),e.min[1]=Math.min(a,e.min[1]),e.max[0]=Math.max(i,e.max[0]),e.max[1]=Math.max(a,e.max[1])}return e}t.TextGeometry=function(t){var n,i;function a(r){var n;return(n=t.call(this)||this).options=e({},r),n.update(r),n}i=t,(n=a).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var o=a.prototype;return o.update=function(t){if(!(t=e({},this.options,t)).font)throw new TypeError("must specify a { font } in options");this.layout=function(t){return new p(t)}(t);var n=!1!==t.flipY,i=t.font,a=i.common.scaleW,o=i.common.scaleH,u=this.layout.glyphs.filter(function(t){var r=t.data;return r.width*r.height>0});this.visibleGlyphs=u;var h=function(t){var r=new Float32Array(4*t.length*2),e=0;return t.forEach(function(t){var n=t.data,i=t.position[0]+n.xoffset,a=t.position[1]+n.yoffset,o=n.width,u=n.height;r[e++]=i,r[e++]=a,r[e++]=i,r[e++]=a+u,r[e++]=i+o,r[e++]=a+u,r[e++]=i+o,r[e++]=a}),r}(u),s=function(t,r,e,n){var i=new Float32Array(4*t.length*2),a=0;return t.forEach(function(t){var o=t.data,u=o.y+o.height,h=o.x/r,s=o.y/e,c=(o.x+o.width)/r,f=u/e;n&&(s=(e-o.y)/e,f=(e-u)/e),i[a++]=h,i[a++]=s,i[a++]=h,i[a++]=f,i[a++]=c,i[a++]=f,i[a++]=c,i[a++]=s}),i}(u,a,o,n),c=function(t,r){var e,n;t&&((n=t).BYTES_PER_ELEMENT&&"[object ArrayBuffer]"===m.call(n.buffer)||Array.isArray(n)||null!=(e=t)&&(v(e)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&v(t.slice(0,0))}(e)||e._isBuffer))||(r=t||{},t=null);for(var i=(r="number"==typeof r?{count:r}:r||{}).start||0,a=!1!==r.clockwise?b:x,o=a[0],u=a[1],h=a[2],s=6*("number"==typeof r.count?r.count:1),c=t||new(function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}}("string"==typeof r.type?r.type:"uint16"))(s),f=0,p=0;f<s;f+=6,p+=4){var l=f+i;c[l+0]=p+0,c[l+1]=p+1,c[l+2]=p+2,c[l+3]=p+o,c[l+4]=p+u,c[l+5]=p+h}return c}({clockwise:!0,type:"uint16",count:u.length});this.setIndex(new r.BufferAttribute(c,1)),this.setAttribute("position",new r.BufferAttribute(h,2)),this.setAttribute("uv",new r.BufferAttribute(s,2)),"page"in this.attributes&&this.deleteAttribute("page")},o.computeBoundingSphere=function(){this.boundingSphere||(this.boundingSphere=new r.Sphere);var t=this.attributes.position.array;if(!t||!this.attributes.position.itemSize||t.length<2)return this.boundingSphere.radius=0,void this.boundingSphere.center.set(0,0,0);!function(t,r){var e=w(t),n=e.min[0],i=e.min[1],a=e.max[0]-n,o=e.max[1]-i,u=Math.sqrt(a*a+o*o);r.center.set(n+a/2,i+o/2,0),r.radius=u/2}(t,this.boundingSphere)},o.computeBoundingBox=function(){this.boundingBox||(this.boundingBox=new r.Box3);var t=this.attributes.position.array;!t||!this.attributes.position.itemSize||t.length<2?this.boundingBox.makeEmpty():function(t,r){var e=w(t);r.min.set(e.min[0],e.min[1],0),r.max.set(e.max[0],e.max[1],0)}(t,this.boundingBox)},a}(r.BufferGeometry)});
//# sourceMappingURL=three-bmfont-text.umd.js.map
