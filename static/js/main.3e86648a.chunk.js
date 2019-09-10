(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),s=(a(66),a(14)),l=a(21),i=(a(67),a(68),a(16)),m=a(17),u=a(19),p=a(18),h=a(20),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-darkt bg-dark"},o.a.createElement("div",{className:"container"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"},"NotesApp"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(s.b,{className:"nav-link",to:"/"}," Notes ")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/create"}," Create Note ")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/user"}," Create User "))))))}}]),t}(n.Component),f=a(56),v=a(57),b=a.n(v),E=(a(116),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},a.getUsers=function(){fetch("https://notes-js.herokuapp.com/api/users").then(function(e){return e.json()}).then(function(e){a.setState({users:e.map(function(e){return e.username}),userSelected:e[0].username})})},a.onSubmit=function(e){e.preventDefault();var t={title:a.state.title,content:a.state.content,date:a.state.date,author:a.state.userSelected};a.state.editing?fetch("https://notes-js.herokuapp.com/api/notes/".concat(a.state._id),{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){e.json(),a.props.history.push("/")}).catch(function(e){return console.log("Error",e)}):fetch("https://notes-js.herokuapp.com/api/notes",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){e.json(),a.props.history.push("/")}).catch(function(e){return console.log("Error",e)})},a.onInputChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.onChangeDate=function(e){a.setState({date:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getUsers(),this.props.match.params.id&&fetch("https://notes-js.herokuapp.com/api/notes/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){e.setState({title:t.title,content:t.content,userSelected:t.author,date:new Date(t.date),editing:!0,_id:e.props.match.params.id})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"col-md-6 offset-md-3"},o.a.createElement("div",{className:"card card-body"},o.a.createElement("h4",null," Create a Note"),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected},this.state.users.map(function(e){return o.a.createElement("option",{key:e,value:e},e)}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"title",name:"title",required:!0,onChange:this.onInputChange,value:this.state.title})),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{className:"form-control",placeholder:"content",name:"content",required:!0,onChange:this.onInputChange,value:this.state.content})),o.a.createElement("div",{className:"form-group"},o.a.createElement(b.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))))}}]),t}(n.Component)),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={users:[],username:""},a.getUsers=function(){fetch("https://notes-js.herokuapp.com/api/users").then(function(e){return e.json()}).then(function(e){a.setState({users:e})})},a.onSubmitForm=function(e){e.preventDefault(),console.log(a.state),fetch("https://notes-js.herokuapp.com/api/users",{method:"POST",body:JSON.stringify(a.state),headers:{"Content-Type":"application/json"}}).then(function(e){e.json(),a.getUsers(),a.setState({username:" "})}).catch(function(e){return console.log("Error",e)})},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.deleteUser=function(e){console.log(e),fetch("https://notes-js.herokuapp.com/api/users/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(e){e.json(),a.getUsers()}).catch(function(e){return console.log("Error",e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"card card-body"},o.a.createElement("h3",null," Create a New user "),o.a.createElement("form",{onSubmit:this.onSubmitForm},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onChangeUsername,value:this.state.username})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create")))),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("ul",{className:"list-group"},this.state.users.map(function(t){return o.a.createElement("li",{onDoubleClick:function(){return e.deleteUser(t._id)},className:"list-group-item list-group-item-action",key:t._id},t.username)}))))}}]),t}(n.Component),N=a(60),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[]},a.getNotes=function(){fetch("https://notes-js.herokuapp.com/api/notes").then(function(e){return e.json()}).then(function(e){a.setState({notes:e}),console.log(a.state)})},a.deleteNote=function(e){console.log(e),fetch("https://notes-js.herokuapp.com/api/notes/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(e){e.json(),a.getNotes()}).catch(function(e){return console.log("Error",e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},this.state.notes.map(function(t){return o.a.createElement("div",{className:"col-md-4 p-2",key:t._id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header d-flex justify-content-between"},o.a.createElement("h5",null,t.title),o.a.createElement(s.b,{to:"/edit/".concat(t._id),className:"btn btn-secondary"},"Edit")),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,t.content),o.a.createElement("p",null,t.author),o.a.createElement("p",null,Object(N.format)(t.date))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))}))}}]),t}(n.Component);var y=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(d,null),o.a.createElement("div",{className:"container p-4"},o.a.createElement(l.a,{exact:!0,path:"/",component:j}),o.a.createElement(l.a,{exact:!0,path:"/create",component:E}),o.a.createElement(l.a,{exact:!0,path:"/edit/:id",component:E}),o.a.createElement(l.a,{exact:!0,path:"/user",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(120)},66:function(e,t,a){},68:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.3e86648a.chunk.js.map