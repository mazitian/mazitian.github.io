import{V as B,_ as z,c as V,a as E,w as v,b as n,d as t,e as N,r as w,o as x}from"./app.d38f7ac4.js";const I={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:s,withCtx:e,openBlock:i,createElementBlock:F}=B;function k(p,m){const c=a("ml-input"),r=a("ml-form-item"),b=a("ml-form");return i(),F("div",null,[s(b,{model:p.model,layout:"horizontal"},{default:e(()=>[s(r,{label:"\u7528\u6237\u540D\uFF1A"},{default:e(()=>[s(c,{modelValue:p.model.user,"onUpdate:modelValue":m[0]||(m[0]=g=>p.model.user=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const{ref:d}=B;return{render:k,...{setup(p,{expose:m}){m();const r={model:d({user:"tom"}),ref:d};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}}}(),"render-demo-1":function(){const{createElementVNode:a,vModelRadio:s,withDirectives:e,createTextVNode:i,resolveComponent:F,createVNode:k,withCtx:d,openBlock:f,createElementBlock:p}=B,m=a("span",null,"labelSize\uFF1A",-1),c=i(" sm "),r=i(" md "),b=i(" lg "),g=a("span",null,"labelAlign\uFF1A",-1),_=i(" start "),A=i(" center "),h=i(" end ");function q(o,u){const C=F("ml-input"),D=F("ml-form-item"),S=F("ml-form");return f(),p("div",null,[a("p",null,[m,a("label",null,[e(a("input",{type:"radio",value:"sm","onUpdate:modelValue":u[0]||(u[0]=l=>o.labelSize=l)},null,512),[[s,o.labelSize]]),c]),a("label",null,[e(a("input",{type:"radio",value:"md","onUpdate:modelValue":u[1]||(u[1]=l=>o.labelSize=l)},null,512),[[s,o.labelSize]]),r]),a("label",null,[e(a("input",{type:"radio",value:"lg","onUpdate:modelValue":u[2]||(u[2]=l=>o.labelSize=l)},null,512),[[s,o.labelSize]]),b])]),a("p",null,[g,a("label",null,[e(a("input",{type:"radio",value:"start","onUpdate:modelValue":u[3]||(u[3]=l=>o.labelAlign=l)},null,512),[[s,o.labelAlign]]),_]),a("label",null,[e(a("input",{type:"radio",value:"center","onUpdate:modelValue":u[4]||(u[4]=l=>o.labelAlign=l)},null,512),[[s,o.labelAlign]]),A]),a("label",null,[e(a("input",{type:"radio",value:"end","onUpdate:modelValue":u[5]||(u[5]=l=>o.labelAlign=l)},null,512),[[s,o.labelAlign]]),h])]),k(S,{model:o.model,layout:"horizontal",labelAlign:o.labelAlign,labelSize:o.labelSize},{default:d(()=>[k(D,{label:"\u7528\u6237\u540D\uFF1A"},{default:d(()=>[k(C)]),_:1}),k(D,{label:"\u5BC6\u7801\uFF1A"},{default:d(()=>[k(C,{type:"password"})]),_:1})]),_:1},8,["model","labelAlign","labelSize"])])}const{ref:y}=B;return{render:q,...{setup(o,{expose:u}){u();const C=y({user:"tom",password:""}),D=y("md"),S=y("start"),l={model:C,labelSize:D,labelAlign:S,ref:y};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}}}(),"render-demo-2":function(){const{resolveComponent:a,createVNode:s,withCtx:e,createTextVNode:i,openBlock:F,createElementBlock:k}=B,d=i("\u767B\u5F55");function f(c,r){const b=a("ml-input"),g=a("ml-form-item"),_=a("ml-button"),A=a("ml-form");return F(),k("div",null,[s(A,{model:c.model,rules:c.rules,layout:"vertical",onSubmit:c.onLogin,ref:"loginForm"},{default:e(()=>[s(g,{label:"\u7528\u6237\u540D\uFF1A",field:"user"},{default:e(()=>[s(b,{modelValue:c.model.user,"onUpdate:modelValue":r[0]||(r[0]=h=>c.model.user=h)},null,8,["modelValue"])]),_:1}),s(g,{label:"\u5BC6\u7801\uFF1A",field:"pwd"},{default:e(()=>[s(b,{type:"password",modelValue:c.model.pwd,"onUpdate:modelValue":r[1]||(r[1]=h=>c.model.pwd=h)},null,8,["modelValue"])]),_:1}),s(g,null,{default:e(()=>[s(_,null,{default:e(()=>[d]),_:1})]),_:1})]),_:1},8,["model","rules","onSubmit"])])}const{ref:p}=B;return{render:f,...{setup(c,{expose:r}){r();const b=p({user:"",pwd:""}),g=p({user:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}],pwd:[{required:!0,message:"\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879"}]}),_=p(null),h={model:b,rules:g,loginForm:_,onLogin:()=>{_.value.validate(q=>{alert(q?"\u767B\u5F55\u6210\u529F":"\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")})},ref:p};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}}}()}},X=JSON.parse('{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8868\u5355\u6837\u5F0F","slug":"\u8868\u5355\u6837\u5F0F"},{"level":2,"title":"\u8868\u5355\u6821\u9A8C","slug":"\u8868\u5355\u6821\u9A8C"},{"level":2,"title":"Form API","slug":"form-api"},{"level":3,"title":"Form \u5C5E\u6027","slug":"form-\u5C5E\u6027"},{"level":3,"title":"Form \u4E8B\u4EF6","slug":"form-\u4E8B\u4EF6"},{"level":3,"title":"Form \u63D2\u69FD","slug":"form-\u63D2\u69FD"},{"level":2,"title":"FormItem API","slug":"formitem-api"},{"level":3,"title":"Form Item \u5C5E\u6027","slug":"form-item-\u5C5E\u6027"},{"level":3,"title":"Form \u63D2\u69FD","slug":"form-\u63D2\u69FD-1"}],"relativePath":"components/form/index.md"}'),U=n("h1",{id:"form-\u8868\u5355",tabindex:"-1"},[t("Form \u8868\u5355 "),n("a",{class:"header-anchor",href:"#form-\u8868\u5355","aria-hidden":"true"},"#")],-1),j=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),P=n("p",null,"\u4F20\u5165 model \u5C5E\u6027\u8BBE\u7F6E\u6570\u636E\u6A21\u578B\u3002",-1),L=n("div",null,"\u4F20\u5165 model \u5C5E\u6027\u8BBE\u7F6E\u6570\u636E\u6A21\u578B",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form")]),t(),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("horizontal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model.user"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" model "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tom'"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h2",{id:"\u8868\u5355\u6837\u5F0F",tabindex:"-1"},[t("\u8868\u5355\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6837\u5F0F","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u6C34\u5E73\u6392\u5217\u6A21\u5F0F\u4E0B\uFF0Clabel-size \u53EF\u4EE5\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF1Blabel-align \u53EF\u4EE5\u8BBE\u7F6E label \u7684\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),M=n("div",null,"label-size \u63D0\u4F9B sm\u3001md\u3001lg \u4E09\u79CD\u5927\u5C0F\uFF0C\u5206\u522B\u5BF9\u5E94 80px\u3001100px\u3001150px\uFF0C\u9ED8\u8BA4\u4E3A md\uFF1Blabel-align \u53EF\u9009\u503C\u4E3A start\u3001center\u3001end\uFF0C\u9ED8\u8BA4\u4E3A start\u3002",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("labelSize\uFF1A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      sm
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("md"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      md
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      lg
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("labelAlign\uFF1A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("start"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelAlign"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      start
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("center"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelAlign"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      center
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("radio"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("end"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelAlign"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      end
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("label")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form")]),t(`
    `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("horizontal"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelAlign"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelAlign"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("labelSize"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5BC6\u7801\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("password"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" model "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" labelSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" labelAlign "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h2",{id:"\u8868\u5355\u6821\u9A8C",tabindex:"-1"},[t("\u8868\u5355\u6821\u9A8C "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6821\u9A8C","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form")]),t(`
    `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rules"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onLogin"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loginForm"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("user"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model.user"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5BC6\u7801\uFF1A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pwd"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-input")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("password"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("model.pwd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t("\u767B\u5F55"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form-item")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ml-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" model "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"pwd"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" rules "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"pwd"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" loginForm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onLogin"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  loginForm`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"valid"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("valid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u767B\u5F55\u6210\u529F'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=N('<h2 id="form-api" tabindex="-1">Form API <a class="header-anchor" href="#form-api" aria-hidden="true">#</a></h2><h3 id="form-\u5C5E\u6027" tabindex="-1">Form \u5C5E\u6027 <a class="header-anchor" href="#form-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>model</td><td>\u7ED1\u5B9A\u8868\u5355\u6570\u636E</td><td><code>object</code></td><td>\u2014</td><td>\u2014</td></tr><tr><td>layout</td><td>\u8868\u5355\u6392\u5217\u65B9\u5F0F</td><td><code>string</code></td><td><code>horizontal</code> / <code>vertical</code></td><td>\u2014</td></tr><tr><td>labelSize</td><td>\u8868\u5355\u5C3A\u5BF8</td><td><code>string</code></td><td><code>sm</code> / <code>md</code> / <code>lg</code></td><td><code>md</code></td></tr><tr><td>labelAlign</td><td>\u8868\u5355\u4F4D\u7F6E</td><td><code>string</code></td><td><code>start</code> / <code>center</code> / <code>end</code></td><td><code>start</code></td></tr><tr><td>rules</td><td>\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219</td><td><code>Object</code></td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h3 id="form-\u4E8B\u4EF6" tabindex="-1">Form \u4E8B\u4EF6 <a class="header-anchor" href="#form-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>\u8868\u5355\u63D0\u4EA4</td><td>\u2014</td></tr></tbody></table><h3 id="form-\u63D2\u69FD" tabindex="-1">Form \u63D2\u69FD <a class="header-anchor" href="#form-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>FormItem</td></tr></tbody></table><h2 id="formitem-api" tabindex="-1">FormItem API <a class="header-anchor" href="#formitem-api" aria-hidden="true">#</a></h2><h3 id="form-item-\u5C5E\u6027" tabindex="-1">Form Item \u5C5E\u6027 <a class="header-anchor" href="#form-item-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>label</td><td>\u8868\u5355\u540D\u79F0</td><td><code>string</code></td><td>\u2014</td><td>\u2014</td></tr><tr><td>field</td><td>\u7ED1\u5B9A\u6570\u636E\u53D8\u91CF</td><td><code>string</code></td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h3 id="form-\u63D2\u69FD-1" tabindex="-1">Form \u63D2\u69FD <a class="header-anchor" href="#form-\u63D2\u69FD-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>default</td><td>\u8868\u5355\u7684\u5185\u5BB9</td><td>\u2014</td></tr></tbody></table>',12);function K(a,s,e,i,F,k){const d=w("render-demo-0"),f=w("demo"),p=w("render-demo-1"),m=w("render-demo-2");return x(),V("div",null,[U,j,P,E(f,{sourceCode:`<template>
  <ml-form :model="model" layout="horizontal">
    <ml-form-item label="\u7528\u6237\u540D\uFF1A">
      <ml-input v-model="model.user" />
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom'
})
<\/script>
`},{description:v(()=>[L]),highlight:v(()=>[O]),default:v(()=>[E(d)]),_:1}),T,$,E(f,{sourceCode:`<template>
  <p>
    <span>labelSize\uFF1A</span>
    <label>
      <input type="radio" value="sm" v-model="labelSize" />
      sm
    </label>
    <label>
      <input type="radio" value="md" v-model="labelSize" />
      md
    </label>
    <label>
      <input type="radio" value="lg" v-model="labelSize" />
      lg
    </label>
  </p>
  <p>
    <span>labelAlign\uFF1A</span>
    <label>
      <input type="radio" value="start" v-model="labelAlign" />
      start
    </label>
    <label>
      <input type="radio" value="center" v-model="labelAlign" />
      center
    </label>
    <label>
      <input type="radio" value="end" v-model="labelAlign" />
      end
    </label>
  </p>
  <ml-form
    :model="model"
    layout="horizontal"
    :labelAlign="labelAlign"
    :labelSize="labelSize"
  >
    <ml-form-item label="\u7528\u6237\u540D\uFF1A">
      <ml-input />
    </ml-form-item>
    <ml-form-item label="\u5BC6\u7801\uFF1A">
      <ml-input type="password" />
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom',
  password: ''
})
const labelSize = ref('md')
const labelAlign = ref('start')
<\/script>
`},{description:v(()=>[M]),highlight:v(()=>[R]),default:v(()=>[E(p)]),_:1}),J,E(f,{sourceCode:`<template>
  <ml-form
    :model="model"
    :rules="rules"
    layout="vertical"
    @submit="onLogin"
    ref="loginForm"
  >
    <ml-form-item label="\u7528\u6237\u540D\uFF1A" field="user">
      <ml-input v-model="model.user" />
    </ml-form-item>
    <ml-form-item label="\u5BC6\u7801\uFF1A" field="pwd">
      <ml-input type="password" v-model="model.pwd" />
    </ml-form-item>
    <ml-form-item>
      <ml-button>\u767B\u5F55</ml-button>
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: '',
  pwd: ''
})
const rules = ref({
  user: [{ required: true, message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879' }],
  pwd: [{ required: true, message: '\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879' }]
})

const loginForm = ref(null)
const onLogin = () => {
  loginForm.value.validate(valid => {
    if (valid) {
      alert('\u767B\u5F55\u6210\u529F')
    } else {
      alert('\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01')
    }
  })
}
<\/script>
`},{highlight:v(()=>[G]),default:v(()=>[E(m)]),_:1}),H])}const Y=z(I,[["render",K]]);export{X as __pageData,Y as default};
