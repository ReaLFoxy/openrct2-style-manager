!(function(){'use strict';var t;function n(t,n,i){var r=i?'queryAction':'executeAction';return new Promise((function(i,o){context[r]('ridesetstatus',{ride:t.id,status:n},e(i,o))}))}function i(t,n){var i=n?'queryAction':'executeAction';return new Promise((function(n,r){context[i]('ridedemolish',{ride:t.id,modifyType:1},e(n,r))}))}function e(t,n){return function(i){0===i.error?t(i):n(i)}}function r(t,n){park.postMessage({type:'attraction',text:n,subject:t.id})}!(function(t){t[t.RIDE_TYPE_MAZE=20]='RIDE_TYPE_MAZE',t[t.RIDE_TYPE_MINI_GOLF=67]='RIDE_TYPE_MINI_GOLF',t[t.RIDE_TYPE_CROOKED_HOUSE=71]='RIDE_TYPE_CROOKED_HOUSE'})(t||(t={}));var o=function(){return o=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},o.apply(this,arguments)},u=function(t,n){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},u(t,n)};function a(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Class extends value '+n+' is not a constructor or null');function i(){this.constructor=t}u(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}function s(t){return void 0===t}function c(t){return Array.isArray(t)}function h(t){return l(t,'function')}function f(t){return l(t,'object')}function l(t,n){return typeof t===n}var d='redraw',p=[4,0],v=[1,2],g=[0,0],y={top:g,right:g,bottom:g,left:g};function w(t){s(t.height)&&(t.height=14)}var m=Math.floor(1048575*Math.random())<<10;function b(){return(m++).toString(36)}function x(t,n){return t.subscribe(n)}var C=function(t,n,i,e){this.Ia=t,this.Ja=n,this.Ka=i,this.La=x(n,e)};function I(t){if(!t||!f(t))return!1;var n=t;return h(n.get)&&h(n.subscribe)}function O(t){return!(!t||!f(t))&&!(!(n=t.twoway)||!f(n))&&I(n)&&h(n.set);var n}var M=(function(){function t(){this.Ma=[],this.za=null}return t.prototype.add=function(t,n,i,e){this.on(t,i,(function(t,i){var r=e?e(i):i;t[n]=r}))},t.prototype.callback=function(t,n,i,e,r){O(i)?t[n]=function(t,n){var o=r?r(t,n):t;i.twoway.set(o),e&&e(o)}:e&&(t[n]=r?function(t,n){return e(r(t,n))}:e)},t.prototype.twoway=function(t,n,i,e,r){this.add(t,n,e),this.callback(t,i,e,r)},t.prototype.on=function(t,n,i){var e=(function(t){return O(t)?t.twoway:t})(n);if(I(e)){var r=this.Aa(t,e,i);this.Ma.push(r),i(t,e.get())}else s(e)||i(t,e)},t.prototype.Na=function(){this.za=null},t.prototype.Oa=function(){return this.Ma.length>0},t})(),R=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.ya=function(t){var n=t.ga;n&&this.Ba(n),this.za=t},n.prototype.Aa=function(t,n,i){var e=this;return new C('',n,i,(function(t){var n=e.za;n&&n.ua&&i(n.ua,t)}))},n.prototype.Ba=function(t){var n=this.Ma;if(n)for(var i=0,e=n;i<e.length;i++){var r=e[i];r.Ka(t,r.Ja.get())}},n})(M);function E(t,n){n||(n={});for(var i=0,e=t;i<e.length;i++){var r=e[i],o=r.name;o&&!(o in n)&&(n[o]=r)}return n}function _(t){return k(t,0)}function P(t){return k(t,1)}function A(t){return k(t,2)}function k(t,n){return t[1]===n}function D(t){throw Error(t)}function S(t){if(s(t))return t;if((function(t){return l(t,'number')})(t))return[t,0];var n=t.trim(),i=n.length;if(i>1){var e=i-1,r=void 0,o=n[e];if('w'===o?r=2:'%'===o?r=1:i>2&&(e--,'x'===o&&'p'===n[e]&&(r=0)),!s(r))return[parseFloat(n.substring(0,e)),r]}D('Value \''+t+'\' is not a valid scale.')}function T(t,n){return S(t)||n}function z(t){return T(t,g)}function W(t,n,i,e){switch(t[1]){case 2:return(i?t[0]/i:1)*n*(100-e)*.01;case 1:return.01*t[0]*n;default:return t[0]}}var F=['y','x'],G=['height','width'],U=['top','left'],j=['bottom','right'];function Y(t,n,i,e){var r=G[n],o=e[U[n]],u=e[j[n]],a=t[r]-N(i,o,u,_),s=N(i,o,u,P),c=N(i,o,u,A),h=W(i,a,c,s);return t[r]=h,H(t,n,e,a,c,s)}function H(t,n,i,e,r,o){return(function(t,n,i,e,r,o,u,a,s){var c=W(n[a],i,e,r),h=W(n[s],i,e,r);return t[o]+=c,c+t[u]+h})(t,i,e,r,o,F[n],G[n],U[n],j[n])}function N(t,n,i,e){var r=0;return e(t)&&(r+=t[0]),e(n)&&(r+=n[0]),e(i)&&(r+=i[0]),r}var B='inherit',L='auto',V=['minHeight','minWidth'],K=['maxHeight','maxWidth'];function X(t,n,i){if(l(i,'string'))return L;var e=i,r=e.value||i;return q(t,n,r,e.min||r,e.max||r),r}function Z(t,n,i,e,r){var o=G[n],u=e[U[n]],a=e[j[n]],s=i[o]+u[0]+a[0]+r;return _(u)&&_(a)||D('Padding for '+o+' must be absolute for auto window resize.'),q(t,n,s,s,s),s}function q(t,n,i,e,r){t[G[n]]=i,t[V[n]]=e,t[K[n]]=r}var J=(function(){function t(t){var n=this,i=t.width,e=t.height,r=t.position,o=new R,u={classification:'fui-'+b(),title:'',colours:t.colours,onUpdate:function(){n.ha(),n.c((function(t){return t.update()}))},onClose:function(){n.m()}},a=X(u,1,i),s=X(u,0,e);this.qa(a,s),o.add(u,'title',t.title),this.ea=o.Oa()?o:null,this.fa=r,this.ga=u}return t.prototype.ha=function(){var t=this.ua,n=this.t,i=this.w;if(t&&n){if(!(4&i)){var e=t.width,r=t.height,o=2&i||this.ra==e,u=1&i||this.sa==r;if(o&&u)return;this.ra=e,this.sa=r}this.d(t,n),this.w&=-5}},t.prototype.ma=function(t,n){return{x:0,y:n,width:2&t?L:this.ra,height:1&t?L:this.sa-n}},t.prototype.na=function(t,n,i,e){var r=this.w;2&r&&(this.ra=Z(t,1,n,e,0)),1&r&&(this.sa=Z(t,0,n,e,i))},t.prototype.qa=function(t,n){var i=this.w;t==L?i|=2:(i&=-3,this.ra=t),n==L?i|=1:(i&=-2,this.sa=n),this.w=i},t.prototype.l=function(t,n){this.d(t,this.a),(function(t,n){n&&'default'!==n&&('center'===n?(t.x=ui.width/2-t.width/2,t.y=ui.height/2-t.height/2):(t.x=n.x,t.y=n.y))})(t,this.fa),n&&n.ya(this);var i=ui.openWindow(t),e=E(i.widgets);this.ua=i,this.t=e,this.c((function(t){return t.open(i,e)}))},t.prototype.m=function(){this.c((function(t){return t.close()}));var t=this.ea;t&&t.Na(),this.ua=null,this.t=null},t.prototype.open=function(){if(this.ua)this.focus();else{var t=this.ga,n=this.ea;this.l(t,n)}},t.prototype.close=function(){this.ua&&this.ua.close()},t.prototype.focus=function(){this.ua&&this.ua.bringToFront()},t.prototype.redraw=function(){this.w|=4},t})(),$=function(t,n){this.position=t.parse(n),this.xa=t};function Q(t){return(tt(t.width)?1:0)|(tt(t.height)?2:0)}function tt(t){return s(t)||t===L}function nt(t,n,i,e,r){return it(t,n,(function(t){return(function(t,n,i,e){var r,o,u=i===e,a=0;if(u&&!_(n))return null;for(var s=G[e],c=U[e],h=j[e],f=-1,l=0,d=t;l<d.length;l++){var p=d[l],v=p.position,g=v[s],y=v.padding,w=y[c],m=y[h];if(!rt(g,w,m))return null;p.skip||(r=a,o=g[0]+w[0]+m[0],a=u?r+o:r<o?o:r,f++)}return u&&(a+=n[0]*f),a})(i,e,r,t)}))}function it(t,n,i){return!!(3&n&&et(t,1&n,1,i)|et(t,2&n,0,i))}function et(t,n,i,e){var r;if(n&&!(function(t){return null===t})(r=e(i))){var o=G[i],u=t[o];if(u[0]!==r||!_(u))return t[o]=[r,0],1}return 0}function rt(t,n,i){return _(t)&&_(n)&&_(i)}function ot(t,n,i){var e=t[0]*i;A(t)?n.D+=e:_(t)?n.H+=e:P(t)&&(n.T+=e)}function ut(t,n){var i;if(n||(n=y),s(t))i=t;else if(c(t)){var e=t.length;if(2===e){var r=z(t[0]),o=z(t[1]);i=st(r,o,r,o)}else 4===e?i=st(z(t[0]),z(t[1]),z(t[2]),z(t[3])):D('Padding array of unknown length: '+e+'. Only lengths of 2 or 4 are supported.')}else if(f(t))i=st(at(U[0],t,n),at(j[1],t,n),at(j[0],t,n),at(U[1],t,n));else{var u=z(t);i=st(u,u,u,u)}return i||n}function at(t,n,i){var e=n[t];return T(s(e)?n.rest:e,i[t])}function st(t,n,i,e){return{top:t,right:n,bottom:i,left:e}}function ct(t,n){return{width:T(t.width,v),height:T(t.height,v),padding:ut(t.padding,n)}}function ht(t){return t.direction=1,lt(t)}function ft(t){return t.direction=0,lt(t)}function lt(t){return function(n,i){return new dt(n,i,t)}}var dt=(function(t){function n(n,i,e){var r=t.call(this,n,e)||this;r.parse=ct,r.L=e.direction||0,r.M=S(e.spacing)||p;for(var o=Q(e),u=c(e)?e:e.content,a=u.length,s=Array(a),h=0;h<a;h++){var f=u[h];s[h]=f(r,i)}return r.w=4|o,r.v=s,i.on(d,(function(){var t=r.w;if(4&t){r.w&=-5;var n=r.v,i=n.filter((function(t){return!t.skip}));nt(r.position,t,n,r.M,r.L),r.N=i,r.O=i.map((function(t){return t.position}))}})),r}return a(n,t),n.prototype.recalculate=function(){this.w|=4,3&this.w&&this.xa.recalculate()},n.prototype.layout=function(t,n){var i=this;!(function(t,n,i,e,r){var o=t.length;if(o)for(var u=1==i?0:1,a=(function(t,n,i,e){var r=t.length,o={S:Array(r),H:0,T:0,D:0};ot(n,o,r-1);for(var u=0;u<r;u++){var a=t[u],s=a.padding,c={R:a[G[i]],rr:a[G[e]],h:s};o.S[u]=c;var h=c.R,f=c.h[U[i]],l=c.h[j[i]];ot(h,o,1),ot(f,o,1),ot(l,o,1)}return o})(t,e,i,u),s=n[G[i]]-a.H,c=a.D,h=a.T,f=W(e,s,c,h),l=0,d=0;d<o;d++){var p=a.S[d],v=l+n[F[i]],g=W(p.R,s,c,h),y=p.h,w={};w[F[i]]=v,w[G[i]]=g,w[F[u]]=n[F[u]],w[G[u]]=n[G[u]],l+=H(w,i,y,s,c,h),Y(w,u,p.rr,y),r(d,w),l+=f}})(this.O,n,this.L,this.M,(function(n,e){i.N[n].layout(t,e)}))},n})($),pt=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.ya=function(t){var n=t.Fa;n&&this.Ba(n),this.za=t},n.prototype.Aa=function(t,n,i){var e=this,r=t.name||(t.name=b());return new C(r,n,i,(function(t){var n=e.za;if(n&&n.isOpen()){var o=n.getWidget(r);o&&i(o,t)}}))},n.prototype.Ba=function(t){var n=this.Ma;if(n)for(var i=0,e=n;i<e.length;i++){var r=e[i];r.Ka(t[r.Ia],r.Ja.get())}},n})(M);function vt(t,n){for(var i=0,e=t.length;i<e;i++)t[i](n)}var gt=(function(){function t(t,n,i,e,r,o,u){this.width=t,this.height=n,this.xa=i,this.l=e,this.Ca=r,this.Da=o,this.m=u,this.recalculate=this.redraw}return t.prototype.layout=function(t,n){vt(this.Da,this);var i=this.j,e=i.position,r=yt(t,this.width,e,1),o=yt(t,this.height,e,0);return i.layout(n,t),{width:r,height:o}},t.prototype.redraw=function(){this.Fa&&this.xa.redraw()},t.prototype.parse=function(t){return{width:v,height:v,h:ut(t.padding)}},t.prototype.getWidget=function(t){var n,i=this.Fa;return i&&(n=i[t]),n||null},t.prototype.isOpen=function(){return!!this.Fa},t.prototype.open=function(t,n){X(t,1,this.width),X(t,0,this.height),this.Fa=n;var i=this.B;i&&i.ya(this),vt(this.l,this)},t.prototype.update=function(){vt(this.Ca,this)},t.prototype.close=function(){vt(this.m,this);var t=this.B;t&&t.Na(),this.Fa=void 0},t})();function yt(t,n,i,e){var r=G[e],o=t[r],u=i[r],a=i.h,s=n==B;return s&&o==L||n==L?(_(u)||D('Window body '+r+' must resolve to absolute size for "auto" window size.'),u[0]+(function(t,n,i){var e=n[U[i]],r=n[j[i]];return _(e)&&_(r)||D('Window padding must be absolute for "auto" window size.'),t[F[i]]+=e[0],e[0]+r[0]})(t,a,e)):(Y(t,e,u,a),s?o:u[0])}var wt=(function(){function t(t,n,i){this.va=[];var e=[],r=[],o=[],u=[],a=new gt(i.width||B,i.height||B,t,e,r,o,u),s=new pt,c=n.onOpen,h=n.onUpdate,f=n.onClose;this.open=e,this.update=r,this.redraw=o,this.close=u,this.binder=s,this.context=a,a.j=new dt(a,this,i),a.B=s.Oa()?s:null,c&&e.push(c),h&&r.push(h),f&&u.push(f)}return t.prototype.add=function(t){this.va.push(t)},t.prototype.on=function(t,n){this[t].push(n)},t})(),mt=(function(t){function n(n){var i=t.call(this,n)||this,e=new wt(i,n,n),r=e.va;return i.ga.widgets=r,i.a=E(r),i.b=e.context,i}return a(n,t),n.prototype.c=function(t){t(this.b)},n.prototype.d=function(t,n){var i=this.ma(this.w,15),e=this.b.layout(i,n);this.na(t,e,15,y)},n})(J),bt=(function(){function t(t){this.U=t}return t.prototype.get=function(){return this.U},t.prototype.subscribe=function(t){this.Ga?this.Ga.push(t):this.Ga=[t];var n=this.Ga;return function(){var i=n.indexOf(t);-1!==i&&n.splice(i,1)}},t.prototype.Ha=function(t){this.Ga&&vt(this.Ga,t)},t})(),xt=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.set=function(t){this.U!==t&&(this.U=t,this.Ha(t))},n})(bt);function Ct(t){return new xt(t)}function It(t){return I(t)?t.get():t}var Ot=Array.prototype.slice;function Mt(){for(var t=arguments,n=Ot.call(t,0,-1),i=n.length,e=t[i],r=Ct(Rt(n,e)),o=0;o<i;)x(n[o++],(function(){var t=Rt(n,e);return r.set(t)}));return r}function Rt(t,n){var i=t.map((function(t){return t.get()}));return n.apply(void 0,i)}function Et(t,n){I(t)?(x(t,n),n(t.get())):s(t)||n(t)}var _t=Math.round;function Pt(t,n,i){var e=t[n];e.x=_t(i.x),e.y=_t(i.y),e.width=_t(i.width-.1),e.height=_t(i.height-.1)}var At=(function(t){function n(n,i,e,r){var o=t.call(this,i,r)||this;o.name=b(),o.type=n,o.x=o.y=o.width=o.height=0;var u=e.binder,a=e.context,s=r.visibility;return u.add(o,'tooltip',r.tooltip),u.add(o,'isDisabled',r.disabled),u.add(o,'isVisible',s,(function(t){return'visible'===t})),Et(s,(function(t){var n=o.skip,e='none'===t;o.skip=e,(n||e)&&(i.recalculate(),a.redraw())})),e.add(o),o}return a(n,t),n.prototype.layout=function(t,n){Pt(t,this.name,n)},n})($);function kt(t){return function(n,i){return new Dt(n,i,t)}}var Dt=(function(t){function n(n,i,e){var r,o=this,u='groupbox',a='content',s=Q(e);if(a in e){o=t.call(this,u,n,i,e)||this,r=e[a];var c=i.binder,h=e.text;c.add(o,'text',h),s|=h?8:0}else o=t.call(this,u,n,i,{})||this,r=e;o.w=4|s;var f=r(o,i);return o.z=f,i.on(d,(function(){4&o.w&&(o.w&=-5,(function(t,n,i){it(t,n,(function(t){return(function(t,n){var i=t[G[n]],e=t.padding,r=e[U[n]],o=e[j[n]];return rt(i,r,o)?i[0]+r[0]+o[0]:null})(i,t)}))})(o.position,o.w,o.z.position))})),o}return a(n,t),n.prototype.parse=function(t){var n=ut(6);return 8&this.w&&(n.top=[15,0]),ct(t,n)},n.prototype.recalculate=function(){this.w|=4,3&this.w&&this.xa.recalculate()},n.prototype.layout=function(n,i){var e=8&this.w?0:4;i.y-=e,i.height+=e,t.prototype.layout.call(this,n,i),i.y+=e,i.height-=e;var r=this.z,o=r.position;(function(t,n,i,e){Y(t,1,n,e),Y(t,0,i,e)})(i,o.width,o.height,o.padding),r.layout(n,i)},n})(At),St=(function(t){function n(n,i,e){var r=t.call(this,'button',n,i,e)||this,o=i.binder;return o.add(r,'text',e.text),o.add(r,'image',e.image),o.add(r,'border',e.border),o.add(r,'isPressed',e.isPressed),r.onClick=e.onClick,r}return a(n,t),n})(At),Tt=(function(t){function n(n,i,e){var r=t.call(this,'checkbox',n,i,e)||this,o=i.binder;return o.add(r,'text',e.text),o.twoway(r,'isChecked','onChange',e.isChecked,e.onChange),r}return a(n,t),n.prototype.layout=function(n,i){i.y+=1,t.prototype.layout.call(this,n,i)},n})(At),zt=(function(t){function n(n,i,e){var r=t.call(this,'dropdown',n,i,e)||this;r.items=[],r.selectedIndex=0;var o,u=e.items,a=e.disabled,s=e.disabledMessage,c=e.onChange,h='empty'===(o=e.autoDisable)?0:'single'===o?1:-1,f=e.selectedIndex,l=function(t){r.C(t,It(u),It(a),h,s)},d=i.binder,p=l;I(u)&&(p=function(t,n){l(t),r.F(t,n),r.A=n}),d.on(r,u,p),d.on(r,f,(function(t,n){r.G=n,l(t)})),d.on(r,a,l);var v=(function(t,n,i){return n?function(e){t.E||(i?i(e,n):n(e))}:n})(r,c,(function(t,n){return n(t<0?0:t)}));return d.callback(r,'onChange',f,v),r}return a(n,t),n.prototype.C=function(t,n,i,e,r){this.E=!0;var o=i||!n||n.length<=e;o&&r?t.items=[r]:(t.items=n,t.selectedIndex=this.G||0),t.isDisabled=o,this.E=!1},n.prototype.F=function(t,n){var i=this.A;if(i){var e=i[t.selectedIndex||0],r=n.indexOf(e);r<0&&(r=0),this.G!==r&&(this.G=r,t.selectedIndex=r)}},n})(At);function Wt(t){return w(t),function(n,i){return new Ft(n,i,t)}}var Ft=(function(t){function n(n,i,e){var r=t.call(this,'spinner',n,i,e)||this;r.V=1,r.W=-2147483648,r.X=2147483647;var o=e.value,u=O(o)?o.twoway:(function(t){if(I(t)){var n=Ct(t.get());return x(t,(function(t){return n.set(t)})),n}return Ct(t)})(o||0),a=e.format||function(t){return t.toString()},s=i.binder,c=e.disabledMessage,h=e.minimum,f=e.maximum;if(c){var l=e.disabled;s.add(r,'text',l,(function(t){return t?c:a(u.get())}));var d=a;a=function(t){return It(l)?c:d(t)}}return r.U=u,s.add(r,'text',u,a),Et(e.step,(function(t){return r.V=t})),Et(h,(function(t){var n=u.get();r.W=t,n<t&&r._(t,t-n)})),Et(f,(function(t){var n=u.get();r.X=t,n>t&&r._(t,t-n)})),r.Y=e.wrapMode||'clamp',r.Z=e.onChange,r.onIncrement=function(){return r.$(1)},r.onDecrement=function(){return r.$(-1)},r.W>r.X&&D('Spinner: minimum '+r.W+' is larger than maximum '+r.X),r}return a(n,t),n.prototype.$=function(t){var n=this.W,i=this.X;if(!(n>=i)){var e,r=this.V*t,o=this.U.get(),u=o+r,a=this.Y;e='wrap'===a||'clampThenWrap'===a&&(u<n&&o===n||u>i&&o===i)?(function(t,n,i){return t<n?t=i:t>i&&(t=n),t})(u,n,i):(function(t,n,i){return t<n?t=n:t>i&&(t=i),t})(u,n,i),this._(e,r)}},n.prototype._=function(t,n){this.U.set(t),this.Z&&this.Z(t,n)},n})(At);function Gt(t){return w(t),function(n,i){return new Ut(n,i,t)}}var Ut=(function(t){function n(n,i,e){var r=t.call(this,'label',n,i,e)||this;r.text='';var o=i.binder;return o.add(r,'text',e.text),o.add(r,'textAlign',e.alignment),r}return a(n,t),n.prototype.layout=function(n,i){i.y+=2,t.prototype.layout.call(this,n,i)},n})(At);

