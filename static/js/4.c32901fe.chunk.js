(this["webpackJsonpreact-learn-1"]=this["webpackJsonpreact-learn-1"]||[]).push([[4],{295:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),s=t.n(n),r=t(28),i=t(10);function c(e){return{isAuth:e.auth.isAuth}}var l=function(e){return Object(i.b)(c)((function(a){return a.isAuth?s.a.createElement(e,a):s.a.createElement(r.a,{to:"/login"})}))}},300:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up",newMessage:"Dialogs_newMessage__1cWkx"}},301:function(e,a,t){e.exports={dialogsItems:"DialogItem_dialogsItems__3a0eN",active:"DialogItem_active__2qnc5"}},302:function(e,a,t){e.exports={message:"Message_message__1MOXo"}},304:function(e,a,t){"use strict";t.r(a);var n=t(103),s=t(0),r=t.n(s),i=t(300),c=t.n(i),l=t(12),m=t(301),o=t.n(m);var g=function(e){var a="/dialog/"+e.id;return r.a.createElement("div",{className:o.a.dialogsItems+" "+o.a.active},r.a.createElement(l.b,{to:a},r.a.createElement("div",null,r.a.createElement("img",{src:e.image})),r.a.createElement("div",null,e.name)))},u=t(302),d=t.n(u);var v=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.sender}),e.data,r.a.createElement("img",{src:e.receiver}))},f=t(85),E=t(126),_=t(32),b=t(63);var p=Object(b.a)(300),M=Object(E.a)({form:"addMessage"})((function(e){return r.a.createElement("form",{className:c.a.newMessage,onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(f.a,{component:_.b,validate:[b.b,p],name:"newMessageBody",placeholder:"write some text"})),r.a.createElement("div",null,r.a.createElement("button",null,"send")))})),w=function(e){var a=e.dialogs.map((function(e){return r.a.createElement(g,{name:e.name,id:e.id,image:e.image})})),t=e.messages.map((function(e){return r.a.createElement(v,{data:e.message,sender:e.sender,receiver:e.receiver})}));return r.a.createElement("div",{className:c.a.dialogs},r.a.createElement("div",{className:c.a.dialogsItems},a),r.a.createElement("div",{className:c.a.messages},r.a.createElement("div",null,t),r.a.createElement(M,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},h=t(10),x=t(295),N=t(7);a.default=Object(N.d)(Object(h.b)((function(e){return{newMessageText:e.dialogsPage.newMessageText,dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{addMessage:function(a){e(Object(n.a)(a))}}})),x.a)(w)}}]);
//# sourceMappingURL=4.c32901fe.chunk.js.map