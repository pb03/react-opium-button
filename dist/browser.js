!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):e.ReactOpiumButton=t(e.React)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var r=function(r){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e)),r=e.background.split("|");return t.state={background:r[0],backgroundHover:r[1]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),t(a,[{key:"componentDidMount",value:function(){this.setProperties()}},{key:"setProperties",value:function(){var e=this.props,t=e.color,r=e.dimensions,a=e.padding,n=e.border,o=e.radius,i=e.full,l=e.rounded,c=t.split("|"),s=i?"100%":r.split(",")[0]+"px",u=r.split(",")[1],m=this.button.style;/\d/.test(s)&&m.setProperty("--width",s),u&&m.setProperty("--height",u+"px"),m.setProperty("--padding",""+a),m.setProperty("--background",this.state.background),m.setProperty("--backgroundHover",this._darkenBackground(5)),m.setProperty("--border",n),m.setProperty("--radius",(l?"100":o)+"px"),m.setProperty("--color",c[0]),m.setProperty("--colorHover",c[1]||c[0])}},{key:"handleClick",value:function(){this.props.onClick()}},{key:"_darkenBackground",value:function(e){var t=this.state,r=t.background,a=t.backgroundHover;if(a)return a;if(/gradient/.test(r)){var n=r,o=r.match(/#\w+/g),i=!0,l=!1,c=void 0;try{for(var s,u=o[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var m=s.value;n=n.replace(m,"#"+this._getDarkerHex(m,e))}}catch(e){l=!0,c=e}finally{try{!i&&u.return&&u.return()}finally{if(l)throw c}}return n}return"#"+this._getDarkerHex(r,e)}},{key:"_getDarkerHex",value:function(e,t){var r=parseInt(e.replace("#",""),16),a=Math.round(2.55*t),n=(r>>16)-a,o=(r>>8&255)-a,i=(255&r)-a;return(16777216+65536*(n<255?n<1?0:n:255)+256*(o<255?o<1?0:o:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}},{key:"getLoader",value:function(){switch(this.props.loaderType){case"dots":return e.createElement("g",{transform:"scale(1.5)","transform-origin":"center"},e.createElement("circle",{className:"opm-fill opm-dot",cx:"7",cy:"50",r:"7"}),e.createElement("circle",{className:"opm-fill opm-dot",cx:"50",cy:"50",r:"7"}),e.createElement("circle",{className:"opm-fill opm-dot",cx:"93",cy:"50",r:"7"}));case"disk":return e.createElement("g",{transform:"translate(50,50)"},e.createElement("g",{transform:"scale(0.7)"},e.createElement("circle",{className:"opm-fill",opacity:"0.2",cx:"0",cy:"0",r:"50"}),e.createElement("circle",{className:"opm-fill",opacity:"0.9",transform:"rotate(354.382)",cx:"0",cy:"-28",r:"15"},e.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 0 0;360 0 0",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}))));case"gooey":return e.createElement("g",null,e.createElement("defs",null,e.createElement("filter",{id:"gooey",x:"-100%",y:"-100%",width:"300%",height:"300%",colorInterpolationFilters:"sRGB"},e.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"}),e.createElement("feColorMatrix",{mode:"matrix",result:"cm",values:"1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40"}))),e.createElement("g",{filter:"url(#gooey)",transform:"scale(1.2)","transform-origin":"center",opacity:"0.92"},e.createElement("circle",{className:"opm-fill",cx:"26.989",cy:"50",r:"24.989"},e.createElement("animate",{attributeName:"r",calcMode:"spline",dur:"1",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"18;25;18"}),e.createElement("animate",{attributeName:"cx",calcMode:"spline",dur:"1",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"20;27;20"})),e.createElement("circle",{className:"opm-fill",cx:"72.989",cy:"50",r:"18.011"},e.createElement("animate",{attributeName:"r",calcMode:"spline",dur:"1",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"25;18;25"}),e.createElement("animate",{attributeName:"cx",calcMode:"spline",dur:"1",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"66;73;66"}))));case"ripple":return e.createElement("g",null,e.createElement("circle",{className:"opm-stroke",fill:"none",strokeWidth:"6",cx:"50",cy:"50",r:"39.784"},e.createElement("animate",{attributeName:"r",calcMode:"spline",values:"0;50",keyTimes:"0;1",dur:"1.2",keySplines:"0 0.2 0.8 1",begin:"-0.5s",repeatCount:"indefinite"}),e.createElement("animate",{attributeName:"opacity",calcMode:"spline",values:"1;0",keyTimes:"0;1",dur:"1.2",keySplines:"0.2 0 0.8 1",begin:"-0.5s",repeatCount:"indefinite"})),e.createElement("circle",{className:"opm-stroke",fill:"none",strokeWidth:"6",cx:"50",cy:"50",r:"24.7337"},e.createElement("animate",{attributeName:"r",calcMode:"spline",values:"0;50",keyTimes:"0;1",dur:"1.2",keySplines:"0 0.2 0.8 1",begin:"0s",repeatCount:"indefinite"}),e.createElement("animate",{attributeName:"opacity",calcMode:"spline",values:"1;0",keyTimes:"0;1",dur:"1.2",keySplines:"0.2 0 0.8 1",begin:"0s",repeatCount:"indefinite"})));default:return e.createElement("circle",{className:"opm-stroke",strokeWidth:"9",strokeLinecap:"round",strokeDasharray:"164.933 56.977",cx:"50",cy:"50",fill:"none",r:"35",opacity:"0.9",transform:"rotate(258.182 50 50)"},e.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}))}}},{key:"render",value:function(){var t=this,r=this.props,a=r.state,n=void 0===a?"normal":a,o=r.disabled,i=r.text,l=r.loadingText;return e.createElement("button",{className:"opm-btn is-"+n,disabled:!!o,ref:function(e){return t.button=e},onClick:this.handleClick.bind(this)},e.createElement("span",{className:"opm-text"},i),l?e.createElement("span",{className:"opm-loading-text"},e.createElement("span",{className:"opm-loading-text__blinker"},l)):e.createElement("span",{className:"opm-loader"},e.createElement("svg",{height:"100%",overflow:"visible",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},this.getLoader())),e.createElement("svg",{className:"opm-success",opacity:"0.95",viewBox:"0 0 192 192",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{className:"opm-checkmark opm-stroke",d:"M30,102L70,142L162,50"})))}}]),a}();return r.defaultProps={text:"Click me!",background:"#e8eaeb",color:"#2e2e2e",dimensions:"auto auto",padding:"5px",border:"none",radius:0,full:!1,rounded:!1,onClick:function(){}},r});