var STYLE_NS = 'styleManager.values';

var OPENRCT2_COLORS = [
    { id: 0, name: '0: Black' },
    { id: 1, name: '1: Grey' },
    { id: 2, name: '2: White' },
    { id: 3, name: '3: Dark Purple' },
    { id: 4, name: '4: Light Purple' },
    { id: 5, name: '5: Bright Purple' },
    { id: 6, name: '6: Dark Blue' },
    { id: 7, name: '7: Light Blue' },
    { id: 8, name: '8: Icy Blue' },
    { id: 9, name: '9: Teal' },
    { id: 10, name: '10: Aquamarine' },
    { id: 11, name: '11: Intense Green' },
    { id: 12, name: '12: Dark Green' },
    { id: 13, name: '13: Moss Green' },
    { id: 14, name: '14: Olive Green' },
    { id: 15, name: '15: Amber' },
    { id: 16, name: '16: Light Orange' },
    { id: 17, name: '17: Bright Red' },
    { id: 18, name: '18: Dark Red' },
    { id: 19, name: '19: Bright Pink' },
    { id: 20, name: '20: Deep Pink' },
    { id: 21, name: '21: Dark Pink' },
    { id: 22, name: '22: Lavender' },
    { id: 23, name: '23: Burgundy' },
    { id: 24, name: '24: Light Peach' },
    { id: 25, name: '25: Yellow' },
    { id: 26, name: '26: Olive' },
    { id: 27, name: '27: Bronze' },
    { id: 28, name: '28: Pastel Green' },
    { id: 29, name: '29: Coral' },
    { id: 30, name: '30: Light Coral' },
    { id: 31, name: '31: Light Indigo' }
];

