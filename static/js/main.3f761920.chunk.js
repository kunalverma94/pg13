(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t){Array.prototype.shuffle=function(){var e,t,n=this.length;if(0==n)return this;for(;--n;)e=Math.floor(Math.random()*(n+1)),t=this[n],this[n]=this[e],this[e]=t;return this}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),s=n.n(i),l=n(1),c=n(2),o=n(5),u=n(3),p=n(6),f=n(4),d=n(7),h=n(11),m=n(12),v={INIT:"INIT",FLIP:"FLIP",REMOVE:"HIDE"},b={level:2,plist:[],dlist:[],alist:[]};var O=Object(d.c)({containerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;if(t.type===v.INIT)return Object(m.a)({},t.payload);if(t.type===v.FLIP){var n=Object(h.a)(e.plist),a=Object(h.a)(e.dlist),r=""===n[t.payload].class;return n[t.payload].class=r?"flip":"",a.length>=3&&r&&(e.dlist.forEach(function(e){n[e].class=""}),a=[]),r?a.push(t.payload):a=a.filter(function(e){return e!==t.payload}),Object(m.a)({},e,{plist:n,dlist:a})}if(t.type===v.REMOVE){var i=Object(h.a)(e.plist);return e.dlist.forEach(function(e){i[e].class="hide"}),Object(m.a)({},e,{plist:i,dlist:[]})}return e}}),j=n(19),E=Object(d.d)(O,{},Object(d.a)(j.a)),k=(n(29),function(e){return function(t){var n=[],a=1;null!=sessionStorage.getItem("b")&&(a=Math.floor(151*Math.random()));for(var r=a;r<e+a;r++)n.push(fetch("https://raw.githubusercontent.com/kunalverma94/pokemon/master/evolutions/[CODE].json".replace("[CODE]",r)).then(function(e){return e.json()}).then(function(e){return y(e.chain)}));Promise.all(n).then(function(n){return t({type:v.INIT,payload:{alist:n.map(function(e){return e.sort().join("-")}),plist:[].concat.apply([],n).map(function(e){return{id:e,class:""}}).shuffle(),result:n,level:e,dlist:[]}})})}});function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return void 0===e.evolves_to||0===e.evolves_to.length?t.push(e.species.url.split("/").reverse()[1]):(t.push(e.species.url.split("/").reverse()[1]),y(e.evolves_to[0],t)),t}n(30);var g=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"next",value:function(){this.props.fetchPlist(this.props.level+1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"pannel"},r.a.createElement("div",{className:"progress left "},r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"blocklabel"},"Left"),r.a.createElement("div",null,this.props.remain)),r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"blocklabel"},"Total"),r.a.createElement("div",null,this.props.total))),r.a.createElement("div",{className:"progress right "},r.a.createElement("div",{className:"block level",onClick:function(e){sessionStorage.getItem("b")?(sessionStorage.removeItem("b"),e.currentTarget.classList.remove("hard")):(sessionStorage.setItem("b","1"),e.currentTarget.classList.add("hard"))}},r.a.createElement("div",{className:"blocklabel"},"Level"),r.a.createElement("div",null,this.props.level)),r.a.createElement("div",{className:"block next",onClick:this.next.bind(this)},r.a.createElement("div",{className:"blocklabel"},"\xa0"),r.a.createElement("div",{className:"btn-txt center"},"Next"))))}}]),t}(a.Component),N={fetchPlist:k},I=Object(f.b)(function(e){var t={level:e.containerReducer.level,total:e.containerReducer.plist.length,remain:e.containerReducer.plist.filter(function(e){return"hide"===e.class}).length};return t.remain=t.total-t.remain,t},N)(g),P=(n(31),"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[U].png"),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inner "+this.props.passdata.class,onClick:function(){e.props.events.click()}},r.a.createElement("div",null,r.a.createElement("div",{className:"front",style:{background:"url("+P.replace("[U]",this.props.passdata.id)+")"}},this.props.passdata.id),r.a.createElement("div",{className:"back",style:{background:"url("+P.replace("[U]",this.props.passdata.id)+")"}})))}}]),t}(a.Component),w=Object(f.b)(function(e,t){return{state:e,pr:t}},{})(R),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"checkmate",value:function(e,t,n){var a=this;setTimeout(function(){if(t.length>0){var r=t.map(function(t){return e[t]}).map(function(e){return e.id}).sort().join("-");n.findIndex(function(e){return e===r})>-1&&a.props.HideAction()}},450)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.balls.filter(function(e){return"hide"===e.class}).length===this.props.balls.length&&setTimeout(function(){e.props.fetchPlist(e.props.level+1)},2e3)}},{key:"componentDidMount",value:function(){this.props.fetchPlist(this.props.level+1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.balls,a=t.flipped,i=t.answers;return this.checkmate(n,a,i),r.a.createElement("div",{className:"xelf"},n.map(function(t,n,a){return r.a.createElement(w,{key:n,passdata:t,events:{click:e.props.flipAction.bind(e,n)}})}))}}]),t}(a.Component),T=Object(f.b)(function(e){return{balls:e.containerReducer.plist,flipped:e.containerReducer.dlist,answers:e.containerReducer.alist,level:e.containerReducer.level}},{fetchPlist:k,flipAction:function(e){return function(t){t({type:v.FLIP,payload:e})}},HideAction:function(e){return function(e){e({type:v.REMOVE})}}})(C),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(I,null))}}]),t}(a.Component),L=Object(f.b)(function(e,t){return{}},{})(x),M=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:E},r.a.createElement(L,null))}}]),t}(r.a.Component);n(32),n(33);s.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3f761920.chunk.js.map