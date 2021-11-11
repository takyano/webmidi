"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[789],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,slug:"/getting-started"},l="Supported Environments",p={unversionedId:"getting-started/supported-environments",id:"getting-started/supported-environments",isDocsHomePage:!1,title:"Supported Environments",description:"Starting with version 3, the library works in both the browser and Node.js and is available in a",source:"@site/docs/getting-started/supported-environments.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/webmidi/docs/getting-started",editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/getting-started/supported-environments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/getting-started"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/webmidi/docs/"},next:{title:"Installation",permalink:"/webmidi/docs/getting-started/installation"}},u=[{value:"Browser Support",id:"browser-support",children:[],level:2},{value:"Node.js Support",id:"nodejs-support",children:[],level:2},{value:"Distribution Flavours",id:"distribution-flavours",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-environments"},"Supported Environments"),(0,i.kt)("p",null,"Starting with version 3, the library works in both the browser and Node.js and is available in a\nvariety of formats. Let's look at the specificities of all these environments."),(0,i.kt)("h2",{id:"browser-support"},"Browser Support"),(0,i.kt)("p",null,"The library works in all browsers that natively support the\n",(0,i.kt)("a",{parentName:"p",href:"https://webaudio.github.io/web-midi-api/"},"Web MIDI API"),". Currently, the following major browsers\nhave native support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edge v79+"),(0,i.kt)("li",{parentName:"ul"},"Chrome 43+"),(0,i.kt)("li",{parentName:"ul"},"Opera 30+")),(0,i.kt)("p",null,"It is also possible to use this library in other browsers if you install\n",(0,i.kt)("a",{parentName:"p",href:"https://jazz-soft.net/download/Jazz-Plugin/"},"Jazz-Plugin")," v1.4+. This combination provides\nsupport for the following additional web browsers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firefox"),(0,i.kt)("li",{parentName:"ul"},"Safari"),(0,i.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,i.kt)("p",null,"Note that, in 2020, ",(0,i.kt)("a",{parentName:"p",href:"https://webkit.org/tracking-prevention/"},"Apple has announced")," that they would\nnot natively support the Web MIDI API (and a host of other APIs) in Safari because of fingerprinting\nconcerns."),(0,i.kt)("h2",{id:"nodejs-support"},"Node.js Support"),(0,i.kt)("p",null,"Version 3.0 of WEBMIDI.js introduced full Node.js support. Nothing special needs to be done, it\nshould just work in the following environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GNU/Linux"),(0,i.kt)("li",{parentName:"ul"},"macOS"),(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi")),(0,i.kt)("p",null,"Support for the Node.js environment has been made possible by the good folks of\n",(0,i.kt)("a",{parentName:"p",href:"https://jazz-soft.net/"},"Jazz-Soft")," via their ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jzz"},"JZZ")," module."),(0,i.kt)("h2",{id:"distribution-flavours"},"Distribution Flavours"),(0,i.kt)("p",null,"To cater to various needs, WEBMIDI.js is distributed in 3 different flavours which you can find\ninside the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Immediately Invoked Function Expression")," (IIFE): This version adds its objects directly in the\nglobal namespace. This is the legacy approach which is often easier for beginners.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ES6 Module")," (ESM): This is the modern approach which allows you to ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," the objects as\nneeded (works in newer versions of browsers and Node.js).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CommonJS Module")," (CJS): this is the flavour used by Node.js and often with bundling tools\nsuch as WebPack."))),(0,i.kt)("p",null,"All 3 flavours come in full and minified versions with sourcemap."))}c.isMDXComponent=!0}}]);