var COLOR_NAMES = OPENRCT2_COLORS.map(function(c) { return c.name; });

// 9-Step Continuous Vibrant Rainbow Spectrum for Chroma Mode
var RAINBOW_PALETTE = [
    17, // Bright Red
    16, // Light Orange
    25, // Yellow
    11, // Intense Green
    10, // Aquamarine (Cyan)
    7,  // Light Blue
    6,  // Dark Blue
    5,  // Bright Purple
    19  // Bright Pink
];

// Intelligent Bright & Dark Harmony LUTs
var BRIGHT_LUT = [
    2, 2, 2,       // 0: Black->White, 1: Grey->White, 2: White->White
    5, 22, 22,     // 3: Dark Purple->Bright, 4: Light->Lavender, 5: Bright->Lavender
    7, 8, 8,       // 6: Dark Blue->Light Blue, 7: Light->Icy, 8: Icy->Icy
    10, 10,        // 9: Teal->Aquamarine, 10: Aquamarine
    28, 11, 11, 28,// 11: Intense Green->Pastel, 12: Dark->Intense, 13: Moss->Intense, 14: Olive->Pastel
    25, 24,        // 15: Amber->Yellow, 16: Light Orange->Peach
    29, 17,        // 17: Bright Red->Coral, 18: Dark Red->Bright Red
    30, 19, 20,    // 19: Bright Pink->Light Coral, 20: Deep->Bright, 21: Dark->Deep
    22, 29, 24,    // 22: Lavender, 23: Burgundy->Coral, 24: Peach
    25, 28, 25,    // 25: Yellow, 26: Olive->Pastel Green, 27: Bronze->Yellow
    28, 30, 30, 8  // 28: Pastel Green, 29: Coral->Light Coral, 30: Light Coral, 31: Indigo->Icy Blue
];

