"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[3342],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return t?r.createElement(f,l(l({ref:a},u),{},{components:t})):r.createElement(f,l({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},935:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const o={tags:["liquibase","database","java"]},l="Liquibase",i={unversionedId:"java/liquibase",id:"java/liquibase",title:"Liquibase",description:"Rollback",source:"@site/docs/java/liquibase.md",sourceDirName:"java",slug:"/java/liquibase",permalink:"/knowledge/docs/java/liquibase",draft:!1,editUrl:"https://github.com/sonallux/knowledge/tree/main/docs/java/liquibase.md",tags:[{label:"liquibase",permalink:"/knowledge/docs/tags/liquibase"},{label:"database",permalink:"/knowledge/docs/tags/database"},{label:"java",permalink:"/knowledge/docs/tags/java"}],version:"current",frontMatter:{tags:["liquibase","database","java"]},sidebar:"defaultSidebar",previous:{title:"Chaos Engineering",permalink:"/knowledge/docs/java/chaos-engineering"},next:{title:"Next Java",permalink:"/knowledge/docs/java/next-java"}},c={},s=[{value:"Rollback",id:"rollback",level:2}],u={toc:s};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"liquibase"},"Liquibase"),(0,n.kt)("h2",{id:"rollback"},"Rollback"),(0,n.kt)("p",null,"Liquibase can rollback already applied changesets. It is recommended to always add corresponding rollback operations to a changeset, to be able to rollback in case of failures/errors.\nSome liquibase change types support auto rollback, for all other operations a manual rollback SQL statement can be specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rollback")," tag. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.liquibase.com/workflows/liquibase-community/liquibase-auto-rollback.html"},"Auto Rollback | Liquibase Docs"),"."))}p.isMDXComponent=!0}}]);