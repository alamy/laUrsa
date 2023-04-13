var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import"./jsx-runtime.57e669fc.js";import{c as o,A as d,M as c}from"./Props.97b30e4e.js";import"./iframe.6b12d460.js";import"./string.d93d42f3.js";import"./es.map.constructor.7f51a25e.js";import"./es.number.to-fixed.56000fa2.js";const m="/assets/colors.ac9401f3.svg",g="/assets/flow.275142c6.svg",u="/assets/plugin.57148314.svg",x="/assets/stackalt.2ad81543.svg";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},i.apply(this,arguments)}r(i,"_extends");const f={},b="wrapper";function l({components:t,...e}){return o(b,i({},f,e,{components:t,mdxType:"MDXLayout"}),o(c,{title:"Example/Introduction",mdxType:"Meta"}),o("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `),o("h1",null,"Benvindo ao Storybook la Ursa"),o("p",null,`O Storybook ajuda voc\xEA a criar componentes de interface do usu\xE1rio isoladamente da l\xF3gica de neg\xF3cios,
dos dados e do contexto de seu aplicativo. Isso facilita o desenvolvimento de estados dif\xEDceis de alcan\xE7ar.
Salve esses estados de interface do usu\xE1rio como `,o("strong",{parentName:"p"},"stories"),` para revisitar durante o desenvolvimento,
teste ou controle de qualidade.`),o("p",null,`Procure hist\xF3rias de exemplo agora navegando at\xE9 elas na barra lateral. Visualize o c\xF3digo no diret\xF3rio
de hist\xF3rias para saber como eles funcionam. Recomendamos criar interfaces de usu\xE1rio com um processo
orientado a componentes, come\xE7ando com `,o("a",{parentName:"p",href:"https://componentdriven.org"},o("strong",{parentName:"a"},"component-driven"))," e terminando com p\xE1ginas."),o("div",{className:"subheading"},"Configurar"),o("div",{className:"link-list"},o("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},o("img",{src:u,alt:"plugin"}),o("span",null,o("strong",null,"Predefini\xE7\xF5es para ferramentas populares"),"Configura\xE7\xE3o f\xE1cil para TypeScript, SCSS e muito mais.")),o("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},o("img",{src:x,alt:"Build"}),o("span",null,o("strong",null,"Configura\xE7\xE3o de compila\xE7\xE3o"),"Como customizar webpack e Babel")),o("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},o("img",{src:m,alt:"colors"}),o("span",null,o("strong",null,"Styling"),"Como carregar e configurar bibliotecas CSS")),o("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},o("img",{src:g,alt:"flow"}),o("span",null,o("strong",null,"Data"),"Provedores e mocking para bibliotecas de dados"))))}r(l,"MDXContent");l.isMDXComponent=!0;const h=r(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const a={title:"Example/Introduction",includeStories:["__page"]},k={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>o(d,{mdxStoryNameToKey:k,mdxComponentAnnotations:a},o(l,null))};const N=["__page"];export{N as __namedExportsOrder,h as __page,a as default};
//# sourceMappingURL=Introduction.stories.abfea1f1.js.map