var DARK_LUT = [
    0, 0, 1,       // 0: Black, 1: Grey->Black, 2: White->Grey
    3, 3, 3,       // 3..5: Purples -> Dark Purple (3)
    6, 6, 6,       // 6..8: Blues -> Dark Blue (6)
    6, 9,          // 9: Teal->Dark Blue, 10: Aquamarine->Teal
    12, 12, 12, 26,// 11..13: Greens -> Dark Green (12), 14: Olive
    27, 15,        // 15: Amber->Bronze, 16: Orange->Amber
    18, 23,        // 17: Bright Red->Dark Red, 18: Dark Red->Burgundy
    21, 21, 23,    // 19..21: Pinks -> Dark Pink/Burgundy
    3, 23, 15,     // 22: Lavender->Dark Purple, 23: Burgundy, 24: Peach->Amber
    27, 26, 0,     // 25: Yellow->Bronze, 26: Olive, 27: Bronze->Black
    12, 18, 29, 6  // 28: Pastel Green->Dark Green, 29: Coral->Dark Red, 30: Light Coral->Coral, 31: Indigo->Dark Blue
];

function getBrightColor(c) {
    return BRIGHT_LUT[c] !== undefined ? BRIGHT_LUT[c] : c;
}

function getDarkColor(c) {
    return DARK_LUT[c] !== undefined ? DARK_LUT[c] : c;
}

var STYLE_PRESETS = [
    {
        id: 'cyber-neon',
        name: 'Cyber Neon (Electric Violet & Cyan)',
        desc: 'Vibrant violet track with cyan rails and stealth dark vehicles.',
        track: { main: 5, add: 7, sup: 0 },
        vehicle: { body: 0, trim: 5, tert: 7 },
        guest: { tshirt: 5, hat: 7, balloon: 7, umbrella: 5 },
        stationStyle: 0
    },
    {
        id: 'crimson-fury',
        name: 'Crimson Fury (Fiery Red & Gold)',
        desc: 'Aggressive fiery red spine with golden rails and obsidian supports.',
        track: { main: 17, add: 25, sup: 0 },
        vehicle: { body: 17, trim: 25, tert: 0 },
        guest: { tshirt: 17, hat: 25, balloon: 17, umbrella: 25 },
        stationStyle: 0
    },
    {
        id: 'alpine-frost',
        name: 'Alpine Frost (Ice Blue & Pure White)',
        desc: 'Clean icy blue and white theme with crisp alpine tones.',
        track: { main: 8, add: 2, sup: 1 },
        vehicle: { body: 8, trim: 2, tert: 1 },
        guest: { tshirt: 8, hat: 2, balloon: 8, umbrella: 2 },
        stationStyle: 1
    },
    {
        id: 'emerald-safari',
        name: 'Emerald Safari (Deep Jungle & Gold)',
        desc: 'Lush dark jungle green with golden yellow accents.',
        track: { main: 12, add: 25, sup: 13 },
        vehicle: { body: 12, trim: 25, tert: 13 },
        guest: { tshirt: 12, hat: 25, balloon: 12, umbrella: 25 },
        stationStyle: 0
    },
    {
        id: 'sunset-blvd',
        name: 'Sunset Boulevard (Coral, Peach & Gold)',
        desc: 'Warm sunset gradients inspired by retro coastlines.',
        track: { main: 29, add: 24, sup: 25 },
        vehicle: { body: 29, trim: 24, tert: 25 },
        guest: { tshirt: 29, hat: 24, balloon: 29, umbrella: 24 },
        stationStyle: 0
    },
    {
        id: 'stealth-ops',
        name: 'Stealth Ops (Industrial Monolith)',
        desc: 'Monochromatic industrial blacks, greys and clean white trims.',
        track: { main: 0, add: 1, sup: 0 },
        vehicle: { body: 0, trim: 2, tert: 1 },
        guest: { tshirt: 0, hat: 1, balloon: 2, umbrella: 0 },
        stationStyle: 2
    }
];

var DEFAULT_SLOTS = [
    { name: 'Slot 1: Crimson Flame', main: 17, add: 25, sup: 0 },
    { name: 'Slot 2: Ocean Breeze', main: 6, add: 7, sup: 2 },
    { name: 'Slot 3: Forest Spirit', main: 12, add: 11, sup: 14 },
    { name: 'Slot 4: Royal Violet', main: 3, add: 5, sup: 22 },
    { name: 'Slot 5: Sunburst Gold', main: 15, add: 25, sup: 1 },
    { name: 'Slot 6: Midnight Shadow', main: 0, add: 1, sup: 0 }
];

var AUTO_ALT_MODES = [
    'Bright Harmony (Luminous & Pastel Tones)',
    'Darker Harmony (Deep & Moody Shades)',
    'Invert (Swap Main & Sub Colours)',
    'Dark Tunnel (Stealth & Underground)',
    'Colour Shift (Harmonic Hue Rotation)'
];

var DEFAULT_ALT_SCHEMES = [
    { main: 7, add: 5, sup: 0 },  // Alt 1
    { main: 0, add: 7, sup: 0 },  // Alt 2
    { main: 2, add: 5, sup: 1 }   // Alt 3
];

var initialStyleState = {
    activeTab: 0, // 0 = Main Theme, 1 = Alt Schemes, 2 = RGB Chroma
    activePresetId: 'cyber-neon',
    useCustomPalette: false,
    selectedSlotIndex: 0,
    customSlots: DEFAULT_SLOTS,
    customMain: 5,
    customAdd: 7,
    customSup: 0,

    useAltPresets: false,
    autoAltMode: 0,
    useCustomAlt: false,
    selectedAltIndex: 0,
    customAltSchemes: DEFAULT_ALT_SCHEMES,

    globalTrack: true,
    globalVehicle: true,
    globalStation: false,
    globalGuests: false,

    targetRideIndex: 0,
    singleTrack: true,
    singleVehicle: true,

    // RGB Chroma FX State
    enableChroma: false,
    chromaTarget: 1,    // 0 = Selected Ride Only, 1 = All Park Rides (Default to All Park Rides)
    chromaVehicles: true,
    chromaBalloons: true,
    chromaGuests: true,
    chromaTrack: true,  // Enabled by default!
    chromaSpeed: 1,     // 0 = Slow, 1 = Normal, 2 = Fast

    rides: []
};

