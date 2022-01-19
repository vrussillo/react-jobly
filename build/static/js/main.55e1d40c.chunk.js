(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(311)},161:function(e,t,a){},163:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},196:function(e,t){},198:function(e,t){},212:function(e,t){},214:function(e,t){},242:function(e,t){},244:function(e,t){},245:function(e,t){},250:function(e,t){},252:function(e,t){},258:function(e,t){},260:function(e,t){},279:function(e,t){},291:function(e,t){},294:function(e,t){},311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(148),s=a.n(c),o=(a(161),a(155)),l=a(2),u=a.n(l),m=a(5),i=a(4),p=a(9);var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e)||t,r=Object(n.useState)(a),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)(function(){console.debug("hooks useLocalStorage useEffect","item=",s),null===s?localStorage.removeItem(e):localStorage.setItem(e,s)},[e,s]),[s,o]},b=r.a.createContext();a(163);var d=function(e){var t=e.logout,a=Object(n.useContext)(b).currentUser;return console.debug("Navigation","currentUser=",a),r.a.createElement("nav",{className:"Navigation navbar navbar-expand-md"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Jobly"),a?r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(p.c,{className:"nav-link",to:"/companies"},"Companies")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(p.c,{className:"nav-link",to:"/jobs"},"Jobs")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(p.c,{className:"nav-link",to:"/profile"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/",onClick:t},"Log out ",a.first_name||a.username))):r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(p.c,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(p.c,{className:"nav-link",to:"/signup"},"Sign Up"))))},v=a(8);a(171);var E=function(){var e=Object(n.useContext)(b).currentUser;return console.debug("Homepage","currentUser=",e),r.a.createElement("div",{className:"Homepage"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"mb-4 font-weight-bold"},"Jobly"),r.a.createElement("p",{className:"lead"},"All the jobs in one, convenient place."),e?r.a.createElement("h2",null,"Welcome Back, ",e.firstName||e.username,"!"):r.a.createElement("p",null,r.a.createElement(p.b,{className:"btn btn-primary font-weight-bold mr-3",to:"/login"},"Log in"),r.a.createElement(p.b,{className:"btn btn-primary font-weight-bold",to:"/signup"},"Sign up"))))};a(172);var g=function(e){var t=e.searchFor;console.debug("SearchForm","searchFor=",typeof t);var a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1];return r.a.createElement("div",{className:"SearchForm mb-4"},r.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),t(s.trim()||void 0),o(s.trim())}},r.a.createElement("input",{className:"form-control form-control-lg flex-grow-1",name:"searchTerm",placeholder:"Enter search term..",value:s,onChange:function(e){o(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Submit")))},h=a(151),N=a(152),y=a(153),j=a.n(y),O=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_URL||"http://localhost:3001",w=function(){function e(){Object(h.a)(this,e)}return Object(N.a)(e,null,[{key:"request",value:function(){var t=Object(m.a)(u.a.mark(function t(a){var n,r,c,s,o,l,m=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=m.length>1&&void 0!==m[1]?m[1]:{},r=m.length>2&&void 0!==m[2]?m[2]:"get",console.debug("API Call:",a,n,r),c="".concat(O,"/").concat(a),s={Authorization:"Bearer ".concat(e.token)},o="get"===r?n:{},t.prev=6,t.next=9,j()({url:c,method:r,data:n,params:o,headers:s});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.response),l=t.t0.response.data.error.message,Array.isArray(l)?l:[l];case 17:case"end":return t.stop()}},t,null,[[6,12]])}));return function(e){return t.apply(this,arguments)}}()},{key:"getCurrentUser",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.user);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCompanies",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies",{name:t});case 2:return a=e.sent,e.abrupt("return",a.companies);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.company);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getJobs",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs",{title:t});case 2:return a=e.sent,e.abrupt("return",a.jobs);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"applyToJob",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(a),{},"post");case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/token",t,"post");case 2:return a=e.sent,e.abrupt("return",a.token);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/register",t,"post");case 2:return a=e.sent,e.abrupt("return",a.token);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveProfile",value:function(){var e=Object(m.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),a,"patch");case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}();a(190);var x=function(e){var t=e.name,a=e.description,n=e.logoUrl,c=e.handle;return console.debug("CompanyCard",n),r.a.createElement(p.b,{className:"CompanyCard card",to:"/companies/".concat(c)},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},t,n&&r.a.createElement("img",{src:n,alt:t,className:"float-right ml-5"})),r.a.createElement("p",null,r.a.createElement("small",null,a))))};a(191);var k=function(){return r.a.createElement("div",{className:"LoadingSpinner"},"Loading ...")};var C=function(){console.debug("CompanyList");var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];function s(e){return o.apply(this,arguments)}function o(){return(o=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCompanies(t);case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){console.debug("CompanyList useEffect getCompaniesOnMount"),s()},[]),a?r.a.createElement("div",{className:"CompanyList col-md-8 offset-md-2"},r.a.createElement(g,{searchFor:s}),a.length?r.a.createElement("div",{className:"CompanyList-list"},a.map(function(e){return r.a.createElement(x,{key:e.handle,handle:e.handle,name:e.name,description:e.description,logoUrl:e.logoUrl})})):r.a.createElement("p",{className:"lead"},"Sorry, no results were found!")):r.a.createElement(k,null)};a(192);var S=function(e){var t=e.id,a=e.title,c=e.salary,s=e.equity,o=e.companyName;console.debug("JobCard");var l=Object(n.useContext)(b),p=l.hasAppliedToJob,f=l.applyToJob,d=Object(n.useState)(),v=Object(i.a)(d,2),E=v[0],g=v[1];function h(){return(h=Object(m.a)(u.a.mark(function e(a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!p(t)){e.next=2;break}return e.abrupt("return");case 2:f(t),g(!0);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.useEffect(function(){console.debug("JobCard useEffect updateAppliedStatus","id=",t),g(p(t))},[t,p]),r.a.createElement("div",{className:"JobCard card"}," ",E,r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},a),r.a.createElement("p",null,o),c&&r.a.createElement("div",null,r.a.createElement("small",null,"Salary: ",function(e){for(var t=[],a=e.toString(),n=a.length-1;n>=0;n--)t.push(a[n]),n>0&&n%3===0&&t.push(",");return t.reverse().join("")}(c))),void 0!==s&&r.a.createElement("div",null,r.a.createElement("small",null,"Equity: ",s)),r.a.createElement("button",{className:"btn btn-danger font-weight-bold text-uppercase float-right",onClick:function(e){return h.apply(this,arguments)},disabled:E},E?"Applied":"Apply")))};var U=function(e){var t=e.jobs;return e.apply,console.debug("JobCardList","jobs=",t),r.a.createElement("div",{className:"JobCardList"},t.map(function(e){return r.a.createElement(S,{key:e.id,id:e.id,title:e.title,salary:e.salary,equity:e.equity,companyName:e.companyName})}))};var L=function(){console.debug("JobList");var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];function s(e){return o.apply(this,arguments)}function o(){return(o=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getJobs(t);case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){console.debug("JobList useEffect getAllJobsOnMount"),s()},[]),a?r.a.createElement("div",{className:"JobList col-md-8 offset-md-2"},r.a.createElement(g,{searchFor:s}),a.length?r.a.createElement(U,{jobs:a}):r.a.createElement("p",{className:"lead"},"Sorry, no results were found!")):r.a.createElement(k,null)};var J=function(){var e=Object(v.h)().handle;console.debug("CompanyDetail","handle=",e);var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)(function(){function t(){return(t=Object(m.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,w.getCompany(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e]),c?r.a.createElement("div",{className:"CompanyDetail col-md-8 offset-md-2"},r.a.createElement("h4",null,c.name),r.a.createElement("p",null,c.description),r.a.createElement(U,{jobs:c.jobs})):r.a.createElement(k,null)},A=a(22),q=a(18);var P=function(e){var t=e.type,a=void 0===t?"danger":t,n=e.messages,c=void 0===n?[]:n;return console.debug("Alert","type=",a,"messages=",c),r.a.createElement("div",{className:"alert alert-".concat(a),role:"alert"},c.map(function(e){return r.a.createElement("p",{className:"mb-0 small",key:e},e)}))};var F=function(e){var t=e.login,a=Object(v.g)(),c=Object(n.useState)({username:"",password:""}),s=Object(i.a)(c,2),o=s[0],l=s[1],p=Object(n.useState)([]),f=Object(i.a)(p,2),b=f[0],d=f[1];function E(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(o);case 3:(r=e.sent).success?a.push("/companies"):d(r.errors);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){var t=e.target,a=t.name,n=t.value;l(function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},a,n))})}return console.debug("LoginForm","login=",typeof t,"formData=",o,"formErrors",b),r.a.createElement("div",{className:"LoginForm"},r.a.createElement("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4"},r.a.createElement("h3",{className:"mb-3"},"Log In"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",className:"form-control",value:o.username,onChange:h,autoComplete:"username",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:o.password,onChange:h,autoComplete:"current-password",required:!0})),b.length?r.a.createElement(P,{type:"danger",messages:b}):null,r.a.createElement("button",{className:"btn btn-primary float-right",onSubmit:E},"Submit"))))))};var D=function(){var e=Object(n.useContext)(b),t=e.currentUser,a=e.setCurrentUser,c=Object(n.useState)({firstName:t.firstName,lastName:t.lastName,email:t.email,username:t.username,password:""}),s=Object(i.a)(c,2),o=s[0],l=s[1],p=Object(n.useState)([]),f=Object(i.a)(p,2),d=f[0],v=f[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),h=g[0],N=g[1];function y(){return(y=Object(m.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={firstName:o.firstName,lastName:o.lastName,email:o.email,password:o.password},r=o.username,e.prev=3,e.next=6,w.saveProfile(r,n);case 6:c=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),v(e.t0),e.abrupt("return");case 14:l(function(e){return Object(q.a)(Object(q.a)({},e),{},{password:""})}),v([]),N(!0),a(c);case 18:case"end":return e.stop()}},e,null,[[3,9]])}))).apply(this,arguments)}function j(e){var t=e.target,a=t.name,n=t.value;l(function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},a,n))}),v([])}return console.debug("ProfileForm","currentUser=",t,"formData=",o,"formErrors=",d,"saveConfirmed=",h),r.a.createElement("div",{className:"col-md-6 col-lg-4 offset-md-3 offset-lg-4"},r.a.createElement("h3",null,"Profile"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("p",{className:"form-control-plaintext"},o.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"firstName",className:"form-control",value:o.firstName,onChange:j})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"lastName",className:"form-control",value:o.lastName,onChange:j})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",className:"form-control",value:o.email,onChange:j})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm password to make changes:"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:o.password,onChange:j})),d.length?r.a.createElement(P,{type:"danger",messages:d}):null,h?r.a.createElement(P,{type:"success",messages:["Updated successfully."]}):null,r.a.createElement("button",{className:"btn btn-primary btn-block mt-4",onClick:function(e){return y.apply(this,arguments)}},"Save Changes")))))};var I=function(e){var t=e.signup,a=Object(v.g)(),c=Object(n.useState)({username:"",password:"",firstName:"",lastName:"",email:""}),s=Object(i.a)(c,2),o=s[0],l=s[1],p=Object(n.useState)([]),f=Object(i.a)(p,2),b=f[0],d=f[1];function E(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(o);case 3:(r=e.sent).success?a.push("/companies"):d(r.errors);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){var t=e.target,a=t.name,n=t.value;l(function(e){return Object(q.a)(Object(q.a)({},e),{},Object(A.a)({},a,n))})}return console.debug("SignupForm","signup=",typeof t,"formData=",o,"formErrors=",b),r.a.createElement("div",{className:"SignupForm"},r.a.createElement("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4"},r.a.createElement("h2",{className:"mb-3"},"Sign Up"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",className:"form-control",value:o.username,onChange:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:o.password,onChange:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{name:"firstName",className:"form-control",value:o.firstName,onChange:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{name:"lastName",className:"form-control",value:o.lastName,onChange:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",value:o.email,onChange:h})),b.length?r.a.createElement(P,{type:"danger",messages:b}):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary float-right",onSubmit:E},"Submit"))))))};var T=function(e){var t=e.exact,a=e.path,c=e.children,s=Object(n.useContext)(b).currentUser;return console.debug("PrivateRoute","exact=",t,"path=",a,"currentUser=",s),s?r.a.createElement(v.b,{exact:t,path:a},c):r.a.createElement(v.a,{to:"/login"})};var B=function(e){var t=e.login,a=e.signup;return console.debug("Routes","login=".concat(typeof t),"register=".concat(typeof register)),r.a.createElement("div",{className:"pt-5"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(v.b,{exact:!0,path:"/login"},r.a.createElement(F,{login:t})),r.a.createElement(v.b,{exact:!0,path:"/signup"},r.a.createElement(I,{signup:a})),r.a.createElement(T,{exact:!0,path:"/companies"},r.a.createElement(C,null)),r.a.createElement(T,{exact:!0,path:"/jobs"},r.a.createElement(L,null)),r.a.createElement(T,{exact:!0,path:"/companies/:handle"},r.a.createElement(J,null)),r.a.createElement(T,{path:"/profile"},r.a.createElement(D,null)),r.a.createElement(v.a,{to:"/"})))},_=a(154),R=a.n(_),W="jobly-token";var H=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(new Set([])),l=Object(i.a)(s,2),v=l[0],E=l[1],g=Object(n.useState)(null),h=Object(i.a)(g,2),N=h[0],y=h[1],j=f(W),O=Object(i.a)(j,2),x=O[0],C=O[1];function S(){return(S=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:return a=e.sent,C(a),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("signup failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function U(){return(U=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.login(t);case 3:return a=e.sent,C(a),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("login failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function L(e){return v.has(e)}return console.debug("App","infoLoaded=",a,"currentUser=",N,"token=",x),Object(n.useEffect)(function(){function e(){return(e=Object(m.a)(u.a.mark(function e(){var t,a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=15;break}return e.prev=1,t=R.a.decode(x),a=t.username,w.token=x,e.next=6,w.getCurrentUser(a);case 6:n=e.sent,y(n),E(new Set(n.applications)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("App loadUserInfo: problem loading",e.t0),y(null);case 15:c(!0);case 16:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}console.debug("App useEffect loadUserInfo","token=",x),c(!1),function(){e.apply(this,arguments)}()},[x]),a?r.a.createElement(p.a,null,r.a.createElement(b.Provider,{value:{currentUser:N,setCurrentUser:y,hasAppliedToJob:L,applyToJob:function(e){L(e)||(w.applyToJob(N.username,e),E(new Set([].concat(Object(o.a)(v),[e]))))}}},r.a.createElement("div",{className:"App"},r.a.createElement(d,{logout:function(){y(null),C(null)}}),r.a.createElement(B,{login:function(e){return U.apply(this,arguments)},signup:function(e){return S.apply(this,arguments)}})))):r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[156,1,2]]]);
//# sourceMappingURL=main.55e1d40c.chunk.js.map