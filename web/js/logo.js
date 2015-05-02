if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function e$$0(x,Q,k){function h(a,b){if(!Q[a]){if(!x[a]){var d="function"==typeof require&&require;if(!b&&d)return d(a,!0);if(m)return m(a,!0);throw Error("Cannot find module '"+a+"'");}d=Q[a]={exports:{}};x[a][0].call(d.exports,function(f){var b=x[a][1][f];return h(b?b:f)},d,d.exports,e$$0,x,Q,k)}return Q[a].exports}for(var m="function"==typeof require&&require,n=0;n<k.length;n++)h(k[n]);return h})({1:[function(D,x,Q){x={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(k){var h=
new XMLHttpRequest;h.open("GET",k,!1);h.overrideMimeType&&h.overrideMimeType("text/plain");h.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");h.send(null);if(200!==h.status&&0!==h.status)throw"XMLHttpRequest failed, status code "+h.status;return h.responseText}};window.Processing=D("./src/")(x)},{"./src/":27}],2:[function(D,x,Q){x.exports={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",
open:"0.0.3"},devDependencies:{grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(D,x,Q){x.exports=function(k){if(k instanceof Array){var h=-1;this.hasNext=function(){return++h<k.length};this.next=function(){return k[h]}}else{if(k.iterator instanceof Function)return k.iterator();throw"Unable to iterate: "+k;}}},{}],4:[function(D,x,Q){x.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,
VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,
HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,
QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,
DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,
ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(D,x,Q){x.exports=function(k){function h(){}function m(a,d,f){if(a.hasOwnProperty(d)&&
"function"===typeof a[d]){var l=a[d];if("$overloads"in l)l.$defaultOverload=f;else if("$overloads"in f||l.length!==f.length){var p;"$overloads"in f?(p=f.$overloads.slice(0),p[l.length]=l,l=f.$defaultOverload):(p=[],p[f.length]=f,p[l.length]=l);var r=function(){return(r.$overloads[arguments.length]||("$methodArgsIndex"in r&&arguments.length>r.$methodArgsIndex?r.$overloads[r.$methodArgsIndex]:null)||r.$defaultOverload).apply(this,arguments)};r.$overloads=p;"$methodArgsIndex"in f&&(r.$methodArgsIndex=
f.$methodArgsIndex);r.$defaultOverload=l;r.name=d;a[d]=r}}else a[d]=f}function n(b,d){function f(f){a.defineProperty(b,f,{get:function(){return d[f]},set:function(c){d[f]=c},enumerable:!0})}var l=[],p;for(p in d)"function"===typeof d[p]?m(b,p,d[p]):"$"===p.charAt(0)||p in b||l.push(p);for(;0<l.length;)f(l.shift());b.$super=d}h.prototype=k.PConstants;var a=new h;Object.keys(k).forEach(function(b){a[b]=k[b]});a.defineProperty=function(a,d,f){"defineProperty"in Object?Object.defineProperty(a,d,f):(f.hasOwnProperty("get")&&
a.__defineGetter__(d,f.get),f.hasOwnProperty("set")&&a.__defineSetter__(d,f.set))};a.extendClassChain=function(a){for(var d=[a],f=a.$upcast;f;f=f.$upcast)n(f,a),d.push(f),a=f;for(;0<d.length;)d.pop().$self=a};a.extendStaticMembers=function(a,d){n(a,d)};a.extendInterfaceMembers=function(a,d){n(a,d)};a.addMethod=function(a,d,f,l){var p=a[d];if(p||l){var r=f.length;if("$overloads"in p)p.$overloads[r]=f;else{var c=function(){return(c.$overloads[arguments.length]||("$methodArgsIndex"in c&&arguments.length>
c.$methodArgsIndex?c.$overloads[c.$methodArgsIndex]:null)||c.$defaultOverload).apply(this,arguments)},h=[];p&&(h[p.length]=p);h[r]=f;c.$overloads=h;c.$defaultOverload=p||f;l&&(c.$methodArgsIndex=r);c.name=d;a[d]=c}}else a[d]=f};a.createJavaArray=function(b,d){var f=null,l=null;if("string"===typeof b)if("boolean"===b)l=!1;else{var p;p="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);p&&(l=0)}if("number"===typeof d[0])if(p=0|d[0],1>=d.length){f=[];f.length=p;
for(var r=0;r<p;++r)f[r]=l}else for(f=[],l=d.slice(1),r=0;r<p;++r)f.push(a.createJavaArray(b,l));return f};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],6:[function(D,x,Q){x.exports=function(k,h){var m=h.window,n=h.document,a=m.XMLHttpRequest,b=h.noop,d=h.isDOMPresent,f=h.version;k.version=f?f:"@DEV-VERSION@";k.lib={};k.registerLibrary=function(f,c){k.lib[f]=c;c.hasOwnProperty("init")&&
c.init(defaultScope)};k.Sketch=function(f){this.attachFunction=f;this.options={pauseOnBlur:!1,globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(c,f){if(!this.images[c]&&(d||(this.images[c]=null),f||(f=new Image,f.onload=function(c){return function(){c.pending--}}(this),this.pending++,f.src=c),this.images[c]=f,m.opera)){var a=n.createElement("div");a.appendChild(f);
a.style.position="absolute";a.style.opacity=0;a.style.width="1px";a.style.height="1px";this.operaCache[c]||(n.body.appendChild(a),this.operaCache[c]=a)}}};this.sourceCode=void 0;this.attach=function(c){if("function"===typeof this.attachFunction)this.attachFunction(c);else if(this.sourceCode){var f=(new Function("return ("+this.sourceCode+");"))();f(c);this.attachFunction=f}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var c,f;f="((function(Sketch) {\n"+
("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(c in this.options)if(this.options.hasOwnProperty(c)){var a=this.options[c];f+="sketch.options."+c+" = "+("string"===typeof a?'"'+a+'"':""+a)+";\n"}for(c in this.imageCache)this.options.hasOwnProperty(c)&&(f+='sketch.imageCache.add("'+c+'");\n');return f+"return sketch;\n})(Processing.Sketch))"}};var l=k.loadSketchFromSources=function(f,c){function d(c,f){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var c;200!==b.status&&
0!==b.status?c="Invalid XHR status "+b.status:""===b.responseText&&(c="withCredentials"in new a&&!1===(new a).withCredentials&&"file:"===m.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");f(b.responseText,c)}};b.open("GET",c,!0);b.overrideMimeType&&
b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}function b(c,a){function m(d,b){l[c]=d;++v;b&&p.push(a+" ==> "+b);if(v===h)if(0===p.length)try{return new k(f,l.join("\n"))}catch(md){throw console.log("Processing.js: Unable to execute pjs sketch."),md;}else throw"Processing.js: Unable to load pjs sketch files: "+p.join("\n");}if("#"===a.charAt(0)){var ca=n.getElementById(a.substring(1));ca?m(ca.text||ca.textContent):m("","Unable to load pjs sketch: element with id '"+
a.substring(1)+"' was not found")}else d(a,m)}for(var l=[],p=[],h=c.length,v=0,ga=0;ga<h;++ga)b(ga,c[ga])},p=function(){n.removeEventListener("DOMContentLoaded",p,!1);processingInstances=[];k.instances=processingInstances;for(var f=n.getElementsByTagName("canvas"),c,a=0,d=f.length;a<d;a++){var b=f[a].getAttribute("data-processing-sources");null===b&&(b=f[a].getAttribute("data-src"),null===b&&(b=f[a].getAttribute("datasrc")));if(b){c=b.split(/\s+/g);for(b=0;b<c.length;)c[b]?b++:c.splice(b,1);l(f[a],
c)}}f=n.getElementsByTagName("script");d=[];for(a=f.length-1;0<=a;a--)d.push(f[a]);a=0;for(b=d.length;a<b;a++)if(c=d[a],c.getAttribute&&(f=c.getAttribute("type"))&&("text/processing"===f.toLowerCase()||"application/processing"===f.toLowerCase())){var h=c.getAttribute("data-processing-target"),f=void 0;if(h)f=n.getElementById(h);else{for(h=c.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;h&&"canvas"===h.nodeName.toLowerCase()&&(f=h)}f&&(c.getAttribute("src")?(c=c.getAttribute("src").split(/\s+/),l(f,
c)):(c=c.textContent||c.text,new k(f,c)))}};n.addEventListener("DOMContentLoaded",p,!1);k.reload=function(){if(0<processingInstances.length)for(var f=processingInstances.length-1;0<=f;f--)processingInstances[f]&&processingInstances[f].exit();p()};k.disableInit=function(){n.removeEventListener("DOMContentLoaded",p,!1)};return k}},{}],7:[function(D,x,Q){x.exports=function(k,h){return null===k||null===h?null===k&&null===h:"string"===typeof k||"object"!==typeof k?k===h:k.equals instanceof Function?k.equals(h):
k===h}},{}],8:[function(D,x,Q){x.exports=function(k,h){if("string"===typeof k){for(var m=0,n=0;n<k.length;++n)m=31*m+k.charCodeAt(n)&4294967295;return m}if("object"!==typeof k)return k&4294967295;if(k.hashCode instanceof Function)return k.hashCode();k.$id===h&&(k.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return k.$id}},{}],9:[function(D,x,Q){x.exports=function(k){function h(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};
this.remove=function(){a.splice(b--,1)}}function m(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var f=0,l=b.length;f<l;++f)if(n(a,b[f]))return f;return-1};this.lastIndexOf=function(a){for(var f=b.length-1;0<=f;--f)if(n(a,b[f]))return f;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=
a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,f){var l;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+a+" greater or equal than "+b.length;for(l=new ObjectIterator(f);l.hasNext();)b.splice(a++,0,l.next())}else for(l=new ObjectIterator(a);l.hasNext();)b.push(l.next())};this.set=function(){if(2===arguments.length){var a=
arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var f,b,p,r=new m;r.addAll(this);this.clear();for(b=f=0;f<r.size();f++)p=
r.get(f),a.contains(p)||this.add(b++,p);return this.size()<r.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new m(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new h(b)}}var n=k.virtEquals;return m}},{}],10:[function(D,x,Q){x.exports=function(k,h){var m=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof m?n:NaN;return k[this.code]===h?k[this.code]=this:k[this.code]};m.prototype.toString=
function(){return String.fromCharCode(this.code)};m.prototype.valueOf=function(){return this.code};return m}({})},{}],11:[function(D,x,Q){x.exports=function(k){function h(){function a(f){f=m(f)%c.length;return 0>f?c.length+f:f}function b(){if(!(k<=r*c.length)){for(var f=[],b=0;b<c.length;++b)void 0!==c[b]&&(f=f.concat(c[b]));b=2*c.length;c=[];c.length=b;for(b=0;b<f.length;++b){var d=a(f[b].key),l=c[d];void 0===l&&(c[d]=l=[]);l.push(f[b])}}}function d(f,a){function b(){for(;!p;)if(++l,d>=c.length)p=
!0;else if(void 0===c[d]||l>=c[d].length)l=-1,++d;else break}var d=0,l=-1,p=!1,r;this.hasNext=function(){return!p};this.next=function(){r=f(c[d][l]);b();return r};this.remove=function(){void 0!==r&&(a(r),--l,b())};b()}function f(c,f,a){this.clear=function(){ca.clear()};this.contains=function(c){return f(c)};this.containsAll=function(c){for(c=c.iterator();c.hasNext();)if(!this.contains(c.next()))return!1;return!0};this.isEmpty=function(){return ca.isEmpty()};this.iterator=function(){return new d(c,
a)};this.remove=function(c){return this.contains(c)?(a(c),!0):!1};this.removeAll=function(c){for(c=c.iterator();c.hasNext();){var f=c.next();this.contains(f)&&a(f)}return!0};this.retainAll=function(c){for(var f=this.iterator(),b=[];f.hasNext();){var d=f.next();c.contains(d)||b.push(d)}for(c=0;c<b.length;++c)a(b[c]);return 0<b.length};this.size=function(){return ca.size()};this.toArray=function(){for(var c=[],f=this.iterator();f.hasNext();)c.push(f.next());return c}}function l(c){this._isIn=function(f){return f===
ca&&void 0===c.removed};this.equals=function(f){return n(c.key,f.getKey())};this.getKey=function(){return c.key};this.getValue=function(){return c.value};this.hashCode=function(f){return m(c.key)};this.setValue=function(f){var a=c.value;c.value=f;return a}}if(1===arguments.length&&arguments[0]instanceof h)return arguments[0].clone();var p=0<arguments.length?arguments[0]:16,r=1<arguments.length?arguments[1]:0.75,c=[];c.length=p;var k=0,ca=this;this.clear=function(){k=0;c=[];c.length=p};this.clone=
function(){var c=new h;c.putAll(this);return c};this.containsKey=function(f){var b=a(f),b=c[b];if(void 0===b)return!1;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return!0;return!1};this.containsValue=function(f){for(var a=0;a<c.length;++a){var b=c[a];if(void 0!==b)for(var d=0;d<b.length;++d)if(n(b[d].value,f))return!0}return!1};this.entrySet=function(){return new f(function(c){return new l(c)},function(c){return c instanceof l&&c._isIn(ca)},function(c){return ca.remove(c.getKey())})};this.get=function(f){var b=
a(f),b=c[b];if(void 0===b)return null;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return b[d].value;return null};this.isEmpty=function(){return 0===k};this.keySet=function(){return new f(function(c){return c.key},function(c){return ca.containsKey(c)},function(c){return ca.remove(c)})};this.values=function(){return new f(function(c){return c.value},function(c){return ca.containsValue(c)},function(c){return ca.removeByValue(c)})};this.put=function(f,d){var l=a(f),p=c[l];if(void 0===p)return++k,c[l]=
[{key:f,value:d}],b(),null;for(l=0;l<p.length;++l)if(n(p[l].key,f)){var r=p[l].value;p[l].value=d;return r}++k;p.push({key:f,value:d});b();return null};this.putAll=function(c){for(c=c.entrySet().iterator();c.hasNext();){var f=c.next();this.put(f.getKey(),f.getValue())}};this.remove=function(f){var b=a(f),d=c[b];if(void 0===d)return null;for(var l=0;l<d.length;++l)if(n(d[l].key,f))return--k,f=d[l].value,d[l].removed=!0,1<d.length?d.splice(l,1):c[b]=void 0,f;return null};this.removeByValue=function(f){var a,
b,d,l;for(a in c)if(c.hasOwnProperty(a))for(b=0,d=c[a].length;b<d;b++)if(l=c[a][b],l.value===f)return c[a].splice(b,1),!0;return!1};this.size=function(){return k}}var m=k.virtHashCode,n=k.virtEquals;return h}},{}],12:[function(D,x,Q){x.exports=function(k,h){function m(b,d){b===h&&(b="");this.name=b;d===h&&(d=0);this.size=d;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*d;var f=b.indexOf(" Italic Bold");-1!==f&&(b=b.substring(0,f));this.style="normal";f=b.indexOf(" Italic");-1!==f&&(b=b.substring(0,
f),this.style="italic");this.weight="normal";f=b.indexOf(" Bold");-1!==f&&(b=b.substring(0,f),this.weight="bold");this.family="sans-serif";if(b!==h)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var f=this.size/250,l=n.createElement("canvas");l.width=500;l.height=500;l.style.opacity=0;var p=this.getCSSDefinition("250px","normal"),r=l.getContext("2d");r.font=p;l.width=r.measureText("dbflkhyjqpg").width;
r.font=p;p=n.createElement("div");p.style.position="absolute";p.style.opacity=0;p.style.fontFamily='"'+this.name+'"';p.style.fontSize="250px";p.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(p);var c=l.width,k=l.height,l=k/2;r.fillStyle="white";r.fillRect(0,0,c,k);r.fillStyle="black";r.fillText("dbflkhyjqpg",0,l);for(var k=r.getImageData(0,0,c,k).data,m=0,G=4*c,A=k.length;++m<A&&255===k[m];)a();c=Math.round(m/G);for(m=A-1;0<--m&&255===k[m];)a();k=Math.round(m/G);this.ascent=f*(l-c);this.descent=
f*(k-l);n.defaultView.getComputedStyle&&(l=n.defaultView.getComputedStyle(p,null).getPropertyValue("height"),l=f*l.replace("px",""),l>=2*this.size&&(this.leading=Math.round(l/2)));n.body.removeChild(p);f=this.caching?r:void 0;this.context2d=f;this.css=this.getCSSDefinition();this.context2d&&(this.context2d.font=this.css)}var n=k.Browser.document,a=k.noop;m.prototype.caching=!0;m.prototype.getCSSDefinition=function(a,d){a===h&&(a=this.size+"px");d===h&&(d=this.leading+"px");return[this.style,"normal",
this.weight,a+"/"+d,this.family].join(" ")};m.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};m.prototype.measureTextWidthFallback=function(a){var d=n.createElement("canvas").getContext("2d");d.font=this.css;return d.measureText(a).width};m.PFontCache={length:0};m.get=function(a,d){d=(10*d+0.5|0)/10;var f=m.PFontCache,l=a+"/"+d;if(!f[l]){f[l]=new m(a,d);f.length++;if(50===f.length){m.prototype.measureTextWidth=m.prototype.measureTextWidthFallback;m.prototype.caching=
!1;for(var p in f)"length"!==p&&(f[p].context2d=null);return new m(a,d)}if(400===f.length)return m.PFontCache={},m.get=m.getFallback,new m(a,d)}return f[l]};m.getFallback=function(a,d){return new m(a,d)};m.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};m.preloading={template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var d,f,l=this.getElementWidth(this.template),p=0;p<this.fontList.length;p++){d=this.fontList[p];f=this.getElementWidth(d);if(4E3>this.timeAttempted&&f===l)return this.timeAttempted+=a,!0;n.body.removeChild(d);this.fontList.splice(p--,1);this.timeAttempted=
0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var d="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[d]){var f=n.createElement("style");f.setAttribute("type","text/css");f.innerHTML="@font-face{\n  font-family: '"+d+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(f);this.addedList[d]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily=
'"'+d+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return m}},{}],13:[function(D,x,Q){x.exports=function(k,h){var m=k.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],
a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},
invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var d,f;a instanceof PVector?(d=a.x,f=a.y,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2],b[1]=this.elements[3]*d+this.elements[4]*f+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2],b.y=this.elements[3]*d+this.elements[4]*f+this.elements[5],b.z=0);return b},multX:function(a,
b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=
this.elements[0],d=this.elements[1],f=this.elements[2],l=this.elements[3],p=this.elements[4],r=this.elements[5];this.elements[0]=p/a;this.elements[3]=-l/a;this.elements[1]=-d/a;this.elements[4]=b/a;this.elements[2]=(d*r-p*f)/a;this.elements[5]=(l*f-b*r)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof
n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],d=0,f=0;2>f;f++)for(var l=0;3>l;l++,d++)b[d]+=this.elements[3*f+0]*a[l+0]+this.elements[3*f+1]*a[l+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&
arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var d=this.elements[0],f=this.elements[1];this.elements[0]=
b*d+a*f;this.elements[1]=-a*d+b*f;d=this.elements[3];f=this.elements[4];this.elements[3]=b*d+a*f;this.elements[4]=-a*d+b*f},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+"\n"+m.nfs(this.elements[3],a,4)+" "+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+"\n\n";m.println(a)}};return n}},{}],14:[function(D,
x,Q){x.exports=function(k,h){var m=k.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},
translate:function(a,b,d){d===h&&(d=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+d*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+d*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+d*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+d*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=
a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var d,f,l,p;a instanceof PVector?(d=a.x,f=a.y,l=a.z,p=1,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],l=a[2],p=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof
Array&&(3===b.length?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3]*p,b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7]*p,b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+
this.elements[11]*p,b[3]=this.elements[12]*d+this.elements[13]*f+this.elements[14]*l+this.elements[15]*p));b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b.y=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b.z=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):
1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[l+0]*a[4*f+0]+this.elements[l+4]*a[4*f+1]+this.elements[l+8]*a[4*f+2]+this.elements[l+12]*a[4*f+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&
(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[4*f+0]*a[l+0]+this.elements[4*f+1]*a[l+4]+this.elements[4*f+2]*a[l+8]+this.elements[4*f+3]*a[l+12];this.elements=b.slice()},rotate:function(a,b,d,f){if(d){var l=Math.cos(a);a=Math.sin(a);var p=1-l;this.apply(p*b*b+l,p*b*d-a*f,p*b*f+a*d,0,p*b*d+a*f,p*d*d+l,p*d*f-a*b,0,p*b*f-a*d,p*d*f+a*b,p*f*f+l,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===h&&(inverseCopy=new n);
var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,
b,d){!a||b||d?a&&(b&&!d)&&(d=1):b=d=a;a&&(b&&d)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=d,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=d,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=d,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=d)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,
0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,d,f){return d?f?this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]*f:this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,d,f){return d?f?this.elements[4]*a+this.elements[5]*b+this.elements[6]*d+this.elements[7]*f:this.elements[4]*a+this.elements[5]*b+this.elements[6]*
d+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,d,f){return f?this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]*f:this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]},multW:function(a,b,d,f){return f?this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]*f:this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-
this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],d=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],f=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],l=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],p=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],r=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],c=this.elements[8]*this.elements[14]-this.elements[10]*
this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],m=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],x=a*n-b*m+d*k+f*h-l*c+p*r;if(1E-9>=Math.abs(x))return!1;var v=[];v[0]=+this.elements[5]*n-this.elements[6]*m+this.elements[7]*k;v[4]=-this.elements[4]*n+this.elements[6]*h-this.elements[7]*c;
v[8]=+this.elements[4]*m-this.elements[5]*h+this.elements[7]*r;v[12]=-this.elements[4]*k+this.elements[5]*c-this.elements[6]*r;v[1]=-this.elements[1]*n+this.elements[2]*m-this.elements[3]*k;v[5]=+this.elements[0]*n-this.elements[2]*h+this.elements[3]*c;v[9]=-this.elements[0]*m+this.elements[1]*h-this.elements[3]*r;v[13]=+this.elements[0]*k-this.elements[1]*c+this.elements[2]*r;v[2]=+this.elements[13]*p-this.elements[14]*l+this.elements[15]*f;v[6]=-this.elements[12]*p+this.elements[14]*d-this.elements[15]*
b;v[10]=+this.elements[12]*l-this.elements[13]*d+this.elements[15]*a;v[14]=-this.elements[12]*f+this.elements[13]*b-this.elements[14]*a;v[3]=-this.elements[9]*p+this.elements[10]*l-this.elements[11]*f;v[7]=+this.elements[8]*p-this.elements[10]*d+this.elements[11]*b;v[11]=-this.elements[8]*l+this.elements[9]*d-this.elements[11]*a;v[15]=+this.elements[8]*f-this.elements[9]*b+this.elements[10]*a;a=1/x;v[0]*=a;v[1]*=a;v[2]*=a;v[3]*=a;v[4]*=a;v[5]*=a;v[6]*=a;v[7]*=a;v[8]*=a;v[9]*=a;v[10]*=a;v[11]*=a;v[12]*=
a;v[13]*=a;v[14]*=a;v[15]*=a;this.elements=v.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+" "+m.nfs(this.elements[3],a,4)+"\n"+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+" "+m.nfs(this.elements[6],a,4)+" "+m.nfs(this.elements[7],a,4)+"\n"+m.nfs(this.elements[8],
a,4)+" "+m.nfs(this.elements[9],a,4)+" "+m.nfs(this.elements[10],a,4)+" "+m.nfs(this.elements[11],a,4)+"\n"+m.nfs(this.elements[12],a,4)+" "+m.nfs(this.elements[13],a,4)+" "+m.nfs(this.elements[14],a,4)+" "+m.nfs(this.elements[15],a,4)+"\n\n";m.println(a)},invTranslate:function(a,b,d){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-d,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);
this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,d){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/d,0,0,0,0,1])}};return n}},{}],15:[function(D,x,Q){x.exports=function(k){var h=k.PConstants,m=k.PMatrix2D,n=k.PMatrix3D;k=function(a){this.family=a||h.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=
this.close=this.kind=this.matrix=this.image=null};k.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=
a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===h.GROUP?this.drawGroup(a):this.family===h.PRIMITIVE?this.drawPrimitive(a):this.family===h.GEOMETRY?this.drawGeometry(a):this.family===h.PATH&&this.drawPath(a)},drawPath:function(a){var b,d;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=
0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var f=0;if(2===this.vertices[0].length)for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f].moveTo),a.breakShape=!1,f++):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+
0][1],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+2][0],this.vertices[f+2][1]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0);else for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),!0===this.vertices[f].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[f].moveTo&&(vertArray[vertArray.length-
1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+0][1],this.vertices[f+0][2],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+1][2],this.vertices[f+2][0],this.vertices[f+2][1],this.vertices[f+2][2]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0)}a.endShape(this.close?h.CLOSE:h.OPEN)}},drawGeometry:function(a){var b,
d;a.beginShape(this.kind);if(this.style)for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b]);else for(b=0,d=this.vertices.length;b<d;b++){var f=this.vertices[b];0===f[2]?a.vertex(f[0],f[1]):a.vertex(f[0],f[1],f[2])}a.endShape()},drawGroup:function(a){for(var b=0,d=this.children.length;b<d;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===h.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===h.LINE)4===this.params.length?a.line(this.params[0],this.params[1],
this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.TRIANGLE)a.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===h.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(h.CORNER);
a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(h.CORNER),a.rect(this.params[0],this.params[1],this.params[2],this.params[3]),a.curRectMode=b;else this.kind===h.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(h.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===h.ARC?(b=curEllipseMode,a.ellipseMode(h.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],
this.params[4],this.params[5]),curEllipseMode=b):this.kind===h.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===h.SPHERE&&a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),
a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,d;if("number"===typeof a)return this.children[a];var f;if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(d=this.nameTable.length;b<d||f;b++)if(this.nameTable[b].getName===a){f=this.nameTable[b];break}if(f)return f}b=0;for(d=this.children.length;b<d;b++)if(f=this.children[b].getChild(a))return f;return null},getChildCount:function(){return this.children.length},
addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new m:new n:3===a&&this.matrix instanceof m&&(this.matrix=
new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],
arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return k}},{}],16:[function(D,x,Q){x.exports=function(k){var h=k.CommonFunctions,m=k.PConstants,n=k.PShape,a=k.XMLElement,b=k.colors,d=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,
this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&
(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),
this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,
this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var f=this.element.getAttribute("transform");f&&(this.matrix=this.parseMatrix(f));f=this.element.getStringAttribute("viewBox");null!==f&&(f=f.split(" "),this.width=f[2],this.height=f[3]);var f=this.element.getStringAttribute("width"),
b=this.element.getStringAttribute("height");if(null!==f)this.width=this.parseUnitSize(f),this.height=this.parseUnitSize(b);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};d.prototype=new n;d.prototype.parseMatrix=function(){function f(f){var a=[];f.replace(/\((.*?)\)/,function(){return function(f,c){a=c.replace(/,+/g," ").split(/\s+/)}}());
return a}return function(a){this.checkMatrix(2);var b=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(c){b.push(h.trim(c))});if(0===b.length)return null;a=0;for(var d=b.length;a<d;a++){var c=f(b[a]);if(-1!==b[a].indexOf("matrix"))this.matrix.set(c[0],c[2],c[4],c[1],c[3],c[5]);else if(-1!==b[a].indexOf("translate"))this.matrix.translate(c[0],2===c.length?c[1]:0);else if(-1!==b[a].indexOf("scale"))this.matrix.scale(c[0],2===c.length?c[1]:c[0]);else if(-1!==b[a].indexOf("rotate")){var k=c[0];1===c.length?
this.matrix.rotate(h.radians(k)):3===c.length&&(this.matrix.translate(c[1],c[2]),this.matrix.rotate(h.radians(c[0])),this.matrix.translate(-c[1],-c[2]))}else-1!==b[a].indexOf("skewX")?this.matrix.skewX(parseFloat(c[0])):-1!==b[a].indexOf("skewY")?this.matrix.skewY(c[0]):-1!==b[a].indexOf("shearX")?this.matrix.shearX(c[0]):-1!==b[a].indexOf("shearY")&&this.matrix.shearY(c[0])}return this.matrix}}();d.prototype.parseChildren=function(f){f=f.getChildren();var a=new n,b,d;b=0;for(d=f.length;b<d;b++){var c=
this.parseChild(f[b]);c&&a.addChild(c)}b=0;for(d=a.children.length;b<d;b++)this.children.push(a.children[b])};d.prototype.getName=function(){return this.name};d.prototype.parseChild=function(f){var a=f.getName(),b;"g"===a?b=new d(this,f):"defs"===a?b=new d(this,f):"line"===a?(b=new d(this,f),b.parseLine()):"circle"===a?(b=new d(this,f),b.parseEllipse(!0)):"ellipse"===a?(b=new d(this,f),b.parseEllipse(!1)):"rect"===a?(b=new d(this,f),b.parseRect()):"polygon"===a?(b=new d(this,f),b.parsePoly(!0)):"polyline"===
a?(b=new d(this,f),b.parsePoly(!1)):"path"===a?(b=new d(this,f),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};d.prototype.parsePath=
function(){this.family=m.PATH;this.kind=0;var f=h.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==f)for(var f=f.split(""),a=0,b=0,d=0,c=0,k=c=d=0,n=0,G=0,A=0,x=A=c=G=d=0,v=0,ga="",q=[],D=!1,M,nc,u;x<f.length;)if(v=f[x].charCodeAt(0),65<=v&&90>=v||97<=v&&122>=v){u=x;x++;if(x<f.length)for(q=[],v=f[x].charCodeAt(0);!(65<=v&&90>=v||97<=v&&100>=v||102<=v&&122>=v)&&!1===D;)32===v?""!==ga&&(q.push(parseFloat(ga)),ga=""):45===v?101===f[x-1].charCodeAt(0)?ga+=f[x].toString():(""!==
ga&&q.push(parseFloat(ga)),ga=f[x].toString()):ga+=f[x].toString(),x++,x===f.length?D=!0:v=f[x].charCodeAt(0);""!==ga&&(q.push(parseFloat(ga)),ga="");nc=f[u];v=nc.charCodeAt(0);if(77===v){if(2<=q.length&&0===q.length%2&&(a=q[0],b=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(109===v){if(2<=q.length&&0===q.length%2&&(a+=q[0],b+=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,
b)}else if(76===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(108===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,b)}else if(72===v)for(u=0,v=q.length;u<v;u++)a=q[u],this.parsePathLineto(a,b);else if(104===v)for(u=0,v=q.length;u<v;u++)a+=q[u],this.parsePathLineto(a,b);else if(86===v)for(u=0,v=q.length;u<v;u++)b=q[u],this.parsePathLineto(a,b);else if(118===v)for(u=0,v=q.length;u<
v;u++)b+=q[u],this.parsePathLineto(a,b);else if(67===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=q[u],k=q[u+1],c=q[u+2],n=q[u+3],G=q[u+4],A=q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(99===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=a+q[u],k=b+q[u+1],c=a+q[u+2],n=b+q[u+3],G=a+q[u+4],A=b+q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(83===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?
(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=q[u],n=q[u+1],G=q[u+2],A=q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(115===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?(d=this.vertices[this.vertices.length-
2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=a+q[u],n=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(81===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=q[u],c=q[u+1],G=q[u+2],A=q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(113===v){if(4<=
q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=a+q[u],c=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(84===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=q[u],A=q[u+1],this.parsePathQuadto(a,b,
d,c,G,A),a=G,b=A}else if(116===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=a+q[u],A=b+q[u+1],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(90===v||122===v)this.close=!0;M=nc.toString()}else x++};d.prototype.parsePathQuadto=function(a,
b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a+2*(d-a)/3,b+2*(r-b)/3),this.parsePathVertex(c+2*(d-c)/3,h+2*(r-h)/3),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathCurveto=function(a,b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a,b),this.parsePathVertex(d,r),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathLineto=function(a,b){if(0<
this.vertices.length)this.parsePathCode(m.VERTEX),this.parsePathVertex(a,b),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};d.prototype.parsePathMoveto=function(a,b){0<this.vertices.length&&this.parsePathCode(m.BREAK);this.parsePathCode(m.VERTEX);this.parsePathVertex(a,b);this.vertices[this.vertices.length-1].moveTo=!0};d.prototype.parsePathVertex=function(a,b){var d=[];d[0]=a;d[1]=b;this.vertices.push(d)};d.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};
d.prototype.parsePoly=function(a){this.family=m.PATH;this.close=a;a=h.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%2)for(var b=0,d=a.length;b<d;b++){var r=[];r[0]=a[b];r[1]=a[++b];this.vertices.push(r)}else throw"Error parsing polygon points: odd number of coordinates provided";};d.prototype.parseRect=function(){this.kind=m.RECT;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=
this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";};d.prototype.parseEllipse=function(a){this.kind=m.ELLIPSE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var b;if(a){if(a=b=this.element.getFloatAttribute("r"),
0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),b=this.element.getFloatAttribute("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";this.params[0]-=a;this.params[1]-=b;this.params[2]=2*a;this.params[3]=2*b};d.prototype.parseLine=function(){this.kind=m.LINE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");
this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};d.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var b=0,d=a.length;b<d;b++){var r=h.trim(a[b].split(":"));"fill"===r[0]?this.setFill(r[1]):"fill-opacity"===r[0]?this.setFillOpacity(r[1]):"stroke"===r[0]?this.setStroke(r[1]):"stroke-width"===r[0]?this.setStrokeWeight(r[1]):"stroke-linecap"===r[0]?this.setStrokeCap(r[1]):"stroke-linejoin"===r[0]?this.setStrokeJoin(r[1]):"stroke-opacity"===r[0]?this.setStrokeOpacity(r[1]):
"opacity"===r[0]&&this.setOpacity(r[1])}}};d.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};d.prototype.setFill=function(a){var d=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=d|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?
this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};d.prototype.setStroke=function(a){var d=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=d|parseInt(a.substring(1),
16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};d.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=m.MITER:"round"===a?this.strokeJoin=m.ROUND:"bevel"===a&&(this.strokeJoin=m.BEVEL)};d.prototype.setStrokeCap=function(a){"butt"===
a?this.strokeCap=m.SQUARE:"round"===a?this.strokeCap=m.ROUND:"square"===a&&(this.strokeCap=m.PROJECT)};d.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<24|this.strokeColor&16777215};d.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};d.prototype.parseUnitSize=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===
b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return d}},{}],17:[function(D,x,Q){x.exports=function(k,h){function m(a,b,l){this.x=a||0;this.y=b||0;this.z=l||0}function n(a){return function(b,l){var p=b.get();p[a](l);return p}}var a=k.PConstants;m.fromAngle=function(a,b){if(b===h||
null===b)b=new m;b.x=Math.cos(a);b.y=Math.sin(a);return b};m.random2D=function(b){return m.fromAngle(Math.random()*a.TWO_PI,b)};m.random3D=function(b){var f=Math.random()*a.TWO_PI,l=2*Math.random()-1,p=Math.sqrt(1-l*l),r=p*Math.cos(f),f=p*Math.sin(f);b===h||null===b?b=new m(r,f,l):b.set(r,f,l);return b};m.dist=function(a,b){return a.dist(b)};m.dot=function(a,b){return a.dot(b)};m.cross=function(a,b){return a.cross(b)};m.sub=function(a,b){return new m(a.x-b.x,a.y-b.y,a.z-b.z)};m.angleBetween=function(a,
b){return Math.acos(a.dot(b)/(a.mag()*b.mag()))};m.lerp=function(a,b,l){a=new m(a.x,a.y,a.z);a.lerp(b,l);return a};m.prototype={set:function(a,b,l){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=l)},get:function(){return new m(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,l=this.z;return Math.sqrt(a*a+b*b+l*l)},magSq:function(){var a=this.x,b=this.y,l=this.z;return a*a+b*b+l*l},setMag:function(a,b){if(b===h)b=a,this.normalize(),this.mult(b);
else return a.normalize(),a.mult(b),a},add:function(a,b,l){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=l)},sub:function(a,b,l){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=l)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=
this.x,l=Math.cos(a);a=Math.sin(a);this.x=l*this.x-a*this.y;this.y=a*b+l*this.y},dist:function(a){var b=this.x-a.x,l=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+l*l+a*a)},dot:function(a,b,l){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*l},cross:function(a){var b=this.x,l=this.y,p=this.z;return new m(l*a.z-a.y*p,p*a.x-a.z*b,b*a.y-a.x*l)},lerp:function(a,b,l,p){var r,c;2===arguments.length?(p=b,r=a.x,c=a.y,l=a.z):(r=a,c=b);this.x+=(r-this.x)*p;this.y+=(c-this.y)*
p;this.z+=(l-this.z)*p},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in m.prototype)m.prototype.hasOwnProperty(b)&&!m.hasOwnProperty(b)&&(m[b]=n(b));return m}},{}],18:[function(D,x,Q){x.exports=function(){var k=
function(h,k,n,a,b){this.fullName=h||"";this.name=k||"";this.namespace=n||"";this.value=a;this.type=b};k.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(h){this.value=h}};return k}},{}],19:[function(D,x,Q){x.exports=function(k,h){var m=k.Browser,n=m.ajax,a=m.window.DOMParser,b=k.XMLAttribute,d=function(a,b,d,r){this.attributes=
[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";a&&("string"===typeof a?b===h&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=d,this.lineNr=r):this.parse(b))};d.prototype={parse:function(b){var d;try{var p=b.substring(b.length-4);if(".xml"===p||".svg"===p)b=n(b);d=(new a).parseFromString(b,"text/xml");var r=d.documentElement;if(r)this.parseChildrenRecursive(null,r);else throw"Error loading document";
return this}catch(c){throw c;}},parseChildrenRecursive:function(a,l){var p,r,c,h;a?(p=new d(l.nodeName),p.parent=a):(this.fullName=l.localName,this.name=l.nodeName,p=this);if(3===l.nodeType&&""!==l.textContent)return this.createPCDataElement(l.textContent);if(4===l.nodeType)return this.createCDataElement(l.textContent);if(l.attributes)for(c=0,h=l.attributes.length;c<h;c++)r=l.attributes[c],r=new b(r.getname,r.nodeName,r.namespaceURI,r.nodeValue,r.nodeType),p.attributes.push(r);if(l.childNodes)for(c=
0,h=l.childNodes.length;c<h;c++)r=p.parseChildrenRecursive(p,l.childNodes[c]),null!==r&&p.children.push(r);return p},createElement:function(a,b,p,r){return p===h?new d(a,b):new d(a,b,p,r)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var p=new d;p.type="TEXT";p.content=a;return p},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var d={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},r;for(r in d)Object.hasOwnProperty(d,
r)||(a=a.replace(RegExp(r,"g"),d[r]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof d))return!1;var b,p;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var r,c;b=0;for(p=this.attributes.length;b<p;b++)if(r=this.attributes[b].getName(),
c=this.attributes[b].getNamespace(),r=a.findAttribute(r,c),null===r||this.attributes[b].getValue()!==r.getValue()||this.attributes[b].getType()!==r.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(p=this.children.length;b<p;b++)if(r=this.getChild(b),c=a.getChild(b),!r.equals(c))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==
a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],
arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):
2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var d=this.children[this.children.length-1];if(null===d.getLocalName()){d.setContent(d.getContent()+a.getContent());return}}a.parent=
this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),0);for(var b,d,r=0,c=this.getChildCount();r<c;r++)if(b=this.getChild(r),d=b.getName(),null!==d&&d===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
0);for(var a=[],b,d,r=0,c=this.getChildCount();r<c;r++)b=this.getChild(r),d=b.getName(),null!==d&&d===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(a,b){if(b===a.length)return this;for(var d,r,c=a[b],h=0,k=this.getChildCount();h<k;h++)if(d=this.getChild(h),r=d.getName(),null!==r&&r===c)return d.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);
for(var d=this.getChildren(a[b]),r=[],c=0;c<d.length;c++)r=r.concat(d[c].getChildrenRecursive(a,b+1));return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,d=this.children.length;b<d;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace){this.attributes.splice(d,1);break}},removeChild:function(a){if(a)for(var b=
0,d=this.children.length;b<d;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace)return this.attributes[d];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var d=arguments[0].substring(a+
1);(a=this.findAttribute(d,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],d,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");
this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content;
if("CDATA"===this.type)return this.cdata;var a=this.fullName,b="<"+a,d;for(d=0;d<this.attributes.length;d++)var r=this.attributes[d],b=b+(" "+r.getName()+'="'+r.getValue()+'"');if(0===this.children.length)b=""===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(d=0;d<this.children.length;d++)b+=this.children[d].toString();b+="</"+a+">"}return b}};d.parse=function(a){var b=new d;b.parse(a);return b};return d}},{}],20:[function(D,x,Q){x.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",
darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",
hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",
linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],21:[function(D,x,Q){x.exports=function(k,h,m){return function(n,a){n.__contains=function(b,d){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==d&&"string"===typeof d&&-1<b.indexOf(d)};n.__replaceAll=function(b,d,f){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):
b.replace(RegExp(d,"g"),f)};n.__replaceFirst=function(b,d,f){return"string"!==typeof b?b.replaceFirst.apply(b,a(arguments)):b.replace(RegExp(d,""),f)};n.__replace=function(b,d,f){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(d instanceof RegExp)return b.replace(d,f);"string"!==typeof d&&(d=d.toString());if(""===d)return b;var h=b.indexOf(d);if(0>h)return b;var k=0,r="";do r+=b.substring(k,h)+f,k=h+d.length;while(0<=(h=b.indexOf(d,k)));return r+b.substring(k)};n.__equals=function(b,
d){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):h(b,d)};n.__equalsIgnoreCase=function(b,d){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===d.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var d=[],f=0,h=b.length;f<h;++f)d[f]=new Char(b.charAt(f));return d};n.__split=function(b,d,f){if("string"!==typeof b)return b.split.apply(b,a(arguments));var h=RegExp(d);if(f===m||1>f)return b.split(h);
for(var k=[],r=b,c;-1!==(c=r.search(h))&&k.length<f-1;){var n=h.exec(r).toString();k.push(r.substring(0,c));r=r.substring(c+n.length)}-1===c&&""===r||k.push(r);return k};n.__codePointAt=function(a,d){var f=a.charCodeAt(d),h;return 55296<=f&&56319>=f?(h=a.charCodeAt(d+1),1024*(f-55296)+(h-56320)+65536):f};n.__matches=function(a,d){return RegExp(d).test(a)};n.__startsWith=function(b,d,f){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));f=f||0;return 0>f||f>b.length?!1:""===d||d===b?
!0:b.indexOf(d)===f};n.__endsWith=function(b,d){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));var f=d?d.length:0;return""===d||d===b?!0:b.indexOf(d)===b.length-f};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):k(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],22:[function(D,x,Q){x.exports=function(k,h){function m(a,b){var c=a||362436069,d=b||521288629,f=function(){c=36969*(c&65535)+(c>>>16)&4294967295;
d=18E3*(d&65535)+(d>>>16)&4294967295;return((c&65535)<<16|d&65535)&4294967295};this.doubleGenerator=function(){var a=f()/4294967296;return 0>a?1+a:a};this.intGenerator=f}function n(a){function b(a,c,d,f){a&=15;var r=8>a?c:d;c=4>a?d:12===a||14===a?c:f;return(0===(a&1)?r:-r)+(0===(a&2)?c:-c)}function c(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}function d(a,b,c){return b+a*(c-b)}a=a!==h?new m(a):m.createRandomized();var f,k,l=new Uint8Array(512);for(f=0;256>f;++f)l[f]=f;for(f=0;256>f;++f){var n=l[k=
a.intGenerator()&255];l[k]=l[f];l[f]=n}for(f=0;256>f;++f)l[f+256]=l[f];this.noise3d=function(a,c,f){var h=Math.floor(a)&255,k=Math.floor(c)&255,p=Math.floor(f)&255;a-=Math.floor(a);c-=Math.floor(c);f-=Math.floor(f);var m=(3-2*a)*a*a,n=(3-2*c)*c*c,G=l[h]+k,ca=l[G]+p,G=l[G+1]+p,k=l[h+1]+k,h=l[k]+p,p=l[k+1]+p;return d((3-2*f)*f*f,d(n,d(m,b(l[ca],a,c,f),b(l[h],a-1,c,f)),d(m,b(l[G],a,c-1,f),b(l[p],a-1,c-1,f))),d(n,d(m,b(l[ca+1],a,c,f-1),b(l[h+1],a-1,c,f-1)),d(m,b(l[G+1],a,c-1,f-1),b(l[p+1],a-1,c-1,f-1))))};
this.noise2d=function(a,b){var f=Math.floor(a)&255,r=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var h=(3-2*a)*a*a,k=l[f]+r,f=l[f+1]+r;return d((3-2*b)*b*b,d(h,c(l[k],a,b),c(l[f],a-1,b)),d(h,c(l[k+1],a,b-1),c(l[f+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return d((3-2*a)*a*a,0===(l[b]&1)?-a:a,0===(l[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};k.abs=Math.abs;k.ceil=Math.ceil;k.exp=Math.exp;k.floor=Math.floor;k.log=Math.log;k.pow=Math.pow;
k.round=Math.round;k.sqrt=Math.sqrt;k.acos=Math.acos;k.asin=Math.asin;k.atan=Math.atan;k.atan2=Math.atan2;k.cos=Math.cos;k.sin=Math.sin;k.tan=Math.tan;k.constrain=function(a,b,c){return a>c?c:a<b?b:a};k.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};k.lerp=function(a,b,c){return(b-
a)*c+a};k.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};k.map=function(a,b,c,d,f){return d+(f-d)*((a-b)/(c-b))};k.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};k.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:
arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};k.norm=function(a,b,c){return(a-b)/(c-b)};k.sq=function(a){return a*a};k.degrees=function(a){return 180*a/Math.PI};k.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],d=arguments[1];return a()*(d-b)+b};m.createRandomized=function(){var a=
new Date;return new m(a/6E4&4294967295,a&4294967295)};k.randomSeed=function(b){a=(new m(b)).doubleGenerator;this.haveNextNextGaussian=!1};k.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,d,c;do b=2*a()-1,d=2*a()-1,c=b*b+d*d;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.nextNextGaussian=d*c;this.haveNextNextGaussian=!0;return b*c};var b=h,d=4,f=0.5,l=h;k.noise=function(a,k,c){b===h&&(b=new n(l));for(var m=b,ca=1,G=1,A=
0,x=0;x<d;++x){ca*=f;switch(arguments.length){case 1:A+=ca*(1+m.noise1d(G*a))/2;break;case 2:A+=ca*(1+m.noise2d(G*a,G*k))/2;break;case 3:A+=ca*(1+m.noise3d(G*a,G*k,G*c))/2}G*=2}return A};k.noiseDetail=function(a,b){d=a;b!==h&&(f=b)};k.noiseSeed=function(a){l=a;b=h}}},{}],23:[function(D,x,Q){x.exports=function(k){var h={trim:function(h){if(h instanceof Array){for(var k=[],a=0;a<h.length;a++)k.push(h[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return k}return h.replace(/^\s*/,"").replace(/\s*$/,
"").replace(/\r*$/,"")},radians:function(h){return h/180*Math.PI},nfCoreScalar:function(h,n,a,b,d,f){n=0>h?a:n;a=0===d;d=d===k||0>d?0:d;h=Math.abs(h);if(a)for(d=1,h*=10;1E-6<Math.abs(Math.round(h)-h)&&7>d;)++d,h*=10;else 0!==d&&(h*=Math.pow(10,d));a=2*h;Math.floor(h)===h?a=h:Math.floor(a)===a?(h=Math.floor(h),a=h+h%2):a=Math.round(h);h="";for(b+=d;0<b||0<a;)b--,h=""+a%10+h,a=Math.floor(a/10);if(f!==k)for(b=h.length-3-d;0<b;)h=h.substring(0,b)+f+h.substring(b),b-=3;return 0<d?n+h.substring(0,h.length-
d)+"."+h.substring(h.length-d,h.length):n+h},nfCore:function(k,n,a,b,d,f){if(k instanceof Array){for(var l=[],p=0,r=k.length;p<r;p++)l.push(h.nfCoreScalar(k[p],n,a,b,d,f));return l}return h.nfCoreScalar(k,n,a,b,d,f)},nf:function(k,n,a){return h.nfCore(k,"","-",n,a)},nfs:function(k,n,a){return h.nfCore(k," ","-",n,a)},nfp:function(k,n,a){return h.nfCore(k,"+","-",n,a)},nfc:function(k,n){return h.nfCore(k,"","-",0,n,",")},withCommonFunctions:function(k){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){k[n]=
h[n]})}};return h}()},{}],24:[function(D,x,Q){x.exports=function(k,h,m,n,a,b){function d(a,b){var d=a,f=0,h=0;k.pmouseX=k.mouseX;k.pmouseY=k.mouseY;if(d.offsetParent){do f+=d.offsetLeft,h+=d.offsetTop;while(d=d.offsetParent)}d=a;do f-=d.scrollLeft||0,h-=d.scrollTop||0;while(d=d.parentNode);var l,p,m,x;n.defaultView&&n.defaultView.getComputedStyle&&(l=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,m=parseInt(n.defaultView.getComputedStyle(a,
null).borderLeftWidth,10)||0,x=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,10)||0);f=f+l+m;h=h+p+x;f+=window.pageXOffset;h+=window.pageYOffset;return{X:f,Y:h}}function f(a,b){var f=d(a,b);k.mouseX=b.pageX-f.X;k.mouseY=b.pageY-f.Y}function l(a){var b=d(a.changedTouches[0].target,a.changedTouches[0]),f;for(f=0;f<a.touches.length;f++){var h=a.touches[f];h.offsetX=h.pageX-b.X;h.offsetY=h.pageY-b.Y}for(f=0;f<a.targetTouches.length;f++)h=a.targetTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=
h.pageY-b.Y;for(f=0;f<a.changedTouches.length;f++)h=a.changedTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=h.pageY-b.Y;return a}m(h,"touchstart",function(d){h.setAttribute("style","-webkit-user-select: none");h.setAttribute("onclick","void(0)");h.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var c=0,p=eventHandlers.length;c<p;c++){var n=eventHandlers[c].type;"mouseout"!==n&&"mousemove"!==n&&"mousedown"!==n&&"mouseup"!==n&&"DOMMouseScroll"!==n&&"mousewheel"!==n&&"touchstart"!==
n||detachEventHandler(eventHandlers[c])}k.touchStart!==b||k.touchMove!==b||k.touchEnd!==b||k.touchCancel!==b?(m(h,"touchstart",function(a){k.touchStart!==b&&(a=l(a),k.touchStart(a))}),m(h,"touchmove",function(a){k.touchMove!==b&&(a.preventDefault(),a=l(a),k.touchMove(a))}),m(h,"touchend",function(a){k.touchEnd!==b&&(a=l(a),k.touchEnd(a))}),m(h,"touchcancel",function(a){k.touchCancel!==b&&(a=l(a),k.touchCancel(a))})):(m(h,"touchstart",function(b){f(h,b.touches[0]);k.__mousePressed=!0;k.mouseDragging=
!1;k.mouseButton=a.LEFT;"function"===typeof k.mousePressed&&k.mousePressed()}),m(h,"touchmove",function(a){a.preventDefault();f(h,a.touches[0]);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)}),m(h,"touchend",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&k.mouseReleased()}));h.dispatchEvent(d)});
(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};k.disableContextMenu=function(){a&&(m(h,"contextmenu",b),a=!1)};k.enableContextMenu=function(){a||(detachEventHandler({elem:h,type:"contextmenu",fn:b}),a=!0)}})();m(h,"mousemove",function(a){f(h,a);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)});m(h,"mouseout",function(a){"function"===typeof k.mouseOut&&k.mouseOut()});
m(h,"mouseover",function(a){f(h,a);"function"===typeof k.mouseOver&&k.mouseOver()});h.onmousedown=function(){h.focus();return!1};m(h,"mousedown",function(b){k.__mousePressed=!0;k.mouseDragging=!1;switch(b.which){case 1:k.mouseButton=a.LEFT;break;case 2:k.mouseButton=a.CENTER;break;case 3:k.mouseButton=a.RIGHT}"function"===typeof k.mousePressed&&k.mousePressed()});m(h,"mouseup",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&
k.mouseReleased()});var p=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&(b=-b)):a.detail&&(b=-a.detail/3);(k.mouseScroll=b)&&"function"===typeof k.mouseScrolled&&k.mouseScrolled()};m(n,"DOMMouseScroll",p);m(n,"mousewheel",p)}},{}],25:[function(D,x,Q){x.exports=function(k,h){function m(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
f&&Object.keys(f).forEach(function(b){a.push(b)});var b={},d,h;d=0;for(h=a.length;d<h;++d)b[a[d]]=null;for(var l in k.lib)if(k.lib.hasOwnProperty(l)&&k.lib[l].exports){var p=k.lib[l].exports;d=0;for(h=p.length;d<h;++d)b[p[d]]=null}return b}function n(a){function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function f(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,e=b.length;c<e;++c)a[b[c]]=null;return a}function k(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function l(a){return a.substring(2,a.length-1)}function n(a,b){var c=N.length;N.push(a);return'"'+b+c+'"'}function v(a){a=a.replace(qa,function(a){return n(a,"E")});a=a.replace(la,function(a){return n(a,"D")});return a=a.replace(jb,function(a){return n(a,"H")})}function x(a,b){return a.replace(Eb,function(a,c,e,d,f,tb){return e!==b?a:n(a,
"G")})}function q(a){this.name=a}function D(a,b){this.params=a;this.methodArgsParam=b}function M(a){var b=f(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var d=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new q(d[1]);break}a.push(new q(d[1]))}return new D(a,c)}function Q(a){function b(a,e,f,tb){a=N[tb];d=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.middle?n("("+e.replace(/\.\s*$/,
"")+")","B"):n("("+e.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function e(a,b,c){d=!0;return"__instanceof"+n("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return n(a,"F")});a=a.replace(jb,function(a){return n(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return N[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+n(a,"A")+")";return"$p.createJavaArray"+n(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=N[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(N[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var e=c(b);return e.untrim("__int_cast("+e.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,e,d,f){return c?(a=N[e],d?"pixels.setPixel"+n("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+n("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
n("()","B"):d?"pixels.set"+n("("+f+")","B"):"pixels.toArray"+n("()","B")});var d;do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(d);do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
e);while(d);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function u(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function nd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=ja;var c="class"+ ++ab;ja=c;var e=b[1]+"$"+c,b=new u(e,ea(N[b[2]],e,"","implements "+b[1]));b.classId=c;b.scopeId=a;X[c]=b;ja=a;return b}function Ia(a,b,c){this.name=a;this.params=b;this.body=c}function T(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new Ia("function"!==a[1]?a[1]:null,M(N[a[2]]),ra(N[a[3]]))}function Y(a){this.members=a}function U(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ma(a[b])}:{label:f(a[b].substring(0,c)),value:ma(f(a[b].substring(c+1)))}}return new Y(a)}function Z(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Z(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+n(a.substring(1,a.length-
1),"I")+"}":"["+Z(a.substring(1,a.length-1))+"]";a=c(a);var b=Q(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Z(N[b])});return a.untrim(b)}function sa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,e,d,f){return b?a:C({name:c,member:d,callSign:!!f})+(e===p?"":e)})}function ta(a,b){this.expr=a;this.transforms=b}function $b(a,b,c){this.name=a;this.value=b;this.isDefault=c}function bb(a,b){var c=a.indexOf("="),e,d;0>c?(e=a,c=
b,d=!0):(e=a.substring(0,c),c=ma(a.substring(c+1)),d=!1);return new $b(f(e.replace(/(\s*"C\d+")+/g,"")),c,d)}function Sa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function cb(a,b){this.definitions=a;this.varType=b}function Fb(a){this.expression=a}function db(a){if(Gb.test(a)){var b=ub.exec(a);a=a.substring(b[0].length).split(",");for(var c=Sa(b[2]),e=0;e<a.length;++e)a[e]=bb(a[e],c);return new cb(a,b[2])}return new Fb(ma(a))}function Hb(a,b,c){this.initStatement=
a;this.condition=b;this.step=c}function Ib(a,b){this.initStatement=a;this.container=b}function wa(a,b){this.initStatement=a;this.container=b}function za(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Ib(db(f(a[0])),ma(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new wa(db(f(a[0])),ma(a[1]));a=a.substring(1,a.length-1).split(";");return new Hb(db(f(a[0])),ma(a[1]),ma(a[2]))}function Ta(a){a.sort(function(a,b){return b.weight-
a.weight})}function Ja(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Jb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Kb(a){var b=qa.exec(a);qa.lastIndex=0;var c=0<=b[1].indexOf("static"),e=N[l(b[6])];a=ja;var d="class"+ ++ab;ja=d;b="interface"===b[2]?new Ja(b[3],eb(e,b[3],b[4]),c):new Jb(b[3],ea(e,b[3],b[4],b[5]),c);b.classId=d;b.scopeId=a;X[d]=b;ja=a;return b}function Lb(a,b,c,e){this.name=a;this.params=b;this.body=c;this.isStatic=e}function fb(a){a=
la.exec(a);la.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?N[l(a[6])]:"{}";return new Lb(a[3],M(N[l(a[4])]),ra(c),b)}function Mb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Ua(a){var b=ub.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var e=Sa(b[2]),d=0;d<a.length;++d)a[d]=bb(a[d],e);return new Mb(a,b[2],c)}function Nb(a,b){this.params=a;this.body=b}function ac(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=M(N[a[1]]);return new Nb(b,
ra(N[a[2]]))}function Ka(a,b,c,e,d,f){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=e;this.innerClasses=d;this.misc=f;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function H(a,b,c,e,d,f,g,h,k){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=e;this.methods=d;this.fields=f;this.cstrs=g;this.innerClasses=h;this.misc=k;a=0;for(b=f.length;a<b;++a)f[a].owner=this}function lb(a,b){this.name=a;this.body=b;b.owner=this}function mb(a,b){this.name=a;this.body=b;b.owner=
this}function Ob(a){var b=qa.exec(a);qa.lastIndex=0;var c=N[l(b[6])];a=ja;var e="class"+ ++ab;ja=e;b="interface"===b[2]?new lb(b[3],eb(c,b[3],b[4])):new mb(b[3],ea(c,b[3],b[4],b[5]));b.classId=e;b.scopeId=a;X[e]=b;ja=a;return b}function vb(a,b,c){this.name=a;this.params=b;this.body=c}function rc(a){a=la.exec(a);la.lastIndex=0;return new vb(a[3],M(N[l(a[4])]),ra(N[l(a[6])]))}function Pb(a,b){this.argument=a;this.misc=b}function bc(a,b){this.argument=a;this.misc=b}function S(a,b,c){this.name=a;this.argument=
b;this.misc=c}function Qb(a){this.expr=a}function wb(a){this.label=a}function e(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c];d instanceof cb?b=b.concat(d.getNames()):d instanceof Pb&&d.argument.initStatement instanceof cb?b=b.concat(d.argument.initStatement.getNames()):(d instanceof Ja||d instanceof Jb||d instanceof lb||d instanceof mb||d instanceof vb||d instanceof Ia)&&b.push(d.name)}return h({},b)}function g(a){this.statements=a}function da(a){this.statements=a}var ha=m(),R=[];a=a.replace(/\r\n?|\n\r/g,
"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,e,d,f,g,h){return b||c?(b=R.length,R.push(a),"'"+b+"'"):e?(b=R.length,R.push(f),d+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ka,La=function(a,b,c,e){if(b||e)return a;ka=!0;return""};do ka=
!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,La);while(ka);var N=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],e=[],d=1;d<a.length;d+=2){var f=a[d];if("["===f||"{"===f||"("===f)e.push(c),c=
f;else if("]"===f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",h=b.length;b.push(c+f);c=e.pop()+'"'+g+(h+1)+'"'}c+=a[d+1]}b.unshift(c);return b}(a),C,X={},ja,ab=0,ea,eb,ra,Da,ma,qa=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
la=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Gb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Eb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,ub=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,jb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;q.prototype.toString=function(){return this.name};
D.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};D.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};D.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};u.prototype.toString=
function(){return"new ("+this.body+")"};Ia.prototype.toString=function(){var a=C,b=h({"this":null},this.params.getNames());C=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var e=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+e);C=a;return c};Y.prototype.toString=function(){var a=C;C=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,e=this.members.length;c<e;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";C=a;return b.substring(0,b.length-2)};ta.prototype.toString=function(){var a=this.transforms;return sa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ma=function(a){var b=[];a=Z(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(T(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(nd(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(U(N[c]));return'"!'+(b.length-1)+'"'});
return new ta(a,b)};$b.prototype.toString=function(){return this.name+" = "+this.value};cb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};cb.prototype.toString=function(){return"var "+this.definitions.join(",")};Fb.prototype.toString=function(){return this.expression.toString()};Hb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Ib.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};wa.iteratorId=0;wa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+wa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ja.prototype.toString=function(){return""+this.body};Jb.prototype.toString=function(){return""+this.body};Lb.prototype.toString=
function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";C=b;return c};Mb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Mb.prototype.toString=function(){var a=C({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],e=0,d=this.definitions.length;e<d;++e){var f=
this.definitions[e],g=f.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Nb.prototype.toString=function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),e=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(e)||(e="{\n$superCstr();\n"+e.substring(1));C=b;return c+e+"\n"};Ka.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methodsNames.length;e<f;++e)b[this.methodsNames[e]]=!0;e=0;for(f=this.innerClasses.length;e<f;++e)a=this.innerClasses[e],c[a.name]=a};Ka.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var e,d;if(this.owner.interfaces){var f=[],g;e=0;for(d=this.interfacesNames.length;e<d;++e)this.owner.interfaces[e]&&(g=C({name:this.interfacesNames[e]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Ta(this.innerClasses);e=0;for(d=this.innerClasses.length;e<d;++e)f=this.innerClasses[e],
f.isStatic&&(b+=a+"."+f.name+" = "+f+";\n");e=0;for(d=this.fields.length;e<d;++e)f=this.fields[e],f.isStatic&&(b+=a+"."+f.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};eb=function(a,b,e){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var d=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?d.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;e!==p&&(g=e.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));e=0;for(h=d.length;e<h;++e){var k=fb(N[d[e]]);d[e]=k.name}e=0;for(h=a.length-1;e<h;++e)k=c(a[e]),a[e]=Ua(k.middle);k=a.pop();e=0;for(h=f.length;e<h;++e)f[e]=Kb(N[f[e]]);return new Ka(b,g,d,a,f,{tail:k})};H.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methods.length;e<f;++e)a=this.methods[e],
b[a.name]=a;e=0;for(f=this.innerClasses.length;e<f;++e)b=this.innerClasses[e],c[b.name]=b};H.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",e="",d="",g={},h={},k={};this.getMembers(g,h,k);var l=C;C=function(c){var e=c.name;return"this"===e?c.callSign||!c.member?a+".$self":a:g.hasOwnProperty(e)?g[e].isStatic?b+"."+e:a+"."+e:k.hasOwnProperty(e)?a+"."+e:h.hasOwnProperty(e)?h[e].isStatic?b+"."+e:a+".$self."+
e:l(c)};var p;this.baseClassName?(p=l({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+p+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),d+=b+".$base = "+p+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(e+="$p.extendStaticMembers("+b+", "+p+");\n");var r,n,m;if(this.owner.interfaces){n=[];p=0;for(r=this.interfacesNames.length;p<r;++p)this.owner.interfaces[p]&&(m=l({name:this.interfacesNames[p]}),
n.push(m),e+="$p.extendInterfaceMembers("+b+", "+m+");\n");d+=b+".$interfaces = ["+n.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Ta(this.innerClasses);p=0;for(r=this.innerClasses.length;p<r;++p)n=this.innerClasses[p],n.isStatic?(e+=b+"."+n.name+" = "+n+";\n",c+=a+"."+n.name+" = "+b+"."+n.name+";\n"):c+=a+"."+n.name+" = "+n+";\n";p=0;for(r=this.fields.length;p<r;++p){var v=this.fields[p];if(v.isStatic)for(e+=b+"."+v.definitions.join(";\n"+b+".")+";\n",n=0,m=v.definitions.length;n<
m;++n)var u=v.definitions[n].name,q=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+q+"}, set: function(val){"+q+" = val}});\n");else c+=a+"."+v.definitions.join(";\n"+a+".")+";\n"}n={};p=0;for(r=this.methods.length;p<r;++p)m=this.methods[p],v=n[m.name],u=m.name+"$"+m.params.params.length,q=!!m.params.methodArgsParam,v?(++v,u+="_"+v):v=1,m.methodId=u,n[m.name]=v,m.isStatic?(e+=m,e+="$p.addMethod("+b+", '"+m.name+"', "+u+", "+q+");\n"):c+=m,c+="$p.addMethod("+a+", '"+m.name+
"', "+u+", "+q+");\n";c+=f(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";n=[];p=0;for(r=this.cstrs.length;p<r;++p)m=this.cstrs[p].params.params.length,n.push("if(arguments.length "+(this.cstrs[p].params.methodArgsParam?">=":"===")+" "+m+") { $constr_"+m+".apply("+a+", arguments); }");0<n.length&&(c+=n.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";C=l;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+d+
"return "+b+";\n})()"};ea=function(a,b,e,d){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var f=[],g=[],h=[],k=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?k.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var l,n;e!==p&&(l=e.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));d!==p&&(n=d.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(e=0;e<k.length;++e)k[e]=T(N[k[e]]);
for(e=0;e<f.length;++e)f[e]=fb(N[f[e]]);for(e=0;e<a.length-1;++e)d=c(a[e]),a[e]=Ua(d.middle);d=a.pop();for(e=0;e<h.length;++e)h[e]=ac(N[h[e]]);for(e=0;e<g.length;++e)g[e]=Kb(N[g[e]]);return new H(b,l,n,k,f,a,h,g,{tail:d})};lb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};mb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};vb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";C=b;return c};Pb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};bc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};S.prototype.toString=function(){var a=this.misc.prefix;this.argument!==p&&(a+=this.argument.toString());
return a};Qb.prototype.toString=function(){return"case "+this.expr+":"};wb.prototype.toString=function(){return this.label};Da=function(a,b,e){var d=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,k,l;null!==(k=d.exec(a));){if(k[1]!==p)l=a.lastIndexOf('"B',d.lastIndex),h=a.substring(h,
l),"for"===k[1]?g.push(new Pb(za(N[k[2]]),{prefix:h})):"catch"===k[1]?g.push(new bc(M(N[k[2]]),{prefix:h})):g.push(new S(k[1],ma(N[k[2]]),{prefix:h}));else if(k[3]!==p)g.push(new S(k[3],p,{prefix:a.substring(h,d.lastIndex)}));else if(k[4]!==p){l=a.substring(h,d.lastIndex-k[4].length);if(0!==f(l).length)continue;g.push(l);h=k[4].charAt(1);k=k[5];"D"===h?g.push(b(N[k])):"E"===h?g.push(e(N[k])):"H"===h?g.push(T(N[k])):g.push(ra(N[k]))}else if(k[6]!==p)g.push(new Qb(ma(f(k[7]))));else if(k[8]!==p){l=
a.substring(h,d.lastIndex-k[8].length);if(0!==f(l).length)continue;g.push(new wb(a.substring(h,d.lastIndex)))}else k=c(a.substring(h,d.lastIndex-1)),g.push(k.left),g.push(db(k.middle)),g.push(k.right+";");h=d.lastIndex}b=c(a.substring(h));g.push(b.left);""!==b.middle&&(g.push(db(b.middle)),g.push(";"+b.right));return g};g.prototype.toString=function(){var a=e(this.statements),b=C;k(a)||(C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";C=b;return c};
ra=function(a){a=c(a.substring(1,a.length-1));return new g(Da(a.middle))};da.prototype.toString=function(){for(var a=[],c=[],f,g=0,h=this.statements.length;g<h;++g)f=this.statements[g],f instanceof mb||f instanceof lb?a.push(f):c.push(f);Ta(a);var k=e(this.statements);C=function(a){a=a.name;return k.hasOwnProperty(a)?a:ha.hasOwnProperty(a)||d.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+c.join("")+"\n})";C=null;return a};
a=function(){var a=v(N[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new da(Da(a,rc,Ob))}();(function(a){function b(a,e){for(var d=e.split("."),f=a.scope,g;f;){if(f.hasOwnProperty(d[0])){g=f[d[0]];break}f=f.scope}g===p&&(g=c[d[0]]);for(var f=1,h=d.length;f<h&&g;++f)g=g.inScope[d[f]];return g}var c={},e;for(e in X)if(X.hasOwnProperty(e)){a=X[e];var d=a.scopeId,f=a.name;d?(d=X[d],a.scope=d,d.inScope===p&&(d.inScope={}),d.inScope[f]=a):c[f]=a}for(e in X)if(X.hasOwnProperty(e)){a=X[e];if(f=a.body.baseClassName)if(f=
b(a,f))a.base=f,f.derived||(f.derived=[]),f.derived.push(a);var f=a.body.interfacesNames,d=[],g,h;if(f&&0<f.length){g=0;for(h=f.length;g<h;++g){var k=b(a,f[g]);d.push(k);k&&(k.derived||(k.derived=[]),k.derived.push(a))}0<d.length&&(a.interfaces=d)}}})(a);(function(a){function b(a,e){var d=c[a];if(!d)return!1;var f=d.indexOf(e);if(0>f)return!1;d.splice(f,1);if(0<d.length)return!1;delete c[a];return!0}a=[];var c={},e,d,f;for(e in X)if(X.hasOwnProperty(e))if(f=X[e],f.inScope||f.derived){var g=[];if(f.inScope)for(d in f.inScope)f.inScope.hasOwnProperty(d)&&
g.push(f.inScope[d]);f.derived&&(g=g.concat(f.derived));c[e]=g}else a.push(e),f.weight=0;for(;0<a.length;)if(e=a.shift(),f=X[e],f.scopeId&&b(f.scopeId,f)&&(a.push(f.scopeId),X[f.scopeId].weight=f.weight+1),f.base&&b(f.base.classId,f)&&(a.push(f.base.classId),f.base.weight=f.weight+1),f.interfaces)for(e=0,d=f.interfaces.length;e<d;++e)f.interfaces[e]&&b(f.interfaces[e].classId,f)&&(a.push(f.interfaces[e].classId),f.interfaces[e].weight=f.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,
"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var e=b[c];return"/"===e.charAt(0)?e:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(e)?"(new $p.Character("+e+"))":e})}(a,R)}function a(a,b){var d=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(d&&2===d.length)for(var f=[],d=d.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){f.push(b);return"{"+(f.length-
1)+"}"}}()).replace("\n","").replace("\r","").split(";"),h=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},k=0,l=d.length;k<l;k++){var p=d[k].split("=");if(p&&2===p.length){var n=h(p[0]),m=h(p[1]),p=[];if("preload"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]);b.imageCache.add(x)}else if("font"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]),D=/^\{(\d*?)\}$/.exec(x);PFont.preloading.add(D?JSON.parse("{"+f[D[1]]+"}"):x)}else"pauseOnBlur"===n?b.options.pauseOnBlur=
"true"===m:"globalKeyEvents"===n?b.options.globalKeyEvents="true"===m:"param-"===n.substring(0,6)?b.params[n.substring(6)]=m:b.options[n]=m}}return a}var b=h.defaultScope,d=b.PConstants,f=h.aFunctions,l=h.Browser.document,p;k.compile=function(b){var c=new k.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};k.logger=new function(a){var b={BufferMax:200};b.wrapper=a.createElement("div");b.wrapper.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
b.dragger=a.createElement("div");b.dragger.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");b.closer=a.createElement("div");b.closer.onmouseover=function(){b.closer.style.setProperty("background-color","#ccc")};b.closer.onmouseout=function(){b.closer.style.setProperty("background-color","#ddd")};b.closer.innerHTML="&#10006;";b.closer.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
b.javaconsole=a.createElement("div");b.javaconsole.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");b.wrapper.appendChild(b.dragger);b.wrapper.appendChild(b.javaconsole);b.wrapper.appendChild(b.closer);b.dragger.onmousedown=function(d){b.divheight=b.wrapper.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var f=d.screenY;window.onmousemove=function(a){b.wrapper.style.height=
parseFloat(b.divheight)+(f-a.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-a.screenY)-10+"px"};window.onmouseup=function(d){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.wrapper.style.height=parseFloat(b.divheight)+(f-d.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-d.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.BufferArray=[];b.print=b.log=function(a){b.BufferArray[b.BufferArray.length-1]?b.BufferArray[b.BufferArray.length-
1]+=a+"":b.BufferArray.push(a);b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.println=function(d){a.body.appendChild(b.wrapper);b.print(d);b.BufferArray.push("<br/>");b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");b.BufferArray.length>b.BufferMax?b.BufferArray.splice(0,
1):b.javaconsole.scrollTop=b.javaconsole.scrollHeight;"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.showconsole=function(){b.wrapper.style.visibility="visible"};b.hideconsole=function(){b.wrapper.style.visibility="hidden"};b.closer.onclick=function(){b.hideconsole()};b.hideconsole();return b}(l);return k}},{}],26:[function(D,x,Q){x.exports=function(k,h){function m(a,b){return a in l?l[a]:"function"===typeof l[b]?l[b]:function(a){if(a instanceof Array)return a;if("number"===
typeof a){var b=[];b.length=a;return b}}}var n=k.defaultScope,a=k.extend,b=k.Browser,d=b.ajax,f=b.navigator,l=b.window,p=b.document,r=k.noop,c=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var x=l.HTMLCanvasElement,D=l.HTMLImageElement,G=l.localStorage;p.head||(p.head=p.getElementsByTagName("head")[0]);var A=m("Float32Array","WebGLFloatArray"),Q=m("Int32Array","WebGLIntArray"),v=m("Uint16Array",
"WebGLUnsignedShortArray"),ga=m("Uint8Array","WebGLUnsignedByteArray");if(9<=p.documentMode&&!p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var q=[],Zb={},M=this.Processing=function(b,k,m){function Ia(a,b,z){a.addEventListener?a.addEventListener(b,z,!1):a.attachEvent("on"+b,z);wb.push({elem:a,type:b,fn:z})}function T(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&
(4===c.length?g.uniform4fv(e,c):3===c.length?g.uniform3fv(e,c):2===c.length?g.uniform2fv(e,c):g.uniform1f(e,c))}function Y(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&(4===c.length?g.uniform4iv(e,c):3===c.length?g.uniform3iv(e,c):2===c.length?g.uniform2iv(e,c):g.uniform1i(e,c))}function U(a,b,z,c,e){var d=Fa.locations[a];d===h&&(d=g.getUniformLocation(b,z),Fa.locations[a]=d);-1!==d&&(16===e.length?g.uniformMatrix4fv(d,c,e):9===e.length?g.uniformMatrix3fv(d,
c,e):g.uniformMatrix2fv(d,c,e))}function Z(a,b,z,c,e){var d=Fa.attributes[a];d===h&&(d=g.getAttribLocation(b,z),Fa.attributes[a]=d);-1!==d&&(g.bindBuffer(g.ARRAY_BUFFER,e),g.vertexAttribPointer(d,c,g.FLOAT,!1,0,0),g.enableVertexAttribArray(d))}function sa(a,b,z){var c=Fa.attributes[a];c===h&&(c=g.getAttribLocation(b,z),Fa.attributes[a]=c);-1!==c&&g.disableVertexAttribArray(c)}function ta(a,b,z,$){Va===c.HSB?(z=e.color.toRGB(a,b,z),a=z[0],b=z[1],z=z[2]):(a=Math.round(255*(a/xa)),b=Math.round(255*(b/
Ea)),z=Math.round(255*(z/ya)));$=Math.round(255*($/ia));a=0>a?0:a;b=0>b?0:b;z=0>z?0:z;$=0>$?0:$;return(255<$?255:$)<<24&c.ALPHA_MASK|(255<a?255:a)<<16&c.RED_MASK|(255<b?255:b)<<8&c.GREEN_MASK|(255<z?255:z)&c.BLUE_MASK}function $b(a){if(a<=xa&&0<=a){if(Va===c.RGB)return ta(a,a,a,ia);if(Va===c.HSB)return ta(0,0,a/xa*ya,ia)}if(a)return 2147483647<a&&(a-=4294967296),a}function bb(a){var b,z,$;b=((a&c.RED_MASK)>>>16)/255;z=((a&c.GREEN_MASK)>>>8)/255;$=(a&c.BLUE_MASK)/255;a=e.max(e.max(b,z),$);var d=e.min(e.min(b,
z),$);if(d===a)return[0,0,a*ya];b=(b===a?(z-$)/(a-d):z===a?2+($-b)/(a-d):4+(b-z)/(a-d))/6;0>b?b+=1:1<b&&(b-=1);return[b*xa,(a-d)/a*Ea,a*ya]}function Sa(){g.restore();N=ab=!0}function cb(){var a=(Date.now()-tc)/1E3;ec++;var b=ec/a;0.5<a&&(tc=Date.now(),ec=0,e.__frameRate=b);e.frameCount++}function Fb(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function db(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();
if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Hb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Ib(a,b){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wa(){R&&(N&&(g.fillStyle=e.color.toString(La),N=!1),g.fill())}function za(){C&&
(ab&&(g.strokeStyle=e.color.toString(ja),ab=!1),g.stroke())}function Ta(){wa();za();g.closePath()}function Ja(a,b,z){var c=Mc.shift();c===h&&(c={},c.canvas=p.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mc.push(c);var e=c.canvas,d=c.context;b=b||a.width;z=z||a.height;e.width=b;e.height=z;a?"data"in a?d.putImageData(a,0,0):(d.clearRect(0,0,b,z),d.drawImage(a,0,0,b,z)):d.clearRect(0,0,b,z);return c}function Jb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";
return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&c.ALPHA_MASK|b[L]<<16&c.RED_MASK|b[L+1]<<8&c.GREEN_MASK|b[L+2]&c.BLUE_MASK}}(a),setPixel:function(a){return function(L,b){var e=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[e+0]=(b&c.RED_MASK)>>>16;d[e+1]=(b&c.GREEN_MASK)>>>8;d[e+2]=b&c.BLUE_MASK;
d[e+3]=(b&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,e=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<e;d++,f+=4)L.push(b[f+3]<<24&c.ALPHA_MASK|b[f]<<16&c.RED_MASK|b[f+1]<<8&c.GREEN_MASK|b[f+2]&c.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,e,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";e=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=
L[f],b=4*f,e[b+0]=(d&c.RED_MASK)>>>16,e[b+1]=(d&c.GREEN_MASK)>>>8,e[b+2]=d&c.BLUE_MASK,e[b+3]=(d&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Kb(a,b,z,$){var d=new Ga(z,$,c.ARGB);d.fromImageData(e.toImageData(a,b,z,$));return d}function Lb(a,b,z,e,d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Ga(z,e,c.ARGB),g=f.imageData.data,h=d.width,s=d.height;d=d.imageData.data;var k=Math.max(0,-b),l=Math.max(0,-a);e=Math.min(e,s-b);for(s=Math.min(z,h-a);k<e;++k)for(var n=
4*((b+k)*h+(a+l)),p=4*(k*z+l),m=l;m<s;++m)g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++];f.__isDirty=!0;return f}function fb(){Rb&&(g=Nc,Rb=!1,e.updatePixels())}function Mb(){function a(L,b){L[b]=function(){fb();g[b].apply(g,arguments)}}function b(a,L){e.defineProperty(a,L,{get:function(){fb();return g[L]},set:function(a){fb();g[L]=a}})}for(var z in g)"function"===typeof g[z]?a(this,z):b(this,z)}function Ua(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():e.nf(a,
0,3):null===a||a===h?"":a.toString()}function Nb(a,b,z,e){var d;0>a.indexOf("\n")?(a=[a],d=1):(a=a.split(/\r?\n/g),d=a.length);var f=0;Wa===c.TOP?f=Xa+Ma:Wa===c.CENTER?f=Xa/2-(d-1)*Aa/2:Wa===c.BOTTOM&&(f=-(Ma+(d-1)*Aa));for(var g=0;g<d;++g)ha.text$line(a[g],b,z+f,e,nb),f+=Aa}function ac(a,b,z,e,d,f){if(0!==a.length&&(0!==e&&0!==d)&&!(Na>d)){for(var g=-1,h=0,s=0,k=[],l=0,n=a.length;l<n;l++){var p=a[l],m=" "===p,r=ba.measureTextWidth(p);if("\n"!==p&&s+r<=e)m&&(g=l),s+=r;else{if(g+1===h)if(0<l)g=l;else return;
"\n"===p?(k.push({text:a.substring(h,l),width:s}),h=l+1):(k.push({text:a.substring(h,g+1),width:s}),h=g+1);s=0;l=h-1}}h<n&&k.push({text:a.substring(h),width:s});a=1;g=Xa;nb===c.CENTER?a=e/2:nb===c.RIGHT&&(a=e);e=k.length;h=Math.min(e,Math.floor(d/Aa));Wa===c.TOP?g=Xa+Ma:Wa===c.CENTER?g=d/2-Aa*(h/2-1):Wa===c.BOTTOM&&(g=Ma+Aa);for(h=0;h<e;h++){l=h*Aa;if(g+l>d-Ma)break;s=k[h];ha.text$line(s.text,b+a,z+g+l,f,nb)}}}function Ka(a){ha="3D"===a?new B:"2D"===a?new E:new F;for(var b in F.prototype)F.prototype.hasOwnProperty(b)&&
0>b.indexOf("$")&&(e[b]=ha[b]);ha.$init()}function H(a){return function(){Ka("2D");return ha[a].apply(this,arguments)}}function lb(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function mb(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Ob(){for(var a in hb)if(hb.hasOwnProperty(a)){e.__keyPressed=!0;return}e.__keyPressed=
!1}function vb(a,b){hb[a]=b;ob=null;e.key=b;e.keyCode=a;e.keyPressed();e.keyCode=0;e.keyTyped();Ob()}function rc(a){var b=lb(a);if(b===c.DELETE)vb(b,new Char(127));else if(0>qd.indexOf(b))ob=b;else{var z=new Char(c.CODED);e.key=z;e.keyCode=b;hb[b]=z;e.keyPressed();ob=null;Ob();return mb(a)}}function Pb(a){if(null!==ob){var b=ob,z;z=a.which||a.keyCode;var c=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(z){case 13:z=c?13:10;break;case 8:z=c?127:8}z=new Char(z);vb(b,z);return mb(a)}}function bc(a){a=
lb(a);var b=hb[a];b!==h&&(e.key=b,e.keyCode=a,e.keyReleased(),delete hb[a],Ob())}if(!(this instanceof M))throw"called Processing constructor as if it were a function: missing 'new'.";var S={},Qb=b===h&&k===h,S=Qb?p.createElement("canvas"):"string"===typeof b?p.getElementById(b):b;if(!("getContext"in S))throw"called Processing constructor without passing canvas element reference or id.";var wb=[],e=this;e.Char=e.Character=Char;a.withCommonFunctions(e);a.withMath(e);a.withProxyFunctions(e,function(a){return Array.prototype.slice.call(a,
1)});a.withTouch(e,S,Ia,p,c);m&&Object.keys(m).forEach(function(a){e[a]=m[a]});e.externals={canvas:S,context:h,sketch:h,window:l};e.name="Processing.js Instance";e.use3DContext=!1;e.focused=!1;e.breakShape=!1;e.glyphTable={};e.pmouseX=0;e.pmouseY=0;e.mouseX=0;e.mouseY=0;e.mouseButton=0;e.mouseScroll=0;e.mouseClicked=h;e.mouseDragged=h;e.mouseMoved=h;e.mousePressed=h;e.mouseReleased=h;e.mouseScrolled=h;e.mouseOver=h;e.mouseOut=h;e.touchStart=h;e.touchEnd=h;e.touchMove=h;e.touchCancel=h;e.key=h;e.keyCode=
h;e.keyPressed=r;e.keyReleased=r;e.keyTyped=r;e.draw=h;e.setup=h;e.__mousePressed=!1;e.__keyPressed=!1;e.__frameRate=60;e.frameCount=0;e.width=100;e.height=100;var g,da,ha,R=!0,ka=[1,1,1,1],La=4294967295,N=!0,C=!0,X=[0,0,0,1],ja=4278190080,ab=!0,ea=1,eb=!1,ra=!1,Da=!0,ma=0,qa=c.CORNER,la=c.CENTER,Gb=0,Eb=0,ub=0,jb=c.NORMAL_MODE_AUTO,tb=60,Kc=1E3/tb,od=S.style.cursor,aa=c.POLYGON,oc=0,pc=20,Lc=!1,kb=-3355444,qc=20,ia=255,xa=255,Ea=255,ya=255,cc=0,dc=0,Va=c.RGB,gb=null,sc=null,Oc=Date.now(),tc=Oc,ec=
0,Ba,Sb,fc,xb,yb,uc,vc,Fa={attributes:{},locations:{}},y,J,na,wc,xc,yc,gc,zc,Tb,Ac,Pc,Bc,Qc,hc,Rc,Sc,Tc,Uc=0,Vc=0,Wc=c.IMAGE,ua=!1,Cc,Dc,Ec,nb=c.LEFT,Wa=c.BASELINE,ic=c.MODEL,zb="Arial",Na=12,Xa=9,Ma=2,Aa=14,ba=PFont.get(zb,Na),Nc,Fc=null,Rb=!1,Xc,Yc=1E3,hb=[],ob=null,qd=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],O=0,jc=0,pb=0,Oa=[],Pa=[],Qa=[],Ub=new A(c.SINCOS_LENGTH),
Vb=new A(c.SINCOS_LENGTH),P,qb,Ra,K,fa,Ab,Bb,Wb,Ha,kc=!1,lc=60*(Math.PI/180),Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,t=[],va=[],oa=0,Cb=!1,Db=!1,ib=!0,Xb=c.CORNER,bd=[],cd=new A([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),dd=new A([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,
-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),rd=new A([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Hc=new A([0,0,0,0,1,0,1,1,0,1,0,0]),sd=new A([0,0,1,0,0,1,0,0,1,0,0,1]),td="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(f.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Ic=function(a,b,z){var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw a.getShaderInfoLog(c);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,z);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);z=a.createProgram();a.attachShader(z,c);a.attachShader(z,b);a.linkProgram(z);if(!a.getProgramParameter(z,a.LINK_STATUS))throw"Error linking shaders.";return z},ed=function(a,b,z,c,e){return{x:a,
y:b,w:z,h:c}},mc=ed,ud=function(a,b,z,c,e){return{x:a,y:b,w:e?z:z-a,h:e?c:c-b}},vd=function(a,b,z,c,e){return{x:a-z/2,y:b-c/2,w:z,h:c}},W=function(){},E=function(){},B=function(){},F=function(){};E.prototype=new W;E.prototype.constructor=E;B.prototype=new W;B.prototype.constructor=B;F.prototype=new W;F.prototype.constructor=F;W.prototype.a3DOnlyFunction=r;e.shape=function(a,b,z,$,d){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(e.pushMatrix(),Xb===c.CENTER?5===arguments.length?(e.translate(b-
$/2,z-d/2),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length?e.translate(b-a.getWidth()/2,-a.getHeight()/2):e.translate(-a.getWidth()/2,-a.getHeight()/2):Xb===c.CORNER?5===arguments.length?(e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z):Xb===c.CORNERS&&(5===arguments.length?($-=b,d-=z,e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z)),a.draw(e),(1===arguments.length&&Xb===c.CENTER||1<arguments.length)&&
e.popMatrix())};e.shapeMode=function(a){Xb=a};e.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};e.loadXML=function(a){return new XML(e,a)};var fd=function(a){for(var b=0,z=0;z<a.length;z++)b=0!==z?Math.max(b,Math.abs(a[z])):Math.abs(a[z]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},Ya=e.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof Ya?this.set(arguments[0].array()):6===
arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};Ya.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof Ya?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new Ya;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},
translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var z,c;a instanceof PVector?(z=a.x,c=a.y,b||(b=new PVector)):a instanceof Array&&(z=a[0],c=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*z+this.elements[1]*c+this.elements[2],b[1]=this.elements[3]*z+this.elements[4]*c+this.elements[5]):
b instanceof PVector&&(b.x=this.elements[0]*z+this.elements[1]*c+this.elements[2],b.y=this.elements[3]*z+this.elements[4]*c+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,
Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>c.MIN_INT){var b=this.elements[0],z=this.elements[1],e=this.elements[2],d=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-d/a;this.elements[1]=-z/a;this.elements[4]=b/a;this.elements[2]=(z*g-f*e)/a;this.elements[5]=(d*e-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&
b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],z=0,c=0;2>c;c++)for(var e=0;3>e;e++,z++)b[z]+=this.elements[3*c+0]*a[e+0]+this.elements[3*
c+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=
this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],e=this.elements[1];this.elements[0]=b*c+a*e;this.elements[1]=-a*c+b*e;c=this.elements[3];e=this.elements[4];this.elements[3]=b*c+a*e;this.elements[4]=-a*c+b*e},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],
a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+"\n"+e.nfs(this.elements[3],a,4)+" "+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+"\n\n";e.println(a)}};var I=e.PMatrix3D=function(){this.reset()};I.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof I?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},
get:function(){var a=new I;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===h&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},
transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,e,d,f;a instanceof
PVector?(c=a.x,e=a.y,d=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],e=a[1],d=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3]*
f,b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*e+this.elements[14]*d+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]);
return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[d+0]*a[4*e+0]+this.elements[d+4]*a[4*e+1]+this.elements[d+8]*a[4*e+2]+this.elements[d+12]*a[4*e+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[4*e+0]*a[d+0]+this.elements[4*e+1]*a[d+4]+this.elements[4*e+2]*a[d+8]+this.elements[4*e+3]*a[d+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var f=new PVector(b,c,d),g=
f.mag();if(0!==g){1!=g&&(f.normalize(),b=f.x,c=f.y,d=f.z);var f=e.cos(a),g=e.sin(a),h=1-f;this.apply(h*b*b+f,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+f,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+f,0,0,0,0,1)}}},invApply:function(){Wb===h&&(Wb=new I);var a=arguments;Wb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Wb.invert())return!1;this.preApply(Wb);return!0},rotateX:function(a){var b=e.cos(a);a=e.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
e.cos(a);a=e.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=
Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,e){return c?e?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*e:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*
b+this.elements[3]},multY:function(a,b,c,e){return c?e?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*e:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,e){return e?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*e:this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,e){return e?this.elements[12]*a+
this.elements[13]*b+this.elements[14]*c+this.elements[15]*e:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],e=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],d=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],
f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],s=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],l=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],
p=a*n-b*l+c*k+e*s-d*h+f*g;if(1E-9>=Math.abs(p))return!1;var m=[];m[0]=+this.elements[5]*n-this.elements[6]*l+this.elements[7]*k;m[4]=-this.elements[4]*n+this.elements[6]*s-this.elements[7]*h;m[8]=+this.elements[4]*l-this.elements[5]*s+this.elements[7]*g;m[12]=-this.elements[4]*k+this.elements[5]*h-this.elements[6]*g;m[1]=-this.elements[1]*n+this.elements[2]*l-this.elements[3]*k;m[5]=+this.elements[0]*n-this.elements[2]*s+this.elements[3]*h;m[9]=-this.elements[0]*l+this.elements[1]*s-this.elements[3]*
g;m[13]=+this.elements[0]*k-this.elements[1]*h+this.elements[2]*g;m[2]=+this.elements[13]*f-this.elements[14]*d+this.elements[15]*e;m[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;m[10]=+this.elements[12]*d-this.elements[13]*c+this.elements[15]*a;m[14]=-this.elements[12]*e+this.elements[13]*b-this.elements[14]*a;m[3]=-this.elements[9]*f+this.elements[10]*d-this.elements[11]*e;m[7]=+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;m[11]=-this.elements[8]*d+this.elements[9]*
c-this.elements[11]*a;m[15]=+this.elements[8]*e-this.elements[9]*b+this.elements[10]*a;a=1/p;m[0]*=a;m[1]*=a;m[2]*=a;m[3]*=a;m[4]*=a;m[5]*=a;m[6]*=a;m[7]*=a;m[8]*=a;m[9]*=a;m[10]*=a;m[11]*=a;m[12]*=a;m[13]*=a;m[14]*=a;m[15]*=a;this.elements=m.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+" "+
e.nfs(this.elements[3],a,4)+"\n"+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+" "+e.nfs(this.elements[6],a,4)+" "+e.nfs(this.elements[7],a,4)+"\n"+e.nfs(this.elements[8],a,4)+" "+e.nfs(this.elements[9],a,4)+" "+e.nfs(this.elements[10],a,4)+" "+e.nfs(this.elements[11],a,4)+"\n"+e.nfs(this.elements[12],a,4)+" "+e.nfs(this.elements[13],a,4)+" "+e.nfs(this.elements[14],a,4)+" "+e.nfs(this.elements[15],a,4)+"\n\n";e.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,
0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var Za=e.PMatrixStack=function(){this.matrixStack=[]};Za.prototype.load=function(){var a=
ha.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};E.prototype.$newPMatrix=function(){return new Ya};B.prototype.$newPMatrix=function(){return new I};Za.prototype.push=function(){this.matrixStack.push(this.peek())};Za.prototype.pop=function(){return this.matrixStack.pop()};Za.prototype.peek=function(){var a=ha.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-1]);return a};Za.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-
1].apply(a)};e.split=function(a,b){return a.split(b)};e.splitTokens=function(a,b){if(b===h)return a.split(/\s+/g);var c=b.split(/()/g),e="",d=a.length,f,g,k=[];for(f=0;f<d;f++)g=a[f],-1<c.indexOf(g)?(""!==e&&k.push(e),e=""):e+=g;""!==e&&k.push(e);return k};e.append=function(a,b){a[a.length]=b;return a};e.concat=function(a,b){return a.concat(b)};e.sort=function(a,b){var c=[];if(0<a.length){for(var e=0<b?b:a.length,d=0;d<e;d++)c.push(a[d]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-
b});if(0<b)for(e=c.length;e<a.length;e++)c.push(a[e])}return c};e.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var e=0;e<b.length;c++,e++)a.splice(c,0,b[e]);else a.splice(c,0,b);return a};e.subset=function(a,b,c){return a.slice(b,c!==h?b+c:a.length)};e.join=function(a,b){return a.join(b)};e.shorten=function(a){for(var b=[],c=a.length,e=0;e<c;e++)b[e]=a[e];b.pop();return b};e.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};e.arrayCopy=function(){var a,
b=0,c,e=0,d;2===arguments.length?(a=arguments[0],c=arguments[1],d=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],d=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],d=arguments[4]);for(var f=b;f<d+b;f++,e++)if(c[e]!==h)c[e]=a[f];else throw"array index out of bounds exception";};e.reverse=function(a){return a.reverse()};e.mix=function(a,b,c){return a+((b-a)*c>>8)};e.peg=function(a){return 0>a?0:255<a?255:a};e.modes=function(){function a(b,
L,c,e,d,yd,z,f,$,h,pd){b=g(((b&4278190080)>>>24)+L,255)<<24;c+=($-c)*L>>8;e+=(h-e)*L>>8;L=d+((pd-d)*L>>8);return b|(0>c?0:255<c?255:c)<<16|(0>e?0:255<e?255:e)<<8|(0>L?0:255<L?255:L)}var b=c.ALPHA_MASK,e=c.RED_MASK,d=c.GREEN_MASK,f=c.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=L&e,m=L&d,n=L&f;return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},add:function(a,L){var c=(L&b)>>>24;return g(((a&
b)>>>24)+c,255)<<24|g((a&e)+((L&e)>>8)*c,e)&e|g((a&d)+((L&d)>>8)*c,d)&d|g((a&f)+((L&f)*c>>8),f)},subtract:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h((a&e)-((L&e)>>8)*c,d)&e|h((a&d)-((L&d)>>8)*c,f)&d|h((a&f)-((L&f)*c>>8),0)},lightest:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h(a&e,((L&e)>>8)*c)&e|h(a&d,((L&d)>>8)*c)&d|h(a&f,(L&f)*c>>8)},darkest:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=g(a&e,((L&e)>>8)*c),m=g(a&d,((L&d)>>8)*c),n=g(a&f,(L&f)*c>>
8);return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},difference:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h>V?h-V:V-h,k>l?k-l:l-k,w>m?w-m:m-w)},exclusion:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h+V-(h*V>>7),k+l-(k*l>>7),w+m-(w*m>>7))},multiply:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,
(g&b)>>>24,h,k,w,V,l,m,h*V>>8,k*l>>8,w*m>>8)},screen:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,255-((255-h)*(255-V)>>8),255-((255-k)*(255-l)>>8),255-((255-w)*(255-m)>>8))},hard_light:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>V?h*V>>7:255-((255-h)*(255-V)>>7),128>l?k*l>>7:255-((255-k)*(255-l)>>7),128>m?w*m>>7:255-((255-w)*(255-m)>>7))},soft_light:function(c,g){var h=
(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,(h*V>>7)+(h*h>>8)-(h*h*V>>15),(k*l>>7)+(k*k>>8)-(k*k*l>>15),(w*m>>7)+(w*w>>8)-(w*w*m>>15))},overlay:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>h?h*V>>7:255-((255-h)*(255-V)>>7),128>k?k*l>>7:255-((255-k)*(255-l)>>7),128>w?w*m>>7:255-((255-w)*(255-m)>>7))},dodge:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>
8,n=g&f,p=255;255!==l&&(p=(k<<8)/(255-l),p=0>p?0:255<p?255:p);var r=255;255!==m&&(r=(w<<8)/(255-m),r=0>r?0:255<r?255:r);var t=255;255!==n&&(t=(V<<8)/(255-n),t=0>t?0:255<t?255:t);return a(c,h,k,w,V,l,m,n,p,r,t)},burn:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>8,n=g&f,p=0;0!==l&&(p=(255-k<<8)/l,p=255-(0>p?0:255<p?255:p));var r=0;0!==m&&(r=(255-w<<8)/m,r=255-(0>r?0:255<r?255:r));var t=0;0!==n&&(t=(255-V<<8)/n,t=255-(0>t?0:255<t?255:t));return a(c,h,k,w,V,l,m,n,p,
r,t)}}}();e.color=function(a,b,e,d){return a!==h&&b!==h&&e!==h&&d!==h?ta(a,b,e,d):a!==h&&b!==h&&e!==h?ta(a,b,e,ia):a!==h&&b!==h?(a&c.ALPHA_MASK?(b=Math.round(255*(b/ia)),b=255<b?255:b,a=a-(a&c.ALPHA_MASK)+((0>b?0:b)<<24&c.ALPHA_MASK)):a=Va===c.RGB?ta(a,a,a,b):Va===c.HSB?ta(0,0,a/xa*ya,b):void 0,a):"number"===typeof a?$b(a):ta(xa,Ea,ya,ia)};e.color.toString=function(a){return"rgba("+((a&c.RED_MASK)>>>16)+","+((a&c.GREEN_MASK)>>>8)+","+(a&c.BLUE_MASK)+","+((a&c.ALPHA_MASK)>>>24)/255+")"};e.color.toInt=
function(a,b,e,d){return d<<24&c.ALPHA_MASK|a<<16&c.RED_MASK|b<<8&c.GREEN_MASK|e&c.BLUE_MASK};e.color.toArray=function(a){return[(a&c.RED_MASK)>>>16,(a&c.GREEN_MASK)>>>8,a&c.BLUE_MASK,(a&c.ALPHA_MASK)>>>24]};e.color.toGLArray=function(a){return[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255,((a&c.ALPHA_MASK)>>>24)/255]};e.color.toRGB=function(a,b,c){a=a>xa?xa:a;b=b>Ea?Ea:b;c=c>ya?ya:c;a=360*(a/xa);b=100*(b/Ea);c=100*(c/ya);var e=Math.round(255*(c/100));if(0===b)return[e,
e,e];a%=360;var d=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*d)/6E5));b=Math.round(255*(c*(6E3-b*(60-d))/6E5));switch(Math.floor(a/60)){case 0:return[e,b,f];case 1:return[g,e,f];case 2:return[f,e,b];case 3:return[f,g,e];case 4:return[b,f,e];case 5:return[e,f,g]}};e.brightness=function(a){return bb(a)[2]};e.saturation=function(a){return bb(a)[1]};e.hue=function(a){return bb(a)[0]};e.red=function(a){return((a&c.RED_MASK)>>>16)/255*xa};e.green=function(a){return((a&c.GREEN_MASK)>>>
8)/255*Ea};e.blue=function(a){return(a&c.BLUE_MASK)/255*ya};e.alpha=function(a){return((a&c.ALPHA_MASK)>>>24)/255*ia};e.lerpColor=function(a,b,d){var f,g,h,k,l,s;a=e.color(a);b=e.color(b);if(Va===c.HSB)return h=bb(a),a=((a&c.ALPHA_MASK)>>>24)/ia,g=bb(b),b=((b&c.ALPHA_MASK)>>>24)/ia,s=e.lerp(h[0],g[0],d),f=e.lerp(h[1],g[1],d),h=e.lerp(h[2],g[2],d),h=e.color.toRGB(s,f,h),d=e.lerp(a,b,d)*ia,d<<24&c.ALPHA_MASK|h[0]<<16&c.RED_MASK|h[1]<<8&c.GREEN_MASK|h[2]&c.BLUE_MASK;f=(a&c.RED_MASK)>>>16;g=(a&c.GREEN_MASK)>>>
8;h=a&c.BLUE_MASK;a=((a&c.ALPHA_MASK)>>>24)/ia;k=(b&c.RED_MASK)>>>16;l=(b&c.GREEN_MASK)>>>8;s=b&c.BLUE_MASK;b=((b&c.ALPHA_MASK)>>>24)/ia;f=e.lerp(f,k,d)|0;g=e.lerp(g,l,d)|0;h=e.lerp(h,s,d)|0;d=e.lerp(a,b,d)*ia;return d<<24&c.ALPHA_MASK|f<<16&c.RED_MASK|g<<8&c.GREEN_MASK|h&c.BLUE_MASK};e.colorMode=function(){Va=arguments[0];1<arguments.length&&(xa=arguments[1],Ea=arguments[2]||arguments[1],ya=arguments[3]||arguments[1],ia=arguments[4]||arguments[1])};e.blendColor=function(a,b,d){if(d===c.REPLACE)return e.modes.replace(a,
b);if(d===c.BLEND)return e.modes.blend(a,b);if(d===c.ADD)return e.modes.add(a,b);if(d===c.SUBTRACT)return e.modes.subtract(a,b);if(d===c.LIGHTEST)return e.modes.lightest(a,b);if(d===c.DARKEST)return e.modes.darkest(a,b);if(d===c.DIFFERENCE)return e.modes.difference(a,b);if(d===c.EXCLUSION)return e.modes.exclusion(a,b);if(d===c.MULTIPLY)return e.modes.multiply(a,b);if(d===c.SCREEN)return e.modes.screen(a,b);if(d===c.HARD_LIGHT)return e.modes.hard_light(a,b);if(d===c.SOFT_LIGHT)return e.modes.soft_light(a,
b);if(d===c.OVERLAY)return e.modes.overlay(a,b);if(d===c.DODGE)return e.modes.dodge(a,b);if(d===c.BURN)return e.modes.burn(a,b)};e.printMatrix=function(){K.print()};E.prototype.translate=function(a,b){K.translate(a,b);fa.invTranslate(a,b);g.translate(a,b)};B.prototype.translate=function(a,b,c){K.translate(a,b,c);fa.invTranslate(a,b,c)};E.prototype.scale=function(a,b){K.scale(a,b);fa.invScale(a,b);g.scale(a,b||a)};B.prototype.scale=function(a,b,c){K.scale(a,b,c);fa.invScale(a,b,c)};E.prototype.transform=
function(a){a=a.array();g.transform(a[0],a[3],a[1],a[4],a[2],a[5])};B.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};E.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa);g.save()};B.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa)};E.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop());Sa()};B.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop())};E.prototype.resetMatrix=function(){K.reset();fa.reset();g.setTransform(1,0,
0,1,0,0)};B.prototype.resetMatrix=function(){K.reset();fa.reset()};W.prototype.applyMatrix=function(){var a=arguments;K.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);fa.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};E.prototype.applyMatrix=function(){for(var a=arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;W.prototype.applyMatrix.apply(this,a)};e.rotateX=function(a){K.rotateX(a);fa.invRotateX(a)};
E.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};B.prototype.rotateZ=function(a){K.rotateZ(a);fa.invRotateZ(a)};e.rotateY=function(a){K.rotateY(a);fa.invRotateY(a)};E.prototype.rotate=function(a){K.rotateZ(a);fa.invRotateZ(a);g.rotate(a)};B.prototype.rotate=function(a){4>arguments.length?e.rotateZ(a):(K.rotate(a,arguments[1],arguments[2],arguments[3]),fa.rotate(-a,arguments[1],arguments[2],arguments[3]))};E.prototype.shearX=function(a){K.shearX(a);
g.transform(1,0,a,1,0,0)};B.prototype.shearX=function(a){K.shearX(a)};E.prototype.shearY=function(a){K.shearY(a);g.transform(1,a,0,1,0,0)};B.prototype.shearY=function(a){K.shearY(a)};e.pushStyle=function(){g.save();e.pushMatrix();bd.push({doFill:R,currentFillColor:La,doStroke:C,currentStrokeColor:ja,curTint:gb,curRectMode:qa,curColorMode:Va,colorModeX:xa,colorModeZ:ya,colorModeY:Ea,colorModeA:ia,curTextFont:ba,horizontalTextAlignment:nb,verticalTextAlignment:Wa,textMode:ic,curFontName:zb,curTextSize:Na,
curTextAscent:Xa,curTextDescent:Ma,curTextLeading:Aa})};e.popStyle=function(){var a=bd.pop();if(a)Sa(),e.popMatrix(),R=a.doFill,La=a.currentFillColor,C=a.doStroke,ja=a.currentStrokeColor,gb=a.curTint,qa=a.curRectMode,Va=a.curColorMode,xa=a.colorModeX,ya=a.colorModeZ,Ea=a.colorModeY,ia=a.colorModeA,ba=a.curTextFont,zb=a.curFontName,Na=a.curTextSize,nb=a.horizontalTextAlignment,Wa=a.verticalTextAlignment,ic=a.textMode,Xa=a.curTextAscent,Ma=a.curTextDescent,Aa=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";
};e.year=function(){return(new Date).getFullYear()};e.month=function(){return(new Date).getMonth()+1};e.day=function(){return(new Date).getDate()};e.hour=function(){return(new Date).getHours()};e.minute=function(){return(new Date).getMinutes()};e.second=function(){return(new Date).getSeconds()};e.millis=function(){return Date.now()-Oc};E.prototype.redraw=function(){cb();g.lineWidth=ea;var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.save();e.draw();Sa();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;
e.pmouseY=b};B.prototype.redraw=function(){cb();var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.clear(g.DEPTH_BUFFER_BIT);Fa={attributes:{},locations:{}};e.noLights();e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);e.camera();e.draw();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;e.pmouseY=b};e.noLoop=function(){eb=Da=!1;clearInterval(ma);da.onPause()};e.loop=function(){eb||(tc=Date.now(),ec=0,ma=l.setInterval(function(){try{da.onFrameStart(),e.redraw(),
da.onFrameEnd()}catch(a){throw l.clearInterval(ma),a;}},Kc),eb=Da=!0,da.onLoop())};e.frameRate=function(a){tb=a;Kc=1E3/tb;Da&&(e.noLoop(),e.loop())};e.exit=function(){l.clearInterval(ma);var a=e.externals.canvas.id;q.splice(Zb[a],1);delete Zb[a];delete S.onmousedown;for(var b in M.lib)M.lib.hasOwnProperty(b)&&M.lib[b].hasOwnProperty("detach")&&M.lib[b].detach(e);for(a=wb.length;a--;){var c=wb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+
d,c)}da.onExit()};e.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof e.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";S.style.cursor=a}else S.style.cursor=1===arguments.length?arguments[0]:od};e.noCursor=function(){S.style.cursor=
c.NOCURSOR};e.link=function(a,b){b!==h?l.open(a,b):l.location=a};e.beginDraw=r;e.endDraw=r;E.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;return g.getImageData(a,b,c,d)};B.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;var f=p.createElement("canvas").getContext("2d").createImageData(c,d),k=new ga(4*c*d);g.readPixels(a,b,c,d,g.RGBA,g.UNSIGNED_BYTE,k);a=0;b=k.length;for(var w=f.data;a<b;a++)w[a]=
k[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return f};e.status=function(a){l.status=a};e.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var e="";0<c;)e+=a>>>--c&1?"1":"0";return e};e.unbinary=function(a){for(var b=a.length-1,c=1,e=0;0<=b;){var d=a[b--];if("0"!==d&&"1"!==d)throw"the value passed into unbinary was not an 8 bit binary number";"1"===d&&(e+=c);c<<=1}return e};e.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:
8);var c=a,e=b,e=e===h||null===e?e=8:e;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<e;)c="0"+c;c.length>=e&&(c=c.substring(c.length-e,c.length));return c};e.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Fb(a[c]));return b}return Fb(a)};e.loadStrings=function(a){if(G[a])return G[a].split("\n");a=d(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};e.saveStrings=function(a,b){G[a]=
b.join("\n")};e.loadBytes=function(a){a=d(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};e.matchAll=function(a,b){for(var c=[],e,d=RegExp(b,"g");null!==(e=d.exec(a));)c.push(e),0===e[0].length&&++d.lastIndex;return 0<c.length?c:null};e.match=function(a,b){return a.match(b)};e.println=function(a){M.logger.println(a)};e.print=function(a){M.logger.print(a)};e.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+
""};e.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(db(a[c]));return b}return db(a)};e.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};e.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";
};e.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Hb(a[c]));return b}return Hb(a)};e.parseInt=function(a,b){if(a instanceof Array){for(var c=[],e=0;e<a.length;e++)"string"!==typeof a[e]||/^\s*[+\-]?\d+\s*$/.test(a[e])?c.push(Ib(a[e],b)):c.push(0);return c}return Ib(a,b)};e.__int_cast=function(a){return 0|a};e.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===
Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var e=[];c;)c.$interfaces&&(e=e.concat(c.$interfaces)),c=c.$base;for(;0<e.length;){c=e.shift();if(c===b)return!0;c.$interfaces&&(e=e.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.$base,c===b)return!0;return!1};W.prototype.size=function(a,b,d){C&&e.stroke(0);R&&e.fill(255);d={fillStyle:g.fillStyle,strokeStyle:g.strokeStyle,lineCap:g.lineCap,lineJoin:g.lineJoin};
0<S.style.length&&(S.style.removeProperty("width"),S.style.removeProperty("height"));S.width=e.width=a||100;S.height=e.height=b||100;for(var f in d)d.hasOwnProperty(f)&&(g[f]=d[f]);e.textFont(ba);e.background();Yc=Math.max(1E3,0.05*a*b);e.externals.context=g;for(a=0;a<c.SINCOS_LENGTH;a++)Ub[a]=e.sin(0.5*a*(c.PI/180)),Vb[a]=e.cos(0.5*a*(c.PI/180))};E.prototype.size=function(a,b,c){g===h&&(g=S.getContext("2d"),Ab=new Za,Bb=new Za,K=new Ya,fa=new Ya);W.prototype.size.apply(this,arguments)};B.prototype.size=
function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{S.width=e.width=b||100;S.height=e.height=c||100;for(var f=S,h=["experimental-webgl","webgl","webkit-3d"],k,l=0,s=h.length;l<s&&!(k=f.getContext(h[l],{antialias:!1,preserveDrawingBuffer:!0}));l++);g=k;Sc=g.createTexture();Tc=g.createTexture()}catch(m){M.debug(m)}if(!g)throw"WebGL context is not supported on this browser.";g.viewport(0,0,S.width,S.height);g.enable(g.DEPTH_TEST);g.enable(g.BLEND);
g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);J=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
na=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
e.strokeWeight(1);y=Ic(g,td,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");g.useProgram(y);Y("usingTexture3d",y,"usingTexture",ua);e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);wc=g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER,wc);g.bufferData(g.ARRAY_BUFFER,cd,g.STATIC_DRAW);xc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,xc);g.bufferData(g.ARRAY_BUFFER,rd,g.STATIC_DRAW);yc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,yc);g.bufferData(g.ARRAY_BUFFER,dd,g.STATIC_DRAW);gc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,gc);g.bufferData(g.ARRAY_BUFFER,Hc,g.STATIC_DRAW);zc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,zc);g.bufferData(g.ARRAY_BUFFER,sd,g.STATIC_DRAW);Tb=g.createBuffer();Ac=g.createBuffer();
Pc=g.createBuffer();Bc=g.createBuffer();Qc=g.createBuffer();Rc=g.createBuffer();hc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,hc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,0]),g.STATIC_DRAW);Cc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Cc);g.bufferData(g.ARRAY_BUFFER,new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),g.STATIC_DRAW);Dc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Dc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,1,0,1,1,0,1]),g.STATIC_DRAW);Ec=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,Ec);
g.bufferData(g.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),g.STATIC_DRAW);qb=new I;Ra=new I;K=new I;fa=new I;Ha=new I;e.camera();e.perspective();Ab=new Za;Bb=new Za;Sb=new I;fc=new I;xb=new I;yb=new I;uc=new I;vc=new I;vc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);W.prototype.size.apply(this,arguments)}}();E.prototype.ambientLight=W.prototype.a3DOnlyFunction;B.prototype.ambientLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,
-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",0);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.directionalLight=W.prototype.a3DOnlyFunction;B.prototype.directionalLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+
" lights";g.useProgram(y);var k=new I;k.scale(1,-1,1);k.apply(K.array());k=k.array();d=[k[0]*d+k[4]*f+k[8]*h,k[1]*d+k[5]*f+k[9]*h,k[2]*d+k[6]*f+k[10]*h];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d);Y("uLights.type.3d."+O,y,"uLights"+O+".type",1);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.lightFalloff=W.prototype.a3DOnlyFunction;B.prototype.lightFalloff=
function(a,b,c){g.useProgram(y);T("uFalloff3d",y,"uFalloff",[a,b,c])};E.prototype.lightSpecular=W.prototype.a3DOnlyFunction;B.prototype.lightSpecular=function(a,b,e){a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uSpecular3d",y,"uSpecular",a)};e.lights=function(){e.ambientLight(128,128,128);e.directionalLight(128,128,128,0,0,-1);e.lightFalloff(1,0,0);e.lightSpecular(0,0,0)};E.prototype.pointLight=W.prototype.a3DOnlyFunction;B.prototype.pointLight=
function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",2);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.noLights=W.prototype.a3DOnlyFunction;
B.prototype.noLights=function(){O=0;g.useProgram(y);Y("uLightCount3d",y,"uLightCount",O)};E.prototype.spotLight=W.prototype.a3DOnlyFunction;B.prototype.spotLight=function(a,b,e,d,f,h,k,l,s,m,n){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";g.useProgram(y);d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);f=f.array();k=[f[0]*k+f[4]*l+f[8]*s,f[1]*k+f[5]*l+f[9]*s,f[2]*k+f[6]*l+f[10]*s];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>
16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());T("uLights.direction.3d."+O,y,"uLights"+O+".direction",k);T("uLights.concentration.3d."+O,y,"uLights"+O+".concentration",n);T("uLights.angle.3d."+O,y,"uLights"+O+".angle",m);Y("uLights.type.3d."+O,y,"uLights"+O+".type",3);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};B.prototype.beginCamera=function(){if(kc)throw"You cannot call beginCamera() again before calling endCamera()";
kc=!0;K=Ra;fa=qb};E.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};B.prototype.endCamera=function(){if(!kc)throw"You cannot call endCamera() before calling beginCamera()";K.set(qb);fa.set(Ra);kc=!1};e.camera=function(a,b,c,d,f,g,k,l,s){a===h&&(Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),a=Gc,b=rb,c=sb,d=Gc,f=rb,k=g=0,l=1,s=0);d=new PVector(a-d,b-f,c-g);var m=new PVector(k,l,s);d.normalize();s=PVector.cross(m,d);m=PVector.cross(d,s);s.normalize();m.normalize();
k=s.x;l=s.y;s=s.z;f=m.x;g=m.y;var m=m.z,n=d.x,p=d.y;d=d.z;qb.set(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);qb.translate(-a,-b,-c);Ra.reset();Ra.invApply(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);Ra.translate(a,b,c);K.set(qb);fa.set(Ra)};e.perspective=function(a,b,c,d){0===arguments.length&&(rb=S.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,a=lc,b=ad,c=Zc,d=$c);var f,g;f=c*Math.tan(a/2);g=-f;e.frustum(g*b,f*b,g,f,c,d)};E.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";
};B.prototype.frustum=function(a,b,c,e,d,f){Ha=new I;Ha.set(2*d/(b-a),0,(b+a)/(b-a),0,0,2*d/(e-c),(e+c)/(e-c),0,0,0,-(f+d)/(f-d),-(2*f*d)/(f-d),0,0,-1,0);a=new I;a.set(Ha);a.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,a.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,a.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,a.array())};e.ortho=function(a,b,c,d,f,h){0===arguments.length&&(a=0,b=e.width,c=0,d=e.height,f=-10,h=10);var k=2/(b-a),l=2/(d-c),s=-2/
(h-f),m=-(b+a)/(b-a),n=-(d+c)/(d-c),p=-(h+f)/(h-f);Ha=new I;Ha.set(k,0,0,m,0,l,0,n,0,0,s,p,0,0,0,1);k=new I;k.set(Ha);k.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,k.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,k.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,k.array())};e.printProjection=function(){Ha.print()};e.printCamera=function(){qb.print()};E.prototype.box=W.prototype.a3DOnlyFunction;B.prototype.box=function(a,b,c){b&&c||(b=c=a);var e=new I;
e.scale(a,b,c);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();R&&(g.useProgram(y),U("model3d",y,"uModel",!1,e.array()),U("view3d",y,"uView",!1,a.array()),g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(b=new I,b.set(a),c=new I,c.set(e),b.mult(c),c=new I,c.set(b),c.invert(),c.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,c.array()),Z("aNormal3d",y,"aNormal",3,xc)):sa("aNormal3d",y,"aNormal"),Z("aVertex3d",y,"aVertex",3,wc),sa("aColor3d",y,
"aColor"),sa("aTexture3d",y,"aTexture"),g.drawArrays(g.TRIANGLES,0,cd.length/3),g.disable(g.POLYGON_OFFSET_FILL));0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,e.array()),U("uView2d",J,"uView",!1,a.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("vertex2d",J,"aVertex",3,yc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINES,0,dd.length/3))};e.sphereDetail=function(a,b){var e;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pb||
b!==jc){var d=c.SINCOS_LENGTH/a,f=new A(a),h=new A(a);for(e=0;e<a;e++)f[e]=Vb[e*d%c.SINCOS_LENGTH|0],h[e]=Ub[e*d%c.SINCOS_LENGTH|0];e=a*(b-1)+2;d=0;Oa=new A(e);Pa=new A(e);Qa=new A(e);var k=0.5*c.SINCOS_LENGTH/b,l=k;for(e=1;e<b;e++){for(var s=Ub[l%c.SINCOS_LENGTH|0],m=-Vb[l%c.SINCOS_LENGTH|0],n=0;n<a;n++)Oa[d]=f[n]*s,Pa[d]=m,Qa[d++]=h[n]*s;l+=k}pb=a;jc=b;P=[];for(f=0;f<pb;f++)P.push(0),P.push(-1),P.push(0),P.push(Oa[f]),P.push(Pa[f]),P.push(Qa[f]);P.push(0);P.push(-1);P.push(0);P.push(Oa[0]);P.push(Pa[0]);
P.push(Qa[0]);k=0;for(f=2;f<jc;f++){h=e=k;d=k+=pb;for(l=0;l<pb;l++)P.push(Oa[h]),P.push(Pa[h]),P.push(Qa[h++]),P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d++]);h=e;d=k;P.push(Oa[h]);P.push(Pa[h]);P.push(Qa[h]);P.push(Oa[d]);P.push(Pa[d]);P.push(Qa[d])}for(f=0;f<pb;f++)d=k+f,P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d]),P.push(0),P.push(1),P.push(0);P.push(Oa[k]);P.push(Pa[k]);P.push(Qa[k]);P.push(0);P.push(1);P.push(0);g.bindBuffer(g.ARRAY_BUFFER,Tb);g.bufferData(g.ARRAY_BUFFER,new A(P),g.STATIC_DRAW)}};E.prototype.sphere=
W.prototype.a3DOnlyFunction;B.prototype.sphere=function(a){(3>pb||2>jc)&&e.sphereDetail(30);var b=new I;b.scale(a,a,a);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();if(R){if(0<O){var c=new I;c.set(a);var d=new I;d.set(b);c.mult(d);d=new I;d.set(c);d.invert();d.transpose();U("uNormalTransform3d",y,"uNormalTransform",!1,d.array());Z("aNormal3d",y,"aNormal",3,Tb)}else sa("aNormal3d",y,"aNormal");g.useProgram(y);sa("aTexture3d",y,"aTexture");U("uModel3d",y,"uModel",!1,b.array());U("uView3d",
y,"uView",!1,a.array());Z("aVertex3d",y,"aVertex",3,Tb);sa("aColor3d",y,"aColor");g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("uColor3d",y,"uColor",ka);g.drawArrays(g.TRIANGLE_STRIP,0,P.length/3);g.disable(g.POLYGON_OFFSET_FILL)}0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,b.array()),U("uView2d",J,"uView",!1,a.array()),Z("aVertex2d",J,"aVertex",3,Tb),sa("aTextureCoord2d",J,"aTextureCoord"),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),g.drawArrays(g.LINE_STRIP,
0,P.length/3))};e.modelX=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[0]*f+d[1]*g+d[2]*h+d[3]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};e.modelY=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[4]*f+d[5]*g+d[6]*h+d[7]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*
b;return 0!==d?a/d:a};e.modelZ=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};E.prototype.ambient=W.prototype.a3DOnlyFunction;B.prototype.ambient=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialAmbient3d",y,"uMaterialAmbient",e.color.toGLArray(a).slice(0,
3))};E.prototype.emissive=W.prototype.a3DOnlyFunction;B.prototype.emissive=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialEmissive3d",y,"uMaterialEmissive",e.color.toGLArray(a).slice(0,3))};E.prototype.shininess=W.prototype.a3DOnlyFunction;B.prototype.shininess=function(a){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);T("uShininess3d",y,"uShininess",a)};E.prototype.specular=W.prototype.a3DOnlyFunction;B.prototype.specular=function(a,b,c){g.useProgram(y);
Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialSpecular3d",y,"uMaterialSpecular",e.color.toGLArray(a).slice(0,3))};e.screenX=function(a,b,c){var d=K.array();if(16===d.length){var f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[0]*f+c[1]*g+c[2]*h+c[3]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.width*(1+a)/2}return K.multX(a,b)};e.screenY=function(a,b,c){var d=K.array();if(16===d.length){var f=
d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[4]*f+c[5]*g+c[6]*h+c[7]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.height*(1+a)/2}return K.multY(a,b)};e.screenZ=function(a,b,c){var e=K.array();if(16!==e.length)return 0;var d=Ha.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*
g+d[14]*h+d[15]*b;0!==d&&(a/=d);return(a+1)/2};W.prototype.fill=function(){var a=e.color.apply(this,arguments);a===La&&R||(R=!0,La=a)};E.prototype.fill=function(){W.prototype.fill.apply(this,arguments);N=!0};B.prototype.fill=function(){W.prototype.fill.apply(this,arguments);ka=e.color.toGLArray(La)};e.noFill=function(){R=!1};W.prototype.stroke=function(){var a=e.color.apply(this,arguments);a===ja&&C||(C=!0,ja=a)};E.prototype.stroke=function(){W.prototype.stroke.apply(this,arguments);ab=!0};B.prototype.stroke=
function(){W.prototype.stroke.apply(this,arguments);X=e.color.toGLArray(ja)};e.noStroke=function(){C=!1};W.prototype.strokeWeight=function(a){ea=a};E.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.lineWidth=a};B.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.useProgram(J);T("pointSize2d",J,"uPointSize",a);g.useProgram(na);T("pointSizeUnlitShape",na,"uPointSize",a);g.lineWidth(a)};e.strokeCap=function(a){ha.$ensureContext().lineCap=
a};e.strokeJoin=function(a){ha.$ensureContext().lineJoin=a};E.prototype.smooth=function(){ra=!0;var a=S.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode","bicubic","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!0)};B.prototype.smooth=function(){ra=!0};E.prototype.noSmooth=function(){ra=!1;var a=S.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges",
"important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!1)};B.prototype.noSmooth=function(){ra=!1};E.prototype.point=function(a,b){C&&(a=Math.round(a),b=Math.round(b),g.fillStyle=e.color.toString(ja),N=!0,1<ea?(g.beginPath(),g.arc(a,b,ea/2,0,c.TWO_PI,!1),g.fill()):
g.fillRect(a,b,1,1))};B.prototype.point=function(a,b,c){var e=new I;e.translate(a,b,c||0);e.transpose();a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();g.useProgram(J);U("uModel2d",J,"uModel",!1,e.array());U("uView2d",J,"uView",!1,a.array());0<ea&&C&&(T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Y("uSmooth2d",J,"uSmooth",ra),Z("aVertex2d",J,"aVertex",3,hc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.POINTS,0,1))};e.beginShape=function(a){aa=a;t=[]};E.prototype.vertex=
function(a,b,c){var e=[];ib&&(ib=!1);e.isVert=!0;e[0]=a;e[1]=b;e[2]=0;e[3]=0;e[4]=0;e[5]=La;e[6]=ja;t.push(e);c&&(t[t.length-1].moveTo=c)};B.prototype.vertex=function(a,b,e,d,f){var g=[];ib&&(ib=!1);g.isVert=!0;f===h&&ua&&(f=d,d=e,e=0);d!==h&&f!==h&&(Wc===c.IMAGE&&(d/=Uc,f/=Vc),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);g[0]=a;g[1]=b;g[2]=e||0;g[3]=d||0;g[4]=f||0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.push(g)};var gd=function(a,
b){var c=new I;c.scale(1,-1,1);c.apply(K.array());c.transpose();g.useProgram(na);U("uViewUS",na,"uView",!1,c.array());Y("uSmoothUS",na,"uSmooth",ra);Z("aVertexUS",na,"aVertex",3,hc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(b),g.STREAM_DRAW);g.drawArrays(g.POINTS,0,a.length/3)},Ca=function(a,b,c){b="LINES"===b?g.LINES:"LINE_LOOP"===b?g.LINE_LOOP:g.LINE_STRIP;var e=new I;e.scale(1,-1,1);e.apply(K.array());e.transpose();g.useProgram(na);
U("uViewUS",na,"uView",!1,e.array());Z("aVertexUS",na,"aVertex",3,Ac);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Qc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);g.drawArrays(b,0,a.length/3)},$a=function(a,b,c,e){b="TRIANGLES"===b?g.TRIANGLES:"TRIANGLE_FAN"===b?g.TRIANGLE_FAN:g.TRIANGLE_STRIP;var d=new I;d.scale(1,-1,1);d.apply(K.array());d.transpose();g.useProgram(y);U("model3d",y,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);U("view3d",y,"uView",!1,d.array());
g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("color3d",y,"uColor",[-1,0,0,0]);Z("vertex3d",y,"aVertex",3,Pc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);ua&&null!==gb&&sc(c);Z("aColor3d",y,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);sa("aNormal3d",y,"aNormal");ua&&(Y("uUsingTexture3d",y,"uUsingTexture",ua),Z("aTexture3d",y,"aTexture",2,Rc),g.bufferData(g.ARRAY_BUFFER,new A(e),g.STREAM_DRAW));g.drawArrays(b,0,a.length/3);g.disable(g.POLYGON_OFFSET_FILL)};E.prototype.endShape=
function(a){if(0!==t.length){(a=a===c.CLOSE)&&t.push(t[0]);var b=[],d=[],f=[],k=[],l;ib=!0;var w,m,s=t.length;for(w=0;w<s;w++)for(l=t[w],m=0;3>m;m++)b.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=5;9>m;m++)d.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=9;13>m;m++)f.push(l[m]);for(w=0;w<s;w++)l=t[w],k.push(l[3]),k.push(l[4]);if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h)if(aa===c.POINTS)for(w=0;w<s;w++)l=t[w],C&&e.stroke(l[6]),e.point(l[0],l[1]);else if(aa===c.LINES)for(w=0;w+1<s;w+=2)l=t[w],
C&&e.stroke(t[w+1][6]),e.line(l[0],l[1],t[w+1][0],t[w+1][1]);else if(aa===c.TRIANGLES)for(w=0;w+2<s;w+=3)l=t[w],g.beginPath(),g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),R&&(e.fill(t[w+2][5]),wa()),C&&(e.stroke(t[w+2][6]),za()),g.closePath();else if(aa===c.TRIANGLE_STRIP)for(w=0;w+1<s;w++)l=t[w],g.beginPath(),g.moveTo(t[w+1][0],t[w+1][1]),g.lineTo(l[0],l[1]),C&&e.stroke(t[w+1][6]),R&&e.fill(t[w+1][5]),w+2<s&&(g.lineTo(t[w+2][0],t[w+2][1]),C&&
e.stroke(t[w+2][6]),R&&e.fill(t[w+2][5])),Ta();else if(aa===c.TRIANGLE_FAN){if(2<s)for(g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[1][0],t[1][1]),g.lineTo(t[2][0],t[2][1]),R&&(e.fill(t[2][5]),wa()),C&&(e.stroke(t[2][6]),za()),g.closePath(),w=3;w<s;w++)l=t[w],g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[w-1][0],t[w-1][1]),g.lineTo(l[0],l[1]),R&&(e.fill(l[5]),wa()),C&&(e.stroke(l[6]),za()),g.closePath()}else if(aa===c.QUADS)for(w=0;w+3<s;w+=4){l=t[w];g.beginPath();g.moveTo(l[0],l[1]);for(m=
1;4>m;m++)g.lineTo(t[w+m][0],t[w+m][1]);g.lineTo(l[0],l[1]);R&&(e.fill(t[w+3][5]),wa());C&&(e.stroke(t[w+3][6]),za());g.closePath()}else if(aa===c.QUAD_STRIP){if(3<s)for(w=0;w+1<s;w+=2)l=t[w],g.beginPath(),w+3<s?(g.moveTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+3][0],t[w+3][1]),R&&e.fill(t[w+3][5]),C&&e.stroke(t[w+3][6])):(g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1])),Ta()}else{g.beginPath();g.moveTo(t[0][0],t[0][1]);for(w=1;w<s;w++)l=t[w],l.isVert&&
(l.moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]));Ta()}else{g.beginPath();for(w=0;w<s;w++)l=t[w],t[w].isVert?t[w].moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]):g.bezierCurveTo(t[w][0],t[w][1],t[w][2],t[w][3],t[w][4],t[w][5]);Ta()}else if(3<s){b=[];d=1-oc;g.beginPath();g.moveTo(t[1][0],t[1][1]);for(w=1;w+2<s;w++)l=t[w],b[0]=[l[0],l[1]],b[1]=[l[0]+(d*t[w+1][0]-d*t[w-1][0])/6,l[1]+(d*t[w+1][1]-d*t[w-1][1])/6],b[2]=[t[w+1][0]+(d*t[w][0]-d*t[w+2][0])/6,t[w+1][1]+(d*t[w][1]-d*t[w+2][1])/6],b[3]=[t[w+
1][0],t[w+1][1]],g.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Ta()}Db=Cb=!1;va=[];oa=0;a&&t.pop()}};B.prototype.endShape=function(a){if(0!==t.length){var b=a===c.CLOSE;a=[];var e=[],d=[],f=[],k=[],l;ib=!0;var m,s,n=t.length;for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)e.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);for(m=0;m<n;m++)l=t[m],k.push(l[3]),k.push(l[4]);if(b){e.push(t[0][0]);e.push(t[0][1]);e.push(t[0][2]);
for(m=5;9>m;m++)d.push(t[0][m]);for(m=9;13>m;m++)f.push(t[0][m]);k.push(t[0][3]);k.push(t[0][4])}if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h){if(aa===c.POINTS){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);gd(a,f)}else if(aa===c.LINES){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);Ca(a,"LINES",f)}else if(aa===c.TRIANGLES){if(2<n)for(m=0;m+2<n;m+=3){e=[];k=[];a=[];d=[];f=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+
s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)d.push(t[m+s][b]),f.push(t[m+s][b+4]);C&&Ca(a,"LINE_LOOP",f);(R||ua)&&$a(e,"TRIANGLES",d,k)}}else if(aa===c.TRIANGLE_STRIP){if(2<n)for(m=0;m+2<n;m++){a=[];e=[];f=[];d=[];k=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)f.push(t[m+s][b+4]),d.push(t[m+s][b]);(R||ua)&&$a(e,"TRIANGLE_STRIP",
d,k);C&&Ca(a,"LINE_LOOP",f)}}else if(aa===c.TRIANGLE_FAN){if(2<n){for(m=0;3>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;3>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);C&&Ca(a,"LINE_LOOP",f);for(m=2;m+1<n;m++){a=[];f=[];a.push(t[0][0]);a.push(t[0][1]);a.push(t[0][2]);f.push(t[0][9]);f.push(t[0][10]);f.push(t[0][11]);f.push(t[0][12]);for(s=0;2>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]);for(s=0;2>s;s++)for(b=9;13>b;b++)f.push(t[m+s][b]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}}else if(aa===
c.QUADS)for(m=0;m+3<n;m+=4){a=[];for(s=0;4>s;s++)for(l=t[m+s],b=0;3>b;b++)a.push(l[b]);C&&Ca(a,"LINE_LOOP",f);if(R){e=[];d=[];k=[];for(s=0;3>s;s++)e.push(t[m][s]);for(s=5;9>s;s++)d.push(t[m][s]);for(s=0;3>s;s++)e.push(t[m+1][s]);for(s=5;9>s;s++)d.push(t[m+1][s]);for(s=0;3>s;s++)e.push(t[m+3][s]);for(s=5;9>s;s++)d.push(t[m+3][s]);for(s=0;3>s;s++)e.push(t[m+2][s]);for(s=5;9>s;s++)d.push(t[m+2][s]);ua&&(k.push(t[m+0][3]),k.push(t[m+0][4]),k.push(t[m+1][3]),k.push(t[m+1][4]),k.push(t[m+3][3]),k.push(t[m+
3][4]),k.push(t[m+2][3]),k.push(t[m+2][4]));$a(e,"TRIANGLE_STRIP",d,k)}}else if(aa===c.QUAD_STRIP){if(3<n){for(m=0;2>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;2>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);Ca(a,"LINE_STRIP",f);4<n&&0<n%2&&(e.splice(e.length-3),t.pop());for(m=0;m+3<n;m+=2){a=[];f=[];for(s=0;3>s;s++)a.push(t[m+1][s]);for(s=0;3>s;s++)a.push(t[m+3][s]);for(s=0;3>s;s++)a.push(t[m+2][s]);for(s=0;3>s;s++)a.push(t[m+0][s]);for(s=9;13>s;s++)f.push(t[m+1][s]);for(s=9;13>s;s++)f.push(t[m+
3][s]);for(s=9;13>s;s++)f.push(t[m+2][s]);for(s=9;13>s;s++)f.push(t[m+0][s]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_LIST",d,k)}}else if(1===n){for(s=0;3>s;s++)a.push(t[0][s]);for(s=9;13>s;s++)f.push(t[0][s]);gd(a,f)}else{for(m=0;m<n;m++){l=t[m];for(s=0;3>s;s++)a.push(l[s]);for(s=5;9>s;s++)f.push(l[s])}C&&b?Ca(a,"LINE_LOOP",f):C&&!b&&Ca(a,"LINE_STRIP",f);(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}ua=!1;g.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)}else a=e,a.splice(a.length-3),f.splice(f.length-
4),C&&Ca(a,null,f),R&&$a(e,"TRIANGLES",d);else C&&Ca(e,null,f),R&&$a(e,null,d);Db=Cb=!1;va=[];oa=0}};var hd=function(a,b){var c=1/a,e=c*c,d=e*c;b.set(0,0,0,1,d,e,c,0,6*d,2*e,0,0,6*d,0,0,0)},id=function(){xb||(Sb=new I,xb=new I,Lc=!0);var a=oc;Sb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);hd(pc,xb);uc||(fc=new I);fc.set(Sb);fc.preApply(uc);xb.apply(Sb)};E.prototype.bezierVertex=function(){Db=!0;var a=[];if(ib)throw"vertex() must be used at least once before calling bezierVertex()";
for(var b=0;b<arguments.length;b++)a[b]=arguments[b];t.push(a);t[t.length-1].isVert=!1};B.prototype.bezierVertex=function(){Db=!0;if(ib)throw"vertex() must be used at least once before calling bezierVertex()";if(9===arguments.length){yb===h&&(yb=new I);var a=t.length-1;hd(qc,yb);yb.apply(vc);for(var b=yb.array(),c=t[a][0],d=t[a][1],a=t[a][2],f=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],g=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],k=b[12]*c+b[13]*arguments[0]+
b[14]*arguments[3]+b[15]*arguments[6],l=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],m=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],n=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+b[15]*arguments[7],p=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],r=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],v=0;v<qc;v++)c+=f,f+=g,g+=k,d+=l,l+=m,m+=n,a+=p,p+=r,r+=b,e.vertex(c,d,a);
e.vertex(arguments[6],arguments[7],arguments[8])}};e.texture=function(a){var b=ha.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Sc),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),e=p.createElement("canvas"),d=e.getContext("2d"),
f;if(a.width&0===a.width-1)e.width=a.width;else{for(f=1;f<a.width;)f*=2;e.width=f}if(a.height&0===a.height-1)e.height=a.height;else{for(f=1;f<a.height;)f*=2;e.height=f}d.drawImage(a.sourceImg,0,0,a.width,a.height,0,0,e.width,e.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,
b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Uc=a.width;Vc=a.height}ua=!0;b.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)};e.textureMode=function(a){Wc=a};E.prototype.curveVertex=function(a,b){Cb=!0;e.vertex(a,b)};B.prototype.curveVertex=function(a,b,c){Cb=!0;Lc||id();var d=[];d[0]=a;d[1]=b;d[2]=c;va.push(d);oa++;if(3<oa){var f=va[oa-4][0],g=va[oa-4][1],h=va[oa-4][2],k=va[oa-3][0],l=va[oa-3][1],m=va[oa-3][2],n=
va[oa-2][0],p=va[oa-2][1],r=va[oa-2][2],t=va[oa-1][0],v=va[oa-1][1],u=va[oa-1][2];a=k;b=l;c=m;var q=xb.array(),d=q[4]*f+q[5]*k+q[6]*n+q[7]*t,x=q[8]*f+q[9]*k+q[10]*n+q[11]*t,f=q[12]*f+q[13]*k+q[14]*n+q[15]*t,k=q[4]*g+q[5]*l+q[6]*p+q[7]*v,n=q[8]*g+q[9]*l+q[10]*p+q[11]*v,g=q[12]*g+q[13]*l+q[14]*p+q[15]*v,l=q[4]*h+q[5]*m+q[6]*r+q[7]*u,p=q[8]*h+q[9]*m+q[10]*r+q[11]*u,h=q[12]*h+q[13]*m+q[14]*r+q[15]*u;e.vertex(a,b,c);for(m=0;m<pc;m++)a+=d,d+=x,x+=f,b+=k,k+=n,n+=g,c+=l,l+=p,p+=h,e.vertex(a,b,c)}};E.prototype.curve=
function(a,b,c,d,f,g,h,k){e.beginShape();e.curveVertex(a,b);e.curveVertex(c,d);e.curveVertex(f,g);e.curveVertex(h,k);e.endShape()};B.prototype.curve=function(a,b,c,d,f,g,k,l,m,n,p,r){r!==h?(e.beginShape(),e.curveVertex(a,b,c),e.curveVertex(d,f,g),e.curveVertex(k,l,m),e.curveVertex(n,p,r)):(e.beginShape(),e.curveVertex(a,b),e.curveVertex(c,d),e.curveVertex(f,g),e.curveVertex(k,l));e.endShape()};e.curveTightness=function(a){oc=a};e.curveDetail=function(a){pc=a;id()};e.rectMode=function(a){qa=a};e.imageMode=
function(a){switch(a){case c.CORNER:mc=ed;break;case c.CORNERS:mc=ud;break;case c.CENTER:mc=vd;break;default:throw"Invalid imageMode";}};e.ellipseMode=function(a){la=a};e.arc=function(a,b,d,f,g,h){if(!(0>=d||h<g)){la===c.CORNERS?(d-=a,f-=b):la===c.RADIUS?(a-=d,b-=f,d*=2,f*=2):la===c.CENTER&&(a-=d/2,b-=f/2);for(;0>g;)g+=c.TWO_PI,h+=c.TWO_PI;h-g>c.TWO_PI&&(g=0,h=c.TWO_PI);d/=2;f/=2;a+=d;b+=f;g=0|0.5+2*g*e.RAD_TO_DEG;h=0|0.5+2*h*e.RAD_TO_DEG;var k,l;if(R){var m=C;C=!1;e.beginShape();e.vertex(a,b);for(k=
g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape(c.CLOSE);C=m}if(C){m=R;R=!1;e.beginShape();for(k=g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape();R=m}}};E.prototype.line=function(a,b,c,d){if(C)if(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d),a===c&&b===d)e.point(a,b);else{for(var f=h,k=h,l=!0,f=K.array(),m=[1,0,0,0,1,0],s=0;6>s&&l;s++)l=f[s]===m[s];l&&(a===c?(b>d&&(f=b,b=d,d=f),d++,1===ea%2&&g.translate(0.5,0)):b===d&&(a>c&&(f=a,a=
c,c=f),c++,1===ea%2&&g.translate(0,0.5)),1===ea&&(k=g.lineCap,g.lineCap="butt"));g.beginPath();g.moveTo(a||0,b||0);g.lineTo(c||0,d||0);za();l&&(a===c&&1===ea%2?g.translate(-0.5,0):b===d&&1===ea%2&&g.translate(0,-0.5),1===ea&&(g.lineCap=k))}};B.prototype.line=function(a,b,c,d,f,k){if(f===h||k===h)k=0,f=d,d=c,c=0;a===d&&b===f&&c===k?e.point(a,b,c):(a=[a,b,c,d,f,k],b=new I,b.scale(1,-1,1),b.apply(K.array()),b.transpose(),0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,
0,0,1]),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,Ac),sa("aTextureCoord2d",J,"aTextureCoord"),g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW),g.drawArrays(g.LINES,0,2)))};E.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";e.beginShape();e.vertex(arguments[0],arguments[1]);e.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],
arguments[7]);e.endShape()};B.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";e.beginShape();e.vertex(arguments[0],arguments[1],arguments[2]);e.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);e.endShape()};e.bezierDetail=function(a){qc=a};e.bezierPoint=function(a,b,c,e,d){return(1-d)*(1-d)*(1-d)*a+3*(1-d)*(1-d)*d*b+3*(1-d)*d*d*c+d*d*d*e};e.bezierTangent=
function(a,b,c,e,d){return 3*d*d*(-a+3*b-3*c+e)+6*d*(a-2*b+c)+3*(-a+b)};e.curvePoint=function(a,b,c,e,d){return 0.5*(2*b+(-a+c)*d+(2*a-5*b+4*c-e)*d*d+(-a+3*b-3*c+e)*d*d*d)};e.curveTangent=function(a,b,c,e,d){return 0.5*(-a+c+2*(2*a-5*b+4*c-e)*d+3*(-a+3*b-3*c+e)*d*d)};e.triangle=function(a,b,d,f,g,h){e.beginShape(c.TRIANGLES);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.endShape()};e.quad=function(a,b,d,f,g,h,k,l){e.beginShape(c.QUADS);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.vertex(k,
l,0);e.endShape()};E.prototype.rect=function(a,b,e,d,f,k,l,m){if(e||d)if(qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=e/2,b-=d/2),a=Math.round(a),b=Math.round(b),e=Math.round(e),d=Math.round(d),f!==h){m===h&&(m=l=k=f);var s=e/2,n=d/2;if(f>s||f>n)f=Math.min(s,n);if(k>s||k>n)k=Math.min(s,n);if(l>s||l>n)l=Math.min(s,n);if(m>s||m>n)m=Math.min(s,n);R&&!C||g.translate(0.5,0.5);g.beginPath();g.moveTo(a+f,b);g.lineTo(a+e-k,b);g.quadraticCurveTo(a+e,b,a+e,b+k);g.lineTo(a+
e,b+d-l);g.quadraticCurveTo(a+e,b+d,a+e-l,b+d);g.lineTo(a+m,b+d);g.quadraticCurveTo(a,b+d,a,b+d-m);g.lineTo(a,b+f);g.quadraticCurveTo(a,b,a+f,b);R&&!C||g.translate(-0.5,-0.5);wa();za()}else C&&1===ea%2&&g.translate(0.5,0.5),g.beginPath(),g.rect(a,b,e,d),wa(),za(),C&&1===ea%2&&g.translate(-0.5,-0.5)};B.prototype.rect=function(a,b,e,d,f,k,l,m){if(f!==h)throw"rect() with rounded corners is not supported in 3D mode";qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=
e/2,b-=d/2);f=new I;f.translate(a,b,0);f.scale(e,d,1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,f.array()),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,gc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINE_LOOP,0,Hc.length/3));R&&(g.useProgram(y),U("uModel3d",y,"uModel",!1,f.array()),U("uView3d",y,"uView",!1,b.array()),
g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(a=new I,a.set(b),b=new I,b.set(f),a.mult(b),b=new I,b.set(a),b.invert(),b.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,b.array()),Z("aNormal3d",y,"aNormal",3,zc)):sa("normal3d",y,"aNormal"),Z("vertex3d",y,"aVertex",3,gc),g.drawArrays(g.TRIANGLE_FAN,0,Hc.length/3),g.disable(g.POLYGON_OFFSET_FILL))};E.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f))if(la===c.RADIUS?(d*=2,f*=2):la===
c.CORNERS?(d-=a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2),d===f)g.beginPath(),g.arc(a,b,d/2,0,c.TWO_PI,!1),wa(),za();else{d/=2;f/=2;var h=0.5522847498307933*d,k=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-k,a+h,b-f,a,b-f);e.bezierVertex(a-h,b-f,a-d,b-k,a-d,b);e.bezierVertex(a-d,b+k,a-h,b+f,a,b+f);e.bezierVertex(a+h,b+f,a+d,b+k,a+d,b);e.endShape()}};B.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f)){la===c.RADIUS?(d*=2,f*=2):la===c.CORNERS?(d-=
a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2);d/=2;f/=2;var g=0.5522847498307933*d,h=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-h,0,a+g,b-f,0,a,b-f,0);e.bezierVertex(a-g,b-f,0,a-d,b-h,0,a-d,b,0);e.bezierVertex(a-d,b+h,0,a-g,b+f,0,a,b+f,0);e.bezierVertex(a+g,b+f,0,a+d,b+h,0,a+d,b,0);e.endShape();if(R){for(g=f=d=0;g<t.length;g++)d+=t[g][0],f+=t[g][1];d/=t.length;f/=t.length;g=[];a=[];b=[];g[0]=d;g[1]=f;g[2]=0;g[3]=0;g[4]=0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];
g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.unshift(g);for(g=0;g<t.length;g++){for(d=0;3>d;d++)a.push(t[g][d]);for(d=5;9>d;d++)b.push(t[g][d])}$a(a,"TRIANGLE_FAN",b)}}};e.normal=function(a,b,d){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof d)throw"normal() requires three numeric arguments.";Gb=a;Eb=b;ub=d;0!==aa&&(jb===c.NORMAL_MODE_AUTO?jb=c.NORMAL_MODE_SHAPE:jb===c.NORMAL_MODE_SHAPE&&(jb=c.NORMAL_MODE_VERTEX))};e.save=function(a,
b){return b!==h?l.open(b.toDataURL(),"_blank"):l.open(e.externals.canvas.toDataURL(),"_blank")};var wd=0;e.saveFrame=function(a){a===h&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+wd++;b.length<a.length;)b="0"+b;return b});e.save(a)};var xd=p.createElement("canvas").getContext("2d"),Mc=[h,h,h],Ga=function(a,b,d){this.__isDirty=!1;if(a instanceof D)this.fromHTMLImageData(a);else if(b||d){this.width=a||1;this.height=b||1;a=this.sourceImg=p.createElement("canvas");a.width=this.width;
a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=d===c.ARGB||d===c.ALPHA?d:c.RGB;if(this.format===c.RGB)for(d=3,a=this.imageData.data,b=a.length;d<b;d+=4)a[d]=255;this.__isDirty=!0;this.updatePixels()}else this.height=this.width=0,this.imageData=xd.createImageData(1,1),this.format=c.ARGB;this.pixels=Jb(this)};Ga.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof x&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,
0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ja(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,b,c,d){if(!arguments.length)return e.get(this);if(2===arguments.length)return e.get(a,b,this);if(4===arguments.length)return e.get(a,b,c,d,this)},set:function(a,b,c){e.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,f,g,h,k,l,m){9===
arguments.length?e.blend(this,a,b,c,d,f,g,h,k,l,this):10===arguments.length&&e.blend(a,b,c,d,f,g,h,k,l,m,this);delete this.sourceImg},copy:function(a,b,d,f,g,h,k,l,m){8===arguments.length?e.blend(this,a,b,d,f,g,h,k,l,c.REPLACE,this):9===arguments.length&&e.blend(a,b,d,f,g,h,k,l,m,c.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?e.filter(a,b,this):1===arguments.length&&e.filter(a,null,this);delete this.sourceImg},save:function(a){e.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";
if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ja(this.imageData).canvas,c=Ja(c,a,b).context.getImageData(0,0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ga||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";
else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},loadPixels:r,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ja(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ja(this.imageData).canvas.toDataURL()},
fromImageData:function(a){var b=a.width,d=a.height,e=p.createElement("canvas"),f=e.getContext("2d");this.width=e.width=b;this.height=e.height=d;f.putImageData(a,0,0);this.format=c.ARGB;this.imageData=a;this.sourceImg=e}};e.PImage=Ga;e.createImage=function(a,b,c){return new Ga(a,b,c)};e.loadImage=function(a,b,c){if(da.imageCache.images[a])return b=new Ga(da.imageCache.images[a]),b.loaded=!0,b;b=new Ga;var d=p.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);
b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};e.requestImage=e.loadImage;e.get=function(a,b,d,f,g){if(void 0!==g)return Lb(a,b,d,f,g);if(void 0!==f)return Kb(a,b,d,f);if(void 0!==d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y.";a=4*b*d.width+4*a;d=d.imageData.data;return d[a+3]<<24&c.ALPHA_MASK|d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK}return void 0!==b?(a>=e.width||0>a||0>b||b>=e.height?d=0:Rb?(a=4*((0|a)+e.width*(0|b)),d=e.imageData.data,d=d[a+3]<<24&c.ALPHA_MASK|
d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK):(d=e.toImageData(0|a,0|b,1,1).data,d=d[3]<<24&c.ALPHA_MASK|d[0]<<16&c.RED_MASK|d[1]<<8&c.GREEN_MASK|d[2]&c.BLUE_MASK),d):void 0!==a?Lb(0,0,a.width,a.height,a):Kb(0,0,e.width,e.height)};e.createGraphics=function(a,b,c){var d=new M;d.size(a,b,c);d.background(0,0);return d};e.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<e.width&&(0<=a&&0<=b&&b<e.height)&&(Rb||(e.loadPixels(),null===Fc&&(Nc=g,Fc=new Mb),Rb=!0,g=Fc,Xc=
0),e.pixels.setPixel((0|a)+e.width*(0|b),c),++Xc>Yc&&fb()):(c instanceof Ga||c.__isPImage)&&e.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var f=e.color.toArray(c),h=4*b*d.width+4*a,k=d.imageData.data;k[h]=f[0];k[h+1]=f[1];k[h+2]=f[2];k[h+3]=f[3]}};e.imageData={};e.pixels={getLength:function(){return e.imageData.data.length?e.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=e.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<
16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=e.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=e.imageData.width*e.imageData.height,c=e.imageData.data,d=0,f=0;d<b;d++,f+=4)a.push(c[f+3]<<24&4278190080|c[f+0]<<16&16711680|c[f+1]<<8&65280|c[f+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};e.loadPixels=function(){e.imageData=ha.$ensureContext().getImageData(0,
0,e.width,e.height)};e.updatePixels=function(){e.imageData&&ha.$ensureContext().putImageData(e.imageData,0,0)};e.hint=function(a){var b=ha.$ensureContext();a===c.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===c.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===c.ENABLE_OPENGL_2X_SMOOTH||a===c.ENABLE_OPENGL_4X_SMOOTH?ra=!0:a===c.DISABLE_OPENGL_2X_SMOOTH&&(ra=!1)};var jd=function(a,b,c,d){if(a instanceof Ga||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";
if(a.width!==e.width||a.height!==e.height)throw"Background image must be the same dimensions as the canvas.";}else a=e.color(a,b,c,d);kb=a};E.prototype.background=function(a,b,c,d){a!==h&&jd(a,b,c,d);kb instanceof Ga||kb.__isPImage?(g.save(),g.setTransform(1,0,0,1,0,0),e.image(kb,0,0)):(g.save(),g.setTransform(1,0,0,1,0,0),e.alpha(kb)!==ia&&g.clearRect(0,0,e.width,e.height),g.fillStyle=e.color.toString(kb),g.fillRect(0,0,e.width,e.height),N=!0);Sa()};B.prototype.background=function(a,b,c,d){0<arguments.length&&
jd(a,b,c,d);var f=e.color.toGLArray(kb);g.clearColor(f[0],f[1],f[2],f[3]);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)};E.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=mc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===gb){var h=a.sourceImg;a.__isDirty&&a.updatePixels();g.drawImage(h,0,0,h.width,h.height,f.x,f.y,f.w,f.h)}else h=a.toImageData(),null!==gb&&(gb(h),a.__isDirty=!0),g.drawImage(Ja(h).canvas,0,0,a.width,a.height,f.x,
f.y,f.w,f.h)}};B.prototype.image=function(a,b,c,d,f){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,f=f||a.height,e.beginShape(e.QUADS),e.texture(a),e.vertex(b,c,0,0,0),e.vertex(b,c+f,0,0,f),e.vertex(b+d,c+f,0,d,f),e.vertex(b+d,c,0,d,0),e.endShape())};e.tint=function(a,b,c,d){a=e.color(a,b,c,d);var f=e.red(a)/xa,g=e.green(a)/Ea,h=e.blue(a)/ya,k=e.alpha(a)/ia;gb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=f,b[c++]*=g,b[c++]*=h,b[c++]*=k};sc=function(a){for(var b=
0;b<a.length;)a[b++]=f,a[b++]=g,a[b++]=h,a[b++]=k}};e.noTint=function(){sc=gb=null};e.copy=function(a,b,d,f,g,k,l,m,n){n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=b,b=a,a=e);e.blend(a,b,d,f,g,k,l,m,n,c.REPLACE)};e.blend=function(a,b,c,d,f,g,k,l,m,n,p){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=c,c=b,b=a,a=e);d=b+d;f=c+f;l=g+l;m=k+m;var r=p||e;p!==h&&n!==h||e.loadPixels();a.loadPixels();a===e&&e.intersect(b,c,d,f,g,k,l,m)?e.blit_resize(e.get(b,c,d-b,
f-c),0,0,d-b-1,f-c-1,r.imageData.data,r.width,r.height,g,k,l,m,n):e.blit_resize(a,b,c,d,f,r.imageData.data,r.width,r.height,g,k,l,m,n);p===h&&e.updatePixels()};var kd=function(a,b){var c=0,d=b.pixels.getLength(),e=new Q(d),f,g,h,k,l,m,n,p,r,t,q,v;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),h=77*(h>>16&255)+
151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t<h&&(k=m,h=t),r<h&&(k=l,h=r),q<h&&(k=n,h=q),v<h&&(k=p),e[c++]=k;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),
h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t>h&&(k=m,h=t),r>h&&(k=l,h=r),q>h&&(k=n,h=q),v>h&&(k=p),e[c++]=k;b.pixels.set(e)};e.filter=function(a,b,d){var f,g,k,l;3===arguments.length?(d.loadPixels(),f=d):(e.loadPixels(),f=e);b===h&&(b=null);if(f.isRemote)throw"Image is loaded remotely. Cannot filter image.";var m=f.pixels.getLength();
switch(a){case c.BLUR:var n=b||1,p=f,r,t,q,v,u,x,y,C,D;k=p.pixels.getLength();l=new A(k);m=new A(k);g=new A(k);k=new A(k);var F=0,G,E,H,n=e.floor(3.5*n),B,n=1>n?1:248>n?n:248;if(e.shared.blurRadius!==n){e.shared.blurRadius=n;e.shared.blurKernelSize=1+(e.shared.blurRadius<<1);e.shared.blurKernel=new A(e.shared.blurKernelSize);var I=e.shared.blurKernel,J=e.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(n-1)*(n-1);for(B=1;B<n;B++)I[n+B]=I[void 0]=J;I[n]=n*n}n=p.height;B=p.width;I=e.shared.blurKernelSize;
C=e.shared.blurRadius;var J=e.shared.blurKernel,K=p.imageData.data;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;x=G-C;if(0>x)u=-x,x=0;else{if(x>=B)break;u=0}for(H=u;H<I&&!(x>=B);H++)y=4*(x+F),u=J[H],v+=u*K[y+3],r+=u*K[y],t+=u*K[y+1],q+=u*K[y+2],p+=u,x++;y=F+G;k[y]=v/p;l[y]=r/p;m[y]=t/p;g[y]=q/p}F+=B}F=0;C=-C;D=C*B;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;if(0>C)u=y=-C,x=G;else{if(C>=n)break;u=0;y=C;x=G+D}for(H=u;H<I&&!(y>=n);H++)u=J[H],v+=u*k[x],r+=u*l[x],t+=u*m[x],q+=u*g[x],p+=u,y++,x+=B;y=
4*(G+F);K[y]=r/p;K[y+1]=t/p;K[y+2]=q/p;K[y+3]=v/p}F+=B;D+=B;C++}break;case c.GRAY:if(f.format===c.ALPHA){for(l=0;l<m;l++)g=255-f.pixels.getPixel(l),f.pixels.setPixel(l,4278190080|g<<16|g<<8|g);f.format=c.RGB}else for(l=0;l<m;l++)g=f.pixels.getPixel(l),k=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)>>8,f.pixels.setPixel(l,g&c.ALPHA_MASK|k<<16|k<<8|k);break;case c.INVERT:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)^16777215);break;case c.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
g=e.floor(b);if(2>g||255<g)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";k=g-1;for(l=0;l<m;l++)F=f.pixels.getPixel(l)>>16&255,n=f.pixels.getPixel(l)>>8&255,B=f.pixels.getPixel(l)&255,F=255*(F*g>>8)/k,n=255*(n*g>>8)/k,B=255*(B*g>>8)/k,f.pixels.setPixel(l,4278190080&f.pixels.getPixel(l)|F<<16|n<<8|B);break;case c.OPAQUE:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)|4278190080);f.format=c.RGB;break;case c.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
g=e.floor(255*b);for(l=0;l<m;l++)k=e.max((f.pixels.getPixel(l)&c.RED_MASK)>>16,e.max((f.pixels.getPixel(l)&c.GREEN_MASK)>>8,f.pixels.getPixel(l)&c.BLUE_MASK)),f.pixels.setPixel(l,f.pixels.getPixel(l)&c.ALPHA_MASK|(k<g?0:16777215));break;case c.ERODE:kd(!0,f);break;case c.DILATE:kd(!1,f)}f.updatePixels()};e.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,
blurKernelSize:0,blurKernel:null};e.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var pa={};pa[c.BLEND]=e.modes.blend;pa[c.ADD]=e.modes.add;pa[c.SUBTRACT]=e.modes.subtract;pa[c.LIGHTEST]=e.modes.lightest;pa[c.DARKEST]=e.modes.darkest;pa[c.REPLACE]=e.modes.replace;pa[c.DIFFERENCE]=e.modes.difference;pa[c.EXCLUSION]=e.modes.exclusion;pa[c.MULTIPLY]=e.modes.multiply;pa[c.SCREEN]=
e.modes.screen;pa[c.OVERLAY]=e.modes.overlay;pa[c.HARD_LIGHT]=e.modes.hard_light;pa[c.SOFT_LIGHT]=e.modes.soft_light;pa[c.DODGE]=e.modes.dodge;pa[c.BURN]=e.modes.burn;e.blit_resize=function(a,b,d,f,g,h,k,l,m,n,p,r,t){0>b&&(b=0);0>d&&(d=0);f>=a.width&&(f=a.width-1);g>=a.height&&(g=a.height-1);f-=b;g-=d;p-=m;r-=n;if(!(0>=p||0>=r||0>=f||0>=g||m>=k||n>=l||b>=a.width||d>=a.height)){f=Math.floor(f/p*c.PRECISIONF);g=Math.floor(g/r*c.PRECISIONF);var q=e.shared;q.srcXOffset=Math.floor(0>m?-m*f:b*c.PRECISIONF);
q.srcYOffset=Math.floor(0>n?-n*g:d*c.PRECISIONF);0>m&&(p+=m,m=0);0>n&&(r+=n,n=0);p=Math.min(p,k-m);r=Math.min(r,l-n);b=n*k+m;var v;q.srcBuffer=a.imageData.data;q.iw=a.width;q.iw1=a.width-1;q.ih1=a.height-1;d=pa[t];var u,x,y,C;m=c.ALPHA_MASK;n=c.RED_MASK;var A=c.GREEN_MASK,B=c.BLUE_MASK,F=c.PREC_MAXVAL,D=c.PRECISIONB,G=c.PREC_RED_SHIFT,H=c.PREC_ALPHA_SHIFT,E=q.srcBuffer,I=Math.min;for(t=0;t<r;t++){q.sX=q.srcXOffset;q.fracV=q.srcYOffset&F;q.ifV=F-q.fracV;q.v1=(q.srcYOffset>>D)*q.iw;q.v2=I((q.srcYOffset>>
D)+1,q.ih1)*q.iw;for(a=0;a<p;a++)l=4*(b+a),v=h[l+3]<<24&m|h[l]<<16&n|h[l+1]<<8&A|h[l+2]&B,q.fracU=q.sX&F,q.ifU=F-q.fracU,q.ul=q.ifU*q.ifV>>D,q.ll=q.ifU*q.fracV>>D,q.ur=q.fracU*q.ifV>>D,q.lr=q.fracU*q.fracV>>D,q.u1=q.sX>>D,q.u2=I(q.u1+1,q.iw1),u=4*(q.v1+q.u1),x=4*(q.v1+q.u2),y=4*(q.v2+q.u1),C=4*(q.v2+q.u2),q.cUL=E[u+3]<<24&m|E[u]<<16&n|E[u+1]<<8&A|E[u+2]&B,q.cUR=E[x+3]<<24&m|E[x]<<16&n|E[x+1]<<8&A|E[x+2]&B,q.cLL=E[y+3]<<24&m|E[y]<<16&n|E[y+1]<<8&A|E[y+2]&B,q.cLR=E[C+3]<<24&m|E[C]<<16&n|E[C+1]<<8&A|
E[C+2]&B,q.r=q.ul*((q.cUL&n)>>16)+q.ll*((q.cLL&n)>>16)+q.ur*((q.cUR&n)>>16)+q.lr*((q.cLR&n)>>16)<<G&n,q.g=q.ul*(q.cUL&A)+q.ll*(q.cLL&A)+q.ur*(q.cUR&A)+q.lr*(q.cLR&A)>>>D&A,q.b=q.ul*(q.cUL&B)+q.ll*(q.cLL&B)+q.ur*(q.cUR&B)+q.lr*(q.cLR&B)>>>D,q.a=q.ul*((q.cUL&m)>>>24)+q.ll*((q.cLL&m)>>>24)+q.ur*((q.cUR&m)>>>24)+q.lr*((q.cLR&m)>>>24)<<H&m,v=d(v,q.a|q.r|q.g|q.b),h[l]=(v&n)>>>16,h[l+1]=(v&A)>>>8,h[l+2]=v&B,h[l+3]=(v&m)>>>24,q.sX+=f;b+=k;q.srcYOffset+=g}}};e.loadFont=function(a,b){if(a===h)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return b===h&&(b=ba.size),PFont.get(a,b);var c=e.loadGlyphs(a);return{name:a,css:"12px sans-serif",glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,f=0;f<d;f++)try{c+=parseFloat(e.glyphLook(e.glyphTable[a],b[f]).horiz_adv_x)}catch(g){M.debug(g)}return c/e.glyphTable[a].units_per_em}}};e.createFont=function(a,b){return e.loadFont(a,b)};e.textFont=function(a,b){b!==h&&
(a.glyph||(a=PFont.get(a.name,b)),Na=b);ba=a;zb=ba.name;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textSize=function(a){ba=PFont.get(zb,a);Na=a;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textAscent=function(){return Xa};e.textDescent=function(){return Ma};e.textLeading=function(a){Aa=a};e.textAlign=function(a,b){nb=a;Wa=b||c.BASELINE};E.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;g.font=ba.css;for(c=
0;c<d;++c)b=Math.max(b,ba.measureTextWidth(a[c]));return b|0};B.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;Ba===h&&(Ba=p.createElement("canvas"));var e=Ba.getContext("2d");e.font=ba.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};e.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;
case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;
case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){M.debug(c)}};E.prototype.text$line=function(a,b,d,f,h){f=f=0;if(ba.glyph){f=
e.glyphTable[zb];g.save();g.translate(b,d+Na);h!==c.RIGHT&&h!==c.CENTER||f.width(a);b=1/f.units_per_em*Na;g.scale(b,b);b=0;for(d=a.length;b<d;b++)try{e.glyphLook(f,a[b]).draw()}catch(k){M.debug(k)}Sa()}else if(a&&"fillText"in g){N&&(g.fillStyle=e.color.toString(La),N=!1);if(h===c.RIGHT||h===c.CENTER)f=ba.measureTextWidth(a),f=h===c.RIGHT?-f:-f/2;g.fillText(a,b+f,d)}};B.prototype.text$line=function(a,b,d,e,f){Ba===h&&(Ba=p.createElement("canvas"));var k=g;g=Ba.getContext("2d");g.font=ba.css;var l=
ba.measureTextWidth(a);Ba.width=l;Ba.height=Na;g=Ba.getContext("2d");g.font=ba.css;g.textBaseline="top";E.prototype.text$line(a,0,0,0,c.LEFT);a=Ba.width/Ba.height;g=k;g.bindTexture(g.TEXTURE_2D,Tc);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Ba);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE);
k=0;f===c.RIGHT?k=-l:f===c.CENTER&&(k=-l/2);f=new I;l=0.5*Na;f.translate(b+k-l/2,d-l,e);f.scale(-a*l,-l,l);f.translate(-1,-1,-1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();g.useProgram(J);Z("aVertex2d",J,"aVertex",3,Cc);Z("aTextureCoord2d",J,"aTextureCoord",2,Dc);Y("uSampler2d",J,"uSampler",[0]);Y("uIsDrawingText2d",J,"uIsDrawingText",!0);U("uModel2d",J,"uModel",!1,f.array());U("uView2d",J,"uView",!1,b.array());T("uColor2d",J,"uColor",ka);g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
Ec);g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0)};e.text=function(){ic!==c.SHAPE&&(3===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};e.textMode=function(a){ic=a};e.loadGlyphs=function(a){var b,
c,d,f,k,m,n,q,r,t,v,u,x=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},y=function(a){var e=x("[A-Za-z][0-9\\- ]+|Z",a);u="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";q=a=m=k=f=d=c=b=0;r="";t=e.length-1;for(var h=0;h<t;h++){var l=e[h][0];a=x("[0-9\\-]+",l);switch(l[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);u+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);
u+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "V":c=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "T":k=parseFloat(a[0][0]);m=parseFloat(a[1][0]);"Q"===r||"T"===r?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(f-c,2)),q=Math.PI+Math.atan2(d-b,f-c),d=b+Math.sin(q)*a,f=c+Math.cos(q)*a):(d=b,f=c);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Q":d=parseFloat(a[0][0]);f=parseFloat(a[1][0]);
k=parseFloat(a[2][0]);m=parseFloat(a[3][0]);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Z":u+="curContext.closePath();"}r=l[0]}u+="afterPathDraw();";u+="curContext.translate("+v+",0);";u+="}}";return(new Function("beforePathDraw","afterPathDraw",u))(function(){g.save();return ha.$ensureContext()},function(){wa();za();Sa()})},A=function(b){var c=b.getElementsByTagName("font");e.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];
e.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));e.glyphTable[a].ascent=parseFloat(c.getAttribute("ascent"));e.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var f=b[d].getAttribute("unicode"),g=b[d].getAttribute("glyph-name");v=b[d].getAttribute("horiz-adv-x");null===v&&(v=e.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==h&&(u=y(n),e.glyphTable[a][g]={name:g,unicode:f,horiz_adv_x:v,draw:u.draw})}};
e.glyphTable[a]={};(function(){var b;try{b=p.implementation.createDocument("","",null)}catch(c){M.debug(c.message);return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){M.debug(d);try{var e=new l.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){M.debug(d)}}})(a);return e.glyphTable[a]};e.param=function(a){var b="data-processing-"+a;if(S.hasAttribute(b))return S.getAttribute(b);for(var b=0,c=S.childNodes.length;b<c;++b){var d=S.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return da.params.hasOwnProperty(a)?da.params[a]:null};F.prototype.translate=H("translate");F.prototype.transform=H("transform");F.prototype.scale=H("scale");F.prototype.pushMatrix=H("pushMatrix");F.prototype.popMatrix=H("popMatrix");F.prototype.resetMatrix=H("resetMatrix");F.prototype.applyMatrix=H("applyMatrix");F.prototype.rotate=H("rotate");F.prototype.rotateZ=H("rotateZ");F.prototype.shearX=
H("shearX");F.prototype.shearY=H("shearY");F.prototype.redraw=H("redraw");F.prototype.toImageData=H("toImageData");F.prototype.ambientLight=H("ambientLight");F.prototype.directionalLight=H("directionalLight");F.prototype.lightFalloff=H("lightFalloff");F.prototype.lightSpecular=H("lightSpecular");F.prototype.pointLight=H("pointLight");F.prototype.noLights=H("noLights");F.prototype.spotLight=H("spotLight");F.prototype.beginCamera=H("beginCamera");F.prototype.endCamera=H("endCamera");F.prototype.frustum=
H("frustum");F.prototype.box=H("box");F.prototype.sphere=H("sphere");F.prototype.ambient=H("ambient");F.prototype.emissive=H("emissive");F.prototype.shininess=H("shininess");F.prototype.specular=H("specular");F.prototype.fill=H("fill");F.prototype.stroke=H("stroke");F.prototype.strokeWeight=H("strokeWeight");F.prototype.smooth=H("smooth");F.prototype.noSmooth=H("noSmooth");F.prototype.point=H("point");F.prototype.vertex=H("vertex");F.prototype.endShape=H("endShape");F.prototype.bezierVertex=H("bezierVertex");
F.prototype.curveVertex=H("curveVertex");F.prototype.curve=H("curve");F.prototype.line=H("line");F.prototype.bezier=H("bezier");F.prototype.rect=H("rect");F.prototype.ellipse=H("ellipse");F.prototype.background=H("background");F.prototype.image=H("image");F.prototype.textWidth=H("textWidth");F.prototype.text$line=H("text$line");F.prototype.$ensureContext=H("$ensureContext");F.prototype.$newPMatrix=H("$newPMatrix");F.prototype.size=function(a,b,d){Ka(d===c.WEBGL?"3D":"2D");e.size(a,b,d)};F.prototype.$init=
r;E.prototype.$init=function(){e.size(e.width,e.height);g.lineCap="round";e.noSmooth();e.disableContextMenu()};B.prototype.$init=function(){e.use3DContext=!0;e.disableContextMenu()};W.prototype.$ensureContext=function(){return g};S.getAttribute("tabindex")||S.setAttribute("tabindex",0);if(Qb)da=new M.Sketch,Ka(),e.size=function(a,b,d){d&&d===c.WEBGL?Ka("3D"):Ka("2D");e.size(a,b,d)};else{da=k instanceof M.Sketch?k:"function"===typeof k?new M.Sketch(k):k?M.compile(k):new M.Sketch(function(){});e.externals.sketch=
da;Ka();S.onfocus=function(){e.focused=!0};S.onblur=function(){e.focused=!1;da.options.globalKeyEvents||(e.__keyPressed=!1,hb=[],ob=null)};da.options.pauseOnBlur&&(Ia(l,"focus",function(){Da&&e.loop()}),Ia(l,"blur",function(){Da&&eb&&(e.noLoop(),Da=!0);e.__keyPressed=!1;hb=[];ob=null}));var Jc=da.options.globalKeyEvents?l:S;Ia(Jc,"keydown",rc);Ia(Jc,"keypress",Pb);Ia(Jc,"keyup",bc);for(var Yb in M.lib)M.lib.hasOwnProperty(Yb)&&(M.lib[Yb].hasOwnProperty("attach")?M.lib[Yb].attach(e):M.lib[Yb]instanceof
Function&&M.lib[Yb].call(this));var ld=function(a){if(da.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){ld(a)},100);else{if(l.opera){var b,c,d=da.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&p.body.removeChild(c),delete d[b])}da.attach(a,n);da.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),da.onSetup());fb();a.draw&&(Da?a.loop():a.redraw())}};this.externals.canvas.id!==h&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+
q.length);Zb[this.externals.canvas.id]=q.length;q.push(this);ld(e)}};M.debug=function(){return"console"in l?function(a){l.console.log("Processing.js: "+a)}:r}();M.prototype=n;M.instances=q;M.getInstanceById=function(a){return q[Zb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,f,h;d--;)f=c[d],h=f.replace("()",""),a[h]=b(f)})(n);return M}},{}],27:[function(D,x,Q){var k={virtEquals:D("./Helpers/virtEquals"),virtHashCode:D("./Helpers/virtHashCode"),ObjectIterator:D("./Helpers/ObjectIterator"),PConstants:D("./Helpers/PConstants"),ArrayList:D("./Objects/ArrayList"),HashMap:D("./Objects/HashMap"),PVector:D("./Objects/PVector"),PFont:D("./Objects/PFont"),Char:D("./Objects/Char"),XMLAttribute:D("./Objects/XMLAttribute"),XMLElement:D("./Objects/XMLElement"),PMatrix2D:D("./Objects/PMatrix2D"),
PMatrix3D:D("./Objects/PMatrix3D"),PShape:D("./Objects/PShape"),colors:D("./Objects/webcolors"),PShapeSVG:D("./Objects/PShapeSVG"),CommonFunctions:D("./P5Functions/commonFunctions"),defaultScope:D("./Helpers/defaultScope"),Processing:D("./Processing"),setupParser:D("./Parser/Parser"),finalize:D("./Helpers/finalizeProcessing")};k.extend={withMath:D("./P5Functions/Math.js"),withProxyFunctions:D("./P5Functions/JavaProxyFunctions")(k.virtHashCode,k.virtEquals),withTouch:D("./P5Functions/touchmouse"),
withCommonFunctions:k.CommonFunctions.withCommonFunctions};x.exports=function(h,m){var n=function(){},a=k.virtEquals,b=k.virtHashCode,d=k.PConstants,f=k.CommonFunctions,l=k.ObjectIterator,p=k.Char,r=k.XMLAttribute(),c=k.ArrayList({virtHashCode:b,virtEquals:a}),a=k.HashMap({virtHashCode:b,virtEquals:a}),b=k.PVector({PConstants:d}),x=k.PFont({Browser:h,noop:n}),r=k.XMLElement({Browser:h,XMLAttribute:r}),Q=k.PMatrix2D({p:f}),G=k.PMatrix3D({p:f}),Q=k.PShape({PConstants:d,PMatrix2D:Q,PMatrix3D:G}),f=k.PShapeSVG({CommonFunctions:f,
PConstants:d,PShape:Q,XMLElement:r,colors:k.colors}),d=k.defaultScope({ArrayList:c,HashMap:a,PVector:b,PFont:x,PShapeSVG:f,ObjectIterator:l,PConstants:d,Char:p,XMLElement:r,XML:r}),l=k.Processing({defaultScope:d,Browser:h,extend:k.extend,noop:n}),l=k.setupParser(l,{Browser:h,aFunctions:m,defaultScope:d});return l=k.finalize(l,{version:D("../package.json").version,isDomPresent:h.isDomPresent,window:h.window,document:h.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,
"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,
"./Parser/Parser":25,"./Processing":26}]},{},[1]);

;(function(){
var g, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return Array.prototype.join.call(arguments, "");
}
function fa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
Math.random();
function ga(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = ha.prototype;
g.eb = "";
g.set = function(a) {
  this.eb = "" + a;
};
g.append = function(a, b, c) {
  this.eb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.eb += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.eb = "";
};
g.toString = function() {
  return this.eb;
};
var ia = Array.prototype, ja = ia.indexOf ? function(a, b, c) {
  return ia.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
function ka(a, b) {
  a.sort(b || ma);
}
function na(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || ma;
  ka(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function ma(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var oa;
if ("undefined" === typeof pa) {
  var pa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var qa = null;
if ("undefined" === typeof ra) {
  var ra = null
}
function sa() {
  return new ta(null, 5, [ua, !0, va, !0, wa, !1, xa, !1, ya, null], null);
}
function p(a) {
  return null != a && !1 !== a;
}
function za(a) {
  return null == a;
}
function Aa(a) {
  return a instanceof Array;
}
function Ba(a) {
  return p(a) ? !1 : !0;
}
function q(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Ca(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = Ca(b), c = p(p(c) ? c.Uc : c) ? c.Tc : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Tc;
  return p(b) ? b : "" + v(a);
}
var Ea = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function Fa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ga = {}, Ha = {}, Ia = function Ia(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = Ia[m(null == b ? null : b)];
  if (!c && (c = Ia._, !c)) {
    throw u("ICounted.-count", b);
  }
  return c.call(null, b);
}, La = function La(b) {
  if (b ? b.Y : b) {
    return b.Y(b);
  }
  var c;
  c = La[m(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw u("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.H : b) {
    return b.H(b, c);
  }
  var d;
  d = Ma[m(null == b ? null : b)];
  if (!d && (d = Ma._, !d)) {
    throw u("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, x = function x() {
  switch(arguments.length) {
    case 2:
      return x.a(arguments[0], arguments[1]);
    case 3:
      return x.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
x.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = x[m(null == a ? null : a)];
  if (!c && (c = x._, !c)) {
    throw u("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
x.c = function(a, b, c) {
  if (a ? a.fa : a) {
    return a.fa(a, b, c);
  }
  var d;
  d = x[m(null == a ? null : a)];
  if (!d && (d = x._, !d)) {
    throw u("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
x.o = 3;
var Pa = {}, Qa = function Qa(b) {
  if (b ? b.N : b) {
    return b.N(b);
  }
  var c;
  c = Qa[m(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw u("ISeq.-first", b);
  }
  return c.call(null, b);
}, Sa = function Sa(b) {
  if (b ? b.ba : b) {
    return b.ba(b);
  }
  var c;
  c = Sa[m(null == b ? null : b)];
  if (!c && (c = Sa._, !c)) {
    throw u("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ta = {}, Va = {}, Xa = function Xa() {
  switch(arguments.length) {
    case 2:
      return Xa.a(arguments[0], arguments[1]);
    case 3:
      return Xa.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Xa.a = function(a, b) {
  if (a ? a.I : a) {
    return a.I(a, b);
  }
  var c;
  c = Xa[m(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw u("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Xa.c = function(a, b, c) {
  if (a ? a.B : a) {
    return a.B(a, b, c);
  }
  var d;
  d = Xa[m(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw u("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Xa.o = 3;
var Ya = function Ya(b, c) {
  if (b ? b.xb : b) {
    return b.xb(b, c);
  }
  var d;
  d = Ya[m(null == b ? null : b)];
  if (!d && (d = Ya._, !d)) {
    throw u("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Za = function Za(b, c, d) {
  if (b ? b.ma : b) {
    return b.ma(b, c, d);
  }
  var e;
  e = Za[m(null == b ? null : b)];
  if (!e && (e = Za._, !e)) {
    throw u("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, $a = {}, ab = function ab(b, c) {
  if (b ? b.ta : b) {
    return b.ta(b, c);
  }
  var d;
  d = ab[m(null == b ? null : b)];
  if (!d && (d = ab._, !d)) {
    throw u("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, bb = {}, cb = function cb(b) {
  if (b ? b.kc : b) {
    return b.kc();
  }
  var c;
  c = cb[m(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw u("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, db = function db(b) {
  if (b ? b.lc : b) {
    return b.lc();
  }
  var c;
  c = db[m(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw u("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, eb = {}, fb = function fb(b, c) {
  if (b ? b.Pc : b) {
    return b.Pc(0, c);
  }
  var d;
  d = fb[m(null == b ? null : b)];
  if (!d && (d = fb._, !d)) {
    throw u("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, gb = {}, jb = function jb(b, c, d) {
  if (b ? b.Cb : b) {
    return b.Cb(b, c, d);
  }
  var e;
  e = jb[m(null == b ? null : b)];
  if (!e && (e = jb._, !e)) {
    throw u("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, kb = function kb(b) {
  if (b ? b.jc : b) {
    return b.jc(b);
  }
  var c;
  c = kb[m(null == b ? null : b)];
  if (!c && (c = kb._, !c)) {
    throw u("IDeref.-deref", b);
  }
  return c.call(null, b);
}, lb = {}, mb = function mb(b) {
  if (b ? b.D : b) {
    return b.D(b);
  }
  var c;
  c = mb[m(null == b ? null : b)];
  if (!c && (c = mb._, !c)) {
    throw u("IMeta.-meta", b);
  }
  return c.call(null, b);
}, nb = {}, ob = function ob(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = ob[m(null == b ? null : b)];
  if (!d && (d = ob._, !d)) {
    throw u("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, rb = {}, sb = function sb() {
  switch(arguments.length) {
    case 2:
      return sb.a(arguments[0], arguments[1]);
    case 3:
      return sb.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
sb.a = function(a, b) {
  if (a ? a.Z : a) {
    return a.Z(a, b);
  }
  var c;
  c = sb[m(null == a ? null : a)];
  if (!c && (c = sb._, !c)) {
    throw u("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
sb.c = function(a, b, c) {
  if (a ? a.$ : a) {
    return a.$(a, b, c);
  }
  var d;
  d = sb[m(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw u("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
sb.o = 3;
var tb = function tb(b, c) {
  if (b ? b.r : b) {
    return b.r(b, c);
  }
  var d;
  d = tb[m(null == b ? null : b)];
  if (!d && (d = tb._, !d)) {
    throw u("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, ub = function ub(b) {
  if (b ? b.A : b) {
    return b.A(b);
  }
  var c;
  c = ub[m(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw u("IHash.-hash", b);
  }
  return c.call(null, b);
}, yb = {}, zb = function zb(b) {
  if (b ? b.J : b) {
    return b.J(b);
  }
  var c;
  c = zb[m(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw u("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, Ab = {}, Cb = {}, Db = function Db(b) {
  if (b ? b.pb : b) {
    return b.pb(b);
  }
  var c;
  c = Db[m(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw u("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b, c) {
  if (b ? b.Sc : b) {
    return b.Sc(0, c);
  }
  var d;
  d = Eb[m(null == b ? null : b)];
  if (!d && (d = Eb._, !d)) {
    throw u("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, Fb = {}, Gb = function Gb(b, c, d) {
  if (b ? b.F : b) {
    return b.F(b, c, d);
  }
  var e;
  e = Gb[m(null == b ? null : b)];
  if (!e && (e = Gb._, !e)) {
    throw u("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, Hb = function Hb(b, c, d) {
  if (b ? b.Rc : b) {
    return b.Rc(0, c, d);
  }
  var e;
  e = Hb[m(null == b ? null : b)];
  if (!e && (e = Hb._, !e)) {
    throw u("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, Ib = function Ib(b) {
  if (b ? b.ob : b) {
    return b.ob(b);
  }
  var c;
  c = Ib[m(null == b ? null : b)];
  if (!c && (c = Ib._, !c)) {
    throw u("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Jb = function Jb(b, c) {
  if (b ? b.gb : b) {
    return b.gb(b, c);
  }
  var d;
  d = Jb[m(null == b ? null : b)];
  if (!d && (d = Jb._, !d)) {
    throw u("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Kb = function Kb(b) {
  if (b ? b.hb : b) {
    return b.hb(b);
  }
  var c;
  c = Kb[m(null == b ? null : b)];
  if (!c && (c = Kb._, !c)) {
    throw u("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Lb = function Lb(b, c, d) {
  if (b ? b.Bb : b) {
    return b.Bb(b, c, d);
  }
  var e;
  e = Lb[m(null == b ? null : b)];
  if (!e && (e = Lb._, !e)) {
    throw u("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Mb = function Mb(b, c, d) {
  if (b ? b.Qc : b) {
    return b.Qc(0, c, d);
  }
  var e;
  e = Mb[m(null == b ? null : b)];
  if (!e && (e = Mb._, !e)) {
    throw u("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Nb = function Nb(b) {
  if (b ? b.Mc : b) {
    return b.Mc();
  }
  var c;
  c = Nb[m(null == b ? null : b)];
  if (!c && (c = Nb._, !c)) {
    throw u("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Ob = function Ob(b) {
  if (b ? b.hc : b) {
    return b.hc(b);
  }
  var c;
  c = Ob[m(null == b ? null : b)];
  if (!c && (c = Ob._, !c)) {
    throw u("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Qb = function Qb(b) {
  if (b ? b.ic : b) {
    return b.ic(b);
  }
  var c;
  c = Qb[m(null == b ? null : b)];
  if (!c && (c = Qb._, !c)) {
    throw u("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Rb = function Rb(b) {
  if (b ? b.gc : b) {
    return b.gc(b);
  }
  var c;
  c = Rb[m(null == b ? null : b)];
  if (!c && (c = Rb._, !c)) {
    throw u("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Sb = function Sb(b, c) {
  if (b ? b.ud : b) {
    return b.ud(b, c);
  }
  var d;
  d = Sb[m(null == b ? null : b)];
  if (!d && (d = Sb._, !d)) {
    throw u("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Tb = function Tb() {
  switch(arguments.length) {
    case 2:
      return Tb.a(arguments[0], arguments[1]);
    case 3:
      return Tb.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Tb.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Tb.C(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Tb.a = function(a, b) {
  if (a ? a.wd : a) {
    return a.wd(a, b);
  }
  var c;
  c = Tb[m(null == a ? null : a)];
  if (!c && (c = Tb._, !c)) {
    throw u("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Tb.c = function(a, b, c) {
  if (a ? a.xd : a) {
    return a.xd(a, b, c);
  }
  var d;
  d = Tb[m(null == a ? null : a)];
  if (!d && (d = Tb._, !d)) {
    throw u("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Tb.q = function(a, b, c, d) {
  if (a ? a.yd : a) {
    return a.yd(a, b, c, d);
  }
  var e;
  e = Tb[m(null == a ? null : a)];
  if (!e && (e = Tb._, !e)) {
    throw u("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Tb.C = function(a, b, c, d, e) {
  if (a ? a.zd : a) {
    return a.zd(a, b, c, d, e);
  }
  var f;
  f = Tb[m(null == a ? null : a)];
  if (!f && (f = Tb._, !f)) {
    throw u("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Tb.o = 5;
var Ub = {}, Vb = function Vb(b) {
  if (b ? b.zb : b) {
    return b.zb(b);
  }
  var c;
  c = Vb[m(null == b ? null : b)];
  if (!c && (c = Vb._, !c)) {
    throw u("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Wb(a) {
  this.Dd = a;
  this.g = 1073741824;
  this.u = 0;
}
Wb.prototype.Sc = function(a, b) {
  return this.Dd.append(b);
};
function Xb(a) {
  var b = new ha;
  a.F(null, new Wb(b), sa());
  return "" + v(b);
}
var Yb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Zb(a) {
  a = Yb(a | 0, -862048943);
  return Yb(a << 15 | a >>> -15, 461845907);
}
function $b(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Yb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function ac(a, b) {
  var c = (a | 0) ^ b, c = Yb(c ^ c >>> 16, -2048144789), c = Yb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function bc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = $b(c, Zb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Zb(a.charCodeAt(a.length - 1)) : b;
  return ac(b, Yb(2, a.length));
}
var cc = {}, dc = 0;
function ec(a) {
  255 < dc && (cc = {}, dc = 0);
  var b = cc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Yb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    cc[a] = b;
    dc += 1;
  }
  return a = b;
}
function fc(a) {
  a && (a.g & 4194304 || a.Kd) ? a = a.A(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = ec(a), 0 !== a && (a = Zb(a), a = $b(0, a), a = ac(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : ub(a);
  return a;
}
function gc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function hc(a, b) {
  if (a.xa === b.xa) {
    return 0;
  }
  var c = Ba(a.ia);
  if (p(c ? b.ia : c)) {
    return-1;
  }
  if (p(a.ia)) {
    if (Ba(b.ia)) {
      return 1;
    }
    c = ma(a.ia, b.ia);
    return 0 === c ? ma(a.name, b.name) : c;
  }
  return ma(a.name, b.name);
}
function y(a, b, c, d, e) {
  this.ia = a;
  this.name = b;
  this.xa = c;
  this.la = d;
  this.k = e;
  this.g = 2154168321;
  this.u = 4096;
}
g = y.prototype;
g.toString = function() {
  return this.xa;
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.r = function(a, b) {
  return b instanceof y ? this.xa === b.xa : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Xa.c(c, this, null);
      case 3:
        return Xa.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Xa.c(c, this, null);
  };
  a.c = function(a, c, d) {
    return Xa.c(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return Xa.c(a, this, null);
};
g.a = function(a, b) {
  return Xa.c(a, this, b);
};
g.D = function() {
  return this.k;
};
g.G = function(a, b) {
  return new y(this.ia, this.name, this.xa, this.la, b);
};
g.A = function() {
  var a = this.la;
  return null != a ? a : this.la = a = gc(bc(this.name), ec(this.ia));
};
g.F = function(a, b) {
  return Eb(b, this.xa);
};
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.vd)) {
    return a.J(null);
  }
  if (Aa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new B(a, 0);
  }
  if (q(yb, a)) {
    return zb(a);
  }
  throw Error([v(a), v(" is not ISeqable")].join(""));
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Ab)) {
    return a.N(null);
  }
  a = A(a);
  return null == a ? null : Qa(a);
}
function ic(a) {
  return null != a ? a && (a.g & 64 || a.Ab) ? a.ba(null) : (a = A(a)) ? Sa(a) : jc : jc;
}
function E(a) {
  return null == a ? null : a && (a.g & 128 || a.Nb) ? a.V(null) : A(ic(a));
}
var F = function F() {
  switch(arguments.length) {
    case 1:
      return F.b(arguments[0]);
    case 2:
      return F.a(arguments[0], arguments[1]);
    default:
      return F.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
F.b = function() {
  return!0;
};
F.a = function(a, b) {
  return null == a ? null == b : a === b || tb(a, b);
};
F.h = function(a, b, c) {
  for (;;) {
    if (F.a(a, b)) {
      if (E(c)) {
        a = b, b = C(c), c = E(c);
      } else {
        return F.a(b, C(c));
      }
    } else {
      return!1;
    }
  }
};
F.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return F.h(b, a, c);
};
F.o = 2;
function mc(a) {
  this.v = a;
}
mc.prototype.next = function() {
  if (null != this.v) {
    var a = C(this.v);
    this.v = E(this.v);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function nc(a) {
  return new mc(A(a));
}
function oc(a, b) {
  var c = Zb(a), c = $b(0, c);
  return ac(c, b);
}
function pc(a) {
  var b = 0, c = 1;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = Yb(31, c) + fc(C(a)) | 0, a = E(a);
    } else {
      return oc(c, b);
    }
  }
}
var qc = oc(1, 0);
function rc(a) {
  var b = 0, c = 0;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = c + fc(C(a)) | 0, a = E(a);
    } else {
      return oc(c, b);
    }
  }
}
var sc = oc(0, 0);
Ha["null"] = !0;
Ia["null"] = function() {
  return 0;
};
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.yb = !0;
Date.prototype.fb = function(a, b) {
  return ma(this.valueOf(), b.valueOf());
};
tb.number = function(a, b) {
  return a === b;
};
Ga["function"] = !0;
lb["function"] = !0;
mb["function"] = function() {
  return null;
};
ub._ = function(a) {
  return a[ca] || (a[ca] = ++da);
};
function tc(a) {
  this.qa = a;
  this.g = 32768;
  this.u = 0;
}
tc.prototype.jc = function() {
  return this.qa;
};
function uc(a) {
  return a instanceof tc;
}
function G(a) {
  return kb(a);
}
function vc(a, b) {
  var c = Ia(a);
  if (0 === c) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = x.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = x.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (uc(d)) {
        return kb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function wc(a, b, c) {
  var d = Ia(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = x.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (uc(e)) {
        return kb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function xc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (uc(d)) {
        return kb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function yc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (uc(e)) {
        return kb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function zc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (uc(c)) {
        return kb(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function Ac(a) {
  return a ? a.g & 2 || a.md ? !0 : a.g ? !1 : q(Ha, a) : q(Ha, a);
}
function Bc(a) {
  return a ? a.g & 16 || a.Nc ? !0 : a.g ? !1 : q(Na, a) : q(Na, a);
}
function Cc(a, b) {
  this.e = a;
  this.j = b;
}
Cc.prototype.ua = function() {
  return this.j < this.e.length;
};
Cc.prototype.next = function() {
  var a = this.e[this.j];
  this.j += 1;
  return a;
};
function B(a, b) {
  this.e = a;
  this.j = b;
  this.g = 166199550;
  this.u = 8192;
}
g = B.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.w = function(a, b) {
  var c = b + this.j;
  return c < this.e.length ? this.e[c] : null;
};
g.fa = function(a, b, c) {
  a = b + this.j;
  return a < this.e.length ? this.e[a] : c;
};
g.Mb = !0;
g.zb = function() {
  return new Cc(this.e, this.j);
};
g.V = function() {
  return this.j + 1 < this.e.length ? new B(this.e, this.j + 1) : null;
};
g.K = function() {
  return this.e.length - this.j;
};
g.pb = function() {
  var a = Ia(this);
  return 0 < a ? new Dc(this, a - 1, null) : null;
};
g.A = function() {
  return pc(this);
};
g.r = function(a, b) {
  return Ec.a ? Ec.a(this, b) : Ec.call(null, this, b);
};
g.Y = function() {
  return jc;
};
g.Z = function(a, b) {
  return zc(this.e, b, this.e[this.j], this.j + 1);
};
g.$ = function(a, b, c) {
  return zc(this.e, b, c, this.j);
};
g.N = function() {
  return this.e[this.j];
};
g.ba = function() {
  return this.j + 1 < this.e.length ? new B(this.e, this.j + 1) : jc;
};
g.J = function() {
  return this;
};
g.H = function(a, b) {
  return I.a ? I.a(b, this) : I.call(null, b, this);
};
B.prototype[Ea] = function() {
  return nc(this);
};
function Fc(a, b) {
  return b < a.length ? new B(a, b) : null;
}
function Gc() {
  switch(arguments.length) {
    case 1:
      return Fc(arguments[0], 0);
    case 2:
      return Fc(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Dc(a, b, c) {
  this.Kb = a;
  this.j = b;
  this.n = c;
  this.g = 32374990;
  this.u = 8192;
}
g = Dc.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  return 0 < this.j ? new Dc(this.Kb, this.j - 1, null) : null;
};
g.K = function() {
  return this.j + 1;
};
g.A = function() {
  return pc(this);
};
g.r = function(a, b) {
  return Ec.a ? Ec.a(this, b) : Ec.call(null, this, b);
};
g.Y = function() {
  var a = this.n;
  return Hc.a ? Hc.a(jc, a) : Hc.call(null, jc, a);
};
g.Z = function(a, b) {
  return Jc ? Jc(b, this) : Kc.call(null, b, this);
};
g.$ = function(a, b, c) {
  return Lc ? Lc(b, c, this) : Kc.call(null, b, c, this);
};
g.N = function() {
  return x.a(this.Kb, this.j);
};
g.ba = function() {
  return 0 < this.j ? new Dc(this.Kb, this.j - 1, null) : jc;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Dc(this.Kb, this.j, b);
};
g.H = function(a, b) {
  return I.a ? I.a(b, this) : I.call(null, b, this);
};
Dc.prototype[Ea] = function() {
  return nc(this);
};
tb._ = function(a, b) {
  return a === b;
};
var Mc = function Mc() {
  switch(arguments.length) {
    case 0:
      return Mc.p();
    case 1:
      return Mc.b(arguments[0]);
    case 2:
      return Mc.a(arguments[0], arguments[1]);
    default:
      return Mc.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Mc.p = function() {
  return Nc;
};
Mc.b = function(a) {
  return a;
};
Mc.a = function(a, b) {
  return null != a ? Ma(a, b) : Ma(jc, b);
};
Mc.h = function(a, b, c) {
  for (;;) {
    if (p(c)) {
      a = Mc.a(a, b), b = C(c), c = E(c);
    } else {
      return Mc.a(a, b);
    }
  }
};
Mc.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return Mc.h(b, a, c);
};
Mc.o = 2;
function J(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.md)) {
      a = a.K(null);
    } else {
      if (Aa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (q(Ha, a)) {
            a = Ia(a);
          } else {
            a: {
              a = A(a);
              for (var b = 0;;) {
                if (Ac(a)) {
                  a = b + Ia(a);
                  break a;
                }
                a = E(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Oc(a, b, c) {
  for (;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return A(a) ? C(a) : c;
    }
    if (Bc(a)) {
      return x.c(a, b, c);
    }
    if (A(a)) {
      a = E(a), --b;
    } else {
      return c;
    }
  }
}
function Pc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.g & 16 || a.Nc)) {
    return a.w(null, b);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (q(Na, a)) {
    return x.a(a, b);
  }
  if (a ? a.g & 64 || a.Ab || (a.g ? 0 : q(Pa, a)) : q(Pa, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (A(c)) {
            c = C(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Bc(c)) {
          c = x.a(c, d);
          break a;
        }
        if (A(c)) {
          c = E(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([v("nth not supported on this type "), v(Da(Ca(a)))].join(""));
}
function K(a, b, c) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return c;
  }
  if (a && (a.g & 16 || a.Nc)) {
    return a.fa(null, b, c);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : c;
  }
  if (q(Na, a)) {
    return x.a(a, b);
  }
  if (a ? a.g & 64 || a.Ab || (a.g ? 0 : q(Pa, a)) : q(Pa, a)) {
    return Oc(a, b, c);
  }
  throw Error([v("nth not supported on this type "), v(Da(Ca(a)))].join(""));
}
var L = function L() {
  switch(arguments.length) {
    case 2:
      return L.a(arguments[0], arguments[1]);
    case 3:
      return L.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
L.a = function(a, b) {
  return null == a ? null : a && (a.g & 256 || a.Oc) ? a.I(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : q(Va, a) ? Xa.a(a, b) : null;
};
L.c = function(a, b, c) {
  return null != a ? a && (a.g & 256 || a.Oc) ? a.B(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : q(Va, a) ? Xa.c(a, b, c) : c : c;
};
L.o = 3;
var Qc = function Qc() {
  switch(arguments.length) {
    case 3:
      return Qc.c(arguments[0], arguments[1], arguments[2]);
    default:
      return Qc.h(arguments[0], arguments[1], arguments[2], new B(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Qc.c = function(a, b, c) {
  return null != a ? Za(a, b, c) : Rc([b], [c]);
};
Qc.h = function(a, b, c, d) {
  for (;;) {
    if (a = Qc.c(a, b, c), p(d)) {
      b = C(d), c = C(E(d)), d = E(E(d));
    } else {
      return a;
    }
  }
};
Qc.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), d = E(d);
  return Qc.h(b, a, c, d);
};
Qc.o = 3;
var Sc = function Sc() {
  switch(arguments.length) {
    case 1:
      return Sc.b(arguments[0]);
    case 2:
      return Sc.a(arguments[0], arguments[1]);
    default:
      return Sc.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Sc.b = function(a) {
  return a;
};
Sc.a = function(a, b) {
  return null == a ? null : ab(a, b);
};
Sc.h = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Sc.a(a, b);
    if (p(c)) {
      b = C(c), c = E(c);
    } else {
      return a;
    }
  }
};
Sc.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return Sc.h(b, a, c);
};
Sc.o = 2;
function Tc(a) {
  var b = "function" == m(a);
  return p(b) ? b : a ? p(p(null) ? null : a.ld) ? !0 : a.mc ? !1 : q(Ga, a) : q(Ga, a);
}
function Uc(a, b) {
  this.f = a;
  this.n = b;
  this.g = 393217;
  this.u = 0;
}
g = Uc.prototype;
g.D = function() {
  return this.n;
};
g.G = function(a, b) {
  return new Uc(this.f, b);
};
g.ld = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N, Oa) {
    a = this.f;
    return O.Lb ? O.Lb(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N, Oa) : O.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N, Oa);
  }
  function b(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N) {
    a = this;
    return a.f.La ? a.f.La(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la, N);
  }
  function c(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la) {
    a = this;
    return a.f.Ka ? a.f.Ka(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V, la);
  }
  function d(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V) {
    a = this;
    return a.f.Ja ? a.f.Ja(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M, V);
  }
  function e(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M) {
    a = this;
    return a.f.Ia ? a.f.Ia(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R, M);
  }
  function f(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R) {
    a = this;
    return a.f.Ha ? a.f.Ha(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, R);
  }
  function h(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H) {
    a = this;
    return a.f.Ga ? a.f.Ga(b, c, d, e, f, h, k, l, n, r, t, w, z, D, H) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H);
  }
  function k(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D) {
    a = this;
    return a.f.Fa ? a.f.Fa(b, c, d, e, f, h, k, l, n, r, t, w, z, D) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z, D);
  }
  function l(a, b, c, d, e, f, h, k, l, n, r, t, w, z) {
    a = this;
    return a.f.Ea ? a.f.Ea(b, c, d, e, f, h, k, l, n, r, t, w, z) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w, z);
  }
  function n(a, b, c, d, e, f, h, k, l, n, r, t, w) {
    a = this;
    return a.f.Da ? a.f.Da(b, c, d, e, f, h, k, l, n, r, t, w) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t, w);
  }
  function r(a, b, c, d, e, f, h, k, l, n, r, t) {
    a = this;
    return a.f.Ca ? a.f.Ca(b, c, d, e, f, h, k, l, n, r, t) : a.f.call(null, b, c, d, e, f, h, k, l, n, r, t);
  }
  function t(a, b, c, d, e, f, h, k, l, n, r) {
    a = this;
    return a.f.Ba ? a.f.Ba(b, c, d, e, f, h, k, l, n, r) : a.f.call(null, b, c, d, e, f, h, k, l, n, r);
  }
  function w(a, b, c, d, e, f, h, k, l, n) {
    a = this;
    return a.f.Oa ? a.f.Oa(b, c, d, e, f, h, k, l, n) : a.f.call(null, b, c, d, e, f, h, k, l, n);
  }
  function z(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.f.Na ? a.f.Na(b, c, d, e, f, h, k, l) : a.f.call(null, b, c, d, e, f, h, k, l);
  }
  function D(a, b, c, d, e, f, h, k) {
    a = this;
    return a.f.Ma ? a.f.Ma(b, c, d, e, f, h, k) : a.f.call(null, b, c, d, e, f, h, k);
  }
  function H(a, b, c, d, e, f, h) {
    a = this;
    return a.f.ea ? a.f.ea(b, c, d, e, f, h) : a.f.call(null, b, c, d, e, f, h);
  }
  function M(a, b, c, d, e, f) {
    a = this;
    return a.f.C ? a.f.C(b, c, d, e, f) : a.f.call(null, b, c, d, e, f);
  }
  function R(a, b, c, d, e) {
    a = this;
    return a.f.q ? a.f.q(b, c, d, e) : a.f.call(null, b, c, d, e);
  }
  function V(a, b, c, d) {
    a = this;
    return a.f.c ? a.f.c(b, c, d) : a.f.call(null, b, c, d);
  }
  function la(a, b, c) {
    a = this;
    return a.f.a ? a.f.a(b, c) : a.f.call(null, b, c);
  }
  function Oa(a, b) {
    a = this;
    return a.f.b ? a.f.b(b) : a.f.call(null, b);
  }
  function ib(a) {
    a = this;
    return a.f.p ? a.f.p() : a.f.call(null);
  }
  var N = null, N = function(N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed, ae, Ie, Tf, Je) {
    switch(arguments.length) {
      case 1:
        return ib.call(this, N);
      case 2:
        return Oa.call(this, N, Ja);
      case 3:
        return la.call(this, N, Ja, Ra);
      case 4:
        return V.call(this, N, Ja, Ra, Ka);
      case 5:
        return R.call(this, N, Ja, Ra, Ka, Wa);
      case 6:
        return M.call(this, N, Ja, Ra, Ka, Wa, Ua);
      case 7:
        return H.call(this, N, Ja, Ra, Ka, Wa, Ua, hb);
      case 8:
        return D.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb);
      case 9:
        return z.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb);
      case 10:
        return w.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb);
      case 11:
        return t.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb);
      case 12:
        return r.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb);
      case 13:
        return n.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb);
      case 14:
        return l.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc);
      case 15:
        return k.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc);
      case 16:
        return h.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb);
      case 17:
        return f.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic);
      case 18:
        return e.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed);
      case 19:
        return d.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed, ae);
      case 20:
        return c.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed, ae, Ie);
      case 21:
        return b.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed, ae, Ie, Tf);
      case 22:
        return a.call(this, N, Ja, Ra, Ka, Wa, Ua, hb, pb, vb, qb, wb, Bb, xb, kc, lc, Pb, Ic, Ed, ae, Ie, Tf, Je);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  N.b = ib;
  N.a = Oa;
  N.c = la;
  N.q = V;
  N.C = R;
  N.ea = M;
  N.Ma = H;
  N.Na = D;
  N.Oa = z;
  N.Ba = w;
  N.Ca = t;
  N.Da = r;
  N.Ea = n;
  N.Fa = l;
  N.Ga = k;
  N.Ha = h;
  N.Ia = f;
  N.Ja = e;
  N.Ka = d;
  N.La = c;
  N.od = b;
  N.Lb = a;
  return N;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.p = function() {
  return this.f.p ? this.f.p() : this.f.call(null);
};
g.b = function(a) {
  return this.f.b ? this.f.b(a) : this.f.call(null, a);
};
g.a = function(a, b) {
  return this.f.a ? this.f.a(a, b) : this.f.call(null, a, b);
};
g.c = function(a, b, c) {
  return this.f.c ? this.f.c(a, b, c) : this.f.call(null, a, b, c);
};
g.q = function(a, b, c, d) {
  return this.f.q ? this.f.q(a, b, c, d) : this.f.call(null, a, b, c, d);
};
g.C = function(a, b, c, d, e) {
  return this.f.C ? this.f.C(a, b, c, d, e) : this.f.call(null, a, b, c, d, e);
};
g.ea = function(a, b, c, d, e, f) {
  return this.f.ea ? this.f.ea(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f);
};
g.Ma = function(a, b, c, d, e, f, h) {
  return this.f.Ma ? this.f.Ma(a, b, c, d, e, f, h) : this.f.call(null, a, b, c, d, e, f, h);
};
g.Na = function(a, b, c, d, e, f, h, k) {
  return this.f.Na ? this.f.Na(a, b, c, d, e, f, h, k) : this.f.call(null, a, b, c, d, e, f, h, k);
};
g.Oa = function(a, b, c, d, e, f, h, k, l) {
  return this.f.Oa ? this.f.Oa(a, b, c, d, e, f, h, k, l) : this.f.call(null, a, b, c, d, e, f, h, k, l);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, n) {
  return this.f.Ba ? this.f.Ba(a, b, c, d, e, f, h, k, l, n) : this.f.call(null, a, b, c, d, e, f, h, k, l, n);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, n, r) {
  return this.f.Ca ? this.f.Ca(a, b, c, d, e, f, h, k, l, n, r) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r);
};
g.Da = function(a, b, c, d, e, f, h, k, l, n, r, t) {
  return this.f.Da ? this.f.Da(a, b, c, d, e, f, h, k, l, n, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, n, r, t, w) {
  return this.f.Ea ? this.f.Ea(a, b, c, d, e, f, h, k, l, n, r, t, w) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w);
};
g.Fa = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z) {
  return this.f.Fa ? this.f.Fa(a, b, c, d, e, f, h, k, l, n, r, t, w, z) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z);
};
g.Ga = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D) {
  return this.f.Ga ? this.f.Ga(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D);
};
g.Ha = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H) {
  return this.f.Ha ? this.f.Ha(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H);
};
g.Ia = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M) {
  return this.f.Ia ? this.f.Ia(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M);
};
g.Ja = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R) {
  return this.f.Ja ? this.f.Ja(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R);
};
g.Ka = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V) {
  return this.f.Ka ? this.f.Ka(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V);
};
g.La = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la) {
  return this.f.La ? this.f.La(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la) : this.f.call(null, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la);
};
g.od = function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa) {
  var ib = this.f;
  return O.Lb ? O.Lb(ib, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa) : O.call(null, ib, a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa);
};
function Hc(a, b) {
  return Tc(a) && !(a ? a.g & 262144 || a.Pd || (a.g ? 0 : q(nb, a)) : q(nb, a)) ? new Uc(a, b) : null == a ? null : ob(a, b);
}
function Vc(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.rd || (a.g ? 0 : q(lb, a)) : q(lb, a) : b) ? mb(a) : null;
}
function Wc(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.Nd ? !0 : a.g ? !1 : q(eb, a) : q(eb, a);
}
function Xc(a) {
  return a ? a.g & 16777216 || a.Md ? !0 : a.g ? !1 : q(Ab, a) : q(Ab, a);
}
function Yc(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.pd ? !0 : a.g ? !1 : q($a, a) : q($a, a);
}
function Zc(a) {
  return a ? a.g & 16384 || a.Od ? !0 : a.g ? !1 : q(gb, a) : q(gb, a);
}
function $c(a) {
  return a ? a.u & 512 || a.Jd ? !0 : !1 : !1;
}
function ad(a) {
  var b = [];
  ga(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function bd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var cd = {};
function dd(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Ab ? !0 : a.g ? !1 : q(Pa, a) : q(Pa, a);
}
function ed(a) {
  return p(a) ? !0 : !1;
}
function fd(a, b) {
  return L.c(a, b, cd) === cd ? !1 : !0;
}
function gd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ca(a) === Ca(b)) {
    return a && (a.u & 2048 || a.yb) ? a.fb(null, b) : ma(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function hd(a, b) {
  var c = J(a), d = J(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = gd(Pc(a, d), Pc(b, d));
          if (0 === e && d + 1 < c) {
            d += 1;
          } else {
            c = e;
            break a;
          }
        }
      }
    }
  }
  return c;
}
function id() {
  return F.a(gd, gd) ? gd : function(a, b) {
    var c = gd.a ? gd.a(a, b) : gd.call(null, a, b);
    return "number" === typeof c ? c : p(c) ? -1 : p(gd.a ? gd.a(b, a) : gd.call(null, b, a)) ? 1 : 0;
  };
}
function jd(a) {
  if (A(a)) {
    a = kd.b ? kd.b(a) : kd.call(null, a);
    var b = id();
    na(a, b);
    a = A(a);
  } else {
    a = jc;
  }
  return a;
}
function Kc() {
  switch(arguments.length) {
    case 2:
      return Jc(arguments[0], arguments[1]);
    case 3:
      return Lc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Jc(a, b) {
  var c = A(b);
  if (c) {
    var d = C(c), c = E(c);
    return ld ? ld(a, d, c) : md.call(null, a, d, c);
  }
  return a.p ? a.p() : a.call(null);
}
function Lc(a, b, c) {
  for (c = A(c);;) {
    if (c) {
      var d = C(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (uc(b)) {
        return kb(b);
      }
      c = E(c);
    } else {
      return b;
    }
  }
}
function md() {
  switch(arguments.length) {
    case 2:
      return nd(arguments[0], arguments[1]);
    case 3:
      return ld(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function nd(a, b) {
  return b && (b.g & 524288 || b.td) ? b.Z(null, a) : Aa(b) ? xc(b, a) : "string" === typeof b ? xc(b, a) : q(rb, b) ? sb.a(b, a) : Jc(a, b);
}
function ld(a, b, c) {
  return c && (c.g & 524288 || c.td) ? c.$(null, a, b) : Aa(c) ? yc(c, a, b) : "string" === typeof c ? yc(c, a, b) : q(rb, c) ? sb.c(c, a, b) : Lc(a, b, c);
}
function od(a) {
  return a;
}
function pd(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = ld(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
var qd = function qd() {
  switch(arguments.length) {
    case 0:
      return qd.p();
    case 1:
      return qd.b(arguments[0]);
    case 2:
      return qd.a(arguments[0], arguments[1]);
    default:
      return qd.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
qd.p = function() {
  return 0;
};
qd.b = function(a) {
  return a;
};
qd.a = function(a, b) {
  return a + b;
};
qd.h = function(a, b, c) {
  return ld(qd, a + b, c);
};
qd.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return qd.h(b, a, c);
};
qd.o = 2;
var rd = function rd() {
  switch(arguments.length) {
    case 0:
      return rd.p();
    case 1:
      return rd.b(arguments[0]);
    case 2:
      return rd.a(arguments[0], arguments[1]);
    default:
      return rd.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
rd.p = function() {
  return 1;
};
rd.b = function(a) {
  return a;
};
rd.a = function(a, b) {
  return a * b;
};
rd.h = function(a, b, c) {
  return ld(rd, a * b, c);
};
rd.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return rd.h(b, a, c);
};
rd.o = 2;
var sd = function sd() {
  switch(arguments.length) {
    case 1:
      return sd.b(arguments[0]);
    case 2:
      return sd.a(arguments[0], arguments[1]);
    default:
      return sd.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
sd.b = function() {
  return!0;
};
sd.a = function(a, b) {
  return a < b;
};
sd.h = function(a, b, c) {
  for (;;) {
    if (a < b) {
      if (E(c)) {
        a = b, b = C(c), c = E(c);
      } else {
        return b < C(c);
      }
    } else {
      return!1;
    }
  }
};
sd.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return sd.h(b, a, c);
};
sd.o = 2;
var td = function td() {
  switch(arguments.length) {
    case 1:
      return td.b(arguments[0]);
    case 2:
      return td.a(arguments[0], arguments[1]);
    default:
      return td.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
td.b = function() {
  return!0;
};
td.a = function(a, b) {
  return a > b;
};
td.h = function(a, b, c) {
  for (;;) {
    if (a > b) {
      if (E(c)) {
        a = b, b = C(c), c = E(c);
      } else {
        return b > C(c);
      }
    } else {
      return!1;
    }
  }
};
td.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return td.h(b, a, c);
};
td.o = 2;
function ud(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function vd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function wd(a) {
  var b = 1;
  for (a = A(a);;) {
    if (a && 0 < b) {
      --b, a = E(a);
    } else {
      return a;
    }
  }
}
var v = function v() {
  switch(arguments.length) {
    case 0:
      return v.p();
    case 1:
      return v.b(arguments[0]);
    default:
      return v.h(arguments[0], new B(Array.prototype.slice.call(arguments, 1), 0));
  }
};
v.p = function() {
  return "";
};
v.b = function(a) {
  return null == a ? "" : ea(a);
};
v.h = function(a, b) {
  for (var c = new ha("" + v(a)), d = b;;) {
    if (p(d)) {
      c = c.append("" + v(C(d))), d = E(d);
    } else {
      return c.toString();
    }
  }
};
v.s = function(a) {
  var b = C(a);
  a = E(a);
  return v.h(b, a);
};
v.o = 1;
function Ec(a, b) {
  var c;
  if (Xc(b)) {
    if (Ac(a) && Ac(b) && J(a) !== J(b)) {
      c = !1;
    } else {
      a: {
        c = A(a);
        for (var d = A(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && F.a(C(c), C(d))) {
            c = E(c), d = E(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return ed(c);
}
function xd(a) {
  var b = 0;
  for (a = A(a);;) {
    if (a) {
      var c = C(a), b = (b + (fc(function() {
        var a = c;
        return yd.b ? yd.b(a) : yd.call(null, a);
      }()) ^ fc(function() {
        var a = c;
        return zd.b ? zd.b(a) : zd.call(null, a);
      }()))) % 4503599627370496;
      a = E(a);
    } else {
      return b;
    }
  }
}
function Ad(a, b, c, d, e) {
  this.n = a;
  this.first = b;
  this.aa = c;
  this.count = d;
  this.l = e;
  this.g = 65937646;
  this.u = 8192;
}
g = Ad.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  return 1 === this.count ? null : this.aa;
};
g.K = function() {
  return this.count;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return ob(jc, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return this.first;
};
g.ba = function() {
  return 1 === this.count ? jc : this.aa;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Ad(b, this.first, this.aa, this.count, this.l);
};
g.H = function(a, b) {
  return new Ad(this.n, b, this, this.count + 1, null);
};
Ad.prototype[Ea] = function() {
  return nc(this);
};
function Bd(a) {
  this.n = a;
  this.g = 65937614;
  this.u = 8192;
}
g = Bd.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  return null;
};
g.K = function() {
  return 0;
};
g.A = function() {
  return qc;
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return this;
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return null;
};
g.ba = function() {
  return jc;
};
g.J = function() {
  return null;
};
g.G = function(a, b) {
  return new Bd(b);
};
g.H = function(a, b) {
  return new Ad(this.n, b, null, 1, null);
};
var jc = new Bd(null);
Bd.prototype[Ea] = function() {
  return nc(this);
};
function Cd(a) {
  return(a ? a.g & 134217728 || a.Ld || (a.g ? 0 : q(Cb, a)) : q(Cb, a)) ? Db(a) : ld(Mc, jc, a);
}
function Fd() {
  a: {
    var a = 0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof B && 0 === a.j) {
      b = a.e;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.N(null)), a = a.V(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = jc;;) {
      if (0 < a) {
        var d = a - 1, c = c.H(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function Gd(a, b, c, d) {
  this.n = a;
  this.first = b;
  this.aa = c;
  this.l = d;
  this.g = 65929452;
  this.u = 8192;
}
g = Gd.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  return null == this.aa ? null : A(this.aa);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return this.first;
};
g.ba = function() {
  return null == this.aa ? jc : this.aa;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Gd(b, this.first, this.aa, this.l);
};
g.H = function(a, b) {
  return new Gd(null, b, this, this.l);
};
Gd.prototype[Ea] = function() {
  return nc(this);
};
function I(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Ab)) ? new Gd(null, a, b, null) : new Gd(null, a, A(b), null);
}
function Hd(a, b) {
  if (a.ga === b.ga) {
    return 0;
  }
  var c = Ba(a.ia);
  if (p(c ? b.ia : c)) {
    return-1;
  }
  if (p(a.ia)) {
    if (Ba(b.ia)) {
      return 1;
    }
    c = ma(a.ia, b.ia);
    return 0 === c ? ma(a.name, b.name) : c;
  }
  return ma(a.name, b.name);
}
function P(a, b, c, d) {
  this.ia = a;
  this.name = b;
  this.ga = c;
  this.la = d;
  this.g = 2153775105;
  this.u = 4096;
}
g = P.prototype;
g.toString = function() {
  return[v(":"), v(this.ga)].join("");
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.r = function(a, b) {
  return b instanceof P ? this.ga === b.ga : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return L.a(c, this);
      case 3:
        return L.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return L.a(c, this);
  };
  a.c = function(a, c, d) {
    return L.c(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return L.a(a, this);
};
g.a = function(a, b) {
  return L.c(a, this, b);
};
g.A = function() {
  var a = this.la;
  return null != a ? a : this.la = a = gc(bc(this.name), ec(this.ia)) + 2654435769 | 0;
};
g.F = function(a, b) {
  return Eb(b, [v(":"), v(this.ga)].join(""));
};
function Q(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.ga === b.ga : !1;
}
var Id = function Id() {
  switch(arguments.length) {
    case 1:
      return Id.b(arguments[0]);
    case 2:
      return Id.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Id.b = function(a) {
  if (a instanceof P) {
    return a;
  }
  if (a instanceof y) {
    var b;
    if (a && (a.u & 4096 || a.sd)) {
      b = a.ia;
    } else {
      throw Error([v("Doesn't support namespace: "), v(a)].join(""));
    }
    return new P(b, Jd.b ? Jd.b(a) : Jd.call(null, a), a.xa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
};
Id.a = function(a, b) {
  return new P(a, b, [v(p(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
};
Id.o = 2;
function Kd(a, b, c, d) {
  this.n = a;
  this.rb = b;
  this.v = c;
  this.l = d;
  this.g = 32374988;
  this.u = 0;
}
g = Kd.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
function Ld(a) {
  null != a.rb && (a.v = a.rb.p ? a.rb.p() : a.rb.call(null), a.rb = null);
  return a.v;
}
g.D = function() {
  return this.n;
};
g.V = function() {
  zb(this);
  return null == this.v ? null : E(this.v);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  zb(this);
  return null == this.v ? null : C(this.v);
};
g.ba = function() {
  zb(this);
  return null != this.v ? ic(this.v) : jc;
};
g.J = function() {
  Ld(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof Kd) {
      a = Ld(a);
    } else {
      return this.v = a, A(this.v);
    }
  }
};
g.G = function(a, b) {
  return new Kd(b, this.rb, this.v, this.l);
};
g.H = function(a, b) {
  return I(b, this);
};
Kd.prototype[Ea] = function() {
  return nc(this);
};
function Md(a, b) {
  this.d = a;
  this.end = b;
  this.g = 2;
  this.u = 0;
}
Md.prototype.add = function(a) {
  this.d[this.end] = a;
  return this.end += 1;
};
Md.prototype.U = function() {
  var a = new Nd(this.d, 0, this.end);
  this.d = null;
  return a;
};
Md.prototype.K = function() {
  return this.end;
};
function Od(a) {
  return new Md(Array(a), 0);
}
function Nd(a, b, c) {
  this.e = a;
  this.da = b;
  this.end = c;
  this.g = 524306;
  this.u = 0;
}
g = Nd.prototype;
g.K = function() {
  return this.end - this.da;
};
g.w = function(a, b) {
  return this.e[this.da + b];
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.end - this.da ? this.e[this.da + b] : c;
};
g.Mc = function() {
  if (this.da === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Nd(this.e, this.da + 1, this.end);
};
g.Z = function(a, b) {
  return zc(this.e, b, this.e[this.da], this.da + 1);
};
g.$ = function(a, b, c) {
  return zc(this.e, b, c, this.da);
};
function Pd(a, b, c, d) {
  this.U = a;
  this.wa = b;
  this.n = c;
  this.l = d;
  this.g = 31850732;
  this.u = 1536;
}
g = Pd.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  if (1 < Ia(this.U)) {
    return new Pd(Nb(this.U), this.wa, this.n, null);
  }
  var a = zb(this.wa);
  return null == a ? null : a;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.N = function() {
  return x.a(this.U, 0);
};
g.ba = function() {
  return 1 < Ia(this.U) ? new Pd(Nb(this.U), this.wa, this.n, null) : null == this.wa ? jc : this.wa;
};
g.J = function() {
  return this;
};
g.hc = function() {
  return this.U;
};
g.ic = function() {
  return null == this.wa ? jc : this.wa;
};
g.G = function(a, b) {
  return new Pd(this.U, this.wa, b, this.l);
};
g.H = function(a, b) {
  return I(b, this);
};
g.gc = function() {
  return null == this.wa ? null : this.wa;
};
Pd.prototype[Ea] = function() {
  return nc(this);
};
function Qd(a, b) {
  return 0 === Ia(a) ? b : new Pd(a, b, null, null);
}
function Rd(a, b) {
  a.add(b);
}
function kd(a) {
  for (var b = [];;) {
    if (A(a)) {
      b.push(C(a)), a = E(a);
    } else {
      return b;
    }
  }
}
function Sd(a, b) {
  if (Ac(a)) {
    return J(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && A(c)) {
      c = E(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Td = function Td(b) {
  return null == b ? null : null == E(b) ? A(C(b)) : I(C(b), Td(E(b)));
}, Ud = function Ud() {
  switch(arguments.length) {
    case 0:
      return Ud.p();
    case 1:
      return Ud.b(arguments[0]);
    case 2:
      return Ud.a(arguments[0], arguments[1]);
    default:
      return Ud.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ud.p = function() {
  return new Kd(null, function() {
    return null;
  }, null, null);
};
Ud.b = function(a) {
  return new Kd(null, function() {
    return a;
  }, null, null);
};
Ud.a = function(a, b) {
  return new Kd(null, function() {
    var c = A(a);
    return c ? $c(c) ? Qd(Ob(c), Ud.a(Qb(c), b)) : I(C(c), Ud.a(ic(c), b)) : b;
  }, null, null);
};
Ud.h = function(a, b, c) {
  return function e(a, b) {
    return new Kd(null, function() {
      var c = A(a);
      return c ? $c(c) ? Qd(Ob(c), e(Qb(c), b)) : I(C(c), e(ic(c), b)) : p(b) ? e(C(b), E(b)) : null;
    }, null, null);
  }(Ud.a(a, b), c);
};
Ud.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return Ud.h(b, a, c);
};
Ud.o = 2;
function Vd(a) {
  return Kb(a);
}
var Wd = function Wd() {
  switch(arguments.length) {
    case 0:
      return Wd.p();
    case 1:
      return Wd.b(arguments[0]);
    case 2:
      return Wd.a(arguments[0], arguments[1]);
    default:
      return Wd.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Wd.p = function() {
  return Ib(Nc);
};
Wd.b = function(a) {
  return a;
};
Wd.a = function(a, b) {
  return Jb(a, b);
};
Wd.h = function(a, b, c) {
  for (;;) {
    if (a = Jb(a, b), p(c)) {
      b = C(c), c = E(c);
    } else {
      return a;
    }
  }
};
Wd.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return Wd.h(b, a, c);
};
Wd.o = 2;
function Xd(a, b, c) {
  var d = A(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = Qa(d);
  var e = Sa(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Qa(e), f = Sa(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Qa(f), h = Sa(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Qa(h), k = Sa(h);
  if (4 === b) {
    return a.q ? a.q(c, d, e, f) : a.q ? a.q(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Qa(k), l = Sa(k);
  if (5 === b) {
    return a.C ? a.C(c, d, e, f, h) : a.C ? a.C(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Qa(l), n = Sa(l);
  if (6 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k) : a.ea ? a.ea(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Qa(n), r = Sa(n);
  if (7 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l) : a.Ma ? a.Ma(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var n = Qa(r), t = Sa(r);
  if (8 === b) {
    return a.Na ? a.Na(c, d, e, f, h, k, l, n) : a.Na ? a.Na(c, d, e, f, h, k, l, n) : a.call(null, c, d, e, f, h, k, l, n);
  }
  var r = Qa(t), w = Sa(t);
  if (9 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, n, r) : a.Oa ? a.Oa(c, d, e, f, h, k, l, n, r) : a.call(null, c, d, e, f, h, k, l, n, r);
  }
  var t = Qa(w), z = Sa(w);
  if (10 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, n, r, t) : a.Ba ? a.Ba(c, d, e, f, h, k, l, n, r, t) : a.call(null, c, d, e, f, h, k, l, n, r, t);
  }
  var w = Qa(z), D = Sa(z);
  if (11 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, n, r, t, w) : a.Ca ? a.Ca(c, d, e, f, h, k, l, n, r, t, w) : a.call(null, c, d, e, f, h, k, l, n, r, t, w);
  }
  var z = Qa(D), H = Sa(D);
  if (12 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, n, r, t, w, z) : a.Da ? a.Da(c, d, e, f, h, k, l, n, r, t, w, z) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z);
  }
  var D = Qa(H), M = Sa(H);
  if (13 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, n, r, t, w, z, D) : a.Ea ? a.Ea(c, d, e, f, h, k, l, n, r, t, w, z, D) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D);
  }
  var H = Qa(M), R = Sa(M);
  if (14 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, n, r, t, w, z, D, H) : a.Fa ? a.Fa(c, d, e, f, h, k, l, n, r, t, w, z, D, H) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H);
  }
  var M = Qa(R), V = Sa(R);
  if (15 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M) : a.Ga ? a.Ga(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M);
  }
  var R = Qa(V), la = Sa(V);
  if (16 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R) : a.Ha ? a.Ha(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R);
  }
  var V = Qa(la), Oa = Sa(la);
  if (17 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V) : a.Ia ? a.Ia(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V);
  }
  var la = Qa(Oa), ib = Sa(Oa);
  if (18 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la) : a.Ja ? a.Ja(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la);
  }
  Oa = Qa(ib);
  ib = Sa(ib);
  if (19 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa) : a.Ka ? a.Ka(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa);
  }
  var N = Qa(ib);
  Sa(ib);
  if (20 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa, N) : a.La ? a.La(c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa, N) : a.call(null, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R, V, la, Oa, N);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var O = function O() {
  switch(arguments.length) {
    case 2:
      return O.a(arguments[0], arguments[1]);
    case 3:
      return O.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return O.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return O.C(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return O.h(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new B(Array.prototype.slice.call(arguments, 5), 0));
  }
};
O.a = function(a, b) {
  var c = a.o;
  if (a.s) {
    var d = Sd(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.s(b);
  }
  return a.apply(a, kd(b));
};
O.c = function(a, b, c) {
  b = I(b, c);
  c = a.o;
  if (a.s) {
    var d = Sd(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.s(b);
  }
  return a.apply(a, kd(b));
};
O.q = function(a, b, c, d) {
  b = I(b, I(c, d));
  c = a.o;
  return a.s ? (d = Sd(b, c + 1), d <= c ? Xd(a, d, b) : a.s(b)) : a.apply(a, kd(b));
};
O.C = function(a, b, c, d, e) {
  b = I(b, I(c, I(d, e)));
  c = a.o;
  return a.s ? (d = Sd(b, c + 1), d <= c ? Xd(a, d, b) : a.s(b)) : a.apply(a, kd(b));
};
O.h = function(a, b, c, d, e, f) {
  b = I(b, I(c, I(d, I(e, Td(f)))));
  c = a.o;
  return a.s ? (d = Sd(b, c + 1), d <= c ? Xd(a, d, b) : a.s(b)) : a.apply(a, kd(b));
};
O.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), e = E(d), d = C(e), f = E(e), e = C(f), f = E(f);
  return O.h(b, a, c, d, e, f);
};
O.o = 5;
function Yd(a) {
  return A(a) ? a : null;
}
var Zd = function Zd() {
  "undefined" === typeof oa && (oa = function(b, c) {
    this.Cd = b;
    this.Bd = c;
    this.g = 393216;
    this.u = 0;
  }, oa.prototype.G = function(b, c) {
    return new oa(this.Cd, c);
  }, oa.prototype.D = function() {
    return this.Bd;
  }, oa.prototype.ua = function() {
    return!1;
  }, oa.prototype.next = function() {
    return Error("No such element");
  }, oa.prototype.remove = function() {
    return Error("Unsupported operation");
  }, oa.Uc = !0, oa.Tc = "cljs.core/t28685", oa.Ad = function(b) {
    return Eb(b, "cljs.core/t28685");
  });
  return new oa(Zd, $d);
};
function be(a, b) {
  this.v = a;
  this.j = b;
}
be.prototype.ua = function() {
  return this.j < this.v.length;
};
be.prototype.next = function() {
  var a = this.v.charAt(this.j);
  this.j += 1;
  return a;
};
be.prototype.remove = function() {
  return Error("Unsupported operation");
};
function ce(a, b) {
  this.e = a;
  this.j = b;
}
ce.prototype.ua = function() {
  return this.j < this.e.length;
};
ce.prototype.next = function() {
  var a = this.e[this.j];
  this.j += 1;
  return a;
};
ce.prototype.remove = function() {
  return Error("Unsupported operation");
};
var de = {}, ee = {};
function fe(a, b) {
  this.wb = a;
  this.cb = b;
}
fe.prototype.ua = function() {
  this.wb === de ? (this.wb = ee, this.cb = A(this.cb)) : this.wb === this.cb && (this.cb = E(this.wb));
  return null != this.cb;
};
fe.prototype.next = function() {
  if (Ba(this.ua())) {
    throw Error("No such element");
  }
  this.wb = this.cb;
  return C(this.cb);
};
fe.prototype.remove = function() {
  return Error("Unsupported operation");
};
function ge(a) {
  if (null == a) {
    return Zd();
  }
  if ("string" === typeof a) {
    return new be(a, 0);
  }
  if (Aa(a)) {
    return new ce(a, 0);
  }
  var b;
  b = a ? p(p(null) ? null : a.Mb) ? !0 : a.mc ? !1 : q(Ub, a) : q(Ub, a);
  if (p(b)) {
    return Vb(a);
  }
  if (a ? a.g & 8388608 || a.vd || (a.g ? 0 : q(yb, a)) : q(yb, a)) {
    return new fe(de, a);
  }
  throw Error([v("Cannot create iterator from "), v(a)].join(""));
}
function he(a, b) {
  this.vb = a;
  this.Vc = b;
}
he.prototype.step = function(a) {
  for (var b = this;;) {
    if (p(function() {
      var c = null != a.pa;
      return c ? b.Vc.ua() : c;
    }())) {
      if (uc(function() {
        var c = b.Vc.next();
        return b.vb.a ? b.vb.a(a, c) : b.vb.call(null, a, c);
      }())) {
        null != a.aa && (a.aa.pa = null);
      } else {
        continue;
      }
    }
    break;
  }
  return null == a.pa ? null : b.vb.b ? b.vb.b(a) : b.vb.call(null, a);
};
function ie(a, b) {
  var c = function() {
    function a(b, c) {
      b.first = c;
      b.aa = new je(b.pa, null, null, null);
      b.pa = null;
      return b.aa;
    }
    function b(a) {
      (uc(a) ? kb(a) : a).pa = null;
      return a;
    }
    var c = null, c = function(c, f) {
      switch(arguments.length) {
        case 1:
          return b.call(this, c);
        case 2:
          return a.call(this, c, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.b = b;
    c.a = a;
    return c;
  }();
  return new he(a.b ? a.b(c) : a.call(null, c), b);
}
function je(a, b, c, d) {
  this.pa = a;
  this.first = b;
  this.aa = c;
  this.n = d;
  this.g = 31719628;
  this.u = 0;
}
g = je.prototype;
g.G = function(a, b) {
  return new je(this.pa, this.first, this.aa, b);
};
g.H = function(a, b) {
  return I(b, zb(this));
};
g.Y = function() {
  return jc;
};
g.r = function(a, b) {
  return null != zb(this) ? Ec(this, b) : Xc(b) && null == A(b);
};
g.A = function() {
  return pc(this);
};
g.J = function() {
  null != this.pa && this.pa.step(this);
  return null == this.aa ? null : this;
};
g.N = function() {
  null != this.pa && zb(this);
  return null == this.aa ? null : this.first;
};
g.ba = function() {
  null != this.pa && zb(this);
  return null == this.aa ? jc : this.aa;
};
g.V = function() {
  null != this.pa && zb(this);
  return null == this.aa ? null : zb(this.aa);
};
je.prototype[Ea] = function() {
  return nc(this);
};
function ke(a, b) {
  return new je(ie(a, ge(b)), null, null, null);
}
function le(a, b) {
  for (;;) {
    if (null == A(b)) {
      return!0;
    }
    var c;
    c = C(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (p(c)) {
      c = a;
      var d = E(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function me(a, b) {
  for (;;) {
    if (A(b)) {
      var c;
      c = C(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (p(c)) {
        return c;
      }
      c = a;
      var d = E(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function ne(a) {
  return function() {
    function b(b, c) {
      return Ba(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ba(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return Ba(a.p ? a.p() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
            h[f] = arguments[f + 2], ++f;
          }
          f = new B(h, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Ba(O.q(a, b, d, e));
      }
      b.o = 2;
      b.s = function(a) {
        var b = C(a);
        a = E(a);
        var d = C(a);
        a = ic(a);
        return c(b, d, a);
      };
      b.h = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var n = null;
          if (2 < arguments.length) {
            for (var n = 0, r = Array(arguments.length - 2);n < r.length;) {
              r[n] = arguments[n + 2], ++n;
            }
            n = new B(r, 0);
          }
          return f.h(a, e, n);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.o = 2;
    e.s = f.s;
    e.p = d;
    e.b = c;
    e.a = b;
    e.h = f.h;
    return e;
  }();
}
var oe = function oe() {
  switch(arguments.length) {
    case 0:
      return oe.p();
    case 1:
      return oe.b(arguments[0]);
    case 2:
      return oe.a(arguments[0], arguments[1]);
    case 3:
      return oe.c(arguments[0], arguments[1], arguments[2]);
    default:
      return oe.h(arguments[0], arguments[1], arguments[2], new B(Array.prototype.slice.call(arguments, 3), 0));
  }
};
oe.p = function() {
  return od;
};
oe.b = function(a) {
  return a;
};
oe.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.c ? b.c(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.p ? b.p() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new B(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        c = O.C(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.o = 3;
      c.s = function(a) {
        var b = C(a);
        a = E(a);
        var c = C(a);
        a = E(a);
        var e = C(a);
        a = ic(a);
        return d(b, c, e, a);
      };
      c.h = d;
      return c;
    }(), h = function(a, b, h, t) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var w = null;
          if (3 < arguments.length) {
            for (var w = 0, z = Array(arguments.length - 3);w < z.length;) {
              z[w] = arguments[w + 3], ++w;
            }
            w = new B(z, 0);
          }
          return k.h(a, b, h, w);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.o = 3;
    h.s = k.s;
    h.p = f;
    h.b = e;
    h.a = d;
    h.c = c;
    h.h = k.h;
    return h;
  }();
};
oe.c = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.c ? c.c(d, e, f) : c.call(null, d, e, f);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.a ? c.a(d, e) : c.call(null, d, e);
      f = b.b ? b.b(f) : b.call(null, f);
      return a.b ? a.b(f) : a.call(null, f);
    }
    function f(d) {
      d = c.b ? c.b(d) : c.call(null, d);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.p ? c.p() : c.call(null);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new B(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        d = O.C(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.o = 3;
      d.s = function(a) {
        var b = C(a);
        a = E(a);
        var c = C(a);
        a = E(a);
        var d = C(a);
        a = ic(a);
        return e(b, c, d, a);
      };
      d.h = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var z = null;
          if (3 < arguments.length) {
            for (var z = 0, D = Array(arguments.length - 3);z < D.length;) {
              D[z] = arguments[z + 3], ++z;
            }
            z = new B(D, 0);
          }
          return l.h(a, b, c, z);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.o = 3;
    k.s = l.s;
    k.p = h;
    k.b = f;
    k.a = e;
    k.c = d;
    k.h = l.h;
    return k;
  }();
};
oe.h = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new B(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = O.a(C(a), b);
        for (var d = E(a);;) {
          if (d) {
            b = C(d).call(null, b), d = E(d);
          } else {
            return b;
          }
        }
      }
      b.o = 0;
      b.s = function(a) {
        a = A(a);
        return c(a);
      };
      b.h = c;
      return b;
    }();
  }(Cd(I(a, I(b, I(c, d)))));
};
oe.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), d = E(d);
  return oe.h(b, a, c, d);
};
oe.o = 3;
function pe(a, b) {
  return function() {
    function c(c, d, e) {
      return a.q ? a.q(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.c ? a.c(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.a ? a.a(b, c) : a.call(null, b, c);
    }
    function f() {
      return a.b ? a.b(b) : a.call(null, b);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new B(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        return O.h(a, b, c, e, f, Gc([h], 0));
      }
      c.o = 3;
      c.s = function(a) {
        var b = C(a);
        a = E(a);
        var c = C(a);
        a = E(a);
        var e = C(a);
        a = ic(a);
        return d(b, c, e, a);
      };
      c.h = d;
      return c;
    }(), h = function(a, b, h, t) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var w = null;
          if (3 < arguments.length) {
            for (var w = 0, z = Array(arguments.length - 3);w < z.length;) {
              z[w] = arguments[w + 3], ++w;
            }
            w = new B(z, 0);
          }
          return k.h(a, b, h, w);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.o = 3;
    h.s = k.s;
    h.p = f;
    h.b = e;
    h.a = d;
    h.c = c;
    h.h = k.h;
    return h;
  }();
}
function qe(a, b, c) {
  var d = re;
  return function() {
    function e(e, f, h) {
      return d.ea ? d.ea(a, b, c, e, f, h) : d.call(null, a, b, c, e, f, h);
    }
    function f(e, f) {
      return d.C ? d.C(a, b, c, e, f) : d.call(null, a, b, c, e, f);
    }
    function h(e) {
      return d.q ? d.q(a, b, c, e) : d.call(null, a, b, c, e);
    }
    function k() {
      return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
    }
    var l = null, n = function() {
      function e(a, b, c, d) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new B(k, 0);
        }
        return f.call(this, a, b, c, h);
      }
      function f(e, h, k, l) {
        return O.h(d, a, b, c, e, Gc([h, k, l], 0));
      }
      e.o = 3;
      e.s = function(a) {
        var b = C(a);
        a = E(a);
        var c = C(a);
        a = E(a);
        var d = C(a);
        a = ic(a);
        return f(b, c, d, a);
      };
      e.h = f;
      return e;
    }(), l = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return k.call(this);
        case 1:
          return h.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return e.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            for (var l = 0, H = Array(arguments.length - 3);l < H.length;) {
              H[l] = arguments[l + 3], ++l;
            }
            l = new B(H, 0);
          }
          return n.h(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.o = 3;
    l.s = n.s;
    l.p = k;
    l.b = h;
    l.a = f;
    l.c = e;
    l.h = n.h;
    return l;
  }();
}
function se(a, b, c, d) {
  this.state = a;
  this.n = b;
  this.Id = c;
  this.kd = d;
  this.u = 16386;
  this.g = 6455296;
}
g = se.prototype;
g.equiv = function(a) {
  return this.r(null, a);
};
g.r = function(a, b) {
  return this === b;
};
g.jc = function() {
  return this.state;
};
g.D = function() {
  return this.n;
};
g.Rc = function(a, b, c) {
  for (var d = A(this.kd), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.w(null, h);
      var k = K(a, 0, null);
      a = K(a, 1, null);
      var l = b, n = c;
      a.q ? a.q(k, this, l, n) : a.call(null, k, this, l, n);
      h += 1;
    } else {
      if (a = A(d)) {
        d = a, $c(d) ? (e = Ob(d), d = Qb(d), a = e, f = J(e), e = a) : (a = C(d), k = K(a, 0, null), a = K(a, 1, null), e = k, f = b, h = c, a.q ? a.q(e, this, f, h) : a.call(null, e, this, f, h), d = E(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.A = function() {
  return this[ca] || (this[ca] = ++da);
};
function te() {
  switch(arguments.length) {
    case 1:
      return we(arguments[0]);
    default:
      var a = arguments[0], b = new B(Array.prototype.slice.call(arguments, 1), 0), c = dd(b) ? O.a(xe, b) : b, b = L.a(c, wa), c = L.a(c, Ae);
      return new se(a, b, c, null);
  }
}
function we(a) {
  return new se(a, null, null, null);
}
function Be(a, b) {
  if (a instanceof se) {
    var c = a.Id;
    if (null != c && !p(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(function() {
        var a = Fd(new y(null, "validate", "validate", 1439230700, null), new y(null, "new-value", "new-value", -1567397401, null));
        return Ce.b ? Ce.b(a) : Ce.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.kd && Hb(a, c, b);
    return b;
  }
  return Sb(a, b);
}
var De = function De() {
  switch(arguments.length) {
    case 2:
      return De.a(arguments[0], arguments[1]);
    case 3:
      return De.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return De.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return De.h(arguments[0], arguments[1], arguments[2], arguments[3], new B(Array.prototype.slice.call(arguments, 4), 0));
  }
};
De.a = function(a, b) {
  var c;
  a instanceof se ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = Be(a, c)) : c = Tb.a(a, b);
  return c;
};
De.c = function(a, b, c) {
  if (a instanceof se) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = Be(a, b);
  } else {
    a = Tb.c(a, b, c);
  }
  return a;
};
De.q = function(a, b, c, d) {
  if (a instanceof se) {
    var e = a.state;
    b = b.c ? b.c(e, c, d) : b.call(null, e, c, d);
    a = Be(a, b);
  } else {
    a = Tb.q(a, b, c, d);
  }
  return a;
};
De.h = function(a, b, c, d, e) {
  return a instanceof se ? Be(a, O.C(b, a.state, c, d, e)) : Tb.C(a, b, c, d, e);
};
De.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), e = E(d), d = C(e), e = E(e);
  return De.h(b, a, c, d, e);
};
De.o = 4;
var Ee = function Ee() {
  switch(arguments.length) {
    case 1:
      return Ee.b(arguments[0]);
    case 2:
      return Ee.a(arguments[0], arguments[1]);
    case 3:
      return Ee.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ee.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Ee.h(arguments[0], arguments[1], arguments[2], arguments[3], new B(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Ee.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.p ? b.p() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new B(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = O.c(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.o = 2;
        c.s = function(a) {
          var b = C(a);
          a = E(a);
          var c = C(a);
          a = ic(a);
          return d(b, c, a);
        };
        c.h = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var r = null;
            if (2 < arguments.length) {
              for (var r = 0, t = Array(arguments.length - 2);r < t.length;) {
                t[r] = arguments[r + 2], ++r;
              }
              r = new B(t, 0);
            }
            return h.h(a, b, r);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.o = 2;
      f.s = h.s;
      f.p = e;
      f.b = d;
      f.a = c;
      f.h = h.h;
      return f;
    }();
  };
};
Ee.a = function(a, b) {
  return new Kd(null, function() {
    var c = A(b);
    if (c) {
      if ($c(c)) {
        for (var d = Ob(c), e = J(d), f = Od(e), h = 0;;) {
          if (h < e) {
            Rd(f, function() {
              var b = x.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Qd(f.U(), Ee.a(a, Qb(c)));
      }
      return I(function() {
        var b = C(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), Ee.a(a, ic(c)));
    }
    return null;
  }, null, null);
};
Ee.c = function(a, b, c) {
  return new Kd(null, function() {
    var d = A(b), e = A(c);
    if (d && e) {
      var f = I, h;
      h = C(d);
      var k = C(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, Ee.c(a, ic(d), ic(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Ee.q = function(a, b, c, d) {
  return new Kd(null, function() {
    var e = A(b), f = A(c), h = A(d);
    if (e && f && h) {
      var k = I, l;
      l = C(e);
      var n = C(f), r = C(h);
      l = a.c ? a.c(l, n, r) : a.call(null, l, n, r);
      e = k(l, Ee.q(a, ic(e), ic(f), ic(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Ee.h = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Kd(null, function() {
      var b = Ee.a(A, a);
      return le(od, b) ? I(Ee.a(C, b), k(Ee.a(ic, b))) : null;
    }, null, null);
  };
  return Ee.a(function() {
    return function(b) {
      return O.a(a, b);
    };
  }(f), f(Mc.h(e, d, Gc([c, b], 0))));
};
Ee.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), e = E(d), d = C(e), e = E(e);
  return Ee.h(b, a, c, d, e);
};
Ee.o = 4;
function Fe(a, b) {
  return new Kd(null, function() {
    if (0 < a) {
      var c = A(b);
      return c ? I(C(c), Fe(a - 1, ic(c))) : null;
    }
    return null;
  }, null, null);
}
function Ge(a, b) {
  return new Kd(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = A(b);
      if (0 < a && e) {
        var f = a - 1, e = ic(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
var He = function He(b) {
  return new Kd(null, function() {
    var c = A(b);
    return c ? Ud.a(c, He(c)) : null;
  }, null, null);
};
function Ke(a) {
  return new Kd(null, function() {
    return I(a, Ke(a));
  }, null, null);
}
var Le = function Le(b, c) {
  return I(c, new Kd(null, function() {
    return Le(b, b.b ? b.b(c) : b.call(null, c));
  }, null, null));
}, Me = function Me() {
  switch(arguments.length) {
    case 2:
      return Me.a(arguments[0], arguments[1]);
    default:
      return Me.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Me.a = function(a, b) {
  return new Kd(null, function() {
    var c = A(a), d = A(b);
    return c && d ? I(C(c), I(C(d), Me.a(ic(c), ic(d)))) : null;
  }, null, null);
};
Me.h = function(a, b, c) {
  return new Kd(null, function() {
    var d = Ee.a(A, Mc.h(c, b, Gc([a], 0)));
    return le(od, d) ? Ud.a(Ee.a(C, d), O.a(Me, Ee.a(ic, d))) : null;
  }, null, null);
};
Me.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  c = E(c);
  return Me.h(b, a, c);
};
Me.o = 2;
function Ne(a) {
  return oe.a(Ee.b(a), Oe);
}
function Pe(a, b) {
  return new Kd(null, function() {
    var c = A(b);
    if (c) {
      if ($c(c)) {
        for (var d = Ob(c), e = J(d), f = Od(e), h = 0;;) {
          if (h < e) {
            var k;
            k = x.a(d, h);
            k = a.b ? a.b(k) : a.call(null, k);
            p(k) && (k = x.a(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Qd(f.U(), Pe(a, Qb(c)));
      }
      d = C(c);
      c = ic(c);
      return p(a.b ? a.b(d) : a.call(null, d)) ? I(d, Pe(a, c)) : Pe(a, c);
    }
    return null;
  }, null, null);
}
function Qe(a, b) {
  return Pe(ne(a), b);
}
var Re = function Re() {
  switch(arguments.length) {
    case 2:
      return Re.a(arguments[0], arguments[1]);
    case 3:
      return Re.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Re.a = function(a, b) {
  return null != a ? a && (a.u & 4 || a.nd) ? Hc(Vd(ld(Jb, Ib(a), b)), Vc(a)) : ld(Ma, a, b) : ld(Mc, jc, b);
};
Re.c = function(a, b, c) {
  return a && (a.u & 4 || a.nd) ? Hc(Vd(pd(b, Wd, Ib(a), c)), Vc(a)) : pd(b, Mc, a, c);
};
Re.o = 3;
function Se(a, b) {
  return Vd(ld(function(b, d) {
    return Wd.a(b, a.b ? a.b(d) : a.call(null, d));
  }, Ib(Nc), b));
}
function Te(a, b) {
  return Ue(a, a, b);
}
function Ue(a, b, c) {
  return new Kd(null, function() {
    var d = A(c);
    if (d) {
      var e = Fe(a, d);
      return a === J(e) ? I(e, Ue(a, b, Ge(b, d))) : null;
    }
    return null;
  }, null, null);
}
function Ve(a, b) {
  var c;
  a: {
    c = cd;
    for (var d = a, e = A(b);;) {
      if (e) {
        var f = d;
        if (f ? f.g & 256 || f.Oc || (f.g ? 0 : q(Va, f)) : q(Va, f)) {
          d = L.c(d, C(e), c);
          if (c === d) {
            c = null;
            break a;
          }
          e = E(e);
        } else {
          c = null;
          break a;
        }
      } else {
        c = d;
        break a;
      }
    }
  }
  return c;
}
var We = function We() {
  switch(arguments.length) {
    case 3:
      return We.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return We.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return We.C(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return We.ea(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return We.h(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new B(Array.prototype.slice.call(arguments, 6), 0));
  }
};
We.c = function(a, b, c) {
  var d = K(b, 0, null);
  b = wd(b);
  return p(b) ? Qc.c(a, d, We.c(L.a(a, d), b, c)) : Qc.c(a, d, function() {
    var b = L.a(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
We.q = function(a, b, c, d) {
  var e = K(b, 0, null);
  b = wd(b);
  return p(b) ? Qc.c(a, e, We.q(L.a(a, e), b, c, d)) : Qc.c(a, e, function() {
    var b = L.a(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
We.C = function(a, b, c, d, e) {
  var f = K(b, 0, null);
  b = wd(b);
  return p(b) ? Qc.c(a, f, We.C(L.a(a, f), b, c, d, e)) : Qc.c(a, f, function() {
    var b = L.a(a, f);
    return c.c ? c.c(b, d, e) : c.call(null, b, d, e);
  }());
};
We.ea = function(a, b, c, d, e, f) {
  var h = K(b, 0, null);
  b = wd(b);
  return p(b) ? Qc.c(a, h, We.ea(L.a(a, h), b, c, d, e, f)) : Qc.c(a, h, function() {
    var b = L.a(a, h);
    return c.q ? c.q(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
We.h = function(a, b, c, d, e, f, h) {
  var k = K(b, 0, null);
  b = wd(b);
  return p(b) ? Qc.c(a, k, O.h(We, L.a(a, k), b, c, d, Gc([e, f, h], 0))) : Qc.c(a, k, O.h(c, L.a(a, k), d, e, f, Gc([h], 0)));
};
We.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), e = E(d), d = C(e), f = E(e), e = C(f), h = E(f), f = C(h), h = E(h);
  return We.h(b, a, c, d, e, f, h);
};
We.o = 6;
function Xe(a, b) {
  this.L = a;
  this.e = b;
}
function Ye(a) {
  return new Xe(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ze(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function $e(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ye(a);
    d.e[0] = c;
    c = d;
    b -= 5;
  }
}
var af = function af(b, c, d, e) {
  var f = new Xe(d.L, Fa(d.e)), h = b.i - 1 >>> c & 31;
  5 === c ? f.e[h] = e : (d = d.e[h], b = null != d ? af(b, c - 5, d, e) : $e(null, c - 5, e), f.e[h] = b);
  return f;
};
function bf(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function cf(a, b) {
  if (b >= Ze(a)) {
    return a.ka;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.e[b >>> d & 31], d = e
    } else {
      return c.e;
    }
  }
}
function df(a, b) {
  return 0 <= b && b < a.i ? cf(a, b) : bf(b, a.i);
}
var ef = function ef(b, c, d, e, f) {
  var h = new Xe(d.L, Fa(d.e));
  if (0 === c) {
    h.e[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = ef(b, c - 5, d.e[k], e, f);
    h.e[k] = b;
  }
  return h;
};
function ff(a, b, c, d, e, f) {
  this.j = a;
  this.Jb = b;
  this.e = c;
  this.Wa = d;
  this.start = e;
  this.end = f;
}
ff.prototype.ua = function() {
  return this.j < this.end;
};
ff.prototype.next = function() {
  32 === this.j - this.Jb && (this.e = cf(this.Wa, this.j), this.Jb += 32);
  var a = this.e[this.j & 31];
  this.j += 1;
  return a;
};
function S(a, b, c, d, e, f) {
  this.n = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.ka = e;
  this.l = f;
  this.g = 167668511;
  this.u = 8196;
}
g = S.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return "number" === typeof b ? x.c(this, b, c) : c;
};
g.w = function(a, b) {
  return df(this, b)[b & 31];
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.i ? cf(this, b)[b & 31] : c;
};
g.Cb = function(a, b, c) {
  if (0 <= b && b < this.i) {
    return Ze(this) <= b ? (a = Fa(this.ka), a[b & 31] = c, new S(this.n, this.i, this.shift, this.root, a, null)) : new S(this.n, this.i, this.shift, ef(this, this.shift, this.root, b, c), this.ka, null);
  }
  if (b === this.i) {
    return Ma(this, c);
  }
  throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.i), v("]")].join(""));
};
g.Mb = !0;
g.zb = function() {
  var a = this.i;
  return new ff(0, 0, 0 < J(this) ? cf(this, 0) : null, this, 0, a);
};
g.D = function() {
  return this.n;
};
g.K = function() {
  return this.i;
};
g.kc = function() {
  return x.a(this, 0);
};
g.lc = function() {
  return x.a(this, 1);
};
g.pb = function() {
  return 0 < this.i ? new Dc(this, this.i - 1, null) : null;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  if (b instanceof S) {
    if (this.i === J(b)) {
      for (var c = Vb(this), d = Vb(b);;) {
        if (p(c.ua())) {
          var e = c.next(), f = d.next();
          if (!F.a(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Ec(this, b);
  }
};
g.ob = function() {
  var a = this;
  return new mf(a.i, a.shift, function() {
    var b = a.root;
    return vf.b ? vf.b(b) : vf.call(null, b);
  }(), function() {
    var b = a.ka;
    return wf.b ? wf.b(b) : wf.call(null, b);
  }());
};
g.Y = function() {
  return Hc(Nc, this.n);
};
g.Z = function(a, b) {
  return vc(this, b);
};
g.$ = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.i) {
      var e = cf(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h);
            if (uc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (uc(e)) {
        return b = e, G.b ? G.b(b) : G.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.ma = function(a, b, c) {
  if ("number" === typeof b) {
    return jb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.J = function() {
  if (0 === this.i) {
    return null;
  }
  if (32 >= this.i) {
    return new B(this.ka, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.e[0];
      } else {
        a = a.e;
        break a;
      }
    }
  }
  return xf ? xf(this, a, 0, 0) : yf.call(null, this, a, 0, 0);
};
g.G = function(a, b) {
  return new S(b, this.i, this.shift, this.root, this.ka, this.l);
};
g.H = function(a, b) {
  if (32 > this.i - Ze(this)) {
    for (var c = this.ka.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ka[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new S(this.n, this.i + 1, this.shift, this.root, d, null);
  }
  c = (d = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ye(null), d.e[0] = this.root, e = $e(null, this.shift, new Xe(null, this.ka)), d.e[1] = e) : d = af(this, this.shift, this.root, new Xe(null, this.ka));
  return new S(this.n, this.i + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.c = function(a, c, d) {
    return this.fa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.fa(null, a, b);
};
var T = new Xe(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Nc = new S(null, 0, 5, T, [], qc);
function zf(a) {
  var b = a.length;
  if (32 > b) {
    return new S(null, b, 5, T, a, null);
  }
  for (var c = 32, d = (new S(null, 32, 5, T, a.slice(0, 32), null)).ob(null);;) {
    if (c < b) {
      var e = c + 1, d = Wd.a(d, a[c]), c = e
    } else {
      return Kb(d);
    }
  }
}
S.prototype[Ea] = function() {
  return nc(this);
};
function Af(a) {
  return Aa(a) ? zf(a) : Kb(ld(Jb, Ib(Nc), a));
}
var Bf = function Bf() {
  return Bf.h(0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Bf.h = function(a) {
  return a instanceof B && 0 === a.j ? zf(a.e) : Af(a);
};
Bf.o = 0;
Bf.s = function(a) {
  return Bf.h(A(a));
};
function Cf(a, b, c, d, e, f) {
  this.oa = a;
  this.Sa = b;
  this.j = c;
  this.da = d;
  this.n = e;
  this.l = f;
  this.g = 32375020;
  this.u = 1536;
}
g = Cf.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  if (this.da + 1 < this.Sa.length) {
    var a;
    a = this.oa;
    var b = this.Sa, c = this.j, d = this.da + 1;
    a = xf ? xf(a, b, c, d) : yf.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Rb(this);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(Nc, this.n);
};
g.Z = function(a, b) {
  var c;
  c = this.oa;
  var d = this.j + this.da, e = J(this.oa);
  c = Df ? Df(c, d, e) : Ef.call(null, c, d, e);
  return vc(c, b);
};
g.$ = function(a, b, c) {
  a = this.oa;
  var d = this.j + this.da, e = J(this.oa);
  a = Df ? Df(a, d, e) : Ef.call(null, a, d, e);
  return wc(a, b, c);
};
g.N = function() {
  return this.Sa[this.da];
};
g.ba = function() {
  if (this.da + 1 < this.Sa.length) {
    var a;
    a = this.oa;
    var b = this.Sa, c = this.j, d = this.da + 1;
    a = xf ? xf(a, b, c, d) : yf.call(null, a, b, c, d);
    return null == a ? jc : a;
  }
  return Qb(this);
};
g.J = function() {
  return this;
};
g.hc = function() {
  var a = this.Sa;
  return new Nd(a, this.da, a.length);
};
g.ic = function() {
  var a = this.j + this.Sa.length;
  if (a < Ia(this.oa)) {
    var b = this.oa, c = cf(this.oa, a);
    return xf ? xf(b, c, a, 0) : yf.call(null, b, c, a, 0);
  }
  return jc;
};
g.G = function(a, b) {
  var c = this.oa, d = this.Sa, e = this.j, f = this.da;
  return Ff ? Ff(c, d, e, f, b) : yf.call(null, c, d, e, f, b);
};
g.H = function(a, b) {
  return I(b, this);
};
g.gc = function() {
  var a = this.j + this.Sa.length;
  if (a < Ia(this.oa)) {
    var b = this.oa, c = cf(this.oa, a);
    return xf ? xf(b, c, a, 0) : yf.call(null, b, c, a, 0);
  }
  return null;
};
Cf.prototype[Ea] = function() {
  return nc(this);
};
function yf() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Cf(a, df(a, b), b, c, null, null);
    case 4:
      return xf(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ff(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function xf(a, b, c, d) {
  return new Cf(a, b, c, d, null, null);
}
function Ff(a, b, c, d, e) {
  return new Cf(a, b, c, d, e, null);
}
function Gf(a, b, c, d, e) {
  this.n = a;
  this.Wa = b;
  this.start = c;
  this.end = d;
  this.l = e;
  this.g = 167666463;
  this.u = 8192;
}
g = Gf.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return "number" === typeof b ? x.c(this, b, c) : c;
};
g.w = function(a, b) {
  return 0 > b || this.end <= this.start + b ? bf(b, this.end - this.start) : x.a(this.Wa, this.start + b);
};
g.fa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : x.c(this.Wa, this.start + b, c);
};
g.Cb = function(a, b, c) {
  var d = this.start + b;
  a = this.n;
  c = Qc.c(this.Wa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Hf.C ? Hf.C(a, c, b, d, null) : Hf.call(null, a, c, b, d, null);
};
g.D = function() {
  return this.n;
};
g.K = function() {
  return this.end - this.start;
};
g.pb = function() {
  return this.start !== this.end ? new Dc(this, this.end - this.start - 1, null) : null;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(Nc, this.n);
};
g.Z = function(a, b) {
  return vc(this, b);
};
g.$ = function(a, b, c) {
  return wc(this, b, c);
};
g.ma = function(a, b, c) {
  if ("number" === typeof b) {
    return jb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.J = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : I(x.a(a.Wa, e), new Kd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.G = function(a, b) {
  var c = this.Wa, d = this.start, e = this.end, f = this.l;
  return Hf.C ? Hf.C(b, c, d, e, f) : Hf.call(null, b, c, d, e, f);
};
g.H = function(a, b) {
  var c = this.n, d = jb(this.Wa, this.end, b), e = this.start, f = this.end + 1;
  return Hf.C ? Hf.C(c, d, e, f, null) : Hf.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.c = function(a, c, d) {
    return this.fa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.fa(null, a, b);
};
Gf.prototype[Ea] = function() {
  return nc(this);
};
function Hf(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Gf) {
      c = b.start + c, d = b.start + d, b = b.Wa;
    } else {
      var f = J(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Gf(a, b, c, d, e);
    }
  }
}
function Ef() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Df(a, arguments[1], J(a));
    case 3:
      return Df(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Df(a, b, c) {
  return Hf(null, a, b, c, null);
}
function If(a, b) {
  return a === b.L ? b : new Xe(a, Fa(b.e));
}
function vf(a) {
  return new Xe({}, Fa(a.e));
}
function wf(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  bd(a, 0, b, 0, a.length);
  return b;
}
var Jf = function Jf(b, c, d, e) {
  d = If(b.root.L, d);
  var f = b.i - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.e[f];
    b = null != h ? Jf(b, c - 5, h, e) : $e(b.root.L, c - 5, e);
  }
  d.e[f] = b;
  return d;
};
function mf(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.ka = d;
  this.u = 88;
  this.g = 275;
}
g = mf.prototype;
g.gb = function(a, b) {
  if (this.root.L) {
    if (32 > this.i - Ze(this)) {
      this.ka[this.i & 31] = b;
    } else {
      var c = new Xe(this.root.L, this.ka), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ka = d;
      if (this.i >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = $e(this.root.L, this.shift, c);
        this.root = new Xe(this.root.L, d);
        this.shift = e;
      } else {
        this.root = Jf(this, this.shift, this.root, c);
      }
    }
    this.i += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.hb = function() {
  if (this.root.L) {
    this.root.L = null;
    var a = this.i - Ze(this), b = Array(a);
    bd(this.ka, 0, b, 0, a);
    return new S(null, this.i, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.Bb = function(a, b, c) {
  if ("number" === typeof b) {
    return Mb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Qc = function(a, b, c) {
  var d = this;
  if (d.root.L) {
    if (0 <= b && b < d.i) {
      return Ze(this) <= b ? d.ka[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = If(d.root.L, k);
          if (0 === a) {
            l.e[b & 31] = c;
          } else {
            var n = b >>> a & 31, r = f(a - 5, l.e[n]);
            l.e[n] = r;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.i) {
      return Jb(this, c);
    }
    throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.i)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.K = function() {
  if (this.root.L) {
    return this.i;
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  if (this.root.L) {
    return df(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.i ? x.a(this, b) : c;
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return "number" === typeof b ? x.c(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.B(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
function Kf() {
  this.g = 2097152;
  this.u = 0;
}
Kf.prototype.equiv = function(a) {
  return this.r(null, a);
};
Kf.prototype.r = function() {
  return!1;
};
var Lf = new Kf;
function Mf(a, b) {
  return ed(Yc(b) ? J(a) === J(b) ? le(od, Ee.a(function(a) {
    return F.a(L.c(b, C(a), Lf), C(E(a)));
  }, a)) : null : null);
}
function Nf(a) {
  this.v = a;
}
Nf.prototype.next = function() {
  if (null != this.v) {
    var a = C(this.v), b = K(a, 0, null), a = K(a, 1, null);
    this.v = E(this.v);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Of(a) {
  return new Nf(A(a));
}
function Pf(a) {
  this.v = a;
}
Pf.prototype.next = function() {
  if (null != this.v) {
    var a = C(this.v);
    this.v = E(this.v);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function Qf(a, b) {
  var c;
  if (b instanceof P) {
    a: {
      c = a.length;
      for (var d = b.ga, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof P && d === f.ga) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = ba(b), p(p(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof y) {
        a: {
          for (c = a.length, d = b.xa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof y && d === f.xa) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (F.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Rf(a, b, c) {
  this.e = a;
  this.j = b;
  this.k = c;
  this.g = 32374990;
  this.u = 0;
}
g = Rf.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.k;
};
g.V = function() {
  return this.j < this.e.length - 2 ? new Rf(this.e, this.j + 2, this.k) : null;
};
g.K = function() {
  return(this.e.length - this.j) / 2;
};
g.A = function() {
  return pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.k);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return new S(null, 2, 5, T, [this.e[this.j], this.e[this.j + 1]], null);
};
g.ba = function() {
  return this.j < this.e.length - 2 ? new Rf(this.e, this.j + 2, this.k) : jc;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Rf(this.e, this.j, b);
};
g.H = function(a, b) {
  return I(b, this);
};
Rf.prototype[Ea] = function() {
  return nc(this);
};
function Sf(a, b, c) {
  this.e = a;
  this.j = b;
  this.i = c;
}
Sf.prototype.ua = function() {
  return this.j < this.i;
};
Sf.prototype.next = function() {
  var a = new S(null, 2, 5, T, [this.e[this.j], this.e[this.j + 1]], null);
  this.j += 2;
  return a;
};
function ta(a, b, c, d) {
  this.n = a;
  this.i = b;
  this.e = c;
  this.l = d;
  this.g = 16647951;
  this.u = 8196;
}
g = ta.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.keys = function() {
  return nc(Uf.b ? Uf.b(this) : Uf.call(null, this));
};
g.entries = function() {
  return Of(A(this));
};
g.values = function() {
  return nc(Vf.b ? Vf.b(this) : Vf.call(null, this));
};
g.has = function(a) {
  return fd(this, a);
};
g.get = function(a, b) {
  return this.B(null, a, b);
};
g.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), h = K(f, 0, null), f = K(f, 1, null);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = A(b)) {
        $c(b) ? (c = Ob(b), b = Qb(b), h = c, d = J(c), c = h) : (c = C(b), h = K(c, 0, null), c = f = K(c, 1, null), a.a ? a.a(c, h) : a.call(null, c, h), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  a = Qf(this.e, b);
  return-1 === a ? c : this.e[a + 1];
};
g.Mb = !0;
g.zb = function() {
  return new Sf(this.e, 0, 2 * this.i);
};
g.D = function() {
  return this.n;
};
g.K = function() {
  return this.i;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = rc(this);
};
g.r = function(a, b) {
  if (b && (b.g & 1024 || b.pd)) {
    var c = this.e.length;
    if (this.i === b.K(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.B(null, this.e[d], cd);
          if (e !== cd) {
            if (F.a(this.e[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Mf(this, b);
  }
};
g.ob = function() {
  return new Wf({}, this.e.length, Fa(this.e));
};
g.Y = function() {
  return ob($d, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.ta = function(a, b) {
  if (0 <= Qf(this.e, b)) {
    var c = this.e.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ta(this.n, this.i - 1, d, null);
      }
      F.a(b, this.e[e]) || (d[f] = this.e[e], d[f + 1] = this.e[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ma = function(a, b, c) {
  a = Qf(this.e, b);
  if (-1 === a) {
    if (this.i < Xf) {
      a = this.e;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ta(this.n, this.i + 1, e, null);
    }
    return ob(Za(Re.a(Yf, this), b, c), this.n);
  }
  if (c === this.e[a + 1]) {
    return this;
  }
  b = Fa(this.e);
  b[a + 1] = c;
  return new ta(this.n, this.i, b, null);
};
g.xb = function(a, b) {
  return-1 !== Qf(this.e, b);
};
g.J = function() {
  var a = this.e;
  return 0 <= a.length - 2 ? new Rf(a, 0, null) : null;
};
g.G = function(a, b) {
  return new ta(b, this.i, this.e, this.l);
};
g.H = function(a, b) {
  if (Zc(b)) {
    return Za(this, x.a(b, 0), x.a(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (Zc(e)) {
      c = Za(c, x.a(e, 0), x.a(e, 1)), d = E(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.B(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
var $d = new ta(null, 0, [], sc), Xf = 8;
ta.prototype[Ea] = function() {
  return nc(this);
};
function Wf(a, b, c) {
  this.qb = a;
  this.sb = b;
  this.e = c;
  this.g = 258;
  this.u = 56;
}
g = Wf.prototype;
g.K = function() {
  if (p(this.qb)) {
    return ud(this.sb);
  }
  throw Error("count after persistent!");
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  if (p(this.qb)) {
    return a = Qf(this.e, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.gb = function(a, b) {
  if (p(this.qb)) {
    if (b ? b.g & 2048 || b.qd || (b.g ? 0 : q(bb, b)) : q(bb, b)) {
      return Lb(this, yd.b ? yd.b(b) : yd.call(null, b), zd.b ? zd.b(b) : zd.call(null, b));
    }
    for (var c = A(b), d = this;;) {
      var e = C(c);
      if (p(e)) {
        var f = e, c = E(c), d = Lb(d, function() {
          var a = f;
          return yd.b ? yd.b(a) : yd.call(null, a);
        }(), function() {
          var a = f;
          return zd.b ? zd.b(a) : zd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.hb = function() {
  if (p(this.qb)) {
    return this.qb = !1, new ta(null, ud(this.sb), this.e, null);
  }
  throw Error("persistent! called twice");
};
g.Bb = function(a, b, c) {
  if (p(this.qb)) {
    a = Qf(this.e, b);
    if (-1 === a) {
      if (this.sb + 2 <= 2 * Xf) {
        return this.sb += 2, this.e.push(b), this.e.push(c), this;
      }
      a = this.sb;
      var d = this.e;
      a = Zf.a ? Zf.a(a, d) : Zf.call(null, a, d);
      return Lb(a, b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Zf(a, b) {
  for (var c = Ib(Yf), d = 0;;) {
    if (d < a) {
      c = Lb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function $f() {
  this.qa = !1;
}
function ag(a, b) {
  return a === b ? !0 : Q(a, b) ? !0 : F.a(a, b);
}
function bg(a, b, c) {
  a = Fa(a);
  a[b] = c;
  return a;
}
function cg(a, b) {
  var c = Array(a.length - 2);
  bd(a, 0, c, 0, 2 * b);
  bd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function dg(a, b, c, d) {
  a = a.ib(b);
  a.e[c] = d;
  return a;
}
function eg(a, b, c) {
  this.L = a;
  this.M = b;
  this.e = c;
}
g = eg.prototype;
g.ib = function(a) {
  if (a === this.L) {
    return this;
  }
  var b = vd(this.M), c = Array(0 > b ? 4 : 2 * (b + 1));
  bd(this.e, 0, c, 0, 2 * b);
  return new eg(a, this.M, c);
};
g.Eb = function() {
  var a = this.e;
  return fg ? fg(a) : gg.call(null, a);
};
g.Za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.M & e)) {
    return d;
  }
  var f = vd(this.M & e - 1), e = this.e[2 * f], f = this.e[2 * f + 1];
  return null == e ? f.Za(a + 5, b, c, d) : ag(c, e) ? f : d;
};
g.sa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = vd(this.M & h - 1);
  if (0 === (this.M & h)) {
    var l = vd(this.M);
    if (2 * l < this.e.length) {
      a = this.ib(a);
      b = a.e;
      f.qa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.M |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = hg.sa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.M >>> d & 1) && (k[d] = null != this.e[e] ? hg.sa(a, b + 5, fc(this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ig(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    bd(this.e, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    bd(this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.qa = !0;
    a = this.ib(a);
    a.e = b;
    a.M |= h;
    return a;
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  if (null == l) {
    return l = h.sa(a, b + 5, c, d, e, f), l === h ? this : dg(this, a, 2 * k + 1, l);
  }
  if (ag(d, l)) {
    return e === h ? this : dg(this, a, 2 * k + 1, e);
  }
  f.qa = !0;
  f = b + 5;
  d = jg ? jg(a, f, l, h, c, d, e) : kg.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.ib(a);
  a.e[e] = null;
  a.e[k] = d;
  return a;
};
g.ra = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = vd(this.M & f - 1);
  if (0 === (this.M & f)) {
    var k = vd(this.M);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = hg.ra(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.M >>> c & 1) && (h[c] = null != this.e[d] ? hg.ra(a + 5, fc(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ig(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    bd(this.e, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    bd(this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.qa = !0;
    return new eg(null, this.M | f, a);
  }
  var l = this.e[2 * h], f = this.e[2 * h + 1];
  if (null == l) {
    return k = f.ra(a + 5, b, c, d, e), k === f ? this : new eg(null, this.M, bg(this.e, 2 * h + 1, k));
  }
  if (ag(c, l)) {
    return d === f ? this : new eg(null, this.M, bg(this.e, 2 * h + 1, d));
  }
  e.qa = !0;
  e = this.M;
  k = this.e;
  a += 5;
  a = lg ? lg(a, l, f, b, c, d) : kg.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Fa(k);
  d[c] = null;
  d[h] = a;
  return new eg(null, e, d);
};
g.Fb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.M & d)) {
    return this;
  }
  var e = vd(this.M & d - 1), f = this.e[2 * e], h = this.e[2 * e + 1];
  return null == f ? (a = h.Fb(a + 5, b, c), a === h ? this : null != a ? new eg(null, this.M, bg(this.e, 2 * e + 1, a)) : this.M === d ? null : new eg(null, this.M ^ d, cg(this.e, e))) : ag(c, f) ? new eg(null, this.M ^ d, cg(this.e, e)) : this;
};
var hg = new eg(null, 0, []);
function ig(a, b, c) {
  this.L = a;
  this.i = b;
  this.e = c;
}
g = ig.prototype;
g.ib = function(a) {
  return a === this.L ? this : new ig(a, this.i, Fa(this.e));
};
g.Eb = function() {
  var a = this.e;
  return mg ? mg(a) : ng.call(null, a);
};
g.Za = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Za(a + 5, b, c, d) : d;
};
g.sa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.e[h];
  if (null == k) {
    return a = dg(this, a, h, hg.sa(a, b + 5, c, d, e, f)), a.i += 1, a;
  }
  b = k.sa(a, b + 5, c, d, e, f);
  return b === k ? this : dg(this, a, h, b);
};
g.ra = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.e[f];
  if (null == h) {
    return new ig(null, this.i + 1, bg(this.e, f, hg.ra(a + 5, b, c, d, e)));
  }
  a = h.ra(a + 5, b, c, d, e);
  return a === h ? this : new ig(null, this.i, bg(this.e, f, a));
};
g.Fb = function(a, b, c) {
  var d = b >>> a & 31, e = this.e[d];
  if (null != e) {
    a = e.Fb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.i) {
          a: {
            e = this.e;
            a = e.length;
            b = Array(2 * (this.i - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new eg(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new ig(null, this.i - 1, bg(this.e, d, a));
        }
      } else {
        d = new ig(null, this.i, bg(this.e, d, a));
      }
    }
    return d;
  }
  return this;
};
function og(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ag(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function pg(a, b, c, d) {
  this.L = a;
  this.Pa = b;
  this.i = c;
  this.e = d;
}
g = pg.prototype;
g.ib = function(a) {
  if (a === this.L) {
    return this;
  }
  var b = Array(2 * (this.i + 1));
  bd(this.e, 0, b, 0, 2 * this.i);
  return new pg(a, this.Pa, this.i, b);
};
g.Eb = function() {
  var a = this.e;
  return fg ? fg(a) : gg.call(null, a);
};
g.Za = function(a, b, c, d) {
  a = og(this.e, this.i, c);
  return 0 > a ? d : ag(c, this.e[a]) ? this.e[a + 1] : d;
};
g.sa = function(a, b, c, d, e, f) {
  if (c === this.Pa) {
    b = og(this.e, this.i, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.i) {
        return b = 2 * this.i, c = 2 * this.i + 1, a = this.ib(a), a.e[b] = d, a.e[c] = e, f.qa = !0, a.i += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      bd(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.qa = !0;
      d = this.i + 1;
      a === this.L ? (this.e = b, this.i = d, a = this) : a = new pg(this.L, this.Pa, d, b);
      return a;
    }
    return this.e[b + 1] === e ? this : dg(this, a, b + 1, e);
  }
  return(new eg(a, 1 << (this.Pa >>> b & 31), [null, this, null, null])).sa(a, b, c, d, e, f);
};
g.ra = function(a, b, c, d, e) {
  return b === this.Pa ? (a = og(this.e, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), bd(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.qa = !0, new pg(null, this.Pa, this.i + 1, b)) : F.a(this.e[a], d) ? this : new pg(null, this.Pa, this.i, bg(this.e, a + 1, d))) : (new eg(null, 1 << (this.Pa >>> a & 31), [null, this])).ra(a, b, c, d, e);
};
g.Fb = function(a, b, c) {
  a = og(this.e, this.i, c);
  return-1 === a ? this : 1 === this.i ? null : new pg(null, this.Pa, this.i - 1, cg(this.e, ud(a)));
};
function kg() {
  switch(arguments.length) {
    case 6:
      return lg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return jg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function lg(a, b, c, d, e, f) {
  var h = fc(b);
  if (h === d) {
    return new pg(null, h, 2, [b, c, e, f]);
  }
  var k = new $f;
  return hg.ra(a, h, b, c, k).ra(a, d, e, f, k);
}
function jg(a, b, c, d, e, f, h) {
  var k = fc(c);
  if (k === e) {
    return new pg(null, k, 2, [c, d, f, h]);
  }
  var l = new $f;
  return hg.sa(a, b, k, c, d, l).sa(a, b, e, f, h, l);
}
function qg(a, b, c, d, e) {
  this.n = a;
  this.$a = b;
  this.j = c;
  this.v = d;
  this.l = e;
  this.g = 32374860;
  this.u = 0;
}
g = qg.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return null == this.v ? new S(null, 2, 5, T, [this.$a[this.j], this.$a[this.j + 1]], null) : C(this.v);
};
g.ba = function() {
  if (null == this.v) {
    var a = this.$a, b = this.j + 2;
    return rg ? rg(a, b, null) : gg.call(null, a, b, null);
  }
  var a = this.$a, b = this.j, c = E(this.v);
  return rg ? rg(a, b, c) : gg.call(null, a, b, c);
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new qg(b, this.$a, this.j, this.v, this.l);
};
g.H = function(a, b) {
  return I(b, this);
};
qg.prototype[Ea] = function() {
  return nc(this);
};
function gg() {
  switch(arguments.length) {
    case 1:
      return fg(arguments[0]);
    case 3:
      return rg(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function fg(a) {
  return rg(a, 0, null);
}
function rg(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new qg(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (p(d) && (d = d.Eb(), p(d))) {
          return new qg(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new qg(null, a, b, c, null);
  }
}
function sg(a, b, c, d, e) {
  this.n = a;
  this.$a = b;
  this.j = c;
  this.v = d;
  this.l = e;
  this.g = 32374860;
  this.u = 0;
}
g = sg.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.n;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return C(this.v);
};
g.ba = function() {
  var a = this.$a, b = this.j, c = E(this.v);
  return tg ? tg(null, a, b, c) : ng.call(null, null, a, b, c);
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new sg(b, this.$a, this.j, this.v, this.l);
};
g.H = function(a, b) {
  return I(b, this);
};
sg.prototype[Ea] = function() {
  return nc(this);
};
function ng() {
  switch(arguments.length) {
    case 1:
      return mg(arguments[0]);
    case 4:
      return tg(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function mg(a) {
  return tg(null, a, 0, null);
}
function tg(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (p(e) && (e = e.Eb(), p(e))) {
          return new sg(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new sg(a, b, c, d, null);
  }
}
function ug(a, b, c, d, e, f) {
  this.n = a;
  this.i = b;
  this.root = c;
  this.ja = d;
  this.na = e;
  this.l = f;
  this.g = 16123663;
  this.u = 8196;
}
g = ug.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.keys = function() {
  return nc(Uf.b ? Uf.b(this) : Uf.call(null, this));
};
g.entries = function() {
  return Of(A(this));
};
g.values = function() {
  return nc(Vf.b ? Vf.b(this) : Vf.call(null, this));
};
g.has = function(a) {
  return fd(this, a);
};
g.get = function(a, b) {
  return this.B(null, a, b);
};
g.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), h = K(f, 0, null), f = K(f, 1, null);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = A(b)) {
        $c(b) ? (c = Ob(b), b = Qb(b), h = c, d = J(c), c = h) : (c = C(b), h = K(c, 0, null), c = f = K(c, 1, null), a.a ? a.a(c, h) : a.call(null, c, h), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return null == b ? this.ja ? this.na : c : null == this.root ? c : this.root.Za(0, fc(b), b, c);
};
g.D = function() {
  return this.n;
};
g.K = function() {
  return this.i;
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = rc(this);
};
g.r = function(a, b) {
  return Mf(this, b);
};
g.ob = function() {
  return new vg({}, this.root, this.i, this.ja, this.na);
};
g.Y = function() {
  return ob(Yf, this.n);
};
g.ta = function(a, b) {
  if (null == b) {
    return this.ja ? new ug(this.n, this.i - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Fb(0, fc(b), b);
  return c === this.root ? this : new ug(this.n, this.i - 1, c, this.ja, this.na, null);
};
g.ma = function(a, b, c) {
  if (null == b) {
    return this.ja && c === this.na ? this : new ug(this.n, this.ja ? this.i : this.i + 1, this.root, !0, c, null);
  }
  a = new $f;
  b = (null == this.root ? hg : this.root).ra(0, fc(b), b, c, a);
  return b === this.root ? this : new ug(this.n, a.qa ? this.i + 1 : this.i, b, this.ja, this.na, null);
};
g.xb = function(a, b) {
  return null == b ? this.ja : null == this.root ? !1 : this.root.Za(0, fc(b), b, cd) !== cd;
};
g.J = function() {
  if (0 < this.i) {
    var a = null != this.root ? this.root.Eb() : null;
    return this.ja ? I(new S(null, 2, 5, T, [null, this.na], null), a) : a;
  }
  return null;
};
g.G = function(a, b) {
  return new ug(b, this.i, this.root, this.ja, this.na, this.l);
};
g.H = function(a, b) {
  if (Zc(b)) {
    return Za(this, x.a(b, 0), x.a(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (Zc(e)) {
      c = Za(c, x.a(e, 0), x.a(e, 1)), d = E(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.B(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
var Yf = new ug(null, 0, null, !1, null, sc);
function Rc(a, b) {
  for (var c = a.length, d = 0, e = Ib(Yf);;) {
    if (d < c) {
      var f = d + 1, e = e.Bb(null, a[d], b[d]), d = f
    } else {
      return Kb(e);
    }
  }
}
ug.prototype[Ea] = function() {
  return nc(this);
};
function vg(a, b, c, d, e) {
  this.L = a;
  this.root = b;
  this.count = c;
  this.ja = d;
  this.na = e;
  this.g = 258;
  this.u = 56;
}
function yg(a, b) {
  if (a.L) {
    if (b ? b.g & 2048 || b.qd || (b.g ? 0 : q(bb, b)) : q(bb, b)) {
      return zg(a, yd.b ? yd.b(b) : yd.call(null, b), zd.b ? zd.b(b) : zd.call(null, b));
    }
    for (var c = A(b), d = a;;) {
      var e = C(c);
      if (p(e)) {
        var f = e, c = E(c), d = zg(d, function() {
          var a = f;
          return yd.b ? yd.b(a) : yd.call(null, a);
        }(), function() {
          var a = f;
          return zd.b ? zd.b(a) : zd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function zg(a, b, c) {
  if (a.L) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ja || (a.count += 1, a.ja = !0);
    } else {
      var d = new $f;
      b = (null == a.root ? hg : a.root).sa(a.L, 0, fc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.qa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = vg.prototype;
g.K = function() {
  if (this.L) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.I = function(a, b) {
  return null == b ? this.ja ? this.na : null : null == this.root ? null : this.root.Za(0, fc(b), b);
};
g.B = function(a, b, c) {
  return null == b ? this.ja ? this.na : c : null == this.root ? c : this.root.Za(0, fc(b), b, c);
};
g.gb = function(a, b) {
  return yg(this, b);
};
g.hb = function() {
  var a;
  if (this.L) {
    this.L = null, a = new ug(null, this.count, this.root, this.ja, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.Bb = function(a, b, c) {
  return zg(this, b, c);
};
var xe = function xe() {
  return xe.h(0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null);
};
xe.h = function(a) {
  for (var b = A(a), c = Ib(Yf);;) {
    if (b) {
      a = E(E(b));
      var d = C(b), b = C(E(b)), c = Lb(c, d, b), b = a;
    } else {
      return Kb(c);
    }
  }
};
xe.o = 0;
xe.s = function(a) {
  return xe.h(A(a));
};
function Ag(a, b) {
  this.ha = a;
  this.k = b;
  this.g = 32374988;
  this.u = 0;
}
g = Ag.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.k;
};
g.V = function() {
  var a = this.ha, a = (a ? a.g & 128 || a.Nb || (a.g ? 0 : q(Ta, a)) : q(Ta, a)) ? this.ha.V(null) : E(this.ha);
  return null == a ? null : new Ag(a, this.k);
};
g.A = function() {
  return pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.k);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return this.ha.N(null).kc();
};
g.ba = function() {
  var a = this.ha, a = (a ? a.g & 128 || a.Nb || (a.g ? 0 : q(Ta, a)) : q(Ta, a)) ? this.ha.V(null) : E(this.ha);
  return null != a ? new Ag(a, this.k) : jc;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Ag(this.ha, b);
};
g.H = function(a, b) {
  return I(b, this);
};
Ag.prototype[Ea] = function() {
  return nc(this);
};
function Uf(a) {
  return(a = A(a)) ? new Ag(a, null) : null;
}
function yd(a) {
  return cb(a);
}
function Bg(a, b) {
  this.ha = a;
  this.k = b;
  this.g = 32374988;
  this.u = 0;
}
g = Bg.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.D = function() {
  return this.k;
};
g.V = function() {
  var a = this.ha, a = (a ? a.g & 128 || a.Nb || (a.g ? 0 : q(Ta, a)) : q(Ta, a)) ? this.ha.V(null) : E(this.ha);
  return null == a ? null : new Bg(a, this.k);
};
g.A = function() {
  return pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.k);
};
g.Z = function(a, b) {
  return Jc(b, this);
};
g.$ = function(a, b, c) {
  return Lc(b, c, this);
};
g.N = function() {
  return this.ha.N(null).lc();
};
g.ba = function() {
  var a = this.ha, a = (a ? a.g & 128 || a.Nb || (a.g ? 0 : q(Ta, a)) : q(Ta, a)) ? this.ha.V(null) : E(this.ha);
  return null != a ? new Bg(a, this.k) : jc;
};
g.J = function() {
  return this;
};
g.G = function(a, b) {
  return new Bg(this.ha, b);
};
g.H = function(a, b) {
  return I(b, this);
};
Bg.prototype[Ea] = function() {
  return nc(this);
};
function Vf(a) {
  return(a = A(a)) ? new Bg(a, null) : null;
}
function zd(a) {
  return db(a);
}
function Cg(a) {
  return p(me(od, a)) ? nd(function(a, c) {
    return Mc.a(p(a) ? a : $d, c);
  }, a) : null;
}
function Dg(a, b, c) {
  this.n = a;
  this.jb = b;
  this.l = c;
  this.g = 15077647;
  this.u = 8196;
}
g = Dg.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.keys = function() {
  return nc(A(this));
};
g.entries = function() {
  var a = A(this);
  return new Pf(A(a));
};
g.values = function() {
  return nc(A(this));
};
g.has = function(a) {
  return fd(this, a);
};
g.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), h = K(f, 0, null), f = K(f, 1, null);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = A(b)) {
        $c(b) ? (c = Ob(b), b = Qb(b), h = c, d = J(c), c = h) : (c = C(b), h = K(c, 0, null), c = f = K(c, 1, null), a.a ? a.a(c, h) : a.call(null, c, h), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return Ya(this.jb, b) ? b : c;
};
g.D = function() {
  return this.n;
};
g.K = function() {
  return Ia(this.jb);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = rc(this);
};
g.r = function(a, b) {
  return Wc(b) && J(this) === J(b) && le(function(a) {
    return function(b) {
      return fd(a, b);
    };
  }(this), b);
};
g.ob = function() {
  return new Eg(Ib(this.jb));
};
g.Y = function() {
  return Hc(Fg, this.n);
};
g.Pc = function(a, b) {
  return new Dg(this.n, ab(this.jb, b), null);
};
g.J = function() {
  return Uf(this.jb);
};
g.G = function(a, b) {
  return new Dg(b, this.jb, this.l);
};
g.H = function(a, b) {
  return new Dg(this.n, Qc.c(this.jb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.B(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.B(null, a, b);
};
var Fg = new Dg(null, $d, sc);
Dg.prototype[Ea] = function() {
  return nc(this);
};
function Eg(a) {
  this.Va = a;
  this.u = 136;
  this.g = 259;
}
g = Eg.prototype;
g.gb = function(a, b) {
  this.Va = Lb(this.Va, b, null);
  return this;
};
g.hb = function() {
  return new Dg(null, Kb(this.Va), null);
};
g.K = function() {
  return J(this.Va);
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  return Xa.c(this.Va, b, cd) === cd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Xa.c(this.Va, b, cd) === cd ? c : b;
  }
  function b(a, b) {
    return Xa.c(this.Va, b, cd) === cd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  return Xa.c(this.Va, a, cd) === cd ? null : a;
};
g.a = function(a, b) {
  return Xa.c(this.Va, a, cd) === cd ? b : a;
};
function Gg(a) {
  a = A(a);
  if (null == a) {
    return Fg;
  }
  if (a instanceof B && 0 === a.j) {
    a = a.e;
    a: {
      for (var b = 0, c = Ib(Fg);;) {
        if (b < a.length) {
          var d = b + 1, c = c.gb(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.hb(null);
  }
  for (d = Ib(Fg);;) {
    if (null != a) {
      b = a.V(null), d = d.gb(null, a.N(null)), a = b;
    } else {
      return d.hb(null);
    }
  }
}
function Hg(a) {
  for (var b = Nc;;) {
    if (E(a)) {
      b = Mc.a(b, C(a)), a = E(a);
    } else {
      return A(b);
    }
  }
}
function Jd(a) {
  if (a && (a.u & 4096 || a.sd)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Ig = function Ig() {
  switch(arguments.length) {
    case 2:
      return Ig.a(arguments[0], arguments[1]);
    case 3:
      return Ig.c(arguments[0], arguments[1], arguments[2]);
    default:
      return Ig.h(arguments[0], arguments[1], arguments[2], new B(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Ig.a = function(a, b) {
  return b;
};
Ig.c = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) < (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
Ig.h = function(a, b, c, d) {
  return ld(function(b, c) {
    return Ig.c(a, b, c);
  }, Ig.c(a, b, c), d);
};
Ig.s = function(a) {
  var b = C(a), c = E(a);
  a = C(c);
  var d = E(c), c = C(d), d = E(d);
  return Ig.h(b, a, c, d);
};
Ig.o = 3;
function Jg(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
Jg.prototype.ua = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
Jg.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function Kg(a, b, c, d, e) {
  this.n = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = e;
  this.g = 32375006;
  this.u = 8192;
}
g = Kg.prototype;
g.toString = function() {
  return Xb(this);
};
g.equiv = function(a) {
  return this.r(null, a);
};
g.w = function(a, b) {
  if (b < Ia(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.fa = function(a, b, c) {
  return b < Ia(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.Mb = !0;
g.zb = function() {
  return new Jg(this.start, this.end, this.step);
};
g.D = function() {
  return this.n;
};
g.V = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Kg(this.n, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Kg(this.n, this.start + this.step, this.end, this.step, null) : null;
};
g.K = function() {
  if (Ba(zb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = pc(this);
};
g.r = function(a, b) {
  return Ec(this, b);
};
g.Y = function() {
  return Hc(jc, this.n);
};
g.Z = function(a, b) {
  return vc(this, b);
};
g.$ = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (uc(c)) {
        return b = c, G.b ? G.b(b) : G.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.N = function() {
  return null == zb(this) ? null : this.start;
};
g.ba = function() {
  return null != zb(this) ? new Kg(this.n, this.start + this.step, this.end, this.step, null) : jc;
};
g.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.G = function(a, b) {
  return new Kg(b, this.start, this.end, this.step, this.l);
};
g.H = function(a, b) {
  return I(b, this);
};
Kg.prototype[Ea] = function() {
  return nc(this);
};
function Lg(a, b) {
  return new Kg(null, 0, a, b, null);
}
function Mg() {
  var a = Ng, b = Og, c = Pg, d = Gc([Qg], 0);
  return function(a) {
    return function() {
      function b(c, d, f) {
        return ld(function() {
          return function(a, b) {
            return Mc.a(a, b.c ? b.c(c, d, f) : b.call(null, c, d, f));
          };
        }(a), Nc, a);
      }
      function c(b, d) {
        return ld(function() {
          return function(a, c) {
            return Mc.a(a, c.a ? c.a(b, d) : c.call(null, b, d));
          };
        }(a), Nc, a);
      }
      function d(b) {
        return ld(function() {
          return function(a, c) {
            return Mc.a(a, c.b ? c.b(b) : c.call(null, b));
          };
        }(a), Nc, a);
      }
      function l() {
        return ld(function() {
          return function(a, b) {
            return Mc.a(a, b.p ? b.p() : b.call(null));
          };
        }(a), Nc, a);
      }
      var n = null, r = function() {
        function b(a, d, e, f) {
          var h = null;
          if (3 < arguments.length) {
            for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
              k[h] = arguments[h + 3], ++h;
            }
            h = new B(k, 0);
          }
          return c.call(this, a, d, e, h);
        }
        function c(b, d, f, h) {
          return ld(function() {
            return function(a, c) {
              return Mc.a(a, O.C(c, b, d, f, h));
            };
          }(a), Nc, a);
        }
        b.o = 3;
        b.s = function(a) {
          var b = C(a);
          a = E(a);
          var d = C(a);
          a = E(a);
          var e = C(a);
          a = ic(a);
          return c(b, d, e, a);
        };
        b.h = c;
        return b;
      }(), n = function(a, e, n, D) {
        switch(arguments.length) {
          case 0:
            return l.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, e);
          case 3:
            return b.call(this, a, e, n);
          default:
            var H = null;
            if (3 < arguments.length) {
              for (var H = 0, M = Array(arguments.length - 3);H < M.length;) {
                M[H] = arguments[H + 3], ++H;
              }
              H = new B(M, 0);
            }
            return r.h(a, e, n, H);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      n.o = 3;
      n.s = r.s;
      n.p = l;
      n.b = d;
      n.a = c;
      n.c = b;
      n.h = r.h;
      return n;
    }();
  }(I(a, I(b, I(c, d))));
}
function Rg(a, b, c, d, e, f, h) {
  var k = qa;
  qa = null == qa ? null : qa - 1;
  try {
    if (null != qa && 0 > qa) {
      return Eb(a, "#");
    }
    Eb(a, c);
    if (0 === ya.b(f)) {
      A(h) && Eb(a, function() {
        var a = Sg.b(f);
        return p(a) ? a : "...";
      }());
    } else {
      if (A(h)) {
        var l = C(h);
        b.c ? b.c(l, a, f) : b.call(null, l, a, f);
      }
      for (var n = E(h), r = ya.b(f) - 1;;) {
        if (!n || null != r && 0 === r) {
          A(n) && 0 === r && (Eb(a, d), Eb(a, function() {
            var a = Sg.b(f);
            return p(a) ? a : "...";
          }()));
          break;
        } else {
          Eb(a, d);
          var t = C(n);
          c = a;
          h = f;
          b.c ? b.c(t, c, h) : b.call(null, t, c, h);
          var w = E(n);
          c = r - 1;
          n = w;
          r = c;
        }
      }
    }
    return Eb(a, e);
  } finally {
    qa = k;
  }
}
function Tg(a, b) {
  for (var c = A(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.w(null, f);
      Eb(a, h);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, $c(d) ? (c = Ob(d), e = Qb(d), d = c, h = J(c), c = e, e = h) : (h = C(d), Eb(a, h), c = E(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Ug = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Vg(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ug[a];
  })), v('"')].join("");
}
function Wg(a, b, c) {
  if (null == a) {
    return Eb(b, "nil");
  }
  if (void 0 === a) {
    return Eb(b, "#\x3cundefined\x3e");
  }
  if (p(function() {
    var b = L.a(c, wa);
    return p(b) ? (b = a ? a.g & 131072 || a.rd ? !0 : a.g ? !1 : q(lb, a) : q(lb, a)) ? Vc(a) : b : b;
  }())) {
    Eb(b, "^");
    var d = Vc(a);
    Xg.c ? Xg.c(d, b, c) : Xg.call(null, d, b, c);
    Eb(b, " ");
  }
  return null == a ? Eb(b, "nil") : a.Uc ? a.Ad(b) : a && (a.g & 2147483648 || a.W) ? a.F(null, b, c) : Ca(a) === Boolean || "number" === typeof a ? Eb(b, "" + v(a)) : null != a && a.constructor === Object ? (Eb(b, "#js "), d = Ee.a(function(b) {
    return new S(null, 2, 5, T, [Id.b(b), a[b]], null);
  }, ad(a)), Yg.q ? Yg.q(d, Xg, b, c) : Yg.call(null, d, Xg, b, c)) : Aa(a) ? Rg(b, Xg, "#js [", " ", "]", c, a) : p(ba(a)) ? p(va.b(c)) ? Eb(b, Vg(a)) : Eb(b, a) : Tc(a) ? Tg(b, Gc(["#\x3c", "" + v(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + v(a);;) {
      if (J(c) < b) {
        c = [v("0"), v(c)].join("");
      } else {
        return c;
      }
    }
  }, Tg(b, Gc(['#inst "', "" + v(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : p(a instanceof RegExp) ? Tg(b, Gc(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.W || (a.g ? 0 : q(Fb, a)) : q(Fb, a)) ? Gb(a, b, c) : Tg(b, Gc(["#\x3c", "" + v(a), "\x3e"], 0));
}
function Xg(a, b, c) {
  var d = Zg.b(c);
  return p(d) ? (c = Qc.c(c, $g, Wg), d.c ? d.c(a, b, c) : d.call(null, a, b, c)) : Wg(a, b, c);
}
function ah(a, b) {
  var c;
  if (null == a || Ba(A(a))) {
    c = "";
  } else {
    c = v;
    var d = new ha;
    a: {
      var e = new Wb(d);
      Xg(C(a), e, b);
      for (var f = A(E(a)), h = null, k = 0, l = 0;;) {
        if (l < k) {
          var n = h.w(null, l);
          Eb(e, " ");
          Xg(n, e, b);
          l += 1;
        } else {
          if (f = A(f)) {
            h = f, $c(h) ? (f = Ob(h), k = Qb(h), h = f, n = J(f), f = k, k = n) : (n = C(h), Eb(e, " "), Xg(n, e, b), f = E(h), h = null, k = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function Ce() {
  return bh(0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function bh(a) {
  return ah(a, sa());
}
function ch(a) {
  var b = Qc.c(sa(), va, !1);
  a = ah(a, b);
  pa.b ? pa.b(a) : pa.call(null);
  p(!0) && (a = sa(), pa.b ? pa.b("\n") : pa.call(null), L.a(a, ua));
}
function Yg(a, b, c, d) {
  return Rg(c, function(a, c, d) {
    var k = cb(a);
    b.c ? b.c(k, c, d) : b.call(null, k, c, d);
    Eb(c, " ");
    a = db(a);
    return b.c ? b.c(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, A(a));
}
B.prototype.W = !0;
B.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Kd.prototype.W = !0;
Kd.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
qg.prototype.W = !0;
qg.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Rf.prototype.W = !0;
Rf.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Cf.prototype.W = !0;
Cf.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Gd.prototype.W = !0;
Gd.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Dc.prototype.W = !0;
Dc.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
ug.prototype.W = !0;
ug.prototype.F = function(a, b, c) {
  return Yg(this, Xg, b, c);
};
sg.prototype.W = !0;
sg.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Gf.prototype.W = !0;
Gf.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "[", " ", "]", c, this);
};
Dg.prototype.W = !0;
Dg.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "#{", " ", "}", c, this);
};
Pd.prototype.W = !0;
Pd.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
se.prototype.W = !0;
se.prototype.F = function(a, b, c) {
  Eb(b, "#\x3cAtom: ");
  Xg(this.state, b, c);
  return Eb(b, "\x3e");
};
Bg.prototype.W = !0;
Bg.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
S.prototype.W = !0;
S.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "[", " ", "]", c, this);
};
Bd.prototype.W = !0;
Bd.prototype.F = function(a, b) {
  return Eb(b, "()");
};
je.prototype.W = !0;
je.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
ta.prototype.W = !0;
ta.prototype.F = function(a, b, c) {
  return Yg(this, Xg, b, c);
};
Kg.prototype.W = !0;
Kg.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Ag.prototype.W = !0;
Ag.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
Ad.prototype.W = !0;
Ad.prototype.F = function(a, b, c) {
  return Rg(b, Xg, "(", " ", ")", c, this);
};
y.prototype.yb = !0;
y.prototype.fb = function(a, b) {
  return hc(this, b);
};
P.prototype.yb = !0;
P.prototype.fb = function(a, b) {
  return Hd(this, b);
};
Gf.prototype.yb = !0;
Gf.prototype.fb = function(a, b) {
  return hd(this, b);
};
S.prototype.yb = !0;
S.prototype.fb = function(a, b) {
  return hd(this, b);
};
function dh(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return uc(d) ? new tc(d) : d;
  };
}
function Oe(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return ld(b, a, c);
      }
      function d(b) {
        return a.b ? a.b(b) : a.call(null, b);
      }
      function e() {
        return a.p ? a.p() : a.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.p = e;
      f.b = d;
      f.a = c;
      return f;
    }();
  }(dh(a));
}
function eh(a) {
  return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
}
function fh() {
  var a = J(gh), a = (Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
  return Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a);
}
;var hh = new P(null, "y", "y", -1757859776), ih = new P(null, "draw-distortion", "draw-distortion", 1251697728), jh = new P(null, "key-code", "key-code", -1732114304), kh = new P(null, "shift", "shift", 997140064), lh = new P(null, "features", "features", -1146962336), mh = new P(null, "xzx", "xzx", -1000197983), nh = new P(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), oh = new P(null, "xyz", "xyz", -1605570015), ph = new P(null, "num", "num", 1985240673), qh = new P(null, 
"down", "down", 1565245570), rh = new P(null, "frame-bone-randomization", "frame-bone-randomization", -1682058078), sh = new P(null, "enable-retina-pixels", "enable-retina-pixels", 1018316034), th = new P(null, "disable-depth-mask", "disable-depth-mask", 3298562), uh = new P(null, "p-y", "p-y", -530704830), vh = new P(null, "zzy", "zzy", -874287326), wh = new P(null, "r", "r", -471384190), xh = new P(null, "two-phase-shapes", "two-phase-shapes", 2072100770), yh = new P(null, "bottom-margin", "bottom-margin", 
-701300733), zh = new P(null, "vertices", "vertices", 2008905731), Ah = new P(null, "burn", "burn", -458179293), Bh = new P(null, "indent", "indent", -148200125), Ch = new P(null, "key-typed", "key-typed", -876037597), Dh = new P(null, "mouse-clicked", "mouse-clicked", -199339421), Eh = new P(null, "mouse-released", "mouse-released", -664480061), Fh = new P(null, "fn", "fn", -1175266204), Gh = new P(null, "f8", "f8", -2141475484), wa = new P(null, "meta", "meta", 1499536964), Hh = new P(null, "outline-only", 
"outline-only", -86613436), Ih = new P(null, "draw-wings", "draw-wings", 1773456036), Jh = new P(null, "screen", "screen", 1990059748), Kh = new P(null, "bones", "bones", 546962276), Lh = new P(null, "enable-depth-test", "enable-depth-test", 1519326084), Mh = new P(null, "mouse-exited", "mouse-exited", -483205244), Nh = new P(null, "enable-depth-sort", "enable-depth-sort", -383089627), Oh = new P(null, "f1", "f1", 1714532389), Wh = new P(null, "right-bottom", "right-bottom", 1592300741), xa = new P(null, 
"dup", "dup", 556298533), Xh = new P(null, "java2d", "java2d", 166099237), ni = new P(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), oi = new P(null, "key", "key", -1516042587), pi = new P(null, "right-top", "right-top", -131588315), qi = new P(null, "darkest", "darkest", 68197253), ri = new P(null, "f10", "f10", 627525541), si = new P(null, "dodge", "dodge", -1556666427), ti = new P(null, "bottom", "bottom", -1550509018), Ng = new P(null, "tl", "tl", -35265210), ui = new P(null, 
"left-top", "left-top", -1366800826), vi = new P(null, "on-close", "on-close", -761178394), wi = new P(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), xi = new P(null, "replace", "replace", -786587770), yi = new P(null, "alt", "alt", -3214426), zi = new P(null, "x-length-range", "x-length-range", 836976903), Ai = new P(null, "button", "button", 1456579943), Bi = new P(null, "top", "top", -1856271961), Ci = new P(null, "mouse-wheel", "mouse-wheel", 1811662439), Ae = new P(null, "validator", 
"validator", -1966190681), Di = new P(null, "disable-depth-test", "disable-depth-test", 284606407), Ei = new P(null, "keyPressed", "keyPressed", 1791025256), Fi = new P(null, "yx", "yx", 1696579752), Gi = new P(null, "xy", "xy", -696978232), Hi = new P(null, "distortion", "distortion", -1620043992), Ii = new P(null, "yyz", "yyz", 1133968296), Ji = new P(null, "decor", "decor", -1730969431), Ki = new P(null, "w", "w", 354169001), Li = new P(null, "frames", "frames", 1765687497), Mi = new P(null, "m", 
"m", 1632677161), Ni = new P(null, "enable-stroke-perspective", "enable-stroke-perspective", -259923319), Oi = new P(null, "draw-bones", "draw-bones", 895788713), Pi = new P(null, "fault-config", "fault-config", 1386289929), Qi = new P(null, "zxy", "zxy", -1258840183), Ri = new P(null, "top-right", "top-right", 284698505), Si = new P(null, "xzy", "xzy", 1043177385), Ti = new P(null, "opengl", "opengl", -614998103), Ui = new P(null, "mouse-moved", "mouse-moved", -1918152310), Og = new P(null, "tr", 
"tr", -1424774646), Qg = new P(null, "bl", "bl", 8157834), Vi = new P(null, "zxz", "zxz", 1026042602), Wi = new P(null, "zx", "zx", -933582998), Xi = new P(null, "safe-draw-fn", "safe-draw-fn", 1454900202), Yi = new P(null, "enable-native-fonts", "enable-native-fonts", -1989072693), Zi = new P(null, "mouseOut", "mouseOut", -386669045), $i = new P(null, "xx", "xx", -1542203733), aj = new P(null, "f5", "f5", 1587057387), bj = new P(null, "command", "command", -894540724), cj = new P(null, "mouseScrolled", 
"mouseScrolled", 31878252), dj = new P(null, "x-spread-range", "x-spread-range", -1562027700), ej = new P(null, "update", "update", 1045576396), fj = new P(null, "top-left", "top-left", -1396159636), gj = new P(null, "max-angle", "max-angle", 1678039980), hj = new P(null, "xxx", "xxx", -1019301908), U = new P(null, "points", "points", -1486596883), $g = new P(null, "fallback-impl", "fallback-impl", -1501286995), ua = new P(null, "flush-on-newline", "flush-on-newline", -151457939), ij = new P(null, 
"mouseDragged", "mouseDragged", 129975181), jj = new P(null, "distortion-yresolution", "distortion-yresolution", -1901807667), kj = new P(null, "distance-bounds", "distance-bounds", 106176526), lj = new P(null, "close", "close", 1835149582), mj = new P(null, "angle", "angle", 1622094254), nj = new P(null, "zy", "zy", -1975963090), oj = new P(null, "y-length-range", "y-length-range", 596205326), pj = new P(null, "s", "s", 1705939918), qj = new P(null, "wings", "wings", 1281174478), rj = new P(null, 
"bottom-right", "bottom-right", 956401646), sj = new P(null, "zzx", "zzx", 20750383), tj = new P(null, "zyx", "zyx", 1752527951), uj = new P(null, "l", "l", 1395893423), vj = new P(null, "up", "up", -269712113), wj = new P(null, "renderer", "renderer", 336841071), xj = new P(null, "size", "size", 1098693007), yj = new P(null, "title", "title", 636505583), zj = new P(null, "distortion-field-step", "distortion-field-step", 1455645327), Aj = new P(null, "yzx", "yzx", -1496223025), Bj = new P(null, "center", 
"center", -748944368), Cj = new P(null, "setup", "setup", 1987730512), Dj = new P(null, "mouse-pressed", "mouse-pressed", 736955536), Ej = new P(null, "middleware", "middleware", 1462115504), Fj = new P(null, "round", "round", 2009433328), Gj = new P(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), Hj = new P(null, "bottom-left", "bottom-left", 1607421488), Ij = new P(null, "focus-gained", "focus-gained", -857086384), Jj = new P(null, "fault", "fault", -1838508432), Kj = new P(null, 
"rows", "rows", 850049680), va = new P(null, "readably", "readably", 1129599760), Lj = new P(null, "global-key-events", "global-key-events", 335064944), Sg = new P(null, "more-marker", "more-marker", -14717935), Mj = new P(null, "z", "z", -789527183), Nj = new P(null, "f11", "f11", -1417398799), Oj = new P(null, "yyx", "yyx", -1318218191), Pj = new P(null, "host", "host", -1558485167), Qj = new P(null, "cols", "cols", -1914801295), Rj = new P(null, "left-bottom", "left-bottom", -168045326), Sj = 
new P(null, "overlay", "overlay", -139131598), Tj = new P(null, "mouse-entered", "mouse-entered", 811350322), Uj = new P(null, "xz", "xz", 426487154), Vj = new P(null, "draw-frames", "draw-frames", -1090292366), Wj = new P(null, "zyz", "zyz", -1838068142), Xj = new P(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), Yj = new P(null, "sharpness", "sharpness", 333594482), Zj = new P(null, "yy", "yy", -1432012814), ak = new P(null, "enable-stroke-pure", "enable-stroke-pure", 881345587), 
bk = new P(null, "no-safe-draw", "no-safe-draw", -1157778157), ck = new P(null, "attribs", "attribs", -137878093), dk = new P(null, "mesh", "mesh", 456320595), ek = new P(null, "focus-lost", "focus-lost", -554849613), fk = new P(null, "f3", "f3", 1954829043), gk = new P(null, "xxz", "xxz", 129827699), hk = new P(null, "enable-depth-mask", "enable-depth-mask", 872785875), ik = new P(null, "key-pressed", "key-pressed", -757100364), jk = new P(null, "key-released", "key-released", 215919828), ya = new P(null, 
"print-length", "print-length", 1931866356), kk = new P(null, "f2", "f2", 396168596), lk = new P(null, "keyReleased", "keyReleased", 541714964), mk = new P(null, "control", "control", 1892578036), nk = new P(null, "difference", "difference", 1916101396), ok = new P(null, "yzy", "yzy", -179510251), pk = new P(null, "mouseClicked", "mouseClicked", 1764302965), qk = new P(null, "enable-optimized-stroke", "enable-optimized-stroke", 1537575253), rk = new P(null, "count", "count", 2139924085), sk = new P(null, 
"yz", "yz", 679015029), tk = new P(null, "p-x", "p-x", -1721211211), uk = new P(null, "p2d", "p2d", -2106175755), vk = new P(null, "yxx", "yxx", -332290091), wk = new P(null, "mouseReleased", "mouseReleased", 1116234838), xk = new P(null, "mousePressed", "mousePressed", 1776186454), yk = new P(null, "mouseMoved", "mouseMoved", -1936954058), zk = new P(null, "f12", "f12", 853352790), Ak = new P(null, "length", "length", 588987862), Bk = new P(null, "length-bounds", "length-bounds", 831941078), Ck = 
new P(null, "mouseOver", "mouseOver", -1334461930), Dk = new P(null, "exclusion", "exclusion", 531897910), Ek = new P(null, "xyy", "xyy", 996073014), Fk = new P(null, "xxy", "xxy", -650102026), Gk = new P(null, "b", "b", 1482224470), Hk = new P(null, "distortion-xresolution", "distortion-xresolution", -1556221865), Ik = new P(null, "bone-count", "bone-count", -686727049), Jk = new P(null, "disable-opengl-errors", "disable-opengl-errors", 506822839), Kk = new P(null, "unknown-key", "unknown-key", 
255305911), Lk = new P(null, "zz", "zz", 122901783), Mk = new P(null, "draw-fault", "draw-fault", 516596215), Nk = new P(null, "right", "right", -452581833), Ok = new P(null, "host-id", "host-id", 742376279), Pk = new P(null, "hard-light", "hard-light", -37591145), Qk = new P(null, "disable-retina-pixels", "disable-retina-pixels", -2049264713), Rk = new P(null, "keyTyped", "keyTyped", 1437329399), Sk = new P(null, "position", "position", -2011731912), Tk = new P(null, "no-start", "no-start", 1381488856), 
Uk = new P(null, "multiply", "multiply", -1036907048), Vk = new P(null, "distortion-intensity", "distortion-intensity", 706061880), Wk = new P(null, "dot-size", "dot-size", -228271528), Xk = new P(null, "lightest", "lightest", -2043115912), Yk = new P(null, "bite", "bite", -1462017416), Zk = new P(null, "faces", "faces", -73909544), Pg = new P(null, "br", "br", 934104792), $k = new P(null, "f7", "f7", 356150168), al = new P(null, "zzz", "zzz", -77420552), bl = new P(null, "t", "t", -1397832519), 
cl = new P(null, "x", "x", 2099068185), hl = new P(null, "blend", "blend", 249565561), il = new P(null, "disable-depth-sort", "disable-depth-sort", -1568352839), jl = new P(null, "spike", "spike", 615125657), kl = new P(null, "raw-key", "raw-key", -162482279), ll = new P(null, "target", "target", 253001721), ml = new P(null, "f9", "f9", 704633338), nl = new P(null, "draw", "draw", 1358331674), ol = new P(null, "add", "add", 235287739), pl = new P(null, "xzz", "xzz", -643126693), ql = new P(null, 
"soft-light", "soft-light", 513207899), Zg = new P(null, "alt-impl", "alt-impl", 670969595), Jl = new P(null, "subtract", "subtract", 2136988635), Kl = new P(null, "y-rand-percentage", "y-rand-percentage", 657723676), Ll = new P(null, "yxz", "yxz", 1786796508), Ml = new P(null, "wings-conf", "wings-conf", 942825980), Nl = new P(null, "inverted-spike", "inverted-spike", 1082584700), Ol = new P(null, "f6", "f6", 2103080604), Pl = new P(null, "zxx", "zxx", -61980804), Ql = new P(null, "f4", "f4", 990968764), 
Rl = new P(null, "yzz", "yzz", -1034441732), Sl = new P(null, "p", "p", 151049309), Tl = new P(null, "xyx", "xyx", 1899467293), Ul = new P(null, "yxy", "yxy", 1369901661), Vl = new P(null, "i", "i", -1386841315), Wl = new P(null, "fnormals", "fnormals", -1783998563), Xl = new P(null, "yyy", "yyy", 780595422), Yl = new P(null, "p3d", "p3d", -850380194), Zl = new P(null, "a", "a", -2123407586), $l = new P(null, "reverse", "reverse", -888455266), am = new P(null, "mouse-dragged", "mouse-dragged", -1220073441), 
bm = new P(null, "zyy", "zyy", 1946268991), cm = new P(null, "left", "left", -399115937), dm = new P(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671), em = new P(null, "u", "u", -1156634785), fm = new P(null, "disable-native-fonts", "disable-native-fonts", -931436705);
var gm = function gm(b) {
  if (b ? b.dc : b) {
    return b.dc(b);
  }
  var c;
  c = gm[m(null == b ? null : b)];
  if (!c && (c = gm._, !c)) {
    throw u("Decomposition.vertices", b);
  }
  return c.call(null, b);
}, hm = function hm(b) {
  if (b ? b.cc : b) {
    return b.cc(b);
  }
  var c;
  c = hm[m(null == b ? null : b)];
  if (!c && (c = hm._, !c)) {
    throw u("Decomposition.edges", b);
  }
  return c.call(null, b);
};
var im;
a: {
  var jm = aa.navigator;
  if (jm) {
    var km = jm.userAgent;
    if (km) {
      im = km;
      break a;
    }
  }
  im = "";
}
;var lm = -1 != im.indexOf("Opera") || -1 != im.indexOf("OPR"), mm = -1 != im.indexOf("Trident") || -1 != im.indexOf("MSIE"), nm = -1 != im.indexOf("Gecko") && -1 == im.toLowerCase().indexOf("webkit") && !(-1 != im.indexOf("Trident") || -1 != im.indexOf("MSIE")), om = -1 != im.toLowerCase().indexOf("webkit");
function pm() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var qm = function() {
  var a = "", b;
  if (lm && aa.opera) {
    return a = aa.opera.version, "function" == m(a) ? a() : a;
  }
  nm ? b = /rv\:([^\);]+)(\)|;)/ : mm ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : om && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(im)) ? a[1] : "");
  return mm && (b = pm(), b > parseFloat(a)) ? String(b) : a;
}(), rm = {};
function sm(a) {
  var b;
  if (!(b = rm[a])) {
    b = 0;
    for (var c = String(qm).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = l.exec(h) || ["", "", ""], t = n.exec(k) || ["", "", ""];
        if (0 == r[0].length && 0 == t[0].length) {
          break;
        }
        b = fa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || fa(0 == r[2].length, 0 == t[2].length) || fa(r[2], t[2]);
      } while (0 == b);
    }
    b = rm[a] = 0 <= b;
  }
  return b;
}
var tm = aa.document, um = tm && mm ? pm() || ("CSS1Compat" == tm.compatMode ? parseInt(qm, 10) : 5) : void 0;
!nm && !mm || mm && mm && 9 <= um || nm && sm("1.9.1");
mm && sm("9");
var vm = !mm || mm && 9 <= um, wm = mm && !sm("9");
!om || sm("528");
nm && sm("1.9b") || mm && sm("8") || lm && sm("9.5") || om && sm("528");
nm && !sm("8") || mm && sm("9");
function xm(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.oc = !1;
}
xm.prototype.stopPropagation = function() {
  this.oc = !0;
};
xm.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function ym(a) {
  ym[" "](a);
  return a;
}
ym[" "] = function() {
};
function zm(a, b) {
  xm.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Db = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (nm) {
        var e;
        a: {
          try {
            ym(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = om || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = om || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Db = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = xm.prototype;
  zm.Xc = xm.prototype;
  zm.prototype = new a;
  zm.prototype.constructor = zm;
  zm.Jb = function(a, c, d) {
    return xm.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
zm.prototype.stopPropagation = function() {
  zm.Xc.stopPropagation.call(this);
  this.Db.stopPropagation ? this.Db.stopPropagation() : this.Db.cancelBubble = !0;
};
zm.prototype.preventDefault = function() {
  zm.Xc.preventDefault.call(this);
  var a = this.Db;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, wm) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Am = "closure_listenable_" + (1E6 * Math.random() | 0), Bm = 0;
function Cm(a, b, c, d, e) {
  this.tb = a;
  this.Ob = null;
  this.src = b;
  this.type = c;
  this.fc = !!d;
  this.nc = e;
  this.key = ++Bm;
  this.Hb = this.ec = !1;
}
function Dm(a) {
  a.Hb = !0;
  a.tb = null;
  a.Ob = null;
  a.src = null;
  a.nc = null;
}
;function Em(a) {
  this.src = a;
  this.va = {};
  this.ac = 0;
}
Em.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.va[f];
  a || (a = this.va[f] = [], this.ac++);
  var h = Fm(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.ec = !1)) : (b = new Cm(b, this.src, f, !!d, e), b.ec = c, a.push(b));
  return b;
};
Em.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.va)) {
    return!1;
  }
  var e = this.va[a];
  b = Fm(e, b, c, d);
  return-1 < b ? (Dm(e[b]), ia.splice.call(e, b, 1), 0 == e.length && (delete this.va[a], this.ac--), !0) : !1;
};
function Fm(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Hb && f.tb == b && f.fc == !!c && f.nc == d) {
      return e;
    }
  }
  return-1;
}
;var Gm = "closure_lm_" + (1E6 * Math.random() | 0), Hm = {}, Im = 0;
function Jm() {
  var a = Km, b = vm ? function(c) {
    return a.call(b.src, b.tb, c);
  } : function(c) {
    c = a.call(b.src, b.tb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Lm(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Lm(a, b[f], c, d, e);
    }
  } else {
    if (c = Mm(c), a && a[Am]) {
      a.Qd(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = Nm(a);
      h || (a[Gm] = h = new Em(a));
      c = h.add(b, c, !0, d, e);
      c.Ob || (d = Jm(), c.Ob = d, d.src = a, d.tb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Om(b.toString()), d), Im++);
    }
  }
}
function Om(a) {
  return a in Hm ? Hm[a] : Hm[a] = "on" + a;
}
function Pm(a, b, c, d) {
  var e = 1;
  if (a = Nm(a)) {
    if (b = a.va[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.fc == c && !f.Hb && (e &= !1 !== Qm(f, d));
      }
    }
  }
  return Boolean(e);
}
function Qm(a, b) {
  var c = a.tb, d = a.nc || a.src;
  if (a.ec && "number" != typeof a && a && !a.Hb) {
    var e = a.src;
    if (e && e[Am]) {
      e.Rd(a);
    } else {
      var f = a.type, h = a.Ob;
      e.removeEventListener ? e.removeEventListener(f, h, a.fc) : e.detachEvent && e.detachEvent(Om(f), h);
      Im--;
      if (f = Nm(e)) {
        var h = a.type, k;
        if (k = h in f.va) {
          k = f.va[h];
          var l = ja(k, a), n;
          (n = 0 <= l) && ia.splice.call(k, l, 1);
          k = n;
        }
        k && (Dm(a), 0 == f.va[h].length && (delete f.va[h], f.ac--));
        0 == f.ac && (f.src = null, e[Gm] = null);
      } else {
        Dm(a);
      }
    }
  }
  return c.call(d, b);
}
function Km(a, b) {
  if (a.Hb) {
    return!0;
  }
  if (!vm) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new zm(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.oc && 0 <= k;k--) {
        c.currentTarget = e[k], d &= Pm(e[k], f, !0, c);
      }
      for (k = 0;!c.oc && k < e.length;k++) {
        c.currentTarget = e[k], d &= Pm(e[k], f, !1, c);
      }
    }
    return d;
  }
  return Qm(a, new zm(b, this));
}
function Nm(a) {
  a = a[Gm];
  return a instanceof Em ? a : null;
}
var Rm = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Mm(a) {
  if ("function" == m(a)) {
    return a;
  }
  a[Rm] || (a[Rm] = function(b) {
    return a.handleEvent(b);
  });
  return a[Rm];
}
;var Sm = function Sm() {
  switch(arguments.length) {
    case 1:
      return Sm.b(arguments[0]);
    case 2:
      return Sm.a(arguments[0], arguments[1]);
    case 3:
      return Sm.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Sm.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Sm.b = function(a) {
  if (a ? a.yc : a) {
    return a.yc(a);
  }
  var b;
  b = Sm[m(null == a ? null : a)];
  if (!b && (b = Sm._, !b)) {
    throw u("PMathOps.+", a);
  }
  return b.call(null, a);
};
Sm.a = function(a, b) {
  if (a ? a.Vb : a) {
    return a.Vb(a, b);
  }
  var c;
  c = Sm[m(null == a ? null : a)];
  if (!c && (c = Sm._, !c)) {
    throw u("PMathOps.+", a);
  }
  return c.call(null, a, b);
};
Sm.c = function(a, b, c) {
  if (a ? a.zc : a) {
    return a.zc(a, b, c);
  }
  var d;
  d = Sm[m(null == a ? null : a)];
  if (!d && (d = Sm._, !d)) {
    throw u("PMathOps.+", a);
  }
  return d.call(null, a, b, c);
};
Sm.q = function(a, b, c, d) {
  if (a ? a.bd : a) {
    return a.bd(0, b, c, d);
  }
  var e;
  e = Sm[m(null == a ? null : a)];
  if (!e && (e = Sm._, !e)) {
    throw u("PMathOps.+", a);
  }
  return e.call(null, a, b, c, d);
};
Sm.o = 4;
var Tm = function Tm() {
  switch(arguments.length) {
    case 1:
      return Tm.b(arguments[0]);
    case 2:
      return Tm.a(arguments[0], arguments[1]);
    case 3:
      return Tm.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Tm.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Tm.b = function(a) {
  if (a ? a.wc : a) {
    return a.wc(a);
  }
  var b;
  b = Tm[m(null == a ? null : a)];
  if (!b && (b = Tm._, !b)) {
    throw u("PMathOps.-", a);
  }
  return b.call(null, a);
};
Tm.a = function(a, b) {
  if (a ? a.Ub : a) {
    return a.Ub(a, b);
  }
  var c;
  c = Tm[m(null == a ? null : a)];
  if (!c && (c = Tm._, !c)) {
    throw u("PMathOps.-", a);
  }
  return c.call(null, a, b);
};
Tm.c = function(a, b, c) {
  if (a ? a.xc : a) {
    return a.xc(a, b, c);
  }
  var d;
  d = Tm[m(null == a ? null : a)];
  if (!d && (d = Tm._, !d)) {
    throw u("PMathOps.-", a);
  }
  return d.call(null, a, b, c);
};
Tm.q = function(a, b, c, d) {
  if (a ? a.ad : a) {
    return a.ad(0, b, c, d);
  }
  var e;
  e = Tm[m(null == a ? null : a)];
  if (!e && (e = Tm._, !e)) {
    throw u("PMathOps.-", a);
  }
  return e.call(null, a, b, c, d);
};
Tm.o = 4;
var Um = function Um() {
  switch(arguments.length) {
    case 1:
      return Um.b(arguments[0]);
    case 2:
      return Um.a(arguments[0], arguments[1]);
    case 3:
      return Um.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Um.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Um.b = function(a) {
  if (a ? a.Ac : a) {
    return a.Ac(a);
  }
  var b;
  b = Um[m(null == a ? null : a)];
  if (!b && (b = Um._, !b)) {
    throw u("PMathOps.*", a);
  }
  return b.call(null, a);
};
Um.a = function(a, b) {
  if (a ? a.Wb : a) {
    return a.Wb(a, b);
  }
  var c;
  c = Um[m(null == a ? null : a)];
  if (!c && (c = Um._, !c)) {
    throw u("PMathOps.*", a);
  }
  return c.call(null, a, b);
};
Um.c = function(a, b, c) {
  if (a ? a.Bc : a) {
    return a.Bc(a, b, c);
  }
  var d;
  d = Um[m(null == a ? null : a)];
  if (!d && (d = Um._, !d)) {
    throw u("PMathOps.*", a);
  }
  return d.call(null, a, b, c);
};
Um.q = function(a, b, c, d) {
  if (a ? a.cd : a) {
    return a.cd(0, b, c, d);
  }
  var e;
  e = Um[m(null == a ? null : a)];
  if (!e && (e = Um._, !e)) {
    throw u("PMathOps.*", a);
  }
  return e.call(null, a, b, c, d);
};
Um.o = 4;
var Vm = function Vm(b, c, d) {
  if (b ? b.Cc : b) {
    return b.Cc(b, c, d);
  }
  var e;
  e = Vm[m(null == b ? null : b)];
  if (!e && (e = Vm._, !e)) {
    throw u("PMathOps.madd", b);
  }
  return e.call(null, b, c, d);
}, Wm = function Wm(b, c) {
  if (b ? b.pc : b) {
    return b.pc(b, c);
  }
  var d;
  d = Wm[m(null == b ? null : b)];
  if (!d && (d = Wm._, !d)) {
    throw u("PCrossProduct.cross", b);
  }
  return d.call(null, b, c);
}, Xm = function Xm(b, c) {
  if (b ? b.qc : b) {
    return b.qc(b, c);
  }
  var d;
  d = Xm[m(null == b ? null : b)];
  if (!d && (d = Xm._, !d)) {
    throw u("PDistance.dist", b);
  }
  return d.call(null, b, c);
}, Ym = function Ym(b, c) {
  if (b ? b.rc : b) {
    return b.rc(b, c);
  }
  var d;
  d = Ym[m(null == b ? null : b)];
  if (!d && (d = Ym._, !d)) {
    throw u("PDistance.dist-squared", b);
  }
  return d.call(null, b, c);
}, Zm = function Zm(b, c) {
  if (b ? b.sc : b) {
    return b.sc(b, c);
  }
  var d;
  d = Zm[m(null == b ? null : b)];
  if (!d && (d = Zm._, !d)) {
    throw u("PDotProduct.dot", b);
  }
  return d.call(null, b, c);
}, $m = function $m() {
  switch(arguments.length) {
    case 2:
      return $m.a(arguments[0], arguments[1]);
    case 3:
      return $m.c(arguments[0], arguments[1], arguments[2]);
    case 6:
      return $m.ea(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
$m.a = function(a, b) {
  if (a ? a.tc : a) {
    return a.tc(a, b);
  }
  var c;
  c = $m[m(null == a ? null : a)];
  if (!c && (c = $m._, !c)) {
    throw u("PInterpolate.mix", a);
  }
  return c.call(null, a, b);
};
$m.c = function(a, b, c) {
  if (a ? a.uc : a) {
    return a.uc(a, b, c);
  }
  var d;
  d = $m[m(null == a ? null : a)];
  if (!d && (d = $m._, !d)) {
    throw u("PInterpolate.mix", a);
  }
  return d.call(null, a, b, c);
};
$m.ea = function(a, b, c, d, e, f) {
  if (a ? a.vc : a) {
    return a.vc(a, b, c, d, e, f);
  }
  var h;
  h = $m[m(null == a ? null : a)];
  if (!h && (h = $m._, !h)) {
    throw u("PInterpolate.mix", a);
  }
  return h.call(null, a, b, c, d, e, f);
};
$m.o = 6;
var an = function an(b) {
  if (b ? b.Tb : b) {
    return b.Tb(b);
  }
  var c;
  c = an[m(null == b ? null : b)];
  if (!c && (c = an._, !c)) {
    throw u("PMagnitude.mag", b);
  }
  return c.call(null, b);
}, bn = function bn() {
  switch(arguments.length) {
    case 1:
      return bn.b(arguments[0]);
    case 2:
      return bn.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
bn.b = function(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var b;
  b = bn[m(null == a ? null : a)];
  if (!b && (b = bn._, !b)) {
    throw u("PNormalize.normalize", a);
  }
  return b.call(null, a);
};
bn.a = function(a, b) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b);
  }
  var c;
  c = bn[m(null == a ? null : a)];
  if (!c && (c = bn._, !c)) {
    throw u("PNormalize.normalize", a);
  }
  return c.call(null, a, b);
};
bn.o = 2;
var cn = function cn(b, c) {
  if (b ? b.ub : b) {
    return b.ub(b, c);
  }
  var d;
  d = cn[m(null == b ? null : b)];
  if (!d && (d = cn._, !d)) {
    throw u("PRotate.rotate", b);
  }
  return d.call(null, b, c);
}, dn = function dn(b, c) {
  if (b ? b.Fc : b) {
    return b.Fc(b, c);
  }
  var d;
  d = dn[m(null == b ? null : b)];
  if (!d && (d = dn._, !d)) {
    throw u("PRotate3D.rotate-z", b);
  }
  return d.call(null, b, c);
}, en = function en() {
  switch(arguments.length) {
    case 2:
      return en.a(arguments[0], arguments[1]);
    case 3:
      return en.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return en.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
en.a = function(a, b) {
  if (a ? a.lb : a) {
    return a.lb(a, b);
  }
  var c;
  c = en[m(null == a ? null : a)];
  if (!c && (c = en._, !c)) {
    throw u("PScale.scale", a);
  }
  return c.call(null, a, b);
};
en.c = function(a, b, c) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b, c);
  }
  var d;
  d = en[m(null == a ? null : a)];
  if (!d && (d = en._, !d)) {
    throw u("PScale.scale", a);
  }
  return d.call(null, a, b, c);
};
en.q = function(a, b, c, d) {
  if (a ? a.Zb : a) {
    return a.Zb(a, b, c, d);
  }
  var e;
  e = en[m(null == a ? null : a)];
  if (!e && (e = en._, !e)) {
    throw u("PScale.scale", a);
  }
  return e.call(null, a, b, c, d);
};
en.o = 4;
var fn = function fn(b, c) {
  if (b ? b.mb : b) {
    return b.mb(b, c);
  }
  var d;
  d = fn[m(null == b ? null : b)];
  if (!d && (d = fn._, !d)) {
    throw u("PTransform.transform", b);
  }
  return d.call(null, b, c);
}, gn = function gn() {
  switch(arguments.length) {
    case 2:
      return gn.a(arguments[0], arguments[1]);
    case 3:
      return gn.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return gn.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
gn.a = function(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = gn[m(null == a ? null : a)];
  if (!c && (c = gn._, !c)) {
    throw u("PTranslate.translate", a);
  }
  return c.call(null, a, b);
};
gn.c = function(a, b, c) {
  if (a ? a.Ic : a) {
    return a.Ic(a, b, c);
  }
  var d;
  d = gn[m(null == a ? null : a)];
  if (!d && (d = gn._, !d)) {
    throw u("PTranslate.translate", a);
  }
  return d.call(null, a, b, c);
};
gn.q = function(a, b, c, d) {
  if (a ? a.Jc : a) {
    return a.Jc(a, b, c, d);
  }
  var e;
  e = gn[m(null == a ? null : a)];
  if (!e && (e = gn._, !e)) {
    throw u("PTranslate.translate", a);
  }
  return e.call(null, a, b, c, d);
};
gn.o = 4;
var hn = {}, jn = function jn(b, c) {
  if (b ? b.hd : b) {
    return b.hd(0, c);
  }
  var d;
  d = jn[m(null == b ? null : b)];
  if (!d && (d = jn._, !d)) {
    throw u("PVectorTransform.transform-vector", b);
  }
  return d.call(null, b, c);
}, kn = function kn() {
  switch(arguments.length) {
    case 1:
      return kn.b(arguments[0]);
    case 2:
      return kn.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
kn.b = function(a) {
  if (a ? a.$b : a) {
    return a.$b(a);
  }
  var b;
  b = kn[m(null == a ? null : a)];
  if (!b && (b = kn._, !b)) {
    throw u("PVertexAccess.vertices", a);
  }
  return b.call(null, a);
};
kn.a = function(a, b) {
  if (a ? a.jd : a) {
    return a.jd(a, b);
  }
  var c;
  c = kn[m(null == a ? null : a)];
  if (!c && (c = kn._, !c)) {
    throw u("PVertexAccess.vertices", a);
  }
  return c.call(null, a, b);
};
kn.o = 2;
var ln = {}, mn = function mn(b, c) {
  if (b ? b.Yc : b) {
    return b.Yc(0, c);
  }
  var d;
  d = mn[m(null == b ? null : b)];
  if (!d && (d = mn._, !d)) {
    throw u("PFaceAccess.add-face", b);
  }
  return d.call(null, b, c);
}, nn = function nn(b) {
  if (b ? b.Zc : b) {
    return b.Zc();
  }
  var c;
  c = nn[m(null == b ? null : b)];
  if (!c && (c = nn._, !c)) {
    throw u("PFaceAccess.faces", b);
  }
  return c.call(null, b);
}, on = function on() {
  switch(arguments.length) {
    case 1:
      return on.b(arguments[0]);
    case 2:
      return on.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
on.b = function(a) {
  if (a ? a.Pb : a) {
    return a.Pb(a);
  }
  var b;
  b = on[m(null == a ? null : a)];
  if (!b && (b = on._, !b)) {
    throw u("PCenter.center", a);
  }
  return b.call(null, a);
};
on.a = function(a, b) {
  if (a ? a.Qb : a) {
    return a.Qb(a, b);
  }
  var c;
  c = on[m(null == a ? null : a)];
  if (!c && (c = on._, !c)) {
    throw u("PCenter.center", a);
  }
  return c.call(null, a, b);
};
on.o = 2;
var pn = function pn(b) {
  if (b ? b.Rb : b) {
    return b.Rb(b);
  }
  var c;
  c = pn[m(null == b ? null : b)];
  if (!c && (c = pn._, !c)) {
    throw u("PCenter.centroid", b);
  }
  return c.call(null, b);
}, qn = function qn(b) {
  if (b ? b.Sb : b) {
    return b.Sb(b);
  }
  var c;
  c = qn[m(null == b ? null : b)];
  if (!c && (c = qn._, !c)) {
    throw u("PClear.clear*", b);
  }
  return c.call(null, b);
}, rn = function rn(b, c) {
  if (b ? b.$c : b) {
    return b.$c(0, c);
  }
  var d;
  d = rn[m(null == b ? null : b)];
  if (!d && (d = rn._, !d)) {
    throw u("PGeomContainer.into", b);
  }
  return d.call(null, b, c);
}, sn = function sn() {
  switch(arguments.length) {
    case 1:
      return sn.b(arguments[0]);
    case 2:
      return sn.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
sn.b = function(a) {
  if (a ? a.Dc : a) {
    return a.Dc(a);
  }
  var b;
  b = sn[m(null == a ? null : a)];
  if (!b && (b = sn._, !b)) {
    throw u("PMeshConvert.as-mesh", a);
  }
  return b.call(null, a);
};
sn.a = function(a, b) {
  if (a ? a.Ec : a) {
    return a.Ec(a, b);
  }
  var c;
  c = sn[m(null == a ? null : a)];
  if (!c && (c = sn._, !c)) {
    throw u("PMeshConvert.as-mesh", a);
  }
  return c.call(null, a, b);
};
sn.o = 2;
var tn = function tn(b, c) {
  if (b ? b.dd : b) {
    return b.dd(0, c);
  }
  var d;
  d = tn[m(null == b ? null : b)];
  if (!d && (d = tn._, !d)) {
    throw u("PPointMap.unmap-point", b);
  }
  return d.call(null, b, c);
}, un = function un() {
  switch(arguments.length) {
    case 1:
      return un.b(arguments[0]);
    case 2:
      return un.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
un.b = function(a) {
  if (a ? a.ed : a) {
    return a.ed();
  }
  var b;
  b = un[m(null == a ? null : a)];
  if (!b && (b = un._, !b)) {
    throw u("PPolygonConvert.as-polygon", a);
  }
  return b.call(null, a);
};
un.a = function(a, b) {
  if (a ? a.Gd : a) {
    return a.Gd(a, b);
  }
  var c;
  c = un[m(null == a ? null : a)];
  if (!c && (c = un._, !c)) {
    throw u("PPolygonConvert.as-polygon", a);
  }
  return c.call(null, a, b);
};
un.o = 2;
var vn = function vn() {
  switch(arguments.length) {
    case 1:
      return vn.b(arguments[0]);
    case 2:
      return vn.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
vn.b = function(a) {
  if (a ? a.fd : a) {
    return a.fd();
  }
  var b;
  b = vn[m(null == a ? null : a)];
  if (!b && (b = vn._, !b)) {
    throw u("PSubdivide.subdivide", a);
  }
  return b.call(null, a);
};
vn.a = function(a, b) {
  if (a ? a.gd : a) {
    return a.gd(0, b);
  }
  var c;
  c = vn[m(null == a ? null : a)];
  if (!c && (c = vn._, !c)) {
    throw u("PSubdivide.subdivide", a);
  }
  return c.call(null, a, b);
};
vn.o = 2;
var wn = function wn() {
  switch(arguments.length) {
    case 1:
      return wn.b(arguments[0]);
    case 2:
      return wn.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
wn.b = function(a) {
  if (a ? a.Gc : a) {
    return a.Gc(a);
  }
  var b;
  b = wn[m(null == a ? null : a)];
  if (!b && (b = wn._, !b)) {
    throw u("PTessellate.tessellate", a);
  }
  return b.call(null, a);
};
wn.a = function(a, b) {
  if (a ? a.Hc : a) {
    return a.Hc(a, b);
  }
  var c;
  c = wn[m(null == a ? null : a)];
  if (!c && (c = wn._, !c)) {
    throw u("PTessellate.tessellate", a);
  }
  return c.call(null, a, b);
};
wn.o = 2;
var xn = function xn() {
  switch(arguments.length) {
    case 3:
      return xn.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return xn.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
xn.c = function(a, b, c) {
  if (a ? a.Kc : a) {
    return a.Kc(a, b, c);
  }
  var d;
  d = xn[m(null == a ? null : a)];
  if (!d && (d = xn._, !d)) {
    throw u("PVectorReduce.reduce-vector", a);
  }
  return d.call(null, a, b, c);
};
xn.q = function(a, b, c, d) {
  if (a ? a.Lc : a) {
    return a.Lc(a, b, c, d);
  }
  var e;
  e = xn[m(null == a ? null : a)];
  if (!e && (e = xn._, !e)) {
    throw u("PVectorReduce.reduce-vector", a);
  }
  return e.call(null, a, b, c, d);
};
xn.o = 4;
Math.sqrt.b ? Math.sqrt.b(2) : Math.sqrt.call(null, 2);
Math.sqrt.b ? Math.sqrt.b(3) : Math.sqrt.call(null, 3);
Math.sqrt.b ? Math.sqrt.b(5) : Math.sqrt.call(null, 5);
Math.log.b ? Math.log.b(2) : Math.log.call(null, 2);
var yn = Number.POSITIVE_INFINITY, zn = Number.NEGATIVE_INFINITY, An = Math.abs, Bn = function Bn() {
  switch(arguments.length) {
    case 2:
      return Bn.a(arguments[0], arguments[1]);
    case 3:
      return Bn.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Bn.a = function(a, b) {
  if (a ? a.ab : a) {
    return a.ab(a, b);
  }
  var c;
  c = Bn[m(null == a ? null : a)];
  if (!c && (c = Bn._, !c)) {
    throw u("PDeltaEquals.delta\x3d", a);
  }
  return c.call(null, a, b);
};
Bn.c = function(a, b, c) {
  if (a ? a.bb : a) {
    return a.bb(a, b, c);
  }
  var d;
  d = Bn[m(null == a ? null : a)];
  if (!d && (d = Bn._, !d)) {
    throw u("PDeltaEquals.delta\x3d", a);
  }
  return d.call(null, a, b, c);
};
Bn.o = 3;
Bn.number = function() {
  function a(a, b, c) {
    var h;
    if (h = "number" === typeof b) {
      a -= b, h = (An.b ? An.b(a) : An.call(null, a)) <= c;
    }
    return h;
  }
  function b(a, b) {
    var c;
    if (c = "number" === typeof b) {
      c = a - b, c = 1E-6 >= (An.b ? An.b(c) : An.call(null, c));
    }
    return c;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
S.prototype.ab = function(a, b) {
  var c = Xc(b);
  if (c) {
    if (c = J(this) === J(b)) {
      for (var c = this, d = b;;) {
        if (p(c)) {
          if (p(Bn.a(C(c), C(d)))) {
            c = E(c), d = E(d);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return c;
    }
  } else {
    return c;
  }
};
S.prototype.bb = function(a, b, c) {
  if (a = Xc(b)) {
    if (a = J(this) === J(b)) {
      for (a = this;;) {
        if (p(a)) {
          if (p(Bn.c(C(a), C(b), c))) {
            a = E(a), b = E(b);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return a;
    }
  } else {
    return a;
  }
};
Ad.prototype.ab = function(a, b) {
  var c = Xc(b);
  if (c) {
    if (c = J(this) === J(b)) {
      for (var c = this, d = b;;) {
        if (p(c)) {
          if (p(Bn.a(C(c), C(d)))) {
            c = E(c), d = E(d);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return c;
    }
  } else {
    return c;
  }
};
Ad.prototype.bb = function(a, b, c) {
  if (a = Xc(b)) {
    if (a = J(this) === J(b)) {
      for (a = this;;) {
        if (p(a)) {
          if (p(Bn.c(C(a), C(b), c))) {
            a = E(a), b = E(b);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return a;
    }
  } else {
    return a;
  }
};
Kd.prototype.ab = function(a, b) {
  var c = Xc(b);
  if (c) {
    if (c = J(this) === J(b)) {
      for (var c = this, d = b;;) {
        if (p(c)) {
          if (p(Bn.a(C(c), C(d)))) {
            c = E(c), d = E(d);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return c;
    }
  } else {
    return c;
  }
};
Kd.prototype.bb = function(a, b, c) {
  if (a = Xc(b)) {
    if (a = J(this) === J(b)) {
      for (a = this;;) {
        if (p(a)) {
          if (p(Bn.c(C(a), C(b), c))) {
            a = E(a), b = E(b);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return a;
    }
  } else {
    return a;
  }
};
B.prototype.ab = function(a, b) {
  var c = Xc(b);
  if (c) {
    if (c = J(this) === J(b)) {
      for (var c = this, d = b;;) {
        if (p(c)) {
          if (p(Bn.a(C(c), C(d)))) {
            c = E(c), d = E(d);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return c;
    }
  } else {
    return c;
  }
};
B.prototype.bb = function(a, b, c) {
  if (a = Xc(b)) {
    if (a = J(this) === J(b)) {
      for (a = this;;) {
        if (p(a)) {
          if (p(Bn.c(C(a), C(b), c))) {
            a = E(a), b = E(b);
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return a;
    }
  } else {
    return a;
  }
};
Bn["null"] = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null == c;
      case 3:
        return null == c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return null == c;
  };
  a.c = function(a, c) {
    return null == c;
  };
  return a;
}();
function Cn(a) {
  return Ee.a(function(b) {
    return b / a;
  }, Lg(a + 1, 1));
}
function Dn(a) {
  a = a / 1E-6 + .5;
  return 1E-6 * (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a));
}
;function En(a) {
  a = [v("Illegal lookup key: "), v(a)].join("");
  throw Error(a);
}
function Fn(a, b) {
  var c = [v("Can't create "), v(a), v(" from "), v(bh(Gc([b], 0)))].join("");
  throw Error(c);
}
;function W(a, b, c) {
  this.d = a;
  this.la = b;
  this.k = c;
  this.g = 166618075;
  this.u = 10240;
}
g = W.prototype;
g.mb = function(a, b) {
  return jn(b, this);
};
g.ub = function(a, b) {
  var c = Math.sin.b ? Math.sin.b(b) : Math.sin.call(null, b), d = Math.cos.b ? Math.cos.b(b) : Math.cos.call(null, b), e = new Float32Array(2), f = this.d, h = f[0], f = f[1];
  e[0] = h * d - f * c;
  e[1] = h * c + f * d;
  return new W(e, null, this.k);
};
g.toString = function() {
  return[v("["), v(this.d[0]), v(" "), v(this.d[1]), v("]")].join("");
};
g.I = function(a, b) {
  if (b instanceof P) {
    var c = Gn.b ? Gn.b(b) : Gn.call(null, b);
    return p(c) ? c.b ? c.b(this) : c.call(null, this) : En(b);
  }
  return 0 <= b && 2 > b ? this.d[b] : En(b);
};
g.B = function(a, b, c) {
  return b instanceof P ? (a = Gn.b ? Gn.b(b) : Gn.call(null, b), p(a) ? a.b ? a.b(this) : a.call(null, this) : c) : 0 <= b && 2 > b ? this.d[b] : c;
};
g.sc = function(a, b) {
  var c = this.d;
  if (b instanceof W) {
    var d = b.d;
    return c[0] * d[0] + c[1] * d[1];
  }
  return c[0] * K(b, 0, 0) + c[1] * K(b, 1, 0);
};
g.Xb = function() {
  var a = this.d, b = a[0], a = a[1], c;
  c = b * b + a * a;
  c = Math.sqrt.b ? Math.sqrt.b(c) : Math.sqrt.call(null, c);
  if (0 < c) {
    var d = new Float32Array(2);
    d[0] = b / c;
    d[1] = a / c;
    return new W(d, null, this.k);
  }
  return this;
};
g.Yb = function(a, b) {
  var c = this.d, d = c[0], c = c[1], e;
  e = d * d + c * c;
  e = Math.sqrt.b ? Math.sqrt.b(e) : Math.sqrt.call(null, e);
  if (0 < e) {
    e = b / e;
    var f = new Float32Array(2);
    f[0] = d * e;
    f[1] = c * e;
    return new W(f, null, this.k);
  }
  return this;
};
g.Sb = function() {
  return Hn;
};
g.pc = function(a, b) {
  var c = this.d;
  if (b instanceof W) {
    var d = b.d;
    return c[0] * d[1] - c[1] * d[0];
  }
  return c[0] * K(b, 1, 0) - c[1] * K(b, 0, 0);
};
g.w = function(a, b) {
  return 0 <= b ? 2 > b ? this.d[b] : En(b) : null;
};
g.fa = function(a, b, c) {
  return 0 <= b ? 2 > b ? this.d[b] : c : null;
};
g.Cb = function(a, b, c) {
  a = new Float32Array(this.d);
  a[b] = c;
  return new W(a, null, this.k);
};
g.D = function() {
  return this.k;
};
g.V = function() {
  return I(this.d[1], null);
};
g.K = function() {
  return 2;
};
g.pb = function() {
  return(Gn.b ? Gn.b(Fi) : Gn.call(null, Fi)).call(null, this);
};
g.A = function() {
  var a = this.la;
  return p(a) ? a : this.la = oc(Yb(31 + fc(this.d[0]) | 0, 31) + fc(this.d[1]) | 0, 2);
};
g.r = function(a, b) {
  if (b instanceof W) {
    var c = b.d;
    return this.d[0] === c[0] && this.d[1] === c[1];
  }
  return Xc(b) && 2 === J(b) && F.a(this.d[0], C(b)) && F.a(this.d[1], Pc(b, 1));
};
g.qc = function(a, b) {
  var c = Ym(this, b);
  return Math.sqrt.b ? Math.sqrt.b(c) : Math.sqrt.call(null, c);
};
g.rc = function(a, b) {
  var c = this.d, d = c[0], c = c[1];
  if (b instanceof W) {
    var e = b.d, f = e[0], e = e[1]
  } else {
    f = K(b, 0, 0), e = K(b, 1, 0);
  }
  d -= f;
  c -= e;
  return d * d + c * c;
};
g.Z = function(a, b) {
  var c;
  c = this.d[0];
  var d = this.d[1];
  c = b.a ? b.a(c, d) : b.call(null, c, d);
  return uc(c) ? G.b ? G.b(c) : G.call(null, c) : c;
};
g.$ = function(a, b, c) {
  var d = this, e = function() {
    var a = d.d[0];
    return b.a ? b.a(c, a) : b.call(null, c, a);
  }();
  if (uc(e)) {
    return G.b ? G.b(e) : G.call(null, e);
  }
  a = function() {
    var a = d.d[1];
    return b.a ? b.a(e, a) : b.call(null, e, a);
  }();
  return uc(a) ? G.b ? G.b(a) : G.call(null, a) : a;
};
g.Ac = function() {
  return this;
};
g.Wb = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = d[0] * e[0];
    c[1] = d[1] * e[1];
  } else {
    "number" === typeof b ? (c[0] = d[0] * b, c[1] = d[1] * b) : (c[0] = d[0] * K(b, 0, 0), c[1] = d[1] * K(b, 1, 0));
  }
  return new W(c, null, this.k);
};
g.Bc = function(a, b, c) {
  var d = this.d;
  a = new Float32Array(2);
  var e = d[0], d = d[1], f = "number" === typeof b, h = "number" === typeof c;
  if (f && h) {
    a[0] = e * b, a[1] = d * c;
  } else {
    var k = f ? null : b instanceof W, l = h ? null : c instanceof W, n = p(k) ? b.d : null, r = p(l) ? c.d : null, t = p(k) ? n[0] : f ? b : K(b, 0, 1);
    b = p(k) ? n[1] : f ? b : K(b, 1, 1);
    f = p(l) ? r[0] : h ? c : K(c, 0, 1);
    c = p(l) ? r[1] : h ? c : K(c, 1, 1);
    a[0] = e * t * f;
    a[1] = d * b * c;
  }
  return new W(a, null, this.k);
};
g.wc = function() {
  var a = new Float32Array(2), b = this.d;
  a[0] = -b[0];
  a[1] = -b[1];
  return new W(a, null, this.k);
};
g.Ub = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = d[0] - e[0];
    c[1] = d[1] - e[1];
  } else {
    "number" === typeof b ? (c[0] = d[0] - b, c[1] = d[1] - b) : (c[0] = d[0] - K(b, 0, 0), c[1] = d[1] - K(b, 1, 0));
  }
  return new W(c, null, this.k);
};
g.xc = function(a, b, c) {
  var d = this.d;
  a = new Float32Array(2);
  var e = d[0], d = d[1], f = "number" === typeof b, h = "number" === typeof c;
  if (f && h) {
    a[0] = e - b, a[1] = d - c;
  } else {
    var k = f ? null : b instanceof W, l = h ? null : c instanceof W, n = p(k) ? b.d : null, r = p(l) ? c.d : null, t = p(k) ? n[0] : f ? b : K(b, 0, 0);
    b = p(k) ? n[1] : f ? b : K(b, 1, 0);
    f = p(l) ? r[0] : h ? c : K(c, 0, 0);
    c = p(l) ? r[1] : h ? c : K(c, 1, 0);
    a[0] = e - t - f;
    a[1] = d - b - c;
  }
  return new W(a, null, this.k);
};
g.Cc = function(a, b, c) {
  a = new Float32Array(2);
  var d = b instanceof W, e = c instanceof W, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], k = k[1], t = d ? l[0] : p(f) ? b : K(b, 0, 1);
  b = d ? l[1] : p(f) ? b : K(b, 1, 1);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  c = e ? n[1] : p(h) ? c : K(c, 1, 0);
  a[0] = r * t + d;
  a[1] = k * b + c;
  return new W(a, null, this.k);
};
g.yc = function() {
  return this;
};
g.Vb = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = d[0] + e[0];
    c[1] = d[1] + e[1];
  } else {
    "number" === typeof b ? (c[0] = d[0] + b, c[1] = d[1] + b) : (c[0] = d[0] + K(b, 0, 0), c[1] = d[1] + K(b, 1, 0));
  }
  return new W(c, null, this.k);
};
g.zc = function(a, b, c) {
  var d = this.d;
  a = new Float32Array(2);
  var e = d[0], d = d[1], f = "number" === typeof b, h = "number" === typeof c;
  if (f && h) {
    a[0] = e + b, a[1] = d + c;
  } else {
    var k = f ? null : b instanceof W, l = h ? null : c instanceof W, n = p(k) ? b.d : null, r = p(l) ? c.d : null, t = p(k) ? n[0] : f ? b : K(b, 0, 0);
    b = p(k) ? n[1] : f ? b : K(b, 1, 0);
    f = p(l) ? r[0] : h ? c : K(c, 0, 0);
    c = p(l) ? r[1] : h ? c : K(c, 1, 0);
    a[0] = e + t + f;
    a[1] = d + b + c;
  }
  return new W(a, null, this.k);
};
g.N = function() {
  return this.d[0];
};
g.ba = function() {
  return I(this.d[1], null);
};
g.nb = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = d[0] + e[0];
    c[1] = d[1] + e[1];
  } else {
    "number" === typeof b ? (c[0] = d[0] + b, c[1] = d[1] + b) : (c[0] = d[0] + K(b, 0, 0), c[1] = d[1] + K(b, 1, 0));
  }
  return new W(c, null, this.k);
};
g.Ic = function(a, b, c) {
  var d = this.d;
  a = new Float32Array(2);
  var e = d[0], d = d[1], f = "number" === typeof b, h = "number" === typeof c;
  if (f && h) {
    a[0] = e + b, a[1] = d + c;
  } else {
    var k = f ? null : b instanceof W, l = h ? null : c instanceof W, n = p(k) ? b.d : null, r = p(l) ? c.d : null, t = p(k) ? n[0] : f ? b : K(b, 0, 0);
    b = p(k) ? n[1] : f ? b : K(b, 1, 0);
    f = p(l) ? r[0] : h ? c : K(c, 0, 0);
    c = p(l) ? r[1] : h ? c : K(c, 1, 0);
    a[0] = e + t + f;
    a[1] = d + b + c;
  }
  return new W(a, null, this.k);
};
g.xb = function(a, b) {
  return "number" === typeof b ? 0 <= b && 2 > b : p(Gn.b ? Gn.b(b) : Gn.call(null, b)) ? !0 : !1;
};
g.ma = function(a, b, c) {
  if ("number" === typeof b) {
    return 0 === b || 1 === b ? (a = new Float32Array(this.d), a[b] = c, new W(a, null, this.k)) : 2 === b ? Mc.a(this, c) : En(b);
  }
  if (b instanceof P) {
    if (F.a(Mj, b)) {
      b = Mc.a(this, c);
    } else {
      a = this.d;
      var d = new Float32Array(this.d), e = new ta(null, 2, ["x", 0, "y", 1], null);
      b = In.C ? In.C(a, d, e, b, c) : In.call(null, 0, d, e, b, c);
      b = new W(b, null, this.k);
    }
  } else {
    b = null;
  }
  return b;
};
g.J = function() {
  return this;
};
g.lb = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = d[0] * e[0];
    c[1] = d[1] * e[1];
  } else {
    "number" === typeof b ? (c[0] = d[0] * b, c[1] = d[1] * b) : (c[0] = d[0] * K(b, 0, 0), c[1] = d[1] * K(b, 1, 0));
  }
  return new W(c, null, this.k);
};
g.Ib = function(a, b, c) {
  var d = this.d;
  a = new Float32Array(2);
  var e = d[0], d = d[1], f = "number" === typeof b, h = "number" === typeof c;
  if (f && h) {
    a[0] = e * b, a[1] = d * c;
  } else {
    var k = f ? null : b instanceof W, l = h ? null : c instanceof W, n = p(k) ? b.d : null, r = p(l) ? c.d : null, t = p(k) ? n[0] : f ? b : K(b, 0, 1);
    b = p(k) ? n[1] : f ? b : K(b, 1, 1);
    f = p(l) ? r[0] : h ? c : K(c, 0, 1);
    c = p(l) ? r[1] : h ? c : K(c, 1, 1);
    a[0] = e * t * f;
    a[1] = d * b * c;
  }
  return new W(a, null, this.k);
};
g.G = function(a, b) {
  return new W(new Float32Array(this.d), this.la, b);
};
g.H = function(a, b) {
  var c = Hc, d;
  d = this.d[0];
  var e = this.d[1];
  d = Jn.c ? Jn.c(d, e, b) : Jn.call(null, d, e, b);
  return c(d, this.k);
};
g.call = function() {
  function a(a, b, c) {
    a = this;
    return b instanceof P ? (a = Gn.b ? Gn.b(b) : Gn.call(null, b), p(a) ? a.b ? a.b(this) : a.call(null, this) : c) : 0 <= b && 2 > b ? a.d[b] : c;
  }
  function b(a, b) {
    a = this;
    if (b instanceof P) {
      var c = Gn.b ? Gn.b(b) : Gn.call(null, b);
      return p(c) ? c.b ? c.b(this) : c.call(null, this) : En(b);
    }
    return 0 <= b && 2 > b ? a.d[b] : En(b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  if (a instanceof P) {
    var b = Gn.b ? Gn.b(a) : Gn.call(null, a);
    return p(b) ? b.b ? b.b(this) : b.call(null, this) : En(a);
  }
  return 0 <= a && 2 > a ? this.d[a] : En(a);
};
g.a = function(a, b) {
  if (a instanceof P) {
    var c = Gn.b ? Gn.b(a) : Gn.call(null, a);
    return p(c) ? c.b ? c.b(this) : c.call(null, this) : b;
  }
  return 0 <= a && 2 > a ? this.d[a] : b;
};
g.fb = function(a, b) {
  if (b instanceof W) {
    var c = b.d, d = gd(this.d[0], c[0]);
    return 0 === d ? gd(this.d[1], c[1]) : d;
  }
  d = J(b);
  return 2 === d ? -gd(b, this) : 2 - d;
};
g.Kc = function(a, b, c) {
  return new W(Kn.c ? Kn.c(b, this, c) : Kn.call(null, b, this, c), null, this.k);
};
g.Lc = function(a, b, c, d) {
  var e = Kn.c ? Kn.c(b, this, d) : Kn.call(null, b, this, d);
  e[0] = function() {
    var a = e[0];
    return c.a ? c.a(a, 0) : c.call(null, a, 0);
  }();
  e[1] = function() {
    var a = e[1];
    return c.a ? c.a(a, 1) : c.call(null, a, 1);
  }();
  return new W(e, null, this.k);
};
g.ab = function(a, b) {
  return Bn.c(this, b, 1E-6);
};
g.bb = function(a, b, c) {
  return Xc(b) && 2 === J(b) ? (a = this.d, b instanceof W ? (b = b.d, p(Bn.c(a[0], b[0], c)) ? Bn.c(a[1], b[1], c) : null) : p(Bn.c(a[0], K(b, 0, 0), c)) ? Bn.c(a[1], K(b, 1, 0), c) : null) : null;
};
g.Tb = function() {
  var a = this.d, b = a[0], a = a[1], b = b * b + a * a;
  return Math.sqrt.b ? Math.sqrt.b(b) : Math.sqrt.call(null, b);
};
g.tc = function(a, b) {
  var c = new Float32Array(2), d = this.d;
  if (b instanceof W) {
    var e = b.d;
    c[0] = .5 * (d[0] + e[0]);
    c[1] = .5 * (d[1] + e[1]);
  } else {
    "number" === typeof b ? (c[0] = .5 * (d[0] + b), c[1] = .5 * (d[1] + b)) : (c[0] = .5 * (d[0] + K(b, 0, 0)), c[1] = .5 * (d[1] + K(b, 1, 0)));
  }
  return new W(c, null, this.k);
};
g.uc = function(a, b, c) {
  a = new Float32Array(2);
  var d = b instanceof W, e = c instanceof W, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], k = k[1], t = d ? l[0] : p(f) ? b : K(b, 0, 0);
  b = d ? l[1] : p(f) ? b : K(b, 1, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  c = e ? n[1] : p(h) ? c : K(c, 1, 0);
  a[0] = (t - r) * d + r;
  a[1] = (b - k) * c + k;
  return new W(a, null, this.k);
};
g.vc = function(a, b, c, d, e, f) {
  a = new Float32Array(2);
  var h = d instanceof W, k = "number" === typeof d, l = h ? d.d : null, n = h ? l[0] : k ? d : K(d, 0, 0);
  d = h ? l[1] : k ? d : K(d, 1, 0);
  var r = b instanceof W, l = c instanceof W, t = r ? null : "number" === typeof b, w = l ? null : "number" === typeof c, k = this.d, z = r ? b.d : null, D = l ? c.d : null, h = k[0], k = k[1], H = r ? z[0] : p(t) ? b : K(b, 0, 0), r = r ? z[1] : p(t) ? b : K(b, 1, 0);
  b = l ? D[0] : p(w) ? c : K(c, 0, 0);
  c = l ? D[1] : p(w) ? c : K(c, 1, 0);
  h = (H - h) * e + h;
  k = (r - k) * e + k;
  a[0] = ((n - b) * e + b - h) * f + h;
  a[1] = ((d - c) * e + c - k) * f + k;
  return new W(a, null, this.k);
};
function X(a, b, c) {
  this.d = a;
  this.la = b;
  this.k = c;
  this.g = 166618075;
  this.u = 10240;
}
g = X.prototype;
g.mb = function(a, b) {
  return jn(b, this);
};
g.ub = function(a, b) {
  return dn(this, b);
};
g.toString = function() {
  return[v("["), v(this.d[0]), v(" "), v(this.d[1]), v(" "), v(this.d[2]), v("]")].join("");
};
g.I = function(a, b) {
  if (b instanceof P) {
    var c = Ln.b ? Ln.b(b) : Ln.call(null, b);
    return p(c) ? c.b ? c.b(this) : c.call(null, this) : En(b);
  }
  return 0 <= b && 2 >= b ? this.d[b] : En(b);
};
g.B = function(a, b) {
  if (b instanceof P) {
    var c = Ln.b ? Ln.b(b) : Ln.call(null, b);
    return p(c) ? c.b ? c.b(this) : c.call(null, this) : En(b);
  }
  return 0 <= b && 2 >= b ? this.d[b] : En(b);
};
g.sc = function(a, b) {
  var c = this.d;
  if (b instanceof X) {
    var d = b.d;
    return c[0] * d[0] + c[1] * d[1] + c[2] * d[2];
  }
  return c[0] * K(b, 0, 0) + c[1] * K(b, 1, 0) + c[2] * K(b, 2, 0);
};
g.Xb = function() {
  var a = this.d, b = a[0], c = a[1], a = a[2], d;
  d = b * b + c * c + a * a;
  d = Math.sqrt.b ? Math.sqrt.b(d) : Math.sqrt.call(null, d);
  if (0 < d) {
    var e = new Float32Array(3);
    e[0] = b / d;
    e[1] = c / d;
    e[2] = a / d;
    return new X(e, null, this.k);
  }
  return this;
};
g.Yb = function(a, b) {
  var c = this.d, d = c[0], e = c[1], c = c[2], f;
  f = d * d + e * e + c * c;
  f = Math.sqrt.b ? Math.sqrt.b(f) : Math.sqrt.call(null, f);
  if (0 < f) {
    f = b / f;
    var h = new Float32Array(3);
    h[0] = d * f;
    h[1] = e * f;
    h[2] = c * f;
    return new X(h, null, this.k);
  }
  return this;
};
g.Fc = function(a, b) {
  var c = Math.sin.b ? Math.sin.b(b) : Math.sin.call(null, b), d = Math.cos.b ? Math.cos.b(b) : Math.cos.call(null, b), e = new Float32Array(3), f = this.d, h = f[0], k = f[1], f = f[2];
  e[0] = h * d - k * c;
  e[1] = h * c + k * d;
  e[2] = f;
  return new X(e, null, this.k);
};
g.Sb = function() {
  return Mn;
};
g.pc = function(a, b) {
  var c = new Float32Array(3), d = this.d, e = d[0], f = d[1], d = d[2];
  if (b instanceof X) {
    var h = b.d, k = h[0], l = h[1], h = h[2]
  } else {
    k = K(b, 0, 0), l = K(b, 1, 0), h = K(b, 2, 0);
  }
  c[0] = f * h - l * d;
  c[1] = d * k - h * e;
  c[2] = e * l - k * f;
  return new X(c, null, this.k);
};
g.w = function(a, b) {
  return 0 <= b ? 3 > b ? this.d[b] : En(b) : null;
};
g.fa = function(a, b, c) {
  return 0 <= b ? 3 > b ? this.d[b] : c : null;
};
g.Cb = function(a, b, c) {
  a = new Float32Array(this.d);
  a[b] = c;
  return new X(a, null, this.k);
};
g.D = function() {
  return this.k;
};
g.V = function() {
  return I(this.d[1], I(this.d[2], null));
};
g.K = function() {
  return 3;
};
g.pb = function() {
  return(Ln.b ? Ln.b(tj) : Ln.call(null, tj)).call(null, this);
};
g.A = function() {
  var a = this.la;
  return p(a) ? a : this.la = oc(Yb(Yb(31 + fc(this.d[0]) | 0, 31) + fc(this.d[1]) | 0, 31) + fc(this.d[2]) | 0, 3);
};
g.r = function(a, b) {
  if (b instanceof X) {
    var c = b.d;
    return this.d[0] === c[0] && this.d[1] === c[1] && this.d[2] === c[2];
  }
  return Xc(b) && 3 === J(b) && F.a(this.d[0], C(b)) && F.a(this.d[1], Pc(b, 1)) && F.a(this.d[2], Pc(b, 2));
};
g.qc = function(a, b) {
  var c = Ym(this, b);
  return Math.sqrt.b ? Math.sqrt.b(c) : Math.sqrt.call(null, c);
};
g.rc = function(a, b) {
  var c = this.d, d = c[0], e = c[1], c = c[2];
  if (b instanceof X) {
    var f = b.d, h = f[0], k = f[1], f = f[2]
  } else {
    h = K(b, 0, 0), k = K(b, 1, 0), f = K(b, 2, 0);
  }
  d -= h;
  e -= k;
  c -= f;
  return d * d + e * e + c * c;
};
g.Z = function(a, b) {
  var c = this, d = function() {
    var a = c.d[0], d = c.d[1];
    return b.a ? b.a(a, d) : b.call(null, a, d);
  }();
  if (uc(d)) {
    return G.b ? G.b(d) : G.call(null, d);
  }
  var e = function() {
    var a = c.d[2];
    return b.a ? b.a(d, a) : b.call(null, d, a);
  }();
  return uc(e) ? G.b ? G.b(e) : G.call(null, e) : e;
};
g.$ = function(a, b, c) {
  var d = this, e = function() {
    var a = d.d[0];
    return b.a ? b.a(c, a) : b.call(null, c, a);
  }();
  if (uc(e)) {
    return G.b ? G.b(e) : G.call(null, e);
  }
  var f = function() {
    var a = d.d[1];
    return b.a ? b.a(e, a) : b.call(null, e, a);
  }();
  if (uc(f)) {
    return G.b ? G.b(f) : G.call(null, f);
  }
  a = function() {
    var a = d.d[2];
    return b.a ? b.a(f, a) : b.call(null, f, a);
  }();
  return uc(a) ? G.b ? G.b(a) : G.call(null, a) : a;
};
g.Ac = function() {
  return this;
};
g.Wb = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = d[0] * e[0];
    c[1] = d[1] * e[1];
    c[2] = d[2] * e[2];
  } else {
    "number" === typeof b ? (c[0] = d[0] * b, c[1] = d[1] * b, c[2] = d[2] * b) : (c[0] = d[0] * K(b, 0, 0), c[1] = d[1] * K(b, 1, 0), c[2] = d[2] * K(b, 2, 0));
  }
  return new X(c, null, this.k);
};
g.Bc = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = r * w * d;
  a[1] = t * z * f;
  a[2] = k * b * c;
  return new X(a, null, this.k);
};
g.cd = function(a, b, c, d) {
  a = this.d;
  var e = new Float32Array(3);
  e[0] = a[0] * b;
  e[1] = a[1] * c;
  e[2] = a[2] * d;
  return new X(e, null, this.k);
};
g.wc = function() {
  var a = new Float32Array(3), b = this.d;
  a[0] = -b[0];
  a[1] = -b[1];
  a[2] = -b[2];
  return new X(a, null, this.k);
};
g.Ub = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = d[0] - e[0];
    c[1] = d[1] - e[1];
    c[2] = d[2] - e[2];
  } else {
    "number" === typeof b ? (c[0] = d[0] - b, c[1] = d[1] - b, c[2] = d[2] - b) : (c[0] = d[0] - K(b, 0, 0), c[1] = d[1] - K(b, 1, 0), c[2] = d[2] - K(b, 2, 0));
  }
  return new X(c, null, this.k);
};
g.xc = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = r - w - d;
  a[1] = t - z - f;
  a[2] = k - b - c;
  return new X(a, null, this.k);
};
g.ad = function(a, b, c, d) {
  a = this.d;
  var e = new Float32Array(3);
  e[0] = a[0] - b;
  e[1] = a[1] - c;
  e[2] = a[2] - d;
  return new X(e, null, this.k);
};
g.Cc = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = r * w + d;
  a[1] = t * z + f;
  a[2] = k * b + c;
  return new X(a, null, this.k);
};
g.yc = function() {
  return this;
};
g.Vb = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = d[0] + e[0];
    c[1] = d[1] + e[1];
    c[2] = d[2] + e[2];
  } else {
    "number" === typeof b ? (c[0] = d[0] + b, c[1] = d[1] + b, c[2] = d[2] + b) : (c[0] = d[0] + K(b, 0, 0), c[1] = d[1] + K(b, 1, 0), c[2] = d[2] + K(b, 2, 0));
  }
  return new X(c, null, this.k);
};
g.zc = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = r + w + d;
  a[1] = t + z + f;
  a[2] = k + b + c;
  return new X(a, null, this.k);
};
g.bd = function(a, b, c, d) {
  a = this.d;
  var e = new Float32Array(3);
  e[0] = a[0] + b;
  e[1] = a[1] + c;
  e[2] = a[2] + d;
  return new X(e, null, this.k);
};
g.N = function() {
  return this.d[0];
};
g.ba = function() {
  return I(this.d[1], I(this.d[2], null));
};
g.nb = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = d[0] + e[0];
    c[1] = d[1] + e[1];
    c[2] = d[2] + e[2];
  } else {
    "number" === typeof b ? (c[0] = d[0] + b, c[1] = d[1] + b, c[2] = d[2] + b) : (c[0] = d[0] + K(b, 0, 0), c[1] = d[1] + K(b, 1, 0), c[2] = d[2] + K(b, 2, 0));
  }
  return new X(c, null, this.k);
};
g.Ic = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = r + w + d;
  a[1] = t + z + f;
  a[2] = k + b + c;
  return new X(a, null, this.k);
};
g.Jc = function(a, b, c, d) {
  a = this.d;
  var e = new Float32Array(3);
  e[0] = a[0] + b;
  e[1] = a[1] + c;
  e[2] = a[2] + d;
  return new X(e, null, this.k);
};
g.xb = function(a, b) {
  return "number" === typeof b ? 0 <= b && 2 >= b : p(Ln.b ? Ln.b(b) : Ln.call(null, b)) ? !0 : !1;
};
g.ma = function(a, b, c) {
  if ("number" === typeof b) {
    return 0 <= b && 2 >= b ? (a = new Float32Array(this.d), a[b] = c, new X(a, null, this.k)) : 3 === b ? Mc.a(this, c) : En(b);
  }
  if (b instanceof P) {
    if (F.a(Ki, b)) {
      b = Mc.a(this, c);
    } else {
      a = this.d;
      var d = new Float32Array(this.d), e = new ta(null, 3, ["x", 0, "y", 1, "z", 2], null);
      b = In.C ? In.C(a, d, e, b, c) : In.call(null, 0, d, e, b, c);
      b = new X(b, null, this.k);
    }
  } else {
    b = null;
  }
  return b;
};
g.J = function() {
  return this;
};
g.lb = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = d[0] * e[0];
    c[1] = d[1] * e[1];
    c[2] = d[2] * e[2];
  } else {
    "number" === typeof b ? (c[0] = d[0] * b, c[1] = d[1] * b, c[2] = d[2] * b) : (c[0] = d[0] * K(b, 0, 0), c[1] = d[1] * K(b, 1, 0), c[2] = d[2] * K(b, 2, 0));
  }
  return new X(c, null, this.k);
};
g.Ib = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 1), z = d ? l[1] : p(f) ? b : K(b, 1, 1);
  b = d ? l[2] : p(f) ? b : K(b, 2, 1);
  d = e ? n[0] : p(h) ? c : K(c, 0, 1);
  f = e ? n[1] : p(h) ? c : K(c, 1, 1);
  c = e ? n[2] : p(h) ? c : K(c, 2, 1);
  a[0] = r * w * d;
  a[1] = t * z * f;
  a[2] = k * b * c;
  return new X(a, null, this.k);
};
g.Zb = function(a, b, c, d) {
  a = this.d;
  var e = new Float32Array(3);
  e[0] = a[0] * b;
  e[1] = a[1] * c;
  e[2] = a[2] * d;
  return new X(e, null, this.k);
};
g.G = function(a, b) {
  return new X(new Float32Array(this.d), this.la, b);
};
g.H = function(a, b) {
  return Hc(new S(null, 4, 5, T, [this.d[0], this.d[1], this.d[2], b], null), this.k);
};
g.call = function() {
  function a(a, b, c) {
    a = this;
    return b instanceof P ? (a = Ln.b ? Ln.b(b) : Ln.call(null, b), p(a) ? a.b ? a.b(this) : a.call(null, this) : c) : 0 <= b && 2 >= b ? a.d[b] : c;
  }
  function b(a, b) {
    a = this;
    if (b instanceof P) {
      var c = Ln.b ? Ln.b(b) : Ln.call(null, b);
      return p(c) ? c.b ? c.b(this) : c.call(null, this) : En(b);
    }
    return 0 <= b && 2 >= b ? a.d[b] : En(b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
g.b = function(a) {
  if (a instanceof P) {
    var b = Ln.b ? Ln.b(a) : Ln.call(null, a);
    return p(b) ? b.b ? b.b(this) : b.call(null, this) : En(a);
  }
  return 0 <= a && 2 >= a ? this.d[a] : En(a);
};
g.a = function(a, b) {
  if (a instanceof P) {
    var c = Ln.b ? Ln.b(a) : Ln.call(null, a);
    return p(c) ? c.b ? c.b(this) : c.call(null, this) : b;
  }
  return 0 <= a && 2 >= a ? this.d[a] : b;
};
g.fb = function(a, b) {
  if (b instanceof X) {
    var c = b.d, d = gd(this.d[0], c[0]);
    return 0 === d ? (d = gd(this.d[1], c[1]), 0 === d ? gd(this.d[2], c[2]) : d) : d;
  }
  d = J(b);
  return 3 === d ? -gd(b, this) : 3 - d;
};
g.Kc = function(a, b, c) {
  return new X(Nn.c ? Nn.c(b, this, c) : Nn.call(null, b, this, c), null, this.k);
};
g.Lc = function(a, b, c, d) {
  var e = Nn.c ? Nn.c(b, this, d) : Nn.call(null, b, this, d);
  e[0] = function() {
    var a = e[0];
    return c.a ? c.a(a, 0) : c.call(null, a, 0);
  }();
  e[1] = function() {
    var a = e[1];
    return c.a ? c.a(a, 1) : c.call(null, a, 1);
  }();
  e[2] = function() {
    var a = e[2];
    return c.a ? c.a(a, 2) : c.call(null, a, 2);
  }();
  return new X(e, null, this.k);
};
g.ab = function(a, b) {
  return Bn.c(this, b, 1E-6);
};
g.bb = function(a, b, c) {
  return Xc(b) && 3 === J(b) ? (a = this.d, b instanceof X ? (b = b.d, p(Bn.c(a[0], b[0], c)) ? p(Bn.c(a[1], b[1], c)) ? Bn.c(a[2], b[2], c) : null : null) : p(Bn.c(a[0], K(b, 0, 0), c)) ? p(Bn.c(a[1], K(b, 1, 0), c)) ? Bn.c(a[2], K(b, 2, 0), c) : null : null) : null;
};
g.Tb = function() {
  var a = this.d, b = a[0], c = a[1], a = a[2], b = b * b + c * c + a * a;
  return Math.sqrt.b ? Math.sqrt.b(b) : Math.sqrt.call(null, b);
};
g.tc = function(a, b) {
  var c = new Float32Array(3), d = this.d;
  if (b instanceof X) {
    var e = b.d;
    c[0] = .5 * (d[0] + e[0]);
    c[1] = .5 * (d[1] + e[1]);
    c[2] = .5 * (d[2] + e[2]);
  } else {
    "number" === typeof b ? (c[0] = .5 * (d[0] + b), c[1] = .5 * (d[1] + b), c[2] = .5 * (d[2] + b)) : (c[0] = .5 * (d[0] + K(b, 0, 0)), c[1] = .5 * (d[1] + K(b, 1, 0)), c[2] = .5 * (d[2] + K(b, 2, 0)));
  }
  return new X(c, null, this.k);
};
g.uc = function(a, b, c) {
  a = new Float32Array(3);
  var d = b instanceof X, e = c instanceof X, f = d ? null : "number" === typeof b, h = e ? null : "number" === typeof c, k = this.d, l = d ? b.d : null, n = e ? c.d : null, r = k[0], t = k[1], k = k[2], w = d ? l[0] : p(f) ? b : K(b, 0, 0), z = d ? l[1] : p(f) ? b : K(b, 1, 0);
  b = d ? l[2] : p(f) ? b : K(b, 2, 0);
  d = e ? n[0] : p(h) ? c : K(c, 0, 0);
  f = e ? n[1] : p(h) ? c : K(c, 1, 0);
  c = e ? n[2] : p(h) ? c : K(c, 2, 0);
  a[0] = (w - r) * d + r;
  a[1] = (z - t) * f + t;
  a[2] = (b - k) * c + k;
  return new X(a, null, this.k);
};
g.vc = function(a, b, c, d, e, f) {
  a = new Float32Array(3);
  var h = d instanceof X, k = "number" === typeof d, l = h ? d.d : null, n = h ? l[0] : k ? d : K(d, 0, 0), r = h ? l[1] : k ? d : K(d, 1, 0);
  d = h ? l[2] : k ? d : K(d, 2, 0);
  var t = b instanceof X, w = c instanceof X, z = t ? null : "number" === typeof b, D = w ? null : "number" === typeof c, k = this.d, H = t ? b.d : null, M = w ? c.d : null, l = k[0], h = k[1], k = k[2], R = t ? H[0] : p(z) ? b : K(b, 0, 0), V = t ? H[1] : p(z) ? b : K(b, 1, 0), z = t ? H[2] : p(z) ? b : K(b, 2, 0);
  b = w ? M[0] : p(D) ? c : K(c, 0, 0);
  t = w ? M[1] : p(D) ? c : K(c, 1, 0);
  c = w ? M[2] : p(D) ? c : K(c, 2, 0);
  l = (R - l) * e + l;
  h = (V - h) * e + h;
  k = (z - k) * e + k;
  a[0] = ((n - b) * e + b - l) * f + l;
  a[1] = ((r - t) * e + t - h) * f + h;
  a[2] = ((d - c) * e + c - k) * f + k;
  return new X(a, null, this.k);
};
function On(a) {
  return a.d[0];
}
function Pn(a) {
  var b = a.d, c = new Float32Array(2);
  c[0] = b[0];
  c[1] = b[0];
  return new W(c, null, Vc(a));
}
function Qn(a) {
  var b = a.d, c = new Float32Array(2);
  c[0] = b[0];
  c[1] = b[1];
  return new W(c, null, Vc(a));
}
function Rn(a) {
  return a.d[1];
}
function Sn(a) {
  var b = a.d, c = new Float32Array(2);
  c[0] = b[1];
  c[1] = b[0];
  return new W(c, null, Vc(a));
}
function Tn(a) {
  var b = a.d, c = new Float32Array(2);
  c[0] = b[1];
  c[1] = b[1];
  return new W(c, null, Vc(a));
}
var Gn = new ta(null, 6, [cl, On, $i, Pn, Gi, Qn, hh, Rn, Fi, Sn, Zj, Tn], null), Ln = Rc([hh, mh, oh, vh, Fi, Gi, Ii, Qi, Si, Vi, Wi, $i, hj, nj, sj, tj, Aj, Mj, Oj, Uj, Wj, Zj, gk, ok, sk, vk, Ek, Fk, Lk, al, cl, pl, Ll, Pl, Rl, Tl, Ul, Xl, bm], [Rn, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26412", "G__26412", -962053720, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[2];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26406", "G__26406", -1433580223, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[1];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26493", "G__26493", -794518221, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[2];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, Sn, Qn, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26445", "G__26445", -1629633319, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[1];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26469", "G__26469", -460808658, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[0];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26415", "G__26415", -1807796099, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[2];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26472", "G__26472", 168068597, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[0];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26463", "G__26463", 1655959664, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(2);
  c[0] = b[2];
  c[1] = b[0];
  return new W(c, null, Vc(a));
}, Pn, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[0];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26475", "G__26475", 455469763, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(2);
  c[0] = b[2];
  c[1] = b[1];
  return new W(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26490", "G__26490", 1732004251, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[2];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26478", "G__26478", -1220080114, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[1];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26451", "G__26451", -1724782016, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[2];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26460", "G__26460", 2074310109, null))], 0)))].join(""));
  }
  return a.d[2];
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[1];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26409", "G__26409", 277495028, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(2);
  c[0] = b[0];
  c[1] = b[2];
  return new W(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26484", "G__26484", 275939058, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[1];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, Tn, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26394", "G__26394", 435919324, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[0];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26454", "G__26454", 1445209111, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[2];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26448", "G__26448", 897264100, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(2);
  c[0] = b[1];
  c[1] = b[2];
  return new W(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[0];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[1];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[0];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26487", "G__26487", -1786283362, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(2);
  c[0] = b[2];
  c[1] = b[2];
  return new W(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26496", "G__26496", -1699339525, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[2];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, On, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26418", "G__26418", -1440242430, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[2];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26433", "G__26433", 1110956738, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[0];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26466", "G__26466", 122854865, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[0];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26457", "G__26457", -1043881831, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[2];
  c[2] = b[2];
  return new X(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[0];
  c[1] = b[1];
  c[2] = b[0];
  return new X(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[0];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  var b = a.d, c = new Float32Array(3);
  c[0] = b[1];
  c[1] = b[1];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}, function(a) {
  if (!(a instanceof X)) {
    throw Error([v("Assert failed: "), v(bh(Gc([Fd(new y("clojure.core", "instance?", "clojure.core/instance?", 2143709132, null), new y(null, "Vec3", "Vec3", 429395803, null), new y(null, "G__26481", "G__26481", 558428434, null))], 0)))].join(""));
  }
  var b = a.d, c = new Float32Array(3);
  c[0] = b[2];
  c[1] = b[1];
  c[2] = b[1];
  return new X(c, null, Vc(a));
}]);
function In(a, b, c, d, e) {
  var f = Jd(d), h = J(f);
  a = function() {
    var a = 1 === h;
    return a ? (a = C(f), c.b ? c.b(a) : c.call(null, a)) : a;
  }();
  if (p(a)) {
    return b[a | 0] = e, b;
  }
  if (h <= J(c) && h === J(e) && J(e) === J(Re.a(Fg, f))) {
    for (var k = 0, l = f;;) {
      if (p(l)) {
        if (a = function() {
          var a = C(l);
          return c.b ? c.b(a) : c.call(null, a);
        }(), p(a)) {
          b[a | 0] = function() {
            var a = k;
            return e.b ? e.b(a) : e.call(null, a);
          }();
          a = k + 1;
          var n = E(l), k = a, l = n;
        } else {
          return En(d);
        }
      } else {
        return b;
      }
    }
  } else {
    return En(d);
  }
}
function Kn(a, b, c) {
  b = b.d;
  for (var d = b[0], e = b[1], f = c;;) {
    if (p(f)) {
      var h = C(f).d;
      c = function() {
        var b = d, c = h[0];
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }();
      b = function() {
        var b = e, c = h[1];
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }();
      f = E(f);
      d = c;
      e = b;
    } else {
      return c = new Float32Array(2), c[0] = d, c[1] = e, c;
    }
  }
}
function Nn(a, b, c) {
  b = b.d;
  for (var d = b[0], e = b[1], f = b[2], h = c;;) {
    if (p(h)) {
      var k = C(h).d;
      c = function() {
        var b = d, c = k[0];
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }();
      b = function() {
        var b = e, c = k[1];
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }();
      var l = function() {
        var b = f, c = k[2];
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }(), h = E(h), d = c, e = b, f = l;
    } else {
      return c = new Float32Array(3), c[0] = d, c[1] = e, c[2] = f, c;
    }
  }
}
var Hn = new W(new Float32Array(2), null, null), Mn = new X(new Float32Array(3), null, null), Un = function Un() {
  switch(arguments.length) {
    case 0:
      return Un.p();
    case 1:
      return Un.b(arguments[0]);
    case 2:
      return Un.a(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Un.p = function() {
  return Hn;
};
Un.b = function(a) {
  return a instanceof W ? a : "number" === typeof a ? Un.a(a, a) : Xc(a) ? Un.a(K(a, 0, 0), K(a, 1, 0)) : Yc(a) ? Un.a(cl.a(a, 0), hh.a(a, 0)) : Fn("Vec2", a);
};
Un.a = function(a, b) {
  var c = new Float32Array(2);
  c[0] = a;
  c[1] = b;
  return new W(c, null, null);
};
Un.o = 2;
var Jn = function Jn() {
  switch(arguments.length) {
    case 0:
      return Jn.p();
    case 1:
      return Jn.b(arguments[0]);
    case 2:
      return Jn.a(arguments[0], arguments[1]);
    case 3:
      return Jn.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Jn.p = function() {
  return Mn;
};
Jn.b = function(a) {
  return a instanceof X ? a : "number" === typeof a ? Jn.c(a, a, a) : Xc(a) ? Jn.c(K(a, 0, 0), K(a, 1, 0), K(a, 2, 0)) : Yc(a) ? Jn.c(cl.a(a, 0), hh.a(a, 0), Mj.a(a, 0)) : Fn("Vec3", a);
};
Jn.a = function(a, b) {
  return Xc(a) ? Jn.c(K(a, 0, 0), K(a, 1, 0), b) : Yc(a) ? Jn.c(cl.a(a, 0), hh.a(a, 0), b) : "number" === typeof a ? Jn.c(a, b, 0) : Fn("Vec3", a);
};
Jn.c = function(a, b, c) {
  var d = new Float32Array(3);
  d[0] = a;
  d[1] = b;
  d[2] = c;
  return new X(d, null, null);
};
Jn.o = 3;
Un.a(1, 0);
Un.a(0, 1);
Jn.c(1, 0, 0);
Jn.c(0, 1, 0);
Jn.c(0, 0, 1);
Un.b(zn);
Un.b(yn);
Jn.b(zn);
Jn.b(yn);
function Vn(a, b) {
  return new Kd(null, function() {
    var c = Fe(a, b);
    return F.a(a, J(c)) ? I(Af(c), Vn(a, ic(b))) : null;
  }, null, null);
}
;function Wn(a) {
  var b = K(a, 0, null), c = wd(a), d = J(a);
  switch(d) {
    case 0:
      return null;
    case 1:
      return b;
    case 2:
      return $m.a(b, C(c));
    default:
      return a = function(a) {
        return function(b) {
          return b * a;
        };
      }(1 / J(a), d, a, b, c, a), xn.q(b, qd, a, c);
  }
}
function Xn(a, b, c) {
  var d = function() {
    return function f(c) {
      return new Kd(null, function() {
        for (;;) {
          var d = A(c);
          if (d) {
            if ($c(d)) {
              var l = Ob(d), n = J(l), r = Od(n);
              a: {
                for (var t = 0;;) {
                  if (t < n) {
                    var w = x.a(l, t), w = $m.c(a, b, w);
                    r.add(w);
                    t += 1;
                  } else {
                    l = !0;
                    break a;
                  }
                }
              }
              return l ? Qd(r.U(), f(Qb(d))) : Qd(r.U(), null);
            }
            r = C(d);
            return I($m.c(a, b, r), f(ic(d)));
          }
          return null;
        }
      }, null, null);
    }(Cn(c));
  }();
  return p(!0) ? d : Hg(d);
}
function Yn(a, b) {
  return Se(function(b) {
    return new S(null, 3, 5, T, [a, b.b ? b.b(0) : b.call(null, 0), b.b ? b.b(1) : b.call(null, 1)], null);
  }, Vn(2, Ud.a(b, new S(null, 1, 5, T, [C(b)], null))));
}
function Zn(a) {
  if (3 < J(a)) {
    var b = K(a, 0, null), c = wd(a);
    return Se(function(a, b) {
      return function(a) {
        var c = K(a, 0, null);
        a = K(a, 1, null);
        return new S(null, 3, 5, T, [b, c, a], null);
      };
    }(a, b, c), Vn(2, c));
  }
  return new S(null, 1, 5, T, [a], null);
}
function $n(a) {
  var b = J(a);
  if (p(F.a ? F.a(3, b) : F.call(null, 3, b))) {
    return new S(null, 1, 5, T, [a], null);
  }
  if (p(F.a ? F.a(4, b) : F.call(null, 4, b))) {
    var b = K(a, 0, null), c = K(a, 1, null), d = K(a, 2, null);
    a = K(a, 3, null);
    return new S(null, 2, 5, T, [new S(null, 3, 5, T, [b, c, d], null), new S(null, 3, 5, T, [b, d, a], null)], null);
  }
  return Yn(Wn(a), a);
}
function ao(a, b, c) {
  return.5 * an(Wm(Tm.a(b, a), Tm.a(c, a)));
}
oe.a(Ne(Zn), Ee.b(function(a) {
  a = O.a(ao, a);
  return An.b ? An.b(a) : An.call(null, a);
}));
oe.a(Ne(Zn), Ee.b(function(a) {
  return Zm(a.b ? a.b(0) : a.call(null, 0), Wm(a.b ? a.b(1) : a.call(null, 1), a.b ? a.b(2) : a.call(null, 2)));
}));
function bo(a, b, c, d) {
  this.ca = a;
  this.t = b;
  this.m = c;
  this.l = d;
  this.g = 2229667594;
  this.u = 8192;
}
g = bo.prototype;
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "points":
      return this.ca;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#thi.ng.geom.types.Line2{", ", ", "}", c, Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 1 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 1, [U, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new bo(this.ca, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(U, b) : Q.call(null, U, b)) ? new bo(c, this.t, this.m, null) : new bo(this.ca, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.G = function(a, b) {
  return new bo(this.ca, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function co(a, b, c, d) {
  this.ca = a;
  this.t = b;
  this.m = c;
  this.l = d;
  this.g = 2229667594;
  this.u = 8192;
}
g = co.prototype;
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "points":
      return this.ca;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#thi.ng.geom.types.Polygon2{", ", ", "}", c, Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 1 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 1, [U, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new co(this.ca, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(U, b) : Q.call(null, U, b)) ? new co(c, this.t, this.m, null) : new co(this.ca, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.G = function(a, b) {
  return new co(this.ca, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function eo(a, b, c, d, e) {
  this.kb = a;
  this.size = b;
  this.t = c;
  this.m = d;
  this.l = e;
  this.g = 2229667594;
  this.u = 8192;
}
g = eo.prototype;
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "p":
      return this.kb;
    case "size":
      return this.size;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#thi.ng.geom.types.Rect2{", ", ", "}", c, Ud.a(new S(null, 2, 5, T, [new S(null, 2, 5, T, [Sl, this.kb], null), new S(null, 2, 5, T, [xj, this.size], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 2 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 2, [xj, null, Sl, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new eo(this.kb, this.size, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(Sl, b) : Q.call(null, Sl, b)) ? new eo(c, this.size, this.t, this.m, null) : p(Q.a ? Q.a(xj, b) : Q.call(null, xj, b)) ? new eo(this.kb, c, this.t, this.m, null) : new eo(this.kb, this.size, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 2, 5, T, [new S(null, 2, 5, T, [Sl, this.kb], null), new S(null, 2, 5, T, [xj, this.size], null)], null), this.m));
};
g.G = function(a, b) {
  return new eo(this.kb, this.size, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function fo(a, b, c, d) {
  this.ca = a;
  this.t = b;
  this.m = c;
  this.l = d;
  this.g = 2229667594;
  this.u = 8192;
}
g = fo.prototype;
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "points":
      return this.ca;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#thi.ng.geom.types.Triangle2{", ", ", "}", c, Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 1 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 1, [U, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new fo(this.ca, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(U, b) : Q.call(null, U, b)) ? new fo(c, this.t, this.m, null) : new fo(this.ca, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 1, 5, T, [new S(null, 2, 5, T, [U, this.ca], null)], null), this.m));
};
g.G = function(a, b) {
  return new fo(this.ca, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function go(a, b, c, d, e, f, h) {
  this.Xa = a;
  this.Qa = b;
  this.Ra = c;
  this.ya = d;
  this.t = e;
  this.m = f;
  this.l = h;
  this.g = 2229667594;
  this.u = 8192;
}
g = go.prototype;
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "vertices":
      return this.Xa;
    case "faces":
      return this.Qa;
    case "fnormals":
      return this.Ra;
    case "attribs":
      return this.ya;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#thi.ng.geom.types.BasicMesh{", ", ", "}", c, Ud.a(new S(null, 4, 5, T, [new S(null, 2, 5, T, [zh, this.Xa], null), new S(null, 2, 5, T, [Zk, this.Qa], null), new S(null, 2, 5, T, [Wl, this.Ra], null), new S(null, 2, 5, T, [ck, this.ya], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 4 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 4, [zh, null, ck, null, Zk, null, Wl, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new go(this.Xa, this.Qa, this.Ra, this.ya, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(zh, b) : Q.call(null, zh, b)) ? new go(c, this.Qa, this.Ra, this.ya, this.t, this.m, null) : p(Q.a ? Q.a(Zk, b) : Q.call(null, Zk, b)) ? new go(this.Xa, c, this.Ra, this.ya, this.t, this.m, null) : p(Q.a ? Q.a(Wl, b) : Q.call(null, Wl, b)) ? new go(this.Xa, this.Qa, c, this.ya, this.t, this.m, null) : p(Q.a ? Q.a(ck, b) : Q.call(null, ck, b)) ? new go(this.Xa, this.Qa, this.Ra, c, this.t, this.m, null) : new go(this.Xa, this.Qa, this.Ra, this.ya, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 4, 5, T, [new S(null, 2, 5, T, [zh, this.Xa], null), new S(null, 2, 5, T, [Zk, this.Qa], null), new S(null, 2, 5, T, [Wl, this.Ra], null), new S(null, 2, 5, T, [ck, this.ya], null)], null), this.m));
};
g.G = function(a, b) {
  return new go(this.Xa, this.Qa, this.Ra, this.ya, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function ho(a, b) {
  var c = io, d = (b ? p(p(null) ? null : b.Hd) || (b.mc ? 0 : q(hn, b)) : q(hn, b)) ? function(a) {
    return jn(b, a);
  } : b, e = Vd(ld(function(a) {
    return function(b, c) {
      var d = a.b ? a.b(c) : a.call(null, c);
      return Lb(b, c, d);
    };
  }(d), Ib(Yf), kn.b(a)));
  return ld(function(a, b) {
    return function(a, d) {
      var e = Se(b, d);
      return c.a ? c.a(a, e) : c.call(null, a, e);
    };
  }(d, e), qn(a), nn(a));
}
;function jo(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D, H, M, R) {
  this.O = a;
  this.P = b;
  this.Q = c;
  this.S = d;
  this.R = e;
  this.m11 = f;
  this.m12 = h;
  this.m13 = k;
  this.T = l;
  this.m21 = n;
  this.m22 = r;
  this.m23 = t;
  this.X = w;
  this.m31 = z;
  this.m32 = D;
  this.m33 = H;
  this.bc = M;
  this.k = R;
  this.g = 31850714;
  this.u = 0;
}
g = jo.prototype;
g.Hd = !0;
g.hd = function(a, b) {
  var c = K(b, 0, null), d = K(b, 1, null), e = K(b, 2, null), f = K(b, 3, null);
  if (p(f)) {
    return new S(null, 4, 5, T, [c * this.O + d * this.R + e * this.T + f * this.X, c * this.P + d * this.m11 + e * this.m21 + f * this.m31, c * this.Q + d * this.m12 + e * this.m22 + f * this.m32, c * this.S + d * this.m13 + e * this.m23 + f * this.m33], null);
  }
  f = new Float32Array(3);
  f[0] = c * this.O + d * this.R + e * this.T + this.X;
  f[1] = c * this.P + d * this.m11 + e * this.m21 + this.m31;
  f[2] = c * this.Q + d * this.m12 + e * this.m22 + this.m32;
  return new X(f, null, Vc(b));
};
g.mb = function(a, b) {
  return Um.a(this, b);
};
g.ub = function(a, b) {
  return dn(this, b);
};
g.toString = function() {
  return O.a(v, Ud.h("[", Ge(1, Me.a(Ke(" "), this)), Gc(["]"], 0)));
};
g.Fc = function(a, b) {
  var c = Math.sin.b ? Math.sin.b(b) : Math.sin.call(null, b), d = Math.cos.b ? Math.cos.b(b) : Math.cos.call(null, b);
  return new jo(this.O * d + this.R * c, this.P * d + this.m11 * c, this.Q * d + this.m12 * c, this.S * d + this.m13 * c, this.R * d - this.O * c, this.m11 * d - this.P * c, this.m12 * d - this.Q * c, this.m13 * d - this.S * c, this.T, this.m21, this.m22, this.m23, this.X, this.m31, this.m32, this.m33, null, this.k);
};
g.w = function(a, b) {
  switch(b | 0) {
    case 0:
      return this.O;
    case 1:
      return this.P;
    case 2:
      return this.Q;
    case 3:
      return this.S;
    case 4:
      return this.R;
    case 5:
      return this.m11;
    case 6:
      return this.m12;
    case 7:
      return this.m13;
    case 8:
      return this.T;
    case 9:
      return this.m21;
    case 10:
      return this.m22;
    case 11:
      return this.m23;
    case 12:
      return this.X;
    case 13:
      return this.m31;
    case 14:
      return this.m32;
    case 15:
      return this.m33;
    default:
      var c = [v("Illegal argument"), v(": "), v(b)].join("");
      throw Error(c);;
  }
};
g.fa = function(a, b, c) {
  switch(b | 0) {
    case 0:
      return this.O;
    case 1:
      return this.P;
    case 2:
      return this.Q;
    case 3:
      return this.S;
    case 4:
      return this.R;
    case 5:
      return this.m11;
    case 6:
      return this.m12;
    case 7:
      return this.m13;
    case 8:
      return this.T;
    case 9:
      return this.m21;
    case 10:
      return this.m22;
    case 11:
      return this.m23;
    case 12:
      return this.X;
    case 13:
      return this.m31;
    case 14:
      return this.m32;
    case 15:
      return this.m33;
    default:
      return c;
  }
};
g.D = function() {
  return this.k;
};
g.V = function() {
  return A(new S(null, 15, 5, T, [this.P, this.Q, this.S, this.R, this.m11, this.m12, this.m13, this.T, this.m21, this.m22, this.m23, this.X, this.m31, this.m32, this.m33], null));
};
g.K = function() {
  return 16;
};
g.A = function() {
  var a = this.bc;
  return p(a) ? a : this.bc = pc(this);
};
g.r = function(a, b) {
  return Xc(b) && 16 === J(b) && le(function() {
    return function(a) {
      return F.a(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1));
    };
  }(this), Ee.c(Bf, this, b));
};
g.Vb = function(a, b) {
  return new jo(this.O + b.O, this.P + b.P, this.Q + b.Q, this.S + b.S, this.R + b.R, this.m11 + b.m11, this.m12 + b.m12, this.m13 + b.m13, this.T + b.T, this.m21 + b.m21, this.m22 + b.m22, this.m23 + b.m23, this.X + b.X, this.m31 + b.m31, this.m32 + b.m32, this.m33 + b.m33, null, this.k);
};
g.Ub = function(a, b) {
  return new jo(this.O - b.O, this.P - b.P, this.Q - b.Q, this.S - b.S, this.R - b.R, this.m11 - b.m11, this.m12 - b.m12, this.m13 - b.m13, this.T - b.T, this.m21 - b.m21, this.m22 - b.m22, this.m23 - b.m23, this.X - b.X, this.m31 - b.m31, this.m32 - b.m32, this.m33 - b.m33, null, this.k);
};
g.Wb = function(a, b) {
  return new jo(this.O * b.O + this.R * b.P + this.T * b.Q + this.X * b.S, this.P * b.O + this.m11 * b.P + this.m21 * b.Q + this.m31 * b.S, this.Q * b.O + this.m12 * b.P + this.m22 * b.Q + this.m32 * b.S, this.S * b.O + this.m13 * b.P + this.m23 * b.Q + this.m33 * b.S, this.O * b.R + this.R * b.m11 + this.T * b.m12 + this.X * b.m13, this.P * b.R + this.m11 * b.m11 + this.m21 * b.m12 + this.m31 * b.m13, this.Q * b.R + this.m12 * b.m11 + this.m22 * b.m12 + this.m32 * b.m13, this.S * b.R + this.m13 * 
  b.m11 + this.m23 * b.m12 + this.m33 * b.m13, this.O * b.T + this.R * b.m21 + this.T * b.m22 + this.X * b.m23, this.P * b.T + this.m11 * b.m21 + this.m21 * b.m22 + this.m31 * b.m23, this.Q * b.T + this.m12 * b.m21 + this.m22 * b.m22 + this.m32 * b.m23, this.S * b.T + this.m13 * b.m21 + this.m23 * b.m22 + this.m33 * b.m23, this.O * b.X + this.R * b.m31 + this.T * b.m32 + this.X * b.m33, this.P * b.X + this.m11 * b.m31 + this.m21 * b.m32 + this.m31 * b.m33, this.Q * b.X + this.m12 * b.m31 + this.m22 * 
  b.m32 + this.m32 * b.m33, this.S * b.X + this.m13 * b.m31 + this.m23 * b.m32 + this.m33 * b.m33, null, this.k);
};
g.ba = function() {
  return E(this);
};
g.N = function() {
  return this.O;
};
g.nb = function(a, b) {
  var c = "number" === typeof b ? new S(null, 3, 5, T, [b, b, b], null) : b, d = K(c, 0, null), e = K(c, 1, null), c = K(c, 2, null);
  return gn.q(this, d, e, c);
};
g.Jc = function(a, b, c, d) {
  return new jo(this.O, this.P, this.Q, this.S, this.R, this.m11, this.m12, this.m13, this.T, this.m21, this.m22, this.m23, this.O * b + this.R * c + this.T * d + this.X, this.P * b + this.m11 * c + this.m21 * d + this.m31, this.Q * b + this.m12 * c + this.m22 * d + this.m32, this.S * b + this.m13 * c + this.m23 * d + this.m33, null, this.k);
};
g.J = function() {
  return this;
};
g.lb = function(a, b) {
  var c = "number" === typeof b ? new S(null, 3, 5, T, [b, b, b], null) : b, d = K(c, 0, null), e = K(c, 1, null), c = K(c, 2, null);
  return en.q(this, d, e, c);
};
g.Zb = function(a, b, c, d) {
  return new jo(this.O * b, this.P * b, this.Q * b, this.S * b, this.R * c, this.m11 * c, this.m12 * c, this.m13 * c, this.T * d, this.m21 * d, this.m22 * d, this.m23 * d, this.X, this.m31, this.m32, this.m33, null, this.k);
};
g.G = function(a, b) {
  return new jo(this.O, this.P, this.Q, this.S, this.R, this.m11, this.m12, this.m13, this.T, this.m21, this.m22, this.m23, this.X, this.m31, this.m32, this.m33, this.bc, b);
};
g.H = function(a, b) {
  return new S(null, 17, 5, T, [this.O, this.P, this.Q, this.S, this.R, this.m11, this.m12, this.m13, this.T, this.m21, this.m22, this.m23, this.X, this.m31, this.m32, this.m33, b], null);
};
g.ab = function(a, b) {
  return Bn.c(this, b, 1E-6);
};
g.bb = function(a, b, c) {
  return(a = Xc(b)) ? (a = 16 === J(b)) ? Bn.c(Re.a(Nc, this), b, c) : a : a;
};
var ko = new jo(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, null, null);
function io(a, b) {
  return new go(Re.a(zh.b(a), b), Mc.a(Zk.b(a), b), Wl.b(a), ck.b(a));
}
g = go.prototype;
g.mb = function(a, b) {
  return ho(this, b);
};
g.Sb = function() {
  return new go(Fg, Fg, $d, $d);
};
g.Pb = function() {
  return on.a(this, Jn.p());
};
g.Qb = function(a, b) {
  return fn(this, gn.a(ko, Tm.a(b, pn(this))));
};
g.Rb = function() {
  return Wn(A(zh.b(this)));
};
g.Fd = !0;
g.Zc = function() {
  return Zk.b(this);
};
g.Yc = function(a, b) {
  return io(this, b);
};
g.nb = function(a, b) {
  return ho(this, function() {
    return function(a) {
      return Sm.a(a, b);
    };
  }(this));
};
g.lb = function(a, b) {
  return ho(this, function() {
    return function(a) {
      return Um.a(a, b);
    };
  }(this));
};
g.Zb = function(a, b, c, d) {
  return ho(this, function() {
    return function(a) {
      return Um.q(a, b, c, d);
    };
  }(this));
};
g.Gc = function() {
  return wn.a(this, $d);
};
g.Hc = function(a, b) {
  var c = Fh.b(b), d = p(c) ? c : Zn, c = qn(this), e = Gc([nn(this)], 0), d = O.a(Ud, O.c(Ee, d, e));
  return rn(c, d);
};
g.$c = function(a, b) {
  return ld(io, this, (b ? p(p(null) ? null : b.Fd) || (b.mc ? 0 : q(ln, b)) : q(ln, b)) ? nn(b) : b);
};
g.$b = function() {
  return zh.b(this);
};
g.Dc = function() {
  return this;
};
g.Ec = function(a, b) {
  return rn(dk.b(b), Zk.b(this));
};
var lo = function lo() {
  switch(arguments.length) {
    case 1:
      return lo.b(arguments[0]);
    case 2:
      return lo.a(arguments[0], arguments[1]);
    case 4:
      return lo.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
lo.b = function(a) {
  var b = K(a, 0, null);
  a = K(a, 1, null);
  return new bo(new S(null, 2, 5, T, [Un.b(b), Un.b(a)], null));
};
lo.a = function(a, b) {
  return new bo(new S(null, 2, 5, T, [Un.b(a), Un.b(b)], null));
};
lo.q = function(a, b, c, d) {
  return new bo(new S(null, 2, 5, T, [Un.a(a, b), Un.a(c, d)], null));
};
lo.o = 4;
g = bo.prototype;
g.mb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, U);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, U);
  return new bo(new S(null, 2, 5, T, [jn(b, c.b ? c.b(0) : c.call(null, 0)), jn(b, c.b ? c.b(1) : c.call(null, 1))], null));
};
g.ub = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, U);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, U);
  return new bo(new S(null, 2, 5, T, [cn(c.b ? c.b(0) : c.call(null, 0), b), cn(c.b ? c.b(1) : c.call(null, 1), b)], null));
};
g.Xb = function(a) {
  a = dd(a) ? O.a(xe, a) : a;
  a = L.a(a, U);
  K(a, 0, null);
  K(a, 1, null);
  a = dd(this) ? O.a(xe, this) : this;
  var b = L.a(a, U);
  a = K(b, 0, null);
  b = K(b, 1, null);
  b = bn.b(Tm.a(b, a));
  return new bo(new S(null, 2, 5, T, [a, Sm.a(a, b)], null));
};
g.Yb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a, c = L.a(c, U);
  K(c, 0, null);
  K(c, 1, null);
  var c = dd(this) ? O.a(xe, this) : this, d = L.a(c, U), c = K(d, 0, null), d = K(d, 1, null), d = bn.a(Tm.a(d, c), b);
  return new bo(new S(null, 2, 5, T, [c, Sm.a(c, d)], null));
};
g.Pb = function(a) {
  a = dd(a) ? O.a(xe, a) : a;
  a = L.a(a, U);
  K(a, 0, null);
  K(a, 1, null);
  a = dd(this) ? O.a(xe, this) : this;
  var b = L.a(a, U);
  a = K(b, 0, null);
  var b = K(b, 1, null), c = $m.a(a, b);
  return new bo(new S(null, 2, 5, T, [Tm.a(a, c), Tm.a(b, c)], null));
};
g.Qb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a, c = L.a(c, U);
  K(c, 0, null);
  K(c, 1, null);
  var c = dd(this) ? O.a(xe, this) : this, d = L.a(c, U), c = K(d, 0, null), d = K(d, 1, null), e = Tm.a(b, $m.a(c, d));
  return new bo(new S(null, 2, 5, T, [Sm.a(c, e), Sm.a(d, e)], null));
};
g.Rb = function(a) {
  a = dd(a) ? O.a(xe, a) : a;
  L.a(a, U);
  a = dd(this) ? O.a(xe, this) : this;
  a = L.a(a, U);
  return $m.a(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1));
};
g.nb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, U);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, U);
  return new bo(new S(null, 2, 5, T, [Sm.a(c.b ? c.b(0) : c.call(null, 0), b), Sm.a(c.b ? c.b(1) : c.call(null, 1), b)], null));
};
g.lb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, U);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, U);
  return new bo(new S(null, 2, 5, T, [Um.a(c.b ? c.b(0) : c.call(null, 0), b), Um.a(c.b ? c.b(1) : c.call(null, 1), b)], null));
};
g.Ib = function(a, b, c) {
  a = dd(a) ? O.a(xe, a) : a;
  L.a(a, U);
  a = dd(this) ? O.a(xe, this) : this;
  a = L.a(a, U);
  return new bo(new S(null, 2, 5, T, [Um.c(a.b ? a.b(0) : a.call(null, 0), b, c), Um.c(a.b ? a.b(1) : a.call(null, 1), b, c)], null));
};
g.$b = function() {
  return U.b(this);
};
g.jd = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, U);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, U);
  return Xn(c.b ? c.b(0) : c.call(null, 0), c.b ? c.b(1) : c.call(null, 1), b);
};
g.Tb = function(a) {
  a = dd(a) ? O.a(xe, a) : a;
  L.a(a, U);
  a = dd(this) ? O.a(xe, this) : this;
  a = L.a(a, U);
  return Xm(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1));
};
function mo() {
  var a = Y.width, b = Y.height;
  return new eo(Un.a(0, 0), Un.a(a, b));
}
g = eo.prototype;
g.mb = function(a, b) {
  return fn(un.b(this), b);
};
g.ub = function(a, b) {
  return cn(un.b(this), b);
};
g.Pb = function(a) {
  a = dd(a) ? O.a(xe, a) : a;
  L.a(a, xj);
  a = dd(this) ? O.a(xe, this) : this;
  a = L.a(a, xj);
  return new eo(Um.a(a, -.5), a);
};
g.Qb = function(a, b) {
  var c = dd(a) ? O.a(xe, a) : a;
  L.a(c, xj);
  c = dd(this) ? O.a(xe, this) : this;
  c = L.a(c, xj);
  return new eo(Vm(c, -.5, b), c);
};
g.Rb = function() {
  return Vm(xj.b(this), .5, Sl.b(this));
};
g.ed = function() {
  return new co(kn.b(this));
};
g.fd = function() {
  return vn.a(this, $d);
};
g.gd = function(a, b) {
  var c = dd(b) ? O.a(xe, b) : b, d = L.c(c, ph, 2), e = L.a(c, Qj), f = L.a(c, Kj), h = 1 / (p(e) ? e : d), k = 1 / (p(f) ? f : d), l = Lg(1, h), n = Lg(1, k), r = Um.c(xj.b(this), h, k);
  return function(a, b, c, d, e, f, h, k, l, n, r) {
    return function Dd(Ja) {
      return new Kd(null, function(a, b, c, d, e, f, h, k, l, n, r) {
        return function() {
          for (var t = Ja;;) {
            var w = A(t);
            if (w) {
              var z = w, D = C(z);
              if (w = A(function(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D) {
                return function ue(H) {
                  return new Kd(null, function(a, b, c, d, e, f, h, k, l, n) {
                    return function() {
                      for (;;) {
                        var a = A(H);
                        if (a) {
                          if ($c(a)) {
                            var c = Ob(a), d = J(c), e = Od(d);
                            a: {
                              for (var f = 0;;) {
                                if (f < d) {
                                  var h = x.a(c, f), k = tn(n, Un.a(h, b)), h = K(k, 0, null), k = K(k, 1, null), h = Dn(h), k = Dn(k), h = new eo(Un.a(h, k), l);
                                  e.add(h);
                                  f += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                            }
                            return c ? Qd(e.U(), ue(Qb(a))) : Qd(e.U(), null);
                          }
                          e = C(a);
                          c = tn(n, Un.a(e, b));
                          e = K(c, 0, null);
                          c = K(c, 1, null);
                          e = Dn(e);
                          c = Dn(c);
                          return I(new eo(Un.a(e, c), l), ue(ic(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, h, k, l, n, r, t, w, z, D), null, null);
                };
              }(t, D, z, w, a, b, c, d, e, f, h, k, l, n, r)(c))) {
                return Ud.a(w, Dd(ic(t)));
              }
              t = ic(t);
            } else {
              return null;
            }
          }
        };
      }(a, b, c, d, e, f, h, k, l, n, r), null, null);
    };
  }(h, k, l, n, r, this, b, c, d, e, f)(n);
};
g.nb = function(a, b) {
  return new eo(Sm.a(Sl.b(this), b), xj.b(this));
};
g.lb = function(a, b) {
  return new eo(Um.a(Sl.b(this), b), Um.a(xj.b(this), b));
};
g.Ib = function(a, b, c) {
  return new eo(Um.c(Sl.b(this), b, c), Um.c(xj.b(this), b, c));
};
g.Gc = function() {
  var a = kn.b(this), b = K(a, 0, null), c = K(a, 1, null), d = K(a, 2, null), a = K(a, 3, null);
  return new S(null, 2, 5, T, [new fo(new S(null, 3, 5, T, [b, c, d], null)), new fo(new S(null, 3, 5, T, [b, d, a], null))], null);
};
g.Hc = function(a, b) {
  var c = dd(b) ? O.a(xe, b) : b, d = L.c(c, Fh, $n);
  return ke(oe.a(Ne(function(a, b, c, d, l) {
    return function(a) {
      a = kn.b(a);
      return l.b ? l.b(a) : l.call(null, a);
    };
  }(this, b, c, c, d)), Ee.b(function() {
    return function(a) {
      return new fo(a);
    };
  }(this, b, c, c, d))), vn.a(this, c));
};
g.$b = function() {
  var a = Sl.b(this), b = Sm.a(a, xj.b(this));
  return new S(null, 4, 5, T, [a, Un.a(b.b ? b.b(0) : b.call(null, 0), a.b ? a.b(1) : a.call(null, 1)), b, Un.a(a.b ? a.b(0) : a.call(null, 0), b.b ? b.b(1) : b.call(null, 1))], null);
};
g.dd = function(a, b) {
  return Vm(b, xj.b(this), Sl.b(this));
};
g.Dc = function() {
  return sn.a(this, $d);
};
g.Ec = function(a, b) {
  var c = dk.b(b);
  return mn(p(c) ? c : new go(Fg, Fg, $d, $d), Se(Jn, kn.b(this)));
};
function no() {
  var a = mo(), b = Pi.b(G.b ? G.b(Z) : G.call(null, Z)), c = dd(a) ? O.a(xe, a) : a, d = L.a(c, Sl), e = L.a(c, xj), f = dd(b) ? O.a(xe, b) : b, h = L.a(f, rk), k = L.a(f, Kl), l = L.a(f, oj), n = K(l, 0, null), r = K(l, 1, null), t = L.a(f, dj), w = K(t, 0, null), z = K(t, 1, null), D = L.a(f, zi), H = K(D, 0, null), M = K(D, 1, null), R = cl.b(d) + cl.b(e) / 2, V = cl.b(d) - w, la = function() {
    return function(a, b) {
      return a + eh(b - a);
    };
  }(R, V, a, c, d, e, b, f, h, k, l, n, r, t, w, z, D, H, M), Oa = k / 2, ib = hh.b(e), N = hh.b(d) + ib / 2, a = function(a, b, c, d, e, f) {
    return function() {
      return c(f - e * d, f + e * d);
    };
  }(R, V, la, Oa, ib, N, a, c, d, e, b, f, h, k, l, n, r, t, w, z, D, H, M);
  a();
  for (b = Nc;;) {
    if (0 < h) {
      c = V + la(w, z), V = c + la(H, M), d = a(), e = .5 > eh(1) ? 1 : -1, e = d + e * la(n, r), b = Mc.a(b, lo.q(c, d, V, e)), --h;
    } else {
      return b;
    }
  }
}
;var oo = Math.PI;
function po(a) {
  return F.a(a, 0) ? 0 : a / Math.abs(a);
}
;function qo(a, b, c, d, e, f, h) {
  this.Ta = a;
  this.Ua = b;
  this.za = c;
  this.Aa = d;
  this.t = e;
  this.m = f;
  this.l = h;
  this.g = 2229667594;
  this.u = 8192;
}
g = qo.prototype;
g.dc = function() {
  return Mg().call(null, this);
};
g.cc = function() {
  return Ee.a(function(a) {
    return function(b) {
      var c = K(b, 0, null);
      b = K(b, 1, null);
      return Af(Ee.a(pe(L, a), new S(null, 2, 5, T, [c, b], null)));
    };
  }(this), new S(null, 4, 5, T, [new S(null, 2, 5, T, [Ng, Og], null), new S(null, 2, 5, T, [Og, Pg], null), new S(null, 2, 5, T, [Pg, Qg], null), new S(null, 2, 5, T, [Qg, Ng], null)], null));
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "tl":
      return this.Ta;
    case "tr":
      return this.Ua;
    case "bl":
      return this.za;
    case "br":
      return this.Aa;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#bru-3.frame.Frame{", ", ", "}", c, Ud.a(new S(null, 4, 5, T, [new S(null, 2, 5, T, [Ng, this.Ta], null), new S(null, 2, 5, T, [Og, this.Ua], null), new S(null, 2, 5, T, [Qg, this.za], null), new S(null, 2, 5, T, [Pg, this.Aa], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 4 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 4, [Ng, null, Og, null, Qg, null, Pg, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new qo(this.Ta, this.Ua, this.za, this.Aa, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(Ng, b) : Q.call(null, Ng, b)) ? new qo(c, this.Ua, this.za, this.Aa, this.t, this.m, null) : p(Q.a ? Q.a(Og, b) : Q.call(null, Og, b)) ? new qo(this.Ta, c, this.za, this.Aa, this.t, this.m, null) : p(Q.a ? Q.a(Qg, b) : Q.call(null, Qg, b)) ? new qo(this.Ta, this.Ua, c, this.Aa, this.t, this.m, null) : p(Q.a ? Q.a(Pg, b) : Q.call(null, Pg, b)) ? new qo(this.Ta, this.Ua, this.za, c, this.t, this.m, null) : new qo(this.Ta, this.Ua, this.za, this.Aa, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 4, 5, T, [new S(null, 2, 5, T, [Ng, this.Ta], null), new S(null, 2, 5, T, [Og, this.Ua], null), new S(null, 2, 5, T, [Qg, this.za], null), new S(null, 2, 5, T, [Pg, this.Aa], null)], null), this.m));
};
g.G = function(a, b) {
  return new qo(this.Ta, this.Ua, this.za, this.Aa, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
function ro(a, b, c) {
  var d = function(b) {
    return function() {
      return b(-a, a);
    };
  }(function(a, b) {
    return a + eh(b - a);
  }), e = We.q(b, new S(null, 1, 5, T, [Ak], null), rd, d() + 1);
  b = We.q(c, new S(null, 1, 5, T, [Ak], null), rd, d() + 1);
  d = gm(e);
  c = K(d, 0, null);
  d = K(d, 1, null);
  e = gm(b);
  b = K(e, 0, null);
  e = K(e, 1, null);
  return new qo(c, b, d, e, null, null, null);
}
;function so(a, b, c, d, e) {
  function f(a) {
    return O.c(Ig, function(b) {
      return Xm(a, O.a($m, U.b(b)));
    }, c);
  }
  return Af(function() {
    return function(a) {
      return function l(c) {
        return new Kd(null, function(a) {
          return function() {
            for (;;) {
              var f = A(c);
              if (f) {
                var h = f;
                if ($c(h)) {
                  var z = Ob(h), D = J(z), H = Od(D);
                  return function() {
                    for (var c = 0;;) {
                      if (c < D) {
                        var l = x.a(z, c);
                        Rd(H, Af(function() {
                          return function(a, b, c, f, h, l, n, r) {
                            return function Ua(t) {
                              return new Kd(null, function(a, b, c, f, h, l, n, r) {
                                return function() {
                                  for (;;) {
                                    var a = A(t);
                                    if (a) {
                                      if ($c(a)) {
                                        var c = Ob(a), f = J(c), h = Od(f);
                                        return function() {
                                          for (var a = 0;;) {
                                            if (a < f) {
                                              var l = x.a(c, a), n = h, t = Un.a(b * d, l * e), w = U.b(r(t)), l = bn.b(O.a(Tm, Cd(w))), t = Tm.a(t, w.b ? w.b(0) : w.call(null, 0)), t = po(Wm(t, l)), w = 1 * oo, t = t * ((oo - w) / 2 + eh(1) * w), l = cn(l, t);
                                              n.add(l);
                                              a += 1;
                                            } else {
                                              return!0;
                                            }
                                          }
                                        }() ? Qd(h.U(), Ua(Qb(a))) : Qd(h.U(), null);
                                      }
                                      var l = C(a);
                                      return I(function() {
                                        var a = Un.a(b * d, l * e), c = U.b(r(a)), f = bn.b(O.a(Tm, Cd(c))), a = Tm.a(a, c.b ? c.b(0) : c.call(null, 0)), a = po(Wm(a, f)), c = 1 * oo, a = a * ((oo - c) / 2 + eh(1) * c);
                                        return cn(f, a);
                                      }(), Ua(ic(a)));
                                    }
                                    return null;
                                  }
                                };
                              }(a, b, c, f, h, l, n, r), null, null);
                            };
                          }(c, l, z, D, H, h, f, a)(Lg(b, 1));
                        }()));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Qd(H.U(), l(Qb(h))) : Qd(H.U(), null);
                }
                var M = C(h);
                return I(Af(function() {
                  return function(a, b, c, f) {
                    return function N(h) {
                      return new Kd(null, function(a, b, c, f) {
                        return function() {
                          for (;;) {
                            var b = A(h);
                            if (b) {
                              if ($c(b)) {
                                var c = Ob(b), l = J(c), n = Od(l);
                                return function() {
                                  for (var b = 0;;) {
                                    if (b < l) {
                                      var h = x.a(c, b), r = n, t = Un.a(a * d, h * e), w = U.b(f(t)), h = bn.b(O.a(Tm, Cd(w))), t = Tm.a(t, w.b ? w.b(0) : w.call(null, 0)), t = po(Wm(t, h)), w = 1 * oo, t = t * ((oo - w) / 2 + eh(1) * w), h = cn(h, t);
                                      r.add(h);
                                      b += 1;
                                    } else {
                                      return!0;
                                    }
                                  }
                                }() ? Qd(n.U(), N(Qb(b))) : Qd(n.U(), null);
                              }
                              var r = C(b);
                              return I(function() {
                                var b = Un.a(a * d, r * e), c = U.b(f(b)), h = bn.b(O.a(Tm, Cd(c))), b = Tm.a(b, c.b ? c.b(0) : c.call(null, 0)), b = po(Wm(b, h)), c = 1 * oo, b = b * ((oo - c) / 2 + eh(1) * c);
                                return cn(h, b);
                              }(), N(ic(b)));
                            }
                            return null;
                          }
                        };
                      }(a, b, c, f), null, null);
                    };
                  }(M, h, f, a)(Lg(b, 1));
                }()), l(ic(h)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(f)(Lg(a, 1));
  }());
}
function to(a, b, c, d, e) {
  var f = J(a), h = J(C(a));
  b = b / d * (f - 1);
  h = c / e * (h - 1);
  c = Math.floor(b) | 0;
  e = Math.ceil(b) | 0;
  b -= c;
  d = Math.floor(h) | 0;
  f = Math.ceil(h) | 0;
  h -= d;
  return bn.b(Sm.a(Sm.c(Um.a(Ve(a, new S(null, 2, 5, T, [e, f], null)), b * h), Um.a(Ve(a, new S(null, 2, 5, T, [e, d], null)), b * (1 - h)), Um.a(Ve(a, new S(null, 2, 5, T, [c, f], null)), (1 - b) * h)), Um.a(Ve(a, new S(null, 2, 5, T, [c, d], null)), (1 - b) * (1 - h))));
}
;var uo = new ta(null, 3, [Ji, new S(null, 2, 5, T, ["2.0", "Try :features [:present] for similar effect"], null), ll, new S(null, 2, 5, T, ["2.0", "Use :features [:keep-on-top] instead."], null), Xi, new S(null, 2, 5, T, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function vo(a) {
  a = Gg(a);
  p(a.b ? a.b(bk) : a.call(null, bk)) && ch(Gc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return null == a ? null : fb(a, bk);
}
function wo(a) {
  var b = We.c(a, new S(null, 1, 5, T, [lh], null), vo);
  return Re.a($d, Qe(za, function() {
    return function(a) {
      return function e(b) {
        return new Kd(null, function() {
          return function() {
            for (;;) {
              var a = A(b);
              if (a) {
                if ($c(a)) {
                  var c = Ob(a), l = J(c), n = Od(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = x.a(c, a), e = K(b, 0, null), f = K(b, 1, null), b = n;
                        var h = void 0, h = e, h = uo.b ? uo.b(h) : uo.call(null, h);
                        p(h) ? (f = K(h, 0, null), h = K(h, 1, null), ch(Gc([e, "option was removed in Quil", f, ".", h], 0)), e = null) : e = new S(null, 2, 5, T, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Qd(n.U(), e(Qb(a))) : Qd(n.U(), null);
                }
                var r = C(a), t = K(r, 0, null), w = K(r, 1, null);
                return I(function() {
                  var a, b = t;
                  a = uo.b ? uo.b(b) : uo.call(null, b);
                  return p(a) ? (b = K(a, 0, null), a = K(a, 1, null), ch(Gc([t, "option was removed in Quil", b, ".", a], 0)), null) : new S(null, 2, 5, T, [t, w], null);
                }(), e(ic(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;function xo(a) {
  var b = yo;
  if (p(L.a(b, a))) {
    return L.a(b, a);
  }
  var c;
  a: {
    c = [a];
    var d = c.length;
    if (d <= Xf) {
      for (var e = 0, f = Ib($d);;) {
        if (e < d) {
          var h = e + 1, f = Lb(f, c[e], null), e = h
        } else {
          c = new Dg(null, Kb(f), null);
          break a;
        }
      }
    } else {
      for (e = 0, f = Ib(Fg);;) {
        if (e < d) {
          h = e + 1, f = Jb(f, c[e]), e = h;
        } else {
          c = Kb(f);
          break a;
        }
      }
    }
  }
  if (p(me(c, Vf(b)))) {
    return a;
  }
  throw Error([v("Expecting a keyword, got: "), v(a), v(". Expected one of: "), v(Af(jd(Uf(b))))].join(""));
}
;var Y = null, yo = new ta(null, 4, [Xh, Processing.prototype.PConstants.JAVA2D, uk, Processing.prototype.PConstants.P2D, Yl, Processing.prototype.PConstants.P3D, Ti, Processing.prototype.PConstants.OPENGL], null), zo = function zo() {
  switch(arguments.length) {
    case 2:
      return zo.a(arguments[0], arguments[1]);
    case 3:
      return zo.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
zo.a = function(a, b) {
  return Y.size(a | 0, b | 0);
};
zo.c = function(a, b, c) {
  return Y.size(a | 0, b | 0, xo(c));
};
zo.o = 3;
function Ao(a, b) {
  for (var c = A(Rc([Ei, Zi, cj, ij, Cj, lk, pk, wk, xk, yk, Ck, Rk, nl], [ik, Mh, Ci, am, Cj, jk, Dh, Eh, Dj, Ui, Tj, Ch, nl])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.w(null, f), k = K(h, 0, null), l = K(h, 1, null), n = function() {
        var a = l;
        return b.b ? b.b(a) : b.call(null, a);
      }();
      if (p(n)) {
        var r = n;
        a[Jd(k)] = function(b, c, d, e, f) {
          return function() {
            var b = Y;
            Y = a;
            try {
              return f.p ? f.p() : f.call(null);
            } finally {
              Y = b;
            }
          };
        }(c, d, e, f, r, n, h, k, l);
      }
      f += 1;
    } else {
      if (n = A(c)) {
        h = n;
        if ($c(h)) {
          c = Ob(h), f = Qb(h), d = c, e = J(c), c = f;
        } else {
          var r = C(h), k = K(r, 0, null), l = K(r, 1, null), t = function() {
            var a = l;
            return b.b ? b.b(a) : b.call(null, a);
          }();
          if (p(t)) {
            var w = t;
            a[Jd(k)] = function(b, c, d, e, f) {
              return function() {
                var b = Y;
                Y = a;
                try {
                  return f.p ? f.p() : f.call(null);
                } finally {
                  Y = b;
                }
              };
            }(c, d, e, f, w, t, r, k, l, h, n);
          }
          c = E(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function Bo(a) {
  var b = Cg(Gc([new ta(null, 1, [xj, new S(null, 2, 5, T, [500, 300], null)], null), function(b) {
    return b.b ? b.b(a) : b.call(null, a);
  }.call(null, O.a(oe, I(wo, Ej.a(a, Nc))))], 0)), c = function() {
    var a = xj.b(b);
    return p(a) ? a : new S(null, 2, 5, T, [200, 200], null);
  }(), d = wj.b(b), e = Gg(lh.b(b)), f = We.c(We.c(b, new S(null, 1, 5, T, [Cj], null), function(a, b, c, d) {
    return function(e) {
      return function(a, b, c) {
        return function() {
          O.a(zo, Ud.a(b, p(c) ? new S(null, 1, 5, T, [c], null) : Nc));
          return p(e) ? e.p ? e.p() : e.call(null) : null;
        };
      }(a, b, c, d);
    };
  }(b, c, d, e)), new S(null, 1, 5, T, [Ci], null), function(a, b, c, d) {
    return function(e) {
      return p(e) ? function() {
        return function() {
          var a = -1 * Y.mouseScroll;
          return e.b ? e.b(a) : e.call(null, a);
        };
      }(a, b, c, d) : null;
    };
  }(b, c, d, e)), c = new Processing.Sketch(function(a, b, c, d, e) {
    return function(a) {
      Ao(a, e);
      a.Gb = we ? we(null) : te.call(null, null);
      return a.Ed = we ? we(60) : te.call(null, 60);
    };
  }(b, c, d, e, f));
  fd(e, Lj) && (c.options.globalKeyEvents = !0);
  return c;
}
var Co = function Co() {
  return Co.h(0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Co.h = function(a) {
  var b = O.a(xe, a);
  a = function() {
    var a = Pj.b(b), c = document;
    return ba(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = wj.b(b);
    return p(a) ? a : uk;
  }();
  return p(a) ? (p(a.Wc) ? F.a(c, a.Wc) || console.warn("WARNING: Using different context on one canvas!") : a.Wc = c, new Processing(a, Bo(b))) : console.warn("WARNING: Cannot create sketch. :host is not specified.");
};
Co.o = 0;
Co.s = function(a) {
  return Co.h(A(a));
};
var Do = we ? we(jc) : te.call(null, jc);
function Eo(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
Lm(window, "load", function() {
  for (var a = 1 >= document.body.childNodes.length, b = A(G.b ? G.b(Do) : G.call(null, Do)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e);
      p(a) && Eo(Ok.b(f));
      Fh.b(f).call(null);
      e += 1;
    } else {
      if (b = A(b)) {
        c = b, $c(c) ? (b = Ob(c), d = Qb(c), c = b, f = J(b), b = d, d = f) : (f = C(c), p(a) && Eo(Ok.b(f)), Fh.b(f).call(null), b = E(c), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
});
function Fo() {
  return p(null) ? null : Y;
}
Rc([Ah, Jh, qi, si, xi, Sj, nk, Dk, Pk, Uk, Xk, hl, ol, ql, Jl], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
Rc([nh, sh, th, Lh, Nh, ni, wi, Di, Ni, Yi, Gj, Xj, ak, hk, qk, Jk, Qk, il, dm, fm], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, 
Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_NATIVE_FONTS, Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, 
Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_NATIVE_FONTS]);
var Go = Rc([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [ri, Nk, bj, Gh, aj, kk, qh, Ol, $k, Nj, mk, Ql, Oh, zk, kh, ml, vj, yi, fk, cm]), Ho = function Ho() {
  switch(arguments.length) {
    case 2:
      return Ho.a(arguments[0], arguments[1]);
    case 4:
      return Ho.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 6:
      return Ho.ea(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Ho.a = function(a, b) {
  return O.a(Ho, Ud.a(a, b));
};
Ho.q = function(a, b, c, d) {
  return Fo().line(a, b, c, d);
};
Ho.ea = function(a, b, c, d, e, f) {
  return Fo().line(a, b, c, d, e, f);
};
Ho.o = 6;
function Io() {
  var a = Y.mouseButton;
  return p(F.a ? F.a(37, a) : F.call(null, 37, a)) ? cm : p(F.a ? F.a(39, a) : F.call(null, 39, a)) ? Nk : p(F.a ? F.a(3, a) : F.call(null, 3, a)) ? Bj : null;
}
var Jo = function Jo() {
  switch(arguments.length) {
    case 1:
      return Jo.b(arguments[0]);
    case 2:
      return Jo.a(arguments[0], arguments[1]);
    case 3:
      return Jo.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Jo.b = function(a) {
  return O.a(Jo, a);
};
Jo.a = function(a, b) {
  return Fo().translate(a, b);
};
Jo.c = function(a, b, c) {
  return Fo().translate(a, b, c);
};
Jo.o = 3;
function Ko(a) {
  var b = Cj.a(a, function() {
    return null;
  });
  return Qc.c(a, Cj, function(a) {
    return function() {
      var b = Y.Gb, e = a.p ? a.p() : a.call(null);
      return Be.a ? Be.a(b, e) : Be.call(null, b, e);
    };
  }(b));
}
function Lo(a) {
  var b = nl.a(a, function() {
    return null;
  }), c = ej.a(a, od), b = function(a, b) {
    return function() {
      var c = De.a(Y.Gb, F.a(Y.frameCount, 1) ? od : b);
      return a.b ? a.b(c) : a.call(null, c);
    };
  }(b, c);
  return Qc.c(Sc.a(a, ej), nl, b);
}
function Mo() {
  return new ta(null, 2, [cl, Y.mouseX, hh, Y.mouseY], null);
}
function No() {
  return new ta(null, 3, [cl, Y.mouseX, hh, Y.mouseY, Ai, Io()], null);
}
function Oo() {
  var a;
  a = Y.key;
  var b = Y.keyCode;
  a = p(F.a(65535, ("" + v(a)).charCodeAt())) ? L.c(Go, b, Kk) : Id.b("" + v(a));
  return new ta(null, 3, [oi, a, jh, Y.keyCode, kl, Y.key], null);
}
var Po = function Po() {
  switch(arguments.length) {
    case 2:
      return Po.a(arguments[0], arguments[1]);
    case 3:
      return Po.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Po.a = function(a, b) {
  return Po.c(a, b, null);
};
Po.c = function(a, b, c) {
  var d = a.b ? a.b(b) : a.call(null, b);
  return p(d) ? Qc.c(a, b, p(c) ? function(a) {
    return function() {
      return De.c(Y.Gb, a, c.p ? c.p() : c.call(null));
    };
  }(d, d) : function(a) {
    return function() {
      return De.a(Y.Gb, a);
    };
  }(d, d)) : a;
};
Po.o = 3;
function Qo(a, b) {
  return ld(function(a, b) {
    return b instanceof P ? Po.a(a, b) : O.c(Po, a, b);
  }, a, b);
}
function Ro(a) {
  var b = Ci.b(a);
  return p(b) ? Qc.c(a, Ci, function(a) {
    return function(b) {
      return De.c(Y.Gb, a, b);
    };
  }(b, b)) : a;
}
function ap(a) {
  return Ro(Qo(Lo(Ko(a)), Gc([Ij, ek, new S(null, 2, 5, T, [Tj, Mo], null), new S(null, 2, 5, T, [Mh, Mo], null), new S(null, 2, 5, T, [Dj, No], null), new S(null, 2, 5, T, [Eh, Mo], null), new S(null, 2, 5, T, [Dh, No], null), new S(null, 2, 5, T, [Ui, function() {
    return new ta(null, 4, [cl, Y.mouseX, hh, Y.mouseY, tk, Y.pmouseX, uh, Y.pmouseY], null);
  }], null), new S(null, 2, 5, T, [am, function() {
    return new ta(null, 5, [cl, Y.mouseX, hh, Y.mouseY, tk, Y.pmouseX, uh, Y.pmouseY, Ai, Io()], null);
  }], null), new S(null, 2, 5, T, [ik, Oo], null), jk, new S(null, 2, 5, T, [Ch, Oo], null), vi], 0)));
}
;Id.b(" ");
function bp(a) {
  return ap(a);
}
;function cp(a, b, c, d, e, f) {
  this.position = a;
  this.Ya = b;
  this.length = c;
  this.t = d;
  this.m = e;
  this.l = f;
  this.g = 2229667594;
  this.u = 8192;
}
g = cp.prototype;
g.dc = function() {
  var a = dd(this) ? O.a(xe, this) : this, b = L.a(a, Sk), c = K(b, 0, null), b = K(b, 1, null), d = L.a(a, Ak), e = L.a(a, mj), a = d / 2 * Math.sin(e * oo / 180), d = d / 2 * Math.cos(e * oo / 180);
  return new S(null, 2, 5, T, [Un.a(c - a, b - d), Un.a(c + a, b + d)], null);
};
g.cc = function() {
  return gm(this);
};
g.I = function(a, b) {
  return Xa.c(this, b, null);
};
g.B = function(a, b, c) {
  switch(b instanceof P ? b.ga : null) {
    case "position":
      return this.position;
    case "angle":
      return this.Ya;
    case "length":
      return this.length;
    default:
      return L.c(this.m, b, c);
  }
};
g.F = function(a, b, c) {
  return Rg(b, function() {
    return function(a) {
      return Rg(b, Xg, "", " ", "", c, a);
    };
  }(this), "#bru-3.bone.Bone{", ", ", "}", c, Ud.a(new S(null, 3, 5, T, [new S(null, 2, 5, T, [Sk, this.position], null), new S(null, 2, 5, T, [mj, this.Ya], null), new S(null, 2, 5, T, [Ak, this.length], null)], null), this.m));
};
g.D = function() {
  return this.t;
};
g.K = function() {
  return 3 + J(this.m);
};
g.A = function() {
  var a = this.l;
  return null != a ? a : this.l = a = xd(this);
};
g.r = function(a, b) {
  var c;
  c = p(b) ? (c = this.constructor === b.constructor) ? Mf(this, b) : c : b;
  return p(c) ? !0 : !1;
};
g.ta = function(a, b) {
  return fd(new Dg(null, new ta(null, 3, [mj, null, Ak, null, Sk, null], null), null), b) ? Sc.a(Hc(Re.a($d, this), this.t), b) : new cp(this.position, this.Ya, this.length, this.t, Yd(Sc.a(this.m, b)), null);
};
g.ma = function(a, b, c) {
  return p(Q.a ? Q.a(Sk, b) : Q.call(null, Sk, b)) ? new cp(c, this.Ya, this.length, this.t, this.m, null) : p(Q.a ? Q.a(mj, b) : Q.call(null, mj, b)) ? new cp(this.position, c, this.length, this.t, this.m, null) : p(Q.a ? Q.a(Ak, b) : Q.call(null, Ak, b)) ? new cp(this.position, this.Ya, c, this.t, this.m, null) : new cp(this.position, this.Ya, this.length, this.t, Qc.c(this.m, b, c), null);
};
g.J = function() {
  return A(Ud.a(new S(null, 3, 5, T, [new S(null, 2, 5, T, [Sk, this.position], null), new S(null, 2, 5, T, [mj, this.Ya], null), new S(null, 2, 5, T, [Ak, this.length], null)], null), this.m));
};
g.G = function(a, b) {
  return new cp(this.position, this.Ya, this.length, b, this.m, this.l);
};
g.H = function(a, b) {
  return Zc(b) ? Za(this, x.a(b, 0), x.a(b, 1)) : ld(Ma, this, b);
};
Un.a(0, 0);
function re(a, b, c, d) {
  var e = dd(d) ? O.a(xe, d) : d, f = L.a(e, Sk), h = L.a(e, mj), k = K(a, 0, null), l = K(a, 1, null), n = K(b, 0, null), r = K(b, 1, null);
  a = function() {
    return function(a, b) {
      return a + eh(b - a);
    };
  }(d, e, f, h, a, k, l, b, n, r);
  return new cp(Sm.a(f, Un.a(a(k, l), 0)), h + a(-c, c), a(n, r), null, null, null);
}
;var dp = Rc([wh, Mi, pj, uj, Gk, bl, Vl, Zl, em], [new Dg(null, new ta(null, 2, [pi, null, fj, null], null), null), new Dg(null, new ta(null, 4, [Wh, null, ui, null, Ri, null, Hj, null], null), null), new Dg(null, new ta(null, 2, [pi, null, Rj, null], null), null), new Dg(null, new ta(null, 1, [Wh, null], null), null), new Dg(null, new ta(null, 1, [pi, null], null), null), new Dg(null, new ta(null, 2, [pi, null, ui, null], null), null), Fg, new Dg(null, new ta(null, 1, [rj, null], null), null), new Dg(null, 
new ta(null, 1, [Ri, null], null), null)]), ep = new S(null, 8, 5, T, [fj, Ri, pi, Wh, rj, Hj, Rj, ui], null);
function fp(a) {
  return Ee.a(function(b) {
    var c = a.b ? a.b(dp) : a.call(null, dp);
    return b.b ? b.b(c) : b.call(null, c);
  }, ep);
}
var gh = new S(null, 4, 5, T, [new S(null, 4, 5, T, [jl, Fj, Fj, Nl], null), new S(null, 4, 5, T, [jl, Fj, jl, Fj], null), new S(null, 4, 5, T, [Fj, Nl, jl, Fj], null), new S(null, 4, 5, T, [Fj, Nl, Fj, Nl], null)], null);
function gp(a, b) {
  var c = dd(a) ? O.a(xe, a) : a, d = L.a(c, Yk), e = L.a(c, Bh), f = L.a(c, Yj), c = L.a(c, $l), h = K(b, 0, null), k = K(h, 0, null);
  K(h, 1, null);
  var l = K(b, 1, null), h = K(l, 0, null), n = K(l, 1, null), r = K(n, 0, null);
  K(n, 1, null);
  K(l, 2, null);
  var t = K(b, 2, null), l = K(t, 0, null), w = K(t, 1, null), n = K(w, 0, null);
  K(w, 1, null);
  K(t, 2, null);
  w = K(b, 3, null);
  t = K(w, 0, null);
  K(w, 1, null);
  k = $m.c(h, k, d);
  d = $m.c(l, t, d);
  return p(p(c) ? n : r) ? new S(null, 3, 5, T, [$m.c(h, l, e), $m.c(k, d, e), $m.c(h, l, e + f)], null) : new S(null, 1, 5, T, [$m.c(h, l, e)], null);
}
function hp(a, b) {
  var c = dd(a) ? O.a(xe, a) : a, d = L.a(c, Yk), e = L.a(c, Bh), c = K(b, 0, null), f = K(c, 0, null);
  K(c, 1, null);
  var h = K(b, 1, null), c = K(h, 0, null);
  K(h, 1, null);
  var h = K(h, 2, null), k = K(b, 2, null), l = K(k, 0, null);
  K(k, 1, null);
  if (F.a(h, Fj)) {
    return new S(null, 2, 5, T, [$m.c(c, f, d), $m.c(c, l, d)], null);
  }
  k = (h = F.a(h, jl)) ? f : l;
  l = Tm.a(c, h ? l : f);
  f = an(l);
  l = bn.b(l);
  f = Um.a(l, f * e);
  e = Sm.a(c, f);
  d = $m.c($m.c(e, c, .6666), Sm.a(k, f), d);
  return h ? new S(null, 2, 5, T, [d, e], null) : new S(null, 2, 5, T, [e, d], null);
}
function ip(a, b) {
  var c = K(b, 0, null), d = K(b, 1, null), e = Qc.c(a, $l, !0), f = He(gm(c)), h = He(Te(2, fp(d))), k = He(Pc(gh, fh())), l = function(a, b, c, d, e, f, h) {
    return function(k) {
      return Ee.a(function() {
        return function(a) {
          return Ge(a, Fe(a + 4, k));
        };
      }(a, b, c, d, e, f, h), Lg(4, 1));
    };
  }(e, f, h, k, b, c, d), n = Te(3, Me.h(f, h, Gc([k], 0))), r = l(n);
  return O.a(Ud, Ee.a(function(b, c, d, e, f, h, k, l) {
    return function(c) {
      return Re.a(Re.a(hp(a, Df(Af(c), 0, 3)), gp(a, c)), Cd(gp(b, l(c))));
    };
  }(e, f, h, k, l, n, r, function(a, b, c, d, e, f, h, k, l, n) {
    return function(r) {
      return Cd(Ee.a(function() {
        return function(a) {
          return new S(null, 2, 5, T, [C(a), Cd(C(E(a)))], null);
        };
      }(a, b, c, d, e, f, h, k, l, n), r));
    };
  }(e, f, h, k, l, n, r, b, c, d), b, c, d), r));
}
;var Z, jp = Rc([ih, rh, xh, yh, Hh, Ih, Oi, Pi, gj, jj, kj, zj, Vj, Bk, Hk, Ik, Mk, Vk, Wk, Ml], [!1, .3, !1, 20, !1, !0, !1, new ta(null, 5, [rk, 10, Kl, .8333, oj, new S(null, 2, 5, T, [20, 60], null), dj, new S(null, 2, 5, T, [10, 300], null), zi, new S(null, 2, 5, T, [50, 100], null)], null), 20, 4, new S(null, 2, 5, T, [80, 120], null), 50, !1, new S(null, 2, 5, T, [50, 100], null), 12, 10, !1, 60, 5, new ta(null, 3, [Yk, .0333, Bh, .3333, Yj, .1111], null)]);
Z = we ? we(jp) : te.call(null, jp);
function kp(a, b) {
  var c = Vk.b(G.b ? G.b(Z) : G.call(null, Z)), d = new S(null, 9, 5, T, [Gk, wh, em, bl, Zl, uj, Vl, pj, Mi], null), e = Ee.a(pe(ip, Ml.b(G.b ? G.b(Z) : G.call(null, Z))), Te(2, Me.a(a, d)));
  return Ee.a(function(a, b, c, d) {
    return function(a) {
      return Ee.a(d, a);
    };
  }(c, d, e, function(a) {
    return function(c) {
      var d = K(c, 0, null), e = K(c, 1, null);
      return Sm.a(c, Um.a(to(b, d, e, Y.width, Y.height), a));
    };
  }(c, d, e)), e);
}
function lp() {
  var a, b = new cp(Un.a(0, Y.height / 2), 0, 0);
  a = Fe;
  var c = Ik.b(G.b ? G.b(Z) : G.call(null, Z)) + 1, d = kj.b(G.b ? G.b(Z) : G.call(null, Z)), e = Bk.b(G.b ? G.b(Z) : G.call(null, Z)), f = gj.b(G.b ? G.b(Z) : G.call(null, Z)), b = Le(qe(d, e, f), b);
  a = ic(a(c, b));
  c = Ee.c(Bf, a, ic(a));
  b = pe(ro, rh.b(G.b ? G.b(Z) : G.call(null, Z)));
  c = Ee.a(pe(O, b), c);
  b = no();
  d = Hk.b(G.b ? G.b(Z) : G.call(null, Z));
  e = jj.b(G.b ? G.b(Z) : G.call(null, Z));
  d = so(d, e, b, Y.width / (d - 1), Y.height / (e - 1));
  e = kp(c, d);
  return new ta(null, 5, [Kh, a, Li, c, qj, e, Jj, b, Hi, d], null);
}
function mp(a, b) {
  var c = new ta(null, 4, [cm, b, Nk, b, Bi, b, ti, b], null);
  return ld(function(a, b) {
    return function(c, h) {
      return We.c(We.c(We.c(We.c(c, new S(null, 1, 5, T, [cm], null), function(a, b) {
        return function(a) {
          return b(cl, h, sd, a);
        };
      }(a, b)), new S(null, 1, 5, T, [Nk], null), function(a, b) {
        return function(a) {
          return b(cl, h, td, a);
        };
      }(a, b)), new S(null, 1, 5, T, [Bi], null), function(a, b) {
        return function(a) {
          return b(hh, h, sd, a);
        };
      }(a, b)), new S(null, 1, 5, T, [ti], null), function(a, b) {
        return function(a) {
          return b(hh, h, td, a);
        };
      }(a, b));
    };
  }(c, function() {
    return function(a, b, c, h) {
      var k = a.b ? a.b(b) : a.call(null, b);
      a = a.b ? a.b(h) : a.call(null, h);
      c = c.a ? c.a(k, a) : c.call(null, k, a);
      return p(c) ? b : h;
    };
  }(c)), c, a);
}
function np(a) {
  var b = gm(a), c = K(b, 0, null);
  a = K(c, 0, null);
  var c = K(c, 1, null), d = K(b, 1, null), b = K(d, 0, null), d = K(d, 1, null), e = Wk.b(G.b ? G.b(Z) : G.call(null, Z));
  Ho.q(a, c, b, d);
  Fo().ellipse(a, c, e, e);
  Fo().ellipse(b, d, e, e);
}
function op(a) {
  var b = gm(a), c = hm(a);
  a = Wk.b(G.b ? G.b(Z) : G.call(null, Z));
  Fo().fill(17, 110, 191);
  Fo().stroke(17, 110, 191);
  for (var c = A(c), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.w(null, f), k = K(h, 0, null), l = K(k, 0, null), k = K(k, 1, null), n = K(h, 1, null), h = K(n, 0, null), n = K(n, 1, null);
      Ho.q(l, k, h, n);
      f += 1;
    } else {
      if (c = A(c)) {
        $c(c) ? (e = Ob(c), c = Qb(c), d = e, e = J(e)) : (f = C(c), e = K(f, 0, null), d = K(e, 0, null), e = K(e, 1, null), l = K(f, 1, null), f = K(l, 0, null), l = K(l, 1, null), Ho.q(d, e, f, l), c = E(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  b = A(b);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      l = d.w(null, f), c = K(l, 0, null), l = K(l, 1, null), Fo().ellipse(c, l, a, a), f += 1;
    } else {
      if (b = A(b)) {
        $c(b) ? (d = Ob(b), b = Qb(b), c = d, e = J(d), d = c) : (d = C(b), c = K(d, 0, null), l = K(d, 1, null), Fo().ellipse(c, l, a, a), b = E(b), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
function pp(a) {
  Fo().beginShape();
  a = A(a);
  for (var b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.w(null, d), f = K(e, 0, null), e = K(e, 1, null);
      Fo().vertex(f, e);
      d += 1;
    } else {
      if (a = A(a)) {
        $c(a) ? (c = Ob(a), a = Qb(a), b = c, c = J(c)) : (c = C(a), b = K(c, 0, null), c = K(c, 1, null), Fo().vertex(b, c), a = E(a), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  F.a(lj, lj);
  Fo().endShape(2);
}
function qp(a, b, c, d) {
  var e = Wk.b(G.b ? G.b(Z) : G.call(null, Z));
  Ho.q(a, b, c, d);
  Fo().ellipse(c, d, e, e);
}
function rp() {
  var a = Y.Ed;
  Be.a ? Be.a(a, 10) : Be.call(null, a, 10);
  Y.frameRate(10);
  return lp();
}
function sp(a) {
  return a;
}
function tp(a) {
  var b = Kh.b(a), c = qj.b(a), d = ld(Re, Nc, c), e = Un.a(Y.width / 2, Y.height / 2), f = mp(d, e), h = Y.width / 2 - (cl.b(Nk.b(f)) + cl.b(cm.b(f))) / 2, k = Y.height - yh.b(G.b ? G.b(Z) : G.call(null, Z)) - hh.b(ti.b(f));
  Fo().background(14);
  Fo().fill(255);
  Fo().stroke(205);
  Fo().pushMatrix();
  Jo.a(h, k);
  if (p(Oi.b(G.b ? G.b(Z) : G.call(null, Z)))) {
    for (var l = A(b), n = null, r = 0, t = 0;;) {
      if (t < r) {
        var w = n.w(null, t);
        np(w);
        t += 1;
      } else {
        var z = A(l);
        if (z) {
          var D = z;
          if ($c(D)) {
            var H = Ob(D), M = Qb(D), R = H, V = J(H), l = M, n = R, r = V
          } else {
            var la = C(D);
            np(la);
            l = E(D);
            n = null;
            r = 0;
          }
          t = 0;
        } else {
          break;
        }
      }
    }
  }
  if (p(Vj.b(G.b ? G.b(Z) : G.call(null, Z)))) {
    for (var Oa = A(Li.b(a)), ib = null, N = 0, Dd = 0;;) {
      if (Dd < N) {
        var Ja = ib.w(null, Dd);
        op(Ja);
        Dd += 1;
      } else {
        var Ra = A(Oa);
        if (Ra) {
          var Ka = Ra;
          if ($c(Ka)) {
            var Wa = Ob(Ka), Ua = Qb(Ka), hb = Wa, pb = J(Wa), Oa = Ua, ib = hb, N = pb
          } else {
            var vb = C(Ka);
            op(vb);
            Oa = E(Ka);
            ib = null;
            N = 0;
          }
          Dd = 0;
        } else {
          break;
        }
      }
    }
  }
  if (p(Ih.b(G.b ? G.b(Z) : G.call(null, Z)))) {
    if (p(Hh.b(G.b ? G.b(Z) : G.call(null, Z))) && Fo().noFill(), p(xh.b(G.b ? G.b(Z) : G.call(null, Z)))) {
      Fo().pushStyle();
      Fo().noStroke();
      for (var qb = A(c), wb = null, Bb = 0, xb = 0;;) {
        if (xb < Bb) {
          var kc = wb.w(null, xb);
          pp(kc);
          xb += 1;
        } else {
          var lc = A(qb);
          if (lc) {
            var Pb = lc;
            if ($c(Pb)) {
              var Ic = Ob(Pb), Ed = Qb(Pb), ae = Ic, Ie = J(Ic), qb = Ed, wb = ae, Bb = Ie
            } else {
              var Tf = C(Pb);
              pp(Tf);
              qb = E(Pb);
              wb = null;
              Bb = 0;
            }
            xb = 0;
          } else {
            break;
          }
        }
      }
      Fo().popStyle();
      Fo().noFill();
      for (var Je = A(c), Ph = null, Qh = 0, gf = 0;;) {
        if (gf < Qh) {
          var So = Ph.w(null, gf);
          pp(So);
          gf += 1;
        } else {
          var dl = A(Je);
          if (dl) {
            var hf = dl;
            if ($c(hf)) {
              var el = Ob(hf), To = Qb(hf), Uo = el, Vo = J(el), Je = To, Ph = Uo, Qh = Vo
            } else {
              var zp = C(hf);
              pp(zp);
              Je = E(hf);
              Ph = null;
              Qh = 0;
            }
            gf = 0;
          } else {
            break;
          }
        }
      }
    } else {
      for (var ue = A(qj.b(a)), Rh = null, Sh = 0, jf = 0;;) {
        if (jf < Sh) {
          var Wo = Rh.w(null, jf);
          pp(Wo);
          jf += 1;
        } else {
          var fl = A(ue);
          if (fl) {
            var kf = fl;
            if ($c(kf)) {
              var gl = Ob(kf), Xo = Qb(kf), Yo = gl, Zo = J(gl), ue = Xo, Rh = Yo, Sh = Zo
            } else {
              var $o = C(kf);
              pp($o);
              ue = E(kf);
              Rh = null;
              Sh = 0;
            }
            jf = 0;
          } else {
            break;
          }
        }
      }
    }
  }
  if (p(ih.b(G.b ? G.b(Z) : G.call(null, Z)))) {
    var wg = Hi.b(a), Th = zj.b(G.b ? G.b(Z) : G.call(null, Z)), xg = Vk.b(G.b ? G.b(Z) : G.call(null, Z)), lf = Y.width + 1, ve = Y.height + 1;
    Fo().pushStyle();
    Fo().fill(242, 53, 53);
    Fo().stroke(242, 53, 53);
    for (var Uh = A(Lg(lf, Th)), Vh = null, Yh = 0, nf = 0;;) {
      if (nf < Yh) {
        for (var ye = Vh.w(null, nf), Zh = A(Lg(ve, Th)), $h = null, ai = 0, of = 0;;) {
          if (of < ai) {
            var bi = $h.w(null, of), rl = Sm.a(Um.a(to(wg, ye, bi, lf, ve), xg), Un.a(ye, bi)), Ap = K(rl, 0, null), Bp = K(rl, 1, null);
            qp(ye, bi, Ap, Bp);
            of += 1;
          } else {
            var sl = A(Zh);
            if (sl) {
              var pf = sl;
              if ($c(pf)) {
                var tl = Ob(pf), Cp = Qb(pf), Dp = tl, Ep = J(tl), Zh = Cp, $h = Dp, ai = Ep
              } else {
                var ci = C(pf), ul = Sm.a(Um.a(to(wg, ye, ci, lf, ve), xg), Un.a(ye, ci)), Fp = K(ul, 0, null), Gp = K(ul, 1, null);
                qp(ye, ci, Fp, Gp);
                Zh = E(pf);
                $h = null;
                ai = 0;
              }
              of = 0;
            } else {
              break;
            }
          }
        }
        nf += 1;
      } else {
        var vl = A(Uh);
        if (vl) {
          var qf = vl;
          if ($c(qf)) {
            var wl = Ob(qf), Hp = Qb(qf), Ip = wl, Jp = J(wl), Uh = Hp, Vh = Ip, Yh = Jp
          } else {
            for (var ze = C(qf), di = A(Lg(ve, Th)), ei = null, fi = 0, rf = 0;;) {
              if (rf < fi) {
                var gi = ei.w(null, rf), xl = Sm.a(Um.a(to(wg, ze, gi, lf, ve), xg), Un.a(ze, gi)), Kp = K(xl, 0, null), Lp = K(xl, 1, null);
                qp(ze, gi, Kp, Lp);
                rf += 1;
              } else {
                var yl = A(di);
                if (yl) {
                  var sf = yl;
                  if ($c(sf)) {
                    var zl = Ob(sf), Mp = Qb(sf), Np = zl, Op = J(zl), di = Mp, ei = Np, fi = Op
                  } else {
                    var hi = C(sf), Al = Sm.a(Um.a(to(wg, ze, hi, lf, ve), xg), Un.a(ze, hi)), Pp = K(Al, 0, null), Qp = K(Al, 1, null);
                    qp(ze, hi, Pp, Qp);
                    di = E(sf);
                    ei = null;
                    fi = 0;
                  }
                  rf = 0;
                } else {
                  break;
                }
              }
            }
            Uh = E(qf);
            Vh = null;
            Yh = 0;
          }
          nf = 0;
        } else {
          break;
        }
      }
    }
    Fo().popStyle();
  }
  if (p(Mk.b(G.b ? G.b(Z) : G.call(null, Z)))) {
    var Rp = Jj.b(a);
    Fo().pushStyle();
    Fo().strokeWeight(2);
    Fo().stroke(10, 180, 10);
    for (var ii = A(Rp), ji = null, ki = 0, tf = 0;;) {
      if (tf < ki) {
        var li = ji.w(null, tf), Sp = dd(li) ? O.a(xe, li) : li, Bl = L.a(Sp, U), Cl = K(Bl, 0, null), Tp = K(Cl, 0, null), Up = K(Cl, 1, null), Dl = K(Bl, 1, null), Vp = K(Dl, 0, null), Wp = K(Dl, 1, null);
        Ho.q(Tp, Up, Vp, Wp);
        tf += 1;
      } else {
        var El = A(ii);
        if (El) {
          var uf = El;
          if ($c(uf)) {
            var Fl = Ob(uf), Xp = Qb(uf), Yp = Fl, Zp = J(Fl), ii = Xp, ji = Yp, ki = Zp
          } else {
            var mi = C(uf), $p = dd(mi) ? O.a(xe, mi) : mi, Gl = L.a($p, U), Hl = K(Gl, 0, null), aq = K(Hl, 0, null), bq = K(Hl, 1, null), Il = K(Gl, 1, null), cq = K(Il, 0, null), dq = K(Il, 1, null);
            Ho.q(aq, bq, cq, dq);
            ii = E(uf);
            ji = null;
            ki = 0;
          }
          tf = 0;
        } else {
          break;
        }
      }
    }
    Fo().popStyle();
  }
  return Fo().popMatrix();
}
function up() {
  return lp();
}
;function vp() {
  return Co.h(Gc([Pj, "bru-3", ej, sp, xj, new S(null, 2, 5, T, [1200, 300], null), yj, "BRU-3", Cj, rp, Dj, up, Ej, new S(null, 1, 5, T, [bp], null), nl, tp], 0));
}
var wp = ["bru_3", "logo", "bru_3"], xp = aa;
wp[0] in xp || !xp.execScript || xp.execScript("var " + wp[0]);
for (var yp;wp.length && (yp = wp.shift());) {
  var eq;
  if (eq = !wp.length) {
    eq = void 0 !== vp;
  }
  eq ? xp[yp] = vp : xp = xp[yp] ? xp[yp] : xp[yp] = {};
}
p(me(function(a) {
  return F.a(Tk, a);
}, null)) || De.c(Do, Mc, new ta(null, 2, [Fh, vp, Ok, "bru-3"], null));

})();
