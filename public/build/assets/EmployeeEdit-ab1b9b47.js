import{T as E,a as h,b,d as l,u as e,_ as o,Z as H,e as g,f as r,t as n,j as x,n as m,k as U,m as V,v as S,F as w,l as C,h as B,C as $,p as _}from"./app-49e4e4b9.js";import{_ as O}from"./GoBackNavLink-eba82a8b.js";import{_ as W}from"./EmployeeTabs-340a24a5.js";import{P as M}from"./PrimaryButton-53f81028.js";import{_ as u}from"./InputLabel-29be26ac.js";import{_ as f}from"./TextInput-b933e05e.js";import{_ as d}from"./InputError-32cda372.js";import{_ as D}from"./GenericModal-614cb39e.js";import{l as N}from"./vue-datepicker-8234b513.js";/* empty css             */import{S as A}from"./sweetalert2.all-eff8d694.js";import{_ as Y}from"./ToolTip-6758c700.js";import{_ as G}from"./Card-82c6a1f3.js";import{u as J}from"./switch-28aa7e0c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7c45f06a.js";const L={class:"py-8"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Z={class:"card-header"},Q=["onSubmit"],X={class:"grid grid-cols-2 gap-8"},ee={class:"grid grid-cols-2 gap-8 mt-4"},oe={class:"mt-4"},le={class:"grid grid-cols-2 gap-8 mt-4"},re={class:"grid grid-cols-2 gap-8 mt-4"},te={selected:"",value:""},se=["value"],ae=r("p",{class:"text-xs inline ltr:mr-1 rtl:ml-1"}," Branch not listed? ",-1),ne=["onSubmit"],de={class:"grid grid-cols-2 gap-4"},ie={class:"grid grid-cols-2 gap-4 mt-4"},ue={id:"submitBranchButton",type:"submit",class:"ltr:mr-4 rtl:ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"},me={"data-modal-hide":"branchModal",type:"button",id:"closeBranchModal",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},ce={selected:"",value:""},pe=["value"],fe={class:"text-xs inline ltr:mr-1 rtl:ml-1"},ge=["onSubmit"],he={id:"submitDepartmentButton",type:"submit",class:"ltr:mr-4 rtl:ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"},be={"data-modal-hide":"departmentModal",type:"button",id:"closeDepartmentModal",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},_e={class:"grid grid-cols-2 gap-8 mt-4"},ve={selected:"",value:""},ye=["value"],ke={class:"text-xs inline ltr:mr-1 rtl:ml-1"},xe=["onSubmit"],Ve={class:"mt-4"},Se={id:"submitPositionButton",type:"submit",class:"ltr:mr-4 rtl:ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"},we={"data-modal-hide":"positionModal",type:"button",id:"closePositionModal",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},Ee={selected:"",value:""},Ce=["value"],Be={class:"text-xs inline ltr:mr-1 rtl:ml-1"},De=["onSubmit"],Ue={id:"submitShiftButton",type:"submit",class:"ltr:mr-4 rtl:ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"},Ne={"data-modal-hide":"shiftModal",type:"button",id:"closeShiftModal",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},Pe={class:"grid grid-cols-2 gap-8 mt-4"},Me={class:"grid grid-cols-6"},Ae=r("option",{value:"",selected:""},"Currency",-1),qe=r("option",{value:"EGP"},"EGP",-1),Te=r("option",{value:"USD"},"USD",-1),je=r("option",{value:"EUR"},"EUR",-1),Fe=r("option",{value:"GBP"},"GBP",-1),ze=r("option",{value:"CAD"},"CAD",-1),Ie=r("option",{value:"SAR"},"SAR",-1),Re=r("option",{value:"AED"},"AED",-1),He=r("option",{value:"KWD"},"KWD",-1),$e=[Ae,qe,Te,je,Fe,ze,Ie,Re,He],Oe={selected:"",value:""},We=["value"],Ye={class:"grid grid-cols-2 gap-8 mt-4"},Ge=r("br",null,null,-1),Je={class:"sr-only"},Le={class:"flex items-center justify-end mt-4"},Ke=["onSubmit"],fo={__name:"EmployeeEdit",props:{employee:Object,href:String,departments:Object,branches:Object,positions:Object,shifts:Object,roles:Object},setup(y){var P;const i=y,s=E({name:i.employee.name,national_id:i.employee.national_id,email:i.employee.email,phone:i.employee.phone,address:i.employee.address,bank_acc_no:i.employee.bank_acc_no,hired_on:i.employee.hired_on,branch_id:i.employee.branch_id,department_id:i.employee.department_id,position_id:(P=i.employee.employee_positions[i.employee.employee_positions.length-1].position)==null?void 0:P.id,shift_id:i.employee.employee_shifts[i.employee.employee_shifts.length-1].shift.id,currency:i.employee.salaries[i.employee.salaries.length-1].currency,salary:i.employee.salaries[i.employee.salaries.length-1].salary,role:i.employee.roles[i.employee.roles.length-1].name,is_remote:i.employee.is_remote}),v=E({name:"",description:""}),c=E({name:"",start_time:"",end_time:"",shift_payment_multiplier:"",description:""}),p=E({name:"",address:"",phone:"",email:""}),k=E({name:""}),q=()=>{s.hired_on=$(s.hired_on).format("YYYY-MM-DD"),s.put(route("employees.update",{id:i.employee.id}),{preserveScroll:!0,onError:()=>{_().error(o("Error Editing Employee"))},onSuccess:()=>{_().success(o("Employee Edited Successfully"))}})},T=()=>{A.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:o("Are you sure?"),text:o("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:o("Yes, Delete!"),cancelButtonText:o("No, Cancel!"),reverseButtons:!0}).then(a=>{a.isConfirmed&&s.delete(route("employees.destroy",{id:i.employee.id}),{preserveScroll:!0,onError:()=>{_().error(o("Error Removing Employee"))},onSuccess:()=>{A.fire(o("Employee Removed!"),"","success")}})})},j=()=>{v.post(route("positions.store"),{preserveScroll:!0,onError:()=>{_().error(o("Error Creating Position"))},onSuccess:()=>{_().success(o("Position Created Successfully")),document.getElementById("closePositionModal").click(),v.reset(),s.position_id=i.positions.length}})},F=()=>{p.post(route("branches.store"),{preserveScroll:!0,onError:()=>{_().error(o("Error Creating Branch"))},onSuccess:()=>{_().success(o("Branch Created Successfully")),document.getElementById("closeBranchModal").click(),p.reset(),s.branch_id=i.branches.length}})},z=()=>{k.post(route("departments.store"),{preserveScroll:!0,onError:()=>{_().error(o("Error Creating Department"))},onSuccess:()=>{_().success(o("Department Created Successfully")),document.getElementById("closeDepartmentModal").click(),k.reset(),s.department_id=i.departments.length}})},I=()=>{c.post(route("shifts.store"),{preserveScroll:!0,onError:()=>{_().error(o("Error Creating Shift"))},onSuccess:()=>{_().success(o("Shift Created Successfully")),document.getElementById("closeShiftModal").click(),c.reset(),s.shift_id=i.shifts.length}})};return(R,a)=>(h(),b(w,null,[l(e(H),{title:e(o)("Employee Edit")},null,8,["title"]),l(O,null,{tabs:g(()=>[l(W)]),default:g(()=>[r("div",L,[r("div",K,[l(G,{class:"!mt-0"},{default:g(()=>[r("p",Z,n(e(o)("Edit :name Details",{name:y.employee.name})),1),r("form",{onSubmit:x(q,["prevent"]),class:"form"},[r("div",X,[r("div",null,[l(u,{for:"name",value:e(o)("Full Name")},null,8,["value"]),l(f,{id:"name",type:"text",class:m(["mt-1 block w-full",{"border-2 border-red-500 ":e(s).errors.name}]),modelValue:e(s).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).name=t),required:"",autofocus:"",autocomplete:"name",placeholder:e(o)("John Doe")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),r("div",null,[l(u,{for:"national_id",value:e(o)("National ID")},null,8,["value"]),l(f,{id:"national_id",type:"number",class:m(["mt-1 block w-full",{"border border-red-500":e(s).errors.national_id}]),modelValue:e(s).national_id,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).national_id=t),required:"",pattern:"[0-9]{14}",autocomplete:"off",placeholder:"29412010135971"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(s).errors.national_id},null,8,["message"])])]),r("div",ee,[r("div",null,[l(u,{for:"phone",value:e(o)("Phone")},null,8,["value"]),l(f,{id:"phone",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(s).errors.phone}]),modelValue:e(s).phone,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).phone=t),required:"",autocomplete:"off",placeholder:"0110118999"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(s).errors.phone},null,8,["message"])]),r("div",null,[l(u,{for:"email",value:e(o)("Email")},null,8,["value"]),l(f,{id:"email",type:"email",class:m(["mt-1 block w-full",{"border border-red-500":e(s).errors.email}]),modelValue:e(s).email,"onUpdate:modelValue":a[3]||(a[3]=t=>e(s).email=t),required:"",autocomplete:"off",placeholder:"john.doe@mail.com"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(s).errors.email},null,8,["message"])])]),r("div",oe,[l(u,{for:"address",value:e(o)("Address")},null,8,["value"]),l(f,{id:"address",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(s).errors.address}]),modelValue:e(s).address,"onUpdate:modelValue":a[4]||(a[4]=t=>e(s).address=t),required:"",autocomplete:"off",placeholder:e(o)("114 Joseph Tito, El-Nozha, Cairo, Egypt.")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(s).errors.address},null,8,["message"])]),r("div",le,[r("div",null,[l(u,{for:"bank_acc_no",value:e(o)("Bank Account Number (Optional)")},null,8,["value"]),l(f,{id:"bank_acc_no",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(s).errors.bank_acc_no}]),modelValue:e(s).bank_acc_no,"onUpdate:modelValue":a[5]||(a[5]=t=>e(s).bank_acc_no=t),autocomplete:"off",placeholder:"EG380019000500000000263180002"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(s).errors.bank_acc_no},null,8,["message"])]),r("div",null,[l(u,{for:"hired_on",value:e(o)("Hire Date")},null,8,["value"]),l(e(N),{id:"hired_on",modelValue:e(s).hired_on,"onUpdate:modelValue":a[6]||(a[6]=t=>e(s).hired_on=t),class:m(["py-1 block w-full",{"border border-red-500":e(s).errors.hired_on}]),"enable-time-picker":!1,placeholder:e(o)("Select a Date..."),dark:U("isDark").value,required:""},null,8,["modelValue","class","placeholder","dark"]),l(d,{class:"mt-2",message:e(s).errors.hired_on},null,8,["message"])])]),r("div",re,[r("div",null,[l(u,{for:"branch_id",value:e(o)("Branch")},null,8,["value"]),V(r("select",{id:"branch_id",class:"fancy-selector","onUpdate:modelValue":a[7]||(a[7]=t=>e(s).branch_id=t)},[r("option",te,n(e(o)("Choose a Branch")),1),(h(!0),b(w,null,C(y.branches,t=>(h(),b("option",{key:t.id,value:t.id},n(t.name),9,se))),128))],512),[[S,e(s).branch_id]]),l(d,{class:"mt-2",message:e(s).errors.branch_id},null,8,["message"]),ae,r("form",{onSubmit:x(F,["prevent"]),class:"inline"},[l(D,{modalId:"branchModal",title:e(o)("Create a new one."),modalHeader:e(o)("Create a New Branch"),footerActionName:e(o)("Save"),hasCancel:!1,"has-custom-footer":!0},{customFooter:g(()=>[r("button",ue,n(e(o)("Save")),1),r("button",me,n(e(o)("Close")),1)]),default:g(()=>[r("div",de,[r("div",null,[l(u,{for:"branch_name",value:e(o)("Branch Name")},null,8,["value"]),l(f,{id:"branch_name",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(p).errors.name}]),modelValue:e(p).name,"onUpdate:modelValue":a[8]||(a[8]=t=>e(p).name=t),required:"",autocomplete:"off",placeholder:e(o)("Joseph Tito Branch")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(p).errors.name},null,8,["message"])]),r("div",null,[l(u,{for:"branch_address",value:e(o)("Branch Address")},null,8,["value"]),l(f,{id:"branch_address",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(p).errors.address}]),modelValue:e(p).address,"onUpdate:modelValue":a[9]||(a[9]=t=>e(p).address=t),required:"",autocomplete:"off",placeholder:e(o)("El-Nozha, Cairo, Egypt")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(p).errors.address},null,8,["message"])])]),r("div",ie,[r("div",null,[l(u,{for:"branch_phone",value:e(o)("Department Phone")},null,8,["value"]),l(f,{id:"branch_phone",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(p).errors.phone}]),modelValue:e(p).phone,"onUpdate:modelValue":a[10]||(a[10]=t=>e(p).phone=t),required:"",autocomplete:"off",placeholder:"+20123456789"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(p).errors.phone},null,8,["message"])]),r("div",null,[l(u,{for:"branch_email",value:e(o)("Department Email")},null,8,["value"]),l(f,{id:"branch_email",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(p).errors.email}]),modelValue:e(p).email,"onUpdate:modelValue":a[11]||(a[11]=t=>e(p).email=t),required:"",autocomplete:"off",placeholder:"JospephTito@Company.com"},null,8,["class","modelValue"]),l(d,{class:"mt-2",message:e(p).errors.email},null,8,["message"])])])]),_:1},8,["title","modalHeader","footerActionName"])],40,ne)]),r("div",null,[l(u,{for:"department_id",value:e(o)("Department")},null,8,["value"]),V(r("select",{id:"department_id",class:"fancy-selector","onUpdate:modelValue":a[12]||(a[12]=t=>e(s).department_id=t)},[r("option",ce,n(e(o)("Choose a Department")),1),(h(!0),b(w,null,C(y.departments,t=>(h(),b("option",{key:t.id,value:t.id},n(t.name),9,pe))),128))],512),[[S,e(s).department_id]]),l(d,{class:"mt-2",message:e(s).errors.department_id},null,8,["message"]),r("p",fe,n(e(o)("Department not listed?")),1),r("form",{onSubmit:x(z,["prevent"]),class:"inline"},[l(D,{modalId:"departmentModal",title:e(o)("Create a new one."),modalHeader:e(o)("Create a New Department"),footerActionName:e(o)("Save"),hasCancel:!1,"has-custom-footer":!0},{customFooter:g(()=>[r("button",he,n(e(o)("Save")),1),r("button",be,n(e(o)("Close")),1)]),default:g(()=>[r("div",null,[l(u,{for:"department_name",value:e(o)("Department Name")},null,8,["value"]),l(f,{id:"department_name",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(k).errors.name}]),modelValue:e(k).name,"onUpdate:modelValue":a[13]||(a[13]=t=>e(k).name=t),required:"",autocomplete:"off",placeholder:e(o)("Sales")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(k).errors.name},null,8,["message"])])]),_:1},8,["title","modalHeader","footerActionName"])],40,ge)])]),r("div",_e,[r("div",null,[l(u,{for:"position_id",value:e(o)("Position")},null,8,["value"]),V(r("select",{id:"position_id",class:"fancy-selector","onUpdate:modelValue":a[14]||(a[14]=t=>e(s).position_id=t)},[r("option",ve,n(e(o)("Choose a Position")),1),(h(!0),b(w,null,C(y.positions,t=>(h(),b("option",{key:t.id,value:t.id},n(t.name),9,ye))),128))],512),[[S,e(s).position_id]]),l(d,{class:"mt-2",message:e(s).errors.position_id},null,8,["message"]),r("p",ke,n(e(o)("Position not listed?")),1),r("form",{onSubmit:x(j,["prevent"]),class:"inline"},[l(D,{modalId:"positionModal",title:e(o)("Create a new one."),modalHeader:e(o)("Create a New Position"),footerActionName:e(o)("Save"),hasCancel:!1,"has-custom-footer":!0},{customFooter:g(()=>[r("button",Se,n(e(o)("Save")),1),r("button",we,n(e(o)("Close")),1)]),default:g(()=>[r("div",null,[l(u,{for:"position",value:e(o)("Position Name")},null,8,["value"]),l(f,{id:"position",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(v).errors.name}]),modelValue:e(v).name,"onUpdate:modelValue":a[15]||(a[15]=t=>e(v).name=t),required:"",autocomplete:"off",placeholder:e(o)("Software Engineer")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(v).errors.name},null,8,["message"])]),r("div",Ve,[l(u,{for:"description",value:e(o)("Position Description")},null,8,["value"]),l(f,{id:"description",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(v).errors.description}]),modelValue:e(v).description,"onUpdate:modelValue":a[16]||(a[16]=t=>e(v).description=t),autocomplete:"off",placeholder:e(o)("Responsible for designing and developing software solutions.")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(v).errors.description},null,8,["message"])])]),_:1},8,["title","modalHeader","footerActionName"])],40,xe)]),r("div",null,[l(u,{for:"shift_id",value:e(o)("Shift")},null,8,["value"]),V(r("select",{id:"shift_id",class:"fancy-selector","onUpdate:modelValue":a[17]||(a[17]=t=>e(s).shift_id=t)},[r("option",Ee,n(e(o)("Choose a Shift")),1),(h(!0),b(w,null,C(y.shifts,t=>(h(),b("option",{key:t.id,value:t.id},n(t.name),9,Ce))),128))],512),[[S,e(s).shift_id]]),l(d,{class:"mt-2",message:e(s).errors.shift_id},null,8,["message"]),r("p",Be,n(e(o)("Shift not listed?")),1),r("form",{onSubmit:x(I,["prevent"]),class:"inline"},[l(D,{modalId:"shiftModal",title:e(o)("Create a new one."),modalHeader:e(o)("Create a New Shift"),footerActionName:e(o)("Save"),hasCancel:!1,"has-custom-footer":!0},{customFooter:g(()=>[r("button",Ue,n(e(o)("Save")),1),r("button",Ne,n(e(o)("Close")),1)]),default:g(()=>[r("div",null,[l(u,{for:"position",value:e(o)("Shift Name")},null,8,["value"]),l(f,{id:"shift_name",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(c).errors.name}]),modelValue:e(c).name,"onUpdate:modelValue":a[18]||(a[18]=t=>e(c).name=t),required:"",autocomplete:"off",placeholder:e(o)("Day Shift")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(c).errors.name},null,8,["message"])]),r("div",null,[l(u,{for:"start_time",value:e(o)("Shift Start Time")},null,8,["value"]),l(e(N),{modelValue:e(c).start_time,"onUpdate:modelValue":a[19]||(a[19]=t=>e(c).start_time=t),class:m(["mt-1 block w-full",{"border border-red-500":e(c).errors.start_time}]),placeholder:e(o)("Select a Time..."),"time-picker":"",dark:U("isDark").value,"is-24":!1,required:""},null,8,["modelValue","class","placeholder","dark"]),l(d,{class:"mt-2",message:e(c).errors.start_time},null,8,["message"])]),r("div",null,[l(u,{for:"end_time",value:e(o)("Shift End Time")},null,8,["value"]),l(e(N),{modelValue:e(c).end_time,"onUpdate:modelValue":a[20]||(a[20]=t=>e(c).end_time=t),class:m(["mt-1 block w-full",{"border border-red-500":e(c).errors.end_time}]),placeholder:e(o)("Select a Time..."),"time-picker":"",dark:U("isDark").value,"is-24":!1,required:""},null,8,["modelValue","class","placeholder","dark"]),l(d,{class:"mt-2",message:e(c).errors.end_time},null,8,["message"])]),r("div",null,[l(u,{for:"shift_payment_multiplier",value:e(o)("Multiplier")},null,8,["value"]),l(f,{id:"shift_payment_multiplier",type:"number",class:m(["mt-1 block w-full",{"border border-red-500":e(c).errors.shift_payment_multiplier}]),modelValue:e(c).shift_payment_multiplier,"onUpdate:modelValue":a[21]||(a[21]=t=>e(c).shift_payment_multiplier=t),autocomplete:"off",placeholder:"1 ("+e(o)("default")+")"},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(c).errors.shift_payment_multiplier},null,8,["message"])]),r("div",null,[l(u,{for:"description",value:e(o)("Description")},null,8,["value"]),l(f,{id:"description",type:"text",class:m(["mt-1 block w-full",{"border border-red-500":e(c).errors.description}]),modelValue:e(c).description,"onUpdate:modelValue":a[22]||(a[22]=t=>e(c).description=t),autocomplete:"off",placeholder:e(o)("Normal day shift, small amount of customers expected during this shift.")},null,8,["class","modelValue","placeholder"]),l(d,{class:"mt-2",message:e(c).errors.description},null,8,["message"])])]),_:1},8,["title","modalHeader","footerActionName"])],40,De)])]),r("div",Pe,[r("div",null,[l(u,{for:"salary",value:e(o)("Salary"),class:"mb-1"},null,8,["value"]),r("div",Me,[V(r("select",{id:"currency",class:"fancy-selector-inline-textInput col-span-2 z-10 !mt-0","onUpdate:modelValue":a[23]||(a[23]=t=>e(s).currency=t)},$e,512),[[S,e(s).currency]]),l(f,{id:"salary",type:"number",class:m(["inline ltr:rounded-l-none rtl:rounded-r-none col-span-4",{"border border-red-500":e(s).errors.salary}]),modelValue:e(s).salary,"onUpdate:modelValue":a[24]||(a[24]=t=>e(s).salary=t),required:"",autocomplete:"off",placeholder:"10000"},null,8,["class","modelValue"])]),l(d,{class:"mt-2",message:e(s).errors.currency},null,8,["message"]),l(d,{class:"mt-2",message:e(s).errors.salary},null,8,["message"])]),r("div",null,[l(u,{for:"role",value:e(o)("Permissions Level")},null,8,["value"]),V(r("select",{id:"role",class:"fancy-selector","onUpdate:modelValue":a[25]||(a[25]=t=>e(s).role=t)},[r("option",Oe,n(e(o)("Choose a Permission Level")),1),(h(!0),b(w,null,C(y.roles,t=>(h(),b("option",{key:t.id,value:t.name},n(t.name),9,We))),128))],512),[[S,e(s).role]]),l(d,{class:"mt-2",message:e(s).errors.role},null,8,["message"])])]),r("div",Ye,[r("div",null,[l(u,{for:"is_remote",value:e(o)("Remote Worker?"),class:"inline"},null,8,["value"]),l(Y,null,{default:g(()=>[B(n(e(o)("Remote Workers can take attendance anywhere, not necessarily from the organization"))+", ",1),Ge,B(" "+n(e(o)("if ip-based attendance is enabled from the organization settings"))+". ",1)]),_:1}),r("div",null,[l(e(J),{modelValue:e(s).is_remote,"onUpdate:modelValue":a[26]||(a[26]=t=>e(s).is_remote=t),dir:"ltr",class:m([e(s).is_remote?"bg-purple-600":"bg-gray-400","relative inline-flex h-6 w-11 items-center rounded-full mt-1"])},{default:g(()=>[r("span",Je,n(e(o)("Remote Worker")),1),r("span",{class:m([e(s).is_remote?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition"])},null,2)]),_:1},8,["modelValue","class"])]),l(d,{class:"mt-2",message:e(s).errors.is_remote},null,8,["message"])])]),r("div",Le,[r("form",{onSubmit:x(T,["prevent"]),class:"inline"},[l(M,{class:"bg-red-600 hover:bg-red-700 ml-4"},{default:g(()=>[B(n(e(o)("Delete Employee")),1)]),_:1})],40,Ke),l(M,{class:m(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:g(()=>[B(n(e(o)("Edit Employee")),1)]),_:1},8,["class","disabled"])])],40,Q)]),_:1})])])]),_:1})],64))}};export{fo as default};