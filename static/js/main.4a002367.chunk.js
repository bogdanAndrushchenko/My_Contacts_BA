(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,n,t){e.exports={Filter_label:"Filter_Filter_label__2cvYX"}},18:function(e,n,t){},19:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t(1),c=t.n(o),r=t(9),i=t.n(r),s=(t(18),t(12)),l=t(2),u=(t(19),t(10)),b=t.n(u),m=t(4),d=t.n(m),j=function(e){var n=e.onFormSubmit,t=e.onValid,c=Object(o.useState)(""),r=Object(l.a)(c,2),i=r[0],s=r[1],u=Object(o.useState)(""),m=Object(l.a)(u,2),j=m[0],h=m[1],f=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":s(a);break;case"number":h(a);break;default:console.log(t)}},O=function(){return i&&j?t(i):(alert('Field "name" and "number" is entry. Try again!'),!1)},_=function(){s(""),h("")};return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=b.a.generate();O()&&(n({id:t,name:i,number:j}),_())},className:d.a.Form,children:[Object(a.jsxs)("label",{className:d.a.Form_label,children:[Object(a.jsx)("p",{children:"Name :"}),Object(a.jsx)("input",{name:"name",type:"text",value:i,placeholder:"Enter your name",onChange:f})]}),Object(a.jsxs)("label",{className:d.a.Form_label,children:[Object(a.jsx)("p",{children:"Number :"}),Object(a.jsx)("input",{name:"number",type:"number",value:j,placeholder:"Enter your number",onChange:f})]}),Object(a.jsx)("button",{type:"submit",className:d.a.Button,children:"Add contact"})]})},h=t(7),f=t.n(h),O=function(e){var n=e.contacts,t=e.deleteContact;return Object(a.jsxs)("ul",{className:f.a.PhoneList,children:[Object(a.jsxs)("p",{children:["Total contacts : ",n.length]}),n.map((function(e){var n=e.id,o=e.name,c=e.number;return Object(a.jsxs)("li",{className:f.a.PhoneList_item,children:[o," : ",Object(a.jsx)("span",{children:c}),Object(a.jsx)("button",{type:"button",className:f.a.Button,onClick:function(){t(n)},children:"Delete"})]},n)}))]})},_=t(11),p=t.n(_),x=function(e){var n=e.value,t=e.onSearch;return Object(a.jsxs)("label",{className:p.a.Filter_label,children:["Find contact by name:",Object(a.jsx)("input",{type:"search",value:n,onChange:t,placeholder:"search name"})]})},v=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Bogdan Andrush..",number:"899-24-76"}],g=function(){var e=Object(o.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[].concat(v)})),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),i=Object(l.a)(r,2),u=i[0],b=i[1];return Object(o.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]),Object(a.jsxs)("div",{className:"Phonebook",children:[Object(a.jsx)("h2",{className:"Phonebook_title",children:"Phonebook"}),Object(a.jsx)(j,{onFormSubmit:function(e){return c((function(n){return[].concat(Object(s.a)(n),[e])}))},onValid:function(e){var n=!!t.find((function(n){return n.name===e}));return alert("".concat(e," is already in contacts")),!n}}),Object(a.jsx)("h3",{className:"Phonebook_title",children:"Contacts"}),Object(a.jsx)(x,{onSearch:function(e){b(e.currentTarget.value)},value:u}),Object(a.jsx)(O,{contacts:function(){var e=u.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),deleteContact:function(e){c((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},4:function(e,n,t){e.exports={Form:"FormPhone_Form__3nLCH",Form_label:"FormPhone_Form_label__lAg1a",Button:"FormPhone_Button__2hQpp"}},7:function(e,n,t){e.exports={PhoneList:"PhoneList_PhoneList__3Xk2M",PhoneList_item:"PhoneList_PhoneList_item__23MGQ",Button:"PhoneList_Button__4AlOe"}}},[[28,1,2]]]);
//# sourceMappingURL=main.4a002367.chunk.js.map