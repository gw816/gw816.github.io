(function(e){function t(t){for(var n,i,o=t[0],s=t[1],u=t[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"002f":function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return l}));r("fb6a"),r("ace4"),r("d3b7"),r("3ca3"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),c=r("fd2f"),i=r("cb96"),o=[105,102,109,116],s=[254,254,254,254],u={" WAV":".wav",FLAC:".flac"," MP3":".mp3"," A4M":".m4a"};function l(e,t,r){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var l,f,d,p,m,h,b,g,v,w,y,x,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=Uint8Array,e.next=3,Object(a["d"])(t);case 3:if(e.t1=e.sent,l=new e.t0(e.t1),Object(a["h"])(o,l.slice(0,4))&&Object(a["h"])(s,l.slice(8,12))){e.next=13;break}if("xm"!==n){e.next=10;break}return e.abrupt("return",{status:!1,message:"Not a valid xm file!"});case 10:return e.next=12,Object(c["Decrypt"])(t,r,n,!0);case 12:return e.abrupt("return",e.sent);case 13:if(f=(new TextDecoder).decode(l.slice(4,8)),u.hasOwnProperty(f)){e.next=16;break}return e.abrupt("return",{status:!1,message:"New Xiami file category!"});case 16:for(d=l[15],p=l[12]|l[13]<<8,m=l.slice(16),h=m.length,b=p;b<h;++b)m[b]=m[b]-d^255;return g=Object(a["b"])(m,"mp3"),v=a["a"][g],w=new Blob([m],{type:v}),e.next=26,i.parseBlob(w);case 26:return y=e.sent,"wav"===g&&(y.common.album="",y.common.artist="",y.common.title=""),x=Object(a["e"])(y.common.artist,y.common.title,r,"_"),k=Object(a["f"])(y),e.abrupt("return",{status:!0,title:x.title,artist:x.artist,ext:g,album:y.common.album,picture:k,file:URL.createObjectURL(w),mime:v});case 31:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"06dc":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"i",(function(){return o})),r.d(t,"a",(function(){return f})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return m})),r.d(t,"f",(function(){return h})),r.d(t,"h",(function(){return b})),r.d(t,"b",(function(){return g})),r.d(t,"g",(function(){return v})),r.d(t,"k",(function(){return y})),r.d(t,"j",(function(){return k}));r("a623"),r("fb6a"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("2ca0"),r("498a"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("7907"),c=[102,76,97,67],i=[73,68,51],o=[79,103,103,83],s=[102,116,121,112],u=[48,38,178,117,142,102,207,17,166,217,0,170,0,98,206,108],l=[82,73,70,70],f={mp3:"audio/mpeg",flac:"audio/flac",m4a:"audio/mp4",ogg:"audio/ogg",wma:"audio/x-ms-wma",wav:"audio/x-wav"};function d(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.readAsArrayBuffer(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function m(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",a="",c="",i=r.split(n);return i.length>1?(a=i[0].trim(),c=i[1].trim()):1===i.length&&(c=i[0].trim()),"string"==typeof e&&""!==e&&(a=e),"string"==typeof t&&""!==t&&(c=t),{artist:a,title:c}}function h(e){var t="";if(void 0!==e.common.picture&&e.common.picture.length>0){var r=new Blob([e.common.picture[0].data],{type:e.common.picture[0].format});t=URL.createObjectURL(r)}return t}function b(e,t){return e.every((function(e,r){return e===t[r]}))}function g(e,t){return b(i,e.slice(0,i.length))?"mp3":b(c,e.slice(0,c.length))?"flac":b(o,e.slice(0,o.length))?"ogg":b(s,e.slice(4,4+s.length))?"m4a":b(u,e.slice(0,u.length))?"wma":b(l,e.slice(0,l.length))?"wav":t}function v(e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(r=e.sent,n=r.headers.get("Content-Type"),!n.startsWith("image/")){e.next=12;break}return e.next=8,r.arrayBuffer();case 8:return a=e.sent,c=new Blob([a],{type:n}),i=URL.createObjectURL(c),e.abrupt("return",{buffer:a,url:i,type:n});case 12:e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](0);case 16:return e.abrupt("return",{buffer:null,url:"",type:""});case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),w.apply(this,arguments)}function y(e,t,r,n){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n,c){var i,o,s,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=u.length>4&&void 0!==u[4]?u[4]:null,o=u.length>5&&void 0!==u[5]?u[5]:"Cover",s=new a(t),s.setFrame("TPE1",r).setFrame("TIT2",n).setFrame("TALB",c),null!==i&&s.setFrame("APIC",{type:3,data:i,description:o}),s.addTag(),e.abrupt("return",s.arrayBuffer);case 7:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"callback";return new Promise((function(r,n){var a;window[t]=function(e){delete window[t],a.parentNode&&a.parentNode.removeChild(a),r(e)},a=document.createElement("script"),a.type="text/javascript",a.src=e,a.addEventListener("error",(function(e){n(e)})),document.head.appendChild(a)}))}},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("46a1"),r("450d");var n=r("e5f2"),a=r.n(n),c=(r("6b30"),r("c284")),i=r.n(c),o=(r("0c67"),r("299c")),s=r.n(o),u=(r("b5d8"),r("f494")),l=r.n(u),f=(r("560b"),r("dcdc")),d=r.n(f),p=(r("f225"),r("89a9")),m=r.n(p),h=(r("f4f9"),r("c2cc")),b=r.n(h),g=(r("7a0f"),r("0f6c")),v=r.n(g),w=(r("aaa5"),r("a578")),y=r.n(w),x=(r("adec"),r("3d2d")),k=r.n(x),_=(r("bdc7"),r("aa2f")),j=r.n(_),O=(r("de31"),r("c69e")),M=r.n(O),D=(r("5466"),r("ecdf")),R=r.n(D),U=(r("38a0"),r("ad41")),A=r.n(U),S=(r("1951"),r("eedf")),C=r.n(S),B=(r("acb6"),r("c673")),E=r.n(B),L=(r("fd71"),r("a447")),P=r.n(L),T=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-main",[r("x-upload",{on:{handle_error:e.showFail,handle_finish:e.showSuccess}}),r("div",{attrs:{id:"app-control"}},[r("el-row",{staticStyle:{"padding-bottom":"1em","font-size":"14px"}},[e._v(" 歌曲命名格式： "),r("el-radio",{attrs:{label:"1",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌手-歌曲名")]),r("el-radio",{attrs:{label:"2",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名")]),r("el-radio",{attrs:{label:"3",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名-歌手")]),r("el-radio",{attrs:{label:"4",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("同原文件名")])],1),r("el-row",[r("el-button",{attrs:{icon:"el-icon-download",plain:""},on:{click:e.handleDownloadAll}},[e._v("下载全部")]),r("el-button",{attrs:{icon:"el-icon-delete",plain:"",type:"danger"},on:{click:e.handleDeleteAll}},[e._v("清除全部")]),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"),r("br"),e._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")]),r("el-checkbox",{staticStyle:{"margin-left":"1em"},attrs:{border:""},model:{value:e.instant_download,callback:function(t){e.instant_download=t},expression:"instant_download"}},[e._v("立即保存")])],1)],1)],1),r("audio",{attrs:{autoplay:e.playing_auto,src:e.playing_url,controls:""}}),r("x-preview",{attrs:{download_format:e.download_format,"table-data":e.tableData},on:{music_changed:e.changePlaying}})],1),r("el-footer",{attrs:{id:"app-footer"}},[r("el-row",[e._v(" 移除已购音乐的加密保护。 "),r("a",{attrs:{href:"https://igavin.cc/music/alert.html",target:"_blank"}},[e._v("使用提示")])]),r("el-row",[e._v(" 目前支持网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 虾米音乐(xm), 酷我音乐(.kwm) "),r("a",{attrs:{href:"https://igavin.cc/music/log.html",target:"_blank"}},[e._v("更多")]),e._v("。 ")]),r("el-row",[r("span",[e._v("Copyright © 2020")]),e._v(" Gavin "),r("a",{attrs:{href:"https://igavin.cc",target:"_blank"}},[e._v("首页")])])],1)],1)},q=[],N=(r("4160"),r("159b"),r("96cf"),r("1da1")),I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{attrs:{"auto-upload":!1,"on-change":e.handleFile,"show-file-list":!1,action:"",drag:"",multiple:""}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击选择")])]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("本工具仅在浏览器内对文件进行解锁，无需消耗流量")]),r("transition",{attrs:{name:"el-fade-in"}},[r("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.progress_show,expression:"progress_show"}],staticStyle:{margin:"16px 6px 0 6px"},attrs:{format:e.progressFormat,percentage:e.progress_percent,"stroke-width":16,"text-inside":!0}})],1)],1)},$=[],Q=(r("b0c0"),{name:"upload",data:function(){return{cacheQueue:[],workers:[],idle_workers:[],thread_num:1,progress_show:!1,progress_finished:0,progress_all:0,progress_percent:0}},mounted:function(){var e=this;if(""!==document.location.host){this.thread_num=navigator.hardwareConcurrency||1;var t=r("bfa2");this.workers.push(t().CommonDecrypt),this.idle_workers.push(0),setTimeout((function(){for(var r=1;r<e.thread_num;r++)e.workers.push(t().CommonDecrypt),e.idle_workers.push(r)}),1e3)}else{var n=r("bd2e");this.workers.push(n.CommonDecrypt),this.idle_workers.push(0)}},methods:{progressFormat:function(){return this.progress_finished+"/"+this.progress_all},progressChange:function(e,t){var r=this;this.progress_all+=t,this.progress_finished+=e,this.progress_percent=Math.round(this.progress_finished/this.progress_all*100),this.progress_finished===this.progress_all?setTimeout((function(){r.progress_show=!1,r.progress_finished=0,r.progress_all=0}),3e3):this.progress_show=!0},handleFile:function(e){this.progressChange(0,1),this.idle_workers.length>0?this.handleDoFile(e,this.idle_workers.shift()):this.cacheQueue.push(e)},handleCacheQueue:function(e){0!==this.cacheQueue.length?this.handleDoFile(this.cacheQueue.shift(),e):this.idle_workers.push(e)},handleDoFile:function(e,t){var r=this;this.workers[t](e).then((function(e){r.$emit("handle_finish",e),r.handleCacheQueue(t),r.progressChange(1,0)})).catch((function(n){r.$emit("handle_error",n,e.name),r.handleCacheQueue(t),r.progressChange(1,0)}))}}}),J=Q,W=(r("f1ab"),r("2877")),H=Object(W["a"])(J,I,$,!1,null,"6b3795fe",null),V=H.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{label:"封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.picture}},[r("div",{staticClass:"image-slot el-image__error",attrs:{slot:"error"},slot:"error"},[e._v(" 暂无封面 ")])])]}}])}),r("el-table-column",{attrs:{label:"歌曲"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.title))])]}}])}),r("el-table-column",{attrs:{label:"歌手"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.artist))])]}}])}),r("el-table-column",{attrs:{label:"专辑"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.album))])]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{circle:"",icon:"el-icon-video-play",type:"success"},on:{click:function(r){return e.handlePlay(t.$index,t.row)}}}),r("el-button",{attrs:{circle:"",icon:"el-icon-download"},on:{click:function(r){return e.handleDownload(t.row)}}}),r("el-button",{attrs:{circle:"",icon:"el-icon-delete",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}})]}}])})],1)},G=[];r("a434"),r("d3b7"),r("3ca3"),r("2ca0"),r("ddb0"),r("2b3d");function K(e,t){var r=document.createElement("a");switch(r.href=e.file,t){default:case"1":r.download=e.artist+" - "+e.title+"."+e.ext;break;case"2":r.download=e.title+"."+e.ext;break;case"3":r.download=e.title+" - "+e.artist+"."+e.ext;break;case"4":r.download=e.rawFilename+"."+e.ext;break}document.body.append(r),r.click(),r.remove()}function X(e){URL.revokeObjectURL(e.file),e.picture.startsWith("blob:")&&URL.revokeObjectURL(e.picture)}var Y={name:"preview",props:{tableData:{type:Array,required:!0},download_format:{type:String,required:!0}},methods:{handlePlay:function(e,t){this.$emit("music_changed",t.file)},handleDelete:function(e,t){X(t),this.tableData.splice(e,1)},handleDownload:function(e){K(e,this.download_format)}}},Z=Y,ee=Object(W["a"])(Z,z,G,!1,null,"6856848d",null),te=ee.exports,re=r("9224"),ne={name:"app",components:{xUpload:V,xPreview:te},data:function(){return{version:re.version,activeIndex:"1",tableData:[],playing_url:"",playing_auto:!1,download_format:"1",instant_download:!1}},created:function(){this.$nextTick((function(){this.finishLoad()}))},methods:{finishLoad:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=document.getElementById("loader-mask"),r&&r.remove(),e.$notify.info({title:"离线使用",message:"我们使用PWA技术，无网络也能使用<br/>最近更新："+re.updateInfo+'<br/><a target="_blank" href="https://igavin.cc/music/alert.html">使用提示</a>',dangerouslyUseHTMLString:!0,duration:1e4,position:"top-left"});case 3:case"end":return t.stop()}}),t)})))()},showSuccess:function(e){if(e.status){this.instant_download?(K(e,this.download_format),X(e)):(this.tableData.push(e),this.$notify.success({title:"解锁成功",message:"成功解锁 "+e.title,duration:3e3}));var t=[e.title,e.artist,e.album];window._paq.push(["trackEvent","Unlock",e.rawExt+","+e.mime,JSON.stringify(t)])}else this.showFail(e.message,e.rawFilename+"."+e.rawExt)},showFail:function(e,t){this.$notify.error({title:"出现问题",message:e+"，"+t+'，参考<a target="_blank" href="https://igavin.cc/music/alert.html">使用提示</a>',dangerouslyUseHTMLString:!0,duration:6e3}),window._paq.push(["trackEvent","Error",e,t]),console.error(e,t)},changePlaying:function(e){this.playing_url=e,this.playing_auto=!0},handleDeleteAll:function(){this.tableData.forEach((function(e){X(e)})),this.tableData=[]},handleDownloadAll:function(){var e=this,t=0,r=setInterval((function(){t<e.tableData.length?(K(e.tableData[t],e.download_format),t++):clearInterval(r)}),300)}}},ae=ne,ce=(r("034f"),Object(W["a"])(ae,F,q,!1,null,null,null)),ie=ce.exports,oe=r("9483");Object(oe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available."),window.location.reload()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),T["default"].use(P.a),T["default"].use(E.a),T["default"].use(C.a),T["default"].use(A.a),T["default"].use(R.a),T["default"].use(M.a),T["default"].use(j.a),T["default"].use(k.a),T["default"].use(y.a),T["default"].use(v.a),T["default"].use(b.a),T["default"].use(m.a),T["default"].use(d.a),T["default"].use(l.a),T["default"].use(s.a),T["default"].use(i.a),T["default"].prototype.$notify=a.a,T["default"].config.productionTip=!1,new T["default"]({render:function(e){return e(ie)}}).$mount("#app")},"85ec":function(e,t,r){},9224:function(e){e.exports=JSON.parse('{"name":"unlock-music","version":"1.5.1","updateInfo":"改善.mgg解锁算法","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js"},"dependencies":{"base64-js":"^1.3.1","browser-id3-writer":"^4.4.0","core-js":"^3.6.4","crypto-js":"^4.0.0","element-ui":"^2.13.0","iconv-lite":"^0.5.1","music-metadata-browser":"^2.0.5","register-service-worker":"^1.7.1","vue":"^2.6.11"},"devDependencies":{"@vue/cli-plugin-babel":"^4.3.0","@vue/cli-plugin-pwa":"^4.3.0","@vue/cli-service":"^4.3.0","babel-plugin-component":"^1.1.1","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.11","workerize-loader":"^1.1.0"}}')},a8ee:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return o}));r("ace4"),r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("96cf");var n=r("1da1"),a=r("fd2f"),c=r("06dc"),i=[0,0,0,32,102,116,121,112];function o(e,t){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])(t);case 2:for(n=e.sent,o=new Uint8Array(n),s=0;s<8;++s)o[s]=i[s];return u=new Blob([o],{type:"audio/mp4"}),e.next=8,Object(a["Decrypt"])(u,r,"m4a",!1);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},b57b:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return s}));r("fb6a"),r("ace4"),r("d3b7"),r("25f0"),r("3ca3"),r("843c"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),c=r("cb96"),i=[121,101,101,108,105,111,110,45,107,117,119,111,45,116,109,101],o="MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";function s(e,t,r){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var o,s,u,f,d,p,m,h,b,g,v,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e.t0=Uint8Array,e.next=4,Object(a["d"])(t);case 4:if(e.t1=e.sent,o=new e.t0(e.t1),Object(a["h"])(i,o.slice(0,16))){e.next=8;break}return e.abrupt("return",{status:!1,message:"Not a valid kwm file!"});case 8:for(s=o.slice(24,32),u=l(s),f=o.slice(1024),d=f.length,p=0;p<d;++p)f[p]^=u[p%32];return m=Object(a["b"])(f,"mp3"),h=a["a"][m],b=new Blob([f],{type:h}),e.next=18,c.parseBlob(b);case 18:return g=e.sent,v=Object(a["e"])(g.common.artist,g.common.title,r),w=Object(a["f"])(g),e.abrupt("return",{status:!0,title:v.title,artist:v.artist,ext:m,album:g.common.album,picture:w,file:URL.createObjectURL(b),mime:h});case 22:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){for(var t=new DataView(e.buffer),r=t.getBigUint64(0,!0).toString(),n=f(r),a=new Uint8Array(32),c=0;c<32;c++)a[c]=o[c].charCodeAt()^n[c].charCodeAt();return a}function f(e){var t=e.length,r=e;return t>32?r=e.slice(0,32):t<32&&(r=e.padEnd(32,e)),r}},b6cf:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return D}));r("fb6a"),r("45fc"),r("ace4"),r("d3b7"),r("3ca3"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),c=(r("99af"),r("4160"),r("159b"),r("d4ec")),i=r("bee2"),o=[79,103,103,83,0,2,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,1,30,1,118,111,114,98,105,115,0,0,0,0,2,68,172,0,0,0,0,0,0,0,238,2,0,0,0,0,0,184,1,79,103,103,83,0,0,0,0,0,0,0,0,0,0,255,255,255,255,1,0,0,0,255,255,255,255],s=[3,118,111,114,98,105,115,44,0,0,0,88,105,112,104,46,79,114,103,32,108,105,98,86,111,114,98,105,115,32,73,32,50,48,49,53,48,49,48,53,32,40,226,155,132,226,155,132,226,155,132,226,155,132,41,255,0,0,0,255,0,0,0,84,73,84,76,69,61],u=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,6,3,3,3,3,6,6,6,6,3,3,3,3,6,6,6,6,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0],l=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,3,3,0,1,3,3,3,3,3,3,3,3],f=[222,81,250,195,74,214,202,144,126,103,94,247,213,82,132,216,71,149,187,161,170,198,102,35,146,98,243,116,161,159,244,160,29,63,91,240,19,14,9,61,249,188,0,17],d=function(){function e(t,r,n){Object(c["a"])(this,e),void 0===r||void 0===n?(44===t.length?(this.Matrix44=t,this.generateMask128from44()):(this.Matrix128=t,this.generateMask44from128()),this.generateMask58from128()):(this.Matrix58=t,this.Super58A=r,this.Super58B=n,this.generateMask128from58(),this.generateMask44from128())}return Object(i["a"])(e,[{key:"generateMask128from58",value:function(){if(56!==this.Matrix58.length)throw"incorrect mask58 matrix length";for(var e=[],t=0;t<8;t+=1)e=e.concat([this.Super58A],this.Matrix58.slice(7*t,7*t+7),[this.Super58B],this.Matrix58.slice(49-7*t,56-7*t).reverse());this.Matrix128=e}},{key:"generateMask58from128",value:function(){if(128!==this.Matrix128.length)throw"incorrect mask128 length";for(var e=this.Matrix128[0],t=this.Matrix128[8],r=[],n=0;n<8;n+=1){var c=16*n,i=120-c;if(this.Matrix128[c]!==e||this.Matrix128[c+8]!==t)throw"decode mask-128 to mask-58 failed";var o=this.Matrix128.slice(c+1,c+8),s=this.Matrix128.slice(i+1,i+8).reverse();if(!Object(a["h"])(o,s))throw"decode mask-128 to mask-58 failed";r=r.concat(o)}this.Matrix58=r,this.Super58A=e,this.Super58B=t}},{key:"generateMask44from128",value:function(){var e=this;if(128!==this.Matrix128.length)throw"incorrect mask128 matrix length";var t=y();this.Matrix44=[];var r=0;t.forEach((function(t){for(var n=t.length,a=1;a<n;a++)if(e.Matrix128[t[0]]!==e.Matrix128[t[a]])throw"decode mask-128 to mask-44 failed";e.Matrix44[r]=e.Matrix128[t[0]],r++}))}},{key:"generateMask128from44",value:function(){var e=this;if(44!==this.Matrix44.length)throw"incorrect mask length";this.Matrix128=[];var t=0;y().forEach((function(r){r.forEach((function(r){e.Matrix128[r]=e.Matrix44[t]})),t++}))}},{key:"Decrypt",value:function(e){for(var t=e.slice(0),r=-1,n=-1,a=0;a<e.length;a++)r++,n++,(32768===r||r>32768&&(r+1)%32768===0)&&(r++,n++),n>=128&&(n-=128),t[a]^=this.Matrix128[n];return t}}]),e}();function p(){return new d(f)}function m(e){for(var t,r=Math.min(32768,e.length),n=0;n<r;n+=128)try{if(t=new d(e.slice(n,n+128)),Object(a["h"])(a["c"],t.Decrypt(e.slice(0,a["c"].length))))break}catch(c){}return t}function h(e){if(!(e.length<256)){for(var t={},r=0;r<44;r++)t[r]={};for(var n=e[84]^e[12]^o[12],c=k(n),i=_(n),s=0;s<c.length;s++)if(0!==i[s]){var u=x(s),l=e[s]^c[s],f=i[s];l in t[u]?t[u][l]+=f:t[u][l]=f}var p=[];try{for(var m=0;m<44;m++)p[m]=g(t[m])}catch(v){return}var h=new d(p),b=h.Decrypt(e.slice(0,a["i"].length));if(Object(a["h"])(a["i"],b))return h}}function b(e,t,r){return new d(e,t,r)}function g(e){if(0===e.length)throw"can not match at least one key";e.length>1&&console.warn("There are 2 potential value for the mask!");var t,r=0;for(var n in e)e[n]>r&&(t=n,r=e[n]);return parseInt(t)}var v=[],w=[];function y(){return v}function x(e){return w[e%128]}function k(e){for(var t=[e,255],r=2;r<e;r++)t.push(255);return t.push(255),o.concat(t,s)}function _(e){for(var t=[6,0],r=2;r<e;r++)t.push(4);return t.push(0),u.concat(t,l)}(function(){for(var e=0;e<128;e++){var t=(e*e+27)%256;t in v?v[t].push(e):v[t]=[e]}var r=0;v.forEach((function(e){e.forEach((function(e){w[e]=r})),r++}))})();var j=r("1fb5"),O=r("cb96"),M={mgg:{handler:h,ext:"ogg",detect:!0},mflac:{handler:m,ext:"flac",detect:!0},qmc0:{handler:p,ext:"mp3",detect:!1},qmc2:{handler:p,ext:"ogg",detect:!1},qmc3:{handler:p,ext:"mp3",detect:!1},qmcogg:{handler:p,ext:"ogg",detect:!1},qmcflac:{handler:p,ext:"flac",detect:!1},bkcmp3:{handler:p,ext:"mp3",detect:!1},bkcflac:{handler:p,ext:"flac",detect:!1},tkm:{handler:p,ext:"m4a",detect:!1}};function D(e,t,r){return R.apply(this,arguments)}function R(){return R=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var c,i,o,s,u,l,f,d,p,m,h,b,g,v,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n in M){e.next=2;break}return e.abrupt("return",{status:!1,message:"File type is incorrect!"});case 2:return c=M[n],e.t0=Uint8Array,e.next=6,Object(a["d"])(t);case 6:if(e.t1=e.sent,i=new e.t0(e.t1),!c.detect){e.next=22;break}if(l=new DataView(i.slice(i.length-4).buffer).getUint32(0,!0),f=i.length-4-l,o=i.slice(0,f),s=c.handler(o),u=i.slice(f,f+l),void 0!==s){e.next=18;break}return e.next=17,A(u,r,n);case 17:s=e.sent;case 18:if(void 0!==s){e.next=20;break}return e.abrupt("return",{status:!1,message:n+"格式仅提供实验性支持"});case 20:e.next=24;break;case 22:o=i,s=c.handler(o);case 24:return d=s.Decrypt(o),p=Object(a["b"])(d,c.ext),m=a["a"][p],h=new Blob([d],{type:m}),e.next=30,O.parseBlob(h);case 30:for(g in b=e.sent,b.native)b.native[g].some((function(e){return"TCON"===e.id&&"(12)"===e.value}))&&(b.common.artist=decode(b.common.artist,"gbk"),b.common.title=decode(b.common.title,"gbk"),b.common.album=decode(b.common.album,"gbk"));if(v=Object(a["e"])(b.common.artist,b.common.title,r),c.detect&&U(u,s.Matrix128,v.artist,v.title,b.common.album,r,n),w=Object(a["f"])(b),""!==w){e.next=39;break}return e.next=38,C(v.artist,v.title,b.common.album);case 38:w=e.sent;case 39:return e.abrupt("return",{status:!0,title:v.title,artist:v.artist,ext:p,album:b.common.album,picture:w,file:URL.createObjectURL(h),mime:m});case 40:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function U(e,t,r,n,a,c,i){fetch("https://stats.ixarea.com/collect/qmcmask/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Mask:Object(j["fromByteArray"])(new Uint8Array(t)),Key:Object(j["fromByteArray"])(e),Artist:r,Title:n,Album:a,Filename:c,Format:i})}).then().catch()}function A(e,t,r){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://stats.ixarea.com/collect/qmcmask/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Format:n,Key:Object(j["fromByteArray"])(t),Filename:r,Type:44})});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",b(Object(j["toByteArray"])(c.Matrix44)));case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),S.apply(this,arguments)}function C(e,t,r){return B.apply(this,arguments)}function B(){return B=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var c,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c="https://c.y.qq.com/soso/fcgi-bin/client_search_cp?n=10&new_json=1&w="+encodeURIComponent(t+" "+r+" "+n),o=void 0,e.prev=2,e.next=5,Object(a["j"])(c,"callback");case 5:i=e.sent,o=i["data"]["song"]["list"][0],e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](2);case 11:return s="",o&&o["album"]&&(void 0!==o["album"]["pmid"]?s="https://y.gtimg.cn/music/photo_new/T002M000"+o["album"]["pmid"]+".jpg":void 0!==o["album"]["id"]&&(s="https://imgcache.qq.com/music/photo/album/"+o["album"]["id"]%100+"/albumpic_"+o["album"]["id"]+"_0.jpg")),e.abrupt("return",s);case 14:case"end":return e.stop()}}),e,null,[[2,9]])}))),B.apply(this,arguments)}},bd2e:function(e,t,r){"use strict";r.r(t),r.d(t,"CommonDecrypt",(function(){return l}));r("baa5"),r("b0c0"),r("96cf");var n=r("1da1"),a=r("dde9"),c=r("b57b"),i=r("002f"),o=r("b6cf"),s=r("fd2f"),u=r("a8ee");function l(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.name.substring(t.name.lastIndexOf(".")+1,t.name.length).toLowerCase(),n=t.name.substring(0,t.name.lastIndexOf(".")),e.t0=r,e.next="ncm"===e.t0?5:"kwm"===e.t0?9:"xm"===e.t0||"wav"===e.t0||"mp3"===e.t0||"flac"===e.t0||"m4a"===e.t0?13:"ogg"===e.t0?17:"tm0"===e.t0||"tm3"===e.t0?21:"qmc3"===e.t0||"qmc2"===e.t0||"qmc0"===e.t0||"qmcflac"===e.t0||"qmcogg"===e.t0||"tkm"===e.t0||"bkcmp3"===e.t0||"bkcflac"===e.t0||"mflac"===e.t0||"mgg"===e.t0?25:"tm2"===e.t0||"tm6"===e.t0?29:33;break;case 5:return e.next=7,a.Decrypt(t.raw,n,r);case 7:return l=e.sent,e.abrupt("break",34);case 9:return e.next=11,c.Decrypt(t.raw,n,r);case 11:return l=e.sent,e.abrupt("break",34);case 13:return e.next=15,i.Decrypt(t.raw,n,r);case 15:return l=e.sent,e.abrupt("break",34);case 17:return e.next=19,s.Decrypt(t.raw,n,r);case 19:return l=e.sent,e.abrupt("break",34);case 21:return e.next=23,s.Decrypt(t.raw,n,"mp3");case 23:return l=e.sent,e.abrupt("break",34);case 25:return e.next=27,o.Decrypt(t.raw,n,r);case 27:return l=e.sent,e.abrupt("break",34);case 29:return e.next=31,u.Decrypt(t.raw,n);case 31:return l=e.sent,e.abrupt("break",34);case 33:l={status:!1,message:"不支持此文件格式"};case 34:return l.rawExt=r,l.rawFilename=n,e.abrupt("return",l);case 37:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},bfa2:function(e,t,r){var n=r("3d67"),a=["CommonDecrypt"];e.exports=function(){var e=new Worker(r.p+"f69c64130d237f1969ab.worker.js",{name:"[hash].worker.js"});return n(e,a),e}},dde9:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return s}));r("4160"),r("c975"),r("a15b"),r("d81d"),r("fb6a"),r("ace4"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3"),r("5319"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("159b"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),c=r("3452"),i=c.enc.Hex.parse("687a4852416d736f356b496e62617857"),o=c.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728");function s(e,t,r){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var c,i,o,s,u,p,m,h,b,g,v,w,y,x,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["d"])(t);case 2:if(c=e.sent,i=new DataView(c),1313166403===i.getUint32(0,!0)&&1296122950===i.getUint32(4,!0)){e.next=6;break}return e.abrupt("return",{status:!1,message:"此ncm文件已损坏"});case 6:for(o=l(i,c,10),s=f(o.data),u=d(i,c,o.offset),p=u.data,m=u.offset+i.getUint32(u.offset+5,!0)+13,h=new Uint8Array(c,m),b=h.length,g=0;g<b;++g)h[g]^=s[255&g];return void 0===p.album&&(p.album=""),v=[],p.artist&&p.artist.forEach((function(e){return v.push(e[0])})),w=Object(a["e"])(v.join(" & "),p.musicName,r),0===v.length&&v.push(w.artist),void 0===p.format&&(p.format=Object(a["b"])(h,"mp3")),e.next=22,Object(a["g"])(p.albumPic);case 22:if(y=e.sent,"mp3"!==p.format){e.next=27;break}return e.next=26,Object(a["k"])(h,v,w.title,p.album,y.buffer,p.albumPic);case 26:h=e.sent;case 27:return x=a["a"][p.format],k=new Blob([h],{type:x}),e.abrupt("return",{status:!0,title:w.title,artist:w.artist,ext:p.format,album:p.album,picture:y.url,file:URL.createObjectURL(k),mime:x});case 30:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t,r){var n=e.getUint32(r,!0);r+=4;var a=new Uint8Array(t,r,n).map((function(e){return 100^e}));r+=n;for(var o=c.AES.decrypt({ciphertext:c.lib.WordArray.create(a)},i,{mode:c.mode.ECB,padding:c.pad.Pkcs7}),s=new Uint8Array(o.sigBytes),u=o.words,l=o.sigBytes,f=0;f<l;f++)s[f]=u[f>>>2]>>>24-f%4*8&255;return{offset:r,data:s.slice(17)}}function f(e){for(var t=new Uint8Array(Array(256).keys()),r=e.length,n=0,a=0;a<256;a++){n=t[a]+n+e[a%r]&255;var c=[t[n],t[a]];t[a]=c[0],t[n]=c[1]}return t.map((function(e,t,r){t=t+1&255;var n=r[t],a=r[t+n&255];return r[n+a&255]}))}function d(e,t,r){var n=e.getUint32(r,!0);if(r+=4,0===n)return{data:{},offset:r};var a=new Uint8Array(t,r,n).map((function(e){return 99^e}));r+=n;var i=c.AES.decrypt({ciphertext:c.enc.Base64.parse(c.lib.WordArray.create(a.slice(22)).toString(c.enc.Utf8))},o,{mode:c.mode.ECB,padding:c.pad.Pkcs7}).toString(c.enc.Utf8),s=i.indexOf(":"),u=JSON.parse(i.slice(s+1));return"dj"===i.slice(0,s)&&(u=u.mainMusic),u.albumPic=u.albumPic.replace("http:","https:"),{data:u,offset:r}}},f1ab:function(e,t,r){"use strict";var n=r("fae0"),a=r.n(n);a.a},fae0:function(e,t,r){},fd2f:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return i}));r("ace4"),r("d3b7"),r("3ca3"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),c=r("cb96");function i(e,t,r){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var i,o,s,u,l,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=!(f.length>3&&void 0!==f[3])||f[3],o=n,!i){e.next=10;break}return e.t0=Uint8Array,e.next=6,Object(a["d"])(t);case 6:e.t1=e.sent,s=new e.t0(e.t1),o=Object(a["b"])(s,n),o!==n&&(t=new Blob([s],{type:a["a"][o]}));case 10:return e.next=12,c.parseBlob(t);case 12:return u=e.sent,l=Object(a["e"])(u.common.artist,u.common.title,r),e.abrupt("return",{status:!0,title:l.title,artist:l.artist,ext:o,album:u.common.album,picture:Object(a["f"])(u),file:URL.createObjectURL(t),mime:a["a"][o]});case 15:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}});