try {
    if (typeof context !== 'undefined' && context.getParkStorage) {
        var storage = context.getParkStorage();
        if (storage) {
            var saved = storage.get(STYLE_NS);
            if (saved) {
                for (var key in saved) {
                    if (saved.hasOwnProperty(key)) {
                        initialStyleState[key] = saved[key];
                    }
                }
            }
        }
    }
} catch (e) {}

var styleStore = Ct(initialStyleState);

function updateStyleState(patch) {
    var cur = styleStore.get();
    var updated = o({}, cur);
    for (var k in patch) {
        if (patch.hasOwnProperty(k)) {
            updated[k] = patch[k];
        }
    }
    styleStore.set(updated);

    try {
        if (typeof context !== 'undefined' && context.getParkStorage) {
            var storage = context.getParkStorage();
            if (storage) {
                storage.set(STYLE_NS, {
                    activePresetId: updated.activePresetId,
                    useCustomPalette: updated.useCustomPalette,
                    selectedSlotIndex: updated.selectedSlotIndex,
                    customSlots: updated.customSlots,
                    customMain: updated.customMain,
                    customAdd: updated.customAdd,
                    customSup: updated.customSup,
                    useAltPresets: updated.useAltPresets,
                    autoAltMode: updated.autoAltMode,
                    useCustomAlt: updated.useCustomAlt,
                    selectedAltIndex: updated.selectedAltIndex,
                    customAltSchemes: updated.customAltSchemes,
                    globalTrack: updated.globalTrack,
                    globalVehicle: updated.globalVehicle,
                    globalStation: updated.globalStation,
                    globalGuests: updated.globalGuests,
                    singleTrack: updated.singleTrack,
                    singleVehicle: updated.singleVehicle,
                    enableChroma: updated.enableChroma,
                    chromaTarget: updated.chromaTarget,
                    chromaVehicles: updated.chromaVehicles,
                    chromaBalloons: updated.chromaBalloons,
                    chromaGuests: updated.chromaGuests,
                    chromaTrack: updated.chromaTrack,
                    chromaSpeed: updated.chromaSpeed
                });
            }
        }
    } catch (e) {}
}

function getRides() {
    try {
        if (typeof map !== 'undefined' && map.rides) {
            return map.rides.filter(function(r) { return r.classification === 'ride'; });
        }
    } catch (e) {}
    return [];
}

function getActivePreset() {
    var st = styleStore.get();
    for (var i = 0; i < STYLE_PRESETS.length; i++) {
        if (STYLE_PRESETS[i].id === st.activePresetId) {
            return STYLE_PRESETS[i];
        }
    }
    return STYLE_PRESETS[0];
}

function getActivePalette() {
    var st = styleStore.get();
    if (st.useCustomPalette) {
        var mainName = (OPENRCT2_COLORS[st.customMain] || OPENRCT2_COLORS[0]).name;
        var addName = (OPENRCT2_COLORS[st.customAdd] || OPENRCT2_COLORS[0]).name;
        return {
            name: 'Custom (' + mainName + ' / ' + addName + ')',
            track: { main: st.customMain, add: st.customAdd, sup: st.customSup },
            vehicle: { body: st.customMain, trim: st.customAdd, tert: st.customSup },
            guest: { tshirt: st.customMain, hat: st.customAdd, balloon: st.customMain, umbrella: st.customAdd },
            stationStyle: 0
        };
    } else {
        return getActivePreset();
    }
}

function getResolvedAltSchemes(mainPalette) {
    var st = styleStore.get();
    if (!st.useAltPresets) {
        return [
            { main: mainPalette.track.main, add: mainPalette.track.add, sup: mainPalette.track.sup },
            { main: mainPalette.track.main, add: mainPalette.track.add, sup: mainPalette.track.sup },
            { main: mainPalette.track.main, add: mainPalette.track.add, sup: mainPalette.track.sup }
        ];
    }

    if (st.useCustomAlt) {
        var alts = st.customAltSchemes || DEFAULT_ALT_SCHEMES;
        return [
            alts[0] || { main: 7, add: 5, sup: 0 },
            alts[1] || { main: 0, add: 7, sup: 0 },
            alts[2] || { main: 2, add: 5, sup: 1 }
        ];
    }

    var m = mainPalette.track.main;
    var a = mainPalette.track.add;
    var s = mainPalette.track.sup;

    // Mode 0: Bright Harmony
    if (st.autoAltMode === 0) {
        var bM = getBrightColor(m);
        var bA = getBrightColor(a);
        var bS = (s === 0) ? 1 : getBrightColor(s);
        return [
            { main: bM, add: bA, sup: bS },
            { main: bM, add: 2, sup: 2 },
            { main: bA, add: bM, sup: 1 }
        ];
    }
    // Mode 1: Darker Harmony
    else if (st.autoAltMode === 1) {
        var dM = getDarkColor(m);
        var dA = getDarkColor(a);
        return [
            { main: dM, add: dA, sup: 0 },
            { main: dM, add: 0, sup: 0 },
            { main: 0, add: dM, sup: 0 }
        ];
    }
    // Mode 2: Invert
    else if (st.autoAltMode === 2) {
        return [
            { main: a, add: m, sup: s },
            { main: s, add: a, sup: m },
            { main: a, add: s, sup: m }
        ];
    }
    // Mode 3: Dark Tunnel
    else if (st.autoAltMode === 3) {
        return [
            { main: 0, add: m, sup: 0 },
            { main: 1, add: 0, sup: 1 },
            { main: 0, add: a, sup: 1 }
        ];
    }
    // Mode 4: Colour Shift (Hue Rotation)
    else {
        return [
            { main: (m + 6) % 32, add: (a + 6) % 32, sup: s },
            { main: (m + 12) % 32, add: (a + 12) % 32, sup: s },
            { main: (m + 18) % 32, add: (a + 18) % 32, sup: 0 }
        ];
    }
}

function applyTrackColours(ride, palette) {
    context.executeAction('ridesetappearance', {
        ride: ride.id,
        type: 0,
        value: palette.track.main,
        index: 0
    }, function() {});
    context.executeAction('ridesetappearance', {
        ride: ride.id,
        type: 1,
        value: palette.track.add,
        index: 0
    }, function() {});
    context.executeAction('ridesetappearance', {
        ride: ride.id,
        type: 2,
        value: palette.track.sup,
        index: 0
    }, function() {});

    var altSchemes = getResolvedAltSchemes(palette);
    for (var altIdx = 0; altIdx < 3; altIdx++) {
        var alt = altSchemes[altIdx];
        var schemeNum = altIdx + 1;
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 0,
            value: alt.main,
            index: schemeNum
        }, function() {});
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 1,
            value: alt.add,
            index: schemeNum
        }, function() {});
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 2,
            value: alt.sup,
            index: schemeNum
        }, function() {});
    }
}

function applyVehicleColours(ride, palette) {
    var numSchemes = (ride.vehicleColours && ride.vehicleColours.length > 0) ? ride.vehicleColours.length : 1;
    for (var v = 0; v < numSchemes; v++) {
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 3,
            value: palette.vehicle.body,
            index: v
        }, function() {});
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 4,
            value: palette.vehicle.trim,
            index: v
        }, function() {});
        context.executeAction('ridesetappearance', {
            ride: ride.id,
            type: 5,
            value: palette.vehicle.tert,
            index: v
        }, function() {});
    }
}

function applyStationStyle(ride, palette) {
    context.executeAction('ridesetappearance', {
        ride: ride.id,
        type: 7,
        value: palette.stationStyle || 0,
        index: 0
    }, function() {});
}

