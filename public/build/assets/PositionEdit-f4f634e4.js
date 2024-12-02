import{T as B,a as S,b as P,d as s,u as e,_ as o,Z as k,e as l,f as r,t as d,j as c,n as u,h as m,F as E,p}from"./app-398ad6d1.js";import{_ as V}from"./GoBackNavLink-db60fb6d.js";import{_ as C}from"./OrgTabs-aa6d022b.js";import{_ as f}from"./InputLabel-3fd2a7ac.js";import{_}from"./TextInput-2910392d.js";import{_ as b}from"./InputError-0c89cfc8.js";import{P as g}from"./PrimaryButton-9082dc5b.js";import{S as h}from"./sweetalert2.all-e0b4b42d.js";import{_ as T}from"./Card-915d2e9b.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"card-header !mb-4"},j=["onSubmit"],F={class:"mt-4"},A={class:"flex items-center justify-end mt-4"},R=["onSubmit"],I={__name:"PositionEdit",props:{position:Object},setup(x){const n=x,t=B({name:n.position.name,description:n.position.description}),v=()=>{t.put(route("positions.update",{id:n.position.id}),{preserveScroll:!0,onError:()=>{p().error(o("Error Editing Position"))},onSuccess:()=>{p().success(o("Position Edited Successfully")),t.reset()}})},y=()=>{h.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:o("This position has :n employee. Are you sure?",{n:n.position.employees_count}),text:o("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:o("Yes, Delete!"),cancelButtonText:o("No, Cancel!"),reverseButtons:!0}).then(i=>{i.isConfirmed&&t.delete(route("positions.destroy",{id:n.position.id}),{preserveScroll:!0,onSuccess:()=>{h.fire(o("Position Removed!"),"","success")}})})};return(w,i)=>(S(),P(E,null,[s(e(k),{title:e(o)("Position Edit")},null,8,["title"]),s(V,null,{tabs:l(()=>[s(C)]),default:l(()=>[r("div",$,[r("div",N,[s(T,{class:"!mt-0"},{default:l(()=>[r("h1",D,d(e(o)("Edit A Position")),1),r("form",{onSubmit:c(v,["prevent"])},[r("div",null,[s(f,{for:"position",value:e(o)("Position Name")},null,8,["value"]),s(_,{id:"position",type:"text",class:u(["mt-1 block w-full",{"border border-red-500":e(t).errors.name}]),modelValue:e(t).name,"onUpdate:modelValue":i[0]||(i[0]=a=>e(t).name=a),required:"",autocomplete:"off",placeholder:e(o)("Software Engineer")},null,8,["class","modelValue","placeholder"]),s(b,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),r("div",F,[s(f,{for:"description",value:e(o)("Position Description")},null,8,["value"]),s(_,{id:"description",type:"text",class:u(["mt-1 block w-full",{"border border-red-500":e(t).errors.description}]),modelValue:e(t).description,"onUpdate:modelValue":i[1]||(i[1]=a=>e(t).description=a),autocomplete:"off",placeholder:e(o)("Responsible for designing and developing software solutions.")},null,8,["class","modelValue","placeholder"]),s(b,{class:"mt-2",message:e(t).errors.description},null,8,["message"])]),r("div",A,[r("form",{onSubmit:c(y,["prevent"]),class:"inline"},[s(g,{class:"bg-red-600 hover:bg-red-700 ml-4"},{default:l(()=>[m(d(e(o)("Delete Position")),1)]),_:1})],40,R),s(g,{class:u(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:l(()=>[m(d(e(o)("Edit Position")),1)]),_:1},8,["class","disabled"])])],40,j)]),_:1})])])]),_:1})],64))}};export{I as default};
