(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(4),r=n.n(l),c=(n(10),n(11),n(2)),i=n(1),u=function(e){var t=e.index,n=e.todo,o=e.getComplete,l=e.remTodo;return a.a.createElement("div",{className:"todo",id:t},a.a.createElement("input",{type:"checkbox",onClick:function(){return o(t)}}),a.a.createElement("p",{style:{textDecoration:n.isCompleted?"line-through":""}},n.text),a.a.createElement("button",{onClick:function(){return l(t)}},"X"))},s=function(e){var t=e.updateTodoList,n=Object(o.useState)(""),l=Object(i.a)(n,2),r=l[0],c=l[1];return a.a.createElement("form",{className:"form",onSubmit:function(e){return t(e,c,r)}},a.a.createElement("input",{type:"text",placeholder:"Enter new Todo",value:r,onChange:function(e){c(e.target.value)}}))},m=Object(o.createContext)(),d=function(e){var t=Object(o.useState)([{text:"explore Reactjs hooks",isCompleted:!1},{text:"explore Reactjs",isCompleted:!1},{text:"explore Reactjs hooks some more",isCompleted:!1},{text:"explore Reactjs context",isCompleted:!1}]),n=Object(i.a)(t,2),l=n[0],r=n[1];return a.a.createElement(m.Provider,{value:[l,r]},e.children)},p=function(){var e=Object(o.useContext)(m),t=Object(i.a)(e,2),n=t[0],l=t[1],r=function(e){var t=Object(c.a)(n);t[e].isCompleted=!t[e].isCompleted,l(t)},d=function(e){var t=Object(c.a)(n);t.splice(e,1),l(t)};return a.a.createElement("div",{className:"todoList"},n.map((function(e,t){return a.a.createElement(u,{key:t,index:t,todo:e,getComplete:r,remTodo:d})})),a.a.createElement(s,{updateTodoList:function(e,t,n){e.preventDefault(),""!==n&&(l((function(e){return[].concat(Object(c.a)(e),[{text:n,isCompleted:!1}])})),t(""))}}))},f=function(){return a.a.createElement("nav",{style:{height:"5rem",backgroundColor:"rgb(19, 70, 128)",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center"}},a.a.createElement("h2",null,"SenthilKannan"),a.a.createElement("ul",null,a.a.createElement("li",null,"Login")))},h=function(){var e=Object(o.useContext)(m),t=Object(i.a)(e,1)[0],n=t.filter((function(e){return e.isCompleted})),l=t.filter((function(e){return!e.isCompleted})),r={holeStyle:{backgroundColor:"rgba(25, 203, 216, 0.923)",padding:"1rem 0rem"},ul:{display:"flex",justifyContent:"space-around",listStyle:"none",padding:"0",margin:"0"},h3:{color:"#555",backgroundColor:"#FFD4D4",padding:"0.5rem 2rem",borderRadius:"1rem"}};return a.a.createElement("div",{className:"status-todo-list",style:r.holeStyle},a.a.createElement("ul",{style:r.ul},a.a.createElement("li",null,a.a.createElement("h3",{style:r.h3},"No Of Todos : ",t.length)),a.a.createElement("li",null,a.a.createElement("h3",{style:r.h3},"No Of Todos Completed : ",n.length)),a.a.createElement("li",null,a.a.createElement("h3",{style:r.h3},"No Of Todos Not Completed : ",l.length))))};var E=function(){return a.a.createElement(d,null,a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(h,null),a.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a6813ab2.chunk.js.map