function executeApplyParkWide() {
    var st = styleStore.get();
    var palette = getActivePalette();
    var rides = getRides();
    var ridesModified = 0;
    var guestsModified = 0;

    rides.forEach(function(ride) {
        ridesModified++;
        if (st.globalTrack) {
            applyTrackColours(ride, palette);
        }
        if (st.globalVehicle) {
            applyVehicleColours(ride, palette);
        }
        if (st.globalStation) {
            applyStationStyle(ride, palette);
        }
    });

    if (st.globalGuests && palette.guest) {
        try {
            var guests = map.getAllEntities('guest');
            for (var gIdx = 0; gIdx < guests.length; gIdx++) {
                var g = guests[gIdx];
                guestsModified++;
                g.tshirtColour = palette.guest.tshirt;
                g.hatColour = palette.guest.hat;
                g.balloonColour = palette.guest.balloon;
                g.umbrellaColour = palette.guest.umbrella;
            }
        } catch (e) {}

        try {
            rides.forEach(function(ride) {
                if (ride.classification === 'stall') {
                    context.executeAction('ridesetappearance', {
                        ride: ride.id,
                        type: 3,
                        value: palette.guest.balloon,
                        index: 0
                    }, function() {});
                    context.executeAction('ridesetappearance', {
                        ride: ride.id,
                        type: 4,
                        value: palette.guest.umbrella,
                        index: 0
                    }, function() {});
                }
            });
        } catch (e) {}
    }

    try {
        park.postMessage({
            type: 'attraction',
            text: 'Style applied park-wide! (' + ridesModified + ' rides, ' + guestsModified + ' guests updated)',
            subject: 0
        });
    } catch (e) {}
}

function executeApplySingleRide() {
    var st = styleStore.get();
    var palette = getActivePalette();
    var rides = getRides();
    var idx = st.targetRideIndex;
    if (idx < 0 || idx >= rides.length) {
        return;
    }
    var ride = rides[idx];

    if (st.singleTrack) {
        applyTrackColours(ride, palette);
    }
    if (st.singleVehicle) {
        applyVehicleColours(ride, palette);
    }

    try {
        park.postMessage({
            type: 'attraction',
            text: 'Applied \'' + palette.name + '\' to ' + ride.name + '!',
            subject: ride.id
        });
    } catch (e) {}
}

function saveCurrentToSlot() {
    var st = styleStore.get();
    var slots = (st.customSlots || DEFAULT_SLOTS).slice();
    var idx = (st.selectedSlotIndex >= 0 && st.selectedSlotIndex < slots.length) ? st.selectedSlotIndex : 0;
    var mainName = (OPENRCT2_COLORS[st.customMain] || OPENRCT2_COLORS[0]).name;
    var addName = (OPENRCT2_COLORS[st.customAdd] || OPENRCT2_COLORS[0]).name;

    slots[idx] = {
        name: 'Slot ' + (idx + 1) + ': ' + mainName + ' / ' + addName,
        main: st.customMain,
        add: st.customAdd,
        sup: st.customSup
    };

    updateStyleState({ customSlots: slots });

    try {
        park.postMessage({
            type: 'attraction',
            text: 'Saved custom palette to Slot ' + (idx + 1) + ' (' + mainName + ' / ' + addName + ')!',
            subject: 0
        });
    } catch (e) {}
}

function updateCustomAltColor(key, val) {
    var st = styleStore.get();
    var alts = (st.customAltSchemes || DEFAULT_ALT_SCHEMES).slice();
    var idx = st.selectedAltIndex || 0;
    var cur = o({}, alts[idx] || { main: 0, add: 0, sup: 0 });
    cur[key] = val;
    alts[idx] = cur;
    updateStyleState({ customAltSchemes: alts });
}

// ==================== ULTRA HIGH-PERFORMANCE RGB CHROMA ENGINE ====================
var chromaSubscription = null;
var chromaTickCounter = 0;
var chromaStep = 0;

function onChromaTick() {
    var st = styleStore.get();
    if (!st.enableChroma) {
        if (chromaSubscription) {
            chromaSubscription.dispose();
            chromaSubscription = null;
        }
        return;
    }

    var speedIntervals = [10, 6, 3];
    var interval = speedIntervals[st.chromaSpeed !== undefined ? st.chromaSpeed : 1] || 6;
    chromaTickCounter++;
    if (chromaTickCounter % interval !== 0) {
        return;
    }

    chromaStep = (chromaStep + 1) % 9;

    var cMain = RAINBOW_PALETTE[chromaStep];
    var cAlt1 = RAINBOW_PALETTE[(chromaStep + 2) % 9];
    var cAlt2 = RAINBOW_PALETTE[(chromaStep + 4) % 9];
    var cAlt3 = RAINBOW_PALETTE[(chromaStep + 6) % 9];

    var allRides = getRides();
    var selRide = null;
    if (st.targetRideIndex >= 0 && st.targetRideIndex < allRides.length) {
        selRide = allRides[st.targetRideIndex];
    } else if (allRides.length > 0) {
        selRide = allRides[0];
    }

    // 1. Vehicles (Direct In-Memory Property Assignment - 0% LAG!)
    if (st.chromaVehicles) {
        try {
            var cars = map.getAllEntities('car');
            for (var cIdx = 0; cIdx < cars.length; cIdx++) {
                var car = cars[cIdx];
                if (st.chromaTarget === 0) {
                    if (selRide && car.ride === selRide.id) {
                        car.colours = { body: cMain, trim: cAlt1, tertiary: cAlt2 };
                    }
                } else {
                    car.colours = { body: cMain, trim: cAlt1, tertiary: cAlt2 };
                }
            }
        } catch (e) {}

        if (st.chromaTarget === 0 && selRide) {
            if (selRide.vehicleColours && selRide.vehicleColours.length > 0) {
                selRide.vehicleColours[0] = { body: cMain, trim: cAlt1, tertiary: cAlt2 };
            }
        }
    }

    // 2. Guests (T-shirts & Hats) and Balloons & Umbrellas (Direct In-Memory - 0% LAG!)
    if (st.chromaGuests || st.chromaBalloons) {
        try {
            var guests = map.getAllEntities('guest');
            for (var gIdx = 0; gIdx < guests.length; gIdx++) {
                var g = guests[gIdx];
                var offset = (g.id || gIdx) % 9;
                if (st.chromaGuests) {
                    g.tshirtColour = RAINBOW_PALETTE[(chromaStep + offset) % 9];
                    g.hatColour = RAINBOW_PALETTE[(chromaStep + offset + 4) % 9];
                }
                if (st.chromaBalloons) {
                    g.balloonColour = RAINBOW_PALETTE[(chromaStep + offset + 2) % 9];
                    g.umbrellaColour = RAINBOW_PALETTE[(chromaStep + offset + 6) % 9];
                }
            }
        } catch (e) {}
    }

    // 3. Tracks (Rainbow Track Wave)
    if (st.chromaTrack) {
        if (st.chromaTarget === 0) {
            // Selected Ride: Full 4-phase wave on this 1 ride (Spine, Rails, Supports)
            if (selRide) {
                // Scheme 0
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 0, value: cMain, index: 0 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 1, value: cAlt1, index: 0 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 2, value: cAlt2, index: 0 }, function() {});

                // Schemes 1, 2, 3
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 0, value: cAlt1, index: 1 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 1, value: cAlt2, index: 1 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 2, value: cAlt3, index: 1 }, function() {});

                context.executeAction('ridesetappearance', { ride: selRide.id, type: 0, value: cAlt2, index: 2 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 1, value: cAlt3, index: 2 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 2, value: cMain, index: 2 }, function() {});

                context.executeAction('ridesetappearance', { ride: selRide.id, type: 0, value: cAlt3, index: 3 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 1, value: cMain, index: 3 }, function() {});
                context.executeAction('ridesetappearance', { ride: selRide.id, type: 2, value: cAlt1, index: 3 }, function() {});

                try {
                    if (selRide.colourSchemes && selRide.colourSchemes.length > 0) {
                        selRide.colourSchemes[0] = { main: cMain, additional: cAlt1, supports: cAlt2 };
                    }
                } catch (e) {}
            }
        } else {
            // All Park Rides: Update all rides smoothly with phased rainbow colors!
            for (var rIdx = 0; rIdx < allRides.length; rIdx++) {
                var ride = allRides[rIdx];
                var rideColorMain = RAINBOW_PALETTE[(chromaStep + rIdx) % 9];
                var rideColorSub  = RAINBOW_PALETTE[(chromaStep + rIdx + 2) % 9];
                var rideColorSup  = RAINBOW_PALETTE[(chromaStep + rIdx + 4) % 9];

                // Update Scheme 0 (used by all main track pieces)
                context.executeAction('ridesetappearance', { ride: ride.id, type: 0, value: rideColorMain, index: 0 }, function() {});
                context.executeAction('ridesetappearance', { ride: ride.id, type: 1, value: rideColorSub, index: 0 }, function() {});
                context.executeAction('ridesetappearance', { ride: ride.id, type: 2, value: rideColorSup, index: 0 }, function() {});

                try {
                    if (ride.colourSchemes && ride.colourSchemes.length > 0) {
                        ride.colourSchemes[0] = { main: rideColorMain, additional: rideColorSub, supports: rideColorSup };
                    }
                } catch (e) {}
            }
        }
    }
}

