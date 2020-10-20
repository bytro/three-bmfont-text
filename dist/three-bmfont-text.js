var t=require("three");function r(){return(r=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}var n,e=(function(t){var r=/\n/,n=/\s/;function e(t,r,n,e){var i=t.indexOf(r,n);return-1===i||i>e?e:i}function i(t){return n.test(t)}function a(t,r,n,e){return{start:r,end:r+Math.min(e,n-r)}}t.exports=function(r,n){return t.exports.lines(r,n).map(function(t){return r.substring(t.start,t.end)}).join("\n")},t.exports.lines=function(t,n){if(0===(n=n||{}).width&&"nowrap"!==n.mode)return[];t=t||"";var o="number"==typeof n.width?n.width:Number.MAX_VALUE,h=Math.max(0,n.start||0),u="number"==typeof n.end?n.end:t.length,s=n.mode,c=n.measure||a;return"pre"===s?function(t,n,e,i,a){for(var o=[],h=e,u=e;u<i&&u<n.length;u++){var s=n.charAt(u),c=r.test(s);if(c||u===i-1){var f=t(n,h,c?u:u+1,a);o.push(f),h=u+1}}return o}(c,t,h,u,o):function(t,r,n,a,o,h){var u=[],s=o;for("nowrap"===h&&(s=Number.MAX_VALUE);n<a&&n<r.length;){for(var c=e(r,"\n",n,a);n<c&&i(r.charAt(n));)n++;var f=t(r,n,c,s),p=n+(f.end-f.start),l=p+"\n".length;if(p<c){for(;p>n&&!i(r.charAt(p));)p--;if(p===n)l>n+"\n".length&&l--,p=l;else for(l=p;p>n&&i(r.charAt(p-"\n".length));)p--}if(p>=n){var d=t(r,n,p,s);u.push(d)}n=l}return u}(c,t,h,u,o,s)}}(n={exports:{}}),n.exports),i=function(){for(var t={},r=0;r<arguments.length;r++){var n=arguments[r];for(var e in n)a.call(n,e)&&(t[e]=n[e])}return t},a=Object.prototype.hasOwnProperty,o=function(t,r){return"number"==typeof t?t:"number"==typeof r?r:0},h=["x","e","a","o","n","s","r","c","u","m","v","w","z"],u=["m","w"],s=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],c="\t".charCodeAt(0),f=" ".charCodeAt(0);function p(t){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(t)}function l(t){return new Function(["return function "+t+"() {","  return this._"+t,"}"].join("\n"))()}function d(t,r){if(!t.chars||0===t.chars.length)return null;var n=y(t.chars,r);return n>=0?t.chars[n]:null}function g(t,r,n){if(!t.kernings||0===t.kernings.length)return 0;for(var e=t.kernings,i=0;i<e.length;i++){var a=e[i];if(a.first===r&&a.second===n)return a.amount}return 0}function y(t,r,n){for(var e=n=n||0;e<t.length;e++)if(t[e].id===r)return e;return-1}p.prototype.update=function(t){if(t=i({measure:this._measure},t),this._opt=t,this._opt.tabSize=o(this._opt.tabSize,4),!t.font)throw new Error("must provide a valid bitmap font");var r=this.glyphs,n=t.text||"",a=t.font;this._setupSpaceGlyphs(a);var u=e.lines(n,t),c=t.width||0;r.length=0;var f=u.reduce(function(t,r){return Math.max(t,r.width,c)},0),p=0,l=0,d=o(t.lineHeight,a.common.lineHeight),v=a.common.base,m=d-v,b=t.letterSpacing||0,x=d*u.length-m,w=function(t){return"center"===t?1:"right"===t?2:0}(this._opt.align);l-=x,this._width=f,this._height=x,this._descender=d-v,this._baseline=v,this._xHeight=function(t){for(var r=0;r<h.length;r++){var n=h[r].charCodeAt(0),e=y(t.chars,n);if(e>=0)return t.chars[e].height}return 0}(a),this._capHeight=function(t){for(var r=0;r<s.length;r++){var n=s[r].charCodeAt(0),e=y(t.chars,n);if(e>=0)return t.chars[e].height}return 0}(a),this._lineHeight=d,this._ascender=d-m-this._xHeight;var _=this;u.forEach(function(t,e){for(var i,o=t.end,h=t.width,u=t.start;u<o;u++){var s=n.charCodeAt(u),c=_.getGlyph(a,s);if(c){i&&(p+=g(a,i.id,c.id));var y=p;1===w?y+=(f-h)/2:2===w&&(y+=f-h),r.push({position:[y,l],data:c,index:u,line:e}),p+=c.xadvance+b,i=c}}l+=d,p=0}),this._linesTotal=u.length},p.prototype._setupSpaceGlyphs=function(t){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,t.chars&&0!==t.chars.length){var r=d(t,f)||function(t){for(var r=0;r<u.length;r++){var n=u[r].charCodeAt(0),e=y(t.chars,n);if(e>=0)return t.chars[e]}return 0}(t)||t.chars[0],n=this._opt.tabSize*r.xadvance;this._fallbackSpaceGlyph=r,this._fallbackTabGlyph=i(r,{x:0,y:0,xadvance:n,id:c,xoffset:0,yoffset:0,width:0,height:0})}},p.prototype.getGlyph=function(t,r){return d(t,r)||(r===c?this._fallbackTabGlyph:r===f?this._fallbackSpaceGlyph:null)},p.prototype.computeMetrics=function(t,r,n,e){var i,a=this._opt.letterSpacing||0,o=this._opt.font,h=0,u=0,s=0;if(!o.chars||0===o.chars.length)return{start:r,end:r,width:0};n=Math.min(t.length,n);for(var c=r;c<n;c++){var f,p=t.charCodeAt(c);if(f=this.getGlyph(o,p)){var l=(h+=i?g(o,i.id,f.id):0)+f.xadvance+a,d=h+f.width;if(d>=e||l>=e)break;h=l,u=d,i=f}s++}return i&&(u+=i.xoffset),{start:r,end:r+s,width:u}},["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(function(t){Object.defineProperty(p.prototype,t,{get:l(t),configurable:!0})});var v=Object.prototype.toString;function m(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var b=[0,2,3],x=[2,1,3];function w(t){for(var r=t.length/2,n={min:[t[0],t[1]],max:[t[0],t[1]]},e=0;e<r;e++){var i=t[2*e+0],a=t[2*e+1];n.min[0]=Math.min(i,n.min[0]),n.min[1]=Math.min(a,n.min[1]),n.max[0]=Math.max(i,n.max[0]),n.max[1]=Math.max(a,n.max[1])}return n}exports.TextGeometry=function(n){var e,i;function a(t){var e;return(e=n.call(this)||this).options=r({},t),e.update(t),e}i=n,(e=a).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var o=a.prototype;return o.update=function(n){if(!(n=r({},this.options,n)).font)throw new TypeError("must specify a { font } in options");this.layout=function(t){return new p(t)}(n);var e=!1!==n.flipY,i=n.font,a=i.common.scaleW,o=i.common.scaleH,h=this.layout.glyphs.filter(function(t){var r=t.data;return r.width*r.height>0});this.visibleGlyphs=h;var u=function(t){var r=new Float32Array(4*t.length*2),n=0;return t.forEach(function(t){var e=t.data,i=t.position[0]+e.xoffset,a=t.position[1]+e.yoffset,o=e.width,h=e.height;r[n++]=i,r[n++]=a,r[n++]=i,r[n++]=a+h,r[n++]=i+o,r[n++]=a+h,r[n++]=i+o,r[n++]=a}),r}(h),s=function(t,r,n,e){var i=new Float32Array(4*t.length*2),a=0;return t.forEach(function(t){var o=t.data,h=o.y+o.height,u=o.x/r,s=o.y/n,c=(o.x+o.width)/r,f=h/n;e&&(s=(n-o.y)/n,f=(n-h)/n),i[a++]=u,i[a++]=s,i[a++]=u,i[a++]=f,i[a++]=c,i[a++]=f,i[a++]=c,i[a++]=s}),i}(h,a,o,e),c=function(t,r){var n,e;t&&((e=t).BYTES_PER_ELEMENT&&"[object ArrayBuffer]"===v.call(e.buffer)||Array.isArray(e)||null!=(n=t)&&(m(n)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&m(t.slice(0,0))}(n)||n._isBuffer))||(r=t||{},t=null);for(var i=(r="number"==typeof r?{count:r}:r||{}).start||0,a=!1!==r.clockwise?b:x,o=a[0],h=a[1],u=a[2],s=6*("number"==typeof r.count?r.count:1),c=t||new(function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}}("string"==typeof r.type?r.type:"uint16"))(s),f=0,p=0;f<s;f+=6,p+=4){var l=f+i;c[l+0]=p+0,c[l+1]=p+1,c[l+2]=p+2,c[l+3]=p+o,c[l+4]=p+h,c[l+5]=p+u}return c}({clockwise:!0,type:"uint16",count:h.length});this.setIndex(new t.BufferAttribute(c,1)),this.setAttribute("position",new t.BufferAttribute(u,2)),this.setAttribute("uv",new t.BufferAttribute(s,2)),"page"in this.attributes&&this.deleteAttribute("page")},o.computeBoundingSphere=function(){this.boundingSphere||(this.boundingSphere=new t.Sphere);var r=this.attributes.position.array;if(!r||!this.attributes.position.itemSize||r.length<2)return this.boundingSphere.radius=0,void this.boundingSphere.center.set(0,0,0);!function(t,r){var n=w(t),e=n.min[0],i=n.min[1],a=n.max[0]-e,o=n.max[1]-i,h=Math.sqrt(a*a+o*o);r.center.set(e+a/2,i+o/2,0),r.radius=h/2}(r,this.boundingSphere)},o.computeBoundingBox=function(){this.boundingBox||(this.boundingBox=new t.Box3);var r=this.attributes.position.array;!r||!this.attributes.position.itemSize||r.length<2?this.boundingBox.makeEmpty():function(t,r){var n=w(t);r.min.set(n.min[0],n.min[1],0),r.max.set(n.max[0],n.max[1],0)}(r,this.boundingBox)},a}(t.BufferGeometry);
//# sourceMappingURL=three-bmfont-text.js.map
