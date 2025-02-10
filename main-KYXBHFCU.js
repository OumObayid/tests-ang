import{$ as hm,$a as ze,$b as Es,$c as ws,$d as Ul,A as gl,Aa as mb,Ab as Db,Ac as ni,Ad as sy,B as Jt,Ba as ue,Bb as kb,Bc as Al,Bd as ay,C as dm,Ca as _m,Cb as bs,Cc as q,Cd as Ml,D as B_,Da as oe,Db as g,Dc as ne,Dd as Ol,E as hs,Ea as Y,Eb as se,Ec as tt,Ed as G,F as q_,Fa as hb,Fb as wl,Fc as s,Fd as ly,G as z_,Ga as Cn,Gb as Mb,Gc as ge,Gd as Ss,H as $_,Ha as fb,Hb as Vr,Hc as $,Hd as cy,I as st,Ia as bl,Ib as ys,Ic as kn,Id as Nl,J as fs,Ja as ft,Jb as Ob,Jc as qb,Jd as uy,K as Dt,Ka as gb,Kb as Je,Kc as ye,Kd as Sm,L as vl,La as Yn,Lb as z,Lc as Ee,Ld as Vl,M as G_,Ma as Mt,Mb as Tl,Mc as Ce,Md as Fl,N as H_,Na as bm,Nb as xl,Nc as hn,Nd as Am,O as W_,Oa as wn,Ob as Nb,Oc as zb,P as K_,Pa as H,Pb as Vb,Pc as Mn,Q as Q_,Qa as W,Qb as xm,Qc as dt,R as Ti,Ra as S,Rb as k,Rc as On,S as J_,Sa as A,Sb as mn,Sc as Yi,T as X_,Ta as Ht,Tb as et,Tc as Pl,Td as dy,U as un,Ua as vb,Ub as Fb,Uc as $b,Ud as As,V as Y_,Va as Wt,Vb as Bt,Vc as ii,Vd as Ll,W as pm,Wa as ym,Wb as Lb,Wc as Cs,X as Qe,Xa as _b,Xb as N,Xc as Gb,Y as Z_,Ya as yl,Yb as Il,Yc as Rl,Z as mm,Za as El,Zb as Sl,Zc as Hb,_ as eb,_a as gt,_b as Im,_c as Br,_d as py,a as K,aa as tb,ab as gs,ac as ei,ad as Wb,b as we,ba as nb,bb,bc as Kt,bd as Kb,be as my,c as O_,ca as Rr,cb as kr,cc as I,cd as Qb,d as L,da as Rn,db as yb,dc as Xt,dd as Zi,e as N_,ea as ib,eb as Em,ec as vt,ed as fn,f as V_,fa as fm,fb as Eb,fc as Fr,fd as Nn,g as om,ga as rb,gb as Dn,gc as qt,gd as Ts,ge as hy,h as rt,ha as ob,hb as vs,hc as We,hd as Jb,i as sm,ia as sb,ib as Cm,ic as Lr,id as qr,j as am,ja as gm,jb as wm,jc as Yt,jd as Xb,k as ot,ka as ab,kb as Mr,kc as Zt,kd as Yb,l as Rt,la as Xn,lb as Cb,lc as l,ld as at,m as lm,ma as lb,mb as _s,mc as a,md as Zb,n as F_,na as cb,nb as Or,nc as y,nd as xs,o as Pr,oa as vm,ob as Nr,oc as xi,od as ey,p as cn,pa as kt,pb as wb,pc as Ii,pd as ty,q as cm,qa as Dr,qb as Tb,qc as Ub,qd as Is,r as Xi,ra as ht,rb as xb,rc as ee,rd as Dl,s as um,sa as ub,sb as Ib,sc as jb,sd as zr,t as He,ta as db,tb as Sb,tc as C,td as Xe,u as pe,ua as pb,ub as Ab,uc as ce,ud as te,v as ms,va as _l,vb as Pb,vc as Ur,vd as ny,w as L_,wa as Le,wb as Zn,wc as jr,wd as iy,x as U_,xa as dn,xb as Tm,xc as Bb,xd as ry,y as j_,ya as me,yb as Cl,yc as Si,yd as oy,z as ve,za as pn,zb as Rb,zc as ti,zd as kl}from"./chunk-FF6SC3YY.js";var Rs=class{},Ds=class{},Vn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),o=t.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let c=this.headers.get(t);if(!c)return;c=c.filter(d=>o.indexOf(d)===-1),c.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Rm=class{encodeKey(e){return fy(e)}encodeValue(e){return fy(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function EI(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[c,d]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],p=t.get(c)||[];p.push(d),t.set(c,p)}),t}var CI=/%(\d[a-f0-9])/gi,wI={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fy(n){return encodeURIComponent(n).replace(CI,(e,t)=>wI[t]??e)}function jl(n){return`${n}`}var Pi=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Rm,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=EI(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(jl):[jl(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(o=>{t.push({param:i,value:o,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(jl(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(jl(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Dm=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function TI(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function gy(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function vy(n){return typeof Blob<"u"&&n instanceof Blob}function _y(n){return typeof FormData<"u"&&n instanceof FormData}function xI(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Ps=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,i,r){this.url=t,this.method=e.toUpperCase();let o;if(TI(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Vn,this.context??=new Dm,!this.params)this.params=new Pi,this.urlWithParams=t;else{let c=this.params.toString();if(c.length===0)this.urlWithParams=t;else{let d=t.indexOf("?"),p=d===-1?"?":d<t.length-1?"&":"";this.urlWithParams=t+p+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||gy(this.body)||vy(this.body)||_y(this.body)||xI(this.body)?this.body:this.body instanceof Pi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_y(this.body)?null:vy(this.body)?this.body.type||null:gy(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Pi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,o=e.transferCache??this.transferCache,c=e.body!==void 0?e.body:this.body,d=e.withCredentials??this.withCredentials,p=e.reportProgress??this.reportProgress,h=e.headers||this.headers,v=e.params||this.params,b=e.context??this.context;return e.setHeaders!==void 0&&(h=Object.keys(e.setHeaders).reduce((T,O)=>T.set(O,e.setHeaders[O]),h)),e.setParams&&(v=Object.keys(e.setParams).reduce((T,O)=>T.set(O,e.setParams[O]),v)),new n(t,i,c,{params:v,headers:h,context:b,reportProgress:p,responseType:r,withCredentials:d,transferCache:o})}},Ri=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Ri||{}),ks=class{headers;status;statusText;url;ok;type;constructor(e,t=200,i="OK"){this.headers=e.headers||new Vn,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},ql=class n extends ks{constructor(e={}){super(e)}type=Ri.ResponseHeader;clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},er=class n extends ks{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Ri.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Ai=class extends ks{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Py=200,II=204;function Pm(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var en=(()=>{class n{handler;constructor(t){this.handler=t}request(t,i,r={}){let o;if(t instanceof Ps)o=t;else{let p;r.headers instanceof Vn?p=r.headers:p=new Vn(r.headers);let h;r.params&&(r.params instanceof Pi?h=r.params:h=new Pi({fromObject:r.params})),o=new Ps(t,i,r.body!==void 0?r.body:null,{headers:p,context:r.context,params:h,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let c=pe(o).pipe(un(p=>this.handler.handle(p)));if(t instanceof Ps||r.observe==="events")return c;let d=c.pipe(Dt(p=>p instanceof er));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return d.pipe(ve(p=>{if(p.body!==null&&!(p.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return p.body}));case"blob":return d.pipe(ve(p=>{if(p.body!==null&&!(p.body instanceof Blob))throw new Error("Response is not a Blob.");return p.body}));case"text":return d.pipe(ve(p=>{if(p.body!==null&&typeof p.body!="string")throw new Error("Response is not a string.");return p.body}));case"json":default:return d.pipe(ve(p=>p.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new Pi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,Pm(r,i))}post(t,i,r={}){return this.request("POST",t,Pm(r,i))}put(t,i,r={}){return this.request("PUT",t,Pm(r,i))}static \u0275fac=function(i){return new(i||n)(oe(Rs))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),SI=/^\)\]\}',?\n/,AI="X-Request-URL";function by(n){if(n.url)return n.url;let e=AI.toLocaleLowerCase();return n.headers.get(e)}var km=(()=>{class n{fetchImpl=Y(Mm,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=Y(ze);handle(t){return new rt(i=>{let r=new AbortController;return this.doRequest(t,r.signal,i).then(Om,o=>i.error(new Ai({error:o}))),()=>r.abort()})}doRequest(t,i,r){return L(this,null,function*(){let o=this.createRequestInit(t),c;try{let O=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,K({signal:i},o)));PI(O),r.next({type:Ri.Sent}),c=yield O}catch(O){r.error(new Ai({error:O,status:O.status??0,statusText:O.statusText,url:t.urlWithParams,headers:O.headers}));return}let d=new Vn(c.headers),p=c.statusText,h=by(c)??t.urlWithParams,v=c.status,b=null;if(t.reportProgress&&r.next(new ql({headers:d,status:v,statusText:p,url:h})),c.body){let O=c.headers.get("content-length"),j=[],U=c.body.getReader(),F=0,le,fe,ae=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>L(this,null,function*(){for(;;){let{done:be,value:he}=yield U.read();if(be)break;if(j.push(he),F+=he.length,t.reportProgress){fe=t.responseType==="text"?(fe??"")+(le??=new TextDecoder).decode(he,{stream:!0}):void 0;let R=()=>r.next({type:Ri.DownloadProgress,total:O?+O:void 0,loaded:F,partialText:fe});ae?ae.run(R):R()}}}));let J=this.concatChunks(j,F);try{let be=c.headers.get("Content-Type")??"";b=this.parseBody(t,J,be)}catch(be){r.error(new Ai({error:be,headers:new Vn(c.headers),status:c.status,statusText:c.statusText,url:by(c)??t.urlWithParams}));return}}v===0&&(v=b?Py:0),v>=200&&v<300?(r.next(new er({body:b,headers:d,status:v,statusText:p,url:h})),r.complete()):r.error(new Ai({error:b,headers:d,status:v,statusText:p,url:h}))})}parseBody(t,i,r){switch(t.responseType){case"json":let o=new TextDecoder().decode(i).replace(SI,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(t){let i={},r=t.withCredentials?"include":void 0;if(t.headers.forEach((o,c)=>i[o]=c.join(",")),t.headers.has("Accept")||(i.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let o=t.detectContentTypeHeader();o!==null&&(i["Content-Type"]=o)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:r}}concatChunks(t,i){let r=new Uint8Array(i),o=0;for(let c of t)r.set(c,o),o+=c.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Mm=class{};function Om(){}function PI(n){n.then(Om,Om)}function RI(n,e){return e(n)}function DI(n,e,t){return(i,r)=>Mt(t,()=>e(i,o=>n(o,r)))}var Ry=new ue(""),Dy=new ue(""),kI=new ue("",{providedIn:"root",factory:()=>!0});var yy=(()=>{class n extends Rs{backend;injector;chain=null;pendingTasks=Y(yl);contributeToStability=Y(kI);constructor(t,i){super(),this.backend=t,this.injector=i}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Ry),...this.injector.get(Dy,[])]));this.chain=i.reduceRight((r,o)=>DI(r,o,this.injector),RI)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(Rr(()=>this.pendingTasks.remove(i)))}else return this.chain(t,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||n)(oe(Ds),oe(Yn))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();var MI=/^\)\]\}',?\n/;function OI(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Ey=(()=>{class n{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Le(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?He(i.\u0275loadImpl()):pe(null)).pipe(kt(()=>new rt(o=>{let c=i.build();if(c.open(t.method,t.urlWithParams),t.withCredentials&&(c.withCredentials=!0),t.headers.forEach((U,F)=>c.setRequestHeader(U,F.join(","))),t.headers.has("Accept")||c.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let U=t.detectContentTypeHeader();U!==null&&c.setRequestHeader("Content-Type",U)}if(t.responseType){let U=t.responseType.toLowerCase();c.responseType=U!=="json"?U:"text"}let d=t.serializeBody(),p=null,h=()=>{if(p!==null)return p;let U=c.statusText||"OK",F=new Vn(c.getAllResponseHeaders()),le=OI(c)||t.url;return p=new ql({headers:F,status:c.status,statusText:U,url:le}),p},v=()=>{let{headers:U,status:F,statusText:le,url:fe}=h(),ae=null;F!==II&&(ae=typeof c.response>"u"?c.responseText:c.response),F===0&&(F=ae?Py:0);let J=F>=200&&F<300;if(t.responseType==="json"&&typeof ae=="string"){let be=ae;ae=ae.replace(MI,"");try{ae=ae!==""?JSON.parse(ae):null}catch(he){ae=be,J&&(J=!1,ae={error:he,text:ae})}}J?(o.next(new er({body:ae,headers:U,status:F,statusText:le,url:fe||void 0})),o.complete()):o.error(new Ai({error:ae,headers:U,status:F,statusText:le,url:fe||void 0}))},b=U=>{let{url:F}=h(),le=new Ai({error:U,status:c.status||0,statusText:c.statusText||"Unknown Error",url:F||void 0});o.error(le)},T=!1,O=U=>{T||(o.next(h()),T=!0);let F={type:Ri.DownloadProgress,loaded:U.loaded};U.lengthComputable&&(F.total=U.total),t.responseType==="text"&&c.responseText&&(F.partialText=c.responseText),o.next(F)},j=U=>{let F={type:Ri.UploadProgress,loaded:U.loaded};U.lengthComputable&&(F.total=U.total),o.next(F)};return c.addEventListener("load",v),c.addEventListener("error",b),c.addEventListener("timeout",b),c.addEventListener("abort",b),t.reportProgress&&(c.addEventListener("progress",O),d!==null&&c.upload&&c.upload.addEventListener("progress",j)),c.send(d),o.next({type:Ri.Sent}),()=>{c.removeEventListener("error",b),c.removeEventListener("abort",b),c.removeEventListener("load",v),c.removeEventListener("timeout",b),t.reportProgress&&(c.removeEventListener("progress",O),d!==null&&c.upload&&c.upload.removeEventListener("progress",j)),c.readyState!==c.DONE&&c.abort()}})))}static \u0275fac=function(i){return new(i||n)(oe(Nl))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),ky=new ue(""),NI="XSRF-TOKEN",VI=new ue("",{providedIn:"root",factory:()=>NI}),FI="X-XSRF-TOKEN",LI=new ue("",{providedIn:"root",factory:()=>FI}),zl=class{},UI=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,i,r){this.doc=t,this.platform=i,this.cookieName=r}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Dl(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||n)(oe(at),oe(Dn),oe(VI))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();function jI(n,e){let t=n.url.toLowerCase();if(!Y(ky)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let i=Y(zl).getToken(),r=Y(LI);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),e(n)}var My=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(My||{});function BI(n,e){return{\u0275kind:n,\u0275providers:e}}function Oy(...n){let e=[en,Ey,yy,{provide:Rs,useExisting:yy},{provide:Ds,useFactory:()=>Y(km,{optional:!0})??Y(Ey)},{provide:Ry,useValue:jI,multi:!0},{provide:ky,useValue:!0},{provide:zl,useClass:UI}];for(let t of n)e.push(...t.\u0275providers);return ft(e)}function Ny(){return BI(My.Fetch,[km,{provide:Ds,useExisting:km}])}var qI=new ue(""),Cy="b",wy="h",Ty="s",xy="st",Iy="u",Sy="rt",Bl=new ue(""),zI=["GET","HEAD"];function $I(n,e){let O=Y(Bl),{isCacheActive:t}=O,i=O_(O,["isCacheActive"]),{transferCache:r,method:o}=n;if(!t||r===!1||o==="POST"&&!i.includePostRequests&&!r||o!=="POST"&&!zI.includes(o)||!i.includeRequestsWithAuthHeaders&&GI(n)||i.filter?.(n)===!1)return e(n);let c=Y(wm),d=Y(qI,{optional:!0}),p=Ss(Y(Dn));if(d&&!p)throw new Le(2803,!1);let h=p&&d?QI(n.url,d):n.url,v=WI(n,h),b=c.get(v,null),T=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(T=r.includeHeaders),b){let{[Cy]:j,[Sy]:U,[wy]:F,[Ty]:le,[xy]:fe,[Iy]:ae}=b,J=j;switch(U){case"arraybuffer":J=new TextEncoder().encode(j).buffer;break;case"blob":J=new Blob([j]);break}let be=new Vn(F);return pe(new er({body:J,headers:be,status:le,statusText:fe,url:ae}))}return e(n).pipe(ht(j=>{j instanceof er&&p&&c.set(v,{[Cy]:j.body,[wy]:HI(j.headers,T),[Ty]:j.status,[xy]:j.statusText,[Iy]:h,[Sy]:n.responseType})}))}function GI(n){return n.headers.has("authorization")||n.headers.has("proxy-authorization")}function HI(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function Ay(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function WI(n,e){let{params:t,method:i,responseType:r}=n,o=Ay(t),c=n.serializeBody();c instanceof URLSearchParams?c=Ay(c):typeof c!="string"&&(c="");let d=[i,r,e,c,o].join("|"),p=KI(d);return p}function KI(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Vy(n){return[{provide:Bl,useFactory:()=>(Mr("NgHttpTransferCache"),K({isCacheActive:!0},n))},{provide:Dy,useValue:$I,multi:!0,deps:[wm,Bl]},{provide:Es,multi:!0,useFactory:()=>{let e=Y(ei),t=Y(Bl);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}function QI(n,e){let t=new URL(n,"resolve://").origin,i=e[t];return i?n.replace(t,i):n}var Vm=class extends Yb{supportsDOMEvents=!0},Fm=class n extends Vm{static makeCurrent(){Xb(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=JI();return t==null?null:XI(t)}resetBaseElement(){Ms=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Dl(document.cookie,e)}},Ms=null;function JI(){return Ms=Ms||document.querySelector("base"),Ms?Ms.getAttribute("href"):null}function XI(n){return new URL(n,document.baseURI).pathname}var YI=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Lm=new ue(""),By=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Le(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(oe(Lm),oe(ze))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),$l=class{_doc;constructor(e){this._doc=e}manager},Um="ng-app-id";function Fy(n){for(let e of n)e.remove()}function Ly(n,e){let t=e.createElement("style");return t.textContent=n,t}function ZI(n,e,t){let i=n.head?.querySelectorAll(`style[${Um}="${e}"]`);if(i)for(let r of i)r.textContent&&(r.removeAttribute(Um),t.set(r.textContent,{usage:0,elements:[r]}))}function jm(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var qy=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Ss(o),ZI(t,i,this.inline),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Ly);i?.forEach(r=>this.addUsage(r,this.external,jm))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(c=>this.addElement(c,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Fy(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Fy(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Ly(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,jm(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Um,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(oe(at),oe(Em),oe(Cm,8),oe(Dn))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Nm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qm=/%COMP%/g,zy="%COMP%",eS=`_nghost-${zy}`,tS=`_ngcontent-${zy}`,nS=!0,iS=new ue("",{providedIn:"root",factory:()=>nS});function rS(n){return tS.replace(qm,n)}function oS(n){return eS.replace(qm,n)}function $y(n,e){return e.map(t=>t.replace(qm,n))}var Gr=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,o,c,d,p,h=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=c,this.platformId=d,this.ngZone=p,this.nonce=h,this.platformIsServer=Ss(d),this.defaultRenderer=new Os(t,c,p,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===_s.ShadowDom&&(i=we(K({},i),{encapsulation:_s.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Gl?r.applyToHost(t):r instanceof Ns&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let c=this.doc,d=this.ngZone,p=this.eventManager,h=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,b=this.platformIsServer;switch(i.encapsulation){case _s.Emulated:o=new Gl(p,h,i,this.appId,v,c,d,b);break;case _s.ShadowDom:return new Bm(p,h,t,i,c,d,this.nonce,b);default:o=new Ns(p,h,i,v,c,d,b);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(oe(By),oe(qy),oe(Em),oe(iS),oe(at),oe(Dn),oe(ze),oe(Cm))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Os=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Nm[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Uy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Uy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Le(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Nm[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Nm[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(bs.DashCase|bs.Important)?e.style.setProperty(t,i,r&bs.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&bs.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=qr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Uy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Bm=class extends Os{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,o,c,d,p){super(e,o,c,p),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let h=$y(r.id,r.styles);for(let b of h){let T=document.createElement("style");d&&T.setAttribute("nonce",d),T.textContent=b,this.shadowRoot.appendChild(T)}let v=r.getExternalStyles?.();if(v)for(let b of v){let T=jm(b,o);d&&T.setAttribute("nonce",d),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ns=class extends Os{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,c,d,p){super(e,o,c,d),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=p?$y(p,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Gl=class extends Ns{contentAttr;hostAttr;constructor(e,t,i,r,o,c,d,p){let h=r+"-"+i.id;super(e,t,i,o,c,d,p,h),this.contentAttr=rS(h),this.hostAttr=oS(h)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},sS=(()=>{class n extends $l{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(oe(at))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),jy=["alt","control","meta","shift"],aS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},lS={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},cS=(()=>{class n extends $l{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let o=n.parseEventName(i),c=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qr().onAndCancel(t,o.domEventName,c))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),c="",d=i.indexOf("code");if(d>-1&&(i.splice(d,1),c="code."),jy.forEach(h=>{let v=i.indexOf(h);v>-1&&(i.splice(v,1),c+=h+".")}),c+=o,i.length!=0||o.length===0)return null;let p={};return p.domEventName=r,p.fullKey=c,p}static matchEventFullKeyCode(t,i){let r=aS[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),jy.forEach(c=>{if(c!==r){let d=lS[c];d(t)&&(o+=c+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(oe(at))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();function Gy(n,e){return Wb(K({rootComponent:n},uS(e)))}function uS(n){return{appProviders:[...fS,...n?.providers??[]],platformProviders:hS}}function dS(){Fm.makeCurrent()}function pS(){return new gs}function mS(){return yb(document),document}var hS=[{provide:Dn,useValue:ly},{provide:Eb,useValue:dS,multi:!0},{provide:at,useFactory:mS,deps:[]}];var fS=[{provide:gb,useValue:"root"},{provide:gs,useFactory:pS,deps:[]},{provide:Lm,useClass:sS,multi:!0,deps:[at,ze,Dn]},{provide:Lm,useClass:cS,multi:!0,deps:[at]},Gr,qy,By,{provide:Vr,useExisting:Gr},{provide:Nl,useClass:YI,deps:[]},[]];var Hy=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(oe(at))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=oe(gS),r},providedIn:"root"})}return n})(),gS=(()=>{class n extends Vs{_doc;constructor(t){super(),this._doc=t}sanitize(t,i){if(i==null)return null;switch(t){case Zn.NONE:return i;case Zn.HTML:return Nr(i,"HTML")?Or(i):Pb(this._doc,String(i)).toString();case Zn.STYLE:return Nr(i,"Style")?Or(i):i;case Zn.SCRIPT:if(Nr(i,"Script"))return Or(i);throw new Le(5200,!1);case Zn.URL:return Nr(i,"URL")?Or(i):Ab(String(i));case Zn.RESOURCE_URL:if(Nr(i,"ResourceURL"))return Or(i);throw new Le(5201,!1);default:throw new Le(5202,!1)}}bypassSecurityTrustHtml(t){return wb(t)}bypassSecurityTrustStyle(t){return Tb(t)}bypassSecurityTrustScript(t){return xb(t)}bypassSecurityTrustUrl(t){return Ib(t)}bypassSecurityTrustResourceUrl(t){return Sb(t)}static \u0275fac=function(i){return new(i||n)(oe(at))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hl=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n}(Hl||{});function vS(n,e=[],t={}){return{\u0275kind:n,\u0275providers:e}}function Wy(){return vS(Hl.EventReplay,Kb())}function Ky(...n){let e=[],t=new Set,i=t.has(Hl.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of n)t.add(o),r.length&&e.push(r);return ft([[],Qb(),t.has(Hl.NoHttpTransferCache)||i?[]:Vy({}),e])}var Re="primary",Xs=Symbol("RouteTitle"),Km=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Xr(n){return new Km(n)}function _S(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let o=0;o<i.length;o++){let c=i[o],d=n[o];if(c[0]===":")r[c.substring(1)]=d;else if(c!==d.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function bS(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Fn(n[t],e[t]))return!1;return!0}function Fn(n,e){let t=n?Qm(n):void 0,i=e?Qm(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!oE(n[r],e[r]))return!1;return!0}function Qm(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function oE(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function sE(n){return n.length>0?n[n.length-1]:null}function ki(n){return L_(n)?n:Sl(n)?He(Promise.resolve(n)):pe(n)}var yS={exact:lE,subset:cE},aE={exact:ES,subset:CS,ignored:()=>!0};function Qy(n,e,t){return yS[t.paths](n.root,e.root,t.matrixParams)&&aE[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function ES(n,e){return Fn(n,e)}function lE(n,e,t){if(!nr(n.segments,e.segments)||!Ql(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!lE(n.children[i],e.children[i],t))return!1;return!0}function CS(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>oE(n[t],e[t]))}function cE(n,e,t){return uE(n,e,e.segments,t)}function uE(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!nr(r,t)||e.hasChildren()||!Ql(r,t,i))}else if(n.segments.length===t.length){if(!nr(n.segments,t)||!Ql(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!cE(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!nr(n.segments,r)||!Ql(n.segments,r,i)||!n.children[Re]?!1:uE(n.children[Re],e,o,i)}}function Ql(n,e,t){return e.every((i,r)=>aE[t](n[r].parameters,i.parameters))}var oi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new Be([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){return xS.serialize(this)}},Be=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Jl(this)}},tr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Xr(this.parameters),this._parameterMap}toString(){return pE(this)}};function wS(n,e){return nr(n,e)&&n.every((t,i)=>Fn(t.parameters,e[i].parameters))}function nr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function TS(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Re&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Re&&(t=t.concat(e(r,i)))}),t}var Ys=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:()=>new Yr,providedIn:"root"})}return n})(),Yr=class{parse(e){let t=new Xm(e);return new oi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Fs(e.root,!0)}`,i=AS(e.queryParams),r=typeof e.fragment=="string"?`#${IS(e.fragment)}`:"";return`${t}${i}${r}`}},xS=new Yr;function Jl(n){return n.segments.map(e=>pE(e)).join("/")}function Fs(n,e){if(!n.hasChildren())return Jl(n);if(e){let t=n.children[Re]?Fs(n.children[Re],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==Re&&i.push(`${r}:${Fs(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=TS(n,(i,r)=>r===Re?[Fs(n.children[Re],!1)]:[`${r}:${Fs(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Re]!=null?`${Jl(n)}/${t[0]}`:`${Jl(n)}/(${t.join("//")})`}}function dE(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wl(n){return dE(n).replace(/%3B/gi,";")}function IS(n){return encodeURI(n)}function Jm(n){return dE(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xl(n){return decodeURIComponent(n)}function Jy(n){return Xl(n.replace(/\+/g,"%20"))}function pE(n){return`${Jm(n.path)}${SS(n.parameters)}`}function SS(n){return Object.entries(n).map(([e,t])=>`;${Jm(e)}=${Jm(t)}`).join("")}function AS(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Wl(t)}=${Wl(r)}`).join("&"):`${Wl(t)}=${Wl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var PS=/^[^\/()?;#]+/;function $m(n){let e=n.match(PS);return e?e[0]:""}var RS=/^[^\/()?;=#]+/;function DS(n){let e=n.match(RS);return e?e[0]:""}var kS=/^[^=?&#]+/;function MS(n){let e=n.match(kS);return e?e[0]:""}var OS=/^[^&#]+/;function NS(n){let e=n.match(OS);return e?e[0]:""}var Xm=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Be([],{}):new Be([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Re]=new Be(e,t)),i}parseSegment(){let e=$m(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Le(4009,!1);return this.capture(e),new tr(Xl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=DS(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=$m(this.remaining);r&&(i=r,this.capture(i))}e[Xl(t)]=Xl(i)}parseQueryParam(e){let t=MS(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let c=NS(this.remaining);c&&(i=c,this.capture(i))}let r=Jy(t),o=Jy(i);if(e.hasOwnProperty(r)){let c=e[r];Array.isArray(c)||(c=[c],e[r]=c),c.push(o)}else e[r]=o}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=$m(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Le(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=Re);let c=this.parseChildren();t[o]=Object.keys(c).length===1?c[Re]:new Be([],c),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Le(4011,!1)}};function mE(n){return n.segments.length>0?new Be([],{[Re]:n}):n}function hE(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=hE(r);if(i===Re&&o.segments.length===0&&o.hasChildren())for(let[c,d]of Object.entries(o.children))e[c]=d;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new Be(n.segments,e);return VS(t)}function VS(n){if(n.numberOfChildren===1&&n.children[Re]){let e=n.children[Re];return new Be(n.segments.concat(e.segments),e.children)}return n}function ir(n){return n instanceof oi}function FS(n,e,t=null,i=null){let r=fE(n);return gE(r,e,t,i)}function fE(n){let e;function t(o){let c={};for(let p of o.children){let h=t(p);c[p.outlet]=h}let d=new Be(o.url,c);return o===n&&(e=d),d}let i=t(n.root),r=mE(i);return e??r}function gE(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Gm(r,r,r,t,i);let o=LS(e);if(o.toRoot())return Gm(r,r,new Be([],{}),t,i);let c=US(o,r,n),d=c.processChildren?js(c.segmentGroup,c.index,o.commands):_E(c.segmentGroup,c.index,o.commands);return Gm(r,c.segmentGroup,d,t,i)}function Yl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function zs(n){return typeof n=="object"&&n!=null&&n.outlets}function Gm(n,e,t,i,r){let o={};i&&Object.entries(i).forEach(([p,h])=>{o[p]=Array.isArray(h)?h.map(v=>`${v}`):`${h}`});let c;n===e?c=t:c=vE(n,e,t);let d=mE(hE(c));return new oi(d,o,r)}function vE(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=vE(o,e,t)}),new Be(n.segments,i)}var Zl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Yl(i[0]))throw new Le(4003,!1);let r=i.find(zs);if(r&&r!==sE(i))throw new Le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function LS(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Zl(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,c)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let d={};return Object.entries(o.outlets).forEach(([p,h])=>{d[p]=typeof h=="string"?h.split("/"):h}),[...r,{outlets:d}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:c===0?(o.split("/").forEach((d,p)=>{p==0&&d==="."||(p==0&&d===""?t=!0:d===".."?e++:d!=""&&r.push(d))}),r):[...r,o]},[]);return new Zl(t,e,i)}var Kr=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function US(n,e,t){if(n.isAbsolute)return new Kr(e,!0,0);if(!t)return new Kr(e,!1,NaN);if(t.parent===null)return new Kr(t,!0,0);let i=Yl(n.commands[0])?0:1,r=t.segments.length-1+i;return jS(t,r,n.numberOfDoubleDots)}function jS(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new Le(4005,!1);r=i.segments.length}return new Kr(i,!1,r-o)}function BS(n){return zs(n[0])?n[0].outlets:{[Re]:n}}function _E(n,e,t){if(n??=new Be([],{}),n.segments.length===0&&n.hasChildren())return js(n,e,t);let i=qS(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new Be(n.segments.slice(0,i.pathIndex),{});return o.children[Re]=new Be(n.segments.slice(i.pathIndex),n.children),js(o,0,r)}else return i.match&&r.length===0?new Be(n.segments,{}):i.match&&!n.hasChildren()?Ym(n,e,t):i.match?js(n,0,r):Ym(n,e,t)}function js(n,e,t){if(t.length===0)return new Be(n.segments,{});{let i=BS(t),r={};if(Object.keys(i).some(o=>o!==Re)&&n.children[Re]&&n.numberOfChildren===1&&n.children[Re].segments.length===0){let o=js(n.children[Re],e,t);return new Be(n.segments,o.children)}return Object.entries(i).forEach(([o,c])=>{typeof c=="string"&&(c=[c]),c!==null&&(r[o]=_E(n.children[o],e,c))}),Object.entries(n.children).forEach(([o,c])=>{i[o]===void 0&&(r[o]=c)}),new Be(n.segments,r)}}function qS(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let c=n.segments[r],d=t[i];if(zs(d))break;let p=`${d}`,h=i<t.length-1?t[i+1]:null;if(r>0&&p===void 0)break;if(p&&h&&typeof h=="object"&&h.outlets===void 0){if(!Yy(p,h,c))return o;i+=2}else{if(!Yy(p,{},c))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ym(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(zs(o)){let p=zS(o.outlets);return new Be(i,p)}if(r===0&&Yl(t[0])){let p=n.segments[e];i.push(new tr(p.path,Xy(t[0]))),r++;continue}let c=zs(o)?o.outlets[Re]:`${o}`,d=r<t.length-1?t[r+1]:null;c&&d&&Yl(d)?(i.push(new tr(c,Xy(d))),r+=2):(i.push(new tr(c,{})),r++)}return new Be(i,{})}function zS(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Ym(new Be([],{}),0,i))}),e}function Xy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Yy(n,e,t){return n==t.path&&Fn(e,t.parameters)}var Bs="imperative",bt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(bt||{}),gn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Zr=class extends gn{type=bt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ln=class extends gn{urlAfterRedirects;type=bt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},nn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(nn||{}),ec=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(ec||{}),ri=class extends gn{reason;code;type=bt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Di=class extends gn{reason;code;type=bt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},$s=class extends gn{error;target;type=bt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},tc=class extends gn{urlAfterRedirects;state;type=bt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zm=class extends gn{urlAfterRedirects;state;type=bt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eh=class extends gn{urlAfterRedirects;state;shouldActivate;type=bt.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},th=class extends gn{urlAfterRedirects;state;type=bt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nh=class extends gn{urlAfterRedirects;state;type=bt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ih=class{route;type=bt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},rh=class{route;type=bt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},oh=class{snapshot;type=bt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sh=class{snapshot;type=bt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ah=class{snapshot;type=bt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lh=class{snapshot;type=bt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nc=class{routerEvent;position;anchor;type=bt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Gs=class{},eo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function $S(n,e){return n.providers&&!n._injector&&(n._injector=xm(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Tn(n){return n.outlet||Re}function GS(n,e){let t=n.filter(i=>Tn(i)===e);return t.push(...n.filter(i=>Tn(i)!==e)),t}function Zs(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var ch=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Zs(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ea(this.rootInjector)}},ea=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new ch(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(oe(Yn))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ic=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=uh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=uh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=dh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return dh(e,this._root).map(t=>t.value)}};function uh(n,e){if(n===e.value)return e;for(let t of e.children){let i=uh(n,t);if(i)return i}return null}function dh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=dh(n,t);if(i.length)return i.unshift(e),i}return[]}var tn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Wr(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var rc=class extends ic{snapshot;constructor(e,t){super(e),this.snapshot=t,yh(this,e)}toString(){return this.snapshot.toString()}};function bE(n){let e=HS(n),t=new Rt([new tr("",{})]),i=new Rt({}),r=new Rt({}),o=new Rt({}),c=new Rt(""),d=new _t(t,i,o,c,r,Re,n,e.root);return d.snapshot=e.root,new rc(new tn(d,[]),e)}function HS(n){let e={},t={},i={},r="",o=new Qr([],e,i,r,t,Re,n,null,{});return new sc("",new tn(o,[]))}var _t=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,c,d,p){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=c,this.component=d,this._futureSnapshot=p,this.title=this.dataSubject?.pipe(ve(h=>h[Xs]))??pe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ve(e=>Xr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ve(e=>Xr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function oc(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:K(K({},e.params),n.params),data:K(K({},e.data),n.data),resolve:K(K(K(K({},n.data),e.data),r?.data),n._resolvedData)}:i={params:K({},n.params),data:K({},n.data),resolve:K(K({},n.data),n._resolvedData??{})},r&&EE(r)&&(i.resolve[Xs]=r.title),i}var Qr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Xs]}constructor(e,t,i,r,o,c,d,p,h){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=c,this.component=d,this.routeConfig=p,this._resolve=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},sc=class extends ic{url;constructor(e,t){super(t),this.url=e,yh(this,t)}toString(){return yE(this._root)}};function yh(n,e){e.value._routerState=n,e.children.forEach(t=>yh(n,t))}function yE(n){let e=n.children.length>0?` { ${n.children.map(yE).join(", ")} } `:"";return`${n.value}${e}`}function Hm(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Fn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Fn(e.params,t.params)||n.paramsSubject.next(t.params),bS(e.url,t.url)||n.urlSubject.next(t.url),Fn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ph(n,e){let t=Fn(n.params,e.params)&&wS(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||ph(n.parent,e.parent))}function EE(n){return typeof n.title=="string"||n.title===null}var WS=new ue(""),Eh=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Re;activateEvents=new gt;deactivateEvents=new gt;attachEvents=new gt;detachEvents=new gt;routerOutletData=bb(void 0);parentContexts=Y(ea);location=Y(Ob);changeDetector=Y(ws);inputBinder=Y(uc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Le(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Le(4013,!1);this._activatedRoute=t;let r=this.location,c=t.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,p=new mh(t,d,r.injector,this.routerOutletData);this.activated=r.createComponent(c,{index:r.length,injector:p,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=et({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[wn]})}return n})(),mh=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===_t?this.route:e===ea?this.childContexts:e===WS?this.outletData:this.parent.get(e,t)}},uc=new ue(""),Zy=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=gl([i.queryParams,i.params,i.data]).pipe(kt(([o,c,d],p)=>(d=K(K(K({},o),c),d),p===0?pe(d):Promise.resolve(d)))).subscribe(o=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let c=Jb(i.component);if(!c){this.unsubscribeFromRouteData(t);return}for(let{templateName:d}of c.inputs)t.activatedComponentRef.setInput(d,o[d])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();function KS(n,e,t){let i=Hs(n,e._root,t?t._root:void 0);return new rc(i,e)}function Hs(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=QS(n,e,t);return new tn(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let c=o.route;return c.value._futureSnapshot=e.value,c.children=e.children.map(d=>Hs(n,d)),c}}let i=JS(e.value),r=e.children.map(o=>Hs(n,o));return new tn(i,r)}}function QS(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Hs(n,i,r);return Hs(n,i)})}function JS(n){return new _t(new Rt(n.url),new Rt(n.params),new Rt(n.queryParams),new Rt(n.fragment),new Rt(n.data),n.outlet,n.component,n)}var Ws=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},CE="ngNavigationCancelingError";function ac(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ir(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=wE(!1,nn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function wE(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[CE]=!0,t.cancellationCode=e,t}function XS(n){return TE(n)&&ir(n.url)}function TE(n){return!!n&&n[CE]}var YS=(n,e,t,i)=>ve(r=>(new hh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),hh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Hm(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Wr(t);e.children.forEach(o=>{let c=o.value.outlet;this.deactivateRoutes(o,r[c],i),delete r[c]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let c=i.getContext(r.outlet);c&&this.deactivateChildRoutes(e,t,c.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Wr(e);for(let c of Object.values(o))this.deactivateRouteAndItsChildren(c,r);if(i&&i.outlet){let c=i.outlet.detach(),d=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:c,route:e,contexts:d})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Wr(e);for(let c of Object.values(o))this.deactivateRouteAndItsChildren(c,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Wr(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new lh(o.value.snapshot))}),e.children.length&&this.forwardEvent(new sh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(Hm(r),r===o)if(r.component){let c=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,c.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let c=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let d=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),c.children.onOutletReAttached(d.contexts),c.attachRef=d.componentRef,c.route=d.route.value,c.outlet&&c.outlet.attach(d.componentRef,d.route.value),Hm(d.route.value),this.activateChildRoutes(e,null,c.children)}else c.attachRef=null,c.route=r,c.outlet&&c.outlet.activateWith(r,c.injector),this.activateChildRoutes(e,null,c.children)}else this.activateChildRoutes(e,null,i)}},lc=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Jr=class{component;route;constructor(e,t){this.component=e,this.route=t}};function ZS(n,e,t){let i=n._root,r=e?e._root:null;return Ls(i,r,t,[i.value])}function eA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function no(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!mb(n)?n:e.get(n):i}function Ls(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Wr(e);return n.children.forEach(c=>{tA(c,o[c.value.outlet],t,i.concat([c.value]),r),delete o[c.value.outlet]}),Object.entries(o).forEach(([c,d])=>qs(d,t.getContext(c),r)),r}function tA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,c=e?e.value:null,d=t?t.getContext(n.value.outlet):null;if(c&&o.routeConfig===c.routeConfig){let p=nA(c,o,o.routeConfig.runGuardsAndResolvers);p?r.canActivateChecks.push(new lc(i)):(o.data=c.data,o._resolvedData=c._resolvedData),o.component?Ls(n,e,d?d.children:null,i,r):Ls(n,e,t,i,r),p&&d&&d.outlet&&d.outlet.isActivated&&r.canDeactivateChecks.push(new Jr(d.outlet.component,c))}else c&&qs(e,d,r),r.canActivateChecks.push(new lc(i)),o.component?Ls(n,null,d?d.children:null,i,r):Ls(n,null,t,i,r);return r}function nA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!nr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!nr(n.url,e.url)||!Fn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ph(n,e)||!Fn(n.queryParams,e.queryParams);case"paramsChange":default:return!ph(n,e)}}function qs(n,e,t){let i=Wr(n),r=n.value;Object.entries(i).forEach(([o,c])=>{r.component?e?qs(c,e.children.getContext(o),t):qs(c,null,t):qs(c,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Jr(e.outlet.component,r)):t.canDeactivateChecks.push(new Jr(null,r)):t.canDeactivateChecks.push(new Jr(null,r))}function ta(n){return typeof n=="function"}function iA(n){return typeof n=="boolean"}function rA(n){return n&&ta(n.canLoad)}function oA(n){return n&&ta(n.canActivate)}function sA(n){return n&&ta(n.canActivateChild)}function aA(n){return n&&ta(n.canDeactivate)}function lA(n){return n&&ta(n.canMatch)}function xE(n){return n instanceof U_||n?.name==="EmptyError"}var Kl=Symbol("INITIAL_VALUE");function to(){return kt(n=>gl(n.map(e=>e.pipe(Qe(1),vm(Kl)))).pipe(ve(e=>{for(let t of e)if(t!==!0){if(t===Kl)return Kl;if(t===!1||cA(t))return t}return!0}),Dt(e=>e!==Kl),Qe(1)))}function cA(n){return ir(n)||n instanceof Ws}function uA(n,e){return Jt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:c}}=t;return c.length===0&&o.length===0?pe(we(K({},t),{guardsResult:!0})):dA(c,i,r,n).pipe(Jt(d=>d&&iA(d)?pA(i,o,n,e):pe(d)),ve(d=>we(K({},t),{guardsResult:d})))})}function dA(n,e,t,i){return He(n).pipe(Jt(r=>vA(r.component,r.route,t,e,i)),Rn(r=>r!==!0,!0))}function pA(n,e,t,i){return He(e).pipe(un(r=>B_(hA(r.route.parent,i),mA(r.route,i),gA(n,r.path,t),fA(n,r.route,t))),Rn(r=>r!==!0,!0))}function mA(n,e){return n!==null&&e&&e(new ah(n)),pe(!0)}function hA(n,e){return n!==null&&e&&e(new oh(n)),pe(!0)}function fA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return pe(!0);let r=i.map(o=>hs(()=>{let c=Zs(e)??t,d=no(o,c),p=oA(d)?d.canActivate(e,n):Mt(c,()=>d(e,n));return ki(p).pipe(Rn())}));return pe(r).pipe(to())}function gA(n,e,t){let i=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(c=>eA(c)).filter(c=>c!==null).map(c=>hs(()=>{let d=c.guards.map(p=>{let h=Zs(c.node)??t,v=no(p,h),b=sA(v)?v.canActivateChild(i,n):Mt(h,()=>v(i,n));return ki(b).pipe(Rn())});return pe(d).pipe(to())}));return pe(o).pipe(to())}function vA(n,e,t,i,r){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return pe(!0);let c=o.map(d=>{let p=Zs(e)??r,h=no(d,p),v=aA(h)?h.canDeactivate(n,e,t,i):Mt(p,()=>h(n,e,t,i));return ki(v).pipe(Rn())});return pe(c).pipe(to())}function _A(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return pe(!0);let o=r.map(c=>{let d=no(c,n),p=rA(d)?d.canLoad(e,t):Mt(n,()=>d(e,t));return ki(p)});return pe(o).pipe(to(),IE(i))}function IE(n){return om(ht(e=>{if(typeof e!="boolean")throw ac(n,e)}),ve(e=>e===!0))}function bA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return pe(!0);let o=r.map(c=>{let d=no(c,n),p=lA(d)?d.canMatch(e,t):Mt(n,()=>d(e,t));return ki(p)});return pe(o).pipe(to(),IE(i))}var Ks=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Qs=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Hr(n){return ms(new Ks(n))}function yA(n){return ms(new Le(4e3,!1))}function EA(n){return ms(wE(!1,nn.GuardRejected))}var fh=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return pe(i);if(r.numberOfChildren>1||!r.children[Re])return yA(`${e.redirectTo}`);r=r.children[Re]}}applyRedirectCommands(e,t,i,r,o){if(typeof t!="string"){let d=t,{queryParams:p,fragment:h,routeConfig:v,url:b,outlet:T,params:O,data:j,title:U}=r,F=Mt(o,()=>d({params:O,data:j,queryParams:p,fragment:h,routeConfig:v,url:b,outlet:T,title:U}));if(F instanceof oi)throw new Qs(F);t=F}let c=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Qs(c);return c}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new oi(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let d=o.substring(1);i[r]=t[d]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),c={};return Object.entries(t.children).forEach(([d,p])=>{c[d]=this.createSegmentGroup(e,p,i,r)}),new Be(o,c)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Le(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},gh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function CA(n,e,t,i,r){let o=SE(n,e,t);return o.matched?(i=$S(e,i),bA(i,e,t,r).pipe(ve(c=>c===!0?o:K({},gh)))):pe(o)}function SE(n,e,t){if(e.path==="**")return wA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?K({},gh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||_S)(t,n,e);if(!r)return K({},gh);let o={};Object.entries(r.posParams??{}).forEach(([d,p])=>{o[d]=p.path});let c=r.consumed.length>0?K(K({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:c,positionalParamSegments:r.posParams??{}}}function wA(n){return{matched:!0,parameters:n.length>0?sE(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function eE(n,e,t,i){return t.length>0&&IA(n,t,i)?{segmentGroup:new Be(e,xA(i,new Be(t,n.children))),slicedSegments:[]}:t.length===0&&SA(n,t,i)?{segmentGroup:new Be(n.segments,TA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new Be(n.segments,n.children),slicedSegments:t}}function TA(n,e,t,i){let r={};for(let o of t)if(dc(n,e,o)&&!i[Tn(o)]){let c=new Be([],{});r[Tn(o)]=c}return K(K({},i),r)}function xA(n,e){let t={};t[Re]=e;for(let i of n)if(i.path===""&&Tn(i)!==Re){let r=new Be([],{});t[Tn(i)]=r}return t}function IA(n,e,t){return t.some(i=>dc(n,e,i)&&Tn(i)!==Re)}function SA(n,e,t){return t.some(i=>dc(n,e,i))}function dc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function AA(n,e,t){return e.length===0&&!n.children[t]}var vh=class{};function PA(n,e,t,i,r,o,c="emptyOnly"){return new _h(n,e,t,i,r,c,o).recognize()}var RA=31,_h=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,c,d){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=c,this.urlSerializer=d,this.applyRedirects=new fh(this.urlSerializer,this.urlTree)}noMatchError(e){return new Le(4002,`'${e.segmentGroup}'`)}recognize(){let e=eE(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(ve(({children:t,rootSnapshot:i})=>{let r=new tn(i,t),o=new sc("",r),c=FS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return c.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(c),{state:o,tree:c}}))}match(e){let t=new Qr([],Object.freeze({}),Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Re,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Re,t).pipe(ve(i=>({children:i,rootSnapshot:t})),Ti(i=>{if(i instanceof Qs)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ks?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,o){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,o):this.processSegment(e,t,i,i.segments,r,!0,o).pipe(ve(c=>c instanceof tn?[c]:[]))}processChildren(e,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);return He(o).pipe(un(c=>{let d=i.children[c],p=GS(t,c);return this.processSegmentGroup(e,p,d,c,r)}),Xn((c,d)=>(c.push(...d),c)),pm(null),rb(),Jt(c=>{if(c===null)return Hr(i);let d=AE(c);return DA(d),pe(d)}))}processSegment(e,t,i,r,o,c,d){return He(t).pipe(un(p=>this.processSegmentAgainstRoute(p._injector??e,t,p,i,r,o,c,d).pipe(Ti(h=>{if(h instanceof Ks)return pe(null);throw h}))),Rn(p=>!!p),Ti(p=>{if(xE(p))return AA(i,r,o)?pe(new vh):Hr(i);throw p}))}processSegmentAgainstRoute(e,t,i,r,o,c,d,p){return Tn(i)!==c&&(c===Re||!dc(r,o,i))?Hr(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,o,c,p):this.allowRedirects&&d?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,c,p):Hr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,c,d){let{matched:p,parameters:h,consumedSegments:v,positionalParamSegments:b,remainingSegments:T}=SE(t,r,o);if(!p)return Hr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>RA&&(this.allowRedirects=!1));let O=new Qr(o,h,Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,tE(r),Tn(r),r.component??r._loadedComponent??null,r,nE(r)),j=oc(O,d,this.paramsInheritanceStrategy);O.params=Object.freeze(j.params),O.data=Object.freeze(j.data);let U=this.applyRedirects.applyRedirectCommands(v,r.redirectTo,b,O,e);return this.applyRedirects.lineralizeSegments(r,U).pipe(Jt(F=>this.processSegment(e,i,t,F.concat(T),c,!1,d)))}matchSegmentAgainstRoute(e,t,i,r,o,c){let d=CA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),d.pipe(kt(p=>p.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(kt(({routes:h})=>{let v=i._loadedInjector??e,{parameters:b,consumedSegments:T,remainingSegments:O}=p,j=new Qr(T,b,Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,tE(i),Tn(i),i.component??i._loadedComponent??null,i,nE(i)),U=oc(j,c,this.paramsInheritanceStrategy);j.params=Object.freeze(U.params),j.data=Object.freeze(U.data);let{segmentGroup:F,slicedSegments:le}=eE(t,T,O,h);if(le.length===0&&F.hasChildren())return this.processChildren(v,h,F,j).pipe(ve(ae=>new tn(j,ae)));if(h.length===0&&le.length===0)return pe(new tn(j,[]));let fe=Tn(i)===o;return this.processSegment(v,h,F,le,fe?Re:o,!0,j).pipe(ve(ae=>new tn(j,ae instanceof tn?[ae]:[])))}))):Hr(t)))}getChildConfig(e,t,i){return t.children?pe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?pe({routes:t._loadedRoutes,injector:t._loadedInjector}):_A(e,t,i,this.urlSerializer).pipe(Jt(r=>r?this.configLoader.loadChildren(e,t).pipe(ht(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):EA(t))):pe({routes:[],injector:e})}};function DA(n){n.sort((e,t)=>e.value.outlet===Re?-1:t.value.outlet===Re?1:e.value.outlet.localeCompare(t.value.outlet))}function kA(n){let e=n.value.routeConfig;return e&&e.path===""}function AE(n){let e=[],t=new Set;for(let i of n){if(!kA(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=AE(i.children);e.push(new tn(i.value,r))}return e.filter(i=>!t.has(i))}function tE(n){return n.data||{}}function nE(n){return n.resolve||{}}function MA(n,e,t,i,r,o){return Jt(c=>PA(n,e,t,i,c.extractedUrl,r,o).pipe(ve(({state:d,tree:p})=>we(K({},c),{targetSnapshot:d,urlAfterRedirects:p}))))}function OA(n,e){return Jt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return pe(t);let o=new Set(r.map(p=>p.route)),c=new Set;for(let p of o)if(!c.has(p))for(let h of PE(p))c.add(h);let d=0;return He(c).pipe(un(p=>o.has(p)?NA(p,i,n,e):(p.data=oc(p,p.parent,n).resolve,pe(void 0))),ht(()=>d++),fm(1),Jt(p=>d===c.size?pe(t):cn))})}function PE(n){let e=n.children.map(t=>PE(t)).flat();return[n,...e]}function NA(n,e,t,i){let r=n.routeConfig,o=n._resolve;return r?.title!==void 0&&!EE(r)&&(o[Xs]=r.title),VA(o,n,e,i).pipe(ve(c=>(n._resolvedData=c,n.data=oc(n,n.parent,t).resolve,null)))}function VA(n,e,t,i){let r=Qm(n);if(r.length===0)return pe({});let o={};return He(r).pipe(Jt(c=>FA(n[c],e,t,i).pipe(Rn(),ht(d=>{if(d instanceof Ws)throw ac(new Yr,d);o[c]=d}))),fm(1),Z_(o),Ti(c=>xE(c)?cn:ms(c)))}function FA(n,e,t,i){let r=Zs(e)??i,o=no(n,r),c=o.resolve?o.resolve(e,t):Mt(r,()=>o(e,t));return ki(c)}function Wm(n){return kt(e=>{let t=n(e);return t?He(t).pipe(ve(()=>e)):pe(e)})}var RE=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Re);return i}getResolvedTitleForRoute(t){return t.data[Xs]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:()=>Y(LA),providedIn:"root"})}return n})(),LA=(()=>{class n extends RE{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(oe(Hy))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),na=new ue("",{providedIn:"root",factory:()=>({})}),UA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&y(0,"router-outlet")},dependencies:[Eh],encapsulation:2})}return n})();function Ch(n){let e=n.children&&n.children.map(Ch),t=e?we(K({},n),{children:e}):K({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Re&&(t.component=UA),t}var Js=new ue(""),wh=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Y(Rl);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return pe(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=ki(t.loadComponent()).pipe(ve(DE),ht(o=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o}),Rr(()=>{this.componentLoaders.delete(t)})),r=new am(i,()=>new ot).pipe(sm());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return pe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let o=jA(i,this.compiler,t,this.onLoadEndListener).pipe(Rr(()=>{this.childrenLoaders.delete(i)})),c=new am(o,()=>new ot).pipe(sm());return this.childrenLoaders.set(i,c),c}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jA(n,e,t,i){return ki(n.loadChildren()).pipe(ve(DE),Jt(r=>r instanceof Vb||Array.isArray(r)?pe(r):He(e.compileModuleAsync(r))),ve(r=>{i&&i(n);let o,c,d=!1;return Array.isArray(r)?(c=r,d=!0):(o=r.create(t).injector,c=o.get(Js,[],{optional:!0,self:!0}).flat()),{routes:c.map(Ch),injector:o}}))}function BA(n){return n&&typeof n=="object"&&"default"in n}function DE(n){return BA(n)?n.default:n}var Th=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:()=>Y(qA),providedIn:"root"})}return n})(),qA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kE=new ue(""),ME=new ue("");function zA(n,e,t){let i=n.get(ME),r=n.get(at);return n.get(ze).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(h=>setTimeout(h));let o,c=new Promise(h=>{o=h}),d=r.startViewTransition(()=>(o(),$A(n))),{onViewTransitionCreated:p}=i;return p&&Mt(n,()=>p({transition:d,from:e,to:t})),c})}function $A(n){return new Promise(e=>{Cb({read:()=>setTimeout(e)},{injector:n})})}var OE=new ue(""),xh=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ot;transitionAbortSubject=new ot;configLoader=Y(wh);environmentInjector=Y(Yn);urlSerializer=Y(Ys);rootContexts=Y(ea);location=Y(Is);inputBindingEnabled=Y(uc,{optional:!0})!==null;titleStrategy=Y(RE);options=Y(na,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Y(Th);createViewTransition=Y(kE,{optional:!0});navigationErrorHandler=Y(OE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>pe(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new ih(r)),i=r=>this.events.next(new rh(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(we(K(K({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Rt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Bs,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Dt(o=>o.id!==0),ve(o=>we(K({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),kt(o=>{let c=!1,d=!1;return pe(o).pipe(kt(p=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",nn.SupersededByNewNavigation),cn;this.currentTransition=o,this.currentNavigation={id:p.id,initialUrl:p.rawUrl,extractedUrl:p.extractedUrl,targetBrowserUrl:typeof p.extras.browserUrl=="string"?this.urlSerializer.parse(p.extras.browserUrl):p.extras.browserUrl,trigger:p.source,extras:p.extras,previousNavigation:this.lastSuccessfulNavigation?we(K({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let h=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=p.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!h&&v!=="reload"){let b="";return this.events.next(new Di(p.id,this.urlSerializer.serialize(p.rawUrl),b,ec.IgnoredSameUrlNavigation)),p.resolve(!1),cn}if(this.urlHandlingStrategy.shouldProcessUrl(p.rawUrl))return pe(p).pipe(kt(b=>{let T=this.transitions?.getValue();return this.events.next(new Zr(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),T!==this.transitions?.getValue()?cn:Promise.resolve(b)}),MA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),ht(b=>{o.targetSnapshot=b.targetSnapshot,o.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation=we(K({},this.currentNavigation),{finalUrl:b.urlAfterRedirects});let T=new tc(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);this.events.next(T)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(p.currentRawUrl)){let{id:b,extractedUrl:T,source:O,restoredState:j,extras:U}=p,F=new Zr(b,this.urlSerializer.serialize(T),O,j);this.events.next(F);let le=bE(this.rootComponentType).snapshot;return this.currentTransition=o=we(K({},p),{targetSnapshot:le,urlAfterRedirects:T,extras:we(K({},U),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=T,pe(o)}else{let b="";return this.events.next(new Di(p.id,this.urlSerializer.serialize(p.extractedUrl),b,ec.IgnoredByUrlHandlingStrategy)),p.resolve(!1),cn}}),ht(p=>{let h=new Zm(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(h)}),ve(p=>(this.currentTransition=o=we(K({},p),{guards:ZS(p.targetSnapshot,p.currentSnapshot,this.rootContexts)}),o)),uA(this.environmentInjector,p=>this.events.next(p)),ht(p=>{if(o.guardsResult=p.guardsResult,p.guardsResult&&typeof p.guardsResult!="boolean")throw ac(this.urlSerializer,p.guardsResult);let h=new eh(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot,!!p.guardsResult);this.events.next(h)}),Dt(p=>p.guardsResult?!0:(this.cancelNavigationTransition(p,"",nn.GuardRejected),!1)),Wm(p=>{if(p.guards.canActivateChecks.length)return pe(p).pipe(ht(h=>{let v=new th(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(v)}),kt(h=>{let v=!1;return pe(h).pipe(OA(this.paramsInheritanceStrategy,this.environmentInjector),ht({next:()=>v=!0,complete:()=>{v||this.cancelNavigationTransition(h,"",nn.NoDataFromResolver)}}))}),ht(h=>{let v=new nh(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(v)}))}),Wm(p=>{let h=v=>{let b=[];v.routeConfig?.loadComponent&&!v.routeConfig._loadedComponent&&b.push(this.configLoader.loadComponent(v.routeConfig).pipe(ht(T=>{v.component=T}),ve(()=>{})));for(let T of v.children)b.push(...h(T));return b};return gl(h(p.targetSnapshot.root)).pipe(pm(null),Qe(1))}),Wm(()=>this.afterPreactivation()),kt(()=>{let{currentSnapshot:p,targetSnapshot:h}=o,v=this.createViewTransition?.(this.environmentInjector,p.root,h.root);return v?He(v).pipe(ve(()=>o)):pe(o)}),ve(p=>{let h=KS(t.routeReuseStrategy,p.targetSnapshot,p.currentRouterState);return this.currentTransition=o=we(K({},p),{targetRouterState:h}),this.currentNavigation.targetRouterState=h,o}),ht(()=>{this.events.next(new Gs)}),YS(this.rootContexts,t.routeReuseStrategy,p=>this.events.next(p),this.inputBindingEnabled),Qe(1),ht({next:p=>{c=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ln(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects))),this.titleStrategy?.updateTitle(p.targetRouterState.snapshot),p.resolve(!0)},complete:()=>{c=!0}}),Dr(this.transitionAbortSubject.pipe(ht(p=>{throw p}))),Rr(()=>{!c&&!d&&this.cancelNavigationTransition(o,"",nn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ti(p=>{if(d=!0,TE(p))this.events.next(new ri(o.id,this.urlSerializer.serialize(o.extractedUrl),p.message,p.cancellationCode)),XS(p)?this.events.next(new eo(p.url,p.navigationBehaviorOptions)):o.resolve(!1);else{let h=new $s(o.id,this.urlSerializer.serialize(o.extractedUrl),p,o.targetSnapshot??void 0);try{let v=Mt(this.environmentInjector,()=>this.navigationErrorHandler?.(h));if(v instanceof Ws){let{message:b,cancellationCode:T}=ac(this.urlSerializer,v);this.events.next(new ri(o.id,this.urlSerializer.serialize(o.extractedUrl),b,T)),this.events.next(new eo(v.redirectTo,v.navigationBehaviorOptions))}else throw this.events.next(h),p}catch(v){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(v)}}return cn}))}))}cancelNavigationTransition(t,i,r){let o=new ri(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GA(n){return n!==Bs}var HA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:()=>Y(WA),providedIn:"root"})}return n})(),bh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},WA=(()=>{class n extends bh{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),NE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:()=>Y(KA),providedIn:"root"})}return n})(),KA=(()=>{class n extends NE{location=Y(Is);urlSerializer=Y(Ys);options=Y(na,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=Y(Th);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new oi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=bE(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof Zr)this.stateMemento=this.createStateMemento();else if(t instanceof Di)this.rawUrlTree=i.initialUrl;else if(t instanceof tc){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Gs?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof ri&&(t.code===nn.GuardRejected||t.code===nn.NoDataFromResolver)?this.restoreHistory(i):t instanceof $s?this.restoreHistory(i,!0):t instanceof Ln&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof oi?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let o=this.browserPageId,c=K(K({},i.extras.state),this.generateNgRouterState(i.id,o));this.location.replaceState(r,"",c)}else{let o=K(K({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===t.finalUrl&&o===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Us=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Us||{});function VE(n,e){n.events.pipe(Dt(t=>t instanceof Ln||t instanceof ri||t instanceof $s||t instanceof Di),ve(t=>t instanceof Ln||t instanceof Di?Us.COMPLETE:(t instanceof ri?t.code===nn.Redirect||t.code===nn.SupersededByNewNavigation:!1)?Us.REDIRECTING:Us.FAILED),Dt(t=>t!==Us.REDIRECTING),Qe(1)).subscribe(()=>{e()})}var QA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},JA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ge=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Y(Il);stateManager=Y(NE);options=Y(na,{optional:!0})||{};pendingTasks=Y(yl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Y(xh);urlSerializer=Y(Ys);location=Y(Is);urlHandlingStrategy=Y(Th);_events=new ot;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Y(HA);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Y(Js,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Y(uc,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new V_;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ri&&i.code!==nn.Redirect&&i.code!==nn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ln)this.navigated=!0;else if(i instanceof eo){let c=i.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),p=K({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||GA(r.source)},c);this.scheduleNavigation(d,Bs,null,p,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}YA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Bs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let o={replaceUrl:!0},c=r?.navigationId?r:null;if(r){let p=K({},r);delete p.navigationId,delete p.\u0275routerPageId,Object.keys(p).length!==0&&(o.state=p)}let d=this.parseUrl(t);this.scheduleNavigation(d,i,c,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ch),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:c,queryParamsHandling:d,preserveFragment:p}=i,h=p?this.currentUrlTree.fragment:c,v=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":v=K(K({},this.currentUrlTree.queryParams),o);break;case"preserve":v=this.currentUrlTree.queryParams;break;default:v=o||null}v!==null&&(v=this.removeEmptyProps(v));let b;try{let T=r?r.snapshot:this.routerState.snapshot.root;b=fE(T)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),b=this.currentUrlTree.root}return gE(b,t,v,h??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ir(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Bs,null,i)}navigate(t,i={skipLocationChange:!1}){return XA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=K({},QA):i===!1?r=K({},JA):r=i,ir(t))return Qy(this.currentUrlTree,t,r);let o=this.parseUrl(t);return Qy(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,c){if(this.disposed)return Promise.resolve(!1);let d,p,h;c?(d=c.resolve,p=c.reject,h=c.promise):h=new Promise((b,T)=>{d=b,p=T});let v=this.pendingTasks.add();return VE(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:d,reject:p,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(b=>Promise.reject(b))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function XA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Le(4008,!1)}function YA(n){return!(n instanceof Gs)&&!(n instanceof eo)}var Mi=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ot;constructor(t,i,r,o,c,d){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=c,this.locationStrategy=d;let p=c.nativeElement.tagName?.toLowerCase();this.isAnchorElement=p==="a"||p==="area",this.isAnchorElement?this.subscription=t.events.subscribe(h=>{h instanceof Ln&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(ir(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,o,c){let d=this.urlTree;if(d===null||this.isAnchorElement&&(t!==0||i||r||o||c||typeof this.target=="string"&&this.target!="_self"))return!0;let p={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,p),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let i=this.href===null?null:kb(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(t,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,t,i):r.removeAttribute(o,t)}get urlTree(){return this.routerLinkInput===null?null:ir(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(se(Ge),se(_t),vb("tabindex"),se(ys),se(kr),se(xs))};static \u0275dir=et({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&C("click",function(c){return r.onClick(c.button,c.ctrlKey,c.shiftKey,c.altKey,c.metaKey)}),i&2&&Kt("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Zi],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Zi],replaceUrl:[2,"replaceUrl","replaceUrl",Zi],routerLink:"routerLink"},features:[Lb,wn]})}return n})();var cc=class{};var ZA=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,o,c){this.router=t,this.injector=r,this.preloadingStrategy=o,this.loader=c}setUpPreloading(){this.subscription=this.router.events.pipe(Dt(t=>t instanceof Ln),un(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=xm(o.providers,t,`Route: ${o.path}`));let c=o._injector??t,d=o._loadedInjector??c;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(c,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(d,o.children??o._loadedRoutes))}return He(r).pipe(dm())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=pe(null);let o=r.pipe(Jt(c=>c===null?pe(void 0):(i._loadedRoutes=c.routes,i._loadedInjector=c.injector,this.processRoutes(c.injector??t,c.routes))));if(i.loadComponent&&!i._loadedComponent){let c=this.loader.loadComponent(i);return He([o,c]).pipe(dm())}else return o})}static \u0275fac=function(i){return new(i||n)(oe(Ge),oe(Rl),oe(Yn),oe(cc),oe(wh))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),FE=new ue(""),e2=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,o,c={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=o,this.options=c,c.scrollPositionRestoration||="disabled",c.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Zr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Ln?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Di&&t.code===ec.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof nc&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new nc(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){wl()};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();function LE(n,...e){return ft([{provide:Js,multi:!0,useValue:n},[],{provide:_t,useFactory:UE,deps:[Ge]},{provide:Es,multi:!0,useFactory:jE},e.map(t=>t.\u0275providers)])}function UE(n){return n.routerState.root}function ia(n,e){return{\u0275kind:n,\u0275providers:e}}function jE(){let n=Y(Wt);return e=>{let t=n.get(ei);if(e!==t.components[0])return;let i=n.get(Ge),r=n.get(BE);n.get(Ih)===1&&i.initialNavigation(),n.get(qE,null,_m.Optional)?.setUpPreloading(),n.get(FE,null,_m.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var BE=new ue("",{factory:()=>new ot}),Ih=new ue("",{providedIn:"root",factory:()=>1});function t2(){return ia(2,[{provide:Ih,useValue:0},{provide:Im,multi:!0,deps:[Wt],useFactory:e=>{let t=e.get(Zb,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Ge),o=e.get(BE);VE(r,()=>{i(!0)}),e.get(xh).afterPreactivation=()=>(i(!0),o.closed?pe(void 0):o),r.initialNavigation()}))}}])}function n2(){return ia(3,[{provide:Im,multi:!0,useFactory:()=>{let e=Y(Ge);return()=>{e.setUpLocationChangeListener()}}},{provide:Ih,useValue:2}])}var qE=new ue("");function i2(n){return ia(0,[{provide:qE,useExisting:ZA},{provide:cc,useExisting:n}])}function r2(){return ia(8,[Zy,{provide:uc,useExisting:Zy}])}function o2(n){let e=[{provide:kE,useValue:zA},{provide:ME,useValue:K({skipNextTransition:!!n?.skipInitialTransition},n)}];return ia(9,e)}var iE=new ue("ROUTER_FORROOT_GUARD"),s2=[Is,{provide:Ys,useClass:Yr},Ge,ea,{provide:_t,useFactory:UE,deps:[Ge]},wh,[]],zE=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[s2,[],{provide:Js,multi:!0,useValue:t},{provide:iE,useFactory:u2,deps:[[Ge,new Cn,new fb]]},i?.errorHandler?{provide:OE,useValue:i.errorHandler}:[],{provide:na,useValue:i||{}},i?.useHash?l2():c2(),a2(),i?.preloadingStrategy?i2(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?d2(i):[],i?.bindToComponentInputs?r2().\u0275providers:[],i?.enableViewTransitions?o2().\u0275providers:[],p2()]}}static forChild(t){return{ngModule:n,providers:[{provide:Js,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)(oe(iE,8))};static \u0275mod=mn({type:n});static \u0275inj=pn({})}return n})();function a2(){return{provide:FE,useFactory:()=>{let n=Y(cy),e=Y(ze),t=Y(na),i=Y(xh),r=Y(Ys);return t.scrollOffset&&n.setOffset(t.scrollOffset),new e2(r,i,n,e,t)}}}function l2(){return{provide:xs,useClass:ty}}function c2(){return{provide:xs,useClass:ey}}function u2(n){return"guarded"}function d2(n){return[n.initialNavigation==="disabled"?n2().\u0275providers:[],n.initialNavigation==="enabledBlocking"?t2().\u0275providers:[]]}var rE=new ue("");function p2(){return[{provide:rE,useFactory:jE},{provide:Es,multi:!0,useExisting:rE}]}var pc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-SurabaseDeplCloud"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"SurabaseDeplCloud"),a())},encapsulation:2})};var mc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-LaravelDeplCloudComponent"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"LaravelDeplCloudComponent"),a())},encapsulation:2})};var hc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-FirebaseDeplCloud"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"FirebaseDeplCloud"),a())},encapsulation:2})};var fc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-ExpressRaylwayDeplCloudComponent"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"ExpressRaylwayDepl Cloud"),a())},encapsulation:2})};var gc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-reactjs"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"DeplVpsFullstackComponent"),a())},encapsulation:2})};var vc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-laravel"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"DeplVpsLaravelNginxApacheComponent"),a())},encapsulation:2})};var _c=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-DeplVpsApiNodejsComponent"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"DeplVpsApiNodejsComponent"),a())},encapsulation:2})};var bc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-LaravelDeplHebergeurComponent"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"Laravel Depl Hebergeur Component"),a())},encapsulation:2})};var yc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-ReactjsDeplHebergeurComponent"]],decls:2,vars:0,template:function(t,i){t&1&&(l(0,"p"),s(1,"Reactjs Depl Hebergeur Component"),a())},encapsulation:2})};var Ec=class n{constructor(e){this.sanitizer=e;this.sanitizedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl("")}videoIds=["1qz1RQsylVI5_WDenecYzDMdkqRUlm6fq","18qpXT5Nh5v7OKR4_KRyYC__P8Z_g8O8G","1EUZUnQdcAf9wJMt6lHX8R1uN8Ep7P4lw"];sanitizedVideoUrl;ngOnInit(){this.selectVideo(0)}selectVideo(e){let t=`https://drive.google.com/file/d/${this.videoIds[e]}/preview`;this.sanitizedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t)}static \u0275fac=function(t){return new(t||n)(se(Vs))};static \u0275cmp=k({type:n,selectors:[["app-video"]],decls:13,vars:1,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"text-center","mb-3"],[1,"btn","btn-success","mx-2",3,"click"],[1,"video-container","text-center","mb-3"],["width","800","height","450","frameborder","0","allowfullscreen","",1,"rounded","shadow",3,"src"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1",1),s(2,"Hebergement d'un site angulaire et d'une api php mysql "),a(),y(3,"hr"),l(4,"div",2)(5,"button",3),C("click",function(){return i.selectVideo(0)}),s(6," \xC9tape 1 "),a(),l(7,"button",3),C("click",function(){return i.selectVideo(1)}),s(8," \xC9tape 2 "),a(),l(9,"button",3),C("click",function(){return i.selectVideo(2)}),s(10," \xC9tape 3 "),a()(),l(11,"div",4),y(12,"iframe",5),a()()),t&2&&(g(12),I("src",i.sanitizedVideoUrl,Rb))},styles:[".video-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{font-size:1.1rem}"]})};var Cc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-reactjs"]],decls:96,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"D\xE9ploiement d'une application React.js sur GitHub Pages"),a(),y(2,"hr"),l(3,"p"),s(4,"Dans ce cours, tu vas apprendre \xE0 d\xE9ployer une application React.js sur GitHub Pages en suivant ces \xE9tapes :"),a(),l(5,"ul")(6,"li"),s(7,"\u2705 Cr\xE9er et configurer le projet React"),a(),l(8,"li"),s(9,"\u2705 Installer et configurer gh-pages"),a(),l(10,"li"),s(11,"\u2705 D\xE9ployer sur GitHub Pages"),a(),l(12,"li"),s(13,"\u2705 Mettre \xE0 jour le site apr\xE8s modification"),a()(),l(14,"h2"),s(15,"1\uFE0F\u20E3 Pr\xE9requis"),a(),l(16,"p"),s(17,"Avant de commencer, assure-toi d\u2019avoir :"),a(),l(18,"ul")(19,"li"),s(20,"\u2705 Node.js install\xE9"),a(),l(21,"li"),s(22,"\u2705 Git install\xE9"),a(),l(23,"li"),s(24,"\u2705 Un compte GitHub"),a(),l(25,"li"),s(26,"\u2705 Une application React.js pr\xEAte \xE0 \xEAtre d\xE9ploy\xE9e"),a()(),l(27,"h2"),s(28,"2\uFE0F\u20E3 Cr\xE9er un projet React (si tu n'en as pas encore)"),a(),l(29,"p"),s(30,"Si tu n'as pas encore d'application React, cr\xE9e-en une avec :"),a(),l(31,"pre",0),s(32,`npx create-react-app my-app
cd my-app
git init
`),a(),l(33,"p"),s(34,"Ajoute ton projet sur GitHub :"),a(),l(35,"pre",0),s(36,`git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/NOM_DU_REPO.git
git add .
git commit -m "Initial commit"
git push -u origin main
`),a(),l(37,"h2"),s(38,"3\uFE0F\u20E3 Installer gh-pages"),a(),l(39,"p"),s(40,"Dans ton projet React, installe le package gh-pages :"),a(),l(41,"pre",0),s(42,"npm install gh-pages --save-dev"),a(),l(43,"h2"),s(44,"4\uFE0F\u20E3 Configurer package.json"),a(),l(45,"p"),s(46,"Ajoute cette ligne en haut de package.json :"),a(),l(47,"pre",0),s(48,`"homepage": "https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO"
`),a(),l(49,"p"),s(50,'Ensuite, modifie la section "scripts" :'),a(),l(51,"pre",0),s(52,`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
`),a(),l(53,"p"),s(54,"\u{1F4CC} Explication :"),a(),l(55,"ul")(56,"li"),s(57,`"homepage" \u2192 D\xE9finit l'URL o\xF9 ton site sera h\xE9berg\xE9.`),a(),l(58,"li"),s(59,'"predeploy" \u2192 G\xE9n\xE8re les fichiers statiques dans build/.'),a(),l(60,"li"),s(61,'"deploy" \u2192 Envoie le dossier build/ sur GitHub Pages.'),a()(),l(62,"h2"),s(63,"5\uFE0F\u20E3 D\xE9ployer l'application"),a(),l(64,"p"),s(65,"Ex\xE9cute cette commande :"),a(),l(66,"pre",0),s(67,`npm run deploy
`),a(),l(68,"p"),s(69,"Cela va :"),a(),l(70,"ul")(71,"li"),s(72,"G\xE9n\xE9rer le build de l\u2019application (npm run build)."),a(),l(73,"li"),s(74,"D\xE9ployer sur GitHub Pages via la branche gh-pages."),a()(),l(75,"h2"),s(76,"6\uFE0F\u20E3 Activer GitHub Pages"),a(),l(77,"ul")(78,"li"),s(79,'Va sur GitHub \u2192 "Settings" \u2192 "Pages"'),a(),l(80,"li"),s(81,'Dans "Source", s\xE9lectionne gh-pages'),a(),l(82,"li"),s(83,"Enregistre et attends quelques minutes"),a(),l(84,"li"),s(85,"Ton site sera disponible ici :"),a()(),l(86,"pre",0),s(87,`https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO/
    `),a(),l(88,"h2"),s(89,"7\uFE0F\u20E3 Mettre \xE0 jour l\u2019application"),a(),l(90,"p"),s(91,"Chaque fois que tu fais une modification, ex\xE9cute :"),a(),l(92,"pre",0),s(93,`npm run deploy
    `),a(),l(94,"p"),s(95,"Cela mettra \xE0 jour ton site automatiquement."),a())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}"]})};var wc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-angular-depl-git"]],decls:85,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"\u{1F680} D\xE9ploiement d\u2019une application Angular sur GitHub Pages"),a(),y(2,"hr"),l(3,"p"),s(4," Dans ce cours, nous allons apprendre \xE0 d\xE9ployer une application Angular sur GitHub Pages en quelques \xE9tapes. "),a(),l(5,"h2"),s(6,"\u{1F4CC} 1. Pr\xE9requis"),a(),l(7,"div")(8,"p"),s(9,"Avant de commencer, assurez-vous d\u2019avoir :"),a(),l(10,"p"),s(11,"\u2705 Un projet Angular pr\xEAt \xE0 \xEAtre d\xE9ploy\xE9."),a(),l(12,"p"),s(13,"\u2705 Un compte GitHub avec un d\xE9p\xF4t pour votre projet."),a(),l(14,"p"),s(15,"\u2705 Node.js et Angular CLI install\xE9s sur votre machine."),a()(),l(16,"h2"),s(17,"\u{1F4CC} 2. Configurer Angular pour le d\xE9ploiement"),a(),l(18,"h4"),s(19,"\u{1F539} \xC9tape 1 : Installer angular-cli-ghpages"),a(),l(20,"p"),s(21," Ce package permet de d\xE9ployer l\u2019application directement sur GitHub Pages. "),a(),l(22,"pre",0),s(23,"npm install -g angular-cli-ghpages"),a(),l(24,"h4"),s(25,"\u{1F539} \xC9tape 2 : Construire l\u2019application Angular"),a(),l(26,"p"),s(27," Avant de d\xE9ployer, nous devons g\xE9n\xE9rer les fichiers optimis\xE9s pour la production. "),a(),l(28,"p"),s(29,"Ex\xE9cutez cette commande :"),a(),l(30,"pre",0),s(31,`ng build --output-path=dist --base-href="/NOM_DU_REPO_GITHUB/"
`),a(),l(32,"h4"),s(33,"\u{1F4CC} Explication :"),a(),l(34,"p"),s(35," --output-path=dist \u2192 G\xE9n\xE8re les fichiers de l\u2019application dans le dossier dist/ "),a(),l(36,"p"),s(37,' --base-href="/NOM_DU_REPO_GITHUB/" \u2192 D\xE9finit le chemin de base correct pour GitHub Pages. '),a(),l(38,"p"),s(39,"\u26A0\uFE0F Remplacez NOM_DU_REPO_GITHUB par le nom r\xE9el de votre d\xE9p\xF4t."),a(),l(40,"h2"),s(41,"\u{1F4CC} 3. D\xE9ployer sur GitHub Pages"),a(),l(42,"h4"),s(43,"\u{1F539} \xC9tape 3 : Initialiser Git dans votre projet"),a(),l(44,"p"),s(45," Si ce n\u2019est pas encore fait, initialisez Git et ajoutez votre projet \xE0 un d\xE9p\xF4t distant : "),a(),l(46,"pre",0),s(47,`git init
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/NOM_DU_REPO_GITHUB.git
git add .
git commit -m "D\xE9ploiement initial"
git push -u origin main
`),a(),l(48,"p"),s(49," \u26A0\uFE0F Remplacez VOTRE_NOM_UTILISATEUR et NOM_DU_REPO_GITHUB par vos informations. "),a(),l(50,"h4"),s(51,"\u{1F539} \xC9tape 4 : D\xE9ployer sur GitHub Pages"),a(),l(52,"p"),s(53,"Utilisez la commande suivante pour publier l\u2019application :"),a(),l(54,"pre",0),s(55,`npx angular-cli-ghpages --dir=dist
`),a(),l(56,"p"),s(57,"\u{1F4CC} Explication :"),a(),l(58,"p"),s(59,"--dir=dist \u2192 Indique que les fichiers \xE0 d\xE9ployer sont dans le dossier dist/."),a(),l(60,"h2"),s(61,"\u{1F4CC} 4. Activer GitHub Pages"),a(),l(62,"ul")(63,"li"),s(64,"Allez sur votre d\xE9p\xF4t GitHub. "),a(),l(65,"li"),s(66,'Allez dans l\u2019onglet "Settings" (Param\xE8tres). '),a(),l(67,"li"),s(68,'Cliquez sur "Pages" dans la barre lat\xE9rale gauche. '),a(),l(69,"li"),s(70,'Dans "Source", s\xE9lectionnez la branche gh-pages. '),a(),l(71,"li"),s(72,"Enregistrez et attendez quelques minutes. "),a()(),l(73,"p"),s(74,"Votre application sera disponible \xE0 l\u2019adresse :"),a(),l(75,"pre",0),s(76,`https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_REPO_GITHUB/
    `),a(),l(77,"h2"),s(78,"\u{1F4CC} 5. Tester et Mettre \xE0 Jour "),a(),l(79,"p"),s(80,"Si vous modifiez votre application Angular, refaites simplement :"),a(),l(81,"pre",0),s(82,`ng build --output-path=dist --base-href="/NOM_DU_REPO_GITHUB/"
npx angular-cli-ghpages --dir=dist
`),a(),l(83,"p"),s(84,`Vous pouvez ensuite rafra\xEEchir la page GitHub Pages pour voir les changements.
`),a())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}"]})};var m2=["tab1"],h2=["tab2"],f2=["tab3"];function g2(n,e){if(n&1&&(l(0,"div",20)(1,"div",21)(2,"div",22)(3,"h3",23),s(4),a(),l(5,"p",24),s(6),a(),l(7,"p",25)(8,"strong"),s(9,"Prix: "),a(),s(10),dt(11,"currency"),a()()()()),n&2){let t=e.$implicit;g(4),$(" ",t.title," "),g(),I("title",t.description),g(),$(" ",t.description," "),g(4),$("",On(11,4,t.price)," ")}}function v2(n,e){if(n&1&&(l(0,"div",18),N(1,g2,12,6,"div",19),dt(2,"slice"),a()),n&2){let t=ce();g(),I("ngForOf",Pl(2,1,t.products,0,4))}}function _2(n,e){n&1&&(l(0,"p"),s(1,"Aucun produit trouv\xE9."),a())}function b2(n,e){n&1&&(l(0,"span",26),s(1,"copied "),y(2,"i",27),a())}function y2(n,e){n&1&&(l(0,"span",26),s(1,"copied "),y(2,"i",27),a())}function E2(n,e){n&1&&(l(0,"span",26),s(1,"copied "),y(2,"i",27),a())}var Tc=class n{constructor(e){this.route=e}products=[];ngOnInit(){this.route.data.subscribe(e=>{this.products=e.products,console.log("this.products :",this.products)})}infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(_t))};static \u0275cmp=k({type:n,selectors:[["app-resolver"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,m2,5),q(i.infoTab2,h2,5),q(i.infoTab3,f2,5)),t&2&&ne(3)},decls:69,vars:5,consts:[["noProducts",""],["tab1",""],["tab3",""],[1,"container"],["class","row",4,"ngIf","ngIfElse"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"text-danger"],[1,"row"],["class","col-12 col-sm-6 col-md-3 col-lg-3 mb-4",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-3","col-lg-3","mb-4"],[1,"card","d-flex","flex-column","mb-4"],[1,"card-body","d-flex","flex-column"],[1,"card-title","text-truncate","fw-bold"],[1,"card-text","text-truncate",3,"title"],[1,"card-text"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"Resolver"),a(),y(3,"hr"),l(4,"p"),s(5," Un Resolver dans Angular est une fonctionnalit\xE9 qui permet de pr\xE9charger des donn\xE9es avant que la route ne soit activ\xE9e. Il est utile lorsqu'on veut s'assurer que certaines donn\xE9es sont disponibles avant l'affichage d'un composant. "),a(),l(6,"h2"),s(7,"Pourquoi utiliser un Resolver ?"),a(),l(8,"ul")(9,"li"),s(10,"Pr\xE9charge les donn\xE9es avant d'afficher un composant."),a(),l(11,"li"),s(12,"\xC9vite les affichages partiels ou des \xE9crans vides le temps du chargement."),a(),l(13,"li"),s(14,"Assure que les donn\xE9es sont pr\xEAtes avant la navigation."),a(),l(15,"li"),s(16,"Centralise la gestion des appels API li\xE9s aux routes."),a()(),l(17,"h3"),s(18,"Liste des produits"),a(),N(19,v2,3,5,"div",4)(20,_2,2,0,"ng-template",null,0,ii),a(),l(22,"ul",5)(23,"li",6)(24,"button",7),s(25," Composant Parent "),a()(),l(26,"li",6)(27,"button",8),s(28," resolver "),a()(),l(29,"li",6)(30,"button",9),s(31," demarche \xE0 suivre "),a()()(),l(32,"div",10)(33,"div",11)(34,"i",12),C("click",function(){return S(r),A(i.copy1())}),a(),N(35,b2,3,0,"span",13),l(36,"pre",14,1),W(),s(38,`          import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  imports: [CommonModule],
  template: \`
   <div class="container">
  <h1>Resolver</h1>
  <hr />
  <h3>Liste des produits</h3>
  <div *ngIf="products.length > 0; else noProducts" class="row">
    <div
      *ngFor="let product of products | slice: 0:4"
      class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4"
    >
      <div class="card d-flex flex-column mb-4">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title text-truncate fw-bold">{{ product.title }}</h3>
          <p class="card-text text-truncate" [title]="product.description">
            {{ product.description }}
          </p>
          <p class="card-text">
            <strong>Prix: </strong>{{ product.price | currency }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <ng-template #noProducts>
    <p>Aucun produit trouv\xE9.</p>
  </ng-template>
</div>

  \`,
})
export class ResolverComponent implements OnInit {
  products: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // R\xE9cup\xE8re les donn\xE9es du resolver
    this.route.data.subscribe((data) => {
      this.products = data['products'];
      console.log('this.products :', this.products);
    });
  }
}
`),H(),a()(),l(39,"div",15)(40,"i",12),C("click",function(){return S(r),A(i.copy2())}),a(),N(41,y2,3,0,"span",13),l(42,"pre",14,1),W(),s(44,`import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<any[]> {
  // Utilisation de JSONPlaceholder pour simuler une API de produits
  private apiUrl = 'https://fakestoreapi.com/products';  // URL de l'API simul\xE9e pour r\xE9cup\xE9rer des "produits"

  constructor(private http: HttpClient) {}

  resolve(): Observable<any[]> {
    // Appel direct \xE0 l'API pour r\xE9cup\xE9rer les produits
    return this.http.get<any[]>(this.apiUrl);
  }
}
`),H(),a()(),l(45,"div",16)(46,"i",12),C("click",function(){return S(r),A(i.copy3())}),a(),N(47,E2,3,0,"span",13),l(48,"pre",14,2),W(),l(50,"strong"),s(51,"1. G\xE9n\xE9rer le Resolver:"),a(),l(52,"span",17),s(53,"ng generate resolver services/nom-du-resolver"),a(),s(54,`
Cela cr\xE9e un fichier TypeScript avec une classe impl\xE9mentant Resolve.

`),l(55,"strong"),s(56,"2. Impl\xE9menter la logique de r\xE9cup\xE9ration des donn\xE9es dans le resolver:"),a(),s(57,`
(voir code du resolver)

`),l(58,"strong"),s(59,"3. D\xE9clarer le Resolver dans le Routing Module :"),a(),s(60,` Ajouter le Resolver dans la configuration des routes:
`),l(61,"span",17),s(62,`const routes: Routes = [
  {
    path: 'chemin',
    component: NomComponent,
    resolve: {
      nomData: NomResolver
    }
  }
];`),a(),s(63,`

`),l(64,"strong"),s(65,"4. R\xE9cup\xE9rer les donn\xE9es dans le Composant :"),a(),s(66,` Utiliser ActivatedRoute pour acc\xE9der aux donn\xE9es r\xE9solues :
`),l(67,"span",17),s(68,`this.route.data.subscribe(data => {
  console.log(data.nomData);
});`),a(),H(),a()()()}if(t&2){let r=tt(21);g(19),I("ngIf",i.products.length>0)("ngIfElse",r),g(16),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked)}},dependencies:[G,Xe,te,Ol,Ml],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var xc=class n{constructor(e){this.http=e}apiUrl="https://fakestoreapi.com/products";resolve(){return this.http.get(this.apiUrl)}static \u0275fac=function(t){return new(t||n)(oe(en))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ic=class n{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-name"]],decls:19,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"Chargement de Modules avec Lazy Loading"),a(),y(2,"hr"),l(3,"p"),s(4,"Lazy loading charge des modules uniquement quand l\u2019utilisateur en a besoin."),a(),l(5,"h2"),s(6,"Exemple: Lazy Loading d\u2019un Module Admin"),a(),l(7,"h4"),s(8,"1. D\xE9finition de la route en Lazy Loading (app.routes.ts) :"),a(),l(9,"pre",0),s(10,"{ path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.routes) }"),a(),l(11,"h4"),s(12,"2. Cr\xE9ation du fichier admin.routes.ts :"),a(),l(13,"pre",0),s(14,`import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const routes: Routes = [{ path: '', component: AdminComponent }];
`),a(),l(15,"h4"),s(16,"Module AdminComponent :"),a(),l(17,"pre",0),s(18,`import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: \`<h2>Bienvenue dans l'admin</h2>\`
})
export class AdminComponent {}`),a())},encapsulation:2})};var C2=["tab1"],w2=["tab2"];function T2(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}function x2(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}var Sc=class n{infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-guard"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,C2,5),q(i.infoTab2,w2,5)),t&2&&ne(2)},decls:61,vars:2,consts:[["tab1",""],[1,"container"],[1,"tab"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"fs-2"],[2,"font-size","14px"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"Route Guards: Prot\xE9ger les Pages"),a(),y(3,"hr"),l(4,"p"),s(5,"Les Route Guards permettent d\u2019emp\xEAcher l\u2019acc\xE8s \xE0 certaines pages (ex: page admin)."),a(),l(6,"h2"),s(7,"Exemple: Bloquer l\u2019acc\xE8s aux utilisateurs non connect\xE9s:"),a(),l(8,"h4"),s(9,"1. Cr\xE9ation du Guard (auth.guard.ts) :"),a(),l(10,"pre",2),s(11,`import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const isAuthenticated = localStorage.getItem('token'); // Simule une connexion
  const router = inject(Router);

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};`),a(),l(12,"h4"),s(13,"2. Application du Guard \xE0 une route (app.routes.ts) :"),a(),l(14,"pre",2),s(15,`{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
`),a(),l(16,"ul",3)(17,"li",4)(18,"button",5),s(19," fichier guard "),a()(),l(20,"li",4)(21,"button",6),s(22," fichier route "),a()()(),l(23,"div",7)(24,"div",8)(25,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(26,T2,3,0,"span",10),l(27,"pre",11,0),W(),s(29,`import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../ngrx/data.slice';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const store = inject(Store);
  // V\xE9rifiez si l'utilisateur est connect\xE9 (par exemple, via un token)
  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  let isLoggedIn :boolean=false;
  store.select(selectIsLoggedIn).subscribe(islog=>isLoggedIn=islog)
  if (isLoggedIn) {
    return true; // Autorise l'acc\xE8s
  } else {
    // Redirige l'utilisateur vers la page de connexion
    router.navigate(['/login']);
    return false; // Bloque l'acc\xE8s
  }
};`),H(),a()(),l(30,"div",12)(31,"i",9),C("click",function(){return S(r),A(i.copy2())}),a(),N(32,x2,3,0,"span",10),l(33,"pre",11,0),W(),s(35,`import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    //guard
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  ];
`),H(),a()()(),l(36,"div"),s(37,`
____________________________________________________________________________`),l(38,"span",13),s(39,"cours"),a(),s(40,"____________________________________________________________________________ "),l(41,"pre",14),s(42,`
Un Guard sur Angular est une fonctionnalit\xE9 qui vous permet de contr\xF4ler l'acc\xE8s \xE0 des routes sp\xE9cifiques dans votre application.
Vous pouvez utiliser des guards pour ex\xE9cuter certaines v\xE9rifications ou actions avant de permettre l'acc\xE8s \xE0 une route,
par exemple pour v\xE9rifier si l'utilisateur est authentifi\xE9 ou a les droits d'acc\xE8s appropri\xE9s.

`),l(43,"strong"),s(44,"1. Cr\xE9ation de la page de guard:"),a(),s(45,`
`),l(46,"span",15),s(47,"commande: ng generate guard guards/guard"),a(),s(48,`

`),l(49,"strong"),s(50,"2. Code de base de la page de guard:"),a(),s(51,`
`),l(52,"span",15),s(53,`import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
//logique pour retourner true ou  false.
true permet l'acc\xE8s \xE0 la page prot\xE9g\xE9 par ce guard.
false ne le permet pas
};`),a(),s(54,`

`),l(55,"strong"),s(56,"3. Utilisation de guard dans le fichier app.route.ts:"),a(),s(57,`
pour prot\xE9ger page dashboard:
{path: 'dashboard', component: DashboardComponent, `),l(58,"span",15),s(59,"canActivate: [authGuard]"),a(),s(60,`,},
`),a()()()}t&2&&(g(26),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Ac=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-redirection"]],decls:15,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"Redirections et Pages 404 (Not Found)"),a(),y(2,"hr"),l(3,"p"),s(4,"On peut rediriger une URL et g\xE9rer les erreurs 404."),a(),l(5,"h2"),s(6,"Exemple: Page 404"),a(),l(7,"h4"),s(8,"1. D\xE9finition des routes avec une redirection (app.routes.ts) :"),a(),l(9,"pre",0),s(10,`{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent } // G\xE8re les pages inexistantes
`),a(),l(11,"h4"),s(12,"2. Cr\xE9ation du composant NotFoundComponent.ts :"),a(),l(13,"pre",0),s(14,`import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: \`<h2>Page non trouv\xE9e</h2>\`
})
export class NotFoundComponent {}
`),a())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace;font-weight:700}"]})};var Pc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-routes-parametre-req"]],decls:19,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"Route avec Query Parameters (Param\xE8tres de requ\xEAte)"),a(),y(2,"hr"),l(3,"p"),s(4,"Les Query Params permettent de passer des informations suppl\xE9mentaires dans l'URL."),a(),l(5,"h2"),s(6,"Exemple: Filtres dans une liste de produits"),a(),l(7,"h4"),s(8,"1. D\xE9finition de la route (app.routes.ts) :"),a(),l(9,"pre",0),s(10,"{ path: 'products', component: ProductListComponent }"),a(),l(11,"h4"),s(12,"2. R\xE9cup\xE9ration des Query Params (ProductListComponent.ts) :"),a(),l(13,"pre",0),s(14,`import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  template: \`<h2>Cat\xE9gorie: { { category } }</h2>\`
})
export class ProductListComponent {
  category: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category') || 'Toutes';
    });
  }
}`),a(),l(15,"h4"),s(16,"3. Lien avec Query Params :"),a(),l(17,"pre",0),s(18,`<a [routerLink]="['/products']" [queryParams]="{ category: 'electronics' }">oir les \xC9lectroniques>/a>`),a())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}p[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace;font-weight:700}"]})};var Rc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-routes-avec-parametres"]],decls:19,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"Routes Dynamiques avec des Param\xE8tres"),a(),y(2,"hr"),l(3,"p"),s(4,"Les routes peuvent accepter des param\xE8tres pour afficher du contenu dynamique."),a(),l(5,"h2"),s(6,"Exemple: Route avec un ID utilisateur"),a(),l(7,"h4"),s(8,"1. D\xE9finition de la route (app.routes.ts) :"),a(),l(9,"pre",0),s(10,"{ path: 'user/:id', component: UserComponent }"),a(),l(11,"h4"),s(12,"2. R\xE9cup\xE9ration du param\xE8tre dans UserComponent :"),a(),l(13,"pre",0),s(14,`import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: \`<h2>Utilisateur ID: { { userId } }</h2>\`
})
export class UserComponent {
  userId: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || '';
    });
  }
}`),a(),l(15,"h4"),s(16,"3. Lien dynamique pour naviguer vers un utilisateur :"),a(),l(17,"pre",0),s(18,`<a [routerLink]="['/user', 42]">Voir l'utilisateur 42</a>`),a())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace;font-weight:700}"]})};var Dc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-utilisation-service"]],decls:67,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"h1"),s(1,"Les Services dans Angular"),a(),l(2,"p"),s(3," Les services dans Angular sont utilis\xE9s pour centraliser la logique m\xE9tier et faciliter le partage de donn\xE9es entre plusieurs composants. Ils permettent d'effectuer des appels API, de g\xE9rer un \xE9tat global, et de r\xE9duire la redondance du code. "),a(),l(4,"h2"),s(5,"\u{1F4CC} Pourquoi utiliser un Service ?"),a(),l(6,"ul")(7,"li"),s(8,"S\xE9parer la logique m\xE9tier du composant."),a(),l(9,"li"),s(10,"R\xE9utiliser le code dans plusieurs composants."),a(),l(11,"li"),s(12,"Faciliter la gestion des appels HTTP vers une API."),a(),l(13,"li"),s(14,"Permettre l\u2019injection de d\xE9pendances."),a()(),l(15,"h2"),s(16,"\u{1F3D7} Cr\xE9er et Utiliser un Service dans Angular"),a(),l(17,"h4"),s(18,"1. Cr\xE9er un Service"),a(),l(19,"pre",0),s(20,`ng generate service services/product
`),a(),l(21,"p"),s(22,"Cela cr\xE9e deux fichiers :"),a(),l(23,"ul")(24,"li"),s(25,"product.service.ts"),a(),l(26,"li"),s(27,"product.service.spec.ts (pour les tests)"),a()(),l(28,"h4"),s(29,"2. D\xE9finition du Service"),a(),l(30,"p"),s(31," Dans le fichier product.service.ts, on cr\xE9e un service pour g\xE9rer les produits. "),a(),l(32,"pre",0),s(33,`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root', // Permet au service d'\xEAtre accessible partout
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de l'API

  constructor(private http: HttpClient) {}

  // R\xE9cup\xE9rer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // R\xE9cup\xE9rer un produit par ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(\`\${this.apiUrl}/\${id}\`);
  }

  // Ajouter un produit
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Mettre \xE0 jour un produit
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(\`\${this.apiUrl}/\${id}\`, product);
  }

  // Supprimer un produit
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}`),a(),l(34,"h4"),s(35,"\u{1F449} Explication :"),a(),l(36,"ul")(37,"li"),s(38," @Injectable({ providedIn: 'root' }) : Le service est injectable et accessible dans toute l'application. "),a(),l(39,"li"),s(40,"HttpClient : Permet d'effectuer des requ\xEAtes HTTP vers une API."),a(),l(41,"li"),s(42," Observable<T> : Utilis\xE9 pour g\xE9rer les donn\xE9es de mani\xE8re asynchrone avec RxJS. "),a()(),l(43,"h4"),s(44,"Utiliser un Service dans un Composant:"),a(),l(45,"p"),s(46," Maintenant que le service est cr\xE9\xE9, nous pouvons l'utiliser dans un composant. "),a(),s(47," \u{1F539} Injection du Service dans un Composant Dans product-list.component.ts : "),l(48,"pre",0),s(49,`import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  template: \`
    <h1>Liste des Produits</h1>
    <ul>
      <li *ngFor="let product of products">
        { { product.nom } } - { { product.prix | currency } }
      </li>
    </ul>
  \`,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}`),a(),l(50,"h4"),s(51,"\u{1F449} Explication :"),a(),l(52,"ul")(53,"li"),s(54," constructor(private productService: ProductService) {} : Injection du service. "),a(),l(55,"li"),s(56," this.productService.getProducts().subscribe(...) : R\xE9cup\xE8re les donn\xE9es et les stocke dans products. "),a()(),l(57,"h4"),s(58,"\u{1F3AF} Avantages des Services"),a(),l(59,"p"),s(60," \u2705 R\xE9utilisabilit\xE9 : Un m\xEAme service peut \xEAtre utilis\xE9 dans plusieurs composants. "),a(),l(61,"p"),s(62," \u2705 Centralisation de la logique m\xE9tier : Facilite la maintenance et la gestion des appels API. "),a(),l(63,"p"),s(64," \u2705 Facilit\xE9 de test : Permet d\u2019\xE9crire des tests unitaires ind\xE9pendants des composants. "),a(),l(65,"p"),s(66,"\u2705 Optimisation des performances : \xC9vite les appels API redondants."),a())},styles:[".tab[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}"]})};var kc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-routes-intro"]],decls:20,vars:0,consts:[[1,"tab"]],template:function(t,i){t&1&&(l(0,"div")(1,"h1"),s(2,"Introduction au Routing Angular"),a(),y(3,"hr"),l(4,"p"),s(5," Le routing permet de naviguer entre diff\xE9rentes pages sans recharger l'application. Angular utilise RouterModule pour g\xE9rer cette navigation. "),a(),l(6,"h2"),s(7,"Exemple d\u2019une application avec le routing"),a(),l(8,"h3"),s(9,"D\xE9finition des routes (app.routes.ts) :"),a(),l(10,"pre",0),s(11,`// Importation du module Routes d'Angular pour d\xE9finir les routes
import { Routes } from '@angular/router';

// Importation des composants qui seront affich\xE9s selon l'URL
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

// D\xE9finition des routes de l'application
export const routes: Routes = [
  {
    path: '', // Chemin vide correspondant \xE0 la page d'accueil
    component: HomeComponent // Affiche le composant HomeComponent
  },
  {
    path: 'about', // URL /about affichera la page "\xC0 propos"
    component: AboutComponent // Affiche le composant AboutComponent
  }
];
`),a(),l(12,"h3"),s(13,"Ajout du router dans app.config.ts :"),a(),l(14,"pre",0),s(15,`import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};`),a(),l(16,"h3"),s(17,"Ajout des liens dans le template (app.component.html) :"),a(),l(18,"pre",0),s(19,`<!-- Menu de navigation -->
<nav>
  <!-- Lien vers la page d'accueil avec la directive routerLink -->
  <a routerLink="/">Accueil</a>

  <!-- Lien vers la page "\xC0 propos" avec la directive routerLink -->
  <a routerLink="/about">\xC0 propos</a>
</nav>

<!-- Point d'insertion pour le contenu dynamique des routes -->
<router-outlet></router-outlet>`),a()())},styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace;font-weight:700}"]})};function I2(n,e){if(n&1&&(l(0,"p"),s(1),a()),n&2){let t=ce();g(),$("Ancien message : ",t.previousMessage,"")}}var Mc=class n{message;previousMessage="";ngOnChanges(e){e.message&&!e.message.firstChange&&(this.previousMessage=e.message.previousValue)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-child"]],inputs:{message:"message"},features:[wn],decls:6,vars:2,consts:[[1,"border","p-2","my-3"],[4,"ngIf"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h3"),s(2,"Composant Enfant"),a(),l(3,"p"),s(4),a(),N(5,I2,2,1,"p",1),a()),t&2&&(g(4),$("Message re\xE7u : ",i.message,""),g(),I("ngIf",i.previousMessage))},dependencies:[G,te],encapsulation:2})};var JE=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(se(ys),se(kr))};static \u0275dir=et({type:n})}return n})(),Rh=(()=>{class n extends JE{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,features:[Bt]})}return n})(),so=new ue(""),S2={provide:so,useExisting:dn(()=>Dh),multi:!0},Dh=(()=>{class n extends Rh{writeValue(t){this.setProperty("checked",t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,r){i&1&&C("change",function(c){return r.onChange(c.target.checked)})("blur",function(){return r.onTouched()})},standalone:!1,features:[hn([S2]),Bt]})}return n})(),A2={provide:so,useExisting:dn(()=>De),multi:!0};function P2(){let n=qr()?qr().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var R2=new ue(""),De=(()=>{class n extends JE{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!P2())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(se(ys),se(kr),se(R2,8))};static \u0275dir=et({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&C("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[hn([A2]),Bt]})}return n})();function Oi(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function XE(n){return n!=null&&typeof n.length=="number"}var Vi=new ue(""),ua=new ue(""),D2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Un=class{static min(e){return YE(e)}static max(e){return ZE(e)}static required(e){return e1(e)}static requiredTrue(e){return k2(e)}static email(e){return M2(e)}static minLength(e){return O2(e)}static maxLength(e){return N2(e)}static pattern(e){return V2(e)}static nullValidator(e){return Nc(e)}static compose(e){return s1(e)}static composeAsync(e){return a1(e)}};function YE(n){return e=>{if(Oi(e.value)||Oi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ZE(n){return e=>{if(Oi(e.value)||Oi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function e1(n){return Oi(n.value)?{required:!0}:null}function k2(n){return n.value===!0?null:{required:!0}}function M2(n){return Oi(n.value)||D2.test(n.value)?null:{email:!0}}function O2(n){return e=>Oi(e.value)||!XE(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function N2(n){return e=>XE(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function V2(n){if(!n)return Nc;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Oi(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Nc(n){return null}function t1(n){return n!=null}function n1(n){return Sl(n)?He(n):n}function i1(n){let e={};return n.forEach(t=>{e=t!=null?K(K({},e),t):e}),Object.keys(e).length===0?null:e}function r1(n,e){return e.map(t=>t(n))}function F2(n){return!n.validate}function o1(n){return n.map(e=>F2(e)?e:t=>e.validate(t))}function s1(n){if(!n)return null;let e=n.filter(t1);return e.length==0?null:function(t){return i1(r1(t,e))}}function kh(n){return n!=null?s1(o1(n)):null}function a1(n){if(!n)return null;let e=n.filter(t1);return e.length==0?null:function(t){let i=r1(t,e).map(n1);return q_(i).pipe(ve(i1))}}function Mh(n){return n!=null?a1(o1(n)):null}function $E(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function l1(n){return n._rawValidators}function c1(n){return n._rawAsyncValidators}function Sh(n){return n?Array.isArray(n)?n:[n]:[]}function Vc(n,e){return Array.isArray(n)?n.includes(e):n===e}function GE(n,e){let t=Sh(e);return Sh(n).forEach(r=>{Vc(t,r)||t.push(r)}),t}function HE(n,e){return Sh(e).filter(t=>!Vc(n,t))}var Fc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=kh(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Mh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},ai=class extends Fc{name;get formDirective(){return null}get path(){return null}},li=class extends Fc{_parent=null;name=null;valueAccessor=null},Lc=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},L2={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},UU=we(K({},L2),{"[class.ng-submitted]":"isSubmitted"}),Oe=(()=>{class n extends Lc{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(se(li,2))};static \u0275dir=et({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&vt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Bt]})}return n})(),Ot=(()=>{class n extends Lc{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(se(ai,10))};static \u0275dir=et({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&vt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Bt]})}return n})();var ra="VALID",Oc="INVALID",io="PENDING",oa="DISABLED",Ni=class{},Uc=class extends Ni{value;source;constructor(e,t){super(),this.value=e,this.source=t}},aa=class extends Ni{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},la=class extends Ni{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},ro=class extends Ni{status;source;constructor(e,t){super(),this.status=e,this.source=t}},Ah=class extends Ni{source;constructor(e){super(),this.source=e}},Ph=class extends Ni{source;constructor(e){super(),this.source=e}};function u1(n){return($c(n)?n.validators:n)||null}function U2(n){return Array.isArray(n)?kh(n):n||null}function d1(n,e){return($c(e)?e.asyncValidators:n)||null}function j2(n){return Array.isArray(n)?Mh(n):n||null}function $c(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function B2(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new Le(1e3,"");if(!i[t])throw new Le(1001,"")}function q2(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new Le(1002,"")})}var jc=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Nn(this.statusReactive)}set status(e){Nn(()=>this.statusReactive.set(e))}_status=fn(()=>this.statusReactive());statusReactive=Je(void 0);get valid(){return this.status===ra}get invalid(){return this.status===Oc}get pending(){return this.status==io}get disabled(){return this.status===oa}get enabled(){return this.status!==oa}errors;get pristine(){return Nn(this.pristineReactive)}set pristine(e){Nn(()=>this.pristineReactive.set(e))}_pristine=fn(()=>this.pristineReactive());pristineReactive=Je(!0);get dirty(){return!this.pristine}get touched(){return Nn(this.touchedReactive)}set touched(e){Nn(()=>this.touchedReactive.set(e))}_touched=fn(()=>this.touchedReactive());touchedReactive=Je(!1);get untouched(){return!this.touched}_events=new ot;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(GE(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(GE(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(HE(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(HE(e,this._rawAsyncValidators))}hasValidator(e){return Vc(this._rawValidators,e)}hasAsyncValidator(e){return Vc(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(we(K({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new la(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new la(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(we(K({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new aa(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new aa(!0,i))}markAsPending(e={}){this.status=io;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ro(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(we(K({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=oa,this.errors=null,this._forEachChild(r=>{r.disable(we(K({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Uc(this.value,i)),this._events.next(new ro(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(we(K({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ra,this._forEachChild(i=>{i.enable(we(K({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(we(K({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ra||this.status===io)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Uc(this.value,t)),this._events.next(new ro(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(we(K({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?oa:ra}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=io,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=n1(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new ro(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new gt,this.statusChanges=new gt}_calculateStatus(){return this._allControlsDisabled()?oa:this.errors?Oc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(io)?io:this._anyControlsHaveStatus(Oc)?Oc:ra}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new aa(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new la(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$c(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=U2(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=j2(this._rawAsyncValidators)}},oo=class extends jc{constructor(e,t,i){super(u1(t),d1(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){q2(this,!0,e),Object.keys(e).forEach(i=>{B2(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ao=new ue("CallSetDisabledState",{providedIn:"root",factory:()=>Gc}),Gc="always";function p1(n,e){return[...e.path,n]}function ca(n,e,t=Gc){Oh(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),$2(n,e),H2(n,e),G2(n,e),z2(n,e)}function Bc(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),zc(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function qc(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function z2(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Oh(n,e){let t=l1(n);e.validator!==null?n.setValidators($E(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=c1(n);e.asyncValidator!==null?n.setAsyncValidators($E(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();qc(e._rawValidators,r),qc(e._rawAsyncValidators,r)}function zc(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=l1(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=c1(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return qc(e._rawValidators,i),qc(e._rawAsyncValidators,i),t}function $2(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&m1(n,e)})}function G2(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&m1(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function m1(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function H2(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function h1(n,e){n==null,Oh(n,e)}function W2(n,e){return zc(n,e)}function Nh(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function K2(n){return Object.getPrototypeOf(n.constructor)===Rh}function f1(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Vh(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===De?t=o:K2(o)?i=o:r=o}),r||i||t||null}function Q2(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var J2={provide:ai,useExisting:dn(()=>zt)},sa=Promise.resolve(),zt=(()=>{class n extends ai{callSetDisabledState;get submitted(){return Nn(this.submittedReactive)}_submitted=fn(()=>this.submittedReactive());submittedReactive=Je(!1);_directives=new Set;form;ngSubmit=new gt;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new oo({},kh(t),Mh(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){sa.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),ca(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){sa.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){sa.then(()=>{let i=this._findContainer(t.path),r=new oo({});h1(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){sa.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){sa.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),f1(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(se(Vi,10),se(ua,10),se(ao,8))};static \u0275dir=et({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&C("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[hn([J2]),Bt]})}return n})();function WE(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function KE(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Fi=class extends jc{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(u1(t),d1(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$c(t)&&(t.nonNullable||t.initialValueIsDefault)&&(KE(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){WE(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){WE(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){KE(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var X2=n=>n instanceof Fi;var Y2={provide:li,useExisting:dn(()=>ke)},QE=Promise.resolve(),ke=(()=>{class n extends li{_changeDetectorRef;callSetDisabledState;control=new Fi;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new gt;constructor(t,i,r,o,c,d){super(),this._changeDetectorRef=c,this.callSetDisabledState=d,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Vh(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Nh(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ca(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){QE.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Zi(i);QE.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?p1(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(se(ai,9),se(Vi,10),se(ua,10),se(so,10),se(ws,8),se(ao,8))};static \u0275dir=et({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[hn([Y2]),Bt,wn]})}return n})(),Nt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=et({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),Z2={provide:so,useExisting:dn(()=>pt),multi:!0},pt=(()=>{class n extends Rh{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&C("input",function(c){return r.onChange(c.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[hn([Z2]),Bt]})}return n})();var Fh=new ue(""),eP={provide:li,useExisting:dn(()=>Lh)},Lh=(()=>{class n extends li{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new gt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,c){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=c,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Vh(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&Bc(i,this,!1),ca(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Nh(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Bc(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(se(Vi,10),se(ua,10),se(so,10),se(Fh,8),se(ao,8))};static \u0275dir=et({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[hn([eP]),Bt,wn]})}return n})(),tP={provide:ai,useExisting:dn(()=>Uh)},Uh=(()=>{class n extends ai{callSetDisabledState;get submitted(){return Nn(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=fn(()=>this._submittedReactive());_submittedReactive=Je(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new gt;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(zc(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return ca(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Bc(t.control||null,t,!1),Q2(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),f1(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Ah(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new Ph(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(Bc(i||null,t),X2(r)&&(ca(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);h1(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&W2(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Oh(this.form,this),this._oldForm&&zc(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(se(Vi,10),se(ua,10),se(ao,8))};static \u0275dir=et({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&C("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[hn([tP]),Bt,wn]})}return n})();var nP={provide:li,useExisting:dn(()=>jh)},jh=(()=>{class n extends li{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new gt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,c){super(),this._ngModelWarningConfig=c,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Vh(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Nh(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return p1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(se(ai,13),se(Vi,10),se(ua,10),se(so,10),se(Fh,8))};static \u0275dir=et({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[hn([nP]),Bt,wn]})}return n})();function g1(n){return typeof n=="number"?n:parseFloat(n)}var Bh=(()=>{class n{_validator=Nc;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Nc,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=et({type:n,features:[wn]})}return n})(),iP={provide:Vi,useExisting:dn(()=>qh),multi:!0},qh=(()=>{class n extends Bh{max;inputName="max";normalizeInput=t=>g1(t);createValidator=t=>ZE(t);static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[hn([iP]),Bt]})}return n})(),rP={provide:Vi,useExisting:dn(()=>zh),multi:!0},zh=(()=>{class n extends Bh{min;inputName="min";normalizeInput=t=>g1(t);createValidator=t=>YE(t);static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[hn([rP]),Bt]})}return n})(),oP={provide:Vi,useExisting:dn(()=>$t),multi:!0};var $t=(()=>{class n extends Bh{required;inputName="required";normalizeInput=Zi;createValidator=t=>e1;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})();static \u0275dir=et({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[hn([oP]),Bt]})}return n})();var v1=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=mn({type:n});static \u0275inj=pn({})}return n})();var Pe=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ao,useValue:t.callSetDisabledState??Gc}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=mn({type:n});static \u0275inj=pn({imports:[v1]})}return n})(),_1=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Fh,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ao,useValue:t.callSetDisabledState??Gc}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=mn({type:n});static \u0275inj=pn({imports:[v1]})}return n})();var sP=["tab1"],aP=["tab2"];function lP(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}function cP(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}var Hc=class n{message="";infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-ngonchanges"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,sP,5),q(i.infoTab2,aP,5)),t&2&&ne(2)},decls:42,vars:4,consts:[["tab1",""],[1,"container","mt-4"],[1,"border","p-2","my-0"],[1,"form-control",3,"ngModelChange","ngModel"],[3,"message"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"ngOnChanges() : D\xE9tecter les changements d'@Input()"),a(),y(3,"hr"),l(4,"p"),s(5,"\u27A1\uFE0F D\xE9clench\xE9 \xE0 chaque fois qu\u2019une propri\xE9t\xE9 @Input() change."),a(),l(6,"p"),s(7," \u27A1\uFE0F Utilisation principale : R\xE9agir aux changements de valeurs envoy\xE9es par un parent. "),a(),l(8,"h2"),s(9,"Pourquoi utiliser ngOnChanges() ?"),a(),l(10,"p"),s(11,"\u27A1\uFE0F Si on veut r\xE9agir \xE0 des mises \xE0 jour dynamiques depuis le parent"),a(),l(12,"p"),s(13," \u27A1\uFE0F Permet de voir les anciennes et nouvelles valeurs d\u2019une propri\xE9t\xE9 "),a(),l(14,"h2"),s(15," Exemple : Un composant enfant qui d\xE9tecte les changements de l\u2019@Input() re\xE7u du parent "),a(),y(16,"hr"),l(17,"div",2)(18,"h3"),s(19,"Composant Parent"),a(),l(20,"input",3),Ce("ngModelChange",function(c){return S(r),Ee(i.message,c)||(i.message=c),A(c)}),a(),y(21,"app-child",4),a(),l(22,"ul",5)(23,"li",6)(24,"button",7),s(25," Composant Parent "),a()(),l(26,"li",6)(27,"button",8),s(28," Composant Enfant "),a()()(),l(29,"div",9)(30,"div",10)(31,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(32,lP,3,0,"span",12),l(33,"pre",13,0),W(),s(35,`          import { EnfantNgOnChangeComponent } from "./enfantngonchange.component";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-ngonchanges",
  standalone: true,
  imports: [CommonModule, FormsModule, EnfantNgOnChangeComponent],
  template: \`
    <h3>Composant Parent</h3>
    <input [(ngModel)]="message" class="form-control" />
    <app-child [message]="message"></app-child>
  \`,
})
export class NgOnChangesComponent {
  message: string = "";
}`),H(),a()(),l(36,"div",14)(37,"i",11),C("click",function(){return S(r),A(i.copy2())}),a(),N(38,cP,3,0,"span",12),l(39,"pre",13,0),W(),s(41,`import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`<p>Message re\xE7u : {{ message }}</p>
             <p *ngIf="previousMessage">Ancien message : {{ previousMessage }}</p>\`,
})
export class ChildComponent implements OnChanges {
  @Input() message!: string;
  previousMessage: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && !changes['message'].firstChange) {
      this.previousMessage = changes['message'].previousValue;
    }
  }
}`),H(),a()()()()}t&2&&(g(20),ye("ngModel",i.message),g(),I("message",i.message),g(11),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,te,Pe,De,Oe,ke,Mc],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var uP=["tab1"];function dP(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}var Wc=class n{currentTime=new Date().toLocaleTimeString();intervalId;constructor(){this.intervalId=setInterval(()=>{this.currentTime=new Date().toLocaleTimeString()},1e3)}stopClock(){this.intervalId&&(clearInterval(this.intervalId),console.log("Horloge arr\xEAt\xE9e"))}ngOnDestroy(){this.intervalId&&(clearInterval(this.intervalId),console.log("ngOnDestroy: Horloge nettoy\xE9e"))}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-clock"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,uP,5),t&2&&ne()},decls:26,vars:2,consts:[["tab1",""],[1,"container","mt-4"],[1,"text-primary"],[1,"text-center"],[1,"display-4","my-3"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h2",2),s(2,"Horloge en temps r\xE9el"),a(),l(3,"div",3)(4,"div",4),s(5),a(),l(6,"button",5),C("click",function(){return S(r),A(i.stopClock())}),s(7," Arr\xEAter l'horloge "),a()(),l(8,"ul",6)(9,"li",7)(10,"button",8),s(11," Composant Parent "),a()()(),l(12,"div",9)(13,"div",10)(14,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(15,dP,3,0,"span",12),l(16,"pre",13,0),W(),s(18,`import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container text-center mt-4">
      <h2 class="text-primary">Horloge en temps r\xE9el</h2>
      <div class="display-4 my-3">{{ currentTime }}</div>
      <button class="btn btn-danger" (click)="stopClock()">Arr\xEAter l'horloge</button>
    </div>
  \`
})
export class NgOnDestroyComponent implements OnDestroy {
  currentTime: string = new Date().toLocaleTimeString();
  private intervalId: any;

  constructor() {
    // D\xE9marrer l'horloge qui met \xE0 jour l'heure chaque seconde
    this.intervalId = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  stopClock() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('Horloge arr\xEAt\xE9e');
    }
  }

  ngOnDestroy() {
    // Nettoyage de l'intervalle pour \xE9viter les fuites de m\xE9moire
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('ngOnDestroy: Horloge nettoy\xE9e');
    }
  }
}`),H(),a()()(),l(19,"div",14),s(20," ****************************************"),l(21,"span",15),s(22,"cours"),a(),s(23,"************************************************* "),a(),l(24,"pre"),s(25,`        .......
      `),a()()}t&2&&(g(5),ge(i.currentTime),g(10),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var pP=["tab1"],mP=["tab2"],hP=["myDiv"];function fP(n,e){n&1&&(l(0,"span",14),s(1,"copied "),y(2,"i",15),a())}var Kc=class n{myDiv;ngAfterViewInit(){let e=this.myDiv.nativeElement;console.log("Dimensions du div:",e.offsetWidth,e.offsetHeight),e.style.backgroundColor="green",e.style.transform="scale(1.1)",e.style.transition="transform 0.5s",setTimeout(()=>{e.style.transform="scale(1)"},1e3)}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user-list"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,pP,5),q(i.infoTab2,mP,5),Si(hP,5)),t&2){ne(2);let r;ti(r=ni())&&(i.myDiv=r.first)}},decls:41,vars:1,consts:[["myDiv",""],["tab1",""],[1,"container","mt-4"],[1,"box"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"ngAfterViewInit() : Ex\xE9cuter du code apr\xE8s l'affichage"),a(),y(3,"hr"),l(4,"p"),s(5," Cette m\xE9thode est appel\xE9e apr\xE8s que la vue d\u2019un composant (et de ses enfants) a \xE9t\xE9 compl\xE8tement initialis\xE9e. C\u2019est l\u2019endroit id\xE9al pour effectuer des manipulations li\xE9es \xE0 la vue, comme interagir avec des \xE9l\xE9ments du DOM ou utiliser ViewChild pour acc\xE9der \xE0 des composants ou \xE9l\xE9ments enfants "),a(),l(6,"p"),s(7," \u27A1\uFE0F D\xE9clench\xE9 une seule fois apr\xE8s l\u2019affichage du composant et des enfants. "),a(),l(8,"p"),s(9," \u27A1\uFE0F Utilisation principale : Manipuler le DOM ou appeler une biblioth\xE8que qui a besoin du DOM. "),a(),l(10,"h2"),s(11,"Exemple : Changer la couleur d\u2019un \xE9l\xE9ment apr\xE8s l\u2019affichage"),a(),l(12,"p"),s(13," Voici un exemple plus significatif qui montre l'utilit\xE9 de ngAfterViewInit() pour effectuer des actions apr\xE8s l'initialisation de la vue, comme acc\xE9der \xE0 des \xE9l\xE9ments DOM, mesurer leur taille, appliquer des styles conditionnels, ou lancer des animations : "),a(),y(14,"hr"),l(15,"div",3,0),s(17," Ce div sera manipul\xE9 apr\xE8s l'initialisation de la vue. "),a(),l(18,"ul",4)(19,"li",5)(20,"button",6),s(21," Composant Parent "),a()()(),l(22,"div",7)(23,"div",8)(24,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(25,fP,3,0,"span",10),l(26,"pre",11,1),W(),s(28,`import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: \`
    <div #myDiv class="box">
      <p>Ce div sera manipul\xE9 apr\xE8s l'initialisation de la vue.</p>
    </div>
  \`,
  styles: [\`
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      text-align: center;
      line-height: 200px;
    }
  \`]
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('myDiv') myDiv!: ElementRef;

  ngAfterViewInit() {
    // Manipulation du DOM apr\xE8s la vue initialis\xE9e
    const divElement = this.myDiv.nativeElement;

    // V\xE9rification de la taille du div
    console.log('Dimensions du div:', divElement.offsetWidth, divElement.offsetHeight);

    // Appliquer un effet apr\xE8s l'initialisation
    divElement.style.backgroundColor = 'green';  // Change la couleur du fond apr\xE8s initialisation
    divElement.style.transform = 'scale(1.1)';  // Appliquer une transformation
    divElement.style.transition = 'transform 0.5s';  // Animation lors de la transformation

    // Lancer une animation
    setTimeout(() => {
      divElement.style.transform = 'scale(1)';
    }, 1000);
  }
}`),H(),a()()(),l(29,"div",12),s(30," ****************************************"),l(31,"span",13),s(32,"Explication de l'exemple"),a(),s(33,"************************************************* "),a(),l(34,"pre")(35,"h4"),s(36,"Ce que fait cet exemple :"),a(),s(37,`
Manipulation du DOM apr\xE8s la vue initialis\xE9e :
On modifie la couleur de fond du div et on applique une transformation CSS (scale)
pour montrer qu'on peut interagir avec les \xE9l\xE9ments DOM une fois que la vue est compl\xE8tement rendue.

Mesure des \xE9l\xE9ments :
Avant d'appliquer une animation ou une transformation, on peut mesurer des propri\xE9t\xE9s
comme la largeur et la hauteur du div (avec offsetWidth et offsetHeight).

Animations ou autres effets visuels :
Gr\xE2ce \xE0 ngAfterViewInit(), tu peux ajouter des animations, des transitions ou
d'autres effets qui ne peuvent \xEAtre appliqu\xE9s que lorsque les \xE9l\xE9ments du DOM sont pr\xEAts.

`),l(38,"h4"),s(39,"Pourquoi utiliser ngAfterViewInit() ici ?"),a(),s(40,`

Acc\xE8s s\xE9curis\xE9 au DOM :
Les actions sur le DOM avec @ViewChild ou @ViewChildren sont possibles uniquement
apr\xE8s le cycle de vie complet de la vue, ce qui garantit que l'\xE9l\xE9ment auquel tu fais
r\xE9f\xE9rence est d\xE9j\xE0 pr\xE9sent dans le DOM.

Calculs ou animations :
Si tu as besoin de manipuler un \xE9l\xE9ment (par exemple, pour obtenir sa taille ou
appliquer une animation), ngAfterViewInit() est l'endroit id\xE9al pour cela,
car c'est apr\xE8s ce hook que tous les \xE9l\xE9ments de la vue sont initialis\xE9s.
  `),a()()}t&2&&(g(25),I("ngIf",i.clicked))},dependencies:[G,te],styles:[".box[_ngcontent-%COMP%]{width:400px;height:200px;background-color:#add8e6;text-align:center;line-height:200px;max-width:100%;white-space:normal}pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var gP=["tab1"],vP=["tab2"];function _P(n,e){if(n&1&&(l(0,"li",16)(1,"span")(2,"strong"),s(3),a(),s(4),a(),l(5,"span",17),s(6),a()()),n&2){let t=e.$implicit;g(3),ge(t.name),g(),$(" - ",t.email," "),g(2),$("ID: ",t.id,"")}}function bP(n,e){if(n&1&&(l(0,"ul",14),N(1,_P,7,3,"li",15),a()),n&2){let t=ce();g(),I("ngForOf",t.users)}}function yP(n,e){n&1&&(l(0,"div",18),y(1,"div",19),l(2,"p",20),s(3,"Chargement en cours..."),a()())}function EP(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}var Qc=class n{constructor(e){this.http=e}users=[];loading=!0;ngOnInit(){this.fetchUsers()}fetchUsers(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({next:e=>{this.users=e,this.loading=!1},error:e=>{console.error("Erreur lors du chargement des utilisateurs",e),this.loading=!1}})}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(en))};static \u0275cmp=k({type:n,selectors:[["app-ngoninit"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,gP,5),q(i.infoTab2,vP,5)),t&2&&ne(2)},decls:38,vars:3,consts:[["tab1",""],[1,"container","mt-4"],["class","list-group",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-info","rounded-pill"],[1,"text-center","mt-3"],[1,"spinner-border","text-warning"],[1,"mt-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"ngOnInit() : Ex\xE9cuter du code au chargement"),a(),y(3,"hr"),l(4,"p"),s(5,"\u27A1\uFE0F D\xE9clench\xE9 une seule fois apr\xE8s l'initialisation du composant."),a(),l(6,"p"),s(7,"\u27A1\uFE0F Utilisation principale : r\xE9cup\xE9rer des donn\xE9es (ex: via une API) ou initialiser des variables."),a(),l(8,"h2"),s(9," Pourquoi utiliser ngOnInit() au lieu du constructeur ?"),a(),l(10,"p"),s(11,"\u27A1\uFE0F Le constructeur sert \xE0 initialiser la classe"),a(),l(12,"p"),s(13,"\u27A1\uFE0F ngOnInit() est appel\xE9 quand Angular a termin\xE9 d\u2019initialiser le composant"),a(),y(14,"hr"),l(15,"h2"),s(16,"Exemple : Chargement d\u2019une liste d\u2019utilisateurs depuis une API"),a(),N(17,bP,2,1,"ul",2)(18,yP,4,0,"div",3),y(19,"br"),l(20,"ul",4)(21,"li",5)(22,"button",6),s(23," Composant Parent "),a()()(),l(24,"div",7)(25,"div",8)(26,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(27,EP,3,0,"span",10),l(28,"pre",11,0),W(),s(30,`import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngoninit',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container mt-4">
      <h2 class="text-primary">Liste des utilisateurs</h2>

      <ul class="list-group" *ngIf="users.length > 0">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        >
          <span>
            <strong>{{ user.name }}</strong> - {{ user.email }}
          </span>
          <span class="badge bg-info rounded-pill">ID: {{ user.id }}</span>
        </li>
      </ul>

      <div *ngIf="loading" class="text-center mt-3">
        <div class="spinner-border text-warning"></div>
        <p class="mt-2">Chargement en cours...</p>
      </div>
    </div>
  \`,
})
export class NgOnInitComponent implements OnInit {
  users: any[] = [];
  loading = true; // Indicateur de chargement

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
        this.loading = false;
      },
    });
  }
}`),H(),a()()(),l(31,"div",12),s(32," ****************************************"),l(33,"span",13),s(34,"cours"),a(),s(35,"************************************************* "),a(),l(36,"pre"),s(37,`        .......
      `),a()()}t&2&&(g(17),I("ngIf",i.users.length>0),g(),I("ngIf",i.loading),g(9),I("ngIf",i.clicked))},dependencies:[G,Xe,te],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var y1=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},CP=function(n){let e=[],t=0,i=0;for(;t<n.length;){let r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){let o=n[t++],c=n[t++],d=n[t++],p=((r&7)<<18|(o&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{let o=n[t++],c=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let o=n[r],c=r+1<n.length,d=c?n[r+1]:0,p=r+2<n.length,h=p?n[r+2]:0,v=o>>2,b=(o&3)<<4|d>>4,T=(d&15)<<2|h>>6,O=h&63;p||(O=64,c||(T=64)),i.push(t[v],t[b],t[T],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(y1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):CP(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let o=t[n.charAt(r++)],d=r<n.length?t[n.charAt(r)]:0;++r;let h=r<n.length?t[n.charAt(r)]:64;++r;let b=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||d==null||h==null||b==null)throw new Gh;let T=o<<2|d>>4;if(i.push(T),h!==64){let O=d<<4&240|h>>2;if(i.push(O),b!==64){let j=h<<6&192|b;i.push(j)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Gh=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},wP=function(n){let e=y1(n);return Jc.encodeByteArray(e,!0)},da=function(n){return wP(n).replace(/\./g,"")},Wh=function(n){try{return Jc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function E1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var TP=()=>E1().__FIREBASE_DEFAULTS__,xP=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IP=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Wh(n[1]);return e&&JSON.parse(e)},Xc=()=>{try{return TP()||xP()||IP()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},C1=n=>{var e,t;return(t=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},w1=n=>{let e=C1(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Kh=()=>{var n;return(n=Xc())===null||n===void 0?void 0:n.config},T1=n=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${n}`]};var rr=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function x1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[da(JSON.stringify(t)),da(JSON.stringify(c)),""].join(".")}function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function SP(){var n;let e=(n=Xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function A1(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function P1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R1(){return!SP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pa(){try{return typeof indexedDB=="object"}catch{return!1}}function D1(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var AP="FirebaseError",vn=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=AP,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}},xn=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],c=o?PP(o,i):"Error",d=`${this.serviceName}: ${c} (${r}).`;return new vn(r,d,i)}};function PP(n,e){return n.replace(RP,(t,i)=>{let r=e[i];return r!=null?String(r):`<${i}?>`})}var RP=/\{\$([^}]+)}/g;function lo(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let r of t){if(!i.includes(r))return!1;let o=n[r],c=e[r];if(b1(o)&&b1(c)){if(!lo(o,c))return!1}else if(o!==c)return!1}for(let r of i)if(!t.includes(r))return!1;return!0}function b1(n){return n!==null&&typeof n=="object"}function Qh(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function k1(n,e){let t=new Hh(n,e);return t.subscribe.bind(t)}var Hh=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");DP(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=$h),r.error===void 0&&(r.error=$h),r.complete===void 0&&(r.complete=$h);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function DP(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $h(){}var v5=4*60*60*1e3;function Vt(n){return n&&n._delegate?n._delegate:n}var Gt=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var or="[DEFAULT]";var Jh=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new rr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MP(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return L(this,null,function*(){let e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[o,c]of this.instancesDeferred.entries()){let d=this.normalizeInstanceIdentifier(o);i===d&&c.resolve(r)}return r}onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);let c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kP(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function kP(n){return n===or?void 0:n}function MP(n){return n.instantiationMode==="EAGER"}var Yc=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Jh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var OP=[],Me=function(n){return n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT",n}(Me||{}),NP={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},VP=Me.INFO,FP={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},LP=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),r=FP[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},jn=class{constructor(e){this.name=e,this._logLevel=VP,this._logHandler=LP,this._userLogHandler=null,OP.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}};var UP=(n,e)=>e.some(t=>n instanceof t),M1,O1;function jP(){return M1||(M1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BP(){return O1||(O1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var N1=new WeakMap,Yh=new WeakMap,V1=new WeakMap,Xh=new WeakMap,ef=new WeakMap;function qP(n){let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(Bn(n.result)),r()},c=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&N1.set(t,n)}).catch(()=>{}),ef.set(e,n),e}function zP(n){if(Yh.has(n))return;let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),r()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Yh.set(n,e)}var Zh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||V1.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function F1(n){Zh=n(Zh)}function $P(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Zc(this),e,...t);return V1.set(i,e.sort?e.sort():[e]),Bn(i)}:BP().includes(n)?function(...e){return n.apply(Zc(this),e),Bn(N1.get(this))}:function(...e){return Bn(n.apply(Zc(this),e))}}function GP(n){return typeof n=="function"?$P(n):(n instanceof IDBTransaction&&zP(n),UP(n,jP())?new Proxy(n,Zh):n)}function Bn(n){if(n instanceof IDBRequest)return qP(n);if(Xh.has(n))return Xh.get(n);let e=GP(n);return e!==n&&(Xh.set(n,e),ef.set(e,n)),e}var Zc=n=>ef.get(n);function U1(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){let c=indexedDB.open(n,e),d=Bn(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Bn(c.result),p.oldVersion,p.newVersion,Bn(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),r&&p.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),d}var HP=["get","getKey","getAll","getAllKeys","count"],WP=["put","add","delete","clear"],tf=new Map;function L1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,r=WP.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||HP.includes(t)))return;let o=function(c,...d){return L(this,null,function*(){let p=this.transaction(c,r?"readwrite":"readonly"),h=p.store;return i&&(h=h.index(d.shift())),(yield Promise.all([h[t](...d),r&&p.done]))[0]})};return tf.set(e,o),o}F1(n=>we(K({},n),{get:(e,t,i)=>L1(e,t)||n.get(e,t,i),has:(e,t)=>!!L1(e,t)||n.has(e,t)}));var rf=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KP(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function KP(n){let e=n.getComponent();return e?.type==="VERSION"}var of="@firebase/app",j1="0.10.18";var ci=new jn("@firebase/app"),QP="@firebase/app-compat",JP="@firebase/analytics-compat",XP="@firebase/analytics",YP="@firebase/app-check-compat",ZP="@firebase/app-check",eR="@firebase/auth",tR="@firebase/auth-compat",nR="@firebase/database",iR="@firebase/data-connect",rR="@firebase/database-compat",oR="@firebase/functions",sR="@firebase/functions-compat",aR="@firebase/installations",lR="@firebase/installations-compat",cR="@firebase/messaging",uR="@firebase/messaging-compat",dR="@firebase/performance",pR="@firebase/performance-compat",mR="@firebase/remote-config",hR="@firebase/remote-config-compat",fR="@firebase/storage",gR="@firebase/storage-compat",vR="@firebase/firestore",_R="@firebase/vertexai",bR="@firebase/firestore-compat",yR="firebase",ER="11.2.0";var sf="[DEFAULT]",CR={[of]:"fire-core",[QP]:"fire-core-compat",[XP]:"fire-analytics",[JP]:"fire-analytics-compat",[ZP]:"fire-app-check",[YP]:"fire-app-check-compat",[eR]:"fire-auth",[tR]:"fire-auth-compat",[nR]:"fire-rtdb",[iR]:"fire-data-connect",[rR]:"fire-rtdb-compat",[oR]:"fire-fn",[sR]:"fire-fn-compat",[aR]:"fire-iid",[lR]:"fire-iid-compat",[cR]:"fire-fcm",[uR]:"fire-fcm-compat",[dR]:"fire-perf",[pR]:"fire-perf-compat",[mR]:"fire-rc",[hR]:"fire-rc-compat",[fR]:"fire-gcs",[gR]:"fire-gcs-compat",[vR]:"fire-fst",[bR]:"fire-fst-compat",[_R]:"fire-vertex","fire-js":"fire-js",[yR]:"fire-js-all"};var ma=new Map,wR=new Map,af=new Map;function B1(n,e){try{n.container.addComponent(e)}catch(t){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){let e=n.name;if(af.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;af.set(e,n);for(let t of ma.values())B1(t,n);for(let t of wR.values())B1(t,n);return!0}function eu(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function co(n){return n.settings!==void 0}var TR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new xn("app","Firebase",TR);var lf=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}};var uo=ER;function tu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i=Object.assign({name:sf,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Li.create("bad-app-name",{appName:String(r)});if(t||(t=Kh()),!t)throw Li.create("no-options");let o=ma.get(r);if(o){if(lo(t,o.options)&&lo(i,o.config))return o;throw Li.create("duplicate-app",{appName:r})}let c=new Yc(r);for(let p of af.values())c.addComponent(p);let d=new lf(t,i,c);return ma.set(r,d),d}function po(n=sf){let e=ma.get(n);if(!e&&n===sf&&Kh())return tu();if(!e)throw Li.create("no-app",{appName:n});return e}function nu(){return Array.from(ma.values())}function lt(n,e,t){var i;let r=(i=CR[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);let o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){let d=[`Unable to register library "${r}" with version "${e}":`];o&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(d.join(" "));return}In(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var xR="firebase-heartbeat-database",IR=1,ha="firebase-heartbeat-store",nf=null;function G1(){return nf||(nf=U1(xR,IR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ha)}catch(t){console.warn(t)}}}}).catch(n=>{throw Li.create("idb-open",{originalErrorMessage:n.message})})),nf}function SR(n){return L(this,null,function*(){try{let t=(yield G1()).transaction(ha),i=yield t.objectStore(ha).get(H1(n));return yield t.done,i}catch(e){if(e instanceof vn)ci.warn(e.message);else{let t=Li.create("idb-get",{originalErrorMessage:e?.message});ci.warn(t.message)}}})}function q1(n,e){return L(this,null,function*(){try{let i=(yield G1()).transaction(ha,"readwrite");yield i.objectStore(ha).put(e,H1(n)),yield i.done}catch(t){if(t instanceof vn)ci.warn(t.message);else{let i=Li.create("idb-set",{originalErrorMessage:t?.message});ci.warn(i.message)}}})}function H1(n){return`${n.name}!${n.options.appId}`}var AR=1024,PR=30*24*60*60*1e3,cf=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new uf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}triggerHeartbeat(){return L(this,null,function*(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=z1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{let d=new Date(c.date).valueOf();return Date.now()-d<=PR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ci.warn(i)}})}getHeartbeatsHeader(){return L(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=z1(),{heartbeatsToSend:i,unsentEntries:r}=RR(this._heartbeatsCache.heartbeats),o=da(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ci.warn(t),""}})}};function z1(){return new Date().toISOString().substring(0,10)}function RR(n,e=AR){let t=[],i=n.slice();for(let r of n){let o=t.find(c=>c.agent===r.agent);if(o){if(o.dates.push(r.date),$1(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),$1(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var uf=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return L(this,null,function*(){return pa()?D1().then(()=>!0).catch(()=>!1):!1})}read(){return L(this,null,function*(){if(yield this._canUseIndexedDBPromise){let t=yield SR(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return L(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){let r=yield this.read();return q1(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return L(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){let r=yield this.read();return q1(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return})}};function $1(n){return da(JSON.stringify({version:2,heartbeats:n})).length}function DR(n){In(new Gt("platform-logger",e=>new rf(e),"PRIVATE")),In(new Gt("heartbeat",e=>new cf(e),"PRIVATE")),lt(of,j1,n),lt(of,j1,"esm2017"),lt("fire-js","")}DR("");var kR="firebase",MR="11.2.0";lt(kR,MR,"app");function fa(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&bm(fa);let i=t?e?.injector?.get(ym)??Y(ym):null,r=OR(e?.equal),o;e?.requireSync?o=Je({kind:0},{equal:r}):o=Je({kind:1,value:e?.initialValue},{equal:r});let c=n.subscribe({next:d=>o.set({kind:1,value:d}),error:d=>{if(e?.rejectErrors)throw d;o.set({kind:2,error:d})}});if(e?.requireSync&&o().kind===0)throw new Le(601,!1);return i?.onDestroy(c.unsubscribe.bind(c)),fn(()=>{let d=o();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new Le(601,!1)}},{equal:e?.equal})}function OR(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function df(n){n===void 0&&(bm(df),n=Y(Wt));let e=n.get(El);return t=>new rt(i=>{let r=e.add(),o=!1;function c(){o||(r(),o=!0)}let d=t.subscribe({next:p=>{i.next(p),c()},complete:()=>{i.complete(),c()},error:p=>{i.error(p),c()}});return d.add(()=>{i.unsubscribe(),c()}),d})}var ar=new Cs("ANGULARFIRE2_VERSION");function ru(n,e,t){if(e){if(e.length===1)return e[0];let o=e.filter(c=>c.app===t);if(o.length===1)return o[0]}return t.container.getProvider(n).getImmediate({optional:!0})}var ho=(n,e)=>{let t=e?[e]:nu(),i=[];return t.forEach(r=>{r.container.getProvider(n).instances.forEach(c=>{i.includes(c)||i.push(c)})}),i},mo=function(n){return n[n.SILENT=0]="SILENT",n[n.WARN=1]="WARN",n[n.VERBOSE=2]="VERBOSE",n}(mo||{}),W1=Br()&&typeof Zone<"u"?mo.WARN:mo.SILENT;var iu=class{zone;delegate;constructor(e,t=Pr){this.zone=e,this.delegate=t}now(){return this.delegate.now()}schedule(e,t,i){let r=this.zone,o=function(c){r?r.runGuarded(()=>{e.apply(this,[c])}):e.apply(this,[c])};return this.delegate.schedule(o,t,i)}},lr=(()=>{class n{outsideAngular;insideAngular;constructor(){let t=Y(ze);this.outsideAngular=t.runOutsideAngular(()=>new iu(typeof Zone>"u"?void 0:Zone.current)),this.insideAngular=t.run(()=>new iu(typeof Zone>"u"?void 0:Zone.current,F_))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),K1=!1;function NR(n,e){!K1&&(W1>mo.SILENT||Br())&&(K1=!0,console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md")),W1>=e&&console.warn(`Firebase API called outside injection context: ${n.name}`)}function VR(n){let e=Y(ze,{optional:!0});return e?e.runOutsideAngular(()=>n()):n()}function sr(n){let e=Y(ze,{optional:!0});return e?e.run(()=>n()):n()}var FR=(n,e,t)=>(...i)=>(e&&setTimeout(e,0),Mt(t,()=>sr(()=>n.apply(void 0,i)))),_n=(n,e,t)=>(t||=e?mo.WARN:mo.VERBOSE,function(){let i,r=arguments,o,c,d;try{o=Y(lr),c=Y(El),d=Y(Yn)}catch{return NR(n,t),n.apply(this,r)}for(let h=0;h<arguments.length;h++)typeof r[h]=="function"&&(e&&(i||=sr(()=>c.add())),r[h]=FR(r[h],i,d));let p=VR(()=>n.apply(this,r));return e?p instanceof rt?p.pipe(um(o.outsideAngular),Xi(o.insideAngular),df(d)):p instanceof Promise?sr(()=>new Promise((h,v)=>{c.run(()=>p).then(b=>Mt(d,()=>sr(()=>h(b))),b=>Mt(d,()=>sr(()=>v(b))))})):typeof p=="function"&&i?function(){return setTimeout(i,0),p.apply(this,arguments)}:sr(()=>p):p instanceof rt?p.pipe(um(o.outsideAngular),Xi(o.insideAngular)):sr(()=>p)});var cr=class{constructor(e){return e}},ga=class{constructor(){return nu()}};function LR(n){return n&&n.length===1?n[0]:new cr(po())}var pf=new ue("angularfire2._apps"),UR={provide:cr,useFactory:LR,deps:[[new Cn,pf]]},jR={provide:ga,deps:[[new Cn,pf]]};function BR(n){return(e,t)=>{let i=t.get(Dn);lt("angularfire",ar.full,"core"),lt("angularfire",ar.full,"app"),lt("angular",Gb.full,i.toString());let r=e.runOutsideAngular(()=>n(t));return new cr(r)}}function Q1(n,...e){return ft([UR,jR,{provide:pf,useFactory:BR(n),multi:!0,deps:[ze,Wt,lr,...e]}])}var qR=new Map,zR={activated:!1,tokenObservers:[]},$R={initialized:!1,enabled:!1};function Sn(n){return qR.get(n)||Object.assign({},zR)}function eC(){return $R}var GR="https://content-firebaseappcheck.googleapis.com/v1";var HR="exchangeDebugToken",J1={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},yj=24*60*60*1e3;var hf=class{constructor(e,t,i,r,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=r,r>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return L(this,null,function*(){this.stop();try{this.pending=new rr,this.pending.promise.catch(t=>{}),yield WR(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new rr,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}};function WR(n){return new Promise(e=>{setTimeout(e,n)})}var KR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ui=new xn("appCheck","AppCheck",KR);function tC(n){if(!Sn(n).activated)throw Ui.create("use-before-activation",{appName:n.name})}function nC(i,r){return L(this,arguments,function*({url:n,body:e},t){let o={"Content-Type":"application/json"},c=t.getImmediate({optional:!0});if(c){let O=yield c.getHeartbeatsHeader();O&&(o["X-Firebase-Client"]=O)}let d={method:"POST",body:JSON.stringify(e),headers:o},p;try{p=yield fetch(n,d)}catch(O){throw Ui.create("fetch-network-error",{originalErrorMessage:O?.message})}if(p.status!==200)throw Ui.create("fetch-status-error",{httpStatus:p.status});let h;try{h=yield p.json()}catch(O){throw Ui.create("fetch-parse-error",{originalErrorMessage:O?.message})}let v=h.ttl.match(/^([\d.]+)(s)$/);if(!v||!v[2]||isNaN(Number(v[1])))throw Ui.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${h.ttl}`});let b=Number(v[1])*1e3,T=Date.now();return{token:h.token,expireTimeMillis:T+b,issuedAtTimeMillis:T}})}function iC(n,e){let{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${GR}/projects/${t}/apps/${i}:${HR}?key=${r}`,body:{debug_token:e}}}var QR="firebase-app-check-database",JR=1,ff="firebase-app-check-store";var ou=null;function XR(){return ou||(ou=new Promise((n,e)=>{try{let t=indexedDB.open(QR,JR);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;e(Ui.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=i=>{let r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(ff,{keyPath:"compositeKey"})}}}catch(t){e(Ui.create("storage-open",{originalErrorMessage:t?.message}))}}),ou)}function YR(n,e){return ZR(eD(n),e)}function ZR(n,e){return L(this,null,function*(){let i=(yield XR()).transaction(ff,"readwrite"),o=i.objectStore(ff).put({compositeKey:n,value:e});return new Promise((c,d)=>{o.onsuccess=p=>{c()},i.onerror=p=>{var h;d(Ui.create("storage-set",{originalErrorMessage:(h=p.target.error)===null||h===void 0?void 0:h.message}))}})})}function eD(n){return`${n.options.appId}-${n.name}`}var gf=new jn("@firebase/app-check");function mf(n,e){return pa()?YR(n,e).catch(t=>{gf.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function rC(){return eC().enabled}function oC(){return L(this,null,function*(){let n=eC();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}var tD={error:"UNKNOWN_ERROR"};function nD(n){return Jc.encodeString(JSON.stringify(n),!1)}function vf(n,e=!1){return L(this,null,function*(){let t=n.app;tC(t);let i=Sn(t),r=i.token,o;if(r&&!va(r)&&(i.token=void 0,r=void 0),!r){let p=yield i.cachedTokenPromise;p&&(va(p)?r=p:yield mf(t,void 0))}if(!e&&r&&va(r))return{token:r.token};let c=!1;if(rC()){i.exchangeTokenPromise||(i.exchangeTokenPromise=nC(iC(t,yield oC()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),c=!0);let p=yield i.exchangeTokenPromise;return yield mf(t,p),i.token=p,{token:p.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),c=!0),r=yield Sn(t).exchangeTokenPromise}catch(p){p.code==="appCheck/throttled"?gf.warn(p.message):gf.error(p),o=p}let d;return r?o?va(r)?d={token:r.token,internalError:o}:d=Y1(o):(d={token:r.token},i.token=r,yield mf(t,r)):d=Y1(o),c&&sD(t,d),d})}function iD(n){return L(this,null,function*(){let e=n.app;tC(e);let{provider:t}=Sn(e);if(rC()){let i=yield oC(),{token:r}=yield nC(iC(e,i),n.heartbeatServiceProvider);return{token:r}}else{let{token:i}=yield t.getToken();return{token:i}}})}function rD(n,e,t,i){let{app:r}=n,o=Sn(r),c={next:t,error:i,type:e};if(o.tokenObservers=[...o.tokenObservers,c],o.token&&va(o.token)){let d=o.token;Promise.resolve().then(()=>{t({token:d.token}),X1(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>X1(n))}function sC(n,e){let t=Sn(n),i=t.tokenObservers.filter(r=>r.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function X1(n){let{app:e}=n,t=Sn(e),i=t.tokenRefresher;i||(i=oD(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function oD(n){let{app:e}=n;return new hf(()=>L(this,null,function*(){let t=Sn(e),i;if(t.token?i=yield vf(n,!0):i=yield vf(n),i.error)throw i.error;if(i.internalError)throw i.internalError}),()=>!0,()=>{let t=Sn(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5,r=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},J1.RETRIAL_MIN_WAIT,J1.RETRIAL_MAX_WAIT)}function sD(n,e){let t=Sn(n).tokenObservers;for(let i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function va(n){return n.expireTimeMillis-Date.now()>0}function Y1(n){return{token:nD(tD),error:n}}var _f=class{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:e}=Sn(this.app);for(let t of e)sC(this.app,t.next);return Promise.resolve()}};function aD(n,e){return new _f(n,e)}function lD(n){return{getToken:e=>vf(n,e),getLimitedUseToken:()=>iD(n),addTokenListener:e=>rD(n,"INTERNAL",e),removeTokenListener:e=>sC(n.app,e)}}var cD="@firebase/app-check",uD="0.8.11";var dD="app-check",Z1="app-check-internal";function pD(){In(new Gt(dD,n=>{let e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return aD(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Z1).initialize()})),In(new Gt(Z1,n=>{let e=n.getProvider("app-check").getImmediate();return lD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),lt(cD,uD)}pD();var mD="app-check";var su=class{constructor(){return ho(mD)}};var hD=["localhost","0.0.0.0","127.0.0.1"],Mj=typeof window<"u"&&hD.includes(window.location.hostname);function hC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var fC=hC,gC=new xn("auth","Firebase",hC());var uu=new jn("@firebase/auth");function gD(n,...e){uu.logLevel<=Me.WARN&&uu.warn(`Auth (${uo}): ${n}`,...e)}function lu(n,...e){uu.logLevel<=Me.ERROR&&uu.error(`Auth (${uo}): ${n}`,...e)}function aC(n,...e){throw Rf(n,...e)}function Pf(n,...e){return Rf(n,...e)}function vC(n,e,t){let i=Object.assign(Object.assign({},fC()),{[e]:t});return new xn("auth","Firebase",i).create(e,{appName:n.name})}function cu(n){return vC(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return gC.create(n,...e)}function je(n,e,...t){if(!n)throw Rf(e,...t)}function _a(n){let e="INTERNAL ASSERTION FAILED: "+n;throw lu(e),new Error(e)}function du(n,e){n||_a(e)}function vD(){return lC()==="http:"||lC()==="https:"}function lC(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function _D(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vD()||A1()||"connection"in navigator)?navigator.onLine:!0}function bD(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var dr=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,du(t>e,"Short delay should be less than long delay!"),this.isMobile=I1()||P1()}get(){return _D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function yD(n,e){du(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var pu=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_a("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_a("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_a("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var ED={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var CD=new dr(3e4,6e4);function _C(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function gu(o,c,d,p){return L(this,arguments,function*(n,e,t,i,r={}){return bC(n,r,()=>L(this,null,function*(){let h={},v={};i&&(e==="GET"?v=i:h={body:JSON.stringify(i)});let b=Qh(Object.assign({key:n.config.apiKey},v)).slice(1),T=yield n._getAdditionalHeaders();T["Content-Type"]="application/json",n.languageCode&&(T["X-Firebase-Locale"]=n.languageCode);let O=Object.assign({method:e,headers:T},h);return S1()||(O.referrerPolicy="no-referrer"),pu.fetch()(yC(n,n.config.apiHost,t,b),O)}))})}function bC(n,e,t){return L(this,null,function*(){n._canInitEmulator=!1;let i=Object.assign(Object.assign({},ED),e);try{let r=new Ef(n),o=yield Promise.race([t(),r.promise]);r.clearNetworkTimeout();let c=yield o.json();if("needConfirmation"in c)throw au(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{let d=o.ok?c.errorMessage:c.error.message,[p,h]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw au(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw au(n,"user-disabled",c);let v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vC(n,v,h);aC(n,v)}}catch(r){if(r instanceof vn)throw r;aC(n,"network-request-failed",{message:String(r)})}})}function yC(n,e,t,i){let r=`${e}${t}?${i}`;return n.config.emulator?yD(n.config,r):`${n.config.apiScheme}://${r}`}var Ef=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Pf(this.auth,"network-request-failed")),CD.get())})}};function au(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let r=Pf(n,e,i);return r.customData._tokenResponse=t,r}function wD(n,e){return L(this,null,function*(){return gu(n,"POST","/v1/accounts:delete",e)})}function EC(n,e){return L(this,null,function*(){return gu(n,"POST","/v1/accounts:lookup",e)})}function ba(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function Df(n,e=!1){return L(this,null,function*(){let t=Vt(n),i=yield t.getIdToken(e),r=CC(i);je(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let o=typeof r.firebase=="object"?r.firebase:void 0,c=o?.sign_in_provider;return{claims:r,token:i,authTime:ba(bf(r.auth_time)),issuedAtTime:ba(bf(r.iat)),expirationTime:ba(bf(r.exp)),signInProvider:c||null,signInSecondFactor:o?.sign_in_second_factor||null}})}function bf(n){return Number(n)*1e3}function CC(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lu("JWT malformed, contained fewer than 3 sections"),null;try{let r=Wh(t);return r?JSON.parse(r):(lu("Failed to decode base64 JWT payload"),null)}catch(r){return lu("Caught error parsing JWT payload as JSON",r?.toString()),null}}function cC(n){let e=CC(n);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}function Cf(n,e,t=!1){return L(this,null,function*(){if(t)return e;try{return yield e}catch(i){throw i instanceof vn&&TD(i)&&n.auth.currentUser===n&&(yield n.auth.signOut()),i}})}function TD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var wf=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;let r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(()=>L(this,null,function*(){yield this.iteration()}),t)}iteration(){return L(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}};var Ea=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};function mu(n){return L(this,null,function*(){var e;let t=n.auth,i=yield n.getIdToken(),r=yield Cf(n,EC(t,{idToken:i}));je(r?.users.length,t,"internal-error");let o=r.users[0];n._notifyReloadListener(o);let c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?wC(o.providerUserInfo):[],d=xD(n.providerData,c),p=n.isAnonymous,h=!(n.email&&o.passwordHash)&&!d?.length,v=p?h:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Ea(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(n,b)})}function kf(n){return L(this,null,function*(){let e=Vt(n);yield mu(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function xD(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function wC(n){return n.map(e=>{var{providerId:t}=e,i=cm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}function ID(n,e){return L(this,null,function*(){let t=yield bC(n,{},()=>L(this,null,function*(){let i=Qh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,c=yC(n,r,"/v1/token",`key=${o}`),d=yield n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",pu.fetch()(c,{method:"POST",headers:d,body:i})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function SD(n,e){return L(this,null,function*(){return gu(n,"POST","/v2/accounts:revokeToken",_C(n,e))})}var ya=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){je(e.length!==0,"internal-error");let t=cC(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return L(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return L(this,null,function*(){let{accessToken:i,refreshToken:r,expiresIn:o}=yield ID(e,t);this.updateTokensAndExpiration(i,r,Number(o))})}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:o}=t,c=new n;return i&&(je(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),r&&(je(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),o&&(je(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return _a("not implemented")}};function ji(n,e){je(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Ca=class n{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ea(o.createdAt||void 0,o.lastLoginAt||void 0)}getIdToken(e){return L(this,null,function*(){let t=yield Cf(this,this.stsTokenManager.getToken(this.auth,e));return je(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return Df(this,e)}reload(){return kf(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return L(this,null,function*(){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&(yield mu(this)),yield this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)})}delete(){return L(this,null,function*(){if(co(this.auth.app))return Promise.reject(cu(this.auth));let e=yield this.getIdToken();return yield Cf(this,wD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,c,d,p,h,v;let b=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(r=t.email)!==null&&r!==void 0?r:void 0,O=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,j=(c=t.photoURL)!==null&&c!==void 0?c:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,le=(h=t.createdAt)!==null&&h!==void 0?h:void 0,fe=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ae,emailVerified:J,isAnonymous:be,providerData:he,stsTokenManager:R}=t;je(ae&&R,e,"internal-error");let E=ya.fromJSON(this.name,R);je(typeof ae=="string",e,"internal-error"),ji(b,e.name),ji(T,e.name),je(typeof J=="boolean",e,"internal-error"),je(typeof be=="boolean",e,"internal-error"),ji(O,e.name),ji(j,e.name),ji(U,e.name),ji(F,e.name),ji(le,e.name),ji(fe,e.name);let x=new n({uid:ae,auth:e,email:T,emailVerified:J,displayName:b,isAnonymous:be,photoURL:j,phoneNumber:O,tenantId:U,stsTokenManager:E,createdAt:le,lastLoginAt:fe});return he&&Array.isArray(he)&&(x.providerData=he.map(D=>Object.assign({},D))),F&&(x._redirectEventId=F),x}static _fromIdTokenResponse(e,t,i=!1){return L(this,null,function*(){let r=new ya;r.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return yield mu(o),o})}static _fromGetAccountInfoResponse(e,t,i){return L(this,null,function*(){let r=t.users[0];je(r.localId!==void 0,"internal-error");let o=r.providerUserInfo!==void 0?wC(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!o?.length,d=new ya;d.updateFromIdToken(i);let p=new n({uid:r.localId,auth:e,stsTokenManager:d,isAnonymous:c}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ea(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(p,h),p})}};var uC=new Map;function ur(n){du(n instanceof Function,"Expected a class definition");let e=uC.get(n);return e?(du(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,uC.set(n,e),e)}var AD=(()=>{class n{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return L(this,null,function*(){return!0})}_set(t,i){return L(this,null,function*(){this.storage[t]=i})}_get(t){return L(this,null,function*(){let i=this.storage[t];return i===void 0?null:i})}_remove(t){return L(this,null,function*(){delete this.storage[t]})}_addListener(t,i){}_removeListener(t,i){}}return n.type="NONE",n})(),Tf=AD;function yf(n,e,t){return`firebase:${n}:${e}:${t}`}var hu=class n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:o}=this.auth;this.fullUserKey=yf(this.userKey,r.apiKey,o),this.fullPersistenceKey=yf("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return L(this,null,function*(){let e=yield this.persistence._get(this.fullUserKey);return e?Ca._fromJSON(this.auth,e):null})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return L(this,null,function*(){if(this.persistence===e)return;let t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,i="authUser"){return L(this,null,function*(){if(!t.length)return new n(ur(Tf),e,i);let r=(yield Promise.all(t.map(h=>L(this,null,function*(){if(yield h._isAvailable())return h})))).filter(h=>h),o=r[0]||ur(Tf),c=yf(i,e.config.apiKey,e.name),d=null;for(let h of t)try{let v=yield h._get(c);if(v){let b=Ca._fromJSON(e,v);h!==o&&(d=b),o=h;break}}catch{}let p=r.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new n(o,e,i):(o=p[0],d&&(yield o._set(c,d.toJSON())),yield Promise.all(t.map(h=>L(this,null,function*(){if(h!==o)try{yield h._remove(c)}catch{}}))),new n(o,e,i))})}};function dC(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kD(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PD(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OD(e))return"Blackberry";if(ND(e))return"Webos";if(RD(e))return"Safari";if((e.includes("chrome/")||DD(e))&&!e.includes("edge/"))return"Chrome";if(MD(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function PD(n=rn()){return/firefox\//i.test(n)}function RD(n=rn()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DD(n=rn()){return/crios\//i.test(n)}function kD(n=rn()){return/iemobile/i.test(n)}function MD(n=rn()){return/android/i.test(n)}function OD(n=rn()){return/blackberry/i.test(n)}function ND(n=rn()){return/webos/i.test(n)}function TC(n,e=[]){let t;switch(n){case"Browser":t=dC(rn());break;case"Worker":t=`${dC(rn())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${uo}/${i}`}var xf=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=o=>new Promise((c,d)=>{try{let p=e(o);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}runMiddleware(e){return L(this,null,function*(){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)yield i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}})}};function VD(t){return L(this,arguments,function*(n,e={}){return gu(n,"GET","/v2/passwordPolicy",_C(n,e))})}var FD=6,If=class{constructor(e){var t,i,r,o;let c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:FD,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,o,c,d;let p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(r=p.containsLowercaseLetter)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var Sf=class{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fu(this),this.idTokenSubscription=new fu(this),this.beforeStateQueue=new xf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ur(t)),this._initializationPromise=this.queue(()=>L(this,null,function*(){var i,r;if(!this._deleted&&(this.persistenceManager=yield hu.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch{}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return L(this,null,function*(){if(this._deleted)return;let e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return L(this,null,function*(){try{let t=yield EC(this,{idToken:e}),i=yield Ca._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return L(this,null,function*(){var t;if(co(this.app)){let c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}let i=yield this.assertedPersistence.getCurrentUser(),r=i,o=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();let c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=r?._redirectEventId,p=yield this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{yield this.beforeStateQueue.runMiddleware(r)}catch(c){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return L(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return L(this,null,function*(){try{yield mu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=bD()}_delete(){return L(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return L(this,null,function*(){if(co(this.app))return Promise.reject(cu(this));let t=e?Vt(e):null;return t&&je(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return L(this,null,function*(){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>L(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return L(this,null,function*(){return co(this.app)?Promise.reject(cu(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return co(this.app)?Promise.reject(cu(this)):this.queue(()=>L(this,null,function*(){yield this.assertedPersistence.setPersistence(ur(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return L(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return L(this,null,function*(){let e=yield VD(this),t=new If(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}revokeAccessToken(e){return L(this,null,function*(){if(this.currentUser){let t=yield this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),yield SD(this,i)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return L(this,null,function*(){let i=yield this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return L(this,null,function*(){if(!this.redirectPersistenceManager){let t=e&&ur(e)||this._popupRedirectResolver;je(t,this,"argument-error"),this.redirectPersistenceManager=yield hu.create(this,[ur(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return L(this,null,function*(){var t,i;return this._isInitialized&&(yield this.queue(()=>L(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return L(this,null,function*(){if(e===this.currentUser)return this.queue(()=>L(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),c=!1,d=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(d,this,"internal-error"),d.then(()=>{c||o(this.currentUser)}),typeof t=="function"){let p=e.addObserver(t,i,r);return()=>{c=!0,p()}}else{let p=e.addObserver(t);return()=>{c=!0,p()}}}directlySetCurrentUser(e){return L(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return L(this,null,function*(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);let r=yield this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t})}_getAppCheckToken(){return L(this,null,function*(){var e;let t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t?.error&&gD(`Error while retrieving App Check token: ${t.error}`),t?.token})}};function LD(n){return Vt(n)}var fu=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=k1(t=>this.observer=t)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var UD={loadJS(){return L(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jD(n){UD=n}function BD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}function qD(n,e){let t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(ur);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}var Gj=BD("rcb"),Hj=new dr(3e4,6e4);var Wj=new dr(2e3,1e4);var Kj=10*60*1e3;var Qj=new dr(3e4,6e4);var Jj=new dr(5e3,15e3);var Xj=encodeURIComponent("fac");var pC="@firebase/auth",mC="1.8.2";var Af=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return L(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function zD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $D(n){In(new Gt("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;je(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});let p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TC(n)},h=new Sf(i,r,o,p);return qD(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),In(new Gt("auth-internal",e=>{let t=LD(e.getProvider("auth").getImmediate());return(i=>new Af(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(pC,mC,zD(n)),lt(pC,mC,"esm2017")}var GD=5*60,Yj=T1("authIdTokenMaxAge")||GD;function HD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jD({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{let o=Pf("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",HD().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$D("Browser");var $k="auth";var vu=class{constructor(){return ho($k)}};var xC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},IC={};var ui,Mf;(function(){var n;function e(R,E){function x(){}x.prototype=E.prototype,R.D=E.prototype,R.prototype=new x,R.prototype.constructor=R,R.C=function(D,P,M){for(var w=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)w[wt-2]=arguments[wt];return E.prototype[P].apply(D,w)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,E,x){x||(x=0);var D=Array(16);if(typeof E=="string")for(var P=0;16>P;++P)D[P]=E.charCodeAt(x++)|E.charCodeAt(x++)<<8|E.charCodeAt(x++)<<16|E.charCodeAt(x++)<<24;else for(P=0;16>P;++P)D[P]=E[x++]|E[x++]<<8|E[x++]<<16|E[x++]<<24;E=R.g[0],x=R.g[1],P=R.g[2];var M=R.g[3],w=E+(M^x&(P^M))+D[0]+3614090360&4294967295;E=x+(w<<7&4294967295|w>>>25),w=M+(P^E&(x^P))+D[1]+3905402710&4294967295,M=E+(w<<12&4294967295|w>>>20),w=P+(x^M&(E^x))+D[2]+606105819&4294967295,P=M+(w<<17&4294967295|w>>>15),w=x+(E^P&(M^E))+D[3]+3250441966&4294967295,x=P+(w<<22&4294967295|w>>>10),w=E+(M^x&(P^M))+D[4]+4118548399&4294967295,E=x+(w<<7&4294967295|w>>>25),w=M+(P^E&(x^P))+D[5]+1200080426&4294967295,M=E+(w<<12&4294967295|w>>>20),w=P+(x^M&(E^x))+D[6]+2821735955&4294967295,P=M+(w<<17&4294967295|w>>>15),w=x+(E^P&(M^E))+D[7]+4249261313&4294967295,x=P+(w<<22&4294967295|w>>>10),w=E+(M^x&(P^M))+D[8]+1770035416&4294967295,E=x+(w<<7&4294967295|w>>>25),w=M+(P^E&(x^P))+D[9]+2336552879&4294967295,M=E+(w<<12&4294967295|w>>>20),w=P+(x^M&(E^x))+D[10]+4294925233&4294967295,P=M+(w<<17&4294967295|w>>>15),w=x+(E^P&(M^E))+D[11]+2304563134&4294967295,x=P+(w<<22&4294967295|w>>>10),w=E+(M^x&(P^M))+D[12]+1804603682&4294967295,E=x+(w<<7&4294967295|w>>>25),w=M+(P^E&(x^P))+D[13]+4254626195&4294967295,M=E+(w<<12&4294967295|w>>>20),w=P+(x^M&(E^x))+D[14]+2792965006&4294967295,P=M+(w<<17&4294967295|w>>>15),w=x+(E^P&(M^E))+D[15]+1236535329&4294967295,x=P+(w<<22&4294967295|w>>>10),w=E+(P^M&(x^P))+D[1]+4129170786&4294967295,E=x+(w<<5&4294967295|w>>>27),w=M+(x^P&(E^x))+D[6]+3225465664&4294967295,M=E+(w<<9&4294967295|w>>>23),w=P+(E^x&(M^E))+D[11]+643717713&4294967295,P=M+(w<<14&4294967295|w>>>18),w=x+(M^E&(P^M))+D[0]+3921069994&4294967295,x=P+(w<<20&4294967295|w>>>12),w=E+(P^M&(x^P))+D[5]+3593408605&4294967295,E=x+(w<<5&4294967295|w>>>27),w=M+(x^P&(E^x))+D[10]+38016083&4294967295,M=E+(w<<9&4294967295|w>>>23),w=P+(E^x&(M^E))+D[15]+3634488961&4294967295,P=M+(w<<14&4294967295|w>>>18),w=x+(M^E&(P^M))+D[4]+3889429448&4294967295,x=P+(w<<20&4294967295|w>>>12),w=E+(P^M&(x^P))+D[9]+568446438&4294967295,E=x+(w<<5&4294967295|w>>>27),w=M+(x^P&(E^x))+D[14]+3275163606&4294967295,M=E+(w<<9&4294967295|w>>>23),w=P+(E^x&(M^E))+D[3]+4107603335&4294967295,P=M+(w<<14&4294967295|w>>>18),w=x+(M^E&(P^M))+D[8]+1163531501&4294967295,x=P+(w<<20&4294967295|w>>>12),w=E+(P^M&(x^P))+D[13]+2850285829&4294967295,E=x+(w<<5&4294967295|w>>>27),w=M+(x^P&(E^x))+D[2]+4243563512&4294967295,M=E+(w<<9&4294967295|w>>>23),w=P+(E^x&(M^E))+D[7]+1735328473&4294967295,P=M+(w<<14&4294967295|w>>>18),w=x+(M^E&(P^M))+D[12]+2368359562&4294967295,x=P+(w<<20&4294967295|w>>>12),w=E+(x^P^M)+D[5]+4294588738&4294967295,E=x+(w<<4&4294967295|w>>>28),w=M+(E^x^P)+D[8]+2272392833&4294967295,M=E+(w<<11&4294967295|w>>>21),w=P+(M^E^x)+D[11]+1839030562&4294967295,P=M+(w<<16&4294967295|w>>>16),w=x+(P^M^E)+D[14]+4259657740&4294967295,x=P+(w<<23&4294967295|w>>>9),w=E+(x^P^M)+D[1]+2763975236&4294967295,E=x+(w<<4&4294967295|w>>>28),w=M+(E^x^P)+D[4]+1272893353&4294967295,M=E+(w<<11&4294967295|w>>>21),w=P+(M^E^x)+D[7]+4139469664&4294967295,P=M+(w<<16&4294967295|w>>>16),w=x+(P^M^E)+D[10]+3200236656&4294967295,x=P+(w<<23&4294967295|w>>>9),w=E+(x^P^M)+D[13]+681279174&4294967295,E=x+(w<<4&4294967295|w>>>28),w=M+(E^x^P)+D[0]+3936430074&4294967295,M=E+(w<<11&4294967295|w>>>21),w=P+(M^E^x)+D[3]+3572445317&4294967295,P=M+(w<<16&4294967295|w>>>16),w=x+(P^M^E)+D[6]+76029189&4294967295,x=P+(w<<23&4294967295|w>>>9),w=E+(x^P^M)+D[9]+3654602809&4294967295,E=x+(w<<4&4294967295|w>>>28),w=M+(E^x^P)+D[12]+3873151461&4294967295,M=E+(w<<11&4294967295|w>>>21),w=P+(M^E^x)+D[15]+530742520&4294967295,P=M+(w<<16&4294967295|w>>>16),w=x+(P^M^E)+D[2]+3299628645&4294967295,x=P+(w<<23&4294967295|w>>>9),w=E+(P^(x|~M))+D[0]+4096336452&4294967295,E=x+(w<<6&4294967295|w>>>26),w=M+(x^(E|~P))+D[7]+1126891415&4294967295,M=E+(w<<10&4294967295|w>>>22),w=P+(E^(M|~x))+D[14]+2878612391&4294967295,P=M+(w<<15&4294967295|w>>>17),w=x+(M^(P|~E))+D[5]+4237533241&4294967295,x=P+(w<<21&4294967295|w>>>11),w=E+(P^(x|~M))+D[12]+1700485571&4294967295,E=x+(w<<6&4294967295|w>>>26),w=M+(x^(E|~P))+D[3]+2399980690&4294967295,M=E+(w<<10&4294967295|w>>>22),w=P+(E^(M|~x))+D[10]+4293915773&4294967295,P=M+(w<<15&4294967295|w>>>17),w=x+(M^(P|~E))+D[1]+2240044497&4294967295,x=P+(w<<21&4294967295|w>>>11),w=E+(P^(x|~M))+D[8]+1873313359&4294967295,E=x+(w<<6&4294967295|w>>>26),w=M+(x^(E|~P))+D[15]+4264355552&4294967295,M=E+(w<<10&4294967295|w>>>22),w=P+(E^(M|~x))+D[6]+2734768916&4294967295,P=M+(w<<15&4294967295|w>>>17),w=x+(M^(P|~E))+D[13]+1309151649&4294967295,x=P+(w<<21&4294967295|w>>>11),w=E+(P^(x|~M))+D[4]+4149444226&4294967295,E=x+(w<<6&4294967295|w>>>26),w=M+(x^(E|~P))+D[11]+3174756917&4294967295,M=E+(w<<10&4294967295|w>>>22),w=P+(E^(M|~x))+D[2]+718787259&4294967295,P=M+(w<<15&4294967295|w>>>17),w=x+(M^(P|~E))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(P+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+M&4294967295}i.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var x=E-this.blockSize,D=this.B,P=this.h,M=0;M<E;){if(P==0)for(;M<=x;)r(this,R,M),M+=this.blockSize;if(typeof R=="string"){for(;M<E;)if(D[P++]=R.charCodeAt(M++),P==this.blockSize){r(this,D),P=0;break}}else for(;M<E;)if(D[P++]=R[M++],P==this.blockSize){r(this,D),P=0;break}}this.h=P,this.o+=E},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var x=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=x&255,x/=256;for(this.u(R),R=Array(16),E=x=0;4>E;++E)for(var D=0;32>D;D+=8)R[x++]=this.g[E]>>>D&255;return R};function o(R,E){var x=d;return Object.prototype.hasOwnProperty.call(x,R)?x[R]:x[R]=E(R)}function c(R,E){this.h=E;for(var x=[],D=!0,P=R.length-1;0<=P;P--){var M=R[P]|0;D&&M==E||(x[P]=M,D=!1)}this.g=x}var d={};function p(R){return-128<=R&&128>R?o(R,function(E){return new c([E|0],0>E?-1:0)}):new c([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return b;if(0>R)return F(h(-R));for(var E=[],x=1,D=0;R>=x;D++)E[D]=R/x|0,x*=4294967296;return new c(E,0)}function v(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return F(v(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=h(Math.pow(E,8)),D=b,P=0;P<R.length;P+=8){var M=Math.min(8,R.length-P),w=parseInt(R.substring(P,P+M),E);8>M?(M=h(Math.pow(E,M)),D=D.j(M).add(h(w))):(D=D.j(x),D=D.add(h(w)))}return D}var b=p(0),T=p(1),O=p(16777216);n=c.prototype,n.m=function(){if(U(this))return-F(this).m();for(var R=0,E=1,x=0;x<this.g.length;x++){var D=this.i(x);R+=(0<=D?D:4294967296+D)*E,E*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(j(this))return"0";if(U(this))return"-"+F(this).toString(R);for(var E=h(Math.pow(R,6)),x=this,D="";;){var P=J(x,E).g;x=le(x,P.j(E));var M=((0<x.g.length?x.g[0]:x.h)>>>0).toString(R);if(x=P,j(x))return M+D;for(;6>M.length;)M="0"+M;D=M+D}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function j(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function U(R){return R.h==-1}n.l=function(R){return R=le(this,R),U(R)?-1:j(R)?0:1};function F(R){for(var E=R.g.length,x=[],D=0;D<E;D++)x[D]=~R.g[D];return new c(x,~R.h).add(T)}n.abs=function(){return U(this)?F(this):this},n.add=function(R){for(var E=Math.max(this.g.length,R.g.length),x=[],D=0,P=0;P<=E;P++){var M=D+(this.i(P)&65535)+(R.i(P)&65535),w=(M>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);D=w>>>16,M&=65535,w&=65535,x[P]=w<<16|M}return new c(x,x[x.length-1]&-2147483648?-1:0)};function le(R,E){return R.add(F(E))}n.j=function(R){if(j(this)||j(R))return b;if(U(this))return U(R)?F(this).j(F(R)):F(F(this).j(R));if(U(R))return F(this.j(F(R)));if(0>this.l(O)&&0>R.l(O))return h(this.m()*R.m());for(var E=this.g.length+R.g.length,x=[],D=0;D<2*E;D++)x[D]=0;for(D=0;D<this.g.length;D++)for(var P=0;P<R.g.length;P++){var M=this.i(D)>>>16,w=this.i(D)&65535,wt=R.i(P)>>>16,bi=R.i(P)&65535;x[2*D+2*P]+=w*bi,fe(x,2*D+2*P),x[2*D+2*P+1]+=M*bi,fe(x,2*D+2*P+1),x[2*D+2*P+1]+=w*wt,fe(x,2*D+2*P+1),x[2*D+2*P+2]+=M*wt,fe(x,2*D+2*P+2)}for(D=0;D<E;D++)x[D]=x[2*D+1]<<16|x[2*D];for(D=E;D<2*E;D++)x[D]=0;return new c(x,0)};function fe(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function ae(R,E){this.g=R,this.h=E}function J(R,E){if(j(E))throw Error("division by zero");if(j(R))return new ae(b,b);if(U(R))return E=J(F(R),E),new ae(F(E.g),F(E.h));if(U(E))return E=J(R,F(E)),new ae(F(E.g),E.h);if(30<R.g.length){if(U(R)||U(E))throw Error("slowDivide_ only works with positive integers.");for(var x=T,D=E;0>=D.l(R);)x=be(x),D=be(D);var P=he(x,1),M=he(D,1);for(D=he(D,2),x=he(x,2);!j(D);){var w=M.add(D);0>=w.l(R)&&(P=P.add(x),M=w),D=he(D,1),x=he(x,1)}return E=le(R,P.j(E)),new ae(P,E)}for(P=b;0<=R.l(E);){for(x=Math.max(1,Math.floor(R.m()/E.m())),D=Math.ceil(Math.log(x)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),M=h(x),w=M.j(E);U(w)||0<w.l(R);)x-=D,M=h(x),w=M.j(E);j(M)&&(M=T),P=P.add(M),R=le(R,w)}return new ae(P,R)}n.A=function(R){return J(this,R).h},n.and=function(R){for(var E=Math.max(this.g.length,R.g.length),x=[],D=0;D<E;D++)x[D]=this.i(D)&R.i(D);return new c(x,this.h&R.h)},n.or=function(R){for(var E=Math.max(this.g.length,R.g.length),x=[],D=0;D<E;D++)x[D]=this.i(D)|R.i(D);return new c(x,this.h|R.h)},n.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),x=[],D=0;D<E;D++)x[D]=this.i(D)^R.i(D);return new c(x,this.h^R.h)};function be(R){for(var E=R.g.length+1,x=[],D=0;D<E;D++)x[D]=R.i(D)<<1|R.i(D-1)>>>31;return new c(x,R.h)}function he(R,E){var x=E>>5;E%=32;for(var D=R.g.length-x,P=[],M=0;M<D;M++)P[M]=0<E?R.i(M+x)>>>E|R.i(M+x+1)<<32-E:R.i(M+x);return new c(P,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Mf=IC.Md5=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=v,ui=IC.Integer=c}).apply(typeof xC<"u"?xC:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},di={};var Of,Gk,fo,Nf,wa,bu,Vf,Ff,Lf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,f){return u==Array.prototype||u==Object.prototype||(u[m]=f.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var m=0;m<u.length;++m){var f=u[m];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=t(this);function r(u,m){if(m)e:{var f=i;u=u.split(".");for(var _=0;_<u.length-1;_++){var V=u[_];if(!(V in f))break e;f=f[V]}u=u[u.length-1],_=f[u],m=m(_),m!=_&&m!=null&&e(f,u,{configurable:!0,writable:!0,value:m})}}function o(u,m){u instanceof String&&(u+="");var f=0,_=!1,V={next:function(){if(!_&&f<u.length){var B=f++;return{value:m(B,u[B]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}r("Array.prototype.values",function(u){return u||function(){return o(this,function(m,f){return f})}});var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function h(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,f){return u.call.apply(u.bind,arguments)}function b(u,m,f){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),u.apply(m,V)}}return function(){return u.apply(m,arguments)}}function T(u,m,f){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,T.apply(null,arguments)}function O(u,m){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function j(u,m){function f(){}f.prototype=m.prototype,u.aa=m.prototype,u.prototype=new f,u.prototype.constructor=u,u.Qb=function(_,V,B){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return m.prototype[V].apply(_,re)}}function U(u){let m=u.length;if(0<m){let f=Array(m);for(let _=0;_<m;_++)f[_]=u[_];return f}return[]}function F(u,m){for(let f=1;f<arguments.length;f++){let _=arguments[f];if(p(_)){let V=u.length||0,B=_.length||0;u.length=V+B;for(let re=0;re<B;re++)u[V+re]=_[re]}else u.push(_)}}class le{constructor(m,f){this.i=m,this.j=f,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function fe(u){return/^[\s\xa0]*$/.test(u)}function ae(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function J(u){return J[" "](u),u}J[" "]=function(){};var be=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function he(u,m,f){for(let _ in u)m.call(f,u[_],_,u)}function R(u,m){for(let f in u)m.call(void 0,u[f],f,u)}function E(u){let m={};for(let f in u)m[f]=u[f];return m}let x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,m){let f,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(f in _)u[f]=_[f];for(let B=0;B<x.length;B++)f=x[B],Object.prototype.hasOwnProperty.call(_,f)&&(u[f]=_[f])}}function P(u){var m=1;u=u.split(":");let f=[];for(;0<m&&u.length;)f.push(u.shift()),m--;return u.length&&f.push(u.join(":")),f}function M(u){d.setTimeout(()=>{throw u},0)}function w(){var u=Op;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class wt{constructor(){this.h=this.g=null}add(m,f){let _=bi.get();_.set(m,f),this.h?this.h.next=_:this.g=_,this.h=_}}var bi=new le(()=>new Mp,u=>u.reset());class Mp{constructor(){this.next=this.g=this.h=null}set(m,f){this.h=m,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Qo,Jo=!1,Op=new wt,Mv=()=>{let u=d.Promise.resolve(void 0);Qo=()=>{u.then(Bx)}};var Bx=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(f){M(f)}var m=bi;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}Jo=!1};function yi(){this.s=this.s,this.C=this.C}yi.prototype.s=!1,yi.prototype.ma=function(){this.s||(this.s=!0,this.N())},yi.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var qx=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{let f=()=>{};d.addEventListener("test",f,m),d.removeEventListener("test",f,m)}catch{}return u}();function Xo(u,m){if(It.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var f=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(be){e:{try{J(m.nodeName);var V=!0;break e}catch{}V=!1}V||(m=null)}}else f=="mouseover"?m=u.fromElement:f=="mouseout"&&(m=u.toElement);this.relatedTarget=m,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:zx[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Xo.aa.h.call(this)}}j(Xo,It);var zx={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),$x=0;function Gx(u,m,f,_,V){this.listener=u,this.proxy=null,this.src=m,this.type=f,this.capture=!!_,this.ha=V,this.key=++$x,this.da=this.fa=!1}function Za(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function el(u){this.src=u,this.g={},this.h=0}el.prototype.add=function(u,m,f,_,V){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var re=Vp(u,m,_,V);return-1<re?(m=u[re],f||(m.fa=!1)):(m=new Gx(m,this.src,B,!!_,V),m.fa=f,u.push(m)),m};function Np(u,m){var f=m.type;if(f in u.g){var _=u.g[f],V=Array.prototype.indexOf.call(_,m,void 0),B;(B=0<=V)&&Array.prototype.splice.call(_,V,1),B&&(Za(m),u.g[f].length==0&&(delete u.g[f],u.h--))}}function Vp(u,m,f,_){for(var V=0;V<u.length;++V){var B=u[V];if(!B.da&&B.listener==m&&B.capture==!!f&&B.ha==_)return V}return-1}var Fp="closure_lm_"+(1e6*Math.random()|0),Lp={};function Ov(u,m,f,_,V){if(_&&_.once)return Vv(u,m,f,_,V);if(Array.isArray(m)){for(var B=0;B<m.length;B++)Ov(u,m[B],f,_,V);return null}return f=qp(f),u&&u[Yo]?u.K(m,f,h(_)?!!_.capture:!!_,V):Nv(u,m,f,!1,_,V)}function Nv(u,m,f,_,V,B){if(!m)throw Error("Invalid event type");var re=h(V)?!!V.capture:!!V,$e=jp(u);if($e||(u[Fp]=$e=new el(u)),f=$e.add(m,f,_,re,B),f.proxy)return f;if(_=Hx(),f.proxy=_,_.src=u,_.listener=f,u.addEventListener)qx||(V=re),V===void 0&&(V=!1),u.addEventListener(m.toString(),_,V);else if(u.attachEvent)u.attachEvent(Lv(m.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Hx(){function u(f){return m.call(u.src,u.listener,f)}let m=Wx;return u}function Vv(u,m,f,_,V){if(Array.isArray(m)){for(var B=0;B<m.length;B++)Vv(u,m[B],f,_,V);return null}return f=qp(f),u&&u[Yo]?u.L(m,f,h(_)?!!_.capture:!!_,V):Nv(u,m,f,!0,_,V)}function Fv(u,m,f,_,V){if(Array.isArray(m))for(var B=0;B<m.length;B++)Fv(u,m[B],f,_,V);else _=h(_)?!!_.capture:!!_,f=qp(f),u&&u[Yo]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],f=Vp(B,f,_,V),-1<f&&(Za(B[f]),Array.prototype.splice.call(B,f,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=jp(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Vp(m,f,_,V)),(f=-1<u?m[u]:null)&&Up(f))}function Up(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Yo])Np(m.i,u);else{var f=u.type,_=u.proxy;m.removeEventListener?m.removeEventListener(f,_,u.capture):m.detachEvent?m.detachEvent(Lv(f),_):m.addListener&&m.removeListener&&m.removeListener(_),(f=jp(m))?(Np(f,u),f.h==0&&(f.src=null,m[Fp]=null)):Za(u)}}}function Lv(u){return u in Lp?Lp[u]:Lp[u]="on"+u}function Wx(u,m){if(u.da)u=!0;else{m=new Xo(m,this);var f=u.listener,_=u.ha||u.src;u.fa&&Up(u),u=f.call(_,m)}return u}function jp(u){return u=u[Fp],u instanceof el?u:null}var Bp="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(u){return typeof u=="function"?u:(u[Bp]||(u[Bp]=function(m){return u.handleEvent(m)}),u[Bp])}function St(){yi.call(this),this.i=new el(this),this.M=this,this.F=null}j(St,yi),St.prototype[Yo]=!0,St.prototype.removeEventListener=function(u,m,f,_){Fv(this,u,m,f,_)};function Ut(u,m){var f,_=u.F;if(_)for(f=[];_;_=_.F)f.push(_);if(u=u.M,_=m.type||m,typeof m=="string")m=new It(m,u);else if(m instanceof It)m.target=m.target||u;else{var V=m;m=new It(_,u),D(m,V)}if(V=!0,f)for(var B=f.length-1;0<=B;B--){var re=m.g=f[B];V=tl(re,_,!0,m)&&V}if(re=m.g=u,V=tl(re,_,!0,m)&&V,V=tl(re,_,!1,m)&&V,f)for(B=0;B<f.length;B++)re=m.g=f[B],V=tl(re,_,!1,m)&&V}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var f=u.g[m],_=0;_<f.length;_++)Za(f[_]);delete u.g[m],u.h--}}this.F=null},St.prototype.K=function(u,m,f,_){return this.i.add(String(u),m,!1,f,_)},St.prototype.L=function(u,m,f,_){return this.i.add(String(u),m,!0,f,_)};function tl(u,m,f,_){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var V=!0,B=0;B<m.length;++B){var re=m[B];if(re&&!re.da&&re.capture==f){var $e=re.listener,Tt=re.ha||re.src;re.fa&&Np(u.i,re),V=$e.call(Tt,_)!==!1&&V}}return V&&!_.defaultPrevented}function Uv(u,m,f){if(typeof u=="function")f&&(u=T(u,f));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function jv(u){u.g=Uv(()=>{u.g=null,u.i&&(u.i=!1,jv(u))},u.l);let m=u.h;u.h=null,u.m.apply(null,m)}class Kx extends yi{constructor(m,f){super(),this.m=m,this.l=f,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:jv(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(u){yi.call(this),this.h=u,this.g={}}j(Zo,yi);var Bv=[];function qv(u){he(u.g,function(m,f){this.g.hasOwnProperty(f)&&Up(m)},u),u.g={}}Zo.prototype.N=function(){Zo.aa.N.call(this),qv(this)},Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zp=d.JSON.stringify,Qx=d.JSON.parse,Jx=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function $p(){}$p.prototype.h=null;function zv(u){return u.h||(u.h=u.i())}function $v(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gp(){It.call(this,"d")}j(Gp,It);function Hp(){It.call(this,"c")}j(Hp,It);var Wi={},Gv=null;function nl(){return Gv=Gv||new St}Wi.La="serverreachability";function Hv(u){It.call(this,Wi.La,u)}j(Hv,It);function ts(u){let m=nl();Ut(m,new Hv(m))}Wi.STAT_EVENT="statevent";function Wv(u,m){It.call(this,Wi.STAT_EVENT,u),this.stat=m}j(Wv,It);function jt(u){let m=nl();Ut(m,new Wv(m,u))}Wi.Ma="timingevent";function Kv(u,m){It.call(this,Wi.Ma,u),this.size=m}j(Kv,It);function ns(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function is(){this.g=!0}is.prototype.xa=function(){this.g=!1};function Xx(u,m,f,_,V,B){u.info(function(){if(u.g)if(B)for(var re="",$e=B.split("&"),Tt=0;Tt<$e.length;Tt++){var Ue=$e[Tt].split("=");if(1<Ue.length){var At=Ue[0];Ue=Ue[1];var Pt=At.split("_");re=2<=Pt.length&&Pt[1]=="type"?re+(At+"="+Ue+"&"):re+(At+"=redacted&")}}else re=null;else re=B;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+m+`
`+f+`
`+re})}function Yx(u,m,f,_,V,B,re){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+m+`
`+f+`
`+B+" "+re})}function xr(u,m,f,_){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+eI(u,f)+(_?" "+_:"")})}function Zx(u,m){u.info(function(){return"TIMEOUT: "+m})}is.prototype.info=function(){};function eI(u,m){if(!u.g)return m;if(!m)return null;try{var f=JSON.parse(m);if(f){for(u=0;u<f.length;u++)if(Array.isArray(f[u])){var _=f[u];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var B=V[0];if(B!="noop"&&B!="stop"&&B!="close")for(var re=1;re<V.length;re++)V[re]=""}}}}return zp(f)}catch{return m}}var il={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wp;function rl(){}j(rl,$p),rl.prototype.g=function(){return new XMLHttpRequest},rl.prototype.i=function(){return{}},Wp=new rl;function Ei(u,m,f,_){this.j=u,this.i=m,this.l=f,this.R=_||1,this.U=new Zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jv}function Jv(){this.i=null,this.g="",this.h=!1}var Xv={},Kp={};function Qp(u,m,f){u.L=1,u.v=ll(Qn(m)),u.m=f,u.P=!0,Yv(u,null)}function Yv(u,m){u.F=Date.now(),ol(u),u.A=Qn(u.v);var f=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),p_(f.i,"t",_),u.C=0,f=u.j.J,u.h=new Jv,u.g=R_(u.j,f?m:null,!u.m),0<u.O&&(u.M=new Kx(T(u.Y,u,u.g),u.O)),m=u.U,f=u.g,_=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Bv[0]=V.toString()),V=Bv);for(var B=0;B<V.length;B++){var re=Ov(f,V[B],_||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),ts(),Xx(u.i,u.u,u.A,u.l,u.R,u.m)}Ei.prototype.ca=function(u){u=u.target;let m=this.M;m&&Jn(u)==3?m.j():this.Y(u)},Ei.prototype.Y=function(u){try{if(u==this.g)e:{let Pt=Jn(this.g);var m=this.g.Ba();let Ar=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||b_(this.g)))){this.J||Pt!=4||m==7||(m==8||0>=Ar?ts(3):ts(2)),Jp(this);var f=this.g.Z();this.X=f;t:if(Zv(this)){var _=b_(this.g);u="";var V=_.length,B=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),rs(this);var re="";break t}this.h.i=new d.TextDecoder}for(m=0;m<V;m++)this.h.h=!0,u+=this.h.i.decode(_[m],{stream:!(B&&m==V-1)});_.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=f==200,Yx(this.i,this.u,this.A,this.l,this.R,Pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Tt=this.g;if(($e=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe($e)){var Ue=$e;break t}}Ue=null}if(f=Ue)xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xp(this,f);else{this.o=!1,this.s=3,jt(12),Ki(this),rs(this);break e}}if(this.P){f=!0;let En;for(;!this.J&&this.C<re.length;)if(En=tI(this,re),En==Kp){Pt==4&&(this.s=4,jt(14),f=!1),xr(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Xv){this.s=4,jt(15),xr(this.i,this.l,re,"[Invalid Chunk]"),f=!1;break}else xr(this.i,this.l,En,null),Xp(this,En);if(Zv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||re.length!=0||this.h.h||(this.s=1,jt(16),f=!1),this.o=this.o&&f,!f)xr(this.i,this.l,re,"[Invalid Chunked Response]"),Ki(this),rs(this);else if(0<re.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),im(At),At.M=!0,jt(11))}}else xr(this.i,this.l,re,null),Xp(this,re);Pt==4&&Ki(this),this.o&&!this.J&&(Pt==4?I_(this.j,this):(this.o=!1,ol(this)))}else _I(this.g),f==400&&0<re.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),Ki(this),rs(this)}}}catch{}finally{}};function Zv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function tI(u,m){var f=u.C,_=m.indexOf(`
`,f);return _==-1?Kp:(f=Number(m.substring(f,_)),isNaN(f)?Xv:(_+=1,_+f>m.length?Kp:(m=m.slice(_,_+f),u.C=_+f,m)))}Ei.prototype.cancel=function(){this.J=!0,Ki(this)};function ol(u){u.S=Date.now()+u.I,e_(u,u.I)}function e_(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ns(T(u.ba,u),m)}function Jp(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Ei.prototype.ba=function(){this.B=null;let u=Date.now();0<=u-this.S?(Zx(this.i,this.A),this.L!=2&&(ts(),jt(17)),Ki(this),this.s=2,rs(this)):e_(this,this.S-u)};function rs(u){u.j.G==0||u.J||I_(u.j,u)}function Ki(u){Jp(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,qv(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Xp(u,m){try{var f=u.j;if(f.G!=0&&(f.g==u||Yp(f.h,u))){if(!u.K&&Yp(f.h,u)&&f.G==3){try{var _=f.Da.g.parse(m)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<u.F)ml(f),dl(f);else break e;nm(f),jt(18)}}else f.za=V[1],0<f.za-f.T&&37500>V[2]&&f.F&&f.v==0&&!f.C&&(f.C=ns(T(f.Za,f),6e3));if(1>=i_(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ji(f,11)}else if((u.K||f.g==u)&&ml(f),!fe(m))for(V=f.Da.g.parse(m),m=0;m<V.length;m++){let Ue=V[m];if(f.T=Ue[0],Ue=Ue[1],f.G==2)if(Ue[0]=="c"){f.K=Ue[1],f.ia=Ue[2];let At=Ue[3];At!=null&&(f.la=At,f.j.info("VER="+f.la));let Pt=Ue[4];Pt!=null&&(f.Aa=Pt,f.j.info("SVER="+f.Aa));let Ar=Ue[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(_=1.5*Ar,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;let En=u.g;if(En){let fl=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fl){var B=_.h;B.g||fl.indexOf("spdy")==-1&&fl.indexOf("quic")==-1&&fl.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Zp(B,B.h),B.h=null))}if(_.D){let rm=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;rm&&(_.ya=rm,Ke(_.I,_.D,rm))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-u.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var re=u;if(_.qa=P_(_,_.J?_.ia:null,_.W),re.K){r_(_.h,re);var $e=re,Tt=_.L;Tt&&($e.I=Tt),$e.B&&(Jp($e),ol($e)),_.g=re}else T_(_);0<f.i.length&&pl(f)}else Ue[0]!="stop"&&Ue[0]!="close"||Ji(f,7);else f.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Ji(f,7):tm(f):Ue[0]!="noop"&&f.l&&f.l.ta(Ue),f.v=0)}}ts(4)}catch{}}var nI=class{constructor(u,m){this.g=u,this.map=m}};function t_(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function n_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function i_(u){return u.h?1:u.g?u.g.size:0}function Yp(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Zp(u,m){u.g?u.g.add(m):u.h=m}function r_(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}t_.prototype.cancel=function(){if(this.i=o_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let u of this.g.values())u.cancel();this.g.clear()}};function o_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(let f of u.g.values())m=m.concat(f.D);return m}return U(u.i)}function iI(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],f=u.length,_=0;_<f;_++)m.push(u[_]);return m}m=[],f=0;for(_ in u)m[f++]=u[_];return m}function rI(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var f=0;f<u;f++)m.push(f);return m}m=[],f=0;for(let _ in u)m[f++]=_;return m}}}function s_(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var f=rI(u),_=iI(u),V=_.length,B=0;B<V;B++)m.call(void 0,_[B],f&&f[B],u)}var a_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oI(u,m){if(u){u=u.split("&");for(var f=0;f<u.length;f++){var _=u[f].indexOf("="),V=null;if(0<=_){var B=u[f].substring(0,_);V=u[f].substring(_+1)}else B=u[f];m(B,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Qi){this.h=u.h,sl(this,u.j),this.o=u.o,this.g=u.g,al(this,u.s),this.l=u.l;var m=u.i,f=new as;f.i=m.i,m.g&&(f.g=new Map(m.g),f.h=m.h),l_(this,f),this.m=u.m}else u&&(m=String(u).match(a_))?(this.h=!1,sl(this,m[1]||"",!0),this.o=os(m[2]||""),this.g=os(m[3]||"",!0),al(this,m[4]),this.l=os(m[5]||"",!0),l_(this,m[6]||"",!0),this.m=os(m[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Qi.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ss(m,c_,!0),":");var f=this.g;return(f||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ss(m,c_,!0),"@"),u.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&u.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&u.push("/"),u.push(ss(f,f.charAt(0)=="/"?lI:aI,!0))),(f=this.i.toString())&&u.push("?",f),(f=this.m)&&u.push("#",ss(f,uI)),u.join("")};function Qn(u){return new Qi(u)}function sl(u,m,f){u.j=f?os(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function al(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function l_(u,m,f){m instanceof as?(u.i=m,dI(u.i,u.h)):(f||(m=ss(m,cI)),u.i=new as(m,u.h))}function Ke(u,m,f){u.i.set(m,f)}function ll(u){return Ke(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function os(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ss(u,m,f){return typeof u=="string"?(u=encodeURI(u).replace(m,sI),f&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sI(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var c_=/[#\/\?@]/g,aI=/[#\?:]/g,lI=/[#\?]/g,cI=/[#\?@]/g,uI=/#/g;function as(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ci(u){u.g||(u.g=new Map,u.h=0,u.i&&oI(u.i,function(m,f){u.add(decodeURIComponent(m.replace(/\+/g," ")),f)}))}n=as.prototype,n.add=function(u,m){Ci(this),this.i=null,u=Ir(this,u);var f=this.g.get(u);return f||this.g.set(u,f=[]),f.push(m),this.h+=1,this};function u_(u,m){Ci(u),m=Ir(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function d_(u,m){return Ci(u),m=Ir(u,m),u.g.has(m)}n.forEach=function(u,m){Ci(this),this.g.forEach(function(f,_){f.forEach(function(V){u.call(m,V,_,this)},this)},this)},n.na=function(){Ci(this);let u=Array.from(this.g.values()),m=Array.from(this.g.keys()),f=[];for(let _=0;_<m.length;_++){let V=u[_];for(let B=0;B<V.length;B++)f.push(m[_])}return f},n.V=function(u){Ci(this);let m=[];if(typeof u=="string")d_(this,u)&&(m=m.concat(this.g.get(Ir(this,u))));else{u=Array.from(this.g.values());for(let f=0;f<u.length;f++)m=m.concat(u[f])}return m},n.set=function(u,m){return Ci(this),this.i=null,u=Ir(this,u),d_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function p_(u,m,f){u_(u,m),0<f.length&&(u.i=null,u.g.set(Ir(u,m),U(f)),u.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let u=[],m=Array.from(this.g.keys());for(var f=0;f<m.length;f++){var _=m[f];let B=encodeURIComponent(String(_)),re=this.V(_);for(_=0;_<re.length;_++){var V=B;re[_]!==""&&(V+="="+encodeURIComponent(String(re[_]))),u.push(V)}}return this.i=u.join("&")};function Ir(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function dI(u,m){m&&!u.j&&(Ci(u),u.i=null,u.g.forEach(function(f,_){var V=_.toLowerCase();_!=V&&(u_(this,_),p_(this,V,f))},u)),u.j=m}function pI(u,m){let f=new is;if(d.Image){let _=new Image;_.onload=O(wi,f,"TestLoadImage: loaded",!0,m,_),_.onerror=O(wi,f,"TestLoadImage: error",!1,m,_),_.onabort=O(wi,f,"TestLoadImage: abort",!1,m,_),_.ontimeout=O(wi,f,"TestLoadImage: timeout",!1,m,_),d.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else m(!1)}function mI(u,m){let f=new is,_=new AbortController,V=setTimeout(()=>{_.abort(),wi(f,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:_.signal}).then(B=>{clearTimeout(V),B.ok?wi(f,"TestPingServer: ok",!0,m):wi(f,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(V),wi(f,"TestPingServer: error",!1,m)})}function wi(u,m,f,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(f)}catch{}}function hI(){this.g=new Jx}function fI(u,m,f){let _=f||"";try{s_(u,function(V,B){let re=V;h(V)&&(re=zp(V)),m.push(_+B+"="+encodeURIComponent(re))})}catch(V){throw m.push(_+"type="+encodeURIComponent("_badmap")),V}}function ls(u){this.l=u.Ub||null,this.j=u.eb||!1}j(ls,$p),ls.prototype.g=function(){return new cl(this.l,this.j)},ls.prototype.i=function(u){return function(){return u}}({});function cl(u,m){St.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(cl,St),n=cl.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,us(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;m_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function m_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?cs(this):us(this),this.readyState==3&&m_(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,cs(this))},n.Qa=function(u){this.g&&(this.response=u,cs(this))},n.ga=function(){this.g&&cs(this)};function cs(u){u.readyState=4,u.l=null,u.j=null,u.v=null,us(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let u=[],m=this.h.entries();for(var f=m.next();!f.done;)f=f.value,u.push(f[0]+": "+f[1]),f=m.next();return u.join(`\r
`)};function us(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function h_(u){let m="";return he(u,function(f,_){m+=_,m+=":",m+=f,m+=`\r
`}),m}function em(u,m,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=h_(f),typeof u=="string"?f!=null&&encodeURIComponent(String(f)):Ke(u,m,f))}function Ze(u){St.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ze,St);var gI=/^https?$/i,vI=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wp.g(),this.v=this.o?zv(this.o):zv(Wp),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){f_(this,B);return}if(u=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)f.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(let B of _.keys())f.set(B,_.get(B));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(B=>B.toLowerCase()=="content-type"),V=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(vI,m,void 0))||_||V||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[B,re]of f)this.g.setRequestHeader(B,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{__(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){f_(this,B)}};function f_(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,g_(u),ul(u)}function g_(u){u.A||(u.A=!0,Ut(u,"complete"),Ut(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ut(this,"complete"),Ut(this,"abort"),ul(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ul(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?v_(this):this.bb())},n.bb=function(){v_(this)};function v_(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jn(u)!=4||u.Z()!=2)){if(u.u&&Jn(u)==4)Uv(u.Ea,0,u);else if(Ut(u,"readystatechange"),Jn(u)==4){u.h=!1;try{let re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var f;if(!(f=m)){var _;if(_=re===0){var V=String(u.D).match(a_)[1]||null;!V&&d.self&&d.self.location&&(V=d.self.location.protocol.slice(0,-1)),_=!gI.test(V?V.toLowerCase():"")}f=_}if(f)Ut(u,"complete"),Ut(u,"success");else{u.m=6;try{var B=2<Jn(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",g_(u)}}finally{ul(u)}}}}function ul(u,m){if(u.g){__(u);let f=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ut(u,"ready");try{f.onreadystatechange=_}catch{}}}function __(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Qx(m)}};function b_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function _I(u){let m={};u=(u.g&&2<=Jn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(fe(u[_]))continue;var f=P(u[_]);let V=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();let B=m[V]||[];m[V]=B,B.push(f)}R(m,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(u,m,f){return f&&f.internalChannelParams&&f.internalChannelParams[u]||m}function y_(u){this.Aa=0,this.i=[],this.j=new is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,u),this.cb=ds("retryDelaySeedMs",1e4,u),this.Wa=ds("forwardChannelMaxRetries",2,u),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new t_(u&&u.concurrentRequestLimit),this.Da=new hI,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=y_.prototype,n.la=8,n.G=1,n.connect=function(u,m,f,_){jt(0),this.W=u,this.H=m||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=P_(this,null,this.W),pl(this)};function tm(u){if(E_(u),u.G==3){var m=u.U++,f=Qn(u.I);if(Ke(f,"SID",u.K),Ke(f,"RID",m),Ke(f,"TYPE","terminate"),ps(u,f),m=new Ei(u,u.j,m),m.L=2,m.v=ll(Qn(f)),f=!1,d.navigator&&d.navigator.sendBeacon)try{f=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!f&&d.Image&&(new Image().src=m.v,f=!0),f||(m.g=R_(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ol(m)}A_(u)}function dl(u){u.g&&(im(u),u.g.cancel(),u.g=null)}function E_(u){dl(u),u.u&&(d.clearTimeout(u.u),u.u=null),ml(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function pl(u){if(!n_(u.h)&&!u.s){u.s=!0;var m=u.Ga;Qo||Mv(),Jo||(Qo(),Jo=!0),Op.add(m,u),u.B=0}}function bI(u,m){return i_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ns(T(u.Ga,u,m),S_(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;let V=new Ei(this,this.j,u),B=this.o;if(this.S&&(B?(B=E(B),D(B,this.S)):B=this.S),this.m!==null||this.O||(V.H=B,B=null),this.P)e:{for(var m=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(m+=_,4096<m){m=f;break e}if(m===4096||f===this.i.length-1){m=f+1;break e}}m=1e3}else m=1e3;m=w_(this,V,m),f=Qn(this.I),Ke(f,"RID",u),Ke(f,"CVER",22),this.D&&Ke(f,"X-HTTP-Session-Id",this.D),ps(this,f),B&&(this.O?m="headers="+encodeURIComponent(String(h_(B)))+"&"+m:this.m&&em(f,this.m,B)),Zp(this.h,V),this.Ua&&Ke(f,"TYPE","init"),this.P?(Ke(f,"$req",m),Ke(f,"SID","null"),V.T=!0,Qp(V,f,null)):Qp(V,f,m),this.G=2}}else this.G==3&&(u?C_(this,u):this.i.length==0||n_(this.h)||C_(this))};function C_(u,m){var f;m?f=m.l:f=u.U++;let _=Qn(u.I);Ke(_,"SID",u.K),Ke(_,"RID",f),Ke(_,"AID",u.T),ps(u,_),u.m&&u.o&&em(_,u.m,u.o),f=new Ei(u,u.j,f,u.B+1),u.m===null&&(f.H=u.o),m&&(u.i=m.D.concat(u.i)),m=w_(u,f,1e3),f.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zp(u.h,f),Qp(f,_,m)}function ps(u,m){u.H&&he(u.H,function(f,_){Ke(m,_,f)}),u.l&&s_({},function(f,_){Ke(m,_,f)})}function w_(u,m,f){f=Math.min(u.i.length,f);var _=u.l?T(u.l.Na,u.l,u):null;e:{var V=u.i;let B=-1;for(;;){let re=["count="+f];B==-1?0<f?(B=V[0].g,re.push("ofs="+B)):B=0:re.push("ofs="+B);let $e=!0;for(let Tt=0;Tt<f;Tt++){let Ue=V[Tt].g,At=V[Tt].map;if(Ue-=B,0>Ue)B=Math.max(0,V[Tt].g-100),$e=!1;else try{fI(At,re,"req"+Ue+"_")}catch{_&&_(At)}}if($e){_=re.join("&");break e}}}return u=u.i.splice(0,f),m.D=u,_}function T_(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Qo||Mv(),Jo||(Qo(),Jo=!0),Op.add(m,u),u.v=0}}function nm(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ns(T(u.Fa,u),S_(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,x_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ns(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),dl(this),x_(this))};function im(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function x_(u){u.g=new Ei(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Qn(u.qa);Ke(m,"RID","rpc"),Ke(m,"SID",u.K),Ke(m,"AID",u.T),Ke(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ke(m,"TO",u.ja),Ke(m,"TYPE","xmlhttp"),ps(u,m),u.m&&u.o&&em(m,u.m,u.o),u.L&&(u.g.I=u.L);var f=u.g;u=u.ia,f.L=1,f.v=ll(Qn(m)),f.m=null,f.P=!0,Yv(f,u)}n.Za=function(){this.C!=null&&(this.C=null,dl(this),nm(this),jt(19))};function ml(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function I_(u,m){var f=null;if(u.g==m){ml(u),im(u),u.g=null;var _=2}else if(Yp(u.h,m))f=m.D,r_(u.h,m),_=1;else return;if(u.G!=0){if(m.o)if(_==1){f=m.m?m.m.length:0,m=Date.now()-m.F;var V=u.B;_=nl(),Ut(_,new Kv(_,f)),pl(u)}else T_(u);else if(V=m.s,V==3||V==0&&0<m.X||!(_==1&&bI(u,m)||_==2&&nm(u)))switch(f&&0<f.length&&(m=u.h,m.i=m.i.concat(f)),V){case 1:Ji(u,5);break;case 4:Ji(u,10);break;case 3:Ji(u,6);break;default:Ji(u,2)}}}function S_(u,m){let f=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(f*=2),f*m}function Ji(u,m){if(u.j.info("Error code "+m),m==2){var f=T(u.fb,u),_=u.Xa;let V=!_;_=new Qi(_||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||sl(_,"https"),ll(_),V?pI(_.toString(),f):mI(_.toString(),f)}else jt(2);u.G=0,u.l&&u.l.sa(m),A_(u),E_(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function A_(u){if(u.G=0,u.ka=[],u.l){let m=o_(u.h);(m.length!=0||u.i.length!=0)&&(F(u.ka,m),F(u.ka,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.ra()}}function P_(u,m,f){var _=f instanceof Qi?Qn(f):new Qi(f);if(_.g!="")m&&(_.g=m+"."+_.g),al(_,_.s);else{var V=d.location;_=V.protocol,m=m?m+"."+V.hostname:V.hostname,V=+V.port;var B=new Qi(null);_&&sl(B,_),m&&(B.g=m),V&&al(B,V),f&&(B.l=f),_=B}return f=u.D,m=u.ya,f&&m&&Ke(_,f,m),Ke(_,"VER",u.la),ps(u,_),_}function R_(u,m,f){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new ls({eb:f})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function D_(){}n=D_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hl(){}hl.prototype.g=function(u,m){return new Qt(u,m)};function Qt(u,m){St.call(this),this.g=new y_(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!fe(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!fe(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Sr(this)}j(Qt,St),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){tm(this.g)},Qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var f={};f.__data__=u,u=f}else this.u&&(f={},f.__data__=zp(u),u=f);m.i.push(new nI(m.Ya++,u)),m.G==3&&pl(m)},Qt.prototype.N=function(){this.g.l=null,delete this.j,tm(this.g),delete this.g,Qt.aa.N.call(this)};function k_(u){Gp.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(let f in m){u=f;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}j(k_,Gp);function M_(){Hp.call(this),this.status=1}j(M_,Hp);function Sr(u){this.g=u}j(Sr,D_),Sr.prototype.ua=function(){Ut(this.g,"a")},Sr.prototype.ta=function(u){Ut(this.g,new k_(u))},Sr.prototype.sa=function(u){Ut(this.g,new M_)},Sr.prototype.ra=function(){Ut(this.g,"b")},hl.prototype.createWebChannel=hl.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,Lf=di.createWebChannelTransport=function(){return new hl},Ff=di.getStatEventTarget=function(){return nl()},Vf=di.Event=Wi,bu=di.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},il.NO_ERROR=0,il.TIMEOUT=8,il.HTTP_ERROR=6,wa=di.ErrorCode=il,Qv.COMPLETE="complete",Nf=di.EventType=Qv,$v.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",St.prototype.listen=St.prototype.K,fo=di.WebChannel=$v,Gk=di.FetchXmlHttpFactory=ls,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Of=di.XhrIo=Ze}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});var SC="@firebase/firestore";var Et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");var Fo="11.2.0";var fr=new jn("@firebase/firestore");function go(){return fr.logLevel}function de(n,...e){if(fr.logLevel<=Me.DEBUG){let t=e.map(wg);fr.debug(`Firestore (${Fo}): ${n}`,...t)}}function hi(n,...e){if(fr.logLevel<=Me.ERROR){let t=e.map(wg);fr.error(`Firestore (${Fo}): ${n}`,...t)}}function wo(n,...e){if(fr.logLevel<=Me.WARN){let t=e.map(wg);fr.warn(`Firestore (${Fo}): ${n}`,...t)}}function wg(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function xe(n="Unexpected state"){let e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+n;throw hi(e),new Error(e)}function qe(n,e){n||xe()}function Se(n,e){return n}var Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},_e=class extends vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var pi=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Iu=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},zf=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Et.UNAUTHENTICATED))}shutdown(){}},$f=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Gf=class{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let i=this.i,r=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve(),o=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pi,e.enqueueRetryable(()=>r(this.currentUser))};let c=()=>{let p=o;e.enqueueRetryable(()=>L(this,null,function*(){yield p.promise,yield r(this.currentUser)}))},d=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){let p=this.t.getImmediate({optional:!0});p?d(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pi)}},0),c()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string"),new Iu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Et(e)}},Hf=class{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},Wf=class{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Hf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Kf=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Qf=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){qe(this.o===void 0);let i=o=>{o.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let c=o.token!==this.R;return this.R=o.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};let r=o=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?r(o):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(qe(typeof t.token=="string"),this.R=t.token,new Kf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Hk(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}var Su=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let r=Hk(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%e.length))}return i}};function Ve(n,e){return n<e?-1:n>e?1:0}function To(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}var xt=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new n(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var Ae=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new xt(0,0))}static max(){return new n(new xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Au=class n{constructor(e,t,i){t===void 0?t=0:t>e.length&&xe(),i===void 0?i=e.length-t:i>e.length-t&&xe(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++){let o=n.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){let i=n.isNumericId(e),r=n.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?n.extractNumericId(e).compare(n.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}},nt=class n extends Au{construct(e,t,i){return new n(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new _e(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new n(t)}static emptyPath(){return new n([])}},Wk=/^[_a-zA-Z][_a-zA-Z0-9]*$/,sn=class n extends Au{construct(e,t,i){return new n(e,t,i)}static isValidIdentifier(e){return Wk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],i="",r=0,o=()=>{if(i.length===0)throw new _e(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""},c=!1;for(;r<e.length;){let d=e[r];if(d==="\\"){if(r+1===e.length)throw new _e(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let p=e[r+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,r+=2}else d==="`"?(c=!c,r++):d!=="."||c?(i+=d,r++):(o(),r++)}if(o(),c)throw new _e(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var Te=class n{constructor(e){this.path=e}static fromPath(e){return new n(nt.fromString(e))}static fromName(e){return new n(nt.fromString(e).popFirst(5))}static empty(){return new n(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new nt(e.slice()))}};var Jf=class{constructor(e,t,i,r){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=r}};Jf.UNKNOWN_ID=-1;function Kk(n,e){let t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=Ae.fromTimestamp(i===1e9?new xt(t+1,0):new xt(t,i));return new gr(r,Te.empty(),e)}function Qk(n){return new gr(n.readTime,n.key,-1)}var gr=class n{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new n(Ae.min(),Te.empty(),-1)}static max(){return new n(Ae.max(),Te.empty(),-1)}};function Jk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}var Xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Xf=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};function Lo(n){return L(this,null,function*(){if(n.code!==Z.FAILED_PRECONDITION||n.message!==Xk)throw n;de("LocalStore","Unexpectedly lost primary lease")})}var X=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,i)=>{t(e)})}static reject(e){return new n((t,i)=>{i(e)})}static waitFor(e){return new n((t,i)=>{let r=0,o=0,c=!1;e.forEach(d=>{++r,d.next(()=>{++o,c&&o===r&&t()},p=>i(p))}),c=!0,o===r&&t()})}static or(e){let t=n.resolve(!1);for(let i of e)t=t.next(r=>r?n.resolve(r):i());return t}static forEach(e,t){let i=[];return e.forEach((r,o)=>{i.push(t.call(this,r,o))}),this.waitFor(i)}static mapArray(e,t){return new n((i,r)=>{let o=e.length,c=new Array(o),d=0;for(let p=0;p<o;p++){let h=p;t(e[h]).next(v=>{c[h]=v,++d,d===o&&i(c)},v=>r(v))}})}static doWhile(e,t){return new n((i,r)=>{let o=()=>{e()===!0?t().next(()=>{o()},r):i()};o()})}};function Yk(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Uo(n){return n.name==="IndexedDbTransactionError"}var Tg=(()=>{class n{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=r=>this.ie(r),this.se=r=>i.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.se&&this.se(t),t}}return n.oe=-1,n})();function od(n){return n==null}function Pa(n){return n===0&&1/n==-1/0}function Zk(n){return typeof n=="number"&&Number.isInteger(n)&&!Pa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function eM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=AC(e)),e=tM(n.get(t),e);return AC(e)}function tM(n,e){let t=e,i=n.length;for(let r=0;r<i;r++){let o=n.charAt(r);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function AC(n){return n+""}var nM=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eB=[...nM,"documentOverlays"],iM=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rM=iM,oM=[...rM,"indexConfiguration","indexState","indexEntries"];var tB=[...oM,"globals"];function PC(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hi(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function aw(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var it=class n{constructor(e,t){this.comparator=e,this.root=t||qn.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qn.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}},yo=class{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},qn=class n{constructor(e,t,i,r,o){this.key=e,this.value=t,this.color=i??n.RED,this.left=r??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,o){return new n(e??this.key,t??this.value,i??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this,o=i(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,i),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return n.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();let e=this.left.check();if(e!==this.right.check())throw xe();return e+(this.isRed()?0:1)}};qn.EMPTY=null,qn.RED=!0,qn.BLACK=!1;qn.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,t,i,r,o){return this}insert(e,t,i){return new qn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ct=class n{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pu(this.data.getIterator())}getIteratorFrom(e){return new Pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Pu=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var yn=class n{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ct(sn.comparator);for(let i of this.fields)t=t.add(i);for(let i of e)t=t.add(i);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(t,i)=>t.isEqual(i))}};var Ru=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Lt=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ru("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(r){let o="";for(let c=0;c<r.length;++c)o+=String.fromCharCode(r[c]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Lt.EMPTY_BYTE_STRING=new Lt("");var sM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(n){if(qe(!!n),typeof n=="string"){let e=0,t=sM.exec(n);if(qe(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}let i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ye(n.seconds),nanos:Ye(n.nanos)}}function Ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gi(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}function xg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function sd(n){let e=n.mapValue.fields.__previous_value__;return xg(e)?sd(e):e}function Ra(n){let e=fi(n.mapValue.fields.__local_write_time__.timestampValue);return new xt(e.seconds,e.nanos)}var Yf=class{constructor(e,t,i,r,o,c,d,p,h){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=h}},Du=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var yu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xg(n)?4:cw(n)?9007199254740991:lw(n)?10:11:xe()}function Gn(n,e){if(n===e)return!0;let t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ra(n).isEqual(Ra(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;let c=fi(r.timestampValue),d=fi(o.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return gi(r.bytesValue).isEqual(gi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return Ye(r.geoPointValue.latitude)===Ye(o.geoPointValue.latitude)&&Ye(r.geoPointValue.longitude)===Ye(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Ye(r.integerValue)===Ye(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){let c=Ye(r.doubleValue),d=Ye(o.doubleValue);return c===d?Pa(c)===Pa(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return To(n.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(r,o){let c=r.mapValue.fields||{},d=o.mapValue.fields||{};if(PC(c)!==PC(d))return!1;for(let p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Gn(c[p],d[p])))return!1;return!0}(n,e);default:return xe()}}function Da(n,e){return(n.values||[]).find(t=>Gn(t,e))!==void 0}function xo(n,e){if(n===e)return 0;let t=zi(n),i=zi(e);if(t!==i)return Ve(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return function(o,c){let d=Ye(o.integerValue||o.doubleValue),p=Ye(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return RC(n.timestampValue,e.timestampValue);case 4:return RC(Ra(n),Ra(e));case 5:return Ve(n.stringValue,e.stringValue);case 6:return function(o,c){let d=gi(o),p=gi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){let d=o.split("/"),p=c.split("/");for(let h=0;h<d.length&&h<p.length;h++){let v=Ve(d[h],p[h]);if(v!==0)return v}return Ve(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){let d=Ve(Ye(o.latitude),Ye(c.latitude));return d!==0?d:Ve(Ye(o.longitude),Ye(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return DC(n.arrayValue,e.arrayValue);case 10:return function(o,c){var d,p,h,v;let b=o.fields||{},T=c.fields||{},O=(d=b.value)===null||d===void 0?void 0:d.arrayValue,j=(p=T.value)===null||p===void 0?void 0:p.arrayValue,U=Ve(((h=O?.values)===null||h===void 0?void 0:h.length)||0,((v=j?.values)===null||v===void 0?void 0:v.length)||0);return U!==0?U:DC(O,j)}(n.mapValue,e.mapValue);case 11:return function(o,c){if(o===yu.mapValue&&c===yu.mapValue)return 0;if(o===yu.mapValue)return 1;if(c===yu.mapValue)return-1;let d=o.fields||{},p=Object.keys(d),h=c.fields||{},v=Object.keys(h);p.sort(),v.sort();for(let b=0;b<p.length&&b<v.length;++b){let T=Ve(p[b],v[b]);if(T!==0)return T;let O=xo(d[p[b]],h[v[b]]);if(O!==0)return O}return Ve(p.length,v.length)}(n.mapValue,e.mapValue);default:throw xe()}}function RC(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);let t=fi(n),i=fi(e),r=Ve(t.seconds,i.seconds);return r!==0?r:Ve(t.nanos,i.nanos)}function DC(n,e){let t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){let o=xo(t[r],i[r]);if(o)return o}return Ve(t.length,i.length)}function Io(n){return Zf(n)}function Zf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let i=fi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(let o of t.values||[])r?r=!1:i+=",",i+=Zf(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){let i=Object.keys(t.fields||{}).sort(),r="{",o=!0;for(let c of i)o?o=!1:r+=",",r+=`${c}:${Zf(t.fields[c])}`;return r+"}"}(n.mapValue):xe()}function wu(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=sd(n);return e?16+wu(e):16;case 5:return 2*n.stringValue.length;case 6:return gi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,o)=>r+wu(o),0)}(n.arrayValue);case 10:case 11:return function(i){let r=0;return Hi(i.fields,(o,c)=>{r+=o.length+wu(c)}),r}(n.mapValue);default:throw xe()}}function e0(n){return!!n&&"integerValue"in n}function Ig(n){return!!n&&"arrayValue"in n}function kC(n){return!!n&&"nullValue"in n}function MC(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Tu(n){return!!n&&"mapValue"in n}function lw(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function xa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Hi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=xa(i)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var on=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Tu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=sn.emptyPath(),i={},r=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){let p=this.getFieldsMap(t);this.applyChanges(p,i,r),i={},r=[],t=d.popLast()}c?i[d.lastSegment()]=xa(c):r.push(d.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,i,r)}delete(e){let t=this.field(e.popLast());Tu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Tu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Hi(t,(r,o)=>e[r]=o);for(let r of i)delete e[r]}clone(){return new n(xa(this.value))}};function uw(n){let e=[];return Hi(n.fields,(t,i)=>{let r=new sn([t]);if(Tu(i)){let o=uw(i.mapValue).fields;if(o.length===0)e.push(r);else for(let c of o)e.push(r.child(c))}else e.push(r)}),new yn(e)}var An=class n{constructor(e,t,i,r,o,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=o,this.data=c,this.documentState=d}static newInvalidDocument(e){return new n(e,0,Ae.min(),Ae.min(),Ae.min(),on.empty(),0)}static newFoundDocument(e,t,i,r){return new n(e,1,t,Ae.min(),i,r,0)}static newNoDocument(e,t){return new n(e,2,t,Ae.min(),Ae.min(),on.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,Ae.min(),Ae.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var So=class{constructor(e,t){this.position=e,this.inclusive=t}};function OC(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){let o=e[r],c=n.position[r];if(o.field.isKeyField()?i=Te.comparator(Te.fromName(c.referenceValue),t.key):i=xo(c,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function NC(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gn(n.position[t],e.position[t]))return!1;return!0}var Ao=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function aM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ku=class{},mt=class n extends ku{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new n0(e,t,i):t==="array-contains"?new o0(e,i):t==="in"?new s0(e,i):t==="not-in"?new a0(e,i):t==="array-contains-any"?new l0(e,i):new n(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new i0(e,i):new r0(e,i)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xo(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Hn=class n extends ku{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return dw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function dw(n){return n.op==="and"}function pw(n){return lM(n)&&dw(n)}function lM(n){for(let e of n.filters)if(e instanceof Hn)return!1;return!0}function t0(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Io(n.value);if(pw(n))return n.filters.map(e=>t0(e)).join(",");{let e=n.filters.map(t=>t0(t)).join(",");return`${n.op}(${e})`}}function mw(n,e){return n instanceof mt?function(i,r){return r instanceof mt&&i.op===r.op&&i.field.isEqual(r.field)&&Gn(i.value,r.value)}(n,e):n instanceof Hn?function(i,r){return r instanceof Hn&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((o,c,d)=>o&&mw(c,r.filters[d]),!0):!1}(n,e):void xe()}function hw(n){return n instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`}(n):n instanceof Hn?function(t){return t.op.toString()+" {"+t.getFilters().map(hw).join(" ,")+"}"}(n):"Filter"}var n0=class extends mt{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){let t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}},i0=class extends mt{constructor(e,t){super(e,"in",t),this.keys=fw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},r0=class extends mt{constructor(e,t){super(e,"not-in",t),this.keys=fw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function fw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Te.fromName(i.referenceValue))}var o0=class extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Ig(t)&&Da(t.arrayValue,this.value)}},s0=class extends mt{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Da(this.value.arrayValue,t)}},a0=class extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Da(this.value.arrayValue,t)}},l0=class extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Ig(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Da(this.value.arrayValue,i))}};var c0=class{constructor(e,t=null,i=[],r=[],o=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=c,this.endAt=d,this.ue=null}};function VC(n,e=null,t=[],i=[],r=null,o=null,c=null){return new c0(n,e,t,i,r,o,c)}function Sg(n){let e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>t0(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),od(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Io(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Io(i)).join(",")),e.ue=t}return e.ue}function Ag(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!NC(n.startAt,e.startAt)&&NC(n.endAt,e.endAt)}function u0(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Po=class{constructor(e,t=null,i=[],r=[],o=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function cM(n,e,t,i,r,o,c,d){return new Po(n,e,t,i,r,o,c,d)}function Pg(n){return new Po(n)}function FC(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uM(n){return n.collectionGroup!==null}function Ia(n){let e=Se(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ct(sn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(h=>{h.isInequality()&&(d=d.add(h.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ao(o,i))}),t.has(sn.keyField().canonicalString())||e.ce.push(new Ao(sn.keyField(),i))}return e.ce}function zn(n){let e=Se(n);return e.le||(e.le=dM(e,Ia(n))),e.le}function dM(n,e){if(n.limitType==="F")return VC(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{let o=r.dir==="desc"?"asc":"desc";return new Ao(r.field,o)});let t=n.endAt?new So(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new So(n.startAt.position,n.startAt.inclusive):null;return VC(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function d0(n,e,t){return new Po(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ad(n,e){return Ag(zn(n),zn(e))&&n.limitType===e.limitType}function gw(n){return`${Sg(zn(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>hw(r)).join(", ")}]`),od(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Io(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Io(r)).join(",")),`Target(${i})`}(zn(n))}; limitType=${n.limitType})`}function ld(n,e){return e.isFoundDocument()&&function(i,r){let o=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):Te.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,r){for(let o of Ia(i))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,r){for(let o of i.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(c,d,p){let h=OC(c,d,p);return c.inclusive?h<=0:h<0}(i.startAt,Ia(i),r)||i.endAt&&!function(c,d,p){let h=OC(c,d,p);return c.inclusive?h>=0:h>0}(i.endAt,Ia(i),r))}(n,e)}function pM(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vw(n){return(e,t)=>{let i=!1;for(let r of Ia(n)){let o=mM(r,e,t);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function mM(n,e,t){let i=n.field.isKeyField()?Te.comparator(e.key,t.key):function(o,c,d){let p=c.data.field(o),h=d.data.field(o);return p!==null&&h!==null?xo(p,h):xe()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return xe()}}var vi=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(let[r,o]of i)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,(t,i)=>{for(let[r,o]of i)e(r,o)})}isEmpty(){return aw(this.inner)}size(){return this.innerSize}};var hM=new it(Te.comparator);function _i(){return hM}var _w=new it(Te.comparator);function Ta(...n){let e=_w;for(let t of n)e=e.insert(t.key,t);return e}function bw(n){let e=_w;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function pr(){return Sa()}function yw(){return Sa()}function Sa(){return new vi(n=>n.toString(),(n,e)=>n.isEqual(e))}var fM=new it(Te.comparator),gM=new Ct(Te.comparator);function Ne(...n){let e=gM;for(let t of n)e=e.add(t);return e}var vM=new Ct(Ve);function _M(){return vM}function Rg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function Ew(n){return{integerValue:""+n}}function bM(n,e){return Zk(e)?Ew(e):Rg(n,e)}var Ro=class{constructor(){this._=void 0}};function yM(n,e,t){return n instanceof Do?function(r,o){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&xg(o)&&(o=sd(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(t,e):n instanceof vr?ww(n,e):n instanceof _r?Tw(n,e):function(r,o){let c=Cw(r,o),d=LC(c)+LC(r.Pe);return e0(c)&&e0(r.Pe)?Ew(d):Rg(r.serializer,d)}(n,e)}function EM(n,e,t){return n instanceof vr?ww(n,e):n instanceof _r?Tw(n,e):t}function Cw(n,e){return n instanceof ko?function(i){return e0(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}var Do=class extends Ro{},vr=class extends Ro{constructor(e){super(),this.elements=e}};function ww(n,e){let t=xw(e);for(let i of n.elements)t.some(r=>Gn(r,i))||t.push(i);return{arrayValue:{values:t}}}var _r=class extends Ro{constructor(e){super(),this.elements=e}};function Tw(n,e){let t=xw(e);for(let i of n.elements)t=t.filter(r=>!Gn(r,i));return{arrayValue:{values:t}}}var ko=class extends Ro{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function LC(n){return Ye(n.integerValue||n.doubleValue)}function xw(n){return Ig(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function CM(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof vr&&r instanceof vr||i instanceof _r&&r instanceof _r?To(i.elements,r.elements,Gn):i instanceof ko&&r instanceof ko?Gn(i.Pe,r.Pe):i instanceof Do&&r instanceof Do}(n.transform,e.transform)}var p0=class{constructor(e,t){this.version=e,this.transformResults=t}},mi=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function xu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Mo=class{};function Iw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ka(n.key,mi.none()):new br(n.key,n.data,mi.none());{let t=n.data,i=on.empty(),r=new Ct(sn.comparator);for(let o of e.fields)if(!r.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?i.delete(o):i.set(o,c),r=r.add(o)}return new Wn(n.key,i,new yn(r.toArray()),mi.none())}}function wM(n,e,t){n instanceof br?function(r,o,c){let d=r.value.clone(),p=jC(r.fieldTransforms,o,c.transformResults);d.setAll(p),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Wn?function(r,o,c){if(!xu(r.precondition,o))return void o.convertToUnknownDocument(c.version);let d=jC(r.fieldTransforms,o,c.transformResults),p=o.data;p.setAll(Sw(r)),p.setAll(d),o.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(r,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Aa(n,e,t,i){return n instanceof br?function(o,c,d,p){if(!xu(o.precondition,c))return d;let h=o.value.clone(),v=BC(o.fieldTransforms,p,c);return h.setAll(v),c.convertToFoundDocument(c.version,h).setHasLocalMutations(),null}(n,e,t,i):n instanceof Wn?function(o,c,d,p){if(!xu(o.precondition,c))return d;let h=BC(o.fieldTransforms,p,c),v=c.data;return v.setAll(Sw(o)),v.setAll(h),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(b=>b.field))}(n,e,t,i):function(o,c,d){return xu(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function TM(n,e){let t=null;for(let i of n.fieldTransforms){let r=e.data.field(i.field),o=Cw(i.transform,r||null);o!=null&&(t===null&&(t=on.empty()),t.set(i.field,o))}return t||null}function UC(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&To(i,r,(o,c)=>CM(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var br=class extends Mo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},Wn=class extends Mo{constructor(e,t,i,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function Sw(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let i=n.data.field(t);e.set(t,i)}}),e}function jC(n,e,t){let i=new Map;qe(n.length===t.length);for(let r=0;r<t.length;r++){let o=n[r],c=o.transform,d=e.data.field(o.field);i.set(o.field,EM(c,d,t[r]))}return i}function BC(n,e,t){let i=new Map;for(let r of n){let o=r.transform,c=t.data.field(r.field);i.set(r.field,yM(o,c,e))}return i}var ka=class extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},m0=class extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var h0=class{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){let i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let o=this.mutations[r];o.key.isEqual(e.key)&&wM(o,e,i[r])}}applyToLocalView(e,t){for(let i of this.baseMutations)i.key.isEqual(e.key)&&(t=Aa(i,e,t,this.localWriteTime));for(let i of this.mutations)i.key.isEqual(e.key)&&(t=Aa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let i=yw();return this.mutations.forEach(r=>{let o=e.get(r.key),c=o.overlayedDocument,d=this.applyToLocalView(c,o.mutatedFields);d=t.has(r.key)?null:d;let p=Iw(c,d);p!==null&&i.set(r.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(t,i)=>UC(t,i))&&To(this.baseMutations,e.baseMutations,(t,i)=>UC(t,i))}},f0=class n{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){qe(e.mutations.length===i.length);let r=function(){return fM}(),o=e.mutations;for(let c=0;c<o.length;c++)r=r.insert(o[c].key,i[c].version);return new n(e,t,i,r)}};var g0=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var v0=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ct,Fe;function xM(n){switch(n){default:return xe();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function Aw(n){if(n===void 0)return hi("GRPC error has no .code"),Z.UNKNOWN;switch(n){case ct.OK:return Z.OK;case ct.CANCELLED:return Z.CANCELLED;case ct.UNKNOWN:return Z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return Z.INTERNAL;case ct.UNAVAILABLE:return Z.UNAVAILABLE;case ct.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ct.NOT_FOUND:return Z.NOT_FOUND;case ct.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ct.ABORTED:return Z.ABORTED;case ct.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ct.DATA_LOSS:return Z.DATA_LOSS;default:return xe()}}(Fe=ct||(ct={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";var qC=null;function IM(){return new TextEncoder}var SM=new ui([4294967295,4294967295],0);function zC(n){let e=IM().encode(n),t=new Mf;return t.update(e),new Uint8Array(t.digest())}function $C(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ui([t,i],0),new ui([r,o],0)]}var _0=class n{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new mr(`Invalid padding: ${t}`);if(i<0)throw new mr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new mr(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ui.fromNumber(this.Te)}de(e,t,i){let r=e.add(t.multiply(ui.fromNumber(i)));return r.compare(SM)===1&&(r=new ui([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=zC(e),[i,r]=$C(t);for(let o=0;o<this.hashCount;o++){let c=this.de(i,r,o);if(!this.Ee(c))return!1}return!0}static create(e,t,i){let r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new n(o,r,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;let t=zC(e),[i,r]=$C(t);for(let o=0;o<this.hashCount;o++){let c=this.de(i,r,o);this.Ae(c)}}Ae(e){let t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}},mr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Mu=class n{constructor(e,t,i,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){let r=new Map;return r.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new n(Ae.min(),r,new it(Ve),_i(),Ne())}},Ma=class n{constructor(e,t,i,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new n(i,t,Ne(),Ne(),Ne())}};var Eo=class{constructor(e,t,i,r){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=r}},Ou=class{constructor(e,t){this.targetId=e,this.me=t}},Nu=class{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}},Vu=class{constructor(){this.fe=0,this.ge=GC(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:xe()}}),new Ma(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=GC()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},b0=class{constructor(e){this.Be=e,this.Le=new Map,this.ke=_i(),this.qe=Eu(),this.Qe=Eu(),this.Ke=new it(Ve)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:xe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,i=e.me.count,r=this.Ye(t);if(r){let o=r.target;if(u0(o))if(i===0){let c=new Te(o.path);this.We(t,c,An.newNoDocument(c,Ae.min()))}else qe(i===1);else{let c=this.Ze(t);if(c!==i){let d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);let h=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}qC?.tt(function(v,b,T,O,j){var U,F,le,fe,ae,J;let be={localCacheCount:v,existenceFilterCount:b.count,databaseId:T.database,projectId:T.projectId},he=b.unchangedNames;return he&&(be.bloomFilter={applied:j===0,hashCount:(U=he?.hashCount)!==null&&U!==void 0?U:0,bitmapLength:(fe=(le=(F=he?.bits)===null||F===void 0?void 0:F.bitmap)===null||le===void 0?void 0:le.length)!==null&&fe!==void 0?fe:0,padding:(J=(ae=he?.bits)===null||ae===void 0?void 0:ae.padding)!==null&&J!==void 0?J:0,mightContain:R=>{var E;return(E=O?.mightContain(R))!==null&&E!==void 0&&E}}),be}(c,e.me,this.Be.nt(),d,p))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=t,c,d;try{c=gi(i).toUint8Array()}catch(p){if(p instanceof Ru)return wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new _0(c,r,o)}catch(p){return wo(p instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){let i=this.Be.getRemoteKeysForTarget(t),r=0;return i.forEach(o=>{let c=this.Be.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.We(t,o,null),r++)}),r}it(e){let t=new Map;this.Le.forEach((o,c)=>{let d=this.Ye(c);if(d){if(o.current&&u0(d.target)){let p=new Te(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,An.newNoDocument(p,e))}o.be&&(t.set(c,o.ve()),o.Ce())}});let i=Ne();this.Qe.forEach((o,c)=>{let d=!0;c.forEachWhile(p=>{let h=this.Ye(p);return!h||h.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(e));let r=new Mu(e,t,this.Ke,this.ke,i);return this.ke=_i(),this.qe=Eu(),this.Qe=Eu(),this.Ke=new it(Ve),r}Ue(e,t){if(!this.je(e))return;let i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;let r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Vu,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Ct(Ve),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ct(Ve),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Vu),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}};function Eu(){return new it(Te.comparator)}function GC(){return new it(Te.comparator)}var AM={asc:"ASCENDING",desc:"DESCENDING"},PM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RM={and:"AND",or:"OR"},y0=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function E0(n,e){return n.useProto3Json||od(e)?e:{value:e}}function Fu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DM(n,e){return Fu(n,e.toTimestamp())}function $n(n){return qe(!!n),Ae.fromTimestamp(function(t){let i=fi(t);return new xt(i.seconds,i.nanos)}(n))}function Dg(n,e){return C0(n,e).canonicalString()}function C0(n,e){let t=function(r){return new nt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Rw(n){let e=nt.fromString(n);return qe(Nw(e)),e}function w0(n,e){return Dg(n.databaseId,e.path)}function Uf(n,e){let t=Rw(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(kw(t))}function Dw(n,e){return Dg(n.databaseId,e)}function kM(n){let e=Rw(n);return e.length===4?nt.emptyPath():kw(e)}function T0(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kw(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function HC(n,e,t){return{name:w0(n,e),fields:t.value.mapValue.fields}}function MM(n,e){let t;if("targetChange"in e){e.targetChange;let i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:xe()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(h,v){return h.useProto3Json?(qe(v===void 0||typeof v=="string"),Lt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Lt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(h){let v=h.code===void 0?Z.UNKNOWN:Aw(h.code);return new _e(v,h.message||"")}(c);t=new Nu(i,r,o,d||null)}else if("documentChange"in e){e.documentChange;let i=e.documentChange;i.document,i.document.name,i.document.updateTime;let r=Uf(n,i.document.name),o=$n(i.document.updateTime),c=i.document.createTime?$n(i.document.createTime):Ae.min(),d=new on({mapValue:{fields:i.document.fields}}),p=An.newFoundDocument(r,o,c,d),h=i.targetIds||[],v=i.removedTargetIds||[];t=new Eo(h,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;let i=e.documentDelete;i.document;let r=Uf(n,i.document),o=i.readTime?$n(i.readTime):Ae.min(),c=An.newNoDocument(r,o),d=i.removedTargetIds||[];t=new Eo([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;let i=e.documentRemove;i.document;let r=Uf(n,i.document),o=i.removedTargetIds||[];t=new Eo([],o,r,null)}else{if(!("filter"in e))return xe();{e.filter;let i=e.filter;i.targetId;let{count:r=0,unchangedNames:o}=i,c=new v0(r,o),d=i.targetId;t=new Ou(d,c)}}return t}function OM(n,e){let t;if(e instanceof br)t={update:HC(n,e.key,e.value)};else if(e instanceof ka)t={delete:w0(n,e.key)};else if(e instanceof Wn)t={update:HC(n,e.key,e.data),updateMask:zM(e.fieldMask)};else{if(!(e instanceof m0))return xe();t={verify:w0(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,c){let d=c.transform;if(d instanceof Do)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof vr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _r)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ko)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw xe()}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:DM(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:xe()}(n,e.precondition)),t}function NM(n,e){return n&&n.length>0?(qe(e!==void 0),n.map(t=>function(r,o){let c=r.updateTime?$n(r.updateTime):$n(o);return c.isEqual(Ae.min())&&(c=$n(o)),new p0(c,r.transformResults||[])}(t,e))):[]}function VM(n,e){return{documents:[Dw(n,e.path)]}}function FM(n,e){let t={structuredQuery:{}},i=e.path,r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Dw(n,r);let o=function(h){if(h.length!==0)return Ow(Hn.create(h,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let c=function(h){if(h.length!==0)return h.map(v=>function(T){return{field:_o(T.field),direction:jM(T.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);let d=E0(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:t,parent:r}}function LM(n){let e=kM(n.parent),t=n.structuredQuery,i=t.from?t.from.length:0,r=null;if(i>0){qe(i===1);let v=t.from[0];v.allDescendants?r=v.collectionId:e=e.child(v.collectionId)}let o=[];t.where&&(o=function(b){let T=Mw(b);return T instanceof Hn&&pw(T)?T.getFilters():[T]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(T=>function(j){return new Ao(bo(j.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(b){let T;return T=typeof b=="object"?b.value:b,od(T)?null:T}(t.limit));let p=null;t.startAt&&(p=function(b){let T=!!b.before,O=b.values||[];return new So(O,T)}(t.startAt));let h=null;return t.endAt&&(h=function(b){let T=!b.before,O=b.values||[];return new So(O,T)}(t.endAt)),cM(e,r,c,o,d,"F",p,h)}function UM(n,e){let t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Mw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let i=bo(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":let r=bo(t.unaryFilter.field);return mt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=bo(t.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let c=bo(t.unaryFilter.field);return mt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(n):n.fieldFilter!==void 0?function(t){return mt.create(bo(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Hn.create(t.compositeFilter.filters.map(i=>Mw(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return xe()}}(t.compositeFilter.op))}(n):xe()}function jM(n){return AM[n]}function BM(n){return PM[n]}function qM(n){return RM[n]}function _o(n){return{fieldPath:n.canonicalString()}}function bo(n){return sn.fromServerFormat(n.fieldPath)}function Ow(n){return n instanceof mt?function(t){if(t.op==="=="){if(MC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(kC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(MC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(kC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:BM(t.op),value:t.value}}}(n):n instanceof Hn?function(t){let i=t.getFilters().map(r=>Ow(r));return i.length===1?i[0]:{compositeFilter:{op:qM(t.op),filters:i}}}(n):xe()}function zM(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Oa=class n{constructor(e,t,i,r,o=Ae.min(),c=Ae.min(),d=Lt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var x0=class{constructor(e){this.ht=e}};function $M(n){let e=LM({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?d0(e,e.limit,"L"):e}var Lu=class{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(Ye(e.integerValue));else if("doubleValue"in e){let i=Ye(e.doubleValue);isNaN(i)?this.Rt(t,13):(this.Rt(t,15),Pa(i)?t.Vt(0):t.Vt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Rt(t,20),typeof i=="string"&&(i=fi(i)),t.ft(`${i.seconds||""}`),t.Vt(i.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(gi(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Rt(t,45),t.Vt(i.latitude||0),t.Vt(i.longitude||0)}else"mapValue"in e?cw(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):lw(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):xe()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let i=e.fields||{};this.Rt(t,55);for(let r of Object.keys(i))this.gt(r,t),this.Et(i[r],t)}bt(e,t){var i,r;let o=e.fields||{};this.Rt(t,53);let c="value",d=((r=(i=o[c].arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.length)||0;this.Rt(t,15),t.Vt(Ye(d)),this.gt(c,t),this.Et(o[c],t)}vt(e,t){let i=e.values||[];this.Rt(t,50);for(let r of i)this.Et(r,t)}St(e,t){this.Rt(t,37),Te.fromName(e).path.forEach(i=>{this.Rt(t,60),this.Ct(i,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};Lu.Ft=new Lu;var I0=class{constructor(){this.ln=new S0}addToCollectionParentIndex(e,t){return this.ln.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(gr.min())}updateCollectionGroup(e,t,i){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}},S0=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Ct(nt.comparator),o=!r.has(i);return this.index[t]=r.add(i),o}has(e){let t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ct(nt.comparator)).toArray()}};var iB=new Uint8Array(0);var WC={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bn=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}};bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(41943040,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);var Na=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function KC([n,e],[t,i]){let r=Ve(n,t);return r===0?Ve(e,i):r}var A0=class{constructor(e){this.Gn=e,this.buffer=new Ct(KC),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let i=this.buffer.last();KC(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}},P0=class{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){de("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>L(this,null,function*(){this.Jn=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Uo(t)?de("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):yield Lo(t)}yield this.Yn(3e5)}))}},R0=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return X.resolve(Tg.oe);let i=new A0(t);return this.Zn.forEachTarget(e,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(WC)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),WC):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,r,o,c,d,p,h,v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),r=this.params.maximumSequenceNumbersToCollect):r=b,c=Date.now(),this.nthSequenceNumber(e,r))).next(b=>(i=b,d=Date.now(),this.removeTargets(e,i,t))).next(b=>(o=b,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(h=Date.now(),go()<=Me.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${r} in `+(d-c)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(h-p)+`ms
Total Duration: ${h-v}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:b})))}};function GM(n,e){return new R0(n,e)}var D0=class{constructor(){this.changes=new vi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,An.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let i=this.changes.get(t);return i!==void 0?X.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var k0=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var M0=class{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Aa(i.mutation,r,yn.empty(),xt.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){let r=pr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(o=>{let c=Ta();return o.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){let i=pr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){let r=[];return i.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,r){let o=_i(),c=Sa(),d=function(){return Sa()}();return t.forEach((p,h)=>{let v=i.get(h.key);r.has(h.key)&&(v===void 0||v.mutation instanceof Wn)?o=o.insert(h.key,h):v!==void 0?(c.set(h.key,v.mutation.getFieldMask()),Aa(v.mutation,h,v.mutation.getFieldMask(),xt.now())):c.set(h.key,yn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((h,v)=>c.set(h,v)),t.forEach((h,v)=>{var b;return d.set(h,new k0(v,(b=c.get(h))!==null&&b!==void 0?b:null))}),d))}recalculateAndSaveOverlays(e,t){let i=Sa(),r=new it((c,d)=>c-d),o=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(let d of c)d.keys().forEach(p=>{let h=t.get(p);if(h===null)return;let v=i.get(p)||yn.empty();v=d.applyToLocalView(h,v),i.set(p,v);let b=(r.get(d.batchId)||Ne()).add(p);r=r.insert(d.batchId,b)})}).next(()=>{let c=[],d=r.getReverseIterator();for(;d.hasNext();){let p=d.getNext(),h=p.key,v=p.value,b=yw();v.forEach(T=>{if(!o.has(T)){let O=Iw(t.get(T),i.get(T));O!==null&&b.set(T,O),o=o.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,h,b))}return X.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uM(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(o=>{let c=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-o.size):X.resolve(pr()),d=-1,p=o;return c.next(h=>X.forEach(h,(v,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),o.get(v)?X.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,p,h,Ne())).next(v=>({batchId:d,changes:bw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(i=>{let r=Ta();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){let o=t.collectionGroup,c=Ta();return this.indexManager.getCollectionParents(e,o).next(d=>X.forEach(d,p=>{let h=function(b,T){return new Po(T,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,r).next(v=>{v.forEach((b,T)=>{c=c.insert(b,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,r))).next(c=>{o.forEach((p,h)=>{let v=h.getKey();c.get(v)===null&&(c=c.insert(v,An.newInvalidDocument(v)))});let d=Ta();return c.forEach((p,h)=>{let v=o.get(p);v!==void 0&&Aa(v.mutation,h,yn.empty(),xt.now()),ld(t,h)&&(d=d.insert(p,h))}),d})}};var O0=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return X.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:$n(r.createTime)}}(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:$M(r.bundledQuery),readTime:$n(r.readTime)}}(t)),X.resolve()}};var N0=class{constructor(){this.overlays=new it(Te.comparator),this.dr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){let i=pr();return X.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,o)=>{this.Tt(e,t,o)}),X.resolve()}removeOverlaysForBatchId(e,t,i){let r=this.dr.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(i)),X.resolve()}getOverlaysForCollection(e,t,i){let r=pr(),o=t.length+1,c=new Te(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){let p=d.getNext().value,h=p.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===o&&p.largestBatchId>i&&r.set(p.getKey(),p)}return X.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let o=new it((h,v)=>h-v),c=this.overlays.getIterator();for(;c.hasNext();){let h=c.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let v=o.get(h.largestBatchId);v===null&&(v=pr(),o=o.insert(h.largestBatchId,v)),v.set(h.getKey(),h)}}let d=pr(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((h,v)=>d.set(h,v)),!(d.size()>=r)););return X.resolve(d)}Tt(e,t,i){let r=this.overlays.get(i.key);if(r!==null){let c=this.dr.get(r.largestBatchId).delete(i.key);this.dr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new g0(t,i));let o=this.dr.get(t);o===void 0&&(o=Ne(),this.dr.set(t,o)),this.dr.set(t,o.add(i.key))}};var V0=class{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}};var Va=class{constructor(){this.Er=new Ct(ut.Ar),this.Rr=new Ct(ut.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let i=new ut(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new ut(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){let t=new Te(new nt([])),i=new ut(t,e),r=new ut(t,e+1),o=[];return this.Rr.forEachInRange([i,r],c=>{this.gr(c),o.push(c.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new Te(new nt([])),i=new ut(t,e),r=new ut(t,e+1),o=Ne();return this.Rr.forEachInRange([i,r],c=>{o=o.add(c.key)}),o}containsKey(e){let t=new ut(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}},ut=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Te.comparator(e.key,t.key)||Ve(e.br,t.br)}static Vr(e,t){return Ve(e.br,t.br)||Te.comparator(e.key,t.key)}};var F0=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Ct(ut.Ar)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){let o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let c=new h0(o,t,i,r);this.mutationQueue.push(c);for(let d of r)this.vr=this.vr.add(new ut(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(c)}lookupMutationBatch(e,t){return X.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let i=t+1,r=this.Fr(i),o=r<0?0:r;return X.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let i=new ut(t,0),r=new ut(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([i,r],c=>{let d=this.Cr(c.br);o.push(d)}),X.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ct(Ve);return t.forEach(r=>{let o=new ut(r,0),c=new ut(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,c],d=>{i=i.add(d.br)})}),X.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){let i=t.path,r=i.length+1,o=i;Te.isDocumentKey(o)||(o=o.child(""));let c=new ut(new Te(o),0),d=new Ct(Ve);return this.vr.forEachWhile(p=>{let h=p.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(d=d.add(p.br)),!0)},c),X.resolve(this.Mr(d))}Mr(e){let t=[];return e.forEach(i=>{let r=this.Cr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){qe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return X.forEach(t.mutations,r=>{let o=new ut(r.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){let i=new ut(t,0),r=this.vr.firstAfterOrEqual(i);return X.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var L0=class{constructor(e){this.Nr=e,this.docs=function(){return new it(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let i=t.key,r=this.docs.get(i),o=r?r.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let i=this.docs.get(t);return X.resolve(i?i.document.mutableCopy():An.newInvalidDocument(t))}getEntries(e,t){let i=_i();return t.forEach(r=>{let o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():An.newInvalidDocument(r))}),X.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let o=_i(),c=t.path,d=new Te(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){let{key:h,value:{document:v}}=p.getNext();if(!c.isPrefixOf(h.path))break;h.path.length>c.length+1||Jk(Qk(v),i)<=0||(r.has(v.key)||ld(t,v))&&(o=o.insert(v.key,v.mutableCopy()))}return X.resolve(o)}getAllFromCollectionGroup(e,t,i,r){xe()}Br(e,t){return X.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new U0(this)}getSize(e){return X.resolve(this.size)}},U0=class extends D0{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(i)}),X.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var j0=class{constructor(e){this.persistence=e,this.Lr=new vi(t=>Sg(t),Ag),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Va,this.targetCount=0,this.Qr=Na.qn()}forEachTarget(e,t){return this.Lr.forEach((i,r)=>t(r)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),X.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new Na(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Un(t),X.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,i){let r=0,o=[];return this.Lr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(c),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),r++)}),X.waitFor(o).next(()=>r)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){let i=this.Lr.get(t)||null;return X.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),X.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);let r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(c=>{o.push(r.markPotentiallyOrphaned(e,c))}),X.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),X.resolve()}getMatchingKeysForTargetId(e,t){let i=this.qr.Sr(t);return X.resolve(i)}containsKey(e,t){return X.resolve(this.qr.containsKey(t))}};var Uu=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Tg(0),this.Ur=!1,this.Ur=!0,this.Wr=new V0,this.referenceDelegate=e(this),this.Gr=new j0(this),this.indexManager=new I0,this.remoteDocumentCache=function(r){return new L0(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new x0(t),this.jr=new O0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new F0(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){de("MemoryPersistence","Starting transaction:",e);let r=new B0(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(o=>this.referenceDelegate.Jr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Yr(e,t){return X.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}},B0=class extends Xf{constructor(e){super(),this.currentSequenceNumber=e}},q0=class n{constructor(e){this.persistence=e,this.Zr=new Va,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw xe()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),X.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),X.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));let i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.ti.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ti,i=>{let r=Te.fromPath(i);return this.ni(e,r).next(o=>{o||t.removeEntry(r,Ae.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return X.or([()=>X.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},ju=class n{constructor(e,t){this.persistence=e,this.ri=new vi(i=>eM(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=GM(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(r=>i+r))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return X.forEach(this.ri,(i,r)=>this.ir(e,i,r).next(o=>o?X.resolve():t(r)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0,r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.Br(e,c=>this.ir(e,c,t).next(d=>{d||(i++,o.removeEntry(c,Ae.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){let i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),X.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),X.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wu(e.data.value)),t}ir(e,t,i){return X.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let r=this.ri.get(t);return X.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var z0=class n{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=r}static zi(e,t){let i=Ne(),r=Ne();for(let o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new n(e,t.fromCache,i,r)}};var $0=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var G0=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return R1()?8:Yk(rn())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,r){let o={result:null};return this.Xi(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.es(e,t,r,i).next(c=>{o.result=c})}).next(()=>{if(o.result)return;let c=new $0;return this.ts(e,t,c).next(d=>{if(o.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>o.result)}ns(e,t,i,r){return i.documentReadCount<this.Ji?(go()<=Me.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),X.resolve()):(go()<=Me.DEBUG&&de("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(go()<=Me.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(t))):X.resolve())}Xi(e,t){if(FC(t))return X.resolve(null);let i=zn(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=d0(t,null,"F"),i=zn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{let c=Ne(...o);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{let h=this.rs(t,d);return this.ss(t,h,c,p.readTime)?this.Xi(e,d0(t,null,"F")):this.os(e,h,t,p)}))})))}es(e,t,i,r){return FC(t)||r.isEqual(Ae.min())?X.resolve(null):this.Zi.getDocuments(e,i).next(o=>{let c=this.rs(t,o);return this.ss(t,c,i,r)?X.resolve(null):(go()<=Me.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(t)),this.os(e,c,t,Kk(r,-1)).next(d=>d))})}rs(e,t){let i=new Ct(vw(e));return t.forEach((r,o)=>{ld(e,o)&&(i=i.add(o))}),i}ss(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ts(e,t,i){return go()<=Me.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Zi.getDocumentsMatchingQuery(e,t,gr.min(),i)}os(e,t,i,r){return this.Zi.getDocumentsMatchingQuery(e,i,r).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}};var H0=class{constructor(e,t,i,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new it(Ve),this.cs=new vi(o=>Sg(o),Ag),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function HM(n,e,t,i){return new H0(n,e,t,i)}function Vw(n,e){return L(this,null,function*(){let t=Se(n);return yield t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{let c=[],d=[],p=Ne();for(let h of r){c.push(h.batchId);for(let v of h.mutations)p=p.add(v.key)}for(let h of o){d.push(h.batchId);for(let v of h.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(h=>({Ts:h,removedBatchIds:c,addedBatchIds:d}))})})})}function WM(n,e){let t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{let r=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,h,v){let b=h.batch,T=b.keys(),O=X.resolve();return T.forEach(j=>{O=O.next(()=>v.getEntry(p,j)).next(U=>{let F=h.docVersions.get(j);qe(F!==null),U.version.compareTo(F)<0&&(b.applyToRemoteDocument(U,h),U.isValidDocument()&&(U.setReadTime(h.commitVersion),v.addEntry(U)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Ne();for(let h=0;h<d.mutationResults.length;++h)d.mutationResults[h].transformResults.length>0&&(p=p.add(d.batch.mutations[h].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function Fw(n){let e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function KM(n,e){let t=Se(n),i=e.snapshotVersion,r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let c=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;let d=[];e.targetChanges.forEach((v,b)=>{let T=r.get(b);if(!T)return;d.push(t.Gr.removeMatchingKeys(o,v.removedDocuments,b).next(()=>t.Gr.addMatchingKeys(o,v.addedDocuments,b)));let O=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(b)!==null?O=O.withResumeToken(Lt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,i)),r=r.insert(b,O),function(U,F,le){return U.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0}(T,O,v)&&d.push(t.Gr.updateTargetData(o,O))});let p=_i(),h=Ne();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,v))}),d.push(QM(o,c,e.documentUpdates).next(v=>{p=v.Is,h=v.ds})),!i.isEqual(Ae.min())){let v=t.Gr.getLastRemoteSnapshotVersion(o).next(b=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,i));d.push(v)}return X.waitFor(d).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,h)).next(()=>p)}).then(o=>(t.us=r,o))}function QM(n,e,t){let i=Ne(),r=Ne();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let c=_i();return t.forEach((d,p)=>{let h=o.get(d);p.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!h.isValidDocument()||p.version.compareTo(h.version)>0||p.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):de("LocalStore","Ignoring outdated watch update for ",d,". Current version:",h.version," Watch version:",p.version)}),{Is:c,ds:r}})}function JM(n,e){let t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function XM(n,e){let t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Gr.getTargetData(i,e).next(o=>o?(r=o,X.resolve(r)):t.Gr.allocateTargetId(i).next(c=>(r=new Oa(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{let r=t.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}function W0(n,e,t){return L(this,null,function*(){let i=Se(n),r=i.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||(yield i.persistence.runTransaction("Release target",o,c=>i.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!Uo(c))throw c;de("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(r.target)})}function QC(n,e,t){let i=Se(n),r=Ae.min(),o=Ne();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,h,v){let b=Se(p),T=b.cs.get(v);return T!==void 0?X.resolve(b.us.get(T)):b.Gr.getTargetData(h,v)}(i,c,zn(e)).next(d=>{if(d)return r=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{o=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?r:Ae.min(),t?o:Ne())).next(d=>(YM(i,pM(e),d),{documents:d,Es:o})))}function YM(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach((r,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.ls.set(e,i)}var Bu=class{constructor(){this.activeTargetIds=_M()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var K0=class{constructor(){this._o=new Bu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Bu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Q0=class{uo(e){}shutdown(){}};var qu=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){de("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){de("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Cu=null;function jf(){return Cu===null?Cu=function(){return 268435456+Math.round(2147483648*Math.random())}():Cu++,"0x"+Cu.toString(16)}var ZM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var J0=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Ft="WebChannelConnection",X0=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${r}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Oo(t,i,r,o,c){let d=jf(),p=this.No(t,i.toUriEncodedString());de("RestConnection",`Sending RPC '${t}' ${d}:`,p,r);let h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(h,o,c),this.Lo(t,p,h,r).then(v=>(de("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw wo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",r),v})}ko(t,i,r,o,c,d){return this.Oo(t,i,r,o,c)}Bo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,c)=>t[c]=o),r&&r.headers.forEach((o,c)=>t[c]=o)}No(t,i){let r=ZM[t];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,r){let o=jf();return new Promise((c,d)=>{let p=new Of;p.setWithCredentials(!0),p.listenOnce(Nf.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case wa.NO_ERROR:let v=p.getResponseJson();de(Ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),c(v);break;case wa.TIMEOUT:de(Ft,`RPC '${e}' ${o} timed out`),d(new _e(Z.DEADLINE_EXCEEDED,"Request time out"));break;case wa.HTTP_ERROR:let b=p.getStatus();if(de(Ft,`RPC '${e}' ${o} failed with status:`,b,"response text:",p.getResponseText()),b>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);let O=T?.error;if(O&&O.status&&O.message){let j=function(F){let le=F.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(le)>=0?le:Z.UNKNOWN}(O.status);d(new _e(j,O.message))}else d(new _e(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new _e(Z.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{de(Ft,`RPC '${e}' ${o} completed.`)}});let h=JSON.stringify(r);de(Ft,`RPC '${e}' ${o} sending request:`,r),p.send(t,"POST",h,i,15)})}qo(e,t,i){let r=jf(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Lf(),d=Ff(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(p.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;let v=o.join("");de(Ft,`Creating RPC '${e}' stream ${r}: ${v}`,p);let b=c.createWebChannel(v,p),T=!1,O=!1,j=new J0({Eo:F=>{O?de(Ft,`Not sending because RPC '${e}' stream ${r} is closed:`,F):(T||(de(Ft,`Opening RPC '${e}' stream ${r} transport.`),b.open(),T=!0),de(Ft,`RPC '${e}' stream ${r} sending:`,F),b.send(F))},Ao:()=>b.close()}),U=(F,le,fe)=>{F.listen(le,ae=>{try{fe(ae)}catch(J){setTimeout(()=>{throw J},0)}})};return U(b,fo.EventType.OPEN,()=>{O||(de(Ft,`RPC '${e}' stream ${r} transport opened.`),j.So())}),U(b,fo.EventType.CLOSE,()=>{O||(O=!0,de(Ft,`RPC '${e}' stream ${r} transport closed`),j.Do())}),U(b,fo.EventType.ERROR,F=>{O||(O=!0,wo(Ft,`RPC '${e}' stream ${r} transport errored:`,F),j.Do(new _e(Z.UNAVAILABLE,"The operation could not be completed")))}),U(b,fo.EventType.MESSAGE,F=>{var le;if(!O){let fe=F.data[0];qe(!!fe);let ae=fe,J=ae?.error||((le=ae[0])===null||le===void 0?void 0:le.error);if(J){de(Ft,`RPC '${e}' stream ${r} received error:`,J);let be=J.status,he=function(x){let D=ct[x];if(D!==void 0)return Aw(D)}(be),R=J.message;he===void 0&&(he=Z.INTERNAL,R="Unknown error status: "+be+" with message "+J.message),O=!0,j.Do(new _e(he,R)),b.close()}else de(Ft,`RPC '${e}' stream ${r} received:`,fe),j.vo(fe)}}),U(d,Vf.STAT_EVENT,F=>{F.stat===bu.PROXY?de(Ft,`RPC '${e}' stream ${r} detected buffering proxy`):F.stat===bu.NOPROXY&&de(Ft,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{j.bo()},0),j}};function Bf(){return typeof document<"u"?document:null}function cd(n){return new y0(n,!0)}var zu=class{constructor(e,t,i=1e3,r=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=r,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-i);r>0&&de("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var $u=class{constructor(e,t,i,r,o,c,d,p){this.li=e,this.Yo=i,this.Zo=r,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new zu(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}stop(){return L(this,null,function*(){this.i_()&&(yield this.close(0))})}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}u_(){return L(this,null,function*(){if(this.s_())return this.close(0)})}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}close(e,t){return L(this,null,function*(){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(hi(t.toString()),hi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.po(t)})}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===t&&this.I_(i,r)},i=>{e(()=>{let r=new _e(Z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(r)})})}I_(e,t){let i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.d_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(()=>L(this,null,function*(){this.state=0,this.start()}))}d_(e){return de("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(de("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Y0=class extends $u{constructor(e,t,i,r,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,c),this.serializer=o}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=MM(this.serializer,e),i=function(o){if(!("targetChange"in o))return Ae.min();let c=o.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?$n(c.readTime):Ae.min()}(e);return this.listener.R_(t,i)}V_(e){let t={};t.database=T0(this.serializer),t.addTarget=function(o,c){let d,p=c.target;if(d=u0(p)?{documents:VM(o,p)}:{query:FM(o,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Pw(o,c.resumeToken);let h=E0(o,c.expectedCount);h!==null&&(d.expectedCount=h)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=Fu(o,c.snapshotVersion.toTimestamp());let h=E0(o,c.expectedCount);h!==null&&(d.expectedCount=h)}return d}(this.serializer,e);let i=UM(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){let t={};t.database=T0(this.serializer),t.removeTarget=e,this.c_(t)}},Z0=class extends $u{constructor(e,t,i,r,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,c),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=NM(e.writeResults,e.commitTime),i=$n(e.commitTime);return this.listener.y_(i,t)}w_(){let e={};e.database=T0(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(i=>OM(this.serializer,i))};this.c_(t)}};var eg=class extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Oo(e,C0(t,i),r,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new _e(Z.UNKNOWN,o.toString())})}ko(e,t,i,r,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,C0(t,i),r,c,d,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new _e(Z.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},tg=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(hi(t),this.C_=!1):de("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var ng=class{constructor(e,t,i,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(c=>{i.enqueueAndForget(()=>L(this,null,function*(){yr(this)&&(de("RemoteStore","Restarting streams for network reachability change."),yield function(p){return L(this,null,function*(){let h=Se(p);h.k_.add(4),yield Ba(h),h.K_.set("Unknown"),h.k_.delete(4),yield ud(h)})}(this))}))}),this.K_=new tg(i,r)}};function ud(n){return L(this,null,function*(){if(yr(n))for(let e of n.q_)yield e(!0)})}function Ba(n){return L(this,null,function*(){for(let e of n.q_)yield e(!1)})}function Lw(n,e){let t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Ng(t)?Og(t):jo(t).s_()&&Mg(t,e))}function kg(n,e){let t=Se(n),i=jo(t);t.L_.delete(e),i.s_()&&Uw(t,e),t.L_.size===0&&(i.s_()?i.a_():yr(t)&&t.K_.set("Unknown"))}function Mg(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jo(n).V_(e)}function Uw(n,e){n.U_.xe(e),jo(n).m_(e)}function Og(n){n.U_=new b0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),jo(n).start(),n.K_.F_()}function Ng(n){return yr(n)&&!jo(n).i_()&&n.L_.size>0}function yr(n){return Se(n).k_.size===0}function jw(n){n.U_=void 0}function eO(n){return L(this,null,function*(){n.K_.set("Online")})}function tO(n){return L(this,null,function*(){n.L_.forEach((e,t)=>{Mg(n,e)})})}function nO(n,e){return L(this,null,function*(){jw(n),Ng(n)?(n.K_.O_(e),Og(n)):n.K_.set("Unknown")})}function iO(n,e,t){return L(this,null,function*(){if(n.K_.set("Online"),e instanceof Nu&&e.state===2&&e.cause)try{yield function(r,o){return L(this,null,function*(){let c=o.cause;for(let d of o.targetIds)r.L_.has(d)&&(yield r.remoteSyncer.rejectListen(d,c),r.L_.delete(d),r.U_.removeTarget(d))})}(n,e)}catch(i){de("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),yield Gu(n,i)}else if(e instanceof Eo?n.U_.$e(e):e instanceof Ou?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{let i=yield Fw(n.localStore);t.compareTo(i)>=0&&(yield function(o,c){let d=o.U_.it(c);return d.targetChanges.forEach((p,h)=>{if(p.resumeToken.approximateByteSize()>0){let v=o.L_.get(h);v&&o.L_.set(h,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,h)=>{let v=o.L_.get(p);if(!v)return;o.L_.set(p,v.withResumeToken(Lt.EMPTY_BYTE_STRING,v.snapshotVersion)),Uw(o,p);let b=new Oa(v.target,p,h,v.sequenceNumber);Mg(o,b)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t))}catch(i){de("RemoteStore","Failed to raise snapshot:",i),yield Gu(n,i)}})}function Gu(n,e,t){return L(this,null,function*(){if(!Uo(e))throw e;n.k_.add(1),yield Ba(n),n.K_.set("Offline"),t||(t=()=>Fw(n.localStore)),n.asyncQueue.enqueueRetryable(()=>L(this,null,function*(){de("RemoteStore","Retrying IndexedDB access"),yield t(),n.k_.delete(1),yield ud(n)}))})}function Bw(n,e){return e().catch(t=>Gu(n,t,e))}function dd(n){return L(this,null,function*(){let e=Se(n),t=$i(e),i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;rO(e);)try{let r=yield JM(e.localStore,i);if(r===null){e.B_.length===0&&t.a_();break}i=r.batchId,oO(e,r)}catch(r){yield Gu(e,r)}qw(e)&&zw(e)})}function rO(n){return yr(n)&&n.B_.length<10}function oO(n,e){n.B_.push(e);let t=$i(n);t.s_()&&t.f_&&t.g_(e.mutations)}function qw(n){return yr(n)&&!$i(n).i_()&&n.B_.length>0}function zw(n){$i(n).start()}function sO(n){return L(this,null,function*(){$i(n).w_()})}function aO(n){return L(this,null,function*(){let e=$i(n);for(let t of n.B_)e.g_(t.mutations)})}function lO(n,e,t){return L(this,null,function*(){let i=n.B_.shift(),r=f0.from(i,e,t);yield Bw(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),yield dd(n)})}function cO(n,e){return L(this,null,function*(){e&&$i(n).f_&&(yield function(i,r){return L(this,null,function*(){if(function(c){return xM(c)&&c!==Z.ABORTED}(r.code)){let o=i.B_.shift();$i(i).__(),yield Bw(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,r)),yield dd(i)}})}(n,e)),qw(n)&&zw(n)})}function JC(n,e){return L(this,null,function*(){let t=Se(n);t.asyncQueue.verifyOperationInProgress(),de("RemoteStore","RemoteStore received new credentials");let i=yr(t);t.k_.add(3),yield Ba(t),i&&t.K_.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),yield ud(t)})}function uO(n,e){return L(this,null,function*(){let t=Se(n);e?(t.k_.delete(2),yield ud(t)):e||(t.k_.add(2),yield Ba(t),t.K_.set("Unknown"))})}function jo(n){return n.W_||(n.W_=function(t,i,r){let o=Se(t);return o.b_(),new Y0(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Ro:eO.bind(null,n),mo:tO.bind(null,n),po:nO.bind(null,n),R_:iO.bind(null,n)}),n.q_.push(e=>L(this,null,function*(){e?(n.W_.__(),Ng(n)?Og(n):n.K_.set("Unknown")):(yield n.W_.stop(),jw(n))}))),n.W_}function $i(n){return n.G_||(n.G_=function(t,i,r){let o=Se(t);return o.b_(),new Z0(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:sO.bind(null,n),po:cO.bind(null,n),p_:aO.bind(null,n),y_:lO.bind(null,n)}),n.q_.push(e=>L(this,null,function*(){e?(n.G_.__(),yield dd(n)):(yield n.G_.stop(),n.B_.length>0&&(de("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))}))),n.G_}var ig=class n{constructor(e,t,i,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,o){let c=Date.now()+i,d=new n(e,t,c,r,o);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Vg(n,e){if(hi("AsyncQueue",`${e}: ${n}`),Uo(n))return new _e(Z.UNAVAILABLE,`${e}: ${n}`);throw n}var Hu=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=Ta(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let i=new n;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}};var Wu=class{constructor(){this.z_=new it(Te.comparator)}track(e){let t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):xe():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}},Oo=class n{constructor(e,t,i,r,o,c,d,p,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,r,o){let c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new n(e,t,Hu.emptySet(t),c,i,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}};var rg=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},og=class{constructor(){this.queries=XC(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){let r=Se(t),o=r.queries;r.queries=XC(),o.forEach((c,d)=>{for(let p of d.J_)p.onError(i)})})(this,new _e(Z.ABORTED,"Firestore shutting down"))}};function XC(){return new vi(n=>gw(n),ad)}function dO(n,e){return L(this,null,function*(){let t=Se(n),i=3,r=e.query,o=t.queries.get(r);o?!o.Y_()&&e.Z_()&&(i=2):(o=new rg,i=e.Z_()?0:1);try{switch(i){case 0:o.H_=yield t.onListen(r,!0);break;case 1:o.H_=yield t.onListen(r,!1);break;case 2:yield t.onFirstRemoteStoreListen(r)}}catch(c){let d=Vg(c,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(d)}t.queries.set(r,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&Fg(t)})}function pO(n,e){return L(this,null,function*(){let t=Se(n),i=e.query,r=3,o=t.queries.get(i);if(o){let c=o.J_.indexOf(e);c>=0&&(o.J_.splice(c,1),o.J_.length===0?r=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}})}function mO(n,e){let t=Se(n),i=!1;for(let r of e){let o=r.query,c=t.queries.get(o);if(c){for(let d of c.J_)d.ta(r)&&(i=!0);c.H_=r}}i&&Fg(t)}function hO(n,e,t){let i=Se(n),r=i.queries.get(e);if(r)for(let o of r.J_)o.onError(t);i.queries.delete(e)}function Fg(n){n.X_.forEach(e=>{e.next()})}var sg,YC;(YC=sg||(sg={})).na="default",YC.Cache="cache";var ag=class{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){let i=[];for(let r of e.docChanges)r.type!==3&&i.push(r);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==sg.Cache}};var Ku=class{constructor(e){this.key=e}},Qu=class{constructor(e){this.key=e}},lg=class{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=vw(e),this.ma=new Hu(this.Va)}get fa(){return this.Ea}ga(e,t){let i=t?t.pa:new Wu,r=t?t.ma:this.ma,o=t?t.mutatedKeys:this.mutatedKeys,c=r,d=!1,p=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((v,b)=>{let T=r.get(v),O=ld(this.query,b)?b:null,j=!!T&&this.mutatedKeys.has(T.key),U=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations),F=!1;T&&O?T.data.isEqual(O.data)?j!==U&&(i.track({type:3,doc:O}),F=!0):this.ya(T,O)||(i.track({type:2,doc:O}),F=!0,(p&&this.Va(O,p)>0||h&&this.Va(O,h)<0)&&(d=!0)):!T&&O?(i.track({type:0,doc:O}),F=!0):T&&!O&&(i.track({type:1,doc:T}),F=!0,(p||h)&&(d=!0)),F&&(O?(c=c.add(O),o=U?o.add(v):o.delete(v)):(c=c.delete(v),o=o.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){let v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),o=o.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){let o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let c=e.pa.j_();c.sort((v,b)=>function(O,j){let U=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe()}};return U(O)-U(j)}(v.type,b.type)||this.Va(v.doc,b.doc)),this.wa(i),r=r!=null&&r;let d=t&&!r?this.Sa():[],p=this.Ra.size===0&&this.current&&!r?1:0,h=p!==this.Aa;return this.Aa=p,c.length!==0||h?{snapshot:new Oo(this.query,e.ma,o,c,e.mutatedKeys,p===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Wu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});let t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new Qu(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Ku(i))}),t}va(e){this.Ea=e.Es,this.Ra=Ne();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Oo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},cg=class{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}},ug=class{constructor(e){this.key=e,this.Fa=!1}},dg=class{constructor(e,t,i,r,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new vi(d=>gw(d),ad),this.Oa=new Map,this.Na=new Set,this.Ba=new it(Te.comparator),this.La=new Map,this.ka=new Va,this.qa={},this.Qa=new Map,this.Ka=Na.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};function fO(n,e,t=!0){return L(this,null,function*(){let i=Qw(n),r,o=i.xa.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Ca()):r=yield $w(i,e,t,!0),r})}function gO(n,e){return L(this,null,function*(){let t=Qw(n);yield $w(t,e,!0,!1)})}function $w(n,e,t,i){return L(this,null,function*(){let r=yield XM(n.localStore,zn(e)),o=r.targetId,c=n.sharedClientState.addLocalQueryTarget(o,t),d;return i&&(d=yield vO(n,e,o,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&Lw(n.remoteStore,r),d})}function vO(n,e,t,i,r){return L(this,null,function*(){n.Ua=(b,T,O)=>function(U,F,le,fe){return L(this,null,function*(){let ae=F.view.ga(le);ae.ss&&(ae=yield QC(U.localStore,F.query,!1).then(({documents:R})=>F.view.ga(R,ae)));let J=fe&&fe.targetChanges.get(F.targetId),be=fe&&fe.targetMismatches.get(F.targetId)!=null,he=F.view.applyChanges(ae,U.isPrimaryClient,J,be);return ew(U,F.targetId,he.ba),he.snapshot})}(n,b,T,O);let o=yield QC(n.localStore,e,!0),c=new lg(e,o.Es),d=c.ga(o.documents),p=Ma.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),h=c.applyChanges(d,n.isPrimaryClient,p);ew(n,t,h.ba);let v=new cg(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),h.snapshot})}function _O(n,e,t){return L(this,null,function*(){let i=Se(n),r=i.xa.get(e),o=i.Oa.get(r.targetId);if(o.length>1)return i.Oa.set(r.targetId,o.filter(c=>!ad(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||(yield W0(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&kg(i.remoteStore,r.targetId),pg(i,r.targetId)}).catch(Lo))):(pg(i,r.targetId),yield W0(i.localStore,r.targetId,!0))})}function bO(n,e){return L(this,null,function*(){let t=Se(n),i=t.xa.get(e),r=t.Oa.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),kg(t.remoteStore,i.targetId))})}function yO(n,e,t){return L(this,null,function*(){let i=SO(n);try{let r=yield function(c,d){let p=Se(c),h=xt.now(),v=d.reduce((O,j)=>O.add(j.key),Ne()),b,T;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let j=_i(),U=Ne();return p.hs.getEntries(O,v).next(F=>{j=F,j.forEach((le,fe)=>{fe.isValidDocument()||(U=U.add(le))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,j)).next(F=>{b=F;let le=[];for(let fe of d){let ae=TM(fe,b.get(fe.key).overlayedDocument);ae!=null&&le.push(new Wn(fe.key,ae,uw(ae.value.mapValue),mi.exists(!0)))}return p.mutationQueue.addMutationBatch(O,h,le,d)}).next(F=>{T=F;let le=F.applyToLocalDocumentSet(b,U);return p.documentOverlayCache.saveOverlays(O,F.batchId,le)})}).then(()=>({batchId:T.batchId,changes:bw(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(c,d,p){let h=c.qa[c.currentUser.toKey()];h||(h=new it(Ve)),h=h.insert(d,p),c.qa[c.currentUser.toKey()]=h}(i,r.batchId,t),yield qa(i,r.changes),yield dd(i.remoteStore)}catch(r){let o=Vg(r,"Failed to persist write");t.reject(o)}})}function Gw(n,e){return L(this,null,function*(){let t=Se(n);try{let i=yield KM(t.localStore,e);e.targetChanges.forEach((r,o)=>{let c=t.La.get(o);c&&(qe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?c.Fa=!0:r.modifiedDocuments.size>0?qe(c.Fa):r.removedDocuments.size>0&&(qe(c.Fa),c.Fa=!1))}),yield qa(t,i,e)}catch(i){yield Lo(i)}})}function ZC(n,e,t){let i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){let r=[];i.xa.forEach((o,c)=>{let d=c.view.ea(e);d.snapshot&&r.push(d.snapshot)}),function(c,d){let p=Se(c);p.onlineState=d;let h=!1;p.queries.forEach((v,b)=>{for(let T of b.J_)T.ea(d)&&(h=!0)}),h&&Fg(p)}(i.eventManager,e),r.length&&i.Ma.R_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}function EO(n,e,t){return L(this,null,function*(){let i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);let r=i.La.get(e),o=r&&r.key;if(o){let c=new it(Te.comparator);c=c.insert(o,An.newNoDocument(o,Ae.min()));let d=Ne().add(o),p=new Mu(Ae.min(),new Map,new it(Ve),c,d);yield Gw(i,p),i.Ba=i.Ba.remove(o),i.La.delete(e),Lg(i)}else yield W0(i.localStore,e,!1).then(()=>pg(i,e,t)).catch(Lo)})}function CO(n,e){return L(this,null,function*(){let t=Se(n),i=e.batch.batchId;try{let r=yield WM(t.localStore,e);Ww(t,i,null),Hw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),yield qa(t,r)}catch(r){yield Lo(r)}})}function wO(n,e,t){return L(this,null,function*(){let i=Se(n);try{let r=yield function(c,d){let p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let v;return p.mutationQueue.lookupMutationBatch(h,d).next(b=>(qe(b!==null),v=b.keys(),p.mutationQueue.removeMutationBatch(h,b))).next(()=>p.mutationQueue.performConsistencyCheck(h)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(h,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,v)).next(()=>p.localDocuments.getDocuments(h,v))})}(i.localStore,e);Ww(i,e,t),Hw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),yield qa(i,r)}catch(r){yield Lo(r)}})}function Hw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Ww(n,e,t){let i=Se(n),r=i.qa[i.currentUser.toKey()];if(r){let o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),i.qa[i.currentUser.toKey()]=r}}function pg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Kw(n,i)})}function Kw(n,e){n.Na.delete(e.path.canonicalString());let t=n.Ba.get(e);t!==null&&(kg(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Lg(n))}function ew(n,e,t){for(let i of t)i instanceof Ku?(n.ka.addReference(i.key,e),TO(n,i)):i instanceof Qu?(de("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Kw(n,i.key)):xe()}function TO(n,e){let t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(de("SyncEngine","New document in limbo: "+t),n.Na.add(i),Lg(n))}function Lg(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new Te(nt.fromString(e)),i=n.Ka.next();n.La.set(i,new ug(t)),n.Ba=n.Ba.insert(t,i),Lw(n.remoteStore,new Oa(zn(Pg(t.path)),i,"TargetPurposeLimboResolution",Tg.oe))}}function qa(n,e,t){return L(this,null,function*(){let i=Se(n),r=[],o=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(h=>{var v;if((h||t)&&i.isPrimaryClient){let b=h?!h.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(h){r.push(h);let b=z0.zi(p.targetId,h);o.push(b)}}))}),yield Promise.all(c),i.Ma.R_(r),yield function(p,h){return L(this,null,function*(){let v=Se(p);try{yield v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>X.forEach(h,T=>X.forEach(T.Wi,O=>v.persistence.referenceDelegate.addReference(b,T.targetId,O)).next(()=>X.forEach(T.Gi,O=>v.persistence.referenceDelegate.removeReference(b,T.targetId,O)))))}catch(b){if(!Uo(b))throw b;de("LocalStore","Failed to update sequence numbers: "+b)}for(let b of h){let T=b.targetId;if(!b.fromCache){let O=v.us.get(T),j=O.snapshotVersion,U=O.withLastLimboFreeSnapshotVersion(j);v.us=v.us.insert(T,U)}}})}(i.localStore,o))})}function xO(n,e){return L(this,null,function*(){let t=Se(n);if(!t.currentUser.isEqual(e)){de("SyncEngine","User change. New user:",e.toKey());let i=yield Vw(t.localStore,e);t.currentUser=e,function(o,c){o.Qa.forEach(d=>{d.forEach(p=>{p.reject(new _e(Z.CANCELLED,c))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),yield qa(t,i.Ts)}})}function IO(n,e){let t=Se(n),i=t.La.get(e);if(i&&i.Fa)return Ne().add(i.key);{let r=Ne(),o=t.Oa.get(e);if(!o)return r;for(let c of o){let d=t.xa.get(c);r=r.unionWith(d.view.fa)}return r}}function Qw(n){let e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EO.bind(null,e),e.Ma.R_=mO.bind(null,e.eventManager),e.Ma.Wa=hO.bind(null,e.eventManager),e}function SO(n){let e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wO.bind(null,e),e}var Jw=(()=>{class n{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(t){return L(this,null,function*(){this.serializer=cd(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),yield this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)})}Ja(t,i){return null}Ya(t,i){return null}Ha(t){return HM(this.persistence,new G0,t.initialUser,this.serializer)}ja(t){return new Uu(q0.ei,this.serializer)}za(t){return new K0}terminate(){return L(this,null,function*(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}return n.provider={build:()=>new n},n})(),mg=class extends Jw{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){qe(this.persistence.referenceDelegate instanceof ju);let i=this.persistence.referenceDelegate.garbageCollector;return new P0(i,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Uu(i=>ju.ei(i,t),this.serializer)}};var AO=(()=>{class n{initialize(t,i){return L(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ZC(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xO.bind(null,this.syncEngine),yield uO(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return function(){return new og}()}createDatastore(t){let i=cd(t.databaseInfo.databaseId),r=function(c){return new X0(c)}(t.databaseInfo);return function(c,d,p,h){return new eg(c,d,p,h)}(t.authCredentials,t.appCheckCredentials,r,i)}createRemoteStore(t){return function(r,o,c,d,p){return new ng(r,o,c,d,p)}(this.localStore,this.datastore,t.asyncQueue,i=>ZC(this.syncEngine,i,0),function(){return qu.p()?new qu:new Q0}())}createSyncEngine(t,i){return function(o,c,d,p,h,v,b){let T=new dg(o,c,d,p,h,v);return b&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}terminate(){return L(this,null,function*(){var t,i;yield function(o){return L(this,null,function*(){let c=Se(o);de("RemoteStore","RemoteStore shutting down."),c.k_.add(5),yield Ba(c),c.Q_.shutdown(),c.K_.set("Unknown")})}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()})}}return n.provider={build:()=>new n},n})();var hg=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):hi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var fg=class{constructor(e,t,i,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=Et.UNAUTHENTICATED,this.clientId=Su.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,c=>L(this,null,function*(){de("FirestoreClient","Received user=",c.uid),yield this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,c=>(de("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>L(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let i=Vg(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}};function qf(n,e){return L(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),de("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;yield e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(r=>L(this,null,function*(){i.isEqual(r)||(yield Vw(e.localStore,r),i=r)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function tw(n,e){return L(this,null,function*(){n.asyncQueue.verifyOperationInProgress();let t=yield PO(n);de("FirestoreClient","Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>JC(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>JC(e.remoteStore,r)),n._onlineComponents=e})}function PO(n){return L(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de("FirestoreClient","Using user provided OfflineComponentProvider");try{yield qf(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(r){return r.name==="FirebaseError"?r.code===Z.FAILED_PRECONDITION||r.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),yield qf(n,new Jw)}}else de("FirestoreClient","Using default OfflineComponentProvider"),yield qf(n,new mg(void 0));return n._offlineComponents})}function Xw(n){return L(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(de("FirestoreClient","Using user provided OnlineComponentProvider"),yield tw(n,n._uninitializedComponentsProvider._online)):(de("FirestoreClient","Using default OnlineComponentProvider"),yield tw(n,new AO))),n._onlineComponents})}function RO(n){return Xw(n).then(e=>e.syncEngine)}function nw(n){return L(this,null,function*(){let e=yield Xw(n),t=e.eventManager;return t.onListen=fO.bind(null,e.syncEngine),t.onUnlisten=_O.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bO.bind(null,e.syncEngine),t})}function Yw(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var iw=new Map;function Zw(n,e,t){if(!t)throw new _e(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DO(n,e,t,i){if(e===!0&&i===!0)throw new _e(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rw(n){if(!Te.isDocumentKey(n))throw new _e(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ow(n){if(Te.isDocumentKey(n))throw new _e(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ug(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe()}function Bi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Ug(n);throw new _e(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Ju=class{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new _e(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},No=class{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ju({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ju(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new zf;switch(i.type){case"firstParty":return new Wf(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return L(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let i=iw.get(t);i&&(de("ComponentProvider","Removing Datastore"),iw.delete(t),i.terminate())}(this),Promise.resolve()}};function eT(n,e,t,i={}){var r;let o=(n=Bi(n,No))._getSettings(),c=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Et.MOCK_USER;else{d=x1(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);let h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new _e(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Et(h)}n._authCredentials=new $f(new Iu(d,p))}}var Xu=class n{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},an=class n{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},qi=class n extends Xu{constructor(e,t,i){super(e,t,Pg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new Te(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function tT(n,e,...t){if(n=Vt(n),Zw("collection","path",e),n instanceof No){let i=nt.fromString(e,...t);return ow(i),new qi(n,null,i)}{if(!(n instanceof an||n instanceof qi))throw new _e(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=n._path.child(nt.fromString(e,...t));return ow(i),new qi(n.firestore,null,i)}}function jg(n,e,...t){if(n=Vt(n),arguments.length===1&&(e=Su.newId()),Zw("doc","path",e),n instanceof No){let i=nt.fromString(e,...t);return rw(i),new an(n,null,new Te(i))}{if(!(n instanceof an||n instanceof qi))throw new _e(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=n._path.child(nt.fromString(e,...t));return rw(i),new an(n.firestore,n instanceof qi?n.converter:null,new Te(i))}}var Yu=class{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new zu(this,"async_queue_retry"),this.fu=()=>{let i=Bf();i&&de("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;let t=Bf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=Bf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new pi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}wu(){return L(this,null,function*(){if(this.Iu.length!==0){try{yield this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Uo(e))throw e;de("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}})}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;let r=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw hi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let r=ig.createAndSchedule(this,e,t,i,o=>this.Su(o));return this.Eu.push(r),r}pu(){this.Au&&xe()}verifyOperationInProgress(){}bu(){return L(this,null,function*(){let e;do e=this.gu,yield e;while(e!==this.gu)})}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(let t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}};function sw(n){return function(t,i){if(typeof t!="object"||t===null)return!1;let r=t;for(let o of i)if(o in r&&typeof r[o]=="function")return!0;return!1}(n,["next","error","complete"])}var Gi=class extends No{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Yu,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return L(this,null,function*(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Yu(e),this._firestoreClient=void 0,yield e}})}};function nT(n,e){let t=typeof n=="object"?n:po(),i=typeof n=="string"?n:e||"(default)",r=eu(t,"firestore").getImmediate({identifier:i});if(!r._initialized){let o=w1("firestore");o&&eT(r,...o)}return r}function iT(n){if(n._terminated)throw new _e(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kO(n),n._firestoreClient}function kO(n){var e,t,i;let r=n._freezeSettings(),o=function(d,p,h,v){return new Yf(d,p,h,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Yw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new fg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){let p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}}(n._componentsProvider))}var Fa=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Lt.fromBase64String(e))}catch(t){throw new _e(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Vo=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var La=class{constructor(e){this._methodName=e}};var Ua=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}};var ja=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==r[o])return!1;return!0}(this._values,e._values)}};var MO=/^__.*__$/,gg=class{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}},Zu=class{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function rT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}var vg=class n{constructor(e,t,i,r,o,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:i,Nu:!1});return r.Bu(e),r}Lu(e){var t;let i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return td(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(rT(this.Mu)&&MO.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},_g=class{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||cd(e)}$u(e,t,i,r=!1){return new vg({Mu:e,methodName:t,Ku:i,path:sn.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function oT(n){let e=n._freezeSettings(),t=cd(n._databaseId);return new _g(n._databaseId,!!e.ignoreUndefinedProperties,t)}function OO(n,e,t,i,r,o={}){let c=n.$u(o.merge||o.mergeFields?2:0,e,t,r);Bg("Data must be an object, but it was:",c,i);let d=sT(i,c),p,h;if(o.merge)p=new yn(c.fieldMask),h=c.fieldTransforms;else if(o.mergeFields){let v=[];for(let b of o.mergeFields){let T=bg(e,b,t);if(!c.contains(T))throw new _e(Z.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);lT(v,T)||v.push(T)}p=new yn(v),h=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,h=c.fieldTransforms;return new gg(new on(d),p,h)}var ed=class n extends La{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function NO(n,e,t,i){let r=n.$u(1,e,t);Bg("Data must be an object, but it was:",r,i);let o=[],c=on.empty();Hi(i,(p,h)=>{let v=qg(e,p,t);h=Vt(h);let b=r.Lu(v);if(h instanceof ed)o.push(v);else{let T=pd(h,b);T!=null&&(o.push(v),c.set(v,T))}});let d=new yn(o);return new Zu(c,d,r.fieldTransforms)}function VO(n,e,t,i,r,o){let c=n.$u(1,e,t),d=[bg(e,i,t)],p=[r];if(o.length%2!=0)throw new _e(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)d.push(bg(e,o[T])),p.push(o[T+1]);let h=[],v=on.empty();for(let T=d.length-1;T>=0;--T)if(!lT(h,d[T])){let O=d[T],j=p[T];j=Vt(j);let U=c.Lu(O);if(j instanceof ed)h.push(O);else{let F=pd(j,U);F!=null&&(h.push(O),v.set(O,F))}}let b=new yn(h);return new Zu(v,b,c.fieldTransforms)}function pd(n,e){if(aT(n=Vt(n)))return Bg("Unsupported field value:",e,n),sT(n,e);if(n instanceof La)return function(i,r){if(!rT(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);let o=i._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,r){let o=[],c=0;for(let d of i){let p=pd(d,r.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),c++}return{arrayValue:{values:o}}}(n,e)}return function(i,r){if((i=Vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return bM(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let o=xt.fromDate(i);return{timestampValue:Fu(r.serializer,o)}}if(i instanceof xt){let o=new xt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Fu(r.serializer,o)}}if(i instanceof Ua)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Fa)return{bytesValue:Pw(r.serializer,i._byteString)};if(i instanceof an){let o=r.databaseId,c=i.firestore._databaseId;if(!c.isEqual(o))throw r.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Dg(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof ja)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Rg(d.serializer,p)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${Ug(i)}`)}(n,e)}function sT(n,e){let t={};return aw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(n,(i,r)=>{let o=pd(r,e.Ou(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function aT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof Ua||n instanceof Fa||n instanceof an||n instanceof La||n instanceof ja)}function Bg(n,e,t){if(!aT(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){let i=Ug(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function bg(n,e,t){if((e=Vt(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return qg(n,e);throw td("Field path arguments must be of type string or ",n,!1,void 0,t)}var FO=new RegExp("[~\\*/\\[\\]]");function qg(n,e,t){if(e.search(FO)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function td(n,e,t,i,r){let o=i&&!i.isEmpty(),c=r!==void 0,d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||c)&&(p+=" (found",o&&(p+=` in field ${i}`),c&&(p+=` in document ${r}`),p+=")"),new _e(Z.INVALID_ARGUMENT,d+n+p)}function lT(n,e){return n.some(t=>t.isEqual(e))}var nd=class{constructor(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(cT("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},yg=class extends nd{data(){return super.data()}};function cT(n,e){return typeof e=="string"?qg(n,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}function LO(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _e(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Eg=class{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let i={};return Hi(e,(r,o)=>{i[r]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,r;let o=(r=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(c=>Ye(c.doubleValue));return new ja(o)}convertGeoPoint(e){return new Ua(Ye(e.latitude),Ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":let i=sd(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){let t=fi(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){let i=nt.fromString(e);qe(Nw(i));let r=new Du(i.get(1),i.get(3)),o=new Te(i.popFirst(5));return r.isEqual(t)||hi(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function UO(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}var hr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},id=class extends nd{constructor(e,t,i,r,o,c){super(e,t,i,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let i=this._document.data.field(cT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},Co=class extends id{data(e={}){return super.data(e)}},Cg=class{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new hr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Co(this._firestore,this._userDataWriter,i.key,i,new hr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _e(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map(d=>{let p=new Co(r._firestore,r._userDataWriter,d.doc.key,d.doc,new hr(r._snapshot.mutatedKeys.has(d.doc.key),r._snapshot.fromCache),r.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{let p=new Co(r._firestore,r._userDataWriter,d.doc.key,d.doc,new hr(r._snapshot.mutatedKeys.has(d.doc.key),r._snapshot.fromCache),r.query.converter),h=-1,v=-1;return d.type!==0&&(h=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:jO(d.type),doc:p,oldIndex:h,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function jO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe()}}var rd=class extends Eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fa(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}};function uT(n,e,t,...i){n=Bi(n,an);let r=Bi(n.firestore,Gi),o=oT(r),c;return c=typeof(e=Vt(e))=="string"||e instanceof Vo?VO(o,"updateDoc",n._key,e,t,i):NO(o,"updateDoc",n._key,e),$g(r,[c.toMutation(n._key,mi.exists(!0))])}function dT(n){return $g(Bi(n.firestore,Gi),[new ka(n._key,mi.none())])}function pT(n,e){let t=Bi(n.firestore,Gi),i=jg(n),r=UO(n.converter,e);return $g(t,[OO(oT(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,mi.exists(!1))]).then(()=>i)}function zg(n,...e){var t,i,r;n=Vt(n);let o={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||sw(e[c])||(o=e[c],c++);let d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(sw(e[c])){let b=e[c];e[c]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[c+1]=(i=b.error)===null||i===void 0?void 0:i.bind(b),e[c+2]=(r=b.complete)===null||r===void 0?void 0:r.bind(b)}let p,h,v;if(n instanceof an)h=Bi(n.firestore,Gi),v=Pg(n._key.path),p={next:b=>{e[c]&&e[c](BO(h,n,b))},error:e[c+1],complete:e[c+2]};else{let b=Bi(n,Xu);h=Bi(b.firestore,Gi),v=b._query;let T=new rd(h);p={next:O=>{e[c]&&e[c](new Cg(h,T,b,O))},error:e[c+1],complete:e[c+2]},LO(n._query)}return function(T,O,j,U){let F=new hg(U),le=new ag(O,F,j);return T.asyncQueue.enqueueAndForget(()=>L(this,null,function*(){return dO(yield nw(T),le)})),()=>{F.eu(),T.asyncQueue.enqueueAndForget(()=>L(this,null,function*(){return pO(yield nw(T),le)}))}}(iT(h),v,d,p)}function $g(n,e){return function(i,r){let o=new pi;return i.asyncQueue.enqueueAndForget(()=>L(this,null,function*(){return yO(yield RO(i),r,o)})),o.promise}(iT(n),e)}function BO(n,e,t){let i=t.docs.get(e._key),r=new rd(n);return new id(n,r,e._key,i,new hr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Fo=r})(uo),In(new Gt("firestore",(i,{instanceIdentifier:r,options:o})=>{let c=i.getProvider("app").getImmediate(),d=new Gi(new Gf(i.getProvider("auth-internal")),new Qf(i.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new _e(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(h.options.projectId,v)}(c,r),c);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),lt(SC,"4.7.6",e),lt(SC,"4.7.6","esm2017")})();var md=function(){return md=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},md.apply(this,arguments)};var $O={includeMetadataChanges:!1};function Gg(n,e){return e===void 0&&(e=$O),new rt(function(t){var i=zg(n,e,{next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)});return{unsubscribe:i}})}function mT(n){return Gg(n,{includeMetadataChanges:!0})}function hT(n,e){return e===void 0&&(e={}),mT(n).pipe(ve(function(t){return Hg(t,e)}))}function Hg(n,e){var t;e===void 0&&(e={});var i=n.data(e);return!n.exists()||typeof i!="object"||i===null||!e.idField?i:md(md({},i),(t={},t[e.idField]=n.id,t))}function fT(n){return Gg(n,{includeMetadataChanges:!0}).pipe(ve(function(e){return e.docs}))}function gT(n,e){return e===void 0&&(e={}),fT(n).pipe(ve(function(t){return t.map(function(i){return Hg(i,e)})}))}var Er=class{constructor(e){return e}},vT="firestore",Wg=class{constructor(){return ho(vT)}};var Kg=new ue("angularfire2.firestore-instances");function GO(n,e){let t=ru(vT,n,e);return t&&new Er(t)}function HO(n){return(e,t)=>{let i=e.runOutsideAngular(()=>n(t));return new Er(i)}}var WO={provide:Wg,deps:[[new Cn,Kg]]},KO={provide:Er,useFactory:GO,deps:[[new Cn,Kg],cr]};function _T(n,...e){return lt("angularfire",ar.full,"fst"),ft([KO,WO,{provide:Kg,useFactory:HO(n),multi:!0,deps:[ze,Wt,lr,ga,[new Cn,vu],[new Cn,su],...e]}])}var bT=_n(gT,!0);var yT=_n(hT,!0);var ET=_n(pT,!0,2);var Qg=_n(tT,!0,2);var CT=_n(dT,!0,2);var hd=_n(jg,!0,2);var wT=_n(nT,!0);var TT=_n(uT,!0,2);var Bo=class n{constructor(e){this.firestore=e}getDocuments(e){let t=Qg(this.firestore,e);return bT(t,{idField:"id"})}getDocumentById(e,t){let i=hd(this.firestore,`${e}/${t}`);return yT(i,{idField:"id"})}addDocument(e,t){let i=Qg(this.firestore,e);return ET(i,t)}deleteDocument(e,t){let i=hd(this.firestore,`${e}/${t}`);return CT(i)}updateDocument(e,t,i){let r=hd(this.firestore,`${e}/${t}`);return TT(r,i)}static \u0275fac=function(t){return new(t||n)(oe(Er))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})};var fd=class n{constructor(e,t,i){this.activatedRoute=e;this.firestoreService=t;this.router=i}product={id:0,nom:"",prix:0,categorie_nom:"",description:""};productId="";ngOnInit(){this.productId=this.activatedRoute.snapshot.paramMap.get("id")||"",this.firestoreService.getDocumentById("angproducts",this.productId).subscribe(e=>{this.product=e})}updateProduct(){this.firestoreService.updateDocument("angproducts",this.productId,this.product).then(()=>{alert("Produit mis \xE0 jour !"),this.router.navigate(["/products-firebase"])}).catch(e=>{console.error("Erreur lors de la suppression du produit :",e)})}static \u0275fac=function(t){return new(t||n)(se(_t),se(Bo),se(Ge))};static \u0275cmp=k({type:n,selectors:[["app-update-product-fire"]],decls:24,vars:4,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1",1),s(2,"Mettre \xE0 jour le produit"),a(),l(3,"div",2)(4,"form",3),C("ngSubmit",function(){return i.updateProduct()}),l(5,"div",4)(6,"label",5),s(7,"Nom"),a(),l(8,"input",6),Ce("ngModelChange",function(o){return Ee(i.product.nom,o)||(i.product.nom=o),o}),a()(),l(9,"div",4)(10,"label",7),s(11,"Prix"),a(),l(12,"input",8),Ce("ngModelChange",function(o){return Ee(i.product.prix,o)||(i.product.prix=o),o}),a()(),l(13,"div",4)(14,"label",9),s(15,"Cat\xE9gorie name"),a(),l(16,"input",10),Ce("ngModelChange",function(o){return Ee(i.product.categorie_nom,o)||(i.product.categorie_nom=o),o}),a()(),l(17,"div",11)(18,"label",12),s(19,"Description"),a(),l(20,"textarea",13),Ce("ngModelChange",function(o){return Ee(i.product.description,o)||(i.product.description=o),o}),a()(),l(21,"div",14)(22,"button",15),s(23,"Mettre \xE0 jour"),a()()()()()),t&2&&(g(8),ye("ngModel",i.product.nom),g(4),ye("ngModel",i.product.prix),g(4),ye("ngModel",i.product.categorie_nom),g(4),ye("ngModel",i.product.description))},dependencies:[G,Pe,Nt,De,pt,Oe,Ot,$t,ke,zt],encapsulation:2})};var Yg={};function $a(n,e){if(Yg[n]=(Yg[n]||0)+1,typeof e=="function")return Jg(n,(...i)=>we(K({},e(...i)),{type:n}));switch(e?e._as:"empty"){case"empty":return Jg(n,()=>({type:n}));case"props":return Jg(n,i=>we(K({},i),{type:n}));default:throw new Error("Unexpected config.")}}function Jg(n,e){return Object.defineProperty(e,"type",{value:n,writable:!1})}var Ga="@ngrx/store/init",Kn=(()=>{class n extends Rt{constructor(){super({type:Ga})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),JO=[Kn],UT=new ue("@ngrx/store Internal Root Guard"),IT=new ue("@ngrx/store Internal Initial State"),Ha=new ue("@ngrx/store Initial State"),jT=new ue("@ngrx/store Reducer Factory"),ST=new ue("@ngrx/store Internal Reducer Factory Provider"),BT=new ue("@ngrx/store Initial Reducers"),Xg=new ue("@ngrx/store Internal Initial Reducers"),Nq=new ue("@ngrx/store Store Features"),AT=new ue("@ngrx/store Internal Store Reducers"),Vq=new ue("@ngrx/store Internal Feature Reducers"),Fq=new ue("@ngrx/store Internal Feature Configs"),Lq=new ue("@ngrx/store Internal Store Features"),Uq=new ue("@ngrx/store Internal Feature Reducers Token"),jq=new ue("@ngrx/store Feature Reducers"),PT=new ue("@ngrx/store User Provided Meta Reducers"),gd=new ue("@ngrx/store Meta Reducers"),RT=new ue("@ngrx/store Internal Resolved Meta Reducers"),DT=new ue("@ngrx/store User Runtime Checks Config"),kT=new ue("@ngrx/store Internal User Runtime Checks Config"),za=new ue("@ngrx/store Internal Runtime Checks"),qT=new ue("@ngrx/store Check if Action types are unique"),MT=new ue("@ngrx/store Root Store Provider"),Bq=new ue("@ngrx/store Feature State Provider");function XO(n,e={}){let t=Object.keys(n),i={};for(let o=0;o<t.length;o++){let c=t[o];typeof n[c]=="function"&&(i[c]=n[c])}let r=Object.keys(i);return function(c,d){c=c===void 0?e:c;let p=!1,h={};for(let v=0;v<r.length;v++){let b=r[v],T=i[b],O=c[b],j=T(O,d);h[b]=j,p=p||j!==O}return p?h:c}}function YO(n,e){return Object.keys(n).filter(t=>t!==e).reduce((t,i)=>Object.assign(t,{[i]:n[i]}),{})}function zT(...n){return function(e){if(n.length===0)return e;let t=n[n.length-1];return n.slice(0,-1).reduceRight((r,o)=>o(r),t(e))}}function $T(n,e){return Array.isArray(e)&&e.length>0&&(n=zT.apply(null,[...e,n])),(t,i)=>{let r=n(t);return(o,c)=>(o=o===void 0?i:o,r(o,c))}}function ZO(n){let e=Array.isArray(n)&&n.length>0?zT(...n):t=>t;return(t,i)=>(t=e(t),(r,o)=>(r=r===void 0?i:r,t(r,o)))}var Cr=class extends rt{},qo=class extends Kn{},vd="@ngrx/store/update-reducers",Zg=(()=>{class n extends Rt{get currentReducers(){return this.reducers}constructor(t,i,r,o){super(o(r,i)),this.dispatcher=t,this.initialState=i,this.reducers=r,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let i=t.reduce((r,{reducers:o,reducerFactory:c,metaReducers:d,initialState:p,key:h})=>{let v=typeof o=="function"?ZO(d)(o,p):$T(c,d)(o,p);return r[h]=v,r},{});this.addReducers(i)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(i=>i.key))}addReducer(t,i){this.addReducers({[t]:i})}addReducers(t){this.reducers=K(K({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(i=>{this.reducers=YO(this.reducers,i)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:vd,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(i){return new(i||n)(oe(qo),oe(Ha),oe(BT),oe(jT))}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),eN=[Zg,{provide:Cr,useExisting:Zg},{provide:qo,useExisting:Kn}],Wa=(()=>{class n extends ot{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})()}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),tN=[Wa],zo=class extends rt{},OT=(()=>{class n extends Rt{static{this.INIT=Ga}constructor(t,i,r,o){super(o);let d=t.pipe(Xi(Pr)).pipe(_l(i)),p={state:o},h=d.pipe(Xn(nN,p));this.stateSubscription=h.subscribe(({state:v,action:b})=>{this.next(v),r.next(b)}),this.state=fa(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(i){return new(i||n)(oe(Kn),oe(Cr),oe(Wa),oe(Ha))}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})();function nN(n={state:void 0},[e,t]){let{state:i}=n;return{state:t(i,e),action:e}}var iN=[OT,{provide:zo,useExisting:OT}],ln=(()=>{class n extends rt{constructor(t,i,r){super(),this.actionsObserver=i,this.reducerManager=r,this.source=t,this.state=t.state}select(t,...i){return oN.call(null,t,...i)(this)}selectSignal(t,i){return fn(()=>t(this.state()),i)}lift(t){let i=new n(this,this.actionsObserver,this.reducerManager);return i.operator=t,i}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,i){this.reducerManager.addReducer(t,i)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(i){return new(i||n)(oe(zo),oe(Kn),oe(Zg))}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),rN=[ln];function oN(n,e,...t){return function(r){let o;if(typeof n=="string"){let c=[e,...t].filter(Boolean);o=r.pipe(ab(n,...c))}else if(typeof n=="function")o=r.pipe(ve(c=>n(c,e)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return o.pipe(hm())}}var iv="https://ngrx.io/guide/store/configuration/runtime-checks";function NT(n){return n===void 0}function VT(n){return n===null}function GT(n){return Array.isArray(n)}function sN(n){return typeof n=="string"}function aN(n){return typeof n=="boolean"}function lN(n){return typeof n=="number"}function HT(n){return typeof n=="object"&&n!==null}function cN(n){return HT(n)&&!GT(n)}function uN(n){if(!cN(n))return!1;let e=Object.getPrototypeOf(n);return e===Object.prototype||e===null}function ev(n){return typeof n=="function"}function dN(n){return ev(n)&&n.hasOwnProperty("\u0275cmp")}function pN(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var mN=!1;function hN(){return mN}function FT(n,e){return n===e}function fN(n,e,t){for(let i=0;i<n.length;i++)if(!t(n[i],e[i]))return!0;return!1}function WT(n,e=FT,t=FT){let i=null,r=null,o;function c(){i=null,r=null}function d(v=void 0){o={result:v}}function p(){o=void 0}function h(){if(o!==void 0)return o.result;if(!i)return r=n.apply(null,arguments),i=arguments,r;if(!fN(arguments,i,e))return r;let v=n.apply(null,arguments);return i=arguments,t(r,v)?r:(r=v,v)}return{memoized:h,reset:c,setResult:d,clearResult:p}}function Ka(...n){return vN(WT)(...n)}function gN(n,e,t,i){if(t===void 0){let o=e.map(c=>c(n));return i.memoized.apply(null,o)}let r=e.map(o=>o(n,t));return i.memoized.apply(null,[...r,t])}function vN(n,e={stateFn:gN}){return function(...t){let i=t;if(Array.isArray(i[0])){let[v,...b]=i;i=[...v,...b]}else i.length===1&&_N(i[0])&&(i=bN(i[0]));let r=i.slice(0,i.length-1),o=i[i.length-1],c=r.filter(v=>v.release&&typeof v.release=="function"),d=n(function(...v){return o.apply(null,v)}),p=WT(function(v,b){return e.stateFn.apply(null,[v,r,b,d])});function h(){p.reset(),d.reset(),c.forEach(v=>v.release())}return Object.assign(p.memoized,{release:h,projector:d.memoized,setResult:p.setResult,clearResult:p.clearResult})}}function KT(n){return Ka(e=>{let t=e[n];return!hN()&&Br()&&!(n in e)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},e=>e)}function _N(n){return!!n&&typeof n=="object"&&Object.values(n).every(e=>typeof e=="function")}function bN(n){let e=Object.values(n),t=Object.keys(n),i=(...r)=>t.reduce((o,c,d)=>we(K({},o),{[c]:r[d]}),{});return[...e,i]}function yN(n){return n instanceof ue?Y(n):n}function EN(n){return typeof n=="function"?n():n}function CN(n,e){return n.concat(e)}function wN(){if(Y(ln,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function TN(n,e){return function(t,i){let r=e.action(i)?tv(i):i,o=n(t,r);return e.state()?tv(o):o}}function tv(n){Object.freeze(n);let e=ev(n);return Object.getOwnPropertyNames(n).forEach(t=>{if(!t.startsWith("\u0275")&&pN(n,t)&&(!e||t!=="caller"&&t!=="callee"&&t!=="arguments")){let i=n[t];(HT(i)||ev(i))&&!Object.isFrozen(i)&&tv(i)}}),n}function xN(n,e){return function(t,i){if(e.action(i)){let o=nv(i);LT(o,"action")}let r=n(t,i);if(e.state()){let o=nv(r);LT(o,"state")}return r}}function nv(n,e=[]){return(NT(n)||VT(n))&&e.length===0?{path:["root"],value:n}:Object.keys(n).reduce((i,r)=>{if(i)return i;let o=n[r];return dN(o)?i:NT(o)||VT(o)||lN(o)||aN(o)||sN(o)||GT(o)?!1:uN(o)?nv(o,[...e,r]):{path:[...e,r],value:o}},!1)}function LT(n,e){if(n===!1)return;let t=n.path.join("."),i=new Error(`Detected unserializable ${e} at "${t}". ${iv}#strict${e}serializability`);throw i.value=n.value,i.unserializablePath=t,i}function IN(n,e){return function(t,i){if(e.action(i)&&!ze.isInAngularZone())throw new Error(`Action '${i.type}' running outside NgZone. ${iv}#strictactionwithinngzone`);return n(t,i)}}function SN(n){return Br()?K({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function AN({strictActionSerializability:n,strictStateSerializability:e}){return t=>n||e?xN(t,{action:i=>n&&!rv(i),state:()=>e}):t}function PN({strictActionImmutability:n,strictStateImmutability:e}){return t=>n||e?TN(t,{action:i=>n&&!rv(i),state:()=>e}):t}function rv(n){return n.type.startsWith("@ngrx")}function RN({strictActionWithinNgZone:n}){return e=>n?IN(e,{action:t=>n&&!rv(t)}):e}function DN(n){return[{provide:kT,useValue:n},{provide:DT,useFactory:MN,deps:[kT]},{provide:za,deps:[DT],useFactory:SN},{provide:gd,multi:!0,deps:[za],useFactory:PN},{provide:gd,multi:!0,deps:[za],useFactory:AN},{provide:gd,multi:!0,deps:[za],useFactory:RN}]}function kN(){return[{provide:qT,multi:!0,deps:[za],useFactory:ON}]}function MN(n){return n}function ON(n){if(!n.strictActionTypeUniqueness)return;let e=Object.entries(Yg).filter(([,t])=>t>1).map(([t])=>t);if(e.length)throw new Error(`Action types are registered more than once, ${e.map(t=>`"${t}"`).join(", ")}. ${iv}#strictactiontypeuniqueness`)}function NN(n={},e={}){return[{provide:UT,useFactory:wN},{provide:IT,useValue:e.initialState},{provide:Ha,useFactory:EN,deps:[IT]},{provide:Xg,useValue:n},{provide:AT,useExisting:n instanceof ue?n:Xg},{provide:BT,deps:[Xg,[new hb(AT)]],useFactory:yN},{provide:PT,useValue:e.metaReducers?e.metaReducers:[]},{provide:RT,deps:[gd,PT],useFactory:CN},{provide:ST,useValue:e.reducerFactory?e.reducerFactory:XO},{provide:jT,deps:[ST,RT],useFactory:$T},JO,eN,tN,iN,rN,DN(e.runtimeChecks),kN()]}function VN(){Y(Kn),Y(Cr),Y(Wa),Y(ln),Y(UT,{optional:!0}),Y(qT,{optional:!0})}var FN=[{provide:MT,useFactory:VN},{provide:bl,multi:!0,useFactory(){return()=>Y(MT)}}];function QT(n,e){return ft([...NN(n,e),FN])}function Qa(...n){let e=n.pop(),t=n.map(i=>i.type);return{reducer:e,types:t}}function JT(n,...e){let t=new Map;for(let i of e)for(let r of i.types){let o=t.get(r);if(o){let c=(d,p)=>i.reducer(o(d,p),p);t.set(r,c)}else t.set(r,i.reducer)}return function(i=n,r){let o=t.get(r.type);return o?o(i,r):i}}var LN={categories:[],products:[],isLoggedIn:typeof window<"u"&&localStorage.getItem("isLoggedIn")==="true"},ov=$a("[Categories] Add Categories",n=>({payload:n})),UN=$a("[Products] Add Categories",n=>({payload:n})),sv=$a("[Auth] Set Active User"),av=$a("[Auth] Remove Active User"),XT=JT(LN,Qa(ov,(n,{payload:e})=>we(K({},n),{categories:e})),Qa(UN,(n,{payload:e})=>we(K({},n),{products:e})),Qa(sv,n=>(typeof window<"u"&&localStorage.setItem("isLoggedIn","true"),we(K({},n),{isLoggedIn:!0}))),Qa(av,n=>(typeof window<"u"&&localStorage.removeItem("isLoggedIn"),we(K({},n),{isLoggedIn:!1})))),lv=KT("data"),YT=Ka(lv,n=>n.categories),$q=Ka(lv,n=>n.products),wr=Ka(lv,n=>n.isLoggedIn);var jN=["tab1"],BN=["tab2"];function qN(n,e){n&1&&(l(0,"div",33),s(1," Veuillez entrer votre nom d'utilisateur. "),a())}function zN(n,e){n&1&&(l(0,"div",33),s(1," Veuillez entrer votre mot de passe. "),a())}function $N(n,e){if(n&1&&(l(0,"div",34),s(1),a()),n&2){let t=ce();g(),$(" ",t.errorMessage," ")}}function GN(n,e){n&1&&(l(0,"span",35),s(1,"copied "),y(2,"i",36),a())}function HN(n,e){n&1&&(l(0,"span",35),s(1,"copied "),y(2,"i",36),a())}var bd=class n{constructor(e,t){this.router=e;this.store=t}username="";password="";errorMessage="";onLogin(){this.username==="admin"&&this.password==="password"?(this.store.dispatch(sv()),this.router.navigate(["/dashboard"])):this.errorMessage="Nom d\u2019utilisateur ou mot de passe incorrect."}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(Ge),se(ln))};static \u0275cmp=k({type:n,selectors:[["app-login"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,jN,5),q(i.infoTab2,BN,5)),t&2&&ne(2)},decls:76,vars:8,consts:[["loginForm","ngForm"],["tab1",""],["tab2",""],[1,"container"],[1,"row","justify-content-center"],[1,"text-center"],[1,"col-md-4"],[1,"card","shadow"],[1,"card-header","text-center","bg-primary","text-white"],[1,"card-body"],[3,"ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger small mt-1",4,"ngIf"],["for","password",1,"form-label"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","alert alert-danger py-1",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-success",3,"disabled"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"mt-5"],[1,"fs-2"],[1,"text-danger"],[1,"text-danger","small","mt-1"],[1,"alert","alert-danger","py-1"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"Syst\xE8me de connexion"),a(),y(3,"hr"),l(4,"div",4)(5,"span",5),s(6,"utilisateur: admin"),a(),l(7,"span",5),s(8,"password: admin"),a(),l(9,"div",6)(10,"div",7)(11,"div",8)(12,"h4"),s(13,"Connexion"),a()(),l(14,"div",9)(15,"form",10,0),C("ngSubmit",function(){return S(r),A(i.onLogin())}),l(17,"div",11)(18,"label",12),s(19,"Nom d'utilisateur"),a(),l(20,"input",13),Ce("ngModelChange",function(c){return S(r),Ee(i.username,c)||(i.username=c),A(c)}),a(),N(21,qN,2,0,"div",14),a(),l(22,"div",11)(23,"label",15),s(24,"Mot de passe"),a(),l(25,"input",16),Ce("ngModelChange",function(c){return S(r),Ee(i.password,c)||(i.password=c),A(c)}),a(),N(26,zN,2,0,"div",14),a(),N(27,$N,2,1,"div",17),l(28,"div",18)(29,"button",19),s(30," Se connecter "),a()()()()()()(),l(31,"ul",20)(32,"li",21)(33,"button",22),s(34," Composant Parent "),a()(),l(35,"li",21)(36,"button",23),s(37," Composant navbar "),a()()(),l(38,"div",24)(39,"div",25)(40,"i",26),C("click",function(){return S(r),A(i.copy1())}),a(),N(41,GN,3,0,"span",27),l(42,"pre",28,1),W(),s(44,`import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActiveUser } from '../../../ngrx/data.slice';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container">
      <h1>Syst\xE8me de connexion</h1>
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-header text-center bg-primary text-white">
              <h4>Connexion</h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onLogin()" #loginForm="ngForm">
                <!-- Nom d'utilisateur -->
                <div class="mb-3">
                  <label for="username" class="form-label"
                    >Nom d'utilisateur</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    [(ngModel)]="username"
                    class="form-control"
                    required
                  />
                  <div
                    *ngIf="loginForm.submitted && !username"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre nom d'utilisateur.
                  </div>
                </div>

                <!-- Mot de passe -->
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    [(ngModel)]="password"
                    class="form-control"
                    required
                  />
                  <div
                    *ngIf="loginForm.submitted && !password"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre mot de passe.
                  </div>
                </div>

                <!-- Message d'erreur -->
                <div *ngIf="errorMessage" class="alert alert-danger py-1">
                  {{ errorMessage }}
                </div>

                <!-- Bouton de connexion -->
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-success"
                    [disabled]="!loginForm.valid"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  styles: \`\`,
})
export class LoginComponent {

  constructor(private router: Router, private store: Store) {}

  username = '';
  password = '';
  errorMessage = '';

  onLogin() {
    if (this.username === 'admin' && this.password === 'password') {
      this.store.dispatch(setActiveUser());
      this.router.navigate(['/dashboard']); // Redirige vers le tableau de bord
    } else {
      this.errorMessage = 'Nom d\u2019utilisateur ou mot de passe incorrect.';
    }
  }
}`),H(),a()(),l(45,"div",29)(46,"i",26),C("click",function(){return S(r),A(i.copy2())}),a(),N(47,HN,3,0,"span",27),l(48,"pre",28,2),W(),s(50,`import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-headertest',
  template: \`
    <nav
      style="background-color: black;"
      class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 p-2"
    >
      <a
        *ngIf="!isloggedIn()"
        [ngClass]="{ active: router.url === '/login' }"
        routerLink="/login"
        >se connecter
      </a>
      <span
        *ngIf="isloggedIn()"
        class="logout"
        style="cursor: pointer;"
        (click)="lougout()"
        >se deconnecter
      </span>
      <a
        *ngIf="isloggedIn()"
        [ngClass]="{ active: router.url === '/dashboard' }"
        routerLink="/dashboard"
        >dashboard</a
      >
    </nav>
  \`,
  styles: [
    \`
      a,
      .logout {
        text-decoration: none; /* Supprime le soulignement */
        background-color: #3498db; /* Couleur de fond par d\xE9faut */
        color: white; /* Couleur du texte */
        padding: 5px; /* Espacement interne pour un aspect bouton */
        border-radius: 5px; /* Coins arrondis */
        display: inline-block; /* S'assure que les liens respectent le padding */
        transition: background-color 0.3s ease; /* Transition fluide sur le survol */
      }

      a:hover,
      .logout:hover {
        background-color: #2ecc71; /* Couleur de fond au survol */
      }

      .active {
        color: rgb(182, 180, 180) !important; /* Couleur du texte actif */
        font-weight: 600 !important;
      }
    \`,
  ],
})
export class HeadertestComponent implements OnInit {
  constructor(public router: Router, private store: Store) {}
  isloggedIn = signal(false);
  ngOnInit() {
    this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) => this.isloggedIn.set(islog));
  }
  lougout() {
    this.isloggedIn.set(false);
    this.store.dispatch(removeActiveUser());
    this.router.navigate(['/login']);
  }
}`),H(),a()()(),l(51,"span",30),s(52," ______________________________________________________________"),l(53,"span",31),s(54,"cours"),a(),s(55," ______________________________________________________________ "),a(),l(56,"pre"),s(57,`
`),l(58,"strong"),s(59,"Pour se connecter:"),a(),s(60,`  via un evenement (click) dans un formulaire on fait appel a une action dans ngrx:
`),l(61,"strong",32),s(62,"this.store.dispatch(setActiveUser());"),a(),s(63,`

`),l(64,"strong"),s(65,"Pour se d\xE9connecter:"),a(),s(66,`  via un evenement (click) dans le navbar on fait appel a une action dans ngrx:
`),l(67,"strong",32),s(68,"this.store.dispatch(removeActiveUser());"),a(),s(69,`

`),l(70,"strong"),s(71,"Pour afficher/masquer dans le navbar"),a(),s(72,`  les menus: se connecter,se d\xE9connecter,dashboard,
on vois l'\xE9tat de isloggedIn dans le code suivant dans le navbar:
`),l(73,"strong",32),s(74,`
isloggedIn = signal(false);
ngOnInit() {
this.store
.select(selectIsLoggedIn)
.subscribe((islog) => this.isloggedIn.set(islog));
}`),a(),s(75,`

et gr\xE2ce \xE0 la valeur de isloggedIn on peut afficher/masquer : les menus: se connecter,se d\xE9connecter,dashboard,
   `),a()()}if(t&2){let r=tt(16);g(20),ye("ngModel",i.username),g(),I("ngIf",r.submitted&&!i.username),g(4),ye("ngModel",i.password),g(),I("ngIf",r.submitted&&!i.password),g(),I("ngIf",i.errorMessage),g(2),I("disabled",!r.valid),g(12),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked)}},dependencies:[G,te,Pe,Nt,De,Oe,Ot,$t,ke,zt],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};function WN(n,e){if(n&1&&(l(0,"p",3)(1,"strong"),s(2,"Utilisation:"),a(),s(3),a()),n&2){let t=ce();g(3),$(" ",t.utilisation,"")}}function KN(n,e){if(n&1&&(l(0,"div")(1,"strong",4),s(2,"Code:"),a(),l(3,"pre",5),s(4),a()()),n&2){let t=ce();g(4),ge(t.code)}}function QN(n,e){if(n&1&&(l(0,"li"),s(1),a()),n&2){let t=e.$implicit;g(),ge(t)}}function JN(n,e){if(n&1&&(l(0,"strong",3),s(1,"R\xE9sultats :"),a(),l(2,"ul"),N(3,QN,2,1,"li",6),a()),n&2){let t=ce();g(3),I("ngForOf",t.results)}}var yd=class n{results=[];subscription=null;code="";utilisation="";resetResults(){this.results=[],this.subscription?.unsubscribe()}useMap(){this.resetResults(),this.subscription=pe(1,2,3,4).pipe(ve(e=>e*10)).subscribe(e=>this.results.push(e.toString())),this.utilisation="map est une op\xE9ration de base de RxJS qui permet de transformer les \xE9l\xE9ments \xE9mis par un observable en utilisant une fonction de transformation donn\xE9e",this.code=`of(1, 2, 3, 4).pipe(map(x => x * 10))
      .subscribe(value => this.results.push(value.toString()));}`}useScan(){this.resetResults(),this.subscription=He([1,2,3,4]).pipe(Xn((e,t)=>e+t,0)).subscribe(e=>this.results.push(e.toString())),this.utilisation="scan accumule les valeurs comme reduce, mais \xE9met \xE0 chaque \xE9tape",this.code=`from([1, 2, 3, 4])
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`}useReduce(){this.resetResults(),this.subscription=He([1,2,3,4]).pipe(J_((e,t)=>e+t,0)).subscribe(e=>this.results.push(e.toString())),this.utilisation="reduce accumule les valeurs et n \xE9met qu une fois le calcul termin\xE9",this.code=`from([1, 2, 3, 4])
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`}useFlatMap(){this.resetResults(),this.subscription=pe(1,2,3).pipe(sb(e=>pe(`Valeur ${e*2}`))).subscribe(e=>this.results.push(e)),this.utilisation="flatMap Aplatissement d observables imbriqu\xE9s",this.code="of(1, 2, 3)\n      .pipe(flatMap(x => of(`Valeur ${x * 2}`)))\n      .subscribe(value => this.results.push(value));"}useBufferTime(){this.resetResults(),this.subscription=st(500).pipe(W_(2e3),Qe(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferTime Regroupe les valeurs sur une p\xE9riode de temps",this.code=`interval(500)
      .pipe(bufferTime(2000), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useBufferCount(){this.resetResults(),this.subscription=st(500).pipe(H_(3),Qe(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferCount Regroupe les valeurs par lot de 3",this.code=`interval(500)
      .pipe(bufferCount(3), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useBuffer(){this.resetResults();let e=st(2e3);this.subscription=st(500).pipe(G_(e),Qe(5)).subscribe(t=>this.results.push(JSON.stringify(t))),this.utilisation="buffer Stocke les valeurs jusqu \xE0 d\xE9clenchement d un second observable",this.code=`const sub = interval(2000);
    interval(500)
      .pipe(buffer(sub), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`}useBufferToggle(){this.resetResults();let e=st(2e3),t=()=>st(1e3);this.subscription=st(500).pipe(K_(e,t),Qe(5)).subscribe(i=>this.results.push(JSON.stringify(i))),this.utilisation="bufferToggle Active/d\xE9sactive le buffer avec deux observables",this.code=`const sub = interval(2000);
    const closingFn = () => interval(1000);
    interval(500)
      .pipe(bufferToggle(sub, closingFn), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`}useBufferWhen(){this.resetResults(),this.subscription=st(500).pipe(Q_(()=>st(2e3)),Qe(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferWhen Regroupe les valeurs jusqu \xE0 ce qu un observable \xE9mette",this.code=`interval(500)
      .pipe(bufferWhen(() => interval(2000)), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useWindow(){this.resetResults(),this.subscription=st(500).pipe(ub(st(2e3)),Qe(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="window Stocke les valeurs dans des sous-observables",this.code=`interval(500)
      .pipe(window(interval(2000)), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useWindowCount(){this.resetResults(),this.subscription=st(500).pipe(db(3),Qe(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="windowCount Divise en fen\xEAtres de 3 valeurs",this.code=`interval(500)
      .pipe(windowCount(3), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useWindowTime(){this.resetResults(),this.subscription=st(500).pipe(pb(2e3),Qe(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="windowTime Stocke les valeurs par p\xE9riode",this.code=`interval(500)
      .pipe(windowTime(2000), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useConcatMap(){this.resetResults(),this.subscription=He([1,2,3]).pipe(un(e=>pe(`Concat ${e}`).pipe(mm(1e3)))).subscribe(e=>this.results.push(e)),this.utilisation="concatMap Ex\xE9cute les observables un par un dans l ordre",this.code="from([1, 2, 3])\n    .pipe(concatMap(x => of(`Concat ${x}`).pipe(delay(1000)))\n    .subscribe(value => this.results.push(value));"}useExhaustMap(){this.resetResults(),this.subscription=He([1,2,3]).pipe(tb(e=>pe(`Exhaust ${e}`).pipe(mm(1e3)))).subscribe(e=>this.results.push(e)),this.utilisation="exhaustMap Ignore les nouveaux observables si un est d\xE9j\xE0 actif",this.code="from([1, 2, 3])\n      .pipe(exhaustMap(x => of(`Exhaust ${x}`).pipe(delay(1000)))\n      .subscribe(value => this.results.push(value));"}useExpand(){this.resetResults(),this.subscription=pe(2).pipe(nb(e=>e<50?pe(e*2):cn),Qe(10)).subscribe(e=>this.results.push(e.toString())),this.utilisation="expand \xC9met r\xE9cursivement une valeur",this.code=`of(2)
      .pipe(
        expand(x => (x < 50 ? of(x * 2) : EMPTY)),
        take(10)
      )
      .subscribe(value => this.results.push(value.toString()));`}useGroupBy(){this.resetResults(),this.subscription=He([{id:1,category:"A"},{id:2,category:"B"},{id:3,category:"A"},{id:4,category:"B"}]).pipe(ib(e=>e.category)).subscribe(e=>e.subscribe(t=>this.results.push(JSON.stringify(t)))),this.utilisation="groupBy Regroupe les valeurs selon une cl\xE9",this.code=`from([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ])
      .pipe(groupBy(item => item.category))
      .subscribe(group =>
        group.subscribe(value => this.results.push(JSON.stringify(value)));`}usePairwise(){this.resetResults(),this.subscription=st(1e3).pipe(gm(),Qe(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="pairwise \xC9met les valeurs par paire successive",this.code=`interval(1000)
      .pipe(pairwise(), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useMaterialize(){this.resetResults(),this.subscription=pe(1,2,3).pipe(ob()).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="materialize Convertit les notifications en objets",this.code=`of(1, 2, 3)
      .pipe(materialize())
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useDematerialize(){let e={kind:"N",value:"A"},t={kind:"N",value:"B"},i={kind:"E",error:new TypeError("x.toUpperCase is not a function")};pe(e,t,i).pipe(eb()).subscribe({next:c=>this.results.push(c),error:c=>console.error(c)}),this.utilisation="dematerialize Convertit les objets de notifications en valeurs",this.code=`const notifA: NextNotification<string> = { kind: 'N', value: 'A' };
    const notifB: NextNotification<string> = { kind: 'N', value: 'B' };
    const notifE: ErrorNotification = {
      kind: 'E',
      error: new TypeError('x.toUpperCase is not a function'),
    };
    const materialized = of(notifA, notifB, notifE);
    const upperCase = materialized.pipe(dematerialize());
    upperCase.subscribe({
      next: (x) => this.results.push(x),
      error: (e) => console.error(e),
    });`}useToArray(){this.resetResults(),this.subscription=vl(1,10).pipe(X_()).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="toArray Regroupe toutes les valeurs en un tableau",this.code=`range(1, 10)
      .pipe(toArray())
      .subscribe(value => this.results.push(JSON.stringify(value)));`}ngOnDestroy(){this.subscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-rxjs-transformation"]],decls:47,vars:3,consts:[[1,"container"],[1,"btn-group","flex-wrap"],[1,"btn","btn-secondary","me-2","mb-2","rounded",3,"click"],[1,"mt-3"],[1,"mt-4"],[1,"fw-bold","text-danger"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h2"),s(2,"Op\xE9rateurs de transformation RxJS"),a(),l(3,"div",1)(4,"button",2),C("click",function(){return i.useMap()}),s(5," map "),a(),l(6,"button",2),C("click",function(){return i.useScan()}),s(7," scan "),a(),l(8,"button",2),C("click",function(){return i.useReduce()}),s(9," reduce "),a(),l(10,"button",2),C("click",function(){return i.useFlatMap()}),s(11," flatMap "),a(),l(12,"button",2),C("click",function(){return i.useBufferTime()}),s(13," bufferTime "),a(),l(14,"button",2),C("click",function(){return i.useBufferCount()}),s(15," bufferCount "),a(),l(16,"button",2),C("click",function(){return i.useBuffer()}),s(17," buffer "),a(),l(18,"button",2),C("click",function(){return i.useBufferToggle()}),s(19," bufferToggle "),a(),l(20,"button",2),C("click",function(){return i.useBufferWhen()}),s(21," bufferWhen "),a(),l(22,"button",2),C("click",function(){return i.useWindow()}),s(23," window "),a(),l(24,"button",2),C("click",function(){return i.useWindowCount()}),s(25," windowCount "),a(),l(26,"button",2),C("click",function(){return i.useWindowTime()}),s(27," windowTime "),a(),l(28,"button",2),C("click",function(){return i.useConcatMap()}),s(29," concatMap "),a(),l(30,"button",2),C("click",function(){return i.useExhaustMap()}),s(31," exhaustMap "),a(),l(32,"button",2),C("click",function(){return i.useExpand()}),s(33," expand "),a(),l(34,"button",2),C("click",function(){return i.useGroupBy()}),s(35," groupBy "),a(),l(36,"button",2),C("click",function(){return i.usePairwise()}),s(37," pairwise "),a(),l(38,"button",2),C("click",function(){return i.useMaterialize()}),s(39," materialize "),a(),l(40,"button",2),C("click",function(){return i.useDematerialize()}),s(41," dematerialize "),a(),l(42,"button",2),C("click",function(){return i.useToArray()}),s(43," toArray "),a()(),N(44,WN,4,1,"p",3)(45,KN,5,1,"div")(46,JN,4,1),a()),t&2&&(g(44),We(i.utilisation?44:-1),g(),We(i.code?45:-1),g(),We(i.results.length>0?46:-1))},dependencies:[G,Xe],encapsulation:2})};function Ed(n){switch(n.responseType){case"json":return"response"in n?n.response:JSON.parse(n.responseText);case"document":return n.responseXML;case"text":default:return"response"in n?n.response:n.responseText}}var Cd=class{constructor(e,t,i,r="download_load"){this.originalEvent=e,this.xhr=t,this.request=i,this.type=r;let{status:o,responseType:c}=t;this.status=o??0,this.responseType=c??"";let d=t.getAllResponseHeaders();this.responseHeaders=d?d.split(`
`).reduce((v,b)=>{let T=b.indexOf(": ");return v[b.slice(0,T)]=b.slice(T+2),v},{}):{},this.response=Ed(t);let{loaded:p,total:h}=e;this.loaded=p,this.total=h}};var Ja=N_(n=>function(t,i,r){this.message=t,this.name="AjaxError",this.xhr=i,this.request=r,this.status=i.status,this.responseType=i.responseType;let o;try{o=Ed(i)}catch{o=i.responseText}this.response=o}),ZT=(()=>{function n(e,t){return Ja.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this}return n.prototype=Object.create(Ja.prototype),n})();function XN(n,e){return Pn({method:"GET",url:n,headers:e})}function YN(n,e,t){return Pn({method:"POST",url:n,body:e,headers:t})}function ZN(n,e){return Pn({method:"DELETE",url:n,headers:e})}function e3(n,e,t){return Pn({method:"PUT",url:n,body:e,headers:t})}function t3(n,e,t){return Pn({method:"PATCH",url:n,body:e,headers:t})}var n3=ve(n=>n.response);function i3(n,e){return n3(Pn({method:"GET",url:n,headers:e}))}var Pn=(()=>{let n=e=>o3(typeof e=="string"?{url:e}:e);return n.get=XN,n.post=YN,n.delete=ZN,n.put=e3,n.patch=t3,n.getJSON=i3,n})(),r3="upload",ex="download",cv="loadstart",uv="progress",tx="load";function o3(n){return new rt(e=>{var t,i;let r=Object.assign({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},n),{queryParams:o,body:c,headers:d}=r,p=r.url;if(!p)throw new TypeError("url is required");if(o){let J;if(p.includes("?")){let be=p.split("?");if(2<be.length)throw new TypeError("invalid url");J=new URLSearchParams(be[1]),new URLSearchParams(o).forEach((he,R)=>J.set(R,he)),p=be[0]+"?"+J}else J=new URLSearchParams(o),p=p+"?"+J}let h={};if(d)for(let J in d)d.hasOwnProperty(J)&&(h[J.toLowerCase()]=d[J]);let v=r.crossDomain;!v&&!("x-requested-with"in h)&&(h["x-requested-with"]="XMLHttpRequest");let{withCredentials:b,xsrfCookieName:T,xsrfHeaderName:O}=r;if((b||!v)&&T&&O){let J=(i=(t=document?.cookie.match(new RegExp(`(^|;\\s*)(${T})=([^;]*)`)))===null||t===void 0?void 0:t.pop())!==null&&i!==void 0?i:"";J&&(h[O]=J)}let j=s3(c,h),U=Object.assign(Object.assign({},r),{url:p,headers:h,body:j}),F;F=n.createXHR?n.createXHR():new XMLHttpRequest;{let{progressSubscriber:J,includeDownloadProgress:be=!1,includeUploadProgress:he=!1}=n,R=(P,M)=>{F.addEventListener(P,()=>{var w;let wt=M();(w=J?.error)===null||w===void 0||w.call(J,wt),e.error(wt)})};R("timeout",()=>new ZT(F,U)),R("abort",()=>new Ja("aborted",F,U));let E=(P,M)=>new Cd(M,F,U,`${P}_${M.type}`),x=(P,M,w)=>{P.addEventListener(M,wt=>{e.next(E(w,wt))})};he&&[cv,uv,tx].forEach(P=>x(F.upload,P,r3)),J&&[cv,uv].forEach(P=>F.upload.addEventListener(P,M=>{var w;return(w=J?.next)===null||w===void 0?void 0:w.call(J,M)})),be&&[cv,uv].forEach(P=>x(F,P,ex));let D=P=>{let M="ajax error"+(P?" "+P:"");e.error(new Ja(M,F,U))};F.addEventListener("error",P=>{var M;(M=J?.error)===null||M===void 0||M.call(J,P),D()}),F.addEventListener(tx,P=>{var M,w;let{status:wt}=F;if(wt<400){(M=J?.complete)===null||M===void 0||M.call(J);let bi;try{bi=E(ex,P)}catch(Mp){e.error(Mp);return}e.next(bi),e.complete()}else(w=J?.error)===null||w===void 0||w.call(J,P),D(wt)})}let{user:le,method:fe,async:ae}=U;le?F.open(fe,p,ae,le,U.password):F.open(fe,p,ae),ae&&(F.timeout=U.timeout,F.responseType=U.responseType),"withCredentials"in F&&(F.withCredentials=U.withCredentials);for(let J in h)h.hasOwnProperty(J)&&F.setRequestHeader(J,h[J]);return j?F.send(j):F.send(),()=>{F&&F.readyState!==4&&F.abort()}})}function s3(n,e){var t;if(!n||typeof n=="string"||p3(n)||m3(n)||l3(n)||c3(n)||u3(n)||h3(n))return n;if(d3(n))return n.buffer;if(typeof n=="object")return e["content-type"]=(t=e["content-type"])!==null&&t!==void 0?t:"application/json;charset=utf-8",JSON.stringify(n);throw new TypeError("Unknown body type")}var a3=Object.prototype.toString;function dv(n,e){return a3.call(n)===`[object ${e}]`}function l3(n){return dv(n,"ArrayBuffer")}function c3(n){return dv(n,"File")}function u3(n){return dv(n,"Blob")}function d3(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(n)}function p3(n){return typeof FormData<"u"&&n instanceof FormData}function m3(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}function h3(n){return typeof ReadableStream<"u"&&n instanceof ReadableStream}function f3(n,e){if(n&1&&(l(0,"p",2)(1,"strong"),s(2,"Utilisation:"),a(),s(3),a()),n&2){let t=ce();g(3),$(" ",t.utilisation,"")}}function g3(n,e){if(n&1&&(l(0,"div")(1,"strong",3),s(2,"Code:"),a(),l(3,"pre",4),s(4),a()()),n&2){let t=ce();g(4),ge(t.code)}}function v3(n,e){if(n&1&&(l(0,"li"),s(1),a()),n&2){let t=e.$implicit;g(),ge(t)}}function _3(n,e){if(n&1&&(l(0,"strong",2),s(1,"R\xE9sultats :"),a(),l(2,"ul"),N(3,v3,2,1,"li",5),a()),n&2){let t=ce();g(3),I("ngForOf",t.results)}}var wd=class n{results=[];subscription=null;code="";utilisation="";resetResults(){this.results=[],this.subscription?.unsubscribe()}useOf(){this.resetResults(),this.subscription=pe(1,2,3,4,5).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de of pour \xE9mettre des valeurs",this.code=`
    of(1, 2, 3, 4, 5).subscribe(value => this.results.push(value.toString()));`}useFrom(){this.resetResults(),this.subscription=He([10,20,30,40,50]).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de from pour \xE9mettre des valeurs d'un tableau",this.code=`
    from([10, 20, 30, 40, 50]).subscribe((value) =>
      this.results.push(value.toString())
    );`}useInterval(){this.resetResults(),this.subscription=st(1e3).pipe(Qe(5)).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de interval pour d\xE9clencher un \xE9v\xE9nement \xE0 intervalles r\xE9guliers",this.code=`
    interval(1000).pipe(take(5)).subscribe((value) => this.results.push(value.toString()));`}useTimer(){this.resetResults(),this.subscription=$_(5e3,1e3).pipe(Qe(5)).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de timer pour d\xE9clencher un \xE9v\xE9nement apr\xE8s un d\xE9lai",this.code=`
    timer(3000, 1000).pipe(take(5))
    .subscribe((value) => this.results.push(value.toString()));`}useFromEvent(){this.resetResults(),this.subscription=z_(document,"click").subscribe(e=>{this.results.push("Click d\xE9tect\xE9 !"),console.log(e.target)}),this.utilisation="Utilisation de fromEvent pour \xE9couter un \xE9v\xE9nement",this.code=`
    fromEvent(document, 'click').subscribe(() =>
      this.results.push('Click d\xE9tect\xE9 !')
    );`}useAjax(){this.resetResults(),Pn("https://jsonplaceholder.typicode.com/todos/1").pipe(ve(e=>JSON.stringify(e.response))).subscribe(e=>this.results.push(e)),this.utilisation="Utilisation de l'op\xE9rateur ajax pour effectuer une requ\xEAte HTTP",this.code=`
    ajax('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(map((res) => JSON.stringify(res.response)))
    .subscribe((value) => this.results.push(value));`}useDefer(){this.resetResults(),hs(()=>Math.random()>.5?pe("Succ\xE8s"):pe("\xC9chec")).subscribe(e=>this.results.push(e)),this.utilisation="Utilisation de defer pour ex\xE9cuter une fonction de mani\xE8re asynchrone",this.code=`
    defer(() => (Math.random() > 0.5 ? of('Succ\xE8s') : of('\xC9chec'))).subscribe((value) => this.results.push(value));`}useMerge(){this.resetResults();let e=st(2e3).pipe(ve(i=>`A${i}`),Qe(3)),t=st(1e3).pipe(ve(i=>`B${i}`),Qe(5));this.subscription=fs(e,t).subscribe(i=>this.results.push(i)),this.utilisation="Utilisation de merge pour fusionner plusieurs observables",this.code=`
    const obs1$ = interval(2000).pipe(
      map((v) => 'A' + v),
      take(3)
    );
    const obs2$ = interval(1000).pipe(
      map((v) => 'B' + v),
      take(5)
    );
    merge(obs1$, obs2$).subscribe((value) =>
      this.results.push(value)
    );`}useRange(){this.resetResults(),vl(1,10).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de range pour \xE9mettre une s\xE9quence de nombres",this.code=`
    range(1, 10).subscribe((value) => this.results.push(value.toString()));`}ngOnDestroy(){this.subscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-creation-operators"]],decls:25,vars:3,consts:[[1,"container","mt-4"],[1,"btn","btn-success","me-2",3,"click"],[1,"mt-3"],[1,"mt-4"],[2,"font-size","14px"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1"),s(2,"RxJS : Op\xE9rateurs de Cr\xE9ation"),a(),y(3,"hr"),l(4,"button",1),C("click",function(){return i.useOf()}),s(5,"of()"),a(),l(6,"button",1),C("click",function(){return i.useFrom()}),s(7,"from()"),a(),l(8,"button",1),C("click",function(){return i.useInterval()}),s(9," interval() "),a(),l(10,"button",1),C("click",function(){return i.useTimer()}),s(11,"timer()"),a(),l(12,"button",1),C("click",function(){return i.useFromEvent()}),s(13," fromEvent() "),a(),l(14,"button",1),C("click",function(){return i.useAjax()}),s(15,"ajax()"),a(),l(16,"button",1),C("click",function(){return i.useDefer()}),s(17,"defer()"),a(),l(18,"button",1),C("click",function(){return i.useMerge()}),s(19,"merge()"),a(),l(20,"button",1),C("click",function(){return i.useRange()}),s(21,"range()"),a(),N(22,f3,4,1,"p",2)(23,g3,5,1,"div")(24,_3,4,1),a()),t&2&&(g(22),We(i.utilisation?22:-1),g(),We(i.code?23:-1),g(),We(i.results.length>0?24:-1))},dependencies:[G,Xe],encapsulation:2})};var $o=class n{constructor(e){this.http=e}baseURL="http://localhost:3000/products";getProducts(){return this.http.get(this.baseURL)}getProductById(e){return this.http.get(`${this.baseURL}/${e}`)}addProduct(e){return this.http.post(this.baseURL,e)}updateProduct(e){return this.http.put(`${this.baseURL}/${e.id}`,e)}deleteProduct(e){return this.http.delete(`${this.baseURL}/${e}`)}static \u0275fac=function(t){return new(t||n)(oe(en))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})};var Td=class n{constructor(e,t,i){this.activatedRoute=e;this.jsonProductsService=t;this.router=i}product={id:0,name:"",price:0,categoryName:"",description:""};ngOnInit(){let e=Number(this.activatedRoute.snapshot.paramMap.get("id"));this.jsonProductsService.getProductById(e).subscribe(t=>{this.product=t})}updateProduct(){this.jsonProductsService.updateProduct(this.product).subscribe(()=>{alert("Produit mis \xE0 jour !"),this.router.navigate(["/products-json"])})}static \u0275fac=function(t){return new(t||n)(se(_t),se($o),se(Ge))};static \u0275cmp=k({type:n,selectors:[["app-update-product"]],decls:24,vars:4,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1",1),s(2,"Mettre \xE0 jour le produit"),a(),l(3,"div",2)(4,"form",3),C("ngSubmit",function(){return i.updateProduct()}),l(5,"div",4)(6,"label",5),s(7,"Nom"),a(),l(8,"input",6),Ce("ngModelChange",function(o){return Ee(i.product.name,o)||(i.product.name=o),o}),a()(),l(9,"div",4)(10,"label",7),s(11,"Prix"),a(),l(12,"input",8),Ce("ngModelChange",function(o){return Ee(i.product.price,o)||(i.product.price=o),o}),a()(),l(13,"div",4)(14,"label",9),s(15,"Cat\xE9gorie name"),a(),l(16,"input",10),Ce("ngModelChange",function(o){return Ee(i.product.categoryName,o)||(i.product.categoryName=o),o}),a()(),l(17,"div",11)(18,"label",12),s(19,"Description"),a(),l(20,"textarea",13),Ce("ngModelChange",function(o){return Ee(i.product.description,o)||(i.product.description=o),o}),a()(),l(21,"div",14)(22,"button",15),s(23,"Mettre \xE0 jour"),a()()()()()),t&2&&(g(8),ye("ngModel",i.product.name),g(4),ye("ngModel",i.product.price),g(4),ye("ngModel",i.product.categoryName),g(4),ye("ngModel",i.product.description))},dependencies:[G,Pe,Nt,De,pt,Oe,Ot,$t,ke,zt],encapsulation:2})};var b3=["tab1"],y3=["tab2"],E3=["tab32"],C3=["tab4"];function w3(n,e){if(n&1){let t=ee();l(0,"div",37)(1,"div",38)(2,"strong"),s(3),a(),s(4),y(5,"br"),l(6,"em"),s(7),a(),l(8,"div",39)(9,"button",40),C("click",function(){let r=S(t).$implicit,o=ce();return A(o.navigateToUpdatePage(r.id))}),s(10," Modifier "),a(),l(11,"button",41),C("click",function(){let r=S(t).$implicit,o=ce();return A(o.deleteProduct(r.id))}),s(12," Supprimer "),a()()()()}if(n&2){let t=e.$implicit;g(3),ge(t.name),g(),kn(" Prix : ",t.price," \u20AC - Cat\xE9gorie : ",t.categoryName,""),g(3),ge(t.description)}}function T3(n,e){n&1&&(l(0,"span",42),s(1,"copied "),y(2,"i",43),a())}function x3(n,e){n&1&&(l(0,"span",42),s(1,"copied "),y(2,"i",43),a())}function I3(n,e){n&1&&(l(0,"span",42),s(1,"copied "),y(2,"i",43),a())}function S3(n,e){n&1&&(l(0,"span",42),s(1,"copied "),y(2,"i",43),a())}var xd=class n{constructor(e,t){this.jsonProductsService=e;this.router=t}products=[];newProduct={id:0,name:"",price:0,categoryName:"",description:""};ngOnInit(){this.fetchProducts()}fetchProducts(){this.jsonProductsService.getProducts().subscribe(e=>{this.products=e,console.log("data :",e)})}addProduct(){let e=this.products.length>0?Math.max(...this.products.map(i=>i.id))+1:1,t=we(K({},this.newProduct),{id:e});this.jsonProductsService.addProduct(t).subscribe(i=>{this.products.push(i),this.newProduct={id:0,name:"",price:0,categoryName:"",description:""}})}navigateToUpdatePage(e){this.router.navigate(["/updateproduct-json",e])}deleteProduct(e){this.jsonProductsService.deleteProduct(e).subscribe(()=>{this.products=this.products.filter(t=>t.id!==e)})}infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab32");infoTab4=z("tab4");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab4()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se($o),se(Ge))};static \u0275cmp=k({type:n,selectors:[["app-products"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,b3,5),q(i.infoTab2,y3,5),q(i.infoTab3,E3,5),q(i.infoTab4,C3,5)),t&2&&ne(4)},decls:81,vars:9,consts:[["tab1",""],["tab2",""],["tab3",""],["tab4",""],[1,"container"],[1,"mb-4"],[1,"card-header"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap",4,"ngFor","ngForOf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","flex-wrap"],[1,"card","d-flex","flex-column","mb-4","p-2"],[1,"mt-2"],[1,"btn","btn-sm","btn-warning","me-2",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",4)(1,"h1"),s(2,"Crud avec api json"),a(),y(3,"hr"),l(4,"p"),s(5,"Dans ce cours, nous allons voir comment effectuer les op\xE9rations CRUD (Create, Read, Update, Delete) dans une application Angular en utilisant une API REST JSON cr\xE9\xE9 par node js. Nous utiliserons HttpClient pour communiquer avec cette API distante (JSON Server)."),a(),l(6,"p"),s(7,"(voir d\xE9marche \xE0 suivre)"),a(),y(8,"hr"),l(9,"h3",5),s(10,"Gestion des Produits"),a(),l(11,"p"),s(12,"Pour que \xE7a marche, il faur d\xE9marrer le serveur json"),a(),l(13,"div",5)(14,"div",6),s(15,"Ajouter un produit"),a(),l(16,"div",7)(17,"form",8),C("ngSubmit",function(){return S(r),A(i.addProduct())}),l(18,"div",9)(19,"label",10),s(20,"Nom"),a(),l(21,"input",11),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.name,c)||(i.newProduct.name=c),A(c)}),a()(),l(22,"div",9)(23,"label",12),s(24,"Prix"),a(),l(25,"input",13),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.price,c)||(i.newProduct.price=c),A(c)}),a()(),l(26,"div",9)(27,"label",14),s(28,"Cat\xE9gorie name"),a(),l(29,"input",15),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.categoryName,c)||(i.newProduct.categoryName=c),A(c)}),a()(),l(30,"div",16)(31,"label",17),s(32,"Description"),a(),l(33,"textarea",18),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.description,c)||(i.newProduct.description=c),A(c)}),a()(),l(34,"div",19)(35,"button",20),s(36,"Ajouter"),a()()()()(),l(37,"div")(38,"h3"),s(39,"Liste des Produits"),a(),y(40,"hr"),l(41,"div",21),N(42,w3,13,4,"div",22),a()(),l(43,"ul",23)(44,"li",24)(45,"button",25),s(46," jsonproducts.component.ts "),a()(),l(47,"li",24)(48,"button",26),s(49," jsonupdateproduct.component.ts "),a()(),l(50,"li",24)(51,"button",27),s(52," jsonproducts.service.ts "),a()(),l(53,"li",24)(54,"button",28),s(55," D\xE9marche \xE0 suivre "),a()()(),l(56,"div",29)(57,"div",30)(58,"i",31),C("click",function(){return S(r),A(i.copy1())}),a(),N(59,T3,3,0,"span",32),l(60,"pre",33,0),W(),s(62,`import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { Component, OnInit } from '@angular/core';
import { Product, JsonProductsService } from '../../../services/http/json/jsonproducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container mt-4">
      <h1 class="text-center mb-4">Gestion des Produits</h1>
      <!-- Ajouter un produit -->
      <div class="mb-4">
        <div class="card-header">Ajouter un produit</div>
        <div class="card-body">
          <form (ngSubmit)="addProduct()" class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Nom</label>
              <input
                type="text"
                id="name"
                class="form-control"
                [(ngModel)]="newProduct.name"
                name="name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label">Prix</label>
              <input
                type="number"
                id="price"
                class="form-control"
                [(ngModel)]="newProduct.price"
                name="price"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="categoryName" class="form-label">Cat\xE9gorie name</label>
              <input
                type="text"
                id="categoryName"
                class="form-control"
                [(ngModel)]="newProduct.categoryName"
                name="categoryName"
                required
              />
            </div>
            <div class="col-md-12">
              <label for="description" class="form-label">Description</label>
              <textarea
                id="description"
                class="form-control"
                [(ngModel)]="newProduct.description"
                name="description"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-success">Ajouter</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Liste des produits -->
      <div >
        <h3> Liste des Produits</h3>
        <hr>
        <div class="row">
        <div
          *ngFor="let product of products"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap"
        >
          <div class="card d-flex flex-column mb-4 p-2">
            <strong>{{ product.name }}</strong>
            Prix : {{ product.price }} \u20AC - Cat\xE9gorie : {{ product.categoryName }}<br />
            <em>{{ product.description }}</em>
            <div class="mt-2">
              <button
                class="btn btn-sm btn-warning me-2"
                (click)="navigateToUpdatePage(product.id)"
              >
                Modifier
              </button>
              <button
                class="btn btn-sm btn-danger"
                (click)="deleteProduct(product.id)"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  styles: [],
})
export class JsonProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  };

  constructor(
    private jsonProductsService: JsonProductsService,
    private router: Router // Injecter le Router
  ) {}
// Recuperation des produits lors de l'initialisation du composant
  ngOnInit(): void {
    this.fetchProducts();
  }
// Recuperation des produits via le service et affichage des produits dans le template
  fetchProducts(): void {
    this.jsonProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('data :', data);
    });
  }
//preparation du produit \xE0 envoyer au service pour ajout dans la base de donn\xE9es
  addProduct(): void {
    const newId =
      this.products.length > 0
        ? Math.max(...this.products.map((p) => p.id)) + 1
        : 1;
    const productToAdd = { ...this.newProduct, id: newId };
// envoie du produit via le service
    this.jsonProductsService.addProduct(productToAdd).subscribe((product) => {
      this.products.push(product); //reaffichage des produits avec le nouveau ajout\xE9
      // Reinitialisation du formailre
      // ou  this.fetchProducts();
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        categoryName: '',
        description: '',
      };
    });
  }
// Redirection vers la page de mise \xE0 jour
  navigateToUpdatePage(productId: number): void {
    // Rediriger vers la page de mise \xE0 jour
    this.router.navigate(['/updateproduct-json', productId]);
  }
// Suppression d'un produit via le service et reaffichage des produits sans le produit supprim\xE9
  deleteProduct(id: number): void {
    this.jsonProductsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id); //reaffichage des produits sans le produit supprim\xE9
      // ou  this.fetchProducts();
    });
  }
}`),H(),a()(),l(63,"div",34)(64,"i",31),C("click",function(){return S(r),A(i.copy2())}),a(),N(65,x3,3,0,"span",32),l(66,"pre",33,1),W(),s(68,`import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonProductsService } from '../../../services/http/json/jsonproducts.service';
import { Product } from '../../../services/http/json/jsonproducts.service';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container mt-4">
      <h1 class="text-center mb-4">Mettre \xE0 jour le produit</h1>
      <div class="card-body">
        <form (ngSubmit)="updateProduct()" class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nom</label>
            <input
              type="text"
              id="name"
              class="form-control"
              [(ngModel)]="product.name"
              name="name"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="price" class="form-label">Prix</label>
            <input
              type="number"
              id="price"
              class="form-control"
              [(ngModel)]="product.price"
              name="price"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="categoryName" class="form-label">Cat\xE9gorie name</label>
            <input
              type="text"
              id="categoryName"
              class="form-control"
              [(ngModel)]="product.categoryName"
              name="categoryName"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              class="form-control"
              [(ngModel)]="product.description"
              name="description"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">Mettre \xE0 jour</button>
          </div>
        </form>
      </div>
    </div>
  \`,
  styles: [],
})
export class JsonUpdateProductComponent implements OnInit {
  // Initialisation d'un produit vide
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  };

  // Injection des d\xE9pendances
  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonProductsService: JsonProductsService,
    private router: Router
  ) {}

  // R\xE9cup\xE9rer le produit par ID lors de l'initialisation du composant
  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.jsonProductsService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  // Mettre \xE0 jour le produit et rediriger vers la liste des produits apr\xE8s mise \xE0 jour
  updateProduct(): void {
    this.jsonProductsService.updateProduct(this.product).subscribe(() => {
      alert('Produit mis \xE0 jour !');
      this.router.navigate(['/products-json']); // Redirection vers la liste des produits apr\xE8s mise \xE0 jour
    });
  }
}`),H(),a()(),l(69,"div",35)(70,"i",31),C("click",function(){return S(r),A(i.copy3())}),a(),N(71,I3,3,0,"span",32),l(72,"pre",33,2),W(),s(74,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryName: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class JsonProductsService {
  // URL de l'API
  private baseURL = 'http://localhost:3000/products';

  // Injecter le service HttpClient
  constructor(private http: HttpClient) {}

  // R\xE9cup\xE9rer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
  // R\xE9cup\xE9rer un produit par ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(d\`\${this.baseURL}/\${id}d\`);
  }

  // Ajouter un produit
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  // Modifier un produit
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(d\`\${this.baseURL}/\${product.id}d\`, product);
  }

  // Supprimer un produit
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(d\`\${this.baseURL}/\${id}d\`);
  }
}`),H(),a()(),l(75,"div",36)(76,"i",31),C("click",function(){return S(r),A(i.copy4())}),a(),N(77,S3,3,0,"span",32),l(78,"pre",33,3),W(),s(80,`1. Cr\xE9er un dossier back-end-json \xE0 la racine du projet.

2. Initialiser le dossier avec npm init -y.

3. Installer json-server avec npm install json-server.

4. Cr\xE9er un fichier db.json dans le m\xEAme dossier avec le contenu suivant :
(voir db.json).

5. Cr\xE9er un fichier server.js dans le m\xEAme dossier avec le contenu suivant :
(voir server.js).

6. D\xE9marrer le serveur avec node server.js.

7. Cr\xE9er un service Angular avec la commande :
ng generate service services/http/json/jsonproducts, et avec le contenu suivant:  (voir jsonproducts.service.ts).

8. Cr\xE9er un composant Angular avec la commande pour la gestion des produits :
ng generate component pages/tests/json/jsonproducts, et avec le contenu suivant:  (voir jsonproducts.component.ts).

9. Cr\xE9er un composant Angular avec la commande pour la mise \xE0 jour des produits : ng generate component pages/tests/json/jsonupdateproduct,
 et avec le contenu suivant:  (voir jsonupdateproduct.component.ts).`),H(),a()()()()}t&2&&(g(21),ye("ngModel",i.newProduct.name),g(4),ye("ngModel",i.newProduct.price),g(4),ye("ngModel",i.newProduct.categoryName),g(4),ye("ngModel",i.newProduct.description),g(9),I("ngForOf",i.products),g(17),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,Xe,te,Pe,Nt,De,pt,Oe,Ot,$t,ke,zt],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Go=class n{constructor(e){this.http=e}apiUrl="http://localhost:5000/api/products";getProducts(){return this.http.get(this.apiUrl).subscribe(e=>{console.log("Donn\xE9es re\xE7ues dans le service :",e)}),this.http.get(this.apiUrl)}addProduct(e){return this.http.post(this.apiUrl,e)}updateProduct(e,t){return this.http.put(`${this.apiUrl}/${e}`,t)}deleteProduct(e){return this.http.delete(`${this.apiUrl}/${e}`)}static \u0275fac=function(t){return new(t||n)(oe(en))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})};var A3=["tab1"],P3=["tab2"],R3=["tab3"],D3=["tab4"],k3=["tab5"],M3=n=>["/update-node",n];function O3(n,e){if(n&1){let t=ee();l(0,"div",39)(1,"div",40)(2,"div",41)(3,"strong"),s(4),a(),l(5,"p"),s(6),a(),l(7,"span",42),s(8),a(),l(9,"p")(10,"strong"),s(11,"Categorie: "),a(),s(12),a()(),l(13,"button",43),C("click",function(){let r=S(t).$implicit,o=ce();return A(o.deleteProduct(r._id))}),s(14," Delete "),a(),l(15,"button",44),s(16," Update "),a()()()}if(n&2){let t=e.$implicit;g(4),ge(t.nom),g(2),ge(t.description),g(2),$("",t.prix," $"),g(4),ge(t.categorie_nom),g(3),I("routerLink",Mn(5,M3,t._id))}}function N3(n,e){n&1&&(l(0,"span",45),s(1,"copied "),y(2,"i",46),a())}function V3(n,e){n&1&&(l(0,"span",45),s(1,"copied "),y(2,"i",46),a())}function F3(n,e){n&1&&(l(0,"span",45),s(1,"copied "),y(2,"i",46),a())}function L3(n,e){n&1&&(l(0,"span",45),s(1,"copied "),y(2,"i",46),a())}function U3(n,e){n&1&&(l(0,"span",45),s(1,"copied "),y(2,"i",46),a())}var Id=class n{constructor(e){this.productService=e}products=[];newProduct={nom:"",description:"",prix:0,categorie_nom:""};ngOnInit(){this.fetchProducts()}fetchProducts(){this.productService.getProducts().subscribe(e=>{this.products=e})}addProduct(){this.productService.addProduct(this.newProduct).subscribe(e=>{console.log("value :",e),this.fetchProducts()})}deleteProduct(e){this.productService.deleteProduct(e).subscribe(()=>{this.fetchProducts()})}infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab3");infoTab4=z("tab4");infoTab5=z("tab5");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab4()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy5(){let e=this.infoTab5()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(Go))};static \u0275cmp=k({type:n,selectors:[["app-products"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,A3,5),q(i.infoTab2,P3,5),q(i.infoTab3,R3,5),q(i.infoTab4,D3,5),q(i.infoTab5,k3,5)),t&2&&ne(5)},decls:117,vars:10,consts:[["tab1",""],["tab2",""],["tab3",""],["tab4",""],["tab5",""],["tab6",""],[1,"container","mt-3"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"my-4"],[1,"form-group"],["for","productName"],["id","productName","type","text","placeholder","Enter product name",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","mt-2"],["for","productDescription"],["id","productDescription","type","text","placeholder","Enter product description",1,"form-control",3,"ngModelChange","ngModel"],["for","productPrix"],["id","productPrix","type","number","placeholder","Enter product price",1,"form-control",3,"ngModelChange","ngModel"],["for","productCategory"],["id","productCategory","type","text","placeholder","Enter product category",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-success","mt-2",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","false",1,"nav-link"],["id","c5-tab","data-bs-toggle","tab","data-bs-target","#c5","type","button","role","tab","aria-controls","c5","aria-selected","false",1,"nav-link"],["id","c6-tab","data-bs-toggle","tab","data-bs-target","#c6","type","button","role","tab","aria-controls","c6","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c5","role","tabpanel","aria-labelledby","c5-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c6","role","tabpanel","aria-labelledby","c6-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","d-flex","justify-content-center"],[1,"card","p-2",2,"width","18rem","height","100%"],[1,"card-body"],[1,"badge","bg-primary"],[1,"btn","btn-danger","btn-sm","mt-2",3,"click"],[1,"btn","btn-warning","btn-sm","mt-2",3,"routerLink"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",6)(1,"h1"),s(2,"crud-angular-nodejs-mongodb"),a(),y(3,"hr"),l(4,"p"),s(5,"(Voir d\xE9marche \xE0 suivre en bas)"),a(),l(6,"p"),s(7,"Dans ce cours, vous apprendrez \xE0 construire une application compl\xE8te avec Angular, un backend Node.js/Express et une base de donn\xE9es MongoDB. Vous d\xE9velopperez un syst\xE8me CRUD (Create, Read, Update, Delete) permettant de g\xE9rer des produits."),a(),l(8,"p"),s(9,"Avant tout pour tester, il faut demarrer le serveur node js et se connecter a mongodb"),a(),y(10,"hr"),l(11,"h3"),s(12,"Liste des Produits"),a(),l(13,"div",7),N(14,O3,17,7,"div",8),a(),l(15,"div",9)(16,"h3"),s(17,"Add Product"),a(),l(18,"div",10)(19,"label",11),s(20,"Nom"),a(),l(21,"input",12),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.nom,c)||(i.newProduct.nom=c),A(c)}),a()(),l(22,"div",13)(23,"label",14),s(24,"Description"),a(),l(25,"input",15),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.description,c)||(i.newProduct.description=c),A(c)}),a()(),l(26,"div",13)(27,"label",16),s(28,"Prix"),a(),l(29,"input",17),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.prix,c)||(i.newProduct.prix=c),A(c)}),a()(),l(30,"div",13)(31,"label",18),s(32,"Categorie"),a(),l(33,"input",19),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.categorie_nom,c)||(i.newProduct.categorie_nom=c),A(c)}),a()(),l(34,"button",20),C("click",function(){return S(r),A(i.addProduct())}),s(35,"Add"),a()(),l(36,"ul",21)(37,"li",22)(38,"button",23),s(39," ProductsComponent.ts "),a()(),l(40,"li",22)(41,"button",24),s(42," UpdateProductComponent.ts "),a()(),l(43,"li",22)(44,"button",25),s(45," ProductService.ts "),a()(),l(46,"li",22)(47,"button",26),s(48," server.js "),a()(),l(49,"li",22)(50,"button",27),s(51," insertProducts.js "),a()(),l(52,"li",22)(53,"button",28),s(54," D\xE9marche \xE0 suivre "),a()()(),l(55,"div",29)(56,"div",30)(57,"i",31),C("click",function(){return S(r),A(i.copy1())}),a(),N(58,N3,3,0,"span",32),l(59,"pre",33,0),W(),s(61,`import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  ProductService,
} from '../../../services/http/apinodejs/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, RouterLink],
  template: \`
    <div class="container mt-3">
      <h1>crud-angular-nodejs-mongodb</h1>
      <hr />
      <h3>Products</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2 " style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p><strong>Categorie: </strong>{{ product.categorie_nom }}</p>
            </div>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product._id!)"
            >
              Delete
            </button>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-node', product._id]"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h3>Add Product</h3>

        <div class="form-group">
          <label for="productName">Nom</label>
          <input
            id="productName"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            placeholder="Enter product name"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productDescription">Description</label>
          <input
            id="productDescription"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.description"
            placeholder="Enter product description"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productPrix">Prix</label>
          <input
            id="productPrix"
            type="number"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            placeholder="Enter product price"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productCategory">Categorie</label>
          <input
            id="productCategory"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            placeholder="Enter product category"
          />
        </div>

        <button class="btn btn-success mt-2" (click)="addProduct()">Add</button>
      </div>
    </div>
  \`,
  styles: [],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((value) => {
      console.log('value :', value);
      this.fetchProducts();
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }
}`),H(),a()(),l(62,"div",34)(63,"i",31),C("click",function(){return S(r),A(i.copy2())}),a(),N(64,V3,3,0,"span",32),l(65,"pre",33,1),W(),s(67,`import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/http/apinodejs/product.service';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container mt-4">
      <h2>Update Product</h2>

      <div class="form-group">
        <label for="productName">Nom</label>
        <input
          id="productName"
          type="text"
          class="form-control"
          [(ngModel)]="product.nom"
          placeholder="Enter product name"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productDescription">Description</label>
        <input
          id="productDescription"
          type="text"
          class="form-control"
          [(ngModel)]="product.description"
          placeholder="Enter product description"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productPrix">Prix</label>
        <input
          id="productPrix"
          type="number"
          class="form-control"
          [(ngModel)]="product.prix"
          placeholder="Enter product price"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productCategory">Categorie</label>
        <input
          id="productCategory"
          type="text"
          class="form-control"
          [(ngModel)]="product.categorie_nom"
          placeholder="Enter product category"
        />
      </div>

      <button class="btn btn-success mt-2" (click)="updateProduct()">
        Save
      </button>
    </div>
  \`,
  styles: [],
})
export class UpdateProductComponent implements OnInit {
  product: any = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProducts().subscribe((products) => {
        const foundProduct = products.find((prod) => prod._id === productId);
        if (foundProduct) {
          this.product = foundProduct;
        }
      });
    }
  }

  updateProduct(): void {
    if (this.product._id) {
      this.productService
        .updateProduct(this.product._id, this.product)
        .subscribe({
          next: () => {
            alert('Produit mis \xE0 jour avec succ\xE8s !');
            this.router.navigate(['/products-node']); // Redirection vers la liste des produits
          },
          error: (error) => {
            console.error('Erreur lors de la mise \xE0 jour du produit :', error);
          },
        });
    }
  }
}`),H(),a()(),l(68,"div",35)(69,"i",31),C("click",function(){return S(r),A(i.copy3())}),a(),N(70,F3,3,0,"span",32),l(71,"pre",33,2),W(),s(73,`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string; // L'identifiant est optionnel (g\xE9n\xE9r\xE9 automatiquement pour les nouveaux produits)
  nom: string; // Nom du produit
  description: string; // Description du produit
  prix: number; // Prix du produit
  categorie_nom: string; // Nom de la cat\xE9gorie
}

@Injectable({
  providedIn: 'root', // Rend ce service disponible partout dans l'application
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  /**
   * R\xE9cup\xE8re tous les produits
   * @returns Un tableau de produits sous forme d'Observable
   */
  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>(this.apiUrl).subscribe((data) => {
      // console.log("Donn\xE9es re\xE7ues dans le service :", data);
    });
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Ajoute un nouveau produit
   * @param product Les d\xE9tails du produit \xE0 ajouter
   * @returns Le produit ajout\xE9 sous forme d'Observable
   */
  addProduct(product: Product): Observable<Product> {
    // this.http.post<Product>(this.apiUrl, product).subscribe((data) => {
    //   console.log("Produit ajout\xE9 :", data);
    // });
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * Met \xE0 jour un produit existant
   * @param id L'identifiant du produit \xE0 mettre \xE0 jour
   * @param product Les nouvelles donn\xE9es du produit
   * @returns Le produit mis \xE0 jour sous forme d'Observable
   */
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(\`\${this.apiUrl}/\${id}\`, product);
  }

  /**
   * Supprime un produit
   * @param id L'identifiant du produit \xE0 supprimer
   * @returns Un Observable indiquant la suppression
   */
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}`),H(),a()(),l(74,"div",36)(75,"i",31),C("click",function(){return S(r),A(i.copy4())}),a(),N(76,L3,3,0,"span",32),l(77,"pre",33,3),W(),s(79,`const express = require("express"); // Importation du framework Express pour cr\xE9er le serveur
const mongoose = require("mongoose"); // Importation de Mongoose pour interagir avec MongoDB
const cors = require("cors"); // Importation de CORS pour permettre les requ\xEAtes cross-origin (entre frontend et backend)

const app = express(); // Cr\xE9ation de l'application Express
const PORT = 5000; // D\xE9finition du port sur lequel le serveur \xE9coutera

// Middleware pour activer CORS (autorise les requ\xEAtes depuis d'autres domaines)
app.use(cors());
// Middleware pour parser les requ\xEAtes en JSON (utilis\xE9 pour recevoir des donn\xE9es au format JSON dans les requ\xEAtes HTTP)
app.use(express.json());

// Connexion \xE0 MongoDB via Mongoose
mongoose
  .connect(
    "mongodb+srv://elobayidoumaima:Stlr6cghlKkOgIOb@cluster0.aaf20.mongodb.net/mydbase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // Utilise l'analyseur d'URL pour une connexion MongoDB plus r\xE9cente
      useUnifiedTopology: true, // Permet d'utiliser le nouveau moteur de gestion des connexions
    }
  )
  .then(() => console.log("Connected to MongoDB")) // Confirmation si la connexion r\xE9ussit
  .catch((err) => console.error("Error connecting to MongoDB:", err)); // Affiche l'erreur si la connexion \xE9choue

// Sch\xE9ma pour la collection des produits (d\xE9finition de la structure des donn\xE9es dans MongoDB)
const productSchema = new mongoose.Schema({
  nom: { type: String, required: true }, // Nom du produit, obligatoire
  description: { type: String }, // Description du produit, optionnelle
  prix: { type: Number, required: true }, // Prix du produit, obligatoire
  categorie_nom: { type: String }, // Cat\xE9gorie du produit, optionnelle
});

// Mod\xE8le Mongoose bas\xE9 sur le sch\xE9ma de produit
const Product = mongoose.model("Product", productSchema);

// Routes API

// Route pour r\xE9cup\xE9rer tous les produits (GET)
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // R\xE9cup\xE8re tous les documents de la collection "products"
    res.json(products); // Renvoie les produits au format JSON
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" }); // Erreur si la r\xE9cup\xE9ration \xE9choue
  }
});

// Route pour ajouter un nouveau produit (POST)
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body); // Cr\xE9e un nouveau produit avec les donn\xE9es re\xE7ues dans la requ\xEAte
    const savedProduct = await product.save(); // Sauvegarde le produit dans la base de donn\xE9es
    res.json(savedProduct); // Renvoie le produit sauvegard\xE9
  } catch (err) {
    res.status(500).json({ message: "Error saving product" }); // Erreur si l'ajout \xE9choue
  }
});

// Route pour mettre \xE0 jour un produit existant (PUT)
app.put("/api/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // Identifiant du produit \xE0 mettre \xE0 jour
      req.body, // Donn\xE9es mises \xE0 jour
      { new: true } // Retourne le document mis \xE0 jour
    );
    res.json(updatedProduct); // Renvoie le produit mis \xE0 jour
  } catch (err) {
    res.status(500).json({ message: "Error updating product" }); // Erreur si la mise \xE0 jour \xE9choue
  }
});

// Route pour supprimer un produit (DELETE)
app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id); // Supprime le produit par son identifiant
    res.json({ message: "Product deleted" }); // Renvoie un message de confirmation
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" }); // Erreur si la suppression \xE9choue
  }
});

// D\xE9marrage du serveur
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`); // Message dans la console confirmant que le serveur est en marche
});`),H(),a()(),l(80,"div",37)(81,"i",31),C("click",function(){return S(r),A(i.copy5())}),a(),N(82,U3,3,0,"span",32),l(83,"pre",33,4),W(),s(85,`const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://elobayidoumaima:Stlr6cghlKkOgIOb@cluster0.aaf20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // Remplacez par votre cha\xEEne de connexion MongoDB
const client = new MongoClient(uri);

const products = [
  {
    nom: "Smartphone",
    description: "Un smartphone performant avec \xE9cran AMOLED.",
    prix: 799.99,
    categorie_nom: "\xC9lectronique",
  },
  {
    nom: "Ordinateur portable",
    description: "Un ordinateur l\xE9ger et puissant.",
    prix: 1299.99,
    categorie_nom: "\xC9lectronique",
  },
  {
    nom: "Table basse",
    description: "Table en bois massif, id\xE9ale pour le salon.",
    prix: 199.99,
    categorie_nom: "Mobilier",
  },
  {
    nom: "Lampe de bureau",
    description: "Lampe LED moderne avec bras articul\xE9.",
    prix: 49.99,
    categorie_nom: "Mobilier",
  },
];

async function run() {
  try {
    await client.connect();
    console.log("Connect\xE9 \xE0 MongoDB");

    const db = client.db("mydbase");
    const collection = db.collection("products");

    const result = await collection.insertMany(products);
    console.log(\`\${result.insertedCount} produits ins\xE9r\xE9s.\`);
  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    await client.close();
  }
}

run();

          `),H(),a()(),l(86,"div",38)(87,"pre",33,5),W(),s(89,"Avant tout: se connecter \xE0 MongoDB Atlas et cr\xE9er une base de donn\xE9es nomm\xE9e "),l(90,"strong"),s(91,"mydbase"),a(),s(92," et une collection nomm\xE9e "),l(93,"strong"),s(94,"products"),a(),s(95,`.
et recup\xE9rer la cha\xEEne de connexion.

1. Cr\xE9er le dossier back-end-node pour le serveur Node.js \xE0 la racine du projet.

2. Dans le dossier back-end-node initialiser avec la commande : `),l(96,"strong"),s(97,"npm init -y"),a(),s(98,`.

3. Installer les d\xE9pendances n\xE9cessaires avec la commande : `),l(99,"strong"),s(100,"npm install express mongoose cors body-parser"),a(),s(101,`.
    \u2022	express : Framework pour cr\xE9er des routes.
    \u2022	mongoose : ORM pour interagir avec MongoDB.
    \u2022	cors : Pour autoriser les requ\xEAtes entre le frontend et le backend.
    \u2022	body-parser : Pour parser les requ\xEAtes JSON.

4. Cr\xE9er un fichier server.js pour le serveur Node.js.

5. Y mettre le code du serveur server.js.

6. Lancer le serveur Node.js avec la commande : `),l(102,"strong"),s(103,"node server.js"),a(),s(104,`.

7. Lancer le ficher insertProducts.js pour ins\xE9rer des produits dans la base de donn\xE9es avec la commande : `),l(105,"strong"),s(106,"node insertProducts.js"),a(),s(107,`.
   ou ins\xE9rer les produits manuellement dans MongoDB Compass.

8. Cr\xE9er le dossier services/http/apinodejs pour les services Angular.

9. Cr\xE9er un service ProductService pour les appels HTTP. voir ProductService.ts.

10. Cr\xE9er un composant ProductsComponent pour afficher les produits. voir ProductsComponent.ts.

11. Cr\xE9er un composant UpdateProductComponent pour mettre \xE0 jour un produit. voir UpdateProductComponent.ts.

12. configurer HttpClient dans app.config.ts:
    `),l(108,"strong"),s(109,`export const appConfig: ApplicationConfig = {
      providers: [
        provideHttpClient(withFetch()),
        ...
      `),a(),s(110,`
13. Ajouter les routes dans app-route.ts:
    `),l(111,"strong"),s(112,`
      { path: 'products-node', component: ProductsComponent },
      { path: 'update-node/:id', component:UpdateProductComponent },
    `),a(),s(113,`
14. demarrer l'application avec la commande : `),l(114,"strong"),s(115,"ng serve"),a(),s(116,"."),H(),a()()()()}t&2&&(g(14),I("ngForOf",i.products),g(7),ye("ngModel",i.newProduct.nom),g(4),ye("ngModel",i.newProduct.description),g(4),ye("ngModel",i.newProduct.prix),g(4),ye("ngModel",i.newProduct.categorie_nom),g(25),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[Pe,De,pt,Oe,ke,G,Xe,te,Mi],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var j3=["tab1"],B3=["tab2"],q3=["tab3"],z3=["tab4"],$3=n=>["/update-product-firebase",n];function G3(n,e){if(n&1){let t=ee();l(0,"div",33)(1,"div",34)(2,"div",35)(3,"strong"),s(4),a(),l(5,"p"),s(6),a(),l(7,"span",36),s(8),a(),l(9,"p")(10,"strong"),s(11,"Cat\xE9gorie: "),a(),s(12),a()(),l(13,"button",37),s(14," Modifier "),a(),l(15,"button",38),C("click",function(){let r=S(t).$implicit,o=ce();return A(o.deleteProduct(r.id))}),s(16," Supprimer "),a()()()}if(n&2){let t=e.$implicit;g(4),ge(t.nom),g(2),ge(t.description||"Pas de description"),g(2),$("",t.prix," $"),g(4),$("",t.categorie_nom||"Non d\xE9finie"," "),g(),I("routerLink",Mn(5,$3,t.id))}}function H3(n,e){n&1&&(l(0,"span",39),s(1,"copied "),y(2,"i",40),a())}function W3(n,e){n&1&&(l(0,"span",39),s(1,"copied "),y(2,"i",40),a())}function K3(n,e){n&1&&(l(0,"span",39),s(1,"copied "),y(2,"i",40),a())}function Q3(n,e){n&1&&(l(0,"span",39),s(1,"copied "),y(2,"i",40),a())}var Sd=class n{constructor(e,t){this.firestoreService=e;this.router=t;this.fetchProducts()}products=[];newProduct={nom:"",description:"",prix:0,categorie_nom:""};addProduct(){if(!this.newProduct.nom||this.newProduct.prix<=0){console.error("Les champs obligatoires ne sont pas remplis.");return}this.firestoreService.addDocument("angproducts",this.newProduct).then(()=>{console.log("Produit ajout\xE9 avec succ\xE8s !"),this.fetchProducts(),this.resetForm()}).catch(e=>{console.error("Erreur lors de l'ajout du produit :",e)})}resetForm(){this.newProduct={nom:"",description:"",prix:0,categorie_nom:""}}fetchProducts(){this.firestoreService.getDocuments("angproducts").subscribe({next:e=>{this.products=e,console.log("Produits r\xE9cup\xE9r\xE9s :",e)},error:e=>{console.error("Erreur lors de la r\xE9cup\xE9ration des produits :",e)}})}deleteProduct(e){e&&this.firestoreService.deleteDocument("angproducts",e).then(()=>{console.log("Produit supprim\xE9 :",e),this.fetchProducts()}).catch(t=>{console.error("Erreur lors de la suppression du produit :",t)})}infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab3");infoTab4=z("tab4");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(Bo),se(Ge))};static \u0275cmp=k({type:n,selectors:[["app-productsFirebase"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,j3,5),q(i.infoTab2,B3,5),q(i.infoTab3,q3,5),q(i.infoTab4,z3,5)),t&2&&ne(4)},decls:74,vars:10,consts:[["productForm","ngForm"],["tab1",""],["tab2",""],["tab3",""],["tab4",""],[1,"container","mt-3"],[1,"mb-4",3,"ngSubmit"],[1,"mb-3"],["for","nom",1,"form-label"],["type","text","id","nom","name","nom","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","description",1,"form-label"],["id","description","name","description",1,"form-control",3,"ngModelChange","ngModel"],["for","prix",1,"form-label"],["type","number","id","prix","name","prix","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categorie_nom",1,"form-label"],["type","text","id","categorie_nom","name","categorie_nom",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center",4,"ngFor","ngForOf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","d-flex","justify-content-center"],[1,"card","p-2",2,"width","18rem","height","100%"],[1,"card-body"],[1,"badge","bg-primary"],[1,"btn","btn-warning","btn-sm","mt-2",3,"routerLink"],[1,"btn","btn-danger","btn-sm","mt-2",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",5)(1,"h1"),s(2,"CRUD avec Api firebase"),a(),y(3,"hr"),l(4,"p"),s(5,"Dans ce cours, vous allez apprendre \xE0 connecter une application Angular avec Firebase, une plateforme Backend-as-a-Service de Google. Nous allons voir comment cr\xE9er, lire, mettre \xE0 jour et supprimer (CRUD) des donn\xE9es en utilisant Firestore Database"),a(),l(6,"p"),s(7,"(voir d\xE9marche \xE0 suivre)"),a(),y(8,"hr"),l(9,"h3"),s(10,"Ajouter un nouveau produit"),a(),l(11,"form",6,0),C("ngSubmit",function(){return S(r),A(i.addProduct())}),l(13,"div",7)(14,"label",8),s(15,"Nom du produit"),a(),l(16,"input",9),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.nom,c)||(i.newProduct.nom=c),A(c)}),a()(),l(17,"div",7)(18,"label",10),s(19,"Description"),a(),l(20,"textarea",11),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.description,c)||(i.newProduct.description=c),A(c)}),a()(),l(21,"div",7)(22,"label",12),s(23,"Prix"),a(),l(24,"input",13),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.prix,c)||(i.newProduct.prix=c),A(c)}),a()(),l(25,"div",7)(26,"label",14),s(27,"Cat\xE9gorie"),a(),l(28,"input",15),Ce("ngModelChange",function(c){return S(r),Ee(i.newProduct.categorie_nom,c)||(i.newProduct.categorie_nom=c),A(c)}),a()(),l(29,"button",16),s(30," Ajouter le produit "),a()(),y(31,"hr"),l(32,"h3"),s(33,"Liste des produits"),a(),l(34,"div",17),N(35,G3,17,7,"div",18),a(),l(36,"ul",19)(37,"li",20)(38,"button",21),s(39," Composant Parent "),a()(),l(40,"li",20)(41,"button",22),s(42," UpdateProductFireComponent.ts "),a()(),l(43,"li",20)(44,"button",23),s(45," FirestoreService.ts "),a()(),l(46,"li",20)(47,"button",24),s(48," D\xE9marche \xE0 suivre "),a()()(),l(49,"div",25)(50,"div",26)(51,"i",27),C("click",function(){return S(r),A(i.copy1())}),a(),N(52,H3,3,0,"span",28),l(53,"pre",29,1),W(),s(55,`import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../services/firebase/firestore.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Interface pour typer les produits
interface Product {
  id?: string; // ID facultatif (attribu\xE9 par Firestore)
  nom: string;
  description?: string;
  prix: number;
  categorie_nom?: string;
}

@Component({
  selector: 'app-productsFirebase',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Ajout de FormsModule pour g\xE9rer les formulaires
  template: \`
    <div class="container mt-3">
      <h1>CRUD Firebase avec Angular</h1>
      <hr />
      <h3>Ajouter un nouveau produit</h3>
      <!-- Formulaire d'ajout -->
      <form (ngSubmit)="addProduct()" #productForm="ngForm" class="mb-4">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom du produit</label>
          <input
            type="text"
            id="nom"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            name="nom"
            required
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            class="form-control"
            [(ngModel)]="newProduct.description"
            name="description"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="prix" class="form-label">Prix</label>
          <input
            type="number"
            id="prix"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            name="prix"
            required
          />
        </div>
        <div class="mb-3">
          <label for="categorie_nom" class="form-label">Cat\xE9gorie</label>
          <input
            type="text"
            id="categorie_nom"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            name="categorie_nom"
          />
        </div>
        <button
          type="submit"
          class="btn btn-success"
          [disabled]="productForm.invalid"
        >
          Ajouter le produit
        </button>
      </form>

      <hr />
      <h3>Liste des produits</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2" style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description || 'Pas de description' }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p>
                <strong>Cat\xE9gorie: </strong
                >{{ product.categorie_nom || 'Non d\xE9finie' }}
              </p>
            </div>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-product-firebase', product.id]"
            >
              Modifier
            </button>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product.id!)"
            >
              Supprimer
            </button>

          </div>
        </div>
      </div>
    </div>
  \`,
})
export class ProductsfireComponent {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(private firestoreService: FirestoreService) {
    this.fetchProducts();
  }

//Ajoute un nouveau produit \xE0 partir du formulaire
  addProduct() {
    if (!this.newProduct.nom || this.newProduct.prix <= 0) {
      console.error('Les champs obligatoires ne sont pas remplis.');
      return;
    }

    this.firestoreService
      .addDocument('angproducts', this.newProduct)
      .then(() => {
        console.log('Produit ajout\xE9 avec succ\xE8s !');
        this.fetchProducts(); // Recharge les produits
        this.resetForm(); // R\xE9initialise le formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du produit :", error);
      });
  }

  //R\xE9initialise le formulaire apr\xE8s un ajout
  resetForm() {
    this.newProduct = {
      nom: '',
      description: '',
      prix: 0,
      categorie_nom: '',
    };
  }

 //R\xE9cup\xE8re tous les produits depuis Firestore
  fetchProducts() {
    this.firestoreService.getDocuments('angproducts').subscribe({
      next: (data) => {
        this.products = data;
        console.log('Produits r\xE9cup\xE9r\xE9s :', data);
      },
      error: (error) => {
        console.error('Erreur lors de la r\xE9cup\xE9ration des produits :', error);
      },
    });
  }

  /**
   * Supprime un produit depuis Firestore
   * @param id Identifiant du produit \xE0 supprimer
   */
  deleteProduct(id: string) {
    if (!id) return;

    this.firestoreService
      .deleteDocument('angproducts', id)
      .then(() => {
        console.log('Produit supprim\xE9 :', id);
        this.fetchProducts(); // Recharge la liste apr\xE8s suppression
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
      });
  }
}`),H(),a()(),l(56,"div",30)(57,"i",27),C("click",function(){return S(r),A(i.copy2())}),a(),N(58,W3,3,0,"span",28),l(59,"pre",29,2),W(),s(61,`import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getDocuments(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  addDocument(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data);
  }

  deleteDocument(collectionName: string, docId: string) {
    const docRef = doc(this.firestore, \`\${collectionName}/\${docId}\`);
    return deleteDoc(docRef);
  }

   // \u{1F525} Mettre \xE0 jour un document existant
    updateDocument(collectionName: string, docId: string, newData: any) {
      const docRef = doc(this.firestore, \`\${collectionName}/\${docId}\`);
      return updateDoc(docRef, newData);
    }

}`),H(),a()(),l(62,"div",31)(63,"i",27),C("click",function(){return S(r),A(i.copy3())}),a(),N(64,K3,3,0,"span",28),l(65,"pre",29,3),W(),s(67,`import {
  FirestoreService,
  Product,
} from './../../../services/firebase/firestore.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-fire',
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container mt-4">
      <h1 class="text-center mb-4">Mettre \xE0 jour le produit</h1>
      <div class="card-body">
        <form (ngSubmit)="updateProduct()" class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nom</label>
            <input
              type="text"
              id="name"
              class="form-control"
              [(ngModel)]="product.nom"
              name="name"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="price" class="form-label">Prix</label>
            <input
              type="number"
              id="price"
              class="form-control"
              [(ngModel)]="product.prix"
              name="price"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="categoryName" class="form-label">Cat\xE9gorie name</label>
            <input
              type="text"
              id="categoryName"
              class="form-control"
              [(ngModel)]="product.categorie_nom"
              name="categoryName"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              class="form-control"
              [(ngModel)]="product.description"
              name="description"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">Mettre \xE0 jour</button>
          </div>
        </form>
      </div>
    </div>
  \`,
  styles: [],
})
export class UpdateProductFireComponent implements OnInit {
  product: Product = {
    id: 0,
    nom: '',
    prix: 0,
    categorie_nom: '',
    description: '',
  };
  productId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.firestoreService
      .getDocumentById('angproducts', this.productId)
      .subscribe((product) => {
        this.product = product;
      });
  }

  updateProduct(): void {
    this.firestoreService
      .updateDocument('angproducts', this.productId, this.product)
      .then(() => {
        alert('Produit mis \xE0 jour !');
        this.router.navigate(['/products-firebase']); // Redirection vers la liste des produits apr\xE8s mise \xE0 jour    })
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
      });
  }
}`),H(),a()(),l(68,"div",32)(69,"i",27),C("click",function(){return S(r),A(i.copy4())}),a(),N(70,Q3,3,0,"span",28),l(71,"pre",29,4),W(),s(73,`1. Cree une base de donn\xE9es Firestore sur Firebase ainsi une collection angproducts.

2. R\xE9cup\xE8re la configuration Firebase:
firebaseConfig : {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "eshop-a7e80.firebaseapp.com",
    projectId: "eshop-a7e80",
    storageBucket: "eshop-a7e80.appspot.com",
    messagingSenderId: "210536635875",
    appId: "1:210536635875:web:102174013c4495022b94d6"
  }

3. Configurer Firebase dans Angular:
   Dans src/environments/environment.ts et src/environments/environment.development.ts,  ajoute la configuration Firebase obtenue:
   export const environment = {
      production: true,
      apiURL: 'http://localhost:8000',
      siteURL: 'http://localhost:4200',
      apiVersion: 'v1', // Version de l'API
      firebaseConfig : {
        apiKey: "AIzaSyCdKHLM6_7ZhC7FmmxmzroMrtPmHlL8S7E",
        authDomain: "eshop-a7e80.firebaseapp.com",
        projectId: "eshop-a7e80",
        storageBucket: "eshop-a7e80.appspot.com",
        messagingSenderId: "210536635875",
        appId: "1:210536635875:web:102174013c4495022b94d6"
      }
    };

4. Installer Firebase dans Angular: npm install firebase @angular/fire

5. Importer Firebase dans Angular dans app.config.ts:
  import { provideFirestore, getFirestore } from '@angular/fire/firestore';
  import { initializeApp } from 'firebase/app';
  import { provideFirebaseApp } from '@angular/fire/app';
   export const appConfig: ApplicationConfig = {
     providers: [
        // Ajout de la configuration Firebase
       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
       provideFirestore(() => getFirestore()), // Fournit le module Firestore
       ......
       ]
    };

6. Cr\xE9er un service FirestoreService pour g\xE9rer les op\xE9rations Firestore:
  voir le code source dans le fichier src/app/services/firebase/firestore.service.ts

7. Cr\xE9er un composant ProductsfireComponent pour g\xE9rer les produits:
  voir le code source dans le fichier src/app/pages/tests/firebase/productsfire.component.ts`),H(),a()()()()}if(t&2){let r=tt(12);g(16),ye("ngModel",i.newProduct.nom),g(4),ye("ngModel",i.newProduct.description),g(4),ye("ngModel",i.newProduct.prix),g(4),ye("ngModel",i.newProduct.categorie_nom),g(),I("disabled",r.invalid),g(6),I("ngForOf",i.products),g(17),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked)}},dependencies:[G,Xe,te,Pe,Nt,De,pt,Oe,Ot,$t,ke,zt,Mi],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Ad=class n{constructor(e,t,i){this.productService=e;this.route=t;this.router=i}product={};productId=null;ngOnInit(){this.productId=this.route.snapshot.paramMap.get("id"),this.productId&&this.productService.getProducts().subscribe(e=>{let t=e.find(i=>i._id===this.productId);t&&(this.product=t)})}updateProduct(){this.productId&&this.productService.updateProduct(this.productId,this.product).subscribe({next:()=>{alert("Produit mis \xE0 jour avec succ\xE8s !"),this.router.navigate(["/products-node"])},error:e=>{console.error("Erreur lors de la mise \xE0 jour du produit :",e)}})}static \u0275fac=function(t){return new(t||n)(se(Go),se(_t),se(Ge))};static \u0275cmp=k({type:n,selectors:[["app-update-product"]],decls:21,vars:4,consts:[[1,"container","mt-4"],[1,"form-group"],["for","productName"],["id","productName","type","text","placeholder","Enter product name",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","mt-2"],["for","productDescription"],["id","productDescription","type","text","placeholder","Enter product description",1,"form-control",3,"ngModelChange","ngModel"],["for","productPrix"],["id","productPrix","type","number","placeholder","Enter product price",1,"form-control",3,"ngModelChange","ngModel"],["for","productCategory"],["id","productCategory","type","text","placeholder","Enter product category",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-success","mt-2",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h2"),s(2,"Update Product"),a(),l(3,"div",1)(4,"label",2),s(5,"Nom"),a(),l(6,"input",3),Ce("ngModelChange",function(o){return Ee(i.product.nom,o)||(i.product.nom=o),o}),a()(),l(7,"div",4)(8,"label",5),s(9,"Description"),a(),l(10,"input",6),Ce("ngModelChange",function(o){return Ee(i.product.description,o)||(i.product.description=o),o}),a()(),l(11,"div",4)(12,"label",7),s(13,"Prix"),a(),l(14,"input",8),Ce("ngModelChange",function(o){return Ee(i.product.prix,o)||(i.product.prix=o),o}),a()(),l(15,"div",4)(16,"label",9),s(17,"Categorie"),a(),l(18,"input",10),Ce("ngModelChange",function(o){return Ee(i.product.categorie_nom,o)||(i.product.categorie_nom=o),o}),a()(),l(19,"button",11),C("click",function(){return i.updateProduct()}),s(20," Save "),a()()),t&2&&(g(6),ye("ngModel",i.product.nom),g(4),ye("ngModel",i.product.description),g(4),ye("ngModel",i.product.prix),g(4),ye("ngModel",i.product.categorie_nom))},dependencies:[G,Pe,De,pt,Oe,ke],styles:["p[_ngcontent-%COMP%]{font-size:15px}"]})};var J3=["tab1"];function X3(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}var Pd=class n{compteur=0;monObservable=new rt(e=>{let t=0,i=setInterval(()=>{e.next(t),t++},1e3);return()=>clearInterval(i)});subscription;sabonner(){(!this.subscription||this.subscription.closed)&&(this.subscription=this.monObservable.subscribe({next:e=>this.compteur=e,error:e=>console.error("Erreur:",e),complete:()=>console.log("Observable compl\xE9t\xE9.")}))}sedesabonner(){this.subscription&&(this.subscription.unsubscribe(),console.log("D\xE9sabonn\xE9."))}ngOnDestroy(){this.sedesabonner()}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-observable"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,J3,5),t&2&&ne()},decls:43,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","m-4",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fs-6","text-danger"],[1,"tab"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les observables: cr\xE9er, subscribe, unsubscribe"),a()(),y(4,"hr"),l(5,"div"),s(6),a(),l(7,"button",2),C("click",function(){return S(r),A(i.sabonner())}),s(8," D\xE9marrer le compteur "),a(),l(9,"button",3),C("click",function(){return S(r),A(i.sedesabonner())}),s(10," Arr\xEAter le compteur "),a(),l(11,"ul",4)(12,"li",5)(13,"button",6),s(14," Composant Parent "),a()()(),l(15,"div",7)(16,"div",8)(17,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(18,X3,3,0,"span",10),l(19,"pre",11,0),W(),s(21,`import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: \`
    <div class="container">
      <h1>
        <strong>Les observables: cr\xE9er, subscribe, unsubscribe</strong>
      </h1>
      <hr />
      <div>Compteur: { { compteur } }</div>
      <button class="btn btn-success me-4" (click)="sabonner()">
        D\xE9marrer le compteur
      </button>
      <button class="btn btn-danger" (click)="sedesabonner()">
        Arr\xEAter le compteur
      </button>
    </div>
  \`,
  styles: [],
})
export class RxjsbservableComponent {
  compteur: number = 0;

  // Cr\xE9er un observable
  monObservable = new Observable<number>((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);

    // Nettoyage quand l'observable est compl\xE9t\xE9 ou arr\xEAt\xE9
    return () => clearInterval(intervalId);
  });

  subscription: any;
   // Souscrire \xE0 l'observable
  sabonner() {
    if (!this.subscription || this.subscription.closed) {
      this.subscription = this.monObservable.subscribe({
        next: (value) => (this.compteur = value), // Affectation correcte
        error: (err) => console.error('Erreur:', err), // Affichage de l'erreur
        complete: () => console.log('Observable compl\xE9t\xE9.'), // Affichage du message de compl\xE9tion
      });
      //ou tout simplement:
      // this.subscription = this.monObservable.subscribe((value) => this.compteur = value);
    }
  }

  // Se d\xE9sabonner de l'observable
  sedesabonner() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('D\xE9sabonn\xE9.');
    }
  }

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() {
    this.sedesabonner();
  }
}`),H(),a()()(),l(22,"div",12),s(23," ****************************************"),l(24,"span",13),s(25,"cours"),a(),s(26," **************************************** "),a(),l(27,"pre")(28,"strong",14),s(29,"C'est quoi RxJS ?"),a(),s(30,`
RxJS permet de faire de la programmation r\xE9active dans Angular.

RxJS nous apporte la notion d\u2019Observable et d\u2019operators. Un Observable est un flux
d\u2019\xE9v\xE8nements sur lequel on peut s\u2019abonner pour r\xE9agir \xE0 chaque fois qu\u2019un \xE9v\xE8nement passe.
Les operators permettent de manipuler les \xE9v\xE8nements des Observable
pour les transformer, les combiner, les filtrer, etc.

Le flux des Observable sont, par d\xE9faut, ferm\xE9s. Cela signifie que si on ne s\u2019abonne pas
\xE0 un Observable, on ne recevra pas les \xE9v\xE8nements.

Dans Angular, RxJS est beaucoup utilis\xE9 :

Dans les requ\xEAtes HTTP
Dans la manipulation des routes
Dans les formulaires
Et autres

`),l(31,"strong",14),s(32,"Cr\xE9er et lire les donn\xE9es d\u2019un Observable :"),a(),s(33,`
Il existe beaucoup d\u2019op\xE9rateurs pour cr\xE9er des Observable, interval en est un exemple
 et \xE9met un nombre dans un intervalle de temps donn\xE9.

`),l(34,"div",15),s(35,`@Component({
  template: \`
    <p>Counter: { {counter$ | async} }</p>
  \`
})
export class MyComponent {
  counter$ = interval(1000);
}`),a(),s(36,`
Ici, counter$ est un Observable qui \xE9met un nombre toutes les secondes.
Pour afficher la valeur de counter$, il faut utiliser le pipe async qui permet
de souscrire \xE0 l\u2019Observable et de se d\xE9sabonner automatiquement lorsque le composant est d\xE9truit.

`),l(37,"strong",14),s(38,"Cr\xE9er une valeur d\xE9riv\xE9e d\u2019un Observable:"),a(),s(39,`
`),l(40,"div",15),s(41,`@Component({
  template: \`
    <p>Counter: { {counter$ | async} }</p>
    <p>Double Counter: { {doubleCounter$ | async} }</p>
  \`
})
export class MyComponent {
  counter$ = interval(1000);
  doubleCounter$ = this.counter$.pipe(
    map(value => value * 2));
}`),a(),s(42,`
Ici, doubleCounter$ est un Observable qui \xE9met un nombre toutes les secondes,
mais qui est le double de counter$. Gr\xE2ce \xE0 l\u2019op\xE9rateur map, on transforme
la valeur de counter$ avant qu\u2019elle soit \xE9mise par doubleCounter$.
      `),a()()}t&2&&(g(6),$("Compteur: ",i.compteur,""),g(12),I("ngIf",i.clicked))},dependencies:[G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var Rd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-dashboard"]],decls:6,vars:0,consts:[[1,"text-center"]],template:function(t,i){t&1&&(l(0,"div"),s(1,"dashboard"),a(),l(2,"p",0),s(3,"Cette page est prot\xE9g\xE9 par un guard"),a(),l(4,"p",0),s(5,"Veuillez se deconnecter et se connecter pour tester"),a())},encapsulation:2})};var Y3=["tab1"];function Z3(n,e){n&1&&(l(0,"span"),s(1,"Le nom est requis."),a())}function eV(n,e){n&1&&(l(0,"span"),s(1,"Minimum 3 caract\xE8res."),a())}function tV(n,e){if(n&1&&(l(0,"div",38),N(1,Z3,2,0,"span",39)(2,eV,2,0,"span",39),a()),n&2){let t=ce();g(),I("ngIf",t.name.errors==null?null:t.name.errors.required),g(),I("ngIf",t.name.errors==null?null:t.name.errors.minlength)}}function nV(n,e){n&1&&(l(0,"span"),s(1,"L'email est requis."),a())}function iV(n,e){n&1&&(l(0,"span"),s(1,"Format d'email invalide."),a())}function rV(n,e){if(n&1&&(l(0,"div",38),N(1,nV,2,0,"span",39)(2,iV,2,0,"span",39),a()),n&2){let t=ce();g(),I("ngIf",t.email.errors==null?null:t.email.errors.required),g(),I("ngIf",t.email.errors==null?null:t.email.errors.email)}}function oV(n,e){n&1&&(l(0,"span"),s(1,"Mot de passe requis."),a())}function sV(n,e){n&1&&(l(0,"span"),s(1,"Minimum 6 caract\xE8res."),a())}function aV(n,e){if(n&1&&(l(0,"div",38),N(1,oV,2,0,"span",39)(2,sV,2,0,"span",39),a()),n&2){let t=ce();g(),I("ngIf",t.password.errors==null?null:t.password.errors.required),g(),I("ngIf",t.password.errors==null?null:t.password.errors.minlength)}}function lV(n,e){n&1&&(l(0,"span"),s(1,"Ce champ est requis."),a())}function cV(n,e){if(n&1&&(l(0,"div",38),N(1,lV,2,0,"span",39),a()),n&2){let t=ce();g(),I("ngIf",t.control.errors==null?null:t.control.errors.required)}}function uV(n,e){if(n&1&&(l(0,"span",40),s(1),a()),n&2){let t=ce();g(),ge(t.control.value)}}function dV(n,e){if(n&1){let t=ee();l(0,"li",41),s(1),l(2,"button",42),C("click",function(){let r=S(t).index,o=ce();return A(o.removeSkill(r))}),s(3," Supprimer "),a()()}if(n&2){let t=e.$implicit;g(),$(" ",t," ")}}function pV(n,e){n&1&&(l(0,"span",43),s(1,"copied "),y(2,"i",44),a())}var Dd=class n{myForm=new oo({name:new Fi("",[Un.required,Un.minLength(3)]),email:new Fi("",[Un.required,Un.email]),password:new Fi("",[Un.required,Un.minLength(6)]),isActive:new Fi(!1)});control=new Fi("",[Un.required]);skills=[];newSkill="";get name(){return this.myForm.get("name")}get email(){return this.myForm.get("email")}get password(){return this.myForm.get("password")}onSubmit(){console.log("Formulaire soumis :",this.myForm.value),console.log("Valeur du champ ind\xE9pendant :",this.control.value)}resetForm(){this.myForm.reset(),this.control.reset(),this.skills=[]}addSkill(){this.newSkill.trim()&&(console.log("newSkill :",this.newSkill),console.log("newSkill :",this.newSkill),this.skills.push(this.newSkill.trim()),console.log("skills :",this.skills),this.newSkill="")}removeSkill(e){this.skills.splice(e,1)}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-formcontrolgroup"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,Y3,5),t&2&&ne()},decls:63,vars:14,consts:[["tab1",""],[1,"container","mt-5"],[1,"text-center","mb-4"],[1,"p-4","border","rounded","bg-light",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["id","name","formControlName","name","placeholder","Entrez votre nom",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],["for","email",1,"form-label"],["id","email","formControlName","email","placeholder","Entrez votre email",1,"form-control"],["for","password",1,"form-label"],["id","password","type","password","formControlName","password","placeholder","Entrez votre mot de passe",1,"form-control"],["for","independentControl",1,"form-label"],["id","independentControl","placeholder","Champ ind\xE9pendant (non inclus dans le FormGroup)",1,"form-control",3,"formControl"],[1,"form-check","mb-3"],["type","checkbox","formControlName","isActive","id","isActive",1,"form-check-input"],["for","isActive",1,"form-check-label"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"mt-4"],[1,"bg-light","p-3","rounded","border"],["class","bg-light p-3 my-3 rounded border",4,"ngIf"],[1,"mb-1"],["for","skills",1,"form-label"],[1,"list-group","mb-2"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"d-flex"],["type","text","placeholder","Nouvelle comp\xE9tence",1,"form-control","me-2",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"text-danger","mt-1"],[4,"ngIf"],[1,"bg-light","p-3","my-3","rounded","border"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h2",2),s(2," Exemple complet : FormGroup et FormControl "),a(),l(3,"form",3),C("ngSubmit",function(){return S(r),A(i.onSubmit())}),l(4,"div",4)(5,"label",5),s(6,"Nom :"),a(),y(7,"input",6),N(8,tV,3,2,"div",7),a(),l(9,"div",4)(10,"label",8),s(11,"Email :"),a(),y(12,"input",9),N(13,rV,3,2,"div",7),a(),l(14,"div",4)(15,"label",10),s(16,"Mot de passe :"),a(),y(17,"input",11),N(18,aV,3,2,"div",7),a(),l(19,"div",4)(20,"label",12),s(21,"Champ ind\xE9pendant :"),a(),y(22,"input",13),N(23,cV,2,1,"div",7),a(),l(24,"div",14),y(25,"input",15),l(26,"label",16),s(27,"Activer l'utilisateur"),a()(),l(28,"div",17)(29,"button",18),s(30," Soumettre "),a(),l(31,"button",19),C("click",function(){return S(r),A(i.resetForm())}),s(32," R\xE9initialiser "),a()()(),l(33,"div",20)(34,"h3"),s(35,"Valeurs actuelles du formulaire :"),a(),l(36,"pre",21),s(37),dt(38,"json"),a(),l(39,"h3"),s(40,"Valeur du champ ind\xE9pendant :"),a(),N(41,uV,2,1,"span",22),a(),l(42,"div",23)(43,"label",24),s(44,"Comp\xE9tences :"),a(),l(45,"ul",25),N(46,dV,4,1,"li",26),a()(),l(47,"div",27)(48,"input",28),Ce("ngModelChange",function(c){return S(r),Ee(i.newSkill,c)||(i.newSkill=c),A(c)}),a(),l(49,"button",29),C("click",function(){return S(r),A(i.addSkill())}),s(50," Ajouter "),a()(),y(51,"hr"),l(52,"ul",30)(53,"li",31)(54,"button",32),s(55," Composant Parent "),a()()(),l(56,"div",33)(57,"div",34)(58,"i",35),C("click",function(){return S(r),A(i.copy1())}),a(),N(59,pV,3,0,"span",36),l(60,"pre",37,0),W(),s(62,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formcontrolgroup',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  template: \`
    <div class="container mt-5">
      <h2 class="text-center mb-4">
        Exemple complet : FormGroup et FormControl
      </h2>

      <!-- Formulaire principal -->
      <form
        [formGroup]="myForm"
        (ngSubmit)="onSubmit()"
        class="p-4 border rounded bg-light"
      >
        <!-- Champ Nom -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom :</label>
          <input
            id="name"
            formControlName="name"
            class="form-control"
            placeholder="Entrez votre nom"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="name.invalid && name.touched" class="text-danger mt-1">
            <span *ngIf="name.errors?.['required']">Le nom est requis.</span>
            <span *ngIf="name.errors?.['minlength']"
              >Minimum 3 caract\xE8res.</span
            >
          </div>
        </div>

        <!-- Champ Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email :</label>
          <input
            id="email"
            formControlName="email"
            class="form-control"
            placeholder="Entrez votre email"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="email.invalid && email.touched" class="text-danger mt-1">
            <span *ngIf="email.errors?.['required']">L'email est requis.</span>
            <span *ngIf="email.errors?.['email']"
              >Format d'email invalide.</span
            >
          </div>
        </div>

        <!-- Champ Mot de Passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe :</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="password.invalid && password.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="password.errors?.['required']"
              >Mot de passe requis.</span
            >
            <span *ngIf="password.errors?.['minlength']"
              >Minimum 6 caract\xE8res.</span
            >
          </div>
        </div>

        <!-- Champ ind\xE9pendant avec FormControl -->
        <div class="mb-3">
          <label for="independentControl" class="form-label"
            >Champ ind\xE9pendant :</label
          >
          <input
            id="independentControl"
            [formControl]="control"
            class="form-control"
            placeholder="Champ ind\xE9pendant (non inclus dans le FormGroup)"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="control.invalid && control.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="control.errors?.['required']"
              >Ce champ est requis.</span
            >
          </div>
        </div>

        <!-- Checkbox actif -->
        <div class="form-check mb-3">
          <input
            type="checkbox"
            formControlName="isActive"
            class="form-check-input"
            id="isActive"
          />
          <label for="isActive" class="form-check-label"
            >Activer l'utilisateur</label
          >
        </div>

        <!-- Boutons -->
        <div class="d-flex justify-content-between">
          <button
            type="submit"
            class="btn btn-success"
            [disabled]="myForm.invalid || control.invalid"
          >
            Soumettre
          </button>
          <button type="button" class="btn btn-secondary" (click)="resetForm()">
            R\xE9initialiser
          </button>
        </div>
      </form>
      <!-- R\xE9sultats -->
      <div class="mt-4">
        <h3>Valeurs actuelles du formulaire :</h3>
        <pre class="bg-light p-3 rounded border">{{ myForm.value | json }}</pre>
        <h3>Valeur du champ ind\xE9pendant :</h3>
        <span *ngIf="control.value" class="bg-light p-3 my-3 rounded border">{{
          control.value
        }}</span>
      </div>
      <!-- Liste dynamique des comp\xE9tences -->
      <div class="mb-1">
        <label for="skills" class="form-label">Comp\xE9tences :</label>
        <ul class="list-group mb-2">
          <li
            *ngFor="let skill of skills; let i = index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ skill }}
            <button
              type="button"
              class="btn btn-sm btn-danger"
              (click)="removeSkill(i)"
            >
              Supprimer
            </button>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <input
          type="text"
          class="form-control me-2"
          placeholder="Nouvelle comp\xE9tence"
          [(ngModel)]="newSkill"
        />
        <button type="button" class="btn btn-success" (click)="addSkill()">
          Ajouter
        </button>
      </div>
    </div>
  \`,
  styles: [],
})
export class FormcontrolgroupComponent {
  // D\xE9finition du FormGroup avec ses contr\xF4les enfants
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Champ requis avec longueur min.
    email: new FormControl('', [Validators.required, Validators.email]), // Email valide requis.
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), // Mot de passe avec longueur min.
    isActive: new FormControl(false), // Checkbox avec valeur bool\xE9enne.
  });

  // FormControl ind\xE9pendant (pas li\xE9 au FormGroup)
  control: FormControl = new FormControl('', [Validators.required]);

  // Champs pour g\xE9rer les comp\xE9tences
  skills: string[] = []; // Tableau des comp\xE9tences
  newSkill: string = ''; // Champ pour la saisie d'une nouvelle comp\xE9tence

  // Getter pour simplifier l'acc\xE8s aux contr\xF4les dans le template
  get name() {
    return this.myForm.get('name')!;
  }
  get email() {
    return this.myForm.get('email')!;
  }
  get password() {
    return this.myForm.get('password')!;
  }

  // Fonction appel\xE9e lors de la soumission du formulaire
  onSubmit() {
    console.log('Formulaire soumis :', this.myForm.value);
    console.log('Valeur du champ ind\xE9pendant :', this.control.value);
  }

  // R\xE9initialisation du formulaire
  resetForm() {
    this.myForm.reset(); // R\xE9initialise les champs du FormGroup
    this.control.reset(); // R\xE9initialise le champ ind\xE9pendant
    this.skills = []; // Vide la liste des comp\xE9tences
  }

  // Ajouter une nouvelle comp\xE9tence
  addSkill() {
    if (this.newSkill.trim()) {
      console.log('newSkill :', this.newSkill);

      console.log('newSkill :', this.newSkill);
      this.skills.push(this.newSkill.trim());
      console.log('skills :', this.skills);
      this.newSkill = ''; // Vide le champ de saisie
    }
  }

  // Supprimer une comp\xE9tence par son index
  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }
}

          `),H(),a()()()()}t&2&&(g(3),I("formGroup",i.myForm),g(5),I("ngIf",i.name.invalid&&i.name.touched),g(5),I("ngIf",i.email.invalid&&i.email.touched),g(5),I("ngIf",i.password.invalid&&i.password.touched),g(4),I("formControl",i.control),g(),I("ngIf",i.control.invalid&&i.control.touched),g(6),I("disabled",i.myForm.invalid||i.control.invalid),g(8),ge(On(38,12,i.myForm.value)),g(4),I("ngIf",i.control.value),g(5),I("ngForOf",i.skills),g(2),ye("ngModel",i.newSkill),g(11),I("ngIf",i.clicked))},dependencies:[_1,Nt,De,Dh,Oe,Ot,Lh,Uh,jh,G,Xe,te,kl,Pe,ke],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var mV=["tab1"],hV=["loginForm"];function fV(n,e){n&1&&(l(0,"div",22),s(1," Username is required. "),a())}function gV(n,e){n&1&&(l(0,"div",22),s(1," Password is required. "),a())}function vV(n,e){if(n&1&&(l(0,"p")(1,"strong"),s(2,"username:"),a(),s(3),l(4,"strong"),s(5,"password:"),a(),s(6),a()),n&2){ce();let t=tt(5);g(3),$(" ",t.value.username," "),g(3),$(" ",t.value.password," ")}}function _V(n,e){n&1&&(l(0,"span",23),s(1,"copied "),y(2,"i",24),a())}var kd=class n{loginForm;isvisible=!1;onSubmit(){console.log(this.loginForm.value),this.isvisible=!0}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-login"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,mV,5),Si(hV,5)),t&2){ne();let r;ti(r=ni())&&(i.loginForm=r.first)}},decls:33,vars:7,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],["tab1",""],[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","username"],["type","text","name","username","ngModel","","required","",1,"form-control"],["class","error",4,"ngIf"],["for","password"],["type","password","name","password","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-success","mb-3",3,"disabled"],[4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"error"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",4)(1,"h1"),s(2,"ngForm: Utiliser ViewChild"),a(),y(3,"hr"),l(4,"form",5,0),C("ngSubmit",function(){return S(r),A(i.onSubmit())}),l(6,"div",6)(7,"label",7),s(8,"Username"),a(),y(9,"input",8,1),N(11,fV,2,0,"div",9),a(),l(12,"div",6)(13,"label",10),s(14,"Password"),a(),y(15,"input",11,2),N(17,gV,2,0,"div",9),a(),l(18,"button",12),s(19," Login "),a(),N(20,vV,7,2,"p",13),a(),y(21,"hr"),l(22,"ul",14)(23,"li",15)(24,"button",16),s(25," ngForm avec viewChild "),a()()(),l(26,"div",17)(27,"div",18)(28,"i",19),C("click",function(){return S(r),A(i.copy1())}),a(),N(29,_V,3,0,"span",20),l(30,"pre",21,3),W(),s(32,`import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: \`
    <div class="container">
      <h1>ngForm: Utiliser ViewChild</h1>
      <hr />
      <form #loginForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username">Username</label>
          <input
            class="form-control "
            type="text"
            name="username"
            #username="ngModel"
            ngModel
            required
          />
          <div *ngIf="username.invalid && username.touched" class="error">
            Username is required.
          </div>
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control "
            type="password"
            name="password"
            ngModel
            required
            #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
          />
          <div *ngIf="password.invalid && password.touched" class="error">
            Password is required.
          </div>
        </div>
        <button
          class="btn btn-success mb-3"
          type="submit"
          [disabled]="!loginForm.valid"
        >
          Login
        </button>
        <p *ngIf="isvisible">
          <strong>username:</strong> {{ loginForm.value.username }}
          <strong>password:</strong>
          {{ loginForm.value.password }}
        </p>
      </form>
    </div>
  \`,
})
export class ViewchildNgFormComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  isvisible: boolean = false;
  onSubmit() {
    console.log(this.loginForm.value);
    this.isvisible = true;
  }
}`),H(),a()()()()}if(t&2){let r=tt(5),o=tt(10),c=tt(16);g(11),I("ngIf",o.invalid&&o.touched),g(4),vt("is-invalid",c.invalid&&c.touched),g(2),I("ngIf",c.invalid&&c.touched),g(),I("disabled",!r.valid),g(2),I("ngIf",i.isvisible),g(9),I("ngIf",i.clicked)}},dependencies:[Pe,Nt,De,Oe,Ot,$t,ke,zt,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var bV=["tab1"];function yV(n,e){n&1&&(l(0,"div",28),s(1," Username is required. "),a())}function EV(n,e){n&1&&(l(0,"div",29),s(1,"Email is required."),a())}function CV(n,e){n&1&&(l(0,"div",29),s(1,"Email invalid."),a())}function wV(n,e){n&1&&(l(0,"div",28),s(1," Password is required. "),a())}function TV(n,e){if(n&1&&(l(0,"div",30)(1,"h3"),s(2,"Submitted Data"),a(),l(3,"p")(4,"strong"),s(5,"Username:"),a(),s(6),a(),l(7,"p")(8,"strong"),s(9,"Username:"),a(),s(10),a(),l(11,"p")(12,"strong"),s(13,"Password:"),a(),s(14),a()()),n&2){let t=ce();g(6),$(" ",t.submittedData.username,""),g(4),$(" ",t.submittedData.email,""),g(4),$(" ",t.submittedData.password,"")}}function xV(n,e){n&1&&(l(0,"span",31),s(1,"copied "),y(2,"i",32),a())}var Md=class n{submittedData=null;onSubmit(e){this.submittedData=e.value,console.log("form.value :",e.value),e.reset()}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-ngForm"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,bV,5),t&2&&ne()},decls:54,vars:13,consts:[["loginForm","ngForm"],["username","ngModel"],["email","ngModel"],["password","ngModel"],["tab1",""],[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","username"],["type","text","id","username","name","username","ngModel","","required","",1,"form-control"],["class","error",4,"ngIf"],["for","email"],["type","email","id","email","name","email","ngModel","","required","",1,"form-control"],["class","error text-danger",4,"ngIf"],["for","password"],["type","password","id","password","name","password","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","mt-3",4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"error"],[1,"error","text-danger"],[1,"mt-3"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",5)(1,"h1"),s(2,"ngForm: Passer ngForm dans ngSubmit dans le template"),a(),y(3,"hr"),l(4,"form",6,0),C("ngSubmit",function(){S(r);let c=tt(5);return A(i.onSubmit(c))}),l(6,"div",7)(7,"label",8),s(8,"Username"),a(),y(9,"input",9,1),N(11,yV,2,0,"div",10),a(),l(12,"div",7)(13,"label",11),s(14,"Email"),a(),y(15,"input",12,2),N(17,EV,2,0,"div",13)(18,CV,2,0,"div",13),a(),l(19,"div",7)(20,"label",14),s(21,"Password"),a(),y(22,"input",15,3),N(24,wV,2,0,"div",10),a(),l(25,"button",16),s(26," Login "),a()(),N(27,TV,15,3,"div",17),y(28,"hr"),l(29,"ul",18)(30,"li",19)(31,"button",20),s(32," ngForm dans ngSubmit "),a()()(),l(33,"div",21)(34,"div",22)(35,"i",23),C("click",function(){return S(r),A(i.copy1())}),a(),N(36,xV,3,0,"span",24),l(37,"pre",25,4),W(),s(39,`import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngForm',
  standalone: true,
  imports: [FormsModule],
  template: \`
  <div class="container">
      <h1>ngForm: Passer ngForm dans ngSubmit dans le template</h1>
      <hr />
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
      <!-- Champ pour le nom d'utilisateur -->
      <div class="mb-3">
        <label for="username">Username</label>
        <input
        class="form-control "
          type="text"
          id="username"
          name="username"
          ngModel
          required
          #username="ngModel"
          [class.is-invalid]="username.invalid && username.touched"
        />
        <div *ngIf="username.invalid && username.touched" class="error">
          Username is required.
        </div>
      </div>

      <!-- Champ pour l'email' -->
      <div class="mb-3">
        <label for="email">Email</label>
        <input
          class="form-control "
          type="email"
          id="email"
          name="email"
          ngModel
          required
          #email="ngModel"
          [class.is-invalid]="email.invalid && email.touched"
        />
        <div *ngIf="email.errors?.['required'] && email.touched" class="error text-danger">Email is required.</div>
        <div *ngIf="email.errors?.['email'] && email.touched" class="error text-danger">Email invalid.</div>
      </div>

      <!-- Champ pour le mot de passe -->
      <div class="mb-3">
        <label for="password">Password</label>
        <input
        class="form-control "
          type="password"
          id="password"
          name="password"
          ngModel
          required
          #password="ngModel"
          [class.is-invalid]="password.invalid && password.touched"
        />
        <div *ngIf="password.invalid && password.touched" class="error">
          Password is required.
        </div>
      </div>

      <!-- Bouton de soumission -->
      <button class="btn btn-success" type="submit" [disabled]="!loginForm.valid">Login</button>
    </form>
    `),s(40,`
    <div *ngIf="submittedData" class="mt-3">
        <h3>Submitted Data</h3>
        <p><strong>Username:</strong> {{ submittedData.username }}</p>
        <p><strong>Username:</strong> {{ submittedData.email }}</p>
        <p><strong>Password:</strong> {{ submittedData.password }}</p>
      </div>
  </div>
  \`
})
export class NgFormComponent {
submittedData: { username: string; email:string, password: string  } | null = null;

onSubmit(form: NgForm) {
  this.submittedData = form.value; // Stocker les donn\xE9es du formulaire
  form.reset(); // R\xE9initialiser le formulaire apr\xE8s soumission si n\xE9cessaire
}
}`),H(),a()()(),y(41,"hr"),l(42,"div",26),s(43," ****************************************"),l(44,"span",27),s(45,"cours"),a(),s(46,"************************************************* "),a(),l(47,"pre")(48,"strong"),s(49,"Explications des ajustements :"),a(),s(50,`
1. #loginForm="ngForm" : Permet d'acc\xE9der \xE0 l'\xE9tat du formulaire (comme valid, dirty, etc.) dans le template.

2. Validation visuelle :
Ajout de #username="ngModel" et #password="ngModel" pour v\xE9rifier individuellement l'\xE9tat des champs.
Classe conditionnelle is-invalid pour afficher un style rouge en cas de champ invalide.

3. Messages d'erreur :
Un message clair est affich\xE9 si un champ requis est vide apr\xE8s interaction (touched).

4. D\xE9sactivation du bouton de soumission :
Le bouton est d\xE9sactiv\xE9 si le formulaire n'est pas valide (!loginForm.valid).

5. Style : Un style minimal a \xE9t\xE9 ajout\xE9 pour am\xE9liorer l'exp\xE9rience utilisateur.

`),l(51,"strong"),s(52,"Fonctionnement attendu :"),a(),s(53,`
1. L'utilisateur doit remplir les champs username et password.
2. Si les champs sont vides ou non valides, un message d'erreur s'affiche sous le champ correspondant.
3. Le bouton "Login" est d\xE9sactiv\xE9 tant que tous les champs ne sont pas valides.
      `),a()()}if(t&2){let r=tt(5),o=tt(10),c=tt(16),d=tt(23);g(9),vt("is-invalid",o.invalid&&o.touched),g(2),I("ngIf",o.invalid&&o.touched),g(4),vt("is-invalid",c.invalid&&c.touched),g(2),I("ngIf",(c.errors==null?null:c.errors.required)&&c.touched),g(),I("ngIf",(c.errors==null?null:c.errors.email)&&c.touched),g(4),vt("is-invalid",d.invalid&&d.touched),g(2),I("ngIf",d.invalid&&d.touched),g(),I("disabled",!r.valid),g(2),I("ngIf",i.submittedData),g(9),I("ngIf",i.clicked)}},dependencies:[Pe,Nt,De,Oe,Ot,$t,ke,zt,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var IV=["tab1"],SV=["tab2"];function AV(n,e){n&1&&(xi(0),l(1,"h3"),s(2,"Bienvenue, utilisateur connect\xE9 !"),a(),Ii())}function PV(n,e){n&1&&(l(0,"h3"),s(1,"Vous \xEAtes d\xE9connect\xE9. Veuillez vous connecter."),a())}function RV(n,e){n&1&&(l(0,"span"),s(1,"(Premier)"),a())}function DV(n,e){n&1&&(l(0,"span"),s(1,"(Dernier)"),a())}function kV(n,e){if(n&1&&(l(0,"li"),s(1),N(2,RV,2,0,"span",18)(3,DV,2,0,"span",18),a()),n&2){let t=e.$implicit,i=e.index,r=e.first,o=e.last;g(),kn(" ",i+1,". ",t," "),g(),I("ngIf",r),g(),I("ngIf",o)}}function MV(n,e){if(n&1&&(xi(0),l(1,"ul"),N(2,kV,4,4,"li",17),a(),Ii()),n&2){let t=ce();g(2),I("ngForOf",t.items)}}function OV(n,e){n&1&&(l(0,"p"),s(1,"La liste est masqu\xE9e."),a())}function NV(n,e){n&1&&(l(0,"span",19),s(1,"copied "),y(2,"i",20),a())}var Od=class n{isLoggedIn=!1;items=["Item 1","Item 2","Item 3"];isListVisible=!0;toggleLogin(){this.isLoggedIn=!this.isLoggedIn}toggleList(){this.isListVisible=!this.isListVisible}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-container-template"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,IV,5),q(i.infoTab2,SV,5)),t&2&&ne(2)},decls:42,vars:7,consts:[["notLoggedIn",""],["emptyList",""],["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[4,"ngIf","ngIfElse"],[1,"btn","btn-secondary","mb-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"ng-container / ng-template"),a(),y(3,"hr"),l(4,"button",4),C("click",function(){return S(r),A(i.toggleLogin())}),s(5),a(),N(6,AV,3,0,"ng-container",5)(7,PV,2,0,"ng-template",null,0,ii),y(9,"hr"),l(10,"h4"),s(11,"Liste des \xE9l\xE9ments :"),a(),l(12,"button",6),C("click",function(){return S(r),A(i.toggleList())}),s(13),a(),N(14,MV,3,1,"ng-container",5)(15,OV,2,0,"ng-template",null,1,ii),y(17,"hr"),l(18,"ul",7)(19,"li",8)(20,"button",9),s(21," Composant Parent "),a()()(),l(22,"div",10)(23,"div",11)(24,"i",12),C("click",function(){return S(r),A(i.copy1())}),a(),N(25,NV,3,0,"span",13),l(26,"pre",14,2),W(),s(28,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-container-template',
imports:[CommonModule],
template: \`
<div class="container">
  <h1>ng-container / ng-template</h1>
  <hr />
  <!-- Bouton pour basculer entre connect\xE9/d\xE9connect\xE9 -->
  <button class="btn btn-success" (click)="toggleLogin()">
    {{ isLoggedIn ? 'Se d\xE9connecter' : 'Se connecter' }}
  </button>

  <!-- Affichage conditionnel avec ngIf et ng-template -->
  <ng-container *ngIf="isLoggedIn; else notLoggedIn">
    <h3>Bienvenue, utilisateur connect\xE9 !</h3>
  </ng-container>

  <ng-template #notLoggedIn>
    <h3>Vous \xEAtes d\xE9connect\xE9. Veuillez vous connecter.</h3>
  </ng-template>

  <hr />

  <!-- Liste d'\xE9l\xE9ments avec *ngFor -->
  <h4>Liste des \xE9l\xE9ments :</h4>
  <button class="btn btn-secondary mb-3" (click)="toggleList()">
    {{ isListVisible ? 'Masquer la liste' : 'Afficher la liste' }}
  </button>

  <ng-container *ngIf="isListVisible; else emptyList">
    <ul>
      <li
        *ngFor="
              let item of items;
              index as i;
              first as isFirst;
              last as isLast
            "
      >
        {{ i + 1 }}. {{ item }}
        <span *ngIf="isFirst">(Premier)</span>
        <span *ngIf="isLast">(Dernier)</span>
      </li>
    </ul>
  </ng-container>

  <ng-template #emptyList>
    <p>La liste est masqu\xE9e.</p>
  </ng-template>
</div>
\`,
})

export class ContainerTemplateComponent {

isLoggedIn: boolean = false; // Pour basculer l'\xE9tat connect\xE9/d\xE9connect\xE9
items: string[] = ['Item1', 'Item 2', 'Item 3']; // Liste d'\xE9l\xE9ments
isListVisible: boolean = true; //Pour afficher ou masquer la liste

toggleLogin() {
  this.isLoggedIn =!this.isLoggedIn;
}

toggleList() {
  this.isListVisible = !this.isListVisible;
}

}`),H(),a()()(),y(29,"hr"),l(30,"div",15),s(31," ****************************************"),l(32,"span",16),s(33,"cours"),a(),s(34,"************************************************* "),a(),l(35,"pre")(36,"strong"),s(37,"ng-container :"),a(),s(38,`
Permet de grouper plusieurs \xE9l\xE9ments sans ajouter d'\xE9l\xE9ment DOM suppl\xE9mentaire.
Utilis\xE9 ici pour conditionnellement afficher le contenu bas\xE9 sur isLoggedIn et isListVisible.

`),l(39,"strong"),s(40,"ng-template :"),a(),s(41,`
D\xE9finit un bloc de contenu r\xE9utilisable, qui peut \xEAtre rendu de mani\xE8re conditionnelle ou dynamique.
Utilis\xE9 ici avec #notLoggedIn et #emptyList.
    `),a()()}if(t&2){let r=tt(8),o=tt(16);g(5),$(" ",i.isLoggedIn?"Se d\xE9connecter":"Se connecter"," "),g(),I("ngIf",i.isLoggedIn)("ngIfElse",r),g(7),$(" ",i.isListVisible?"Masquer la liste":"Afficher la liste"," "),g(),I("ngIf",i.isListVisible)("ngIfElse",o),g(11),I("ngIf",i.clicked)}},dependencies:[G,Xe,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Nd={production:!0,apiURL:"http://localhost:8000",apiVersion:"v1",firebaseConfig:{apiKey:"AIzaSyCdKHLM6_7ZhC7FmmxmzroMrtPmHlL8S7E",authDomain:"eshop-a7e80.firebaseapp.com",projectId:"eshop-a7e80",storageBucket:"eshop-a7e80.appspot.com",messagingSenderId:"210536635875",appId:"1:210536635875:web:102174013c4495022b94d6"}};var Vd=class n{constructor(e){this.http=e}baseURL=Nd.apiURL;getCategories(){try{return this.http.get(`${this.baseURL}/categories/getCategories.php`)}catch(e){throw console.error("Erreur lors de la r\xE9cup\xE9ration des categories",e),e}}static \u0275fac=function(t){return new(t||n)(oe(en))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})};var FV=["tab1"],LV=["tab2"],UV=["tab3"];function jV(n,e){if(n&1&&(l(0,"li"),s(1),a()),n&2){let t=e.$implicit;g(),ge(t.nom)}}function BV(n,e){if(n&1&&(l(0,"ul",5),Yt(1,jV,2,1,"li",null,Lr),a()),n&2){let t=ce();g(),Zt(t.categories)}}function qV(n,e){n&1&&(l(0,"div",6),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories. "),a())}function zV(n,e){n&1&&(l(0,"div",6),s(1,"Aucune cat\xE9gorie"),a())}function $V(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}function GV(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}function HV(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}var Fd=class n{constructor(e,t){this.categoriesService=e;this.store=t}categories=[];hasError=!1;isClicked=!1;ngOnInit(){this.fetchCategories()}fetchCategories(){this.categoriesService.getCategories().subscribe({next:e=>{e?.success?this.store.dispatch(ov(e.dataCat||[])):console.log(e.message)},error:e=>{console.error("Erreur :",e),this.hasError=!0}})}showCategories(){this.store.select(YT).subscribe(e=>this.categories=e),this.isClicked=!0}infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(Vd),se(ln))};static \u0275cmp=k({type:n,selectors:[["app-ngrx"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,FV,5),q(i.infoTab2,LV,5),q(i.infoTab3,UV,5)),t&2&&ne(3)},decls:48,vars:6,consts:[["tab1",""],["tab2",""],["tab3",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[1,"mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade",2,"position","relative"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"Ngrx: stoquer et r\xE9cuperer "),a(),l(3,"button",4),C("click",function(){return S(r),A(i.showCategories())}),s(4," Afficher tous les categories "),a(),N(5,BV,3,0,"ul",5)(6,qV,2,0,"div",6)(7,zV,2,0,"div",6),y(8,"hr"),l(9,"ul",7)(10,"li",8)(11,"button",9),s(12," Composant Parent "),a()(),l(13,"li",8)(14,"button",10),s(15," data.slice.ts "),a()(),l(16,"li",8)(17,"button",11),s(18," store.ts "),a()()(),l(19,"div",12)(20,"div",13)(21,"i",14),C("click",function(){return S(r),A(i.copy1())}),a(),N(22,$V,3,0,"span",15),l(23,"pre",16,0),W(),s(25,`import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CategoriesService } from './../../../../services/categories-http/categoriesHttp.service';
import { Component, OnInit } from '@angular/core';
import { addCategories, selectCategories } from '../../../../ngrx/data.slice';
import { Categorie } from '../../../../interfaces/categorie';

@Component({
  selector: 'app-ngrx',
  imports: [CommonModule],
  template: \`
    <div class="container mt-3">
      <h1>ngrx: select et dispatch</h1>
      <button class="btn btn-success" (click)="showCategories()">
        Afficher tous les categories
      </button>
      @if (categories.length>0) {
      <ul class="mt-3">
        @for (category of categories; track $index) {
        <li>{{ category.nom }}</li>
        }
      </ul>
      } @if (categories.length === 0 && hasError){
      <div class="alert alert-danger ">
        Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories.
      </div>
      } @if (categories.length === 0 && !hasError && isClicked){
      <div class="alert alert-danger ">Aucune cat\xE9gorie</div>
      }
      <hr />
    </div>
  \`,
})
export class NgrxComponent implements OnInit {
  constructor(
    private CategoriesService: CategoriesService,
    private store: Store
  ) {}
  categories: Categorie[] = [];
  hasError: boolean = false
  isClicked: boolean = false;

  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories() {
    this.CategoriesService
      .getCategories()
      .subscribe({
        next: (response) => {
          if (response?.success) {
            this.store.dispatch(addCategories(response.dataCat || []))
          } else {
            console.log(response.message);
          }
        },
        error: (err) => {
          console.error('Erreur :', err);
          this.hasError = true;
        },
      }

      );
  }
  showCategories() {
    this.store
      .select(selectCategories)
      .subscribe((categories) => (this.categories = categories));
    this.isClicked = true;
  }

}`),H(),a()(),l(26,"div",17)(27,"i",14),C("click",function(){return S(r),A(i.copy2())}),a(),N(28,GV,3,0,"span",15),l(29,"pre",16,1),W(),s(31,`import {
  createAction,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Categorie } from '../interfaces/categorie';
import { Product } from '../interfaces/product';

// Interface pour l'\xE9tat global
export interface DataState {
  categories: Categorie[];
  products: Product[];
  isLoggedIn: boolean;
}

// \xC9tat initial
const initialState: DataState = {
  categories: [],
  products: [],
  isLoggedIn: typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true',
};

// -----------------------Actions-------------------------------
//categories
export const addCategories = createAction(
  '[Categories] Add Categories',
  (payload: Categorie[]) => ({ payload })
);
//products
export const addProducts = createAction(
  '[Products] Add Categories', // Nom de l'action
  (payload: Product[]) => ({ payload }) // Type de donn\xE9es associ\xE9es \xE0 l'action:paylod
);
//isLoggedIn
export const setActiveUser = createAction('[Auth] Set Active User'); //pas de paylod
export const removeActiveUser = createAction('[Auth] Remove Active User'); //pas de paylod

// ----------------------Reducers-------------------------------
export const dataReducer = createReducer(
  initialState,
  // categories
  on(addCategories, (state, { payload }) => ({
    ...state,
    categories: payload,
  })),
  // products
  on(addProducts, (state, { payload }) => ({
    ...state,
    products: payload,
  })),
  on(setActiveUser, (state) => {
    // Mettre \xE0 jour localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
    }
    return { ...state, isLoggedIn: true };
  }),
  on(removeActiveUser, (state) => {
    // Supprimer l'\xE9tat de localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
    return { ...state, isLoggedIn: false };
  })
);

// S\xE9lecteurs
export const selectDataState = createFeatureSelector{DataState}('data');

export const selectCategories = createSelector(
  selectDataState,
  (state) => state.categories
);
export const selectProducts = createSelector(
  selectDataState,
  (state) => state.products
);
export const selectIsLoggedIn = createSelector(
  selectDataState,
  (state) => state.isLoggedIn
);

          `),H(),a()(),l(32,"div",18)(33,"i",14),C("click",function(){return S(r),A(i.copy3())}),a(),N(34,HV,3,0,"span",15),l(35,"pre",16,2),W(),s(37,`import { provideStore } from '@ngrx/store';
import { dataReducer } from './data.slice';

export const appStore = provideStore({
  data: dataReducer,
});`),H(),a()()(),y(38,"hr"),l(39,"div"),s(40," ****************************************"),l(41,"span",19),s(42,"Explication"),a(),s(43,"************************************************* "),l(44,"pre")(45,"strong"),s(46,"D\xE9marche \xE0 suivre:"),a(),s(47,`
1. installer ngrx: npm install @ngrx/store
2. creer le fichier reducer et le store
3. ajouter appStore dans app.config.ts
       `),a()()()}t&2&&(g(5),We(i.categories.length>0?5:-1),g(),We(i.categories.length===0&&i.hasError?6:-1),g(),We(i.categories.length===0&&!i.hasError&&i.isClicked?7:-1),g(15),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var WV=["tab1"],KV=["tab2"];function QV(n,e){if(n&1&&(l(0,"div",13)(1,"div",14),y(2,"img",15),l(3,"div",16)(4,"h5",17),s(5),a(),l(6,"p",18),s(7),a(),l(8,"p",18)(9,"strong"),s(10,"Cat\xE9gorie :"),a(),s(11),a(),l(12,"p",18)(13,"strong"),s(14,"Prix :"),a(),s(15),a(),l(16,"a",19),s(17,"Voir le produit"),a()()()()),n&2){let t=ce().$implicit;g(2),I("src",t.thumbnail||(t.images!=null&&t.images.length?t.images[0]:""),Cl)("alt",t.nom),g(3),ge(t.title),g(2),$(" ",t.description.substring(0,100)+"..."," "),g(4),$(" ",t.category," "),g(4),$(" ",t.price," \u20AC ")}}function JV(n,e){if(n&1&&N(0,QV,18,6,"div",13),n&2){let t=e.$index;We(t<9?0:-1)}}function XV(n,e){if(n&1&&(l(0,"div",3),Yt(1,JV,1,1,null,null,Lr),a()),n&2){let t=ce();g(),Zt(t.products)}}function YV(n,e){n&1&&(l(0,"div",4),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des produits. "),a())}function ZV(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}var Ld=class n{constructor(e){this.http=e}products=[];hasError=!1;ngOnInit(){this.http.get("https://dummyjson.com/products").subscribe({next:t=>{console.log("response :",t),this.products=t.products||[],console.log("response :",this.products)},error:()=>{this.hasError=!0}})}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(se(en))};static \u0275cmp=k({type:n,selectors:[["app-http"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,WV,5),q(i.infoTab2,KV,5)),t&2&&ne(2)},decls:45,vars:3,consts:[["tab1",""],[1,"container","mt-3"],[1,"tab"],[1,"row","mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"col-md-4","mb-4"],[1,"card"],[1,"card-img-top","img-fluid",2,"max-height","150px","object-fit","cover",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn","btn-primary"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"C'est quoi Http Client ?"),a(),y(3,"hr"),l(4,"p"),s(5," HttpClient est le service int\xE9gr\xE9 d'Angular pour effectuer des requ\xEAtes HTTP en GET, POST, DELETE, PUT etc. Il permet de communiquer avec des API REST, r\xE9cup\xE9rer des donn\xE9es JSON, envoyer des formulaires, g\xE9rer des erreurs, et bien plus encore. "),a(),l(6,"h3"),s(7,"Configuration:"),a(),l(8,"p"),s(9," Pour pouvoir utiliser le HttpClient, vous devez ajouter provideHttpClient() dans le tableau de providers de appConfig. "),a(),l(10,"pre",2),s(11,`export const appConfig: ApplicationConfig = %#123;
  providers: [provideHttpClient()],
};`),a(),l(12,"p"),s(13," Cela a pour effet de mettre \xE0 disposition le HttpClient au sein de votre application enti\xE8re, ainsi vous pourrez faire vos requ\xEAtes http. "),a(),l(14,"h3"),s(15,"Cr\xE9ation du service avec httpclient:"),a(),l(16,"pre",2),s(17,`import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products'; // URL de l'API

  constructor(private http: HttpClient) {}

  // \u{1F539} 1\uFE0F\u20E3 R\xE9cup\xE9rer tous les produits (GET)
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // \u{1F539} 2\uFE0F\u20E3 R\xE9cup\xE9rer un produit par ID (GET)
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(\`\${this.apiUrl}/\${id}\`).pipe(
      catchError(this.handleError)
    );
  }

  // \u{1F539} 3\uFE0F\u20E3 Ajouter un produit (POST)
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // \u{1F539} 4\uFE0F\u20E3 Mettre \xE0 jour un produit (PUT)
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(\`\${this.apiUrl}/\${id}\`, product, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // \u{1F539} 5\uFE0F\u20E3 Supprimer un produit (DELETE)
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(\`\${this.apiUrl}/\${id}\`).pipe(
      catchError(this.handleError)
    );
  }

  // \u{1F6D1} Gestion des erreurs
  private handleError(error: any) {
    console.error('Erreur d\xE9tect\xE9e:', error);
    return throwError(() => new Error('Probl\xE8me avec l'API.'));
  }

  // \u{1F4CC} Options HTTP (headers)
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
`),a(),l(18,"h3"),s(19,"Utilisation du Service dans un Composant"),a(),l(20,"p"),s(21,"On va maintenant utiliser notre ProductService dans un composant pour afficher les donn\xE9es de l\u2019API."),a(),l(22,"p"),s(23,"\u{1F449} Code du composant product.component.ts :"),a(),l(24,"pre",2),s(25,`import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports:[CommonModule],
  template: \`
  <div class="container">
  <h1>Liste des Produits</h1>
  <hr />

  <div *ngIf="hasError">
    <p class="text-danger">Une erreur s'est produite lors du chargement des produits.</p>
  </div>

  <div *ngIf="products.length > 0; else noProducts" class="row">
    <div *ngFor="let product of products" class="col-md-4">
      <div class="card mb-4">
        <img [src]="product.thumbnail" class="card-img-top" [alt]="product.title" />
        <div class="card-body">
          <h5 class="card-title">{ { product.title } }</h5>
          <p class="card-text">{ { product.description }}</p>
          <p><strong>Prix:</strong> { { product.price | currency } }</p>
        </div>
      </div>
    </div>
  </div>

  <ng-template #noProducts>
    <p>Aucun produit disponible.</p>
  </ng-template>
</div>

  \`,

})
export class ProductComponent implements OnInit {
  products: any[] = []; // Stockage des produits
  hasError: boolean = false; // Gestion des erreurs

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products; // L'API retourne un objet avec \`products\`
        console.log('Produits r\xE9cup\xE9r\xE9s:', this.products);
      },
      error: (err) => {
        console.error('Erreur lors de la r\xE9cup\xE9ration:', err);
        this.hasError = true;
      },
    });
  }
}`),a(),y(26,"hr"),l(27,"h2"),s(28,"Liste des produits"),a(),N(29,XV,3,0,"div",3)(30,YV,2,0,"div",4),y(31,"hr"),l(32,"h2"),s(33,"Code source d'utilisation de http client get directement sans service"),a(),l(34,"ul",5)(35,"li",6)(36,"button",7),s(37," Composant Parent "),a()()(),l(38,"div",8)(39,"div",9)(40,"i",10),C("click",function(){return S(r),A(i.copy1())}),a(),N(41,ZV,3,0,"span",11),l(42,"pre",12,0),W(),s(44,`import { HttpClient } from "@angular/common/http";
import { ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component, viewChild } from "@angular/core";

@Component({
  selector: "app-http",
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container mt-3">
      <h1>Test de la requ\xEAte Http</h1>
      @if (products.length > 0) {
      <div class="row mt-3">
        @for (product of products; track $index) { @if ($index < 9) {
        <!-- Afficher uniquement les 10 premiers produits -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              [src]="
                product.thumbnail ||
                (product.images?.length ? product.images[0] : '')
              "
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description.substring(0, 100) + "..." }}
                <!-- Description raccourcie -->
              </p>
              <p class="card-text">
                <strong>Cat\xE9gorie :</strong> {{ product.category }}
              </p>
              <p class="card-text">
                <strong>Prix :</strong> {{ product.price }} \u20AC
              </p>
              <a href="#" class="btn btn-primary">Voir le produit</a>
            </div>
          </div>
        </div>
        } }
      </div>
      } @if (products.length === 0 && hasError) {
      <div class="alert alert-danger">
        Une erreur est survenue lors de la r\xE9cup\xE9ration des produits.
      </div>
      }
    </div>
  \`,
})
export class ClienthttpComponent {
  constructor(private http: HttpClient) {}
  products: any[] = [];
  hasError: boolean = false;
  ngOnInit(): void {
    const response = this.http.get("https://dummyjson.com/products");
    response.subscribe({
      next: (response: any) => {
        console.log("response :", response);
        this.products = response.products || []; // Assurez-vous que la cl\xE9 existe
        console.log("response :", this.products);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }
}`),H(),a()()()()}t&2&&(g(29),We(i.products.length>0?29:-1),g(),We(i.products.length===0&&i.hasError?30:-1),g(11),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var e9=["childContent"],Ud=class n{childContent;showAlert(){alert("M\xE9thode appel\xE9e depuis le parent !")}changeText(e){this.childContent.nativeElement.innerHTML=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant27"]],viewQuery:function(t,i){if(t&1&&Si(e9,5),t&2){let r;ti(r=ni())&&(i.childContent=r.first)}},decls:7,vars:0,consts:[["childContent",""],[1,"border","p-3"],[1,"d-flex","justify-content-center"],[1,"p-3","border","w-25",2,"background-color","lightyellow"]],template:function(t,i){t&1&&(l(0,"div",1)(1,"h3"),s(2,"Enfant"),a(),l(3,"div",2)(4,"div",3,0),s(6," Contenu initial du composant enfant. "),a()()())},encapsulation:2})};var t9=["child"],n9=["tab1"],i9=["tab2"];function r9(n,e){n&1&&(l(0,"span",22),s(1,"copied "),y(2,"i",23),a())}function o9(n,e){n&1&&(l(0,"span",22),s(1,"copied "),y(2,"i",23),a())}var jd=class n{childComponent=z("child");compteur=0;infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;callChildMethod(){this.childComponent()?.showAlert()}changeChildText(){this.childComponent()?.changeText('<span class="text-danger">Texte mis \xE0 jour depuis le parent !</span>')}changeStyleChildElmnt(){let e=this.childComponent();if(e){let t=e.childContent.nativeElement;t.style.backgroundColor="lightblue",t.style.color="white",t.style.padding="20px",t.style.border="2px solid blue",t.style.borderRadius="10px"}}animElmntChild(){let t=this.childComponent()?.childContent.nativeElement,i=0,r=1,o=setInterval(()=>{i+=r*5,t.style.transform=`translateX(${i}px)`,(i>=100||i<=-100)&&(r*=-1)},30);setTimeout(()=>{clearInterval(o),t.style.transform="translateX(0)"},5e3)}copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user-card"]],viewQuery:function(t,i){t&1&&(q(i.childComponent,t9,5),q(i.infoTab1,n9,5),q(i.infoTab2,i9,5)),t&2&&ne(3)},decls:70,vars:2,consts:[["child",""],["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[1,"btn","btn-success","me-3",3,"click"],[1,"btn","btn-secondary","me-3",3,"click"],[1,"btn","btn-secondary",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content","fw-bold",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"fw-bold"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"viewChild: acc\xE9der \xE0 un composant enfant"),a(),y(3,"hr"),l(4,"div",4)(5,"h3"),s(6,"Parent"),a(),l(7,"button",5),C("click",function(){return S(r),A(i.callChildMethod())}),s(8," Appeler m\xE9thode enfant "),a(),l(9,"button",6),C("click",function(){return S(r),A(i.changeChildText())}),s(10," Changer le texte de l'element de l'enfant"),a(),y(11,"br")(12,"br"),l(13,"button",6),C("click",function(){return S(r),A(i.changeStyleChildElmnt())}),s(14," Changer le style de l'element de l'enfant "),a(),l(15,"button",7),C("click",function(){return S(r),A(i.animElmntChild())}),s(16," faire bouger l'element de l'enfant "),a(),y(17,"hr")(18,"app-enfant27",null,0),a(),y(20,"hr"),l(21,"ul",8)(22,"li",9)(23,"button",10),s(24," viewChild Parent "),a()(),l(25,"li",9)(26,"button",11),s(27," viewChild Enfant "),a()()(),l(28,"div",12)(29,"div",13)(30,"i",14),C("click",function(){return S(r),A(i.copy1())}),a(),N(31,r9,3,0,"span",15),l(32,"pre",16,1),W(),s(34,`import { EnfantComponent } from './enfant.component';
import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent], // Importation n\xE9cessaire pour inclure le composant enfant
  template: \`
    <div class="container">
      <h1>viewChild: acc\xE9der \xE0 un composant enfant</h1>
      <hr />
      <div class="border p-3">
        <h3>Parent</h3>
        <button class="btn btn-success me-3" (click)="callChildMethod()">
          Appeler m\xE9thode enfant
        </button>
        <button class="btn btn-secondary me-3" (click)="changeChildText()">
          Changer le texte de l'\xE9l\xE9ment de l'enfant
        </button>
        <br /><br />
        <button class="btn btn-secondary me-3" (click)="changeStyleChildElmnt()">
          Changer le style de l'\xE9l\xE9ment de l'enfant
        </button>
        <button class="btn btn-secondary" (click)="animElmntChild()">
          Faire bouger l'\xE9l\xE9ment de l'enfant
        </button>
        <hr />
        <!-- Inclusion du composant enfant avec une r\xE9f\xE9rence -->
        <app-enfant #child></app-enfant>
      </div>
    </div>
  \`,
})
export class ParentComponent {
  // Acc\xE8s au composant enfant
  childComponent = viewChild<EnfantComponent>('child');

  // M\xE9thode pour appeler une m\xE9thode du composant enfant
  callChildMethod() {
    const child = this.childComponent();
    child?.showAlert();
  }

  // Changer le texte de l'enfant
  changeChildText() {
    const child = this.childComponent();
    child?.changeText(
      '<span class="text-danger">Texte mis \xE0 jour depuis le parent !</span>'
    );
  }

  // Changer le style de l'enfant
  changeStyleChildElmnt() {
    const child = this.childComponent();
    const element = child?.childContent.nativeElement;
    if (element) {
      element.style.backgroundColor = 'lightblue';
      element.style.color = 'white';
      element.style.padding = '20px';
      element.style.border = '2px solid blue';
      element.style.borderRadius = '10px';
    }
  }

  // Animer l'\xE9l\xE9ment de l'enfant
  animElmntChild() {
    const child = this.childComponent();
    const element = child?.childContent.nativeElement;

    let position = 0;
    let direction = 1;

    const animationInterval = setInterval(() => {
      position += direction * 5;
      element.style.transform = \`translateX(\${position}px)\`;

      if (position >= 100 || position <= -100) direction *= -1;
    }, 30);

    setTimeout(() => {
      clearInterval(animationInterval);
      element.style.transform = 'translateX(0)';
    }, 5000);
  }
}
    `),H(),a()(),l(35,"div",17)(36,"i",14),C("click",function(){return S(r),A(i.copy2())}),a(),N(37,o9,3,0,"span",15),l(38,"pre",16,2),W(),s(40,`import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  template: \`
    <div class="border p-3">
      <h3>Enfant</h3>
      <div class="d-flex justify-content-center">
        <div
          #childContent
          class="p-3 border w-25"
          style="background-color: lightyellow;"
        >
          Contenu initial du composant enfant.
        </div>
      </div>
    </div>
  \`,
})
export class EnfantComponent {
  @ViewChild('childContent') childContent!: ElementRef;

  showAlert() {
    alert('M\xE9thode appel\xE9e depuis le parent !');
  }

  changeText(newText: string) {
    this.childContent.nativeElement.innerHTML = newText;
  }
}
    `),H(),a()()(),y(41,"hr"),l(42,"div",18),s(43," ****************************************"),l(44,"span",19),s(45,"cours"),a(),s(46,"************************************************* "),a(),l(47,"pre"),s(48,`
Vous pouvez aussi acc\xE9der \xE0 un composant enfant, ainsi \xE0 ses propri\xE9t\xE9s et ses m\xE9thodes et ses elements dom.

`),l(49,"span",20),s(50,"Dans le dom du parent:"),a(),s(51,`
Pour cela il faut integrer le composant et le referencier avec un #:
`),l(52,"span",21),s(53,"<app-enfant #child></app-enfant>"),a(),s(54,`

`),l(55,"span",20),s(56,"Dans le ts du parent:"),a(),s(57,`
`),l(58,"span",21),s(59,"childComponent = viewChild<EnfantComponent>('child');"),a(),s(60,`
ou tout simplement:
`),l(61,"span",21),s(62,"childComponent = viewChild(EnfantComponent);"),a(),s(63,`

`),l(64,"span",20),s(65,"Utilisation de l'element:"),a(),s(66,`
childComponent est un signal, on l'utiliser avec des parenth\xE8ses: `),l(67,"span",21),s(68,"this.childComponent()"),a(),s(69,`
     `),a()()}t&2&&(g(31),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[Ud,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#f8f9fa!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var s9=["paragraph"],a9=["tab1"];function l9(n,e){n&1&&(l(0,"span",17),s(1,"copied "),y(2,"i",18),a())}var Bd=class n{paragraphs=Tl("paragraph");showParagraphs(){this.paragraphs().forEach(e=>{e.nativeElement.style.backgroundColor="#ffc09f"})}reinitialise(){this.paragraphs().forEach(e=>{e.nativeElement.style.backgroundColor=""})}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test28"]],viewQuery:function(t,i){t&1&&(q(i.paragraphs,s9,5),q(i.infoTab1,a9,5)),t&2&&ne(2)},decls:44,vars:1,consts:[["paragraph",""],["tab1",""],[1,"container"],[1,"p-2"],[1,"btn","btn-success","mx-3",3,"click"],[1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2," ViewChildren():acc\xE9der \xE0 plusieurs \xE9l\xE9ments d'un composant "),a(),y(3,"hr"),l(4,"p",3,0),s(6,"Premier paragraphe"),a(),l(7,"p",3,0),s(9,"Deuxi\xE8me paragraphe"),a(),l(10,"p",3,0),s(12,"Troisi\xE8me paragraphe"),a(),l(13,"button",4),C("click",function(){return S(r),A(i.showParagraphs())}),s(14," Mettre en evidence les paragraphes "),a(),l(15,"button",5),C("click",function(){return S(r),A(i.reinitialise())}),s(16," R\xE9initialiser les paragraphes "),a(),l(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant Parent "),a()()(),l(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,l9,3,0,"span",12),l(25,"pre",13,1),W(),s(27,`import { Component, viewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test28',
  standalone: true,
  template: \`
    <div class="container">
      <h1>
        ViewChildren():acc\xE9der \xE0 plusieurs \xE9l\xE9ments d'un composant
      </h1>
      <hr/>
      <p class="p-2" #paragraph>Premier paragraphe</p>
      <p class="p-2" #paragraph>Deuxi\xE8me paragraphe</p>
      <p class="p-2" #paragraph>Troisi\xE8me paragraphe</p>
      <button class="btn btn-success mx-3" (click)="showParagraphs()">
        Mettre en evidence les paragraphes
      </button>
      <button class="btn btn-success" (click)="reinitialise()">
        R\xE9initialiser les paragraphes
      </button>
    </div>
  \`,
})
export class Test28Component {
  // R\xE9cup\xE8re tous les \xE9l\xE9ments avec la r\xE9f\xE9rence #paragraph
  paragraphs = viewChildren<ElementRef>('paragraph');

  showParagraphs() {
    // Modifie la background de chaque paragraphe
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '#ffc09f';
    });
  }
  reinitialise() {
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '';
    });
  }
}`),H(),a()()(),l(28,"div",14),s(29," ****************************************"),l(30,"span",15),s(31,"cours"),a(),s(32,"************************************************* "),a(),l(33,"pre"),s(34,`viewChildren() est un signal pour acc\xE9der \xE0 plusieurs \xE9l\xE9ments enfants d'un composant.
La fonction viewChildren() retourne un signal contenant un tableau d'ElementRef.
Pour acc\xE9der aux \xE9l\xE9ments, il faut utiliser les parenth\xE8ses () pour obtenir la valeur du signal.

`),l(35,"strong"),s(36,"Comment \xE7a marche:"),a(),s(37,`

  - dans la template referencier les elements du dom :
  <p class="p-2" #paragraph>Premier paragraphe</p>
  <p class="p-2" #paragraph>Deuxi\xE8me paragraphe</p>
  <p class="p-2" #paragraph>Troisi\xE8me paragraphe</p>

  - dans ts:R\xE9cup\xE9rer tous les \xE9l\xE9ments avec la r\xE9f\xE9rence #paragraph
  `),l(38,"strong",16),s(39,"paragraphs = viewChildren<ElementRef>('paragraph');"),a(),s(40,`

  - utilisation:
  `),l(41,"strong",16),s(42,`this.paragraphs().forEach((p) => {
  p.nativeElement....
  });
  `),a(),s(43,`
      `),a()()}t&2&&(g(24),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var c9=["card"],Ho=class n{propsUser;card=z("card");colorCardUser(){let e=this.card();e&&(e.nativeElement.style.backgroundColor="yellow")}initialize(){let e=this.card();e&&(e.nativeElement.style.backgroundColor="")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant29"]],viewQuery:function(t,i){t&1&&q(i.card,c9,5),t&2&&ne()},inputs:{propsUser:"propsUser"},decls:6,vars:3,consts:[["card",""],[1,"border","p-3","mb-2"]],template:function(t,i){t&1&&(l(0,"div",1,0)(2,"h3"),s(3),a(),l(4,"p"),s(5),a()()),t&2&&(g(3),kn("",i.propsUser.firstname," ",i.propsUser.lastname,""),g(2),$("Email : ",i.propsUser.email,""))},encapsulation:2})};var u9=["tab1"],d9=["tab2"],p9=(n,e)=>e.id;function m9(n,e){if(n&1&&(l(0,"div",4)(1,"h3"),s(2,"Enfant"),a(),y(3,"app-enfant29",20),a()),n&2){let t=e.$implicit;g(3),I("propsUser",t)}}function h9(n,e){n&1&&s(0," Aucun utilisateur trouv\xE9 ")}function f9(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}function g9(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}var qd=class n{users=[{id:"1",firstname:"John",lastname:"Doe",email:"john@example.com",tel:"",address:""},{id:"2",firstname:"kain",lastname:"adam",email:"kain@example.com",tel:"",address:""}];userCards=Tl(Ho);colorCardAllUsers(){let e=this.userCards();console.log(" this.userCards() :",this.userCards()),e.forEach(t=>{t.colorCardUser()})}initializeAllUsers(){this.userCards().forEach(t=>{t.initialize()})}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test29"]],viewQuery:function(t,i){t&1&&(q(i.userCards,Ho,5),q(i.infoTab1,u9,5),q(i.infoTab2,d9,5)),t&2&&ne(3)},decls:53,vars:3,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"p-2","border"],[1,"p-2","border","my-2"],[1,"btn","btn-success","mt-3","me-3",3,"click"],[1,"btn","btn-danger","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[3,"propsUser"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"viewChildren : Acc\xE9der aux composants enfants"),a(),y(3,"hr"),l(4,"div",3)(5,"h3"),s(6,"Parent"),a(),Yt(7,m9,4,1,"div",4,p9,!1,h9,1,0),l(10,"button",5),C("click",function(){return S(r),A(i.colorCardAllUsers())}),s(11," Mettre en \xE9vidence tous les utilisateurs "),a(),l(12,"button",6),C("click",function(){return S(r),A(i.initializeAllUsers())}),s(13," R\xE9initialiser "),a()(),l(14,"ul",7)(15,"li",8)(16,"button",9),s(17," Composant Parent "),a()(),l(18,"li",8)(19,"button",10),s(20," Composant Enfant "),a()()(),l(21,"div",11)(22,"div",12)(23,"i",13),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,f9,3,0,"span",14),l(25,"pre",15,0),W(),s(27,`import { Enfant29Component } from './enfant29.component';
import { Component, viewChildren } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-test29',
  standalone: true,
  imports: [Enfant29Component],
  template: \`
    <div class="container">
      <h1>viewChildren : Acc\xE9der aux composants enfants</h1>
      <hr />
      <div class="p-2 border">
        <h3>Parent</h3>

        <!-- Utilisation de *ngFor pour afficher chaque composant enfant -->
        @for (user of users; track user.id) {
        <div class="p-2 border my-2">
          <h3>Enfant</h3>
          <app-enfant29 [propsUser]="user"></app-enfant29>
        </div>
        }@empty { Aucun utilisateur trouv\xE9 }

        <button class="btn btn-success mt-3 me-3" (click)="colorCardAllUsers()">
          Mettre en \xE9vidence tous les utilisateurs
        </button>
        <button class="btn btn-danger mt-3" (click)="initializeAllUsers()">
          R\xE9initialiser
        </button>
      </div>
    </div>
  \`,
})
export class Test29Component {
  users: User[] = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      tel: '',
      address: '',
    },
    {
      id: '2',
      firstname: 'kain',
      lastname: 'adam',
      email: 'kain@example.com',
      tel: '',
      address: '',
    },
  ];

  // R\xE9cup\xE9ration des enfants via la nouvelle API viewChildren, il retourne un tableau
  userCards = viewChildren(Enfant29Component);

  // M\xE9thode pour mettre en \xE9vidence tous les utilisateurs
  colorCardAllUsers() {
    const cards = this.userCards();
    console.log(' this.userCards() :', this.userCards());
    cards.forEach((card) => {
      card.colorCardUser(); // Appel d'une m\xE9thode publique de l'enfant

    });
  }
  initializeAllUsers() {
    const cards = this.userCards();
    cards.forEach((card) => {
      card.initialize(); // Appel d'une m\xE9thode publique de l'enfant
    });
  }
}`),H(),a()(),l(28,"div",16)(29,"i",13),C("click",function(){return S(r),A(i.copy2())}),a(),N(30,g9,3,0,"span",14),l(31,"pre",15,1),W(),s(33,`import { Component, Input, viewChild, ElementRef } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-enfant29',
  standalone: true,
  template: \`
    <div #card class="border p-3 mb-2">
      <h3>{{ propsUser.firstname }} {{ propsUser.lastname }}</h3>
      <p>Email : {{ propsUser.email }}</p>
    </div>
  \`,
})
export class Enfant29Component {
  @Input() propsUser!: User;
  card = viewChild<ElementRef>('card');

  // M\xE9thode pour mettre en \xE9vidence un utilisateur
  colorCardUser() {
    const element = this.card(); // Acc\xE8de \xE0 l'\xE9l\xE9ment DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild
    }
  }
  initialize() {
    const element = this.card(); // Acc\xE8de \xE0 l'\xE9l\xE9ment DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = ''; // Applique un style via ViewChild
    }
  }
}`),H(),a()()(),l(34,"div",17),s(35," ****************************************"),l(36,"span",18),s(37,"cours"),a(),s(38,"************************************************* "),a(),l(39,"pre"),s(40,`Il sert \xE0 acc\xE9der \xE0 des enfants ainsi \xE0 leurs propri\xE9t\xE9s et leurs m\xE9thodes
La m\xE9thode ViewChildren(Enfant29Component) retourne un QueryList<Enfant29Component>, qui repr\xE9sente une liste dynamique de tous les enfants de type Enfant29Component.
Vous pouvez utiliser cette liste pour interagir avec les composants enfants dans le parent.

`),l(41,"strong"),s(42,"syntaxe:"),a(),s(43,`
Pour r\xE9cup\xE9rer des enfants via la nouvelle viewChildren,
`),l(44,"strong",19),s(45,"userCards = viewChildren(Enfant29Component);"),a(),s(46,`
userCards est une liste d'enfants du type Enfant29Component, nous avons deux enfants dans la template.

`),l(47,"strong"),s(48,"utilisation:"),a(),s(49,`
viewChildren() retourne un signal tableau. On acc\xE8de aux propri\xE9t\xE9s et aux m\xE9thodes des m\xE9thodes des enfants en parcourant le tableau:
`),l(50,"strong",19),s(51,`
const cards = this.userCards();
console.log(' this.userCards() :',  this.userCards());
cards.forEach((card) => {
card....; // Acceder \xE0 une m\xE9thode ou une propri\xE9t\xE9 publique de l'enfant
});
`),a(),s(52,`

      `),a()()}t&2&&(g(7),Zt(i.users),g(17),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,te,Ho],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var v9=["cardTitle"],_9=["*"],zd=class n{title=xl("cardTitle");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant30"]],contentQueries:function(t,i,r){t&1&&Al(r,i.title,v9,5),t&2&&ne()},ngContentSelectors:_9,decls:8,vars:1,consts:[[1,"border","p-3"],[1,"text-danger","fw-bold"]],template:function(t,i){if(t&1&&(Ur(),l(0,"div",0)(1,"h3"),s(2,"Enfant"),a(),jr(3),l(4,"div"),s(5,"Titre de la carte : "),l(6,"span",1),s(7),a()()()),t&2){let r;g(7),ge((r=i.title())==null?null:r.nativeElement.textContent)}},encapsulation:2})};var b9=["tab1"],y9=["tab2"];function E9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}function C9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}var $d=class n{infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test30"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,b9,5),q(i.infoTab2,y9,5)),t&2&&ne(2)},decls:54,vars:2,consts:[["cardTitle",""],["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2,"contentChild: acc\xE9der aux \xE9l\xE9ments enfants d'un composant"),a(),y(3,"hr"),l(4,"div",4)(5,"h3"),s(6,"Parent"),a(),l(7,"app-enfant30")(8,"h2",null,0),s(10,"John Doe"),a(),l(11,"p"),s(12,"D\xE9veloppeur Web"),a(),l(13,"p"),s(14,"Lorem ipsum dolor sit amet..."),a()()(),l(15,"ul",5)(16,"li",6)(17,"button",7),s(18," Composant Parent "),a()(),l(19,"li",6)(20,"button",8),s(21," Composant Enfant "),a()()(),l(22,"div",9)(23,"div",10)(24,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(25,E9,3,0,"span",12),l(26,"pre",13,1),W(),s(28,`import { EnfantComponent } from './enfant.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [EnfantComponent],
  template: \`
    <div class="container">
      <h1>contentChild: acc\xE9der aux \xE9l\xE9ments enfants d'un composant</h1>
      <hr />
      <div class="border p-3">
        <h3>Parent</h3>
        <app-enfant>
          <h2 #cardTitle>John Doe</h2>
          <p>D\xE9veloppeur Web</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </app-enfant>
      </div>
    </div>
  \`,
})
export class Test30Component {}`),H(),a()(),l(29,"div",14)(30,"i",11),C("click",function(){return S(r),A(i.copy2())}),a(),N(31,C9,3,0,"span",12),l(32,"pre",13,2),W(),s(34,`import {  Component,  contentChild,  ElementRef,} from "@angular/core";

@Component({
  selector: "app-enfant30",
  standalone: true,
  template: \`
    <div class="border p-3">
      <h3>Enfant</h3>
      <ng-content />
      <div>
        Titre de la carte :
        <span class="text-danger fw-bold">{{
          title()?.nativeElement.textContent
        }}</span>
      </div>
    </div>
  \`,
})
export class Enfant30Component {
  title = contentChild<ElementRef>("cardTitle"); // c'est un signal
  // ou
  // @ContentChild('cardTitle') title!: ElementRef;//ce n'est pas un signal
}`),H(),a()()(),l(35,"div",15),s(36," ****************************************"),l(37,"span",16),s(38,"cours"),a(),s(39,"************************************************* "),a(),l(40,"pre"),s(41,`Le contentChild() est une fonction qui permet d'acc\xE9der aux \xE9l\xE9ments enfants d'un composant.

Vous avez un composant parent qui passe un titre \xE0 travers un element dom via une r\xE9f\xE9rence dans le ngcontent d'un composant enfant .
L'enfant utilise contentChild pour acc\xE9der \xE0 l'\xE9l\xE9ment contenent le titre et le personnaliser.

L'utilisation de contentChild() retourne un signal, ce qui signifie que la valeur sera automatiquement mise \xE0 jour si l'\xE9l\xE9ment enfant change.

`),l(42,"strong"),s(43,"Utilisation:"),a(),s(44,`
template du parent:`),l(45,"span",17),s(46,`
<app-enfant>
<h2 #cardTitle>John Doe</h2>
</app-enfant>
`),a(),s(47,`
template de l'enfant:`),l(48,"span",17),s(49,`
.......
<ng-content />
.......
`),a(),s(50,`
ts de l'enfant:`),l(51,"span",17),s(52,`
  title = contentChild<ElementRef>('cardTitle'); // c'est un signal
  `),a(),s(53,`
      `),a()()}t&2&&(g(25),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[zd,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Tr=class n{status=!0;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant31_2"]],decls:3,vars:1,consts:[[1,"badge"]],template:function(t,i){t&1&&(l(0,"div")(1,"span",0),s(2),a()()),t&2&&(g(2),$(" ",i.status?"En ligne":"Hors ligne"," "))},styles:[".badge[_ngcontent-%COMP%]{padding:4px 8px;background-color:#4caf50;color:#fff;border-radius:4px}"]})};var w9=["*"],Gd=class n{badge=xl(Tr);status=this.badge()?.status;toggleConnect(){this.badge().status=!this.badge()?.status}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant31_1"]],contentQueries:function(t,i,r){t&1&&Al(r,i.badge,Tr,5),t&2&&ne()},ngContentSelectors:w9,decls:8,vars:2,consts:[[1,"card"],[1,"btn","btn-success",3,"click"]],template:function(t,i){t&1&&(Ur(),l(0,"div",0)(1,"h2"),s(2,"Profil Utilisateur"),a(),jr(3),l(4,"button",1),C("click",function(){return i.toggleConnect()}),s(5),a(),l(6,"p"),s(7),a()()),t&2&&(g(5),ge(i.status?"se deconnecter":"se connecter"),g(2),$("Statut actuel : ",i.status,""))},styles:[".card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ddd;border-radius:8px}"]})};var T9=["tab1"],x9=["tab2"],I9=["tab3"];function S9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}function A9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}function P9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}var Hd=class n{infoTab1=z("tab1");infoTab2=z("tab2");infoTab3=z("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test31"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,T9,5),q(i.infoTab2,x9,5),q(i.infoTab3,I9,5)),t&2&&ne(3)},decls:46,vars:3,consts:[["tab1",""],["tab2",""],["tab3",""],[1,"container"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",3)(1,"h1"),s(2," contentChild: Acc\xE9der \xE0 un composant enfant dans la projection de contenu "),a(),y(3,"hr"),l(4,"div")(5,"h3"),s(6,"Parent"),a(),l(7,"app-enfant31_1"),y(8,"app-enfant31_2"),a()(),l(9,"ul",4)(10,"li",5)(11,"button",6),s(12," Composant Parent "),a()(),l(13,"li",5)(14,"button",7),s(15," Composant Enfant 1 "),a()(),l(16,"li",5)(17,"button",8),s(18," Composant Enfant 2 "),a()()(),l(19,"div",9)(20,"div",10)(21,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(22,S9,3,0,"span",12),l(23,"pre",13,0),W(),s(25,`import { Enfant1Component } from './enfant1.component';
import { Enfant2Component } from './enfant2.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [Enfant1Component, Enfant2Component],
  standalone: true,
  template: \`
    <div class="container">
      <h1>
        contentChild: Acc\xE9der \xE0 un composant enfant dans la projection de
        contenu
      </h1>
      <hr />
      <div>
        <h3>Parent</h3>
        <app-enfant1>
          <app-enfant2></app-enfant2>
        </app-enfant1>
      </div>
    </div>
  \`,
  styles: \`
  .card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
\`,
})
export class Test31Component {}`),H(),a()(),l(26,"div",14)(27,"i",11),C("click",function(){return S(r),A(i.copy2())}),a(),N(28,A9,3,0,"span",12),l(29,"pre",13,1),W(),s(31,`import { Enfant2Component } from './enfant2.component';
import { Component, computed, contentChild } from '@angular/core';

@Component({
  selector: 'app-enfant1',
  standalone: true,
  template: \`
    <div class="card">
      <h2>Profil Utilisateur</h2>
      <ng-content />

      @if (badgeStatus()) {
        <p>Statut actuel : {{ badgeStatus() }}</p>
      }
    </div>
  \`,
   styles: [\`
   .card {
     padding: 16px;
     border: 1px solid #ddd;
     border-radius: 8px;
   }
 \`],
})
export class Enfant1Component {
  badge = contentChild(Enfant2Component);
  badgeStatus = computed(() => this.badge()?.status);
}`),H(),a()(),l(32,"div",15)(33,"i",11),C("click",function(){return S(r),A(i.copy3())}),a(),N(34,P9,3,0,"span",12),l(35,"pre",13,2),W(),s(37,`import { Component} from '@angular/core';

@Component({
  selector: 'app-enfant2',
  standalone: true,
  template: \`
     <span class="badge">
      {{ status }}
    </span>
  \`,
   styles: [\`
   .badge {
     padding: 4px 8px;
     background-color: #4CAF50;
     color: white;
     border-radius: 4px;
   }
 \`],
})
export class Enfant2Component {
  status = 'En ligne';

}`),H(),a()()(),y(38,"hr"),l(39,"div",16),s(40," ****************************************"),l(41,"span",17),s(42,"cours"),a(),s(43,"************************************************* "),a(),l(44,"pre"),s(45,`      ...
      `),a()()}t&2&&(g(22),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[Gd,Tr,G,te],styles:[".card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ddd;border-radius:8px}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var R9=["tab1"],D9=["refTemplate"];function k9(n,e){n&1&&Ub(0)}function M9(n,e){if(n&1&&(xi(0),N(1,k9,1,0,"ng-container",16),Ii()),n&2){let t=ce();g(),I("ngTemplateOutlet",t.myTemplate)}}function O9(n,e){n&1&&(l(0,"p",17),s(1,"Contenu du template rendu via ViewChild"),a())}function N9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}var Wd=class n{myTemplate;showTemplate=!1;toggleTemplate(){this.showTemplate=!this.showTemplate}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,R9,5),Si(D9,5)),t&2){ne();let r;ti(r=ni())&&(i.myTemplate=r.first)}},decls:32,vars:3,consts:[["refTemplate",""],["tab1",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger","fw-bold"],[4,"ngTemplateOutlet"],[1,"mt-3"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"ViewChild avec ng-template"),a(),l(3,"button",3),C("click",function(){return S(r),A(i.toggleTemplate())}),s(4),a(),N(5,M9,2,1,"ng-container",4)(6,O9,2,0,"ng-template",null,0,ii),y(8,"hr"),l(9,"ul",5)(10,"li",6)(11,"button",7),s(12," Composant Parent "),a()()(),l(13,"div",8)(14,"div",9)(15,"i",10),C("click",function(){return S(r),A(i.copy1())}),a(),N(16,N9,3,0,"span",11),l(17,"pre",12,1),W(),s(19,`import { CommonModule } from "@angular/common";
import { Component, ViewChild, TemplateRef } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [CommonModule],
  standalone: true,
  template: \`
    <div class="container mt-3">
      <h1>ViewChild avec ng-template</h1>
      <button class="btn btn-success" (click)="toggleTemplate()">
        {{ showTemplate ? "Masquer" : "Afficher" }} le contenu
      </button>
      <!-- Contenu affich\xE9 ou masqu\xE9 -->
      <ng-container *ngIf="showTemplate">
        <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
      </ng-container>

      <!-- Template r\xE9f\xE9renc\xE9 avec ViewChild -->
      <ng-template #refTemplate>
        <p class="mt-3">Contenu du template rendu via ViewChild</p>
      </ng-template>
    </div>
  \`,
})
export class Test32Component {
  @ViewChild("refTemplate") myTemplate!: TemplateRef<any>;
  showTemplate: boolean = false;

  toggleTemplate() {
    this.showTemplate = !this.showTemplate; // Bascule entre afficher/masquer
  }
}

          `),H(),a()()(),l(20,"div",13),s(21," ****************************************"),l(22,"span",14),s(23,"cours"),a(),s(24,"************************************************* "),a(),l(25,"pre")(26,"strong"),s(27,"syntaxe :"),a(),s(28,`
`),l(29,"span",15),s(30,"@ViewChild('refTemplate') myTemplate!: TemplateRef{any};"),a(),s(31,`

      `),a()()}t&2&&(g(4),$(" ",i.showTemplate?"Masquer":"Afficher"," le contenu "),g(),I("ngIf",i.showTemplate),g(11),I("ngIf",i.clicked))},dependencies:[G,te,ny],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var V9=["tab1"],F9=["tab2"],L9=["userInfo"];function U9(n,e){n&1&&(l(0,"span",18),s(1,"copied "),y(2,"i",19),a())}var Kd=class n{user={id:"1",firstname:"John ",lastname:"Doe",email:"john@example.com",tel:"",address:""};infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}infoElement=z("userInfo");afficherNom(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="red",e.nativeElement.textContent=this.user.firstname)}afficherEmail(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="yellow",e.nativeElement.textContent=this.user.email)}initialise(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="",e.nativeElement.textContent="aucune information")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test26"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,V9,5),q(i.infoTab2,F9,5),q(i.infoElement,L9,5)),t&2&&ne(3)},decls:54,vars:1,consts:[["userInfo",""],["tab1",""],[1,"container"],[1,"rounded-3","border","p-3"],[1,"btn","btn-success","mt-3","me-3",3,"click"],[1,"btn","btn-danger","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-3"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fw-bolder"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"viewChild: acc\xE9der \xE0 un \xE9l\xE9ment du DOM"),a(),y(3,"hr"),l(4,"div",3,0),s(6,"aucune information"),a(),l(7,"button",4),C("click",function(){return S(r),A(i.afficherNom())}),s(8," Afficher son nom "),a(),l(9,"button",4),C("click",function(){return S(r),A(i.afficherEmail())}),s(10," Afficher son email "),a(),l(11,"button",5),C("click",function(){return S(r),A(i.initialise())}),s(12," R\xE9initialiser "),a(),l(13,"ul",6)(14,"li",7)(15,"button",8),s(16," Code viewChild Component "),a()()(),l(17,"div",9)(18,"div",10)(19,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(20,U9,3,0,"span",12),l(21,"pre",13,1),W(),s(23,`import { Component, ElementRef, viewChild } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-parent',
  template: \`
 <div class="container">
      <h1>viewChild: acc\xE9der \xE0 un \xE9l\xE9ment du DOM</h1>
      <hr />
      <div class="rounded-3 border p-3" #userInfo>aucune information</div>
      <button class="btn btn-success mt-3 me-3" (click)="afficherNom()">
        Afficher son nom
      </button>
      <button class="btn btn-success mt-3 me-3" (click)="afficherEmail()">
        Afficher son email
      </button>
      <button class="btn btn-danger mt-3" (click)="initialise()">
        R\xE9initialiser
      </button>
 </div>
 \`,
})

export class ParentComponent {
  user: User = {
    id: '1',
    firstname: 'John ',
    lastname: 'Doe',
    email: 'john@example.com',
    tel: '',
    address: '',
  };

  infoElement = viewChild<ElementRef>('userInfo');

  // Utilisation de ViewChild pour appliquer un style \xE0 l'\xE9l\xE9ment DOM cibl\xE9
  afficherNom() {
    const element = this.infoElement(); // Acc\xE8de \xE0 l'\xE9l\xE9ment DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'red'; // Applique un style via ViewChild
      element.nativeElement.textContent = this.user.firstname; // Applique un style via ViewChild
    }
  }
  afficherEmail() {
    const element = this.infoElement(); // Acc\xE8de \xE0 l'\xE9l\xE9ment DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild

      element.nativeElement.textContent = this.user.email;
    }
  }
  // R\xE9initialisation du style de l'\xE9l\xE9ment DOM via ViewChild
  initialise() {
    const element = this.infoElement(); // Acc\xE8de \xE0 l'\xE9l\xE9ment DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = ''; // R\xE9initialise le style via ViewChild
      element.nativeElement.textContent = 'aucune information';
    }
  }
}

          `),H(),a()()(),l(24,"div",14),s(25," ****************************************"),l(26,"span",15),s(27,"cours"),a(),s(28,"************************************************* "),a(),l(29,"pre")(30,"strong"),s(31,"ViewChild :"),a(),s(32,`
C'est comme useRef dans react.
Permet d'acc\xE9der \xE0 un \xE9l\xE9ment DOM ou un composant enfant dans le template \xE0 l'aide d'une r\xE9f\xE9rence locale.
Dans ce cas, la propri\xE9t\xE9 infoElement pointe vers l'\xE9l\xE9ment avec la r\xE9f\xE9rence locale #userInfo.
La fonction viewChild() `),l(33,"span",16),s(34,"retourne un signal"),a(),s(35,`, ce qui signifie que sa valeur sera automatiquement mise \xE0 jour si l'\xE9l\xE9ment change dans le DOM

`),l(36,"strong"),s(37,"Syntaxe :"),a(),s(38,`
<div #userInfo>...</div>
`),l(39,"span",17),s(40," infoElement = viewChild<ElementRef<HTMLElement>>('userInfo');"),a(),s(41,`
et pour l'utiliser il faut ajouter les () car c'est un signal: `),l(42,"span",17),s(43,"this.infoElement()"),a(),s(44,`
ou
`),l(45,"span",17),s(46,"@ViewChild('userInfo') infoElement!: ElementRef;"),a(),s(47,`
et pour l'utiliser on l'utilise sans ():`),l(48,"span",17),s(49,"this.infoElement"),a(),s(50,`

`),l(51,"strong"),s(52,"Utilisation dans les m\xE9thodes :"),a(),s(53,`
afficherNom() : Utilise viewChild pour modifier le style CSS de l'\xE9l\xE9ment DOM (changement de la couleur de fond) et pour modifier le contenu
initialise() : Utilise viewChild pour r\xE9initialiser le style appliqu\xE9 pr\xE9c\xE9demment.
      `),a()()}t&2&&(g(20),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#f8f9fa!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var j9=["*"],Qd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-card-props"]],ngContentSelectors:j9,decls:2,vars:0,consts:[[1,"simple-card","my-3"]],template:function(t,i){t&1&&(Ur(),l(0,"div",0),jr(1),a())},styles:[".simple-card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ccc;border-radius:10px;background-color:#fbf7ff}"]})};var B9=["tab1"],q9=["tab2"];function z9(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}function $9(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}var Jd=class n{user={id:1,name:"John Doe",username:"johndoe",email:"john@example.com"};infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-home"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,B9,5),q(i.infoTab2,q9,5)),t&2&&ne(2)},decls:42,vars:5,consts:[["tab1",""],["tab2",""],[1,"container"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"ng-content"),a(),y(3,"hr"),l(4,"h3"),s(5,"Dashboard"),a(),l(6,"app-card-props")(7,"h2"),s(8),a(),l(9,"h2"),s(10),a(),l(11,"p"),s(12),a()(),y(13,"hr"),l(14,"ul",3)(15,"li",4)(16,"button",5),s(17," Composant Parent "),a()(),l(18,"li",4)(19,"button",6),s(20," Composant Enfant "),a()()(),l(21,"div",7)(22,"div",8)(23,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,z9,3,0,"span",10),l(25,"pre",11,0),W(),s(27,`import { EnfantComponent } from './enfant.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EnfantComponent],
  template: \`
    <div class="container">
      <h1>ng-content</h1>
      <hr />
      <h3>Dashboard</h3>
      <app-enfant>
        <h2>{{ user.name }}</h2>
        <h2>{{ user.firstname }}</h2>
        <p>{{ user.email }}</p>
      </app-enfant>

    </div>
  \`,
})
export class AppComponent {
  user: any = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
  };
}`),H(),a()(),l(28,"div",12)(29,"i",9),C("click",function(){return S(r),A(i.copy2())}),a(),N(30,$9,3,0,"span",10),l(31,"pre",11,1),W(),s(33,`import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  template: \`
    <div class="simple-card my-3">
      <ng-content />
    </div>
  \`,
  styles: \`
    .simple-card {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color:#fbf7ff
    }
  \`,
})
export class EnfantComponent {}


          `),H(),a()()(),y(34,"hr"),l(35,"div",13),s(36," ****************************************"),l(37,"span",14),s(38,"cours"),a(),s(39,"************************************************* "),a(),l(40,"pre"),s(41,`L'\xE9quivalent de <ng-content> en Angular pour React est props.children,
une fonctionnalit\xE9 int\xE9gr\xE9e de React qui permet de passer du contenu personnalis\xE9 (ou des sous-composants) \xE0 un composant.
<ng-content> est utilis\xE9 uniquement dans un composant enfant pour permettre au composant parent d'injecter
(ou de projeter) du contenu personnalis\xE9 \xE0 l'int\xE9rieur du composant enfant.
Il agit comme un "emplacement r\xE9serv\xE9" dans le template du composant enfant o\xF9 le contenu fourni par le composant parent sera rendu.

      `),a()()}t&2&&(g(8),ge(i.user.name),g(2),ge(i.user.firstname),g(2),ge(i.user.email),g(12),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[Qd,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};function G9(n,e){n&1&&(l(0,"div",1)(1,"h3"),s(2,"Panneau Administrateur"),a(),l(3,"p"),s(4,"Acc\xE8s complet au syst\xE8me"),a()())}function H9(n,e){n&1&&(l(0,"div",2)(1,"h3"),s(2,"Panneau Manager"),a(),l(3,"p"),s(4,"Acc\xE8s \xE0 la gestion d'\xE9quipe"),a()())}function W9(n,e){n&1&&(l(0,"div",3)(1,"h3"),s(2,"Panneau Utilisateur"),a(),l(3,"p"),s(4,"Acc\xE8s limit\xE9"),a()())}var Xd=class n{userRole="admin";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user-role"]],decls:18,vars:1,consts:[[1,"container"],[1,"admin-panel"],[1,"manager-panel"],[1,"user-panel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){if(t&1&&(l(0,"div",0)(1,"h1"),s(2,"@switch"),a(),y(3,"hr"),l(4,"h2"),s(5,"Panneau utilisateur"),a(),N(6,G9,5,0,"div",1)(7,H9,5,0,"div",2)(8,W9,5,0,"div",3),l(9,"div",4),s(10," ****************************************"),l(11,"span",5),s(12,"cours"),a(),s(13,"************************************************* "),a(),l(14,"pre")(15,"strong"),s(16,"Syntaxe:"),a(),s(17,`
@switch (expression) {
@case (valeur1) {
// Code pour valeur1
}
@case (valeur2) {
// Code pour valeur2
}
@default {
// Code par d\xE9faut
}
}
      `),a()()),t&2){let r;g(6),We((r=i.userRole)==="admin"?6:r==="manager"?7:8)}},encapsulation:2})};var K9=["tab1"];function Q9(n,e){if(n&1&&(l(0,"div")(1,"h3"),s(2),a(),l(3,"p"),s(4),a()()),n&2){let t=ce();g(2),ge(t.user.name),g(2),$("Email: ",t.user.email,"")}}function J9(n,e){n&1&&(l(0,"p"),s(1,"Aucun utilisateur s\xE9lectionn\xE9"),a())}function X9(n,e){if(n&1&&(l(0,"div")(1,"h3"),s(2),a(),l(3,"p"),s(4),a()()),n&2){let t=ce();g(2),ge(t.user.name),g(2),$("Email: ",t.user.email,"")}}function Y9(n,e){n&1&&(l(0,"p"),s(1,"Aucun utilisateur s\xE9lectionn\xE9"),a())}function Z9(n,e){n&1&&(l(0,"span",17),s(1,"copied "),y(2,"i",18),a())}var Yd=class n{user={id:1,name:"Alice",username:"alice123",email:"alice@example.com"};infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user-details"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,K9,5),t&2&&ne()},decls:42,vars:4,consts:[["noUser",""],["tab1",""],[1,"container"],[1,"card","p-4"],[1,"fw-bolder"],[1,"card","p-4","mt-4"],[4,"ngIf","ngIfElse"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"@if / *ngIf"),a(),y(3,"hr"),l(4,"h3"),s(5,"D\xE9tails de l'utilisateur"),a(),l(6,"div",3)(7,"h4",4),s(8,"Version r\xE9cente:"),a(),N(9,Q9,5,2,"div")(10,J9,2,0,"p"),a(),l(11,"div",5)(12,"h4",4),s(13,"Version ancienne:"),a(),N(14,X9,5,2,"div",6)(15,Y9,2,0,"ng-template",null,0,ii),a(),y(17,"hr"),l(18,"ul",7)(19,"li",8)(20,"button",9),s(21," Composant appComponent "),a()()(),l(22,"div",10)(23,"div",11)(24,"i",12),C("click",function(){return S(r),A(i.copy1())}),a(),N(25,Z9,3,0,"span",13),l(26,"pre",14,1),W(),s(28,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container">
      <h1>@if / *ngIf</h1>
      <hr />
      <h3>D\xE9tails de l'utilisateur</h3>
      <div class="card p-4">
        <h4 class="fw-bolder">Version r\xE9cente:</h4>
        @if (user) {
        <div>
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
        </div>
        } @else {
        <p>Aucun utilisateur s\xE9lectionn\xE9</p>
        }
      </div>
      <div class="card p-4 mt-4">
        <h4 class="fw-bolder">Version ancienne:</h4>

        <div *ngIf="user; else noUser">
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
        </div>
        <ng-template #noUser>
          <p>Aucun utilisateur s\xE9lectionn\xE9</p>
        </ng-template>
        </div>
  \`,
})
export class AppComponent {
  user: User | null = {
    id: 1,
    name: 'Alice',
    username: 'alice123',
    email: 'alice@example.com',
  };
}`),H(),a()()(),y(29,"hr"),l(30,"div",15),s(31," ****************************************"),l(32,"span",16),s(33,"cours"),a(),s(34,"************************************************* "),a(),l(35,"pre")(36,"strong"),s(37,"Syntaxe:"),a(),s(38,`
@if (condition) {
  // Code \xE0 ex\xE9cuter si la condition est vraie
}

`),l(39,"strong"),s(40,"Conditions multiples avec @else if :"),a(),s(41,`
@if (user.role === 'admin') {
  // Code  \xE0 ex\xE9cuter si la condition est vraie
} @else if (user.role === 'manager') {
  // Code \xE0 ex\xE9cuter si la condition est vraie
} @else {
  // Code \xE0 ex\xE9cuter si la condition est vraie
}
      `),a()()}if(t&2){let r=tt(16);g(9),We(i.user?9:10),g(5),I("ngIf",i.user)("ngIfElse",r),g(11),I("ngIf",i.clicked)}},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var eF=["tab1"],rx=(n,e)=>e.id;function tF(n,e){if(n&1&&(l(0,"div"),s(1),a()),n&2){let t=e.$implicit;g(),kn("",t.name," (",t.email,")")}}function nF(n,e){if(n&1&&(l(0,"div"),s(1),a()),n&2){let t=e.$implicit;g(),kn("",t.name," ",t.email,"")}}function iF(n,e){n&1&&(l(0,"p"),s(1,"Aucun utilisateur trouv\xE9"),a())}function rF(n,e){n&1&&(l(0,"div",20),s(1,"Premier utilisateur"),a())}function oF(n,e){n&1&&(l(0,"div",4),s(1,"Dernier utilisateur"),a())}function sF(n,e){if(n&1&&(l(0,"div",17)(1,"strong"),s(2),a(),s(3),N(4,rF,2,0,"div",18)(5,oF,2,0,"div",19),l(6,"div"),s(7),a()()),n&2){let t=e.$implicit,i=e.$index,r=e.$index,o=e.$count;Xt("background-color",r%2===0?"#f9f9f9":"#e9e9e9"),g(2),$("#",i+1,""),g(),kn(": ",t.name," (",t.email,") "),g(),I("ngIf",r===0),g(),I("ngIf",r===o-1),g(2),qb("Index: ",i,", Pair: ",r%2===0,", Impair: ",r%2!==0,"")}}function aF(n,e){n&1&&(l(0,"p",6),s(1,"Aucun utilisateur trouv\xE9"),a())}function lF(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}var Zd=class n{users=[{id:1,name:"Alice",username:"alice123",email:"alice@example.com"},{id:2,name:"Bob",username:"bob456",email:"bob@example.com"},{id:3,name:"Charlie",username:"charlie789",email:"charlie@example.com"}];infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-users"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,eF,5),t&2&&ne()},decls:54,vars:5,consts:[["tab1",""],[1,"container"],[1,"card","p-3"],[4,"ngFor","ngForOf"],[1,"text-danger"],[1,"p-2","mb-1",3,"background-color"],[1,"text-muted"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"p-2","mb-1"],["class","text-primary",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-primary"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"@for....@empty... / *ngFor..."),a(),y(3,"hr"),l(4,"h2"),s(5,"Liste des utilisateurs"),a(),l(6,"div",2)(7,"h4"),s(8,"version ancienne:"),a(),N(9,tF,2,2,"div",3),a(),y(10,"br"),l(11,"div",2)(12,"h4"),s(13,"version recente:"),a(),Yt(14,nF,2,2,"div",null,rx,!1,iF,2,0,"p"),a(),y(17,"br"),l(18,"div",2)(19,"h4"),s(20,"Utiliser des variables dans le bloc @for:"),a(),l(21,"p")(22,"strong",4),s(23),a(),s(24," utilisateurs au total "),a(),Yt(25,sF,8,10,"div",5,rx,!1,aF,2,0,"p",6),a(),y(28,"hr"),l(29,"ul",7)(30,"li",8)(31,"button",9),s(32," Composant appComponent "),a()()(),l(33,"div",10)(34,"div",11)(35,"i",12),C("click",function(){return S(r),A(i.copy1())}),a(),N(36,lF,3,0,"span",13),l(37,"pre",14,0),W(),s(39,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username?:string;
  email: string;
  phone?: string;
}

@Component({ selector: 'app-users',
imports: [CommonModule],
template: \`
<div class="container">
  <h1>@for....@empty... / *ngFor...</h1>
  <hr />
  <h2>Liste des utilisateurs</h2>
  <div class="card p-3">
    <h4>version ancienne:</h4>
    <div *ngFor="let user of users">{{ user.name }} ({{ user.email }})</div>
  </div>

  <br />
  <div class="card p-3">
    <h4>version recente:</h4>
    @for (user of users; track user.id;) {
    <div>{{ user.name }} {{ user.email }}</div>
    } @empty {
    <p>Aucun utilisateur trouv\xE9</p>
    }
  </div>
  <br />
  <div class="card p-3">
    <h4>Utiliser des variables dans le bloc @for:</h4>
    <p>
      <strong class="text-danger">{{ users.length }}</strong> utilisateurs au
      total
    </p>
    @for (user of users; track user.id) {

    <div
      [style.background-color]="$even ? '#f9f9f9' : '#e9e9e9'"
      class="p-2 mb-1"
    >
      <strong>#{{ $index + 1 }}</strong>: {{ user.name }} ({{ user.email }})
      <div *ngIf="$first" class="text-primary">Premier utilisateur</div>
      <div *ngIf="$last" class="text-danger">Dernier utilisateur</div>
      <div>Index: {{ $index }}, Pair: {{ $even }}, Impair: {{ $odd }}</div>
    </div>

    } @empty {
    <p class="text-muted">Aucun utilisateur trouv\xE9</p>
    }
  </div>
</div>
\`,
  styles: [
    \`
      h2 {
        color: #2c3e50;
      }
      .text-primary {
        font-size: 0.9rem;
      }
      .text-danger {
        font-size: 0.9rem;
      }
      .text-muted {
        font-style: italic;
      }
    \`,
  ],
})
export class test22Component {
  users: User[] = [
    { id: 1, name: 'Alice', username: 'alice123', email: 'alice@example.com' },
    { id: 2, name: 'Bob', username: 'bob456', email: 'bob@example.com' },
    {
      id: 3,
      name: 'Charlie',
      username: 'charlie789',
      email: 'charlie@example.com',
    },
  ];
}


        `),H(),a()()(),y(40,"hr"),l(41,"div",15),s(42," ****************************************"),l(43,"span",16),s(44,"cours"),a(),s(45,"************************************************* "),a(),l(46,"pre"),s(47,`Le bloc @for est utilis\xE9 pour it\xE9rer sur des collections, comme des listes ou des tableaux. La syntaxe g\xE9n\xE9rale ressemble \xE0 cela :
angular-html.

`),l(48,"strong"),s(49,"syntaxe:"),a(),s(50,`
@for (user of users; track user.id) {
  // Votre code ici
}
@empty {
Aucun utilisateur trouv\xE9
}

variable: repr\xE9sente l'\xE9l\xE9ment courant de la collection lors de l'it\xE9ration.
collection : la collection sur laquelle vous voulez it\xE9rer.
track: indique \xE0 Angular comment suivre les \xE9l\xE9ments de la collection.
Cela permet \xE0 Angular de mettre \xE0 jour correctement les \xE9l\xE9ments de la liste lorsqu'ils changent.
@empty: est utilis\xE9 pour afficher un contenu alternatif si la collection est vide.
Toutes les variables particuli\xE8res commencent par $ et sont r\xE9serv\xE9es pour les blocs @for.

`),l(51,"strong"),s(52,"Voici d'autres exemples de variables sp\xE9ciales :"),a(),s(53,`
$index : l'index de l'\xE9l\xE9ment courant dans la collection.
$first : true si l'\xE9l\xE9ment courant est le premier de la collection.
$last : true si l'\xE9l\xE9ment courant est le dernier de la collection.
$even : true si l'index de l'\xE9l\xE9ment courant est pair.
$odd : true si l'index de l'\xE9l\xE9ment courant est impair.
$count : le nombre total d'\xE9l\xE9ments dans la collection.
      `),a()()}t&2&&(g(9),I("ngForOf",i.users),g(5),Zt(i.users),g(9),ge(i.users.length),g(2),Zt(i.users),g(11),I("ngIf",i.clicked))},dependencies:[G,Xe,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var ep=class n{transform(e){return e.split(" ").reverse().join(" ")}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=Fb({name:"reverse",type:n,pure:!0})};var cF=["tab1"],uF=["tab2"],dF=()=>[1,2,3,4,5];function pF(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}function mF(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}var tp=class n{currentDate=new Date;sampleText="Angular Pipes Example";amount=12345.678;fraction=.678;bigNumber=987654321123e-3;user={name:"John Doe",age:30,email:"john.doe@example.com"};infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-root"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,cF,5),q(i.infoTab2,uF,5)),t&2&&ne(2)},decls:126,vars:59,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"fs-6","text-danger"],[1,"fs-6","fw-bold","text-danger","mt-4"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"Les pipes"),a(),y(3,"hr"),l(4,"p")(5,"strong",3),s(6,"C'est quoi un Pipe ?"),a(),y(7,"br"),s(8," Un pipe dans Angular est un moyen simple de transformer, formater ou filtrer une valeur dans votre template. "),y(9,"br"),s(10," Lorsque vous utilisez un pipe dans un template, vous le faites suivre d\u2019une barre verticale (|) et du nom du pipe. Vous pouvez \xE9galement passer des arguments aux pipes. "),a(),l(11,"h4",4),s(12,"Date Pipe :"),a(),l(13,"p"),s(14,"Transforme une date en une cha\xEEne format\xE9e."),a(),l(15,"p"),s(16),a(),l(17,"p"),s(18),dt(19,"date"),a(),l(20,"p"),s(21),dt(22,"date"),a(),l(23,"p"),s(24),dt(25,"date"),a(),l(26,"h4",4),s(27," Uppercase and Lowercase Pipes "),a(),l(28,"p"),s(29,"Transforme une cha\xEEne en majuscules ou en minuscules."),a(),y(30,"br"),l(31,"p"),s(32),a(),l(33,"p"),s(34),dt(35,"uppercase"),a(),l(36,"p"),s(37),dt(38,"lowercase"),a(),l(39,"h4",4),s(40,"Currency Pipe :"),a(),l(41,"p"),s(42," Transforme un nombre en une cha\xEEne de devise, en utilisant le symbole de devise configur\xE9 par d\xE9faut pour la locale en cours. "),a(),y(43,"br"),l(44,"p"),s(45),a(),l(46,"p"),s(47),dt(48,"currency"),a(),l(49,"p"),s(50),dt(51,"currency"),a(),l(52,"p"),s(53),dt(54,"currency"),a(),l(55,"h4",4),s(56,"Percent Pipe :"),a(),l(57,"p"),s(58," Transforme un nombre en une cha\xEEne de pourcentage, multipli\xE9 par 100. "),a(),y(59,"br"),l(60,"p"),s(61),a(),l(62,"p"),s(63),dt(64,"percent"),a(),l(65,"h4",4),s(66,"Number Pipe :"),a(),l(67,"p"),s(68,"transforme un nombre en une cha\xEEne de caract\xE8res format\xE9e, en suivant des r\xE8gles de localisation pour la repr\xE9sentation des nombres d\xE9cimaux, des milliers, et permettant de d\xE9finir le nombre de chiffres avant et apr\xE8s la virgule."),a(),l(69,"p"),s(70),a(),l(71,"p"),s(72),dt(73,"number"),a(),l(74,"h4",4),s(75,"JSON Pipe :"),a(),l(76,"p"),s(77,"Transforme une valeur en une cha\xEEne JSON."),a(),l(78,"p"),s(79),dt(80,"json"),a(),l(81,"h4",4),s(82,"SlicePipe :"),a(),l(83,"p"),s(84,"Cr\xE9e un sous-ensemble d\u2019un tableau ou d\u2019une cha\xEEne."),a(),l(85,"p"),s(86,"Original tableau: [1, 2, 3, 4, 5]"),a(),l(87,"p"),s(88),dt(89,"slice"),a(),l(90,"h4",4),s(91,"AsyncPipe :"),a(),l(92,"p"),s(93,"Va subscribe \xE0 un Observable et renvoyer la derni\xE8re valeur qu\u2019il a \xE9mise. Lors de la destruction du composant, le pipe va unsubscribe automatiquement."),a(),l(94,"p"),s(95,"syntaxe:{ { observable$ | async } }"),a(),l(96,"h4",4),s(97,"Custom Pipes (Example) :"),a(),l(98,"p"),s(99,"En plus des pipes int\xE9gr\xE9s, Angular vous permet \xE9galement de cr\xE9er vos propres pipes personnalis\xE9s. Pour ce faire, vous pouvez utiliser le d\xE9corateur @Pipe() pour d\xE9finir un nouveau pipe et impl\xE9menter l\u2019interface PipeTransform."),a(),l(100,"p"),s(101),a(),l(102,"p"),s(103),dt(104,"reverse"),a(),y(105,"hr"),l(106,"ul",5)(107,"li",6)(108,"button",7),s(109," Composant Parent "),a()(),l(110,"li",6)(111,"button",8),s(112," Pipe reverse "),a()()(),l(113,"div",9)(114,"div",10)(115,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(116,pF,3,0,"span",12),l(117,"pre",13,0),W(),s(119,`import { ReversePipe } from "./reversePipe.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-pipes-example",
  imports: [CommonModule, ReversePipe],
  template: \`
    <div class="container">
      <h1>Les pipes</h1>
      <hr />
      <h4 class="text-danger mt-5">Date Pipe</h4>
      <p>Original Date: {{ currentDate }}</p>
      <p>Short Date: {{ currentDate | date : "short" }}</p>
      <p>Full Date: {{ currentDate | date : "fullDate" }}</p>
      <p>Custom Format: {{ currentDate | date : "dd/MM/yyyy HH:mm" }}</p>
      <h4 class="text-danger mt-5">Uppercase and Lowercase Pipes</h4>
      <p>Original Text: {{ sampleText }}</p>
      <p>Uppercase: {{ sampleText | uppercase }}</p>
      <p>Lowercase: {{ sampleText | lowercase }}</p>
      <h4 class="text-danger mt-5">Currency Pipe</h4>
      <p>Original Amount: {{ amount }}</p>
      <p>USD: {{ amount | currency : "USD" }}</p>
      <p>EUR: {{ amount | currency : "EUR" }}</p>
      <p>
        Custom Currency (INR):
        {{ amount | currency : "INR" : "symbol" : "1.2-2" }}
      </p>
      <h4 class="text-danger mt-5">Percent Pipe</h4>
      <p>Original Fraction: {{ fraction }}</p>
      <p>Percentage: {{ fraction | percent }}</p>
      <h4 class="text-danger mt-5">Number Pipe</h4>
      <p>Original Number: {{ bigNumber }}</p>
      <p>Formatted: {{ bigNumber | number : "1.1-2" }}</p>
      <h4 class="text-danger mt-5">JSON Pipe</h4>
      <p>Object as JSON: {{ user | json }}</p>
      <h4 class="text-danger mt-5">Custom Pipes (Example)</h4>
      <p>Original Number: {{ sampleText }}</p>
      <p>Reversed Text: {{ sampleText | reverse }}</p>
    </div>
  \`,
  styles: [
    \`
      .container {
        font-family: Arial, sans-serif;
      }
      h2,
      h4 {
        margin-top: 20px;
      }
      p {
        margin-bottom: 10px;
      }
    \`,
  ],
})
export class AppComponent {
  currentDate = new Date(); // Date actuelle
  sampleText = "Angular Pipes Example"; // Texte d'exemple
  amount = 12345.678; // Montant pour les pipes currency et number
  fraction = 0.678; // Fraction pour percent pipe
  bigNumber = 987654321.123; // Grand nombre pour number pipe
  user = { name: "John Doe", age: 30, email: "john.doe@example.com" }; // Objet pour JSON pipe
}`),H(),a()(),l(120,"div",14)(121,"i",11),C("click",function(){return S(r),A(i.copy2())}),a(),N(122,mF,3,0,"span",12),l(123,"pre",13,1),W(),s(125,`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').reverse().join(' ');
  }
}`),H(),a()()()()}t&2&&(g(16),$("Original Date: ",i.currentDate,""),g(2),$("Short Date: ",Yi(19,21,i.currentDate,"short"),""),g(3),$("Full Date: ",Yi(22,24,i.currentDate,"fullDate"),""),g(3),$("Custom Format: ",Yi(25,27,i.currentDate,"dd/MM/yyyy HH:mm"),""),g(8),$("Original Text: ",i.sampleText,""),g(2),$("Uppercase: ",On(35,30,i.sampleText),""),g(3),$("Lowercase: ",On(38,32,i.sampleText),""),g(8),$("Original Amount: ",i.amount,""),g(2),$("USD: ",Yi(48,34,i.amount,"USD"),""),g(3),$("EUR: ",Yi(51,37,i.amount,"EUR"),""),g(3),$(" Custom Currency (INR): ",$b(54,40,i.amount,"INR","symbol","1.2-2")," "),g(8),$("Original Fraction: ",i.fraction,""),g(2),$("Percentage: ",On(64,45,i.fraction),""),g(7),$("Original Number: ",i.bigNumber,""),g(2),$("Formatted: ",Yi(73,47,i.bigNumber,"1.1-2"),""),g(7),$("Object as JSON: ",On(80,50,i.user),""),g(9),$("tableau sliced : ",Pl(89,52,zb(58,dF),1,3),""),g(13),$("Original Number: ",i.sampleText,""),g(2),$("Reversed Text: ",On(104,56,i.sampleText),""),g(13),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[G,te,ry,iy,kl,Ol,sy,ay,Ml,oy,ep],styles:[".container[_ngcontent-%COMP%]{font-family:Arial,sans-serif}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin-top:20px}p[_ngcontent-%COMP%]{margin-bottom:10px;font-size:16px}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var np=class n{user={name:"John Doe"};baseStyles={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f8f9fa",padding:"16px",border:"1px solid #dee2e6"};textColor="#000000";fontSize=16;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],decls:21,vars:9,consts:[[1,"container"],[1,"p-3","border","rounded"],[1,"mt-4"],["for","textColorInput",1,"form-label"],["id","textColorInput","type","text","placeholder","Enter a color (e.g., blue, #ff5733)",1,"form-control","mb-3",3,"ngModelChange","ngModel"],["for","fontSizeInput",1,"form-label"],["id","fontSizeInput","type","number","placeholder","Enter font size (e.g., 16)",1,"form-control","mb-3",3,"ngModelChange","ngModel"],[1,"fs-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),a(),s(4," Combinaison des approches "),a(),y(5,"hr"),l(6,"div",1),s(7),a(),l(8,"div",2)(9,"label",3),s(10,"Text Color:"),a(),l(11,"input",4),Ce("ngModelChange",function(o){return Ee(i.textColor,o)||(i.textColor=o),o}),a(),l(12,"label",5),s(13,"Font Size (px):"),a(),l(14,"input",6),Ce("ngModelChange",function(o){return Ee(i.fontSize,o)||(i.fontSize=o),o}),a()(),l(15,"div",2),s(16," _______________________________________________________"),l(17,"span",7),s(18,"cours"),a(),s(19,"_______________________________________________________ "),a(),s(20," voir code source "),a()),t&2&&(g(6),Fr(i.baseStyles),Xt("color",i.textColor)("font-size",i.fontSize,"px"),g(),$(" ",i.user.name," "),g(4),ye("ngModel",i.textColor),g(3),ye("ngModel",i.fontSize))},dependencies:[G,Pe,De,pt,Oe,ke],styles:[".p-3[_ngcontent-%COMP%]{max-width:400px;margin:auto}"]})};var ip=class n{user={name:"John Doe"};bgColor="#f0afca";userStyles={display:"flex",padding:"16px",backgroundColor:this.bgColor,fontSize:"1.2rem",border:"1px solid #ccc"};updateBackgroundColor(){this.userStyles=we(K({},this.userStyles),{backgroundColor:this.bgColor})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],decls:22,vars:5,consts:[[1,"container"],[1,"p-3","rounded"],[1,"mt-3"],["for","bgColorInput",1,"form-label"],["id","bgColorInput","type","text","placeholder","Enter a color (e.g., #ff5733)",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mt-2"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),a(),s(4," Liaison avec un objet de styles "),a(),y(5,"hr"),l(6,"div",1),s(7),a(),l(8,"div",2)(9,"label",3),s(10,"Change Background Color:"),a(),l(11,"input",4),Ce("ngModelChange",function(o){return Ee(i.bgColor,o)||(i.bgColor=o),o}),C("input",function(){return i.updateBackgroundColor()}),a(),l(12,"p",5),s(13," Current Background Color: "),l(14,"strong"),s(15),a()()(),l(16,"div",6),s(17," _______________________________________________________"),l(18,"span",7),s(19,"cours"),a(),s(20,"_______________________________________________________ "),a(),s(21," voir code source "),a()),t&2&&(g(6),Fr(i.userStyles),g(),$(" ",i.user.name," "),g(4),ye("ngModel",i.bgColor),g(4),ge(i.bgColor))},dependencies:[G,Pe,De,Oe,ke],encapsulation:2})};var rp=class n{user={name:"John Doe"};bgColor="#f5f5f5";get userCardStyles(){return`display: flex; padding: 16px; background-color: ${this.bgColor};`}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],decls:24,vars:5,consts:[[1,"container"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"mt-3"],["for","bgColorInput",1,"form-label"],["id","bgColorInput","type","text","placeholder","Enter a color (e.g., #ff5733)",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),a(),s(4," Liaison multiple avec une cha\xEEne de caract\xE8res "),a(),y(5,"hr"),l(6,"div",1)(7,"div",2)(8,"h5",3),s(9,"User Profile"),a(),l(10,"p",4),s(11),a()()(),l(12,"div",5)(13,"label",6),s(14,"Change Background Color:"),a(),l(15,"input",7),Ce("ngModelChange",function(o){return Ee(i.bgColor,o)||(i.bgColor=o),o}),a(),l(16,"p"),s(17),a()(),l(18,"div",8),s(19," _______________________________________________________"),l(20,"span",9),s(21,"cours"),a(),s(22,"_______________________________________________________ "),a(),s(23," voir code source "),a()),t&2&&(g(6),Fr(i.userCardStyles),g(5),ge(i.user.name),g(4),ye("ngModel",i.bgColor),g(2),$("Current Background Color: ",i.bgColor,""))},dependencies:[G,Pe,De,Oe,ke],encapsulation:2})};var op=class n{user={name:"John Doe"};cardHeight=200;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],decls:20,vars:5,consts:[[1,"container"],[1,"border","border-2","w-25","m-2"],[1,"w-25","m-2"],["for","heightInput"],["id","heightInput","type","number","min","100","max","500","step","10",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),a(),s(4," Liaison avec unit\xE9s "),a(),y(5,"hr"),l(6,"div",1),s(7),a(),l(8,"div",2)(9,"label",3),s(10,"Change Card Height:"),a(),l(11,"input",4),Ce("ngModelChange",function(o){return Ee(i.cardHeight,o)||(i.cardHeight=o),o}),a(),l(12,"p"),s(13),a()(),l(14,"div",5),s(15," _______________________________________________________"),l(16,"span",6),s(17,"cours"),a(),s(18,"_______________________________________________________ "),a(),s(19," voir code source "),a()),t&2&&(g(6),Xt("height",i.cardHeight,"px"),g(),$(" ",i.user.name," "),g(4),ye("ngModel",i.cardHeight),g(2),$("Current Height: ",i.cardHeight," px"))},dependencies:[G,Pe,De,pt,Oe,zh,qh,ke],encapsulation:2})};var sp=class n{user={name:"John Doe"};isVisible=!0;toggleVisibility(){this.isVisible=!this.isVisible}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],decls:17,vars:4,consts:[[1,"container"],[1,"alert","alert-info","text-center"],[1,"btn","btn-success","w-100","mt-2",3,"click"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les Style Bindings dans Angular:"),a(),s(4," Liaison d'une propri\xE9t\xE9 style unique "),a(),y(5,"hr"),l(6,"div",1)(7,"strong"),s(8),a()(),l(9,"button",2),C("click",function(){return i.toggleVisibility()}),s(10),a(),l(11,"div",3),s(12," _______________________________________________________"),l(13,"span",4),s(14,"cours"),a(),s(15,"_______________________________________________________ "),a(),s(16," voir code source "),a()),t&2&&(g(6),Xt("display",i.isVisible?"block":"none"),g(2),ge(i.user.name),g(2),$(" ",i.isVisible?"Masquer":"Afficher"," "))},encapsulation:2})};var hF=["tab1"];function fF(n,e){n&1&&(l(0,"span",12),s(1,"copied "),y(2,"i",13),a())}var ap=class n{user={name:"John Doe"};baseClasses="card elevated";isActive=!1;additionalClasses={highlighted:!1,shadow:!1};toggleState(){this.isActive=!this.isActive,this.additionalClasses.highlighted=!this.additionalClasses.highlighted,this.additionalClasses.shadow=!this.additionalClasses.shadow}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,hF,5),t&2&&ne()},decls:21,vars:7,consts:[["tab1",""],[1,"container"],[1,"user-card",3,"ngClass"],[1,"btn","btn-success","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),a(),s(4," Combinaison de plusieurs approches "),a(),y(5,"hr"),l(6,"div",2),s(7),a(),l(8,"button",3),C("click",function(){return S(r),A(i.toggleState())}),s(9," Toggle State "),a(),l(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),a()()(),l(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(17,fF,3,0,"span",10),l(18,"pre",11,0),W(),s(20,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports:[CommonModule],
  template: \`
  <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Combinaison de plusieurs approches
      </h1>
      <hr>
    <div class="user-card"
         [class]="baseClasses"
         [class.active]="isActive"
         [ngClass]="additionalClasses">
      {{ user.name }}
    </div>
    <button class="btn btn-success mt-3" (click)="toggleState()">Toggle State</button>
    </div>
  \`,
  styles: [\`
    .user-card {
      padding: 20px;
      border: 1px solid #ccc;
      margin: 10px 0;
      border-radius: 8px;
    }
    .active {
      border-color: green;
      background-color: #eaffea;
    }
    .highlighted {
      font-weight: bold;
      color: #007bff;
    }
    .elevated {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  \`]
})

export class AppComponent {
  user = { name: 'John Doe' };

  // Classes de base
  baseClasses = 'card elevated';

  // \xC9tat actif
  isActive = false;

  // Classes dynamiques
  additionalClasses = {
    'highlighted': false,
    'shadow': false
  };

  // Fonction pour basculer les \xE9tats
  toggleState() {
    this.isActive = !this.isActive; // Toggle pour 'active'
    this.additionalClasses['highlighted'] = !this.additionalClasses['highlighted']; // Toggle pour 'highlighted'
    this.additionalClasses['shadow'] = !this.additionalClasses['shadow']; // Toggle pour 'shadow'
  }
}`),H(),a()()()()}t&2&&(g(6),qt(i.baseClasses),vt("active",i.isActive),I("ngClass",i.additionalClasses),g(),$(" ",i.user.name," "),g(10),I("ngIf",i.clicked))},dependencies:[G,zr,te],styles:[".user-card[_ngcontent-%COMP%]{padding:20px;border:1px solid #ccc;margin:10px 0;border-radius:8px}.active[_ngcontent-%COMP%]{border-color:green;background-color:#eaffea}.highlighted[_ngcontent-%COMP%]{font-weight:700;color:#007bff}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 6px #0000001a}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var gF=["tab1"];function vF(n,e){n&1&&(l(0,"span",14),s(1,"copied "),y(2,"i",15),a())}var lp=class n{user={name:"John Doe"};userClassObject={card:!0,elevated:!0,highlighted:!1};toggleHighlight(){this.userClassObject.highlighted=!this.userClassObject.highlighted}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,gF,5),t&2&&ne()},decls:28,vars:3,consts:[["tab1",""],[1,"container"],[3,"ngClass"],[1,"btn","btn-success","my-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"fs-2"],[2,"font-size","13px"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),a(),s(4," Liaison directe avec un objet "),a(),y(5,"hr"),l(6,"div",2),s(7),a(),l(8,"button",3),C("click",function(){return S(r),A(i.toggleHighlight())}),s(9," Toggle Highlight "),a(),l(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),a()()(),l(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(17,vF,3,0,"span",10),l(18,"pre",11,0),W(),s(20,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports:[CommonModule],
  template: \`
  <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison directe avec un objet
      </h1>
      <hr>
    <div [ngClass]="userClassObject">
      {{ user.name }}
    </div>
    <button class="btn btn-success my-3" (click)="toggleHighlight()">Toggle Highlight</button>
    </div>
  \`,
  styles: [\`
    .card { border: 1px solid #ccc; padding: 16px; border-radius: 8px; }
    .elevated { box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
    .highlighted { background-color: yellow; }
  \`]
})

export class AppComponent {
  user = { name: 'John Doe' }; // Exemple de donn\xE9es utilisateur

  // Objet contenant les classes avec leur \xE9tat (true/false)
  userClassObject = {
    'card': true,         // Toujours appliqu\xE9e
    'elevated': true,     // Toujours appliqu\xE9e
    'highlighted': false  // Appliqu\xE9e ou non dynamiquement
  };

  // M\xE9thode pour basculer la classe "highlighted"
  toggleHighlight() {
    this.userClassObject['highlighted'] = !this.userClassObject['highlighted'];
    // this.userClassObject.highlighted = !this.userClassObject.highlighted;
  }
} `),H(),a()()(),l(21,"div"),s(22," _______________________________________________________"),l(23,"span",12),s(24,"cours"),a(),s(25," _______________________________________________________ "),a(),l(26,"pre",13),s(27,`Diff\xE9rences entre [class] et [ngClass]
[class]:
Utilis\xE9 pour ajouter une seule classe statiquement ou dynamiquement.
Exemple :
html
Copier le code
<div [class]="'card'">...</div>
<div [class]="isHighlighted ? 'highlighted' : ''">...</div>

[ngClass]:
Con\xE7u pour g\xE9rer plusieurs classes dynamiques.
Prend en charge les objets, tableaux, ou cha\xEEnes de caract\xE8res concat\xE9n\xE9es.
      `),a()()}t&2&&(g(6),I("ngClass",i.userClassObject),g(),$(" ",i.user.name," "),g(10),I("ngIf",i.clicked))},dependencies:[G,zr,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px;border-radius:8px}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 6px #0000001a}.highlighted[_ngcontent-%COMP%]{background-color:#ff0}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var _F=["tab1"];function bF(n,e){n&1&&(l(0,"span",17),s(1,"copied "),y(2,"i",18),a())}var cp=class n{user={name:"John Doe"};userClassArray=["card","highlighted","elevated"];toggleClass(e){let t=this.userClassArray.indexOf(e);console.log("index :",t),t===-1?this.userClassArray.push(e):this.userClassArray.splice(t,1)}resetClasses(){this.userClassArray=["card","elevated","highlighted"]}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,_F,5),t&2&&ne()},decls:35,vars:4,consts:[["tab1",""],[1,"container"],[1,"mt-3"],[1,"btn","btn-success","me-2",3,"click"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[2,"font-size","12px"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),a(),s(4," Liaison avec un tableau "),a(),y(5,"hr"),l(6,"div")(7,"strong"),s(8),a()(),l(9,"div",2)(10,"button",3),C("click",function(){return S(r),A(i.toggleClass("highlighted"))}),s(11," Toggle Highlight "),a(),l(12,"button",4),C("click",function(){return S(r),A(i.toggleClass("elevated"))}),s(13," Toggle Elevation "),a(),l(14,"button",5),C("click",function(){return S(r),A(i.resetClasses())}),s(15," Reset Classes "),a()(),y(16,"hr"),l(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant appComponent "),a()()(),l(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,bF,3,0,"span",12),l(25,"pre",13,0),W(),s(27,`import {", Component } from '@angular/core';

@Component({",
  selector: 'app-root',
  template: \`
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison avec un
        tableau
      </h1>
      <hr />
      <div [class]="userClassArray.join(' ')">
        <!-- userClassArray.join(' ') rend les elements du tableau espac\xE9s d'un espace -->
        <strong>{",{", user.name }}</strong>
      </div>
      <div class="mt-3">
        <button
          class="btn btn-success me-2"
          (click)="toggleClass('highlighted')"
        >
          Toggle Highlight
        </button>
        <button
          class="btn btn-secondary me-2"
          (click)="toggleClass('elevated')"
        >
          Toggle Elevation
        </button>
        <button class="btn btn-danger" (click)="resetClasses()">
          Reset Classes
        </button>
      </div>

    </div>
  \`,
  styles: [
    \`
      .card {",
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        margin-bottom: 16px;
        background-color: #f9f9f9;
      }
      .elevated {",
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      }
      .highlighted {",
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
    \`,
  ],
})
export class AppComponent {",
  user = {", name: 'John Doe' }; // Informations utilisateur
  userClassArray = ['card', 'highlighted','elevated']; // Tableau de classes CSS

  // M\xE9thode pour basculer une classe dans le tableau
  toggleClass(className: string) {",
    const index = this.userClassArray.indexOf(className);
    console.log('index :', index);

    if (index === -1) {",
      this.userClassArray.push(className); // Ajoute la classe si elle n'existe pas
    } else {",
      this.userClassArray.splice(index, 1); // Supprime la classe si elle existe
    }
  }

  // R\xE9initialise les classes \xE0 leur \xE9tat par d\xE9faut
  resetClasses(): void {",
    this.userClassArray = ['card', 'elevated', 'highlighted'];
  }
}`),H(),a()()(),l(28,"div",14),s(29," __________________________________________________________"),l(30,"span",15),s(31,"cours"),a(),s(32,"__________________________________________________________ "),a(),l(33,"pre",16),s(34,`
L'astuce est qu'on d\xE9finie quelque classes dans styles exemple: card, highlighted,elevated,
puis on les ajoute dans un tableau userClassArray, et on les affiche dans le template avec [class]="userClassArray.join(' ')".
et pour ajouter ou supprimer une classe on utilise la m\xE9thode toggleClass(className: string) qui prend
en param\xE8tre le nom de la classe \xE0 ajouter ou supprimer.
      `),a()()}t&2&&(g(6),qt(i.userClassArray.join(" ")),g(2),ge(i.user.name),g(16),I("ngIf",i.clicked))},dependencies:[G,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:16px;max-width:300px;margin-bottom:16px;background-color:#f9f9f9}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003}.highlighted[_ngcontent-%COMP%]{background-color:#d4edda;border-color:#c3e6cb}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var yF=["tab1"];function EF(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}var up=class n{user={name:"John Doe"};userClasses="card elevated highlighted";toggleClass(e){this.userClasses.includes(e)?this.userClasses=this.userClasses.replace(e,"").trim():this.userClasses+=" "+e}resetClasses(){this.userClasses="card elevated highlighted"}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,yF,5),t&2&&ne()},decls:52,vars:4,consts:[["tab1",""],[1,"container"],[1,"mt-3"],[1,"btn","btn-success","me-2",3,"click"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),a(),s(4," Liaison directe avec une cha\xEEne de caract\xE8res "),a(),y(5,"hr"),l(6,"div")(7,"strong"),s(8),a()(),l(9,"div",2)(10,"button",3),C("click",function(){return S(r),A(i.toggleClass("highlighted"))}),s(11," Toggle Highlight "),a(),l(12,"button",4),C("click",function(){return S(r),A(i.toggleClass("elevated"))}),s(13," Toggle Elevation "),a(),l(14,"button",5),C("click",function(){return S(r),A(i.resetClasses())}),s(15," Reset Classes "),a()(),y(16,"hr"),l(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant appComponent "),a()()(),l(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,EF,3,0,"span",12),l(25,"pre",13,0),W(),s(27,`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="container">
      <h1>
        <strong>Les Class Bindings dans Angular:</strong> Liaison directe avec une cha\xEEne de caract\xE8res
      </h1>
      <hr>
      <div [class]="userClasses">
        <strong>{{ user.name }}</strong>
      </div>
      <div class="mt-3">
        <button class="btn btn-success me-2" (click)="toggleClass('highlighted')">
          Toggle Highlight
        </button>
        <button class="btn btn-secondary me-2" (click)="toggleClass('elevated')">
          Toggle Elevation
        </button>
        <button class="btn btn-danger" (click)="resetClasses()">
          Reset Classes
        </button>
      </div>

    </div>
  \`,
  styles: [
    \`
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        margin-bottom: 16px;
        background-color: #f9f9f9;
      }
      .elevated {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      }
      .highlighted {
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
    \`,
  ],
})
export class AppComponent {
  user = { name: 'John Doe' }; // Informations utilisateur
  userClasses = 'card elevated highlighted'; // Classes par d\xE9faut

  // M\xE9thode pour basculer la classe "highlighted"
  toggleClass(className:string) {
    if (this.userClasses.includes(className)) {
      this.userClasses = this.userClasses.replace(className, '').trim();
    } else {
      this.userClasses +=' ' + className;
    }
  }

  // R\xE9initialise les classes \xE0 leur \xE9tat par d\xE9faut
  resetClasses() {
    this.userClasses = 'card elevated highlighted';
  }
}`),H(),a()()(),l(28,"div",14),s(29," __________________________________________________________ "),l(30,"span",15),s(31,"cours"),a(),s(32," __________________________________________________________ "),a(),l(33,"pre"),s(34,`Cet exemple illustre l'utilisation des "Class Bindings" dans Angular pour appliquer dynamiquement des classes CSS \xE0 un \xE9l\xE9ment HTML,`),y(35,"br"),s(36,` en fonction de l'\xE9tat ou des interactions utilisateur. Voici une explication d\xE9taill\xE9e des diff\xE9rentes parties :

`),l(37,"strong"),s(38,"1. Liaison de classes avec [class]:"),a(),s(39,`
[class]="userClasses" : Cela permet de lier dynamiquement des classes CSS \xE0 un \xE9l\xE9ment HTML.
La propri\xE9t\xE9 userClasses contient les noms de classes sous forme de cha\xEEne de caract\xE8res (comme "card elevated highlighted").
Angular applique automatiquement ces classes \xE0 l'\xE9l\xE9ment.

`),l(40,"strong"),s(41,"2. Propri\xE9t\xE9s et donn\xE9es du composant :"),a(),s(42,`
user : C'est un objet contenant des informations sur l'utilisateur (ici, uniquement un nom).
userClasses : Une cha\xEEne de caract\xE8res qui stocke les classes CSS actuellement appliqu\xE9es \xE0 l'\xE9l\xE9ment HTML.

`),l(43,"strong"),s(44,"3. M\xE9thodes pour g\xE9rer les classes :"),a(),s(45,`
toggleHighlight() :
Cette m\xE9thode v\xE9rifie si la classe "highlighted" est pr\xE9sente dans userClasses.
Si oui, elle la supprime ; sinon, elle l'ajoute.
Cela permet d'activer ou d\xE9sactiver la classe "highlighted".
toggleElevation() :
Similaire \xE0 toggleHighlight(), mais pour la classe "elevated".
resetClasses() :
R\xE9initialise la propri\xE9t\xE9 userClasses \xE0 son \xE9tat par d\xE9faut (toutes les classes initiales sont r\xE9appliqu\xE9es).

`),l(46,"strong"),s(47,"4. Interactions utilisateur :"),a(),s(48,`
Trois boutons permettent de modifier dynamiquement les classes :
Toggle Highlight : Active ou d\xE9sactive la classe "highlighted".
Toggle Elevation : Active ou d\xE9sactive la classe "elevated".
Reset Classes : R\xE9initialise toutes les classes \xE0 leur \xE9tat initial.

`),l(49,"strong"),s(50,"5. Styles CSS :"),a(),s(51,`
.card : Style de base pour l'\xE9l\xE9ment (bordure, fond, etc.).
.elevated : Ajoute une ombre pour donner un effet d'\xE9l\xE9vation.
.highlighted : Change la couleur de fond et de bordure pour mettre en avant l'\xE9l\xE9ment.

      `),a()()}t&2&&(g(6),qt(i.userClasses),g(2),ge(i.user.name),g(16),I("ngIf",i.clicked))},dependencies:[G,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:16px;max-width:300px;margin-bottom:16px;background-color:#f9f9f9}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003}.highlighted[_ngcontent-%COMP%]{background-color:#d4edda;border-color:#c3e6cb}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var CF=["tab1"];function wF(n,e){n&1&&(l(0,"span",14),s(1,"copied "),y(2,"i",15),a())}var dp=class n{user={id:1,name:"John Doe",username:"johndoe",email:"john@example.com"};isUserActive=!0;toggleUserStatus(){this.isUserActive=!this.isUserActive}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,CF,5),t&2&&ne()},decls:50,vars:7,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","mt-2",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),a(),s(4," Liaison conditionnelle d'une classe "),a(),l(5,"h3"),s(6,"User Information"),a(),l(7,"div")(8,"strong"),s(9,"Name:"),a(),s(10),y(11,"br"),l(12,"strong"),s(13,"Username:"),a(),s(14),y(15,"br"),l(16,"strong"),s(17,"Email:"),a(),s(18),a(),l(19,"button",2),C("click",function(){return S(r),A(i.toggleUserStatus())}),s(20),a(),y(21,"hr"),l(22,"ul",3)(23,"li",4)(24,"button",5),s(25," Composant appComponent "),a()()(),l(26,"div",6)(27,"div",7)(28,"i",8),C("click",function(){return S(r),A(i.copy1())}),a(),N(29,wF,3,0,"span",9),l(30,"pre",10,0),W(),s(32,`import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <div class="container">
      <h1><strong>Les Class Bindings dans Angular:</strong> Liaison conditionnelle d'une classe</h1>
      <h3>User Information</h3>
      <div [class.active]="isUserActive">
        <strong>Name:</strong> {{ user.name }} <br />
        <strong>Username:</strong> {{ user.username }} <br />
        <strong>Email:</strong> {{ user.email }}
      </div>

      <button class="btn btn-success mt-2" (click)="toggleUserStatus()">
        {{ isUserActive ? 'Deactivate User' : 'Activate User' }}
      </button>
      >
    </div>
  \`,
  styles: [
    \`
      .active {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        padding: 8px;
        margin-bottom: 8px;
      }

    \`,
  ],
})
export class AppComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
  };

  isUserActive = true;

  toggleUserStatus(): void {
    this.isUserActive = !this.isUserActive;
  }
}`),H(),a()()(),y(33,"hr"),l(34,"div",11),s(35," ______________________________________________________________ "),l(36,"span",12),s(37,"cours"),a(),s(38," ______________________________________________________________ "),a(),l(39,"pre"),s(40,`La fa\xE7on la plus simple de lier une classe est d'utiliser la syntaxe:
`),l(41,"strong",13),s(42,'[class.nom-classe]="condition"'),a(),s(43,`.
cette condition peut etre `),l(44,"span",13),s(45,"true"),a(),s(46," ou "),l(47,"span",13),s(48,"false"),a(),s(49," ou un variable boolean"),a()()}t&2&&(g(7),vt("active",i.isUserActive),g(3),$(" ",i.user.name," "),g(4),$(" ",i.user.username," "),g(4),$(" ",i.user.email," "),g(2),$(" ",i.isUserActive?"Deactivate User":"Activate User"," "),g(9),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var TF=["tab1"];function xF(n,e){n&1&&(l(0,"span",12),s(1,"copied "),y(2,"i",16),a())}var pp=class n{counter=Je(0);nom=Je("");resetCounter(){this.counter.set(0)}incrementCounter(){this.counter.update(e=>e+1)}resetNom(){this.nom.set("")}capitaliseNom(){this.nom.update(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}upperCaseNom(){this.nom.update(e=>e.toUpperCase())}lowerCaseNom(){this.nom.update(e=>e.toLowerCase())}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-counter"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,TF,5),t&2&&ne()},decls:52,vars:3,consts:[["tab1",""],[1,"container"],[1,"mt-3","border","p-3"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-success","mx-3",3,"click"],["type","text",3,"ngModelChange","ngModel"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],[1,"confirm"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"Difference entre les deux methodes set() et update() d'un signal"),a(),y(3,"hr"),l(4,"div",2)(5,"h4"),s(6,"Exemple 1 : Compteur"),a(),l(7,"p"),s(8),a(),l(9,"button",3),C("click",function(){return S(r),A(i.resetCounter())}),s(10," R\xE9initialiser "),a(),l(11,"button",4),C("click",function(){return S(r),A(i.incrementCounter())}),s(12," Incr\xE9menter "),a()(),l(13,"div",2)(14,"h4"),s(15,"Exemple 2 : Nom"),a(),l(16,"p"),s(17," Nom : "),l(18,"input",5),Ce("ngModelChange",function(c){return S(r),Ee(i.nom,c)||(i.nom=c),A(c)}),a()(),l(19,"button",3),C("click",function(){return S(r),A(i.resetNom())}),s(20," R\xE9initialiser "),a(),l(21,"button",4),C("click",function(){return S(r),A(i.capitaliseNom())}),s(22," Capitaliser "),a(),l(23,"button",4),C("click",function(){return S(r),A(i.upperCaseNom())}),s(24," Mettre au majuscule "),a(),l(25,"button",4),C("click",function(){return S(r),A(i.lowerCaseNom())}),s(26," Mettre au minuscule "),a()(),l(27,"ul",6)(28,"li",7)(29,"button",8),s(30," Composant Parent "),a()()(),l(31,"div",9)(32,"div",10)(33,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(34,xF,3,0,"span",12),l(35,"pre",13,0),W(),s(37,`import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports:[FormsModule],
  template: \`
    <div class="container">
      <h1>Difference entre les deux methodes set() et update() d'un signal</h1>
      <hr>
      <div class="mt-3 border p-3">
        <h4>Exemple 1 : Compteur</h4>
        <p>Compteur : {{ counter() }}</p>
        <button class="btn btn-danger" (click)="resetCounter()">
          R\xE9initialiser
        </button>
        <button class="btn btn-success mx-3" (click)="incrementCounter()">
          Incr\xE9menter
        </button>
      </div>

      <div class="mt-3 border p-3">
        <h4>Exemple 2 : Nom</h4>
        <p>
          Nom :
          <input type="text" [(ngModel)]="nom"  />
        </p>
        <button class="btn btn-danger" (click)="resetNom()">
          R\xE9initialiser
        </button>
        <button class="btn btn-success mx-3" (click)="capitaliseNom()">
          Capitaliser
        </button>
        <button class="btn btn-success mx-3" (click)="upperCaseNom()">
          Mettre au majuscule
        </button>
        <button class="btn btn-success mx-3" (click)="lowerCaseNom()">
          Mettre au minuscule
        </button>
      </div>
    </div>
  \`,
})
export class Test9Component {
  counter = signal(0); // Signal pour le compteur
  nom = signal(''); // Signal pour le champ texte

  // M\xE9thodes pour le compteur
  resetCounter() {
    this.counter.set(0); // R\xE9initialise la valeur \xE0 0
  }

  incrementCounter() {
    this.counter.update((value) => value + 1); // Incr\xE9mente la valeur actuelle de 1
  }

  resetNom() {
    this.nom.set(''); // R\xE9initialise le nom \xE0 une cha\xEEne vide
  }

  capitaliseNom() {
    this.nom.update(
      (currentValue) => currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase()
    ); // Capitalise le nom
  }

  upperCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toUpperCase()
    ); // Capitalise le nom
  }

  lowerCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toLowerCase()
    ); // Capitalise le nom
  }
}`),H(),a()()(),l(38,"div",14),s(39," ****************************************"),l(40,"span",15),s(41,"cours"),a(),s(42,"************************************************* "),a(),l(43,"pre")(44,"strong"),s(45,"1. set():"),a(),s(46,`
Description : La m\xE9thode set() permet de remplacer directement la valeur actuelle

du signal par une nouvelle valeur.
Usage : Id\xE9al pour mettre \xE0 jour la valeur du signal lorsqu'on conna\xEEt la nouvelle valeur exacte.

Exemple :
const username = model('John'); // Signal initialis\xE9 \xE0 "John"
username.set('Doe'); // La valeur est maintenant "Doe"
console.log(username()); // R\xE9sultat : "Doe"

`),l(47,"strong"),s(48,"2. update():"),a(),s(49,`
Description : La m\xE9thode update() prend une fonction en param\xE8tre, qui re\xE7oit la valeur
actuelle `),y(50,"br"),s(51,` du signal et retourne la nouvelle valeur apr\xE8s une transformation.
Usage : Utile pour mettre \xE0 jour la valeur existante en fonction de sa valeur actuelle,
sans avoir \xE0 la lire ou \xE0 la modifier manuellement.

Exemple :
const counter = model(0); // Signal initialis\xE9 \xE0 0
counter.update(value => value + 1); // Incr\xE9mente la valeur actuelle de 1
console.log(counter()); // R\xE9sultat : 1
counter.update(value => value * 2); // Multiplie la valeur actuelle par 2
console.log(counter()); // R\xE9sultat : 2`),a()()}t&2&&(g(8),$("Compteur : ",i.counter(),""),g(10),ye("ngModel",i.nom),g(16),We(i.clicked?34:-1))},dependencies:[Pe,De,Oe,ke,G],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var IF=["tab1"],SF=["tab2"];function AF(n,e){n&1&&(l(0,"span",15),s(1,"copied "),y(2,"i",16),a())}var mp=class n{username=Nb("");updateUsername(e){let t=e.target;this.username.set(t.value)}clearUsername(){this.username.set("")}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-user-form"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,IF,5),q(i.infoTab2,SF,5)),t&2&&ne(2)},inputs:{username:[1,"username"]},outputs:{username:"usernameChange"},decls:56,vars:4,consts:[["tab1",""],[1,"container"],["placeholder","Entrez votre nom d'utilisateur",1,"form-control","w-25",3,"input","value"],[1,"my-2"],[1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"model() pour du double data-binding"),a(),y(3,"hr"),l(4,"input",2),C("input",function(c){return S(r),A(i.updateUsername(c))}),a(),l(5,"div",3),s(6),a(),l(7,"button",4),C("click",function(){return S(r),A(i.clearUsername())}),s(8,"Effacer"),a(),l(9,"ul",5)(10,"li",6)(11,"button",7),s(12," Composant Parent "),a()()(),l(13,"div",8)(14,"div",9)(15,"i",10),C("click",function(){return S(r),A(i.copy1())}),a(),N(16,AF,3,0,"span",11),l(17,"pre",12,0),W(),s(19,`import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports:[FormsModule,CommonModule],
  template: \`
    <div class="container">
      <h1>model() pour du double data-binding</h1>
      <hr>
      <input class="form-control w-25" [value]="username()" (input)="updateUsername($event)" placeholder="Entrez votre nom d'utilisateur">
      <div class="my-2">Nom d'utilisateur actuel : {{ username() }}</div>
      <button class="btn btn-success" (click)="clearUsername()">Effacer</button>
    </div>
  \`,
})
export class Test8Component {
  username = model(''); // Mod\xE8le pour le double data-binding
  // M\xE9thode pour mettre \xE0 jour le mod\xE8le
  updateUsername(event: Event): void {
    const input = event.target as HTMLInputElement; // Typage explicite
    this.username.set(input.value);
  }

  // M\xE9thode pour effacer le contenu du champ
  clearUsername(): void {
    this.username.set(''); // R\xE9initialise le signal li\xE9 au mod\xE8le
  }
}`),H(),a()()(),l(20,"div",13),s(21," ****************************************"),l(22,"span",14),s(23,"cours"),a(),s(24,"************************************************* "),a(),l(25,"pre"),s(26,"Dans cet exemple, l'utilisation de model() met en avant une nouvelle mani\xE8re de g\xE9rer le double data-binding "),y(27,"br"),s(28,` dans Angular. Voici une explication d\xE9taill\xE9e des diff\xE9rentes parties de cet exemple :

`),l(29,"strong"),s(30,"1. pour la gestion des signaux :"),a(),s(31,`
model() est une fonction qui agit comme un signal dans Angular (concept introduit dans Angular 16).
Un signal est une donn\xE9e r\xE9active qui peut \xEAtre lue ou mise \xE0 jour. Ici, username est un signal initialis\xE9 \xE0 une valeur vide ('').

`),l(32,"strong"),s(33,"2. Double Data-Binding via model():"),a(),s(34,`
Le double data-binding signifie que les modifications dans le champ de saisie sont refl\xE9t\xE9es automatiquement dans le mod\xE8le et vice-versa.
Dans le template :
[value]="username()" : Le champ d'entr\xE9e affiche la valeur actuelle du signal username.
(input)="updateUsername($event)" : \xC0 chaque saisie utilisateur, la m\xE9thode updateUsername met \xE0 jour le signal username.
Dans le mod\xE8le (classe TypeScript) :
username.set(value) : Met \xE0 jour la valeur du signal.

`),l(35,"strong"),s(36,"3. Gestion des interactions :"),a(),s(37,`
M\xE9thode updateUsername:
Extrait la valeur de l'entr\xE9e utilisateur depuis l'\xE9v\xE9nement input et met \xE0 jour le signal.
M\xE9thode clearUsername:
R\xE9initialise le signal username \xE0 une cha\xEEne vide ('').

`),l(38,"strong"),s(39,"4. Affichage R\xE9actif avec username():"),a(),s(40),a(),y(41,"hr"),l(42,"pre"),s(43,`Bref cours sur model() et signaux dans Angular
`),l(44,"strong"),s(45,"1. Introduction aux Signaux dans Angular :"),a(),s(46,`
Les signaux sont un nouveau m\xE9canisme r\xE9actif introduit \xE0 partir d'Angular 16. Ils simplifient la gestion de l'\xE9tat et du data-binding.
Un signal est une valeur observable qui peut \xEAtre lue (par un appel comme signal()) ou mise \xE0 jour (par set()).

`),l(47,"strong"),s(48,"2. Cr\xE9er un signal avec model() :"),a(),s(49,`
model() est une fonction sp\xE9cifique qui agit comme un signal r\xE9actif pour des cas pratiques comme le double data-binding.
Syntaxe : const mySignal = model(initialValue);
initialValue : La valeur initiale du signal.

`),l(50,"strong"),s(51,"3. Utilisation des Signaux :"),a(),s(52,`
Lecture de la valeur : Appelez la fonction, par exemple mySignal().
Mise \xE0 jour de la valeur : Utilisez mySignal.set(newValue).
R\xE9activit\xE9 : Les signaux d\xE9clenchent automatiquement la mise \xE0 jour de tout \xE9l\xE9ment ou expression qui les utilise dans un template.

`),l(53,"strong"),s(54,"4. Avantages des Signaux :"),a(),s(55,`
R\xE9activit\xE9 simplifi\xE9e : Plus besoin de gestion complexe comme dans RxJS (pas de subscribe()).
Optimisation des performances : Angular suit les signaux directement, sans zone.js.
Simplification du double data-binding : Avec model(), il devient facile de synchroniser l'interface utilisateur avec le mod\xE8le.`),a()()}t&2&&(g(4),I("value",i.username()),g(2),$("Nom d'utilisateur actuel : ",i.username(),""),g(10),I("ngIf",i.clicked),g(24),$(`
Dans le template, `,i.username(),` permet d'afficher dynamiquement la valeur actuelle du signal.
Toute mise \xE0 jour de username entra\xEEne automatiquement la mise \xE0 jour de l'affichage.
      `))},dependencies:[Pe,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var hp=class n{data={id:0,nom:""};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant6"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"border","p-2"]],template:function(t,i){t&1&&(l(0,"div",0),s(1),a()),t&2&&(g(),$(" Categorie: ",i.data.nom," "))},dependencies:[G],encapsulation:2})};var PF=["tab1"],RF=["tab2"],DF=(n,e)=>e.id;function kF(n,e){if(n&1&&y(0,"app-enfant6",4),n&2){let t=e.$implicit;I("data",t)}}function MF(n,e){n&1&&(l(0,"p"),s(1,"aucune cat\xE9gorie n'a \xE9t\xE9 trouv\xE9e"),a())}function OF(n,e){n&1&&(l(0,"span",19),s(1,"copied "),y(2,"i",20),a())}function NF(n,e){n&1&&(l(0,"span",19),s(1,"copied "),y(2,"i",20),a())}var fp=class n{categories=[{id:1,nom:"Accessoires"},{id:2,nom:"Vestes"},{id:3,nom:"Pantalons"},{id:4,nom:"Chemises"},{id:5,nom:"Robes"}];infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test6"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,PF,5),q(i.infoTab2,RF,5)),t&2&&ne(2)},decls:61,vars:3,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[3,"data"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-5"],[1,"fs-2"],[1,"fs-6","fw-bold","text-danger","mt-4"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1")(2,"pre")(3,"code"),s(4,"@Input()"),a()()(),y(5,"hr"),l(6,"div",3)(7,"h3"),s(8,"parent"),a(),Yt(9,kF,1,1,"app-enfant6",4,DF,!1,MF,2,0,"p"),a(),y(12,"hr"),l(13,"ul",5)(14,"li",6)(15,"button",7),s(16," Composant Parent "),a()(),l(17,"li",6)(18,"button",8),s(19," Composant Enfant "),a()()(),l(20,"div",9)(21,"div",10)(22,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(23,OF,3,0,"span",12),l(24,"pre",13,0),W(),s(26,`import { EnfantComponent } from "./enfant.component";
import { Component } from "@angular/core";
import { Categorie } from "../../../interfaces/categorie";

@Component({
  selector: "app-root",
  imports: [EnfantComponent],
  template: \`
    <div class="container">
      <h1>
        <pre><code>@Input()</code></pre>
      </h1>
      <hr />
      <!-- Utilisation du composant enfant -->
      <div class="border p-3">
        <h3>parent</h3>
        @for (categorie of categories; track categorie.id) {
        <app-enfant [data]="categorie"></app-enfant>
        } @empty {
        <p>aucune cat\xE9gorie n'a \xE9t\xE9 trouv\xE9e</p>
        }
      </div>
    </div>
  \`,
})
export class Test6Component {
  categories: Categorie[] = [
    {
      id: 1,
      nom: "Accessoires",
    },
    {
      id: 2,
      nom: "Vestes",
    },
    {
      id: 3,
      nom: "Pantalons",
    },
    {
      id: 4,
      nom: "Chemises",
    },
    {
      id: 5,
      nom: "Robes",
    },
  ];
}`),H(),a()(),l(27,"div",14)(28,"i",11),C("click",function(){return S(r),A(i.copy2())}),a(),N(29,NF,3,0,"span",12),l(30,"pre",13,1),W(),s(32,`import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="border p-2">
        Categorie:    {{ data.nom }}
    </div>
  \`,
})
export class EnfantComponent {
  @Input() data: Categorie = {
    id: 0,
    nom: ''
  };
}`),H(),a()()(),y(33,"hr"),l(34,"div",15),s(35," ****************************************"),l(36,"span",16),s(37,"Explication"),a(),s(38,"************************************************* "),l(39,"pre")(40,"div",17),s(41,"C'est quoi @Input ?"),a(),s(42,`
`),l(43,"div"),s(44,"@Input() sert \xE0 passer une donn\xE9e d\u2019un composant parent vers son composant enfant."),a(),s(45,`
Le parent (Test6Component) r\xE9cup\xE8re une liste de cat\xE9gories depuis un service
(CategoriesService) et la charge dans la propri\xE9t\xE9
`),l(46,"strong"),s(47,"categories"),a(),s(48,`, et les transmet au composant enfant (Enfant6Component)
via le d\xE9corateur @Input.
`),l(49,"strong"),s(50,"Composant parent (Test6Component) :"),a(),s(51,`
Il importe le composant enfant (Enfant6Component) pour l'utiliser dans son mod\xE8le.
Il r\xE9cup\xE8re les donn\xE9es via un service asynchrone dans la m\xE9thode fetchCategories().
Il passe ces donn\xE9es au composant enfant avec l'attribut [data]="categories" dans le code:

 `),l(52,"strong"),s(53,`@for (categorie of categories; track categorie.id)
  {<app-enfant6 `),l(54,"span",18),s(55,'[data]="categories"'),a(),s(56," ></app-enfant6>}"),a(),s(57,`

 `),l(58,"strong"),s(59,"Composant enfant (Enfant6Component) :"),a(),s(60,`
Il utilise @Input pour recevoir les donn\xE9es de cat\xE9gories depuis le parent:
@Input() data:Categories[]=[];
Il utilise la propri\xE9t\xE9  data pour afficher le contenu
        `),a()()()}t&2&&(g(9),Zt(i.categories),g(14),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[hp,G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var gp=class n{dataSent=new gt;message=new gt;sendMessage(){this.dataSent.emit("Bonjour Papa !")}handleChange(e){let t=e.target;this.message.emit(t.value)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-enfant7"]],outputs:{dataSent:"dataSent",message:"message"},decls:3,vars:0,consts:[["placeholder","Envoie un message \xE0 ton p\xE8re ici","type","text",1,"form-control","my-3",2,"width","300px",3,"input"],[1,"btn","btn-success",3,"click"]],template:function(t,i){t&1&&(l(0,"input",0),C("input",function(o){return i.handleChange(o)}),a(),l(1,"button",1),C("click",function(){return i.sendMessage()}),s(2," Dis bonjour \xE0 papa "),a())},dependencies:[G,Pe],encapsulation:2})};var VF=["tab1"],FF=["tab2"];function LF(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}function UF(n,e){n&1&&(l(0,"span",21),s(1,"copied "),y(2,"i",22),a())}var vp=class n{message="";mess="";receiveData(e){this.message=e}receiveMessage(e){this.mess=e}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test7"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,VF,5),q(i.infoTab2,FF,5)),t&2&&ne(2)},decls:61,vars:4,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[1,"text-success"],[1,"border","p-3","mb-3"],[3,"dataSent","message"],[1,"border","ps-3","mb-3"],[1,"text-danger","fs-4"],[1,"text-success","fs-5"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",2)(1,"h1"),s(2,"@Output()"),a(),y(3,"hr"),l(4,"div",3)(5,"h3",4),s(6,"Partie Parent"),a(),l(7,"div",5)(8,"h3",4),s(9,"Partie Enfant"),a(),l(10,"app-enfant7",6),C("dataSent",function(c){return S(r),A(i.receiveData(c))})("message",function(c){return S(r),A(i.receiveMessage(c))}),a()(),l(11,"div",7)(12,"p"),s(13," Message re\xE7u de mon fils :"),l(14,"span",8),s(15),a()(),l(16,"p",9),s(17),a()()(),y(18,"hr")(19,"hr"),l(20,"ul",10)(21,"li",11)(22,"button",12),s(23," Composant Parent "),a()(),l(24,"li",11)(25,"button",13),s(26," Composant Enfant "),a()()(),l(27,"div",14)(28,"div",15)(29,"i",16),C("click",function(){return S(r),A(i.copy1())}),a(),N(30,LF,3,0,"span",17),l(31,"pre",18,0),W(),s(33,`import { EnfantComponent } from "./enfant.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [EnfantComponent],
  template: \`
    <div class="container">
      <h1>@Output()</h1>
      <hr />
      <div class="border p-3">
        <h3 class="text-success">Partie Parent</h3>
        <div class="border p-3 mb-3">
          <h3 class="text-success">Partie Enfant</h3>
          <app-enfant
            (dataSent)="receiveData($event)"
            (message)="receiveMessage($event)"
          ></app-enfant>
        </div>

        <div class="border ps-3 mb-3">
          <p>
            Message re\xE7u de mon fils :<span class="text-danger fs-4">{{
              mess
            }}</span>
          </p>
          <p class="text-success fs-5">{{ message }}</p>
        </div>
      </div>
    </div>
  \`,
})
export class AppComponent {
  message: string = "";
  mess: string = "";

  receiveData(data: string) {
    this.message = data;
  }
  receiveMessage(data: string) {
    this.mess = data;
  }
}

          `),H(),a()(),l(34,"div",19)(35,"i",16),C("click",function(){return S(r),A(i.copy2())}),a(),N(36,UF,3,0,"span",17),l(37,"pre",18,1),W(),s(39,`import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-enfant',
  template: \`
    <input
      style="width:300px;"
      placeholder="Envoie un message \xE0 ton p\xE8re ici"
      class="form-control  my-3"
      type="text"
      (input)="handleChange($event)"
    />
    <button class="btn btn-success" (click)="sendMessage()">
      Dis bonjour \xE0 papa
    </button>
  \`,
})
export class EnfantComponent {
  @Output() dataSent = new EventEmitter<string>();
  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.dataSent.emit('Bonjour Papa !');
  }
  handleChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.message.emit(target.value);
  }
}

          `),H(),a()()(),l(40,"div"),s(41," ****************************************"),l(42,"span",20),s(43,"cours"),a(),s(44,"************************************************* "),a(),l(45,"pre")(46,"strong"),s(47,"1. @Output():"),a(),s(48,`
Utilis\xE9 dans le Child Component pour d\xE9finir une propri\xE9t\xE9 qui sera un EventEmitter.
Cette propri\xE9t\xE9 sert de canal pour \xE9mettre des donn\xE9es ou des \xE9v\xE9nements vers le parent.
@Output() eventName = new EventEmitter<Type>();

`),l(49,"strong"),s(50,"2. EventEmitter:"),a(),s(51,`
Une classe d'Angular qui permet d'\xE9mettre des \xE9v\xE9nements personnalis\xE9s avec ou sans donn\xE9es:
@Output() dataSent = new EventEmitter<string>();

`),l(52,"strong"),s(53,"3. M\xE9thode emit():"),a(),s(54,`
Appel\xE9e dans le Child Component pour d\xE9clencher un \xE9v\xE9nement et transmettre des donn\xE9es au parent.
Syntaxe : this.eventName.emit(data)
exemple: this.dataSent.emit('Message \xE0 transmettre au parent');

`),l(55,"strong"),s(56,"4. \xC9couteur d'\xE9v\xE9nement dans le Parent:"),a(),s(57,`
Le parent utilise l'attribut (eventName) dans le template pour \xE9couter l'\xE9v\xE9nement \xE9mis par le child.
Syntaxe : (eventName)="methodToHandleEvent($event)"
exemple:
<app-child (dataSent)="handleData($event)"></app-child>

`),l(58,"strong"),s(59,"5. Param\xE8tre $event:"),a(),s(60,`
Repr\xE9sente les donn\xE9es transmises par emit() depuis le Child Component.
Accessible dans la m\xE9thode appel\xE9e par le parent.
handleData($event: string) {
  console.log('Donn\xE9es re\xE7ues du Child :', $event);
  }`),a()()}t&2&&(g(15),ge(i.mess),g(2),ge(i.message),g(13),I("ngIf",i.clicked),g(6),I("ngIf",i.clicked))},dependencies:[gp,G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var jF=["tab1"],BF=["tab2"];function qF(n,e){n&1&&(l(0,"span",14),s(1,"copied "),y(2,"i",15),a())}var _p=class n{count=Je(0);constructor(){Ts(()=>{console.log(`Le compteur a chang\xE9 : ${this.count()}`),document.title=`title: ${this.count()}`})}increment(){this.count.update(e=>e+1)}decrement(){this.count.update(e=>e-1)}reinitialse(){this.count.set(0)}infoTab1=z("tab1");infoTab2=z("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-signal-example"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,jF,5),q(i.infoTab2,BF,5)),t&2&&ne(2)},decls:40,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"Signal et Effect"),a(),y(3,"hr"),l(4,"p"),s(5),a(),l(6,"button",2),C("click",function(){return S(r),A(i.increment())}),s(7,"Incr\xE9menter"),a(),l(8,"button",3),C("click",function(){return S(r),A(i.decrement())}),s(9," D\xE9cr\xE9menter "),a(),l(10,"button",4),C("click",function(){return S(r),A(i.reinitialse())}),s(11," Reinitialiser "),a(),y(12,"hr"),l(13,"ul",5)(14,"li",6)(15,"button",7),s(16," Composant Parent "),a()()(),l(17,"div",8)(18,"div",9)(19,"i",10),C("click",function(){return S(r),A(i.copy1())}),a(),N(20,qF,3,0,"span",11),l(21,"pre",12,0),W(),s(23,`import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="container">
      <h1>Signal et Effect</h1>
      <hr />
      <p>Compteur : {{ count() }}</p>
      <button class="btn btn-success" (click)="increment()">
        Incr\xE9menter
      </button>
      <button class="btn btn-danger mx-2" (click)="decrement()">D\xE9cr\xE9menter</button>
      <button class="btn btn-danger" (click)="reinitialse()">Reinitialiser</button>
    </div>
  \`,
})
export class AppComponent {
  // D\xE9claration du signal
  count = signal(0);

  constructor() {
    // D\xE9claration d'un effet qui observe les changements du signal \`count\`
    effect(() => {
      console.log(\`Le compteur a chang\xE9 : \${this.count()}\`);
      document.title=\`title: \${this.count()}\`;  });
  }

  // M\xE9thode pour incr\xE9menter la valeur du compteur
  increment() {
    this.count.update((currentValue) => currentValue + 1);
  }

  // M\xE9thode pour d\xE9cr\xE9menter la valeur du compteur
  decrement() {
    this.count.update((currentValue) => currentValue - 1);
  }
  reinitialse(){
    this.count.set(0);
  }
}`),H(),a()()(),l(24,"div"),s(25," ______________________________________________________________"),l(26,"span",13),s(27,"Cours"),a(),s(28,"______________________________________________________________ "),a(),l(29,"pre"),s(30,`
`),l(31,"strong"),s(32,"Signal :"),a(),s(33,`
signal(0) initialise un signal avec une valeur de 0.
Pour acc\xE9der \xE0 la valeur du signal, on utilise count().

`),l(34,"strong"),s(35,"Effect :"),a(),s(36,`
effect() ex\xE9cute automatiquement son callback chaque fois que le signal count change.
Dans cet exemple, chaque mise \xE0 jour du signal est d\xE9tect\xE9e, et un message est affich\xE9 dans la console.

`),l(37,"strong"),s(38,"Mise \xE0 jour :"),a(),s(39,`
update() est utilis\xE9 pour modifier la valeur du signal en fonction de sa valeur actuelle.
Les m\xE9thodes increment() et decrement() modifient respectivement la valeur du compteur.
`),a()()}t&2&&(g(5),$("Compteur : ",i.count(),""),g(15),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var zF=["tab1"];function $F(n,e){n&1&&(l(0,"span",17),s(1,"copied "),y(2,"i",18),a())}var bp=class n{price=Je(100);quantity=Je(1);totalWithComputed=fn(()=>this.price()*this.quantity());totalWitoutComputed=this.price()*this.quantity();infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-price-calculator"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,zF,5),t&2&&ne()},decls:111,vars:5,consts:[["tab1",""],[1,"container"],["type","text",1,"me-4",3,"ngModelChange","ngModel"],["type","text",3,"ngModelChange","ngModel"],[1,"mt-3"],[1,"text-danger","me-3"],[2,"font-size","14px"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"Les signaux et computed()"),a(),y(3,"hr"),l(4,"label"),s(5,"Prix :"),a(),l(6,"input",2),Ce("ngModelChange",function(c){return S(r),Ee(i.price,c)||(i.price=c),A(c)}),a(),l(7,"label"),s(8,"Quantit\xE9 :"),a(),l(9,"input",3),Ce("ngModelChange",function(c){return S(r),Ee(i.quantity,c)||(i.quantity=c),A(c)}),a(),l(10,"h3",4),s(11," Total avec computed: "),l(12,"span",5),s(13),a(),l(14,"span",6),s(15,"(avec computed le total se met \xE0 jour chaque fois que le signal quantity change)"),a()(),l(16,"h3"),s(17," Total sans computed : "),l(18,"span",5),s(19),a(),l(20,"span",6),s(21,"(sans computed le total ne se met pas \xE0 jour si le signal quantity change)"),a()(),y(22,"hr"),l(23,"ul",7)(24,"li",8)(25,"button",9),s(26," Composant Parent "),a()()(),l(27,"div",10)(28,"div",11)(29,"i",12),C("click",function(){return S(r),A(i.copy1())}),a(),N(30,$F,3,0,"span",13),l(31,"pre",14,0),W(),s(33,`import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="container">
      <h1>Les signaux et computed()</h1>
      <hr />
      <label>Prix :</label>
      <input class="me-4" [(ngModel)]="price" type="text" />
      <label>Quantit\xE9 :</label>
      <input [(ngModel)]="quantity" type="text" />

      <h3 class="mt-3">
        Total avec computed:
        <span class="text-danger me-3 "> { totalWithComputed() }}</span>
        <span style="font-size:14px;"
          >(avec computed le total se met \xE0 jour chaque fois que le signal
          quantity change)</span
        >
      </h3>
      <h3>
        Total sans computed :
        <span class="text-danger me-3">{ totalWitoutComputed }} </span
        ><span style="font-size:14px;"
          >(sans computed le total ne se met pas \xE0 jour si le signal quantity
          change)</span
        >
      </h3>
    </div>
  \`,
})
export class AppComponent {
  price = signal(100); // Prix unitaire
  quantity = signal(1); // Quantit\xE9
  totalWithComputed = computed(() => this.price() * this.quantity()); // Calcul automatique
  totalWitoutComputed = this.price() * this.quantity();
}`),H(),a()()(),l(34,"div",15),s(35," ****************************************"),l(36,"span",16),s(37,"cours"),a(),s(38,"************************************************* "),a(),l(39,"p"),s(40,"les signaux sont comme les states dans react."),a(),l(41,"p"),s(42,"Voici quelques utilisations courantes des signaux :"),a(),l(43,"p")(44,"strong"),s(45,"Gestion des \xE9tats :"),a(),s(46," Les signaux peuvent \xEAtre utilis\xE9s pour repr\xE9senter l'\xE9tat d'un composant ou d'une fonctionnalit\xE9 sp\xE9cifique. Lorsqu'un signal est mis \xE0 jour, les parties de l'application qui d\xE9pendent de ce signal peuvent \xEAtre notifi\xE9es et r\xE9agir en cons\xE9quence. "),a(),l(47,"p")(48,"strong"),s(49,"D\xE9clenchement d'effets :"),a(),s(50," Les signaux peuvent \xEAtre utilis\xE9s pour d\xE9clencher des effets ou des actions sp\xE9cifiques lorsqu'une valeur change. Par exemple, vous pouvez d\xE9finir un effet qui s'ex\xE9cute chaque fois qu'un signal particulier est mis \xE0 jour, ce qui permet de r\xE9aliser des actions suppl\xE9mentaires telles que l'envoi de donn\xE9es \xE0 un serveur ou la mise \xE0 jour de l'interface utilisateur. "),a(),l(51,"p")(52,"strong"),s(53,"Gestion des d\xE9pendances :"),a(),s(54," Les signaux permettent de d\xE9finir des d\xE9pendances entre diff\xE9rentes valeurs r\xE9actives. Lorsqu'un signal sur lequel d\xE9pend un autre signal est mis \xE0 jour, cela d\xE9clenche automatiquement la mise \xE0 jour des signaux d\xE9pendants. "),a(),l(55,"p")(56,"strong"),s(57,"Calcul de valeurs d\xE9riv\xE9es :"),a(),s(58," Les signaux peuvent \xEAtre utilis\xE9s pour calculer des valeurs d\xE9riv\xE9es bas\xE9es sur d'autres signaux. Par exemple, vous pouvez d\xE9finir un signal qui repr\xE9sente la somme de deux autres signaux, et chaque fois que les signaux d'origine sont mis \xE0 jour, le signal calcul\xE9 est automatiquement mis \xE0 jour. "),a(),y(59,"br"),l(60,"p")(61,"strong"),s(62,"1. Cr\xE9ation d'un signal:"),a()(),l(63,"p"),s(64," import { signal } from '@ angular/core';"),y(65,"br"),s(66," const count = signal(0); // Un signal initialis\xE9 avec 0 "),a(),l(67,"p")(68,"strong"),s(69," 2. Lecture de la valeur d'un signal:"),a()(),l(70,"p"),s(71," Pour acc\xE9der \xE0 la valeur actuelle d'un signal, utilisez son appel comme une fonction."),y(72,"br"),s(73," console.log(count()); // Affiche la valeur actuelle du signal "),a(),l(74,"p")(75,"strong"),s(76," 3. Mise \xE0 jour de la valeur d'un signal :"),a()(),l(77,"p"),s(78," Il existe plusieurs fa\xE7ons de mettre \xE0 jour un signal :"),y(79,"br")(80,"br"),s(81," a. set() : Remplace la valeur actuelle."),y(82,"br"),s(83," count.set(5); // Change la valeur \xE0 5"),y(84,"br")(85,"br"),s(86," b. update() : Met \xE0 jour la valeur qui depend de la valeur actuelle en utilisant une fonction."),y(87,"br"),s(88," count.update(currentValue => currentValue + 1); // Incr\xE9mente la valeur"),y(89,"br")(90,"br"),s(91," c. mutate() : Modifie la valeur directement (utile pour les objets/collections)."),y(92,"br"),a(),l(93,"pre"),s(94,"const items = signal<string[]>([]);"),y(95,"br"),s(96,`
items.mutate(list => list.push('nouvel \xE9l\xE9ment'));
      `),a(),l(97,"p")(98,"strong"),s(99," 4. Utilisation dans des composants avec computed "),a()(),l(100,"pre"),s(101,`R\xF4le principal de computed():
Cr\xE9er des valeurs d\xE9riv\xE9es : Il d\xE9rive une nouvelle valeur en fonction d'autres signaux ou valeurs.
R\xE9activit\xE9 automatique : Si les signaux utilis\xE9s changent, computed() recalculera automatiquement la nouvelle valeur.

const count = signal(2);
const doubleCount = computed(() => count() * 2);
console.log(doubleCount()); // Affiche 4
count.set(3);
console.log(doubleCount()); // Affiche 6
      `),a(),l(102,"p")(103,"strong"),s(104," 5. Utilisation avec des objets:"),a()(),s(105," Un signal peut contenir un objet ou un tableau, et vous pouvez le mettre \xE0 jour de mani\xE8re r\xE9active."),y(106,"br"),l(107,"pre"),s(108,`const user = signal({ name: 'Alice', age: 25 });
//Mise \xE0 jour avec set:
user.set({ name: 'Bob', age: 30 });
// Mise \xE0 jour partielle avec update
user.update(u => ({ ...u, age: u.age + 1 }));
// Acc\xE8s \xE0 une propri\xE9t\xE9 sp\xE9cifique
console.log(user().name); // Affiche "Bob"

`),a(),s(109," ."),y(110,"br"),a()}t&2&&(g(6),ye("ngModel",i.price),g(3),ye("ngModel",i.quantity),g(4),$(" ",i.totalWithComputed(),""),g(6),$("",i.totalWitoutComputed," "),g(11),I("ngIf",i.clicked))},dependencies:[G,te,Pe,De,Oe,ke],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var GF=["tab1"];function HF(n,e){if(n&1&&(l(0,"div",13)(1,"div",14),y(2,"img",15),l(3,"div",16)(4,"h5",17),s(5),a(),l(6,"p",18),s(7),a(),l(8,"p",18)(9,"strong"),s(10,"Cat\xE9gorie :"),a(),s(11),a(),l(12,"p",18)(13,"strong"),s(14,"Prix :"),a(),s(15),a(),l(16,"a",19),s(17,"Voir le produit"),a()()()()),n&2){let t=ce().$implicit;g(2),I("src",t.thumbnail||(t.images!=null&&t.images.length?t.images[0]:""),Cl)("alt",t.nom),g(3),ge(t.title),g(2),$(" ",t.description.substring(0,100)+"..."," "),g(4),$(" ",t.category," "),g(4),$(" ",t.price," \u20AC ")}}function WF(n,e){if(n&1&&N(0,HF,18,6,"div",13),n&2){let t=e.$index;We(t<9?0:-1)}}function KF(n,e){if(n&1&&(l(0,"div",3),Yt(1,WF,1,1,null,null,Lr),a()),n&2){let t=ce();g(),Zt(t.products)}}function QF(n,e){n&1&&(l(0,"div",4),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des produits. "),a())}function JF(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}var yp=class n{products=[];hasError=!1;ngOnInit(){Pn({url:"https://dummyjson.com/products",method:"GET"}).subscribe({next:t=>{this.products=t.response.products||[],console.log("response :",this.products)},error:()=>{this.hasError=!0}})}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-ajax"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,GF,5),t&2&&ne()},decls:28,vars:3,consts:[["tab1",""],[1,"container","mt-3"],[1,"tab"],[1,"row","mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"col-md-4","mb-4"],[1,"card"],[1,"card-img-top","img-fluid",2,"max-height","150px","object-fit","cover",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn","btn-primary"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"AJAX dans Angular"),a(),y(3,"hr"),l(4,"p"),s(5," AJAX a \xE9t\xE9 principalement con\xE7u pour mettre \xE0 jour des parties d'une page Web, sans recharger la page enti\xE8re. "),a(),l(6,"p"),s(7," En Angular, on utilise g\xE9n\xE9ralement HttpClient (du module HttpClientModule) pour effectuer des requ\xEAtes AJAX, mais il est aussi possible d'utiliser RxJS avec ajax(). "),a(),l(8,"strong"),s(9,"syntaxe:"),a(),l(10,"pre",2),s(11,`ajax({
  url: "........",
  method: "GET",
}).subscribe({
  next: (response: any) => {
   //utilisation de la reponse de l'api
  },
  error: () => {
    this.hasError = true;
  },
});
`),a(),l(12,"h3"),s(13,"Liste des Produits"),a(),N(14,KF,3,0,"div",3)(15,QF,2,0,"div",4),y(16,"hr"),l(17,"ul",5)(18,"li",6)(19,"button",7),s(20," Composant appComponent "),a()()(),l(21,"div",8)(22,"div",9)(23,"i",10),C("click",function(){return S(r),A(i.copy1())}),a(),N(24,JF,3,0,"span",11),l(25,"pre",12,0),W(),s(27,`import { OnInit } from "@angular/core";
// utilisation de ajax
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-ajax",
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container mt-3">
      <h1>Liste des Produits</h1>

      @if (products.length > 0) {
      <div class="row mt-3">
        @for (product of products; track $index) { @if ($index < 9) {
        <!-- Afficher uniquement les 10 premiers produits -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              [src]="
                product.thumbnail ||
                (product.images?.length ? product.images[0] : '')
              "
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description.substring(0, 100) + "..." }}
                <!-- Description raccourcie -->
              </p>
              <p class="card-text">
                <strong>Cat\xE9gorie :</strong> {{ product.category }}
              </p>
              <p class="card-text">
                <strong>Prix :</strong> {{ product.price }} \u20AC
              </p>
              <a href="#" class="btn btn-primary">Voir le produit</a>
            </div>
          </div>
        </div>
        } }
      </div>
      } @if (products.length === 0 && hasError) {
      <div class="alert alert-danger">
        Une erreur est survenue lors de la r\xE9cup\xE9ration des produits.
      </div>
      }
    </div>
  \`,
})
export class AjaxComponent implements OnInit {
  products: any[] = [];
  hasError: boolean = false;
  ngOnInit(): void {
    const response = ajax({
      url: "https://dummyjson.com/products",
      method: "GET",
    });

    response.subscribe({
      next: (response: any) => {
        this.products = response.response.products || []; // Assurez-vous que la cl\xE9 existe
        console.log("response :", this.products);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }
}`),H(),a()()()()}t&2&&(g(14),We(i.products.length>0?14:-1),g(),We(i.products.length===0&&i.hasError?15:-1),g(9),I("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var XF=["tab1"];function YF(n,e){n&1&&(l(0,"span",20),s(1,"copied "),y(2,"i",21),a())}var Ep=class n{productName="produit 1";quantity=1;message=`${this.quantity} ${this.productName}(s) ajout\xE9(s) au panier.`;addToCart(){alert(`${this.quantity} ${this.productName}(s) ajout\xE9(s) au panier.`)}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-test1"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,XF,5),t&2&&ne()},decls:211,vars:3,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","me-4",3,"click"],["type","number",3,"ngModelChange","ngModel"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"fs-6"],[1,"p-2",2,"background-color","#edeef3"],[1,"my-0","table","table-bordered","table-striped"],[1,"table","table-bordered","table-striped"],[2,"background-color","black","color","white"],["scope","col"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"les bindings"),a(),y(3,"hr"),l(4,"h2"),s(5),a(),l(6,"button",2),C("click",function(){return S(r),A(i.addToCart())}),s(7," Ajouter au panier "),a(),l(8,"input",3),Ce("ngModelChange",function(c){return S(r),Ee(i.quantity,c)||(i.quantity=c),A(c)}),a(),y(9,"hr"),l(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),a()()(),l(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return S(r),A(i.copy1())}),a(),N(17,YF,3,0,"span",10),l(18,"pre",11,0),W(),s(20,`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule], // pour utiliser ngModel
  template: \` <div class="container">
    <h1>les bindings</h1>
    <hr />
    <h2>{{ productName }}</h2>
    <!-- Interpolation -->
    <button class="btn btn-success me-4" (click)="addToCart()">
      Ajouter au panier
    </button>
    <!-- Event binding -->
    <input [(ngModel)]="quantity" type="number" />
    <!-- Two-way binding -->
\`
})
export class appComponent {
productName: string = 'produit 1';
quantity: number = 1;
message = \`\${this.quantity} \${this.productName}(s) ajout\xE9(s) au panier.\`;
addToCart() {
alert(\`\${this.quantity} \${this.productName}(s) ajout\xE9(s) au panier.\`);
}
}
        `),H(),a()()(),y(21,"hr"),l(22,"div",12),s(23," ****************************************"),l(24,"span",13),s(25,"cours"),a(),s(26,"************************************************* "),a(),l(27,"pre")(28,"strong",14),s(29,"Interpolation :"),a(),s(30,`
L\u2019interpolation permet d\u2019afficher une valeur dans le template. Pour cela, on utilise la syntaxe {{ }.
`),l(31,"div",15),s(32,`@Component({
  template: \`
    <p>Mon nom est {{ name }</p>
    <p>{{ copyright }</p>
  \`
})
export class AppComponent {
  name = 'Emeline';
  copyright = \`Bonjour Angular, \${new Date().getFullYear()}\`
}`),a(),s(33,`

`),l(34,"strong",14),s(35,"Property binding :"),a(),s(36,`
Le property binding permet de lier une propri\xE9t\xE9 d\u2019un \xE9l\xE9ment HTML \xE0 une valeur dans le composant. Pour cela, on utilise la syntaxe [ ].

`),l(37,"div",15),s(38,`@Component({
  template: \`
    <button [disabled]="isDisabled">Mon bouton</button>
    <img [src]="image" />
  \`
})
export class AppComponent {
  isDisabled = true;
  image = 'https://angular.io/assets/images/logos/angular/angular.png';
}`),a(),s(39,`

`),l(40,"strong",14),s(41,"Event binding :"),a(),s(42,`
L\u2019event binding permet de lier un \xE9v\xE9nement d\u2019un \xE9l\xE9ment HTML \xE0 une m\xE9thode dans le composant. Pour cela, on utilise la syntaxe ( ). Il existe beaucoup d\u2019\xE9v\xE9nements comme click, change, input, keyup, keydown, mouseover, mouseout, focus, blur, etc.

`),l(43,"div",15),s(44,`@Component({
  template: \`
    <button (click)="alert('Bonjour Angular!')">Alert</button>
  \`
})
export class AppComponent {
  alert(message: string) {
    window.alert(message);
  }
}`),a(),s(45,`

`),l(46,"strong",14),s(47,"Two-way binding :"),a(),s(48,`
Le two-way binding est une fonctionnalit\xE9 qui cr\xE9e une connexion bidirectionnelle entre un \xE9l\xE9ment HTML et un composant. Cela signifie que toute modification apport\xE9e \xE0 l\u2019\xE9l\xE9ment est refl\xE9t\xE9e dans le composant, et vice-versa. Pour r\xE9aliser cette liaison, on utilise la syntaxe [( )].

`),l(49,"div",15),s(50,`@Component({
  template: \`
    <input type="text" [(ngModel)]="name" />
    <p>Mon nom est { { name } }</p>
  \`
})
export class AppComponent {
  name = 'Emeline';
}`),a(),s(51,`

Ici, si l\u2019utilisateur \xE9crit dans l\u2019input, cela modifiera la propri\xE9t\xE9 name et ce changement sera refl\xE9t\xE9 automatiquement dans { { name } }.
`),a(),l(52,"pre"),W(),s(53,`
`),l(54,"strong",14),s(55,"R\xE9sum\xE9 des bindings :"),a(),s(56,`
    `),l(57,"table",16),s(58,`
          `),l(59,"thead"),s(60,`
            `),l(61,"tr"),s(62,`
              `),l(63,"th"),s(64,"Type de Binding"),a(),s(65,`
              `),l(66,"th"),s(67,"Syntaxe"),a(),s(68,`
              `),l(69,"th"),s(70,"Exemple"),a(),s(71,`
            `),a(),s(72,`
          `),a(),s(73,`
          `),l(74,"tbody"),s(75,`
            `),l(76,"tr"),s(77,`
              `),l(78,"td")(79,"strong"),s(80,"Interpolation"),a()(),s(81,`
              `),l(82,"td"),s(83,"{{ expression %#125;%#125;"),a(),s(84,`
              `),l(85,"td"),s(86,"<p>{{ title %#125;%#125;</p>"),a(),s(87,`
            `),a(),s(88,`
            `),l(89,"tr"),s(90,`
              `),l(91,"td")(92,"strong"),s(93,"Property Binding"),a()(),s(94,`
              `),l(95,"td"),s(96,'[property]="value"'),a(),s(97,`
              `),l(98,"td"),s(99,'<img [src]="imageUrl" />'),a(),s(100,`
            `),a(),s(101,`
            `),l(102,"tr"),s(103,`
              `),l(104,"td")(105,"strong"),s(106,"Event Binding"),a()(),s(107,`
              `),l(108,"td"),s(109,'(event)="handler()"'),a(),s(110,`
              `),l(111,"td"),s(112,'<button (click)="onClick()">Clique</button>'),a(),s(113,`
            `),a(),s(114,`
            `),l(115,"tr"),s(116,`
              `),l(117,"td")(118,"strong"),s(119,"Two-Way Binding"),a()(),s(120,`
              `),l(121,"td"),s(122,'[(ngModel)]="value"'),a(),s(123,`
              `),l(124,"td"),s(125,'<input [(ngModel)]="name" />'),a(),s(126,`
            `),a(),s(127,`
            `),l(128,"tr"),s(129,`
              `),l(130,"td")(131,"strong"),s(132,"Class Binding"),a()(),s(133,`
              `),l(134,"td"),s(135,"[class.className]"),a(),s(136,`
              `),l(137,"td"),s(138,'<div [class.active]="isActive"></div>'),a(),s(139,`
            `),a(),s(140,`
            `),l(141,"tr"),s(142,`
              `),l(143,"td")(144,"strong"),s(145,"Style Binding"),a()(),s(146,`
              `),l(147,"td"),s(148,"[style.property]"),a(),s(149,`
              `),l(150,"td"),s(151,'<div [style.color]="color"></div>'),a(),s(152,`
            `),a(),s(153,`
          `),a(),s(154,`
        `),a(),s(155,`

`),l(156,"strong",14),s(157,"R\xE9sum\xE9 rapide : "),a(),s(158,`
  `),l(159,"table",17),s(160,`
  `),l(161,"thead",18),s(162,`
    `),l(163,"tr"),s(164,`
      `),l(165,"th",19),s(166,"Concept"),a(),s(167,`
      `),l(168,"th",19),s(169,"Syntaxe"),a(),s(170,`
    `),a(),s(171,`
  `),a(),s(172,`
  `),l(173,"tbody"),s(174,`
    `),l(175,"tr"),s(176,`
      `),l(177,"td"),s(178,"Unidirectionnel"),a(),s(179,`
      `),l(180,"td")(181,"code"),s(182,"{{}}"),a(),s(183," ou "),l(184,"code"),s(185,"[]"),a()(),s(186,`
    `),a(),s(187,`
    `),l(188,"tr"),s(189,`
      `),l(190,"td"),s(191,"\xC9v\xE9nements"),a(),s(192,`
      `),l(193,"td")(194,"code"),s(195,"()"),a()(),s(196,`
    `),a(),s(197,`
    `),l(198,"tr"),s(199,`
      `),l(200,"td"),s(201,"Bidirectionnel"),a(),s(202,`
      `),l(203,"td")(204,"code"),s(205,"[()]"),a(),s(206," (pour synchroniser les donn\xE9es entre le composant et le DOM)"),a(),s(207,`
    `),a(),s(208,`
  `),a(),s(209,`
`),a(),s(210,`
    `),H(),a()()}t&2&&(g(5),ge(i.productName),g(3),ye("ngModel",i.quantity),g(9),I("ngIf",i.clicked))},dependencies:[Pe,De,pt,Oe,ke,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var ZF=["tab1"];function e4(n,e){n&1&&(l(0,"span",16),s(1,"copied "),y(2,"i",17),a())}var Cp=class n{time=0;timerSubscription;startTimer(){this.stopTimer(),this.timerSubscription=st(1e3).subscribe(e=>this.time=e)}stopTimer(){this.timerSubscription&&this.timerSubscription.unsubscribe()}resetTimer(){this.stopTimer(),this.time=0}infoTab1=z("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-root"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,ZF,5),t&2&&ne()},decls:53,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","mx-4",3,"click"],[1,"my-3","fs-5"],[1,"text-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=ee();l(0,"div",1)(1,"h1"),s(2,"l'observable interval()"),a(),y(3,"hr"),l(4,"button",2),C("click",function(){return S(r),A(i.startTimer())}),s(5,"D\xE9marrer"),a(),l(6,"button",3),C("click",function(){return S(r),A(i.stopTimer())}),s(7,"Arr\xEAter"),a(),l(8,"button",2),C("click",function(){return S(r),A(i.resetTimer())}),s(9," R\xE9initialiser "),a(),l(10,"div",4),s(11," Minuterie: "),l(12,"span",5),s(13),a()(),y(14,"hr"),l(15,"ul",6)(16,"li",7)(17,"button",8),s(18," Composant Parent "),a()()(),l(19,"div",9)(20,"div",10)(21,"i",11),C("click",function(){return S(r),A(i.copy1())}),a(),N(22,e4,3,0,"span",12),l(23,"pre",13,0),W(),s(25,`import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  imports: [FormsModule, CommonModule], // pour utiliser ngModel
  template: \`
    <div class="container">
      <h1>l'observable interval()</h1>
      <hr />
      <button class="btn btn-success" (click)="startTimer()">D\xE9marrer</button>
      <button class="btn btn-danger mx-4" (click)="stopTimer()">Arr\xEAter</button>
      <button class="btn btn-success" (click)="resetTimer()">
        R\xE9initialiser
      </button>
      <div class="my-3 fs-5  ">
        Minuterie: <span class="text-danger">{{ time }}</span>
      </div>
      <span class=" mt-5">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </span>
      <h2>R\xE9sum\xE9 rapide sur interval</h2>
      <p>
        La fonction interval() est une fonction d'RxJS utilis\xE9e pour cr\xE9er un
        observable qui \xE9met une s\xE9quence infinie de nombres \xE0 intervalles
        r\xE9guliers.
      </p>
      <p><strong>Syntaxe :</strong></p>
      interval(delay)
      <p>
        Par exemple, interval(1000) \xE9mettra une valeur toutes les 1000 ms (1
        seconde).<br />
        interval(delay).subscribe(value=>votre code ici en fonction de value)
      </p>
      <p><strong>R\xE9sum\xE9 :</strong></p>
      <ul>
        <li>
          interval() cr\xE9e un observable qui \xE9met une valeur \xE0 intervalle
          r\xE9gulier, commen\xE7ant \xE0 partir de z\xE9ro.
        </li>
        <li>
          Il est souvent utilis\xE9 pour cr\xE9er des timers ou des flux de donn\xE9es
          r\xE9p\xE9titifs \xE0 des intervalles fixes.
        </li>
      </ul>
    </div>
  \`,
})
export class AppComponent {
  time: number = 0;
  private timerSubscription: Subscription | null = null;

  startTimer() {
    this.stopTimer();
    const timer$ = interval(1000);
    this.timerSubscription = timer$.subscribe((value) => {
      this.time = value;
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.time = 0;
  }
}`),H(),a()()(),y(26,"hr"),l(27,"span",14),s(28," ****************************************"),l(29,"span",15),s(30,"cours"),a(),s(31,"************************************************* "),a(),l(32,"h2"),s(33,"R\xE9sum\xE9 rapide sur interval"),a(),l(34,"p"),s(35," La fonction interval() est une fonction d'RxJS utilis\xE9e pour cr\xE9er un observable qui \xE9met une s\xE9quence infinie de nombres \xE0 intervalles r\xE9guliers. "),a(),l(36,"p")(37,"strong"),s(38,"Syntaxe :"),a()(),s(39," interval(delay) "),l(40,"p"),s(41," Par exemple, interval(1000) \xE9mettra une valeur toutes les 1000 ms (1 seconde)."),y(42,"br"),l(43,"strong",5),s(44,"interval(delay).subscribe(value=>votre code ici en fonction de value)"),a()(),l(45,"p")(46,"strong"),s(47,"R\xE9sum\xE9 :"),a()(),l(48,"ul")(49,"li"),s(50," interval() cr\xE9e un observable qui \xE9met une valeur \xE0 intervalle r\xE9gulier, commen\xE7ant \xE0 partir de z\xE9ro. "),a(),l(51,"li"),s(52," Il est souvent utilis\xE9 pour cr\xE9er des timers ou des flux de donn\xE9es r\xE9p\xE9titifs \xE0 des intervalles fixes. "),a()()()}t&2&&(g(13),ge(i.time),g(9),I("ngIf",i.clicked))},dependencies:[Pe,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var wp=class n{title="Page d'accueil";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"container"],[1,"row","d-flex","justify-content-center","flex-wrap"],["height","300px","src",Db`https://www.youtube.com/embed/7gbtO0Stzi8?si=5AfM6O9o-_kCMG1x`,"title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","true",1,"aspect-video","col-6"],[1,"col-6"],[1,"fs-6"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),y(2,"iframe",2),l(3,"div",3)(4,"h1"),s(5,"Angular est-il vraiment plus compliqu\xE9 que React ?"),a(),l(6,"p",4),s(7," Quand on d\xE9bute avec Angular, il est facile de se sentir d\xE9courag\xE9 face \xE0 la multitude de concepts \xE0 assimiler. Cette complexit\xE9 peut inciter \xE0 se tourner vers des frameworks comme React, qui semblent plus simples \xE0 premi\xE8re vue. Mais est-ce vraiment le cas ? "),a()()()())},encapsulation:2})};var ox=()=>{let n=Y(Ge),e=Y(ln),t=!1;return e.select(wr).subscribe(i=>(t=i,t?!0:(n.navigate(["/login"]),!1))),!0};var sx=()=>{let n=Y(Ge);return Y(ln).select(wr).pipe(Rn(),ve(t=>t?(n.navigate(["/dashboard"]),!1):!0))};var ax=[{path:"",component:wp},{path:"data-binding",component:Ep},{path:"introduction-au-routing",component:kc},{path:"interval",component:Cp},{path:"routes-avec-des-parametres",component:Rc},{path:"route-avec-parametres-de-requete",component:Pc},{path:"redirections-et-pages-404",component:Ac},{path:"chargement-de-modules-avec-lazy-loading",component:Ic},{path:"route-guards-proteger-les-pages",component:Sc},{path:"les-services",component:Dc},{path:"ajax",component:yp},{path:"http",component:Ld},{path:"signal-et-computed",component:bp},{path:"signal-et-effect",component:_p},{path:"les-inputs",component:fp},{path:"les-outputs",component:vp},{path:"les-model",component:mp},{path:"les-signaux-et-leurs-methodes",component:pp},{path:"liaison-conditionnelle",component:dp},{path:"liaison-une-chaine-de-caracteres",component:up},{path:"liaison-avec-un-tableau",component:cp},{path:"liaison-avec-un-objet",component:lp},{path:"combinaison-des-approches",component:ap},{path:"liaison-d-une-propriete",component:sp},{path:"liaison-avec-unites",component:op},{path:"liaison-multiple",component:rp},{path:"liaison-a-un-objet",component:ip},{path:"approches-en-combinaison",component:np},{path:"ngoninit",component:Qc},{path:"ngonchanges",component:Hc},{path:"ngafterviewinit",component:Kc},{path:"ngondestroy",component:Wc},{path:"les-pipes",component:tp},{path:"@for",component:Zd},{path:"@if",component:Yd},{path:"@switch",component:Xd},{path:"projection-avec-ng-content",component:Jd},{path:"acceder-a-un-element-du-dom",component:Kd},{path:"acceder-a-un-composant-enfant",component:jd},{path:"acceder-a-plusieurs-elements",component:Bd},{path:"acceder-aux-composants-enfants",component:qd},{path:"acceder-aux-elements-enfants-d-un-composant",component:$d},{path:"acceder-a-un-composant-enfant-dans-la-projection-de-contenu",component:Hd},{path:"viewchild-avec-ng-template",component:Wd},{path:"les-states-et-les-reducers",component:Fd},{path:"ng-container---ng-template",component:Od},{path:"ngform-dans-ngsubmit",component:Md},{path:"utiliser-viewchild-pour-ngform",component:kd},{path:"formgroup-et-formcontrol",component:Dd},{path:"dashboard",component:Rd,canActivate:[ox]},{path:"exemple-de-protection",component:bd,canActivate:[sx]},{path:"les-resolvers",component:Tc,resolve:{products:xc}},{path:"les-observables",component:Pd},{path:"les-operateurs-de-creation",component:wd},{path:"les-operateurs-de-transformation",component:yd},{path:"crud-nodejs-mongodb",component:Id},{path:"update-node/:id",component:Ad},{path:"crud-firebase",component:Sd},{path:"update-product-firebase/:id",component:fd},{path:"crud-json",component:xd},{path:"updateproduct-json/:id",component:Td},{path:"deployement-github-angular",component:wc},{path:"deployement-github-reactjs",component:Cc},{path:"deployement-hebergeur-angular-api-rest",component:Ec},{path:"deployement-hebergeur-reactjs-api-rest",component:yc},{path:"deployement-hebergeur-laravel",component:bc},{path:"deployement-vps-api-node.js",component:_c},{path:"deployement-vps-laravel-nginx-apache",component:vc},{path:"deployement-vps-full-stack-sur-vps",component:gc},{path:"deployement-cloud-laravel-heroku",component:mc},{path:"deployement-cloud-expressjs-railway",component:fc},{path:"deployement-cloud-firebase-functions",component:hc},{path:"deployement-cloud-supabase",component:pc}];var Ya="PERFORM_ACTION",t4="REFRESH",mx="RESET",hx="ROLLBACK",fx="COMMIT",gx="SWEEP",vx="TOGGLE_ACTION",n4="SET_ACTIONS_ACTIVE",_x="JUMP_TO_STATE",bx="JUMP_TO_ACTION",Tv="IMPORT_STATE",yx="LOCK_CHANGES",Ex="PAUSE_RECORDING",Wo=class{constructor(e,t){if(this.action=e,this.timestamp=t,this.type=Ya,typeof e.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},pv=class{constructor(){this.type=t4}},mv=class{constructor(e){this.timestamp=e,this.type=mx}},hv=class{constructor(e){this.timestamp=e,this.type=hx}},fv=class{constructor(e){this.timestamp=e,this.type=fx}},gv=class{constructor(){this.type=gx}},vv=class{constructor(e){this.id=e,this.type=vx}};var _v=class{constructor(e){this.index=e,this.type=_x}},bv=class{constructor(e){this.actionId=e,this.type=bx}},yv=class{constructor(e){this.nextLiftedState=e,this.type=Tv}},Ev=class{constructor(e){this.status=e,this.type=yx}},Cv=class{constructor(e){this.status=e,this.type=Ex}};var Sp=new ue("@ngrx/store-devtools Options"),lx=new ue("@ngrx/store-devtools Initial Config");function Cx(){return null}var i4="NgRx Store DevTools";function r4(n){let e={maxAge:!1,monitor:Cx,actionSanitizer:void 0,stateSanitizer:void 0,name:i4,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},t=typeof n=="function"?n():n,i=t.logOnly?{pause:!0,export:!0,test:!0}:!1,r=t.features||i||e.features;r.import===!0&&(r.import="custom");let o=Object.assign({},e,{features:r},t);if(o.maxAge&&o.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${o.maxAge}`);return o}function cx(n,e){return n.filter(t=>e.indexOf(t)<0)}function wx(n){let{computedStates:e,currentStateIndex:t}=n;if(t>=e.length){let{state:r}=e[e.length-1];return r}let{state:i}=e[t];return i}function Xa(n){return new Wo(n,+Date.now())}function o4(n,e){return Object.keys(e).reduce((t,i)=>{let r=Number(i);return t[r]=Tx(n,e[r],r),t},{})}function Tx(n,e,t){return we(K({},e),{action:n(e.action,t)})}function s4(n,e){return e.map((t,i)=>({state:xx(n,t.state,i),error:t.error}))}function xx(n,e,t){return n(e,t)}function Ix(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function a4(n,e,t,i){let r=[],o={},c=[];return n.stagedActionIds.forEach((d,p)=>{let h=n.actionsById[d];h&&(p&&xv(n.computedStates[p],h,e,t,i)||(o[d]=h,r.push(d),c.push(n.computedStates[p])))}),we(K({},n),{stagedActionIds:r,actionsById:o,computedStates:c})}function xv(n,e,t,i,r){let o=t&&!t(n,e.action),c=i&&!e.action.type.match(i.map(p=>ux(p)).join("|")),d=r&&e.action.type.match(r.map(p=>ux(p)).join("|"));return o||c||d}function ux(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Sx(n){return{ngZone:n?Y(ze):null,connectInZone:n}}var Ap=(()=>{class n extends Kn{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ht(n)))(r||n)}})()}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),Tp={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},wv=new ue("@ngrx/store-devtools Redux Devtools Extension"),Ax=(()=>{class n{constructor(t,i,r){this.config=i,this.dispatcher=r,this.zoneConfig=Sx(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,i){if(this.devtoolsExtension)if(t.type===Ya){if(i.isLocked||i.isPaused)return;let r=wx(i);if(Ix(this.config)&&xv(r,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let o=this.config.stateSanitizer?xx(this.config.stateSanitizer,r,i.currentStateIndex):r,c=this.config.actionSanitizer?Tx(this.config.actionSanitizer,t,i.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(c,o))}else{let r=we(K({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?o4(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?s4(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new rt(t=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(r=>t.next(r)),i.unsubscribe}):cn}createActionStreams(){let t=this.createChangesObservable().pipe(lb()),i=t.pipe(Dt(h=>h.type===Tp.START)),r=t.pipe(Dt(h=>h.type===Tp.STOP)),o=t.pipe(Dt(h=>h.type===Tp.DISPATCH),ve(h=>this.unwrapAction(h.payload)),un(h=>h.type===Tv?this.dispatcher.pipe(Dt(v=>v.type===vd),j_(1e3),Y_(1e3),ve(()=>h),Ti(()=>pe(h)),Qe(1)):pe(h))),d=t.pipe(Dt(h=>h.type===Tp.ACTION),ve(h=>this.unwrapAction(h.payload))).pipe(Dr(r)),p=o.pipe(Dr(r));this.start$=i.pipe(Dr(r)),this.actions$=this.start$.pipe(kt(()=>d)),this.liftedActions$=this.start$.pipe(kt(()=>p))}unwrapAction(t){return typeof t=="string"?(0,eval)(`(${t})`):t}getExtensionConfig(t){let i={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(i.maxAge=t.maxAge),i}sendToReduxDevtools(t){try{t()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}static{this.\u0275fac=function(i){return new(i||n)(oe(wv),oe(Sp),oe(Ap))}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})(),Ip={type:Ga},l4="@ngrx/store-devtools/recompute",c4={type:l4};function Px(n,e,t,i,r){if(i)return{state:t,error:"Interrupted by an error up the chain"};let o=t,c;try{o=n(t,e)}catch(d){c=d.toString(),r.handleError(d)}return{state:o,error:c}}function xp(n,e,t,i,r,o,c,d,p){if(e>=n.length&&n.length===o.length)return n;let h=n.slice(0,e),v=o.length-(p?1:0);for(let b=e;b<v;b++){let T=o[b],O=r[T].action,j=h[b-1],U=j?j.state:i,F=j?j.error:void 0,fe=c.indexOf(T)>-1?j:Px(t,O,U,F,d);h.push(fe)}return p&&h.push(n[n.length-1]),h}function u4(n,e){return{monitorState:e(void 0,{}),nextActionId:1,actionsById:{0:Xa(Ip)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function d4(n,e,t,i,r={}){return o=>(c,d)=>{let{monitorState:p,actionsById:h,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:O,currentStateIndex:j,computedStates:U,isLocked:F,isPaused:le}=c||e;c||(h=Object.create(h));function fe(be){let he=be,R=b.slice(1,he+1);for(let E=0;E<R.length;E++)if(U[E+1].error){he=E,R=b.slice(1,he+1);break}else delete h[R[E]];T=T.filter(E=>R.indexOf(E)===-1),b=[0,...b.slice(he+1)],O=U[he].state,U=U.slice(he),j=j>he?j-he:0}function ae(){h={0:Xa(Ip)},v=1,b=[0],T=[],O=U[j].state,j=0,U=[]}let J=0;switch(d.type){case yx:{F=d.status,J=1/0;break}case Ex:{le=d.status,le?(b=[...b,v],h[v]=new Wo({type:"@ngrx/devtools/pause"},+Date.now()),v++,J=b.length-1,U=U.concat(U[U.length-1]),j===b.length-2&&j++,J=1/0):ae();break}case mx:{h={0:Xa(Ip)},v=1,b=[0],T=[],O=n,j=0,U=[];break}case fx:{ae();break}case hx:{h={0:Xa(Ip)},v=1,b=[0],T=[],j=0,U=[];break}case vx:{let{id:be}=d;T.indexOf(be)===-1?T=[be,...T]:T=T.filter(R=>R!==be),J=b.indexOf(be);break}case n4:{let{start:be,end:he,active:R}=d,E=[];for(let x=be;x<he;x++)E.push(x);R?T=cx(T,E):T=[...T,...E],J=b.indexOf(be);break}case _x:{j=d.index,J=1/0;break}case bx:{let be=b.indexOf(d.actionId);be!==-1&&(j=be),J=1/0;break}case gx:{b=cx(b,T),T=[],j=Math.min(j,b.length-1);break}case Ya:{if(F)return c||e;if(le||c&&xv(c.computedStates[j],d,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let he=U[U.length-1];U=[...U.slice(0,-1),Px(o,d.action,he.state,he.error,t)],J=1/0;break}r.maxAge&&b.length===r.maxAge&&fe(1),j===b.length-1&&j++;let be=v++;h[be]=d,b=[...b,be],J=b.length-1;break}case Tv:{({monitorState:p,actionsById:h,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:O,currentStateIndex:j,computedStates:U,isLocked:F,isPaused:le}=d.nextLiftedState);break}case Ga:{J=0,r.maxAge&&b.length>r.maxAge&&(U=xp(U,J,o,O,h,b,T,t,le),fe(b.length-r.maxAge),J=1/0);break}case vd:{if(U.filter(he=>he.error).length>0)J=0,r.maxAge&&b.length>r.maxAge&&(U=xp(U,J,o,O,h,b,T,t,le),fe(b.length-r.maxAge),J=1/0);else{if(!le&&!F){j===b.length-1&&j++;let he=v++;h[he]=new Wo(d,+Date.now()),b=[...b,he],J=b.length-1,U=xp(U,J,o,O,h,b,T,t,le)}U=U.map(he=>we(K({},he),{state:o(he.state,c4)})),j=b.length-1,r.maxAge&&b.length>r.maxAge&&fe(b.length-r.maxAge),J=1/0}break}default:{J=1/0;break}}return U=xp(U,J,o,O,h,b,T,t,le),p=i(p,d),{monitorState:p,actionsById:h,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:O,currentStateIndex:j,computedStates:U,isLocked:F,isPaused:le}}}var dx=(()=>{class n{constructor(t,i,r,o,c,d,p,h){let v=u4(p,h.monitor),b=d4(p,v,d,h.monitor,h),T=fs(fs(i.asObservable().pipe(cb(1)),o.actions$).pipe(ve(Xa)),t,o.liftedActions$).pipe(Xi(Pr)),O=r.pipe(ve(b)),j=Sx(h.connectInZone),U=new lm(1);this.liftedStateSubscription=T.pipe(_l(O),px(j),Xn(({state:fe},[ae,J])=>{let be=J(fe,ae);return ae.type!==Ya&&Ix(h)&&(be=a4(be,h.predicate,h.actionsSafelist,h.actionsBlocklist)),o.notify(ae,be),{state:be,action:ae}},{state:v,action:null})).subscribe(({state:fe,action:ae})=>{if(U.next(fe),ae.type===Ya){let J=ae.action;c.next(J)}}),this.extensionStartSubscription=o.start$.pipe(px(j)).subscribe(()=>{this.refresh()});let F=U.asObservable(),le=F.pipe(ve(wx));Object.defineProperty(le,"state",{value:fa(le,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=t,this.liftedState=F,this.state=le}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(t){this.dispatcher.next(t)}next(t){this.dispatcher.next(t)}error(t){}complete(){}performAction(t){this.dispatch(new Wo(t,+Date.now()))}refresh(){this.dispatch(new pv)}reset(){this.dispatch(new mv(+Date.now()))}rollback(){this.dispatch(new hv(+Date.now()))}commit(){this.dispatch(new fv(+Date.now()))}sweep(){this.dispatch(new gv)}toggleAction(t){this.dispatch(new vv(t))}jumpToAction(t){this.dispatch(new bv(t))}jumpToState(t){this.dispatch(new _v(t))}importState(t){this.dispatch(new yv(t))}lockChanges(t){this.dispatch(new Ev(t))}pauseRecording(t){this.dispatch(new Cv(t))}static{this.\u0275fac=function(i){return new(i||n)(oe(Ap),oe(Kn),oe(Cr),oe(Ax),oe(Wa),oe(gs),oe(Ha),oe(Sp))}}static{this.\u0275prov=me({token:n,factory:n.\u0275fac})}}return n})();function px({ngZone:n,connectInZone:e}){return t=>e?new rt(i=>t.subscribe({next:r=>n.run(()=>i.next(r)),error:r=>n.run(()=>i.error(r)),complete:()=>n.run(()=>i.complete())})):t}var p4=new ue("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function m4(n,e){return!!n||e.monitor!==Cx}function h4(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function Rx(n={}){return ft([Ax,Ap,dx,{provide:lx,useValue:n},{provide:p4,deps:[wv,Sp],useFactory:m4},{provide:wv,useFactory:h4},{provide:Sp,deps:[lx],useFactory:r4},{provide:zo,deps:[dx],useFactory:f4},{provide:qo,useExisting:Ap}])}function f4(n){return n.state}var Dx=["toast-component",""];function g4(n,e){if(n&1){let t=ee();l(0,"button",5),C("click",function(){S(t);let r=ce();return A(r.remove())}),l(1,"span",6),s(2,"\xD7"),a()()}}function v4(n,e){if(n&1&&(xi(0),s(1),Ii()),n&2){let t=ce(2);g(),$("[",t.duplicatesCount+1,"]")}}function _4(n,e){if(n&1&&(l(0,"div"),s(1),N(2,v4,2,1,"ng-container",4),a()),n&2){let t=ce();qt(t.options.titleClass),Kt("aria-label",t.title),g(),$(" ",t.title," "),g(),I("ngIf",t.duplicatesCount)}}function b4(n,e){if(n&1&&y(0,"div",7),n&2){let t=ce();qt(t.options.messageClass),I("innerHTML",t.message,Tm)}}function y4(n,e){if(n&1&&(l(0,"div",8),s(1),a()),n&2){let t=ce();qt(t.options.messageClass),Kt("aria-label",t.message),g(),$(" ",t.message," ")}}function E4(n,e){if(n&1&&(l(0,"div"),y(1,"div",9),a()),n&2){let t=ce();g(),Xt("width",t.width()+"%")}}function C4(n,e){if(n&1){let t=ee();l(0,"button",5),C("click",function(){S(t);let r=ce();return A(r.remove())}),l(1,"span",6),s(2,"\xD7"),a()()}}function w4(n,e){if(n&1&&(xi(0),s(1),Ii()),n&2){let t=ce(2);g(),$("[",t.duplicatesCount+1,"]")}}function T4(n,e){if(n&1&&(l(0,"div"),s(1),N(2,w4,2,1,"ng-container",4),a()),n&2){let t=ce();qt(t.options.titleClass),Kt("aria-label",t.title),g(),$(" ",t.title," "),g(),I("ngIf",t.duplicatesCount)}}function x4(n,e){if(n&1&&y(0,"div",7),n&2){let t=ce();qt(t.options.messageClass),I("innerHTML",t.message,Tm)}}function I4(n,e){if(n&1&&(l(0,"div",8),s(1),a()),n&2){let t=ce();qt(t.options.messageClass),Kt("aria-label",t.message),g(),$(" ",t.message," ")}}function S4(n,e){if(n&1&&(l(0,"div"),y(1,"div",9),a()),n&2){let t=ce();g(),Xt("width",t.width()+"%")}}var Iv=class{_attachedHost;component;viewContainerRef;injector;constructor(e,t){this.component=e,this.injector=t}attach(e,t){return this._attachedHost=e,e.attach(this,t)}detach(){let e=this._attachedHost;if(e)return this._attachedHost=void 0,e.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},Sv=class{_attachedPortal;_disposeFn;attach(e,t){return this._attachedPortal=e,this.attachComponentPortal(e,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(e){this._disposeFn=e}},Av=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new ot;_activate=new ot;_manualClose=new ot;_resetTimeout=new ot;_countDuplicate=new ot;constructor(e){this._overlayRef=e}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(e,t){e&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},Ko=class{toastId;config;message;title;toastType;toastRef;_onTap=new ot;_onAction=new ot;constructor(e,t,i,r,o,c){this.toastId=e,this.config=t,this.message=i,this.title=r,this.toastType=o,this.toastRef=c,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(e){this._onAction.next(e)}onAction(){return this._onAction.asObservable()}},kx={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},Mx=new ue("ToastConfig"),Pv=class extends Sv{_hostDomElement;_componentFactoryResolver;_appRef;constructor(e,t,i){super(),this._hostDomElement=e,this._componentFactoryResolver=t,this._appRef=i}attachComponentPortal(e,t){let i=this._componentFactoryResolver.resolveComponentFactory(e.component),r;return r=i.create(e.injector),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.detachView(r.hostView),r.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(r),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(r)),r}_getComponentRootNode(e){return e.hostView.rootNodes[0]}},A4=(()=>{class n{_document=Y(at);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rv=class{_portalHost;constructor(e){this._portalHost=e}attach(e,t=!0){return this._portalHost.attach(e,t)}detach(){return this._portalHost.detach()}},P4=(()=>{class n{_overlayContainer=Y(A4);_componentFactoryResolver=Y(Mb);_appRef=Y(ei);_document=Y(at);_paneElements=new Map;create(t,i){return this._createOverlayRef(this.getPaneElement(t,i))}getPaneElement(t="",i){return this._paneElements.get(i)||this._paneElements.set(i,{}),this._paneElements.get(i)[t]||(this._paneElements.get(i)[t]=this._createPaneElement(t,i)),this._paneElements.get(i)[t]}_createPaneElement(t,i){let r=this._document.createElement("div");return r.id="toast-container",r.classList.add(t),r.classList.add("toast-container"),i?i.getContainerElement().appendChild(r):this._overlayContainer.getContainerElement().appendChild(r),r}_createPortalHost(t){return new Pv(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new Rv(this._createPortalHost(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ox=(()=>{class n{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,i,r,o,c){this.overlay=i,this._injector=r,this.sanitizer=o,this.ngZone=c,this.toastrConfig=K(K({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=K(K({},t.default.iconClasses),t.config.iconClasses))}show(t,i,r={},o=""){return this._preBuildNotification(o,t,i,this.applyConfig(r))}success(t,i,r={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}error(t,i,r={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}info(t,i,r={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}warning(t,i,r={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}clear(t){for(let i of this.toasts)if(t!==void 0){if(i.toastId===t){i.toastRef.manualClose();return}}else i.toastRef.manualClose()}remove(t){let i=this._findToast(t);if(!i||(i.activeToast.toastRef.close(),this.toasts.splice(i.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let r=this.toasts[this.currentlyActive].toastRef;r.isInactive()||(this.currentlyActive=this.currentlyActive+1,r.activate())}return!0}findDuplicate(t="",i="",r,o){let{includeTitleDuplicates:c}=this.toastrConfig;for(let d of this.toasts){let p=c&&d.title===t;if((!c||p)&&d.message===i)return d.toastRef.onDuplicate(r,o),d}return null}applyConfig(t={}){return K(K({},this.toastrConfig),t)}_findToast(t){for(let i=0;i<this.toasts.length;i++)if(this.toasts[i].toastId===t)return{index:i,activeToast:this.toasts[i]};return null}_preBuildNotification(t,i,r,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,i,r,o)):this._buildNotification(t,i,r,o)}_buildNotification(t,i,r,o){if(!o.toastComponent)throw new Error("toastComponent required");let c=this.findDuplicate(r,i,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&r||i)&&this.toastrConfig.preventDuplicates&&c!==null)return c;this.previousToastMessage=i;let d=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(d=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let p=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let h=i;i&&o.enableHtml&&(h=this.sanitizer.sanitize(Zn.HTML,i));let v=new Av(p),b=new Ko(this.index,o,h,r,t,v),T=[{provide:Ko,useValue:b}],O=Wt.create({providers:T,parent:this._injector}),j=new Iv(o.toastComponent,O),U=p.attach(j,o.newestOnTop);v.componentInstance=U.instance;let F={toastId:this.index,title:r||"",message:i||"",toastRef:v,onShown:v.afterActivate(),onHidden:v.afterClosed(),onTap:b.onTap(),onAction:b.onAction(),portal:U};return d||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{F.toastRef.activate()})),this.toasts.push(F),F}static \u0275fac=function(i){return new(i||n)(oe(Mx),oe(P4),oe(Wt),oe(Vs),oe(ze))};static \u0275prov=me({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),R4=(()=>{class n{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=Je(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,i,r){this.toastrService=t,this.toastPackage=i,this.ngZone=r,this.message=i.message,this.title=i.title,this.options=i.config,this.originalTimeout=i.config.timeOut,this.toastClasses=`${i.toastType} ${i.config.toastClass}`,this.sub=i.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=i.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=i.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=i.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=Je({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>we(K({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),i=this.hideTime-t;this.width.set(i/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>we(K({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>we(K({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,i){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),i)):this.timeout=setTimeout(()=>t(),i)}outsideInterval(t,i){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),i)):this.intervalId=setInterval(()=>t(),i)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(i){return new(i||n)(se(Ox),se(Ko),se(ze))};static \u0275cmp=k({type:n,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(i,r){i&1&&C("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),i&2&&(jb("@flyInOut",r._state),qt(r.toastClasses),Xt("display",r.displayStyle))},attrs:Dx,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(i,r){i&1&&N(0,g4,3,0,"button",0)(1,_4,3,5,"div",1)(2,b4,1,3,"div",2)(3,y4,2,4,"div",3)(4,E4,2,2,"div",4),i&2&&(I("ngIf",r.options.closeButton),g(),I("ngIf",r.title),g(),I("ngIf",r.message&&r.options.enableHtml),g(),I("ngIf",r.message&&!r.options.enableHtml),g(),I("ngIf",r.options.progressBar))},dependencies:[te],encapsulation:2,data:{animation:[uy("flyInOut",[Fl("inactive",Vl({opacity:0})),Fl("active",Vl({opacity:1})),Fl("removed",Vl({opacity:0})),Am("inactive => active",Sm("{{ easeTime }}ms {{ easing }}")),Am("active => removed",Sm("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return n})(),D4=we(K({},kx),{toastComponent:R4}),Nx=(n={})=>ft([{provide:Mx,useValue:{default:D4,config:n}}]);var k4=(()=>{class n{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=Je(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=Je("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,i,r){this.toastrService=t,this.toastPackage=i,this.appRef=r,this.message=i.message,this.title=i.title,this.options=i.config,this.originalTimeout=i.config.timeOut,this.toastClasses=`${i.toastType} ${i.config.toastClass}`,this.sub=i.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=i.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=i.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=i.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),i=this.hideTime-t;this.width.set(i/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(i){return new(i||n)(se(Ox),se(Ko),se(ei))};static \u0275cmp=k({type:n,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(i,r){i&1&&C("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),i&2&&(qt(r.toastClasses),Xt("display",r.displayStyle))},attrs:Dx,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(i,r){i&1&&N(0,C4,3,0,"button",0)(1,T4,3,5,"div",1)(2,x4,1,3,"div",2)(3,I4,2,4,"div",3)(4,S4,2,2,"div",4),i&2&&(I("ngIf",r.options.closeButton),g(),I("ngIf",r.title),g(),I("ngIf",r.message&&r.options.enableHtml),g(),I("ngIf",r.message&&!r.options.enableHtml),g(),I("ngIf",r.options.progressBar))},dependencies:[te],encapsulation:2,changeDetection:0})}return n})(),yK=we(K({},kx),{toastComponent:k4});var M4=(()=>{class n extends Ul{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(oe(at),oe(As),oe(Ll))};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();function O4(){return new py}function N4(n,e,t){return new hy(n,e,t)}var Vx=[{provide:Ll,useFactory:O4},{provide:Ul,useClass:M4},{provide:Vr,useFactory:N4,deps:[Gr,Ul,ze]}],V4=[{provide:As,useFactory:()=>new my},{provide:vs,useValue:"BrowserAnimations"},...Vx],kK=[{provide:As,useClass:dy},{provide:vs,useValue:"NoopAnimations"},...Vx];function Fx(){return Mr("NgEagerAnimations"),[...V4]}var F4="@",L4=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=Y(_b,{optional:!0});loadingSchedulerFn=Y(U4,{optional:!0});_engine;constructor(t,i,r,o,c){this.doc=t,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=c}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-LDYPSZCV.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(t):i=t(),i.catch(r=>{throw new Le(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let c=new o(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(t,i){let r=this.delegate.createRenderer(t,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Dv(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let d=c.createRenderer(t,i);o.use(d),this.scheduler?.notify(11)}).catch(c=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(i){wl()};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Dv=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,i,r){this.delegate.insertBefore(e,t,i,r)}removeChild(e,t,i){this.delegate.removeChild(e,t,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,i)),this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,i)),this.delegate.listen(e,t,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(F4)}},U4=new ue("");function Lx(n="animations"){return Mr("NgAsyncAnimations"),ft([{provide:Vr,useFactory:(e,t,i)=>new L4(e,t,i,n),deps:[at,Gr,ze]},{provide:vs,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ux=QT({data:XT});var jx={providers:[Q1(()=>tu(Nd.firebaseConfig)),_T(()=>wT()),Oy(Ny()),Ux,Hb({eventCoalescing:!0}),LE(ax),Ky(Wy()),Rx({maxAge:25}),Fx(),Nx({positionClass:"toast-top-right",timeOut:3e3,preventDuplicates:!0,closeButton:!0}),Lx()]};var j4=n=>["/",n];function B4(n,e){if(n&1&&(l(0,"a",11),s(1),a()),n&2){let t=e.$implicit,i=ce(3);I("routerLink",Mn(2,j4,i.formatRoute(t))),g(),$(" ",t," ")}}function q4(n,e){if(n&1){let t=ee();l(0,"div",4)(1,"h2",5)(2,"button",6),C("click",function(){let r=S(t).$implicit,o=ce(2);return A(o.toggleSubmenu(r))}),s(3),a()(),l(4,"div",7)(5,"div",8)(6,"div",9),N(7,B4,2,4,"a",10),a()()()()}if(n&2){let t=e.$implicit,i=e.index,r=ce(2);g(),Bb("id","heading",i,""),g(),vt("collapsed",r.openedSubmenu!==t),Kt("data-bs-target","#collapse"+i)("aria-controls","collapse"+i),g(),$(" ",t," "),g(),vt("show",r.openedSubmenu===t),I("id","collapse"+i),Kt("aria-labelledby","heading"+i),g(3),I("ngForOf",r.subMenus[r.selectedMenu][t])}}function z4(n,e){if(n&1&&(l(0,"div",1)(1,"div",2),N(2,q4,8,12,"div",3),a()()),n&2){let t=ce();g(2),I("ngForOf",t.menuItems[t.selectedMenu])}}var Pp=class n{selectedMenu;openedSubmenu=null;menuItems={Angular:["data binding","Routing","Les cycles de vie","Services et Resolver","Les classes","Les styles","Les pipes","Control Flow","Les signaux","Input et Output","ng-content","ng-container - ng-template","Viewchild","Viewchildren","ContentChild","Les formulaires","Ngrx","Rxjs","Angulaire et api rest"],Laravel:["Controllers","Models","Routes"],"React.js":["Components","Hooks","State Management"],Wordpress:["wordpress1","wordpress2"],D\u00E9ploiement:["GitHub","H\xE9bergeur partag\xE9","VPS","Cloud d\xE9di\xE9"]};subMenus={Angular:{"data binding":["data binding"],Routing:["Introduction au Routing","Routes avec des Param\xE8tres","Route avec Param\xE8tres de requ\xEAte","Redirections et Pages 404","Route Guards Prot\xE9ger les Pages","Exemple de protection","Chargement de Modules avec Lazy Loading"],"Les cycles de vie":["NgOnInit","NgOnChanges","ngAfterViewInit","ngOnDestroy"],"Services et Resolver":["Les services","Les resolvers"],"Les classes":["Liaison conditionnelle","Liaison une cha\xEEne de caract\xE8res","Liaison avec un tableau","Liaison avec un objet","Combinaison des approches"],"Les styles":["Liaison d'une propri\xE9t\xE9","Liaison avec unit\xE9s","Liaison multiple","Liaison \xE0 un objet","Approches en combinaison"],"Les pipes":["Les pipes"],"Control Flow":["@if","@for","@switch"],"Les signaux":["signal et computed","signal et effect","Les model","Les signaux et leurs m\xE9thodes"],"Input et Output":["les inputs","les outputs"],"ng-content":["projection avec ng-content"],"ng-container - ng-template":["ng-container - ng-template"],Viewchild:["Acc\xE9der \xE0 un \xE9l\xE9ment du DOM","Acc\xE9der \xE0 un composant enfant","ViewChild avec ng-template"],Viewchildren:["acc\xE9der \xE0 plusieurs \xE9l\xE9ments","Acc\xE9der aux composants enfants"],ContentChild:["Acc\xE9der aux \xE9l\xE9ments enfants d'un composant","Acc\xE9der \xE0 un composant enfant dans la projection de contenu"],"Les formulaires":["ngForm dans ngSubmit","Utiliser ViewChild pour ngForm","FormGroup et FormControl"],Ngrx:["les states et les reducers"],Rxjs:["Les observables","Interval","Ajax","Http","Les operateurs de cr\xE9ation","Les op\xE9rateurs de transformation"],"Angulaire et api rest":["Crud nodejs mongodb","Crud firebase","Crud json"]},Laravel:{Controllers:["Controller1","Controller2"],Models:["Model1","Model2"],Routes:["Route1","Route2"]},"React.js":{Components:["ComponentA","ComponentB"],Hooks:["Hook1","Hook2"],"State Management":["Redux","Context API"]},Wordpress:{wordpress1:["aaa1","bbb1"],wordpress2:["aaa2","bbb2"]},D\u00E9ploiement:{GitHub:["deployement github Reactjs","deployement github Angular"],"H\xE9bergeur partag\xE9":["deployement hebergeur Angular API REST","deployement hebergeur Reactjs API REST","deployement hebergeur Laravel"],VPS:["deployement vps API Node.js","deployement vps Laravel Nginx-Apache","deployement vps Full Stack sur VPS"],"Cloud d\xE9di\xE9":["deployement cloud Laravel Heroku","deployement cloud Expressjs Railway","deployement cloud Firebase Functions","deployement cloud Supabase"]}};toggleSubmenu(e){this.openedSubmenu=this.openedSubmenu===e?null:e}formatRoute(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/'/g,"-").replace(/\s+/g,"-")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-sidebar"]],inputs:{selectedMenu:"selectedMenu"},decls:1,vars:1,consts:[["class","sidebar",4,"ngIf"],[1,"sidebar"],["id","menuAccordion",1,"accordion"],["class","accordion-item",4,"ngFor","ngForOf"],[1,"accordion-item"],[1,"accordion-header",3,"id"],["type","button","data-bs-toggle","collapse","aria-expanded","false",1,"accordion-button",3,"click"],["data-bs-parent","#menuAccordion",1,"accordion-collapse","collapse",3,"id"],[1,"accordion-body"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"routerLink"]],template:function(t,i){t&1&&N(0,z4,3,1,"div",0),t&2&&I("ngIf",i.selectedMenu)},dependencies:[G,Xe,te,zE,Mi],styles:[".sidebar[_ngcontent-%COMP%]{background-color:#f8f9fa;border-right:1px solid #ddd}.accordion-header[_ngcontent-%COMP%]{margin-bottom:0}.accordion-button[_ngcontent-%COMP%]{background-color:#b39b18!important;color:#fff!important;padding:5px;font-size:14px}.accordion-button[_ngcontent-%COMP%]:hover{background-color:#d4b507!important}.accordion-button[_ngcontent-%COMP%]:not(.collapsed){background-color:#d4b507!important;border:none!important}.accordion-button[_ngcontent-%COMP%]:focus, .accordion-button[_ngcontent-%COMP%]:active{box-shadow:none!important;border:none!important;outline:none!important}.list-group-item[_ngcontent-%COMP%]{cursor:pointer;padding:8px 4px}.list-group-item[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.accordion-body[_ngcontent-%COMP%]{padding:0!important}.accordion-button[_ngcontent-%COMP%]:after{background-size:10px 20px!important}"]})};var Rp=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"footer","d-flex","flex-column","justify-content-center","align-items-center"]],template:function(t,i){t&1&&(l(0,"footer",0)(1,"p"),s(2,"\xA9 2024 Mon Application. Tous droits r\xE9serv\xE9s."),a()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#333;color:#fff;text-align:center;padding:15px;width:100%}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var kv=n=>({active:n});function $4(n,e){if(n&1){let t=ee();l(0,"a",8),C("click",function(){let r=S(t).$implicit,o=ce();return A(o.selectMenu(r))}),s(1),a()}if(n&2){let t=e.$implicit,i=ce();vt("active",t===i.activeMenu),g(),$(" ",t," ")}}function G4(n,e){if(n&1&&(l(0,"a",9),s(1,"se connecter "),a()),n&2){let t=ce();I("ngClass",Mn(1,kv,t.router.url==="/exemple-de-protection"))}}function H4(n,e){if(n&1){let t=ee();l(0,"a",10),C("click",function(){S(t);let r=ce();return A(r.lougout())}),s(1," se deconnecter "),a()}}function W4(n,e){if(n&1&&(l(0,"a",11),s(1,"dashboard"),a()),n&2){let t=ce();I("ngClass",Mn(1,kv,t.router.url==="/dashboard"))}}var Dp=class n{constructor(e,t,i){this.router=e;this.route=t;this.store=i;Ts(()=>{this.store.select(wr).subscribe(r=>this.isloggedIn.set(r))})}isloggedIn=Je(!1);menuSelected=new gt;mainMenus=["Angular","Laravel","React.js","Wordpress","D\xE9ploiement"];activeMenu="Angular";ngOnInit(){this.store.select(wr).subscribe(e=>this.isloggedIn.set(e)),console.log("this.isloggedIn :",this.isloggedIn()),this.detectActiveMenu()}selectMenu(e){this.activeMenu=e,this.menuSelected.emit(e),this.router.navigate([this.normalizeUrl(e)])}detectActiveMenu(){this.route.url.subscribe(()=>{let e=this.router.url.split("/")[1];if(!e){this.router.navigate(["/"]),this.activeMenu="Angular";return}let t=this.mainMenus.find(i=>this.normalizeUrl(i)===e);t&&(this.activeMenu=t)})}normalizeUrl(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/'/g,"-")}lougout(){this.isloggedIn.set(!1),this.store.dispatch(av()),this.router.navigate(["/exemple-de-protection"])}static \u0275fac=function(t){return new(t||n)(se(Ge),se(_t),se(ln))};static \u0275cmp=k({type:n,selectors:[["app-headertest"]],outputs:{menuSelected:"menuSelected"},decls:9,vars:7,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","px-5"],[1,"navbar-nav","d-flex","justify-content-between","w-100"],["routerLink","/",1,"nav-item",3,"ngClass"],[1,"d-flex"],["class","nav-link",3,"active","click",4,"ngFor","ngForOf"],["class","nav-link","routerLink","/exemple-de-protection",3,"ngClass",4,"ngIf"],["class","nav-link","style","cursor: pointer;",3,"click",4,"ngIf"],["class","nav-link","routerLink","/dashboard",3,"ngClass",4,"ngIf"],[1,"nav-link",3,"click"],["routerLink","/exemple-de-protection",1,"nav-link",3,"ngClass"],[1,"nav-link",2,"cursor","pointer",3,"click"],["routerLink","/dashboard",1,"nav-link",3,"ngClass"]],template:function(t,i){t&1&&(l(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"Home"),a(),l(4,"span",3),N(5,$4,2,3,"a",4)(6,G4,2,3,"a",5)(7,H4,2,0,"a",6)(8,W4,2,3,"a",7),a()()()),t&2&&(g(2),I("ngClass",Mn(5,kv,i.router.url==="/")),g(3),I("ngForOf",i.mainMenus),g(),I("ngIf",!i.isloggedIn()),g(),I("ngIf",i.isloggedIn()),g(),I("ngIf",i.isloggedIn()))},dependencies:[G,zr,Xe,te,Mi],styles:[".nav-link[_ngcontent-%COMP%]{cursor:pointer}.nav-link.active[_ngcontent-%COMP%]{color:#cbae0b!important}"]})};var kp=class n{selectedMenu="Angular";onMenuSelected(e){this.selectedMenu=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-root"]],decls:7,vars:1,consts:[[3,"menuSelected"],[1,"d-flex"],[1,"sidebar","col-lg-2","custom-col"],[3,"selectedMenu"],[1,"content","flex-grow-1","flex-wrap","col-lg-9"]],template:function(t,i){t&1&&(l(0,"app-headertest",0),C("menuSelected",function(o){return i.onMenuSelected(o)}),a(),l(1,"div",1)(2,"div",2),y(3,"app-sidebar",3),a(),l(4,"div",4),y(5,"router-outlet"),a()(),y(6,"app-footer")),t&2&&(g(3),I("selectedMenu",i.selectedMenu))},dependencies:[Dp,Pp,Rp,Eh],styles:[".custom-col[_ngcontent-%COMP%]{width:20.8333%}h1[_ngcontent-%COMP%]{color:#f59c03}p[_ngcontent-%COMP%]{font-size:16px}.main-container[_ngcontent-%COMP%]{flex:1;min-height:calc(100vh - 110px)}.footer[_ngcontent-%COMP%]{height:60px}.main-container[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:10px;min-height:100vh}.content[_ngcontent-%COMP%]{flex-grow:1;padding:20px}"]})};Gy(kp,jx).catch(n=>console.error(n));
