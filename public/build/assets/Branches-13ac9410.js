import{r as m,O as _,w as c,a as d,b as u,d as a,u as h,Z as p,e as s,f as t,t as f,m as b,z as v,F as B}from"./app-0b161708.js";import{_ as w}from"./GoBackNavLink-37209764.js";import{_ as $}from"./DataTable-87dfc55d.js";import{_ as y}from"./SearchBar-b63e7cbc.js";import{_ as g}from"./FlexButton-a4a1f543.js";import{_ as S}from"./OrgTabs-ef3bcab1.js";import{d as k}from"./index-64afb083.js";import{_ as x}from"./Card-af185f0d.js";import{P as A}from"./PlusIcon-9e7be815.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-9e917b4d.js";import"./index-7c45f06a.js";const D={class:"py-8"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"card-header !mb-4"},O={class:"flex justify-between items-center mb-4 gap-4"},P=["placeholder"],G={__name:"Branches",props:{branches:Object},setup(n){const r=m(""),l=k(()=>{_.visit(route("branches.index",{term:r.value}),{preserveState:!0,preserveScroll:!0})},500);return c(r,l),(e,o)=>(d(),u(B,null,[a(h(p),{title:e.__("Branches")},null,8,["title"]),a(w,null,{tabs:s(()=>[a(S)]),default:s(()=>[t("div",D,[t("div",E,[a(x,{class:"!mt-0"},{default:s(()=>[t("h1",N,f(e.__("Current Branches")),1),t("div",O,[a(g,{href:e.route("branches.create"),text:e.__("Add Branch")},{default:s(()=>[a(A)]),_:1},8,["href","text"]),a(y,null,{default:s(()=>[b(t("input",{type:"text",id:"table-search-users","onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),class:"input-class",placeholder:e.__("Search for a branch")},null,8,P),[[v,r.value]])]),_:1})]),a($,{controller:"branches",head:[e.__("ID"),e.__("Name"),e.__("Phone"),e.__("Email"),e.__("Address"),e.__("Employees")],data:n.branches,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{G as default};