function updateChromaHook() {
    var st = styleStore.get();
    if (st.enableChroma) {
        if (!chromaSubscription && typeof context !== 'undefined' && context.subscribe) {
            chromaSubscription = context.subscribe('interval.tick', onChromaTick);
        }
    } else {
        if (chromaSubscription) {
            chromaSubscription.dispose();
            chromaSubscription = null;
        }
        // Restore normal palette on stop
        if (st.chromaTarget === 0) {
            executeApplySingleRide();
        } else {
            executeApplyParkWide();
        }
    }
}

var lastWindowPos = null;

function switchTab(targetIdx) {
    updateStyleState({ activeTab: targetIdx });
    var windows = [mainThemeWindow, altWindow, chromaWindow];
    for (var i = 0; i < windows.length; i++) {
        if (windows[i] && windows[i].ua) {
            lastWindowPos = { x: windows[i].ua.x, y: windows[i].ua.y };
            windows[i].close();
        }
    }
    var targetWin = windows[targetIdx] || mainThemeWindow;
    targetWin.open();
    if (lastWindowPos && targetWin.ua) {
        targetWin.ua.x = lastWindowPos.x;
        targetWin.ua.y = lastWindowPos.y;
    }
}

function syncRideList() {
    var rList = getRides();
    var curIdx = styleStore.get().targetRideIndex;
    var newIdx = (curIdx >= 0 && curIdx < rList.length) ? curIdx : (rList.length > 0 ? 0 : -1);
    updateStyleState({
        rides: rList,
        targetRideIndex: newIdx
    });
}

function createTabRow(activeIdx) {
    return ht({
        height: '28px',
        content: [
            (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                text: 'Main Theme',
                width: '33%',
                height: '28px',
                isPressed: (activeIdx === 0),
                onClick: function() { switchTab(0); }
            }),
            (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                text: 'Alt Schemes',
                width: '34%',
                height: '28px',
                isPressed: (activeIdx === 1),
                onClick: function() { switchTab(1); }
            }),
            (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                text: 'RGB Chroma',
                width: '33%',
                height: '28px',
                isPressed: (activeIdx === 2),
                onClick: function() { switchTab(2); }
            })
        ]
    });
}

// ==================== WINDOW 1: MAIN THEME ====================
var mainThemeWindow = (function(wConfig) {
    return s(wConfig.padding) && (wConfig.padding = 5), new mt(wConfig);
})({
    title: 'Style Manager (v0.1.0-beta)',
    width: { value: 320, min: 320, max: 320 },
    height: { value: 435, min: 435, max: 435 },
    onOpen: syncRideList,
    content: [
        createTabRow(0),

        // Style Presets Groupbox
        kt({
            text: 'Style Presets',
            content: ft({
                content: [
                    Gt({ text: 'Preset Palette:' }),
                    (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                        items: STYLE_PRESETS.map(function(p) { return p.name; }),
                        selectedIndex: Mt(styleStore, function(st) {
                            for (var idx = 0; idx < STYLE_PRESETS.length; idx++) {
                                if (STYLE_PRESETS[idx].id === st.activePresetId) return idx;
                            }
                            return 0;
                        }),
                        disabled: Mt(styleStore, function(st) { return !!st.useCustomPalette; }),
                        onChange: function(idx) {
                            if (idx >= 0 && idx < STYLE_PRESETS.length) {
                                updateStyleState({ activePresetId: STYLE_PRESETS[idx].id });
                            }
                        }
                    }),
                    Gt({
                        text: Mt(styleStore, function(st) {
                            if (st.useCustomPalette) return '(Custom Palette Active)';
                            for (var idx = 0; idx < STYLE_PRESETS.length; idx++) {
                                if (STYLE_PRESETS[idx].id === st.activePresetId) return STYLE_PRESETS[idx].desc;
                            }
                            return '';
                        })
                    }),
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Use Custom Palette (3-Color)',
                        isChecked: styleStore.get().useCustomPalette,
                        onChange: function(val) { updateStyleState({ useCustomPalette: val }); }
                    }),
                    Gt({ text: 'Custom Palette Slot (Max 6):' }),
                    (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                        items: Mt(styleStore, function(st) {
                            var slots = st.customSlots || DEFAULT_SLOTS;
                            return slots.map(function(s) { return s.name; });
                        }),
                        selectedIndex: Mt(styleStore, function(st) { return st.selectedSlotIndex; }),
                        disabled: Mt(styleStore, function(st) { return !st.useCustomPalette; }),
                        onChange: function(idx) {
                            var st = styleStore.get();
                            var slots = st.customSlots || DEFAULT_SLOTS;
                            if (idx >= 0 && idx < slots.length) {
                                var s = slots[idx];
                                updateStyleState({
                                    selectedSlotIndex: idx,
                                    customMain: s.main,
                                    customAdd: s.add,
                                    customSup: s.sup
                                });
                            }
                        }
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Main (Track/Body):', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) { return st.customMain; }),
                                disabled: Mt(styleStore, function(st) { return !st.useCustomPalette; }),
                                onChange: function(val) { updateStyleState({ customMain: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Sub (Rails/Trim):', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) { return st.customAdd; }),
                                disabled: Mt(styleStore, function(st) { return !st.useCustomPalette; }),
                                onChange: function(val) { updateStyleState({ customAdd: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Support (Pillars):', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) { return st.customSup; }),
                                disabled: Mt(styleStore, function(st) { return !st.useCustomPalette; }),
                                onChange: function(val) { updateStyleState({ customSup: val }); }
                            })
                        ]
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Save Current Colors to Slot',
                        height: '24px',
                        disabled: Mt(styleStore, function(st) { return !st.useCustomPalette; }),
                        onClick: saveCurrentToSlot
                    })
                ]
            })
        }),

        // Park-Wide Batch Styling Groupbox
        kt({
            text: 'Park-Wide Batch Styling',
            content: ft({
                content: [
                    ht({
                        content: [
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'All tracks',
                                width: '50%',
                                isChecked: styleStore.get().globalTrack,
                                onChange: function(val) { updateStyleState({ globalTrack: val }); }
                            }),
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'All vehicles',
                                width: '50%',
                                isChecked: styleStore.get().globalVehicle,
                                onChange: function(val) { updateStyleState({ globalVehicle: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'All stations',
                                width: '50%',
                                isChecked: styleStore.get().globalStation,
                                onChange: function(val) { updateStyleState({ globalStation: val }); }
                            }),
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'All guests & stalls',
                                width: '50%',
                                isChecked: styleStore.get().globalGuests,
                                onChange: function(val) { updateStyleState({ globalGuests: val }); }
                            })
                        ]
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Apply to Entire Park',
                        height: '26px',
                        onClick: executeApplyParkWide
                    })
                ]
            })
        }),

        // Individual Ride Styling Groupbox
        kt({
            text: 'Individual Ride Styling',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                        items: Mt(styleStore, function(st) {
                            var rList = (st.rides && st.rides.length > 0) ? st.rides : getRides();
                            return rList.map(function(r) { return r.name; });
                        }),
                        selectedIndex: Mt(styleStore, function(st) { return st.targetRideIndex; }),
                        onChange: function(idx) { updateStyleState({ targetRideIndex: idx }); }
                    }),
                    ht({
                        content: [
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Track Color',
                                width: '50%',
                                isChecked: styleStore.get().singleTrack,
                                onChange: function(val) { updateStyleState({ singleTrack: val }); }
                            }),
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Vehicle Color',
                                width: '50%',
                                isChecked: styleStore.get().singleVehicle,
                                onChange: function(val) { updateStyleState({ singleVehicle: val }); }
                            })
                        ]
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Apply to Selected Ride',
                        height: '26px',
                        onClick: executeApplySingleRide
                    })
                ]
            })
        })
    ]
});

