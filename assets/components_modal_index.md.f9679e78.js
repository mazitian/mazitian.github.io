import{V as d,_ as A,c as w,a as F,w as h,b as n,d as t,r as D,o as x}from"./app.d38f7ac4.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:i,withCtx:a,createVNode:l,createElementVNode:m,openBlock:b,createElementBlock:g}=d,r=p("\u6253\u5F00"),_=m("span",null,"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01",-1),v={class:"dialog-footer"},B=p("\u53D6\u6D88"),f=p("\u786E\u5B9A");function C(o,e){const s=i("ml-button"),y=i("ml-modal");return b(),g("div",null,[l(s,{onClick:o.open},{default:a(()=>[r]),_:1},8,["onClick"]),l(y,{modelValue:o.visible,"onUpdate:modelValue":e[2]||(e[2]=c=>o.visible=c),title:"\u5C0F\u8D34\u58EB",center:"","show-close":!1,"align-center":""},{footer:a(()=>[m("div",v,[l(s,{style:{"margin-right":"12px"},onClick:e[0]||(e[0]=c=>o.visible=!1)},{default:a(()=>[B]),_:1}),l(s,{onClick:e[1]||(e[1]=c=>o.visible=!1)},{default:a(()=>[f]),_:1})])]),default:a(()=>[_]),_:1},8,["modelValue"])])}const{defineComponent:k}=d,{ref:u}=d;return{render:C,...k({setup(o,{expose:e}){e();const s=u(!1),c={visible:s,open:()=>{s.value=!0},ref:u};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}})}}(),"render-demo-1":function(){const{createTextVNode:p,resolveComponent:i,withCtx:a,createVNode:l,openBlock:m,createElementBlock:b}=d,g=p("\u6253\u5F00"),r=p(" this is title "),_=p(" this is footer ");function v(k,u){const E=i("ml-button"),o=i("ml-input"),e=i("ml-modal");return m(),b("div",null,[l(E,{onClick:k.open},{default:a(()=>[g]),_:1},8,["onClick"]),l(e,{modelValue:k.visible,"onUpdate:modelValue":u[1]||(u[1]=s=>k.visible=s),title:"Shipping address",width:"50%"},{title:a(()=>[r]),footer:a(()=>[_]),default:a(()=>[l(o,{modelValue:k.val,"onUpdate:modelValue":u[0]||(u[0]=s=>k.val=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}const{defineComponent:B}=d,{ref:f}=d;return{render:v,...B({setup(k,{expose:u}){u();const E=f(!1),o=f(""),s={visible:E,val:o,open:()=>{E.value=!0},ref:f};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}}(),"render-demo-2":function(){const{createTextVNode:p,resolveComponent:i,withCtx:a,createVNode:l,createElementVNode:m,openBlock:b,createElementBlock:g}=d,r=p("\u6253\u5F00"),_={class:"my-header"},v=m("h4",null,"This is a custom header!",-1),B=p(" Close "),f=p(" This is dialog content. ");function C(o,e){const s=i("ml-button"),y=i("ml-modal");return b(),g("div",null,[l(s,{onClick:o.open},{default:a(()=>[r]),_:1},8,["onClick"]),l(y,{modelValue:o.visible,"onUpdate:modelValue":e[0]||(e[0]=c=>o.visible=c),"show-close":!1},{header:a(({close:c})=>[m("div",_,[v,l(s,{type:"danger",onClick:c},{default:a(()=>[B]),_:2},1032,["onClick"])])]),default:a(()=>[f]),_:1},8,["modelValue"])])}const{defineComponent:k}=d,{ref:u}=d;return{render:C,...k({setup(o,{expose:e}){e();const s=u(!1),c={visible:s,open:()=>{s.value=!0},ref:u};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}})}}()}},G=JSON.parse('{"title":"Modal \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u529F\u80FD","slug":"\u57FA\u7840\u529F\u80FD"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5934\u90E8","slug":"\u81EA\u5B9A\u4E49\u5934\u90E8"}],"relativePath":"components/modal/index.md"}');const q=n("h1",{id:"modal-\u5BF9\u8BDD\u6846",tabindex:"-1"},[t("Modal \u5BF9\u8BDD\u6846 "),n("a",{class:"header-anchor",href:"#modal-\u5BF9\u8BDD\u6846","aria-hidden":"true"},"#")],-1),N=n("h2",{id:"\u57FA\u7840\u529F\u80FD",tabindex:"-1"},[t("\u57FA\u7840\u529F\u80FD "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u529F\u80FD","aria-hidden":"true"},"#")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-modal")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5C0F\u8D34\u58EB"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"center"),t(`
    `),n("span",{class:"token attr-name"},":show-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"align-center"),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dialog-footer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible = false"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible = false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u786E\u5B9A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".dialog-footer"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h2",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),j=n("p",null,"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49 Modal \u5185\u5BB9\u3002\u6211\u4EEC\u6709 title\u3001default \u548C footer \u4E09\u4E2A\u63D2\u69FD\u53EF\u4EE5\u4F7F\u7528\u3002",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Shipping address"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),t(" this is title "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please input"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(" this is footer "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h2",{id:"\u81EA\u5B9A\u4E49\u5934\u90E8",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5934\u90E8 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5934\u90E8","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u53EF\u4EE5\u901A\u8FC7 header \u63D2\u69FD\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9\u3002",-1),O=n("div",null,"\u901A\u8FC7 header \u63D2\u69FD\u5B9A\u4E49\u5934\u90E8\uFF0C\u4E0A\u4E0B\u6587\u4E2D\u6709 close \u65B9\u6CD5\u7528\u4E8E\u5173\u95ED Modal",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":show-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ close }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("This is a custom header!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" Close "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    This is dialog content.
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-header"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" row"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" space-between"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"word-break"),n("span",{class:"token punctuation"},":"),t(" break-all"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function J(p,i,a,l,m,b){const g=D("render-demo-0"),r=D("demo"),_=D("render-demo-1"),v=D("render-demo-2");return x(),w("div",null,[q,N,F(r,{sourceCode:`<template>
  <ml-button @click="open">\u6253\u5F00</ml-button>

  <ml-modal
    v-model="visible"
    title="\u5C0F\u8D34\u58EB"
    center
    :show-close="false"
    align-center
  >
    <span>\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01</span>
    <template #footer>
      <div class="dialog-footer">
        <ml-button style="margin-right: 12px;" @click="visible = false"
          >\u53D6\u6D88</ml-button
        >
        <ml-button @click="visible = false">\u786E\u5B9A</ml-button>
      </div>
    </template>
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const open = () => {
  visible.value = true
}
<\/script>

<style>
.dialog-footer {
  padding: 20px;
  text-align: right;
}
</style>
`},{highlight:h(()=>[T]),default:h(()=>[F(g)]),_:1}),S,j,F(r,{sourceCode:`<template>
  <ml-button @click="open">\u6253\u5F00</ml-button>

  <ml-modal v-model="visible" title="Shipping address" width="50%">
    <template #title> this is title </template>
    <ml-input v-model="val" placeholder="Please input" />
    <template #footer> this is footer </template>
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const val = ref('')
const open = () => {
  visible.value = true
}
<\/script>
`},{highlight:h(()=>[P]),default:h(()=>[F(_)]),_:1}),$,M,F(r,{sourceCode:`<template>
  <ml-button @click="open">\u6253\u5F00</ml-button>

  <ml-modal v-model="visible" :show-close="false">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <ml-button type="danger" @click="close"> Close </ml-button>
      </div>
    </template>
    This is dialog content.
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const open = () => {
  visible.value = true
}
<\/script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}
</style>
`},{description:h(()=>[O]),highlight:h(()=>[U]),default:h(()=>[F(v)]),_:1})])}const H=A(V,[["render",J]]);export{G as __pageData,H as default};
