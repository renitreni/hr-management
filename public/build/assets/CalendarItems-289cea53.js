import{_ as p}from"./GoBackNavLink-37209764.js";import{a as u,b as m,d as e,u as d,Z as w,e as a,f,t,h as s,F as c,l as b,g as I,s as n}from"./app-0b161708.js";import{_ as N}from"./FlexButton-a4a1f543.js";import{_ as $}from"./CalendarTabs-be879e3f.js";import{_ as y}from"./Card-af185f0d.js";import{P as g}from"./PlusIcon-9e7be815.js";import{c as k}from"./useCalendarItemTypes-28ddb2ba.js";import{_ as C,a as _}from"./TableHead-17e53c48.js";import{_ as h}from"./TableBodyHeader-7a19d4a1.js";import{_ as i,T as B}from"./TableRow-9ba19772.js";import{_ as T}from"./TableBodyAction-6a2ef6e4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-9e917b4d.js";const D={class:"py-8"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},E={class:"card-header !mb-4"},V={class:"flex justify-between items-center pb-4"},K={__name:"CalendarItems",props:{calendarItems:Object},setup(o){return(l,j)=>(u(),m(c,null,[e(d(w),{title:l.__("Calendar Items")},null,8,["title"]),e(p,null,{tabs:a(()=>[e($)]),default:a(()=>[f("div",D,[f("div",v,[e(y,{class:"!mt-0"},{default:a(()=>[f("h1",E,t(l.__("Current Calendar Items")),1),f("div",V,[e(N,{href:l.route("calendars.create"),text:l.__("Create a New Item")},{default:a(()=>[e(g)]),_:1},8,["href","text"])]),e(C,{links:o.calendarItems.links,showingNumber:o.calendarItems.data.length,totalNumber:o.calendarItems.total},{Head:a(()=>[e(_,null,{default:a(()=>[s(t(l.__("ID")),1)]),_:1}),e(_,null,{default:a(()=>[s(t(l.__("Title")),1)]),_:1}),e(_,null,{default:a(()=>[s(t(l.__("Type")),1)]),_:1}),e(_,null,{default:a(()=>[s(t(l.__("Start Date")),1)]),_:1}),e(_,null,{default:a(()=>[s(t(l.__("End Date")),1)]),_:1}),e(_,null,{default:a(()=>[s(t(l.__("Actions")),1)]),_:1})]),Body:a(()=>[(u(!0),m(c,null,b(o.calendarItems.data,r=>(u(),I(B,{key:r.id},{default:a(()=>[e(h,null,{default:a(()=>[e(d(n),{href:l.route("calendars.show",{id:r.id})},{default:a(()=>[s(t(r.id),1)]),_:2},1032,["href"])]),_:2},1024),e(h,null,{default:a(()=>[e(d(n),{href:l.route("calendars.show",{id:r.id})},{default:a(()=>[s(t(r.title),1)]),_:2},1032,["href"])]),_:2},1024),e(i,null,{default:a(()=>[e(d(n),{href:l.route("calendars.show",{id:r.id})},{default:a(()=>[s(t(d(k)[r.type]),1)]),_:2},1032,["href"])]),_:2},1024),e(i,null,{default:a(()=>[e(d(n),{href:l.route("calendars.show",{id:r.id})},{default:a(()=>[s(t(r.start_date),1)]),_:2},1032,["href"])]),_:2},1024),e(i,null,{default:a(()=>[e(d(n),{href:l.route("calendars.show",{id:r.id})},{default:a(()=>[s(t(r.end_date??l.__("None")),1)]),_:2},1032,["href"])]),_:2},1024),e(T,null,{default:a(()=>[e(d(n),{href:l.route("calendars.edit",{id:r.id})},{default:a(()=>[s(t(l.__("Edit")),1)]),_:2},1032,["href"])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{K as default};