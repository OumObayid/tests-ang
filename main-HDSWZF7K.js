import{$ as Xp,$a as $e,$b as Es,$c as Ts,$d as Ll,A as vl,Aa as X_,Ab as gb,Ac as ni,Ad as Gb,B as Jt,Ba as le,Bb as vb,Bc as Al,Bd as Wb,C as Kp,Ca as th,Cb as bs,Cc as q,Cd as Dl,D as I_,Da as ie,Db as g,Dc as ee,Dd as Ml,E as ms,Ea as X,Eb as oe,Ec as Ye,Ed as G,F as S_,Fa as Y_,Fb as wl,Fc as s,Fd as Hb,G as x_,Ga as yn,Gb as _b,Gc as he,Gd as xs,H as A_,Ha as Z_,Hb as Fr,Hc as z,Hd as Kb,I as st,Ia as yl,Ib as ys,Ic as Dn,Id as Ol,J as fs,Ja as ft,Jb as bb,Jc as xb,Jd as Qb,K as kt,Ka as eb,Kb as et,Kc as Ee,Kd as dh,L as _l,La as Yn,Lb as $,Lc as Ce,Ld as Nl,M as R_,Ma as Mt,Mb as Tl,Mc as we,Md as Vl,N as P_,Na as nh,Nb as Il,Nc as pn,Nd as ph,O as k_,Oa as En,Ob as yb,Oc as Ab,P as D_,Pa as W,Pb as Eb,Pc as xi,Q as M_,Qa as H,Qb as lh,Qc as ct,R as wi,Ra as x,Rb as j,Rc as Mn,S as O_,Sa as A,Sb as dn,Sc as er,T as N_,Ta as Wt,Tb as tt,Tc as Cs,Td as Jb,U as ln,Ua as tb,Ub as Cb,Uc as Rb,Ud as As,V as V_,Va as Ht,Vb as Bt,Vc as On,Vd as Fl,W as Qp,Wa as ih,Wb as wb,Wc as ws,X as Je,Xa as nb,Xb as O,Xc as Pb,Y as F_,Ya as El,Yb as Sl,Yc as Rl,Z as Jp,Za as Cl,Zb as xl,Zc as kb,_ as L_,_a as gt,_b as ch,_c as qr,_d as Xb,a as K,aa as U_,ab as gs,ac as ei,ad as Db,b as ye,ba as j_,bb as ib,bc as Kt,bd as Mb,be as Yb,c as __,ca as kr,cb as Mr,cc as S,cd as Ob,d as F,da as Pn,db as rb,dc as Xt,dd as tr,e as b_,ea as B_,eb as rh,ec as vt,ed as hn,f as y_,fa as Yp,fb as ob,fc as Lr,fd as Nn,g as qp,ga as q_,gb as kn,gc as qt,gd as uh,ge as Zb,h as rt,ha as $_,hb as vs,hc as Qe,hd as Nb,i as $p,ia as z_,ib as oh,ic as Ur,id as $r,j as zp,ja as Zp,jb as sh,jc as Yt,jd as Vb,k as ot,ka as G_,kb as Or,kc as Zt,kd as Fb,l as Pt,la as Xn,lb as sb,lc as c,ld as at,m as Gp,ma as W_,mb as _s,mc as l,md as Lb,n as E_,na as H_,nb as Nr,nc as y,nd as Is,o as Pr,oa as eh,ob as Vr,oc as Ti,od as Ub,p as an,pa as Dt,pb as ab,pc as Ii,pd as jb,q as Wp,qa as Dr,qb as lb,qc as Tb,qd as Ss,r as Zi,ra as mt,rb as cb,rc as Z,rd as Pl,s as Hp,sa as K_,sb as ub,sc as Ib,sd as zr,t as We,ta as Q_,tb as db,tc as C,td as He,u as me,ua as J_,ub as pb,uc as ce,ud as te,v as hs,va as bl,vb as hb,vc as jr,vd as Bb,w as C_,wa as Le,wb as Zn,wc as Br,wd as qb,x as w_,xa as cn,xb as ah,xc as Sb,xd as $b,y as T_,ya as de,yb as mb,yc as Si,yd as zb,z as ve,za as un,zb as fb,zc as ti,zd as kl}from"./chunk-FF6SC3YY.js";var Ps=class{},ks=class{},Vn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),o=t.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(d=>o.indexOf(d)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var mh=class{encodeKey(e){return ey(e)}encodeValue(e){return ey(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function sS(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,d]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],p=t.get(a)||[];p.push(d),t.set(a,p)}),t}var aS=/%(\d[a-f0-9])/gi,lS={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ey(n){return encodeURIComponent(n).replace(aS,(e,t)=>lS[t]??e)}function Ul(n){return`${n}`}var Ri=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new mh,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=sS(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(Ul):[Ul(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(o=>{t.push({param:i,value:o,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(Ul(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(Ul(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var fh=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function cS(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ty(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ny(n){return typeof Blob<"u"&&n instanceof Blob}function iy(n){return typeof FormData<"u"&&n instanceof FormData}function uS(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Rs=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,i,r){this.url=t,this.method=e.toUpperCase();let o;if(cS(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Vn,this.context??=new fh,!this.params)this.params=new Ri,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let d=t.indexOf("?"),p=d===-1?"?":d<t.length-1?"&":"";this.urlWithParams=t+p+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ty(this.body)||ny(this.body)||iy(this.body)||uS(this.body)?this.body:this.body instanceof Ri?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||iy(this.body)?null:ny(this.body)?this.body.type||null:ty(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Ri?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,d=e.withCredentials??this.withCredentials,p=e.reportProgress??this.reportProgress,m=e.headers||this.headers,v=e.params||this.params,b=e.context??this.context;return e.setHeaders!==void 0&&(m=Object.keys(e.setHeaders).reduce((T,M)=>T.set(M,e.setHeaders[M]),m)),e.setParams&&(v=Object.keys(e.setParams).reduce((T,M)=>T.set(M,e.setParams[M]),v)),new n(t,i,a,{params:v,headers:m,context:b,reportProgress:p,responseType:r,withCredentials:d,transferCache:o})}},Pi=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Pi||{}),Ds=class{headers;status;statusText;url;ok;type;constructor(e,t=200,i="OK"){this.headers=e.headers||new Vn,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Bl=class n extends Ds{constructor(e={}){super(e)}type=Pi.ResponseHeader;clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},nr=class n extends Ds{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Pi.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Ai=class extends Ds{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},my=200,dS=204;function hh(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Cn=(()=>{class n{handler;constructor(t){this.handler=t}request(t,i,r={}){let o;if(t instanceof Rs)o=t;else{let p;r.headers instanceof Vn?p=r.headers:p=new Vn(r.headers);let m;r.params&&(r.params instanceof Ri?m=r.params:m=new Ri({fromObject:r.params})),o=new Rs(t,i,r.body!==void 0?r.body:null,{headers:p,context:r.context,params:m,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let a=me(o).pipe(ln(p=>this.handler.handle(p)));if(t instanceof Rs||r.observe==="events")return a;let d=a.pipe(kt(p=>p instanceof nr));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return d.pipe(ve(p=>{if(p.body!==null&&!(p.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return p.body}));case"blob":return d.pipe(ve(p=>{if(p.body!==null&&!(p.body instanceof Blob))throw new Error("Response is not a Blob.");return p.body}));case"text":return d.pipe(ve(p=>{if(p.body!==null&&typeof p.body!="string")throw new Error("Response is not a string.");return p.body}));case"json":default:return d.pipe(ve(p=>p.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new Ri().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,hh(r,i))}post(t,i,r={}){return this.request("POST",t,hh(r,i))}put(t,i,r={}){return this.request("PUT",t,hh(r,i))}static \u0275fac=function(i){return new(i||n)(ie(Ps))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),pS=/^\)\]\}',?\n/,hS="X-Request-URL";function ry(n){if(n.url)return n.url;let e=hS.toLocaleLowerCase();return n.headers.get(e)}var gh=(()=>{class n{fetchImpl=X(vh,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=X($e);handle(t){return new rt(i=>{let r=new AbortController;return this.doRequest(t,r.signal,i).then(_h,o=>i.error(new Ai({error:o}))),()=>r.abort()})}doRequest(t,i,r){return F(this,null,function*(){let o=this.createRequestInit(t),a;try{let M=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,K({signal:i},o)));mS(M),r.next({type:Pi.Sent}),a=yield M}catch(M){r.error(new Ai({error:M,status:M.status??0,statusText:M.statusText,url:t.urlWithParams,headers:M.headers}));return}let d=new Vn(a.headers),p=a.statusText,m=ry(a)??t.urlWithParams,v=a.status,b=null;if(t.reportProgress&&r.next(new Bl({headers:d,status:v,statusText:p,url:m})),a.body){let M=a.headers.get("content-length"),U=[],L=a.body.getReader(),V=0,ae,ge,se=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>F(this,null,function*(){for(;;){let{done:be,value:fe}=yield L.read();if(be)break;if(U.push(fe),V+=fe.length,t.reportProgress){ge=t.responseType==="text"?(ge??"")+(ae??=new TextDecoder).decode(fe,{stream:!0}):void 0;let P=()=>r.next({type:Pi.DownloadProgress,total:M?+M:void 0,loaded:V,partialText:ge});se?se.run(P):P()}}}));let Q=this.concatChunks(U,V);try{let be=a.headers.get("Content-Type")??"";b=this.parseBody(t,Q,be)}catch(be){r.error(new Ai({error:be,headers:new Vn(a.headers),status:a.status,statusText:a.statusText,url:ry(a)??t.urlWithParams}));return}}v===0&&(v=b?my:0),v>=200&&v<300?(r.next(new nr({body:b,headers:d,status:v,statusText:p,url:m})),r.complete()):r.error(new Ai({error:b,headers:d,status:v,statusText:p,url:m}))})}parseBody(t,i,r){switch(t.responseType){case"json":let o=new TextDecoder().decode(i).replace(pS,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(t){let i={},r=t.withCredentials?"include":void 0;if(t.headers.forEach((o,a)=>i[o]=a.join(",")),t.headers.has("Accept")||(i.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let o=t.detectContentTypeHeader();o!==null&&(i["Content-Type"]=o)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:r}}concatChunks(t,i){let r=new Uint8Array(i),o=0;for(let a of t)r.set(a,o),o+=a.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),vh=class{};function _h(){}function mS(n){n.then(_h,_h)}function fS(n,e){return e(n)}function gS(n,e,t){return(i,r)=>Mt(t,()=>e(i,o=>n(o,r)))}var fy=new le(""),gy=new le(""),vS=new le("",{providedIn:"root",factory:()=>!0});var oy=(()=>{class n extends Ps{backend;injector;chain=null;pendingTasks=X(El);contributeToStability=X(vS);constructor(t,i){super(),this.backend=t,this.injector=i}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(fy),...this.injector.get(gy,[])]));this.chain=i.reduceRight((r,o)=>gS(r,o,this.injector),fS)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(kr(()=>this.pendingTasks.remove(i)))}else return this.chain(t,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||n)(ie(ks),ie(Yn))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();var _S=/^\)\]\}',?\n/;function bS(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var sy=(()=>{class n{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Le(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?We(i.\u0275loadImpl()):me(null)).pipe(Dt(()=>new rt(o=>{let a=i.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((L,V)=>a.setRequestHeader(L,V.join(","))),t.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let L=t.detectContentTypeHeader();L!==null&&a.setRequestHeader("Content-Type",L)}if(t.responseType){let L=t.responseType.toLowerCase();a.responseType=L!=="json"?L:"text"}let d=t.serializeBody(),p=null,m=()=>{if(p!==null)return p;let L=a.statusText||"OK",V=new Vn(a.getAllResponseHeaders()),ae=bS(a)||t.url;return p=new Bl({headers:V,status:a.status,statusText:L,url:ae}),p},v=()=>{let{headers:L,status:V,statusText:ae,url:ge}=m(),se=null;V!==dS&&(se=typeof a.response>"u"?a.responseText:a.response),V===0&&(V=se?my:0);let Q=V>=200&&V<300;if(t.responseType==="json"&&typeof se=="string"){let be=se;se=se.replace(_S,"");try{se=se!==""?JSON.parse(se):null}catch(fe){se=be,Q&&(Q=!1,se={error:fe,text:se})}}Q?(o.next(new nr({body:se,headers:L,status:V,statusText:ae,url:ge||void 0})),o.complete()):o.error(new Ai({error:se,headers:L,status:V,statusText:ae,url:ge||void 0}))},b=L=>{let{url:V}=m(),ae=new Ai({error:L,status:a.status||0,statusText:a.statusText||"Unknown Error",url:V||void 0});o.error(ae)},T=!1,M=L=>{T||(o.next(m()),T=!0);let V={type:Pi.DownloadProgress,loaded:L.loaded};L.lengthComputable&&(V.total=L.total),t.responseType==="text"&&a.responseText&&(V.partialText=a.responseText),o.next(V)},U=L=>{let V={type:Pi.UploadProgress,loaded:L.loaded};L.lengthComputable&&(V.total=L.total),o.next(V)};return a.addEventListener("load",v),a.addEventListener("error",b),a.addEventListener("timeout",b),a.addEventListener("abort",b),t.reportProgress&&(a.addEventListener("progress",M),d!==null&&a.upload&&a.upload.addEventListener("progress",U)),a.send(d),o.next({type:Pi.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",v),a.removeEventListener("timeout",b),t.reportProgress&&(a.removeEventListener("progress",M),d!==null&&a.upload&&a.upload.removeEventListener("progress",U)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||n)(ie(Ol))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),vy=new le(""),yS="XSRF-TOKEN",ES=new le("",{providedIn:"root",factory:()=>yS}),CS="X-XSRF-TOKEN",wS=new le("",{providedIn:"root",factory:()=>CS}),ql=class{},TS=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,i,r){this.doc=t,this.platform=i,this.cookieName=r}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Pl(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||n)(ie(at),ie(kn),ie(ES))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();function IS(n,e){let t=n.url.toLowerCase();if(!X(vy)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let i=X(ql).getToken(),r=X(wS);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),e(n)}var _y=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(_y||{});function SS(n,e){return{\u0275kind:n,\u0275providers:e}}function by(...n){let e=[Cn,sy,oy,{provide:Ps,useExisting:oy},{provide:ks,useFactory:()=>X(gh,{optional:!0})??X(sy)},{provide:fy,useValue:IS,multi:!0},{provide:vy,useValue:!0},{provide:ql,useClass:TS}];for(let t of n)e.push(...t.\u0275providers);return ft(e)}function yy(){return SS(_y.Fetch,[gh,{provide:ks,useExisting:gh}])}var xS=new le(""),ay="b",ly="h",cy="s",uy="st",dy="u",py="rt",jl=new le(""),AS=["GET","HEAD"];function RS(n,e){let M=X(jl),{isCacheActive:t}=M,i=__(M,["isCacheActive"]),{transferCache:r,method:o}=n;if(!t||r===!1||o==="POST"&&!i.includePostRequests&&!r||o!=="POST"&&!AS.includes(o)||!i.includeRequestsWithAuthHeaders&&PS(n)||i.filter?.(n)===!1)return e(n);let a=X(sh),d=X(xS,{optional:!0}),p=xs(X(kn));if(d&&!p)throw new Le(2803,!1);let m=p&&d?OS(n.url,d):n.url,v=DS(n,m),b=a.get(v,null),T=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(T=r.includeHeaders),b){let{[ay]:U,[py]:L,[ly]:V,[cy]:ae,[uy]:ge,[dy]:se}=b,Q=U;switch(L){case"arraybuffer":Q=new TextEncoder().encode(U).buffer;break;case"blob":Q=new Blob([U]);break}let be=new Vn(V);return me(new nr({body:Q,headers:be,status:ae,statusText:ge,url:se}))}return e(n).pipe(mt(U=>{U instanceof nr&&p&&a.set(v,{[ay]:U.body,[ly]:kS(U.headers,T),[cy]:U.status,[uy]:U.statusText,[dy]:m,[py]:n.responseType})}))}function PS(n){return n.headers.has("authorization")||n.headers.has("proxy-authorization")}function kS(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function hy(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function DS(n,e){let{params:t,method:i,responseType:r}=n,o=hy(t),a=n.serializeBody();a instanceof URLSearchParams?a=hy(a):typeof a!="string"&&(a="");let d=[i,r,e,a,o].join("|"),p=MS(d);return p}function MS(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Ey(n){return[{provide:jl,useFactory:()=>(Or("NgHttpTransferCache"),K({isCacheActive:!0},n))},{provide:gy,useValue:RS,multi:!0,deps:[sh,jl]},{provide:Es,multi:!0,useFactory:()=>{let e=X(ei),t=X(jl);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}function OS(n,e){let t=new URL(n,"resolve://").origin,i=e[t];return i?n.replace(t,i):n}var yh=class extends Fb{supportsDOMEvents=!0},Eh=class n extends yh{static makeCurrent(){Vb(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=NS();return t==null?null:VS(t)}resetBaseElement(){Os=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Pl(document.cookie,e)}},Os=null;function NS(){return Os=Os||document.querySelector("base"),Os?Os.getAttribute("href"):null}function VS(n){return new URL(n,document.baseURI).pathname}var FS=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),Ch=new le(""),Sy=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Le(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ie(Ch),ie($e))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),$l=class{_doc;constructor(e){this._doc=e}manager},wh="ng-app-id";function Cy(n){for(let e of n)e.remove()}function wy(n,e){let t=e.createElement("style");return t.textContent=n,t}function LS(n,e,t){let i=n.head?.querySelectorAll(`style[${wh}="${e}"]`);if(i)for(let r of i)r.textContent&&(r.removeAttribute(wh),t.set(r.textContent,{usage:0,elements:[r]}))}function Th(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var xy=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=xs(o),LS(t,i,this.inline),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,wy);i?.forEach(r=>this.addUsage(r,this.external,Th))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Cy(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Cy(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,wy(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Th(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(wh,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ie(at),ie(rh),ie(oh,8),ie(kn))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),bh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Sh=/%COMP%/g,Ay="%COMP%",US=`_nghost-${Ay}`,jS=`_ngcontent-${Ay}`,BS=!0,qS=new le("",{providedIn:"root",factory:()=>BS});function $S(n){return jS.replace(Sh,n)}function zS(n){return US.replace(Sh,n)}function Ry(n,e){return e.map(t=>t.replace(Sh,n))}var Gr=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,o,a,d,p,m=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=d,this.ngZone=p,this.nonce=m,this.platformIsServer=xs(d),this.defaultRenderer=new Ns(t,a,p,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===_s.ShadowDom&&(i=ye(K({},i),{encapsulation:_s.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof zl?r.applyToHost(t):r instanceof Vs&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,d=this.ngZone,p=this.eventManager,m=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,b=this.platformIsServer;switch(i.encapsulation){case _s.Emulated:o=new zl(p,m,i,this.appId,v,a,d,b);break;case _s.ShadowDom:return new Ih(p,m,t,i,a,d,this.nonce,b);default:o=new Vs(p,m,i,v,a,d,b);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(ie(Sy),ie(xy),ie(rh),ie(qS),ie(at),ie(kn),ie($e),ie(oh))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),Ns=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(bh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Ty(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Ty(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Le(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=bh[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=bh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(bs.DashCase|bs.Important)?e.style.setProperty(t,i,r&bs.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&bs.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=$r().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Ty(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ih=class extends Ns{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,o,a,d,p){super(e,o,a,p),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let m=Ry(r.id,r.styles);for(let b of m){let T=document.createElement("style");d&&T.setAttribute("nonce",d),T.textContent=b,this.shadowRoot.appendChild(T)}let v=r.getExternalStyles?.();if(v)for(let b of v){let T=Th(b,o);d&&T.setAttribute("nonce",d),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Vs=class extends Ns{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,a,d,p){super(e,o,a,d),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=p?Ry(p,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},zl=class extends Vs{contentAttr;hostAttr;constructor(e,t,i,r,o,a,d,p){let m=r+"-"+i.id;super(e,t,i,o,a,d,p,m),this.contentAttr=$S(m),this.hostAttr=zS(m)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},GS=(()=>{class n extends $l{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(ie(at))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),Iy=["alt","control","meta","shift"],WS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},HS={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},KS=(()=>{class n extends $l{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$r().onAndCancel(t,o.domEventName,a))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),a="",d=i.indexOf("code");if(d>-1&&(i.splice(d,1),a="code."),Iy.forEach(m=>{let v=i.indexOf(m);v>-1&&(i.splice(v,1),a+=m+".")}),a+=o,i.length!=0||o.length===0)return null;let p={};return p.domEventName=r,p.fullKey=a,p}static matchEventFullKeyCode(t,i){let r=WS[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Iy.forEach(a=>{if(a!==r){let d=HS[a];d(t)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ie(at))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();function Py(n,e){return Db(K({rootComponent:n},QS(e)))}function QS(n){return{appProviders:[...ex,...n?.providers??[]],platformProviders:ZS}}function JS(){Eh.makeCurrent()}function XS(){return new gs}function YS(){return rb(document),document}var ZS=[{provide:kn,useValue:Hb},{provide:ob,useValue:JS,multi:!0},{provide:at,useFactory:YS,deps:[]}];var ex=[{provide:eb,useValue:"root"},{provide:gs,useFactory:XS,deps:[]},{provide:Ch,useClass:GS,multi:!0,deps:[at,$e,kn]},{provide:Ch,useClass:KS,multi:!0,deps:[at]},Gr,xy,Sy,{provide:Fr,useExisting:Gr},{provide:Ol,useClass:FS,deps:[]},[]];var ky=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(ie(at))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=ie(tx),r},providedIn:"root"})}return n})(),tx=(()=>{class n extends Fs{_doc;constructor(t){super(),this._doc=t}sanitize(t,i){if(i==null)return null;switch(t){case Zn.NONE:return i;case Zn.HTML:return Vr(i,"HTML")?Nr(i):hb(this._doc,String(i)).toString();case Zn.STYLE:return Vr(i,"Style")?Nr(i):i;case Zn.SCRIPT:if(Vr(i,"Script"))return Nr(i);throw new Le(5200,!1);case Zn.URL:return Vr(i,"URL")?Nr(i):pb(String(i));case Zn.RESOURCE_URL:if(Vr(i,"ResourceURL"))return Nr(i);throw new Le(5201,!1);default:throw new Le(5202,!1)}}bypassSecurityTrustHtml(t){return ab(t)}bypassSecurityTrustStyle(t){return lb(t)}bypassSecurityTrustScript(t){return cb(t)}bypassSecurityTrustUrl(t){return ub(t)}bypassSecurityTrustResourceUrl(t){return db(t)}static \u0275fac=function(i){return new(i||n)(ie(at))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gl=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n}(Gl||{});function nx(n,e=[],t={}){return{\u0275kind:n,\u0275providers:e}}function Dy(){return nx(Gl.EventReplay,Mb())}function My(...n){let e=[],t=new Set,i=t.has(Gl.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of n)t.add(o),r.length&&e.push(r);return ft([[],Ob(),t.has(Gl.NoHttpTransferCache)||i?[]:Ey({}),e])}var Re="primary",Ys=Symbol("RouteTitle"),Dh=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Xr(n){return new Dh(n)}function ix(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let o=0;o<i.length;o++){let a=i[o],d=n[o];if(a[0]===":")r[a.substring(1)]=d;else if(a!==d.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function rx(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Fn(n[t],e[t]))return!1;return!0}function Fn(n,e){let t=n?Mh(n):void 0,i=e?Mh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!zy(n[r],e[r]))return!1;return!0}function Mh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function zy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function Gy(n){return n.length>0?n[n.length-1]:null}function Di(n){return C_(n)?n:xl(n)?We(Promise.resolve(n)):me(n)}var ox={exact:Hy,subset:Ky},Wy={exact:sx,subset:ax,ignored:()=>!0};function Oy(n,e,t){return ox[t.paths](n.root,e.root,t.matrixParams)&&Wy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function sx(n,e){return Fn(n,e)}function Hy(n,e,t){if(!rr(n.segments,e.segments)||!Kl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Hy(n.children[i],e.children[i],t))return!1;return!0}function ax(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>zy(n[t],e[t]))}function Ky(n,e,t){return Qy(n,e,e.segments,t)}function Qy(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!rr(r,t)||e.hasChildren()||!Kl(r,t,i))}else if(n.segments.length===t.length){if(!rr(n.segments,t)||!Kl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Ky(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!rr(n.segments,r)||!Kl(n.segments,r,i)||!n.children[Re]?!1:Qy(n.children[Re],e,o,i)}}function Kl(n,e,t){return e.every((i,r)=>Wy[t](n[r].parameters,i.parameters))}var ri=class{root;queryParams;fragment;_queryParamMap;constructor(e=new Be([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){return ux.serialize(this)}},Be=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ql(this)}},ir=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Xr(this.parameters),this._parameterMap}toString(){return Xy(this)}};function lx(n,e){return rr(n,e)&&n.every((t,i)=>Fn(t.parameters,e[i].parameters))}function rr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function cx(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Re&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Re&&(t=t.concat(e(r,i)))}),t}var Zs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:()=>new Yr,providedIn:"root"})}return n})(),Yr=class{parse(e){let t=new Nh(e);return new ri(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ls(e.root,!0)}`,i=hx(e.queryParams),r=typeof e.fragment=="string"?`#${dx(e.fragment)}`:"";return`${t}${i}${r}`}},ux=new Yr;function Ql(n){return n.segments.map(e=>Xy(e)).join("/")}function Ls(n,e){if(!n.hasChildren())return Ql(n);if(e){let t=n.children[Re]?Ls(n.children[Re],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==Re&&i.push(`${r}:${Ls(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=cx(n,(i,r)=>r===Re?[Ls(n.children[Re],!1)]:[`${r}:${Ls(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Re]!=null?`${Ql(n)}/${t[0]}`:`${Ql(n)}/(${t.join("//")})`}}function Jy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wl(n){return Jy(n).replace(/%3B/gi,";")}function dx(n){return encodeURI(n)}function Oh(n){return Jy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Jl(n){return decodeURIComponent(n)}function Ny(n){return Jl(n.replace(/\+/g,"%20"))}function Xy(n){return`${Oh(n.path)}${px(n.parameters)}`}function px(n){return Object.entries(n).map(([e,t])=>`;${Oh(e)}=${Oh(t)}`).join("")}function hx(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Wl(t)}=${Wl(r)}`).join("&"):`${Wl(t)}=${Wl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var mx=/^[^\/()?;#]+/;function Ah(n){let e=n.match(mx);return e?e[0]:""}var fx=/^[^\/()?;=#]+/;function gx(n){let e=n.match(fx);return e?e[0]:""}var vx=/^[^=?&#]+/;function _x(n){let e=n.match(vx);return e?e[0]:""}var bx=/^[^&#]+/;function yx(n){let e=n.match(bx);return e?e[0]:""}var Nh=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Be([],{}):new Be([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Re]=new Be(e,t)),i}parseSegment(){let e=Ah(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Le(4009,!1);return this.capture(e),new ir(Jl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=gx(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Ah(this.remaining);r&&(i=r,this.capture(i))}e[Jl(t)]=Jl(i)}parseQueryParam(e){let t=_x(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let a=yx(this.remaining);a&&(i=a,this.capture(i))}let r=Ny(t),o=Ny(i);if(e.hasOwnProperty(r)){let a=e[r];Array.isArray(a)||(a=[a],e[r]=a),a.push(o)}else e[r]=o}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Ah(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Le(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=Re);let a=this.parseChildren();t[o]=Object.keys(a).length===1?a[Re]:new Be([],a),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Le(4011,!1)}};function Yy(n){return n.segments.length>0?new Be([],{[Re]:n}):n}function Zy(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=Zy(r);if(i===Re&&o.segments.length===0&&o.hasChildren())for(let[a,d]of Object.entries(o.children))e[a]=d;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new Be(n.segments,e);return Ex(t)}function Ex(n){if(n.numberOfChildren===1&&n.children[Re]){let e=n.children[Re];return new Be(n.segments.concat(e.segments),e.children)}return n}function or(n){return n instanceof ri}function Cx(n,e,t=null,i=null){let r=eE(n);return tE(r,e,t,i)}function eE(n){let e;function t(o){let a={};for(let p of o.children){let m=t(p);a[p.outlet]=m}let d=new Be(o.url,a);return o===n&&(e=d),d}let i=t(n.root),r=Yy(i);return e??r}function tE(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Rh(r,r,r,t,i);let o=wx(e);if(o.toRoot())return Rh(r,r,new Be([],{}),t,i);let a=Tx(o,r,n),d=a.processChildren?Bs(a.segmentGroup,a.index,o.commands):iE(a.segmentGroup,a.index,o.commands);return Rh(r,a.segmentGroup,d,t,i)}function Xl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function zs(n){return typeof n=="object"&&n!=null&&n.outlets}function Rh(n,e,t,i,r){let o={};i&&Object.entries(i).forEach(([p,m])=>{o[p]=Array.isArray(m)?m.map(v=>`${v}`):`${m}`});let a;n===e?a=t:a=nE(n,e,t);let d=Yy(Zy(a));return new ri(d,o,r)}function nE(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=nE(o,e,t)}),new Be(n.segments,i)}var Yl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Xl(i[0]))throw new Le(4003,!1);let r=i.find(zs);if(r&&r!==Gy(i))throw new Le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function wx(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Yl(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let d={};return Object.entries(o.outlets).forEach(([p,m])=>{d[p]=typeof m=="string"?m.split("/"):m}),[...r,{outlets:d}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((d,p)=>{p==0&&d==="."||(p==0&&d===""?t=!0:d===".."?e++:d!=""&&r.push(d))}),r):[...r,o]},[]);return new Yl(t,e,i)}var Kr=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function Tx(n,e,t){if(n.isAbsolute)return new Kr(e,!0,0);if(!t)return new Kr(e,!1,NaN);if(t.parent===null)return new Kr(t,!0,0);let i=Xl(n.commands[0])?0:1,r=t.segments.length-1+i;return Ix(t,r,n.numberOfDoubleDots)}function Ix(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new Le(4005,!1);r=i.segments.length}return new Kr(i,!1,r-o)}function Sx(n){return zs(n[0])?n[0].outlets:{[Re]:n}}function iE(n,e,t){if(n??=new Be([],{}),n.segments.length===0&&n.hasChildren())return Bs(n,e,t);let i=xx(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new Be(n.segments.slice(0,i.pathIndex),{});return o.children[Re]=new Be(n.segments.slice(i.pathIndex),n.children),Bs(o,0,r)}else return i.match&&r.length===0?new Be(n.segments,{}):i.match&&!n.hasChildren()?Vh(n,e,t):i.match?Bs(n,0,r):Vh(n,e,t)}function Bs(n,e,t){if(t.length===0)return new Be(n.segments,{});{let i=Sx(t),r={};if(Object.keys(i).some(o=>o!==Re)&&n.children[Re]&&n.numberOfChildren===1&&n.children[Re].segments.length===0){let o=Bs(n.children[Re],e,t);return new Be(n.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=iE(n.children[o],e,a))}),Object.entries(n.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Be(n.segments,r)}}function xx(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let a=n.segments[r],d=t[i];if(zs(d))break;let p=`${d}`,m=i<t.length-1?t[i+1]:null;if(r>0&&p===void 0)break;if(p&&m&&typeof m=="object"&&m.outlets===void 0){if(!Fy(p,m,a))return o;i+=2}else{if(!Fy(p,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Vh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(zs(o)){let p=Ax(o.outlets);return new Be(i,p)}if(r===0&&Xl(t[0])){let p=n.segments[e];i.push(new ir(p.path,Vy(t[0]))),r++;continue}let a=zs(o)?o.outlets[Re]:`${o}`,d=r<t.length-1?t[r+1]:null;a&&d&&Xl(d)?(i.push(new ir(a,Vy(d))),r+=2):(i.push(new ir(a,{})),r++)}return new Be(i,{})}function Ax(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Vh(new Be([],{}),0,i))}),e}function Vy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Fy(n,e,t){return n==t.path&&Fn(e,t.parameters)}var qs="imperative",bt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(bt||{}),mn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Zr=class extends mn{type=bt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ln=class extends mn{urlAfterRedirects;type=bt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},tn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(tn||{}),Zl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Zl||{}),ii=class extends mn{reason;code;type=bt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ki=class extends mn{reason;code;type=bt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Gs=class extends mn{error;target;type=bt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ec=class extends mn{urlAfterRedirects;state;type=bt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fh=class extends mn{urlAfterRedirects;state;type=bt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lh=class extends mn{urlAfterRedirects;state;shouldActivate;type=bt.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Uh=class extends mn{urlAfterRedirects;state;type=bt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jh=class extends mn{urlAfterRedirects;state;type=bt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bh=class{route;type=bt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},qh=class{route;type=bt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$h=class{snapshot;type=bt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zh=class{snapshot;type=bt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gh=class{snapshot;type=bt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wh=class{snapshot;type=bt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tc=class{routerEvent;position;anchor;type=bt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Ws=class{},eo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function Rx(n,e){return n.providers&&!n._injector&&(n._injector=lh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function wn(n){return n.outlet||Re}function Px(n,e){let t=n.filter(i=>wn(i)===e);return t.push(...n.filter(i=>wn(i)!==e)),t}function ea(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Hh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ea(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ta(this.rootInjector)}},ta=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Hh(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(ie(Yn))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nc=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Kh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Kh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Qh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Qh(e,this._root).map(t=>t.value)}};function Kh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Kh(n,t);if(i)return i}return null}function Qh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Qh(n,t);if(i.length)return i.unshift(e),i}return[]}var en=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Hr(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var ic=class extends nc{snapshot;constructor(e,t){super(e),this.snapshot=t,rm(this,e)}toString(){return this.snapshot.toString()}};function rE(n){let e=kx(n),t=new Pt([new ir("",{})]),i=new Pt({}),r=new Pt({}),o=new Pt({}),a=new Pt(""),d=new _t(t,i,o,a,r,Re,n,e.root);return d.snapshot=e.root,new ic(new en(d,[]),e)}function kx(n){let e={},t={},i={},r="",o=new Qr([],e,i,r,t,Re,n,null,{});return new oc("",new en(o,[]))}var _t=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,a,d,p){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=d,this._futureSnapshot=p,this.title=this.dataSubject?.pipe(ve(m=>m[Ys]))??me(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ve(e=>Xr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ve(e=>Xr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function rc(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:K(K({},e.params),n.params),data:K(K({},e.data),n.data),resolve:K(K(K(K({},n.data),e.data),r?.data),n._resolvedData)}:i={params:K({},n.params),data:K({},n.data),resolve:K(K({},n.data),n._resolvedData??{})},r&&sE(r)&&(i.resolve[Ys]=r.title),i}var Qr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ys]}constructor(e,t,i,r,o,a,d,p,m){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=d,this.routeConfig=p,this._resolve=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},oc=class extends nc{url;constructor(e,t){super(t),this.url=e,rm(this,t)}toString(){return oE(this._root)}};function rm(n,e){e.value._routerState=n,e.children.forEach(t=>rm(n,t))}function oE(n){let e=n.children.length>0?` { ${n.children.map(oE).join(", ")} } `:"";return`${n.value}${e}`}function Ph(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Fn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Fn(e.params,t.params)||n.paramsSubject.next(t.params),rx(e.url,t.url)||n.urlSubject.next(t.url),Fn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Jh(n,e){let t=Fn(n.params,e.params)&&lx(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Jh(n.parent,e.parent))}function sE(n){return typeof n.title=="string"||n.title===null}var Dx=new le(""),om=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Re;activateEvents=new gt;deactivateEvents=new gt;attachEvents=new gt;detachEvents=new gt;routerOutletData=ib(void 0);parentContexts=X(ta);location=X(bb);changeDetector=X(Ts);inputBinder=X(cc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Le(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Le(4013,!1);this._activatedRoute=t;let r=this.location,a=t.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,p=new Xh(t,d,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:p,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=tt({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[En]})}return n})(),Xh=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===_t?this.route:e===ta?this.childContexts:e===Dx?this.outletData:this.parent.get(e,t)}},cc=new le(""),Ly=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=vl([i.queryParams,i.params,i.data]).pipe(Dt(([o,a,d],p)=>(d=K(K(K({},o),a),d),p===0?me(d):Promise.resolve(d)))).subscribe(o=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let a=Nb(i.component);if(!a){this.unsubscribeFromRouteData(t);return}for(let{templateName:d}of a.inputs)t.activatedComponentRef.setInput(d,o[d])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();function Mx(n,e,t){let i=Hs(n,e._root,t?t._root:void 0);return new ic(i,e)}function Hs(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=Ox(n,e,t);return new en(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(d=>Hs(n,d)),a}}let i=Nx(e.value),r=e.children.map(o=>Hs(n,o));return new en(i,r)}}function Ox(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Hs(n,i,r);return Hs(n,i)})}function Nx(n){return new _t(new Pt(n.url),new Pt(n.params),new Pt(n.queryParams),new Pt(n.fragment),new Pt(n.data),n.outlet,n.component,n)}var Ks=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},aE="ngNavigationCancelingError";function sc(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=or(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=lE(!1,tn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function lE(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[aE]=!0,t.cancellationCode=e,t}function Vx(n){return cE(n)&&or(n.url)}function cE(n){return!!n&&n[aE]}var Fx=(n,e,t,i)=>ve(r=>(new Yh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Yh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Ph(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Hr(t);e.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(e,t,a.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Hr(e);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),d=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:a,route:e,contexts:d})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Hr(e);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Hr(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Wh(o.value.snapshot))}),e.children.length&&this.forwardEvent(new zh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(Ph(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,a.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let d=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(d.contexts),a.attachRef=d.componentRef,a.route=d.route.value,a.outlet&&a.outlet.attach(d.componentRef,d.route.value),Ph(d.route.value),this.activateChildRoutes(e,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(e,null,a.children)}else this.activateChildRoutes(e,null,i)}},ac=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Jr=class{component;route;constructor(e,t){this.component=e,this.route=t}};function Lx(n,e,t){let i=n._root,r=e?e._root:null;return Us(i,r,t,[i.value])}function Ux(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function no(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!X_(n)?n:e.get(n):i}function Us(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Hr(e);return n.children.forEach(a=>{jx(a,o[a.value.outlet],t,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,d])=>$s(d,t.getContext(a),r)),r}function jx(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=e?e.value:null,d=t?t.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let p=Bx(a,o,o.routeConfig.runGuardsAndResolvers);p?r.canActivateChecks.push(new ac(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Us(n,e,d?d.children:null,i,r):Us(n,e,t,i,r),p&&d&&d.outlet&&d.outlet.isActivated&&r.canDeactivateChecks.push(new Jr(d.outlet.component,a))}else a&&$s(e,d,r),r.canActivateChecks.push(new ac(i)),o.component?Us(n,null,d?d.children:null,i,r):Us(n,null,t,i,r);return r}function Bx(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!rr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!rr(n.url,e.url)||!Fn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Jh(n,e)||!Fn(n.queryParams,e.queryParams);case"paramsChange":default:return!Jh(n,e)}}function $s(n,e,t){let i=Hr(n),r=n.value;Object.entries(i).forEach(([o,a])=>{r.component?e?$s(a,e.children.getContext(o),t):$s(a,null,t):$s(a,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Jr(e.outlet.component,r)):t.canDeactivateChecks.push(new Jr(null,r)):t.canDeactivateChecks.push(new Jr(null,r))}function na(n){return typeof n=="function"}function qx(n){return typeof n=="boolean"}function $x(n){return n&&na(n.canLoad)}function zx(n){return n&&na(n.canActivate)}function Gx(n){return n&&na(n.canActivateChild)}function Wx(n){return n&&na(n.canDeactivate)}function Hx(n){return n&&na(n.canMatch)}function uE(n){return n instanceof w_||n?.name==="EmptyError"}var Hl=Symbol("INITIAL_VALUE");function to(){return Dt(n=>vl(n.map(e=>e.pipe(Je(1),eh(Hl)))).pipe(ve(e=>{for(let t of e)if(t!==!0){if(t===Hl)return Hl;if(t===!1||Kx(t))return t}return!0}),kt(e=>e!==Hl),Je(1)))}function Kx(n){return or(n)||n instanceof Ks}function Qx(n,e){return Jt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:a}}=t;return a.length===0&&o.length===0?me(ye(K({},t),{guardsResult:!0})):Jx(a,i,r,n).pipe(Jt(d=>d&&qx(d)?Xx(i,o,n,e):me(d)),ve(d=>ye(K({},t),{guardsResult:d})))})}function Jx(n,e,t,i){return We(n).pipe(Jt(r=>nA(r.component,r.route,t,e,i)),Pn(r=>r!==!0,!0))}function Xx(n,e,t,i){return We(e).pipe(ln(r=>I_(Zx(r.route.parent,i),Yx(r.route,i),tA(n,r.path,t),eA(n,r.route,t))),Pn(r=>r!==!0,!0))}function Yx(n,e){return n!==null&&e&&e(new Gh(n)),me(!0)}function Zx(n,e){return n!==null&&e&&e(new $h(n)),me(!0)}function eA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return me(!0);let r=i.map(o=>ms(()=>{let a=ea(e)??t,d=no(o,a),p=zx(d)?d.canActivate(e,n):Mt(a,()=>d(e,n));return Di(p).pipe(Pn())}));return me(r).pipe(to())}function tA(n,e,t){let i=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(a=>Ux(a)).filter(a=>a!==null).map(a=>ms(()=>{let d=a.guards.map(p=>{let m=ea(a.node)??t,v=no(p,m),b=Gx(v)?v.canActivateChild(i,n):Mt(m,()=>v(i,n));return Di(b).pipe(Pn())});return me(d).pipe(to())}));return me(o).pipe(to())}function nA(n,e,t,i,r){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return me(!0);let a=o.map(d=>{let p=ea(e)??r,m=no(d,p),v=Wx(m)?m.canDeactivate(n,e,t,i):Mt(p,()=>m(n,e,t,i));return Di(v).pipe(Pn())});return me(a).pipe(to())}function iA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return me(!0);let o=r.map(a=>{let d=no(a,n),p=$x(d)?d.canLoad(e,t):Mt(n,()=>d(e,t));return Di(p)});return me(o).pipe(to(),dE(i))}function dE(n){return qp(mt(e=>{if(typeof e!="boolean")throw sc(n,e)}),ve(e=>e===!0))}function rA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return me(!0);let o=r.map(a=>{let d=no(a,n),p=Hx(d)?d.canMatch(e,t):Mt(n,()=>d(e,t));return Di(p)});return me(o).pipe(to(),dE(i))}var Qs=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Js=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Wr(n){return hs(new Qs(n))}function oA(n){return hs(new Le(4e3,!1))}function sA(n){return hs(lE(!1,tn.GuardRejected))}var Zh=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return me(i);if(r.numberOfChildren>1||!r.children[Re])return oA(`${e.redirectTo}`);r=r.children[Re]}}applyRedirectCommands(e,t,i,r,o){if(typeof t!="string"){let d=t,{queryParams:p,fragment:m,routeConfig:v,url:b,outlet:T,params:M,data:U,title:L}=r,V=Mt(o,()=>d({params:M,data:U,queryParams:p,fragment:m,routeConfig:v,url:b,outlet:T,title:L}));if(V instanceof ri)throw new Js(V);t=V}let a=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Js(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new ri(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let d=o.substring(1);i[r]=t[d]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),a={};return Object.entries(t.children).forEach(([d,p])=>{a[d]=this.createSegmentGroup(e,p,i,r)}),new Be(o,a)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Le(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},em={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function aA(n,e,t,i,r){let o=pE(n,e,t);return o.matched?(i=Rx(e,i),rA(i,e,t,r).pipe(ve(a=>a===!0?o:K({},em)))):me(o)}function pE(n,e,t){if(e.path==="**")return lA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?K({},em):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||ix)(t,n,e);if(!r)return K({},em);let o={};Object.entries(r.posParams??{}).forEach(([d,p])=>{o[d]=p.path});let a=r.consumed.length>0?K(K({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function lA(n){return{matched:!0,parameters:n.length>0?Gy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Uy(n,e,t,i){return t.length>0&&dA(n,t,i)?{segmentGroup:new Be(e,uA(i,new Be(t,n.children))),slicedSegments:[]}:t.length===0&&pA(n,t,i)?{segmentGroup:new Be(n.segments,cA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new Be(n.segments,n.children),slicedSegments:t}}function cA(n,e,t,i){let r={};for(let o of t)if(uc(n,e,o)&&!i[wn(o)]){let a=new Be([],{});r[wn(o)]=a}return K(K({},i),r)}function uA(n,e){let t={};t[Re]=e;for(let i of n)if(i.path===""&&wn(i)!==Re){let r=new Be([],{});t[wn(i)]=r}return t}function dA(n,e,t){return t.some(i=>uc(n,e,i)&&wn(i)!==Re)}function pA(n,e,t){return t.some(i=>uc(n,e,i))}function uc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function hA(n,e,t){return e.length===0&&!n.children[t]}var tm=class{};function mA(n,e,t,i,r,o,a="emptyOnly"){return new nm(n,e,t,i,r,a,o).recognize()}var fA=31,nm=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,a,d){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=d,this.applyRedirects=new Zh(this.urlSerializer,this.urlTree)}noMatchError(e){return new Le(4002,`'${e.segmentGroup}'`)}recognize(){let e=Uy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(ve(({children:t,rootSnapshot:i})=>{let r=new en(i,t),o=new oc("",r),a=Cx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}))}match(e){let t=new Qr([],Object.freeze({}),Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Re,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Re,t).pipe(ve(i=>({children:i,rootSnapshot:t})),wi(i=>{if(i instanceof Js)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Qs?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,o){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,o):this.processSegment(e,t,i,i.segments,r,!0,o).pipe(ve(a=>a instanceof en?[a]:[]))}processChildren(e,t,i,r){let o=[];for(let a of Object.keys(i.children))a==="primary"?o.unshift(a):o.push(a);return We(o).pipe(ln(a=>{let d=i.children[a],p=Px(t,a);return this.processSegmentGroup(e,p,d,a,r)}),Xn((a,d)=>(a.push(...d),a)),Qp(null),q_(),Jt(a=>{if(a===null)return Wr(i);let d=hE(a);return gA(d),me(d)}))}processSegment(e,t,i,r,o,a,d){return We(t).pipe(ln(p=>this.processSegmentAgainstRoute(p._injector??e,t,p,i,r,o,a,d).pipe(wi(m=>{if(m instanceof Qs)return me(null);throw m}))),Pn(p=>!!p),wi(p=>{if(uE(p))return hA(i,r,o)?me(new tm):Wr(i);throw p}))}processSegmentAgainstRoute(e,t,i,r,o,a,d,p){return wn(i)!==a&&(a===Re||!uc(r,o,i))?Wr(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,o,a,p):this.allowRedirects&&d?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,a,p):Wr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,a,d){let{matched:p,parameters:m,consumedSegments:v,positionalParamSegments:b,remainingSegments:T}=pE(t,r,o);if(!p)return Wr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>fA&&(this.allowRedirects=!1));let M=new Qr(o,m,Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,jy(r),wn(r),r.component??r._loadedComponent??null,r,By(r)),U=rc(M,d,this.paramsInheritanceStrategy);M.params=Object.freeze(U.params),M.data=Object.freeze(U.data);let L=this.applyRedirects.applyRedirectCommands(v,r.redirectTo,b,M,e);return this.applyRedirects.lineralizeSegments(r,L).pipe(Jt(V=>this.processSegment(e,i,t,V.concat(T),a,!1,d)))}matchSegmentAgainstRoute(e,t,i,r,o,a){let d=aA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),d.pipe(Dt(p=>p.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Dt(({routes:m})=>{let v=i._loadedInjector??e,{parameters:b,consumedSegments:T,remainingSegments:M}=p,U=new Qr(T,b,Object.freeze(K({},this.urlTree.queryParams)),this.urlTree.fragment,jy(i),wn(i),i.component??i._loadedComponent??null,i,By(i)),L=rc(U,a,this.paramsInheritanceStrategy);U.params=Object.freeze(L.params),U.data=Object.freeze(L.data);let{segmentGroup:V,slicedSegments:ae}=Uy(t,T,M,m);if(ae.length===0&&V.hasChildren())return this.processChildren(v,m,V,U).pipe(ve(se=>new en(U,se)));if(m.length===0&&ae.length===0)return me(new en(U,[]));let ge=wn(i)===o;return this.processSegment(v,m,V,ae,ge?Re:o,!0,U).pipe(ve(se=>new en(U,se instanceof en?[se]:[])))}))):Wr(t)))}getChildConfig(e,t,i){return t.children?me({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?me({routes:t._loadedRoutes,injector:t._loadedInjector}):iA(e,t,i,this.urlSerializer).pipe(Jt(r=>r?this.configLoader.loadChildren(e,t).pipe(mt(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):sA(t))):me({routes:[],injector:e})}};function gA(n){n.sort((e,t)=>e.value.outlet===Re?-1:t.value.outlet===Re?1:e.value.outlet.localeCompare(t.value.outlet))}function vA(n){let e=n.value.routeConfig;return e&&e.path===""}function hE(n){let e=[],t=new Set;for(let i of n){if(!vA(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=hE(i.children);e.push(new en(i.value,r))}return e.filter(i=>!t.has(i))}function jy(n){return n.data||{}}function By(n){return n.resolve||{}}function _A(n,e,t,i,r,o){return Jt(a=>mA(n,e,t,i,a.extractedUrl,r,o).pipe(ve(({state:d,tree:p})=>ye(K({},a),{targetSnapshot:d,urlAfterRedirects:p}))))}function bA(n,e){return Jt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return me(t);let o=new Set(r.map(p=>p.route)),a=new Set;for(let p of o)if(!a.has(p))for(let m of mE(p))a.add(m);let d=0;return We(a).pipe(ln(p=>o.has(p)?yA(p,i,n,e):(p.data=rc(p,p.parent,n).resolve,me(void 0))),mt(()=>d++),Yp(1),Jt(p=>d===a.size?me(t):an))})}function mE(n){let e=n.children.map(t=>mE(t)).flat();return[n,...e]}function yA(n,e,t,i){let r=n.routeConfig,o=n._resolve;return r?.title!==void 0&&!sE(r)&&(o[Ys]=r.title),EA(o,n,e,i).pipe(ve(a=>(n._resolvedData=a,n.data=rc(n,n.parent,t).resolve,null)))}function EA(n,e,t,i){let r=Mh(n);if(r.length===0)return me({});let o={};return We(r).pipe(Jt(a=>CA(n[a],e,t,i).pipe(Pn(),mt(d=>{if(d instanceof Ks)throw sc(new Yr,d);o[a]=d}))),Yp(1),F_(o),wi(a=>uE(a)?an:hs(a)))}function CA(n,e,t,i){let r=ea(e)??i,o=no(n,r),a=o.resolve?o.resolve(e,t):Mt(r,()=>o(e,t));return Di(a)}function kh(n){return Dt(e=>{let t=n(e);return t?We(t).pipe(ve(()=>e)):me(e)})}var fE=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Re);return i}getResolvedTitleForRoute(t){return t.data[Ys]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:()=>X(wA),providedIn:"root"})}return n})(),wA=(()=>{class n extends fE{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(ie(ky))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ia=new le("",{providedIn:"root",factory:()=>({})}),TA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&y(0,"router-outlet")},dependencies:[om],encapsulation:2})}return n})();function sm(n){let e=n.children&&n.children.map(sm),t=e?ye(K({},n),{children:e}):K({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Re&&(t.component=TA),t}var Xs=new le(""),am=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=X(Rl);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return me(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Di(t.loadComponent()).pipe(ve(gE),mt(o=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o}),kr(()=>{this.componentLoaders.delete(t)})),r=new zp(i,()=>new ot).pipe($p());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return me({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let o=IA(i,this.compiler,t,this.onLoadEndListener).pipe(kr(()=>{this.childrenLoaders.delete(i)})),a=new zp(o,()=>new ot).pipe($p());return this.childrenLoaders.set(i,a),a}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function IA(n,e,t,i){return Di(n.loadChildren()).pipe(ve(gE),Jt(r=>r instanceof Eb||Array.isArray(r)?me(r):We(e.compileModuleAsync(r))),ve(r=>{i&&i(n);let o,a,d=!1;return Array.isArray(r)?(a=r,d=!0):(o=r.create(t).injector,a=o.get(Xs,[],{optional:!0,self:!0}).flat()),{routes:a.map(sm),injector:o}}))}function SA(n){return n&&typeof n=="object"&&"default"in n}function gE(n){return SA(n)?n.default:n}var lm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:()=>X(xA),providedIn:"root"})}return n})(),xA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vE=new le(""),_E=new le("");function AA(n,e,t){let i=n.get(_E),r=n.get(at);return n.get($e).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(m=>setTimeout(m));let o,a=new Promise(m=>{o=m}),d=r.startViewTransition(()=>(o(),RA(n))),{onViewTransitionCreated:p}=i;return p&&Mt(n,()=>p({transition:d,from:e,to:t})),a})}function RA(n){return new Promise(e=>{sb({read:()=>setTimeout(e)},{injector:n})})}var bE=new le(""),cm=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ot;transitionAbortSubject=new ot;configLoader=X(am);environmentInjector=X(Yn);urlSerializer=X(Zs);rootContexts=X(ta);location=X(Ss);inputBindingEnabled=X(cc,{optional:!0})!==null;titleStrategy=X(fE);options=X(ia,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=X(lm);createViewTransition=X(vE,{optional:!0});navigationErrorHandler=X(bE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>me(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new Bh(r)),i=r=>this.events.next(new qh(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(ye(K(K({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Pt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:qs,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(kt(o=>o.id!==0),ve(o=>ye(K({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Dt(o=>{let a=!1,d=!1;return me(o).pipe(Dt(p=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",tn.SupersededByNewNavigation),an;this.currentTransition=o,this.currentNavigation={id:p.id,initialUrl:p.rawUrl,extractedUrl:p.extractedUrl,targetBrowserUrl:typeof p.extras.browserUrl=="string"?this.urlSerializer.parse(p.extras.browserUrl):p.extras.browserUrl,trigger:p.source,extras:p.extras,previousNavigation:this.lastSuccessfulNavigation?ye(K({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let m=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=p.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!m&&v!=="reload"){let b="";return this.events.next(new ki(p.id,this.urlSerializer.serialize(p.rawUrl),b,Zl.IgnoredSameUrlNavigation)),p.resolve(!1),an}if(this.urlHandlingStrategy.shouldProcessUrl(p.rawUrl))return me(p).pipe(Dt(b=>{let T=this.transitions?.getValue();return this.events.next(new Zr(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),T!==this.transitions?.getValue()?an:Promise.resolve(b)}),_A(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),mt(b=>{o.targetSnapshot=b.targetSnapshot,o.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation=ye(K({},this.currentNavigation),{finalUrl:b.urlAfterRedirects});let T=new ec(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);this.events.next(T)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(p.currentRawUrl)){let{id:b,extractedUrl:T,source:M,restoredState:U,extras:L}=p,V=new Zr(b,this.urlSerializer.serialize(T),M,U);this.events.next(V);let ae=rE(this.rootComponentType).snapshot;return this.currentTransition=o=ye(K({},p),{targetSnapshot:ae,urlAfterRedirects:T,extras:ye(K({},L),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=T,me(o)}else{let b="";return this.events.next(new ki(p.id,this.urlSerializer.serialize(p.extractedUrl),b,Zl.IgnoredByUrlHandlingStrategy)),p.resolve(!1),an}}),mt(p=>{let m=new Fh(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(m)}),ve(p=>(this.currentTransition=o=ye(K({},p),{guards:Lx(p.targetSnapshot,p.currentSnapshot,this.rootContexts)}),o)),Qx(this.environmentInjector,p=>this.events.next(p)),mt(p=>{if(o.guardsResult=p.guardsResult,p.guardsResult&&typeof p.guardsResult!="boolean")throw sc(this.urlSerializer,p.guardsResult);let m=new Lh(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot,!!p.guardsResult);this.events.next(m)}),kt(p=>p.guardsResult?!0:(this.cancelNavigationTransition(p,"",tn.GuardRejected),!1)),kh(p=>{if(p.guards.canActivateChecks.length)return me(p).pipe(mt(m=>{let v=new Uh(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(v)}),Dt(m=>{let v=!1;return me(m).pipe(bA(this.paramsInheritanceStrategy,this.environmentInjector),mt({next:()=>v=!0,complete:()=>{v||this.cancelNavigationTransition(m,"",tn.NoDataFromResolver)}}))}),mt(m=>{let v=new jh(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(v)}))}),kh(p=>{let m=v=>{let b=[];v.routeConfig?.loadComponent&&!v.routeConfig._loadedComponent&&b.push(this.configLoader.loadComponent(v.routeConfig).pipe(mt(T=>{v.component=T}),ve(()=>{})));for(let T of v.children)b.push(...m(T));return b};return vl(m(p.targetSnapshot.root)).pipe(Qp(null),Je(1))}),kh(()=>this.afterPreactivation()),Dt(()=>{let{currentSnapshot:p,targetSnapshot:m}=o,v=this.createViewTransition?.(this.environmentInjector,p.root,m.root);return v?We(v).pipe(ve(()=>o)):me(o)}),ve(p=>{let m=Mx(t.routeReuseStrategy,p.targetSnapshot,p.currentRouterState);return this.currentTransition=o=ye(K({},p),{targetRouterState:m}),this.currentNavigation.targetRouterState=m,o}),mt(()=>{this.events.next(new Ws)}),Fx(this.rootContexts,t.routeReuseStrategy,p=>this.events.next(p),this.inputBindingEnabled),Je(1),mt({next:p=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ln(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects))),this.titleStrategy?.updateTitle(p.targetRouterState.snapshot),p.resolve(!0)},complete:()=>{a=!0}}),Dr(this.transitionAbortSubject.pipe(mt(p=>{throw p}))),kr(()=>{!a&&!d&&this.cancelNavigationTransition(o,"",tn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),wi(p=>{if(d=!0,cE(p))this.events.next(new ii(o.id,this.urlSerializer.serialize(o.extractedUrl),p.message,p.cancellationCode)),Vx(p)?this.events.next(new eo(p.url,p.navigationBehaviorOptions)):o.resolve(!1);else{let m=new Gs(o.id,this.urlSerializer.serialize(o.extractedUrl),p,o.targetSnapshot??void 0);try{let v=Mt(this.environmentInjector,()=>this.navigationErrorHandler?.(m));if(v instanceof Ks){let{message:b,cancellationCode:T}=sc(this.urlSerializer,v);this.events.next(new ii(o.id,this.urlSerializer.serialize(o.extractedUrl),b,T)),this.events.next(new eo(v.redirectTo,v.navigationBehaviorOptions))}else throw this.events.next(m),p}catch(v){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(v)}}return an}))}))}cancelNavigationTransition(t,i,r){let o=new ii(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function PA(n){return n!==qs}var kA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:()=>X(DA),providedIn:"root"})}return n})(),im=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},DA=(()=>{class n extends im{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:()=>X(MA),providedIn:"root"})}return n})(),MA=(()=>{class n extends yE{location=X(Ss);urlSerializer=X(Zs);options=X(ia,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=X(lm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ri;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=rE(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof Zr)this.stateMemento=this.createStateMemento();else if(t instanceof ki)this.rawUrlTree=i.initialUrl;else if(t instanceof ec){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Ws?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof ii&&(t.code===tn.GuardRejected||t.code===tn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Gs?this.restoreHistory(i,!0):t instanceof Ln&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof ri?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let o=this.browserPageId,a=K(K({},i.extras.state),this.generateNgRouterState(i.id,o));this.location.replaceState(r,"",a)}else{let o=K(K({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===t.finalUrl&&o===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),js=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(js||{});function EE(n,e){n.events.pipe(kt(t=>t instanceof Ln||t instanceof ii||t instanceof Gs||t instanceof ki),ve(t=>t instanceof Ln||t instanceof ki?js.COMPLETE:(t instanceof ii?t.code===tn.Redirect||t.code===tn.SupersededByNewNavigation:!1)?js.REDIRECTING:js.FAILED),kt(t=>t!==js.REDIRECTING),Je(1)).subscribe(()=>{e()})}var OA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},NA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ge=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=X(Sl);stateManager=X(yE);options=X(ia,{optional:!0})||{};pendingTasks=X(El);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=X(cm);urlSerializer=X(Zs);location=X(Ss);urlHandlingStrategy=X(lm);_events=new ot;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=X(kA);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=X(Xs,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!X(cc,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new y_;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ii&&i.code!==tn.Redirect&&i.code!==tn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ln)this.navigated=!0;else if(i instanceof eo){let a=i.navigationBehaviorOptions,d=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),p=K({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||PA(r.source)},a);this.scheduleNavigation(d,qs,null,p,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}FA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let o={replaceUrl:!0},a=r?.navigationId?r:null;if(r){let p=K({},r);delete p.navigationId,delete p.\u0275routerPageId,Object.keys(p).length!==0&&(o.state=p)}let d=this.parseUrl(t);this.scheduleNavigation(d,i,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(sm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:d,preserveFragment:p}=i,m=p?this.currentUrlTree.fragment:a,v=null;switch(d??this.options.defaultQueryParamsHandling){case"merge":v=K(K({},this.currentUrlTree.queryParams),o);break;case"preserve":v=this.currentUrlTree.queryParams;break;default:v=o||null}v!==null&&(v=this.removeEmptyProps(v));let b;try{let T=r?r.snapshot:this.routerState.snapshot.root;b=eE(T)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),b=this.currentUrlTree.root}return tE(b,t,v,m??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=or(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,qs,null,i)}navigate(t,i={skipLocationChange:!1}){return VA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=K({},OA):i===!1?r=K({},NA):r=i,or(t))return Oy(this.currentUrlTree,t,r);let o=this.parseUrl(t);return Oy(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let d,p,m;a?(d=a.resolve,p=a.reject,m=a.promise):m=new Promise((b,T)=>{d=b,p=T});let v=this.pendingTasks.add();return EE(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:d,reject:p,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(b=>Promise.reject(b))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function VA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Le(4008,!1)}function FA(n){return!(n instanceof Ws)&&!(n instanceof eo)}var Mi=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ot;constructor(t,i,r,o,a,d){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=d;let p=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=p==="a"||p==="area",this.isAnchorElement?this.subscription=t.events.subscribe(m=>{m instanceof Ln&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(or(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,o,a){let d=this.urlTree;if(d===null||this.isAnchorElement&&(t!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let p={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(d,p),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let i=this.href===null?null:vb(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(t,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,t,i):r.removeAttribute(o,t)}get urlTree(){return this.routerLinkInput===null?null:or(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(oe(Ge),oe(_t),tb("tabindex"),oe(ys),oe(Mr),oe(Is))};static \u0275dir=tt({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&C("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&Kt("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",tr],skipLocationChange:[2,"skipLocationChange","skipLocationChange",tr],replaceUrl:[2,"replaceUrl","replaceUrl",tr],routerLink:"routerLink"},features:[wb,En]})}return n})();var lc=class{};var LA=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,o,a){this.router=t,this.injector=r,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(kt(t=>t instanceof Ln),ln(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=lh(o.providers,t,`Route: ${o.path}`));let a=o._injector??t,d=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(d,o.children??o._loadedRoutes))}return We(r).pipe(Kp())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=me(null);let o=r.pipe(Jt(a=>a===null?me(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,this.processRoutes(a.injector??t,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(i);return We([o,a]).pipe(Kp())}else return o})}static \u0275fac=function(i){return new(i||n)(ie(Ge),ie(Rl),ie(Yn),ie(lc),ie(am))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),CE=new le(""),UA=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,o,a={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=o,this.options=a,a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Zr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Ln?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof ki&&t.code===Zl.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof tc&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new tc(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){wl()};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();function wE(n,...e){return ft([{provide:Xs,multi:!0,useValue:n},[],{provide:_t,useFactory:TE,deps:[Ge]},{provide:Es,multi:!0,useFactory:IE},e.map(t=>t.\u0275providers)])}function TE(n){return n.routerState.root}function ra(n,e){return{\u0275kind:n,\u0275providers:e}}function IE(){let n=X(Ht);return e=>{let t=n.get(ei);if(e!==t.components[0])return;let i=n.get(Ge),r=n.get(SE);n.get(um)===1&&i.initialNavigation(),n.get(xE,null,th.Optional)?.setUpPreloading(),n.get(CE,null,th.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var SE=new le("",{factory:()=>new ot}),um=new le("",{providedIn:"root",factory:()=>1});function jA(){return ra(2,[{provide:um,useValue:0},{provide:ch,multi:!0,deps:[Ht],useFactory:e=>{let t=e.get(Lb,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Ge),o=e.get(SE);EE(r,()=>{i(!0)}),e.get(cm).afterPreactivation=()=>(i(!0),o.closed?me(void 0):o),r.initialNavigation()}))}}])}function BA(){return ra(3,[{provide:ch,multi:!0,useFactory:()=>{let e=X(Ge);return()=>{e.setUpLocationChangeListener()}}},{provide:um,useValue:2}])}var xE=new le("");function qA(n){return ra(0,[{provide:xE,useExisting:LA},{provide:lc,useExisting:n}])}function $A(){return ra(8,[Ly,{provide:cc,useExisting:Ly}])}function zA(n){let e=[{provide:vE,useValue:AA},{provide:_E,useValue:K({skipNextTransition:!!n?.skipInitialTransition},n)}];return ra(9,e)}var qy=new le("ROUTER_FORROOT_GUARD"),GA=[Ss,{provide:Zs,useClass:Yr},Ge,ta,{provide:_t,useFactory:TE,deps:[Ge]},am,[]],AE=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[GA,[],{provide:Xs,multi:!0,useValue:t},{provide:qy,useFactory:QA,deps:[[Ge,new yn,new Z_]]},i?.errorHandler?{provide:bE,useValue:i.errorHandler}:[],{provide:ia,useValue:i||{}},i?.useHash?HA():KA(),WA(),i?.preloadingStrategy?qA(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?JA(i):[],i?.bindToComponentInputs?$A().\u0275providers:[],i?.enableViewTransitions?zA().\u0275providers:[],XA()]}}static forChild(t){return{ngModule:n,providers:[{provide:Xs,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)(ie(qy,8))};static \u0275mod=dn({type:n});static \u0275inj=un({})}return n})();function WA(){return{provide:CE,useFactory:()=>{let n=X(Kb),e=X($e),t=X(ia),i=X(cm),r=X(Zs);return t.scrollOffset&&n.setOffset(t.scrollOffset),new UA(r,i,n,e,t)}}}function HA(){return{provide:Is,useClass:jb}}function KA(){return{provide:Is,useClass:Ub}}function QA(n){return"guarded"}function JA(n){return[n.initialNavigation==="disabled"?BA().\u0275providers:[],n.initialNavigation==="enabledBlocking"?jA().\u0275providers:[]]}var $y=new le("");function XA(){return[{provide:$y,useFactory:IE},{provide:Es,multi:!0,useExisting:$y}]}var dc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-utilisation-service"]],decls:2,vars:0,template:function(t,i){t&1&&(c(0,"p"),s(1,"utilisation-service works!"),l())},encapsulation:2})};var pc=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-routes"]],decls:2,vars:0,template:function(t,i){t&1&&(c(0,"p"),s(1,"Les routes"),l())},encapsulation:2})};function YA(n,e){if(n&1&&(c(0,"p"),s(1,"Texte pr\xE9c\xE9dent : "),c(2,"strong"),s(3),l()()),n&2){let t=ce();g(3),he(t.previousText)}}var hc=class n{dynamicText="Texte initial";previousText=null;ngOnChanges(e){e.dynamicText&&(this.previousText=e.dynamicText.previousValue)}changeText(){this.dynamicText="Le texte a \xE9t\xE9 chang\xE9 apr\xE8s le clic"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-ngonchanges"]],inputs:{dynamicText:"dynamicText"},features:[En],decls:11,vars:2,consts:[[1,"container","mt-4"],[1,"text-primary"],[1,"btn","btn-success","my-3",3,"click"],[1,"mt-3"],[4,"ngIf"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h2",1),s(2,"Changer le texte dynamique"),l(),c(3,"button",2),C("click",function(){return i.changeText()}),s(4,"Changer le texte"),l(),c(5,"div",3)(6,"p"),s(7,"Texte actuel : "),c(8,"strong"),s(9),l()(),O(10,YA,4,1,"p",4),l()()),t&2&&(g(9),he(i.dynamicText),g(),S("ngIf",i.previousText))},dependencies:[G,te],encapsulation:2})};var ZA=["tab1"];function eR(n,e){n&1&&(c(0,"span",16),s(1,"copied "),y(2,"i",17),l())}var mc=class n{currentTime=new Date().toLocaleTimeString();intervalId;constructor(){this.intervalId=setInterval(()=>{this.currentTime=new Date().toLocaleTimeString()},1e3)}stopClock(){this.intervalId&&(clearInterval(this.intervalId),console.log("Horloge arr\xEAt\xE9e"))}ngOnDestroy(){this.intervalId&&(clearInterval(this.intervalId),console.log("ngOnDestroy: Horloge nettoy\xE9e"))}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-clock"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,ZA,5),t&2&&ee()},decls:26,vars:2,consts:[["tab1",""],[1,"container","mt-4"],[1,"text-primary"],[1,"text-center"],[1,"display-4","my-3"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h2",2),s(2,"Horloge en temps r\xE9el"),l(),c(3,"div",3)(4,"div",4),s(5),l(),c(6,"button",5),C("click",function(){return x(r),A(i.stopClock())}),s(7," Arr\xEAter l'horloge "),l()(),c(8,"ul",6)(9,"li",7)(10,"button",8),s(11," Composant Parent "),l()()(),c(12,"div",9)(13,"div",10)(14,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(15,eR,3,0,"span",12),c(16,"pre",13,0),H(),s(18,`import { Component, OnDestroy } from '@angular/core';
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
}`),W(),l()()(),c(19,"div",14),s(20," ****************************************"),c(21,"span",15),s(22,"cours"),l(),s(23,"************************************************* "),l(),c(24,"pre"),s(25,`        .......
      `),l()()}t&2&&(g(5),he(i.currentTime),g(10),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var tR=["tab1"],nR=["tab2"],iR=["userList"];function rR(n,e){if(n&1&&(c(0,"li",18)(1,"span")(2,"strong"),s(3),l(),s(4),l(),c(5,"span",19),s(6),l()()),n&2){let t=e.$implicit;g(3),he(t.name),g(),z(" - ",t.email,""),g(2),z("ID: ",t.id,"")}}function oR(n,e){if(n&1&&(c(0,"ul",16,1),O(2,rR,7,3,"li",17),l()),n&2){let t=ce();g(2),S("ngForOf",t.users)}}function sR(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}var fc=class n{userList;users=[];showUsers(){this.users=[{id:1,name:"Alice",email:"alice@example.com"},{id:2,name:"Bob",email:"bob@example.com"},{id:3,name:"Charlie",email:"charlie@example.com"}]}ngAfterViewInit(){this.userList&&setTimeout(()=>{this.userList.nativeElement.style.border="2px solid blue"})}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user-list"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,tR,5),q(i.infoTab2,nR,5),Si(iR,5)),t&2){ee(2);let r;ti(r=ni())&&(i.userList=r.first)}},decls:24,vars:2,consts:[["tab1",""],["userList",""],[1,"container","mt-4"],[1,"text-primary"],[1,"btn","btn-success","my-3",3,"click"],["class","list-group",4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-info","rounded-pill"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h2",3),s(2,"Liste des utilisateurs"),l(),c(3,"button",4),C("click",function(){return x(r),A(i.showUsers())}),s(4," Afficher Utilisateurs "),l(),O(5,oR,3,1,"ul",5),c(6,"ul",6)(7,"li",7)(8,"button",8),s(9," Composant Parent "),l()()(),c(10,"div",9)(11,"div",10)(12,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(13,sR,3,0,"span",12),c(14,"pre",13,0),H(),s(16,`import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container mt-4">
      <h2 class="text-primary">Liste des utilisateurs</h2>
      <button class="btn btn-warning my-3" (click)="showUsers()">
        Afficher Utilisateurs
      </button>
      <ul class="list-group" *ngIf="users.length > 0" #userList>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        >
          <span
            ><strong>{{ user.name }}</strong> - {{ user.email }}</span
          >
          <span class="badge bg-info rounded-pill">ID: {{ user.id }}</span>
        </li>
      </ul>
    </div>
  \`,
})
export class NgOnAfterViewInitComponent implements AfterViewInit {
  @ViewChild('userList') userList!: ElementRef;

  users: any[] = [];

  showUsers() {
    this.users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    ];
  }

  ngAfterViewInit() {
    if (this.userList) {
      setTimeout(() => {
        this.userList.nativeElement.style.border = '2px solid blue';
      });
    }
  }
}`),W(),l()()(),c(17,"div",14),s(18," ****************************************"),c(19,"span",15),s(20,"cours"),l(),s(21,"************************************************* "),l(),c(22,"pre"),s(23,`        .......
      `),l()()}t&2&&(g(5),S("ngIf",i.users.length>0),g(8),S("ngIf",i.clicked))},dependencies:[G,He,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var aR=["tab1"],lR=["tab2"];function cR(n,e){if(n&1&&(c(0,"li",17)(1,"span")(2,"strong"),s(3),l(),s(4),l(),c(5,"span",18),s(6),l()()),n&2){let t=e.$implicit;g(3),he(t.name),g(),z(" - ",t.email," "),g(2),z("ID: ",t.id,"")}}function uR(n,e){if(n&1&&(c(0,"ul",15),O(1,cR,7,3,"li",16),l()),n&2){let t=ce();g(),S("ngForOf",t.users)}}function dR(n,e){n&1&&(c(0,"div",19),y(1,"div",20),c(2,"p",21),s(3,"Chargement en cours..."),l()())}function pR(n,e){n&1&&(c(0,"span",22),s(1,"copied "),y(2,"i",23),l())}var gc=class n{constructor(e){this.http=e}users=[];loading=!0;ngOnInit(){this.fetchUsers()}fetchUsers(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({next:e=>{this.users=e,this.loading=!1},error:e=>{console.error("Erreur lors du chargement des utilisateurs",e),this.loading=!1}})}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Cn))};static \u0275cmp=j({type:n,selectors:[["app-ngoninit"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,aR,5),q(i.infoTab2,lR,5)),t&2&&ee(2)},decls:24,vars:3,consts:[["tab1",""],[1,"container","mt-4"],[1,"text-primary"],["class","list-group",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","bg-info","rounded-pill"],[1,"text-center","mt-3"],[1,"spinner-border","text-warning"],[1,"mt-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h2",2),s(2,"Liste des utilisateurs"),l(),O(3,uR,2,1,"ul",3)(4,dR,4,0,"div",4),y(5,"br"),c(6,"ul",5)(7,"li",6)(8,"button",7),s(9," Composant Parent "),l()()(),c(10,"div",8)(11,"div",9)(12,"i",10),C("click",function(){return x(r),A(i.copy1())}),l(),O(13,pR,3,0,"span",11),c(14,"pre",12,0),H(),s(16,`import { Component, OnInit } from '@angular/core';
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
}`),W(),l()()(),c(17,"div",13),s(18," ****************************************"),c(19,"span",14),s(20,"cours"),l(),s(21,"************************************************* "),l(),c(22,"pre"),s(23,`        .......
      `),l()()}t&2&&(g(3),S("ngIf",i.users.length>0),g(),S("ngIf",i.loading),g(9),S("ngIf",i.clicked))},dependencies:[G,He,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var vc=class n{constructor(e){this.sanitizer=e;this.sanitizedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl("")}videoIds=["1qz1RQsylVI5_WDenecYzDMdkqRUlm6fq","18qpXT5Nh5v7OKR4_KRyYC__P8Z_g8O8G","1EUZUnQdcAf9wJMt6lHX8R1uN8Ep7P4lw"];sanitizedVideoUrl;ngOnInit(){this.selectVideo(0)}selectVideo(e){let t=`https://drive.google.com/file/d/${this.videoIds[e]}/preview`;this.sanitizedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t)}static \u0275fac=function(t){return new(t||n)(oe(Fs))};static \u0275cmp=j({type:n,selectors:[["app-video"]],decls:12,vars:1,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"text-center","mb-3"],[1,"btn","btn-success","mx-2",3,"click"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"video-container","text-center","mb-3"],["width","800","height","450","frameborder","0","allowfullscreen","",1,"rounded","shadow",3,"src"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h2",1),s(2,"Tutoriel Vid\xE9o"),l(),c(3,"div",2)(4,"button",3),C("click",function(){return i.selectVideo(0)}),s(5," \xC9tape 1 "),l(),c(6,"button",3),C("click",function(){return i.selectVideo(1)}),s(7," \xC9tape 2 "),l(),c(8,"button",4),C("click",function(){return i.selectVideo(2)}),s(9," \xC9tape 3 "),l()(),c(10,"div",5),y(11,"iframe",6),l()()),t&2&&(g(11),S("src",i.sanitizedVideoUrl,fb))},styles:[".video-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{font-size:1.1rem}"]})};var Oi={production:!0,apiURL:"http://localhost:8000",apiVersion:"v1",firebaseConfig:{apiKey:"AIzaSyCdKHLM6_7ZhC7FmmxmzroMrtPmHlL8S7E",authDomain:"eshop-a7e80.firebaseapp.com",projectId:"eshop-a7e80",storageBucket:"eshop-a7e80.appspot.com",messagingSenderId:"210536635875",appId:"1:210536635875:web:102174013c4495022b94d6"}};var Ni=class n{constructor(e){this.http=e}baseURL=Oi.apiURL;getCategories(){try{return this.http.get(`${this.baseURL}/categories/getCategories.php`)}catch(e){throw console.error("Erreur lors de la r\xE9cup\xE9ration des categories",e),e}}static \u0275fac=function(t){return new(t||n)(ie(Cn))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var _c=class n{constructor(e){this.categorieService=e}resolve(){return this.categorieService.getCategories().pipe(ve(e=>e.success&&e.dataCat?e.dataCat:(console.warn("No categorys found or API returned an error."),[])))}static \u0275fac=function(t){return new(t||n)(ie(Ni))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var NE=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(oe(ys),oe(Mr))};static \u0275dir=tt({type:n})}return n})(),fm=(()=>{class n extends NE{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,features:[Bt]})}return n})(),so=new le(""),hR={provide:so,useExisting:cn(()=>gm),multi:!0},gm=(()=>{class n extends fm{writeValue(t){this.setProperty("checked",t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,r){i&1&&C("change",function(a){return r.onChange(a.target.checked)})("blur",function(){return r.onTouched()})},standalone:!1,features:[pn([hR]),Bt]})}return n})(),mR={provide:so,useExisting:cn(()=>De),multi:!0};function fR(){let n=$r()?$r().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var gR=new le(""),De=(()=>{class n extends NE{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!fR())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(oe(ys),oe(Mr),oe(gR,8))};static \u0275dir=tt({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&C("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[pn([mR]),Bt]})}return n})();function Vi(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function VE(n){return n!=null&&typeof n.length=="number"}var Li=new le(""),da=new le(""),vR=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Un=class{static min(e){return FE(e)}static max(e){return LE(e)}static required(e){return UE(e)}static requiredTrue(e){return _R(e)}static email(e){return bR(e)}static minLength(e){return yR(e)}static maxLength(e){return ER(e)}static pattern(e){return CR(e)}static nullValidator(e){return yc(e)}static compose(e){return GE(e)}static composeAsync(e){return WE(e)}};function FE(n){return e=>{if(Vi(e.value)||Vi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function LE(n){return e=>{if(Vi(e.value)||Vi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function UE(n){return Vi(n.value)?{required:!0}:null}function _R(n){return n.value===!0?null:{required:!0}}function bR(n){return Vi(n.value)||vR.test(n.value)?null:{email:!0}}function yR(n){return e=>Vi(e.value)||!VE(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function ER(n){return e=>VE(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function CR(n){if(!n)return yc;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Vi(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function yc(n){return null}function jE(n){return n!=null}function BE(n){return xl(n)?We(n):n}function qE(n){let e={};return n.forEach(t=>{e=t!=null?K(K({},e),t):e}),Object.keys(e).length===0?null:e}function $E(n,e){return e.map(t=>t(n))}function wR(n){return!n.validate}function zE(n){return n.map(e=>wR(e)?e:t=>e.validate(t))}function GE(n){if(!n)return null;let e=n.filter(jE);return e.length==0?null:function(t){return qE($E(t,e))}}function vm(n){return n!=null?GE(zE(n)):null}function WE(n){if(!n)return null;let e=n.filter(jE);return e.length==0?null:function(t){let i=$E(t,e).map(BE);return S_(i).pipe(ve(qE))}}function _m(n){return n!=null?WE(zE(n)):null}function RE(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function HE(n){return n._rawValidators}function KE(n){return n._rawAsyncValidators}function pm(n){return n?Array.isArray(n)?n:[n]:[]}function Ec(n,e){return Array.isArray(n)?n.includes(e):n===e}function PE(n,e){let t=pm(e);return pm(n).forEach(r=>{Ec(t,r)||t.push(r)}),t}function kE(n,e){return pm(e).filter(t=>!Ec(n,t))}var Cc=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=vm(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=_m(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},si=class extends Cc{name;get formDirective(){return null}get path(){return null}},ai=class extends Cc{_parent=null;name=null;valueAccessor=null},wc=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},TR={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yU=ye(K({},TR),{"[class.ng-submitted]":"isSubmitted"}),Ve=(()=>{class n extends wc{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(oe(ai,2))};static \u0275dir=tt({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&vt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Bt]})}return n})(),Ot=(()=>{class n extends wc{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(oe(si,10))};static \u0275dir=tt({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&vt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Bt]})}return n})();var oa="VALID",bc="INVALID",io="PENDING",sa="DISABLED",Fi=class{},Tc=class extends Fi{value;source;constructor(e,t){super(),this.value=e,this.source=t}},la=class extends Fi{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},ca=class extends Fi{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},ro=class extends Fi{status;source;constructor(e,t){super(),this.status=e,this.source=t}},hm=class extends Fi{source;constructor(e){super(),this.source=e}},mm=class extends Fi{source;constructor(e){super(),this.source=e}};function QE(n){return(Rc(n)?n.validators:n)||null}function IR(n){return Array.isArray(n)?vm(n):n||null}function JE(n,e){return(Rc(e)?e.asyncValidators:n)||null}function SR(n){return Array.isArray(n)?_m(n):n||null}function Rc(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function xR(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new Le(1e3,"");if(!i[t])throw new Le(1001,"")}function AR(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new Le(1002,"")})}var Ic=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Nn(this.statusReactive)}set status(e){Nn(()=>this.statusReactive.set(e))}_status=hn(()=>this.statusReactive());statusReactive=et(void 0);get valid(){return this.status===oa}get invalid(){return this.status===bc}get pending(){return this.status==io}get disabled(){return this.status===sa}get enabled(){return this.status!==sa}errors;get pristine(){return Nn(this.pristineReactive)}set pristine(e){Nn(()=>this.pristineReactive.set(e))}_pristine=hn(()=>this.pristineReactive());pristineReactive=et(!0);get dirty(){return!this.pristine}get touched(){return Nn(this.touchedReactive)}set touched(e){Nn(()=>this.touchedReactive.set(e))}_touched=hn(()=>this.touchedReactive());touchedReactive=et(!1);get untouched(){return!this.touched}_events=new ot;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(PE(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(PE(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(kE(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(kE(e,this._rawAsyncValidators))}hasValidator(e){return Ec(this._rawValidators,e)}hasAsyncValidator(e){return Ec(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(ye(K({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ca(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new ca(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(ye(K({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new la(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new la(!0,i))}markAsPending(e={}){this.status=io;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ro(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(ye(K({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=sa,this.errors=null,this._forEachChild(r=>{r.disable(ye(K({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Tc(this.value,i)),this._events.next(new ro(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ye(K({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=oa,this._forEachChild(i=>{i.enable(ye(K({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(ye(K({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===oa||this.status===io)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Tc(this.value,t)),this._events.next(new ro(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(ye(K({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?sa:oa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=io,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=BE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new ro(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new gt,this.statusChanges=new gt}_calculateStatus(){return this._allControlsDisabled()?sa:this.errors?bc:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(io)?io:this._anyControlsHaveStatus(bc)?bc:oa}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new la(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new ca(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Rc(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=IR(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=SR(this._rawAsyncValidators)}},oo=class extends Ic{constructor(e,t,i){super(QE(t),JE(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){AR(this,!0,e),Object.keys(e).forEach(i=>{xR(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ao=new le("CallSetDisabledState",{providedIn:"root",factory:()=>Pc}),Pc="always";function XE(n,e){return[...e.path,n]}function ua(n,e,t=Pc){bm(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),PR(n,e),DR(n,e),kR(n,e),RR(n,e)}function Sc(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Ac(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function xc(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function RR(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function bm(n,e){let t=HE(n);e.validator!==null?n.setValidators(RE(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=KE(n);e.asyncValidator!==null?n.setAsyncValidators(RE(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();xc(e._rawValidators,r),xc(e._rawAsyncValidators,r)}function Ac(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=HE(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=KE(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return xc(e._rawValidators,i),xc(e._rawAsyncValidators,i),t}function PR(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&YE(n,e)})}function kR(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&YE(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function YE(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function DR(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ZE(n,e){n==null,bm(n,e)}function MR(n,e){return Ac(n,e)}function ym(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function OR(n){return Object.getPrototypeOf(n.constructor)===fm}function e1(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Em(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===De?t=o:OR(o)?i=o:r=o}),r||i||t||null}function NR(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var VR={provide:si,useExisting:cn(()=>$t)},aa=Promise.resolve(),$t=(()=>{class n extends si{callSetDisabledState;get submitted(){return Nn(this.submittedReactive)}_submitted=hn(()=>this.submittedReactive());submittedReactive=et(!1);_directives=new Set;form;ngSubmit=new gt;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new oo({},vm(t),_m(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){aa.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),ua(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){aa.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){aa.then(()=>{let i=this._findContainer(t.path),r=new oo({});ZE(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){aa.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){aa.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),e1(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(oe(Li,10),oe(da,10),oe(ao,8))};static \u0275dir=tt({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&C("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pn([VR]),Bt]})}return n})();function DE(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function ME(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ui=class extends Ic{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(QE(t),JE(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Rc(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ME(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){DE(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){DE(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ME(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var FR=n=>n instanceof Ui;var LR={provide:ai,useExisting:cn(()=>Oe)},OE=Promise.resolve(),Oe=(()=>{class n extends ai{_changeDetectorRef;callSetDisabledState;control=new Ui;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new gt;constructor(t,i,r,o,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Em(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ym(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ua(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){OE.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&tr(i);OE.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?XE(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(oe(si,9),oe(Li,10),oe(da,10),oe(so,10),oe(Ts,8),oe(ao,8))};static \u0275dir=tt({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pn([LR]),Bt,En]})}return n})(),Nt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=tt({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),UR={provide:so,useExisting:cn(()=>pt),multi:!0},pt=(()=>{class n extends fm{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&C("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[pn([UR]),Bt]})}return n})();var Cm=new le(""),jR={provide:ai,useExisting:cn(()=>wm)},wm=(()=>{class n extends ai{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new gt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Em(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&Sc(i,this,!1),ua(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ym(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Sc(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(oe(Li,10),oe(da,10),oe(so,10),oe(Cm,8),oe(ao,8))};static \u0275dir=tt({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[pn([jR]),Bt,En]})}return n})(),BR={provide:si,useExisting:cn(()=>Tm)},Tm=(()=>{class n extends si{callSetDisabledState;get submitted(){return Nn(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=hn(()=>this._submittedReactive());_submittedReactive=et(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new gt;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Ac(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return ua(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Sc(t.control||null,t,!1),NR(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),e1(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new hm(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new mm(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(Sc(i||null,t),FR(r)&&(ua(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);ZE(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&MR(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){bm(this.form,this),this._oldForm&&Ac(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(oe(Li,10),oe(da,10),oe(ao,8))};static \u0275dir=tt({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&C("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pn([BR]),Bt,En]})}return n})();var qR={provide:ai,useExisting:cn(()=>Im)},Im=(()=>{class n extends ai{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new gt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Em(this,o)}ngOnChanges(t){this._added||this._setUpControl(),ym(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return XE(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(oe(si,13),oe(Li,10),oe(da,10),oe(so,10),oe(Cm,8))};static \u0275dir=tt({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[pn([qR]),Bt,En]})}return n})();function t1(n){return typeof n=="number"?n:parseFloat(n)}var Sm=(()=>{class n{_validator=yc;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):yc,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=tt({type:n,features:[En]})}return n})(),$R={provide:Li,useExisting:cn(()=>xm),multi:!0},xm=(()=>{class n extends Sm{max;inputName="max";normalizeInput=t=>t1(t);createValidator=t=>LE(t);static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[pn([$R]),Bt]})}return n})(),zR={provide:Li,useExisting:cn(()=>Am),multi:!0},Am=(()=>{class n extends Sm{min;inputName="min";normalizeInput=t=>t1(t);createValidator=t=>FE(t);static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[pn([zR]),Bt]})}return n})(),GR={provide:Li,useExisting:cn(()=>zt),multi:!0};var zt=(()=>{class n extends Sm{required;inputName="required";normalizeInput=tr;createValidator=t=>UE;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})();static \u0275dir=tt({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&Kt("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[pn([GR]),Bt]})}return n})();var n1=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=dn({type:n});static \u0275inj=un({})}return n})();var Pe=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ao,useValue:t.callSetDisabledState??Pc}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=dn({type:n});static \u0275inj=un({imports:[n1]})}return n})(),i1=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Cm,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ao,useValue:t.callSetDisabledState??Pc}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=dn({type:n});static \u0275inj=un({imports:[n1]})}return n})();var o1=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},WR=function(n){let e=[],t=0,i=0;for(;t<n.length;){let r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){let o=n[t++],a=n[t++],d=n[t++],p=((r&7)<<18|(o&63)<<12|(a&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{let o=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let o=n[r],a=r+1<n.length,d=a?n[r+1]:0,p=r+2<n.length,m=p?n[r+2]:0,v=o>>2,b=(o&3)<<4|d>>4,T=(d&15)<<2|m>>6,M=m&63;p||(M=64,a||(T=64)),i.push(t[v],t[b],t[T],t[M])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(o1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let o=t[n.charAt(r++)],d=r<n.length?t[n.charAt(r)]:0;++r;let m=r<n.length?t[n.charAt(r)]:64;++r;let b=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||d==null||m==null||b==null)throw new Pm;let T=o<<2|d>>4;if(i.push(T),m!==64){let M=d<<4&240|m>>2;if(i.push(M),b!==64){let U=m<<6&192|b;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Pm=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},HR=function(n){let e=o1(n);return kc.encodeByteArray(e,!0)},pa=function(n){return HR(n).replace(/\./g,"")},Dm=function(n){try{return kc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function s1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var KR=()=>s1().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Dm(n[1]);return e&&JSON.parse(e)},Dc=()=>{try{return KR()||QR()||JR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},a1=n=>{var e,t;return(t=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},l1=n=>{let e=a1(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Mm=()=>{var n;return(n=Dc())===null||n===void 0?void 0:n.config},c1=n=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${n}`]};var sr=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function u1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pa(JSON.stringify(t)),pa(JSON.stringify(a)),""].join(".")}function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function XR(){var n;let e=(n=Dc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function p1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h1(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function m1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f1(){return!XR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function g1(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var YR="FirebaseError",fn=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=YR,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}},Tn=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?ZR(o,i):"Error",d=`${this.serviceName}: ${a} (${r}).`;return new fn(r,d,i)}};function ZR(n,e){return n.replace(eP,(t,i)=>{let r=e[i];return r!=null?String(r):`<${i}?>`})}var eP=/\{\$([^}]+)}/g;function lo(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let r of t){if(!i.includes(r))return!1;let o=n[r],a=e[r];if(r1(o)&&r1(a)){if(!lo(o,a))return!1}else if(o!==a)return!1}for(let r of i)if(!t.includes(r))return!1;return!0}function r1(n){return n!==null&&typeof n=="object"}function Om(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function v1(n,e){let t=new km(n,e);return t.subscribe.bind(t)}var km=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");tP(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Rm),r.error===void 0&&(r.error=Rm),r.complete===void 0&&(r.complete=Rm);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function tP(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rm(){}var wU=4*60*60*1e3;function Vt(n){return n&&n._delegate?n._delegate:n}var Gt=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var ar="[DEFAULT]";var Nm=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new sr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iP(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return F(this,null,function*(){let e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[o,a]of this.instancesDeferred.entries()){let d=this.normalizeInstanceIdentifier(o);i===d&&a.resolve(r)}return r}onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);let a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nP(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function nP(n){return n===ar?void 0:n}function iP(n){return n.instantiationMode==="EAGER"}var Mc=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Nm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var rP=[],ke=function(n){return n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT",n}(ke||{}),oP={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},sP=ke.INFO,aP={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},lP=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),r=aP[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},jn=class{constructor(e){this.name=e,this._logLevel=sP,this._logHandler=lP,this._userLogHandler=null,rP.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}};var cP=(n,e)=>e.some(t=>n instanceof t),_1,b1;function uP(){return _1||(_1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dP(){return b1||(b1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var y1=new WeakMap,Fm=new WeakMap,E1=new WeakMap,Vm=new WeakMap,Um=new WeakMap;function pP(n){let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Bn(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&y1.set(t,n)}).catch(()=>{}),Um.set(e,n),e}function hP(n){if(Fm.has(n))return;let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Fm.set(n,e)}var Lm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||E1.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function C1(n){Lm=n(Lm)}function mP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Oc(this),e,...t);return E1.set(i,e.sort?e.sort():[e]),Bn(i)}:dP().includes(n)?function(...e){return n.apply(Oc(this),e),Bn(y1.get(this))}:function(...e){return Bn(n.apply(Oc(this),e))}}function fP(n){return typeof n=="function"?mP(n):(n instanceof IDBTransaction&&hP(n),cP(n,uP())?new Proxy(n,Lm):n)}function Bn(n){if(n instanceof IDBRequest)return pP(n);if(Vm.has(n))return Vm.get(n);let e=fP(n);return e!==n&&(Vm.set(n,e),Um.set(e,n)),e}var Oc=n=>Um.get(n);function T1(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){let a=indexedDB.open(n,e),d=Bn(a);return i&&a.addEventListener("upgradeneeded",p=>{i(Bn(a.result),p.oldVersion,p.newVersion,Bn(a.transaction),p)}),t&&a.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),r&&p.addEventListener("versionchange",m=>r(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}var gP=["get","getKey","getAll","getAllKeys","count"],vP=["put","add","delete","clear"],jm=new Map;function w1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jm.get(e))return jm.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,r=vP.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gP.includes(t)))return;let o=function(a,...d){return F(this,null,function*(){let p=this.transaction(a,r?"readwrite":"readonly"),m=p.store;return i&&(m=m.index(d.shift())),(yield Promise.all([m[t](...d),r&&p.done]))[0]})};return jm.set(e,o),o}C1(n=>ye(K({},n),{get:(e,t,i)=>w1(e,t)||n.get(e,t,i),has:(e,t)=>!!w1(e,t)||n.has(e,t)}));var qm=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_P(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function _P(n){let e=n.getComponent();return e?.type==="VERSION"}var $m="@firebase/app",I1="0.10.18";var li=new jn("@firebase/app"),bP="@firebase/app-compat",yP="@firebase/analytics-compat",EP="@firebase/analytics",CP="@firebase/app-check-compat",wP="@firebase/app-check",TP="@firebase/auth",IP="@firebase/auth-compat",SP="@firebase/database",xP="@firebase/data-connect",AP="@firebase/database-compat",RP="@firebase/functions",PP="@firebase/functions-compat",kP="@firebase/installations",DP="@firebase/installations-compat",MP="@firebase/messaging",OP="@firebase/messaging-compat",NP="@firebase/performance",VP="@firebase/performance-compat",FP="@firebase/remote-config",LP="@firebase/remote-config-compat",UP="@firebase/storage",jP="@firebase/storage-compat",BP="@firebase/firestore",qP="@firebase/vertexai",$P="@firebase/firestore-compat",zP="firebase",GP="11.2.0";var zm="[DEFAULT]",WP={[$m]:"fire-core",[bP]:"fire-core-compat",[EP]:"fire-analytics",[yP]:"fire-analytics-compat",[wP]:"fire-app-check",[CP]:"fire-app-check-compat",[TP]:"fire-auth",[IP]:"fire-auth-compat",[SP]:"fire-rtdb",[xP]:"fire-data-connect",[AP]:"fire-rtdb-compat",[RP]:"fire-fn",[PP]:"fire-fn-compat",[kP]:"fire-iid",[DP]:"fire-iid-compat",[MP]:"fire-fcm",[OP]:"fire-fcm-compat",[NP]:"fire-perf",[VP]:"fire-perf-compat",[FP]:"fire-rc",[LP]:"fire-rc-compat",[UP]:"fire-gcs",[jP]:"fire-gcs-compat",[BP]:"fire-fst",[$P]:"fire-fst-compat",[qP]:"fire-vertex","fire-js":"fire-js",[zP]:"fire-js-all"};var ma=new Map,HP=new Map,Gm=new Map;function S1(n,e){try{n.container.addComponent(e)}catch(t){li.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){let e=n.name;if(Gm.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;Gm.set(e,n);for(let t of ma.values())S1(t,n);for(let t of HP.values())S1(t,n);return!0}function Nc(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function co(n){return n.settings!==void 0}var KP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ji=new Tn("app","Firebase",KP);var Wm=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ji.create("app-deleted",{appName:this._name})}};var uo=GP;function Vc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i=Object.assign({name:zm,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ji.create("bad-app-name",{appName:String(r)});if(t||(t=Mm()),!t)throw ji.create("no-options");let o=ma.get(r);if(o){if(lo(t,o.options)&&lo(i,o.config))return o;throw ji.create("duplicate-app",{appName:r})}let a=new Mc(r);for(let p of Gm.values())a.addComponent(p);let d=new Wm(t,i,a);return ma.set(r,d),d}function po(n=zm){let e=ma.get(n);if(!e&&n===zm&&Mm())return Vc();if(!e)throw ji.create("no-app",{appName:n});return e}function Fc(){return Array.from(ma.values())}function lt(n,e,t){var i;let r=(i=WP[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);let o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let d=[`Unable to register library "${r}" with version "${e}":`];o&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&d.push("and"),a&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(d.join(" "));return}In(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var QP="firebase-heartbeat-database",JP=1,fa="firebase-heartbeat-store",Bm=null;function P1(){return Bm||(Bm=T1(QP,JP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fa)}catch(t){console.warn(t)}}}}).catch(n=>{throw ji.create("idb-open",{originalErrorMessage:n.message})})),Bm}function XP(n){return F(this,null,function*(){try{let t=(yield P1()).transaction(fa),i=yield t.objectStore(fa).get(k1(n));return yield t.done,i}catch(e){if(e instanceof fn)li.warn(e.message);else{let t=ji.create("idb-get",{originalErrorMessage:e?.message});li.warn(t.message)}}})}function x1(n,e){return F(this,null,function*(){try{let i=(yield P1()).transaction(fa,"readwrite");yield i.objectStore(fa).put(e,k1(n)),yield i.done}catch(t){if(t instanceof fn)li.warn(t.message);else{let i=ji.create("idb-set",{originalErrorMessage:t?.message});li.warn(i.message)}}})}function k1(n){return`${n.name}!${n.options.appId}`}var YP=1024,ZP=30*24*60*60*1e3,Hm=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Km(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}triggerHeartbeat(){return F(this,null,function*(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=A1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let d=new Date(a.date).valueOf();return Date.now()-d<=ZP}),this._storage.overwrite(this._heartbeatsCache))}catch(i){li.warn(i)}})}getHeartbeatsHeader(){return F(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=A1(),{heartbeatsToSend:i,unsentEntries:r}=e2(this._heartbeatsCache.heartbeats),o=pa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return li.warn(t),""}})}};function A1(){return new Date().toISOString().substring(0,10)}function e2(n,e=YP){let t=[],i=n.slice();for(let r of n){let o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),R1(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),R1(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var Km=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return F(this,null,function*(){return ha()?g1().then(()=>!0).catch(()=>!1):!1})}read(){return F(this,null,function*(){if(yield this._canUseIndexedDBPromise){let t=yield XP(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return F(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){let r=yield this.read();return x1(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return F(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){let r=yield this.read();return x1(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return})}};function R1(n){return pa(JSON.stringify({version:2,heartbeats:n})).length}function t2(n){In(new Gt("platform-logger",e=>new qm(e),"PRIVATE")),In(new Gt("heartbeat",e=>new Hm(e),"PRIVATE")),lt($m,I1,n),lt($m,I1,"esm2017"),lt("fire-js","")}t2("");var n2="firebase",i2="11.2.0";lt(n2,i2,"app");function ga(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&nh(ga);let i=t?e?.injector?.get(ih)??X(ih):null,r=r2(e?.equal),o;e?.requireSync?o=et({kind:0},{equal:r}):o=et({kind:1,value:e?.initialValue},{equal:r});let a=n.subscribe({next:d=>o.set({kind:1,value:d}),error:d=>{if(e?.rejectErrors)throw d;o.set({kind:2,error:d})}});if(e?.requireSync&&o().kind===0)throw new Le(601,!1);return i?.onDestroy(a.unsubscribe.bind(a)),hn(()=>{let d=o();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new Le(601,!1)}},{equal:e?.equal})}function r2(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function Qm(n){n===void 0&&(nh(Qm),n=X(Ht));let e=n.get(Cl);return t=>new rt(i=>{let r=e.add(),o=!1;function a(){o||(r(),o=!0)}let d=t.subscribe({next:p=>{i.next(p),a()},complete:()=>{i.complete(),a()},error:p=>{i.error(p),a()}});return d.add(()=>{i.unsubscribe(),a()}),d})}var cr=new ws("ANGULARFIRE2_VERSION");function Uc(n,e,t){if(e){if(e.length===1)return e[0];let o=e.filter(a=>a.app===t);if(o.length===1)return o[0]}return t.container.getProvider(n).getImmediate({optional:!0})}var mo=(n,e)=>{let t=e?[e]:Fc(),i=[];return t.forEach(r=>{r.container.getProvider(n).instances.forEach(a=>{i.includes(a)||i.push(a)})}),i},ho=function(n){return n[n.SILENT=0]="SILENT",n[n.WARN=1]="WARN",n[n.VERBOSE=2]="VERBOSE",n}(ho||{}),D1=qr()&&typeof Zone<"u"?ho.WARN:ho.SILENT;var Lc=class{zone;delegate;constructor(e,t=Pr){this.zone=e,this.delegate=t}now(){return this.delegate.now()}schedule(e,t,i){let r=this.zone,o=function(a){r?r.runGuarded(()=>{e.apply(this,[a])}):e.apply(this,[a])};return this.delegate.schedule(o,t,i)}},ur=(()=>{class n{outsideAngular;insideAngular;constructor(){let t=X($e);this.outsideAngular=t.runOutsideAngular(()=>new Lc(typeof Zone>"u"?void 0:Zone.current)),this.insideAngular=t.run(()=>new Lc(typeof Zone>"u"?void 0:Zone.current,E_))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),M1=!1;function o2(n,e){!M1&&(D1>ho.SILENT||qr())&&(M1=!0,console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md")),D1>=e&&console.warn(`Firebase API called outside injection context: ${n.name}`)}function s2(n){let e=X($e,{optional:!0});return e?e.runOutsideAngular(()=>n()):n()}function lr(n){let e=X($e,{optional:!0});return e?e.run(()=>n()):n()}var a2=(n,e,t)=>(...i)=>(e&&setTimeout(e,0),Mt(t,()=>lr(()=>n.apply(void 0,i)))),gn=(n,e,t)=>(t||=e?ho.WARN:ho.VERBOSE,function(){let i,r=arguments,o,a,d;try{o=X(ur),a=X(Cl),d=X(Yn)}catch{return o2(n,t),n.apply(this,r)}for(let m=0;m<arguments.length;m++)typeof r[m]=="function"&&(e&&(i||=lr(()=>a.add())),r[m]=a2(r[m],i,d));let p=s2(()=>n.apply(this,r));return e?p instanceof rt?p.pipe(Hp(o.outsideAngular),Zi(o.insideAngular),Qm(d)):p instanceof Promise?lr(()=>new Promise((m,v)=>{a.run(()=>p).then(b=>Mt(d,()=>lr(()=>m(b))),b=>Mt(d,()=>lr(()=>v(b))))})):typeof p=="function"&&i?function(){return setTimeout(i,0),p.apply(this,arguments)}:lr(()=>p):p instanceof rt?p.pipe(Hp(o.outsideAngular),Zi(o.insideAngular)):lr(()=>p)});var dr=class{constructor(e){return e}},va=class{constructor(){return Fc()}};function l2(n){return n&&n.length===1?n[0]:new dr(po())}var Jm=new le("angularfire2._apps"),c2={provide:dr,useFactory:l2,deps:[[new yn,Jm]]},u2={provide:va,deps:[[new yn,Jm]]};function d2(n){return(e,t)=>{let i=t.get(kn);lt("angularfire",cr.full,"core"),lt("angularfire",cr.full,"app"),lt("angular",Pb.full,i.toString());let r=e.runOutsideAngular(()=>n(t));return new dr(r)}}function O1(n,...e){return ft([c2,u2,{provide:Jm,useFactory:d2(n),multi:!0,deps:[$e,Ht,ur,...e]}])}var p2=new Map,h2={activated:!1,tokenObservers:[]},m2={initialized:!1,enabled:!1};function Sn(n){return p2.get(n)||Object.assign({},h2)}function U1(){return m2}var f2="https://content-firebaseappcheck.googleapis.com/v1";var g2="exchangeDebugToken",N1={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Sj=24*60*60*1e3;var Ym=class{constructor(e,t,i,r,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=r,r>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return F(this,null,function*(){this.stop();try{this.pending=new sr,this.pending.promise.catch(t=>{}),yield v2(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new sr,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}};function v2(n){return new Promise(e=>{setTimeout(e,n)})}var _2={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bi=new Tn("appCheck","AppCheck",_2);function j1(n){if(!Sn(n).activated)throw Bi.create("use-before-activation",{appName:n.name})}function B1(i,r){return F(this,arguments,function*({url:n,body:e},t){let o={"Content-Type":"application/json"},a=t.getImmediate({optional:!0});if(a){let M=yield a.getHeartbeatsHeader();M&&(o["X-Firebase-Client"]=M)}let d={method:"POST",body:JSON.stringify(e),headers:o},p;try{p=yield fetch(n,d)}catch(M){throw Bi.create("fetch-network-error",{originalErrorMessage:M?.message})}if(p.status!==200)throw Bi.create("fetch-status-error",{httpStatus:p.status});let m;try{m=yield p.json()}catch(M){throw Bi.create("fetch-parse-error",{originalErrorMessage:M?.message})}let v=m.ttl.match(/^([\d.]+)(s)$/);if(!v||!v[2]||isNaN(Number(v[1])))throw Bi.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${m.ttl}`});let b=Number(v[1])*1e3,T=Date.now();return{token:m.token,expireTimeMillis:T+b,issuedAtTimeMillis:T}})}function q1(n,e){let{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${f2}/projects/${t}/apps/${i}:${g2}?key=${r}`,body:{debug_token:e}}}var b2="firebase-app-check-database",y2=1,Zm="firebase-app-check-store";var jc=null;function E2(){return jc||(jc=new Promise((n,e)=>{try{let t=indexedDB.open(b2,y2);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;e(Bi.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=i=>{let r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Zm,{keyPath:"compositeKey"})}}}catch(t){e(Bi.create("storage-open",{originalErrorMessage:t?.message}))}}),jc)}function C2(n,e){return w2(T2(n),e)}function w2(n,e){return F(this,null,function*(){let i=(yield E2()).transaction(Zm,"readwrite"),o=i.objectStore(Zm).put({compositeKey:n,value:e});return new Promise((a,d)=>{o.onsuccess=p=>{a()},i.onerror=p=>{var m;d(Bi.create("storage-set",{originalErrorMessage:(m=p.target.error)===null||m===void 0?void 0:m.message}))}})})}function T2(n){return`${n.options.appId}-${n.name}`}var ef=new jn("@firebase/app-check");function Xm(n,e){return ha()?C2(n,e).catch(t=>{ef.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function $1(){return U1().enabled}function z1(){return F(this,null,function*(){let n=U1();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}var I2={error:"UNKNOWN_ERROR"};function S2(n){return kc.encodeString(JSON.stringify(n),!1)}function tf(n,e=!1){return F(this,null,function*(){let t=n.app;j1(t);let i=Sn(t),r=i.token,o;if(r&&!_a(r)&&(i.token=void 0,r=void 0),!r){let p=yield i.cachedTokenPromise;p&&(_a(p)?r=p:yield Xm(t,void 0))}if(!e&&r&&_a(r))return{token:r.token};let a=!1;if($1()){i.exchangeTokenPromise||(i.exchangeTokenPromise=B1(q1(t,yield z1()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),a=!0);let p=yield i.exchangeTokenPromise;return yield Xm(t,p),i.token=p,{token:p.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),a=!0),r=yield Sn(t).exchangeTokenPromise}catch(p){p.code==="appCheck/throttled"?ef.warn(p.message):ef.error(p),o=p}let d;return r?o?_a(r)?d={token:r.token,internalError:o}:d=F1(o):(d={token:r.token},i.token=r,yield Xm(t,r)):d=F1(o),a&&P2(t,d),d})}function x2(n){return F(this,null,function*(){let e=n.app;j1(e);let{provider:t}=Sn(e);if($1()){let i=yield z1(),{token:r}=yield B1(q1(e,i),n.heartbeatServiceProvider);return{token:r}}else{let{token:i}=yield t.getToken();return{token:i}}})}function A2(n,e,t,i){let{app:r}=n,o=Sn(r),a={next:t,error:i,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&_a(o.token)){let d=o.token;Promise.resolve().then(()=>{t({token:d.token}),V1(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>V1(n))}function G1(n,e){let t=Sn(n),i=t.tokenObservers.filter(r=>r.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function V1(n){let{app:e}=n,t=Sn(e),i=t.tokenRefresher;i||(i=R2(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function R2(n){let{app:e}=n;return new Ym(()=>F(this,null,function*(){let t=Sn(e),i;if(t.token?i=yield tf(n,!0):i=yield tf(n),i.error)throw i.error;if(i.internalError)throw i.internalError}),()=>!0,()=>{let t=Sn(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5,r=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},N1.RETRIAL_MIN_WAIT,N1.RETRIAL_MAX_WAIT)}function P2(n,e){let t=Sn(n).tokenObservers;for(let i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function _a(n){return n.expireTimeMillis-Date.now()>0}function F1(n){return{token:S2(I2),error:n}}var nf=class{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:e}=Sn(this.app);for(let t of e)G1(this.app,t.next);return Promise.resolve()}};function k2(n,e){return new nf(n,e)}function D2(n){return{getToken:e=>tf(n,e),getLimitedUseToken:()=>x2(n),addTokenListener:e=>A2(n,"INTERNAL",e),removeTokenListener:e=>G1(n.app,e)}}var M2="@firebase/app-check",O2="0.8.11";var N2="app-check",L1="app-check-internal";function V2(){In(new Gt(N2,n=>{let e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return k2(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(L1).initialize()})),In(new Gt(L1,n=>{let e=n.getProvider("app-check").getImmediate();return D2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),lt(M2,O2)}V2();var F2="app-check";var Bc=class{constructor(){return mo(F2)}};var L2=["localhost","0.0.0.0","127.0.0.1"],Uj=typeof window<"u"&&L2.includes(window.location.hostname);function Z1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var eC=Z1,tC=new Tn("auth","Firebase",Z1());var Gc=new jn("@firebase/auth");function j2(n,...e){Gc.logLevel<=ke.WARN&&Gc.warn(`Auth (${uo}): ${n}`,...e)}function $c(n,...e){Gc.logLevel<=ke.ERROR&&Gc.error(`Auth (${uo}): ${n}`,...e)}function W1(n,...e){throw ff(n,...e)}function mf(n,...e){return ff(n,...e)}function nC(n,e,t){let i=Object.assign(Object.assign({},eC()),{[e]:t});return new Tn("auth","Firebase",i).create(e,{appName:n.name})}function zc(n){return nC(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ff(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tC.create(n,...e)}function je(n,e,...t){if(!n)throw ff(e,...t)}function ba(n){let e="INTERNAL ASSERTION FAILED: "+n;throw $c(e),new Error(e)}function Wc(n,e){n||ba(e)}function B2(){return H1()==="http:"||H1()==="https:"}function H1(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B2()||h1()||"connection"in navigator)?navigator.onLine:!0}function $2(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var hr=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wc(t>e,"Short delay should be less than long delay!"),this.isMobile=d1()||m1()}get(){return q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function z2(n,e){Wc(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Hc=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ba("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ba("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ba("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var G2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var W2=new hr(3e4,6e4);function iC(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function Xc(o,a,d,p){return F(this,arguments,function*(n,e,t,i,r={}){return rC(n,r,()=>F(this,null,function*(){let m={},v={};i&&(e==="GET"?v=i:m={body:JSON.stringify(i)});let b=Om(Object.assign({key:n.config.apiKey},v)).slice(1),T=yield n._getAdditionalHeaders();T["Content-Type"]="application/json",n.languageCode&&(T["X-Firebase-Locale"]=n.languageCode);let M=Object.assign({method:e,headers:T},m);return p1()||(M.referrerPolicy="no-referrer"),Hc.fetch()(oC(n,n.config.apiHost,t,b),M)}))})}function rC(n,e,t){return F(this,null,function*(){n._canInitEmulator=!1;let i=Object.assign(Object.assign({},G2),e);try{let r=new sf(n),o=yield Promise.race([t(),r.promise]);r.clearNetworkTimeout();let a=yield o.json();if("needConfirmation"in a)throw qc(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let d=o.ok?a.errorMessage:a.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(n,"credential-already-in-use",a);if(p==="EMAIL_EXISTS")throw qc(n,"email-already-in-use",a);if(p==="USER_DISABLED")throw qc(n,"user-disabled",a);let v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw nC(n,v,m);W1(n,v)}}catch(r){if(r instanceof fn)throw r;W1(n,"network-request-failed",{message:String(r)})}})}function oC(n,e,t,i){let r=`${e}${t}?${i}`;return n.config.emulator?z2(n.config,r):`${n.config.apiScheme}://${r}`}var sf=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mf(this.auth,"network-request-failed")),W2.get())})}};function qc(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let r=mf(n,e,i);return r.customData._tokenResponse=t,r}function H2(n,e){return F(this,null,function*(){return Xc(n,"POST","/v1/accounts:delete",e)})}function sC(n,e){return F(this,null,function*(){return Xc(n,"POST","/v1/accounts:lookup",e)})}function ya(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function gf(n,e=!1){return F(this,null,function*(){let t=Vt(n),i=yield t.getIdToken(e),r=aC(i);je(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:i,authTime:ya(rf(r.auth_time)),issuedAtTime:ya(rf(r.iat)),expirationTime:ya(rf(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}})}function rf(n){return Number(n)*1e3}function aC(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{let r=Dm(t);return r?JSON.parse(r):($c("Failed to decode base64 JWT payload"),null)}catch(r){return $c("Caught error parsing JWT payload as JSON",r?.toString()),null}}function K1(n){let e=aC(n);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}function af(n,e,t=!1){return F(this,null,function*(){if(t)return e;try{return yield e}catch(i){throw i instanceof fn&&K2(i)&&n.auth.currentUser===n&&(yield n.auth.signOut()),i}})}function K2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var lf=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;let r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(()=>F(this,null,function*(){yield this.iteration()}),t)}iteration(){return F(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}};var Ca=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};function Kc(n){return F(this,null,function*(){var e;let t=n.auth,i=yield n.getIdToken(),r=yield af(n,sC(t,{idToken:i}));je(r?.users.length,t,"internal-error");let o=r.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?lC(o.providerUserInfo):[],d=Q2(n.providerData,a),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!d?.length,v=p?m:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Ca(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(n,b)})}function vf(n){return F(this,null,function*(){let e=Vt(n);yield Kc(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function Q2(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function lC(n){return n.map(e=>{var{providerId:t}=e,i=Wp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}function J2(n,e){return F(this,null,function*(){let t=yield rC(n,{},()=>F(this,null,function*(){let i=Om({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,a=oC(n,r,"/v1/token",`key=${o}`),d=yield n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Hc.fetch()(a,{method:"POST",headers:d,body:i})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function X2(n,e){return F(this,null,function*(){return Xc(n,"POST","/v2/accounts:revokeToken",iC(n,e))})}var Ea=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){je(e.length!==0,"internal-error");let t=K1(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return F(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return F(this,null,function*(){let{accessToken:i,refreshToken:r,expiresIn:o}=yield J2(e,t);this.updateTokensAndExpiration(i,r,Number(o))})}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:o}=t,a=new n;return i&&(je(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(je(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(je(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return ba("not implemented")}};function qi(n,e){je(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var wa=class n{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=Wp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ca(o.createdAt||void 0,o.lastLoginAt||void 0)}getIdToken(e){return F(this,null,function*(){let t=yield af(this,this.stsTokenManager.getToken(this.auth,e));return je(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return gf(this,e)}reload(){return vf(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return F(this,null,function*(){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&(yield Kc(this)),yield this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)})}delete(){return F(this,null,function*(){if(co(this.auth.app))return Promise.reject(zc(this.auth));let e=yield this.getIdToken();return yield af(this,H2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,a,d,p,m,v;let b=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(r=t.email)!==null&&r!==void 0?r:void 0,M=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,U=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ae=(m=t.createdAt)!==null&&m!==void 0?m:void 0,ge=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:se,emailVerified:Q,isAnonymous:be,providerData:fe,stsTokenManager:P}=t;je(se&&P,e,"internal-error");let E=Ea.fromJSON(this.name,P);je(typeof se=="string",e,"internal-error"),qi(b,e.name),qi(T,e.name),je(typeof Q=="boolean",e,"internal-error"),je(typeof be=="boolean",e,"internal-error"),qi(M,e.name),qi(U,e.name),qi(L,e.name),qi(V,e.name),qi(ae,e.name),qi(ge,e.name);let I=new n({uid:se,auth:e,email:T,emailVerified:Q,displayName:b,isAnonymous:be,photoURL:U,phoneNumber:M,tenantId:L,stsTokenManager:E,createdAt:ae,lastLoginAt:ge});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(k=>Object.assign({},k))),V&&(I._redirectEventId=V),I}static _fromIdTokenResponse(e,t,i=!1){return F(this,null,function*(){let r=new Ea;r.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return yield Kc(o),o})}static _fromGetAccountInfoResponse(e,t,i){return F(this,null,function*(){let r=t.users[0];je(r.localId!==void 0,"internal-error");let o=r.providerUserInfo!==void 0?lC(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,d=new Ea;d.updateFromIdToken(i);let p=new n({uid:r.localId,auth:e,stsTokenManager:d,isAnonymous:a}),m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ca(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(p,m),p})}};var Q1=new Map;function pr(n){Wc(n instanceof Function,"Expected a class definition");let e=Q1.get(n);return e?(Wc(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Q1.set(n,e),e)}var Y2=(()=>{class n{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return F(this,null,function*(){return!0})}_set(t,i){return F(this,null,function*(){this.storage[t]=i})}_get(t){return F(this,null,function*(){let i=this.storage[t];return i===void 0?null:i})}_remove(t){return F(this,null,function*(){delete this.storage[t]})}_addListener(t,i){}_removeListener(t,i){}}return n.type="NONE",n})(),cf=Y2;function of(n,e,t){return`firebase:${n}:${e}:${t}`}var Qc=class n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:o}=this.auth;this.fullUserKey=of(this.userKey,r.apiKey,o),this.fullPersistenceKey=of("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return F(this,null,function*(){let e=yield this.persistence._get(this.fullUserKey);return e?wa._fromJSON(this.auth,e):null})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return F(this,null,function*(){if(this.persistence===e)return;let t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,i="authUser"){return F(this,null,function*(){if(!t.length)return new n(pr(cf),e,i);let r=(yield Promise.all(t.map(m=>F(this,null,function*(){if(yield m._isAvailable())return m})))).filter(m=>m),o=r[0]||pr(cf),a=of(i,e.config.apiKey,e.name),d=null;for(let m of t)try{let v=yield m._get(a);if(v){let b=wa._fromJSON(e,v);m!==o&&(d=b),o=m;break}}catch{}let p=r.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new n(o,e,i):(o=p[0],d&&(yield o._set(a,d.toJSON())),yield Promise.all(t.map(m=>F(this,null,function*(){if(m!==o)try{yield m._remove(a)}catch{}}))),new n(o,e,i))})}};function J1(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rk(e))return"Blackberry";if(ok(e))return"Webos";if(ek(e))return"Safari";if((e.includes("chrome/")||tk(e))&&!e.includes("edge/"))return"Chrome";if(ik(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Z2(n=nn()){return/firefox\//i.test(n)}function ek(n=nn()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tk(n=nn()){return/crios\//i.test(n)}function nk(n=nn()){return/iemobile/i.test(n)}function ik(n=nn()){return/android/i.test(n)}function rk(n=nn()){return/blackberry/i.test(n)}function ok(n=nn()){return/webos/i.test(n)}function cC(n,e=[]){let t;switch(n){case"Browser":t=J1(nn());break;case"Worker":t=`${J1(nn())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${uo}/${i}`}var uf=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=o=>new Promise((a,d)=>{try{let p=e(o);a(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}runMiddleware(e){return F(this,null,function*(){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)yield i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}})}};function sk(t){return F(this,arguments,function*(n,e={}){return Xc(n,"GET","/v2/passwordPolicy",iC(n,e))})}var ak=6,df=class{constructor(e){var t,i,r,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ak,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,o,a,d;let p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(r=p.containsLowercaseLetter)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsNumericCharacter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var pf=class{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jc(this),this.idTokenSubscription=new Jc(this),this.beforeStateQueue=new uf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pr(t)),this._initializationPromise=this.queue(()=>F(this,null,function*(){var i,r;if(!this._deleted&&(this.persistenceManager=yield Qc.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch{}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return F(this,null,function*(){if(this._deleted)return;let e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return F(this,null,function*(){try{let t=yield sC(this,{idToken:e}),i=yield wa._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return F(this,null,function*(){var t;if(co(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(d,d))}):this.directlySetCurrentUser(null)}let i=yield this.assertedPersistence.getCurrentUser(),r=i,o=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=r?._redirectEventId,p=yield this.tryRedirectSignIn(e);(!a||a===d)&&p?.user&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{yield this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return F(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return F(this,null,function*(){try{yield Kc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=$2()}_delete(){return F(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return F(this,null,function*(){if(co(this.app))return Promise.reject(zc(this));let t=e?Vt(e):null;return t&&je(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return F(this,null,function*(){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>F(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return F(this,null,function*(){return co(this.app)?Promise.reject(zc(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return co(this.app)?Promise.reject(zc(this)):this.queue(()=>F(this,null,function*(){yield this.assertedPersistence.setPersistence(pr(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return F(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return F(this,null,function*(){let e=yield sk(this),t=new df(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}revokeAccessToken(e){return F(this,null,function*(){if(this.currentUser){let t=yield this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),yield X2(this,i)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return F(this,null,function*(){let i=yield this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return F(this,null,function*(){if(!this.redirectPersistenceManager){let t=e&&pr(e)||this._popupRedirectResolver;je(t,this,"argument-error"),this.redirectPersistenceManager=yield Qc.create(this,[pr(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return F(this,null,function*(){var t,i;return this._isInitialized&&(yield this.queue(()=>F(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return F(this,null,function*(){if(e===this.currentUser)return this.queue(()=>F(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,d=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(d,this,"internal-error"),d.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let p=e.addObserver(t,i,r);return()=>{a=!0,p()}}else{let p=e.addObserver(t);return()=>{a=!0,p()}}}directlySetCurrentUser(e){return F(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return F(this,null,function*(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);let r=yield this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t})}_getAppCheckToken(){return F(this,null,function*(){var e;let t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t?.error&&j2(`Error while retrieving App Check token: ${t.error}`),t?.token})}};function lk(n){return Vt(n)}var Jc=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=v1(t=>this.observer=t)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ck={loadJS(){return F(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uk(n){ck=n}function dk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}function pk(n,e){let t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(pr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}var Xj=dk("rcb"),Yj=new hr(3e4,6e4);var Zj=new hr(2e3,1e4);var e5=10*60*1e3;var t5=new hr(3e4,6e4);var n5=new hr(5e3,15e3);var i5=encodeURIComponent("fac");var X1="@firebase/auth",Y1="1.8.2";var hf=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return F(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function hk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mk(n){In(new Gt("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:d}=i.options;je(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});let p={apiKey:a,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cC(n)},m=new pf(i,r,o,p);return pk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),In(new Gt("auth-internal",e=>{let t=lk(e.getProvider("auth").getImmediate());return(i=>new hf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(X1,Y1,hk(n)),lt(X1,Y1,"esm2017")}var fk=5*60,r5=c1("authIdTokenMaxAge")||fk;function gk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uk({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{let o=mf("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",gk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mk("Browser");var mD="auth";var Yc=class{constructor(){return mo(mD)}};var uC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dC={};var ci,_f;(function(){var n;function e(P,E){function I(){}I.prototype=E.prototype,P.D=E.prototype,P.prototype=new I,P.prototype.constructor=P,P.C=function(k,R,D){for(var w=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)w[Ct-2]=arguments[Ct];return E.prototype[R].apply(k,w)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(P,E,I){I||(I=0);var k=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)k[R]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(R=0;16>R;++R)k[R]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=P.g[0],I=P.g[1],R=P.g[2];var D=P.g[3],w=E+(D^I&(R^D))+k[0]+3614090360&4294967295;E=I+(w<<7&4294967295|w>>>25),w=D+(R^E&(I^R))+k[1]+3905402710&4294967295,D=E+(w<<12&4294967295|w>>>20),w=R+(I^D&(E^I))+k[2]+606105819&4294967295,R=D+(w<<17&4294967295|w>>>15),w=I+(E^R&(D^E))+k[3]+3250441966&4294967295,I=R+(w<<22&4294967295|w>>>10),w=E+(D^I&(R^D))+k[4]+4118548399&4294967295,E=I+(w<<7&4294967295|w>>>25),w=D+(R^E&(I^R))+k[5]+1200080426&4294967295,D=E+(w<<12&4294967295|w>>>20),w=R+(I^D&(E^I))+k[6]+2821735955&4294967295,R=D+(w<<17&4294967295|w>>>15),w=I+(E^R&(D^E))+k[7]+4249261313&4294967295,I=R+(w<<22&4294967295|w>>>10),w=E+(D^I&(R^D))+k[8]+1770035416&4294967295,E=I+(w<<7&4294967295|w>>>25),w=D+(R^E&(I^R))+k[9]+2336552879&4294967295,D=E+(w<<12&4294967295|w>>>20),w=R+(I^D&(E^I))+k[10]+4294925233&4294967295,R=D+(w<<17&4294967295|w>>>15),w=I+(E^R&(D^E))+k[11]+2304563134&4294967295,I=R+(w<<22&4294967295|w>>>10),w=E+(D^I&(R^D))+k[12]+1804603682&4294967295,E=I+(w<<7&4294967295|w>>>25),w=D+(R^E&(I^R))+k[13]+4254626195&4294967295,D=E+(w<<12&4294967295|w>>>20),w=R+(I^D&(E^I))+k[14]+2792965006&4294967295,R=D+(w<<17&4294967295|w>>>15),w=I+(E^R&(D^E))+k[15]+1236535329&4294967295,I=R+(w<<22&4294967295|w>>>10),w=E+(R^D&(I^R))+k[1]+4129170786&4294967295,E=I+(w<<5&4294967295|w>>>27),w=D+(I^R&(E^I))+k[6]+3225465664&4294967295,D=E+(w<<9&4294967295|w>>>23),w=R+(E^I&(D^E))+k[11]+643717713&4294967295,R=D+(w<<14&4294967295|w>>>18),w=I+(D^E&(R^D))+k[0]+3921069994&4294967295,I=R+(w<<20&4294967295|w>>>12),w=E+(R^D&(I^R))+k[5]+3593408605&4294967295,E=I+(w<<5&4294967295|w>>>27),w=D+(I^R&(E^I))+k[10]+38016083&4294967295,D=E+(w<<9&4294967295|w>>>23),w=R+(E^I&(D^E))+k[15]+3634488961&4294967295,R=D+(w<<14&4294967295|w>>>18),w=I+(D^E&(R^D))+k[4]+3889429448&4294967295,I=R+(w<<20&4294967295|w>>>12),w=E+(R^D&(I^R))+k[9]+568446438&4294967295,E=I+(w<<5&4294967295|w>>>27),w=D+(I^R&(E^I))+k[14]+3275163606&4294967295,D=E+(w<<9&4294967295|w>>>23),w=R+(E^I&(D^E))+k[3]+4107603335&4294967295,R=D+(w<<14&4294967295|w>>>18),w=I+(D^E&(R^D))+k[8]+1163531501&4294967295,I=R+(w<<20&4294967295|w>>>12),w=E+(R^D&(I^R))+k[13]+2850285829&4294967295,E=I+(w<<5&4294967295|w>>>27),w=D+(I^R&(E^I))+k[2]+4243563512&4294967295,D=E+(w<<9&4294967295|w>>>23),w=R+(E^I&(D^E))+k[7]+1735328473&4294967295,R=D+(w<<14&4294967295|w>>>18),w=I+(D^E&(R^D))+k[12]+2368359562&4294967295,I=R+(w<<20&4294967295|w>>>12),w=E+(I^R^D)+k[5]+4294588738&4294967295,E=I+(w<<4&4294967295|w>>>28),w=D+(E^I^R)+k[8]+2272392833&4294967295,D=E+(w<<11&4294967295|w>>>21),w=R+(D^E^I)+k[11]+1839030562&4294967295,R=D+(w<<16&4294967295|w>>>16),w=I+(R^D^E)+k[14]+4259657740&4294967295,I=R+(w<<23&4294967295|w>>>9),w=E+(I^R^D)+k[1]+2763975236&4294967295,E=I+(w<<4&4294967295|w>>>28),w=D+(E^I^R)+k[4]+1272893353&4294967295,D=E+(w<<11&4294967295|w>>>21),w=R+(D^E^I)+k[7]+4139469664&4294967295,R=D+(w<<16&4294967295|w>>>16),w=I+(R^D^E)+k[10]+3200236656&4294967295,I=R+(w<<23&4294967295|w>>>9),w=E+(I^R^D)+k[13]+681279174&4294967295,E=I+(w<<4&4294967295|w>>>28),w=D+(E^I^R)+k[0]+3936430074&4294967295,D=E+(w<<11&4294967295|w>>>21),w=R+(D^E^I)+k[3]+3572445317&4294967295,R=D+(w<<16&4294967295|w>>>16),w=I+(R^D^E)+k[6]+76029189&4294967295,I=R+(w<<23&4294967295|w>>>9),w=E+(I^R^D)+k[9]+3654602809&4294967295,E=I+(w<<4&4294967295|w>>>28),w=D+(E^I^R)+k[12]+3873151461&4294967295,D=E+(w<<11&4294967295|w>>>21),w=R+(D^E^I)+k[15]+530742520&4294967295,R=D+(w<<16&4294967295|w>>>16),w=I+(R^D^E)+k[2]+3299628645&4294967295,I=R+(w<<23&4294967295|w>>>9),w=E+(R^(I|~D))+k[0]+4096336452&4294967295,E=I+(w<<6&4294967295|w>>>26),w=D+(I^(E|~R))+k[7]+1126891415&4294967295,D=E+(w<<10&4294967295|w>>>22),w=R+(E^(D|~I))+k[14]+2878612391&4294967295,R=D+(w<<15&4294967295|w>>>17),w=I+(D^(R|~E))+k[5]+4237533241&4294967295,I=R+(w<<21&4294967295|w>>>11),w=E+(R^(I|~D))+k[12]+1700485571&4294967295,E=I+(w<<6&4294967295|w>>>26),w=D+(I^(E|~R))+k[3]+2399980690&4294967295,D=E+(w<<10&4294967295|w>>>22),w=R+(E^(D|~I))+k[10]+4293915773&4294967295,R=D+(w<<15&4294967295|w>>>17),w=I+(D^(R|~E))+k[1]+2240044497&4294967295,I=R+(w<<21&4294967295|w>>>11),w=E+(R^(I|~D))+k[8]+1873313359&4294967295,E=I+(w<<6&4294967295|w>>>26),w=D+(I^(E|~R))+k[15]+4264355552&4294967295,D=E+(w<<10&4294967295|w>>>22),w=R+(E^(D|~I))+k[6]+2734768916&4294967295,R=D+(w<<15&4294967295|w>>>17),w=I+(D^(R|~E))+k[13]+1309151649&4294967295,I=R+(w<<21&4294967295|w>>>11),w=E+(R^(I|~D))+k[4]+4149444226&4294967295,E=I+(w<<6&4294967295|w>>>26),w=D+(I^(E|~R))+k[11]+3174756917&4294967295,D=E+(w<<10&4294967295|w>>>22),w=R+(E^(D|~I))+k[2]+718787259&4294967295,R=D+(w<<15&4294967295|w>>>17),w=I+(D^(R|~E))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+E&4294967295,P.g[1]=P.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,P.g[2]=P.g[2]+R&4294967295,P.g[3]=P.g[3]+D&4294967295}i.prototype.u=function(P,E){E===void 0&&(E=P.length);for(var I=E-this.blockSize,k=this.B,R=this.h,D=0;D<E;){if(R==0)for(;D<=I;)r(this,P,D),D+=this.blockSize;if(typeof P=="string"){for(;D<E;)if(k[R++]=P.charCodeAt(D++),R==this.blockSize){r(this,k),R=0;break}}else for(;D<E;)if(k[R++]=P[D++],R==this.blockSize){r(this,k),R=0;break}}this.h=R,this.o+=E},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var E=1;E<P.length-8;++E)P[E]=0;var I=8*this.o;for(E=P.length-8;E<P.length;++E)P[E]=I&255,I/=256;for(this.u(P),P=Array(16),E=I=0;4>E;++E)for(var k=0;32>k;k+=8)P[I++]=this.g[E]>>>k&255;return P};function o(P,E){var I=d;return Object.prototype.hasOwnProperty.call(I,P)?I[P]:I[P]=E(P)}function a(P,E){this.h=E;for(var I=[],k=!0,R=P.length-1;0<=R;R--){var D=P[R]|0;k&&D==E||(I[R]=D,k=!1)}this.g=I}var d={};function p(P){return-128<=P&&128>P?o(P,function(E){return new a([E|0],0>E?-1:0)}):new a([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return b;if(0>P)return V(m(-P));for(var E=[],I=1,k=0;P>=I;k++)E[k]=P/I|0,I*=4294967296;return new a(E,0)}function v(P,E){if(P.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P.charAt(0)=="-")return V(v(P.substring(1),E));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(E,8)),k=b,R=0;R<P.length;R+=8){var D=Math.min(8,P.length-R),w=parseInt(P.substring(R,R+D),E);8>D?(D=m(Math.pow(E,D)),k=k.j(D).add(m(w))):(k=k.j(I),k=k.add(m(w)))}return k}var b=p(0),T=p(1),M=p(16777216);n=a.prototype,n.m=function(){if(L(this))return-V(this).m();for(var P=0,E=1,I=0;I<this.g.length;I++){var k=this.i(I);P+=(0<=k?k:4294967296+k)*E,E*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(L(this))return"-"+V(this).toString(P);for(var E=m(Math.pow(P,6)),I=this,k="";;){var R=Q(I,E).g;I=ae(I,R.j(E));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(P);if(I=R,U(I))return D+k;for(;6>D.length;)D="0"+D;k=D+k}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var E=0;E<P.g.length;E++)if(P.g[E]!=0)return!1;return!0}function L(P){return P.h==-1}n.l=function(P){return P=ae(this,P),L(P)?-1:U(P)?0:1};function V(P){for(var E=P.g.length,I=[],k=0;k<E;k++)I[k]=~P.g[k];return new a(I,~P.h).add(T)}n.abs=function(){return L(this)?V(this):this},n.add=function(P){for(var E=Math.max(this.g.length,P.g.length),I=[],k=0,R=0;R<=E;R++){var D=k+(this.i(R)&65535)+(P.i(R)&65535),w=(D>>>16)+(this.i(R)>>>16)+(P.i(R)>>>16);k=w>>>16,D&=65535,w&=65535,I[R]=w<<16|D}return new a(I,I[I.length-1]&-2147483648?-1:0)};function ae(P,E){return P.add(V(E))}n.j=function(P){if(U(this)||U(P))return b;if(L(this))return L(P)?V(this).j(V(P)):V(V(this).j(P));if(L(P))return V(this.j(V(P)));if(0>this.l(M)&&0>P.l(M))return m(this.m()*P.m());for(var E=this.g.length+P.g.length,I=[],k=0;k<2*E;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(var R=0;R<P.g.length;R++){var D=this.i(k)>>>16,w=this.i(k)&65535,Ct=P.i(R)>>>16,_i=P.i(R)&65535;I[2*k+2*R]+=w*_i,ge(I,2*k+2*R),I[2*k+2*R+1]+=D*_i,ge(I,2*k+2*R+1),I[2*k+2*R+1]+=w*Ct,ge(I,2*k+2*R+1),I[2*k+2*R+2]+=D*Ct,ge(I,2*k+2*R+2)}for(k=0;k<E;k++)I[k]=I[2*k+1]<<16|I[2*k];for(k=E;k<2*E;k++)I[k]=0;return new a(I,0)};function ge(P,E){for(;(P[E]&65535)!=P[E];)P[E+1]+=P[E]>>>16,P[E]&=65535,E++}function se(P,E){this.g=P,this.h=E}function Q(P,E){if(U(E))throw Error("division by zero");if(U(P))return new se(b,b);if(L(P))return E=Q(V(P),E),new se(V(E.g),V(E.h));if(L(E))return E=Q(P,V(E)),new se(V(E.g),E.h);if(30<P.g.length){if(L(P)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var I=T,k=E;0>=k.l(P);)I=be(I),k=be(k);var R=fe(I,1),D=fe(k,1);for(k=fe(k,2),I=fe(I,2);!U(k);){var w=D.add(k);0>=w.l(P)&&(R=R.add(I),D=w),k=fe(k,1),I=fe(I,1)}return E=ae(P,R.j(E)),new se(R,E)}for(R=b;0<=P.l(E);){for(I=Math.max(1,Math.floor(P.m()/E.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),D=m(I),w=D.j(E);L(w)||0<w.l(P);)I-=k,D=m(I),w=D.j(E);U(D)&&(D=T),R=R.add(D),P=ae(P,w)}return new se(R,P)}n.A=function(P){return Q(this,P).h},n.and=function(P){for(var E=Math.max(this.g.length,P.g.length),I=[],k=0;k<E;k++)I[k]=this.i(k)&P.i(k);return new a(I,this.h&P.h)},n.or=function(P){for(var E=Math.max(this.g.length,P.g.length),I=[],k=0;k<E;k++)I[k]=this.i(k)|P.i(k);return new a(I,this.h|P.h)},n.xor=function(P){for(var E=Math.max(this.g.length,P.g.length),I=[],k=0;k<E;k++)I[k]=this.i(k)^P.i(k);return new a(I,this.h^P.h)};function be(P){for(var E=P.g.length+1,I=[],k=0;k<E;k++)I[k]=P.i(k)<<1|P.i(k-1)>>>31;return new a(I,P.h)}function fe(P,E){var I=E>>5;E%=32;for(var k=P.g.length-I,R=[],D=0;D<k;D++)R[D]=0<E?P.i(D+I)>>>E|P.i(D+I+1)<<32-E:P.i(D+I);return new a(R,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,_f=dC.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=m,a.fromString=v,ci=dC.Integer=a}).apply(typeof uC<"u"?uC:typeof self<"u"?self:typeof window<"u"?window:{});var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ui={};var bf,fD,fo,yf,Ta,eu,Ef,Cf,wf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,f){return u==Array.prototype||u==Object.prototype||(u[h]=f.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zc=="object"&&Zc];for(var h=0;h<u.length;++h){var f=u[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=t(this);function r(u,h){if(h)e:{var f=i;u=u.split(".");for(var _=0;_<u.length-1;_++){var N=u[_];if(!(N in f))break e;f=f[N]}u=u[u.length-1],_=f[u],h=h(_),h!=_&&h!=null&&e(f,u,{configurable:!0,writable:!0,value:h})}}function o(u,h){u instanceof String&&(u+="");var f=0,_=!1,N={next:function(){if(!_&&f<u.length){var B=f++;return{value:h(B,u[B]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(u){return u||function(){return o(this,function(h,f){return f})}});var a=a||{},d=this||self;function p(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function m(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function v(u,h,f){return u.call.apply(u.bind,arguments)}function b(u,h,f){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),u.apply(h,N)}}return function(){return u.apply(h,arguments)}}function T(u,h,f){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,T.apply(null,arguments)}function M(u,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function U(u,h){function f(){}f.prototype=h.prototype,u.aa=h.prototype,u.prototype=new f,u.prototype.constructor=u,u.Qb=function(_,N,B){for(var re=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)re[ze-2]=arguments[ze];return h.prototype[N].apply(_,re)}}function L(u){let h=u.length;if(0<h){let f=Array(h);for(let _=0;_<h;_++)f[_]=u[_];return f}return[]}function V(u,h){for(let f=1;f<arguments.length;f++){let _=arguments[f];if(p(_)){let N=u.length||0,B=_.length||0;u.length=N+B;for(let re=0;re<B;re++)u[N+re]=_[re]}else u.push(_)}}class ae{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function ge(u){return/^[\s\xa0]*$/.test(u)}function se(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function Q(u){return Q[" "](u),u}Q[" "]=function(){};var be=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function fe(u,h,f){for(let _ in u)h.call(f,u[_],_,u)}function P(u,h){for(let f in u)h.call(void 0,u[f],f,u)}function E(u){let h={};for(let f in u)h[f]=u[f];return h}let I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,h){let f,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(f in _)u[f]=_[f];for(let B=0;B<I.length;B++)f=I[B],Object.prototype.hasOwnProperty.call(_,f)&&(u[f]=_[f])}}function R(u){var h=1;u=u.split(":");let f=[];for(;0<h&&u.length;)f.push(u.shift()),h--;return u.length&&f.push(u.join(":")),f}function D(u){d.setTimeout(()=>{throw u},0)}function w(){var u=vp;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class Ct{constructor(){this.h=this.g=null}add(h,f){let _=_i.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var _i=new ae(()=>new gp,u=>u.reset());class gp{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Qo,Jo=!1,vp=new Ct,vv=()=>{let u=d.Promise.resolve(void 0);Qo=()=>{u.then(SI)}};var SI=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(f){D(f)}var h=_i;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}Jo=!1};function bi(){this.s=this.s,this.C=this.C}bi.prototype.s=!1,bi.prototype.ma=function(){this.s||(this.s=!0,this.N())},bi.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function St(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var xI=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{let f=()=>{};d.addEventListener("test",f,h),d.removeEventListener("test",f,h)}catch{}return u}();function Xo(u,h){if(St.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var f=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(be){e:{try{Q(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=u.fromElement:f=="mouseout"&&(h=u.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:AI[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Xo.aa.h.call(this)}}U(Xo,St);var AI={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),RI=0;function PI(u,h,f,_,N){this.listener=u,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=N,this.key=++RI,this.da=this.fa=!1}function el(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function tl(u){this.src=u,this.g={},this.h=0}tl.prototype.add=function(u,h,f,_,N){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var re=bp(u,h,_,N);return-1<re?(h=u[re],f||(h.fa=!1)):(h=new PI(h,this.src,B,!!_,N),h.fa=f,u.push(h)),h};function _p(u,h){var f=h.type;if(f in u.g){var _=u.g[f],N=Array.prototype.indexOf.call(_,h,void 0),B;(B=0<=N)&&Array.prototype.splice.call(_,N,1),B&&(el(h),u.g[f].length==0&&(delete u.g[f],u.h--))}}function bp(u,h,f,_){for(var N=0;N<u.length;++N){var B=u[N];if(!B.da&&B.listener==h&&B.capture==!!f&&B.ha==_)return N}return-1}var yp="closure_lm_"+(1e6*Math.random()|0),Ep={};function _v(u,h,f,_,N){if(_&&_.once)return yv(u,h,f,_,N);if(Array.isArray(h)){for(var B=0;B<h.length;B++)_v(u,h[B],f,_,N);return null}return f=Ip(f),u&&u[Yo]?u.K(h,f,m(_)?!!_.capture:!!_,N):bv(u,h,f,!1,_,N)}function bv(u,h,f,_,N,B){if(!h)throw Error("Invalid event type");var re=m(N)?!!N.capture:!!N,ze=wp(u);if(ze||(u[yp]=ze=new tl(u)),f=ze.add(h,f,_,re,B),f.proxy)return f;if(_=kI(),f.proxy=_,_.src=u,_.listener=f,u.addEventListener)xI||(N=re),N===void 0&&(N=!1),u.addEventListener(h.toString(),_,N);else if(u.attachEvent)u.attachEvent(Cv(h.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function kI(){function u(f){return h.call(u.src,u.listener,f)}let h=DI;return u}function yv(u,h,f,_,N){if(Array.isArray(h)){for(var B=0;B<h.length;B++)yv(u,h[B],f,_,N);return null}return f=Ip(f),u&&u[Yo]?u.L(h,f,m(_)?!!_.capture:!!_,N):bv(u,h,f,!0,_,N)}function Ev(u,h,f,_,N){if(Array.isArray(h))for(var B=0;B<h.length;B++)Ev(u,h[B],f,_,N);else _=m(_)?!!_.capture:!!_,f=Ip(f),u&&u[Yo]?(u=u.i,h=String(h).toString(),h in u.g&&(B=u.g[h],f=bp(B,f,_,N),-1<f&&(el(B[f]),Array.prototype.splice.call(B,f,1),B.length==0&&(delete u.g[h],u.h--)))):u&&(u=wp(u))&&(h=u.g[h.toString()],u=-1,h&&(u=bp(h,f,_,N)),(f=-1<u?h[u]:null)&&Cp(f))}function Cp(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Yo])_p(h.i,u);else{var f=u.type,_=u.proxy;h.removeEventListener?h.removeEventListener(f,_,u.capture):h.detachEvent?h.detachEvent(Cv(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=wp(h))?(_p(f,u),f.h==0&&(f.src=null,h[yp]=null)):el(u)}}}function Cv(u){return u in Ep?Ep[u]:Ep[u]="on"+u}function DI(u,h){if(u.da)u=!0;else{h=new Xo(h,this);var f=u.listener,_=u.ha||u.src;u.fa&&Cp(u),u=f.call(_,h)}return u}function wp(u){return u=u[yp],u instanceof tl?u:null}var Tp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ip(u){return typeof u=="function"?u:(u[Tp]||(u[Tp]=function(h){return u.handleEvent(h)}),u[Tp])}function xt(){bi.call(this),this.i=new tl(this),this.M=this,this.F=null}U(xt,bi),xt.prototype[Yo]=!0,xt.prototype.removeEventListener=function(u,h,f,_){Ev(this,u,h,f,_)};function Ut(u,h){var f,_=u.F;if(_)for(f=[];_;_=_.F)f.push(_);if(u=u.M,_=h.type||h,typeof h=="string")h=new St(h,u);else if(h instanceof St)h.target=h.target||u;else{var N=h;h=new St(_,u),k(h,N)}if(N=!0,f)for(var B=f.length-1;0<=B;B--){var re=h.g=f[B];N=nl(re,_,!0,h)&&N}if(re=h.g=u,N=nl(re,_,!0,h)&&N,N=nl(re,_,!1,h)&&N,f)for(B=0;B<f.length;B++)re=h.g=f[B],N=nl(re,_,!1,h)&&N}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var f=u.g[h],_=0;_<f.length;_++)el(f[_]);delete u.g[h],u.h--}}this.F=null},xt.prototype.K=function(u,h,f,_){return this.i.add(String(u),h,!1,f,_)},xt.prototype.L=function(u,h,f,_){return this.i.add(String(u),h,!0,f,_)};function nl(u,h,f,_){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,B=0;B<h.length;++B){var re=h[B];if(re&&!re.da&&re.capture==f){var ze=re.listener,wt=re.ha||re.src;re.fa&&_p(u.i,re),N=ze.call(wt,_)!==!1&&N}}return N&&!_.defaultPrevented}function wv(u,h,f){if(typeof u=="function")f&&(u=T(u,f));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:d.setTimeout(u,h||0)}function Tv(u){u.g=wv(()=>{u.g=null,u.i&&(u.i=!1,Tv(u))},u.l);let h=u.h;u.h=null,u.m.apply(null,h)}class MI extends bi{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tv(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(u){bi.call(this),this.h=u,this.g={}}U(Zo,bi);var Iv=[];function Sv(u){fe(u.g,function(h,f){this.g.hasOwnProperty(f)&&Cp(h)},u),u.g={}}Zo.prototype.N=function(){Zo.aa.N.call(this),Sv(this)},Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sp=d.JSON.stringify,OI=d.JSON.parse,NI=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function xp(){}xp.prototype.h=null;function xv(u){return u.h||(u.h=u.i())}function Av(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ap(){St.call(this,"d")}U(Ap,St);function Rp(){St.call(this,"c")}U(Rp,St);var Qi={},Rv=null;function il(){return Rv=Rv||new xt}Qi.La="serverreachability";function Pv(u){St.call(this,Qi.La,u)}U(Pv,St);function ts(u){let h=il();Ut(h,new Pv(h))}Qi.STAT_EVENT="statevent";function kv(u,h){St.call(this,Qi.STAT_EVENT,u),this.stat=h}U(kv,St);function jt(u){let h=il();Ut(h,new kv(h,u))}Qi.Ma="timingevent";function Dv(u,h){St.call(this,Qi.Ma,u),this.size=h}U(Dv,St);function ns(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},h)}function is(){this.g=!0}is.prototype.xa=function(){this.g=!1};function VI(u,h,f,_,N,B){u.info(function(){if(u.g)if(B)for(var re="",ze=B.split("&"),wt=0;wt<ze.length;wt++){var Ue=ze[wt].split("=");if(1<Ue.length){var At=Ue[0];Ue=Ue[1];var Rt=At.split("_");re=2<=Rt.length&&Rt[1]=="type"?re+(At+"="+Ue+"&"):re+(At+"=redacted&")}}else re=null;else re=B;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+f+`
`+re})}function FI(u,h,f,_,N,B,re){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+f+`
`+B+" "+re})}function Sr(u,h,f,_){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+UI(u,f)+(_?" "+_:"")})}function LI(u,h){u.info(function(){return"TIMEOUT: "+h})}is.prototype.info=function(){};function UI(u,h){if(!u.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(u=0;u<f.length;u++)if(Array.isArray(f[u])){var _=f[u];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var B=N[0];if(B!="noop"&&B!="stop"&&B!="close")for(var re=1;re<N.length;re++)N[re]=""}}}}return Sp(f)}catch{return h}}var rl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pp;function ol(){}U(ol,xp),ol.prototype.g=function(){return new XMLHttpRequest},ol.prototype.i=function(){return{}},Pp=new ol;function yi(u,h,f,_){this.j=u,this.i=h,this.l=f,this.R=_||1,this.U=new Zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ov}function Ov(){this.i=null,this.g="",this.h=!1}var Nv={},kp={};function Dp(u,h,f){u.L=1,u.v=cl(Qn(h)),u.m=f,u.P=!0,Vv(u,null)}function Vv(u,h){u.F=Date.now(),sl(u),u.A=Qn(u.v);var f=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),Jv(f.i,"t",_),u.C=0,f=u.j.J,u.h=new Ov,u.g=m_(u.j,f?h:null,!u.m),0<u.O&&(u.M=new MI(T(u.Y,u,u.g),u.O)),h=u.U,f=u.g,_=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(Iv[0]=N.toString()),N=Iv);for(var B=0;B<N.length;B++){var re=_v(f,N[B],_||h.handleEvent,!1,h.h||h);if(!re)break;h.g[re.key]=re}h=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),ts(),VI(u.i,u.u,u.A,u.l,u.R,u.m)}yi.prototype.ca=function(u){u=u.target;let h=this.M;h&&Jn(u)==3?h.j():this.Y(u)},yi.prototype.Y=function(u){try{if(u==this.g)e:{let Rt=Jn(this.g);var h=this.g.Ba();let Rr=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||i_(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=Rr?ts(3):ts(2)),Mp(this);var f=this.g.Z();this.X=f;t:if(Fv(this)){var _=i_(this.g);u="";var N=_.length,B=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ji(this),rs(this);var re="";break t}this.h.i=new d.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,u+=this.h.i.decode(_[h],{stream:!(B&&h==N-1)});_.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=f==200,FI(this.i,this.u,this.A,this.l,this.R,Rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,wt=this.g;if((ze=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(ze)){var Ue=ze;break t}}Ue=null}if(f=Ue)Sr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Op(this,f);else{this.o=!1,this.s=3,jt(12),Ji(this),rs(this);break e}}if(this.P){f=!0;let bn;for(;!this.J&&this.C<re.length;)if(bn=jI(this,re),bn==kp){Rt==4&&(this.s=4,jt(14),f=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==Nv){this.s=4,jt(15),Sr(this.i,this.l,re,"[Invalid Chunk]"),f=!1;break}else Sr(this.i,this.l,bn,null),Op(this,bn);if(Fv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||re.length!=0||this.h.h||(this.s=1,jt(16),f=!1),this.o=this.o&&f,!f)Sr(this.i,this.l,re,"[Invalid Chunked Response]"),Ji(this),rs(this);else if(0<re.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),jp(At),At.M=!0,jt(11))}}else Sr(this.i,this.l,re,null),Op(this,re);Rt==4&&Ji(this),this.o&&!this.J&&(Rt==4?u_(this.j,this):(this.o=!1,sl(this)))}else iS(this.g),f==400&&0<re.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),Ji(this),rs(this)}}}catch{}finally{}};function Fv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jI(u,h){var f=u.C,_=h.indexOf(`
`,f);return _==-1?kp:(f=Number(h.substring(f,_)),isNaN(f)?Nv:(_+=1,_+f>h.length?kp:(h=h.slice(_,_+f),u.C=_+f,h)))}yi.prototype.cancel=function(){this.J=!0,Ji(this)};function sl(u){u.S=Date.now()+u.I,Lv(u,u.I)}function Lv(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ns(T(u.ba,u),h)}function Mp(u){u.B&&(d.clearTimeout(u.B),u.B=null)}yi.prototype.ba=function(){this.B=null;let u=Date.now();0<=u-this.S?(LI(this.i,this.A),this.L!=2&&(ts(),jt(17)),Ji(this),this.s=2,rs(this)):Lv(this,this.S-u)};function rs(u){u.j.G==0||u.J||u_(u.j,u)}function Ji(u){Mp(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,Sv(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Op(u,h){try{var f=u.j;if(f.G!=0&&(f.g==u||Np(f.h,u))){if(!u.K&&Np(f.h,u)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<u.F)ml(f),pl(f);else break e;Up(f),jt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=ns(T(f.Za,f),6e3));if(1>=Bv(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yi(f,11)}else if((u.K||f.g==u)&&ml(f),!ge(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let Ue=N[h];if(f.T=Ue[0],Ue=Ue[1],f.G==2)if(Ue[0]=="c"){f.K=Ue[1],f.ia=Ue[2];let At=Ue[3];At!=null&&(f.la=At,f.j.info("VER="+f.la));let Rt=Ue[4];Rt!=null&&(f.Aa=Rt,f.j.info("SVER="+f.Aa));let Rr=Ue[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(_=1.5*Rr,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;let bn=u.g;if(bn){let gl=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var B=_.h;B.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Vp(B,B.h),B.h=null))}if(_.D){let Bp=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bp&&(_.ya=Bp,Ke(_.I,_.D,Bp))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-u.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var re=u;if(_.qa=h_(_,_.J?_.ia:null,_.W),re.K){qv(_.h,re);var ze=re,wt=_.L;wt&&(ze.I=wt),ze.B&&(Mp(ze),sl(ze)),_.g=re}else l_(_);0<f.i.length&&hl(f)}else Ue[0]!="stop"&&Ue[0]!="close"||Yi(f,7);else f.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Yi(f,7):Lp(f):Ue[0]!="noop"&&f.l&&f.l.ta(Ue),f.v=0)}}ts(4)}catch{}}var BI=class{constructor(u,h){this.g=u,this.map=h}};function Uv(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Bv(u){return u.h?1:u.g?u.g.size:0}function Np(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Vp(u,h){u.g?u.g.add(h):u.h=h}function qv(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Uv.prototype.cancel=function(){if(this.i=$v(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let u of this.g.values())u.cancel();this.g.clear()}};function $v(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(let f of u.g.values())h=h.concat(f.D);return h}return L(u.i)}function qI(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var h=[],f=u.length,_=0;_<f;_++)h.push(u[_]);return h}h=[],f=0;for(_ in u)h[f++]=u[_];return h}function $I(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var h=[];u=u.length;for(var f=0;f<u;f++)h.push(f);return h}h=[],f=0;for(let _ in u)h[f++]=_;return h}}}function zv(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var f=$I(u),_=qI(u),N=_.length,B=0;B<N;B++)h.call(void 0,_[B],f&&f[B],u)}var Gv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zI(u,h){if(u){u=u.split("&");for(var f=0;f<u.length;f++){var _=u[f].indexOf("="),N=null;if(0<=_){var B=u[f].substring(0,_);N=u[f].substring(_+1)}else B=u[f];h(B,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Xi){this.h=u.h,al(this,u.j),this.o=u.o,this.g=u.g,ll(this,u.s),this.l=u.l;var h=u.i,f=new as;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Wv(this,f),this.m=u.m}else u&&(h=String(u).match(Gv))?(this.h=!1,al(this,h[1]||"",!0),this.o=os(h[2]||""),this.g=os(h[3]||"",!0),ll(this,h[4]),this.l=os(h[5]||"",!0),Wv(this,h[6]||"",!0),this.m=os(h[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Xi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(ss(h,Hv,!0),":");var f=this.g;return(f||h=="file")&&(u.push("//"),(h=this.o)&&u.push(ss(h,Hv,!0),"@"),u.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&u.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&u.push("/"),u.push(ss(f,f.charAt(0)=="/"?HI:WI,!0))),(f=this.i.toString())&&u.push("?",f),(f=this.m)&&u.push("#",ss(f,QI)),u.join("")};function Qn(u){return new Xi(u)}function al(u,h,f){u.j=f?os(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function ll(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function Wv(u,h,f){h instanceof as?(u.i=h,JI(u.i,u.h)):(f||(h=ss(h,KI)),u.i=new as(h,u.h))}function Ke(u,h,f){u.i.set(h,f)}function cl(u){return Ke(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function os(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ss(u,h,f){return typeof u=="string"?(u=encodeURI(u).replace(h,GI),f&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function GI(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hv=/[#\/\?@]/g,WI=/[#\?:]/g,HI=/[#\?]/g,KI=/[#\?@]/g,QI=/#/g;function as(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Ei(u){u.g||(u.g=new Map,u.h=0,u.i&&zI(u.i,function(h,f){u.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=as.prototype,n.add=function(u,h){Ei(this),this.i=null,u=xr(this,u);var f=this.g.get(u);return f||this.g.set(u,f=[]),f.push(h),this.h+=1,this};function Kv(u,h){Ei(u),h=xr(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function Qv(u,h){return Ei(u),h=xr(u,h),u.g.has(h)}n.forEach=function(u,h){Ei(this),this.g.forEach(function(f,_){f.forEach(function(N){u.call(h,N,_,this)},this)},this)},n.na=function(){Ei(this);let u=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){let N=u[_];for(let B=0;B<N.length;B++)f.push(h[_])}return f},n.V=function(u){Ei(this);let h=[];if(typeof u=="string")Qv(this,u)&&(h=h.concat(this.g.get(xr(this,u))));else{u=Array.from(this.g.values());for(let f=0;f<u.length;f++)h=h.concat(u[f])}return h},n.set=function(u,h){return Ei(this),this.i=null,u=xr(this,u),Qv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},n.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function Jv(u,h,f){Kv(u,h),0<f.length&&(u.i=null,u.g.set(xr(u,h),L(f)),u.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let u=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];let B=encodeURIComponent(String(_)),re=this.V(_);for(_=0;_<re.length;_++){var N=B;re[_]!==""&&(N+="="+encodeURIComponent(String(re[_]))),u.push(N)}}return this.i=u.join("&")};function xr(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function JI(u,h){h&&!u.j&&(Ei(u),u.i=null,u.g.forEach(function(f,_){var N=_.toLowerCase();_!=N&&(Kv(this,_),Jv(this,N,f))},u)),u.j=h}function XI(u,h){let f=new is;if(d.Image){let _=new Image;_.onload=M(Ci,f,"TestLoadImage: loaded",!0,h,_),_.onerror=M(Ci,f,"TestLoadImage: error",!1,h,_),_.onabort=M(Ci,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=M(Ci,f,"TestLoadImage: timeout",!1,h,_),d.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else h(!1)}function YI(u,h){let f=new is,_=new AbortController,N=setTimeout(()=>{_.abort(),Ci(f,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:_.signal}).then(B=>{clearTimeout(N),B.ok?Ci(f,"TestPingServer: ok",!0,h):Ci(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Ci(f,"TestPingServer: error",!1,h)})}function Ci(u,h,f,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(f)}catch{}}function ZI(){this.g=new NI}function eS(u,h,f){let _=f||"";try{zv(u,function(N,B){let re=N;m(N)&&(re=Sp(N)),h.push(_+B+"="+encodeURIComponent(re))})}catch(N){throw h.push(_+"type="+encodeURIComponent("_badmap")),N}}function ls(u){this.l=u.Ub||null,this.j=u.eb||!1}U(ls,xp),ls.prototype.g=function(){return new ul(this.l,this.j)},ls.prototype.i=function(u){return function(){return u}}({});function ul(u,h){xt.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ul,xt),n=ul.prototype,n.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,us(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||d).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?cs(this):us(this),this.readyState==3&&Xv(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,cs(this))},n.Qa=function(u){this.g&&(this.response=u,cs(this))},n.ga=function(){this.g&&cs(this)};function cs(u){u.readyState=4,u.l=null,u.j=null,u.v=null,us(u)}n.setRequestHeader=function(u,h){this.u.append(u,h)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let u=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,u.push(f[0]+": "+f[1]),f=h.next();return u.join(`\r
`)};function us(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Yv(u){let h="";return fe(u,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Fp(u,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Yv(f),typeof u=="string"?f!=null&&encodeURIComponent(String(f)):Ke(u,h,f))}function Ze(u){xt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ze,xt);var tS=/^https?$/i,nS=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pp.g(),this.v=this.o?xv(this.o):xv(Pp),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(B){Zv(this,B);return}if(u=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)f.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(let B of _.keys())f.set(B,_.get(B));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(B=>B.toLowerCase()=="content-type"),N=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(nS,h,void 0))||_||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[B,re]of f)this.g.setRequestHeader(B,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{n_(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Zv(this,B)}};function Zv(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,e_(u),dl(u)}function e_(u){u.A||(u.A=!0,Ut(u,"complete"),Ut(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ut(this,"complete"),Ut(this,"abort"),dl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dl(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?t_(this):this.bb())},n.bb=function(){t_(this)};function t_(u){if(u.h&&typeof a<"u"&&(!u.v[1]||Jn(u)!=4||u.Z()!=2)){if(u.u&&Jn(u)==4)wv(u.Ea,0,u);else if(Ut(u,"readystatechange"),Jn(u)==4){u.h=!1;try{let re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=re===0){var N=String(u.D).match(Gv)[1]||null;!N&&d.self&&d.self.location&&(N=d.self.location.protocol.slice(0,-1)),_=!tS.test(N?N.toLowerCase():"")}f=_}if(f)Ut(u,"complete"),Ut(u,"success");else{u.m=6;try{var B=2<Jn(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",e_(u)}}finally{dl(u)}}}}function dl(u,h){if(u.g){n_(u);let f=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Ut(u,"ready");try{f.onreadystatechange=_}catch{}}}function n_(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),OI(h)}};function i_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function iS(u){let h={};u=(u.g&&2<=Jn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(ge(u[_]))continue;var f=R(u[_]);let N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();let B=h[N]||[];h[N]=B,B.push(f)}P(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(u,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[u]||h}function r_(u){this.Aa=0,this.i=[],this.j=new is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,u),this.cb=ds("retryDelaySeedMs",1e4,u),this.Wa=ds("forwardChannelMaxRetries",2,u),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Uv(u&&u.concurrentRequestLimit),this.Da=new ZI,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=r_.prototype,n.la=8,n.G=1,n.connect=function(u,h,f,_){jt(0),this.W=u,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=h_(this,null,this.W),hl(this)};function Lp(u){if(o_(u),u.G==3){var h=u.U++,f=Qn(u.I);if(Ke(f,"SID",u.K),Ke(f,"RID",h),Ke(f,"TYPE","terminate"),ps(u,f),h=new yi(u,u.j,h),h.L=2,h.v=cl(Qn(f)),f=!1,d.navigator&&d.navigator.sendBeacon)try{f=d.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&d.Image&&(new Image().src=h.v,f=!0),f||(h.g=m_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),sl(h)}p_(u)}function pl(u){u.g&&(jp(u),u.g.cancel(),u.g=null)}function o_(u){pl(u),u.u&&(d.clearTimeout(u.u),u.u=null),ml(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function hl(u){if(!jv(u.h)&&!u.s){u.s=!0;var h=u.Ga;Qo||vv(),Jo||(Qo(),Jo=!0),vp.add(h,u),u.B=0}}function rS(u,h){return Bv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ns(T(u.Ga,u,h),d_(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;let N=new yi(this,this.j,u),B=this.o;if(this.S&&(B?(B=E(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(N.H=B,B=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=a_(this,N,h),f=Qn(this.I),Ke(f,"RID",u),Ke(f,"CVER",22),this.D&&Ke(f,"X-HTTP-Session-Id",this.D),ps(this,f),B&&(this.O?h="headers="+encodeURIComponent(String(Yv(B)))+"&"+h:this.m&&Fp(f,this.m,B)),Vp(this.h,N),this.Ua&&Ke(f,"TYPE","init"),this.P?(Ke(f,"$req",h),Ke(f,"SID","null"),N.T=!0,Dp(N,f,null)):Dp(N,f,h),this.G=2}}else this.G==3&&(u?s_(this,u):this.i.length==0||jv(this.h)||s_(this))};function s_(u,h){var f;h?f=h.l:f=u.U++;let _=Qn(u.I);Ke(_,"SID",u.K),Ke(_,"RID",f),Ke(_,"AID",u.T),ps(u,_),u.m&&u.o&&Fp(_,u.m,u.o),f=new yi(u,u.j,f,u.B+1),u.m===null&&(f.H=u.o),h&&(u.i=h.D.concat(u.i)),h=a_(u,f,1e3),f.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Vp(u.h,f),Dp(f,_,h)}function ps(u,h){u.H&&fe(u.H,function(f,_){Ke(h,_,f)}),u.l&&zv({},function(f,_){Ke(h,_,f)})}function a_(u,h,f){f=Math.min(u.i.length,f);var _=u.l?T(u.l.Na,u.l,u):null;e:{var N=u.i;let B=-1;for(;;){let re=["count="+f];B==-1?0<f?(B=N[0].g,re.push("ofs="+B)):B=0:re.push("ofs="+B);let ze=!0;for(let wt=0;wt<f;wt++){let Ue=N[wt].g,At=N[wt].map;if(Ue-=B,0>Ue)B=Math.max(0,N[wt].g-100),ze=!1;else try{eS(At,re,"req"+Ue+"_")}catch{_&&_(At)}}if(ze){_=re.join("&");break e}}}return u=u.i.splice(0,f),h.D=u,_}function l_(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Qo||vv(),Jo||(Qo(),Jo=!0),vp.add(h,u),u.v=0}}function Up(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ns(T(u.Fa,u),d_(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,c_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ns(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),pl(this),c_(this))};function jp(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function c_(u){u.g=new yi(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=Qn(u.qa);Ke(h,"RID","rpc"),Ke(h,"SID",u.K),Ke(h,"AID",u.T),Ke(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ke(h,"TO",u.ja),Ke(h,"TYPE","xmlhttp"),ps(u,h),u.m&&u.o&&Fp(h,u.m,u.o),u.L&&(u.g.I=u.L);var f=u.g;u=u.ia,f.L=1,f.v=cl(Qn(h)),f.m=null,f.P=!0,Vv(f,u)}n.Za=function(){this.C!=null&&(this.C=null,pl(this),Up(this),jt(19))};function ml(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function u_(u,h){var f=null;if(u.g==h){ml(u),jp(u),u.g=null;var _=2}else if(Np(u.h,h))f=h.D,qv(u.h,h),_=1;else return;if(u.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=u.B;_=il(),Ut(_,new Dv(_,f)),hl(u)}else l_(u);else if(N=h.s,N==3||N==0&&0<h.X||!(_==1&&rS(u,h)||_==2&&Up(u)))switch(f&&0<f.length&&(h=u.h,h.i=h.i.concat(f)),N){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function d_(u,h){let f=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(f*=2),f*h}function Yi(u,h){if(u.j.info("Error code "+h),h==2){var f=T(u.fb,u),_=u.Xa;let N=!_;_=new Xi(_||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||al(_,"https"),cl(_),N?XI(_.toString(),f):YI(_.toString(),f)}else jt(2);u.G=0,u.l&&u.l.sa(h),p_(u),o_(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function p_(u){if(u.G=0,u.ka=[],u.l){let h=$v(u.h);(h.length!=0||u.i.length!=0)&&(V(u.ka,h),V(u.ka,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.ra()}}function h_(u,h,f){var _=f instanceof Xi?Qn(f):new Xi(f);if(_.g!="")h&&(_.g=h+"."+_.g),ll(_,_.s);else{var N=d.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var B=new Xi(null);_&&al(B,_),h&&(B.g=h),N&&ll(B,N),f&&(B.l=f),_=B}return f=u.D,h=u.ya,f&&h&&Ke(_,f,h),Ke(_,"VER",u.la),ps(u,_),_}function m_(u,h,f){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new Ze(new ls({eb:f})):new Ze(u.pa),h.Ha(u.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function f_(){}n=f_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fl(){}fl.prototype.g=function(u,h){return new Qt(u,h)};function Qt(u,h){xt.call(this),this.g=new r_(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!ge(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!ge(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new Ar(this)}U(Qt,xt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Lp(this.g)},Qt.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var f={};f.__data__=u,u=f}else this.u&&(f={},f.__data__=Sp(u),u=f);h.i.push(new BI(h.Ya++,u)),h.G==3&&hl(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Lp(this.g),delete this.g,Qt.aa.N.call(this)};function g_(u){Ap.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(let f in h){u=f;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}U(g_,Ap);function v_(){Rp.call(this),this.status=1}U(v_,Rp);function Ar(u){this.g=u}U(Ar,f_),Ar.prototype.ua=function(){Ut(this.g,"a")},Ar.prototype.ta=function(u){Ut(this.g,new g_(u))},Ar.prototype.sa=function(u){Ut(this.g,new v_)},Ar.prototype.ra=function(){Ut(this.g,"b")},fl.prototype.createWebChannel=fl.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,wf=ui.createWebChannelTransport=function(){return new fl},Cf=ui.getStatEventTarget=function(){return il()},Ef=ui.Event=Qi,eu=ui.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rl.NO_ERROR=0,rl.TIMEOUT=8,rl.HTTP_ERROR=6,Ta=ui.ErrorCode=rl,Mv.COMPLETE="complete",yf=ui.EventType=Mv,Av.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",xt.prototype.listen=xt.prototype.K,fo=ui.WebChannel=Av,fD=ui.FetchXmlHttpFactory=ls,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,bf=ui.XhrIo=Ze}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});var pC="@firebase/firestore";var yt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");var Fo="11.2.0";var vr=new jn("@firebase/firestore");function go(){return vr.logLevel}function pe(n,...e){if(vr.logLevel<=ke.DEBUG){let t=e.map(l0);vr.debug(`Firestore (${Fo}): ${n}`,...t)}}function hi(n,...e){if(vr.logLevel<=ke.ERROR){let t=e.map(l0);vr.error(`Firestore (${Fo}): ${n}`,...t)}}function wo(n,...e){if(vr.logLevel<=ke.WARN){let t=e.map(l0);vr.warn(`Firestore (${Fo}): ${n}`,...t)}}function l0(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function Ie(n="Unexpected state"){let e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+n;throw hi(e),new Error(e)}function qe(n,e){n||Ie()}function xe(n,e){return n}var Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},_e=class extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var di=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var au=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Af=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(yt.UNAUTHENTICATED))}shutdown(){}},Rf=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Pf=class{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let i=this.i,r=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve(),o=new di;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new di,e.enqueueRetryable(()=>r(this.currentUser))};let a=()=>{let p=o;e.enqueueRetryable(()=>F(this,null,function*(){yield p.promise,yield r(this.currentUser)}))},d=p=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){let p=this.t.getImmediate({optional:!0});p?d(p):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new di)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string"),new au(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new yt(e)}},kf=class{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},Df=class{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new kf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Mf=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Of=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){qe(this.o===void 0);let i=o=>{o.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,pe("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};let r=o=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?r(o):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(qe(typeof t.token=="string"),this.R=t.token,new Mf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function gD(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}var lu=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let r=gD(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%e.length))}return i}};function Ne(n,e){return n<e?-1:n>e?1:0}function To(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}var It=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new n(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var Ae=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new It(0,0))}static max(){return new n(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var cu=class n{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ie(),i===void 0?i=e.length-t:i>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++){let o=n.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){let i=n.isNumericId(e),r=n.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?n.extractNumericId(e).compare(n.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ci.fromString(e.substring(4,e.length-2))}},nt=class n extends cu{construct(e,t,i){return new n(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new _e(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new n(t)}static emptyPath(){return new n([])}},vD=/^[_a-zA-Z][_a-zA-Z0-9]*$/,on=class n extends cu{construct(e,t,i){return new n(e,t,i)}static isValidIdentifier(e){return vD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],i="",r=0,o=()=>{if(i.length===0)throw new _e(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""},a=!1;for(;r<e.length;){let d=e[r];if(d==="\\"){if(r+1===e.length)throw new _e(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let p=e[r+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,r+=2}else d==="`"?(a=!a,r++):d!=="."||a?(i+=d,r++):(o(),r++)}if(o(),a)throw new _e(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var Te=class n{constructor(e){this.path=e}static fromPath(e){return new n(nt.fromString(e))}static fromName(e){return new n(nt.fromString(e).popFirst(5))}static empty(){return new n(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new nt(e.slice()))}};var Nf=class{constructor(e,t,i,r){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=r}};Nf.UNKNOWN_ID=-1;function _D(n,e){let t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=Ae.fromTimestamp(i===1e9?new It(t+1,0):new It(t,i));return new _r(r,Te.empty(),e)}function bD(n){return new _r(n.readTime,n.key,-1)}var _r=class n{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new n(Ae.min(),Te.empty(),-1)}static max(){return new n(Ae.max(),Te.empty(),-1)}};function yD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}var ED="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Vf=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};function Lo(n){return F(this,null,function*(){if(n.code!==Y.FAILED_PRECONDITION||n.message!==ED)throw n;pe("LocalStore","Unexpectedly lost primary lease")})}var J=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,i)=>{t(e)})}static reject(e){return new n((t,i)=>{i(e)})}static waitFor(e){return new n((t,i)=>{let r=0,o=0,a=!1;e.forEach(d=>{++r,d.next(()=>{++o,a&&o===r&&t()},p=>i(p))}),a=!0,o===r&&t()})}static or(e){let t=n.resolve(!1);for(let i of e)t=t.next(r=>r?n.resolve(r):i());return t}static forEach(e,t){let i=[];return e.forEach((r,o)=>{i.push(t.call(this,r,o))}),this.waitFor(i)}static mapArray(e,t){return new n((i,r)=>{let o=e.length,a=new Array(o),d=0;for(let p=0;p<o;p++){let m=p;t(e[m]).next(v=>{a[m]=v,++d,d===o&&i(a)},v=>r(v))}})}static doWhile(e,t){return new n((i,r)=>{let o=()=>{e()===!0?t().next(()=>{o()},r):i()};o()})}};function CD(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Uo(n){return n.name==="IndexedDbTransactionError"}var c0=(()=>{class n{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=r=>this.ie(r),this.se=r=>i.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.se&&this.se(t),t}}return n.oe=-1,n})();function ju(n){return n==null}function Pa(n){return n===0&&1/n==-1/0}function wD(n){return typeof n=="number"&&Number.isInteger(n)&&!Pa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function TD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hC(e)),e=ID(n.get(t),e);return hC(e)}function ID(n,e){let t=e,i=n.length;for(let r=0;r<i;r++){let o=n.charAt(r);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function hC(n){return n+""}var SD=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],s6=[...SD,"documentOverlays"],xD=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],AD=xD,RD=[...AD,"indexConfiguration","indexState","indexEntries"];var a6=[...RD,"globals"];function mC(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function WC(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var it=class n{constructor(e,t){this.comparator=e,this.root=t||qn.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qn.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}},yo=class{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},qn=class n{constructor(e,t,i,r,o){this.key=e,this.value=t,this.color=i??n.RED,this.left=r??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,o){return new n(e??this.key,t??this.value,i??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this,o=i(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,i),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return n.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();let e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}};qn.EMPTY=null,qn.RED=!0,qn.BLACK=!1;qn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,i,r,o){return this}insert(e,t,i){return new qn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Et=class n{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},uu=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var _n=class n{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new n([])}unionWith(e){let t=new Et(on.comparator);for(let i of this.fields)t=t.add(i);for(let i of e)t=t.add(i);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(t,i)=>t.isEqual(i))}};var du=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Lt=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new du("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Lt.EMPTY_BYTE_STRING=new Lt("");var PD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(n){if(qe(!!n),typeof n=="string"){let e=0,t=PD.exec(n);if(qe(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}let i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Xe(n.seconds),nanos:Xe(n.nanos)}}function Xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fi(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}function u0(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bu(n){let e=n.mapValue.fields.__previous_value__;return u0(e)?Bu(e):e}function ka(n){let e=mi(n.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}var Ff=class{constructor(e,t,i,r,o,a,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}},pu=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?u0(n)?4:KC(n)?9007199254740991:HC(n)?10:11:Ie()}function Gn(n,e){if(n===e)return!0;let t=Gi(n);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ka(n).isEqual(ka(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;let a=mi(r.timestampValue),d=mi(o.timestampValue);return a.seconds===d.seconds&&a.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return fi(r.bytesValue).isEqual(fi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return Xe(r.geoPointValue.latitude)===Xe(o.geoPointValue.latitude)&&Xe(r.geoPointValue.longitude)===Xe(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Xe(r.integerValue)===Xe(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){let a=Xe(r.doubleValue),d=Xe(o.doubleValue);return a===d?Pa(a)===Pa(d):isNaN(a)&&isNaN(d)}return!1}(n,e);case 9:return To(n.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(r,o){let a=r.mapValue.fields||{},d=o.mapValue.fields||{};if(mC(a)!==mC(d))return!1;for(let p in a)if(a.hasOwnProperty(p)&&(d[p]===void 0||!Gn(a[p],d[p])))return!1;return!0}(n,e);default:return Ie()}}function Da(n,e){return(n.values||[]).find(t=>Gn(t,e))!==void 0}function Io(n,e){if(n===e)return 0;let t=Gi(n),i=Gi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(o,a){let d=Xe(o.integerValue||o.doubleValue),p=Xe(a.integerValue||a.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return fC(n.timestampValue,e.timestampValue);case 4:return fC(ka(n),ka(e));case 5:return Ne(n.stringValue,e.stringValue);case 6:return function(o,a){let d=fi(o),p=fi(a);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let d=o.split("/"),p=a.split("/");for(let m=0;m<d.length&&m<p.length;m++){let v=Ne(d[m],p[m]);if(v!==0)return v}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let d=Ne(Xe(o.latitude),Xe(a.latitude));return d!==0?d:Ne(Xe(o.longitude),Xe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gC(n.arrayValue,e.arrayValue);case 10:return function(o,a){var d,p,m,v;let b=o.fields||{},T=a.fields||{},M=(d=b.value)===null||d===void 0?void 0:d.arrayValue,U=(p=T.value)===null||p===void 0?void 0:p.arrayValue,L=Ne(((m=M?.values)===null||m===void 0?void 0:m.length)||0,((v=U?.values)===null||v===void 0?void 0:v.length)||0);return L!==0?L:gC(M,U)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===tu.mapValue&&a===tu.mapValue)return 0;if(o===tu.mapValue)return 1;if(a===tu.mapValue)return-1;let d=o.fields||{},p=Object.keys(d),m=a.fields||{},v=Object.keys(m);p.sort(),v.sort();for(let b=0;b<p.length&&b<v.length;++b){let T=Ne(p[b],v[b]);if(T!==0)return T;let M=Io(d[p[b]],m[v[b]]);if(M!==0)return M}return Ne(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Ie()}}function fC(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);let t=mi(n),i=mi(e),r=Ne(t.seconds,i.seconds);return r!==0?r:Ne(t.nanos,i.nanos)}function gC(n,e){let t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){let o=Io(t[r],i[r]);if(o)return o}return Ne(t.length,i.length)}function So(n){return Lf(n)}function Lf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let i=mi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return fi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(let o of t.values||[])r?r=!1:i+=",",i+=Lf(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){let i=Object.keys(t.fields||{}).sort(),r="{",o=!0;for(let a of i)o?o=!1:r+=",",r+=`${a}:${Lf(t.fields[a])}`;return r+"}"}(n.mapValue):Ie()}function ru(n){switch(Gi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Bu(n);return e?16+ru(e):16;case 5:return 2*n.stringValue.length;case 6:return fi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,o)=>r+ru(o),0)}(n.arrayValue);case 10:case 11:return function(i){let r=0;return Ki(i.fields,(o,a)=>{r+=o.length+ru(a)}),r}(n.mapValue);default:throw Ie()}}function Uf(n){return!!n&&"integerValue"in n}function d0(n){return!!n&&"arrayValue"in n}function vC(n){return!!n&&"nullValue"in n}function _C(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ou(n){return!!n&&"mapValue"in n}function HC(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Sa(i)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function KC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var rn=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(t)}setAll(e){let t=on.emptyPath(),i={},r=[];e.forEach((a,d)=>{if(!t.isImmediateParentOf(d)){let p=this.getFieldsMap(t);this.applyChanges(p,i,r),i={},r=[],t=d.popLast()}a?i[d.lastSegment()]=Sa(a):r.push(d.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,i,r)}delete(e){let t=this.field(e.popLast());ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];ou(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,(r,o)=>e[r]=o);for(let r of i)delete e[r]}clone(){return new n(Sa(this.value))}};function QC(n){let e=[];return Ki(n.fields,(t,i)=>{let r=new on([t]);if(ou(i)){let o=QC(i.mapValue).fields;if(o.length===0)e.push(r);else for(let a of o)e.push(r.child(a))}else e.push(r)}),new _n(e)}var xn=class n{constructor(e,t,i,r,o,a,d){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=o,this.data=a,this.documentState=d}static newInvalidDocument(e){return new n(e,0,Ae.min(),Ae.min(),Ae.min(),rn.empty(),0)}static newFoundDocument(e,t,i,r){return new n(e,1,t,Ae.min(),i,r,0)}static newNoDocument(e,t){return new n(e,2,t,Ae.min(),Ae.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,Ae.min(),Ae.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var xo=class{constructor(e,t){this.position=e,this.inclusive=t}};function bC(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){let o=e[r],a=n.position[r];if(o.field.isKeyField()?i=Te.comparator(Te.fromName(a.referenceValue),t.key):i=Io(a,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function yC(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gn(n.position[t],e.position[t]))return!1;return!0}var Ao=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function kD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var hu=class{},ht=class n extends hu{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Bf(e,t,i):t==="array-contains"?new zf(e,i):t==="in"?new Gf(e,i):t==="not-in"?new Wf(e,i):t==="array-contains-any"?new Hf(e,i):new n(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new qf(e,i):new $f(e,i)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Io(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Wn=class n extends hu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return JC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function JC(n){return n.op==="and"}function XC(n){return DD(n)&&JC(n)}function DD(n){for(let e of n.filters)if(e instanceof Wn)return!1;return!0}function jf(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+So(n.value);if(XC(n))return n.filters.map(e=>jf(e)).join(",");{let e=n.filters.map(t=>jf(t)).join(",");return`${n.op}(${e})`}}function YC(n,e){return n instanceof ht?function(i,r){return r instanceof ht&&i.op===r.op&&i.field.isEqual(r.field)&&Gn(i.value,r.value)}(n,e):n instanceof Wn?function(i,r){return r instanceof Wn&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((o,a,d)=>o&&YC(a,r.filters[d]),!0):!1}(n,e):void Ie()}function ZC(n){return n instanceof ht?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(n):n instanceof Wn?function(t){return t.op.toString()+" {"+t.getFilters().map(ZC).join(" ,")+"}"}(n):"Filter"}var Bf=class extends ht{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){let t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}},qf=class extends ht{constructor(e,t){super(e,"in",t),this.keys=ew("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},$f=class extends ht{constructor(e,t){super(e,"not-in",t),this.keys=ew("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function ew(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Te.fromName(i.referenceValue))}var zf=class extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return d0(t)&&Da(t.arrayValue,this.value)}},Gf=class extends ht{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Da(this.value.arrayValue,t)}},Wf=class extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Da(this.value.arrayValue,t)}},Hf=class extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!d0(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Da(this.value.arrayValue,i))}};var Kf=class{constructor(e,t=null,i=[],r=[],o=null,a=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=a,this.endAt=d,this.ue=null}};function EC(n,e=null,t=[],i=[],r=null,o=null,a=null){return new Kf(n,e,t,i,r,o,a)}function p0(n){let e=xe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>jf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ju(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>So(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>So(i)).join(",")),e.ue=t}return e.ue}function h0(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!YC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yC(n.startAt,e.startAt)&&yC(n.endAt,e.endAt)}function Qf(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Ro=class{constructor(e,t=null,i=[],r=[],o=null,a="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=a,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function MD(n,e,t,i,r,o,a,d){return new Ro(n,e,t,i,r,o,a,d)}function m0(n){return new Ro(n)}function CC(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function OD(n){return n.collectionGroup!==null}function xa(n){let e=xe(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let d=new Et(on.comparator);return a.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ao(o,i))}),t.has(on.keyField().canonicalString())||e.ce.push(new Ao(on.keyField(),i))}return e.ce}function $n(n){let e=xe(n);return e.le||(e.le=ND(e,xa(n))),e.le}function ND(n,e){if(n.limitType==="F")return EC(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{let o=r.dir==="desc"?"asc":"desc";return new Ao(r.field,o)});let t=n.endAt?new xo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xo(n.startAt.position,n.startAt.inclusive):null;return EC(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Jf(n,e,t){return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qu(n,e){return h0($n(n),$n(e))&&n.limitType===e.limitType}function tw(n){return`${p0($n(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>ZC(r)).join(", ")}]`),ju(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>So(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>So(r)).join(",")),`Target(${i})`}($n(n))}; limitType=${n.limitType})`}function $u(n,e){return e.isFoundDocument()&&function(i,r){let o=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):Te.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,r){for(let o of xa(i))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,r){for(let o of i.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(a,d,p){let m=bC(a,d,p);return a.inclusive?m<=0:m<0}(i.startAt,xa(i),r)||i.endAt&&!function(a,d,p){let m=bC(a,d,p);return a.inclusive?m>=0:m>0}(i.endAt,xa(i),r))}(n,e)}function VD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nw(n){return(e,t)=>{let i=!1;for(let r of xa(n)){let o=FD(r,e,t);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function FD(n,e,t){let i=n.field.isKeyField()?Te.comparator(e.key,t.key):function(o,a,d){let p=a.data.field(o),m=d.data.field(o);return p!==null&&m!==null?Io(p,m):Ie()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ie()}}var gi=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(let[r,o]of i)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(t,i)=>{for(let[r,o]of i)e(r,o)})}isEmpty(){return WC(this.inner)}size(){return this.innerSize}};var LD=new it(Te.comparator);function vi(){return LD}var iw=new it(Te.comparator);function Ia(...n){let e=iw;for(let t of n)e=e.insert(t.key,t);return e}function rw(n){let e=iw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function mr(){return Aa()}function ow(){return Aa()}function Aa(){return new gi(n=>n.toString(),(n,e)=>n.isEqual(e))}var UD=new it(Te.comparator),jD=new Et(Te.comparator);function Me(...n){let e=jD;for(let t of n)e=e.add(t);return e}var BD=new Et(Ne);function qD(){return BD}function f0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function sw(n){return{integerValue:""+n}}function $D(n,e){return wD(e)?sw(e):f0(n,e)}var Po=class{constructor(){this._=void 0}};function zD(n,e,t){return n instanceof ko?function(r,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&u0(o)&&(o=Bu(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof br?lw(n,e):n instanceof yr?cw(n,e):function(r,o){let a=aw(r,o),d=wC(a)+wC(r.Pe);return Uf(a)&&Uf(r.Pe)?sw(d):f0(r.serializer,d)}(n,e)}function GD(n,e,t){return n instanceof br?lw(n,e):n instanceof yr?cw(n,e):t}function aw(n,e){return n instanceof Do?function(i){return Uf(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}var ko=class extends Po{},br=class extends Po{constructor(e){super(),this.elements=e}};function lw(n,e){let t=uw(e);for(let i of n.elements)t.some(r=>Gn(r,i))||t.push(i);return{arrayValue:{values:t}}}var yr=class extends Po{constructor(e){super(),this.elements=e}};function cw(n,e){let t=uw(e);for(let i of n.elements)t=t.filter(r=>!Gn(r,i));return{arrayValue:{values:t}}}var Do=class extends Po{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function wC(n){return Xe(n.integerValue||n.doubleValue)}function uw(n){return d0(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function WD(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof br&&r instanceof br||i instanceof yr&&r instanceof yr?To(i.elements,r.elements,Gn):i instanceof Do&&r instanceof Do?Gn(i.Pe,r.Pe):i instanceof ko&&r instanceof ko}(n.transform,e.transform)}var Xf=class{constructor(e,t){this.version=e,this.transformResults=t}},pi=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function su(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Mo=class{};function dw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ma(n.key,pi.none()):new Er(n.key,n.data,pi.none());{let t=n.data,i=rn.empty(),r=new Et(on.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?i.delete(o):i.set(o,a),r=r.add(o)}return new Hn(n.key,i,new _n(r.toArray()),pi.none())}}function HD(n,e,t){n instanceof Er?function(r,o,a){let d=r.value.clone(),p=IC(r.fieldTransforms,o,a.transformResults);d.setAll(p),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Hn?function(r,o,a){if(!su(r.precondition,o))return void o.convertToUnknownDocument(a.version);let d=IC(r.fieldTransforms,o,a.transformResults),p=o.data;p.setAll(pw(r)),p.setAll(d),o.convertToFoundDocument(a.version,p).setHasCommittedMutations()}(n,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ra(n,e,t,i){return n instanceof Er?function(o,a,d,p){if(!su(o.precondition,a))return d;let m=o.value.clone(),v=SC(o.fieldTransforms,p,a);return m.setAll(v),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Hn?function(o,a,d,p){if(!su(o.precondition,a))return d;let m=SC(o.fieldTransforms,p,a),v=a.data;return v.setAll(pw(o)),v.setAll(m),a.convertToFoundDocument(a.version,v).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(b=>b.field))}(n,e,t,i):function(o,a,d){return su(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):d}(n,e,t)}function KD(n,e){let t=null;for(let i of n.fieldTransforms){let r=e.data.field(i.field),o=aw(i.transform,r||null);o!=null&&(t===null&&(t=rn.empty()),t.set(i.field,o))}return t||null}function TC(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&To(i,r,(o,a)=>WD(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Er=class extends Mo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},Hn=class extends Mo{constructor(e,t,i,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function pw(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let i=n.data.field(t);e.set(t,i)}}),e}function IC(n,e,t){let i=new Map;qe(n.length===t.length);for(let r=0;r<t.length;r++){let o=n[r],a=o.transform,d=e.data.field(o.field);i.set(o.field,GD(a,d,t[r]))}return i}function SC(n,e,t){let i=new Map;for(let r of n){let o=r.transform,a=t.data.field(r.field);i.set(r.field,zD(o,a,e))}return i}var Ma=class extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Yf=class extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Zf=class{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){let i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let o=this.mutations[r];o.key.isEqual(e.key)&&HD(o,e,i[r])}}applyToLocalView(e,t){for(let i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ra(i,e,t,this.localWriteTime));for(let i of this.mutations)i.key.isEqual(e.key)&&(t=Ra(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let i=ow();return this.mutations.forEach(r=>{let o=e.get(r.key),a=o.overlayedDocument,d=this.applyToLocalView(a,o.mutatedFields);d=t.has(r.key)?null:d;let p=dw(a,d);p!==null&&i.set(r.key,p),a.isValidDocument()||a.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Me())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(t,i)=>TC(t,i))&&To(this.baseMutations,e.baseMutations,(t,i)=>TC(t,i))}},eg=class n{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){qe(e.mutations.length===i.length);let r=function(){return UD}(),o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,i[a].version);return new n(e,t,i,r)}};var tg=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var ng=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ut,Fe;function QD(n){switch(n){default:return Ie();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function hw(n){if(n===void 0)return hi("GRPC error has no .code"),Y.UNKNOWN;switch(n){case ut.OK:return Y.OK;case ut.CANCELLED:return Y.CANCELLED;case ut.UNKNOWN:return Y.UNKNOWN;case ut.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ut.INTERNAL:return Y.INTERNAL;case ut.UNAVAILABLE:return Y.UNAVAILABLE;case ut.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ut.NOT_FOUND:return Y.NOT_FOUND;case ut.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ut.ABORTED:return Y.ABORTED;case ut.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ut.DATA_LOSS:return Y.DATA_LOSS;default:return Ie()}}(Fe=ut||(ut={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";var xC=null;function JD(){return new TextEncoder}var XD=new ci([4294967295,4294967295],0);function AC(n){let e=JD().encode(n),t=new _f;return t.update(e),new Uint8Array(t.digest())}function RC(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ci([t,i],0),new ci([r,o],0)]}var ig=class n{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new fr(`Invalid padding: ${t}`);if(i<0)throw new fr(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new fr(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ci.fromNumber(this.Te)}de(e,t,i){let r=e.add(t.multiply(ci.fromNumber(i)));return r.compare(XD)===1&&(r=new ci([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=AC(e),[i,r]=RC(t);for(let o=0;o<this.hashCount;o++){let a=this.de(i,r,o);if(!this.Ee(a))return!1}return!0}static create(e,t,i){let r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,r,t);return i.forEach(d=>a.insert(d)),a}insert(e){if(this.Te===0)return;let t=AC(e),[i,r]=RC(t);for(let o=0;o<this.hashCount;o++){let a=this.de(i,r,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}},fr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var mu=class n{constructor(e,t,i,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){let r=new Map;return r.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new n(Ae.min(),r,new it(Ne),vi(),Me())}},Oa=class n{constructor(e,t,i,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new n(i,t,Me(),Me(),Me())}};var Eo=class{constructor(e,t,i,r){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=r}},fu=class{constructor(e,t){this.targetId=e,this.me=t}},gu=class{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}},vu=class{constructor(){this.fe=0,this.ge=PC(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Me(),t=Me(),i=Me();return this.ge.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:Ie()}}),new Oa(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=PC()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},rg=class{constructor(e){this.Be=e,this.Le=new Map,this.ke=vi(),this.qe=nu(),this.Qe=nu(),this.Ke=new it(Ne)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,i=e.me.count,r=this.Ye(t);if(r){let o=r.target;if(Qf(o))if(i===0){let a=new Te(o.path);this.We(t,a,xn.newNoDocument(a,Ae.min()))}else qe(i===1);else{let a=this.Ze(t);if(a!==i){let d=this.Xe(e),p=d?this.et(d,e,a):1;if(p!==0){this.He(t);let m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}xC?.tt(function(v,b,T,M,U){var L,V,ae,ge,se,Q;let be={localCacheCount:v,existenceFilterCount:b.count,databaseId:T.database,projectId:T.projectId},fe=b.unchangedNames;return fe&&(be.bloomFilter={applied:U===0,hashCount:(L=fe?.hashCount)!==null&&L!==void 0?L:0,bitmapLength:(ge=(ae=(V=fe?.bits)===null||V===void 0?void 0:V.bitmap)===null||ae===void 0?void 0:ae.length)!==null&&ge!==void 0?ge:0,padding:(Q=(se=fe?.bits)===null||se===void 0?void 0:se.padding)!==null&&Q!==void 0?Q:0,mightContain:P=>{var E;return(E=M?.mightContain(P))!==null&&E!==void 0&&E}}),be}(a,e.me,this.Be.nt(),d,p))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=t,a,d;try{a=fi(i).toUint8Array()}catch(p){if(p instanceof du)return wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ig(a,r,o)}catch(p){return wo(p instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){let i=this.Be.getRemoteKeysForTarget(t),r=0;return i.forEach(o=>{let a=this.Be.nt(),d=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.We(t,o,null),r++)}),r}it(e){let t=new Map;this.Le.forEach((o,a)=>{let d=this.Ye(a);if(d){if(o.current&&Qf(d.target)){let p=new Te(d.target.path);this.st(p).has(a)||this.ot(a,p)||this.We(a,p,xn.newNoDocument(p,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let i=Me();this.Qe.forEach((o,a)=>{let d=!0;a.forEachWhile(p=>{let m=this.Ye(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let r=new mu(e,t,this.Ke,this.ke,i);return this.ke=vi(),this.qe=nu(),this.Qe=nu(),this.Ke=new it(Ne),r}Ue(e,t){if(!this.je(e))return;let i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;let r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new vu,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(Ne),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new vu),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}};function nu(){return new it(Te.comparator)}function PC(){return new it(Te.comparator)}var YD={asc:"ASCENDING",desc:"DESCENDING"},ZD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eM={and:"AND",or:"OR"},og=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function sg(n,e){return n.useProto3Json||ju(e)?e:{value:e}}function _u(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tM(n,e){return _u(n,e.toTimestamp())}function zn(n){return qe(!!n),Ae.fromTimestamp(function(t){let i=mi(t);return new It(i.seconds,i.nanos)}(n))}function g0(n,e){return ag(n,e).canonicalString()}function ag(n,e){let t=function(r){return new nt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fw(n){let e=nt.fromString(n);return qe(yw(e)),e}function lg(n,e){return g0(n.databaseId,e.path)}function Tf(n,e){let t=fw(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(vw(t))}function gw(n,e){return g0(n.databaseId,e)}function nM(n){let e=fw(n);return e.length===4?nt.emptyPath():vw(e)}function cg(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vw(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kC(n,e,t){return{name:lg(n,e),fields:t.value.mapValue.fields}}function iM(n,e){let t;if("targetChange"in e){e.targetChange;let i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(m,v){return m.useProto3Json?(qe(v===void 0||typeof v=="string"),Lt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Lt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,d=a&&function(m){let v=m.code===void 0?Y.UNKNOWN:hw(m.code);return new _e(v,m.message||"")}(a);t=new gu(i,r,o,d||null)}else if("documentChange"in e){e.documentChange;let i=e.documentChange;i.document,i.document.name,i.document.updateTime;let r=Tf(n,i.document.name),o=zn(i.document.updateTime),a=i.document.createTime?zn(i.document.createTime):Ae.min(),d=new rn({mapValue:{fields:i.document.fields}}),p=xn.newFoundDocument(r,o,a,d),m=i.targetIds||[],v=i.removedTargetIds||[];t=new Eo(m,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;let i=e.documentDelete;i.document;let r=Tf(n,i.document),o=i.readTime?zn(i.readTime):Ae.min(),a=xn.newNoDocument(r,o),d=i.removedTargetIds||[];t=new Eo([],d,a.key,a)}else if("documentRemove"in e){e.documentRemove;let i=e.documentRemove;i.document;let r=Tf(n,i.document),o=i.removedTargetIds||[];t=new Eo([],o,r,null)}else{if(!("filter"in e))return Ie();{e.filter;let i=e.filter;i.targetId;let{count:r=0,unchangedNames:o}=i,a=new ng(r,o),d=i.targetId;t=new fu(d,a)}}return t}function rM(n,e){let t;if(e instanceof Er)t={update:kC(n,e.key,e.value)};else if(e instanceof Ma)t={delete:lg(n,e.key)};else if(e instanceof Hn)t={update:kC(n,e.key,e.data),updateMask:hM(e.fieldMask)};else{if(!(e instanceof Yf))return Ie();t={verify:lg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,a){let d=a.transform;if(d instanceof ko)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof yr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Do)return{fieldPath:a.field.canonicalString(),increment:d.Pe};throw Ie()}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:tM(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Ie()}(n,e.precondition)),t}function oM(n,e){return n&&n.length>0?(qe(e!==void 0),n.map(t=>function(r,o){let a=r.updateTime?zn(r.updateTime):zn(o);return a.isEqual(Ae.min())&&(a=zn(o)),new Xf(a,r.transformResults||[])}(t,e))):[]}function sM(n,e){return{documents:[gw(n,e.path)]}}function aM(n,e){let t={structuredQuery:{}},i=e.path,r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=gw(n,r);let o=function(m){if(m.length!==0)return bw(Wn.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(m){if(m.length!==0)return m.map(v=>function(T){return{field:_o(T.field),direction:uM(T.dir)}}(v))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let d=sg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ct:t,parent:r}}function lM(n){let e=nM(n.parent),t=n.structuredQuery,i=t.from?t.from.length:0,r=null;if(i>0){qe(i===1);let v=t.from[0];v.allDescendants?r=v.collectionId:e=e.child(v.collectionId)}let o=[];t.where&&(o=function(b){let T=_w(b);return T instanceof Wn&&XC(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(b){return b.map(T=>function(U){return new Ao(bo(U.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(b){let T;return T=typeof b=="object"?b.value:b,ju(T)?null:T}(t.limit));let p=null;t.startAt&&(p=function(b){let T=!!b.before,M=b.values||[];return new xo(M,T)}(t.startAt));let m=null;return t.endAt&&(m=function(b){let T=!b.before,M=b.values||[];return new xo(M,T)}(t.endAt)),MD(e,r,a,o,d,"F",p,m)}function cM(n,e){let t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _w(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let i=bo(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":let r=bo(t.unaryFilter.field);return ht.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=bo(t.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=bo(t.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(n):n.fieldFilter!==void 0?function(t){return ht.create(bo(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Wn.create(t.compositeFilter.filters.map(i=>_w(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(n):Ie()}function uM(n){return YD[n]}function dM(n){return ZD[n]}function pM(n){return eM[n]}function _o(n){return{fieldPath:n.canonicalString()}}function bo(n){return on.fromServerFormat(n.fieldPath)}function bw(n){return n instanceof ht?function(t){if(t.op==="=="){if(_C(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(vC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_C(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(vC(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:dM(t.op),value:t.value}}}(n):n instanceof Wn?function(t){let i=t.getFilters().map(r=>bw(r));return i.length===1?i[0]:{compositeFilter:{op:pM(t.op),filters:i}}}(n):Ie()}function hM(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Na=class n{constructor(e,t,i,r,o=Ae.min(),a=Ae.min(),d=Lt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var ug=class{constructor(e){this.ht=e}};function mM(n){let e=lM({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jf(e,e.limit,"L"):e}var bu=class{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(Xe(e.integerValue));else if("doubleValue"in e){let i=Xe(e.doubleValue);isNaN(i)?this.Rt(t,13):(this.Rt(t,15),Pa(i)?t.Vt(0):t.Vt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Rt(t,20),typeof i=="string"&&(i=mi(i)),t.ft(`${i.seconds||""}`),t.Vt(i.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(fi(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Rt(t,45),t.Vt(i.latitude||0),t.Vt(i.longitude||0)}else"mapValue"in e?KC(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):HC(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):Ie()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let i=e.fields||{};this.Rt(t,55);for(let r of Object.keys(i))this.gt(r,t),this.Et(i[r],t)}bt(e,t){var i,r;let o=e.fields||{};this.Rt(t,53);let a="value",d=((r=(i=o[a].arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.length)||0;this.Rt(t,15),t.Vt(Xe(d)),this.gt(a,t),this.Et(o[a],t)}vt(e,t){let i=e.values||[];this.Rt(t,50);for(let r of i)this.Et(r,t)}St(e,t){this.Rt(t,37),Te.fromName(e).path.forEach(i=>{this.Rt(t,60),this.Ct(i,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};bu.Ft=new bu;var dg=class{constructor(){this.ln=new pg}addToCollectionParentIndex(e,t){return this.ln.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(_r.min())}updateCollectionGroup(e,t,i){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}},pg=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Et(nt.comparator),o=!r.has(i);return this.index[t]=r.add(i),o}has(e){let t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Et(nt.comparator)).toArray()}};var c6=new Uint8Array(0);var DC={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vn=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}};vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(41943040,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);var Va=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function MC([n,e],[t,i]){let r=Ne(n,t);return r===0?Ne(e,i):r}var hg=class{constructor(e){this.Gn=e,this.buffer=new Et(MC),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let i=this.buffer.last();MC(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}},mg=class{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){pe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>F(this,null,function*(){this.Jn=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Uo(t)?pe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):yield Lo(t)}yield this.Yn(3e5)}))}},fg=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return J.resolve(c0.oe);let i=new hg(t);return this.Zn.forEachTarget(e,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(DC)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),DC):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,r,o,a,d,p,m,v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),r=this.params.maximumSequenceNumbersToCollect):r=b,a=Date.now(),this.nthSequenceNumber(e,r))).next(b=>(i=b,d=Date.now(),this.removeTargets(e,i,t))).next(b=>(o=b,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(m=Date.now(),go()<=ke.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-v}ms
	Determined least recently used ${r} in `+(d-a)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(m-p)+`ms
Total Duration: ${m-v}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:b})))}};function fM(n,e){return new fg(n,e)}var gg=class{constructor(){this.changes=new gi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let i=this.changes.get(t);return i!==void 0?J.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var vg=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var _g=class{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Ra(i.mutation,r,_n.empty(),It.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Me()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Me()){let r=mr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(o=>{let a=Ia();return o.forEach((d,p)=>{a=a.insert(d,p.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let i=mr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Me()))}populateOverlays(e,t,i){let r=[];return i.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,d)=>{t.set(a,d)})})}computeViews(e,t,i,r){let o=vi(),a=Aa(),d=function(){return Aa()}();return t.forEach((p,m)=>{let v=i.get(m.key);r.has(m.key)&&(v===void 0||v.mutation instanceof Hn)?o=o.insert(m.key,m):v!==void 0?(a.set(m.key,v.mutation.getFieldMask()),Ra(v.mutation,m,v.mutation.getFieldMask(),It.now())):a.set(m.key,_n.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,v)=>a.set(m,v)),t.forEach((m,v)=>{var b;return d.set(m,new vg(v,(b=a.get(m))!==null&&b!==void 0?b:null))}),d))}recalculateAndSaveOverlays(e,t){let i=Aa(),r=new it((a,d)=>a-d),o=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let d of a)d.keys().forEach(p=>{let m=t.get(p);if(m===null)return;let v=i.get(p)||_n.empty();v=d.applyToLocalView(m,v),i.set(p,v);let b=(r.get(d.batchId)||Me()).add(p);r=r.insert(d.batchId,b)})}).next(()=>{let a=[],d=r.getReverseIterator();for(;d.hasNext();){let p=d.getNext(),m=p.key,v=p.value,b=ow();v.forEach(T=>{if(!o.has(T)){let M=dw(t.get(T),i.get(T));M!==null&&b.set(T,M),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,m,b))}return J.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(a){return Te.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):OD(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(o=>{let a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-o.size):J.resolve(mr()),d=-1,p=o;return a.next(m=>J.forEach(m,(v,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),o.get(v)?J.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Me())).next(v=>({batchId:d,changes:rw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(i=>{let r=Ia();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){let o=t.collectionGroup,a=Ia();return this.indexManager.getCollectionParents(e,o).next(d=>J.forEach(d,p=>{let m=function(b,T){return new Ro(T,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,i,r).next(v=>{v.forEach((b,T)=>{a=a.insert(b,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,r))).next(a=>{o.forEach((p,m)=>{let v=m.getKey();a.get(v)===null&&(a=a.insert(v,xn.newInvalidDocument(v)))});let d=Ia();return a.forEach((p,m)=>{let v=o.get(p);v!==void 0&&Ra(v.mutation,m,_n.empty(),It.now()),$u(t,m)&&(d=d.insert(p,m))}),d})}};var bg=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return J.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:zn(r.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:mM(r.bundledQuery),readTime:zn(r.readTime)}}(t)),J.resolve()}};var yg=class{constructor(){this.overlays=new it(Te.comparator),this.dr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){let i=mr();return J.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,o)=>{this.Tt(e,t,o)}),J.resolve()}removeOverlaysForBatchId(e,t,i){let r=this.dr.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(i)),J.resolve()}getOverlaysForCollection(e,t,i){let r=mr(),o=t.length+1,a=new Te(t.child("")),d=this.overlays.getIteratorFrom(a);for(;d.hasNext();){let p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>i&&r.set(p.getKey(),p)}return J.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let o=new it((m,v)=>m-v),a=this.overlays.getIterator();for(;a.hasNext();){let m=a.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let v=o.get(m.largestBatchId);v===null&&(v=mr(),o=o.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}let d=mr(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=r)););return J.resolve(d)}Tt(e,t,i){let r=this.overlays.get(i.key);if(r!==null){let a=this.dr.get(r.largestBatchId).delete(i.key);this.dr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new tg(t,i));let o=this.dr.get(t);o===void 0&&(o=Me(),this.dr.set(t,o)),this.dr.set(t,o.add(i.key))}};var Eg=class{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}};var Fa=class{constructor(){this.Er=new Et(dt.Ar),this.Rr=new Et(dt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let i=new dt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new dt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){let t=new Te(new nt([])),i=new dt(t,e),r=new dt(t,e+1),o=[];return this.Rr.forEachInRange([i,r],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new Te(new nt([])),i=new dt(t,e),r=new dt(t,e+1),o=Me();return this.Rr.forEachInRange([i,r],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new dt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}},dt=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Te.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||Te.comparator(e.key,t.key)}};var Cg=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(dt.Ar)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){let o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Zf(o,t,i,r);this.mutationQueue.push(a);for(let d of r)this.vr=this.vr.add(new dt(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(a)}lookupMutationBatch(e,t){return J.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let i=t+1,r=this.Fr(i),o=r<0?0:r;return J.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let i=new dt(t,0),r=new dt(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([i,r],a=>{let d=this.Cr(a.br);o.push(d)}),J.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(Ne);return t.forEach(r=>{let o=new dt(r,0),a=new dt(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],d=>{i=i.add(d.br)})}),J.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){let i=t.path,r=i.length+1,o=i;Te.isDocumentKey(o)||(o=o.child(""));let a=new dt(new Te(o),0),d=new Et(Ne);return this.vr.forEachWhile(p=>{let m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===r&&(d=d.add(p.br)),!0)},a),J.resolve(this.Mr(d))}Mr(e){let t=[];return e.forEach(i=>{let r=this.Cr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){qe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return J.forEach(t.mutations,r=>{let o=new dt(r.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){let i=new dt(t,0),r=this.vr.firstAfterOrEqual(i);return J.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var wg=class{constructor(e){this.Nr=e,this.docs=function(){return new it(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let i=t.key,r=this.docs.get(i),o=r?r.size:0,a=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let i=this.docs.get(t);return J.resolve(i?i.document.mutableCopy():xn.newInvalidDocument(t))}getEntries(e,t){let i=vi();return t.forEach(r=>{let o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():xn.newInvalidDocument(r))}),J.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let o=vi(),a=t.path,d=new Te(a.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){let{key:m,value:{document:v}}=p.getNext();if(!a.isPrefixOf(m.path))break;m.path.length>a.length+1||yD(bD(v),i)<=0||(r.has(v.key)||$u(t,v))&&(o=o.insert(v.key,v.mutableCopy()))}return J.resolve(o)}getAllFromCollectionGroup(e,t,i,r){Ie()}Br(e,t){return J.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Tg(this)}getSize(e){return J.resolve(this.size)}},Tg=class extends gg{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(i)}),J.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var Ig=class{constructor(e){this.persistence=e,this.Lr=new gi(t=>p0(t),h0),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Fa,this.targetCount=0,this.Qr=Va.qn()}forEachTarget(e,t){return this.Lr.forEach((i,r)=>t(r)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),J.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new Va(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Un(t),J.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,i){let r=0,o=[];return this.Lr.forEach((a,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),r++)}),J.waitFor(o).next(()=>r)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){let i=this.Lr.get(t)||null;return J.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),J.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);let r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),J.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),J.resolve()}getMatchingKeysForTargetId(e,t){let i=this.qr.Sr(t);return J.resolve(i)}containsKey(e,t){return J.resolve(this.qr.containsKey(t))}};var yu=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new c0(0),this.Ur=!1,this.Ur=!0,this.Wr=new Eg,this.referenceDelegate=e(this),this.Gr=new Ig(this),this.indexManager=new dg,this.remoteDocumentCache=function(r){return new wg(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new ug(t),this.jr=new bg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new Cg(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){pe("MemoryPersistence","Starting transaction:",e);let r=new Sg(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(o=>this.referenceDelegate.Jr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Yr(e,t){return J.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}},Sg=class extends Vf{constructor(e){super(),this.currentSequenceNumber=e}},xg=class n{constructor(e){this.persistence=e,this.Zr=new Fa,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),J.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),J.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));let i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.ti.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ti,i=>{let r=Te.fromPath(i);return this.ni(e,r).next(o=>{o||t.removeEntry(r,Ae.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return J.or([()=>J.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},Eu=class n{constructor(e,t){this.persistence=e,this.ri=new gi(i=>TD(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=fM(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(r=>i+r))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return J.forEach(this.ri,(i,r)=>this.ir(e,i,r).next(o=>o?J.resolve():t(r)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0,r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.Br(e,a=>this.ir(e,a,t).next(d=>{d||(i++,o.removeEntry(a,Ae.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){let i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),J.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),J.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ru(e.data.value)),t}ir(e,t,i){return J.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let r=this.ri.get(t);return J.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Ag=class n{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=r}static zi(e,t){let i=Me(),r=Me();for(let o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new n(e,t.fromCache,i,r)}};var Rg=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Pg=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return f1()?8:CD(nn())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,r){let o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,r,i).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new Rg;return this.ts(e,t,a).next(d=>{if(o.result=d,this.Hi)return this.ns(e,t,a,d.size)})}).next(()=>o.result)}ns(e,t,i,r){return i.documentReadCount<this.Ji?(go()<=ke.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),J.resolve()):(go()<=ke.DEBUG&&pe("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(go()<=ke.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(t))):J.resolve())}Xi(e,t){if(CC(t))return J.resolve(null);let i=$n(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Jf(t,null,"F"),i=$n(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{let a=Me(...o);return this.Zi.getDocuments(e,a).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{let m=this.rs(t,d);return this.ss(t,m,a,p.readTime)?this.Xi(e,Jf(t,null,"F")):this.os(e,m,t,p)}))})))}es(e,t,i,r){return CC(t)||r.isEqual(Ae.min())?J.resolve(null):this.Zi.getDocuments(e,i).next(o=>{let a=this.rs(t,o);return this.ss(t,a,i,r)?J.resolve(null):(go()<=ke.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(t)),this.os(e,a,t,_D(r,-1)).next(d=>d))})}rs(e,t){let i=new Et(nw(e));return t.forEach((r,o)=>{$u(e,o)&&(i=i.add(o))}),i}ss(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ts(e,t,i){return go()<=ke.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Zi.getDocumentsMatchingQuery(e,t,_r.min(),i)}os(e,t,i,r){return this.Zi.getDocumentsMatchingQuery(e,i,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var kg=class{constructor(e,t,i,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new it(Ne),this.cs=new gi(o=>p0(o),h0),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _g(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function gM(n,e,t,i){return new kg(n,e,t,i)}function Ew(n,e){return F(this,null,function*(){let t=xe(n);return yield t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{let a=[],d=[],p=Me();for(let m of r){a.push(m.batchId);for(let v of m.mutations)p=p.add(v.key)}for(let m of o){d.push(m.batchId);for(let v of m.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(m=>({Ts:m,removedBatchIds:a,addedBatchIds:d}))})})})}function vM(n,e){let t=xe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{let r=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,v){let b=m.batch,T=b.keys(),M=J.resolve();return T.forEach(U=>{M=M.next(()=>v.getEntry(p,U)).next(L=>{let V=m.docVersions.get(U);qe(V!==null),L.version.compareTo(V)<0&&(b.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),v.addEntry(L)))})}),M.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Me();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function Cw(n){let e=xe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function _M(n,e){let t=xe(n),i=e.snapshotVersion,r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;let d=[];e.targetChanges.forEach((v,b)=>{let T=r.get(b);if(!T)return;d.push(t.Gr.removeMatchingKeys(o,v.removedDocuments,b).next(()=>t.Gr.addMatchingKeys(o,v.addedDocuments,b)));let M=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(b)!==null?M=M.withResumeToken(Lt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(v.resumeToken,i)),r=r.insert(b,M),function(L,V,ae){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(T,M,v)&&d.push(t.Gr.updateTargetData(o,M))});let p=vi(),m=Me();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,v))}),d.push(bM(o,a,e.documentUpdates).next(v=>{p=v.Is,m=v.ds})),!i.isEqual(Ae.min())){let v=t.Gr.getLastRemoteSnapshotVersion(o).next(b=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,i));d.push(v)}return J.waitFor(d).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.us=r,o))}function bM(n,e,t){let i=Me(),r=Me();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let a=vi();return t.forEach((d,p)=>{let m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(r=r.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),a=a.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),a=a.insert(d,p)):pe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Is:a,ds:r}})}function yM(n,e){let t=xe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function EM(n,e){let t=xe(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Gr.getTargetData(i,e).next(o=>o?(r=o,J.resolve(r)):t.Gr.allocateTargetId(i).next(a=>(r=new Na(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{let r=t.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}function Dg(n,e,t){return F(this,null,function*(){let i=xe(n),r=i.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||(yield i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!Uo(a))throw a;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.us=i.us.remove(e),i.cs.delete(r.target)})}function OC(n,e,t){let i=xe(n),r=Ae.min(),o=Me();return i.persistence.runTransaction("Execute query","readwrite",a=>function(p,m,v){let b=xe(p),T=b.cs.get(v);return T!==void 0?J.resolve(b.us.get(T)):b.Gr.getTargetData(m,v)}(i,a,$n(e)).next(d=>{if(d)return r=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(a,d.targetId).next(p=>{o=p})}).next(()=>i._s.getDocumentsMatchingQuery(a,e,t?r:Ae.min(),t?o:Me())).next(d=>(CM(i,VD(e),d),{documents:d,Es:o})))}function CM(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach((r,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.ls.set(e,i)}var Cu=class{constructor(){this.activeTargetIds=qD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Mg=class{constructor(){this._o=new Cu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Cu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Og=class{uo(e){}shutdown(){}};var wu=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var iu=null;function If(){return iu===null?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)}var wM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Ng=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Ft="WebChannelConnection",Vg=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${r}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Oo(t,i,r,o,a){let d=If(),p=this.No(t,i.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${d}:`,p,r);let m={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(m,o,a),this.Lo(t,p,m,r).then(v=>(pe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw wo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",r),v})}ko(t,i,r,o,a,d){return this.Oo(t,i,r,o,a)}Bo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,a)=>t[a]=o),r&&r.headers.forEach((o,a)=>t[a]=o)}No(t,i){let r=wM[t];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,r){let o=If();return new Promise((a,d)=>{let p=new bf;p.setWithCredentials(!0),p.listenOnce(yf.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Ta.NO_ERROR:let v=p.getResponseJson();pe(Ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),a(v);break;case Ta.TIMEOUT:pe(Ft,`RPC '${e}' ${o} timed out`),d(new _e(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Ta.HTTP_ERROR:let b=p.getStatus();if(pe(Ft,`RPC '${e}' ${o} failed with status:`,b,"response text:",p.getResponseText()),b>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);let M=T?.error;if(M&&M.status&&M.message){let U=function(V){let ae=V.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ae)>=0?ae:Y.UNKNOWN}(M.status);d(new _e(U,M.message))}else d(new _e(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new _e(Y.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{pe(Ft,`RPC '${e}' ${o} completed.`)}});let m=JSON.stringify(r);pe(Ft,`RPC '${e}' ${o} sending request:`,r),p.send(t,"POST",m,i,15)})}qo(e,t,i){let r=If(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wf(),d=Cf(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;let v=o.join("");pe(Ft,`Creating RPC '${e}' stream ${r}: ${v}`,p);let b=a.createWebChannel(v,p),T=!1,M=!1,U=new Ng({Eo:V=>{M?pe(Ft,`Not sending because RPC '${e}' stream ${r} is closed:`,V):(T||(pe(Ft,`Opening RPC '${e}' stream ${r} transport.`),b.open(),T=!0),pe(Ft,`RPC '${e}' stream ${r} sending:`,V),b.send(V))},Ao:()=>b.close()}),L=(V,ae,ge)=>{V.listen(ae,se=>{try{ge(se)}catch(Q){setTimeout(()=>{throw Q},0)}})};return L(b,fo.EventType.OPEN,()=>{M||(pe(Ft,`RPC '${e}' stream ${r} transport opened.`),U.So())}),L(b,fo.EventType.CLOSE,()=>{M||(M=!0,pe(Ft,`RPC '${e}' stream ${r} transport closed`),U.Do())}),L(b,fo.EventType.ERROR,V=>{M||(M=!0,wo(Ft,`RPC '${e}' stream ${r} transport errored:`,V),U.Do(new _e(Y.UNAVAILABLE,"The operation could not be completed")))}),L(b,fo.EventType.MESSAGE,V=>{var ae;if(!M){let ge=V.data[0];qe(!!ge);let se=ge,Q=se?.error||((ae=se[0])===null||ae===void 0?void 0:ae.error);if(Q){pe(Ft,`RPC '${e}' stream ${r} received error:`,Q);let be=Q.status,fe=function(I){let k=ut[I];if(k!==void 0)return hw(k)}(be),P=Q.message;fe===void 0&&(fe=Y.INTERNAL,P="Unknown error status: "+be+" with message "+Q.message),M=!0,U.Do(new _e(fe,P)),b.close()}else pe(Ft,`RPC '${e}' stream ${r} received:`,ge),U.vo(ge)}}),L(d,Ef.STAT_EVENT,V=>{V.stat===eu.PROXY?pe(Ft,`RPC '${e}' stream ${r} detected buffering proxy`):V.stat===eu.NOPROXY&&pe(Ft,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{U.bo()},0),U}};function Sf(){return typeof document<"u"?document:null}function zu(n){return new og(n,!0)}var Tu=class{constructor(e,t,i=1e3,r=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=r,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-i);r>0&&pe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Iu=class{constructor(e,t,i,r,o,a,d,p){this.li=e,this.Yo=i,this.Zo=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Tu(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}stop(){return F(this,null,function*(){this.i_()&&(yield this.close(0))})}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}u_(){return F(this,null,function*(){if(this.s_())return this.close(0)})}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}close(e,t){return F(this,null,function*(){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(hi(t.toString()),hi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.po(t)})}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===t&&this.I_(i,r)},i=>{e(()=>{let r=new _e(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(r)})})}I_(e,t){let i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.d_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(()=>F(this,null,function*(){this.state=0,this.start()}))}d_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Fg=class extends Iu{constructor(e,t,i,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,a),this.serializer=o}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=iM(this.serializer,e),i=function(o){if(!("targetChange"in o))return Ae.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?Ae.min():a.readTime?zn(a.readTime):Ae.min()}(e);return this.listener.R_(t,i)}V_(e){let t={};t.database=cg(this.serializer),t.addTarget=function(o,a){let d,p=a.target;if(d=Qf(p)?{documents:sM(o,p)}:{query:aM(o,p).ct},d.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){d.resumeToken=mw(o,a.resumeToken);let m=sg(o,a.expectedCount);m!==null&&(d.expectedCount=m)}else if(a.snapshotVersion.compareTo(Ae.min())>0){d.readTime=_u(o,a.snapshotVersion.toTimestamp());let m=sg(o,a.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);let i=cM(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){let t={};t.database=cg(this.serializer),t.removeTarget=e,this.c_(t)}},Lg=class extends Iu{constructor(e,t,i,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=oM(e.writeResults,e.commitTime),i=zn(e.commitTime);return this.listener.y_(i,t)}w_(){let e={};e.database=cg(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(i=>rM(this.serializer,i))};this.c_(t)}};var Ug=class extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new _e(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,ag(t,i),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new _e(Y.UNKNOWN,o.toString())})}ko(e,t,i,r,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,d])=>this.connection.ko(e,ag(t,i),r,a,d,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new _e(Y.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},jg=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(hi(t),this.C_=!1):pe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var Bg=class{constructor(e,t,i,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{i.enqueueAndForget(()=>F(this,null,function*(){Cr(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),yield function(p){return F(this,null,function*(){let m=xe(p);m.k_.add(4),yield qa(m),m.K_.set("Unknown"),m.k_.delete(4),yield Gu(m)})}(this))}))}),this.K_=new jg(i,r)}};function Gu(n){return F(this,null,function*(){if(Cr(n))for(let e of n.q_)yield e(!0)})}function qa(n){return F(this,null,function*(){for(let e of n.q_)yield e(!1)})}function ww(n,e){let t=xe(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),y0(t)?b0(t):jo(t).s_()&&_0(t,e))}function v0(n,e){let t=xe(n),i=jo(t);t.L_.delete(e),i.s_()&&Tw(t,e),t.L_.size===0&&(i.s_()?i.a_():Cr(t)&&t.K_.set("Unknown"))}function _0(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jo(n).V_(e)}function Tw(n,e){n.U_.xe(e),jo(n).m_(e)}function b0(n){n.U_=new rg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),jo(n).start(),n.K_.F_()}function y0(n){return Cr(n)&&!jo(n).i_()&&n.L_.size>0}function Cr(n){return xe(n).k_.size===0}function Iw(n){n.U_=void 0}function TM(n){return F(this,null,function*(){n.K_.set("Online")})}function IM(n){return F(this,null,function*(){n.L_.forEach((e,t)=>{_0(n,e)})})}function SM(n,e){return F(this,null,function*(){Iw(n),y0(n)?(n.K_.O_(e),b0(n)):n.K_.set("Unknown")})}function xM(n,e,t){return F(this,null,function*(){if(n.K_.set("Online"),e instanceof gu&&e.state===2&&e.cause)try{yield function(r,o){return F(this,null,function*(){let a=o.cause;for(let d of o.targetIds)r.L_.has(d)&&(yield r.remoteSyncer.rejectListen(d,a),r.L_.delete(d),r.U_.removeTarget(d))})}(n,e)}catch(i){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),yield Su(n,i)}else if(e instanceof Eo?n.U_.$e(e):e instanceof fu?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{let i=yield Cw(n.localStore);t.compareTo(i)>=0&&(yield function(o,a){let d=o.U_.it(a);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){let v=o.L_.get(m);v&&o.L_.set(m,v.withResumeToken(p.resumeToken,a))}}),d.targetMismatches.forEach((p,m)=>{let v=o.L_.get(p);if(!v)return;o.L_.set(p,v.withResumeToken(Lt.EMPTY_BYTE_STRING,v.snapshotVersion)),Tw(o,p);let b=new Na(v.target,p,m,v.sequenceNumber);_0(o,b)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t))}catch(i){pe("RemoteStore","Failed to raise snapshot:",i),yield Su(n,i)}})}function Su(n,e,t){return F(this,null,function*(){if(!Uo(e))throw e;n.k_.add(1),yield qa(n),n.K_.set("Offline"),t||(t=()=>Cw(n.localStore)),n.asyncQueue.enqueueRetryable(()=>F(this,null,function*(){pe("RemoteStore","Retrying IndexedDB access"),yield t(),n.k_.delete(1),yield Gu(n)}))})}function Sw(n,e){return e().catch(t=>Su(n,t,e))}function Wu(n){return F(this,null,function*(){let e=xe(n),t=Wi(e),i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;AM(e);)try{let r=yield yM(e.localStore,i);if(r===null){e.B_.length===0&&t.a_();break}i=r.batchId,RM(e,r)}catch(r){yield Su(e,r)}xw(e)&&Aw(e)})}function AM(n){return Cr(n)&&n.B_.length<10}function RM(n,e){n.B_.push(e);let t=Wi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function xw(n){return Cr(n)&&!Wi(n).i_()&&n.B_.length>0}function Aw(n){Wi(n).start()}function PM(n){return F(this,null,function*(){Wi(n).w_()})}function kM(n){return F(this,null,function*(){let e=Wi(n);for(let t of n.B_)e.g_(t.mutations)})}function DM(n,e,t){return F(this,null,function*(){let i=n.B_.shift(),r=eg.from(i,e,t);yield Sw(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),yield Wu(n)})}function MM(n,e){return F(this,null,function*(){e&&Wi(n).f_&&(yield function(i,r){return F(this,null,function*(){if(function(a){return QD(a)&&a!==Y.ABORTED}(r.code)){let o=i.B_.shift();Wi(i).__(),yield Sw(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,r)),yield Wu(i)}})}(n,e)),xw(n)&&Aw(n)})}function NC(n,e){return F(this,null,function*(){let t=xe(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");let i=Cr(t);t.k_.add(3),yield qa(t),i&&t.K_.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),yield Gu(t)})}function OM(n,e){return F(this,null,function*(){let t=xe(n);e?(t.k_.delete(2),yield Gu(t)):e||(t.k_.add(2),yield qa(t),t.K_.set("Unknown"))})}function jo(n){return n.W_||(n.W_=function(t,i,r){let o=xe(t);return o.b_(),new Fg(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Ro:TM.bind(null,n),mo:IM.bind(null,n),po:SM.bind(null,n),R_:xM.bind(null,n)}),n.q_.push(e=>F(this,null,function*(){e?(n.W_.__(),y0(n)?b0(n):n.K_.set("Unknown")):(yield n.W_.stop(),Iw(n))}))),n.W_}function Wi(n){return n.G_||(n.G_=function(t,i,r){let o=xe(t);return o.b_(),new Lg(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:PM.bind(null,n),po:MM.bind(null,n),p_:kM.bind(null,n),y_:DM.bind(null,n)}),n.q_.push(e=>F(this,null,function*(){e?(n.G_.__(),yield Wu(n)):(yield n.G_.stop(),n.B_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))}))),n.G_}var qg=class n{constructor(e,t,i,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,o){let a=Date.now()+i,d=new n(e,t,a,r,o);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function E0(n,e){if(hi("AsyncQueue",`${e}: ${n}`),Uo(n))return new _e(Y.UNAVAILABLE,`${e}: ${n}`);throw n}var xu=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=Ia(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let i=new n;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}};var Au=class{constructor(){this.z_=new it(Te.comparator)}track(e){let t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ie():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}},Oo=class n{constructor(e,t,i,r,o,a,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,r,o){let a=[];return t.forEach(d=>{a.push({type:0,doc:d})}),new n(e,t,xu.emptySet(t),a,i,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}};var $g=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},zg=class{constructor(){this.queries=VC(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){let r=xe(t),o=r.queries;r.queries=VC(),o.forEach((a,d)=>{for(let p of d.J_)p.onError(i)})})(this,new _e(Y.ABORTED,"Firestore shutting down"))}};function VC(){return new gi(n=>tw(n),qu)}function NM(n,e){return F(this,null,function*(){let t=xe(n),i=3,r=e.query,o=t.queries.get(r);o?!o.Y_()&&e.Z_()&&(i=2):(o=new $g,i=e.Z_()?0:1);try{switch(i){case 0:o.H_=yield t.onListen(r,!0);break;case 1:o.H_=yield t.onListen(r,!1);break;case 2:yield t.onFirstRemoteStoreListen(r)}}catch(a){let d=E0(a,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(d)}t.queries.set(r,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&C0(t)})}function VM(n,e){return F(this,null,function*(){let t=xe(n),i=e.query,r=3,o=t.queries.get(i);if(o){let a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?r=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}})}function FM(n,e){let t=xe(n),i=!1;for(let r of e){let o=r.query,a=t.queries.get(o);if(a){for(let d of a.J_)d.ta(r)&&(i=!0);a.H_=r}}i&&C0(t)}function LM(n,e,t){let i=xe(n),r=i.queries.get(e);if(r)for(let o of r.J_)o.onError(t);i.queries.delete(e)}function C0(n){n.X_.forEach(e=>{e.next()})}var Gg,FC;(FC=Gg||(Gg={})).na="default",FC.Cache="cache";var Wg=class{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){let i=[];for(let r of e.docChanges)r.type!==3&&i.push(r);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Gg.Cache}};var Ru=class{constructor(e){this.key=e}},Pu=class{constructor(e){this.key=e}},Hg=class{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Me(),this.mutatedKeys=Me(),this.Va=nw(e),this.ma=new xu(this.Va)}get fa(){return this.Ea}ga(e,t){let i=t?t.pa:new Au,r=t?t.ma:this.ma,o=t?t.mutatedKeys:this.mutatedKeys,a=r,d=!1,p=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,m=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((v,b)=>{let T=r.get(v),M=$u(this.query,b)?b:null,U=!!T&&this.mutatedKeys.has(T.key),L=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations),V=!1;T&&M?T.data.isEqual(M.data)?U!==L&&(i.track({type:3,doc:M}),V=!0):this.ya(T,M)||(i.track({type:2,doc:M}),V=!0,(p&&this.Va(M,p)>0||m&&this.Va(M,m)<0)&&(d=!0)):!T&&M?(i.track({type:0,doc:M}),V=!0):T&&!M&&(i.track({type:1,doc:T}),V=!0,(p||m)&&(d=!0)),V&&(M?(a=a.add(M),o=L?o.add(v):o.delete(v)):(a=a.delete(v),o=o.delete(v)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let v=this.query.limitType==="F"?a.last():a.first();a=a.delete(v.key),o=o.delete(v.key),i.track({type:1,doc:v})}return{ma:a,pa:i,ss:d,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){let o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((v,b)=>function(M,U){let L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return L(M)-L(U)}(v.type,b.type)||this.Va(v.doc,b.doc)),this.wa(i),r=r!=null&&r;let d=t&&!r?this.Sa():[],p=this.Ra.size===0&&this.current&&!r?1:0,m=p!==this.Aa;return this.Aa=p,a.length!==0||m?{snapshot:new Oo(this.query,e.ma,o,a,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Au,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=Me(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});let t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new Pu(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Ru(i))}),t}va(e){this.Ea=e.Es,this.Ra=Me();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Oo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},Kg=class{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}},Qg=class{constructor(e){this.key=e,this.Fa=!1}},Jg=class{constructor(e,t,i,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new gi(d=>tw(d),qu),this.Oa=new Map,this.Na=new Set,this.Ba=new it(Te.comparator),this.La=new Map,this.ka=new Fa,this.qa={},this.Qa=new Map,this.Ka=Va.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};function UM(n,e,t=!0){return F(this,null,function*(){let i=Ow(n),r,o=i.xa.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Ca()):r=yield Rw(i,e,t,!0),r})}function jM(n,e){return F(this,null,function*(){let t=Ow(n);yield Rw(t,e,!0,!1)})}function Rw(n,e,t,i){return F(this,null,function*(){let r=yield EM(n.localStore,$n(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t),d;return i&&(d=yield BM(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&ww(n.remoteStore,r),d})}function BM(n,e,t,i,r){return F(this,null,function*(){n.Ua=(b,T,M)=>function(L,V,ae,ge){return F(this,null,function*(){let se=V.view.ga(ae);se.ss&&(se=yield OC(L.localStore,V.query,!1).then(({documents:P})=>V.view.ga(P,se)));let Q=ge&&ge.targetChanges.get(V.targetId),be=ge&&ge.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(se,L.isPrimaryClient,Q,be);return UC(L,V.targetId,fe.ba),fe.snapshot})}(n,b,T,M);let o=yield OC(n.localStore,e,!0),a=new Hg(e,o.Es),d=a.ga(o.documents),p=Oa.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),m=a.applyChanges(d,n.isPrimaryClient,p);UC(n,t,m.ba);let v=new Kg(e,t,a);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),m.snapshot})}function qM(n,e,t){return F(this,null,function*(){let i=xe(n),r=i.xa.get(e),o=i.Oa.get(r.targetId);if(o.length>1)return i.Oa.set(r.targetId,o.filter(a=>!qu(a,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||(yield Dg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&v0(i.remoteStore,r.targetId),Xg(i,r.targetId)}).catch(Lo))):(Xg(i,r.targetId),yield Dg(i.localStore,r.targetId,!0))})}function $M(n,e){return F(this,null,function*(){let t=xe(n),i=t.xa.get(e),r=t.Oa.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),v0(t.remoteStore,i.targetId))})}function zM(n,e,t){return F(this,null,function*(){let i=XM(n);try{let r=yield function(a,d){let p=xe(a),m=It.now(),v=d.reduce((M,U)=>M.add(U.key),Me()),b,T;return p.persistence.runTransaction("Locally write mutations","readwrite",M=>{let U=vi(),L=Me();return p.hs.getEntries(M,v).next(V=>{U=V,U.forEach((ae,ge)=>{ge.isValidDocument()||(L=L.add(ae))})}).next(()=>p.localDocuments.getOverlayedDocuments(M,U)).next(V=>{b=V;let ae=[];for(let ge of d){let se=KD(ge,b.get(ge.key).overlayedDocument);se!=null&&ae.push(new Hn(ge.key,se,QC(se.value.mapValue),pi.exists(!0)))}return p.mutationQueue.addMutationBatch(M,m,ae,d)}).next(V=>{T=V;let ae=V.applyToLocalDocumentSet(b,L);return p.documentOverlayCache.saveOverlays(M,V.batchId,ae)})}).then(()=>({batchId:T.batchId,changes:rw(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(a,d,p){let m=a.qa[a.currentUser.toKey()];m||(m=new it(Ne)),m=m.insert(d,p),a.qa[a.currentUser.toKey()]=m}(i,r.batchId,t),yield $a(i,r.changes),yield Wu(i.remoteStore)}catch(r){let o=E0(r,"Failed to persist write");t.reject(o)}})}function Pw(n,e){return F(this,null,function*(){let t=xe(n);try{let i=yield _M(t.localStore,e);e.targetChanges.forEach((r,o)=>{let a=t.La.get(o);a&&(qe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.Fa=!0:r.modifiedDocuments.size>0?qe(a.Fa):r.removedDocuments.size>0&&(qe(a.Fa),a.Fa=!1))}),yield $a(t,i,e)}catch(i){yield Lo(i)}})}function LC(n,e,t){let i=xe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){let r=[];i.xa.forEach((o,a)=>{let d=a.view.ea(e);d.snapshot&&r.push(d.snapshot)}),function(a,d){let p=xe(a);p.onlineState=d;let m=!1;p.queries.forEach((v,b)=>{for(let T of b.J_)T.ea(d)&&(m=!0)}),m&&C0(p)}(i.eventManager,e),r.length&&i.Ma.R_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}function GM(n,e,t){return F(this,null,function*(){let i=xe(n);i.sharedClientState.updateQueryState(e,"rejected",t);let r=i.La.get(e),o=r&&r.key;if(o){let a=new it(Te.comparator);a=a.insert(o,xn.newNoDocument(o,Ae.min()));let d=Me().add(o),p=new mu(Ae.min(),new Map,new it(Ne),a,d);yield Pw(i,p),i.Ba=i.Ba.remove(o),i.La.delete(e),w0(i)}else yield Dg(i.localStore,e,!1).then(()=>Xg(i,e,t)).catch(Lo)})}function WM(n,e){return F(this,null,function*(){let t=xe(n),i=e.batch.batchId;try{let r=yield vM(t.localStore,e);Dw(t,i,null),kw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),yield $a(t,r)}catch(r){yield Lo(r)}})}function HM(n,e,t){return F(this,null,function*(){let i=xe(n);try{let r=yield function(a,d){let p=xe(a);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return p.mutationQueue.lookupMutationBatch(m,d).next(b=>(qe(b!==null),v=b.keys(),p.mutationQueue.removeMutationBatch(m,b))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>p.localDocuments.getDocuments(m,v))})}(i.localStore,e);Dw(i,e,t),kw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),yield $a(i,r)}catch(r){yield Lo(r)}})}function kw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Dw(n,e,t){let i=xe(n),r=i.qa[i.currentUser.toKey()];if(r){let o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),i.qa[i.currentUser.toKey()]=r}}function Xg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Mw(n,i)})}function Mw(n,e){n.Na.delete(e.path.canonicalString());let t=n.Ba.get(e);t!==null&&(v0(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),w0(n))}function UC(n,e,t){for(let i of t)i instanceof Ru?(n.ka.addReference(i.key,e),KM(n,i)):i instanceof Pu?(pe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Mw(n,i.key)):Ie()}function KM(n,e){let t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(pe("SyncEngine","New document in limbo: "+t),n.Na.add(i),w0(n))}function w0(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new Te(nt.fromString(e)),i=n.Ka.next();n.La.set(i,new Qg(t)),n.Ba=n.Ba.insert(t,i),ww(n.remoteStore,new Na($n(m0(t.path)),i,"TargetPurposeLimboResolution",c0.oe))}}function $a(n,e,t){return F(this,null,function*(){let i=xe(n),r=[],o=[],a=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{a.push(i.Ua(p,e,t).then(m=>{var v;if((m||t)&&i.isPrimaryClient){let b=m?!m.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(m){r.push(m);let b=Ag.zi(p.targetId,m);o.push(b)}}))}),yield Promise.all(a),i.Ma.R_(r),yield function(p,m){return F(this,null,function*(){let v=xe(p);try{yield v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>J.forEach(m,T=>J.forEach(T.Wi,M=>v.persistence.referenceDelegate.addReference(b,T.targetId,M)).next(()=>J.forEach(T.Gi,M=>v.persistence.referenceDelegate.removeReference(b,T.targetId,M)))))}catch(b){if(!Uo(b))throw b;pe("LocalStore","Failed to update sequence numbers: "+b)}for(let b of m){let T=b.targetId;if(!b.fromCache){let M=v.us.get(T),U=M.snapshotVersion,L=M.withLastLimboFreeSnapshotVersion(U);v.us=v.us.insert(T,L)}}})}(i.localStore,o))})}function QM(n,e){return F(this,null,function*(){let t=xe(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());let i=yield Ew(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(d=>{d.forEach(p=>{p.reject(new _e(Y.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),yield $a(t,i.Ts)}})}function JM(n,e){let t=xe(n),i=t.La.get(e);if(i&&i.Fa)return Me().add(i.key);{let r=Me(),o=t.Oa.get(e);if(!o)return r;for(let a of o){let d=t.xa.get(a);r=r.unionWith(d.view.fa)}return r}}function Ow(n){let e=xe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GM.bind(null,e),e.Ma.R_=FM.bind(null,e.eventManager),e.Ma.Wa=LM.bind(null,e.eventManager),e}function XM(n){let e=xe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HM.bind(null,e),e}var Nw=(()=>{class n{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(t){return F(this,null,function*(){this.serializer=zu(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),yield this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)})}Ja(t,i){return null}Ya(t,i){return null}Ha(t){return gM(this.persistence,new Pg,t.initialUser,this.serializer)}ja(t){return new yu(xg.ei,this.serializer)}za(t){return new Mg}terminate(){return F(this,null,function*(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}return n.provider={build:()=>new n},n})(),Yg=class extends Nw{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){qe(this.persistence.referenceDelegate instanceof Eu);let i=this.persistence.referenceDelegate.garbageCollector;return new mg(i,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new yu(i=>Eu.ei(i,t),this.serializer)}};var YM=(()=>{class n{initialize(t,i){return F(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>LC(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QM.bind(null,this.syncEngine),yield OM(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return function(){return new zg}()}createDatastore(t){let i=zu(t.databaseInfo.databaseId),r=function(a){return new Vg(a)}(t.databaseInfo);return function(a,d,p,m){return new Ug(a,d,p,m)}(t.authCredentials,t.appCheckCredentials,r,i)}createRemoteStore(t){return function(r,o,a,d,p){return new Bg(r,o,a,d,p)}(this.localStore,this.datastore,t.asyncQueue,i=>LC(this.syncEngine,i,0),function(){return wu.p()?new wu:new Og}())}createSyncEngine(t,i){return function(o,a,d,p,m,v,b){let T=new Jg(o,a,d,p,m,v);return b&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}terminate(){return F(this,null,function*(){var t,i;yield function(o){return F(this,null,function*(){let a=xe(o);pe("RemoteStore","RemoteStore shutting down."),a.k_.add(5),yield qa(a),a.Q_.shutdown(),a.K_.set("Unknown")})}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()})}}return n.provider={build:()=>new n},n})();var Zg=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):hi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var e0=class{constructor(e,t,i,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=yt.UNAUTHENTICATED,this.clientId=lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,a=>F(this,null,function*(){pe("FirestoreClient","Received user=",a.uid),yield this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(i,a=>(pe("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>F(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let i=E0(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}};function xf(n,e){return F(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;yield e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(r=>F(this,null,function*(){i.isEqual(r)||(yield Ew(e.localStore,r),i=r)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function jC(n,e){return F(this,null,function*(){n.asyncQueue.verifyOperationInProgress();let t=yield ZM(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>NC(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>NC(e.remoteStore,r)),n._onlineComponents=e})}function ZM(n){return F(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{yield xf(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(r){return r.name==="FirebaseError"?r.code===Y.FAILED_PRECONDITION||r.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),yield xf(n,new Nw)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),yield xf(n,new Yg(void 0));return n._offlineComponents})}function Vw(n){return F(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),yield jC(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),yield jC(n,new YM))),n._onlineComponents})}function eO(n){return Vw(n).then(e=>e.syncEngine)}function BC(n){return F(this,null,function*(){let e=yield Vw(n),t=e.eventManager;return t.onListen=UM.bind(null,e.syncEngine),t.onUnlisten=qM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$M.bind(null,e.syncEngine),t})}function Fw(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var qC=new Map;function Lw(n,e,t){if(!t)throw new _e(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tO(n,e,t,i){if(e===!0&&i===!0)throw new _e(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $C(n){if(!Te.isDocumentKey(n))throw new _e(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zC(n){if(Te.isDocumentKey(n))throw new _e(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function T0(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie()}function $i(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=T0(n);throw new _e(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var ku=class{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new _e(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new _e(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new _e(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},No=class{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Af;switch(i.type){case"firstParty":return new Df(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return F(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let i=qC.get(t);i&&(pe("ComponentProvider","Removing Datastore"),qC.delete(t),i.terminate())}(this),Promise.resolve()}};function Uw(n,e,t,i={}){var r;let o=(n=$i(n,No))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=yt.MOCK_USER;else{d=u1(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);let m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new _e(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(m)}n._authCredentials=new Rf(new au(d,p))}}var Du=class n{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},sn=class n{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},zi=class n extends Du{constructor(e,t,i){super(e,t,m0(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new Te(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function jw(n,e,...t){if(n=Vt(n),Lw("collection","path",e),n instanceof No){let i=nt.fromString(e,...t);return zC(i),new zi(n,null,i)}{if(!(n instanceof sn||n instanceof zi))throw new _e(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=n._path.child(nt.fromString(e,...t));return zC(i),new zi(n.firestore,null,i)}}function I0(n,e,...t){if(n=Vt(n),arguments.length===1&&(e=lu.newId()),Lw("doc","path",e),n instanceof No){let i=nt.fromString(e,...t);return $C(i),new sn(n,null,new Te(i))}{if(!(n instanceof sn||n instanceof zi))throw new _e(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=n._path.child(nt.fromString(e,...t));return $C(i),new sn(n.firestore,n instanceof zi?n.converter:null,new Te(i))}}var Mu=class{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Tu(this,"async_queue_retry"),this.fu=()=>{let i=Sf();i&&pe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;let t=Sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=Sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new di;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}wu(){return F(this,null,function*(){if(this.Iu.length!==0){try{yield this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Uo(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}})}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;let r=function(a){let d=a.message||"";return a.stack&&(d=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),d}(i);throw hi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let r=qg.createAndSchedule(this,e,t,i,o=>this.Su(o));return this.Eu.push(r),r}pu(){this.Au&&Ie()}verifyOperationInProgress(){}bu(){return F(this,null,function*(){let e;do e=this.gu,yield e;while(e!==this.gu)})}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(let t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}};function GC(n){return function(t,i){if(typeof t!="object"||t===null)return!1;let r=t;for(let o of i)if(o in r&&typeof r[o]=="function")return!0;return!1}(n,["next","error","complete"])}var Hi=class extends No{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Mu,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return F(this,null,function*(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Mu(e),this._firestoreClient=void 0,yield e}})}};function Bw(n,e){let t=typeof n=="object"?n:po(),i=typeof n=="string"?n:e||"(default)",r=Nc(t,"firestore").getImmediate({identifier:i});if(!r._initialized){let o=l1("firestore");o&&Uw(r,...o)}return r}function qw(n){if(n._terminated)throw new _e(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nO(n),n._firestoreClient}function nO(n){var e,t,i;let r=n._freezeSettings(),o=function(d,p,m,v){return new Ff(d,p,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Fw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new e0(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){let p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}}(n._componentsProvider))}var La=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Lt.fromBase64String(e))}catch(t){throw new _e(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Vo=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Ua=class{constructor(e){this._methodName=e}};var ja=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}};var Ba=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==r[o])return!1;return!0}(this._values,e._values)}};var iO=/^__.*__$/,t0=class{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Er(e,this.data,t,this.fieldTransforms)}},Ou=class{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function $w(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}var n0=class n{constructor(e,t,i,r,o,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:i,Nu:!1});return r.Bu(e),r}Lu(e){var t;let i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Vu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if($w(this.Mu)&&iO.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},i0=class{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zu(e)}$u(e,t,i,r=!1){return new n0({Mu:e,methodName:t,Ku:i,path:on.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function zw(n){let e=n._freezeSettings(),t=zu(n._databaseId);return new i0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rO(n,e,t,i,r,o={}){let a=n.$u(o.merge||o.mergeFields?2:0,e,t,r);S0("Data must be an object, but it was:",a,i);let d=Gw(i,a),p,m;if(o.merge)p=new _n(a.fieldMask),m=a.fieldTransforms;else if(o.mergeFields){let v=[];for(let b of o.mergeFields){let T=r0(e,b,t);if(!a.contains(T))throw new _e(Y.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Hw(v,T)||v.push(T)}p=new _n(v),m=a.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,m=a.fieldTransforms;return new t0(new rn(d),p,m)}var Nu=class n extends Ua{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function oO(n,e,t,i){let r=n.$u(1,e,t);S0("Data must be an object, but it was:",r,i);let o=[],a=rn.empty();Ki(i,(p,m)=>{let v=x0(e,p,t);m=Vt(m);let b=r.Lu(v);if(m instanceof Nu)o.push(v);else{let T=Hu(m,b);T!=null&&(o.push(v),a.set(v,T))}});let d=new _n(o);return new Ou(a,d,r.fieldTransforms)}function sO(n,e,t,i,r,o){let a=n.$u(1,e,t),d=[r0(e,i,t)],p=[r];if(o.length%2!=0)throw new _e(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)d.push(r0(e,o[T])),p.push(o[T+1]);let m=[],v=rn.empty();for(let T=d.length-1;T>=0;--T)if(!Hw(m,d[T])){let M=d[T],U=p[T];U=Vt(U);let L=a.Lu(M);if(U instanceof Nu)m.push(M);else{let V=Hu(U,L);V!=null&&(m.push(M),v.set(M,V))}}let b=new _n(m);return new Ou(v,b,a.fieldTransforms)}function Hu(n,e){if(Ww(n=Vt(n)))return S0("Unsupported field value:",e,n),Gw(n,e);if(n instanceof Ua)return function(i,r){if(!$w(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);let o=i._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,r){let o=[],a=0;for(let d of i){let p=Hu(d,r.ku(a));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),a++}return{arrayValue:{values:o}}}(n,e)}return function(i,r){if((i=Vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return $D(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let o=It.fromDate(i);return{timestampValue:_u(r.serializer,o)}}if(i instanceof It){let o=new It(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_u(r.serializer,o)}}if(i instanceof ja)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof La)return{bytesValue:mw(r.serializer,i._byteString)};if(i instanceof sn){let o=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(o))throw r.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:g0(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof Ba)return function(a,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return f0(d.serializer,p)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${T0(i)}`)}(n,e)}function Gw(n,e){let t={};return WC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,(i,r)=>{let o=Hu(r,e.Ou(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function Ww(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof ja||n instanceof La||n instanceof sn||n instanceof Ua||n instanceof Ba)}function S0(n,e,t){if(!Ww(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){let i=T0(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function r0(n,e,t){if((e=Vt(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return x0(n,e);throw Vu("Field path arguments must be of type string or ",n,!1,void 0,t)}var aO=new RegExp("[~\\*/\\[\\]]");function x0(n,e,t){if(e.search(aO)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vu(n,e,t,i,r){let o=i&&!i.isEmpty(),a=r!==void 0,d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||a)&&(p+=" (found",o&&(p+=` in field ${i}`),a&&(p+=` in document ${r}`),p+=")"),new _e(Y.INVALID_ARGUMENT,d+n+p)}function Hw(n,e){return n.some(t=>t.isEqual(e))}var Fu=class{constructor(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new o0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Kw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},o0=class extends Fu{data(){return super.data()}};function Kw(n,e){return typeof e=="string"?x0(n,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}function lO(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _e(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var s0=class{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let i={};return Ki(e,(r,o)=>{i[r]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,r;let o=(r=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>Xe(a.doubleValue));return new Ba(o)}convertGeoPoint(e){return new ja(Xe(e.latitude),Xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":let i=Bu(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ka(e));default:return null}}convertTimestamp(e){let t=mi(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){let i=nt.fromString(e);qe(yw(i));let r=new pu(i.get(1),i.get(3)),o=new Te(i.popFirst(5));return r.isEqual(t)||hi(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function cO(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}var gr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Lu=class extends Fu{constructor(e,t,i,r,o,a){super(e,t,i,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let i=this._document.data.field(Kw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},Co=class extends Lu{data(e={}){return super.data(e)}},a0=class{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Co(this._firestore,this._userDataWriter,i.key,i,new gr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _e(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(d=>{let p=new Co(r._firestore,r._userDataWriter,d.doc.key,d.doc,new gr(r._snapshot.mutatedKeys.has(d.doc.key),r._snapshot.fromCache),r.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{let p=new Co(r._firestore,r._userDataWriter,d.doc.key,d.doc,new gr(r._snapshot.mutatedKeys.has(d.doc.key),r._snapshot.fromCache),r.query.converter),m=-1,v=-1;return d.type!==0&&(m=a.indexOf(d.doc.key),a=a.delete(d.doc.key)),d.type!==1&&(a=a.add(d.doc),v=a.indexOf(d.doc.key)),{type:uO(d.type),doc:p,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function uO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}var Uu=class extends s0{constructor(e){super(),this.firestore=e}convertBytes(e){return new La(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,t)}};function Qw(n,e,t,...i){n=$i(n,sn);let r=$i(n.firestore,Hi),o=zw(r),a;return a=typeof(e=Vt(e))=="string"||e instanceof Vo?sO(o,"updateDoc",n._key,e,t,i):oO(o,"updateDoc",n._key,e),R0(r,[a.toMutation(n._key,pi.exists(!0))])}function Jw(n){return R0($i(n.firestore,Hi),[new Ma(n._key,pi.none())])}function Xw(n,e){let t=$i(n.firestore,Hi),i=I0(n),r=cO(n.converter,e);return R0(t,[rO(zw(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,pi.exists(!1))]).then(()=>i)}function A0(n,...e){var t,i,r;n=Vt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||GC(e[a])||(o=e[a],a++);let d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(GC(e[a])){let b=e[a];e[a]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[a+1]=(i=b.error)===null||i===void 0?void 0:i.bind(b),e[a+2]=(r=b.complete)===null||r===void 0?void 0:r.bind(b)}let p,m,v;if(n instanceof sn)m=$i(n.firestore,Hi),v=m0(n._key.path),p={next:b=>{e[a]&&e[a](dO(m,n,b))},error:e[a+1],complete:e[a+2]};else{let b=$i(n,Du);m=$i(b.firestore,Hi),v=b._query;let T=new Uu(m);p={next:M=>{e[a]&&e[a](new a0(m,T,b,M))},error:e[a+1],complete:e[a+2]},lO(n._query)}return function(T,M,U,L){let V=new Zg(L),ae=new Wg(M,V,U);return T.asyncQueue.enqueueAndForget(()=>F(this,null,function*(){return NM(yield BC(T),ae)})),()=>{V.eu(),T.asyncQueue.enqueueAndForget(()=>F(this,null,function*(){return VM(yield BC(T),ae)}))}}(qw(m),v,d,p)}function R0(n,e){return function(i,r){let o=new di;return i.asyncQueue.enqueueAndForget(()=>F(this,null,function*(){return zM(yield eO(i),r,o)})),o.promise}(qw(n),e)}function dO(n,e,t){let i=t.docs.get(e._key),r=new Uu(n);return new Lu(n,r,e._key,i,new gr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Fo=r})(uo),In(new Gt("firestore",(i,{instanceIdentifier:r,options:o})=>{let a=i.getProvider("app").getImmediate(),d=new Hi(new Pf(i.getProvider("auth-internal")),new Of(i.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new _e(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pu(m.options.projectId,v)}(a,r),a);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),lt(pC,"4.7.6",e),lt(pC,"4.7.6","esm2017")})();var Ku=function(){return Ku=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ku.apply(this,arguments)};var mO={includeMetadataChanges:!1};function P0(n,e){return e===void 0&&(e=mO),new rt(function(t){var i=A0(n,e,{next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)});return{unsubscribe:i}})}function Yw(n){return P0(n,{includeMetadataChanges:!0})}function Zw(n,e){return e===void 0&&(e={}),Yw(n).pipe(ve(function(t){return k0(t,e)}))}function k0(n,e){var t;e===void 0&&(e={});var i=n.data(e);return!n.exists()||typeof i!="object"||i===null||!e.idField?i:Ku(Ku({},i),(t={},t[e.idField]=n.id,t))}function eT(n){return P0(n,{includeMetadataChanges:!0}).pipe(ve(function(e){return e.docs}))}function tT(n,e){return e===void 0&&(e={}),eT(n).pipe(ve(function(t){return t.map(function(i){return k0(i,e)})}))}var wr=class{constructor(e){return e}},nT="firestore",D0=class{constructor(){return mo(nT)}};var M0=new le("angularfire2.firestore-instances");function fO(n,e){let t=Uc(nT,n,e);return t&&new wr(t)}function gO(n){return(e,t)=>{let i=e.runOutsideAngular(()=>n(t));return new wr(i)}}var vO={provide:D0,deps:[[new yn,M0]]},_O={provide:wr,useFactory:fO,deps:[[new yn,M0],dr]};function iT(n,...e){return lt("angularfire",cr.full,"fst"),ft([_O,vO,{provide:M0,useFactory:gO(n),multi:!0,deps:[$e,Ht,ur,va,[new yn,Yc],[new yn,Bc],...e]}])}var rT=gn(tT,!0);var oT=gn(Zw,!0);var sT=gn(Xw,!0,2);var O0=gn(jw,!0,2);var aT=gn(Jw,!0,2);var Qu=gn(I0,!0,2);var lT=gn(Bw,!0);var cT=gn(Qw,!0,2);var Bo=class n{constructor(e){this.firestore=e}getDocuments(e){let t=O0(this.firestore,e);return rT(t,{idField:"id"})}getDocumentById(e,t){let i=Qu(this.firestore,`${e}/${t}`);return oT(i,{idField:"id"})}addDocument(e,t){let i=O0(this.firestore,e);return sT(i,t)}deleteDocument(e,t){let i=Qu(this.firestore,`${e}/${t}`);return aT(i)}updateDocument(e,t,i){let r=Qu(this.firestore,`${e}/${t}`);return cT(r,i)}static \u0275fac=function(t){return new(t||n)(ie(wr))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ju=class n{constructor(e,t,i){this.activatedRoute=e;this.firestoreService=t;this.router=i}product={id:0,nom:"",prix:0,categorie_nom:"",description:""};productId="";ngOnInit(){this.productId=this.activatedRoute.snapshot.paramMap.get("id")||"",this.firestoreService.getDocumentById("angproducts",this.productId).subscribe(e=>{this.product=e})}updateProduct(){this.firestoreService.updateDocument("angproducts",this.productId,this.product).then(()=>{alert("Produit mis \xE0 jour !"),this.router.navigate(["/products-firebase"])}).catch(e=>{console.error("Erreur lors de la suppression du produit :",e)})}static \u0275fac=function(t){return new(t||n)(oe(_t),oe(Bo),oe(Ge))};static \u0275cmp=j({type:n,selectors:[["app-update-product-fire"]],decls:24,vars:4,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1",1),s(2,"Mettre \xE0 jour le produit"),l(),c(3,"div",2)(4,"form",3),C("ngSubmit",function(){return i.updateProduct()}),c(5,"div",4)(6,"label",5),s(7,"Nom"),l(),c(8,"input",6),we("ngModelChange",function(o){return Ce(i.product.nom,o)||(i.product.nom=o),o}),l()(),c(9,"div",4)(10,"label",7),s(11,"Prix"),l(),c(12,"input",8),we("ngModelChange",function(o){return Ce(i.product.prix,o)||(i.product.prix=o),o}),l()(),c(13,"div",4)(14,"label",9),s(15,"Cat\xE9gorie name"),l(),c(16,"input",10),we("ngModelChange",function(o){return Ce(i.product.categorie_nom,o)||(i.product.categorie_nom=o),o}),l()(),c(17,"div",11)(18,"label",12),s(19,"Description"),l(),c(20,"textarea",13),we("ngModelChange",function(o){return Ce(i.product.description,o)||(i.product.description=o),o}),l()(),c(21,"div",14)(22,"button",15),s(23,"Mettre \xE0 jour"),l()()()()()),t&2&&(g(8),Ee("ngModel",i.product.nom),g(4),Ee("ngModel",i.product.prix),g(4),Ee("ngModel",i.product.categorie_nom),g(4),Ee("ngModel",i.product.description))},dependencies:[G,Pe,Nt,De,pt,Ve,Ot,zt,Oe,$t],encapsulation:2})};var F0={};function Ga(n,e){if(F0[n]=(F0[n]||0)+1,typeof e=="function")return N0(n,(...i)=>ye(K({},e(...i)),{type:n}));switch(e?e._as:"empty"){case"empty":return N0(n,()=>({type:n}));case"props":return N0(n,i=>ye(K({},i),{type:n}));default:throw new Error("Unexpected config.")}}function N0(n,e){return Object.defineProperty(e,"type",{value:n,writable:!1})}var Wa="@ngrx/store/init",Kn=(()=>{class n extends Pt{constructor(){super({type:Wa})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),yO=[Kn],TT=new le("@ngrx/store Internal Root Guard"),dT=new le("@ngrx/store Internal Initial State"),Ha=new le("@ngrx/store Initial State"),IT=new le("@ngrx/store Reducer Factory"),pT=new le("@ngrx/store Internal Reducer Factory Provider"),ST=new le("@ngrx/store Initial Reducers"),V0=new le("@ngrx/store Internal Initial Reducers"),BB=new le("@ngrx/store Store Features"),hT=new le("@ngrx/store Internal Store Reducers"),qB=new le("@ngrx/store Internal Feature Reducers"),$B=new le("@ngrx/store Internal Feature Configs"),zB=new le("@ngrx/store Internal Store Features"),GB=new le("@ngrx/store Internal Feature Reducers Token"),WB=new le("@ngrx/store Feature Reducers"),mT=new le("@ngrx/store User Provided Meta Reducers"),Xu=new le("@ngrx/store Meta Reducers"),fT=new le("@ngrx/store Internal Resolved Meta Reducers"),gT=new le("@ngrx/store User Runtime Checks Config"),vT=new le("@ngrx/store Internal User Runtime Checks Config"),za=new le("@ngrx/store Internal Runtime Checks"),xT=new le("@ngrx/store Check if Action types are unique"),_T=new le("@ngrx/store Root Store Provider"),HB=new le("@ngrx/store Feature State Provider");function EO(n,e={}){let t=Object.keys(n),i={};for(let o=0;o<t.length;o++){let a=t[o];typeof n[a]=="function"&&(i[a]=n[a])}let r=Object.keys(i);return function(a,d){a=a===void 0?e:a;let p=!1,m={};for(let v=0;v<r.length;v++){let b=r[v],T=i[b],M=a[b],U=T(M,d);m[b]=U,p=p||U!==M}return p?m:a}}function CO(n,e){return Object.keys(n).filter(t=>t!==e).reduce((t,i)=>Object.assign(t,{[i]:n[i]}),{})}function AT(...n){return function(e){if(n.length===0)return e;let t=n[n.length-1];return n.slice(0,-1).reduceRight((r,o)=>o(r),t(e))}}function RT(n,e){return Array.isArray(e)&&e.length>0&&(n=AT.apply(null,[...e,n])),(t,i)=>{let r=n(t);return(o,a)=>(o=o===void 0?i:o,r(o,a))}}function wO(n){let e=Array.isArray(n)&&n.length>0?AT(...n):t=>t;return(t,i)=>(t=e(t),(r,o)=>(r=r===void 0?i:r,t(r,o)))}var Tr=class extends rt{},qo=class extends Kn{},Yu="@ngrx/store/update-reducers",L0=(()=>{class n extends Pt{get currentReducers(){return this.reducers}constructor(t,i,r,o){super(o(r,i)),this.dispatcher=t,this.initialState=i,this.reducers=r,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let i=t.reduce((r,{reducers:o,reducerFactory:a,metaReducers:d,initialState:p,key:m})=>{let v=typeof o=="function"?wO(d)(o,p):RT(a,d)(o,p);return r[m]=v,r},{});this.addReducers(i)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(i=>i.key))}addReducer(t,i){this.addReducers({[t]:i})}addReducers(t){this.reducers=K(K({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(i=>{this.reducers=CO(this.reducers,i)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Yu,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(i){return new(i||n)(ie(qo),ie(Ha),ie(ST),ie(IT))}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),TO=[L0,{provide:Tr,useExisting:L0},{provide:qo,useExisting:Kn}],Ka=(()=>{class n extends ot{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})()}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),IO=[Ka],$o=class extends rt{},bT=(()=>{class n extends Pt{static{this.INIT=Wa}constructor(t,i,r,o){super(o);let d=t.pipe(Zi(Pr)).pipe(bl(i)),p={state:o},m=d.pipe(Xn(SO,p));this.stateSubscription=m.subscribe(({state:v,action:b})=>{this.next(v),r.next(b)}),this.state=ga(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(i){return new(i||n)(ie(Kn),ie(Tr),ie(Ka),ie(Ha))}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})();function SO(n={state:void 0},[e,t]){let{state:i}=n;return{state:t(i,e),action:e}}var xO=[bT,{provide:$o,useExisting:bT}],An=(()=>{class n extends rt{constructor(t,i,r){super(),this.actionsObserver=i,this.reducerManager=r,this.source=t,this.state=t.state}select(t,...i){return RO.call(null,t,...i)(this)}selectSignal(t,i){return hn(()=>t(this.state()),i)}lift(t){let i=new n(this,this.actionsObserver,this.reducerManager);return i.operator=t,i}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,i){this.reducerManager.addReducer(t,i)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(i){return new(i||n)(ie($o),ie(Kn),ie(L0))}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),AO=[An];function RO(n,e,...t){return function(r){let o;if(typeof n=="string"){let a=[e,...t].filter(Boolean);o=r.pipe(G_(n,...a))}else if(typeof n=="function")o=r.pipe(ve(a=>n(a,e)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return o.pipe(Xp())}}var q0="https://ngrx.io/guide/store/configuration/runtime-checks";function yT(n){return n===void 0}function ET(n){return n===null}function PT(n){return Array.isArray(n)}function PO(n){return typeof n=="string"}function kO(n){return typeof n=="boolean"}function DO(n){return typeof n=="number"}function kT(n){return typeof n=="object"&&n!==null}function MO(n){return kT(n)&&!PT(n)}function OO(n){if(!MO(n))return!1;let e=Object.getPrototypeOf(n);return e===Object.prototype||e===null}function U0(n){return typeof n=="function"}function NO(n){return U0(n)&&n.hasOwnProperty("\u0275cmp")}function VO(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var FO=!1;function LO(){return FO}function CT(n,e){return n===e}function UO(n,e,t){for(let i=0;i<n.length;i++)if(!t(n[i],e[i]))return!0;return!1}function DT(n,e=CT,t=CT){let i=null,r=null,o;function a(){i=null,r=null}function d(v=void 0){o={result:v}}function p(){o=void 0}function m(){if(o!==void 0)return o.result;if(!i)return r=n.apply(null,arguments),i=arguments,r;if(!UO(arguments,i,e))return r;let v=n.apply(null,arguments);return i=arguments,t(r,v)?r:(r=v,v)}return{memoized:m,reset:a,setResult:d,clearResult:p}}function Qa(...n){return BO(DT)(...n)}function jO(n,e,t,i){if(t===void 0){let o=e.map(a=>a(n));return i.memoized.apply(null,o)}let r=e.map(o=>o(n,t));return i.memoized.apply(null,[...r,t])}function BO(n,e={stateFn:jO}){return function(...t){let i=t;if(Array.isArray(i[0])){let[v,...b]=i;i=[...v,...b]}else i.length===1&&qO(i[0])&&(i=$O(i[0]));let r=i.slice(0,i.length-1),o=i[i.length-1],a=r.filter(v=>v.release&&typeof v.release=="function"),d=n(function(...v){return o.apply(null,v)}),p=DT(function(v,b){return e.stateFn.apply(null,[v,r,b,d])});function m(){p.reset(),d.reset(),a.forEach(v=>v.release())}return Object.assign(p.memoized,{release:m,projector:d.memoized,setResult:p.setResult,clearResult:p.clearResult})}}function MT(n){return Qa(e=>{let t=e[n];return!LO()&&qr()&&!(n in e)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},e=>e)}function qO(n){return!!n&&typeof n=="object"&&Object.values(n).every(e=>typeof e=="function")}function $O(n){let e=Object.values(n),t=Object.keys(n),i=(...r)=>t.reduce((o,a,d)=>ye(K({},o),{[a]:r[d]}),{});return[...e,i]}function zO(n){return n instanceof le?X(n):n}function GO(n){return typeof n=="function"?n():n}function WO(n,e){return n.concat(e)}function HO(){if(X(An,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function KO(n,e){return function(t,i){let r=e.action(i)?j0(i):i,o=n(t,r);return e.state()?j0(o):o}}function j0(n){Object.freeze(n);let e=U0(n);return Object.getOwnPropertyNames(n).forEach(t=>{if(!t.startsWith("\u0275")&&VO(n,t)&&(!e||t!=="caller"&&t!=="callee"&&t!=="arguments")){let i=n[t];(kT(i)||U0(i))&&!Object.isFrozen(i)&&j0(i)}}),n}function QO(n,e){return function(t,i){if(e.action(i)){let o=B0(i);wT(o,"action")}let r=n(t,i);if(e.state()){let o=B0(r);wT(o,"state")}return r}}function B0(n,e=[]){return(yT(n)||ET(n))&&e.length===0?{path:["root"],value:n}:Object.keys(n).reduce((i,r)=>{if(i)return i;let o=n[r];return NO(o)?i:yT(o)||ET(o)||DO(o)||kO(o)||PO(o)||PT(o)?!1:OO(o)?B0(o,[...e,r]):{path:[...e,r],value:o}},!1)}function wT(n,e){if(n===!1)return;let t=n.path.join("."),i=new Error(`Detected unserializable ${e} at "${t}". ${q0}#strict${e}serializability`);throw i.value=n.value,i.unserializablePath=t,i}function JO(n,e){return function(t,i){if(e.action(i)&&!$e.isInAngularZone())throw new Error(`Action '${i.type}' running outside NgZone. ${q0}#strictactionwithinngzone`);return n(t,i)}}function XO(n){return qr()?K({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function YO({strictActionSerializability:n,strictStateSerializability:e}){return t=>n||e?QO(t,{action:i=>n&&!$0(i),state:()=>e}):t}function ZO({strictActionImmutability:n,strictStateImmutability:e}){return t=>n||e?KO(t,{action:i=>n&&!$0(i),state:()=>e}):t}function $0(n){return n.type.startsWith("@ngrx")}function eN({strictActionWithinNgZone:n}){return e=>n?JO(e,{action:t=>n&&!$0(t)}):e}function tN(n){return[{provide:vT,useValue:n},{provide:gT,useFactory:iN,deps:[vT]},{provide:za,deps:[gT],useFactory:XO},{provide:Xu,multi:!0,deps:[za],useFactory:ZO},{provide:Xu,multi:!0,deps:[za],useFactory:YO},{provide:Xu,multi:!0,deps:[za],useFactory:eN}]}function nN(){return[{provide:xT,multi:!0,deps:[za],useFactory:rN}]}function iN(n){return n}function rN(n){if(!n.strictActionTypeUniqueness)return;let e=Object.entries(F0).filter(([,t])=>t>1).map(([t])=>t);if(e.length)throw new Error(`Action types are registered more than once, ${e.map(t=>`"${t}"`).join(", ")}. ${q0}#strictactiontypeuniqueness`)}function oN(n={},e={}){return[{provide:TT,useFactory:HO},{provide:dT,useValue:e.initialState},{provide:Ha,useFactory:GO,deps:[dT]},{provide:V0,useValue:n},{provide:hT,useExisting:n instanceof le?n:V0},{provide:ST,deps:[V0,[new Y_(hT)]],useFactory:zO},{provide:mT,useValue:e.metaReducers?e.metaReducers:[]},{provide:fT,deps:[Xu,mT],useFactory:WO},{provide:pT,useValue:e.reducerFactory?e.reducerFactory:EO},{provide:IT,deps:[pT,fT],useFactory:RT},yO,TO,IO,xO,AO,tN(e.runtimeChecks),nN()]}function sN(){X(Kn),X(Tr),X(Ka),X(An),X(TT,{optional:!0}),X(xT,{optional:!0})}var aN=[{provide:_T,useFactory:sN},{provide:yl,multi:!0,useFactory(){return()=>X(_T)}}];function OT(n,e){return ft([...oN(n,e),aN])}function Ja(...n){let e=n.pop(),t=n.map(i=>i.type);return{reducer:e,types:t}}function NT(n,...e){let t=new Map;for(let i of e)for(let r of i.types){let o=t.get(r);if(o){let a=(d,p)=>i.reducer(o(d,p),p);t.set(r,a)}else t.set(r,i.reducer)}return function(i=n,r){let o=t.get(r.type);return o?o(i,r):i}}var lN={categories:[],products:[],isLoggedIn:typeof window<"u"&&localStorage.getItem("isLoggedIn")==="true"},G0=Ga("[Categories] Add Categories",n=>({payload:n})),cN=Ga("[Products] Add Categories",n=>({payload:n})),W0=Ga("[Auth] Set Active User"),uN=Ga("[Auth] Remove Active User"),VT=NT(lN,Ja(G0,(n,{payload:e})=>ye(K({},n),{categories:e})),Ja(cN,(n,{payload:e})=>ye(K({},n),{products:e})),Ja(W0,n=>(typeof window<"u"&&localStorage.setItem("isLoggedIn","true"),ye(K({},n),{isLoggedIn:!0}))),Ja(uN,n=>(typeof window<"u"&&localStorage.removeItem("isLoggedIn"),ye(K({},n),{isLoggedIn:!1})))),H0=MT("data"),FT=Qa(H0,n=>n.categories),JB=Qa(H0,n=>n.products),Zu=Qa(H0,n=>n.isLoggedIn);var dN=["tab1"],pN=["tab2"];function hN(n,e){n&1&&(c(0,"div",32),s(1," Veuillez entrer votre nom d'utilisateur. "),l())}function mN(n,e){n&1&&(c(0,"div",32),s(1," Veuillez entrer votre mot de passe. "),l())}function fN(n,e){if(n&1&&(c(0,"div",33),s(1),l()),n&2){let t=ce();g(),z(" ",t.errorMessage," ")}}function gN(n,e){n&1&&(c(0,"span",34),s(1,"copied "),y(2,"i",35),l())}function vN(n,e){n&1&&(c(0,"span",34),s(1,"copied "),y(2,"i",35),l())}var ed=class n{constructor(e,t){this.router=e;this.store=t}username="";password="";errorMessage="";onLogin(){this.username==="admin"&&this.password==="password"?(this.store.dispatch(W0()),this.router.navigate(["/dashboard"])):this.errorMessage="Nom d\u2019utilisateur ou mot de passe incorrect."}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Ge),oe(An))};static \u0275cmp=j({type:n,selectors:[["app-login"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,dN,5),q(i.infoTab2,pN,5)),t&2&&ee(2)},decls:72,vars:8,consts:[["loginForm","ngForm"],["tab1",""],["tab2",""],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"card","shadow"],[1,"card-header","text-center","bg-primary","text-white"],[1,"card-body"],[3,"ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger small mt-1",4,"ngIf"],["for","password",1,"form-label"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","alert alert-danger py-1",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-success",3,"disabled"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"mt-5"],[1,"fs-2"],[1,"text-danger"],[1,"text-danger","small","mt-1"],[1,"alert","alert-danger","py-1"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2,"Syst\xE8me de connexion"),l(),y(3,"hr"),c(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h4"),s(9,"Connexion"),l()(),c(10,"div",8)(11,"form",9,0),C("ngSubmit",function(){return x(r),A(i.onLogin())}),c(13,"div",10)(14,"label",11),s(15,"Nom d'utilisateur"),l(),c(16,"input",12),we("ngModelChange",function(a){return x(r),Ce(i.username,a)||(i.username=a),A(a)}),l(),O(17,hN,2,0,"div",13),l(),c(18,"div",10)(19,"label",14),s(20,"Mot de passe"),l(),c(21,"input",15),we("ngModelChange",function(a){return x(r),Ce(i.password,a)||(i.password=a),A(a)}),l(),O(22,mN,2,0,"div",13),l(),O(23,fN,2,1,"div",16),c(24,"div",17)(25,"button",18),s(26," Se connecter "),l()()()()()()(),c(27,"ul",19)(28,"li",20)(29,"button",21),s(30," Composant Parent "),l()(),c(31,"li",20)(32,"button",22),s(33," Composant navbar "),l()()(),c(34,"div",23)(35,"div",24)(36,"i",25),C("click",function(){return x(r),A(i.copy1())}),l(),O(37,gN,3,0,"span",26),c(38,"pre",27,1),H(),s(40,`import { FormsModule } from '@angular/forms';
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
}`),W(),l()(),c(41,"div",28)(42,"i",25),C("click",function(){return x(r),A(i.copy2())}),l(),O(43,vN,3,0,"span",26),c(44,"pre",27,2),H(),s(46,`import { Store } from '@ngrx/store';
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
}`),W(),l()()(),c(47,"span",29),s(48," ______________________________________________________________"),c(49,"span",30),s(50,"cours"),l(),s(51," ______________________________________________________________ "),l(),c(52,"pre"),s(53,`
`),c(54,"strong"),s(55,"Pour se connecter:"),l(),s(56,`  via un evenement (click) dans un formulaire on fait appel a une action dans ngrx:
`),c(57,"strong",31),s(58,"this.store.dispatch(setActiveUser());"),l(),s(59,`

`),c(60,"strong"),s(61,"Pour se d\xE9connecter:"),l(),s(62,`  via un evenement (click) dans le navbar on fait appel a une action dans ngrx:
`),c(63,"strong",31),s(64,"this.store.dispatch(removeActiveUser());"),l(),s(65,`

`),c(66,"strong"),s(67,"Pour afficher/masquer dans le navbar"),l(),s(68,`  les menus: se connecter,se d\xE9connecter,dashboard,
on vois l'\xE9tat de isloggedIn dans le code suivant dans le navbar:
`),c(69,"strong",31),s(70,`
isloggedIn = signal(false);
ngOnInit() {
this.store
.select(selectIsLoggedIn)
.subscribe((islog) => this.isloggedIn.set(islog));
}`),l(),s(71,`

et gr\xE2ce \xE0 la valeur de isloggedIn on peut afficher/masquer : les menus: se connecter,se d\xE9connecter,dashboard,
   `),l()()}if(t&2){let r=Ye(12);g(16),Ee("ngModel",i.username),g(),S("ngIf",r.submitted&&!i.username),g(4),Ee("ngModel",i.password),g(),S("ngIf",r.submitted&&!i.password),g(),S("ngIf",i.errorMessage),g(2),S("disabled",!r.valid),g(12),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked)}},dependencies:[G,te,Pe,Nt,De,Ve,Ot,zt,Oe,$t],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};function _N(n,e){if(n&1&&(c(0,"p",3)(1,"strong"),s(2,"Utilisation:"),l(),s(3),l()),n&2){let t=ce();g(3),z(" ",t.utilisation,"")}}function bN(n,e){if(n&1&&(c(0,"div")(1,"strong",4),s(2,"Code:"),l(),c(3,"pre",5),s(4),l()()),n&2){let t=ce();g(4),he(t.code)}}function yN(n,e){if(n&1&&(c(0,"li"),s(1),l()),n&2){let t=e.$implicit;g(),he(t)}}function EN(n,e){if(n&1&&(c(0,"strong",3),s(1,"R\xE9sultats :"),l(),c(2,"ul"),O(3,yN,2,1,"li",6),l()),n&2){let t=ce();g(3),S("ngForOf",t.results)}}var td=class n{results=[];subscription=null;code="";utilisation="";resetResults(){this.results=[],this.subscription?.unsubscribe()}useMap(){this.resetResults(),this.subscription=me(1,2,3,4).pipe(ve(e=>e*10)).subscribe(e=>this.results.push(e.toString())),this.utilisation="map est une op\xE9ration de base de RxJS qui permet de transformer les \xE9l\xE9ments \xE9mis par un observable en utilisant une fonction de transformation donn\xE9e",this.code=`of(1, 2, 3, 4).pipe(map(x => x * 10))
      .subscribe(value => this.results.push(value.toString()));}`}useScan(){this.resetResults(),this.subscription=We([1,2,3,4]).pipe(Xn((e,t)=>e+t,0)).subscribe(e=>this.results.push(e.toString())),this.utilisation="scan accumule les valeurs comme reduce, mais \xE9met \xE0 chaque \xE9tape",this.code=`from([1, 2, 3, 4])
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`}useReduce(){this.resetResults(),this.subscription=We([1,2,3,4]).pipe(O_((e,t)=>e+t,0)).subscribe(e=>this.results.push(e.toString())),this.utilisation="reduce accumule les valeurs et n \xE9met qu une fois le calcul termin\xE9",this.code=`from([1, 2, 3, 4])
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((value) => this.results.push(value.toString()));`}useFlatMap(){this.resetResults(),this.subscription=me(1,2,3).pipe(z_(e=>me(`Valeur ${e*2}`))).subscribe(e=>this.results.push(e)),this.utilisation="flatMap Aplatissement d observables imbriqu\xE9s",this.code="of(1, 2, 3)\n      .pipe(flatMap(x => of(`Valeur ${x * 2}`)))\n      .subscribe(value => this.results.push(value));"}useBufferTime(){this.resetResults(),this.subscription=st(500).pipe(k_(2e3),Je(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferTime Regroupe les valeurs sur une p\xE9riode de temps",this.code=`interval(500)
      .pipe(bufferTime(2000), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useBufferCount(){this.resetResults(),this.subscription=st(500).pipe(P_(3),Je(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferCount Regroupe les valeurs par lot de 3",this.code=`interval(500)
      .pipe(bufferCount(3), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useBuffer(){this.resetResults();let e=st(2e3);this.subscription=st(500).pipe(R_(e),Je(5)).subscribe(t=>this.results.push(JSON.stringify(t))),this.utilisation="buffer Stocke les valeurs jusqu \xE0 d\xE9clenchement d un second observable",this.code=`const sub = interval(2000);
    interval(500)
      .pipe(buffer(sub), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`}useBufferToggle(){this.resetResults();let e=st(2e3),t=()=>st(1e3);this.subscription=st(500).pipe(D_(e,t),Je(5)).subscribe(i=>this.results.push(JSON.stringify(i))),this.utilisation="bufferToggle Active/d\xE9sactive le buffer avec deux observables",this.code=`const sub = interval(2000);
    const closingFn = () => interval(1000);
    interval(500)
      .pipe(bufferToggle(sub, closingFn), take(5))
      .subscribe((value) => this.results.push(JSON.stringify(value)));`}useBufferWhen(){this.resetResults(),this.subscription=st(500).pipe(M_(()=>st(2e3)),Je(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="bufferWhen Regroupe les valeurs jusqu \xE0 ce qu un observable \xE9mette",this.code=`interval(500)
      .pipe(bufferWhen(() => interval(2000)), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useWindow(){this.resetResults(),this.subscription=st(500).pipe(K_(st(2e3)),Je(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="window Stocke les valeurs dans des sous-observables",this.code=`interval(500)
      .pipe(window(interval(2000)), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useWindowCount(){this.resetResults(),this.subscription=st(500).pipe(Q_(3),Je(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="windowCount Divise en fen\xEAtres de 3 valeurs",this.code=`interval(500)
      .pipe(windowCount(3), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useWindowTime(){this.resetResults(),this.subscription=st(500).pipe(J_(2e3),Je(5)).subscribe(e=>e.subscribe(t=>this.results.push(t.toString()))),this.utilisation="windowTime Stocke les valeurs par p\xE9riode",this.code=`interval(500)
      .pipe(windowTime(2000), take(5))
      .subscribe(windowObs =>
        windowObs.subscribe(value => this.results.push(value.toString())));`}useConcatMap(){this.resetResults(),this.subscription=We([1,2,3]).pipe(ln(e=>me(`Concat ${e}`).pipe(Jp(1e3)))).subscribe(e=>this.results.push(e)),this.utilisation="concatMap Ex\xE9cute les observables un par un dans l ordre",this.code="from([1, 2, 3])\n    .pipe(concatMap(x => of(`Concat ${x}`).pipe(delay(1000)))\n    .subscribe(value => this.results.push(value));"}useExhaustMap(){this.resetResults(),this.subscription=We([1,2,3]).pipe(U_(e=>me(`Exhaust ${e}`).pipe(Jp(1e3)))).subscribe(e=>this.results.push(e)),this.utilisation="exhaustMap Ignore les nouveaux observables si un est d\xE9j\xE0 actif",this.code="from([1, 2, 3])\n      .pipe(exhaustMap(x => of(`Exhaust ${x}`).pipe(delay(1000)))\n      .subscribe(value => this.results.push(value));"}useExpand(){this.resetResults(),this.subscription=me(2).pipe(j_(e=>e<50?me(e*2):an),Je(10)).subscribe(e=>this.results.push(e.toString())),this.utilisation="expand \xC9met r\xE9cursivement une valeur",this.code=`of(2)
      .pipe(
        expand(x => (x < 50 ? of(x * 2) : EMPTY)),
        take(10)
      )
      .subscribe(value => this.results.push(value.toString()));`}useGroupBy(){this.resetResults(),this.subscription=We([{id:1,category:"A"},{id:2,category:"B"},{id:3,category:"A"},{id:4,category:"B"}]).pipe(B_(e=>e.category)).subscribe(e=>e.subscribe(t=>this.results.push(JSON.stringify(t)))),this.utilisation="groupBy Regroupe les valeurs selon une cl\xE9",this.code=`from([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ])
      .pipe(groupBy(item => item.category))
      .subscribe(group =>
        group.subscribe(value => this.results.push(JSON.stringify(value)));`}usePairwise(){this.resetResults(),this.subscription=st(1e3).pipe(Zp(),Je(5)).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="pairwise \xC9met les valeurs par paire successive",this.code=`interval(1000)
      .pipe(pairwise(), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useMaterialize(){this.resetResults(),this.subscription=me(1,2,3).pipe($_()).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="materialize Convertit les notifications en objets",this.code=`of(1, 2, 3)
      .pipe(materialize())
      .subscribe(value => this.results.push(JSON.stringify(value)));`}useDematerialize(){let e={kind:"N",value:"A"},t={kind:"N",value:"B"},i={kind:"E",error:new TypeError("x.toUpperCase is not a function")};me(e,t,i).pipe(L_()).subscribe({next:a=>this.results.push(a),error:a=>console.error(a)}),this.utilisation="dematerialize Convertit les objets de notifications en valeurs",this.code=`const notifA: NextNotification<string> = { kind: 'N', value: 'A' };
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
    });`}useToArray(){this.resetResults(),this.subscription=_l(1,10).pipe(N_()).subscribe(e=>this.results.push(JSON.stringify(e))),this.utilisation="toArray Regroupe toutes les valeurs en un tableau",this.code=`range(1, 10)
      .pipe(toArray())
      .subscribe(value => this.results.push(JSON.stringify(value)));`}ngOnDestroy(){this.subscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-rxjs-transformation"]],decls:47,vars:3,consts:[[1,"container"],[1,"btn-group","flex-wrap"],[1,"btn","btn-secondary","me-2","mb-2","rounded",3,"click"],[1,"mt-3"],[1,"mt-4"],[1,"fw-bold","text-danger"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h2"),s(2,"Op\xE9rateurs de transformation RxJS"),l(),c(3,"div",1)(4,"button",2),C("click",function(){return i.useMap()}),s(5," map "),l(),c(6,"button",2),C("click",function(){return i.useScan()}),s(7," scan "),l(),c(8,"button",2),C("click",function(){return i.useReduce()}),s(9," reduce "),l(),c(10,"button",2),C("click",function(){return i.useFlatMap()}),s(11," flatMap "),l(),c(12,"button",2),C("click",function(){return i.useBufferTime()}),s(13," bufferTime "),l(),c(14,"button",2),C("click",function(){return i.useBufferCount()}),s(15," bufferCount "),l(),c(16,"button",2),C("click",function(){return i.useBuffer()}),s(17," buffer "),l(),c(18,"button",2),C("click",function(){return i.useBufferToggle()}),s(19," bufferToggle "),l(),c(20,"button",2),C("click",function(){return i.useBufferWhen()}),s(21," bufferWhen "),l(),c(22,"button",2),C("click",function(){return i.useWindow()}),s(23," window "),l(),c(24,"button",2),C("click",function(){return i.useWindowCount()}),s(25," windowCount "),l(),c(26,"button",2),C("click",function(){return i.useWindowTime()}),s(27," windowTime "),l(),c(28,"button",2),C("click",function(){return i.useConcatMap()}),s(29," concatMap "),l(),c(30,"button",2),C("click",function(){return i.useExhaustMap()}),s(31," exhaustMap "),l(),c(32,"button",2),C("click",function(){return i.useExpand()}),s(33," expand "),l(),c(34,"button",2),C("click",function(){return i.useGroupBy()}),s(35," groupBy "),l(),c(36,"button",2),C("click",function(){return i.usePairwise()}),s(37," pairwise "),l(),c(38,"button",2),C("click",function(){return i.useMaterialize()}),s(39," materialize "),l(),c(40,"button",2),C("click",function(){return i.useDematerialize()}),s(41," dematerialize "),l(),c(42,"button",2),C("click",function(){return i.useToArray()}),s(43," toArray "),l()(),O(44,_N,4,1,"p",3)(45,bN,5,1,"div")(46,EN,4,1),l()),t&2&&(g(44),Qe(i.utilisation?44:-1),g(),Qe(i.code?45:-1),g(),Qe(i.results.length>0?46:-1))},dependencies:[G,He],encapsulation:2})};function nd(n){switch(n.responseType){case"json":return"response"in n?n.response:JSON.parse(n.responseText);case"document":return n.responseXML;case"text":default:return"response"in n?n.response:n.responseText}}var id=class{constructor(e,t,i,r="download_load"){this.originalEvent=e,this.xhr=t,this.request=i,this.type=r;let{status:o,responseType:a}=t;this.status=o??0,this.responseType=a??"";let d=t.getAllResponseHeaders();this.responseHeaders=d?d.split(`
`).reduce((v,b)=>{let T=b.indexOf(": ");return v[b.slice(0,T)]=b.slice(T+2),v},{}):{},this.response=nd(t);let{loaded:p,total:m}=e;this.loaded=p,this.total=m}};var Xa=b_(n=>function(t,i,r){this.message=t,this.name="AjaxError",this.xhr=i,this.request=r,this.status=i.status,this.responseType=i.responseType;let o;try{o=nd(i)}catch{o=i.responseText}this.response=o}),LT=(()=>{function n(e,t){return Xa.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this}return n.prototype=Object.create(Xa.prototype),n})();function CN(n,e){return Rn({method:"GET",url:n,headers:e})}function wN(n,e,t){return Rn({method:"POST",url:n,body:e,headers:t})}function TN(n,e){return Rn({method:"DELETE",url:n,headers:e})}function IN(n,e,t){return Rn({method:"PUT",url:n,body:e,headers:t})}function SN(n,e,t){return Rn({method:"PATCH",url:n,body:e,headers:t})}var xN=ve(n=>n.response);function AN(n,e){return xN(Rn({method:"GET",url:n,headers:e}))}var Rn=(()=>{let n=e=>PN(typeof e=="string"?{url:e}:e);return n.get=CN,n.post=wN,n.delete=TN,n.put=IN,n.patch=SN,n.getJSON=AN,n})(),RN="upload",UT="download",K0="loadstart",Q0="progress",jT="load";function PN(n){return new rt(e=>{var t,i;let r=Object.assign({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},n),{queryParams:o,body:a,headers:d}=r,p=r.url;if(!p)throw new TypeError("url is required");if(o){let Q;if(p.includes("?")){let be=p.split("?");if(2<be.length)throw new TypeError("invalid url");Q=new URLSearchParams(be[1]),new URLSearchParams(o).forEach((fe,P)=>Q.set(P,fe)),p=be[0]+"?"+Q}else Q=new URLSearchParams(o),p=p+"?"+Q}let m={};if(d)for(let Q in d)d.hasOwnProperty(Q)&&(m[Q.toLowerCase()]=d[Q]);let v=r.crossDomain;!v&&!("x-requested-with"in m)&&(m["x-requested-with"]="XMLHttpRequest");let{withCredentials:b,xsrfCookieName:T,xsrfHeaderName:M}=r;if((b||!v)&&T&&M){let Q=(i=(t=document?.cookie.match(new RegExp(`(^|;\\s*)(${T})=([^;]*)`)))===null||t===void 0?void 0:t.pop())!==null&&i!==void 0?i:"";Q&&(m[M]=Q)}let U=kN(a,m),L=Object.assign(Object.assign({},r),{url:p,headers:m,body:U}),V;V=n.createXHR?n.createXHR():new XMLHttpRequest;{let{progressSubscriber:Q,includeDownloadProgress:be=!1,includeUploadProgress:fe=!1}=n,P=(R,D)=>{V.addEventListener(R,()=>{var w;let Ct=D();(w=Q?.error)===null||w===void 0||w.call(Q,Ct),e.error(Ct)})};P("timeout",()=>new LT(V,L)),P("abort",()=>new Xa("aborted",V,L));let E=(R,D)=>new id(D,V,L,`${R}_${D.type}`),I=(R,D,w)=>{R.addEventListener(D,Ct=>{e.next(E(w,Ct))})};fe&&[K0,Q0,jT].forEach(R=>I(V.upload,R,RN)),Q&&[K0,Q0].forEach(R=>V.upload.addEventListener(R,D=>{var w;return(w=Q?.next)===null||w===void 0?void 0:w.call(Q,D)})),be&&[K0,Q0].forEach(R=>I(V,R,UT));let k=R=>{let D="ajax error"+(R?" "+R:"");e.error(new Xa(D,V,L))};V.addEventListener("error",R=>{var D;(D=Q?.error)===null||D===void 0||D.call(Q,R),k()}),V.addEventListener(jT,R=>{var D,w;let{status:Ct}=V;if(Ct<400){(D=Q?.complete)===null||D===void 0||D.call(Q);let _i;try{_i=E(UT,R)}catch(gp){e.error(gp);return}e.next(_i),e.complete()}else(w=Q?.error)===null||w===void 0||w.call(Q,R),k(Ct)})}let{user:ae,method:ge,async:se}=L;ae?V.open(ge,p,se,ae,L.password):V.open(ge,p,se),se&&(V.timeout=L.timeout,V.responseType=L.responseType),"withCredentials"in V&&(V.withCredentials=L.withCredentials);for(let Q in m)m.hasOwnProperty(Q)&&V.setRequestHeader(Q,m[Q]);return U?V.send(U):V.send(),()=>{V&&V.readyState!==4&&V.abort()}})}function kN(n,e){var t;if(!n||typeof n=="string"||FN(n)||LN(n)||MN(n)||ON(n)||NN(n)||UN(n))return n;if(VN(n))return n.buffer;if(typeof n=="object")return e["content-type"]=(t=e["content-type"])!==null&&t!==void 0?t:"application/json;charset=utf-8",JSON.stringify(n);throw new TypeError("Unknown body type")}var DN=Object.prototype.toString;function J0(n,e){return DN.call(n)===`[object ${e}]`}function MN(n){return J0(n,"ArrayBuffer")}function ON(n){return J0(n,"File")}function NN(n){return J0(n,"Blob")}function VN(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(n)}function FN(n){return typeof FormData<"u"&&n instanceof FormData}function LN(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}function UN(n){return typeof ReadableStream<"u"&&n instanceof ReadableStream}function jN(n,e){if(n&1&&(c(0,"p",2)(1,"strong"),s(2,"Utilisation:"),l(),s(3),l()),n&2){let t=ce();g(3),z(" ",t.utilisation,"")}}function BN(n,e){if(n&1&&(c(0,"div")(1,"strong",3),s(2,"Code:"),l(),c(3,"pre",4),s(4),l()()),n&2){let t=ce();g(4),he(t.code)}}function qN(n,e){if(n&1&&(c(0,"li"),s(1),l()),n&2){let t=e.$implicit;g(),he(t)}}function $N(n,e){if(n&1&&(c(0,"strong",2),s(1,"R\xE9sultats :"),l(),c(2,"ul"),O(3,qN,2,1,"li",5),l()),n&2){let t=ce();g(3),S("ngForOf",t.results)}}var rd=class n{results=[];subscription=null;code="";utilisation="";resetResults(){this.results=[],this.subscription?.unsubscribe()}useOf(){this.resetResults(),this.subscription=me(1,2,3,4,5).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de of pour \xE9mettre des valeurs",this.code=`
    of(1, 2, 3, 4, 5).subscribe(value => this.results.push(value.toString()));`}useFrom(){this.resetResults(),this.subscription=We([10,20,30,40,50]).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de from pour \xE9mettre des valeurs d'un tableau",this.code=`
    from([10, 20, 30, 40, 50]).subscribe((value) =>
      this.results.push(value.toString())
    );`}useInterval(){this.resetResults(),this.subscription=st(1e3).pipe(Je(5)).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de interval pour d\xE9clencher un \xE9v\xE9nement \xE0 intervalles r\xE9guliers",this.code=`
    interval(1000).pipe(take(5)).subscribe((value) => this.results.push(value.toString()));`}useTimer(){this.resetResults(),this.subscription=A_(5e3,1e3).pipe(Je(5)).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de timer pour d\xE9clencher un \xE9v\xE9nement apr\xE8s un d\xE9lai",this.code=`
    timer(3000, 1000).pipe(take(5))
    .subscribe((value) => this.results.push(value.toString()));`}useFromEvent(){this.resetResults(),this.subscription=x_(document,"click").subscribe(e=>{this.results.push("Click d\xE9tect\xE9 !"),console.log(e.target)}),this.utilisation="Utilisation de fromEvent pour \xE9couter un \xE9v\xE9nement",this.code=`
    fromEvent(document, 'click').subscribe(() =>
      this.results.push('Click d\xE9tect\xE9 !')
    );`}useAjax(){this.resetResults(),Rn("https://jsonplaceholder.typicode.com/todos/1").pipe(ve(e=>JSON.stringify(e.response))).subscribe(e=>this.results.push(e)),this.utilisation="Utilisation de l'op\xE9rateur ajax pour effectuer une requ\xEAte HTTP",this.code=`
    ajax('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(map((res) => JSON.stringify(res.response)))
    .subscribe((value) => this.results.push(value));`}useDefer(){this.resetResults(),ms(()=>Math.random()>.5?me("Succ\xE8s"):me("\xC9chec")).subscribe(e=>this.results.push(e)),this.utilisation="Utilisation de defer pour ex\xE9cuter une fonction de mani\xE8re asynchrone",this.code=`
    defer(() => (Math.random() > 0.5 ? of('Succ\xE8s') : of('\xC9chec'))).subscribe((value) => this.results.push(value));`}useMerge(){this.resetResults();let e=st(2e3).pipe(ve(i=>`A${i}`),Je(3)),t=st(1e3).pipe(ve(i=>`B${i}`),Je(5));this.subscription=fs(e,t).subscribe(i=>this.results.push(i)),this.utilisation="Utilisation de merge pour fusionner plusieurs observables",this.code=`
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
    );`}useRange(){this.resetResults(),_l(1,10).subscribe(e=>this.results.push(e.toString())),this.utilisation="Utilisation de range pour \xE9mettre une s\xE9quence de nombres",this.code=`
    range(1, 10).subscribe((value) => this.results.push(value.toString()));`}ngOnDestroy(){this.subscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-creation-operators"]],decls:25,vars:3,consts:[[1,"container","mt-4"],[1,"btn","btn-success","me-2",3,"click"],[1,"mt-3"],[1,"mt-4"],[2,"font-size","14px"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1"),s(2,"RxJS : Op\xE9rateurs de Cr\xE9ation"),l(),y(3,"hr"),c(4,"button",1),C("click",function(){return i.useOf()}),s(5,"of()"),l(),c(6,"button",1),C("click",function(){return i.useFrom()}),s(7,"from()"),l(),c(8,"button",1),C("click",function(){return i.useInterval()}),s(9," interval() "),l(),c(10,"button",1),C("click",function(){return i.useTimer()}),s(11,"timer()"),l(),c(12,"button",1),C("click",function(){return i.useFromEvent()}),s(13," fromEvent() "),l(),c(14,"button",1),C("click",function(){return i.useAjax()}),s(15,"ajax()"),l(),c(16,"button",1),C("click",function(){return i.useDefer()}),s(17,"defer()"),l(),c(18,"button",1),C("click",function(){return i.useMerge()}),s(19,"merge()"),l(),c(20,"button",1),C("click",function(){return i.useRange()}),s(21,"range()"),l(),O(22,jN,4,1,"p",2)(23,BN,5,1,"div")(24,$N,4,1),l()),t&2&&(g(22),Qe(i.utilisation?22:-1),g(),Qe(i.code?23:-1),g(),Qe(i.results.length>0?24:-1))},dependencies:[G,He],encapsulation:2})};var zo=class n{constructor(e){this.http=e}baseURL="http://localhost:3000/products";getProducts(){return this.http.get(this.baseURL)}getProductById(e){return this.http.get(`${this.baseURL}/${e}`)}addProduct(e){return this.http.post(this.baseURL,e)}updateProduct(e){return this.http.put(`${this.baseURL}/${e.id}`,e)}deleteProduct(e){return this.http.delete(`${this.baseURL}/${e}`)}static \u0275fac=function(t){return new(t||n)(ie(Cn))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var od=class n{constructor(e,t,i){this.activatedRoute=e;this.jsonProductsService=t;this.router=i}product={id:0,name:"",price:0,categoryName:"",description:""};ngOnInit(){let e=Number(this.activatedRoute.snapshot.paramMap.get("id"));this.jsonProductsService.getProductById(e).subscribe(t=>{this.product=t})}updateProduct(){this.jsonProductsService.updateProduct(this.product).subscribe(()=>{alert("Produit mis \xE0 jour !"),this.router.navigate(["/products-json"])})}static \u0275fac=function(t){return new(t||n)(oe(_t),oe(zo),oe(Ge))};static \u0275cmp=j({type:n,selectors:[["app-update-product"]],decls:24,vars:4,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1",1),s(2,"Mettre \xE0 jour le produit"),l(),c(3,"div",2)(4,"form",3),C("ngSubmit",function(){return i.updateProduct()}),c(5,"div",4)(6,"label",5),s(7,"Nom"),l(),c(8,"input",6),we("ngModelChange",function(o){return Ce(i.product.name,o)||(i.product.name=o),o}),l()(),c(9,"div",4)(10,"label",7),s(11,"Prix"),l(),c(12,"input",8),we("ngModelChange",function(o){return Ce(i.product.price,o)||(i.product.price=o),o}),l()(),c(13,"div",4)(14,"label",9),s(15,"Cat\xE9gorie name"),l(),c(16,"input",10),we("ngModelChange",function(o){return Ce(i.product.categoryName,o)||(i.product.categoryName=o),o}),l()(),c(17,"div",11)(18,"label",12),s(19,"Description"),l(),c(20,"textarea",13),we("ngModelChange",function(o){return Ce(i.product.description,o)||(i.product.description=o),o}),l()(),c(21,"div",14)(22,"button",15),s(23,"Mettre \xE0 jour"),l()()()()()),t&2&&(g(8),Ee("ngModel",i.product.name),g(4),Ee("ngModel",i.product.price),g(4),Ee("ngModel",i.product.categoryName),g(4),Ee("ngModel",i.product.description))},dependencies:[G,Pe,Nt,De,pt,Ve,Ot,zt,Oe,$t],encapsulation:2})};var zN=["tab1"],GN=["tab2"],WN=["tab32"],HN=["tab4"];function KN(n,e){if(n&1){let t=Z();c(0,"div",37)(1,"div",38)(2,"strong"),s(3),l(),s(4),y(5,"br"),c(6,"em"),s(7),l(),c(8,"div",39)(9,"button",40),C("click",function(){let r=x(t).$implicit,o=ce();return A(o.navigateToUpdatePage(r.id))}),s(10," Modifier "),l(),c(11,"button",41),C("click",function(){let r=x(t).$implicit,o=ce();return A(o.deleteProduct(r.id))}),s(12," Supprimer "),l()()()()}if(n&2){let t=e.$implicit;g(3),he(t.name),g(),Dn(" Prix : ",t.price," \u20AC - Cat\xE9gorie : ",t.categoryName,""),g(3),he(t.description)}}function QN(n,e){n&1&&(c(0,"span",42),s(1,"copied "),y(2,"i",43),l())}function JN(n,e){n&1&&(c(0,"span",42),s(1,"copied "),y(2,"i",43),l())}function XN(n,e){n&1&&(c(0,"span",42),s(1,"copied "),y(2,"i",43),l())}function YN(n,e){n&1&&(c(0,"span",42),s(1,"copied "),y(2,"i",43),l())}var sd=class n{constructor(e,t){this.jsonProductsService=e;this.router=t}products=[];newProduct={id:0,name:"",price:0,categoryName:"",description:""};ngOnInit(){this.fetchProducts()}fetchProducts(){this.jsonProductsService.getProducts().subscribe(e=>{this.products=e,console.log("data :",e)})}addProduct(){let e=this.products.length>0?Math.max(...this.products.map(i=>i.id))+1:1,t=ye(K({},this.newProduct),{id:e});this.jsonProductsService.addProduct(t).subscribe(i=>{this.products.push(i),this.newProduct={id:0,name:"",price:0,categoryName:"",description:""}})}navigateToUpdatePage(e){this.router.navigate(["/updateproduct-json",e])}deleteProduct(e){this.jsonProductsService.deleteProduct(e).subscribe(()=>{this.products=this.products.filter(t=>t.id!==e)})}infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab32");infoTab4=$("tab4");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab4()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(zo),oe(Ge))};static \u0275cmp=j({type:n,selectors:[["app-products"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,zN,5),q(i.infoTab2,GN,5),q(i.infoTab3,WN,5),q(i.infoTab4,HN,5)),t&2&&ee(4)},decls:74,vars:9,consts:[["tab1",""],["tab2",""],["tab3",""],["tab4",""],[1,"container"],[1,"mb-4"],[1,"card-header"],[1,"card-body"],[1,"row","g-3",3,"ngSubmit"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","price",1,"form-label"],["type","number","id","price","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categoryName",1,"form-label"],["type","text","id","categoryName","name","categoryName","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-12"],["type","submit",1,"btn","btn-success"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap",4,"ngFor","ngForOf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","flex-wrap"],[1,"card","d-flex","flex-column","mb-4","p-2"],[1,"mt-2"],[1,"btn","btn-sm","btn-warning","me-2",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",4)(1,"h1"),s(2,"Crud avec api json"),l(),y(3,"hr"),c(4,"h3",5),s(5,"Gestion des Produits"),l(),c(6,"div",5)(7,"div",6),s(8,"Ajouter un produit"),l(),c(9,"div",7)(10,"form",8),C("ngSubmit",function(){return x(r),A(i.addProduct())}),c(11,"div",9)(12,"label",10),s(13,"Nom"),l(),c(14,"input",11),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.name,a)||(i.newProduct.name=a),A(a)}),l()(),c(15,"div",9)(16,"label",12),s(17,"Prix"),l(),c(18,"input",13),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.price,a)||(i.newProduct.price=a),A(a)}),l()(),c(19,"div",9)(20,"label",14),s(21,"Cat\xE9gorie name"),l(),c(22,"input",15),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.categoryName,a)||(i.newProduct.categoryName=a),A(a)}),l()(),c(23,"div",16)(24,"label",17),s(25,"Description"),l(),c(26,"textarea",18),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.description,a)||(i.newProduct.description=a),A(a)}),l()(),c(27,"div",19)(28,"button",20),s(29,"Ajouter"),l()()()()(),c(30,"div")(31,"h3"),s(32,"Liste des Produits"),l(),y(33,"hr"),c(34,"div",21),O(35,KN,13,4,"div",22),l()(),c(36,"ul",23)(37,"li",24)(38,"button",25),s(39," jsonproducts.component.ts "),l()(),c(40,"li",24)(41,"button",26),s(42," jsonupdateproduct.component.ts "),l()(),c(43,"li",24)(44,"button",27),s(45," jsonproducts.service.ts "),l()(),c(46,"li",24)(47,"button",28),s(48," D\xE9marche \xE0 suivre "),l()()(),c(49,"div",29)(50,"div",30)(51,"i",31),C("click",function(){return x(r),A(i.copy1())}),l(),O(52,QN,3,0,"span",32),c(53,"pre",33,0),H(),s(55,`import { CommonModule } from '@angular/common';
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
}`),W(),l()(),c(56,"div",34)(57,"i",31),C("click",function(){return x(r),A(i.copy2())}),l(),O(58,JN,3,0,"span",32),c(59,"pre",33,1),H(),s(61,`import { FormsModule } from '@angular/forms';
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
}`),W(),l()(),c(62,"div",35)(63,"i",31),C("click",function(){return x(r),A(i.copy3())}),l(),O(64,XN,3,0,"span",32),c(65,"pre",33,2),H(),s(67,`import { HttpClient } from '@angular/common/http';
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
}`),W(),l()(),c(68,"div",36)(69,"i",31),C("click",function(){return x(r),A(i.copy4())}),l(),O(70,YN,3,0,"span",32),c(71,"pre",33,3),H(),s(73,`1. Cr\xE9er un dossier back-end-json \xE0 la racine du projet.

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
 et avec le contenu suivant:  (voir jsonupdateproduct.component.ts).`),W(),l()()()()}t&2&&(g(14),Ee("ngModel",i.newProduct.name),g(4),Ee("ngModel",i.newProduct.price),g(4),Ee("ngModel",i.newProduct.categoryName),g(4),Ee("ngModel",i.newProduct.description),g(9),S("ngForOf",i.products),g(17),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,He,te,Pe,Nt,De,pt,Ve,Ot,zt,Oe,$t],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Go=class n{constructor(e){this.http=e}apiUrl="http://localhost:5000/api/products";getProducts(){return this.http.get(this.apiUrl).subscribe(e=>{console.log("Donn\xE9es re\xE7ues dans le service :",e)}),this.http.get(this.apiUrl)}addProduct(e){return this.http.post(this.apiUrl,e)}updateProduct(e,t){return this.http.put(`${this.apiUrl}/${e}`,t)}deleteProduct(e){return this.http.delete(`${this.apiUrl}/${e}`)}static \u0275fac=function(t){return new(t||n)(ie(Cn))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var ZN=["tab1"],eV=["tab2"],tV=["tab3"],nV=["tab4"],iV=["tab5"],rV=n=>["/update-node",n];function oV(n,e){if(n&1){let t=Z();c(0,"div",39)(1,"div",40)(2,"div",41)(3,"strong"),s(4),l(),c(5,"p"),s(6),l(),c(7,"span",42),s(8),l(),c(9,"p")(10,"strong"),s(11,"Categorie: "),l(),s(12),l()(),c(13,"button",43),C("click",function(){let r=x(t).$implicit,o=ce();return A(o.deleteProduct(r._id))}),s(14," Delete "),l(),c(15,"button",44),s(16," Update "),l()()()}if(n&2){let t=e.$implicit;g(4),he(t.nom),g(2),he(t.description),g(2),z("",t.prix," $"),g(4),he(t.categorie_nom),g(3),S("routerLink",xi(5,rV,t._id))}}function sV(n,e){n&1&&(c(0,"span",45),s(1,"copied "),y(2,"i",46),l())}function aV(n,e){n&1&&(c(0,"span",45),s(1,"copied "),y(2,"i",46),l())}function lV(n,e){n&1&&(c(0,"span",45),s(1,"copied "),y(2,"i",46),l())}function cV(n,e){n&1&&(c(0,"span",45),s(1,"copied "),y(2,"i",46),l())}function uV(n,e){n&1&&(c(0,"span",45),s(1,"copied "),y(2,"i",46),l())}var ad=class n{constructor(e){this.productService=e}products=[];newProduct={nom:"",description:"",prix:0,categorie_nom:""};ngOnInit(){this.fetchProducts()}fetchProducts(){this.productService.getProducts().subscribe(e=>{this.products=e})}addProduct(){this.productService.addProduct(this.newProduct).subscribe(e=>{console.log("value :",e),this.fetchProducts()})}deleteProduct(e){this.productService.deleteProduct(e).subscribe(()=>{this.fetchProducts()})}infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab3");infoTab4=$("tab4");infoTab5=$("tab5");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab4()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy5(){let e=this.infoTab5()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Go))};static \u0275cmp=j({type:n,selectors:[["app-products"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,ZN,5),q(i.infoTab2,eV,5),q(i.infoTab3,tV,5),q(i.infoTab4,nV,5),q(i.infoTab5,iV,5)),t&2&&ee(5)},decls:110,vars:10,consts:[["tab1",""],["tab2",""],["tab3",""],["tab4",""],["tab5",""],["tab6",""],[1,"container","mt-3"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"my-4"],[1,"form-group"],["for","productName"],["id","productName","type","text","placeholder","Enter product name",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","mt-2"],["for","productDescription"],["id","productDescription","type","text","placeholder","Enter product description",1,"form-control",3,"ngModelChange","ngModel"],["for","productPrix"],["id","productPrix","type","number","placeholder","Enter product price",1,"form-control",3,"ngModelChange","ngModel"],["for","productCategory"],["id","productCategory","type","text","placeholder","Enter product category",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-success","mt-2",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","false",1,"nav-link"],["id","c5-tab","data-bs-toggle","tab","data-bs-target","#c5","type","button","role","tab","aria-controls","c5","aria-selected","false",1,"nav-link"],["id","c6-tab","data-bs-toggle","tab","data-bs-target","#c6","type","button","role","tab","aria-controls","c6","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c5","role","tabpanel","aria-labelledby","c5-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c6","role","tabpanel","aria-labelledby","c6-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","d-flex","justify-content-center"],[1,"card","p-2",2,"width","18rem","height","100%"],[1,"card-body"],[1,"badge","bg-primary"],[1,"btn","btn-danger","btn-sm","mt-2",3,"click"],[1,"btn","btn-warning","btn-sm","mt-2",3,"routerLink"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",6)(1,"h1"),s(2,"crud-angular-nodejs-mongodb"),l(),y(3,"hr"),c(4,"h3"),s(5,"Products"),l(),c(6,"div",7),O(7,oV,17,7,"div",8),l(),c(8,"div",9)(9,"h3"),s(10,"Add Product"),l(),c(11,"div",10)(12,"label",11),s(13,"Nom"),l(),c(14,"input",12),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.nom,a)||(i.newProduct.nom=a),A(a)}),l()(),c(15,"div",13)(16,"label",14),s(17,"Description"),l(),c(18,"input",15),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.description,a)||(i.newProduct.description=a),A(a)}),l()(),c(19,"div",13)(20,"label",16),s(21,"Prix"),l(),c(22,"input",17),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.prix,a)||(i.newProduct.prix=a),A(a)}),l()(),c(23,"div",13)(24,"label",18),s(25,"Categorie"),l(),c(26,"input",19),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.categorie_nom,a)||(i.newProduct.categorie_nom=a),A(a)}),l()(),c(27,"button",20),C("click",function(){return x(r),A(i.addProduct())}),s(28,"Add"),l()(),c(29,"ul",21)(30,"li",22)(31,"button",23),s(32," ProductsComponent.ts "),l()(),c(33,"li",22)(34,"button",24),s(35," UpdateProductComponent.ts "),l()(),c(36,"li",22)(37,"button",25),s(38," ProductService.ts "),l()(),c(39,"li",22)(40,"button",26),s(41," server.js "),l()(),c(42,"li",22)(43,"button",27),s(44," insertProducts.js "),l()(),c(45,"li",22)(46,"button",28),s(47," D\xE9marche \xE0 suivre "),l()()(),c(48,"div",29)(49,"div",30)(50,"i",31),C("click",function(){return x(r),A(i.copy1())}),l(),O(51,sV,3,0,"span",32),c(52,"pre",33,0),H(),s(54,`import { FormsModule } from '@angular/forms';
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
}`),W(),l()(),c(55,"div",34)(56,"i",31),C("click",function(){return x(r),A(i.copy2())}),l(),O(57,aV,3,0,"span",32),c(58,"pre",33,1),H(),s(60,`import { Component, OnInit } from '@angular/core';
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
}`),W(),l()(),c(61,"div",35)(62,"i",31),C("click",function(){return x(r),A(i.copy3())}),l(),O(63,lV,3,0,"span",32),c(64,"pre",33,2),H(),s(66,`import { Injectable } from '@angular/core';
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
}`),W(),l()(),c(67,"div",36)(68,"i",31),C("click",function(){return x(r),A(i.copy4())}),l(),O(69,cV,3,0,"span",32),c(70,"pre",33,3),H(),s(72,`const express = require("express"); // Importation du framework Express pour cr\xE9er le serveur
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
});`),W(),l()(),c(73,"div",37)(74,"i",31),C("click",function(){return x(r),A(i.copy5())}),l(),O(75,uV,3,0,"span",32),c(76,"pre",33,4),H(),s(78,`const { MongoClient } = require("mongodb");

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

          `),W(),l()(),c(79,"div",38)(80,"pre",33,5),H(),s(82,"Avant tout: se connecter \xE0 MongoDB Atlas et cr\xE9er une base de donn\xE9es nomm\xE9e "),c(83,"strong"),s(84,"mydbase"),l(),s(85," et une collection nomm\xE9e "),c(86,"strong"),s(87,"products"),l(),s(88,`.
et recup\xE9rer la cha\xEEne de connexion.

1. Cr\xE9er le dossier back-end-node pour le serveur Node.js \xE0 la racine du projet.

2. Dans le dossier back-end-node initialiser avec la commande : `),c(89,"strong"),s(90,"npm init -y"),l(),s(91,`.

3. Installer les d\xE9pendances n\xE9cessaires avec la commande : `),c(92,"strong"),s(93,"npm install express mongoose cors body-parser"),l(),s(94,`.
    \u2022	express : Framework pour cr\xE9er des routes.
    \u2022	mongoose : ORM pour interagir avec MongoDB.
    \u2022	cors : Pour autoriser les requ\xEAtes entre le frontend et le backend.
    \u2022	body-parser : Pour parser les requ\xEAtes JSON.

4. Cr\xE9er un fichier server.js pour le serveur Node.js.

5. Y mettre le code du serveur server.js.

6. Lancer le serveur Node.js avec la commande : `),c(95,"strong"),s(96,"node server.js"),l(),s(97,`.

7. Lancer le ficher insertProducts.js pour ins\xE9rer des produits dans la base de donn\xE9es avec la commande : `),c(98,"strong"),s(99,"node insertProducts.js"),l(),s(100,`.
   ou ins\xE9rer les produits manuellement dans MongoDB Compass.

8. Cr\xE9er le dossier services/http/apinodejs pour les services Angular.

9. Cr\xE9er un service ProductService pour les appels HTTP. voir ProductService.ts.

10. Cr\xE9er un composant ProductsComponent pour afficher les produits. voir ProductsComponent.ts.

11. Cr\xE9er un composant UpdateProductComponent pour mettre \xE0 jour un produit. voir UpdateProductComponent.ts.

12. configurer HttpClient dans app.config.ts:
    `),c(101,"strong"),s(102,`export const appConfig: ApplicationConfig = {
      providers: [
        provideHttpClient(withFetch()),
        ...
      `),l(),s(103,`
13. Ajouter les routes dans app-route.ts:
    `),c(104,"strong"),s(105,`
      { path: 'products-node', component: ProductsComponent },
      { path: 'update-node/:id', component:UpdateProductComponent },
    `),l(),s(106,`
14. demarrer l'application avec la commande : `),c(107,"strong"),s(108,"ng serve"),l(),s(109,"."),W(),l()()()()}t&2&&(g(7),S("ngForOf",i.products),g(7),Ee("ngModel",i.newProduct.nom),g(4),Ee("ngModel",i.newProduct.description),g(4),Ee("ngModel",i.newProduct.prix),g(4),Ee("ngModel",i.newProduct.categorie_nom),g(25),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Pe,De,pt,Ve,Oe,G,He,te,Mi],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var dV=["tab1"],pV=["tab2"],hV=["tab3"],mV=["tab4"],fV=n=>["/update-product-firebase",n];function gV(n,e){if(n&1){let t=Z();c(0,"div",33)(1,"div",34)(2,"div",35)(3,"strong"),s(4),l(),c(5,"p"),s(6),l(),c(7,"span",36),s(8),l(),c(9,"p")(10,"strong"),s(11,"Cat\xE9gorie: "),l(),s(12),l()(),c(13,"button",37),s(14," Modifier "),l(),c(15,"button",38),C("click",function(){let r=x(t).$implicit,o=ce();return A(o.deleteProduct(r.id))}),s(16," Supprimer "),l()()()}if(n&2){let t=e.$implicit;g(4),he(t.nom),g(2),he(t.description||"Pas de description"),g(2),z("",t.prix," $"),g(4),z("",t.categorie_nom||"Non d\xE9finie"," "),g(),S("routerLink",xi(5,fV,t.id))}}function vV(n,e){n&1&&(c(0,"span",39),s(1,"copied "),y(2,"i",40),l())}function _V(n,e){n&1&&(c(0,"span",39),s(1,"copied "),y(2,"i",40),l())}function bV(n,e){n&1&&(c(0,"span",39),s(1,"copied "),y(2,"i",40),l())}function yV(n,e){n&1&&(c(0,"span",39),s(1,"copied "),y(2,"i",40),l())}var ld=class n{constructor(e,t){this.firestoreService=e;this.router=t;this.fetchProducts()}products=[];newProduct={nom:"",description:"",prix:0,categorie_nom:""};addProduct(){if(!this.newProduct.nom||this.newProduct.prix<=0){console.error("Les champs obligatoires ne sont pas remplis.");return}this.firestoreService.addDocument("angproducts",this.newProduct).then(()=>{console.log("Produit ajout\xE9 avec succ\xE8s !"),this.fetchProducts(),this.resetForm()}).catch(e=>{console.error("Erreur lors de l'ajout du produit :",e)})}resetForm(){this.newProduct={nom:"",description:"",prix:0,categorie_nom:""}}fetchProducts(){this.firestoreService.getDocuments("angproducts").subscribe({next:e=>{this.products=e,console.log("Produits r\xE9cup\xE9r\xE9s :",e)},error:e=>{console.error("Erreur lors de la r\xE9cup\xE9ration des produits :",e)}})}deleteProduct(e){e&&this.firestoreService.deleteDocument("angproducts",e).then(()=>{console.log("Produit supprim\xE9 :",e),this.fetchProducts()}).catch(t=>{console.error("Erreur lors de la suppression du produit :",t)})}infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab3");infoTab4=$("tab4");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy4(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Bo),oe(Ge))};static \u0275cmp=j({type:n,selectors:[["app-productsFirebase"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,dV,5),q(i.infoTab2,pV,5),q(i.infoTab3,hV,5),q(i.infoTab4,mV,5)),t&2&&ee(4)},decls:69,vars:10,consts:[["productForm","ngForm"],["tab1",""],["tab2",""],["tab3",""],["tab4",""],[1,"container","mt-3"],[1,"mb-4",3,"ngSubmit"],[1,"mb-3"],["for","nom",1,"form-label"],["type","text","id","nom","name","nom","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","description",1,"form-label"],["id","description","name","description",1,"form-control",3,"ngModelChange","ngModel"],["for","prix",1,"form-label"],["type","number","id","prix","name","prix","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","categorie_nom",1,"form-label"],["type","text","id","categorie_nom","name","categorie_nom",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center",4,"ngFor","ngForOf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","c4-tab","data-bs-toggle","tab","data-bs-target","#c4","type","button","role","tab","aria-controls","c4","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c4","role","tabpanel","aria-labelledby","c4-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4","d-flex","justify-content-center"],[1,"card","p-2",2,"width","18rem","height","100%"],[1,"card-body"],[1,"badge","bg-primary"],[1,"btn","btn-warning","btn-sm","mt-2",3,"routerLink"],[1,"btn","btn-danger","btn-sm","mt-2",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",5)(1,"h1"),s(2,"CRUD avec Api firebase"),l(),y(3,"hr"),c(4,"h3"),s(5,"Ajouter un nouveau produit"),l(),c(6,"form",6,0),C("ngSubmit",function(){return x(r),A(i.addProduct())}),c(8,"div",7)(9,"label",8),s(10,"Nom du produit"),l(),c(11,"input",9),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.nom,a)||(i.newProduct.nom=a),A(a)}),l()(),c(12,"div",7)(13,"label",10),s(14,"Description"),l(),c(15,"textarea",11),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.description,a)||(i.newProduct.description=a),A(a)}),l()(),c(16,"div",7)(17,"label",12),s(18,"Prix"),l(),c(19,"input",13),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.prix,a)||(i.newProduct.prix=a),A(a)}),l()(),c(20,"div",7)(21,"label",14),s(22,"Cat\xE9gorie"),l(),c(23,"input",15),we("ngModelChange",function(a){return x(r),Ce(i.newProduct.categorie_nom,a)||(i.newProduct.categorie_nom=a),A(a)}),l()(),c(24,"button",16),s(25," Ajouter le produit "),l()(),y(26,"hr"),c(27,"h3"),s(28,"Liste des produits"),l(),c(29,"div",17),O(30,gV,17,7,"div",18),l(),c(31,"ul",19)(32,"li",20)(33,"button",21),s(34," Composant Parent "),l()(),c(35,"li",20)(36,"button",22),s(37," UpdateProductFireComponent.ts "),l()(),c(38,"li",20)(39,"button",23),s(40," FirestoreService.ts "),l()(),c(41,"li",20)(42,"button",24),s(43," D\xE9marche \xE0 suivre "),l()()(),c(44,"div",25)(45,"div",26)(46,"i",27),C("click",function(){return x(r),A(i.copy1())}),l(),O(47,vV,3,0,"span",28),c(48,"pre",29,1),H(),s(50,`import { CommonModule } from '@angular/common';
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
}`),W(),l()(),c(51,"div",30)(52,"i",27),C("click",function(){return x(r),A(i.copy2())}),l(),O(53,_V,3,0,"span",28),c(54,"pre",29,2),H(),s(56,`import { Injectable } from '@angular/core';
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

}`),W(),l()(),c(57,"div",31)(58,"i",27),C("click",function(){return x(r),A(i.copy3())}),l(),O(59,bV,3,0,"span",28),c(60,"pre",29,3),H(),s(62,`import {
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
}`),W(),l()(),c(63,"div",32)(64,"i",27),C("click",function(){return x(r),A(i.copy4())}),l(),O(65,yV,3,0,"span",28),c(66,"pre",29,4),H(),s(68,`1. Cree une base de donn\xE9es Firestore sur Firebase ainsi une collection angproducts.

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
  voir le code source dans le fichier src/app/pages/tests/firebase/productsfire.component.ts`),W(),l()()()()}if(t&2){let r=Ye(7);g(11),Ee("ngModel",i.newProduct.nom),g(4),Ee("ngModel",i.newProduct.description),g(4),Ee("ngModel",i.newProduct.prix),g(4),Ee("ngModel",i.newProduct.categorie_nom),g(),S("disabled",r.invalid),g(6),S("ngForOf",i.products),g(17),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked)}},dependencies:[G,He,te,Pe,Nt,De,pt,Ve,Ot,zt,Oe,$t,Mi],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var cd=class n{constructor(e,t,i){this.productService=e;this.route=t;this.router=i}product={};productId=null;ngOnInit(){this.productId=this.route.snapshot.paramMap.get("id"),this.productId&&this.productService.getProducts().subscribe(e=>{let t=e.find(i=>i._id===this.productId);t&&(this.product=t)})}updateProduct(){this.productId&&this.productService.updateProduct(this.productId,this.product).subscribe({next:()=>{alert("Produit mis \xE0 jour avec succ\xE8s !"),this.router.navigate(["/products-node"])},error:e=>{console.error("Erreur lors de la mise \xE0 jour du produit :",e)}})}static \u0275fac=function(t){return new(t||n)(oe(Go),oe(_t),oe(Ge))};static \u0275cmp=j({type:n,selectors:[["app-update-product"]],decls:21,vars:4,consts:[[1,"container","mt-4"],[1,"form-group"],["for","productName"],["id","productName","type","text","placeholder","Enter product name",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","mt-2"],["for","productDescription"],["id","productDescription","type","text","placeholder","Enter product description",1,"form-control",3,"ngModelChange","ngModel"],["for","productPrix"],["id","productPrix","type","number","placeholder","Enter product price",1,"form-control",3,"ngModelChange","ngModel"],["for","productCategory"],["id","productCategory","type","text","placeholder","Enter product category",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-success","mt-2",3,"click"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h2"),s(2,"Update Product"),l(),c(3,"div",1)(4,"label",2),s(5,"Nom"),l(),c(6,"input",3),we("ngModelChange",function(o){return Ce(i.product.nom,o)||(i.product.nom=o),o}),l()(),c(7,"div",4)(8,"label",5),s(9,"Description"),l(),c(10,"input",6),we("ngModelChange",function(o){return Ce(i.product.description,o)||(i.product.description=o),o}),l()(),c(11,"div",4)(12,"label",7),s(13,"Prix"),l(),c(14,"input",8),we("ngModelChange",function(o){return Ce(i.product.prix,o)||(i.product.prix=o),o}),l()(),c(15,"div",4)(16,"label",9),s(17,"Categorie"),l(),c(18,"input",10),we("ngModelChange",function(o){return Ce(i.product.categorie_nom,o)||(i.product.categorie_nom=o),o}),l()(),c(19,"button",11),C("click",function(){return i.updateProduct()}),s(20," Save "),l()()),t&2&&(g(6),Ee("ngModel",i.product.nom),g(4),Ee("ngModel",i.product.description),g(4),Ee("ngModel",i.product.prix),g(4),Ee("ngModel",i.product.categorie_nom))},dependencies:[G,Pe,De,pt,Ve,Oe],encapsulation:2})};var EV=["tab1"];function CV(n,e){n&1&&(c(0,"span",16),s(1,"copied "),y(2,"i",17),l())}var ud=class n{compteur=0;monObservable=new rt(e=>{let t=0,i=setInterval(()=>{e.next(t),t++},1e3);return()=>clearInterval(i)});subscription;sabonner(){(!this.subscription||this.subscription.closed)&&(this.subscription=this.monObservable.subscribe({next:e=>this.compteur=e,error:e=>console.error("Erreur:",e),complete:()=>console.log("Observable compl\xE9t\xE9.")}))}sedesabonner(){this.subscription&&(this.subscription.unsubscribe(),console.log("D\xE9sabonn\xE9."))}ngOnDestroy(){this.sedesabonner()}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-observable"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,EV,5),t&2&&ee()},decls:43,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","m-4",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fs-6","text-danger"],[1,"tab"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les observables: cr\xE9er, subscribe, unsubscribe"),l()(),y(4,"hr"),c(5,"div"),s(6),l(),c(7,"button",2),C("click",function(){return x(r),A(i.sabonner())}),s(8," D\xE9marrer le compteur "),l(),c(9,"button",3),C("click",function(){return x(r),A(i.sedesabonner())}),s(10," Arr\xEAter le compteur "),l(),c(11,"ul",4)(12,"li",5)(13,"button",6),s(14," Composant Parent "),l()()(),c(15,"div",7)(16,"div",8)(17,"i",9),C("click",function(){return x(r),A(i.copy1())}),l(),O(18,CV,3,0,"span",10),c(19,"pre",11,0),H(),s(21,`import { Component } from '@angular/core';
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
}`),W(),l()()(),c(22,"div",12),s(23," ****************************************"),c(24,"span",13),s(25,"cours"),l(),s(26," **************************************** "),l(),c(27,"pre")(28,"strong",14),s(29,"C'est quoi RxJS ?"),l(),s(30,`
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

`),c(31,"strong",14),s(32,"Cr\xE9er et lire les donn\xE9es d\u2019un Observable :"),l(),s(33,`
Il existe beaucoup d\u2019op\xE9rateurs pour cr\xE9er des Observable, interval en est un exemple
 et \xE9met un nombre dans un intervalle de temps donn\xE9.

`),c(34,"div",15),s(35,`@Component({
  template: \`
    <p>Counter: { {counter$ | async} }</p>
  \`
})
export class MyComponent {
  counter$ = interval(1000);
}`),l(),s(36,`
Ici, counter$ est un Observable qui \xE9met un nombre toutes les secondes.
Pour afficher la valeur de counter$, il faut utiliser le pipe async qui permet
de souscrire \xE0 l\u2019Observable et de se d\xE9sabonner automatiquement lorsque le composant est d\xE9truit.

`),c(37,"strong",14),s(38,"Cr\xE9er une valeur d\xE9riv\xE9e d\u2019un Observable:"),l(),s(39,`
`),c(40,"div",15),s(41,`@Component({
  template: \`
    <p>Counter: { {counter$ | async} }</p>
    <p>Double Counter: { {doubleCounter$ | async} }</p>
  \`
})
export class MyComponent {
  counter$ = interval(1000);
  doubleCounter$ = this.counter$.pipe(
    map(value => value * 2));
}`),l(),s(42,`
Ici, doubleCounter$ est un Observable qui \xE9met un nombre toutes les secondes,
mais qui est le double de counter$. Gr\xE2ce \xE0 l\u2019op\xE9rateur map, on transforme
la valeur de counter$ avant qu\u2019elle soit \xE9mise par doubleCounter$.
      `),l()()}t&2&&(g(6),z("Compteur: ",i.compteur,""),g(12),S("ngIf",i.clicked))},dependencies:[G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var dd=class n{constructor(e){this.http=e}baseURL=Oi.apiURL;getProducts(){try{return this.http.get(`${this.baseURL}/products/getProducts.php`)}catch(e){throw console.error("Erreur lors de la r\xE9cup\xE9ration des produits",e),e}}static \u0275fac=function(t){return new(t||n)(ie(Cn))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var pd=class n{constructor(e){this.productService=e}resolve(){return this.productService.getProducts().pipe(ve(e=>e.success&&e.dataProd?e.dataProd:(console.warn("No products found or API returned an error."),[])))}static \u0275fac=function(t){return new(t||n)(ie(dd))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})};var TV=["tab1"],IV=["tab2"],SV=["tab3"];function xV(n,e){if(n&1&&(c(0,"div",24)(1,"div",25)(2,"div",26)(3,"h3",27),s(4),l()()()()),n&2){let t=e.$implicit;g(4),he(t.nom)}}function AV(n,e){if(n&1&&(c(0,"div",22),O(1,xV,5,1,"div",23),ct(2,"slice"),l()),n&2){let t=ce();g(),S("ngForOf",Cs(2,1,t.categories,0,4))}}function RV(n,e){n&1&&(c(0,"p"),s(1,"Aucune cat\xE9gorie trouv\xE9e."),l())}function PV(n,e){if(n&1&&(c(0,"div",24)(1,"div",28),y(2,"img",29),c(3,"div",26)(4,"h3",30),s(5),l(),c(6,"p",31),s(7),l(),c(8,"p",32)(9,"strong"),s(10,"Prix: "),l(),s(11),ct(12,"currency"),l(),c(13,"p",32)(14,"strong"),s(15,"Cat\xE9gorie: "),l(),s(16),l()()()()),n&2){let t=e.$implicit;g(2),S("src",t.image,mb)("alt",t.nom),g(3),he(t.nom),g(),S("title",t.description),g(),z(" ",t.description," "),g(4),z("",Mn(12,7,t.prix)," "),g(5),z("",t.categorie_nom," ")}}function kV(n,e){if(n&1&&(c(0,"div",22),O(1,PV,17,9,"div",23),ct(2,"slice"),l()),n&2){let t=ce();g(),S("ngForOf",Cs(2,1,t.products,0,4))}}function DV(n,e){n&1&&(c(0,"p"),s(1,"Aucune cat\xE9gorie trouv\xE9e."),l())}function MV(n,e){n&1&&(c(0,"span",33),s(1,"copied "),y(2,"i",34),l())}function OV(n,e){n&1&&(c(0,"span",33),s(1,"copied "),y(2,"i",34),l())}function NV(n,e){n&1&&(c(0,"span",33),s(1,"copied "),y(2,"i",34),l())}var hd=class n{constructor(e){this.route=e}products=[];categories=[];ngOnInit(){this.route.data.subscribe(e=>{this.products=e.products,this.categories=e.categories})}infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(_t))};static \u0275cmp=j({type:n,selectors:[["app-resolver"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,TV,5),q(i.infoTab2,IV,5),q(i.infoTab3,SV,5)),t&2&&ee(3)},decls:103,vars:7,consts:[["noCategories",""],["noProducts",""],["tab1",""],["tab3",""],[1,"container"],["class","row",4,"ngIf","ngIfElse"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"text-danger"],[1,"mt-5"],[1,"fs-2"],[2,"font-size","14px"],[1,"row"],["class","col-12 col-sm-6 col-md-3 col-lg-3 mb-4",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-3","col-lg-3","mb-4"],[1,"card","d-flex","flex-column","mb-4","shadow"],[1,"card-body","d-flex","flex-column"],[1,"card-title","text-truncate"],[1,"card","d-flex","flex-column","mb-4"],[1,"card-img-top","img-fluid",2,"max-height","150px","object-fit","cover",3,"src","alt"],[1,"card-title","text-truncate","fw-bold"],[1,"card-text","text-truncate",3,"title"],[1,"card-text"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",4)(1,"h1"),s(2,"Resolver"),l(),y(3,"hr"),c(4,"h3"),s(5,"Liste des categories"),l(),O(6,AV,3,5,"div",5)(7,RV,2,0,"ng-template",null,0,On),c(9,"h3"),s(10,"Liste des produits"),l(),O(11,kV,3,5,"div",5)(12,DV,2,0,"ng-template",null,1,On),c(14,"ul",6)(15,"li",7)(16,"button",8),s(17," Composant Parent "),l()(),c(18,"li",7)(19,"button",9),s(20," resolver "),l()(),c(21,"li",7)(22,"button",10),s(23," demarche \xE0 suivre "),l()()(),c(24,"div",11)(25,"div",12)(26,"i",13),C("click",function(){return x(r),A(i.copy1())}),l(),O(27,MV,3,0,"span",14),c(28,"pre",15,2),H(),s(30,`import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import { Product } from '../../interfaces/product';
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
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="card d-flex flex-column mb-4">
            <img
              [src]="product.image"
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">{{ product.nom }}</h5>
              <p class="card-text text-truncate" [title]="product.description">
                {{ product.description }}
              </p>
              <p class="card-text">
                <strong>Prix: </strong>{{ product.prix | currency }}
              </p>
              <p class="card-text">
                <strong>Cat\xE9gorie: </strong>{{ product.categorie_nom }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ng-template #noProducts>
        <p>Aucune cat\xE9gorie trouv\xE9e.</p>
      </ng-template>
    </div>
  \`,
 styles: \` \`,
})
export class ResolverComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  products: Product[] = [];
  ngOnInit(): void {
    // R\xE9cup\xE8re les donn\xE9es du resolver
    this.route.data.subscribe((data) => {
      this.products = data['products'];
    });
  }
}`),W(),l()(),c(31,"div",16)(32,"i",13),C("click",function(){return x(r),A(i.copy2())}),l(),O(33,OV,3,0,"span",14),c(34,"pre",15,2),H(),s(36,`import { map } from 'rxjs/operators';
import { ProductsService } from './../services/http/products/products.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductsService) {}

  resolve(): Observable<Product[]> {
    // Appelle le service pour r\xE9cup\xE9rer les produits
    return this.productService.getProducts().pipe(
      map((response: any) => {
        console.log('Response from API:', response); // Affiche la r\xE9ponse brute pour d\xE9bogage

        if (response.success && response.dataProd) {
          console.log('Products extracted:', response.dataProd); // Affiche les produits extraits
          return response.dataProd; // Retourne les produits extraits
        } else {
          console.warn('No products found or API returned an error.');
          return []; // Retourne un tableau vide si la r\xE9ponse n'est pas valide
        }
      })
    );
  }
}`),W(),l()(),c(37,"div",17)(38,"i",13),C("click",function(){return x(r),A(i.copy3())}),l(),O(39,NV,3,0,"span",14),c(40,"pre",15,3),H(),c(42,"strong"),s(43,"1. G\xE9n\xE9rer le Resolver:"),l(),c(44,"span",18),s(45,"ng generate resolver services/nom-du-resolver"),l(),s(46,`
Cela cr\xE9e un fichier TypeScript avec une classe impl\xE9mentant Resolve.

`),c(47,"strong"),s(48,"2. Impl\xE9menter la logique de r\xE9cup\xE9ration des donn\xE9es dans le resolver:"),l(),s(49,`
(voir code du resolver)

`),c(50,"strong"),s(51,"3. D\xE9clarer le Resolver dans le Routing Module :"),l(),s(52,` Ajouter le Resolver dans la configuration des routes:
`),c(53,"span",18),s(54,`const routes: Routes = [
  {
    path: 'chemin',
    component: NomComponent,
    resolve: {
      nomData: NomResolver
    }
  }
];`),l(),s(55,`

`),c(56,"strong"),s(57,"4. R\xE9cup\xE9rer les donn\xE9es dans le Composant :"),l(),s(58,` Utiliser ActivatedRoute pour acc\xE9der aux donn\xE9es r\xE9solues :
`),c(59,"span",18),s(60,`this.route.data.subscribe(data => {
  console.log(data.nomData);
});`),l(),W(),l()()(),c(61,"span",19),s(62," __________________________________"),c(63,"span",20),s(64,"cours"),l(),s(65," __________________________________ "),l(),c(66,"pre",21),s(67,`Un resolver dans Angular est comme un assistant qui pr\xE9pare les donn\xE9es
n\xE9cessaires avant que
vous n'arriviez sur une page.

`),c(68,"strong"),s(69,"1. Pr\xE9paration des donn\xE9es :"),l(),s(70,` Il r\xE9cup\xE8re les informations
n\xE9cessaires pour une route sp\xE9cifique avant que la page
ne soit affich\xE9e.

`),c(71,"strong"),s(72,"2. Chargement anticip\xE9 :"),l(),s(73,` Au lieu d'attendre que le composant
soit charg\xE9 pour commencer \xE0 r\xE9cup\xE9rer les donn\xE9es,
le resolver les obtient \xE0 l'avance.

`),c(74,"strong"),s(75,"3. Am\xE9lioration de l'exp\xE9rience utilisateur :"),l(),s(76,` Cela permet
d'\xE9viter d'afficher une page vide ou un indicateur de chargement,
car les donn\xE9es sont d\xE9j\xE0 pr\xEAtes lorsque la page s'affiche.

`),c(77,"strong"),s(78,"4. Gestion des erreurs :"),l(),s(79,` Si quelque chose ne va pas lors de
la r\xE9cup\xE9ration des donn\xE9es, le resolver peut rediriger l'utilisateur
 vers une page d'erreur avant m\xEAme que la route ne soit activ\xE9e.

 `),c(80,"strong"),s(81,"structure:"),l(),c(82,"span",18),s(83,`
  app/
|- services/
|  |- user.service.ts
|  |- user.interface.ts
|  |- resolvers/
|     |- user-resolver.service.ts
|- app.component.ts
|- app.router.ts
|- app.config.ts
|- pages/
|  |- user-list.component.ts
 `),l(),s(84,`
`),c(85,"strong"),s(86,"La fonction du resolver:"),l(),s(87,`
`),c(88,"span",18),s(89,`import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

export const userResolver: ResolveFn<Product> = (
  route,
  state
): Observable<Product> => {
  const userService = inject(UserService);
  return userService.get(route.params['userId']);
};`),l(),s(90,`

`),c(91,"strong"),s(92,"Ajouter le resolver \xE0 la route: "),l(),s(93,`
`),c(94,"span",18),s(95,`const routes: Routes = [
  {
    path: 'resolver',
    component: ResolverComponent,
    resolve: {
    products: ProductsResolver, // Associe le resolver \xE0 cette route
    },
  }
];`),l(),s(96,`

`),c(97,"strong"),s(98,"Acc\xE9der aux donn\xE9es r\xE9solues dans le composant:"),l(),s(99,`
`),c(100,"span",18),s(101,`this.route.data.subscribe((data) => {
      this.products = data['products'];
    });`),l(),s(102,`
      `),l()()}if(t&2){let r=Ye(8),o=Ye(13);g(6),S("ngIf",i.categories.length>0)("ngIfElse",r),g(5),S("ngIf",i.products.length>0)("ngIfElse",o),g(16),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked)}},dependencies:[G,He,te,Ml,Dl],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(2.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var VV=["tab1"],FV=["tab2"];function LV(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}function UV(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}var md=class n{infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-guard"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,VV,5),q(i.infoTab2,FV,5)),t&2&&ee(2)},decls:49,vars:2,consts:[["tab1",""],[1,"container"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"fs-2"],[2,"font-size","14px"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"Guard: contr\xF4ler l'acc\xE8s \xE0 des routes sp\xE9cifiques"),l(),y(3,"hr"),c(4,"ul",2)(5,"li",3)(6,"button",4),s(7," fichier guard "),l()(),c(8,"li",3)(9,"button",5),s(10," fichier route "),l()()(),c(11,"div",6)(12,"div",7)(13,"i",8),C("click",function(){return x(r),A(i.copy1())}),l(),O(14,LV,3,0,"span",9),c(15,"pre",10,0),H(),s(17,`import { CanActivateFn } from '@angular/router';
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
};`),W(),l()(),c(18,"div",11)(19,"i",8),C("click",function(){return x(r),A(i.copy2())}),l(),O(20,UV,3,0,"span",9),c(21,"pre",10,0),H(),s(23,`import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    //guard
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  ];
`),W(),l()()(),c(24,"div"),s(25,`
____________________________________________________________________________`),c(26,"span",12),s(27,"cours"),l(),s(28,"____________________________________________________________________________ "),c(29,"pre",13),s(30,`
Un Guard sur Angular est une fonctionnalit\xE9 qui vous permet de contr\xF4ler l'acc\xE8s \xE0 des routes sp\xE9cifiques dans votre application.
Vous pouvez utiliser des guards pour ex\xE9cuter certaines v\xE9rifications ou actions avant de permettre l'acc\xE8s \xE0 une route,
par exemple pour v\xE9rifier si l'utilisateur est authentifi\xE9 ou a les droits d'acc\xE8s appropri\xE9s.

`),c(31,"strong"),s(32,"1. Cr\xE9ation de la page de guard:"),l(),s(33,`
`),c(34,"span",14),s(35,"commande: ng generate guard guards/guard"),l(),s(36,`

`),c(37,"strong"),s(38,"2. Code de base de la page de guard:"),l(),s(39,`
`),c(40,"span",14),s(41,`import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
//logique pour retourner true ou  false.
true permet l'acc\xE8s \xE0 la page prot\xE9g\xE9 par ce guard.
false ne le permet pas
};`),l(),s(42,`

`),c(43,"strong"),s(44,"3. Utilisation de guard dans le fichier app.route.ts:"),l(),s(45,`
pour prot\xE9ger page dashboard:
{path: 'dashboard', component: DashboardComponent, `),c(46,"span",14),s(47,"canActivate: [authGuard]"),l(),s(48,`,},
`),l()()()}t&2&&(g(14),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var fd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,i){t&1&&(c(0,"div"),s(1,"dashboard"),l())},encapsulation:2})};var jV=["tab1"];function BV(n,e){n&1&&(c(0,"span"),s(1,"Le nom est requis."),l())}function qV(n,e){n&1&&(c(0,"span"),s(1,"Minimum 3 caract\xE8res."),l())}function $V(n,e){if(n&1&&(c(0,"div",38),O(1,BV,2,0,"span",39)(2,qV,2,0,"span",39),l()),n&2){let t=ce();g(),S("ngIf",t.name.errors==null?null:t.name.errors.required),g(),S("ngIf",t.name.errors==null?null:t.name.errors.minlength)}}function zV(n,e){n&1&&(c(0,"span"),s(1,"L'email est requis."),l())}function GV(n,e){n&1&&(c(0,"span"),s(1,"Format d'email invalide."),l())}function WV(n,e){if(n&1&&(c(0,"div",38),O(1,zV,2,0,"span",39)(2,GV,2,0,"span",39),l()),n&2){let t=ce();g(),S("ngIf",t.email.errors==null?null:t.email.errors.required),g(),S("ngIf",t.email.errors==null?null:t.email.errors.email)}}function HV(n,e){n&1&&(c(0,"span"),s(1,"Mot de passe requis."),l())}function KV(n,e){n&1&&(c(0,"span"),s(1,"Minimum 6 caract\xE8res."),l())}function QV(n,e){if(n&1&&(c(0,"div",38),O(1,HV,2,0,"span",39)(2,KV,2,0,"span",39),l()),n&2){let t=ce();g(),S("ngIf",t.password.errors==null?null:t.password.errors.required),g(),S("ngIf",t.password.errors==null?null:t.password.errors.minlength)}}function JV(n,e){n&1&&(c(0,"span"),s(1,"Ce champ est requis."),l())}function XV(n,e){if(n&1&&(c(0,"div",38),O(1,JV,2,0,"span",39),l()),n&2){let t=ce();g(),S("ngIf",t.control.errors==null?null:t.control.errors.required)}}function YV(n,e){if(n&1&&(c(0,"span",40),s(1),l()),n&2){let t=ce();g(),he(t.control.value)}}function ZV(n,e){if(n&1){let t=Z();c(0,"li",41),s(1),c(2,"button",42),C("click",function(){let r=x(t).index,o=ce();return A(o.removeSkill(r))}),s(3," Supprimer "),l()()}if(n&2){let t=e.$implicit;g(),z(" ",t," ")}}function e3(n,e){n&1&&(c(0,"span",43),s(1,"copied "),y(2,"i",44),l())}var gd=class n{myForm=new oo({name:new Ui("",[Un.required,Un.minLength(3)]),email:new Ui("",[Un.required,Un.email]),password:new Ui("",[Un.required,Un.minLength(6)]),isActive:new Ui(!1)});control=new Ui("",[Un.required]);skills=[];newSkill="";get name(){return this.myForm.get("name")}get email(){return this.myForm.get("email")}get password(){return this.myForm.get("password")}onSubmit(){console.log("Formulaire soumis :",this.myForm.value),console.log("Valeur du champ ind\xE9pendant :",this.control.value)}resetForm(){this.myForm.reset(),this.control.reset(),this.skills=[]}addSkill(){this.newSkill.trim()&&(console.log("newSkill :",this.newSkill),console.log("newSkill :",this.newSkill),this.skills.push(this.newSkill.trim()),console.log("skills :",this.skills),this.newSkill="")}removeSkill(e){this.skills.splice(e,1)}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-formcontrolgroup"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,jV,5),t&2&&ee()},decls:63,vars:14,consts:[["tab1",""],[1,"container","mt-5"],[1,"text-center","mb-4"],[1,"p-4","border","rounded","bg-light",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["id","name","formControlName","name","placeholder","Entrez votre nom",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],["for","email",1,"form-label"],["id","email","formControlName","email","placeholder","Entrez votre email",1,"form-control"],["for","password",1,"form-label"],["id","password","type","password","formControlName","password","placeholder","Entrez votre mot de passe",1,"form-control"],["for","independentControl",1,"form-label"],["id","independentControl","placeholder","Champ ind\xE9pendant (non inclus dans le FormGroup)",1,"form-control",3,"formControl"],[1,"form-check","mb-3"],["type","checkbox","formControlName","isActive","id","isActive",1,"form-check-input"],["for","isActive",1,"form-check-label"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"mt-4"],[1,"bg-light","p-3","rounded","border"],["class","bg-light p-3 my-3 rounded border",4,"ngIf"],[1,"mb-1"],["for","skills",1,"form-label"],[1,"list-group","mb-2"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"d-flex"],["type","text","placeholder","Nouvelle comp\xE9tence",1,"form-control","me-2",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"text-danger","mt-1"],[4,"ngIf"],[1,"bg-light","p-3","my-3","rounded","border"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h2",2),s(2," Exemple complet : FormGroup et FormControl "),l(),c(3,"form",3),C("ngSubmit",function(){return x(r),A(i.onSubmit())}),c(4,"div",4)(5,"label",5),s(6,"Nom :"),l(),y(7,"input",6),O(8,$V,3,2,"div",7),l(),c(9,"div",4)(10,"label",8),s(11,"Email :"),l(),y(12,"input",9),O(13,WV,3,2,"div",7),l(),c(14,"div",4)(15,"label",10),s(16,"Mot de passe :"),l(),y(17,"input",11),O(18,QV,3,2,"div",7),l(),c(19,"div",4)(20,"label",12),s(21,"Champ ind\xE9pendant :"),l(),y(22,"input",13),O(23,XV,2,1,"div",7),l(),c(24,"div",14),y(25,"input",15),c(26,"label",16),s(27,"Activer l'utilisateur"),l()(),c(28,"div",17)(29,"button",18),s(30," Soumettre "),l(),c(31,"button",19),C("click",function(){return x(r),A(i.resetForm())}),s(32," R\xE9initialiser "),l()()(),c(33,"div",20)(34,"h3"),s(35,"Valeurs actuelles du formulaire :"),l(),c(36,"pre",21),s(37),ct(38,"json"),l(),c(39,"h3"),s(40,"Valeur du champ ind\xE9pendant :"),l(),O(41,YV,2,1,"span",22),l(),c(42,"div",23)(43,"label",24),s(44,"Comp\xE9tences :"),l(),c(45,"ul",25),O(46,ZV,4,1,"li",26),l()(),c(47,"div",27)(48,"input",28),we("ngModelChange",function(a){return x(r),Ce(i.newSkill,a)||(i.newSkill=a),A(a)}),l(),c(49,"button",29),C("click",function(){return x(r),A(i.addSkill())}),s(50," Ajouter "),l()(),y(51,"hr"),c(52,"ul",30)(53,"li",31)(54,"button",32),s(55," Composant Parent "),l()()(),c(56,"div",33)(57,"div",34)(58,"i",35),C("click",function(){return x(r),A(i.copy1())}),l(),O(59,e3,3,0,"span",36),c(60,"pre",37,0),H(),s(62,`import { CommonModule } from '@angular/common';
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

          `),W(),l()()()()}t&2&&(g(3),S("formGroup",i.myForm),g(5),S("ngIf",i.name.invalid&&i.name.touched),g(5),S("ngIf",i.email.invalid&&i.email.touched),g(5),S("ngIf",i.password.invalid&&i.password.touched),g(4),S("formControl",i.control),g(),S("ngIf",i.control.invalid&&i.control.touched),g(6),S("disabled",i.myForm.invalid||i.control.invalid),g(8),he(Mn(38,12,i.myForm.value)),g(4),S("ngIf",i.control.value),g(5),S("ngForOf",i.skills),g(2),Ee("ngModel",i.newSkill),g(11),S("ngIf",i.clicked))},dependencies:[i1,Nt,De,gm,Ve,Ot,wm,Tm,Im,G,He,te,kl,Pe,Oe],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var t3=["tab1"],n3=["loginForm"];function i3(n,e){n&1&&(c(0,"div",22),s(1," Username is required. "),l())}function r3(n,e){n&1&&(c(0,"div",22),s(1," Password is required. "),l())}function o3(n,e){if(n&1&&(c(0,"p")(1,"strong"),s(2,"username:"),l(),s(3),c(4,"strong"),s(5,"password:"),l(),s(6),l()),n&2){ce();let t=Ye(5);g(3),z(" ",t.value.username," "),g(3),z(" ",t.value.password," ")}}function s3(n,e){n&1&&(c(0,"span",23),s(1,"copied "),y(2,"i",24),l())}var vd=class n{loginForm;isvisible=!1;onSubmit(){console.log(this.loginForm.value),this.isvisible=!0}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-login"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,t3,5),Si(n3,5)),t&2){ee();let r;ti(r=ni())&&(i.loginForm=r.first)}},decls:33,vars:7,consts:[["loginForm","ngForm"],["username","ngModel"],["password","ngModel"],["tab1",""],[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","username"],["type","text","name","username","ngModel","","required","",1,"form-control"],["class","error",4,"ngIf"],["for","password"],["type","password","name","password","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-success","mb-3",3,"disabled"],[4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"error"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",4)(1,"h1"),s(2,"ngForm: Utiliser ViewChild"),l(),y(3,"hr"),c(4,"form",5,0),C("ngSubmit",function(){return x(r),A(i.onSubmit())}),c(6,"div",6)(7,"label",7),s(8,"Username"),l(),y(9,"input",8,1),O(11,i3,2,0,"div",9),l(),c(12,"div",6)(13,"label",10),s(14,"Password"),l(),y(15,"input",11,2),O(17,r3,2,0,"div",9),l(),c(18,"button",12),s(19," Login "),l(),O(20,o3,7,2,"p",13),l(),y(21,"hr"),c(22,"ul",14)(23,"li",15)(24,"button",16),s(25," ngForm avec viewChild "),l()()(),c(26,"div",17)(27,"div",18)(28,"i",19),C("click",function(){return x(r),A(i.copy1())}),l(),O(29,s3,3,0,"span",20),c(30,"pre",21,3),H(),s(32,`import { CommonModule } from '@angular/common';
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
}`),W(),l()()()()}if(t&2){let r=Ye(5),o=Ye(10),a=Ye(16);g(11),S("ngIf",o.invalid&&o.touched),g(4),vt("is-invalid",a.invalid&&a.touched),g(2),S("ngIf",a.invalid&&a.touched),g(),S("disabled",!r.valid),g(2),S("ngIf",i.isvisible),g(9),S("ngIf",i.clicked)}},dependencies:[Pe,Nt,De,Ve,Ot,zt,Oe,$t,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var a3=["tab1"];function l3(n,e){n&1&&(c(0,"div",28),s(1," Username is required. "),l())}function c3(n,e){n&1&&(c(0,"div",29),s(1,"Email is required."),l())}function u3(n,e){n&1&&(c(0,"div",29),s(1,"Email invalid."),l())}function d3(n,e){n&1&&(c(0,"div",28),s(1," Password is required. "),l())}function p3(n,e){if(n&1&&(c(0,"div",30)(1,"h3"),s(2,"Submitted Data"),l(),c(3,"p")(4,"strong"),s(5,"Username:"),l(),s(6),l(),c(7,"p")(8,"strong"),s(9,"Username:"),l(),s(10),l(),c(11,"p")(12,"strong"),s(13,"Password:"),l(),s(14),l()()),n&2){let t=ce();g(6),z(" ",t.submittedData.username,""),g(4),z(" ",t.submittedData.email,""),g(4),z(" ",t.submittedData.password,"")}}function h3(n,e){n&1&&(c(0,"span",31),s(1,"copied "),y(2,"i",32),l())}var _d=class n{submittedData=null;onSubmit(e){this.submittedData=e.value,console.log("form.value :",e.value),e.reset()}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-ngForm"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,a3,5),t&2&&ee()},decls:54,vars:13,consts:[["loginForm","ngForm"],["username","ngModel"],["email","ngModel"],["password","ngModel"],["tab1",""],[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","username"],["type","text","id","username","name","username","ngModel","","required","",1,"form-control"],["class","error",4,"ngIf"],["for","email"],["type","email","id","email","name","email","ngModel","","required","",1,"form-control"],["class","error text-danger",4,"ngIf"],["for","password"],["type","password","id","password","name","password","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","mt-3",4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"error"],[1,"error","text-danger"],[1,"mt-3"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",5)(1,"h1"),s(2,"ngForm: Passer ngForm dans ngSubmit dans le template"),l(),y(3,"hr"),c(4,"form",6,0),C("ngSubmit",function(){x(r);let a=Ye(5);return A(i.onSubmit(a))}),c(6,"div",7)(7,"label",8),s(8,"Username"),l(),y(9,"input",9,1),O(11,l3,2,0,"div",10),l(),c(12,"div",7)(13,"label",11),s(14,"Email"),l(),y(15,"input",12,2),O(17,c3,2,0,"div",13)(18,u3,2,0,"div",13),l(),c(19,"div",7)(20,"label",14),s(21,"Password"),l(),y(22,"input",15,3),O(24,d3,2,0,"div",10),l(),c(25,"button",16),s(26," Login "),l()(),O(27,p3,15,3,"div",17),y(28,"hr"),c(29,"ul",18)(30,"li",19)(31,"button",20),s(32," ngForm dans ngSubmit "),l()()(),c(33,"div",21)(34,"div",22)(35,"i",23),C("click",function(){return x(r),A(i.copy1())}),l(),O(36,h3,3,0,"span",24),c(37,"pre",25,4),H(),s(39,`import { Component } from '@angular/core';
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
}`),W(),l()()(),y(41,"hr"),c(42,"div",26),s(43," ****************************************"),c(44,"span",27),s(45,"cours"),l(),s(46,"************************************************* "),l(),c(47,"pre")(48,"strong"),s(49,"Explications des ajustements :"),l(),s(50,`
1. #loginForm="ngForm" : Permet d'acc\xE9der \xE0 l'\xE9tat du formulaire (comme valid, dirty, etc.) dans le template.

2. Validation visuelle :
Ajout de #username="ngModel" et #password="ngModel" pour v\xE9rifier individuellement l'\xE9tat des champs.
Classe conditionnelle is-invalid pour afficher un style rouge en cas de champ invalide.

3. Messages d'erreur :
Un message clair est affich\xE9 si un champ requis est vide apr\xE8s interaction (touched).

4. D\xE9sactivation du bouton de soumission :
Le bouton est d\xE9sactiv\xE9 si le formulaire n'est pas valide (!loginForm.valid).

5. Style : Un style minimal a \xE9t\xE9 ajout\xE9 pour am\xE9liorer l'exp\xE9rience utilisateur.

`),c(51,"strong"),s(52,"Fonctionnement attendu :"),l(),s(53,`
1. L'utilisateur doit remplir les champs username et password.
2. Si les champs sont vides ou non valides, un message d'erreur s'affiche sous le champ correspondant.
3. Le bouton "Login" est d\xE9sactiv\xE9 tant que tous les champs ne sont pas valides.
      `),l()()}if(t&2){let r=Ye(5),o=Ye(10),a=Ye(16),d=Ye(23);g(9),vt("is-invalid",o.invalid&&o.touched),g(2),S("ngIf",o.invalid&&o.touched),g(4),vt("is-invalid",a.invalid&&a.touched),g(2),S("ngIf",(a.errors==null?null:a.errors.required)&&a.touched),g(),S("ngIf",(a.errors==null?null:a.errors.email)&&a.touched),g(4),vt("is-invalid",d.invalid&&d.touched),g(2),S("ngIf",d.invalid&&d.touched),g(),S("disabled",!r.valid),g(2),S("ngIf",i.submittedData),g(9),S("ngIf",i.clicked)}},dependencies:[Pe,Nt,De,Ve,Ot,zt,Oe,$t,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var m3=["tab1"],f3=["tab2"];function g3(n,e){n&1&&(Ti(0),c(1,"h3"),s(2,"Bienvenue, utilisateur connect\xE9 !"),l(),Ii())}function v3(n,e){n&1&&(c(0,"h3"),s(1,"Vous \xEAtes d\xE9connect\xE9. Veuillez vous connecter."),l())}function _3(n,e){n&1&&(c(0,"span"),s(1,"(Premier)"),l())}function b3(n,e){n&1&&(c(0,"span"),s(1,"(Dernier)"),l())}function y3(n,e){if(n&1&&(c(0,"li"),s(1),O(2,_3,2,0,"span",18)(3,b3,2,0,"span",18),l()),n&2){let t=e.$implicit,i=e.index,r=e.first,o=e.last;g(),Dn(" ",i+1,". ",t," "),g(),S("ngIf",r),g(),S("ngIf",o)}}function E3(n,e){if(n&1&&(Ti(0),c(1,"ul"),O(2,y3,4,4,"li",17),l(),Ii()),n&2){let t=ce();g(2),S("ngForOf",t.items)}}function C3(n,e){n&1&&(c(0,"p"),s(1,"La liste est masqu\xE9e."),l())}function w3(n,e){n&1&&(c(0,"span",19),s(1,"copied "),y(2,"i",20),l())}var bd=class n{isLoggedIn=!1;items=["Item 1","Item 2","Item 3"];isListVisible=!0;toggleLogin(){this.isLoggedIn=!this.isLoggedIn}toggleList(){this.isListVisible=!this.isListVisible}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-container-template"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,m3,5),q(i.infoTab2,f3,5)),t&2&&ee(2)},decls:42,vars:7,consts:[["notLoggedIn",""],["emptyList",""],["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[4,"ngIf","ngIfElse"],[1,"btn","btn-secondary","mb-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2,"ng-container / ng-template"),l(),y(3,"hr"),c(4,"button",4),C("click",function(){return x(r),A(i.toggleLogin())}),s(5),l(),O(6,g3,3,0,"ng-container",5)(7,v3,2,0,"ng-template",null,0,On),y(9,"hr"),c(10,"h4"),s(11,"Liste des \xE9l\xE9ments :"),l(),c(12,"button",6),C("click",function(){return x(r),A(i.toggleList())}),s(13),l(),O(14,E3,3,1,"ng-container",5)(15,C3,2,0,"ng-template",null,1,On),y(17,"hr"),c(18,"ul",7)(19,"li",8)(20,"button",9),s(21," Composant Parent "),l()()(),c(22,"div",10)(23,"div",11)(24,"i",12),C("click",function(){return x(r),A(i.copy1())}),l(),O(25,w3,3,0,"span",13),c(26,"pre",14,2),H(),s(28,`import { CommonModule } from '@angular/common';
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

}`),W(),l()()(),y(29,"hr"),c(30,"div",15),s(31," ****************************************"),c(32,"span",16),s(33,"cours"),l(),s(34,"************************************************* "),l(),c(35,"pre")(36,"strong"),s(37,"ng-container :"),l(),s(38,`
Permet de grouper plusieurs \xE9l\xE9ments sans ajouter d'\xE9l\xE9ment DOM suppl\xE9mentaire.
Utilis\xE9 ici pour conditionnellement afficher le contenu bas\xE9 sur isLoggedIn et isListVisible.

`),c(39,"strong"),s(40,"ng-template :"),l(),s(41,`
D\xE9finit un bloc de contenu r\xE9utilisable, qui peut \xEAtre rendu de mani\xE8re conditionnelle ou dynamique.
Utilis\xE9 ici avec #notLoggedIn et #emptyList.
    `),l()()}if(t&2){let r=Ye(8),o=Ye(16);g(5),z(" ",i.isLoggedIn?"Se d\xE9connecter":"Se connecter"," "),g(),S("ngIf",i.isLoggedIn)("ngIfElse",r),g(7),z(" ",i.isListVisible?"Masquer la liste":"Afficher la liste"," "),g(),S("ngIf",i.isListVisible)("ngIfElse",o),g(11),S("ngIf",i.clicked)}},dependencies:[G,He,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var T3=["tab1"],I3=["tab2"],S3=["tab3"];function x3(n,e){if(n&1&&(c(0,"li"),s(1),l()),n&2){let t=e.$implicit;g(),he(t.nom)}}function A3(n,e){if(n&1&&(c(0,"ul",5),Yt(1,x3,2,1,"li",null,Ur),l()),n&2){let t=ce();g(),Zt(t.categories)}}function R3(n,e){n&1&&(c(0,"div",6),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories. "),l())}function P3(n,e){n&1&&(c(0,"div",6),s(1,"Aucune cat\xE9gorie"),l())}function k3(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}function D3(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}function M3(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}var yd=class n{constructor(e,t){this.categoriesService=e;this.store=t}categories=[];hasError=!1;isClicked=!1;ngOnInit(){this.fetchCategories()}fetchCategories(){this.categoriesService.getCategories().subscribe({next:e=>{e?.success?this.store.dispatch(G0(e.dataCat||[])):console.log(e.message)},error:e=>{console.error("Erreur :",e),this.hasError=!0}})}showCategories(){this.store.select(FT).subscribe(e=>this.categories=e),this.isClicked=!0}infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Ni),oe(An))};static \u0275cmp=j({type:n,selectors:[["app-ngrx"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,T3,5),q(i.infoTab2,I3,5),q(i.infoTab3,S3,5)),t&2&&ee(3)},decls:48,vars:6,consts:[["tab1",""],["tab2",""],["tab3",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[1,"mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade",2,"position","relative"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2,"Ngrx: stoquer et r\xE9cuperer "),l(),c(3,"button",4),C("click",function(){return x(r),A(i.showCategories())}),s(4," Afficher tous les categories "),l(),O(5,A3,3,0,"ul",5)(6,R3,2,0,"div",6)(7,P3,2,0,"div",6),y(8,"hr"),c(9,"ul",7)(10,"li",8)(11,"button",9),s(12," Composant Parent "),l()(),c(13,"li",8)(14,"button",10),s(15," data.slice.ts "),l()(),c(16,"li",8)(17,"button",11),s(18," store.ts "),l()()(),c(19,"div",12)(20,"div",13)(21,"i",14),C("click",function(){return x(r),A(i.copy1())}),l(),O(22,k3,3,0,"span",15),c(23,"pre",16,0),H(),s(25,`import { CommonModule } from '@angular/common';
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

}`),W(),l()(),c(26,"div",17)(27,"i",14),C("click",function(){return x(r),A(i.copy2())}),l(),O(28,D3,3,0,"span",15),c(29,"pre",16,1),H(),s(31,`import {
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

          `),W(),l()(),c(32,"div",18)(33,"i",14),C("click",function(){return x(r),A(i.copy3())}),l(),O(34,M3,3,0,"span",15),c(35,"pre",16,2),H(),s(37,`import { provideStore } from '@ngrx/store';
import { dataReducer } from './data.slice';

export const appStore = provideStore({
  data: dataReducer,
});`),W(),l()()(),y(38,"hr"),c(39,"div"),s(40," ****************************************"),c(41,"span",19),s(42,"Explication"),l(),s(43,"************************************************* "),c(44,"pre")(45,"strong"),s(46,"D\xE9marche \xE0 suivre:"),l(),s(47,`
1. installer ngrx: npm install @ngrx/store
2. creer le fichier reducer et le store
3. ajouter appStore dans app.config.ts
       `),l()()()}t&2&&(g(5),Qe(i.categories.length>0?5:-1),g(),Qe(i.categories.length===0&&i.hasError?6:-1),g(),Qe(i.categories.length===0&&!i.hasError&&i.isClicked?7:-1),g(15),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var O3=["tab1"],N3=["tab2"];function V3(n,e){if(n&1&&(c(0,"li"),s(1),l()),n&2){let t=e.$implicit;g(),he(t.nom)}}function F3(n,e){if(n&1&&(c(0,"ul",4),Yt(1,V3,2,1,"li",null,Ur),l()),n&2){let t=ce();g(),Zt(t.categories)}}function L3(n,e){n&1&&(c(0,"div",5),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories. "),l())}function U3(n,e){n&1&&(c(0,"div",5),s(1,"Aucune cat\xE9gorie"),l())}function j3(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}function B3(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}var Ed=class n{constructor(e){this.CategoriesService=e}categories=[];hasError=!1;isClicked=!1;fetchCategories(){this.hasError=!1,this.CategoriesService.getCategories().subscribe({next:t=>{t?.success?this.categories=t.dataCat||[]:console.log(t.message)},error:t=>{console.error("Erreur :",t),this.hasError=!0}}),setTimeout(()=>{this.isClicked=!0},1e3)}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)(oe(Ni))};static \u0275cmp=j({type:n,selectors:[["app-http"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,O3,5),q(i.infoTab2,N3,5)),t&2&&ee(2)},decls:47,vars:5,consts:[["tab1",""],["tab2",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[1,"mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[2,"background-color","#f8f9fa","padding","0 15px","border","1px solid #ddd"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"Test de la requ\xEAte Http"),l(),c(3,"button",3),C("click",function(){return x(r),A(i.fetchCategories())}),s(4," Afficher/Masquer tous les categories de l'api "),l(),O(5,F3,3,0,"ul",4)(6,L3,2,0,"div",5)(7,U3,2,0,"div",5),y(8,"hr"),c(9,"ul",6)(10,"li",7)(11,"button",8),s(12," Composant Parent "),l()(),c(13,"li",7)(14,"button",9),s(15," Sevice Categories "),l()()(),c(16,"div",10)(17,"div",11)(18,"i",12),C("click",function(){return x(r),A(i.copy1())}),l(),O(19,j3,3,0,"span",13),c(20,"pre",14,0),H(),s(22,`import { CategoriesService } from './../../../services/categories-http/categoriesHttp.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  providers: [CategoriesService], // Facultatif si fourni en \`root\`

  template: \`
    <div class="container mt-3">
      <h1>Test de la requ\xEAte Http</h1>
      <button class="btn btn-success" (click)="fetchCategories()">
        Afficher tous les categories de l'api
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
    </div>
  \`,
})

export class ClienthttpComponent {
  constructor(private CategoriesService: CategoriesService) {}
  categories: Categorie[] = [];
  hasError: boolean = false;
  isClicked: boolean = false;
  fetchCategories() {
    this.hasError = false; // R\xE9initialisation de l'\xE9tat d'erreur
   this.isClicked=true;
    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response
    this.CategoriesService.getCategories().subscribe({
      next: (response) => {
        if (response?.success) {
          this.categories = response.dataCat || []; // V\xE9rifie que la cl\xE9 existe
        } else {
          console.log(response.message);
        }
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.hasError = true;
      },
    });
  }
}`),W(),l()(),c(23,"div",15)(24,"i",12),C("click",function(){return x(r),A(i.copy2())}),l(),O(25,B3,3,0,"span",13),c(26,"pre",14,1),H(),s(28,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  // ou
  // private http = inject(HttpClient);
    private baseURL: string = environment.apiURL;
  //fetch all categories
    getCategories(): Observable<any> {
        try {
          // Appel \xE0 l'API pour r\xE9cup\xE9rer les produits
          const response =  this.http.get<any>(\`\${this.baseURL}/categories/getCategories.php\`)
          // console.log('response service getCategories:', response);
          return response;
        } catch (error) {
          // Gestion des erreurs : affiche un message dans la console
          console.error('Erreur lors de la r\xE9cup\xE9ration des categories', error);

          // Propage l'erreur pour qu'elle puisse \xEAtre g\xE9r\xE9e par l'appelant
          throw error;
        }
      }
}`),W(),l()()(),c(29,"div",16),s(30," ****************************************"),c(31,"span",17),s(32,"cours"),l(),s(33,"************************************************* "),l(),c(34,"pre")(35,"strong"),s(36,"1. Avant utilisation:"),l(),s(37,`  il faut le configurer dans app.config.ts:

import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    `),c(38,"span",18),s(39,"provideHttpClient(withFetch()),"),l(),s(40,`
    ....,
    ]

`),c(41,"strong"),s(42,"2. Utilisation:"),l(),s(43,`
`),c(44,"div",19),s(45,`
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private users = signal<User[]>([]);
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  // GET - R\xE9cup\xE9rer tous les utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap(users => this.users.set(users))
    );
  }

  // GET - R\xE9cup\xE9rer un utilisateur par son ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.url}/\${id}\`);
  }

  // POST - Cr\xE9er un nouvel utilisateur
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  // PUT - Mettre \xE0 jour un utilisateur
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(\`\${this.url}/\${user.id}\`, user);
  }

  // PATCH - Mettre \xE0 jour partiellement un utilisateur
  patchUser(id: number, changes: Partial<User>): Observable<User> {
    return this.http.patch<User>(\`\${this.url}/\${id}\`, changes);
  }

  // DELETE - Supprimer un utilisateur
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.url}/\${id}\`);
  }
}
`),l(),s(46,`
`),l()()}t&2&&(g(5),Qe(i.categories.length>0?5:-1),g(),Qe(i.hasError&&i.isClicked?6:-1),g(),Qe(i.categories.length===0&&!i.hasError&&i.isClicked?7:-1),g(12),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var q3=["childContent"],Cd=class n{childContent;showAlert(){alert("M\xE9thode appel\xE9e depuis le parent !")}changeText(e){this.childContent.nativeElement.innerHTML=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant27"]],viewQuery:function(t,i){if(t&1&&Si(q3,5),t&2){let r;ti(r=ni())&&(i.childContent=r.first)}},decls:7,vars:0,consts:[["childContent",""],[1,"border","p-3"],[1,"d-flex","justify-content-center"],[1,"p-3","border","w-25",2,"background-color","lightyellow"]],template:function(t,i){t&1&&(c(0,"div",1)(1,"h3"),s(2,"Enfant"),l(),c(3,"div",2)(4,"div",3,0),s(6," Contenu initial du composant enfant. "),l()()())},encapsulation:2})};var $3=["child"],z3=["tab1"],G3=["tab2"];function W3(n,e){n&1&&(c(0,"span",22),s(1,"copied "),y(2,"i",23),l())}function H3(n,e){n&1&&(c(0,"span",22),s(1,"copied "),y(2,"i",23),l())}var wd=class n{childComponent=$("child");compteur=0;infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;callChildMethod(){this.childComponent()?.showAlert()}changeChildText(){this.childComponent()?.changeText('<span class="text-danger">Texte mis \xE0 jour depuis le parent !</span>')}changeStyleChildElmnt(){let e=this.childComponent();if(e){let t=e.childContent.nativeElement;t.style.backgroundColor="lightblue",t.style.color="white",t.style.padding="20px",t.style.border="2px solid blue",t.style.borderRadius="10px"}}animElmntChild(){let t=this.childComponent()?.childContent.nativeElement,i=0,r=1,o=setInterval(()=>{i+=r*5,t.style.transform=`translateX(${i}px)`,(i>=100||i<=-100)&&(r*=-1)},30);setTimeout(()=>{clearInterval(o),t.style.transform="translateX(0)"},5e3)}copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user-card"]],viewQuery:function(t,i){t&1&&(q(i.childComponent,$3,5),q(i.infoTab1,z3,5),q(i.infoTab2,G3,5)),t&2&&ee(3)},decls:70,vars:2,consts:[["child",""],["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[1,"btn","btn-success","me-3",3,"click"],[1,"btn","btn-secondary","me-3",3,"click"],[1,"btn","btn-secondary",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content","fw-bold",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"fw-bold"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2,"viewChild: acc\xE9der \xE0 un composant enfant"),l(),y(3,"hr"),c(4,"div",4)(5,"h3"),s(6,"Parent"),l(),c(7,"button",5),C("click",function(){return x(r),A(i.callChildMethod())}),s(8," Appeler m\xE9thode enfant "),l(),c(9,"button",6),C("click",function(){return x(r),A(i.changeChildText())}),s(10," Changer le texte de l'element de l'enfant"),l(),y(11,"br")(12,"br"),c(13,"button",6),C("click",function(){return x(r),A(i.changeStyleChildElmnt())}),s(14," Changer le style de l'element de l'enfant "),l(),c(15,"button",7),C("click",function(){return x(r),A(i.animElmntChild())}),s(16," faire bouger l'element de l'enfant "),l(),y(17,"hr")(18,"app-enfant27",null,0),l(),y(20,"hr"),c(21,"ul",8)(22,"li",9)(23,"button",10),s(24," viewChild Parent "),l()(),c(25,"li",9)(26,"button",11),s(27," viewChild Enfant "),l()()(),c(28,"div",12)(29,"div",13)(30,"i",14),C("click",function(){return x(r),A(i.copy1())}),l(),O(31,W3,3,0,"span",15),c(32,"pre",16,1),H(),s(34,`import { EnfantComponent } from './enfant.component';
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
    `),W(),l()(),c(35,"div",17)(36,"i",14),C("click",function(){return x(r),A(i.copy2())}),l(),O(37,H3,3,0,"span",15),c(38,"pre",16,2),H(),s(40,`import { Component, ElementRef, ViewChild } from '@angular/core';

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
    `),W(),l()()(),y(41,"hr"),c(42,"div",18),s(43," ****************************************"),c(44,"span",19),s(45,"cours"),l(),s(46,"************************************************* "),l(),c(47,"pre"),s(48,`
Vous pouvez aussi acc\xE9der \xE0 un composant enfant, ainsi \xE0 ses propri\xE9t\xE9s et ses m\xE9thodes et ses elements dom.

`),c(49,"span",20),s(50,"Dans le dom du parent:"),l(),s(51,`
Pour cela il faut integrer le composant et le referencier avec un #:
`),c(52,"span",21),s(53,"<app-enfant #child></app-enfant>"),l(),s(54,`

`),c(55,"span",20),s(56,"Dans le ts du parent:"),l(),s(57,`
`),c(58,"span",21),s(59,"childComponent = viewChild<EnfantComponent>('child');"),l(),s(60,`
ou tout simplement:
`),c(61,"span",21),s(62,"childComponent = viewChild(EnfantComponent);"),l(),s(63,`

`),c(64,"span",20),s(65,"Utilisation de l'element:"),l(),s(66,`
childComponent est un signal, on l'utiliser avec des parenth\xE8ses: `),c(67,"span",21),s(68,"this.childComponent()"),l(),s(69,`
     `),l()()}t&2&&(g(31),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Cd,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#f8f9fa!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var K3=["paragraph"],Q3=["tab1"];function J3(n,e){n&1&&(c(0,"span",17),s(1,"copied "),y(2,"i",18),l())}var Td=class n{paragraphs=Tl("paragraph");showParagraphs(){this.paragraphs().forEach(e=>{e.nativeElement.style.backgroundColor="#ffc09f"})}reinitialise(){this.paragraphs().forEach(e=>{e.nativeElement.style.backgroundColor=""})}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test28"]],viewQuery:function(t,i){t&1&&(q(i.paragraphs,K3,5),q(i.infoTab1,Q3,5)),t&2&&ee(2)},decls:44,vars:1,consts:[["paragraph",""],["tab1",""],[1,"container"],[1,"p-2"],[1,"btn","btn-success","mx-3",3,"click"],[1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2," ViewChildren():acc\xE9der \xE0 plusieurs \xE9l\xE9ments d'un composant "),l(),y(3,"hr"),c(4,"p",3,0),s(6,"Premier paragraphe"),l(),c(7,"p",3,0),s(9,"Deuxi\xE8me paragraphe"),l(),c(10,"p",3,0),s(12,"Troisi\xE8me paragraphe"),l(),c(13,"button",4),C("click",function(){return x(r),A(i.showParagraphs())}),s(14," Mettre en evidence les paragraphes "),l(),c(15,"button",5),C("click",function(){return x(r),A(i.reinitialise())}),s(16," R\xE9initialiser les paragraphes "),l(),c(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant Parent "),l()()(),c(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(24,J3,3,0,"span",12),c(25,"pre",13,1),H(),s(27,`import { Component, viewChildren, ElementRef } from '@angular/core';

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
}`),W(),l()()(),c(28,"div",14),s(29," ****************************************"),c(30,"span",15),s(31,"cours"),l(),s(32,"************************************************* "),l(),c(33,"pre"),s(34,`viewChildren() est un signal pour acc\xE9der \xE0 plusieurs \xE9l\xE9ments enfants d'un composant.
La fonction viewChildren() retourne un signal contenant un tableau d'ElementRef.
Pour acc\xE9der aux \xE9l\xE9ments, il faut utiliser les parenth\xE8ses () pour obtenir la valeur du signal.

`),c(35,"strong"),s(36,"Comment \xE7a marche:"),l(),s(37,`

  - dans la template referencier les elements du dom :
  <p class="p-2" #paragraph>Premier paragraphe</p>
  <p class="p-2" #paragraph>Deuxi\xE8me paragraphe</p>
  <p class="p-2" #paragraph>Troisi\xE8me paragraphe</p>

  - dans ts:R\xE9cup\xE9rer tous les \xE9l\xE9ments avec la r\xE9f\xE9rence #paragraph
  `),c(38,"strong",16),s(39,"paragraphs = viewChildren<ElementRef>('paragraph');"),l(),s(40,`

  - utilisation:
  `),c(41,"strong",16),s(42,`this.paragraphs().forEach((p) => {
  p.nativeElement....
  });
  `),l(),s(43,`
      `),l()()}t&2&&(g(24),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var X3=["card"],Wo=class n{propsUser;card=$("card");colorCardUser(){let e=this.card();e&&(e.nativeElement.style.backgroundColor="yellow")}initialize(){let e=this.card();e&&(e.nativeElement.style.backgroundColor="")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant29"]],viewQuery:function(t,i){t&1&&q(i.card,X3,5),t&2&&ee()},inputs:{propsUser:"propsUser"},decls:6,vars:3,consts:[["card",""],[1,"border","p-3","mb-2"]],template:function(t,i){t&1&&(c(0,"div",1,0)(2,"h3"),s(3),l(),c(4,"p"),s(5),l()()),t&2&&(g(3),Dn("",i.propsUser.firstname," ",i.propsUser.lastname,""),g(2),z("Email : ",i.propsUser.email,""))},encapsulation:2})};var Y3=["tab1"],Z3=["tab2"],eF=(n,e)=>e.id;function tF(n,e){if(n&1&&(c(0,"div",4)(1,"h3"),s(2,"Enfant"),l(),y(3,"app-enfant29",20),l()),n&2){let t=e.$implicit;g(3),S("propsUser",t)}}function nF(n,e){n&1&&s(0," Aucun utilisateur trouv\xE9 ")}function iF(n,e){n&1&&(c(0,"span",21),s(1,"copied "),y(2,"i",22),l())}function rF(n,e){n&1&&(c(0,"span",21),s(1,"copied "),y(2,"i",22),l())}var Id=class n{users=[{id:"1",firstname:"John",lastname:"Doe",email:"john@example.com",tel:"",address:""},{id:"2",firstname:"kain",lastname:"adam",email:"kain@example.com",tel:"",address:""}];userCards=Tl(Wo);colorCardAllUsers(){let e=this.userCards();console.log(" this.userCards() :",this.userCards()),e.forEach(t=>{t.colorCardUser()})}initializeAllUsers(){this.userCards().forEach(t=>{t.initialize()})}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test29"]],viewQuery:function(t,i){t&1&&(q(i.userCards,Wo,5),q(i.infoTab1,Y3,5),q(i.infoTab2,Z3,5)),t&2&&ee(3)},decls:53,vars:3,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"p-2","border"],[1,"p-2","border","my-2"],[1,"btn","btn-success","mt-3","me-3",3,"click"],[1,"btn","btn-danger","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","true",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade","show",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[3,"propsUser"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"viewChildren : Acc\xE9der aux composants enfants"),l(),y(3,"hr"),c(4,"div",3)(5,"h3"),s(6,"Parent"),l(),Yt(7,tF,4,1,"div",4,eF,!1,nF,1,0),c(10,"button",5),C("click",function(){return x(r),A(i.colorCardAllUsers())}),s(11," Mettre en \xE9vidence tous les utilisateurs "),l(),c(12,"button",6),C("click",function(){return x(r),A(i.initializeAllUsers())}),s(13," R\xE9initialiser "),l()(),c(14,"ul",7)(15,"li",8)(16,"button",9),s(17," Composant Parent "),l()(),c(18,"li",8)(19,"button",10),s(20," Composant Enfant "),l()()(),c(21,"div",11)(22,"div",12)(23,"i",13),C("click",function(){return x(r),A(i.copy1())}),l(),O(24,iF,3,0,"span",14),c(25,"pre",15,0),H(),s(27,`import { Enfant29Component } from './enfant29.component';
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
}`),W(),l()(),c(28,"div",16)(29,"i",13),C("click",function(){return x(r),A(i.copy2())}),l(),O(30,rF,3,0,"span",14),c(31,"pre",15,1),H(),s(33,`import { Component, Input, viewChild, ElementRef } from '@angular/core';
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
}`),W(),l()()(),c(34,"div",17),s(35," ****************************************"),c(36,"span",18),s(37,"cours"),l(),s(38,"************************************************* "),l(),c(39,"pre"),s(40,`Il sert \xE0 acc\xE9der \xE0 des enfants ainsi \xE0 leurs propri\xE9t\xE9s et leurs m\xE9thodes
La m\xE9thode ViewChildren(Enfant29Component) retourne un QueryList<Enfant29Component>, qui repr\xE9sente une liste dynamique de tous les enfants de type Enfant29Component.
Vous pouvez utiliser cette liste pour interagir avec les composants enfants dans le parent.

`),c(41,"strong"),s(42,"syntaxe:"),l(),s(43,`
Pour r\xE9cup\xE9rer des enfants via la nouvelle viewChildren,
`),c(44,"strong",19),s(45,"userCards = viewChildren(Enfant29Component);"),l(),s(46,`
userCards est une liste d'enfants du type Enfant29Component, nous avons deux enfants dans la template.

`),c(47,"strong"),s(48,"utilisation:"),l(),s(49,`
viewChildren() retourne un signal tableau. On acc\xE8de aux propri\xE9t\xE9s et aux m\xE9thodes des m\xE9thodes des enfants en parcourant le tableau:
`),c(50,"strong",19),s(51,`
const cards = this.userCards();
console.log(' this.userCards() :',  this.userCards());
cards.forEach((card) => {
card....; // Acceder \xE0 une m\xE9thode ou une propri\xE9t\xE9 publique de l'enfant
});
`),l(),s(52,`

      `),l()()}t&2&&(g(7),Zt(i.users),g(17),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,te,Wo],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var oF=["cardTitle"],sF=["*"],Sd=class n{title=Il("cardTitle");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant30"]],contentQueries:function(t,i,r){t&1&&Al(r,i.title,oF,5),t&2&&ee()},ngContentSelectors:sF,decls:8,vars:1,consts:[[1,"border","p-3"],[1,"text-danger","fw-bold"]],template:function(t,i){if(t&1&&(jr(),c(0,"div",0)(1,"h3"),s(2,"Enfant"),l(),Br(3),c(4,"div"),s(5,"Titre de la carte : "),c(6,"span",1),s(7),l()()()),t&2){let r;g(7),he((r=i.title())==null?null:r.nativeElement.textContent)}},encapsulation:2})};var aF=["tab1"],lF=["tab2"];function cF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}function uF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}var xd=class n{infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test30"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,aF,5),q(i.infoTab2,lF,5)),t&2&&ee(2)},decls:54,vars:2,consts:[["cardTitle",""],["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2,"contentChild: acc\xE9der aux \xE9l\xE9ments enfants d'un composant"),l(),y(3,"hr"),c(4,"div",4)(5,"h3"),s(6,"Parent"),l(),c(7,"app-enfant30")(8,"h2",null,0),s(10,"John Doe"),l(),c(11,"p"),s(12,"D\xE9veloppeur Web"),l(),c(13,"p"),s(14,"Lorem ipsum dolor sit amet..."),l()()(),c(15,"ul",5)(16,"li",6)(17,"button",7),s(18," Composant Parent "),l()(),c(19,"li",6)(20,"button",8),s(21," Composant Enfant "),l()()(),c(22,"div",9)(23,"div",10)(24,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(25,cF,3,0,"span",12),c(26,"pre",13,1),H(),s(28,`import { EnfantComponent } from './enfant.component';
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
export class Test30Component {}`),W(),l()(),c(29,"div",14)(30,"i",11),C("click",function(){return x(r),A(i.copy2())}),l(),O(31,uF,3,0,"span",12),c(32,"pre",13,2),H(),s(34,`import {  Component,  contentChild,  ElementRef,} from "@angular/core";

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
}`),W(),l()()(),c(35,"div",15),s(36," ****************************************"),c(37,"span",16),s(38,"cours"),l(),s(39,"************************************************* "),l(),c(40,"pre"),s(41,`Le contentChild() est une fonction qui permet d'acc\xE9der aux \xE9l\xE9ments enfants d'un composant.

Vous avez un composant parent qui passe un titre \xE0 travers un element dom via une r\xE9f\xE9rence dans le ngcontent d'un composant enfant .
L'enfant utilise contentChild pour acc\xE9der \xE0 l'\xE9l\xE9ment contenent le titre et le personnaliser.

L'utilisation de contentChild() retourne un signal, ce qui signifie que la valeur sera automatiquement mise \xE0 jour si l'\xE9l\xE9ment enfant change.

`),c(42,"strong"),s(43,"Utilisation:"),l(),s(44,`
template du parent:`),c(45,"span",17),s(46,`
<app-enfant>
<h2 #cardTitle>John Doe</h2>
</app-enfant>
`),l(),s(47,`
template de l'enfant:`),c(48,"span",17),s(49,`
.......
<ng-content />
.......
`),l(),s(50,`
ts de l'enfant:`),c(51,"span",17),s(52,`
  title = contentChild<ElementRef>('cardTitle'); // c'est un signal
  `),l(),s(53,`
      `),l()()}t&2&&(g(25),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Sd,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Ir=class n{status=!0;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant31_2"]],decls:3,vars:1,consts:[[1,"badge"]],template:function(t,i){t&1&&(c(0,"div")(1,"span",0),s(2),l()()),t&2&&(g(2),z(" ",i.status?"En ligne":"Hors ligne"," "))},styles:[".badge[_ngcontent-%COMP%]{padding:4px 8px;background-color:#4caf50;color:#fff;border-radius:4px}"]})};var dF=["*"],Ad=class n{badge=Il(Ir);status=this.badge()?.status;toggleConnect(){this.badge().status=!this.badge()?.status}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant31_1"]],contentQueries:function(t,i,r){t&1&&Al(r,i.badge,Ir,5),t&2&&ee()},ngContentSelectors:dF,decls:8,vars:2,consts:[[1,"card"],[1,"btn","btn-success",3,"click"]],template:function(t,i){t&1&&(jr(),c(0,"div",0)(1,"h2"),s(2,"Profil Utilisateur"),l(),Br(3),c(4,"button",1),C("click",function(){return i.toggleConnect()}),s(5),l(),c(6,"p"),s(7),l()()),t&2&&(g(5),he(i.status?"se deconnecter":"se connecter"),g(2),z("Statut actuel : ",i.status,""))},styles:[".card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ddd;border-radius:8px}"]})};var pF=["tab1"],hF=["tab2"],mF=["tab3"];function fF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}function gF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}function vF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}var Rd=class n{infoTab1=$("tab1");infoTab2=$("tab2");infoTab3=$("tab3");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy3(){let e=this.infoTab3()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test31"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,pF,5),q(i.infoTab2,hF,5),q(i.infoTab3,mF,5)),t&2&&ee(3)},decls:46,vars:3,consts:[["tab1",""],["tab2",""],["tab3",""],[1,"container"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","c3-tab","data-bs-toggle","tab","data-bs-target","#c3","type","button","role","tab","aria-controls","c3","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],["id","c3","role","tabpanel","aria-labelledby","c3-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",3)(1,"h1"),s(2," contentChild: Acc\xE9der \xE0 un composant enfant dans la projection de contenu "),l(),y(3,"hr"),c(4,"div")(5,"h3"),s(6,"Parent"),l(),c(7,"app-enfant31_1"),y(8,"app-enfant31_2"),l()(),c(9,"ul",4)(10,"li",5)(11,"button",6),s(12," Composant Parent "),l()(),c(13,"li",5)(14,"button",7),s(15," Composant Enfant 1 "),l()(),c(16,"li",5)(17,"button",8),s(18," Composant Enfant 2 "),l()()(),c(19,"div",9)(20,"div",10)(21,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(22,fF,3,0,"span",12),c(23,"pre",13,0),H(),s(25,`import { Enfant1Component } from './enfant1.component';
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
export class Test31Component {}`),W(),l()(),c(26,"div",14)(27,"i",11),C("click",function(){return x(r),A(i.copy2())}),l(),O(28,gF,3,0,"span",12),c(29,"pre",13,1),H(),s(31,`import { Enfant2Component } from './enfant2.component';
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
}`),W(),l()(),c(32,"div",15)(33,"i",11),C("click",function(){return x(r),A(i.copy3())}),l(),O(34,vF,3,0,"span",12),c(35,"pre",13,2),H(),s(37,`import { Component} from '@angular/core';

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

}`),W(),l()()(),y(38,"hr"),c(39,"div",16),s(40," ****************************************"),c(41,"span",17),s(42,"cours"),l(),s(43,"************************************************* "),l(),c(44,"pre"),s(45,`      ...
      `),l()()}t&2&&(g(22),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Ad,Ir,G,te],styles:[".card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ddd;border-radius:8px}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var _F=["tab1"],bF=["refTemplate"];function yF(n,e){n&1&&Tb(0)}function EF(n,e){if(n&1&&(Ti(0),O(1,yF,1,0,"ng-container",16),Ii()),n&2){let t=ce();g(),S("ngTemplateOutlet",t.myTemplate)}}function CF(n,e){n&1&&(c(0,"p",17),s(1,"Contenu du template rendu via ViewChild"),l())}function wF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}var Pd=class n{myTemplate;showTemplate=!1;toggleTemplate(){this.showTemplate=!this.showTemplate}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&(q(i.infoTab1,_F,5),Si(bF,5)),t&2){ee();let r;ti(r=ni())&&(i.myTemplate=r.first)}},decls:32,vars:3,consts:[["refTemplate",""],["tab1",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[4,"ngIf"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger","fw-bold"],[4,"ngTemplateOutlet"],[1,"mt-3"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"ViewChild avec ng-template"),l(),c(3,"button",3),C("click",function(){return x(r),A(i.toggleTemplate())}),s(4),l(),O(5,EF,2,1,"ng-container",4)(6,CF,2,0,"ng-template",null,0,On),y(8,"hr"),c(9,"ul",5)(10,"li",6)(11,"button",7),s(12," Composant Parent "),l()()(),c(13,"div",8)(14,"div",9)(15,"i",10),C("click",function(){return x(r),A(i.copy1())}),l(),O(16,wF,3,0,"span",11),c(17,"pre",12,1),H(),s(19,`import { CommonModule } from "@angular/common";
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

          `),W(),l()()(),c(20,"div",13),s(21," ****************************************"),c(22,"span",14),s(23,"cours"),l(),s(24,"************************************************* "),l(),c(25,"pre")(26,"strong"),s(27,"syntaxe :"),l(),s(28,`
`),c(29,"span",15),s(30,"@ViewChild('refTemplate') myTemplate!: TemplateRef{any};"),l(),s(31,`

      `),l()()}t&2&&(g(4),z(" ",i.showTemplate?"Masquer":"Afficher"," le contenu "),g(),S("ngIf",i.showTemplate),g(11),S("ngIf",i.clicked))},dependencies:[G,te,Bb],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var TF=["tab1"],IF=["tab2"],SF=["userInfo"];function xF(n,e){n&1&&(c(0,"span",18),s(1,"copied "),y(2,"i",19),l())}var kd=class n{user={id:"1",firstname:"John ",lastname:"Doe",email:"john@example.com",tel:"",address:""};infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}infoElement=$("userInfo");afficherNom(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="red",e.nativeElement.textContent=this.user.firstname)}afficherEmail(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="yellow",e.nativeElement.textContent=this.user.email)}initialise(){let e=this.infoElement();e&&(e.nativeElement.style.backgroundColor="",e.nativeElement.textContent="aucune information")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test26"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,TF,5),q(i.infoTab2,IF,5),q(i.infoElement,SF,5)),t&2&&ee(3)},decls:54,vars:1,consts:[["userInfo",""],["tab1",""],[1,"container"],[1,"rounded-3","border","p-3"],[1,"btn","btn-success","mt-3","me-3",3,"click"],[1,"btn","btn-danger","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-3"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fw-bolder"],[1,"text-danger","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"viewChild: acc\xE9der \xE0 un \xE9l\xE9ment du DOM"),l(),y(3,"hr"),c(4,"div",3,0),s(6,"aucune information"),l(),c(7,"button",4),C("click",function(){return x(r),A(i.afficherNom())}),s(8," Afficher son nom "),l(),c(9,"button",4),C("click",function(){return x(r),A(i.afficherEmail())}),s(10," Afficher son email "),l(),c(11,"button",5),C("click",function(){return x(r),A(i.initialise())}),s(12," R\xE9initialiser "),l(),c(13,"ul",6)(14,"li",7)(15,"button",8),s(16," Code viewChild Component "),l()()(),c(17,"div",9)(18,"div",10)(19,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(20,xF,3,0,"span",12),c(21,"pre",13,1),H(),s(23,`import { Component, ElementRef, viewChild } from '@angular/core';
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

          `),W(),l()()(),c(24,"div",14),s(25," ****************************************"),c(26,"span",15),s(27,"cours"),l(),s(28,"************************************************* "),l(),c(29,"pre")(30,"strong"),s(31,"ViewChild :"),l(),s(32,`
C'est comme useRef dans react.
Permet d'acc\xE9der \xE0 un \xE9l\xE9ment DOM ou un composant enfant dans le template \xE0 l'aide d'une r\xE9f\xE9rence locale.
Dans ce cas, la propri\xE9t\xE9 infoElement pointe vers l'\xE9l\xE9ment avec la r\xE9f\xE9rence locale #userInfo.
La fonction viewChild() `),c(33,"span",16),s(34,"retourne un signal"),l(),s(35,`, ce qui signifie que sa valeur sera automatiquement mise \xE0 jour si l'\xE9l\xE9ment change dans le DOM

`),c(36,"strong"),s(37,"Syntaxe :"),l(),s(38,`
<div #userInfo>...</div>
`),c(39,"span",17),s(40," infoElement = viewChild<ElementRef<HTMLElement>>('userInfo');"),l(),s(41,`
et pour l'utiliser il faut ajouter les () car c'est un signal: `),c(42,"span",17),s(43,"this.infoElement()"),l(),s(44,`
ou
`),c(45,"span",17),s(46,"@ViewChild('userInfo') infoElement!: ElementRef;"),l(),s(47,`
et pour l'utiliser on l'utilise sans ():`),c(48,"span",17),s(49,"this.infoElement"),l(),s(50,`

`),c(51,"strong"),s(52,"Utilisation dans les m\xE9thodes :"),l(),s(53,`
afficherNom() : Utilise viewChild pour modifier le style CSS de l'\xE9l\xE9ment DOM (changement de la couleur de fond) et pour modifier le contenu
initialise() : Utilise viewChild pour r\xE9initialiser le style appliqu\xE9 pr\xE9c\xE9demment.
      `),l()()}t&2&&(g(20),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#f8f9fa!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var AF=["*"],Dd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-card-props"]],ngContentSelectors:AF,decls:2,vars:0,consts:[[1,"simple-card","my-3"]],template:function(t,i){t&1&&(jr(),c(0,"div",0),Br(1),l())},styles:[".simple-card[_ngcontent-%COMP%]{padding:16px;border:1px solid #ccc;border-radius:10px;background-color:#fbf7ff}"]})};var RF=["tab1"],PF=["tab2"];function kF(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}function DF(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}var Md=class n{user={id:1,name:"John Doe",username:"johndoe",email:"john@example.com"};infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-home"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,RF,5),q(i.infoTab2,PF,5)),t&2&&ee(2)},decls:42,vars:5,consts:[["tab1",""],["tab2",""],[1,"container"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"ng-content"),l(),y(3,"hr"),c(4,"h3"),s(5,"Dashboard"),l(),c(6,"app-card-props")(7,"h2"),s(8),l(),c(9,"h2"),s(10),l(),c(11,"p"),s(12),l()(),y(13,"hr"),c(14,"ul",3)(15,"li",4)(16,"button",5),s(17," Composant Parent "),l()(),c(18,"li",4)(19,"button",6),s(20," Composant Enfant "),l()()(),c(21,"div",7)(22,"div",8)(23,"i",9),C("click",function(){return x(r),A(i.copy1())}),l(),O(24,kF,3,0,"span",10),c(25,"pre",11,0),H(),s(27,`import { EnfantComponent } from './enfant.component';
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
}`),W(),l()(),c(28,"div",12)(29,"i",9),C("click",function(){return x(r),A(i.copy2())}),l(),O(30,DF,3,0,"span",10),c(31,"pre",11,1),H(),s(33,`import { Component } from '@angular/core';

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


          `),W(),l()()(),y(34,"hr"),c(35,"div",13),s(36," ****************************************"),c(37,"span",14),s(38,"cours"),l(),s(39,"************************************************* "),l(),c(40,"pre"),s(41,`L'\xE9quivalent de <ng-content> en Angular pour React est props.children,
une fonctionnalit\xE9 int\xE9gr\xE9e de React qui permet de passer du contenu personnalis\xE9 (ou des sous-composants) \xE0 un composant.
<ng-content> est utilis\xE9 uniquement dans un composant enfant pour permettre au composant parent d'injecter
(ou de projeter) du contenu personnalis\xE9 \xE0 l'int\xE9rieur du composant enfant.
Il agit comme un "emplacement r\xE9serv\xE9" dans le template du composant enfant o\xF9 le contenu fourni par le composant parent sera rendu.

      `),l()()}t&2&&(g(8),he(i.user.name),g(2),he(i.user.firstname),g(2),he(i.user.email),g(12),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Dd,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};function MF(n,e){n&1&&(c(0,"div",1)(1,"h3"),s(2,"Panneau Administrateur"),l(),c(3,"p"),s(4,"Acc\xE8s complet au syst\xE8me"),l()())}function OF(n,e){n&1&&(c(0,"div",2)(1,"h3"),s(2,"Panneau Manager"),l(),c(3,"p"),s(4,"Acc\xE8s \xE0 la gestion d'\xE9quipe"),l()())}function NF(n,e){n&1&&(c(0,"div",3)(1,"h3"),s(2,"Panneau Utilisateur"),l(),c(3,"p"),s(4,"Acc\xE8s limit\xE9"),l()())}var Od=class n{userRole="admin";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user-role"]],decls:18,vars:1,consts:[[1,"container"],[1,"admin-panel"],[1,"manager-panel"],[1,"user-panel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){if(t&1&&(c(0,"div",0)(1,"h1"),s(2,"@switch"),l(),y(3,"hr"),c(4,"h2"),s(5,"Panneau utilisateur"),l(),O(6,MF,5,0,"div",1)(7,OF,5,0,"div",2)(8,NF,5,0,"div",3),c(9,"div",4),s(10," ****************************************"),c(11,"span",5),s(12,"cours"),l(),s(13,"************************************************* "),l(),c(14,"pre")(15,"strong"),s(16,"Syntaxe:"),l(),s(17,`
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
      `),l()()),t&2){let r;g(6),Qe((r=i.userRole)==="admin"?6:r==="manager"?7:8)}},encapsulation:2})};var VF=["tab1"];function FF(n,e){if(n&1&&(c(0,"div")(1,"h3"),s(2),l(),c(3,"p"),s(4),l()()),n&2){let t=ce();g(2),he(t.user.name),g(2),z("Email: ",t.user.email,"")}}function LF(n,e){n&1&&(c(0,"p"),s(1,"Aucun utilisateur s\xE9lectionn\xE9"),l())}function UF(n,e){if(n&1&&(c(0,"div")(1,"h3"),s(2),l(),c(3,"p"),s(4),l()()),n&2){let t=ce();g(2),he(t.user.name),g(2),z("Email: ",t.user.email,"")}}function jF(n,e){n&1&&(c(0,"p"),s(1,"Aucun utilisateur s\xE9lectionn\xE9"),l())}function BF(n,e){n&1&&(c(0,"span",17),s(1,"copied "),y(2,"i",18),l())}var Nd=class n{user={id:1,name:"Alice",username:"alice123",email:"alice@example.com"};infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user-details"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,VF,5),t&2&&ee()},decls:42,vars:4,consts:[["noUser",""],["tab1",""],[1,"container"],[1,"card","p-4"],[1,"fw-bolder"],[1,"card","p-4","mt-4"],[4,"ngIf","ngIfElse"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"@if / *ngIf"),l(),y(3,"hr"),c(4,"h3"),s(5,"D\xE9tails de l'utilisateur"),l(),c(6,"div",3)(7,"h4",4),s(8,"Version r\xE9cente:"),l(),O(9,FF,5,2,"div")(10,LF,2,0,"p"),l(),c(11,"div",5)(12,"h4",4),s(13,"Version ancienne:"),l(),O(14,UF,5,2,"div",6)(15,jF,2,0,"ng-template",null,0,On),l(),y(17,"hr"),c(18,"ul",7)(19,"li",8)(20,"button",9),s(21," Composant appComponent "),l()()(),c(22,"div",10)(23,"div",11)(24,"i",12),C("click",function(){return x(r),A(i.copy1())}),l(),O(25,BF,3,0,"span",13),c(26,"pre",14,1),H(),s(28,`import { CommonModule } from '@angular/common';
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
}`),W(),l()()(),y(29,"hr"),c(30,"div",15),s(31," ****************************************"),c(32,"span",16),s(33,"cours"),l(),s(34,"************************************************* "),l(),c(35,"pre")(36,"strong"),s(37,"Syntaxe:"),l(),s(38,`
@if (condition) {
  // Code \xE0 ex\xE9cuter si la condition est vraie
}

`),c(39,"strong"),s(40,"Conditions multiples avec @else if :"),l(),s(41,`
@if (user.role === 'admin') {
  // Code  \xE0 ex\xE9cuter si la condition est vraie
} @else if (user.role === 'manager') {
  // Code \xE0 ex\xE9cuter si la condition est vraie
} @else {
  // Code \xE0 ex\xE9cuter si la condition est vraie
}
      `),l()()}if(t&2){let r=Ye(16);g(9),Qe(i.user?9:10),g(5),S("ngIf",i.user)("ngIfElse",r),g(11),S("ngIf",i.clicked)}},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var qF=["tab1"],$T=(n,e)=>e.id;function $F(n,e){if(n&1&&(c(0,"div"),s(1),l()),n&2){let t=e.$implicit;g(),Dn("",t.name," (",t.email,")")}}function zF(n,e){if(n&1&&(c(0,"div"),s(1),l()),n&2){let t=e.$implicit;g(),Dn("",t.name," ",t.email,"")}}function GF(n,e){n&1&&(c(0,"p"),s(1,"Aucun utilisateur trouv\xE9"),l())}function WF(n,e){n&1&&(c(0,"div",20),s(1,"Premier utilisateur"),l())}function HF(n,e){n&1&&(c(0,"div",4),s(1,"Dernier utilisateur"),l())}function KF(n,e){if(n&1&&(c(0,"div",17)(1,"strong"),s(2),l(),s(3),O(4,WF,2,0,"div",18)(5,HF,2,0,"div",19),c(6,"div"),s(7),l()()),n&2){let t=e.$implicit,i=e.$index,r=e.$index,o=e.$count;Xt("background-color",r%2===0?"#f9f9f9":"#e9e9e9"),g(2),z("#",i+1,""),g(),Dn(": ",t.name," (",t.email,") "),g(),S("ngIf",r===0),g(),S("ngIf",r===o-1),g(2),xb("Index: ",i,", Pair: ",r%2===0,", Impair: ",r%2!==0,"")}}function QF(n,e){n&1&&(c(0,"p",6),s(1,"Aucun utilisateur trouv\xE9"),l())}function JF(n,e){n&1&&(c(0,"span",21),s(1,"copied "),y(2,"i",22),l())}var Vd=class n{users=[{id:1,name:"Alice",username:"alice123",email:"alice@example.com"},{id:2,name:"Bob",username:"bob456",email:"bob@example.com"},{id:3,name:"Charlie",username:"charlie789",email:"charlie@example.com"}];infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-users"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,qF,5),t&2&&ee()},decls:54,vars:5,consts:[["tab1",""],[1,"container"],[1,"card","p-3"],[4,"ngFor","ngForOf"],[1,"text-danger"],[1,"p-2","mb-1",3,"background-color"],[1,"text-muted"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"p-2","mb-1"],["class","text-primary",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-primary"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"@for....@empty... / *ngFor..."),l(),y(3,"hr"),c(4,"h2"),s(5,"Liste des utilisateurs"),l(),c(6,"div",2)(7,"h4"),s(8,"version ancienne:"),l(),O(9,$F,2,2,"div",3),l(),y(10,"br"),c(11,"div",2)(12,"h4"),s(13,"version recente:"),l(),Yt(14,zF,2,2,"div",null,$T,!1,GF,2,0,"p"),l(),y(17,"br"),c(18,"div",2)(19,"h4"),s(20,"Utiliser des variables dans le bloc @for:"),l(),c(21,"p")(22,"strong",4),s(23),l(),s(24," utilisateurs au total "),l(),Yt(25,KF,8,10,"div",5,$T,!1,QF,2,0,"p",6),l(),y(28,"hr"),c(29,"ul",7)(30,"li",8)(31,"button",9),s(32," Composant appComponent "),l()()(),c(33,"div",10)(34,"div",11)(35,"i",12),C("click",function(){return x(r),A(i.copy1())}),l(),O(36,JF,3,0,"span",13),c(37,"pre",14,0),H(),s(39,`import { CommonModule } from '@angular/common';
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


        `),W(),l()()(),y(40,"hr"),c(41,"div",15),s(42," ****************************************"),c(43,"span",16),s(44,"cours"),l(),s(45,"************************************************* "),l(),c(46,"pre"),s(47,`Le bloc @for est utilis\xE9 pour it\xE9rer sur des collections, comme des listes ou des tableaux. La syntaxe g\xE9n\xE9rale ressemble \xE0 cela :
angular-html.

`),c(48,"strong"),s(49,"syntaxe:"),l(),s(50,`
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

`),c(51,"strong"),s(52,"Voici d'autres exemples de variables sp\xE9ciales :"),l(),s(53,`
$index : l'index de l'\xE9l\xE9ment courant dans la collection.
$first : true si l'\xE9l\xE9ment courant est le premier de la collection.
$last : true si l'\xE9l\xE9ment courant est le dernier de la collection.
$even : true si l'index de l'\xE9l\xE9ment courant est pair.
$odd : true si l'index de l'\xE9l\xE9ment courant est impair.
$count : le nombre total d'\xE9l\xE9ments dans la collection.
      `),l()()}t&2&&(g(9),S("ngForOf",i.users),g(5),Zt(i.users),g(9),he(i.users.length),g(2),Zt(i.users),g(11),S("ngIf",i.clicked))},dependencies:[G,He,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Fd=class n{transform(e){return e.split(" ").reverse().join(" ")}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=Cb({name:"reverse",type:n,pure:!0})};var XF=["tab1"],YF=["tab2"],ZF=()=>[1,2,3,4,5];function e9(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}function t9(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}var Ld=class n{currentDate=new Date;sampleText="Angular Pipes Example";amount=12345.678;fraction=.678;bigNumber=987654321123e-3;user={name:"John Doe",age:30,email:"john.doe@example.com"};infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-root"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,XF,5),q(i.infoTab2,YF,5)),t&2&&ee(2)},decls:126,vars:59,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"fs-6","text-danger"],[1,"fs-6","fw-bold","text-danger","mt-4"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"Les pipes"),l(),y(3,"hr"),c(4,"p")(5,"strong",3),s(6,"C'est quoi un Pipe ?"),l(),y(7,"br"),s(8," Un pipe dans Angular est un moyen simple de transformer, formater ou filtrer une valeur dans votre template. "),y(9,"br"),s(10," Lorsque vous utilisez un pipe dans un template, vous le faites suivre d\u2019une barre verticale (|) et du nom du pipe. Vous pouvez \xE9galement passer des arguments aux pipes. "),l(),c(11,"h4",4),s(12,"Date Pipe :"),l(),c(13,"p"),s(14,"Transforme une date en une cha\xEEne format\xE9e."),l(),c(15,"p"),s(16),l(),c(17,"p"),s(18),ct(19,"date"),l(),c(20,"p"),s(21),ct(22,"date"),l(),c(23,"p"),s(24),ct(25,"date"),l(),c(26,"h4",4),s(27," Uppercase and Lowercase Pipes "),l(),c(28,"p"),s(29,"Transforme une cha\xEEne en majuscules ou en minuscules."),l(),y(30,"br"),c(31,"p"),s(32),l(),c(33,"p"),s(34),ct(35,"uppercase"),l(),c(36,"p"),s(37),ct(38,"lowercase"),l(),c(39,"h4",4),s(40,"Currency Pipe :"),l(),c(41,"p"),s(42," Transforme un nombre en une cha\xEEne de devise, en utilisant le symbole de devise configur\xE9 par d\xE9faut pour la locale en cours. "),l(),y(43,"br"),c(44,"p"),s(45),l(),c(46,"p"),s(47),ct(48,"currency"),l(),c(49,"p"),s(50),ct(51,"currency"),l(),c(52,"p"),s(53),ct(54,"currency"),l(),c(55,"h4",4),s(56,"Percent Pipe :"),l(),c(57,"p"),s(58," Transforme un nombre en une cha\xEEne de pourcentage, multipli\xE9 par 100. "),l(),y(59,"br"),c(60,"p"),s(61),l(),c(62,"p"),s(63),ct(64,"percent"),l(),c(65,"h4",4),s(66,"Number Pipe :"),l(),c(67,"p"),s(68,"transforme un nombre en une cha\xEEne de caract\xE8res format\xE9e, en suivant des r\xE8gles de localisation pour la repr\xE9sentation des nombres d\xE9cimaux, des milliers, et permettant de d\xE9finir le nombre de chiffres avant et apr\xE8s la virgule."),l(),c(69,"p"),s(70),l(),c(71,"p"),s(72),ct(73,"number"),l(),c(74,"h4",4),s(75,"JSON Pipe :"),l(),c(76,"p"),s(77,"Transforme une valeur en une cha\xEEne JSON."),l(),c(78,"p"),s(79),ct(80,"json"),l(),c(81,"h4",4),s(82,"SlicePipe :"),l(),c(83,"p"),s(84,"Cr\xE9e un sous-ensemble d\u2019un tableau ou d\u2019une cha\xEEne."),l(),c(85,"p"),s(86,"Original tableau: [1, 2, 3, 4, 5]"),l(),c(87,"p"),s(88),ct(89,"slice"),l(),c(90,"h4",4),s(91,"AsyncPipe :"),l(),c(92,"p"),s(93,"Va subscribe \xE0 un Observable et renvoyer la derni\xE8re valeur qu\u2019il a \xE9mise. Lors de la destruction du composant, le pipe va unsubscribe automatiquement."),l(),c(94,"p"),s(95,"syntaxe:{ { observable$ | async } }"),l(),c(96,"h4",4),s(97,"Custom Pipes (Example) :"),l(),c(98,"p"),s(99,"En plus des pipes int\xE9gr\xE9s, Angular vous permet \xE9galement de cr\xE9er vos propres pipes personnalis\xE9s. Pour ce faire, vous pouvez utiliser le d\xE9corateur @Pipe() pour d\xE9finir un nouveau pipe et impl\xE9menter l\u2019interface PipeTransform."),l(),c(100,"p"),s(101),l(),c(102,"p"),s(103),ct(104,"reverse"),l(),y(105,"hr"),c(106,"ul",5)(107,"li",6)(108,"button",7),s(109," Composant Parent "),l()(),c(110,"li",6)(111,"button",8),s(112," Pipe reverse "),l()()(),c(113,"div",9)(114,"div",10)(115,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(116,e9,3,0,"span",12),c(117,"pre",13,0),H(),s(119,`import { ReversePipe } from "./reversePipe.component";
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
}`),W(),l()(),c(120,"div",14)(121,"i",11),C("click",function(){return x(r),A(i.copy2())}),l(),O(122,t9,3,0,"span",12),c(123,"pre",13,1),H(),s(125,`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').reverse().join(' ');
  }
}`),W(),l()()()()}t&2&&(g(16),z("Original Date: ",i.currentDate,""),g(2),z("Short Date: ",er(19,21,i.currentDate,"short"),""),g(3),z("Full Date: ",er(22,24,i.currentDate,"fullDate"),""),g(3),z("Custom Format: ",er(25,27,i.currentDate,"dd/MM/yyyy HH:mm"),""),g(8),z("Original Text: ",i.sampleText,""),g(2),z("Uppercase: ",Mn(35,30,i.sampleText),""),g(3),z("Lowercase: ",Mn(38,32,i.sampleText),""),g(8),z("Original Amount: ",i.amount,""),g(2),z("USD: ",er(48,34,i.amount,"USD"),""),g(3),z("EUR: ",er(51,37,i.amount,"EUR"),""),g(3),z(" Custom Currency (INR): ",Rb(54,40,i.amount,"INR","symbol","1.2-2")," "),g(8),z("Original Fraction: ",i.fraction,""),g(2),z("Percentage: ",Mn(64,45,i.fraction),""),g(7),z("Original Number: ",i.bigNumber,""),g(2),z("Formatted: ",er(73,47,i.bigNumber,"1.1-2"),""),g(7),z("Object as JSON: ",Mn(80,50,i.user),""),g(9),z("tableau sliced : ",Cs(89,52,Ab(58,ZF),1,3),""),g(13),z("Original Number: ",i.sampleText,""),g(2),z("Reversed Text: ",Mn(104,56,i.sampleText),""),g(13),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[G,te,$b,qb,kl,Ml,Gb,Wb,Dl,zb,Fd],styles:[".container[_ngcontent-%COMP%]{font-family:Arial,sans-serif}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin-top:20px}p[_ngcontent-%COMP%]{margin-bottom:10px;font-size:16px}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Ud=class n{user={name:"John Doe"};baseStyles={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f8f9fa",padding:"16px",border:"1px solid #dee2e6"};textColor="#000000";fontSize=16;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],decls:21,vars:9,consts:[[1,"container"],[1,"p-3","border","rounded"],[1,"mt-4"],["for","textColorInput",1,"form-label"],["id","textColorInput","type","text","placeholder","Enter a color (e.g., blue, #ff5733)",1,"form-control","mb-3",3,"ngModelChange","ngModel"],["for","fontSizeInput",1,"form-label"],["id","fontSizeInput","type","number","placeholder","Enter font size (e.g., 16)",1,"form-control","mb-3",3,"ngModelChange","ngModel"],[1,"fs-2"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),l(),s(4," Combinaison des approches "),l(),y(5,"hr"),c(6,"div",1),s(7),l(),c(8,"div",2)(9,"label",3),s(10,"Text Color:"),l(),c(11,"input",4),we("ngModelChange",function(o){return Ce(i.textColor,o)||(i.textColor=o),o}),l(),c(12,"label",5),s(13,"Font Size (px):"),l(),c(14,"input",6),we("ngModelChange",function(o){return Ce(i.fontSize,o)||(i.fontSize=o),o}),l()(),c(15,"div",2),s(16," _______________________________________________________"),c(17,"span",7),s(18,"cours"),l(),s(19,"_______________________________________________________ "),l(),s(20," voir code source "),l()),t&2&&(g(6),Lr(i.baseStyles),Xt("color",i.textColor)("font-size",i.fontSize,"px"),g(),z(" ",i.user.name," "),g(4),Ee("ngModel",i.textColor),g(3),Ee("ngModel",i.fontSize))},dependencies:[G,Pe,De,pt,Ve,Oe],styles:[".p-3[_ngcontent-%COMP%]{max-width:400px;margin:auto}"]})};var jd=class n{user={name:"John Doe"};bgColor="#f0afca";userStyles={display:"flex",padding:"16px",backgroundColor:this.bgColor,fontSize:"1.2rem",border:"1px solid #ccc"};updateBackgroundColor(){this.userStyles=ye(K({},this.userStyles),{backgroundColor:this.bgColor})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],decls:22,vars:5,consts:[[1,"container"],[1,"p-3","rounded"],[1,"mt-3"],["for","bgColorInput",1,"form-label"],["id","bgColorInput","type","text","placeholder","Enter a color (e.g., #ff5733)",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mt-2"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),l(),s(4," Liaison avec un objet de styles "),l(),y(5,"hr"),c(6,"div",1),s(7),l(),c(8,"div",2)(9,"label",3),s(10,"Change Background Color:"),l(),c(11,"input",4),we("ngModelChange",function(o){return Ce(i.bgColor,o)||(i.bgColor=o),o}),C("input",function(){return i.updateBackgroundColor()}),l(),c(12,"p",5),s(13," Current Background Color: "),c(14,"strong"),s(15),l()()(),c(16,"div",6),s(17," _______________________________________________________"),c(18,"span",7),s(19,"cours"),l(),s(20,"_______________________________________________________ "),l(),s(21," voir code source "),l()),t&2&&(g(6),Lr(i.userStyles),g(),z(" ",i.user.name," "),g(4),Ee("ngModel",i.bgColor),g(4),he(i.bgColor))},dependencies:[G,Pe,De,Ve,Oe],encapsulation:2})};var Bd=class n{user={name:"John Doe"};bgColor="#f5f5f5";get userCardStyles(){return`display: flex; padding: 16px; background-color: ${this.bgColor};`}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],decls:24,vars:5,consts:[[1,"container"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"mt-3"],["for","bgColorInput",1,"form-label"],["id","bgColorInput","type","text","placeholder","Enter a color (e.g., #ff5733)",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),l(),s(4," Liaison multiple avec une cha\xEEne de caract\xE8res "),l(),y(5,"hr"),c(6,"div",1)(7,"div",2)(8,"h5",3),s(9,"User Profile"),l(),c(10,"p",4),s(11),l()()(),c(12,"div",5)(13,"label",6),s(14,"Change Background Color:"),l(),c(15,"input",7),we("ngModelChange",function(o){return Ce(i.bgColor,o)||(i.bgColor=o),o}),l(),c(16,"p"),s(17),l()(),c(18,"div",8),s(19," _______________________________________________________"),c(20,"span",9),s(21,"cours"),l(),s(22,"_______________________________________________________ "),l(),s(23," voir code source "),l()),t&2&&(g(6),Lr(i.userCardStyles),g(5),he(i.user.name),g(4),Ee("ngModel",i.bgColor),g(2),z("Current Background Color: ",i.bgColor,""))},dependencies:[G,Pe,De,Ve,Oe],encapsulation:2})};var qd=class n{user={name:"John Doe"};cardHeight=200;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],decls:20,vars:5,consts:[[1,"container"],[1,"border","border-2","w-25","m-2"],[1,"w-25","m-2"],["for","heightInput"],["id","heightInput","type","number","min","100","max","500","step","10",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les styles Bindings dans Angular:"),l(),s(4," Liaison avec unit\xE9s "),l(),y(5,"hr"),c(6,"div",1),s(7),l(),c(8,"div",2)(9,"label",3),s(10,"Change Card Height:"),l(),c(11,"input",4),we("ngModelChange",function(o){return Ce(i.cardHeight,o)||(i.cardHeight=o),o}),l(),c(12,"p"),s(13),l()(),c(14,"div",5),s(15," _______________________________________________________"),c(16,"span",6),s(17,"cours"),l(),s(18,"_______________________________________________________ "),l(),s(19," voir code source "),l()),t&2&&(g(6),Xt("height",i.cardHeight,"px"),g(),z(" ",i.user.name," "),g(4),Ee("ngModel",i.cardHeight),g(2),z("Current Height: ",i.cardHeight," px"))},dependencies:[G,Pe,De,pt,Ve,Am,xm,Oe],encapsulation:2})};var $d=class n{user={name:"John Doe"};isVisible=!0;toggleVisibility(){this.isVisible=!this.isVisible}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],decls:17,vars:4,consts:[[1,"container"],[1,"alert","alert-info","text-center"],[1,"btn","btn-success","w-100","mt-2",3,"click"],[1,"mt-4"],[1,"fs-2"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"h1")(2,"strong"),s(3,"Les Style Bindings dans Angular:"),l(),s(4," Liaison d'une propri\xE9t\xE9 style unique "),l(),y(5,"hr"),c(6,"div",1)(7,"strong"),s(8),l()(),c(9,"button",2),C("click",function(){return i.toggleVisibility()}),s(10),l(),c(11,"div",3),s(12," _______________________________________________________"),c(13,"span",4),s(14,"cours"),l(),s(15,"_______________________________________________________ "),l(),s(16," voir code source "),l()),t&2&&(g(6),Xt("display",i.isVisible?"block":"none"),g(2),he(i.user.name),g(2),z(" ",i.isVisible?"Masquer":"Afficher"," "))},encapsulation:2})};var n9=["tab1"];function i9(n,e){n&1&&(c(0,"span",12),s(1,"copied "),y(2,"i",13),l())}var zd=class n{user={name:"John Doe"};baseClasses="card elevated";isActive=!1;additionalClasses={highlighted:!1,shadow:!1};toggleState(){this.isActive=!this.isActive,this.additionalClasses.highlighted=!this.additionalClasses.highlighted,this.additionalClasses.shadow=!this.additionalClasses.shadow}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,n9,5),t&2&&ee()},decls:21,vars:7,consts:[["tab1",""],[1,"container"],[1,"user-card",3,"ngClass"],[1,"btn","btn-success","mt-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),l(),s(4," Combinaison de plusieurs approches "),l(),y(5,"hr"),c(6,"div",2),s(7),l(),c(8,"button",3),C("click",function(){return x(r),A(i.toggleState())}),s(9," Toggle State "),l(),c(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),l()()(),c(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return x(r),A(i.copy1())}),l(),O(17,i9,3,0,"span",10),c(18,"pre",11,0),H(),s(20,`import { CommonModule } from '@angular/common';
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
}`),W(),l()()()()}t&2&&(g(6),qt(i.baseClasses),vt("active",i.isActive),S("ngClass",i.additionalClasses),g(),z(" ",i.user.name," "),g(10),S("ngIf",i.clicked))},dependencies:[G,zr,te],styles:[".user-card[_ngcontent-%COMP%]{padding:20px;border:1px solid #ccc;margin:10px 0;border-radius:8px}.active[_ngcontent-%COMP%]{border-color:green;background-color:#eaffea}.highlighted[_ngcontent-%COMP%]{font-weight:700;color:#007bff}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 6px #0000001a}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var r9=["tab1"];function o9(n,e){n&1&&(c(0,"span",14),s(1,"copied "),y(2,"i",15),l())}var Gd=class n{user={name:"John Doe"};userClassObject={card:!0,elevated:!0,highlighted:!1};toggleHighlight(){this.userClassObject.highlighted=!this.userClassObject.highlighted}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,r9,5),t&2&&ee()},decls:28,vars:3,consts:[["tab1",""],[1,"container"],[3,"ngClass"],[1,"btn","btn-success","my-3",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"fs-2"],[2,"font-size","13px"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),l(),s(4," Liaison directe avec un objet "),l(),y(5,"hr"),c(6,"div",2),s(7),l(),c(8,"button",3),C("click",function(){return x(r),A(i.toggleHighlight())}),s(9," Toggle Highlight "),l(),c(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),l()()(),c(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return x(r),A(i.copy1())}),l(),O(17,o9,3,0,"span",10),c(18,"pre",11,0),H(),s(20,`import { CommonModule } from '@angular/common';
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
} `),W(),l()()(),c(21,"div"),s(22," _______________________________________________________"),c(23,"span",12),s(24,"cours"),l(),s(25," _______________________________________________________ "),l(),c(26,"pre",13),s(27,`Diff\xE9rences entre [class] et [ngClass]
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
      `),l()()}t&2&&(g(6),S("ngClass",i.userClassObject),g(),z(" ",i.user.name," "),g(10),S("ngIf",i.clicked))},dependencies:[G,zr,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px;border-radius:8px}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 6px #0000001a}.highlighted[_ngcontent-%COMP%]{background-color:#ff0}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var s9=["tab1"];function a9(n,e){n&1&&(c(0,"span",17),s(1,"copied "),y(2,"i",18),l())}var Wd=class n{user={name:"John Doe"};userClassArray=["card","highlighted","elevated"];toggleClass(e){let t=this.userClassArray.indexOf(e);console.log("index :",t),t===-1?this.userClassArray.push(e):this.userClassArray.splice(t,1)}resetClasses(){this.userClassArray=["card","elevated","highlighted"]}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,s9,5),t&2&&ee()},decls:35,vars:4,consts:[["tab1",""],[1,"container"],[1,"mt-3"],[1,"btn","btn-success","me-2",3,"click"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[2,"font-size","12px"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),l(),s(4," Liaison avec un tableau "),l(),y(5,"hr"),c(6,"div")(7,"strong"),s(8),l()(),c(9,"div",2)(10,"button",3),C("click",function(){return x(r),A(i.toggleClass("highlighted"))}),s(11," Toggle Highlight "),l(),c(12,"button",4),C("click",function(){return x(r),A(i.toggleClass("elevated"))}),s(13," Toggle Elevation "),l(),c(14,"button",5),C("click",function(){return x(r),A(i.resetClasses())}),s(15," Reset Classes "),l()(),y(16,"hr"),c(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant appComponent "),l()()(),c(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(24,a9,3,0,"span",12),c(25,"pre",13,0),H(),s(27,`import {", Component } from '@angular/core';

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
}`),W(),l()()(),c(28,"div",14),s(29," __________________________________________________________"),c(30,"span",15),s(31,"cours"),l(),s(32,"__________________________________________________________ "),l(),c(33,"pre",16),s(34,`
L'astuce est qu'on d\xE9finie quelque classes dans styles exemple: card, highlighted,elevated,
puis on les ajoute dans un tableau userClassArray, et on les affiche dans le template avec [class]="userClassArray.join(' ')".
et pour ajouter ou supprimer une classe on utilise la m\xE9thode toggleClass(className: string) qui prend
en param\xE8tre le nom de la classe \xE0 ajouter ou supprimer.
      `),l()()}t&2&&(g(6),qt(i.userClassArray.join(" ")),g(2),he(i.user.name),g(16),S("ngIf",i.clicked))},dependencies:[G,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:16px;max-width:300px;margin-bottom:16px;background-color:#f9f9f9}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003}.highlighted[_ngcontent-%COMP%]{background-color:#d4edda;border-color:#c3e6cb}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var l9=["tab1"];function c9(n,e){n&1&&(c(0,"span",16),s(1,"copied "),y(2,"i",17),l())}var Hd=class n{user={name:"John Doe"};userClasses="card elevated highlighted";toggleClass(e){this.userClasses.includes(e)?this.userClasses=this.userClasses.replace(e,"").trim():this.userClasses+=" "+e}resetClasses(){this.userClasses="card elevated highlighted"}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,l9,5),t&2&&ee()},decls:52,vars:4,consts:[["tab1",""],[1,"container"],[1,"mt-3"],[1,"btn","btn-success","me-2",3,"click"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),l(),s(4," Liaison directe avec une cha\xEEne de caract\xE8res "),l(),y(5,"hr"),c(6,"div")(7,"strong"),s(8),l()(),c(9,"div",2)(10,"button",3),C("click",function(){return x(r),A(i.toggleClass("highlighted"))}),s(11," Toggle Highlight "),l(),c(12,"button",4),C("click",function(){return x(r),A(i.toggleClass("elevated"))}),s(13," Toggle Elevation "),l(),c(14,"button",5),C("click",function(){return x(r),A(i.resetClasses())}),s(15," Reset Classes "),l()(),y(16,"hr"),c(17,"ul",6)(18,"li",7)(19,"button",8),s(20," Composant appComponent "),l()()(),c(21,"div",9)(22,"div",10)(23,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(24,c9,3,0,"span",12),c(25,"pre",13,0),H(),s(27,`import { Component } from '@angular/core';

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
}`),W(),l()()(),c(28,"div",14),s(29," __________________________________________________________ "),c(30,"span",15),s(31,"cours"),l(),s(32," __________________________________________________________ "),l(),c(33,"pre"),s(34,`Cet exemple illustre l'utilisation des "Class Bindings" dans Angular pour appliquer dynamiquement des classes CSS \xE0 un \xE9l\xE9ment HTML,`),y(35,"br"),s(36,` en fonction de l'\xE9tat ou des interactions utilisateur. Voici une explication d\xE9taill\xE9e des diff\xE9rentes parties :

`),c(37,"strong"),s(38,"1. Liaison de classes avec [class]:"),l(),s(39,`
[class]="userClasses" : Cela permet de lier dynamiquement des classes CSS \xE0 un \xE9l\xE9ment HTML.
La propri\xE9t\xE9 userClasses contient les noms de classes sous forme de cha\xEEne de caract\xE8res (comme "card elevated highlighted").
Angular applique automatiquement ces classes \xE0 l'\xE9l\xE9ment.

`),c(40,"strong"),s(41,"2. Propri\xE9t\xE9s et donn\xE9es du composant :"),l(),s(42,`
user : C'est un objet contenant des informations sur l'utilisateur (ici, uniquement un nom).
userClasses : Une cha\xEEne de caract\xE8res qui stocke les classes CSS actuellement appliqu\xE9es \xE0 l'\xE9l\xE9ment HTML.

`),c(43,"strong"),s(44,"3. M\xE9thodes pour g\xE9rer les classes :"),l(),s(45,`
toggleHighlight() :
Cette m\xE9thode v\xE9rifie si la classe "highlighted" est pr\xE9sente dans userClasses.
Si oui, elle la supprime ; sinon, elle l'ajoute.
Cela permet d'activer ou d\xE9sactiver la classe "highlighted".
toggleElevation() :
Similaire \xE0 toggleHighlight(), mais pour la classe "elevated".
resetClasses() :
R\xE9initialise la propri\xE9t\xE9 userClasses \xE0 son \xE9tat par d\xE9faut (toutes les classes initiales sont r\xE9appliqu\xE9es).

`),c(46,"strong"),s(47,"4. Interactions utilisateur :"),l(),s(48,`
Trois boutons permettent de modifier dynamiquement les classes :
Toggle Highlight : Active ou d\xE9sactive la classe "highlighted".
Toggle Elevation : Active ou d\xE9sactive la classe "elevated".
Reset Classes : R\xE9initialise toutes les classes \xE0 leur \xE9tat initial.

`),c(49,"strong"),s(50,"5. Styles CSS :"),l(),s(51,`
.card : Style de base pour l'\xE9l\xE9ment (bordure, fond, etc.).
.elevated : Ajoute une ombre pour donner un effet d'\xE9l\xE9vation.
.highlighted : Change la couleur de fond et de bordure pour mettre en avant l'\xE9l\xE9ment.

      `),l()()}t&2&&(g(6),qt(i.userClasses),g(2),he(i.user.name),g(16),S("ngIf",i.clicked))},dependencies:[G,te],styles:[".card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:16px;max-width:300px;margin-bottom:16px;background-color:#f9f9f9}.elevated[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003}.highlighted[_ngcontent-%COMP%]{background-color:#d4edda;border-color:#c3e6cb}pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var u9=["tab1"];function d9(n,e){n&1&&(c(0,"span",14),s(1,"copied "),y(2,"i",15),l())}var Kd=class n{user={id:1,name:"John Doe",username:"johndoe",email:"john@example.com"};isUserActive=!0;toggleUserStatus(){this.isUserActive=!this.isUserActive}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,u9,5),t&2&&ee()},decls:50,vars:7,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","mt-2",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1")(2,"strong"),s(3,"Les Class Bindings dans Angular:"),l(),s(4," Liaison conditionnelle d'une classe "),l(),c(5,"h3"),s(6,"User Information"),l(),c(7,"div")(8,"strong"),s(9,"Name:"),l(),s(10),y(11,"br"),c(12,"strong"),s(13,"Username:"),l(),s(14),y(15,"br"),c(16,"strong"),s(17,"Email:"),l(),s(18),l(),c(19,"button",2),C("click",function(){return x(r),A(i.toggleUserStatus())}),s(20),l(),y(21,"hr"),c(22,"ul",3)(23,"li",4)(24,"button",5),s(25," Composant appComponent "),l()()(),c(26,"div",6)(27,"div",7)(28,"i",8),C("click",function(){return x(r),A(i.copy1())}),l(),O(29,d9,3,0,"span",9),c(30,"pre",10,0),H(),s(32,`import { Component } from '@angular/core';

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
}`),W(),l()()(),y(33,"hr"),c(34,"div",11),s(35," ______________________________________________________________ "),c(36,"span",12),s(37,"cours"),l(),s(38," ______________________________________________________________ "),l(),c(39,"pre"),s(40,`La fa\xE7on la plus simple de lier une classe est d'utiliser la syntaxe:
`),c(41,"strong",13),s(42,'[class.nom-classe]="condition"'),l(),s(43,`.
cette condition peut etre `),c(44,"span",13),s(45,"true"),l(),s(46," ou "),c(47,"span",13),s(48,"false"),l(),s(49," ou un variable boolean"),l()()}t&2&&(g(7),vt("active",i.isUserActive),g(3),z(" ",i.user.name," "),g(4),z(" ",i.user.username," "),g(4),z(" ",i.user.email," "),g(2),z(" ",i.isUserActive?"Deactivate User":"Activate User"," "),g(9),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var p9=["tab1"];function h9(n,e){n&1&&(c(0,"span",12),s(1,"copied "),y(2,"i",16),l())}var Qd=class n{counter=et(0);nom=et("");resetCounter(){this.counter.set(0)}incrementCounter(){this.counter.update(e=>e+1)}resetNom(){this.nom.set("")}capitaliseNom(){this.nom.update(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}upperCaseNom(){this.nom.update(e=>e.toUpperCase())}lowerCaseNom(){this.nom.update(e=>e.toLowerCase())}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-counter"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,p9,5),t&2&&ee()},decls:52,vars:3,consts:[["tab1",""],[1,"container"],[1,"mt-3","border","p-3"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-success","mx-3",3,"click"],["type","text",3,"ngModelChange","ngModel"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],[1,"confirm"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"Difference entre les deux methodes set() et update() d'un signal"),l(),y(3,"hr"),c(4,"div",2)(5,"h4"),s(6,"Exemple 1 : Compteur"),l(),c(7,"p"),s(8),l(),c(9,"button",3),C("click",function(){return x(r),A(i.resetCounter())}),s(10," R\xE9initialiser "),l(),c(11,"button",4),C("click",function(){return x(r),A(i.incrementCounter())}),s(12," Incr\xE9menter "),l()(),c(13,"div",2)(14,"h4"),s(15,"Exemple 2 : Nom"),l(),c(16,"p"),s(17," Nom : "),c(18,"input",5),we("ngModelChange",function(a){return x(r),Ce(i.nom,a)||(i.nom=a),A(a)}),l()(),c(19,"button",3),C("click",function(){return x(r),A(i.resetNom())}),s(20," R\xE9initialiser "),l(),c(21,"button",4),C("click",function(){return x(r),A(i.capitaliseNom())}),s(22," Capitaliser "),l(),c(23,"button",4),C("click",function(){return x(r),A(i.upperCaseNom())}),s(24," Mettre au majuscule "),l(),c(25,"button",4),C("click",function(){return x(r),A(i.lowerCaseNom())}),s(26," Mettre au minuscule "),l()(),c(27,"ul",6)(28,"li",7)(29,"button",8),s(30," Composant Parent "),l()()(),c(31,"div",9)(32,"div",10)(33,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(34,h9,3,0,"span",12),c(35,"pre",13,0),H(),s(37,`import { FormsModule } from '@angular/forms';
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
}`),W(),l()()(),c(38,"div",14),s(39," ****************************************"),c(40,"span",15),s(41,"cours"),l(),s(42,"************************************************* "),l(),c(43,"pre")(44,"strong"),s(45,"1. set():"),l(),s(46,`
Description : La m\xE9thode set() permet de remplacer directement la valeur actuelle

du signal par une nouvelle valeur.
Usage : Id\xE9al pour mettre \xE0 jour la valeur du signal lorsqu'on conna\xEEt la nouvelle valeur exacte.

Exemple :
const username = model('John'); // Signal initialis\xE9 \xE0 "John"
username.set('Doe'); // La valeur est maintenant "Doe"
console.log(username()); // R\xE9sultat : "Doe"

`),c(47,"strong"),s(48,"2. update():"),l(),s(49,`
Description : La m\xE9thode update() prend une fonction en param\xE8tre, qui re\xE7oit la valeur
actuelle `),y(50,"br"),s(51,` du signal et retourne la nouvelle valeur apr\xE8s une transformation.
Usage : Utile pour mettre \xE0 jour la valeur existante en fonction de sa valeur actuelle,
sans avoir \xE0 la lire ou \xE0 la modifier manuellement.

Exemple :
const counter = model(0); // Signal initialis\xE9 \xE0 0
counter.update(value => value + 1); // Incr\xE9mente la valeur actuelle de 1
console.log(counter()); // R\xE9sultat : 1
counter.update(value => value * 2); // Multiplie la valeur actuelle par 2
console.log(counter()); // R\xE9sultat : 2`),l()()}t&2&&(g(8),z("Compteur : ",i.counter(),""),g(10),Ee("ngModel",i.nom),g(16),Qe(i.clicked?34:-1))},dependencies:[Pe,De,Ve,Oe,G],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var m9=["tab1"],f9=["tab2"];function g9(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}var Jd=class n{username=yb("");updateUsername(e){let t=e.target;this.username.set(t.value)}clearUsername(){this.username.set("")}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-user-form"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,m9,5),q(i.infoTab2,f9,5)),t&2&&ee(2)},inputs:{username:[1,"username"]},outputs:{username:"usernameChange"},decls:56,vars:4,consts:[["tab1",""],[1,"container"],["placeholder","Entrez votre nom d'utilisateur",1,"form-control","w-25",3,"input","value"],[1,"my-2"],[1,"btn","btn-success",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs","mt-5"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"model() pour du double data-binding"),l(),y(3,"hr"),c(4,"input",2),C("input",function(a){return x(r),A(i.updateUsername(a))}),l(),c(5,"div",3),s(6),l(),c(7,"button",4),C("click",function(){return x(r),A(i.clearUsername())}),s(8,"Effacer"),l(),c(9,"ul",5)(10,"li",6)(11,"button",7),s(12," Composant Parent "),l()()(),c(13,"div",8)(14,"div",9)(15,"i",10),C("click",function(){return x(r),A(i.copy1())}),l(),O(16,g9,3,0,"span",11),c(17,"pre",12,0),H(),s(19,`import { CommonModule } from '@angular/common';
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
}`),W(),l()()(),c(20,"div",13),s(21," ****************************************"),c(22,"span",14),s(23,"cours"),l(),s(24,"************************************************* "),l(),c(25,"pre"),s(26,"Dans cet exemple, l'utilisation de model() met en avant une nouvelle mani\xE8re de g\xE9rer le double data-binding "),y(27,"br"),s(28,` dans Angular. Voici une explication d\xE9taill\xE9e des diff\xE9rentes parties de cet exemple :

`),c(29,"strong"),s(30,"1. pour la gestion des signaux :"),l(),s(31,`
model() est une fonction qui agit comme un signal dans Angular (concept introduit dans Angular 16).
Un signal est une donn\xE9e r\xE9active qui peut \xEAtre lue ou mise \xE0 jour. Ici, username est un signal initialis\xE9 \xE0 une valeur vide ('').

`),c(32,"strong"),s(33,"2. Double Data-Binding via model():"),l(),s(34,`
Le double data-binding signifie que les modifications dans le champ de saisie sont refl\xE9t\xE9es automatiquement dans le mod\xE8le et vice-versa.
Dans le template :
[value]="username()" : Le champ d'entr\xE9e affiche la valeur actuelle du signal username.
(input)="updateUsername($event)" : \xC0 chaque saisie utilisateur, la m\xE9thode updateUsername met \xE0 jour le signal username.
Dans le mod\xE8le (classe TypeScript) :
username.set(value) : Met \xE0 jour la valeur du signal.

`),c(35,"strong"),s(36,"3. Gestion des interactions :"),l(),s(37,`
M\xE9thode updateUsername:
Extrait la valeur de l'entr\xE9e utilisateur depuis l'\xE9v\xE9nement input et met \xE0 jour le signal.
M\xE9thode clearUsername:
R\xE9initialise le signal username \xE0 une cha\xEEne vide ('').

`),c(38,"strong"),s(39,"4. Affichage R\xE9actif avec username():"),l(),s(40),l(),y(41,"hr"),c(42,"pre"),s(43,`Bref cours sur model() et signaux dans Angular
`),c(44,"strong"),s(45,"1. Introduction aux Signaux dans Angular :"),l(),s(46,`
Les signaux sont un nouveau m\xE9canisme r\xE9actif introduit \xE0 partir d'Angular 16. Ils simplifient la gestion de l'\xE9tat et du data-binding.
Un signal est une valeur observable qui peut \xEAtre lue (par un appel comme signal()) ou mise \xE0 jour (par set()).

`),c(47,"strong"),s(48,"2. Cr\xE9er un signal avec model() :"),l(),s(49,`
model() est une fonction sp\xE9cifique qui agit comme un signal r\xE9actif pour des cas pratiques comme le double data-binding.
Syntaxe : const mySignal = model(initialValue);
initialValue : La valeur initiale du signal.

`),c(50,"strong"),s(51,"3. Utilisation des Signaux :"),l(),s(52,`
Lecture de la valeur : Appelez la fonction, par exemple mySignal().
Mise \xE0 jour de la valeur : Utilisez mySignal.set(newValue).
R\xE9activit\xE9 : Les signaux d\xE9clenchent automatiquement la mise \xE0 jour de tout \xE9l\xE9ment ou expression qui les utilise dans un template.

`),c(53,"strong"),s(54,"4. Avantages des Signaux :"),l(),s(55,`
R\xE9activit\xE9 simplifi\xE9e : Plus besoin de gestion complexe comme dans RxJS (pas de subscribe()).
Optimisation des performances : Angular suit les signaux directement, sans zone.js.
Simplification du double data-binding : Avec model(), il devient facile de synchroniser l'interface utilisateur avec le mod\xE8le.`),l()()}t&2&&(g(4),S("value",i.username()),g(2),z("Nom d'utilisateur actuel : ",i.username(),""),g(10),S("ngIf",i.clicked),g(24),z(`
Dans le template, `,i.username(),` permet d'afficher dynamiquement la valeur actuelle du signal.
Toute mise \xE0 jour de username entra\xEEne automatiquement la mise \xE0 jour de l'affichage.
      `))},dependencies:[Pe,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var Xd=class n{data={id:0,nom:""};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant6"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"border","p-2"]],template:function(t,i){t&1&&(c(0,"div",0),s(1),l()),t&2&&(g(),z(" Categorie: ",i.data.nom," "))},dependencies:[G],encapsulation:2})};var v9=["tab1"],_9=["tab2"],b9=(n,e)=>e.id;function y9(n,e){if(n&1&&y(0,"app-enfant6",4),n&2){let t=e.$implicit;S("data",t)}}function E9(n,e){n&1&&(c(0,"p"),s(1,"aucune cat\xE9gorie n'a \xE9t\xE9 trouv\xE9e"),l())}function C9(n,e){n&1&&(c(0,"span",19),s(1,"copied "),y(2,"i",20),l())}function w9(n,e){n&1&&(c(0,"span",19),s(1,"copied "),y(2,"i",20),l())}var Yd=class n{categories=[{id:1,nom:"Accessoires"},{id:2,nom:"Vestes"},{id:3,nom:"Pantalons"},{id:4,nom:"Chemises"},{id:5,nom:"Robes"}];infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test6"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,v9,5),q(i.infoTab2,_9,5)),t&2&&ee(2)},decls:61,vars:3,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[3,"data"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"mt-5"],[1,"fs-2"],[1,"fs-6","fw-bold","text-danger","mt-4"],[1,"text-danger"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1")(2,"pre")(3,"code"),s(4,"@Input()"),l()()(),y(5,"hr"),c(6,"div",3)(7,"h3"),s(8,"parent"),l(),Yt(9,y9,1,1,"app-enfant6",4,b9,!1,E9,2,0,"p"),l(),y(12,"hr"),c(13,"ul",5)(14,"li",6)(15,"button",7),s(16," Composant Parent "),l()(),c(17,"li",6)(18,"button",8),s(19," Composant Enfant "),l()()(),c(20,"div",9)(21,"div",10)(22,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(23,C9,3,0,"span",12),c(24,"pre",13,0),H(),s(26,`import { EnfantComponent } from "./enfant.component";
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
}`),W(),l()(),c(27,"div",14)(28,"i",11),C("click",function(){return x(r),A(i.copy2())}),l(),O(29,w9,3,0,"span",12),c(30,"pre",13,1),H(),s(32,`import { CommonModule } from '@angular/common';
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
}`),W(),l()()(),y(33,"hr"),c(34,"div",15),s(35," ****************************************"),c(36,"span",16),s(37,"Explication"),l(),s(38,"************************************************* "),c(39,"pre")(40,"div",17),s(41,"C'est quoi @Input ?"),l(),s(42,`
`),c(43,"div"),s(44,"@Input() sert \xE0 passer une donn\xE9e d\u2019un composant parent vers son composant enfant."),l(),s(45,`
Le parent (Test6Component) r\xE9cup\xE8re une liste de cat\xE9gories depuis un service
(CategoriesService) et la charge dans la propri\xE9t\xE9
`),c(46,"strong"),s(47,"categories"),l(),s(48,`, et les transmet au composant enfant (Enfant6Component)
via le d\xE9corateur @Input.
`),c(49,"strong"),s(50,"Composant parent (Test6Component) :"),l(),s(51,`
Il importe le composant enfant (Enfant6Component) pour l'utiliser dans son mod\xE8le.
Il r\xE9cup\xE8re les donn\xE9es via un service asynchrone dans la m\xE9thode fetchCategories().
Il passe ces donn\xE9es au composant enfant avec l'attribut [data]="categories" dans le code:

 `),c(52,"strong"),s(53,`@for (categorie of categories; track categorie.id)
  {<app-enfant6 `),c(54,"span",18),s(55,'[data]="categories"'),l(),s(56," ></app-enfant6>}"),l(),s(57,`

 `),c(58,"strong"),s(59,"Composant enfant (Enfant6Component) :"),l(),s(60,`
Il utilise @Input pour recevoir les donn\xE9es de cat\xE9gories depuis le parent:
@Input() data:Categories[]=[];
Il utilise la propri\xE9t\xE9  data pour afficher le contenu
        `),l()()()}t&2&&(g(9),Zt(i.categories),g(14),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Xd,G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var Zd=class n{dataSent=new gt;message=new gt;sendMessage(){this.dataSent.emit("Bonjour Papa !")}handleChange(e){let t=e.target;this.message.emit(t.value)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-enfant7"]],outputs:{dataSent:"dataSent",message:"message"},decls:3,vars:0,consts:[["placeholder","Envoie un message \xE0 ton p\xE8re ici","type","text",1,"form-control","my-3",2,"width","300px",3,"input"],[1,"btn","btn-success",3,"click"]],template:function(t,i){t&1&&(c(0,"input",0),C("input",function(o){return i.handleChange(o)}),l(),c(1,"button",1),C("click",function(){return i.sendMessage()}),s(2," Dis bonjour \xE0 papa "),l())},dependencies:[G,Pe],encapsulation:2})};var T9=["tab1"],I9=["tab2"];function S9(n,e){n&1&&(c(0,"span",21),s(1,"copied "),y(2,"i",22),l())}function x9(n,e){n&1&&(c(0,"span",21),s(1,"copied "),y(2,"i",22),l())}var ep=class n{message="";mess="";receiveData(e){this.message=e}receiveMessage(e){this.mess=e}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}copy2(){let e=this.infoTab2()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test7"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,T9,5),q(i.infoTab2,I9,5)),t&2&&ee(2)},decls:61,vars:4,consts:[["tab1",""],["tab2",""],[1,"container"],[1,"border","p-3"],[1,"text-success"],[1,"border","p-3","mb-3"],[3,"dataSent","message"],[1,"border","ps-3","mb-3"],[1,"text-danger","fs-4"],[1,"text-success","fs-5"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","c2-tab","data-bs-toggle","tab","data-bs-target","#c2","type","button","role","tab","aria-controls","c2","aria-selected","false",1,"nav-link"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],["id","c2","role","tabpanel","aria-labelledby","c2-tab",1,"tab-pane","fade",2,"position","relative"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",2)(1,"h1"),s(2,"@Output()"),l(),y(3,"hr"),c(4,"div",3)(5,"h3",4),s(6,"Partie Parent"),l(),c(7,"div",5)(8,"h3",4),s(9,"Partie Enfant"),l(),c(10,"app-enfant7",6),C("dataSent",function(a){return x(r),A(i.receiveData(a))})("message",function(a){return x(r),A(i.receiveMessage(a))}),l()(),c(11,"div",7)(12,"p"),s(13," Message re\xE7u de mon fils :"),c(14,"span",8),s(15),l()(),c(16,"p",9),s(17),l()()(),y(18,"hr")(19,"hr"),c(20,"ul",10)(21,"li",11)(22,"button",12),s(23," Composant Parent "),l()(),c(24,"li",11)(25,"button",13),s(26," Composant Enfant "),l()()(),c(27,"div",14)(28,"div",15)(29,"i",16),C("click",function(){return x(r),A(i.copy1())}),l(),O(30,S9,3,0,"span",17),c(31,"pre",18,0),H(),s(33,`import { EnfantComponent } from "./enfant.component";
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

          `),W(),l()(),c(34,"div",19)(35,"i",16),C("click",function(){return x(r),A(i.copy2())}),l(),O(36,x9,3,0,"span",17),c(37,"pre",18,1),H(),s(39,`import { FormsModule } from '@angular/forms';
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

          `),W(),l()()(),c(40,"div"),s(41," ****************************************"),c(42,"span",20),s(43,"cours"),l(),s(44,"************************************************* "),l(),c(45,"pre")(46,"strong"),s(47,"1. @Output():"),l(),s(48,`
Utilis\xE9 dans le Child Component pour d\xE9finir une propri\xE9t\xE9 qui sera un EventEmitter.
Cette propri\xE9t\xE9 sert de canal pour \xE9mettre des donn\xE9es ou des \xE9v\xE9nements vers le parent.
@Output() eventName = new EventEmitter<Type>();

`),c(49,"strong"),s(50,"2. EventEmitter:"),l(),s(51,`
Une classe d'Angular qui permet d'\xE9mettre des \xE9v\xE9nements personnalis\xE9s avec ou sans donn\xE9es:
@Output() dataSent = new EventEmitter<string>();

`),c(52,"strong"),s(53,"3. M\xE9thode emit():"),l(),s(54,`
Appel\xE9e dans le Child Component pour d\xE9clencher un \xE9v\xE9nement et transmettre des donn\xE9es au parent.
Syntaxe : this.eventName.emit(data)
exemple: this.dataSent.emit('Message \xE0 transmettre au parent');

`),c(55,"strong"),s(56,"4. \xC9couteur d'\xE9v\xE9nement dans le Parent:"),l(),s(57,`
Le parent utilise l'attribut (eventName) dans le template pour \xE9couter l'\xE9v\xE9nement \xE9mis par le child.
Syntaxe : (eventName)="methodToHandleEvent($event)"
exemple:
<app-child (dataSent)="handleData($event)"></app-child>

`),c(58,"strong"),s(59,"5. Param\xE8tre $event:"),l(),s(60,`
Repr\xE9sente les donn\xE9es transmises par emit() depuis le Child Component.
Accessible dans la m\xE9thode appel\xE9e par le parent.
handleData($event: string) {
  console.log('Donn\xE9es re\xE7ues du Child :', $event);
  }`),l()()}t&2&&(g(15),he(i.mess),g(2),he(i.message),g(13),S("ngIf",i.clicked),g(6),S("ngIf",i.clicked))},dependencies:[Zd,G,te],styles:[".fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}pre[_ngcontent-%COMP%]{font-size:15px}"]})};var A9=["tab1"],R9=["tab2"];function P9(n,e){n&1&&(c(0,"span",14),s(1,"copied "),y(2,"i",15),l())}var tp=class n{count=et(0);constructor(){uh(()=>{console.log(`Le compteur a chang\xE9 : ${this.count()}`),document.title=`title: ${this.count()}`})}increment(){this.count.update(e=>e+1)}decrement(){this.count.update(e=>e-1)}reinitialse(){this.count.set(0)}infoTab1=$("tab1");infoTab2=$("tab2");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-signal-example"]],viewQuery:function(t,i){t&1&&(q(i.infoTab1,A9,5),q(i.infoTab2,R9,5)),t&2&&ee(2)},decls:40,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"btn","btn-danger",3,"click"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"Signal et Effect"),l(),y(3,"hr"),c(4,"p"),s(5),l(),c(6,"button",2),C("click",function(){return x(r),A(i.increment())}),s(7,"Incr\xE9menter"),l(),c(8,"button",3),C("click",function(){return x(r),A(i.decrement())}),s(9," D\xE9cr\xE9menter "),l(),c(10,"button",4),C("click",function(){return x(r),A(i.reinitialse())}),s(11," Reinitialiser "),l(),y(12,"hr"),c(13,"ul",5)(14,"li",6)(15,"button",7),s(16," Composant Parent "),l()()(),c(17,"div",8)(18,"div",9)(19,"i",10),C("click",function(){return x(r),A(i.copy1())}),l(),O(20,P9,3,0,"span",11),c(21,"pre",12,0),H(),s(23,`import { Component, signal, effect } from '@angular/core';

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
}`),W(),l()()(),c(24,"div"),s(25," ______________________________________________________________"),c(26,"span",13),s(27,"Cours"),l(),s(28,"______________________________________________________________ "),l(),c(29,"pre"),s(30,`
`),c(31,"strong"),s(32,"Signal :"),l(),s(33,`
signal(0) initialise un signal avec une valeur de 0.
Pour acc\xE9der \xE0 la valeur du signal, on utilise count().

`),c(34,"strong"),s(35,"Effect :"),l(),s(36,`
effect() ex\xE9cute automatiquement son callback chaque fois que le signal count change.
Dans cet exemple, chaque mise \xE0 jour du signal est d\xE9tect\xE9e, et un message est affich\xE9 dans la console.

`),c(37,"strong"),s(38,"Mise \xE0 jour :"),l(),s(39,`
update() est utilis\xE9 pour modifier la valeur du signal en fonction de sa valeur actuelle.
Les m\xE9thodes increment() et decrement() modifient respectivement la valeur du compteur.
`),l()()}t&2&&(g(5),z("Compteur : ",i.count(),""),g(15),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var k9=["tab1"];function D9(n,e){n&1&&(c(0,"span",17),s(1,"copied "),y(2,"i",18),l())}var np=class n{price=et(100);quantity=et(1);totalWithComputed=hn(()=>this.price()*this.quantity());totalWitoutComputed=this.price()*this.quantity();infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-price-calculator"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,k9,5),t&2&&ee()},decls:111,vars:5,consts:[["tab1",""],[1,"container"],["type","text",1,"me-4",3,"ngModelChange","ngModel"],["type","text",3,"ngModelChange","ngModel"],[1,"mt-3"],[1,"text-danger","me-3"],[2,"font-size","14px"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"Les signaux et computed()"),l(),y(3,"hr"),c(4,"label"),s(5,"Prix :"),l(),c(6,"input",2),we("ngModelChange",function(a){return x(r),Ce(i.price,a)||(i.price=a),A(a)}),l(),c(7,"label"),s(8,"Quantit\xE9 :"),l(),c(9,"input",3),we("ngModelChange",function(a){return x(r),Ce(i.quantity,a)||(i.quantity=a),A(a)}),l(),c(10,"h3",4),s(11," Total avec computed: "),c(12,"span",5),s(13),l(),c(14,"span",6),s(15,"(avec computed le total se met \xE0 jour chaque fois que le signal quantity change)"),l()(),c(16,"h3"),s(17," Total sans computed : "),c(18,"span",5),s(19),l(),c(20,"span",6),s(21,"(sans computed le total ne se met pas \xE0 jour si le signal quantity change)"),l()(),y(22,"hr"),c(23,"ul",7)(24,"li",8)(25,"button",9),s(26," Composant Parent "),l()()(),c(27,"div",10)(28,"div",11)(29,"i",12),C("click",function(){return x(r),A(i.copy1())}),l(),O(30,D9,3,0,"span",13),c(31,"pre",14,0),H(),s(33,`import { FormsModule } from "@angular/forms";
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
}`),W(),l()()(),c(34,"div",15),s(35," ****************************************"),c(36,"span",16),s(37,"cours"),l(),s(38,"************************************************* "),l(),c(39,"p"),s(40,"les signaux sont comme les states dans react."),l(),c(41,"p"),s(42,"Voici quelques utilisations courantes des signaux :"),l(),c(43,"p")(44,"strong"),s(45,"Gestion des \xE9tats :"),l(),s(46," Les signaux peuvent \xEAtre utilis\xE9s pour repr\xE9senter l'\xE9tat d'un composant ou d'une fonctionnalit\xE9 sp\xE9cifique. Lorsqu'un signal est mis \xE0 jour, les parties de l'application qui d\xE9pendent de ce signal peuvent \xEAtre notifi\xE9es et r\xE9agir en cons\xE9quence. "),l(),c(47,"p")(48,"strong"),s(49,"D\xE9clenchement d'effets :"),l(),s(50," Les signaux peuvent \xEAtre utilis\xE9s pour d\xE9clencher des effets ou des actions sp\xE9cifiques lorsqu'une valeur change. Par exemple, vous pouvez d\xE9finir un effet qui s'ex\xE9cute chaque fois qu'un signal particulier est mis \xE0 jour, ce qui permet de r\xE9aliser des actions suppl\xE9mentaires telles que l'envoi de donn\xE9es \xE0 un serveur ou la mise \xE0 jour de l'interface utilisateur. "),l(),c(51,"p")(52,"strong"),s(53,"Gestion des d\xE9pendances :"),l(),s(54," Les signaux permettent de d\xE9finir des d\xE9pendances entre diff\xE9rentes valeurs r\xE9actives. Lorsqu'un signal sur lequel d\xE9pend un autre signal est mis \xE0 jour, cela d\xE9clenche automatiquement la mise \xE0 jour des signaux d\xE9pendants. "),l(),c(55,"p")(56,"strong"),s(57,"Calcul de valeurs d\xE9riv\xE9es :"),l(),s(58," Les signaux peuvent \xEAtre utilis\xE9s pour calculer des valeurs d\xE9riv\xE9es bas\xE9es sur d'autres signaux. Par exemple, vous pouvez d\xE9finir un signal qui repr\xE9sente la somme de deux autres signaux, et chaque fois que les signaux d'origine sont mis \xE0 jour, le signal calcul\xE9 est automatiquement mis \xE0 jour. "),l(),y(59,"br"),c(60,"p")(61,"strong"),s(62,"1. Cr\xE9ation d'un signal:"),l()(),c(63,"p"),s(64," import { signal } from '@ angular/core';"),y(65,"br"),s(66," const count = signal(0); // Un signal initialis\xE9 avec 0 "),l(),c(67,"p")(68,"strong"),s(69," 2. Lecture de la valeur d'un signal:"),l()(),c(70,"p"),s(71," Pour acc\xE9der \xE0 la valeur actuelle d'un signal, utilisez son appel comme une fonction."),y(72,"br"),s(73," console.log(count()); // Affiche la valeur actuelle du signal "),l(),c(74,"p")(75,"strong"),s(76," 3. Mise \xE0 jour de la valeur d'un signal :"),l()(),c(77,"p"),s(78," Il existe plusieurs fa\xE7ons de mettre \xE0 jour un signal :"),y(79,"br")(80,"br"),s(81," a. set() : Remplace la valeur actuelle."),y(82,"br"),s(83," count.set(5); // Change la valeur \xE0 5"),y(84,"br")(85,"br"),s(86," b. update() : Met \xE0 jour la valeur qui depend de la valeur actuelle en utilisant une fonction."),y(87,"br"),s(88," count.update(currentValue => currentValue + 1); // Incr\xE9mente la valeur"),y(89,"br")(90,"br"),s(91," c. mutate() : Modifie la valeur directement (utile pour les objets/collections)."),y(92,"br"),l(),c(93,"pre"),s(94,"const items = signal<string[]>([]);"),y(95,"br"),s(96,`
items.mutate(list => list.push('nouvel \xE9l\xE9ment'));
      `),l(),c(97,"p")(98,"strong"),s(99," 4. Utilisation dans des composants avec computed "),l()(),c(100,"pre"),s(101,`R\xF4le principal de computed():
Cr\xE9er des valeurs d\xE9riv\xE9es : Il d\xE9rive une nouvelle valeur en fonction d'autres signaux ou valeurs.
R\xE9activit\xE9 automatique : Si les signaux utilis\xE9s changent, computed() recalculera automatiquement la nouvelle valeur.

const count = signal(2);
const doubleCount = computed(() => count() * 2);
console.log(doubleCount()); // Affiche 4
count.set(3);
console.log(doubleCount()); // Affiche 6
      `),l(),c(102,"p")(103,"strong"),s(104," 5. Utilisation avec des objets:"),l()(),s(105," Un signal peut contenir un objet ou un tableau, et vous pouvez le mettre \xE0 jour de mani\xE8re r\xE9active."),y(106,"br"),c(107,"pre"),s(108,`const user = signal({ name: 'Alice', age: 25 });
//Mise \xE0 jour avec set:
user.set({ name: 'Bob', age: 30 });
// Mise \xE0 jour partielle avec update
user.update(u => ({ ...u, age: u.age + 1 }));
// Acc\xE8s \xE0 une propri\xE9t\xE9 sp\xE9cifique
console.log(user().name); // Affiche "Bob"

`),l(),s(109," ."),y(110,"br"),l()}t&2&&(g(6),Ee("ngModel",i.price),g(3),Ee("ngModel",i.quantity),g(4),z(" ",i.totalWithComputed(),""),g(6),z("",i.totalWitoutComputed," "),g(11),S("ngIf",i.clicked))},dependencies:[G,te,Pe,De,Ve,Oe],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var M9=["tab1"];function O9(n,e){if(n&1&&(c(0,"li"),s(1),l()),n&2){let t=e.$implicit;g(),he(t.nom)}}function N9(n,e){if(n&1&&(c(0,"ul",3),Yt(1,O9,2,1,"li",null,Ur),l()),n&2){let t=ce();g(),Zt(t.categories)}}function V9(n,e){n&1&&(c(0,"div",4),s(1," Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories. "),l())}function F9(n,e){n&1&&(c(0,"span",15),s(1,"copied "),y(2,"i",16),l())}var ip=class n{baseURL=Oi.apiURL;categories=[];hasError=!1;fetchCategories(){this.hasError=!1,Rn({url:`${this.baseURL}/categories/getCategories.php`,method:"GET"}).subscribe({next:t=>{console.log("response :",t.response),t.response.success?(this.categories=t.response.dataCat||[],console.log("this.categories :",this.categories)):console.log(t.response.message)},error:()=>{this.hasError=!0}})}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test3"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,M9,5),t&2&&ee()},decls:33,vars:3,consts:[["tab1",""],[1,"container","mt-3"],[1,"btn","btn-success",3,"click"],[1,"mt-3"],[1,"alert","alert-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-4"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"Test de la requ\xEAte AJAX"),l(),c(3,"button",2),C("click",function(){return x(r),A(i.fetchCategories())}),s(4," Afficher tous les categories de l'api "),l(),O(5,N9,3,0,"ul",3)(6,V9,2,0,"div",4),y(7,"hr"),c(8,"ul",5)(9,"li",6)(10,"button",7),s(11," Composant appComponent "),l()()(),c(12,"div",8)(13,"div",9)(14,"i",10),C("click",function(){return x(r),A(i.copy1())}),l(),O(15,F9,3,0,"span",11),c(16,"pre",12,0),H(),s(18,`import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="container mt-3">
      <h1>Test de la requ\xEAte AJAX</h1>
      <button class="btn btn-success" (click)="fetchCategories()">
        Afficher tous les categories de l'api
      </button>

      <ul class="mt-3" *ngIf="categories.length > 0">
        <li *ngFor="let category of categories">{{ category.nom }}</li>
      </ul>

      <div
        *ngIf="categories.length === 0 && hasError"
        class="alert alert-danger "
      >
        Une erreur est survenue lors de la r\xE9cup\xE9ration des cat\xE9gories.
      </div>
</div>
\`,
})
export class AppComponent {
  private baseURL: string = environment.apiURL;
  categories: any[] = [];
  hasError: boolean = false;

  fetchCategories(): void {
    this.hasError = false; // R\xE9initialisation de l'\xE9tat d'erreur

    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response

    ajax({
      url: this.baseURL + '/categories/getCategories.php',
      method: 'GET',
    }).subscribe({
      next: (response: any) => {
        console.log('response :', response.response);
        if (response.response.success) {
          this.categories = response.response.dataCat || []; // Assurez-vous que la cl\xE9 existe
          console.log('this.categories :', this.categories);
        } else console.log(response.response.message);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }
}
        `),W(),l()()(),c(19,"div",13),s(20," ****************************************"),c(21,"span",14),s(22,"cours"),l(),s(23,"************************************************* "),l(),c(24,"div")(25,"p"),s(26," AJAX a \xE9t\xE9 principalement con\xE7u pour mettre \xE0 jour des parties d'une page Web, sans recharger la page enti\xE8re. "),l(),c(27,"p"),s(28," La difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With'); et au lieu de data dans la response on met response: response.data devient response.response "),l(),c(29,"strong"),s(30,"syntaxe:"),l(),c(31,"pre"),s(32,`ajax({
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
`),l()()()}t&2&&(g(5),Qe(i.categories.length>0?5:-1),g(),Qe(i.categories.length===0&&i.hasError?6:-1),g(9),S("ngIf",i.clicked))},dependencies:[G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var L9=["tab1"];function U9(n,e){n&1&&(c(0,"span",20),s(1,"copied "),y(2,"i",21),l())}var rp=class n{productName="produit 1";quantity=1;message=`${this.quantity} ${this.productName}(s) ajout\xE9(s) au panier.`;addToCart(){alert(`${this.quantity} ${this.productName}(s) ajout\xE9(s) au panier.`)}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-test1"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,L9,5),t&2&&ee()},decls:211,vars:3,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success","me-4",3,"click"],["type","number",3,"ngModelChange","ngModel"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"fs-6"],[1,"p-2",2,"background-color","#edeef3"],[1,"my-0","table","table-bordered","table-striped"],[1,"table","table-bordered","table-striped"],[2,"background-color","black","color","white"],["scope","col"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"les bindings"),l(),y(3,"hr"),c(4,"h2"),s(5),l(),c(6,"button",2),C("click",function(){return x(r),A(i.addToCart())}),s(7," Ajouter au panier "),l(),c(8,"input",3),we("ngModelChange",function(a){return x(r),Ce(i.quantity,a)||(i.quantity=a),A(a)}),l(),y(9,"hr"),c(10,"ul",4)(11,"li",5)(12,"button",6),s(13," Composant appComponent "),l()()(),c(14,"div",7)(15,"div",8)(16,"i",9),C("click",function(){return x(r),A(i.copy1())}),l(),O(17,U9,3,0,"span",10),c(18,"pre",11,0),H(),s(20,`import { Component } from '@angular/core';
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
        `),W(),l()()(),y(21,"hr"),c(22,"div",12),s(23," ****************************************"),c(24,"span",13),s(25,"cours"),l(),s(26,"************************************************* "),l(),c(27,"pre")(28,"strong",14),s(29,"Interpolation :"),l(),s(30,`
L\u2019interpolation permet d\u2019afficher une valeur dans le template. Pour cela, on utilise la syntaxe {{ }.
`),c(31,"div",15),s(32,`@Component({
  template: \`
    <p>Mon nom est {{ name }</p>
    <p>{{ copyright }</p>
  \`
})
export class AppComponent {
  name = 'Emeline';
  copyright = \`Bonjour Angular, \${new Date().getFullYear()}\`
}`),l(),s(33,`

`),c(34,"strong",14),s(35,"Property binding :"),l(),s(36,`
Le property binding permet de lier une propri\xE9t\xE9 d\u2019un \xE9l\xE9ment HTML \xE0 une valeur dans le composant. Pour cela, on utilise la syntaxe [ ].

`),c(37,"div",15),s(38,`@Component({
  template: \`
    <button [disabled]="isDisabled">Mon bouton</button>
    <img [src]="image" />
  \`
})
export class AppComponent {
  isDisabled = true;
  image = 'https://angular.io/assets/images/logos/angular/angular.png';
}`),l(),s(39,`

`),c(40,"strong",14),s(41,"Event binding :"),l(),s(42,`
L\u2019event binding permet de lier un \xE9v\xE9nement d\u2019un \xE9l\xE9ment HTML \xE0 une m\xE9thode dans le composant. Pour cela, on utilise la syntaxe ( ). Il existe beaucoup d\u2019\xE9v\xE9nements comme click, change, input, keyup, keydown, mouseover, mouseout, focus, blur, etc.

`),c(43,"div",15),s(44,`@Component({
  template: \`
    <button (click)="alert('Bonjour Angular!')">Alert</button>
  \`
})
export class AppComponent {
  alert(message: string) {
    window.alert(message);
  }
}`),l(),s(45,`

`),c(46,"strong",14),s(47,"Two-way binding :"),l(),s(48,`
Le two-way binding est une fonctionnalit\xE9 qui cr\xE9e une connexion bidirectionnelle entre un \xE9l\xE9ment HTML et un composant. Cela signifie que toute modification apport\xE9e \xE0 l\u2019\xE9l\xE9ment est refl\xE9t\xE9e dans le composant, et vice-versa. Pour r\xE9aliser cette liaison, on utilise la syntaxe [( )].

`),c(49,"div",15),s(50,`@Component({
  template: \`
    <input type="text" [(ngModel)]="name" />
    <p>Mon nom est { { name } }</p>
  \`
})
export class AppComponent {
  name = 'Emeline';
}`),l(),s(51,`

Ici, si l\u2019utilisateur \xE9crit dans l\u2019input, cela modifiera la propri\xE9t\xE9 name et ce changement sera refl\xE9t\xE9 automatiquement dans { { name } }.
`),l(),c(52,"pre"),H(),s(53,`
`),c(54,"strong",14),s(55,"R\xE9sum\xE9 des bindings :"),l(),s(56,`
    `),c(57,"table",16),s(58,`
          `),c(59,"thead"),s(60,`
            `),c(61,"tr"),s(62,`
              `),c(63,"th"),s(64,"Type de Binding"),l(),s(65,`
              `),c(66,"th"),s(67,"Syntaxe"),l(),s(68,`
              `),c(69,"th"),s(70,"Exemple"),l(),s(71,`
            `),l(),s(72,`
          `),l(),s(73,`
          `),c(74,"tbody"),s(75,`
            `),c(76,"tr"),s(77,`
              `),c(78,"td")(79,"strong"),s(80,"Interpolation"),l()(),s(81,`
              `),c(82,"td"),s(83,"{{ expression %#125;%#125;"),l(),s(84,`
              `),c(85,"td"),s(86,"<p>{{ title %#125;%#125;</p>"),l(),s(87,`
            `),l(),s(88,`
            `),c(89,"tr"),s(90,`
              `),c(91,"td")(92,"strong"),s(93,"Property Binding"),l()(),s(94,`
              `),c(95,"td"),s(96,'[property]="value"'),l(),s(97,`
              `),c(98,"td"),s(99,'<img [src]="imageUrl" />'),l(),s(100,`
            `),l(),s(101,`
            `),c(102,"tr"),s(103,`
              `),c(104,"td")(105,"strong"),s(106,"Event Binding"),l()(),s(107,`
              `),c(108,"td"),s(109,'(event)="handler()"'),l(),s(110,`
              `),c(111,"td"),s(112,'<button (click)="onClick()">Clique</button>'),l(),s(113,`
            `),l(),s(114,`
            `),c(115,"tr"),s(116,`
              `),c(117,"td")(118,"strong"),s(119,"Two-Way Binding"),l()(),s(120,`
              `),c(121,"td"),s(122,'[(ngModel)]="value"'),l(),s(123,`
              `),c(124,"td"),s(125,'<input [(ngModel)]="name" />'),l(),s(126,`
            `),l(),s(127,`
            `),c(128,"tr"),s(129,`
              `),c(130,"td")(131,"strong"),s(132,"Class Binding"),l()(),s(133,`
              `),c(134,"td"),s(135,"[class.className]"),l(),s(136,`
              `),c(137,"td"),s(138,'<div [class.active]="isActive"></div>'),l(),s(139,`
            `),l(),s(140,`
            `),c(141,"tr"),s(142,`
              `),c(143,"td")(144,"strong"),s(145,"Style Binding"),l()(),s(146,`
              `),c(147,"td"),s(148,"[style.property]"),l(),s(149,`
              `),c(150,"td"),s(151,'<div [style.color]="color"></div>'),l(),s(152,`
            `),l(),s(153,`
          `),l(),s(154,`
        `),l(),s(155,`

`),c(156,"strong",14),s(157,"R\xE9sum\xE9 rapide : "),l(),s(158,`
  `),c(159,"table",17),s(160,`
  `),c(161,"thead",18),s(162,`
    `),c(163,"tr"),s(164,`
      `),c(165,"th",19),s(166,"Concept"),l(),s(167,`
      `),c(168,"th",19),s(169,"Syntaxe"),l(),s(170,`
    `),l(),s(171,`
  `),l(),s(172,`
  `),c(173,"tbody"),s(174,`
    `),c(175,"tr"),s(176,`
      `),c(177,"td"),s(178,"Unidirectionnel"),l(),s(179,`
      `),c(180,"td")(181,"code"),s(182,"{{}}"),l(),s(183," ou "),c(184,"code"),s(185,"[]"),l()(),s(186,`
    `),l(),s(187,`
    `),c(188,"tr"),s(189,`
      `),c(190,"td"),s(191,"\xC9v\xE9nements"),l(),s(192,`
      `),c(193,"td")(194,"code"),s(195,"()"),l()(),s(196,`
    `),l(),s(197,`
    `),c(198,"tr"),s(199,`
      `),c(200,"td"),s(201,"Bidirectionnel"),l(),s(202,`
      `),c(203,"td")(204,"code"),s(205,"[()]"),l(),s(206," (pour synchroniser les donn\xE9es entre le composant et le DOM)"),l(),s(207,`
    `),l(),s(208,`
  `),l(),s(209,`
`),l(),s(210,`
    `),W(),l()()}t&2&&(g(5),he(i.productName),g(3),Ee("ngModel",i.quantity),g(9),S("ngIf",i.clicked))},dependencies:[Pe,De,pt,Ve,Oe,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var j9=["tab1"];function B9(n,e){n&1&&(c(0,"span",16),s(1,"copied "),y(2,"i",17),l())}var op=class n{time=0;timerSubscription;startTimer(){this.stopTimer(),this.timerSubscription=st(1e3).subscribe(e=>this.time=e)}stopTimer(){this.timerSubscription&&this.timerSubscription.unsubscribe()}resetTimer(){this.stopTimer(),this.time=0}infoTab1=$("tab1");clicked=!1;copy1(){let e=this.infoTab1()?.nativeElement;e&&navigator.clipboard.writeText(e.textContent),this.clicked=!0,setTimeout(()=>{this.clicked=!1},1500)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-root"]],viewQuery:function(t,i){t&1&&q(i.infoTab1,j9,5),t&2&&ee()},decls:53,vars:2,consts:[["tab1",""],[1,"container"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","mx-4",3,"click"],[1,"my-3","fs-5"],[1,"text-danger"],["id","codeTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","c1-tab","data-bs-toggle","tab","data-bs-target","#c1","type","button","role","tab","aria-controls","c1","aria-selected","true",1,"nav-link","active"],["id","codeTabsContent",1,"tab-content",2,"position","relative"],["id","c1","role","tabpanel","aria-labelledby","c1-tab",1,"tab-pane","fade","show","active",2,"position","relative"],[1,"fas","fa-copy",3,"click"],["class","confirm",4,"ngIf"],[1,"tab","fw-bold"],[1,"mt-5"],[1,"fs-2"],[1,"confirm"],[1,"fas","fa-check"]],template:function(t,i){if(t&1){let r=Z();c(0,"div",1)(1,"h1"),s(2,"l'observable interval()"),l(),y(3,"hr"),c(4,"button",2),C("click",function(){return x(r),A(i.startTimer())}),s(5,"D\xE9marrer"),l(),c(6,"button",3),C("click",function(){return x(r),A(i.stopTimer())}),s(7,"Arr\xEAter"),l(),c(8,"button",2),C("click",function(){return x(r),A(i.resetTimer())}),s(9," R\xE9initialiser "),l(),c(10,"div",4),s(11," Minuterie: "),c(12,"span",5),s(13),l()(),y(14,"hr"),c(15,"ul",6)(16,"li",7)(17,"button",8),s(18," Composant Parent "),l()()(),c(19,"div",9)(20,"div",10)(21,"i",11),C("click",function(){return x(r),A(i.copy1())}),l(),O(22,B9,3,0,"span",12),c(23,"pre",13,0),H(),s(25,`import { CommonModule } from "@angular/common";
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
}`),W(),l()()(),y(26,"hr"),c(27,"span",14),s(28," ****************************************"),c(29,"span",15),s(30,"cours"),l(),s(31,"************************************************* "),l(),c(32,"h2"),s(33,"R\xE9sum\xE9 rapide sur interval"),l(),c(34,"p"),s(35," La fonction interval() est une fonction d'RxJS utilis\xE9e pour cr\xE9er un observable qui \xE9met une s\xE9quence infinie de nombres \xE0 intervalles r\xE9guliers. "),l(),c(36,"p")(37,"strong"),s(38,"Syntaxe :"),l()(),s(39," interval(delay) "),c(40,"p"),s(41," Par exemple, interval(1000) \xE9mettra une valeur toutes les 1000 ms (1 seconde)."),y(42,"br"),c(43,"strong",5),s(44,"interval(delay).subscribe(value=>votre code ici en fonction de value)"),l()(),c(45,"p")(46,"strong"),s(47,"R\xE9sum\xE9 :"),l()(),c(48,"ul")(49,"li"),s(50," interval() cr\xE9e un observable qui \xE9met une valeur \xE0 intervalle r\xE9gulier, commen\xE7ant \xE0 partir de z\xE9ro. "),l(),c(51,"li"),s(52," Il est souvent utilis\xE9 pour cr\xE9er des timers ou des flux de donn\xE9es r\xE9p\xE9titifs \xE0 des intervalles fixes. "),l()()()}t&2&&(g(13),he(i.time),g(9),S("ngIf",i.clicked))},dependencies:[Pe,G,te],styles:["pre[_ngcontent-%COMP%]{font-size:15px}.fa-check[_ngcontent-%COMP%]{color:gray}i.fa-copy[_ngcontent-%COMP%]{cursor:pointer;color:gray;font-size:20px;position:absolute;top:20px;right:20px;transition:color .5s ease,transform .3s ease;display:inline-block;padding:10px}i.fa-copy[_ngcontent-%COMP%]:hover{color:#aaacad;transform:scale(1.2);cursor:pointer}.confirm[_ngcontent-%COMP%]{position:absolute;top:30px;right:60px;color:gray;font-weight:700}.tab[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:15px;border:1px solid #ddd;border-radius:5px;overflow-x:auto;font-family:monospace}.active[_ngcontent-%COMP%]{background-color:#eef06f!important;border-color:gray}h3[_ngcontent-%COMP%]{margin-top:20px}"]})};var sp=class n{title="Page d'accueil";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"container"],[1,"row","d-flex","justify-content-center","flex-wrap"],["height","300px","src",gb`https://www.youtube.com/embed/7gbtO0Stzi8?si=5AfM6O9o-_kCMG1x`,"title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","true",1,"aspect-video","col-6"],[1,"col-6"],[1,"fs-6"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"div",1),y(2,"iframe",2),c(3,"div",3)(4,"h1"),s(5,"Angular est-il vraiment plus compliqu\xE9 que React ?"),l(),c(6,"p",4),s(7," Quand on d\xE9bute avec Angular, il est facile de se sentir d\xE9courag\xE9 face \xE0 la multitude de concepts \xE0 assimiler. Cette complexit\xE9 peut inciter \xE0 se tourner vers des frameworks comme React, qui semblent plus simples \xE0 premi\xE8re vue. Mais est-ce vraiment le cas ? "),l()()()())},encapsulation:2})};var zT=()=>{let n=X(Ge),e=X(An),t=!1;return e.select(Zu).subscribe(i=>(t=i,t?!0:(n.navigate(["/login"]),!1))),!0};var GT=()=>{let n=X(Ge);return X(An).select(Zu).pipe(Pn(),ve(t=>t?(n.navigate(["/dashboard"]),!1):!0))};var WT=[{path:"",component:sp},{path:"data-binding",component:rp},{path:"les-routes",component:pc},{path:"interval",component:op},{path:"c-est-quoi-un-guard",component:md},{path:"les-services",component:dc},{path:"ajax",component:ip},{path:"http",component:Ed},{path:"signal-et-computed",component:np},{path:"signal-et-effect",component:tp},{path:"les-inputs",component:Yd},{path:"les-outputs",component:ep},{path:"les-model",component:Jd},{path:"les-signaux-et-leurs-methodes",component:Qd},{path:"liaison-conditionnelle",component:Kd},{path:"liaison-une-chaine-de-caracteres",component:Hd},{path:"liaison-avec-un-tableau",component:Wd},{path:"liaison-avec-un-objet",component:Gd},{path:"combinaison-des-approches",component:zd},{path:"liaison-d-une-propriete",component:$d},{path:"liaison-avec-unites",component:qd},{path:"liaison-multiple",component:Bd},{path:"liaison-a-un-objet",component:jd},{path:"approches-en-combinaison",component:Ud},{path:"ngoninit",component:gc},{path:"ngonchanges",component:hc},{path:"ngafterviewinit",component:fc},{path:"ngondestroy",component:mc},{path:"les-pipes",component:Ld},{path:"@for",component:Vd},{path:"@if",component:Nd},{path:"@switch",component:Od},{path:"projection-avec-ng-content",component:Md},{path:"acceder-a-un-element-du-dom",component:kd},{path:"acceder-a-un-composant-enfant",component:wd},{path:"acceder-a-plusieurs-elements",component:Td},{path:"acceder-aux-composants-enfants",component:Id},{path:"acceder-aux-elements-enfants-d-un-composant",component:xd},{path:"acceder-a-un-composant-enfant-dans-la-projection-de-contenu",component:Rd},{path:"viewchild-avec-ng-template",component:Pd},{path:"les-states-et-les-reducers",component:yd},{path:"ng-container---ng-template",component:bd},{path:"ngform-dans-ngsubmit",component:_d},{path:"utiliser-viewchild-pour-ngform",component:vd},{path:"formgroup-et-formcontrol",component:gd},{path:"dashboard",component:fd,canActivate:[zT]},{path:"exemple-de-connexion",component:ed,canActivate:[GT]},{path:"les-resolvers",component:hd,resolve:{products:pd,categories:_c}},{path:"les-observables",component:ud},{path:"les-operateurs-de-creation",component:rd},{path:"les-operateurs-de-transformation",component:td},{path:"crud-nodejs-mongodb",component:ad},{path:"update-node/:id",component:cd},{path:"crud-firebase",component:ld},{path:"update-product-firebase/:id",component:Ju},{path:"crud-json",component:sd},{path:"updateproduct-json/:id",component:od},{path:"angular-avec-api-rest-php",component:vc}];var Za="PERFORM_ACTION",q9="REFRESH",YT="RESET",ZT="ROLLBACK",eI="COMMIT",tI="SWEEP",nI="TOGGLE_ACTION",$9="SET_ACTIONS_ACTIVE",iI="JUMP_TO_STATE",rI="JUMP_TO_ACTION",cv="IMPORT_STATE",oI="LOCK_CHANGES",sI="PAUSE_RECORDING",Ho=class{constructor(e,t){if(this.action=e,this.timestamp=t,this.type=Za,typeof e.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},X0=class{constructor(){this.type=q9}},Y0=class{constructor(e){this.timestamp=e,this.type=YT}},Z0=class{constructor(e){this.timestamp=e,this.type=ZT}},ev=class{constructor(e){this.timestamp=e,this.type=eI}},tv=class{constructor(){this.type=tI}},nv=class{constructor(e){this.id=e,this.type=nI}};var iv=class{constructor(e){this.index=e,this.type=iI}},rv=class{constructor(e){this.actionId=e,this.type=rI}},ov=class{constructor(e){this.nextLiftedState=e,this.type=cv}},sv=class{constructor(e){this.status=e,this.type=oI}},av=class{constructor(e){this.status=e,this.type=sI}};var up=new le("@ngrx/store-devtools Options"),HT=new le("@ngrx/store-devtools Initial Config");function aI(){return null}var z9="NgRx Store DevTools";function G9(n){let e={maxAge:!1,monitor:aI,actionSanitizer:void 0,stateSanitizer:void 0,name:z9,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},t=typeof n=="function"?n():n,i=t.logOnly?{pause:!0,export:!0,test:!0}:!1,r=t.features||i||e.features;r.import===!0&&(r.import="custom");let o=Object.assign({},e,{features:r},t);if(o.maxAge&&o.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${o.maxAge}`);return o}function KT(n,e){return n.filter(t=>e.indexOf(t)<0)}function lI(n){let{computedStates:e,currentStateIndex:t}=n;if(t>=e.length){let{state:r}=e[e.length-1];return r}let{state:i}=e[t];return i}function Ya(n){return new Ho(n,+Date.now())}function W9(n,e){return Object.keys(e).reduce((t,i)=>{let r=Number(i);return t[r]=cI(n,e[r],r),t},{})}function cI(n,e,t){return ye(K({},e),{action:n(e.action,t)})}function H9(n,e){return e.map((t,i)=>({state:uI(n,t.state,i),error:t.error}))}function uI(n,e,t){return n(e,t)}function dI(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function K9(n,e,t,i){let r=[],o={},a=[];return n.stagedActionIds.forEach((d,p)=>{let m=n.actionsById[d];m&&(p&&uv(n.computedStates[p],m,e,t,i)||(o[d]=m,r.push(d),a.push(n.computedStates[p])))}),ye(K({},n),{stagedActionIds:r,actionsById:o,computedStates:a})}function uv(n,e,t,i,r){let o=t&&!t(n,e.action),a=i&&!e.action.type.match(i.map(p=>QT(p)).join("|")),d=r&&e.action.type.match(r.map(p=>QT(p)).join("|"));return o||a||d}function QT(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pI(n){return{ngZone:n?X($e):null,connectInZone:n}}var dp=(()=>{class n extends Kn{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Wt(n)))(r||n)}})()}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),ap={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},lv=new le("@ngrx/store-devtools Redux Devtools Extension"),hI=(()=>{class n{constructor(t,i,r){this.config=i,this.dispatcher=r,this.zoneConfig=pI(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,i){if(this.devtoolsExtension)if(t.type===Za){if(i.isLocked||i.isPaused)return;let r=lI(i);if(dI(this.config)&&uv(r,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let o=this.config.stateSanitizer?uI(this.config.stateSanitizer,r,i.currentStateIndex):r,a=this.config.actionSanitizer?cI(this.config.actionSanitizer,t,i.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(a,o))}else{let r=ye(K({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?W9(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?H9(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,r,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new rt(t=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(r=>t.next(r)),i.unsubscribe}):an}createActionStreams(){let t=this.createChangesObservable().pipe(W_()),i=t.pipe(kt(m=>m.type===ap.START)),r=t.pipe(kt(m=>m.type===ap.STOP)),o=t.pipe(kt(m=>m.type===ap.DISPATCH),ve(m=>this.unwrapAction(m.payload)),ln(m=>m.type===cv?this.dispatcher.pipe(kt(v=>v.type===Yu),T_(1e3),V_(1e3),ve(()=>m),wi(()=>me(m)),Je(1)):me(m))),d=t.pipe(kt(m=>m.type===ap.ACTION),ve(m=>this.unwrapAction(m.payload))).pipe(Dr(r)),p=o.pipe(Dr(r));this.start$=i.pipe(Dr(r)),this.actions$=this.start$.pipe(Dt(()=>d)),this.liftedActions$=this.start$.pipe(Dt(()=>p))}unwrapAction(t){return typeof t=="string"?(0,eval)(`(${t})`):t}getExtensionConfig(t){let i={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(i.maxAge=t.maxAge),i}sendToReduxDevtools(t){try{t()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}static{this.\u0275fac=function(i){return new(i||n)(ie(lv),ie(up),ie(dp))}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})(),cp={type:Wa},Q9="@ngrx/store-devtools/recompute",J9={type:Q9};function mI(n,e,t,i,r){if(i)return{state:t,error:"Interrupted by an error up the chain"};let o=t,a;try{o=n(t,e)}catch(d){a=d.toString(),r.handleError(d)}return{state:o,error:a}}function lp(n,e,t,i,r,o,a,d,p){if(e>=n.length&&n.length===o.length)return n;let m=n.slice(0,e),v=o.length-(p?1:0);for(let b=e;b<v;b++){let T=o[b],M=r[T].action,U=m[b-1],L=U?U.state:i,V=U?U.error:void 0,ge=a.indexOf(T)>-1?U:mI(t,M,L,V,d);m.push(ge)}return p&&m.push(n[n.length-1]),m}function X9(n,e){return{monitorState:e(void 0,{}),nextActionId:1,actionsById:{0:Ya(cp)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Y9(n,e,t,i,r={}){return o=>(a,d)=>{let{monitorState:p,actionsById:m,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:M,currentStateIndex:U,computedStates:L,isLocked:V,isPaused:ae}=a||e;a||(m=Object.create(m));function ge(be){let fe=be,P=b.slice(1,fe+1);for(let E=0;E<P.length;E++)if(L[E+1].error){fe=E,P=b.slice(1,fe+1);break}else delete m[P[E]];T=T.filter(E=>P.indexOf(E)===-1),b=[0,...b.slice(fe+1)],M=L[fe].state,L=L.slice(fe),U=U>fe?U-fe:0}function se(){m={0:Ya(cp)},v=1,b=[0],T=[],M=L[U].state,U=0,L=[]}let Q=0;switch(d.type){case oI:{V=d.status,Q=1/0;break}case sI:{ae=d.status,ae?(b=[...b,v],m[v]=new Ho({type:"@ngrx/devtools/pause"},+Date.now()),v++,Q=b.length-1,L=L.concat(L[L.length-1]),U===b.length-2&&U++,Q=1/0):se();break}case YT:{m={0:Ya(cp)},v=1,b=[0],T=[],M=n,U=0,L=[];break}case eI:{se();break}case ZT:{m={0:Ya(cp)},v=1,b=[0],T=[],U=0,L=[];break}case nI:{let{id:be}=d;T.indexOf(be)===-1?T=[be,...T]:T=T.filter(P=>P!==be),Q=b.indexOf(be);break}case $9:{let{start:be,end:fe,active:P}=d,E=[];for(let I=be;I<fe;I++)E.push(I);P?T=KT(T,E):T=[...T,...E],Q=b.indexOf(be);break}case iI:{U=d.index,Q=1/0;break}case rI:{let be=b.indexOf(d.actionId);be!==-1&&(U=be),Q=1/0;break}case tI:{b=KT(b,T),T=[],U=Math.min(U,b.length-1);break}case Za:{if(V)return a||e;if(ae||a&&uv(a.computedStates[U],d,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let fe=L[L.length-1];L=[...L.slice(0,-1),mI(o,d.action,fe.state,fe.error,t)],Q=1/0;break}r.maxAge&&b.length===r.maxAge&&ge(1),U===b.length-1&&U++;let be=v++;m[be]=d,b=[...b,be],Q=b.length-1;break}case cv:{({monitorState:p,actionsById:m,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:M,currentStateIndex:U,computedStates:L,isLocked:V,isPaused:ae}=d.nextLiftedState);break}case Wa:{Q=0,r.maxAge&&b.length>r.maxAge&&(L=lp(L,Q,o,M,m,b,T,t,ae),ge(b.length-r.maxAge),Q=1/0);break}case Yu:{if(L.filter(fe=>fe.error).length>0)Q=0,r.maxAge&&b.length>r.maxAge&&(L=lp(L,Q,o,M,m,b,T,t,ae),ge(b.length-r.maxAge),Q=1/0);else{if(!ae&&!V){U===b.length-1&&U++;let fe=v++;m[fe]=new Ho(d,+Date.now()),b=[...b,fe],Q=b.length-1,L=lp(L,Q,o,M,m,b,T,t,ae)}L=L.map(fe=>ye(K({},fe),{state:o(fe.state,J9)})),U=b.length-1,r.maxAge&&b.length>r.maxAge&&ge(b.length-r.maxAge),Q=1/0}break}default:{Q=1/0;break}}return L=lp(L,Q,o,M,m,b,T,t,ae),p=i(p,d),{monitorState:p,actionsById:m,nextActionId:v,stagedActionIds:b,skippedActionIds:T,committedState:M,currentStateIndex:U,computedStates:L,isLocked:V,isPaused:ae}}}var JT=(()=>{class n{constructor(t,i,r,o,a,d,p,m){let v=X9(p,m.monitor),b=Y9(p,v,d,m.monitor,m),T=fs(fs(i.asObservable().pipe(H_(1)),o.actions$).pipe(ve(Ya)),t,o.liftedActions$).pipe(Zi(Pr)),M=r.pipe(ve(b)),U=pI(m.connectInZone),L=new Gp(1);this.liftedStateSubscription=T.pipe(bl(M),XT(U),Xn(({state:ge},[se,Q])=>{let be=Q(ge,se);return se.type!==Za&&dI(m)&&(be=K9(be,m.predicate,m.actionsSafelist,m.actionsBlocklist)),o.notify(se,be),{state:be,action:se}},{state:v,action:null})).subscribe(({state:ge,action:se})=>{if(L.next(ge),se.type===Za){let Q=se.action;a.next(Q)}}),this.extensionStartSubscription=o.start$.pipe(XT(U)).subscribe(()=>{this.refresh()});let V=L.asObservable(),ae=V.pipe(ve(lI));Object.defineProperty(ae,"state",{value:ga(ae,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=t,this.liftedState=V,this.state=ae}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(t){this.dispatcher.next(t)}next(t){this.dispatcher.next(t)}error(t){}complete(){}performAction(t){this.dispatch(new Ho(t,+Date.now()))}refresh(){this.dispatch(new X0)}reset(){this.dispatch(new Y0(+Date.now()))}rollback(){this.dispatch(new Z0(+Date.now()))}commit(){this.dispatch(new ev(+Date.now()))}sweep(){this.dispatch(new tv)}toggleAction(t){this.dispatch(new nv(t))}jumpToAction(t){this.dispatch(new rv(t))}jumpToState(t){this.dispatch(new iv(t))}importState(t){this.dispatch(new ov(t))}lockChanges(t){this.dispatch(new sv(t))}pauseRecording(t){this.dispatch(new av(t))}static{this.\u0275fac=function(i){return new(i||n)(ie(dp),ie(Kn),ie(Tr),ie(hI),ie(Ka),ie(gs),ie(Ha),ie(up))}}static{this.\u0275prov=de({token:n,factory:n.\u0275fac})}}return n})();function XT({ngZone:n,connectInZone:e}){return t=>e?new rt(i=>t.subscribe({next:r=>n.run(()=>i.next(r)),error:r=>n.run(()=>i.error(r)),complete:()=>n.run(()=>i.complete())})):t}var Z9=new le("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function eL(n,e){return!!n||e.monitor!==aI}function tL(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function fI(n={}){return ft([hI,dp,JT,{provide:HT,useValue:n},{provide:Z9,deps:[lv,up],useFactory:eL},{provide:lv,useFactory:tL},{provide:up,deps:[HT],useFactory:G9},{provide:$o,deps:[JT],useFactory:nL},{provide:qo,useExisting:dp}])}function nL(n){return n.state}var gI=["toast-component",""];function iL(n,e){if(n&1){let t=Z();c(0,"button",5),C("click",function(){x(t);let r=ce();return A(r.remove())}),c(1,"span",6),s(2,"\xD7"),l()()}}function rL(n,e){if(n&1&&(Ti(0),s(1),Ii()),n&2){let t=ce(2);g(),z("[",t.duplicatesCount+1,"]")}}function oL(n,e){if(n&1&&(c(0,"div"),s(1),O(2,rL,2,1,"ng-container",4),l()),n&2){let t=ce();qt(t.options.titleClass),Kt("aria-label",t.title),g(),z(" ",t.title," "),g(),S("ngIf",t.duplicatesCount)}}function sL(n,e){if(n&1&&y(0,"div",7),n&2){let t=ce();qt(t.options.messageClass),S("innerHTML",t.message,ah)}}function aL(n,e){if(n&1&&(c(0,"div",8),s(1),l()),n&2){let t=ce();qt(t.options.messageClass),Kt("aria-label",t.message),g(),z(" ",t.message," ")}}function lL(n,e){if(n&1&&(c(0,"div"),y(1,"div",9),l()),n&2){let t=ce();g(),Xt("width",t.width()+"%")}}function cL(n,e){if(n&1){let t=Z();c(0,"button",5),C("click",function(){x(t);let r=ce();return A(r.remove())}),c(1,"span",6),s(2,"\xD7"),l()()}}function uL(n,e){if(n&1&&(Ti(0),s(1),Ii()),n&2){let t=ce(2);g(),z("[",t.duplicatesCount+1,"]")}}function dL(n,e){if(n&1&&(c(0,"div"),s(1),O(2,uL,2,1,"ng-container",4),l()),n&2){let t=ce();qt(t.options.titleClass),Kt("aria-label",t.title),g(),z(" ",t.title," "),g(),S("ngIf",t.duplicatesCount)}}function pL(n,e){if(n&1&&y(0,"div",7),n&2){let t=ce();qt(t.options.messageClass),S("innerHTML",t.message,ah)}}function hL(n,e){if(n&1&&(c(0,"div",8),s(1),l()),n&2){let t=ce();qt(t.options.messageClass),Kt("aria-label",t.message),g(),z(" ",t.message," ")}}function mL(n,e){if(n&1&&(c(0,"div"),y(1,"div",9),l()),n&2){let t=ce();g(),Xt("width",t.width()+"%")}}var dv=class{_attachedHost;component;viewContainerRef;injector;constructor(e,t){this.component=e,this.injector=t}attach(e,t){return this._attachedHost=e,e.attach(this,t)}detach(){let e=this._attachedHost;if(e)return this._attachedHost=void 0,e.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},pv=class{_attachedPortal;_disposeFn;attach(e,t){return this._attachedPortal=e,this.attachComponentPortal(e,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(e){this._disposeFn=e}},hv=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new ot;_activate=new ot;_manualClose=new ot;_resetTimeout=new ot;_countDuplicate=new ot;constructor(e){this._overlayRef=e}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(e,t){e&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},Ko=class{toastId;config;message;title;toastType;toastRef;_onTap=new ot;_onAction=new ot;constructor(e,t,i,r,o,a){this.toastId=e,this.config=t,this.message=i,this.title=r,this.toastType=o,this.toastRef=a,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(e){this._onAction.next(e)}onAction(){return this._onAction.asObservable()}},vI={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},_I=new le("ToastConfig"),mv=class extends pv{_hostDomElement;_componentFactoryResolver;_appRef;constructor(e,t,i){super(),this._hostDomElement=e,this._componentFactoryResolver=t,this._appRef=i}attachComponentPortal(e,t){let i=this._componentFactoryResolver.resolveComponentFactory(e.component),r;return r=i.create(e.injector),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.detachView(r.hostView),r.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(r),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(r)),r}_getComponentRootNode(e){return e.hostView.rootNodes[0]}},fL=(()=>{class n{_document=X(at);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fv=class{_portalHost;constructor(e){this._portalHost=e}attach(e,t=!0){return this._portalHost.attach(e,t)}detach(){return this._portalHost.detach()}},gL=(()=>{class n{_overlayContainer=X(fL);_componentFactoryResolver=X(_b);_appRef=X(ei);_document=X(at);_paneElements=new Map;create(t,i){return this._createOverlayRef(this.getPaneElement(t,i))}getPaneElement(t="",i){return this._paneElements.get(i)||this._paneElements.set(i,{}),this._paneElements.get(i)[t]||(this._paneElements.get(i)[t]=this._createPaneElement(t,i)),this._paneElements.get(i)[t]}_createPaneElement(t,i){let r=this._document.createElement("div");return r.id="toast-container",r.classList.add(t),r.classList.add("toast-container"),i?i.getContainerElement().appendChild(r):this._overlayContainer.getContainerElement().appendChild(r),r}_createPortalHost(t){return new mv(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new fv(this._createPortalHost(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bI=(()=>{class n{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,i,r,o,a){this.overlay=i,this._injector=r,this.sanitizer=o,this.ngZone=a,this.toastrConfig=K(K({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=K(K({},t.default.iconClasses),t.config.iconClasses))}show(t,i,r={},o=""){return this._preBuildNotification(o,t,i,this.applyConfig(r))}success(t,i,r={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}error(t,i,r={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}info(t,i,r={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}warning(t,i,r={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,i,this.applyConfig(r))}clear(t){for(let i of this.toasts)if(t!==void 0){if(i.toastId===t){i.toastRef.manualClose();return}}else i.toastRef.manualClose()}remove(t){let i=this._findToast(t);if(!i||(i.activeToast.toastRef.close(),this.toasts.splice(i.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let r=this.toasts[this.currentlyActive].toastRef;r.isInactive()||(this.currentlyActive=this.currentlyActive+1,r.activate())}return!0}findDuplicate(t="",i="",r,o){let{includeTitleDuplicates:a}=this.toastrConfig;for(let d of this.toasts){let p=a&&d.title===t;if((!a||p)&&d.message===i)return d.toastRef.onDuplicate(r,o),d}return null}applyConfig(t={}){return K(K({},this.toastrConfig),t)}_findToast(t){for(let i=0;i<this.toasts.length;i++)if(this.toasts[i].toastId===t)return{index:i,activeToast:this.toasts[i]};return null}_preBuildNotification(t,i,r,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,i,r,o)):this._buildNotification(t,i,r,o)}_buildNotification(t,i,r,o){if(!o.toastComponent)throw new Error("toastComponent required");let a=this.findDuplicate(r,i,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&r||i)&&this.toastrConfig.preventDuplicates&&a!==null)return a;this.previousToastMessage=i;let d=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(d=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let p=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let m=i;i&&o.enableHtml&&(m=this.sanitizer.sanitize(Zn.HTML,i));let v=new hv(p),b=new Ko(this.index,o,m,r,t,v),T=[{provide:Ko,useValue:b}],M=Ht.create({providers:T,parent:this._injector}),U=new dv(o.toastComponent,M),L=p.attach(U,o.newestOnTop);v.componentInstance=L.instance;let V={toastId:this.index,title:r||"",message:i||"",toastRef:v,onShown:v.afterActivate(),onHidden:v.afterClosed(),onTap:b.onTap(),onAction:b.onAction(),portal:L};return d||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{V.toastRef.activate()})),this.toasts.push(V),V}static \u0275fac=function(i){return new(i||n)(ie(_I),ie(gL),ie(Ht),ie(Fs),ie($e))};static \u0275prov=de({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vL=(()=>{class n{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=et(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,i,r){this.toastrService=t,this.toastPackage=i,this.ngZone=r,this.message=i.message,this.title=i.title,this.options=i.config,this.originalTimeout=i.config.timeOut,this.toastClasses=`${i.toastType} ${i.config.toastClass}`,this.sub=i.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=i.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=i.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=i.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=et({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>ye(K({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),i=this.hideTime-t;this.width.set(i/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>ye(K({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>ye(K({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,i){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),i)):this.timeout=setTimeout(()=>t(),i)}outsideInterval(t,i){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),i)):this.intervalId=setInterval(()=>t(),i)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(i){return new(i||n)(oe(bI),oe(Ko),oe($e))};static \u0275cmp=j({type:n,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(i,r){i&1&&C("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),i&2&&(Ib("@flyInOut",r._state),qt(r.toastClasses),Xt("display",r.displayStyle))},attrs:gI,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(i,r){i&1&&O(0,iL,3,0,"button",0)(1,oL,3,5,"div",1)(2,sL,1,3,"div",2)(3,aL,2,4,"div",3)(4,lL,2,2,"div",4),i&2&&(S("ngIf",r.options.closeButton),g(),S("ngIf",r.title),g(),S("ngIf",r.message&&r.options.enableHtml),g(),S("ngIf",r.message&&!r.options.enableHtml),g(),S("ngIf",r.options.progressBar))},dependencies:[te],encapsulation:2,data:{animation:[Qb("flyInOut",[Vl("inactive",Nl({opacity:0})),Vl("active",Nl({opacity:1})),Vl("removed",Nl({opacity:0})),ph("inactive => active",dh("{{ easeTime }}ms {{ easing }}")),ph("active => removed",dh("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return n})(),_L=ye(K({},vI),{toastComponent:vL}),yI=(n={})=>ft([{provide:_I,useValue:{default:_L,config:n}}]);var bL=(()=>{class n{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=et(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=et("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,i,r){this.toastrService=t,this.toastPackage=i,this.appRef=r,this.message=i.message,this.title=i.title,this.options=i.config,this.originalTimeout=i.config.timeOut,this.toastClasses=`${i.toastType} ${i.config.toastClass}`,this.sub=i.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=i.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=i.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=i.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),i=this.hideTime-t;this.width.set(i/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(i){return new(i||n)(oe(bI),oe(Ko),oe(ei))};static \u0275cmp=j({type:n,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(i,r){i&1&&C("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),i&2&&(qt(r.toastClasses),Xt("display",r.displayStyle))},attrs:gI,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(i,r){i&1&&O(0,cL,3,0,"button",0)(1,dL,3,5,"div",1)(2,pL,1,3,"div",2)(3,hL,2,4,"div",3)(4,mL,2,2,"div",4),i&2&&(S("ngIf",r.options.closeButton),g(),S("ngIf",r.title),g(),S("ngIf",r.message&&r.options.enableHtml),g(),S("ngIf",r.message&&!r.options.enableHtml),g(),S("ngIf",r.options.progressBar))},dependencies:[te],encapsulation:2,changeDetection:0})}return n})(),IH=ye(K({},vI),{toastComponent:bL});var yL=(()=>{class n extends Ll{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(ie(at),ie(As),ie(Fl))};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})();function EL(){return new Xb}function CL(n,e,t){return new Zb(n,e,t)}var EI=[{provide:Fl,useFactory:EL},{provide:Ll,useClass:yL},{provide:Fr,useFactory:CL,deps:[Gr,Ll,$e]}],wL=[{provide:As,useFactory:()=>new Yb},{provide:vs,useValue:"BrowserAnimations"},...EI],FH=[{provide:As,useClass:Jb},{provide:vs,useValue:"NoopAnimations"},...EI];function CI(){return Or("NgEagerAnimations"),[...wL]}var TL="@",IL=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=X(nb,{optional:!0});loadingSchedulerFn=X(SL,{optional:!0});_engine;constructor(t,i,r,o,a){this.doc=t,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-LDYPSZCV.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(t):i=t(),i.catch(r=>{throw new Le(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,i){let r=this.delegate.createRenderer(t,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new gv(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let d=a.createRenderer(t,i);o.use(d),this.scheduler?.notify(11)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(i){wl()};static \u0275prov=de({token:n,factory:n.\u0275fac})}return n})(),gv=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,i,r){this.delegate.insertBefore(e,t,i,r)}removeChild(e,t,i){this.delegate.removeChild(e,t,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,i)),this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,i)),this.delegate.listen(e,t,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(TL)}},SL=new le("");function wI(n="animations"){return Or("NgAsyncAnimations"),ft([{provide:Fr,useFactory:(e,t,i)=>new IL(e,t,i,n),deps:[at,Gr,$e]},{provide:vs,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var TI=OT({data:VT});var II={providers:[O1(()=>Vc(Oi.firebaseConfig)),iT(()=>lT()),by(yy()),TI,kb({eventCoalescing:!0}),wE(WT),My(Dy()),fI({maxAge:25}),CI(),yI({positionClass:"toast-top-right",timeOut:3e3,preventDuplicates:!0,closeButton:!0}),wI()]};var xL=n=>["/",n];function AL(n,e){if(n&1&&(c(0,"a",11),s(1),l()),n&2){let t=e.$implicit,i=ce(3);S("routerLink",xi(2,xL,i.formatRoute(t))),g(),z(" ",t," ")}}function RL(n,e){if(n&1){let t=Z();c(0,"div",4)(1,"h2",5)(2,"button",6),C("click",function(){let r=x(t).$implicit,o=ce(2);return A(o.toggleSubmenu(r))}),s(3),l()(),c(4,"div",7)(5,"div",8)(6,"div",9),O(7,AL,2,4,"a",10),l()()()()}if(n&2){let t=e.$implicit,i=e.index,r=ce(2);g(),Sb("id","heading",i,""),g(),vt("collapsed",r.openedSubmenu!==t),Kt("data-bs-target","#collapse"+i)("aria-controls","collapse"+i),g(),z(" ",t," "),g(),vt("show",r.openedSubmenu===t),S("id","collapse"+i),Kt("aria-labelledby","heading"+i),g(3),S("ngForOf",r.subMenus[r.selectedMenu][t])}}function PL(n,e){if(n&1&&(c(0,"div",1)(1,"div",2),O(2,RL,8,12,"div",3),l()()),n&2){let t=ce();g(2),S("ngForOf",t.menuItems[t.selectedMenu])}}var pp=class n{selectedMenu;openedSubmenu=null;menuItems={Angular:["data binding","Les routes","Les guards","Les cycles de vie","Services et Resolver","Les classes","Les styles","Les pipes","Control Flow","Les signaux","Input et Output","ng-content","ng-container - ng-template","Viewchild","Viewchildren","ContentChild","Les formulaires","Ngrx","Rxjs","Angulaire et api rest"],Laravel:["Controllers","Models","Routes"],"React.js":["Components","Hooks","State Management"],D\u00E9ploiement:["Deployement vers github","Deployement vers un hebergeur","Laravel"]};subMenus={Angular:{"data binding":["data binding"],"Les routes":["Les routes"],"Les guards":["C'est quoi un guard","Exemple de connexion"],"Les cycles de vie":["NgOnInit","NgOnChanges","ngAfterViewInit","ngOnDestroy"],"Services et Resolver":["Les services","Les resolvers"],"Les classes":["Liaison conditionnelle","Liaison une cha\xEEne de caract\xE8res","Liaison avec un tableau","Liaison avec un objet","Combinaison des approches"],"Les styles":["Liaison d'une propri\xE9t\xE9","Liaison avec unit\xE9s","Liaison multiple","Liaison \xE0 un objet","Approches en combinaison"],"Les pipes":["Les pipes"],"Control Flow":["@if","@for","@switch"],"Les signaux":["signal et computed","signal et effect","Les model","Les signaux et leurs m\xE9thodes"],"Input et Output":["les inputs","les outputs"],"ng-content":["projection avec ng-content"],"ng-container - ng-template":["ng-container - ng-template"],Viewchild:["Acc\xE9der \xE0 un \xE9l\xE9ment du DOM","Acc\xE9der \xE0 un composant enfant","ViewChild avec ng-template"],Viewchildren:["acc\xE9der \xE0 plusieurs \xE9l\xE9ments","Acc\xE9der aux composants enfants"],ContentChild:["Acc\xE9der aux \xE9l\xE9ments enfants d'un composant","Acc\xE9der \xE0 un composant enfant dans la projection de contenu"],"Les formulaires":["ngForm dans ngSubmit","Utiliser ViewChild pour ngForm","FormGroup et FormControl"],Ngrx:["les states et les reducers"],Rxjs:["Les observables","Interval","Ajax","Http","Les operateurs de cr\xE9ation","Les op\xE9rateurs de transformation"],"Angulaire et api rest":["Crud nodejs mongodb","Crud firebase","Crud json"]},Laravel:{Controllers:["Controller1","Controller2"],Models:["Model1","Model2"],Routes:["Route1","Route2"]},"React.js":{Components:["ComponentA","ComponentB"],Hooks:["Hook1","Hook2"],"State Management":["Redux","Context API"]},D\u00E9ploiement:{"Deployement vers github":["Deployement vers github"],"Deployement vers un hebergeur":["Angular avec api rest php","Laravel","React js"]}};toggleSubmenu(e){this.openedSubmenu=this.openedSubmenu===e?null:e}formatRoute(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/'/g,"-").replace(/\s+/g,"-")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-sidebar"]],inputs:{selectedMenu:"selectedMenu"},decls:1,vars:1,consts:[["class","sidebar",4,"ngIf"],[1,"sidebar"],["id","menuAccordion",1,"accordion"],["class","accordion-item",4,"ngFor","ngForOf"],[1,"accordion-item"],[1,"accordion-header",3,"id"],["type","button","data-bs-toggle","collapse","aria-expanded","false",1,"accordion-button",3,"click"],["data-bs-parent","#menuAccordion",1,"accordion-collapse","collapse",3,"id"],[1,"accordion-body"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"routerLink"]],template:function(t,i){t&1&&O(0,PL,3,1,"div",0),t&2&&S("ngIf",i.selectedMenu)},dependencies:[G,He,te,AE,Mi],styles:[".sidebar[_ngcontent-%COMP%]{background-color:#f8f9fa;border-right:1px solid #ddd}.accordion-header[_ngcontent-%COMP%]{margin-bottom:0}.accordion-button[_ngcontent-%COMP%]{background-color:#b39b18!important;color:#fff!important;padding:5px;font-size:14px}.accordion-button[_ngcontent-%COMP%]:hover{background-color:#d4b507!important}.accordion-button[_ngcontent-%COMP%]:not(.collapsed){background-color:#d4b507!important;border:none!important}.accordion-button[_ngcontent-%COMP%]:focus, .accordion-button[_ngcontent-%COMP%]:active{box-shadow:none!important;border:none!important;outline:none!important}.list-group-item[_ngcontent-%COMP%]{cursor:pointer;padding:8px 4px}.list-group-item[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.accordion-body[_ngcontent-%COMP%]{padding:0!important}"]})};var hp=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"footer","d-flex","flex-column","justify-content-center","align-items-center"]],template:function(t,i){t&1&&(c(0,"footer",0)(1,"p"),s(2,"\xA9 2024 Mon Application. Tous droits r\xE9serv\xE9s."),l()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#333;color:#fff;text-align:center;padding:15px;width:100%}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var kL=n=>({active:n});function DL(n,e){if(n&1){let t=Z();c(0,"li",2)(1,"a",5),C("click",function(){let r=x(t).$implicit,o=ce();return A(o.selectMenu(r))}),s(2),l()()}if(n&2){let t=e.$implicit,i=ce();g(),vt("active",t===i.activeMenu),g(),z(" ",t," ")}}var mp=class n{constructor(e,t){this.router=e;this.route=t}menuSelected=new gt;mainMenus=["Angular","Laravel","React.js","D\xE9ploiement"];activeMenu="Angular";ngOnInit(){this.detectActiveMenu()}selectMenu(e){this.activeMenu=e,this.menuSelected.emit(e),this.router.navigate([this.normalizeUrl(e)])}detectActiveMenu(){this.route.url.subscribe(()=>{let e=this.router.url.split("/")[1];if(!e){this.router.navigate(["/"]),this.activeMenu="Angular";return}let t=this.mainMenus.find(i=>this.normalizeUrl(i)===e);t&&(this.activeMenu=t)})}normalizeUrl(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/'/g,"-")}static \u0275fac=function(t){return new(t||n)(oe(Ge),oe(_t))};static \u0275cmp=j({type:n,selectors:[["app-headertest"]],outputs:{menuSelected:"menuSelected"},decls:6,vars:4,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"navbar-nav"],[1,"nav-item"],["routerLink","/",1,"nav-link",3,"ngClass"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-link",3,"click"]],template:function(t,i){t&1&&(c(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),s(4,"Home"),l()(),O(5,DL,3,3,"li",4),l()()),t&2&&(g(3),S("ngClass",xi(2,kL,i.router.url==="/")),g(2),S("ngForOf",i.mainMenus))},dependencies:[G,zr,He,Mi],styles:[".nav-link[_ngcontent-%COMP%]{cursor:pointer}.nav-link.active[_ngcontent-%COMP%]{color:#cbae0b!important}"]})};var fp=class n{selectedMenu="Angular";onMenuSelected(e){this.selectedMenu=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-root"]],decls:7,vars:1,consts:[[3,"menuSelected"],[1,"d-flex"],[1,"sidebar","col-lg-2","custom-col"],[3,"selectedMenu"],[1,"content","flex-grow-1","flex-wrap","col-lg-9"]],template:function(t,i){t&1&&(c(0,"app-headertest",0),C("menuSelected",function(o){return i.onMenuSelected(o)}),l(),c(1,"div",1)(2,"div",2),y(3,"app-sidebar",3),l(),c(4,"div",4),y(5,"router-outlet"),l()(),y(6,"app-footer")),t&2&&(g(3),S("selectedMenu",i.selectedMenu))},dependencies:[mp,pp,hp,om],styles:[".custom-col[_ngcontent-%COMP%]{width:20.8333%}h1[_ngcontent-%COMP%]{color:#f59c03}p[_ngcontent-%COMP%]{font-size:16px}.main-container[_ngcontent-%COMP%]{flex:1;min-height:calc(100vh - 110px)}.footer[_ngcontent-%COMP%]{height:60px}.main-container[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:10px;min-height:100vh}.content[_ngcontent-%COMP%]{flex-grow:1;padding:20px}"]})};Py(fp,II).catch(n=>console.error(n));
