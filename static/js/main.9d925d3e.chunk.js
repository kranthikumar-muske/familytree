(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),i=(a(17),a(10)),o=a(6),l=a.n(o),u=a(9),m=a(1),f=a(2),d=a(4),h=a(3),p=a(5),b=(a(20),function(e){return r.a.createElement("div",null,e.profiles.map(function(e){return r.a.createElement(v,Object.assign({key:e.userId},e))}))}),v=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props;return console.log(e),r.a.createElement("div",{className:"github-profile"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"firstname"},e.firstName),r.a.createElement("div",{className:"lastname"},e.lastName),r.a.createElement("div",{className:"age"},e.age),r.a.createElement("div",{className:"gender"},e.gender),r.a.createElement("div",{className:"dob"},e.dob),r.a.createElement("div",{className:"phonenumber"},e.phoneNumber),r.a.createElement("div",{className:"birthplace"},e.birthplace),r.a.createElement("div",{className:"status"},e.status)))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},a.handleSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://lf88rlmmd0.execute-api.us-east-2.amazonaws.com/dev/dev?"+new URLSearchParams({firstname:a.state.userName}));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,c=[r],a.props.onSubmit(c),a.setState({userName:""});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"first name..."}),r.a.createElement("button",null,"Search"))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={profiles:[]},a.addNewProfile=function(e){a.setState(function(t){return{profiles:Object(i.a)(e)}})},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Search you Family Member by Name Here"),r.a.createElement(N,{onSubmit:this.addNewProfile}),r.a.createElement(b,{profiles:this.state.profiles}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.9d925d3e.chunk.js.map