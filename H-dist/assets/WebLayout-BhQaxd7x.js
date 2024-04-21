import{c as T,a as w,Q as g,b as A,s as E}from"./scrollToElement-CTeb5B5e.js";import{v as N,x as V,r as L,c as f,w as k,y as K,z as D,h as x,i as U,A as j,g as M,B as Y,_ as G,k as J,l as p,m as q,n,p as i,f as l,u as s,Q,q as c,t as b,C as B,F as X,D as Z,E as ee}from"./index-BmzXl238.js";import{Q as te,b as F,a as ae,c as le}from"./QLayout-BPycX3O8.js";import{u as oe,Q as ne}from"./portfolio-CvsPGc2Q.js";import"./axios-Cm0UX6qg.js";const se=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:o,emit:d}){const{proxy:{$q:_}}=M(),a=U(j,V);if(a===V)return console.error("QHeader needs to be child of QLayout"),V;const h=L(parseInt(t.heightHint,10)),r=L(!0),m=f(()=>t.reveal===!0||a.view.value.indexOf("H")!==-1||_.platform.is.ios&&a.isContainer.value===!0),C=f(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return r.value===!0?h.value:0;const e=h.value-a.scroll.value.position;return e>0?e:0}),S=f(()=>t.modelValue!==!0||m.value===!0&&r.value!==!0),$=f(()=>t.modelValue===!0&&S.value===!0&&t.reveal===!0),O=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(S.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),W=f(()=>{const e=a.rows.value.top,v={};return e[0]==="l"&&a.left.space===!0&&(v[_.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(v[_.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),v});function u(e,v){a.update("header",e,v)}function y(e,v){e.value!==v&&(e.value=v)}function P({height:e}){y(h,e),u("size",e)}function R(e){$.value===!0&&y(r,!0),d("focusin",e)}k(()=>t.modelValue,e=>{u("space",e),y(r,!0),a.animate()}),k(C,e=>{u("offset",e)}),k(()=>t.reveal,e=>{e===!1&&y(r,t.modelValue)}),k(r,e=>{a.animate(),d("reveal",e)}),k(a.scroll,e=>{t.reveal===!0&&y(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const z={};return a.instances.header=z,t.modelValue===!0&&u("size",h.value),u("space",t.modelValue),u("offset",C.value),K(()=>{a.instances.header===z&&(a.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const e=D(o.default,[]);return t.elevated===!0&&e.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(x(T,{debounce:0,onResize:P})),x("header",{class:O.value,style:W.value,onFocusin:R},e)}}}),H=N({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:o}){const d=f(()=>parseInt(t.lines,10)),_=f(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),a=f(()=>t.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>x("div",{style:a.value,class:_.value},Y(o.default))}}),I="/assets/header-logo-WeY3KVkK.png",ie={class:"bwl layout-container"},re={class:"bwl"},ue={key:0,class:"links"},ce=["href"],fe=["href"],de=["href"],ve=i("small",{class:"copyrights"},[c(" © "),i("time",{datetime:"2023"},"2023"),c(" - present Anas Shamlan. ")],-1),_e={class:"version"},he={__name:"WebLayout",setup(t){const o=oe(),d=L("0.5.0".slice(0,-2));return(_,a)=>{const h=J("router-view");return p(),q(te,{view:"hHh lpR fFf"},{default:n(()=>[i("div",ie,[l(se,{reveal:"",class:"text-white"},{default:n(()=>[i("div",re,[l(w,{class:"brand",src:I,alt:"welcome to my portfolio website"})])]),_:1}),l(ae,null,{default:n(()=>[s(o).profile?(p(),q(F,{key:0,class:"quick-buttons"},{default:n(()=>[l(Q,{flat:"",href:s(o).profile.social.github.link,target:"_blank"},{default:n(()=>[l(g,{offset:[8,8],"transition-duration":"100"},{default:n(()=>[c(b(s(o).profile.social.github.tip),1)]),_:1}),l(w,{src:s(o).profile.social.github.img,alt:s(o).profile.social.github.tip},null,8,["src","alt"])]),_:1},8,["href"]),l(Q,{flat:"",href:s(o).profile.social.linkedin.link,target:"_blank"},{default:n(()=>[l(g,{offset:[8,8],"transition-duration":"100"},{default:n(()=>[c(b(s(o).profile.social.linkedin.tip),1)]),_:1}),l(w,{src:s(o).profile.social.linkedin.img,alt:s(o).profile.social.linkedin.tip},null,8,["src","alt"])]),_:1},8,["href"]),l(A),l(Q,{flat:"",icon:"r_contact_mail",onClick:a[0]||(a[0]=r=>s(E)({elId:"contact"}))},{default:n(()=>[l(g,null,{default:n(()=>[c(" send an email ")]),_:1})]),_:1}),l(Q,{flat:"",icon:"r_description",href:s(o).profile.cvLink,target:"_blank"},{default:n(()=>[l(g,null,{default:n(()=>[c("view CV")]),_:1})]),_:1},8,["href"])]),_:1})):(p(),q(ne,{key:1,width:"100%",class:"quick-buttons"})),l(h)]),_:1}),l(le,null,{default:n(()=>[l(F,null,{default:n(()=>[l(w,{class:"brand",src:I,alt:"welcome to my portfolio website"})]),_:1}),s(o).profile?(p(),B("div",ue,[i("ul",null,[l(H,{header:""},{default:n(()=>[c(" Social ")]),_:1}),(p(!0),B(X,null,Z(s(o).profile.social,(r,m)=>(p(),B("li",{key:m},[i("a",{href:r.link,target:"_blank"},b(m),9,ce)]))),128))]),i("ul",null,[l(H,{header:""},{default:n(()=>[c(" Contact ")]),_:1}),i("li",null,[i("a",{href:`mailto:${s(o).profile.email}`},b(s(o).profile.email),9,fe)]),i("li",null,[l(g,null,{default:n(()=>[c("via direct call or WhatsApp")]),_:1}),i("a",{href:`tel:${s(o).profile.phone}`},b(s(o).profile.phone),9,de)])])])):ee("",!0),ve,i("small",_e," v"+b(d.value)+" ~ [MVP] ",1)]),_:1})])]),_:1})}}},ke=G(he,[["__file","WebLayout.vue"]]);export{ke as default};
