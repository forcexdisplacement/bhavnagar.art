(window.webpackJsonp=window.webpackJsonp||[]).push([[19,14,15],{317:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0f0b06da",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(21),r=n(22),c=function(){function t(){Object(o.a)(this,t),this.prevSize={w:0,h:0},this.checkTime=0,this.interval=500}return Object(r.a)(t,[{key:"check",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=performance.now();return!(e-this.checkTime<this.interval)&&(this.checkTime=e,!!t||(window.innerWidth!==this.prevSize.w||window.innerHeight!==this.prevSize.h)&&(this.prevSize.w=window.innerWidth,this.prevSize.h=window.innerHeight,!0))}}]),t}()},319:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(21),r=n(22),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"random",value:function(a,b){return void 0===a?Math.random():void 0===b?Math.random()*a:a+Math.random()*(b-a)}},{key:"randomInt",value:function(a,b){return Math.floor(t.random(a,b))}},{key:"constrain",value:function(t,e,n){return Math.max(Math.min(t,n),e)}},{key:"map",value:function(t,e,n,o,r){return(t-e)/(n-e)*(r-o)+o}},{key:"radians",value:function(t){return t*(2*Math.PI/360)}},{key:"dist",value:function(t,e,n,o){return Math.sqrt((t-n)*(t-n)+(e-o)*(e-o))}},{key:"lerp",value:function(t,e,n){return t+(e-t)*n}},{key:"calcViewportFov",value:function(t,e){return 2*Math.atan(t/e)*(180/Math.PI)}}]),t}()},321:function(t,e,n){"use strict";n(317)},322:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.page{position:relative;min-width:100vw;height:100%;overflow:hidden;white-space:normal}.page.disable{pointer-events:none}.page_inner{padding:0 5vw 80px}@media(min-width:960px){.page_inner{padding:0 0 100px 8.3333333333vw}}.page_title{margin-left:-.06em;padding-top:80px;font-variation-settings:"wght" 600;font-size:48px}@media(min-width:960px){.page_title{padding-top:calc(3.33333vh - 8px);font-size:64px}}',""]),t.exports=o},323:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("689cd743",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";var o=n(3),r=(n(29),n(5)),c=n(32),l={transition:{css:!1,leave:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.classList.add("disable"),n.$store.commit("ui/startTransition"),n.$store.commit("gallery/setViewMode","list"),n.$store.commit("cursor/resetState"),o.next=6,Object(c.a)(1);case 6:e();case 7:case"end":return o.stop()}}),o)})))()},enter:function(t,e){e(),this.$store.commit("ui/endTransition"),r.a.fromTo(t,{x:100},{x:0,duration:1.2,ease:"easeOut",force3D:!0})}}},h=(n(321),n(2)),component=Object(h.a)(l,undefined,undefined,!1,null,null,null);e.a=component.exports},328:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4aa5f486",content,!0,{sourceMap:!1})},331:function(t,e,n){"use strict";n(323)},332:function(t,e,n){var o=n(18)(!1);o.push([t.i,'@keyframes arrow-attention-data-v-37cafbcf{0%{opacity:0;transform:translate3d(-15px,0,0);transition-timing-function:cubic-bezier(.1,.4,.2,1)}25%{opacity:1;transform:translateZ(0);transition-timing-function:cubic-bezier(.1,.4,.2,1)}60%{opacity:1;transform:translateZ(0);transition-timing-function:cubic-bezier(.1,.4,.2,1)}to{opacity:0;transform:translate3d(30px,0,0);transition-timing-function:cubic-bezier(.4,.1,.2,1)}}.scrollProgress[data-v-37cafbcf]{position:absolute;right:3.3333333333vw;bottom:5vh;width:240px;height:22px;pointer-events:none}.scrollProgress.is-home[data-v-37cafbcf]{color:#fff}.scrollProgress[data-v-37cafbcf]:before,.scrollProgress_current[data-v-37cafbcf]{position:absolute;left:0;bottom:0;width:100%;height:1px}.scrollProgress[data-v-37cafbcf]:before{content:"";display:block;background-color:rgba(26,26,26,.25)}.scrollProgress_current[data-v-37cafbcf]{background-color:#1a1a1a;transform-origin:left center}.scrollProgress_attention[data-v-37cafbcf]{width:100%;transition-property:opacity,transform;transition-duration:.8s;transition-timing-function:cubic-bezier(.4,.1,.2,1)}.scrollProgress.hide .scrollProgress_attention[data-v-37cafbcf]{opacity:0;transform:translate3d(-15px,0,0)}.scrollProgress_text[data-v-37cafbcf]{font-variation-settings:"wght" 500;font-size:16px;letter-spacing:.02em;white-space:nowrap}.scrollProgress_arrow[data-v-37cafbcf]{position:absolute;right:0;top:-8px;font-variation-settings:"wght" 200;font-size:28px;animation-name:arrow-attention-data-v-37cafbcf;animation-duration:2.4s;animation-iteration-count:infinite;animation-play-state:running}',""]),t.exports=o},334:function(t,e,n){"use strict";n.r(e);var o=n(58),r={data:function(){return{text:""}},mounted:function(){this.text=o.a.isDesktop?"Scroll or Drag Sideways":"Swipe Sideways"}},c=(n(331),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollProgress",class:{"is-home":"index"===t.$route.name}},[n("div",{staticClass:"scrollProgress_attention"},[n("div",{staticClass:"scrollProgress_text"},[t._v(t._s(t.text))]),n("div",{staticClass:"scrollProgress_arrow"},[t._v("→")])]),n("div",{staticClass:"scrollProgress_current"})])}),[],!1,null,"37cafbcf",null);e.default=component.exports},335:function(t,e,n){"use strict";n(328)},336:function(t,e,n){var o=n(18)(!1);o.push([t.i,".sideScrollPage{position:relative;width:100%;height:100%;overflow:hidden}.sideScrollPage_content{position:relative;display:inline-block;vertical-align:top;height:100%;white-space:nowrap;font-size:0;will-change:transform}.sideScrollPage_content.disable{pointer-events:none}.sideScrollPage_content>*{display:inline-block;vertical-align:top}.sideScrollPage_content.ignore-click>*{pointer-events:none}",""]),t.exports=o},347:function(t,e,n){"use strict";n(12),n(8),n(11),n(16),n(17);var o=n(4),r=n(6),c=n(58),l=n(319),h=n(66);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{scroll:0,isDragging:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({viewMode:"gallery/viewMode",detailIndex:"gallery/detailIndex"})),watch:{viewMode:function(t){"list"===t&&this.setScrollPosition()}},mounted:function(){this.$target=this.$el.querySelector("[data-scroll-target]"),this.targetScroll=0,this.max=0,this.progress=0,this.moveX=0,this.moveY=0,this.isPointerDown=!1,this.isVerticalScroll=!1,this.tween=new h.a(0,5);var t=c.a.isDesktop?"pointerdown":"touchstart",e=c.a.isDesktop?"pointermove":"touchmove",n=c.a.isDesktop?"pointerup":"touchend";this.onDownFunction=this.onDown.bind(this),this.onMoveFunction=this.onMove.bind(this),this.onUpFunction=this.onUp.bind(this),this.onWheelFunction=this.onMouseWheel.bind(this),this.onKeyDownFunction=this.onKeyDown.bind(this),this.$target.addEventListener(t,this.onDownFunction),this.$target.addEventListener(e,this.onMoveFunction),window.addEventListener(n,this.onUpFunction),c.a.isDesktop&&(this.$target.addEventListener("wheel",this.onWheelFunction,{capture:!0,passive:!1}),document.addEventListener("keydown",this.onKeyDownFunction))},beforeDestroy:function(){var t=c.a.isDesktop?"pointerdown":"touchstart",e=c.a.isDesktop?"pointermove":"touchmove",n=c.a.isDesktop?"pointerup":"touchend";this.$target.removeEventListener(t,this.onDownFunction),this.$target.removeEventListener(e,this.onMoveFunction),window.removeEventListener(n,this.onUpFunction),c.a.isDesktop&&(this.$target.removeEventListener("wheel",this.onWheelFunction),document.removeEventListener("keydown",this.onKeyDownFunction))},methods:{getDownX:function(t){return c.a.isDesktop?t.pageX:t.changedTouches[0].pageX},getDownY:function(t){return c.a.isDesktop?t.pageY:t.changedTouches[0].pageY},onDown:function(t){this.isPointerDown=!0,this.moveX=this.getDownX(t),this.moveY=this.getDownY(t)},onMove:function(t){if(t.preventDefault(),this.isPointerDown&&!this.isVerticalScroll){var e=this.getDownX(t),n=this.getDownY(t),o=this.moveX-e,r=this.moveY-n;this.moveX=e,this.moveY=n,c.a.isMobile&&Math.abs(o)<Math.abs(r)?this.isVerticalScroll=!0:Math.abs(o)<5||(o*=c.a.isDesktop?1.5:2.5,this.targetScroll=l.a.constrain(this.targetScroll+o,0,this.max),this.isDragging=!0)}},onUp:function(){this.isPointerDown&&(this.moveX=0,this.moveY=0,this.isPointerDown=!1,this.isVerticalScroll=!1,this.isDragging=!1)},onMouseWheel:function(t){t.preventDefault();var e=l.a.constrain(t.deltaY,-300,300);this.targetScroll=l.a.constrain(this.targetScroll+e,0,this.max)},onKeyDown:function(t){if("detail"!==this.viewMode){var code=t.code;"ArrowLeft"===code||"ArrowUp"===code?this.targetScroll=l.a.constrain(this.targetScroll-500,0,this.max):"ArrowRight"!==code&&"ArrowDown"!==code||(this.targetScroll=l.a.constrain(this.targetScroll+500,0,this.max))}},setScrollPosition:function(){var t=document.querySelectorAll("#Gallery .item")[this.detailIndex].getBoundingClientRect(),e=t.left+t.width/2-window.innerWidth/2;this.targetScroll=l.a.constrain(this.targetScroll+e,0,this.max),this.tween.position=this.targetScroll},resize:function(){var t=this.$target.getBoundingClientRect().width;this.max=Math.floor(t-window.innerWidth)},updateScroll:function(){this.targetScroll=l.a.constrain(this.targetScroll,0,this.max),this.tween.step(this.targetScroll),this.scroll=this.tween.position,this.progress=l.a.constrain(this.scroll/this.max,0,1),this.$target.style.transform="translate3d(".concat(-this.scroll,"px, 0, 0)")}}},v=(n(335),n(2)),component=Object(v.a)(f,undefined,undefined,!1,null,null,null);e.a=component.exports},349:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 322 15",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[t._v("岡村芳樹 – Yoshiki Okamura")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240.456 14l1.18-10.72 5.24 11.2c.02 0 5.24-11.2 5.24-11.2l1.18 10.72h.88L252.656.2l-5.78 12.34L241.096.2l-1.52 13.8h.88zm-13.619 0h-.96l-1.78-4.38h-5.68l-1.78 4.38h-.96l5.62-13.74 5.54 13.74zm-5.56-11.5l-2.54 6.32h5.04l-2.5-6.32zM175 .48c-3.9 0-6.92 3.04-6.92 6.88s3 6.86 6.92 6.86c3.9 0 6.92-3.02 6.92-6.86 0-3.84-3.02-6.88-6.92-6.88zm0 12.94c-3.44 0-6-2.66-6-6.06 0-3.42 2.56-6.08 6-6.08s6 2.66 6 6.08c0 3.4-2.56 6.06-6 6.06zM196.476.66h-.88V14h.88V7.98l.36-.34 6.28 6.36h1.2l-6.84-6.96 6.46-6.38h-1.16l-6.3 6.28V.66zM268.445 9V.66h.88V9c0 1.26.06 2.08.56 2.88.78 1.26 2.24 1.54 3.1 1.54.86 0 2.32-.28 3.1-1.54.5-.8.56-1.62.56-2.88V.66h.88V9c0 1.46-.08 2.42-.76 3.42-1 1.46-2.58 1.8-3.78 1.8-1.2 0-2.78-.34-3.78-1.8-.68-1-.76-1.96-.76-3.42zm30.076 5l-4.36-6.3c.3 0 .94-.02 1.64-.26 1.66-.56 2.24-1.92 2.24-3.24 0-1.04-.34-2.14-1.38-2.86-.88-.6-1.8-.68-2.82-.68h-1.92V14h.88V7.7h.4l4.32 6.3h1zm-5.72-12.54h1.1c.52 0 1.48.08 2.04.4.52.28 1.18.98 1.18 2.32 0 1.72-1.14 2.72-3.04 2.72h-1.28V1.46zM321.092 14h-.96l-1.78-4.38h-5.68l-1.78 4.38h-.96l5.62-13.74 5.54 13.74zm-5.56-11.5l-2.54 6.32h5.04l-2.5-6.32zM30.835.36c-4.2 0-7.12 2.92-7.12 6.98 0 4.06 2.92 6.96 7.12 6.96s7.12-2.9 7.12-6.96c0-4.06-2.92-6.98-7.12-6.98zm0 11.58c-2.6 0-4.44-1.9-4.44-4.6 0-2.7 1.84-4.62 4.44-4.62 2.6 0 4.44 1.92 4.44 4.62s-1.84 4.6-4.44 4.6zM5.54 14h2.6V7.9l4.7-7.24H9.76L6.9 5.3 4.04.66H.96L5.54 7.9V14zM55.291.36c.84 0 2.42.16 3.78 1.56l-1.36 1.78c-.78-1.04-1.7-1.14-2.18-1.14-1.4 0-1.84.88-1.84 1.56 0 .32.1.62.42.9.32.3.76.46 1.6.76 1.04.36 2.02.72 2.7 1.34.6.54 1.14 1.44 1.14 2.8 0 2.6-1.88 4.38-4.64 4.38-2.46 0-3.9-1.5-4.6-2.52l1.7-1.62c.64 1.3 1.86 1.78 2.8 1.78 1.18 0 2.06-.72 2.06-1.84 0-.48-.16-.86-.52-1.2-.478-.44-1.231-.697-1.961-.946l-.099-.034c-.7-.24-1.54-.56-2.22-1.16-.44-.38-1.06-1.12-1.06-2.48 0-1.96 1.32-3.92 4.28-3.92zm19.944.3h-2.6V14h2.6V8.06h5.64V14h2.6V.66h-2.6v5.16h-5.64V.66zM97.322 14V.66h2.6V14h-2.6zM116.365.66h-2.6V14h2.6V8.32l.3-.3 4.74 5.98h3.44l-5.94-7.18 5.64-6.16h-3.28l-4.9 5.64V.66zM137.281 14V.66h2.6V14h-2.6z"}})])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n(21),r=n(22),c=n(370),l=n(58),h=n(357),d=n.n(h),f=n(358),v=n.n(f),m=function(){function t(){Object(o.a)(this,t),c.g({attribPrefix:"a_"}),this.$el=document.getElementById("GalleryCanvas"),this.gl=this.$el.getContext("webgl",{antialias:!1,depth:!1,stencil:!1}),this.dpr=window.devicePixelRatio,l.a.isDesktop&&(this.dpr=Math.min(window.devicePixelRatio,1.5)),this.programInfo=c.a(this.gl,[d.a,v.a]),this.bufferInfo=c.d.createPlaneBufferInfo(this.gl,2,2,1,1,c.c.rotationX(.5*Math.PI)),this.uniforms={resolution:[100,100],time:0,scroll:0}}return Object(r.a)(t,[{key:"kill",value:function(){var t=this.gl.getExtension("WEBGL_lose_context");t&&t.loseContext(),delete this.gl,this.$el.width=0,this.$el.height=0,delete this.$el}},{key:"update",value:function(t){c.e(this.gl.canvas,this.dpr)&&(this.uniforms.resolution[0]=this.gl.canvas.width,this.uniforms.resolution[1]=this.gl.canvas.height),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.uniforms.time=.001*performance.now(),this.uniforms.scroll=t,this.gl.useProgram(this.programInfo.program),c.f(this.gl,this.programInfo,this.bufferInfo),c.h(this.programInfo,this.uniforms),c.b(this.gl,this.bufferInfo)}}]),t}()},357:function(t,e){t.exports="attribute vec4 a_position;\n\nvoid main() {\n  gl_Position = a_position;\n}\n"},358:function(t,e){t.exports="precision highp float;\n\n#define PI 3.141592653589793\n\nuniform vec2 resolution;\nuniform float time;\nuniform float scroll;\n\nvoid main() {\n  vec2 p = gl_FragCoord.xy;\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  uv = -1.0 + 2.0 * uv;\n\n  float waveColor = 0.0;\n  float lineWidth = 0.0;\n\n  for (float i = 0.0; i < 6.0; i++) {\n    float gi = floor(i / 2.0);\n    float gd = mod(i, 2.0);\n    float amp = 0.75;\n    float omega = 0.002 * p.x + gi * 0.4 + (0.4 * time - gd * 0.1);\n    float phi = scroll * resolution.x * 0.002;\n    float y = uv.y + amp * sin(omega + phi);\n    lineWidth = abs(1.0 / (600.0 * y));\n    lineWidth = smoothstep(0.0, 1.0, lineWidth);\n    waveColor += lineWidth * (1.0 - 0.5 * gd);\n  }\n\n  waveColor = clamp(waveColor, 0.0, 1.0);\n  float alpha = 0.4 * waveColor;\n\n  float r = waveColor * (36.0 / 255.0);\n  float g = waveColor * (46.0 / 255.0);\n  float b = waveColor * (51.0 / 255.0);\n\n  gl_FragColor = vec4(vec3(r, g, b), alpha);\n}\n"},376:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6518fe67",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n(376)},407:function(t,e,n){var o=n(18)(!1);o.push([t.i,".home.disable[data-v-7cc9ec07]{pointer-events:none}@media(min-width:960px){.home[data-v-7cc9ec07]{padding-left:60px}}.home_entrance[data-v-7cc9ec07]{position:relative;width:100vw;height:100%}@media(min-width:960px){.home_entrance[data-v-7cc9ec07]{width:calc(100vw - 60px)}}.home_keyvisual[data-v-7cc9ec07]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;overflow:hidden}.home_keyvisual img[data-v-7cc9ec07]{width:100%;height:100%;object-fit:cover;object-position:center}.home_title[data-v-7cc9ec07]{position:absolute;z-index:2;left:6.6666666667vw;top:50%;transform:translateY(-50%);background-color:#fff;white-space:nowrap}@media(min-width:960px){.home_title[data-v-7cc9ec07]{left:10vw}}.home_title>div[data-v-7cc9ec07]{width:320px;height:auto;padding:10px 15px}@media(min-width:960px){.home_title>div[data-v-7cc9ec07]{width:480px;padding:15px 20px}}.home_title>div svg[data-v-7cc9ec07]{width:100%;height:auto}",""]),t.exports=o},418:function(t,e,n){"use strict";n.r(e);n(12),n(8),n(11),n(16),n(17);var o=n(3),r=n(4),c=(n(29),n(6)),l=n(65),h=n(318),d=n(32),f=n(324),v=n(347),m=n(356);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={mixins:[f.a,v.a],data:function(){return this.$store.commit("gallery/setCurrentSection",0),{sectionIndex:0}},head:function(){return{title:"岡村芳樹 – Yoshiki Okamura",link:[{rel:"canonical",href:"https://yoshikiokamura.art"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({homeContent:"info/content"})),mounted:function(){this.$keyvisual=this.$el.querySelector(".home_keyvisual img"),this.$gallery=document.getElementById("Gallery"),this.canvas=new m.a,this.resizeChecker=new h.a,this.updateFunction=this.update.bind(this),l.a.add(this.updateFunction)},beforeDestroy:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(1);case 2:l.a.remove(t.updateFunction),t.canvas.kill();case 4:case"end":return e.stop()}}),e)})))()},methods:{enterKv:function(){this.$store.commit("cursor/enterKv")},leaveKv:function(){this.$store.commit("cursor/leaveKv")},update:function(){this.resizeChecker.check(!0)&&this.resize(),this.updateScroll(),this.$keyvisual.style.transform="translate3d(".concat(.2*this.scroll,"px, 0, 0)");var t=this.$el.querySelector(".scrollProgress_current");t&&(t.style.transform="scale3d(".concat(this.progress,", 1, 1)")),this.$gallery.style.perspectiveOrigin="".concat(Math.floor(.5*-window.innerWidth+this.scroll),"px ").concat(.5*window.innerHeight,"px");var e=this.$gallery.getBoundingClientRect().left;e<=0?(this.canvas.$el.style.transform="translate3d(".concat(-e,"px, 0, 0)"),this.canvas.update(-e/window.innerWidth)):(this.canvas.$el.style.transform="translate3d(0, 0, 0)",this.canvas.update(0))}}},x=(n(406),n(2)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home sideScrollPage"},[n("div",{staticClass:"sideScrollPage_content",class:{"ignore-click":t.isDragging},attrs:{"data-scroll-target":""}},[n("div",{staticClass:"home_entrance",on:{mouseenter:t.enterKv,mouseleave:t.leaveKv}},[n("div",{staticClass:"home_keyvisual"},[n("img",{attrs:{src:t.homeContent.homeArtworkUrl+"?auto=format&q=80&w=1600&h=1600",width:"600",height:"600",alt:""}})]),n("h1",{staticClass:"home_title"},[n("div",[n("svg-logo")],1)])]),n("gallery",{attrs:{sectionIndex:t.sectionIndex}})],1),n("scroll-progress",{class:{hide:t.scroll>=200}})],1)}),[],!1,null,"7cc9ec07",null);e.default=component.exports;installComponents(component,{SvgLogo:n(349).default,Gallery:n(378).default,ScrollProgress:n(334).default})}}]);