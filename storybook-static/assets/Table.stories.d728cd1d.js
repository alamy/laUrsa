var m=Object.defineProperty;var o=(e,n)=>m(e,"name",{value:n,configurable:!0});import{c as s}from"./clsx.m.256e9345.js";import{j as r,F as b,b as T}from"./jsx-runtime.57e669fc.js";import"./iframe.6b12d460.js";const t=o(({header:e,Obj:n,typeTable:a})=>{let c=e==null?void 0:e.map(function(l){return r("th",{children:l})}),i=n.map(function(l){let p=Object.keys(l).map(function(u){return r("td",{children:u})});return r("tr",{className:s({dark:a==="Dark"}),children:p})});return r(b,{children:T("table",{className:s({dark:a==="Dark"}),children:[r("tr",{className:s({white:a==="Default",darkHeader:a==="HeaderDark",dark:a==="Dark"}),children:c}),i]},"1")})},"Table");try{t.displayName="Table",t.__docgenInfo={description:"",displayName:"Table",props:{typeTable:{defaultValue:null,description:"",name:"typeTable",required:!0,type:{name:"enum",value:[{value:'"Default"'},{value:'"HeaderDark"'},{value:'"Dark"'}]}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:'["#", "First", "Last", "Handle"]'}},Obj:{defaultValue:null,description:"",name:"Obj",required:!0,type:{name:'[{ 1: "#"; 2: "First"; 3: "Last"; 4: "Handle"; }]'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Molecules/Table.tsx#Table"]={docgenInfo:t.__docgenInfo,name:"Table",path:"src/components/Molecules/Table.tsx#Table"})}catch{}const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Table } from './Table';\r
\r
export default {\r
  title: 'Molecules/Table',\r
  component: Table,\r
  args: {\r
    typeTable: 'Default',\r
    header: ['#', 'First', 'Last', 'Handle'],\r
    Obj: [\r
      {\r
        1: '#',\r
        2: 'First',\r
        3: 'Last',\r
        4: 'Handle'\r
    }\r
  ]\r
}\r
} as ComponentMeta<typeof Table>\r
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;\r
export const Default = Template.bind({});\r
 Default.args = {\r
    typeTable: 'Default',\r
}\r
\r
export const HeaderDark = Template.bind({});\r
HeaderDark.args = {\r
  typeTable: 'HeaderDark',\r
}\r
\r
export const Dark = Template.bind({});\r
Dark.args = {\r
  typeTable: 'Dark',\r
}`,locationsMap:{default:{startLoc:{col:47,line:20},endLoc:{col:76,line:20},startBody:{col:47,line:20},endBody:{col:76,line:20}},"header-dark":{startLoc:{col:47,line:20},endLoc:{col:76,line:20},startBody:{col:47,line:20},endBody:{col:76,line:20}},dark:{startLoc:{col:47,line:20},endLoc:{col:76,line:20},startBody:{col:47,line:20},endBody:{col:76,line:20}}}}},title:"Molecules/Table",component:t,args:{typeTable:"Default",header:["#","First","Last","Handle"],Obj:[{1:"#",2:"First",3:"Last",4:"Handle"}]}},d=o(e=>r(t,{...e}),"Template"),f=d.bind({});f.args={typeTable:"Default"};const y=d.bind({});y.args={typeTable:"HeaderDark"};const D=d.bind({});D.args={typeTable:"Dark"};const O=["Default","HeaderDark","Dark"];export{D as Dark,f as Default,y as HeaderDark,O as __namedExportsOrder,L as default};
//# sourceMappingURL=Table.stories.d728cd1d.js.map