// ==================== WINDOW 2: ALT SCHEMES ====================
var altWindow = (function(wConfig) {
    return s(wConfig.padding) && (wConfig.padding = 5), new mt(wConfig);
})({
    title: 'Style Manager (v0.1.0-beta)',
    width: { value: 320, min: 320, max: 320 },
    height: { value: 345, min: 345, max: 345 },
    onOpen: syncRideList,
    content: [
        createTabRow(1),

        // Alternative Colour Schemes Groupbox
        kt({
            text: 'Alternative Colour Schemes (Alt Presets)',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Use Alt Presets (Enable Alternative Schemes)',
                        isChecked: styleStore.get().useAltPresets,
                        onChange: function(val) { updateStyleState({ useAltPresets: val }); }
                    }),
                    Gt({
                        text: Mt(styleStore, function(st) {
                            return st.useAltPresets ? 'Alt Schemes active for tracks.' : '(Unchecked: All Alt Schemes 1-3 sync with Main)';
                        })
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Auto Mode:', width: '30%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: AUTO_ALT_MODES,
                                width: '70%',
                                selectedIndex: Mt(styleStore, function(st) { return st.autoAltMode; }),
                                disabled: Mt(styleStore, function(st) { return !st.useAltPresets || !!st.useCustomAlt; }),
                                onChange: function(idx) { updateStyleState({ autoAltMode: idx }); }
                            })
                        ]
                    }),
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Use Custom Alt Palette (Manual Alt 1-3)',
                        isChecked: styleStore.get().useCustomAlt,
                        disabled: Mt(styleStore, function(st) { return !st.useAltPresets; }),
                        onChange: function(val) { updateStyleState({ useCustomAlt: val }); }
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Target Scheme:', width: '38%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: ['Alternative Scheme 1', 'Alternative Scheme 2', 'Alternative Scheme 3'],
                                width: '62%',
                                selectedIndex: Mt(styleStore, function(st) { return st.selectedAltIndex; }),
                                disabled: Mt(styleStore, function(st) { return !st.useAltPresets || !st.useCustomAlt; }),
                                onChange: function(idx) { updateStyleState({ selectedAltIndex: idx }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Alt Main (Track):', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) {
                                    var alts = st.customAltSchemes || DEFAULT_ALT_SCHEMES;
                                    var cur = alts[st.selectedAltIndex || 0] || alts[0];
                                    return cur.main;
                                }),
                                disabled: Mt(styleStore, function(st) { return !st.useAltPresets || !st.useCustomAlt; }),
                                onChange: function(val) { updateCustomAltColor('main', val); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Alt Sub (Rails):', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) {
                                    var alts = st.customAltSchemes || DEFAULT_ALT_SCHEMES;
                                    var cur = alts[st.selectedAltIndex || 0] || alts[0];
                                    return cur.add;
                                }),
                                disabled: Mt(styleStore, function(st) { return !st.useAltPresets || !st.useCustomAlt; }),
                                onChange: function(val) { updateCustomAltColor('add', val); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Alt Support:', width: '42%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: COLOR_NAMES,
                                width: '58%',
                                selectedIndex: Mt(styleStore, function(st) {
                                    var alts = st.customAltSchemes || DEFAULT_ALT_SCHEMES;
                                    var cur = alts[st.selectedAltIndex || 0] || alts[0];
                                    return cur.sup;
                                }),
                                disabled: Mt(styleStore, function(st) { return !st.useAltPresets || !st.useCustomAlt; }),
                                onChange: function(val) { updateCustomAltColor('sup', val); }
                            })
                        ]
                    })
                ]
            })
        }),

        // Quick Apply Box in Tab 2
        kt({
            text: 'Apply Alt Schemes to Rides',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                        items: Mt(styleStore, function(st) {
                            var rList = (st.rides && st.rides.length > 0) ? st.rides : getRides();
                            return rList.map(function(r) { return r.name; });
                        }),
                        selectedIndex: Mt(styleStore, function(st) { return st.targetRideIndex; }),
                        onChange: function(idx) { updateStyleState({ targetRideIndex: idx }); }
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Apply Alt Schemes to Selected Ride',
                        height: '26px',
                        onClick: executeApplySingleRide
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Apply Alt Schemes to Entire Park',
                        height: '26px',
                        onClick: executeApplyParkWide
                    })
                ]
            })
        })
    ]
});

// ==================== WINDOW 3: RGB CHROMA ====================
var chromaWindow = (function(wConfig) {
    return s(wConfig.padding) && (wConfig.padding = 5), new mt(wConfig);
})({
    title: 'Style Manager (v0.1.0-beta)',
    width: { value: 320, min: 320, max: 320 },
    height: { value: 380, min: 380, max: 380 },
    onOpen: syncRideList,
    content: [
        createTabRow(2),

        kt({
            text: 'Rainbow RGB Chroma FX',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Enable Real-Time Rainbow RGB Cycle',
                        isChecked: styleStore.get().enableChroma,
                        onChange: function(val) {
                            updateStyleState({ enableChroma: val });
                            updateChromaHook();
                        }
                    }),
                    Gt({
                        text: Mt(styleStore, function(st) {
                            return st.enableChroma
                                ? 'Active: Running continuous 60FPS rainbow cycle!'
                                : '(Unchecked: RGB Cycle disabled)';
                        })
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Target:', width: '30%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: ['Selected Ride Only', 'All Park Rides'],
                                width: '70%',
                                selectedIndex: Mt(styleStore, function(st) { return st.chromaTarget; }),
                                onChange: function(idx) { updateStyleState({ chromaTarget: idx }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Ride:', width: '30%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: Mt(styleStore, function(st) {
                                    var rList = (st.rides && st.rides.length > 0) ? st.rides : getRides();
                                    return rList.map(function(r) { return r.name; });
                                }),
                                width: '70%',
                                selectedIndex: Mt(styleStore, function(st) { return st.targetRideIndex; }),
                                disabled: Mt(styleStore, function(st) { return st.chromaTarget === 1; }),
                                onChange: function(idx) { updateStyleState({ targetRideIndex: idx }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Vehicles (Cars)',
                                width: '50%',
                                isChecked: styleStore.get().chromaVehicles,
                                onChange: function(val) { updateStyleState({ chromaVehicles: val }); }
                            }),
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Balloons & Umbrellas',
                                width: '50%',
                                isChecked: styleStore.get().chromaBalloons,
                                onChange: function(val) { updateStyleState({ chromaBalloons: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Guest Clothes (T-shirts)',
                                width: '50%',
                                isChecked: styleStore.get().chromaGuests,
                                onChange: function(val) { updateStyleState({ chromaGuests: val }); }
                            }),
                            (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                                text: 'Tracks (Wave)',
                                width: '50%',
                                isChecked: styleStore.get().chromaTrack,
                                onChange: function(val) { updateStyleState({ chromaTrack: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Speed:', width: '30%' }),
                            (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                                items: ['Slow (Chill Wave)', 'Normal (Classic Chroma)', 'Fast (Hyper Gamer RGB)'],
                                width: '70%',
                                selectedIndex: Mt(styleStore, function(st) { return st.chromaSpeed; }),
                                onChange: function(idx) { updateStyleState({ chromaSpeed: idx }); }
                            })
                        ]
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Stop RGB & Restore Palette',
                        height: '26px',
                        onClick: function() {
                            updateStyleState({ enableChroma: false });
                            updateChromaHook();
                        }
                    })
                ]
            })
        })
    ]
});

registerPlugin({
    name: 'StyleManager',
    version: '0.1.0',
    authors: ['ReaLFoxy', 'Google Gemini 3.8 Flash (High)'],
    type: 'local',
    licence: 'MIT',
    targetApiVersion: 111,
    main: function() {
        if (typeof ui !== 'undefined') {
            ui.registerMenuItem('Style Manager', function() {
                var curTab = styleStore.get().activeTab || 0;
                var windows = [mainThemeWindow, altWindow, chromaWindow];
                var win = windows[curTab] || mainThemeWindow;
                win.open();
            });
        }
    }
});
})();
