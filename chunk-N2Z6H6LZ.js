import{b as We}from"./chunk-Z46PBWFR.js";import{b as Xe}from"./chunk-NMILNYPA.js";import{B as Je,D as I,i as Ze}from"./chunk-X37N3GUO.js";import{$ as ze,B as pe,C as P,Ca as He,Da as Ke,E as S,Fa as Be,Gc as ge,H as Le,I as De,J as Ue,K as $e,L as ke,O as me,Q as Ne,S as Pe,T as Ve,Y as O,_ as he,a,b as m,da as v,g as j,ga as d,h as k,ha as p,i as N,ia as f,ja as V,k as Me,ka as _,n as we,p as T,ra as z,u as g,w as le,wa as qe,xa as Ge,yc as Ye,zc as Qe}from"./chunk-AT2VASLQ.js";var Ee={cart:null,loading:!1,error:null};var ve={};function h(e,n){if(ve[e]=(ve[e]||0)+1,typeof n=="function")return ye(e,(...r)=>m(a({},n(...r)),{type:e}));switch(n?n._as:"empty"){case"empty":return ye(e,()=>({type:e}));case"props":return ye(e,r=>m(a({},r),{type:e}));default:throw new Error("Unexpected config.")}}function y(){return{_as:"props",_p:void 0}}function ye(e,n){return Object.defineProperty(n,"type",{value:e,writable:!1})}function Mt(e,n){if(e==null)throw new Error(`${n} must be defined.`)}var lt="@ngrx/store/init",x=(()=>{class e extends N{constructor(){super({type:lt})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),wt=[x],pt=new d("@ngrx/store Internal Root Guard"),et=new d("@ngrx/store Internal Initial State"),Ae=new d("@ngrx/store Initial State"),mt=new d("@ngrx/store Reducer Factory"),tt=new d("@ngrx/store Internal Reducer Factory Provider"),ht=new d("@ngrx/store Initial Reducers"),Ce=new d("@ngrx/store Internal Initial Reducers");var rt=new d("@ngrx/store Internal Store Reducers");var Lt=new d("@ngrx/store Internal Store Features");var Dt=new d("@ngrx/store Feature Reducers"),nt=new d("@ngrx/store User Provided Meta Reducers"),q=new d("@ngrx/store Meta Reducers"),it=new d("@ngrx/store Internal Resolved Meta Reducers"),ot=new d("@ngrx/store User Runtime Checks Config"),st=new d("@ngrx/store Internal User Runtime Checks Config"),M=new d("@ngrx/store Internal Runtime Checks"),be=new d("@ngrx/store Check if Action types are unique"),w=new d("@ngrx/store Root Store Provider"),G=new d("@ngrx/store Feature State Provider");function Ut(e,n={}){let t=Object.keys(e),r={};for(let o=0;o<t.length;o++){let s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}let i=Object.keys(r);return function(s,c){s=s===void 0?n:s;let l=!1,C={};for(let u=0;u<i.length;u++){let R=i[u],xe=r[R],$=s[R],_e=xe($,c);C[R]=_e,l=l||_e!==$}return l?C:s}}function $t(e,n){return Object.keys(e).filter(t=>t!==n).reduce((t,r)=>Object.assign(t,{[r]:e[r]}),{})}function gt(...e){return function(n){if(e.length===0)return n;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(n))}}function Et(e,n){return Array.isArray(n)&&n.length>0&&(e=gt.apply(null,[...n,e])),(t,r)=>{let i=e(t);return(o,s)=>(o=o===void 0?r:o,i(o,s))}}function kt(e){let n=Array.isArray(e)&&e.length>0?gt(...e):t=>t;return(t,r)=>(t=n(t),(i,o)=>(i=i===void 0?r:i,t(i,o)))}var L=class extends j{},H=class extends x{},Nt="@ngrx/store/update-reducers",K=(()=>{class e extends N{get currentReducers(){return this.reducers}constructor(t,r,i,o){super(o(i,r)),this.dispatcher=t,this.initialState=r,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let r=t.reduce((i,{reducers:o,reducerFactory:s,metaReducers:c,initialState:l,key:C})=>{let u=typeof o=="function"?kt(c)(o,l):Et(s,c)(o,l);return i[C]=u,i},{});this.addReducers(r)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(r=>r.key))}addReducer(t,r){this.addReducers({[t]:r})}addReducers(t){this.reducers=a(a({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(r=>{this.reducers=$t(this.reducers,r)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Nt,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(r){return new(r||e)(p(H),p(Ae),p(ht),p(mt))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Pt=[K,{provide:L,useExisting:K},{provide:H,useExisting:x}],D=(()=>{class e extends k{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=Be(e)))(i||e)}})()}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Vt=[D],B=class extends j{},ct=(()=>{class e extends N{static{this.INIT=lt}constructor(t,r,i,o){super(o);let c=t.pipe(we(Me)).pipe(ze(r)),l={state:o},C=c.pipe(Ve(zt,l));this.stateSubscription=C.subscribe(({state:u,action:R})=>{this.next(u),i.next(R)}),this.state=We(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(r){return new(r||e)(p(x),p(L),p(D),p(Ae))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})();function zt(e={state:void 0},[n,t]){let{state:r}=e;return{state:t(r,n),action:n}}var qt=[ct,{provide:B,useExisting:ct}],F=(()=>{class e extends j{constructor(t,r,i,o){super(),this.actionsObserver=r,this.reducerManager=i,this.injector=o,this.source=t,this.state=t.state}select(t,...r){return Ht.call(null,t,...r)(this)}selectSignal(t,r){return Qe(()=>t(this.state()),r)}lift(t){let r=new e(this,this.actionsObserver,this.reducerManager);return r.operator=t,r}dispatch(t,r){if(typeof t=="function")return this.processDispatchFn(t,r);this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,r){this.reducerManager.addReducer(t,r)}removeReducer(t){this.reducerManager.removeReducer(t)}processDispatchFn(t,r){Mt(this.injector,"Store Injector");let i=r?.injector??Kt()??this.injector;return He(()=>{let o=t();Ye(()=>this.dispatch(o))},{injector:i})}static{this.\u0275fac=function(r){return new(r||e)(p(B),p(x),p(K),p(z))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Gt=[F];function Ht(e,n,...t){return function(i){let o;if(typeof e=="string"){let s=[n,...t].filter(Boolean);o=i.pipe(Pe(e,...s))}else if(typeof e=="function")o=i.pipe(g(s=>e(s,n)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe($e())}}function Kt(){try{return f(z)}catch{return}}var je="https://ngrx.io/guide/store/configuration/runtime-checks";function at(e){return e===void 0}function ut(e){return e===null}function yt(e){return Array.isArray(e)}function Bt(e){return typeof e=="string"}function Yt(e){return typeof e=="boolean"}function Qt(e){return typeof e=="number"}function Ct(e){return typeof e=="object"&&e!==null}function Zt(e){return Ct(e)&&!yt(e)}function Jt(e){if(!Zt(e))return!1;let n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}function Re(e){return typeof e=="function"}function Wt(e){return Re(e)&&e.hasOwnProperty("\u0275cmp")}function Xt(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var er=!1;function tr(){return er}function ft(e,n){return e===n}function rr(e,n,t){for(let r=0;r<e.length;r++)if(!t(e[r],n[r]))return!0;return!1}function vt(e,n=ft,t=ft){let r=null,i=null,o;function s(){r=null,i=null}function c(u=void 0){o={result:u}}function l(){o=void 0}function C(){if(o!==void 0)return o.result;if(!r)return i=e.apply(null,arguments),r=arguments,i;if(!rr(arguments,r,n))return i;let u=e.apply(null,arguments);return r=arguments,t(i,u)?i:(i=u,u)}return{memoized:C,reset:s,setResult:c,clearResult:l}}function nr(...e){return or(vt)(...e)}function ir(e,n,t,r){if(t===void 0){let o=n.map(s=>s(e));return r.memoized.apply(null,o)}let i=n.map(o=>o(e,t));return r.memoized.apply(null,[...i,t])}function or(e,n={stateFn:ir}){return function(...t){let r=t;if(Array.isArray(r[0])){let[u,...R]=r;r=[...u,...R]}else r.length===1&&sr(r[0])&&(r=cr(r[0]));let i=r.slice(0,r.length-1),o=r[r.length-1],s=i.filter(u=>u.release&&typeof u.release=="function"),c=e(function(...u){return o.apply(null,u)}),l=vt(function(u,R){return n.stateFn.apply(null,[u,i,R,c])});function C(){l.reset(),c.reset(),s.forEach(u=>u.release())}return Object.assign(l.memoized,{release:C,projector:c.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function fn(e){return nr(n=>{let t=n[e];return!tr()&&ge()&&!(e in n)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},n=>n)}function sr(e){return!!e&&typeof e=="object"&&Object.values(e).every(n=>typeof n=="function")}function cr(e){let n=Object.values(e),t=Object.keys(e),r=(...i)=>t.reduce((o,s,c)=>m(a({},o),{[s]:i[c]}),{});return[...n,r]}function ar(e){return e instanceof d?f(e):e}function Rt(e){return typeof e=="function"?e():e}function ur(e,n){return e.concat(n)}function fr(){if(f(F,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function dr(e,n){return function(t,r){let i=n.action(r)?Se(r):r,o=e(t,i);return n.state()?Se(o):o}}function Se(e){Object.freeze(e);let n=Re(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&Xt(e,t)&&(!n||t!=="caller"&&t!=="callee"&&t!=="arguments")){let r=e[t];(Ct(r)||Re(r))&&!Object.isFrozen(r)&&Se(r)}}),e}function lr(e,n){return function(t,r){if(n.action(r)){let o=Ie(r);dt(o,"action")}let i=e(t,r);if(n.state()){let o=Ie(i);dt(o,"state")}return i}}function Ie(e,n=[]){return(at(e)||ut(e))&&n.length===0?{path:["root"],value:e}:Object.keys(e).reduce((r,i)=>{if(r)return r;let o=e[i];return Wt(o)?r:at(o)||ut(o)||Qt(o)||Yt(o)||Bt(o)||yt(o)?!1:Jt(o)?Ie(o,[...n,i]):{path:[...n,i],value:o}},!1)}function dt(e,n){if(e===!1)return;let t=e.path.join("."),r=new Error(`Detected unserializable ${n} at "${t}". ${je}#strict${n}serializability`);throw r.value=e.value,r.unserializablePath=t,r}function pr(e,n){return function(t,r){if(n.action(r)&&!qe.isInAngularZone())throw new Error(`Action '${r.type}' running outside NgZone. ${je}#strictactionwithinngzone`);return e(t,r)}}function mr(e){return ge()?a({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function hr({strictActionSerializability:e,strictStateSerializability:n}){return t=>e||n?lr(t,{action:r=>e&&!Te(r),state:()=>n}):t}function gr({strictActionImmutability:e,strictStateImmutability:n}){return t=>e||n?dr(t,{action:r=>e&&!Te(r),state:()=>n}):t}function Te(e){return e.type.startsWith("@ngrx")}function Er({strictActionWithinNgZone:e}){return n=>e?pr(n,{action:t=>e&&!Te(t)}):n}function yr(e){return[{provide:st,useValue:e},{provide:ot,useFactory:vr,deps:[st]},{provide:M,deps:[ot],useFactory:mr},{provide:q,multi:!0,deps:[M],useFactory:gr},{provide:q,multi:!0,deps:[M],useFactory:hr},{provide:q,multi:!0,deps:[M],useFactory:Er}]}function Cr(){return[{provide:be,multi:!0,deps:[M],useFactory:Rr}]}function vr(e){return e}function Rr(e){if(!e.strictActionTypeUniqueness)return;let n=Object.entries(ve).filter(([,t])=>t>1).map(([t])=>t);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(t=>`"${t}"`).join(", ")}. ${je}#strictactiontypeuniqueness`)}function Sr(e={},n={}){return[{provide:pt,useFactory:fr},{provide:et,useValue:n.initialState},{provide:Ae,useFactory:Rt,deps:[et]},{provide:Ce,useValue:e},{provide:rt,useExisting:e instanceof d?e:Ce},{provide:ht,deps:[Ce,[new Ke(rt)]],useFactory:ar},{provide:nt,useValue:n.metaReducers?n.metaReducers:[]},{provide:it,deps:[q,nt],useFactory:ur},{provide:tt,useValue:n.reducerFactory?n.reducerFactory:Ut},{provide:mt,deps:[tt,it],useFactory:Et},wt,Pt,Vt,qt,Gt,yr(n.runtimeChecks),Cr()]}function Ir(){f(x),f(L),f(D),f(F),f(pt,{optional:!0}),f(be,{optional:!0})}var Fr=[{provide:w,useFactory:Ir},_(()=>f(w))];function dn(e,n){return V([...Sr(e,n),Fr])}function Ar(){f(w);let e=f(Lt),n=f(Dt),t=f(K);f(be,{optional:!0});let r=e.map((i,o)=>{let c=n.shift()[o];return m(a({},i),{reducers:c,initialState:Rt(i.initialState)})});t.addFeatures(r)}var ln=[{provide:G,useFactory:Ar},_(()=>f(G))];function E(...e){let n=e.pop(),t=e.map(r=>r.type);return{reducer:n,types:t}}function St(e,...n){let t=new Map;for(let r of n)for(let i of r.types){let o=t.get(i);if(o){let s=(c,l)=>r.reducer(o(c,l),l);t.set(i,s)}else t.set(i,r.reducer)}return function(r=e,i){let o=t.get(i.type);return o?o(r,i):r}}var Y=h("[Cart] Create Cart",y()),Q=h("[Cart] Create Cart Success",y()),Z=h("[Cart] Create Cart Failure",y()),J=h("[Cart] Add Line",y()),W=h("[Cart] Add Line Success",y()),X=h("[Cart] Add Line Failure",y()),ee=h("[Cart] Update Line",y()),te=h("[Cart] Update Line Success",y()),re=h("[Cart] Update Line Failure",y()),ne=h("[Cart] Remove Lines",y()),ie=h("[Cart] Remove Lines Success",y()),oe=h("[Cart] Remove Lines Failure",y()),se=h("[Cart] Get Cart",y()),ce=h("[Cart] Get Cart Success",y()),ae=h("[Cart] Get Cart Failure",y()),ue=h("[Cart] Clear Cart");var yn=St(Ee,E(Y,e=>m(a({},e),{loading:!0,error:null})),E(Q,(e,{cart:n})=>m(a({},e),{cart:n,loading:!1,error:null})),E(Z,(e,{error:n})=>m(a({},e),{loading:!1,error:n})),E(J,e=>m(a({},e),{loading:!0,error:null})),E(W,(e,{cart:n})=>m(a({},e),{cart:n,loading:!1,error:null})),E(X,(e,{error:n})=>m(a({},e),{loading:!1,error:n})),E(ee,e=>m(a({},e),{loading:!0,error:null})),E(te,(e,{cart:n})=>m(a({},e),{cart:n,loading:!1,error:null})),E(re,(e,{error:n})=>m(a({},e),{loading:!1,error:n})),E(ne,e=>m(a({},e),{loading:!0,error:null})),E(ie,(e,{cart:n})=>m(a({},e),{cart:n,loading:!1,error:null})),E(oe,(e,{error:n})=>m(a({},e),{loading:!1,error:n})),E(se,e=>m(a({},e),{loading:!0,error:null})),E(ce,(e,{cart:n})=>m(a({},e),{cart:n,loading:!1,error:null})),E(ae,(e,{error:n})=>m(a({},e),{loading:!1,error:n})),E(ue,()=>Ee));var jr={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},fe="__@ngrx/effects_create__";function A(e,n={}){let t=n.functional?e:e(),r=a(a({},jr),n);return Object.defineProperty(t,fe,{value:r}),t}function Tr(e){return Object.getOwnPropertyNames(e).filter(r=>e[r]&&e[r].hasOwnProperty(fe)?e[r][fe].hasOwnProperty("dispatch"):!1).map(r=>{let i=e[r][fe];return a({propertyName:r},i)})}function Or(e){return Tr(e)}function Ft(e){return Object.getPrototypeOf(e)}function xr(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function At(e){return typeof e=="function"}function _r(e){return e.filter(At)}function Mr(e,n,t){let r=Ft(e),o=!!r&&r.constructor.name!=="Object"?r.constructor.name:null,s=Or(e).map(({propertyName:c,dispatch:l,useEffectsErrorHandler:C})=>{let u=typeof e[c]=="function"?e[c]():e[c],R=C?t(u,n):u;return l===!1?R.pipe(De()):R.pipe(Ne()).pipe(g($=>({effect:e[c],notification:$,propertyName:c,sourceName:o,sourceInstance:e})))});return pe(...s)}var wr=10;function bt(e,n,t=wr){return e.pipe(S(r=>(n&&n.handleError(r),t<=1?e:bt(e,n,t-1))))}var jt=(()=>{class e extends j{constructor(t){super(),t&&(this.source=t)}lift(t){let r=new e;return r.source=this,r.operator=t,r}static{this.\u0275fac=function(r){return new(r||e)(p(D))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function b(...e){return P(n=>e.some(t=>typeof t=="string"?t===n.type:t.type===n.type))}var Lr=new d("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>bt}),Dr="@ngrx/effects/init",Ur=h(Dr);function $r(e,n){if(e.notification.kind==="N"){let t=e.notification.value;!kr(t)&&n.handleError(new Error(`Effect ${Nr(e)} dispatched an invalid action: ${Pr(t)}`))}}function kr(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function Nr({propertyName:e,sourceInstance:n,sourceName:t}){let r=typeof n[e]=="function";return!!t?`"${t}.${String(e)}${r?"()":""}"`:`"${String(e)}()"`}function Pr(e){try{return JSON.stringify(e)}catch{return e}}var Vr="ngrxOnIdentifyEffects";function zr(e){return Oe(e,Vr)}var qr="ngrxOnRunEffects";function Gr(e){return Oe(e,qr)}var Hr="ngrxOnInitEffects";function Kr(e){return Oe(e,Hr)}function Oe(e,n){return e&&n in e&&typeof e[n]=="function"}var Tt=(()=>{class e extends k{constructor(t,r){super(),this.errorHandler=t,this.effectsErrorHandler=r}addEffects(t){this.next(t)}toActions(){return this.pipe(me(t=>xr(t)?Ft(t):t),le(t=>t.pipe(me(Br))),le(t=>{let r=t.pipe(ke(o=>Yr(this.errorHandler,this.effectsErrorHandler)(o)),g(o=>($r(o,this.errorHandler),o.notification)),P(o=>o.kind==="N"&&o.value!=null),Ue()),i=t.pipe(Le(1),P(Kr),g(o=>o.ngrxOnInitEffects()));return pe(r,i)}))}static{this.\u0275fac=function(r){return new(r||e)(p(Ge),p(Lr))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Br(e){return zr(e)?e.ngrxOnIdentifyEffects():""}function Yr(e,n){return t=>{let r=Mr(t,e,n);return Gr(t)?t.ngrxOnRunEffects(r):r}}var Qr=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,r){this.effectSources=t,this.store=r,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(r){return new(r||e)(p(Tt),p(F))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function _n(...e){let n=e.flat(),t=_r(n);return V([t,_(()=>{f(w),f(G,{optional:!0});let r=f(Qr),i=f(Tt),o=!r.isStarted;o&&r.start();for(let s of n){let c=At(s)?f(s):s;i.addEffects(c)}o&&f(F).dispatch(Ur())})])}var U=I`
  fragment CartLineFields on CartLine {
    id
    quantity
    merchandise {
      ... on ProductVariant {
        id
        title
        priceV2 {
          amount
          currencyCode
        }
        image {
          url
        }
        product {
          title
        }
      }
    }
  }
`,Zr=I`
  mutation CreateCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              ...CartLineFields
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ${U}
`,Jr=I`
  mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              ...CartLineFields
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ${U}
`,Wr=I`
  mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              ...CartLineFields
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ${U}
`,Xr=I`
  mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        lines(first: 20) {
          edges {
            node {
              ...CartLineFields
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ${U}
`,en=I`
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      lines(first: 20) {
        edges {
          node {
            ...CartLineFields
          }
        }
      }
    }
  }
  ${U}
`,de=class e{constructor(n,t){this.environment=n;this.apollo=t;this.endpoint=`${this.environment.storeUrl}/api/${this.environment.apiVersion}/graphql.json`,this.headers=new Ze({"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":this.environment.storeFrontToken})}endpoint;headers;createCart(n,t=1){return this.apollo.mutate({mutation:Zr,variables:{input:{lines:[{merchandiseId:n,quantity:t}]}}}).pipe(g(r=>this.mapCartResponse(r,"cartCreate")))}addLine(n,t,r=1){return this.apollo.mutate({mutation:Jr,variables:{cartId:n,lines:[{merchandiseId:t,quantity:r}]}}).pipe(g(i=>this.mapCartResponse(i,"cartLinesAdd")))}updateLine(n,t,r){return this.apollo.mutate({mutation:Wr,variables:{cartId:n,lines:[{id:t,quantity:r}]}}).pipe(g(i=>this.mapCartResponse(i,"cartLinesUpdate")))}removeLines(n,t){return this.apollo.mutate({mutation:Xr,variables:{cartId:n,lineIds:t}}).pipe(g(r=>this.mapCartResponse(r,"cartLinesRemove")))}getCart(n){return this.apollo.query({query:en,variables:{cartId:n}}).pipe(g(t=>this.mapCartObject(t.data?.cart)))}mapCartResponse(n,t){if(n?.errors?.length)throw new Error(n.errors.map(i=>i.message).join(", "));let r=n?.data?.[t];if(!r)throw new Error(`Missing ${t} response from Shopify.`);if(r.userErrors?.length)throw new Error(r.userErrors.map(i=>i.message).join(", "));return this.mapCartObject(r.cart)}mapCartObject(n){let t=this.mapCartLines(n?.lines);return{id:n?.id,checkoutUrl:n?.checkoutUrl,totalQuantity:t.reduce((r,i)=>r+i.quantity,0),lines:t}}mapCartLines(n){return(n?.edges||[]).map(r=>{let i=r?.node||{},o=i.merchandise||{},s=o.priceV2?.amount||"0.00",c=o.priceV2?.currencyCode||"",l=o.product?.title||o.title||"Product",C=Number.parseFloat(s)*i.quantity;return{id:i.id,merchandiseId:o.id,title:l,quantity:i.quantity,price:`${s} ${c}`,imageUrl:o.image?.url,subtotal:C}})}static \u0275fac=function(t){return new(t||e)(p(Xe),p(Je))};static \u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ot=class e{actions$=f(jt);cartService=f(de);createCart$=A(()=>this.actions$.pipe(b(Y),O(({variantId:n,quantity:t})=>this.cartService.createCart(n,t).pipe(he(r=>{r.id&&localStorage.setItem("cartId",r.id)}),g(r=>Q({cart:r})),S(r=>T(Z({error:r.message})))))));addLine$=A(()=>this.actions$.pipe(b(J),O(({cartId:n,variantId:t,quantity:r})=>this.cartService.addLine(n,t,r).pipe(g(i=>W({cart:i})),S(i=>T(X({error:i.message})))))));updateLine$=A(()=>this.actions$.pipe(b(ee),O(({cartId:n,lineId:t,quantity:r})=>this.cartService.updateLine(n,t,r).pipe(g(i=>te({cart:i})),S(i=>T(re({error:i.message})))))));removeLines$=A(()=>this.actions$.pipe(b(ne),O(({cartId:n,lineIds:t})=>this.cartService.removeLines(n,t).pipe(g(r=>ie({cart:r})),S(r=>T(oe({error:r.message})))))));getCart$=A(()=>this.actions$.pipe(b(se),O(({cartId:n})=>this.cartService.getCart(n).pipe(g(t=>ce({cart:t})),S(t=>T(ae({error:t.message})))))));clearCart$=A(()=>this.actions$.pipe(b(ue),he(()=>{localStorage.removeItem("cartId")})),{dispatch:!1});static \u0275fac=function(t){return new(t||e)};static \u0275prov=v({token:e,factory:e.\u0275fac})};export{F as a,nr as b,fn as c,dn as d,Y as e,J as f,ee as g,ne as h,se as i,ue as j,yn as k,_n as l,de as m,Ot as n};
